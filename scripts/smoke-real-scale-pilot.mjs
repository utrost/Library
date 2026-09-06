import { execFileSync } from 'node:child_process'
import { cpSync, mkdirSync, rmSync } from 'node:fs'
import { basename, extname, join } from 'node:path'
import { tmpdir } from 'node:os'

const count = Number(process.argv[2] || 20)
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const sourceRoots = (process.env.REAL_SCALE_SOURCES || '/mnt/compute/Nextcloud/Books::/mnt/compute/Nextcloud/Projects/Scanned books').split('::').filter(Boolean)
const allowedExtensions = (process.env.REAL_SCALE_EXTENSIONS || 'pdf,epub,cbz')
  .split(',')
  .map((ext) => ext.trim().toLowerCase().replace(/^\./, ''))
  .filter(Boolean)
const keepStage = process.env.REAL_SCALE_KEEP_STAGE === '1'
const rootName = `LibraryRealScale-${count}-${Date.now()}`
const rootPath = `/${rootName}`
const dataDir = `/var/www/html/data/${user}/files/${rootName}`
const hostStageDir = join(tmpdir(), rootName)
const tokenName = `hermes-library-real-scale-${count}-${Date.now()}`
const timings = {}

function now() { return Date.now() }
function sec(ms) { return (ms / 1000).toFixed(2) }
function docker(args, opts = {}) {
  return execFileSync('docker', ['exec', ...args], { encoding: 'utf8', timeout: opts.timeout || 600000, stdio: ['ignore', 'pipe', 'pipe'] })
}
function dockerRootShell(script, timeout = 600000) {
  return docker(['-u', 'root', container, 'sh', '-lc', script], { timeout })
}
function dockerWww(args, timeout = 600000) {
  return docker(['-u', 'www-data', container, ...args], { timeout })
}
function php(code, env = {}, timeout = 600000) {
  const envArgs = Object.entries(env).flatMap(([k, v]) => ['-e', `${k}=${v}`])
  return docker([...envArgs, '-u', 'www-data', container, 'php', '-d', 'memory_limit=1024M', '-r', code], { timeout })
}
function parseToken(output) {
  const patterns = [/app password is:\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]
  for (const pattern of patterns) {
    const match = output.match(pattern)
    if (match) return match[1]
  }
  const lines = output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  return lines.at(-1)?.split(/\s+/).at(-1)
}
function parseTokenIds(output) {
  return output.split(/\r?\n/).filter((line) => line.includes(tokenName)).map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1]).filter(Boolean)
}
async function fetchText(pathOrUrl, token) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const t0 = now()
  const response = await fetch(url, { headers: { Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` } })
  const text = await response.text()
  return { status: response.status, text, ms: now() - t0 }
}
function decodeInitialState(page) {
  const match = page.match(/id="initial-state-library-catalogue" value="([^"]+)"/)
  if (!match) throw new Error('missing initial state')
  const escaped = match[1].replaceAll('&quot;', '"').replaceAll('&#039;', "'").replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>')
  return JSON.parse(Buffer.from(escaped, 'base64').toString('utf8'))
}
function sourceManifest() {
  const py = String.raw`
import json, os, sys
roots = sys.argv[1:]
rows = []
for src_root in roots:
    for root, _dirs, files in os.walk(src_root):
        for name in files:
            ext = os.path.splitext(name)[1].lower()
            if ext not in {'.' + value for value in json.loads(os.environ['REAL_SCALE_EXTENSIONS_JSON'])}:
                continue
            path = os.path.join(root, name)
            try:
                st = os.stat(path)
            except OSError:
                continue
            rows.append({'path': path, 'size': st.st_size, 'ext': ext, 'sourceRoot': src_root})
rows.sort(key=lambda row: (row['size'], row['path'].lower()))
print(json.dumps(rows))
`
  return JSON.parse(execFileSync('python3', ['-c', py, ...sourceRoots], {
    encoding: 'utf8',
    timeout: 600000,
    env: { ...process.env, REAL_SCALE_EXTENSIONS_JSON: JSON.stringify(allowedExtensions) },
  }))
}
function safeName(index, sourcePath) {
  const base = basename(sourcePath).replace(/[^A-Za-z0-9._-]+/g, '_').slice(-120)
  const n = String(index + 1).padStart(5, '0')
  const ext = extname(base) || extname(sourcePath)
  return base.toLowerCase().endsWith(ext.toLowerCase()) ? `Real-${n}-${base}` : `Real-${n}-${base}${ext}`
}
function stageRealFiles(selected) {
  rmSync(hostStageDir, { recursive: true, force: true })
  mkdirSync(hostStageDir, { recursive: true })
  selected.forEach((row, index) => cpSync(row.path, join(hostStageDir, safeName(index, row.path))))
  dockerRootShell(`rm -rf ${dataDir}; mkdir -p ${dataDir}`)
  execFileSync('docker', ['cp', `${hostStageDir}/.`, `${container}:${dataDir}`], { encoding: 'utf8', timeout: 1800000 })
  dockerRootShell(`chown -R www-data:www-data ${dataDir}; find ${dataDir} -type f | wc -l`, 1800000)
}
function disableOtherRoots() {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$qb = $db->getQueryBuilder();
$res = $qb->select('id','enabled')->from('library_roots')->where($qb->expr()->eq('user_id', $qb->createNamedParameter(getenv('USER_ID'))))->executeQuery();
$rows = [];
while ($row = $res->fetch()) { $rows[] = ['id'=>(int)$row['id'], 'enabled'=>(int)$row['enabled']]; }
$res->closeCursor();
foreach ($rows as $row) {
  $q = $db->getQueryBuilder();
  $q->update('library_roots')->set('enabled', $q->createNamedParameter(0))->where($q->expr()->eq('id', $q->createNamedParameter($row['id'])))->executeStatement();
}
echo json_encode($rows);
`, { USER_ID: user })
}
function restoreRoots(snapshot) {
  php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$rows = json_decode(getenv('ROOT_SNAPSHOT'), true) ?: [];
foreach ($rows as $row) {
  $q = $db->getQueryBuilder();
  $q->update('library_roots')->set('enabled', $q->createNamedParameter((int)$row['enabled']))->where($q->expr()->eq('id', $q->createNamedParameter((int)$row['id'])))->executeStatement();
}
echo "roots_restored=" . count($rows) . "\n";
`, { ROOT_SNAPSHOT: snapshot })
}
function addRoot() {
  return php(`
require_once "/var/www/html/lib/base.php";
$svc = \\OC::$server->get(\\OCA\\Library\\Service\\RootService::class);
$root = $svc->saveRoot(getenv('USER_ID'), getenv('ROOT_PATH'), getenv('ROOT_LABEL'), true);
echo "root_id=" . $root['id'] . "\n";
`, { USER_ID: user, ROOT_PATH: rootPath, ROOT_LABEL: rootName })
}
function runLibraryScan() {
  return php(`
require_once "/var/www/html/lib/base.php";
$scanner = \\OC::$server->get(\\OCA\\Library\\Service\\LibraryScanner::class);
$result = $scanner->scan(getenv('USER_ID'), null, function(array $progress): void {});
echo "library_scan_result=" . json_encode($result) . "\n";
`, { USER_ID: user }, 1800000)
}
function dbCounts() {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$rootPath = getenv('ROOT_PATH');
$out = [];
$q = $db->getQueryBuilder();
$res = $q->select('id')->from('library_roots')->where($q->expr()->eq('user_id', $q->createNamedParameter(getenv('USER_ID'))))->andWhere($q->expr()->eq('path', $q->createNamedParameter($rootPath)))->executeQuery();
$root = $res->fetch(); $res->closeCursor();
$rootId = $root ? (int)$root['id'] : 0;
$out['rootId'] = $rootId;
foreach ([['library_files','files'], ['library_items','items']] as $pair) {
  [$table,$key] = $pair;
  $q = $db->getQueryBuilder();
  if ($table === 'library_files') {
    $r = $q->selectAlias($q->func()->count('*'), 'c')->from($table)->where($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->executeQuery();
  } else {
    $r = $q->selectAlias($q->func()->count('*'), 'c')->from('library_items','i')->innerJoin('i','library_files','f',$q->expr()->eq('i.library_file_id','f.id'))->where($q->expr()->eq('f.root_id',$q->createNamedParameter($rootId)))->executeQuery();
  }
  $row = $r->fetch(); $r->closeCursor(); $out[$key] = (int)$row['c'];
}
echo json_encode($out) . "\n";
`, { USER_ID: user, ROOT_PATH: rootPath })
}
function missingItemDiagnostics() {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$q = $db->getQueryBuilder();
$res = $q->select('id')->from('library_roots')->where($q->expr()->eq('user_id', $q->createNamedParameter(getenv('USER_ID'))))->andWhere($q->expr()->eq('path', $q->createNamedParameter(getenv('ROOT_PATH'))))->executeQuery();
$root = $res->fetch(); $res->closeCursor();
$rootId = $root ? (int)$root['id'] : 0;
$out = [];
if ($rootId > 0) {
  $q = $db->getQueryBuilder();
  $r = $q->select('f.id', 'f.file_id', 'f.cached_path', 'f.extension', 'f.mime_type', 'f.scan_status', 'f.scan_error')
    ->from('library_files', 'f')
    ->leftJoin('f', 'library_items', 'i', $q->expr()->eq('i.library_file_id', 'f.id'))
    ->where($q->expr()->eq('f.root_id', $q->createNamedParameter($rootId)))
    ->andWhere($q->expr()->isNull('i.id'))
    ->orderBy('f.cached_path', 'ASC')
    ->executeQuery();
  while ($row = $r->fetch()) { $out[] = $row; }
  $r->closeCursor();
}
echo json_encode($out) . "\n";
`, { USER_ID: user, ROOT_PATH: rootPath })
}
function cleanupDb() {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$q = $db->getQueryBuilder();
$res = $q->select('id')->from('library_roots')->where($q->expr()->eq('user_id', $q->createNamedParameter(getenv('USER_ID'))))->andWhere($q->expr()->eq('path', $q->createNamedParameter(getenv('ROOT_PATH'))))->executeQuery();
$row = $res->fetch(); $res->closeCursor();
$rootId = $row ? (int)$row['id'] : 0;
$deletedItems = 0; $deletedFiles = 0; $deletedRoots = 0;
if ($rootId > 0) {
  $q = $db->getQueryBuilder();
  $fr = $q->select('id')->from('library_files')->where($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->executeQuery();
  $fileIds = [];
  while ($file = $fr->fetch()) { $fileIds[] = (int)$file['id']; }
  $fr->closeCursor();
  foreach ($fileIds as $libraryFileId) {
    $q = $db->getQueryBuilder();
    $deletedItems += $q->delete('library_items')->where($q->expr()->eq('library_file_id', $q->createNamedParameter($libraryFileId)))->executeStatement();
  }
  $q = $db->getQueryBuilder();
  $deletedFiles = $q->delete('library_files')->where($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->executeStatement();
  $q = $db->getQueryBuilder();
  $deletedRoots = $q->delete('library_roots')->where($q->expr()->eq('id', $q->createNamedParameter($rootId)))->executeStatement();
}
echo "cleanup_items=$deletedItems\ncleanup_files=$deletedFiles\ncleanup_roots=$deletedRoots\n";
`, { USER_ID: user, ROOT_PATH: rootPath })
}

let token = ''
let rootSnapshot = '[]'
try {
  console.log(`stage_count=${count}`)
  console.log(`stage_root=${rootPath}`)
  console.log(`source_roots=${sourceRoots.join('::')}`)
  console.log(`allowed_extensions=${allowedExtensions.join(',')}`)
  console.log(`keep_stage=${keepStage}`)
  const manifest = sourceManifest()
  if (manifest.length < count) throw new Error(`only ${manifest.length} supported source files found for requested count ${count}`)
  const selected = manifest.slice(0, count)
  const totalBytes = selected.reduce((sum, row) => sum + row.size, 0)
  const formats = selected.reduce((acc, row) => ({ ...acc, [row.ext.slice(1)]: (acc[row.ext.slice(1)] || 0) + 1 }), {})
  console.log(`source_supported=${manifest.length}`)
  console.log(`selected_bytes=${totalBytes}`)
  console.log(`selected_formats=${JSON.stringify(formats)}`)

  const copyStart = now()
  stageRealFiles(selected)
  timings.copyMs = now() - copyStart
  console.log(`copied_files=${selected.length}`)
  console.log(`copy_seconds=${sec(timings.copyMs)}`)

  const ncStart = now()
  const ncScan = dockerWww(['php', 'occ', 'files:scan', '--path', `${user}/files/${rootName}`], 1800000)
  timings.nextcloudScanMs = now() - ncStart
  console.log(`nextcloud_files_scan_seconds=${sec(timings.nextcloudScanMs)}`)
  console.log(ncScan.trim().split('\n').slice(-4).join('\n'))

  rootSnapshot = disableOtherRoots()
  console.log(`disabled_root_snapshot=${rootSnapshot}`)
  process.stdout.write(addRoot())

  const libStart = now()
  process.stdout.write(runLibraryScan())
  timings.libraryScanMs = now() - libStart
  console.log(`library_scan_seconds=${sec(timings.libraryScanMs)}`)
  const countsText = dbCounts().trim()
  console.log(`db_counts=${countsText}`)
  const counts = JSON.parse(countsText)
  const missingItemRows = selected.length - counts.items
  console.log(`missing_item_rows=${missingItemRows}`)
  if (counts.files !== selected.length || counts.items !== selected.length) {
    console.log(`missing_item_diagnostics=${missingItemDiagnostics().trim()}`)
    throw new Error(`real sample indexing incomplete: files=${counts.files} items=${counts.items} expected=${selected.length}`)
  }

  token = parseToken(dockerWww(['php', 'occ', 'user:add-app-password', '--name', tokenName, user]))
  if (!token) throw new Error('temporary app password was not created')
  const pageCases = [[25,1], [100,1]]
  if (count > 25) pageCases.push([25,2])
  for (const [limit, page] of pageCases) {
    const http = await fetchText(`/apps/library/?shelf=${encodeURIComponent(rootName)}&limit=${limit}&page=${page}`, token)
    console.log(`page_${limit}_${page}_http=${http.status}`)
    console.log(`page_${limit}_${page}_seconds=${sec(http.ms)}`)
    const expectedFrom = count === 0 ? 0 : Math.min(count, ((page - 1) * limit) + 1)
    const expectedTo = Math.min(count, page * limit)
    const state = decodeInitialState(http.text)
    const pagination = state.cataloguePagination || {}
    const actualItems = (state.items || []).length
    const expectedItems = expectedTo >= expectedFrom ? Math.max(0, expectedTo - expectedFrom + 1) : 0
    const hasExpectedRange = pagination.from === expectedFrom && pagination.to === expectedTo && pagination.total === count && actualItems === expectedItems
    console.log(`page_${limit}_${page}_actual_range=${pagination.from}-${pagination.to}-of-${pagination.total}`)
    console.log(`page_${limit}_${page}_items=${actualItems}`)
    console.log(`page_${limit}_${page}_expected_range=${expectedFrom}-${expectedTo}-of-${count}`)
    console.log(`page_${limit}_${page}_has_expected_range=${hasExpectedRange}`)
    if (http.status !== 200 || !hasExpectedRange) throw new Error(`pagination verification failed for limit=${limit} page=${page}`)
  }
  console.log('real_scale_stage_ok=true')
} finally {
  if (token) {
    try {
      const tokenList = dockerWww(['php', 'occ', 'user:auth-tokens:list', user])
      for (const id of parseTokenIds(tokenList)) dockerWww(['php', 'occ', 'user:auth-tokens:delete', user, id])
      const remaining = dockerWww(['php', 'occ', 'user:auth-tokens:list', user]).includes(tokenName) ? 1 : 0
      console.log(`temp_token_remaining=${remaining}`)
    } catch (error) {
      console.log('temp_token_cleanup_error=true')
      console.error(error?.message || error)
    }
  }
  if (keepStage) {
    console.log(`kept_stage_root=${rootPath}`)
    console.log(`kept_stage_data_dir=${dataDir}`)
  } else {
    try { process.stdout.write(cleanupDb()) } catch (error) { console.log('cleanup_db_error=true'); console.error(error?.message || error) }
  }
  try { restoreRoots(rootSnapshot) } catch (error) { console.log('restore_roots_error=true'); console.error(error?.message || error) }
  if (!keepStage) {
    try {
      dockerRootShell(`rm -rf ${dataDir}`)
      dockerWww(['php', 'occ', 'files:scan', '--path', `${user}/files`], 1800000)
      rmSync(hostStageDir, { recursive: true, force: true })
      console.log('fixture_files_removed=true')
    } catch (error) {
      console.log('fixture_file_cleanup_error=true')
      console.error(error?.message || error)
    }
  } else {
    try {
      rmSync(hostStageDir, { recursive: true, force: true })
      console.log('host_stage_removed=true')
    } catch (error) {
      console.log('host_stage_cleanup_error=true')
      console.error(error?.message || error)
    }
  }
}
