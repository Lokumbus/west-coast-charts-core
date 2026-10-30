import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function assertCompleteCoverage(proposal) {
  const queries = proposal.coverage?.githubIssues?.queries
  const feeds = proposal.coverage?.advisories?.sources
  if (!Array.isArray(queries) || queries.length !== 6 || !Array.isArray(feeds) || feeds.length !== 3) throw Error('Upstream coverage contract is missing')
  if (queries.some(x => x.error || x.truncated || x.pagesFetched < 1) || feeds.some(x => x.status !== 'complete' || x.error || x.truncated)) throw Error('Upstream collection is incomplete; retain its proposal artifact and retry/review failed feeds')
  return true
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  assertCompleteCoverage(JSON.parse(fs.readFileSync(process.argv[2], 'utf8')))
  console.log('PASS: all declared upstream metadata queries and advisory feeds completed; applicability is still a human assessment.')
}
