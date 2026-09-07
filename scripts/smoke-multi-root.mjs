import { execFileSync } from 'node:child_process'

const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const stamp = Date.now()
const rootAlphaName = `LibraryMultiRootAlpha-${stamp}`
const rootBetaName = `LibraryMultiRootBeta-${stamp}`
const rootAlphaPath = `/${rootAlphaName}`
const rootBetaPath = `/${rootBetaName}`
const dataAlphaDir = `/var/www/html/data/${user}/files/${rootAlphaName}`
const dataBetaDir = `/var/www/html/data/${user}/files/${rootBetaName}`
const tokenName = `hermes-library-multi-root-${stamp}`

// Success markers asserted by tests and by humans reading smoke output:
// multi_root_all_scan_roots=2
// multi_root_catalogue_total=2
// multi_root_shelf_alpha_ok=true
// multi_root_shelf_beta_ok=true
// multi_root_scoped_scan_preserved_other_root=true
// multi_root_duplicate_cards=0
// multi_root_stage_ok=true
// temp_token_remaining=0
// fixture_files_removed=true
// Duplicate-card check concept: COUNT(DISTINCT i.id) should equal the item count for unique file IDs.

function docker(args, opts = {}) {
  return execFileSync('docker', ['exec', ...args], {
    encoding: 'utf8',
    timeout: opts.timeout || 600000,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}
function dockerRootShell(script, timeout = 600000) {
  return docker(['-u', 'root', container, 'sh', '-lc', script], { timeout })
}
function dockerWww(args, timeout = 600000) {
  return docker(['-u', 'www-data', container, ...args], { timeout })
}
function php(code, env = {}, timeout = 600000) {
  const envArgs = Object.entries(env).flatMap(([k, v]) => ['-e', `${k}=${v}`])
  return docker([...envArgs, '-u', 'www-data', container, 'php', '-d', 'memory_limit=512M', '-r', code], { timeout })
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
  const response = await fetch(url, {
    headers: { Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` },
  })
  const text = await response.text()
  return { status: response.status, text }
}
function decodeInitialState(page) {
  const match = page.match(/id="initial-state-library-catalogue" value="([^"]+)"/)
  if (!match) throw new Error('missing initial state')
  const escaped = match[1]
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
  return JSON.parse(Buffer.from(escaped, 'base64').toString('utf8'))
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
function addRoot(path, label) {
  return php(`
require_once "/var/www/html/lib/base.php";
$svc = \\OC::$server->get(\\OCA\\Library\\Service\\RootService::class);
$root = $svc->saveRoot(getenv('USER_ID'), getenv('ROOT_PATH'), getenv('ROOT_LABEL'), true);
echo $root['id'];
`, { USER_ID: user, ROOT_PATH: path, ROOT_LABEL: label }).trim()
}
function runLibraryScan(rootId = null) {
  if (rootId === null) {
    return php(`
require_once "/var/www/html/lib/base.php";
$scanner = \\OC::$server->get(\\OCA\\Library\\Service\\LibraryScanner::class);
$result = $scanner->scan(getenv('USER_ID'), null, function(array $progress): void {});
echo "library_scan_result=" . json_encode($result) . "\n";
`, { USER_ID: user })
  }
  return php(`
require_once "/var/www/html/lib/base.php";
$scanner = \\OC::$server->get(\\OCA\\Library\\Service\\LibraryScanner::class);
$result = $scanner->scan(getenv('USER_ID'), (int)getenv('ROOT_ID'), function(array $progress): void {});
echo "library_scoped_scan_result=" . json_encode($result) . "\n";
`, { USER_ID: user, ROOT_ID: String(rootId) })
}
function dbSummary(alphaRootId, betaRootId) {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$user = getenv('USER_ID');
$rootIds = [(int)getenv('ALPHA_ROOT_ID'), (int)getenv('BETA_ROOT_ID')];
$out = ['roots' => [], 'duplicateItemFileIds' => 0, 'catalogueTotal' => 0];
foreach ($rootIds as $rootId) {
  $q = $db->getQueryBuilder();
  $r = $q->selectAlias($q->func()->count('*'), 'c')->from('library_files')->where($q->expr()->eq('user_id', $q->createNamedParameter($user)))->andWhere($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->executeQuery();
  $files = (int)$r->fetch()['c']; $r->closeCursor();
  $q = $db->getQueryBuilder();
  $r = $q->selectAlias($q->func()->count('*'), 'c')->from('library_items', 'i')->innerJoin('i', 'library_files', 'f', $q->expr()->eq('i.library_file_id', 'f.id'))->where($q->expr()->eq('i.user_id', $q->createNamedParameter($user)))->andWhere($q->expr()->eq('f.root_id', $q->createNamedParameter($rootId)))->executeQuery();
  $items = (int)$r->fetch()['c']; $r->closeCursor();
  $out['roots'][(string)$rootId] = ['files' => $files, 'items' => $items];
}
$q = $db->getQueryBuilder();
$r = $q->selectAlias($q->func()->count('i.id'), 'c')->from('library_items', 'i')->innerJoin('i', 'library_files', 'f', $q->expr()->eq('i.library_file_id', 'f.id'))->where($q->expr()->eq('i.user_id', $q->createNamedParameter($user)))->andWhere($q->expr()->in('f.root_id', $q->createNamedParameter($rootIds, \\OCP\\DB\\QueryBuilder\\IQueryBuilder::PARAM_INT_ARRAY)))->executeQuery();
$out['catalogueTotal'] = (int)$r->fetch()['c']; $r->closeCursor();
$q = $db->getQueryBuilder();
$r = $q->select('f.file_id')->selectAlias($q->func()->count('i.id'), 'c')->from('library_items', 'i')->innerJoin('i', 'library_files', 'f', $q->expr()->eq('i.library_file_id', 'f.id'))->where($q->expr()->eq('i.user_id', $q->createNamedParameter($user)))->groupBy('f.file_id')->having($q->expr()->gt($q->func()->count('i.id'), $q->createNamedParameter(1)))->executeQuery();
while ($row = $r->fetch()) { $out['duplicateItemFileIds']++; }
$r->closeCursor();
echo json_encode($out) . "\n";
`, { USER_ID: user, ALPHA_ROOT_ID: String(alphaRootId), BETA_ROOT_ID: String(betaRootId) })
}
function rootStatuses(alphaRootId, betaRootId) {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$user = getenv('USER_ID');
$out = [];
foreach ([(int)getenv('ALPHA_ROOT_ID') => 'alpha', (int)getenv('BETA_ROOT_ID') => 'beta'] as $rootId => $name) {
  $q = $db->getQueryBuilder();
  $r = $q->select('scan_status')->selectAlias($q->func()->count('*'), 'c')->from('library_files')->where($q->expr()->eq('user_id', $q->createNamedParameter($user)))->andWhere($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->groupBy('scan_status')->executeQuery();
  $out[$name] = [];
  while ($row = $r->fetch()) { $out[$name][(string)$row['scan_status']] = (int)$row['c']; }
  $r->closeCursor();
}
echo json_encode($out) . "\n";
`, { USER_ID: user, ALPHA_ROOT_ID: String(alphaRootId), BETA_ROOT_ID: String(betaRootId) })
}
function cleanupDb(alphaRootId, betaRootId) {
  return php(`
require_once "/var/www/html/lib/base.php";
$db = \\OC::$server->get(\\OCP\\IDBConnection::class);
$user = getenv('USER_ID');
$rootIds = [(int)getenv('ALPHA_ROOT_ID'), (int)getenv('BETA_ROOT_ID')];
$deletedItems = 0; $deletedFiles = 0; $deletedRoots = 0;
foreach ($rootIds as $rootId) {
  if ($rootId <= 0) { continue; }
  $q = $db->getQueryBuilder();
  $fr = $q->select('id')->from('library_files')->where($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->andWhere($q->expr()->eq('user_id', $q->createNamedParameter($user)))->executeQuery();
  $fileIds = [];
  while ($file = $fr->fetch()) { $fileIds[] = (int)$file['id']; }
  $fr->closeCursor();
  foreach ($fileIds as $libraryFileId) {
    $q = $db->getQueryBuilder();
    $deletedItems += $q->delete('library_items')->where($q->expr()->eq('library_file_id', $q->createNamedParameter($libraryFileId)))->andWhere($q->expr()->eq('user_id', $q->createNamedParameter($user)))->executeStatement();
  }
  $q = $db->getQueryBuilder();
  $deletedFiles += $q->delete('library_files')->where($q->expr()->eq('root_id', $q->createNamedParameter($rootId)))->andWhere($q->expr()->eq('user_id', $q->createNamedParameter($user)))->executeStatement();
  $q = $db->getQueryBuilder();
  $deletedRoots += $q->delete('library_roots')->where($q->expr()->eq('id', $q->createNamedParameter($rootId)))->andWhere($q->expr()->eq('user_id', $q->createNamedParameter($user)))->executeStatement();
}
echo "cleanup_items=$deletedItems\ncleanup_files=$deletedFiles\ncleanup_roots=$deletedRoots\n";
`, { USER_ID: user, ALPHA_ROOT_ID: String(alphaRootId || 0), BETA_ROOT_ID: String(betaRootId || 0) })
}

let token = ''
let rootSnapshot = '[]'
let alphaRootId = 0
let betaRootId = 0
try {
  console.log(`multi_root_alpha=${rootAlphaPath}`)
  console.log(`multi_root_beta=${rootBetaPath}`)
  dockerRootShell(`rm -rf ${dataAlphaDir} ${dataBetaDir}; mkdir -p ${dataAlphaDir} ${dataBetaDir}; cat > ${dataAlphaDir}/Alpha.pdf <<'PDF'
%PDF-1.1
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] >> endobj
trailer << /Root 1 0 R >>
%%EOF
PDF
cat > ${dataBetaDir}/Beta.pdf <<'PDF'
%PDF-1.1
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] >> endobj
trailer << /Root 1 0 R >>
%%EOF
PDF
chown -R www-data:www-data ${dataAlphaDir} ${dataBetaDir}`)
  dockerWww(['php', 'occ', 'files:scan', '--path', `${user}/files/${rootAlphaName}`])
  dockerWww(['php', 'occ', 'files:scan', '--path', `${user}/files/${rootBetaName}`])

  rootSnapshot = disableOtherRoots()
  alphaRootId = Number(addRoot(rootAlphaPath, 'LibraryMultiRootAlpha'))
  betaRootId = Number(addRoot(rootBetaPath, 'LibraryMultiRootBeta'))
  console.log(`multi_root_alpha_root_id=${alphaRootId}`)
  console.log(`multi_root_beta_root_id=${betaRootId}`)

  const allScan = runLibraryScan()
  process.stdout.write(allScan)
  const allResult = JSON.parse(allScan.match(/library_scan_result=(\{.*\})/)?.[1] || '{}')
  console.log(`multi_root_all_scan_roots=${allResult.roots}`)

  const summary = JSON.parse(dbSummary(alphaRootId, betaRootId))
  console.log(`multi_root_catalogue_total=${summary.catalogueTotal}`)
  console.log(`multi_root_duplicate_cards=${summary.duplicateItemFileIds}`)
  if (allResult.roots !== 2 || summary.catalogueTotal !== 2 || summary.duplicateItemFileIds !== 0) {
    throw new Error(`unexpected multi-root summary ${JSON.stringify({ allResult, summary })}`)
  }

  token = parseToken(dockerWww(['php', 'occ', 'user:add-app-password', '--name', tokenName, user]))
  if (!token) throw new Error('temporary app password was not created')
  for (const [name, label] of [['alpha', 'LibraryMultiRootAlpha'], ['beta', 'LibraryMultiRootBeta']]) {
    const http = await fetchText(`/apps/library/?shelf=${encodeURIComponent(label)}&limit=25`, token)
    const state = decodeInitialState(http.text)
    const items = state.items || []
    const ok = http.status === 200 && items.length === 1 && String(items[0].shelf || '').includes(label)
    console.log(`multi_root_shelf_${name}_http=${http.status}`)
    console.log(`multi_root_shelf_${name}_items=${items.length}`)
    console.log(`multi_root_shelf_${name}_ok=${ok}`)
    if (!ok) throw new Error(`shelf ${name} did not resolve one item with label ${label}`)
  }

  dockerRootShell(`rm -f ${dataAlphaDir}/Alpha.pdf`)
  dockerWww(['php', 'occ', 'files:scan', '--path', `${user}/files/${rootAlphaName}`])
  process.stdout.write(runLibraryScan(alphaRootId))
  const statuses = JSON.parse(rootStatuses(alphaRootId, betaRootId))
  const scopedOk = (statuses.alpha.missing || 0) === 1 && (statuses.beta.indexed || 0) === 1
  console.log(`multi_root_after_scoped_scan_statuses=${JSON.stringify(statuses)}`)
  console.log(`multi_root_scoped_scan_preserved_other_root=${scopedOk}`)
  if (!scopedOk) throw new Error(`scoped scan affected unrelated root ${JSON.stringify(statuses)}`)

  console.log('multi_root_stage_ok=true')
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
  try { process.stdout.write(cleanupDb(alphaRootId, betaRootId)) } catch (error) { console.log('cleanup_db_error=true'); console.error(error?.message || error) }
  try { restoreRoots(rootSnapshot) } catch (error) { console.log('restore_roots_error=true'); console.error(error?.message || error) }
  try {
    dockerRootShell(`rm -rf ${dataAlphaDir} ${dataBetaDir}`)
    dockerWww(['php', 'occ', 'files:scan', '--path', `${user}/files`], 1800000)
    console.log('fixture_files_removed=true')
  } catch (error) {
    console.log('fixture_file_cleanup_error=true')
    console.error(error?.message || error)
  }
}
