import { execFileSync } from 'node:child_process'

const container = process.env.NC_CONTAINER || 'nextcloud'
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
for (const name of ['author_directory_fixture', 'author_large_merge_integration']) docker('cp', `tests/php/${name}.php`, `${container}:/tmp/${name}.php`)
let created = false
try {
  created = true
  docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', 'setup')
  const result = docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_large_merge_integration.php')
  if (!result.trim()) throw new Error('Large author merge produced no result')
  console.log(result.trim())
} finally {
  if (created) docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', 'cleanup')
  for (const name of ['author_directory_fixture', 'author_large_merge_integration']) docker('exec', container, 'rm', '-f', `/tmp/${name}.php`)
}
