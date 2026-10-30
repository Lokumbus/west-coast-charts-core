#!/usr/bin/env node
/** Verify a reviewed, prepacked Core release archive without extracting or executing it. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const descriptorPath = path.resolve(root, process.argv[2] || 'release-archive.json')
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex')
const fail = message => { throw new Error(message) }
const descriptor = JSON.parse(fs.readFileSync(descriptorPath, 'utf8'))
assert.equal(descriptor.schema, 'wcc-reviewed-release-archive/1', 'Unexpected release archive descriptor schema')
assert.match(descriptor.version, /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/, 'Invalid release version')
assert.equal(descriptor.name, 'west-coast-charts', 'Unexpected package name')
assert.equal(descriptor.archive, `releases/${descriptor.name}-${descriptor.version}.tgz`, 'Unexpected archive path')
assert.match(descriptor.sha256, /^[a-f0-9]{64}$/, 'Invalid archive SHA-256')
assert(Number.isSafeInteger(descriptor.bytes) && descriptor.bytes > 0 && descriptor.bytes <= 256 * 1024 * 1024, 'Invalid or oversized archive byte count')

const archivePath = path.resolve(root, descriptor.archive)
assert(archivePath.startsWith(root + path.sep), 'Archive path escapes repository root')
const archive = fs.readFileSync(archivePath)
assert.equal(archive.length, descriptor.bytes, 'Descriptor archive size mismatch')
assert.equal(sha256(archive), descriptor.sha256, 'Descriptor archive SHA-256 mismatch')

const rootPackage = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
assert.equal(rootPackage.name, descriptor.name, 'Descriptor package name differs from repository root package')
assert.equal(rootPackage.version, descriptor.version, 'Descriptor version differs from repository root package')
const rootPackageBytes = fs.readFileSync(path.join(root, 'package.json'))

// Parse the immutable byte snapshot with Python's stdlib tarfile. Never extract or execute archive contents.
const parseTar = String.raw`
import sys, io, tarfile, json, hashlib, re
MAX_FILES=2000; MAX_FILE=64*1024*1024; MAX_TOTAL=256*1024*1024
raw=sys.stdin.buffer.read()
def check(ok,msg):
 if not ok: raise ValueError(msg)
def sha(b): return hashlib.sha256(b).hexdigest()
def rel(name):
 check(isinstance(name,str) and name.startswith('package/'),'Unexpected TAR root')
 p=name[len('package/'):]
 check(p and not p.startswith('/') and '\\' not in p and ':' not in p and '\x00' not in p,'Unsafe TAR path')
 parts=p.split('/')
 check(all(x not in ('','.','..') for x in parts),'Noncanonical or traversing TAR path')
 return p
files={}; total=0
with tarfile.open(fileobj=io.BytesIO(raw), mode='r:gz') as tf:
 count=0
 for m in tf:
  count+=1; check(count<=MAX_FILES,'TAR member count exceeds limit')
  check(m.isfile() and not m.issym() and not m.islnk(),'TAR contains link, directory, or nonregular member')
  check(m.size>=0 and m.size<=MAX_FILE,'TAR member exceeds size limit')
  p=rel(m.name)
  check(p not in files,'Duplicate TAR path')
  total+=m.size; check(total<=MAX_TOTAL,'TAR expanded payload exceeds total size limit')
  f=tf.extractfile(m); check(f is not None,'TAR member has no data')
  b=f.read(MAX_FILE+1); check(len(b)==m.size,'TAR member size mismatch')
  files[p]=b
check('INTEGRITY.json' in files and 'package.json' in files and 'PROVENANCE.json' in files,'Required package root file missing')
pkg=json.loads(files['package.json']); integ=json.loads(files['INTEGRITY.json']); prov=json.loads(files['PROVENANCE.json'])
check(pkg.get('name')==sys.argv[1] and pkg.get('version')==sys.argv[2],'Archive package identity differs from descriptor')
check(integ.get('version')==sys.argv[2] and prov.get('version')==sys.argv[2],'Archive integrity/provenance version mismatch')
check(prov.get('distribution')=='public-mit-core-distribution' and prov.get('license')=='MIT','Invalid Core provenance')
check(prov.get('sourceRepositoryIncluded') is False and prov.get('premiumRuntimeIncluded') is False,'Archive provenance does not describe Core-only payload')
wd=pkg.get('wccDistribution',{})
check(wd.get('kind')=='public-mit-core-distribution' and wd.get('sourceRepositoryIncluded') is False and wd.get('premiumRuntimeIncluded') is False,'Package metadata does not describe Core-only payload')
check(wd.get('sourceCommit')==prov.get('sourceCommit') and wd.get('sourceTag')==prov.get('sourceTag'),'Package/provenance source mismatch')
records=integ.get('files'); check(isinstance(records,list),'Invalid integrity file list')
seen=set(); verified=[]
for e in records:
 check(isinstance(e,dict) and isinstance(e.get('path'),str) and re.fullmatch(r'[a-f0-9]{64}',str(e.get('sha256',''))) is not None,'Invalid integrity record')
 p=e['path']; check(p not in seen,'Duplicate integrity path'); seen.add(p)
 check(p in files and p!='INTEGRITY.json','Integrity record references missing/self file')
 b=files[p]; check(sha(b)==e['sha256'],'Integrity SHA-256 mismatch: '+p)
 verified.append({'path':p,'bytes':len(b),'sha256':e['sha256']})
check(set(files)==seen|{'INTEGRITY.json'},'Archive payload differs from INTEGRITY paths plus INTEGRITY.json')
# PROVENANCE gives byte counts for imported/source files; verify every listed record too.
source_records=prov.get('files'); check(isinstance(source_records,list),'Invalid provenance file list')
source_seen=set()
for e in source_records:
 check(isinstance(e,dict) and isinstance(e.get('path'),str),'Invalid provenance record')
 p=e['path']; check(p not in source_seen and p in files,'Duplicate/missing provenance path'); source_seen.add(p)
 b=files[p]; check(e.get('bytes')==len(b) and e.get('sha256')==sha(b),'Provenance bytes/SHA mismatch: '+p)
check(set(files)-source_seen=={'package.json','README.md','example.html','PROVENANCE.json','INTEGRITY.json'},'Unexpected unprovenanced package files')
security=files.get('SECURITY.md'); check(security is not None,'SECURITY.md missing from archive')
print(json.dumps({'version':pkg['version'],'name':pkg['name'],'archiveFiles':len(files),'integrityFiles':len(verified),'integrityBytes':len(files['INTEGRITY.json']),'integritySha256':sha(files['INTEGRITY.json']),'securitySha256':sha(security),'securityBytes':len(security),'packageJsonSha256':sha(files['package.json']),'packageJsonBytes':len(files['package.json']),'sourceCommit':prov['sourceCommit']}))
`
const parsedText = execFileSync('python3', ['-c', parseTar, descriptor.name, descriptor.version], {
  input: archive,
  encoding: 'utf8',
  maxBuffer: 4 * 1024 * 1024,
  stdio: ['pipe', 'pipe', 'pipe'],
})
const parsed = JSON.parse(parsedText)
assert.equal(parsed.sourceCommit, descriptor.sourceCommit, 'Descriptor source commit differs from archive provenance')
assert.equal(parsed.packageJsonBytes, rootPackageBytes.length, 'Archived package.json size differs from repository root')
assert.equal(parsed.packageJsonSha256, sha256(rootPackageBytes), 'Archived package.json differs from repository root')
const rootSecurity = fs.readFileSync(path.join(root, 'SECURITY.md'))
assert.equal(parsed.securityBytes, rootSecurity.length, 'Archived SECURITY.md size differs from repository root')
assert.equal(parsed.securitySha256, sha256(rootSecurity), 'Archived SECURITY.md differs from repository root')
const rootIntegrity = fs.readFileSync(path.join(root, 'INTEGRITY.json'))
assert.equal(parsed.integrityBytes, rootIntegrity.length, 'Archived INTEGRITY.json size differs from repository root')
assert.equal(parsed.integritySha256, sha256(rootIntegrity), 'Archived INTEGRITY.json differs from repository root')
execFileSync(process.execPath, ['scripts/check-security-policy.mjs'], { cwd: root, stdio: 'pipe' })

console.log(`PASS ${path.basename(descriptor.archive)} sha256=${descriptor.sha256} bytes=${descriptor.bytes} package=${descriptor.name}@${descriptor.version} files=${parsed.archiveFiles}`)
