import { after, test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()
const tmp = await fs.mkdtemp(path.join(os.tmpdir(), 'wcc-upstream-risk-'))
const output = path.join(tmp, 'proposal.json')
const run = spawnSync(process.execPath, ['tools/collect-upstream-risk.mjs', '--fixture', 'tools/fixtures/upstream-risk-metadata.json', '--out', output], { cwd: root, encoding: 'utf8' })
assert.equal(run.status, 0, run.stderr || run.stdout)
const proposal = JSON.parse(await fs.readFile(output, 'utf8'))

test('fixture candidates deduplicate across search terms and advisory databases', () => {
  assert.equal(proposal.coverage.githubIssues.uniqueCandidates, 1)
  assert.equal(proposal.coverage.advisories.uniqueCandidates, 1)
  assert.equal(proposal.candidates.length, 2)
  const advisory = proposal.candidates.find((item) => item.kind === 'upstream-advisory')
  assert.equal(advisory.id, 'GHSA-w46j-8hm6-h8mm')
  assert.deepEqual(advisory.sources.map((source) => source.source), ['github-advisory-database', 'osv', 'npm-advisory-bulk'])
})

test('upstream closed state or title similarity cannot auto-resolve a WCC assessment', () => {
  const issue = proposal.candidates.find((item) => item.id === 'GH-3937')
  assert.equal(issue.state, 'closed')
  assert.deepEqual(issue.triage, { status: 'open', reviewStatus: 'unreviewed', automaticResolutionAllowed: false })
  assert.match(proposal.policy.statusRule, /never imply that WCC code was replaced/)
})

test('coverage report identifies bounded keyword scope and the clean-room boundary', () => {
  assert.match(proposal.coverage.githubIssues.completeness, /not a complete review/)
  assert.equal(proposal.policy.inheritedBaseVersion, '4.7.0')
  assert.match(proposal.policy.boundary, /Do not retrieve ApexCharts 5\.0\.0\+ source, bundles, tarballs, or type files/)
  assert.equal(proposal.mode, 'fixture-test')
  assert.equal(proposal.coverage.githubIssues.truncated, true)
  assert.match(proposal.coverage.githubIssues.queries.find((q) => q.error).error, /rate limited/)
})

test('invalid fixture schema fails closed and produces no proposal', async () => {
  const invalidOutput = path.join(tmp, 'invalid.json')
  const invalid = spawnSync(process.execPath, ['tools/collect-upstream-risk.mjs', '--fixture', 'tools/fixtures/upstream-risk-invalid.json', '--out', invalidOutput], { cwd: root, encoding: 'utf8' })
  assert.notEqual(invalid.status, 0)
  await assert.rejects(fs.access(invalidOutput))
})

test('scheduled collection is read-only and only uploads a review artifact', async () => {
  const workflow = await fs.readFile('.github/workflows/upstream-risk-metadata.yml', 'utf8')
  assert.match(workflow, /workflow_dispatch:/)
  assert.match(workflow, /schedule:/)
  assert.match(workflow, /contents:\s*read/)
  assert.match(workflow, /actions\/upload-artifact@v4/)
  assert.doesNotMatch(workflow, /contents:\s*write|issues:\s*write|pull-requests:\s*write|git push|gh issue create|gh pr create/i)
})

after(async () => fs.rm(tmp, { recursive: true, force: true }))
