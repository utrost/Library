import { execFileSync } from 'node:child_process'
import { performance } from 'node:perf_hooks'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `library-catalogue-performance-${Date.now()}`
const fastBudgetSeconds = Number(process.env.LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS || '1.0')
const measureHydration = process.env.LIBRARY_CATALOGUE_MEASURE_HYDRATE === '1'

const FILTER_VALUES = {
  scannerConflicts: '1', starred: '1', needsMetadata: '1', coverReview: 'placeholder',
  noCreator: '1', noPublication: '1', noDate: '1', titleFromFilename: '1',
  noDescription: '1', unsupportedContainer: '1', weakMetadata: 'filename', unreviewedImports: '1',
}
const FILTERS = [
  'q', 'type', 'publisher', 'publication', 'year', 'creator', 'format', 'tag', 'shelf', 'folder',
  'status', 'workflowStatus', 'subject', 'classification', 'scannerConflicts', 'starred',
  'needsMetadata', 'coverReview', 'noCreator', 'noPublication', 'noDate', 'titleFromFilename',
  'noDescription', 'unsupportedContainer', 'weakMetadata', 'unreviewedImports',
]

if (!Number.isFinite(fastBudgetSeconds) || fastBudgetSeconds <= 0) {
  throw new Error('LIBRARY_CATALOGUE_FAST_BUDGET_SECONDS must be a positive number')
}

function occ(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
    encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function parseToken(output) {
  for (const pattern of [/app password is:\s*(\S+)/i, /app password:\s*\n\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]) {
    const match = output.match(pattern)
    if (match) return match[1]
  }
  return output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).at(-1)?.split(/\s+/).at(-1)
}

function tokenIds(output) {
  return output.split(/\r?\n/).filter((line) => line.includes(tokenName))
    .map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1]).filter(Boolean)
}

function metric(name, value) { console.log(`${name}=${value}`) }
function labelKey(key) { return key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`) }
function filterMetricLabel(filter, key) {
  return filter === 'publisher' ? 'catalogue_publisher_exact_fast' : `catalogue_filter_${key}_fast`
}

function catalogueApiPath(path) {
  if (String(path).startsWith('?')) return `/apps/library/catalogue${path}`
  const url = new URL(path, upstream)
  if (url.pathname === '/' || url.pathname === '/apps/library/') url.pathname = '/apps/library/catalogue'
  return `${url.pathname}${url.search}`
}

function discoverFilterValues() {
  const php = String.raw`
$CONFIG = [];
require '/var/www/html/config/config.php';
$host = (string)($CONFIG['dbhost'] ?? '');
$port = null;
if (preg_match('/^(.+):(\d+)$/', $host, $m)) { $host = $m[1]; $port = $m[2]; }
$dsn = 'mysql:host=' . $host . ';dbname=' . $CONFIG['dbname'] . ';charset=utf8mb4' . ($port ? ';port=' . $port : '');
$pdo = new PDO($dsn, $CONFIG['dbuser'], $CONFIG['dbpassword'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
$p = (string)($CONFIG['dbtableprefix'] ?? 'oc_'); $u = $argv[1];
$one = function ($sql, $params = []) use ($pdo, $u) { $s = $pdo->prepare($sql); $s->execute(array_merge([$u], $params)); $v = $s->fetchColumn(); return $v === false ? '' : trim((string)$v); };
$i = $p . 'library_items'; $f = $p . 'library_files'; $r = $p . 'library_roots'; $x = $p . 'library_item_facets';
$base = " FROM $i i JOIN $f f ON f.id=i.library_file_id JOIN $r r ON r.id=f.root_id WHERE i.user_id=? AND f.scan_status<>'sidecar' ";
$out = [];
$out['q'] = $one("SELECT i.title $base AND i.title<>'' LIMIT 1");
$out['type'] = $one("SELECT i.publication_type $base AND i.publication_type<>'' LIMIT 1");
$out['publisher'] = $one("SELECT i.publisher $base AND i.publisher IS NOT NULL AND i.publisher<>'' LIMIT 1");
$out['publication'] = $one("SELECT i.publication $base AND i.publication IS NOT NULL AND i.publication<>'' LIMIT 1");
$out['year'] = substr($one("SELECT i.publication_date $base AND i.publication_date REGEXP '^[0-9]{4}' LIMIT 1"), 0, 4);
$out['creator'] = $one("SELECT i.creators $base AND i.creators IS NOT NULL AND i.creators<>'' LIMIT 1");
$out['format'] = $one("SELECT LOWER(f.extension) $base AND f.extension IS NOT NULL AND f.extension<>'' LIMIT 1");
$out['shelf'] = $one("SELECT COALESCE(NULLIF(r.label,''),r.path) $base LIMIT 1");
$out['folder'] = $one("SELECT CASE WHEN LOCATE('/',f.cached_path)>0 THEN LEFT(f.cached_path,LENGTH(f.cached_path)-LOCATE('/',REVERSE(f.cached_path))) ELSE f.cached_path END $base AND f.cached_path<>'' LIMIT 1");
$out['status'] = $one("SELECT f.scan_status $base AND f.scan_status<>'' LIMIT 1");
$out['workflowStatus'] = $one("SELECT i.workflow_status $base AND i.workflow_status IS NOT NULL AND i.workflow_status<>'' LIMIT 1");
$out['subject'] = $one("SELECT x.facet_value FROM $x x WHERE x.user_id=? AND x.facet_type='subject' AND x.facet_value<>'' LIMIT 1");
$out['classification'] = $one("SELECT x.facet_value FROM $x x WHERE x.user_id=? AND x.facet_type='classification' AND x.facet_value<>'' LIMIT 1");
$out['tag'] = $one("SELECT t.name FROM {$p}systemtag_object_mapping m JOIN {$p}systemtag t ON t.id=m.systemtagid JOIN $f f ON f.file_id=CAST(m.objectid AS UNSIGNED) WHERE f.user_id=? AND m.objecttype='files' LIMIT 1");
$checks = [
 'starred'=>"i.starred=1", 'needsMetadata'=>"f.scan_status='metadata_error' OR IFNULL(i.creators,'')='' OR IFNULL(i.publication,'')='' OR IFNULL(i.publication_date,'')='' OR i.metadata_source='filename-pattern'",
 'coverReview'=>"IFNULL(i.cover_override_url,'')='' AND (f.scan_status='metadata_error' OR LOWER(f.extension) NOT IN ('pdf','epub','cbz'))",
 'noCreator'=>"IFNULL(i.creators,'')=''", 'noPublication'=>"IFNULL(i.publication,'')=''", 'noDate'=>"IFNULL(i.publication_date,'')=''",
 'titleFromFilename'=>"i.metadata_source='filename-pattern' OR i.field_sources LIKE '%\"title\":\"filename-pattern\"%' OR i.field_sources LIKE '%\"title\":\"filename\"%'",
 'noDescription'=>"IFNULL(i.description,'')=''", 'unsupportedContainer'=>"LOWER(f.extension) IN ('7z','rar','cbr','cb7')",
 'weakMetadata'=>"i.metadata_source='filename-pattern' OR i.field_sources LIKE '%filename-pattern%'",
 'unreviewedImports'=>"i.metadata_source<>'user' AND i.user_edited=0", 'scannerConflicts'=>"i.field_values IS NOT NULL AND i.field_values NOT IN ('','[]','{}')"
];
foreach ($checks as $key=>$where) { if ($one("SELECT i.id $base AND ($where) LIMIT 1") !== '') $out[$key] = true; }
echo json_encode($out, JSON_THROW_ON_ERROR);
`
  const output = execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', '-r', php, user], {
    encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  })
  return JSON.parse(output)
}

function authHeaders(token, accept = 'application/json') {
  return { Accept: accept, Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` }
}

async function timeCatalogue(label, path, token, enforceBudget = true) {
  const url = new URL(path, upstream)
  if (enforceBudget && url.searchParams.get('hydrate') === '1') throw new Error(`${label} fast path must not use hydrate=1`)
  const started = performance.now()
  const response = await fetch(url, { headers: authHeaders(token) })
  const elapsedSeconds = (performance.now() - started) / 1000
  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('json') ? await response.json().catch(() => null) : null
  metric(`${label}_http_status`, response.status)
  metric(`${label}_elapsed_seconds`, elapsedSeconds.toFixed(3))
  metric(`${label}_facets_deferred`, payload?.facetsDeferred === true)
  if (response.status !== 200 || payload === null || !contentType.includes('json')) throw new Error(`${label} returned an invalid catalogue response`)
  if (enforceBudget && payload.facetsDeferred !== true) throw new Error(`${label} recomputed deferred catalogue data`)
  if (enforceBudget && elapsedSeconds > fastBudgetSeconds) failures.push(`${label} exceeded ${fastBudgetSeconds.toFixed(3)}s budget`)
  return payload
}

async function timeDetails(path, token) {
  const started = performance.now()
  const response = await fetch(new URL(path, upstream), { headers: authHeaders(token, 'text/html') })
  const elapsedSeconds = (performance.now() - started) / 1000
  const html = await response.text()
  metric('catalogue_details_http_status', response.status)
  metric('catalogue_details_elapsed_seconds', elapsedSeconds.toFixed(3))
  metric('catalogue_details_marker', html.includes('library-item-detail'))
  if (response.status !== 200 || !html.includes('library-item-detail')) throw new Error('catalogue details page was invalid')
  if (elapsedSeconds > fastBudgetSeconds) failures.push(`catalogue details page exceeded ${fastBudgetSeconds.toFixed(3)}s budget`)
}

async function timeFolderSuggestions(folder, token) {
  const url = new URL('/apps/library/catalogue/folder-suggestions', upstream)
  url.searchParams.set('folderSearch', folder.slice(0, Math.max(3, Math.min(folder.length, 24))))
  const started = performance.now()
  const response = await fetch(url, { headers: authHeaders(token) })
  const elapsedSeconds = (performance.now() - started) / 1000
  const payload = await response.json().catch(() => null)
  metric('catalogue_folder_suggestions_fast_http_status', response.status)
  metric('catalogue_folder_suggestions_fast_elapsed_seconds', elapsedSeconds.toFixed(3))
  metric('catalogue_folder_suggestions_fast_count', Array.isArray(payload?.folders) ? payload.folders.length : -1)
  if (response.status !== 200 || !Array.isArray(payload?.folders)) throw new Error('catalogue folder suggestions returned an invalid response')
  if (elapsedSeconds > fastBudgetSeconds) failures.push(`catalogue folder suggestions exceeded ${fastBudgetSeconds.toFixed(3)}s budget`)
}

const failures = []
let token = ''
let smokePassed = false
try {
  const attempt = async (work) => {
    try { return await work() }
    catch (error) {
      failures.push(error instanceof Error ? error.message : String(error))
      return null
    }
  }
  metric('catalogue_fast_budget_seconds', fastBudgetSeconds.toFixed(3))
  token = parseToken(occ(['user:add-app-password', '--no-interaction', '--name', tokenName, user])) || ''
  if (!token) throw new Error('temporary app password was not created')

  const discovered = discoverFilterValues()
  metric('catalogue_filter_discovery', 'live_db')
  const unfiltered = await timeCatalogue('catalogue_unfiltered_fast', '/apps/library/catalogue?limit=25', token)
  if (String(discovered.folder || '').length >= 3) await attempt(() => timeFolderSuggestions(String(discovered.folder), token))
  else metric('catalogue_folder_suggestions_fast_skipped_reason', JSON.stringify('no representative live folder'))

  for (const filter of FILTERS) {
    const key = labelKey(filter)
    const rawValue = discovered[filter]
    const value = rawValue === true ? FILTER_VALUES[filter] : String(rawValue || '').trim()
    if (!value) {
      metric(`catalogue_filter_${key}_skipped_reason`, JSON.stringify('no representative live value'))
      continue
    }
    const filteredUrl = new URL('/apps/library/catalogue?limit=25', upstream)
    filteredUrl.searchParams.set(filter, value)
    const payload = await attempt(() => timeCatalogue(filterMetricLabel(filter, key), filteredUrl, token))
    if (payload === null) continue
    if ((payload.cataloguePagination?.total || 0) < 1) {
      metric(`catalogue_filter_${key}_skipped_reason`, JSON.stringify('no representative live value'))
      continue
    }
    if (String(payload.activeFilters?.[filter] || '') !== value) failures.push(`${filter} was not retained in activeFilters`)

    filteredUrl.searchParams.delete(filter)
    const removed = await attempt(() => timeCatalogue(`catalogue_filter_${key}_removed_fast`, filteredUrl, token))
    if (removed !== null && String(removed.activeFilters?.[filter] || '') !== '') failures.push(`${filter} remained active after removal`)
  }

  const pageOne = await attempt(() => timeCatalogue('catalogue_pagination_page_1_fast', '/apps/library/catalogue?limit=1&page=1', token))
  if (pageOne?.cataloguePagination?.nextUrl) {
    const pageTwo = await attempt(() => timeCatalogue('catalogue_pagination_page_2_fast', catalogueApiPath(pageOne.cataloguePagination.nextUrl), token))
    if (pageTwo !== null && Number(pageTwo.cataloguePagination?.page) !== 2) failures.push('catalogue nextUrl did not open page 2')
    if (pageTwo !== null && !pageTwo.cataloguePagination?.previousUrl) failures.push('catalogue page 2 did not provide previousUrl')
    if (pageTwo?.cataloguePagination?.previousUrl) {
      const previous = await attempt(() => timeCatalogue('catalogue_pagination_previous_fast', catalogueApiPath(pageTwo.cataloguePagination.previousUrl), token))
      if (previous !== null && Number(previous.cataloguePagination?.page) !== 1) failures.push('catalogue previousUrl did not remove page 2')
    }
  } else if (pageOne !== null) {
    metric('catalogue_pagination_page_2_fast_skipped_reason', JSON.stringify('fewer than two live catalogue items'))
  }

  const detailsUrl = unfiltered.items?.find((item) => item.detailsUrl)?.detailsUrl
  if (detailsUrl) await attempt(() => timeDetails(detailsUrl, token))
  else metric('catalogue_details_skipped_reason', JSON.stringify('no live catalogue item with detailsUrl'))

  if (measureHydration) await attempt(() => timeCatalogue('catalogue_hydrate_comparison', '/apps/library/catalogue?hydrate=1&limit=25', token, false))
  if (failures.length > 0) {
    metric('catalogue_performance_error', JSON.stringify(failures.join('; ')))
    process.exitCode = 1
  }
  smokePassed = failures.length === 0
} catch (error) {
  metric('catalogue_performance_error', JSON.stringify(error instanceof Error ? error.message : String(error)))
  process.exitCode = 1
} finally {
  let remaining = -1
  try {
    for (const id of tokenIds(occ(['user:auth-tokens:list', user]))) {
      try { occ(['user:auth-tokens:delete', user, id]) } catch {}
    }
    remaining = tokenIds(occ(['user:auth-tokens:list', user])).length
  } catch { process.exitCode = 1 }
  metric('catalogue_temp_token_remaining', remaining)
  if (remaining !== 0) process.exitCode = 1
  metric('catalogue_performance_smoke_ok', smokePassed && remaining === 0)
}
