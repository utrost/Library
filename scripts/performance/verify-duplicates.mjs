// Repeatable duplicate service/browser regression in an owned disposable account.
import { execFileSync, spawnSync } from 'node:child_process'
import { randomBytes } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'
const uid = 'library-perf-' + randomBytes(6).toString('hex')
const container = process.env.NC_CONTAINER || 'nextcloud'
const out = process.env.EVIDENCE_DIR || '/tmp/library-duplicate-verification'
const name = 'Library duplicates smoke ' + Date.now()
mkdirSync(out, { recursive: true, mode: 0o700 })
const docker = args => execFileSync('docker', args, { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 })
const account = action => docker(['exec', '-u', 'www-data', '-e', 'LIBRARY_BENCHMARK_USER=' + uid, container, 'php', '/tmp/library-performance-fixture-account.php', action])
const fixture = action => docker(['exec', '-u', 'www-data', '-e', 'LIBRARY_SMOKE_USER=' + uid, '-e', 'LIBRARY_SMOKE_NAME=' + name, container, 'php', '/tmp/library-duplicate-books-fixture.php', action])
let created = false
try {
  docker(['cp', 'scripts/performance/fixture-account.php', container + ':/tmp/library-performance-fixture-account.php'])
  account('create'); created = true
  docker(['cp', 'scripts/duplicate-books-fixture.php', container + ':/tmp/library-duplicate-books-fixture.php'])
  docker(['cp', 'tests/php/duplicate_integration.php', container + ':/tmp/library-duplicate-integration.php'])
  fixture('create')
  try {
    writeFileSync(out + '/integration.json', fixture('integration'))
    writeFileSync(out + '/unchanged.json', fixture('verify'))
  } finally { fixture('cleanup') }
  const result = spawnSync('node', ['scripts/smoke-duplicates.mjs'], {
    env: { ...process.env, NC_USER: uid, EVIDENCE_DIR: out + '/browser' }, stdio: 'inherit',
  })
  if (result.status !== 0) throw new Error('Duplicate browser smoke failed: ' + result.status)
} finally {
  if (created) writeFileSync(out + '/cleanup.json', account('delete'))
}
