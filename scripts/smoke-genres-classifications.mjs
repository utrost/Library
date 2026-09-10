import { execFileSync } from 'node:child_process'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `hermes-library-genres-smoke-${Date.now()}`
const desiredGenre = 'photography'
const desiredClassification = 'reference collection'

function runDocker(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function runDockerPhp(code) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', '-r', code], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function parseToken(output) {
  const patterns = [/app password is:\s*(\S+)/i, /app password:\s*\n\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]
  for (const pattern of patterns) {
    const match = output.match(pattern)
    if (match) return match[1]
  }
  const lines = output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
  return lines.at(-1)?.split(/\s+/).at(-1)
}

function parseTokenIds(output) {
  return output.split(/\r?\n/)
    .filter((line) => line.includes(tokenName))
    .map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1])
    .filter(Boolean)
}

function decodeInitialState(page) {
  const match = page.match(/id="initial-state-library-catalogue" value="([^"]+)"/)
  if (!match) return null
  const escaped = match[1]
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
  return JSON.parse(Buffer.from(escaped, 'base64').toString('utf8'))
}

async function fetchText(pathOrUrl, token) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    headers: { Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` },
  })
  const text = await response.text()
  return { status: response.status, text }
}

function itemState(itemId) {
  const json = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("genres_json", "classifications_json", "user_edited", "metadata_source", "field_sources", "field_values")->from("library_items")->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(itemId)})))->executeQuery(); $row=$res->fetch(); $res->closeCursor(); echo json_encode($row ?: []);`)
  return JSON.parse(json || '{}')
}

function setGenresClassifications(itemId, genres, classifications) {
  runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("genres_json", $qb->createNamedParameter(${JSON.stringify(JSON.stringify(genres))}))->set("classifications_json", $qb->createNamedParameter(${JSON.stringify(JSON.stringify(classifications))}))->set("user_edited", $qb->createNamedParameter(1))->set("metadata_source", $qb->createNamedParameter("user"))->set("updated_at", $qb->createNamedParameter(time()))->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(itemId)})))->executeStatement();`)
}

function restoreItem(itemId, state) {
  const fieldSources = Buffer.from(String(state.field_sources || '')).toString('base64')
  const fieldValues = Buffer.from(String(state.field_values || '')).toString('base64')
  runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $sources=base64_decode("${fieldSources}"); $values=base64_decode("${fieldValues}"); $qb->update("library_items")->set("genres_json", $qb->createNamedParameter(${JSON.stringify(String(state.genres_json || '[]'))}))->set("classifications_json", $qb->createNamedParameter(${JSON.stringify(String(state.classifications_json || '[]'))}))->set("user_edited", $qb->createNamedParameter(${Number(state.user_edited || 0)}))->set("metadata_source", $qb->createNamedParameter(${JSON.stringify(String(state.metadata_source || 'filename'))}))->set("field_sources", $qb->createNamedParameter($sources === "" ? null : $sources))->set("field_values", $qb->createNamedParameter($values === "" ? null : $values))->set("updated_at", $qb->createNamedParameter(time()))->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(itemId)})))->executeStatement();`)
}

function fail(reason, extra = {}) {
  console.log(`genres_classifications_smoke_ok=false reason=${reason}`)
  for (const [key, value] of Object.entries(extra)) {
    console.log(`${key}=${value}`)
  }
  process.exitCode = 1
}

let token = ''
let itemId = 0
let originalState = null
try {
  token = parseToken(runDocker(['user:add-app-password', '--no-interaction', '--name', tokenName, user]))
  if (!token) {
    fail('temporary_app_password_not_created')
  } else {
    const page = await fetchText('/apps/library/', token)
    const state = decodeInitialState(page.text)
    const first = state?.items?.[0] || {}
    itemId = Number.parseInt(String(first.id || 0), 10)
    if (!itemId || !first.detailsUrl || !state?.metadataExportUrl) {
      fail('catalogue_item_missing_genre_prerequisites')
    } else {
      originalState = itemState(itemId)
      setGenresClassifications(itemId, [desiredGenre, 'history'], [desiredClassification, 'manual'])
      const genrePage = await fetchText(`/apps/library/?genre=${encodeURIComponent(desiredGenre)}&limit=1`, token)
      const genreState = decodeInitialState(genrePage.text)
      const genreFirst = genreState?.items?.[0] || {}
      const classificationPage = await fetchText(`/apps/library/?classification=${encodeURIComponent(desiredClassification)}&limit=1`, token)
      const classificationState = decodeInitialState(classificationPage.text)
      const classificationFirst = classificationState?.items?.[0] || {}
      const detail = await fetchText(first.detailsUrl, token)
      const exported = await fetchText(state.metadataExportUrl, token)
      const exportPayload = JSON.parse(exported.text)
      const exportedItem = exportPayload.items.find((item) => Number(item.id) === itemId)

      console.log(`genres_item_id=${itemId}`)
      console.log(`genre_filter_http=${genrePage.status}`)
      console.log(`genre_filter_first_matches=${Number(genreFirst.id || 0) === itemId}`)
      console.log(`genre_filter_result_contains_genre=${genreFirst.genres?.includes(desiredGenre)}`)
      console.log(`classification_filter_http=${classificationPage.status}`)
      console.log(`classification_filter_first_matches=${Number(classificationFirst.id || 0) === itemId}`)
      console.log(`classification_filter_result_contains_classification=${classificationFirst.classifications?.includes(desiredClassification)}`)
      console.log(`genres_detail_http=${detail.status}`)
      console.log(`genres_detail_has_fields=${detail.text.includes('name="genres[]"') && detail.text.includes('name="classifications"')}`)
      console.log(`genres_export_http=${exported.status}`)
      console.log(`genres_export_contains_values=${exportedItem?.genres?.includes(desiredGenre) && exportedItem?.classifications?.includes(desiredClassification)}`)

      if (genrePage.status !== 200 || Number(genreFirst.id || 0) !== itemId || !genreFirst.genres?.includes(desiredGenre) || classificationPage.status !== 200 || Number(classificationFirst.id || 0) !== itemId || !classificationFirst.classifications?.includes(desiredClassification) || detail.status !== 200 || !detail.text.includes('name="genres[]"') || !detail.text.includes('name="classifications"') || exported.status !== 200 || !exportedItem?.genres?.includes(desiredGenre) || !exportedItem?.classifications?.includes(desiredClassification)) {
        fail('genres_classifications_contract_failed')
      } else {
        console.log('genres_classifications_smoke_ok=true')
      }
    }
  }
} catch (error) {
  fail('exception', { message: error instanceof Error ? error.message : String(error) })
} finally {
  if (itemId && originalState) {
    try { restoreItem(itemId, originalState) } catch {}
    const restored = itemState(itemId)
    console.log(`genres_restored=${restored.genres_json === (originalState.genres_json || '[]') && restored.classifications_json === (originalState.classifications_json || '[]')}`)
  }
  if (token) {
    try {
      const tokenList = runDocker(['user:auth-tokens:list', user])
      for (const id of parseTokenIds(tokenList)) {
        runDocker(['user:auth-tokens:delete', user, id])
      }
      const remaining = parseTokenIds(runDocker(['user:auth-tokens:list', user])).length
      console.log(`temp_token_remaining=${remaining}`)
    } catch {
      console.log('temp_token_cleanup_failed=true')
    }
  }
}
