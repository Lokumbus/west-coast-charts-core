import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync, spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const script = path.resolve('scripts/verify-release-archive.mjs')
const releaseDescriptor = JSON.parse(fs.readFileSync(path.join(root, 'release-archive.json'), 'utf8'))
const archiveName = releaseDescriptor.archive
const hash = b => createHash('sha256').update(b).digest('hex')
function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wcc-archive-verifier-'))
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }))
  fs.mkdirSync(path.join(dir, 'scripts'), { recursive: true })
  fs.mkdirSync(path.join(dir, 'releases'), { recursive: true })
  fs.copyFileSync(path.join(root, 'package.json'), path.join(dir, 'package.json'))
  fs.copyFileSync(path.join(root, 'SECURITY.md'), path.join(dir, 'SECURITY.md'))
  fs.copyFileSync(path.join(root, 'INTEGRITY.json'), path.join(dir, 'INTEGRITY.json'))
  fs.copyFileSync(path.join(root, 'scripts/check-security-policy.mjs'), path.join(dir, 'scripts/check-security-policy.mjs'))
  fs.copyFileSync(path.join(root, archiveName), path.join(dir, archiveName))
  fs.copyFileSync(path.join(root, 'release-archive.json'), path.join(dir, 'release-archive.json'))
  return dir
}
function run(dir) {
  return spawnSync(process.execPath, [script], { cwd: dir, encoding: 'utf8' })
}

test('verifies the exact prepacked archive and prints its pinned hash', t => {
  const dir = fixture(t)
  const result = run(dir)
  assert.equal(result.status, 0, result.stderr)
  const archiveFile = archiveName.split('/').at(-1)
  assert.ok(result.stdout.includes(`PASS ${archiveFile} sha256=${releaseDescriptor.sha256}`), result.stdout)
})

test('rejects archive tampering and missing archive files', t => {
  const dir = fixture(t), file = path.join(dir, archiveName)
  const original = fs.readFileSync(file)
  const changed = Buffer.from(original); changed[changed.length - 1] ^= 1; fs.writeFileSync(file, changed)
  assert.notEqual(run(dir).status, 0)
  fs.unlinkSync(file)
  assert.notEqual(run(dir).status, 0)
})

test('rejects a traversal member even when its descriptor hash and size match', t => {
  const dir = fixture(t), file = path.join(dir, archiveName)
  execFileSync('python3', ['-c', String.raw`import io,sys,tarfile
p=sys.argv[1]
with tarfile.open(p,'w:gz') as t:
 b=b'x';m=tarfile.TarInfo('package/../escape');m.size=len(b);t.addfile(m,io.BytesIO(b))` , file])
  const bytes = fs.readFileSync(file)
  const descriptor = JSON.parse(fs.readFileSync(path.join(dir, 'release-archive.json'), 'utf8'))
  descriptor.bytes = bytes.length; descriptor.sha256 = hash(bytes)
  fs.writeFileSync(path.join(dir, 'release-archive.json'), JSON.stringify(descriptor))
  const result = run(dir)
  assert.notEqual(result.status, 0)
  assert.match(result.stderr, /Unsafe TAR path|Noncanonical or traversing TAR path/)
})
