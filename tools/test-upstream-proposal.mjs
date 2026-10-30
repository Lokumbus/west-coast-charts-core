import test from 'node:test'
import assert from 'node:assert/strict'
import { assertCompleteCoverage } from './check-upstream-proposal.mjs'
const complete = () => ({ coverage: { githubIssues: { queries: Array.from({ length: 6 }, () => ({ pagesFetched: 1, truncated: false })) }, advisories: { sources: Array.from({ length: 3 }, () => ({ status: 'complete' })) } } })
test('complete collection permits triage without assigning applicability', () => assert.equal(assertCompleteCoverage(complete()), true))
test('failed, truncated or missing coverage cannot look like a green scheduled collection', () => {
  for (const alter of [x => { x.coverage.githubIssues.queries[0].error = 'HTTP 403' }, x => { x.coverage.githubIssues.queries[0].truncated = true }, x => { x.coverage.advisories.sources[0].status = 'unavailable' }, x => { x.coverage.advisories.sources.pop() }]) {
    const p = complete(); alter(p); assert.throws(() => assertCompleteCoverage(p))
  }
})
