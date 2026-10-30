#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const upstream = 'apexcharts/apexcharts.js'
const inheritedVersion = '4.7.0'
const issueTerms = ['security', 'vulnerability', 'CVE', 'XSS', 'injection', 'sanitize']
const args = process.argv.slice(2)
const option = (name, fallback) => {
  const i = args.indexOf(name)
  return i < 0 ? fallback : args[i + 1]
}
const fixturePath = option('--fixture', null)
const outputPath = path.resolve(root, option('--out', 'output/upstream-risk-proposal.json'))
const maxPages = Math.max(1, Math.min(10, Number(option('--max-pages', '10')) || 10))
const githubToken = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || localGithubToken()
const run = fixturePath ? await readFixture(fixturePath) : await collectLive()
await fs.mkdir(path.dirname(outputPath), { recursive: true })
await fs.writeFile(outputPath, `${JSON.stringify(run, null, 2)}\n`)
console.log(JSON.stringify({ output: outputPath, candidates: run.candidates.length, issueCandidates: run.coverage.githubIssues.uniqueCandidates, advisoryCandidates: run.coverage.advisories.uniqueCandidates, truncatedIssueQueries: run.coverage.githubIssues.queries.filter((q) => q.truncated).length, incompleteAdvisorySources: run.coverage.advisories.sources.filter((source) => source.status !== 'complete').map((source) => source.name) }))

async function readFixture(file) {
  const data = JSON.parse(await fs.readFile(path.resolve(file), 'utf8'))
  if (data.schemaVersion !== 1 || !Array.isArray(data.githubIssues) || !Array.isArray(data.githubAdvisories) || !Array.isArray(data.osvVulnerabilities) || !Array.isArray(data.npmAdvisories)) throw new Error('Fixture schema is invalid')
  return assemble(data, { fixture: true })
}

async function collectLive() {
  const request = async (url, init = {}) => {
    const response = await fetch(url, { ...init, headers: { 'user-agent': 'WestCoastCharts-upstream-risk-metadata/1.0', accept: 'application/vnd.github+json', ...(githubToken ? { authorization: `Bearer ${githubToken}` } : {}), ...(init.headers || {}) } })
    if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}: ${(await response.text()).slice(0, 240)}`)
    return { body: await response.json(), headers: response.headers }
  }
  const issueQueries = []
  const githubIssues = []
  for (const term of issueTerms) {
    const q = `repo:${upstream} is:issue ${term}`
    let expected = null
    let pagesFetched = 0
    let truncated = false
    let error = null
    for (let page = 1; page <= maxPages; page++) {
      try {
        const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&per_page=100&page=${page}`
        const { body } = await request(url)
        if (!Number.isInteger(body.total_count) || !Array.isArray(body.items)) throw new Error(`Unexpected GitHub issue-search response for ${term}`)
        expected ??= body.total_count
        githubIssues.push(...body.items.filter((item) => !item.pull_request).map(issueMetadata))
        pagesFetched++
        if (page * 100 >= expected || body.items.length === 0) break
        if (page === maxPages) truncated = true
      } catch (caught) {
        error = String(caught.message || caught)
        truncated = true
        break
      }
    }
    issueQueries.push({ query: q, totalCount: expected, pagesFetched, pageSize: 100, truncated, ...(error ? { error } : {}) })
  }
  const [github, osvResult, npmResult] = await Promise.all([
    safeSource(async () => {
      let url = 'https://api.github.com/advisories?ecosystem=npm&affects=apexcharts&per_page=100'
      const records = []
      let pagesFetched = 0
      while (url && pagesFetched < maxPages) {
        const { body, headers } = await request(url)
        if (!Array.isArray(body)) fail('GitHub advisory response was not an array')
        records.push(...body.map(githubAdvisoryMetadata))
        pagesFetched++
        url = nextLink(headers.get('link'))
      }
      return { records, pagesFetched, truncated: Boolean(url) }
    }),
    safeSource(async () => {
      let pageToken = null
      const vulns = []
      let pagesFetched = 0
      while (pagesFetched < maxPages) {
        const body = JSON.stringify({ package: { name: 'apexcharts', ecosystem: 'npm' }, ...(pageToken ? { page_token: pageToken } : {}) })
        const { body: response } = await request('https://api.osv.dev/v1/query', { method: 'POST', headers: { 'content-type': 'application/json' }, body })
        if (!Array.isArray(response.vulns)) fail('OSV response has no vulnerabilities array')
        vulns.push(...response.vulns.map(osvMetadata))
        pagesFetched++
        pageToken = response.next_page_token || null
        if (!pageToken) break
      }
      return { records: vulns, pagesFetched, truncated: Boolean(pageToken) }
    }),
    safeSource(() => request('https://registry.npmjs.org/-/npm/v1/security/advisories/bulk', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ apexcharts: [inheritedVersion] }) }).then(({ body }) => body.apexcharts === undefined ? [] : Array.isArray(body.apexcharts) ? body.apexcharts.map(npmMetadata) : fail('npm advisory response was not an apexcharts array'))),
  ])
  return assemble({ githubIssues, githubAdvisories: github.data?.records || [], osvVulnerabilities: osvResult.data?.records || [], npmAdvisories: npmResult.data, issueQueries, advisorySources: { github, osv: osvResult, npm: npmResult } }, { fixture: false })
}

function nextLink(value) { return value?.split(',').map((part) => part.match(/<([^>]+)>;\s*rel="next"/)?.[1]).find(Boolean) || null }

async function safeSource(load) { try { return { status: 'complete', data: await load() } } catch (caught) { return { status: 'unavailable', data: [], error: String(caught.message || caught) } } }

function issueMetadata(item) {
  return { source: 'github-issues', id: `GH-${item.number}`, number: item.number, title: item.title, state: item.state, url: item.html_url, createdAt: item.created_at, updatedAt: item.updated_at, labels: (item.labels || []).map((label) => typeof label === 'string' ? label : label.name) }
}
function githubAdvisoryMetadata(item) {
  return { source: 'github-advisory-database', id: item.ghsa_id, cve: item.cve_id || null, summary: item.summary, severity: item.severity, url: item.html_url, publishedAt: item.published_at, updatedAt: item.updated_at, affected: (item.vulnerabilities || []).flatMap((v) => (v.package?.name === 'apexcharts' ? [{ ecosystem: v.package.ecosystem, package: v.package.name, vulnerableVersionRange: v.vulnerable_version_range, firstPatchedVersion: v.first_patched_version?.identifier || null }] : [])) }
}
function osvMetadata(item) {
  return { source: 'osv', id: item.id, aliases: item.aliases || [], summary: item.summary || '', publishedAt: item.published || null, updatedAt: item.modified || null, affected: (item.affected || []).flatMap((a) => a.package?.name === 'apexcharts' && a.package?.ecosystem === 'npm' ? [{ ecosystem: a.package.ecosystem, package: a.package.name, ranges: (a.ranges || []).map((r) => ({ type: r.type, events: r.events })) }] : []), references: (item.references || []).filter((r) => r.type === 'ADVISORY').map((r) => r.url) }
}
function npmMetadata(item) {
  return { source: 'npm-advisory-bulk', id: `npm-${item.id}`, summary: item.title, severity: item.severity, url: item.url, vulnerableVersionRange: item.vulnerable_versions, cwe: item.cwe || [], cvss: item.cvss || null }
}
function fail(message) { throw new Error(message) }

function assemble(data, { fixture }) {
  const issues = uniqueBy(data.githubIssues, (i) => i.url)
  const advisories = groupAdvisories([...data.githubAdvisories, ...data.osvVulnerabilities, ...data.npmAdvisories])
  const candidates = [
    ...issues.map((record) => ({ kind: 'upstream-issue', ...record, triage: { status: 'open', reviewStatus: 'unreviewed', automaticResolutionAllowed: false } })),
    ...advisories.map((record) => ({ kind: 'upstream-advisory', ...record, triage: { status: 'open', reviewStatus: 'unreviewed', automaticResolutionAllowed: false } })),
  ].sort((a, b) => a.kind.localeCompare(b.kind) || String(a.id).localeCompare(String(b.id)))
  const queryRows = data.issueQueries || issueTerms.map((term) => ({ query: `repo:${upstream} is:issue ${term}`, totalCount: null, pagesFetched: 0, pageSize: 100, truncated: false }))
  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    mode: fixture ? 'fixture-test' : 'live-metadata-only',
    authentication: fixture ? 'not-applicable' : githubToken ? 'GitHub token available; read-only GETs only' : 'unauthenticated public API',
    policy: { upstreamRepository: upstream, inheritedBaseVersion: inheritedVersion, notice: 'shared/wcc/NOTICE', boundary: 'Public issue/advisory metadata only. Do not retrieve ApexCharts 5.0.0+ source, bundles, tarballs, or type files.', statusRule: 'Every discovered candidate remains open and unreviewed until a human assessment records evidence. Similar titles or upstream changes never imply that WCC code was replaced or that an issue is fixed.' },
    coverage: {
      githubIssues: { api: 'https://api.github.com/search/issues', queryStrategy: 'Separate GitHub search queries for security, vulnerability, CVE, XSS, injection, and sanitize; issue records only (PRs excluded), 100 per page, maxPages per query, deduplicated by issue URL.', queries: queryRows, uniqueCandidates: issues.length, truncated: queryRows.some((q) => q.truncated), completeness: 'Keyword-scoped public issue metadata, not a complete review of every upstream issue or issue body.' },
      advisories: { sources: [{ name: 'GitHub Advisory Database', endpoint: 'https://api.github.com/advisories?ecosystem=npm&affects=apexcharts&per_page=100', ...sourceStatus(data.advisorySources?.github) }, { name: 'OSV', endpoint: 'https://api.osv.dev/v1/query', query: 'npm/apexcharts', ...sourceStatus(data.advisorySources?.osv) }, { name: 'npm security advisories bulk endpoint', endpoint: 'https://registry.npmjs.org/-/npm/v1/security/advisories/bulk', query: `apexcharts@${inheritedVersion}`, ...sourceStatus(data.advisorySources?.npm) }], uniqueCandidates: advisories.length, completeness: `Advisory metadata for npm/apexcharts and npm's bulk result for upstream ${inheritedVersion}. GitHub and OSV pagination is followed up to maxPages and reported as truncated; absence from any one response is not proof of non-affected status.` },
    },
    candidates,
  }
}
function uniqueBy(items, keyOf) { return [...new Map(items.map((item) => [keyOf(item), item])).values()] }
function sourceStatus(result) {
  if (!result) return { status: 'fixture' }
  const data = result.data
  return { status: result.status === 'complete' && data?.truncated ? 'truncated' : result.status, ...(Number.isInteger(data?.pagesFetched) ? { pagesFetched: data.pagesFetched } : {}), ...(data?.truncated ? { truncated: true } : {}), ...(result.error ? { error: result.error } : {}) }
}
function localGithubToken() { try { return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() } catch { return '' } }
function groupAdvisories(items) {
  const grouped = new Map()
  for (const record of items) {
    const text = [record.id, ...(record.aliases || []), record.url, ...(record.references || [])].join(' ')
    const canonical = text.match(/GHSA-[a-z0-9-]+/i)?.[0] || text.match(/CVE-\d{4}-\d+/i)?.[0] || `${record.source}:${record.id}`
    if (!grouped.has(canonical)) grouped.set(canonical, { id: canonical, aliases: [], sources: [] })
    const row = grouped.get(canonical)
    row.sources.push(record)
    row.aliases = [...new Set([...row.aliases, ...(record.aliases || []), ...(record.cve ? [record.cve] : [])])]
  }
  return [...grouped.values()].map((row) => ({ ...row, summary: row.sources.find((s) => s.summary)?.summary || row.sources.find((s) => s.title)?.title || '', severity: row.sources.find((s) => s.severity)?.severity || null, url: row.sources.find((s) => s.url)?.url || null }))
}
