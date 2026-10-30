import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const policyPath = path.join(root, 'SECURITY.md')
const policy = fs.readFileSync(policyPath, 'utf8')

assert.match(policy, /\b1\.1\.x\b/, 'The supported stable release line must be stated')
assert.match(policy, /service@pekagi\.io/, 'A working security contact must be present')
assert.match(policy, /https:\/\/github\.com\/Lokumbus\/west-coast-charts-core\/security\/advisories\/new/, 'Link to private vulnerability reporting')
assert.match(policy, /human review and approval/i, 'Security advisories and notifications require human review')
assert.match(policy, /human maintainer reviews and explicitly approves/i, 'Agent-prepared publication requires a human maintainer')

for (const placeholder of [
  /to be filled in/i,
  /once the public repository exists/i,
  /WestCoastCharts\.version/,
  /SECURITY-FIXES\.md/,
  /sbom\/west-coast-charts\.cdx\.json/,
]) {
  assert.doesNotMatch(policy, placeholder, `Security policy contains a stale placeholder/reference: ${placeholder}`)
}

for (const [, target] of policy.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
  assert.match(target, /^(?:https?:\/\/|mailto:)/, `Security policy link must use a public URL: ${target}`)
}

console.log('Security policy contact, reporting route, support line, human review, and links are valid.')
