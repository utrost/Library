import { execFileSync } from 'node:child_process'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `hermes-library-last-opened-smoke-${Date.now()}`

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

function cookieHeaderFrom(response) {
  const setCookies = typeof response.headers.getSetCookie === 'function'
    ? response.headers.getSetCookie()
    : (response.headers.get('set-cookie') ? [response.headers.get('set-cookie')] : [])
  return setCookies
    .map((cookie) => String(cookie).split(';', 1)[0].trim())
    .filter(Boolean)
    .join('; ')
}

function decodeHtmlAttribute(value) {
  return value
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
}

function decodeInitialState(page) {
  const match = page.match(/id="initial-state-library-catalogue" value="([^"]+)"/)
  if (!match) return null
  return JSON.parse(Buffer.from(decodeHtmlAttribute(match[1]), 'base64').toString('utf8'))
}

function decodeRequestToken(page) {
  const match = page.match(/data-request-token="([^"]*)"/)
  return match ? decodeHtmlAttribute(match[1]) : ''
}

async function fetchWithAuth(pathOrUrl, token, options = {}) {
  const url = pathOrUrl.startsWith('http') ? pathOrUrl : new URL(pathOrUrl, upstream).toString()
  const response = await fetch(url, {
    method: options.method || 'GET',
    redirect: options.redirect || 'follow',
    headers: {
      Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`,
      ...(options.headers || {}),
    },
    body: options.body,
  })
  const body = await response.arrayBuffer()
  return {
    status: response.status,
    url: response.url,
    bytes: body.byteLength,
    location: response.headers.get('location') || '',
  }
}

function lastOpenedFor(itemId) {
  const encoded = runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $res=$qb->select("last_opened_at")->from("library_items")->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(itemId)})))->executeQuery(); $row=$res->fetch(); $res->closeCursor(); echo (string)($row["last_opened_at"] ?? "");`)
  const trimmed = encoded.trim()
  return trimmed === '' ? 0 : Number.parseInt(trimmed, 10)
}

function restoreLastOpened(itemId, value) {
  const phpValue = value > 0 ? String(Number(value)) : 'null'
  runDockerPhp(`require_once "/var/www/html/lib/base.php"; $db=\\OC::$server->get(\\OCP\\IDBConnection::class); $qb=$db->getQueryBuilder(); $qb->update("library_items")->set("last_opened_at", $qb->createNamedParameter(${phpValue}))->where($qb->expr()->eq("id", $qb->createNamedParameter(${Number(itemId)})))->executeStatement();`)
}

function fail(reason, extra = {}) {
  console.log(`last_opened_smoke_ok=false reason=${reason}`)
  for (const [key, value] of Object.entries(extra)) {
    console.log(`${key}=${value}`)
  }
  process.exitCode = 1
}

let token = ''
let itemId = 0
let originalLastOpened = 0
let contractPassed = false
try {
  token = parseToken(runDocker(['user:add-app-password', '--no-interaction', '--name', tokenName, user]))
  if (!token) {
    fail('temporary_app_password_not_created')
  } else {
    const page = await fetchWithAuth('/apps/library/', token)
    const pageResponse = await fetch(new URL('/apps/library/', upstream), {
      headers: { Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` },
    })
    const sessionCookie = cookieHeaderFrom(pageResponse)
    const pageText = await pageResponse.text()
    const state = decodeInitialState(pageText)
    const requestToken = decodeRequestToken(pageText)
    const first = state?.items?.[0] || {}
    itemId = Number.parseInt(String(first.id || 0), 10)
    if (!itemId || !first.openUrl || !first.recordOpenUrl || !first.filesUrl || !first.downloadUrl || !requestToken) {
      fail('catalogue_item_missing_urls')
    } else {
      originalLastOpened = lastOpenedFor(itemId)
      restoreLastOpened(itemId, 0)
      const resetLastOpened = lastOpenedFor(itemId)
      const open = await fetchWithAuth(first.openUrl, token)
      const afterGetOpen = lastOpenedFor(itemId)
      const recordOpen = await fetchWithAuth(first.recordOpenUrl, token, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'OCS-APIRequest': 'true',
          requesttoken: requestToken,
          ...(sessionCookie ? { Cookie: sessionCookie } : {}),
        },
        body: new URLSearchParams({ requesttoken: requestToken }),
      })
      const afterOpen = lastOpenedFor(itemId)
      const files = await fetchWithAuth(first.filesUrl, token)
      const afterFiles = lastOpenedFor(itemId)
      const download = await fetchWithAuth(first.downloadUrl, token)
      const afterDownload = lastOpenedFor(itemId)
      const recentlyOpenedPath = '/apps/library/?recentlyOpened=1&sort=lastOpened&limit=1'
      const recentlyOpenedPageText = await fetch(new URL(recentlyOpenedPath, upstream), {
        headers: { Authorization: `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` },
      }).then((response) => response.text())
      const recentlyOpenedState = decodeInitialState(recentlyOpenedPageText)
      const sortedFirstId = Number.parseInt(String(recentlyOpenedState?.items?.[0]?.id || 0), 10)
      const openRouteOk = String(first.openUrl).includes('/apps/library/items/') && String(first.openUrl).endsWith('/open')
      const openRedirectedToFiles = open.url.includes('/f/') || open.url.includes('/apps/files/files/')

      console.log(`last_opened_item_id=${itemId}`)
      console.log(`last_opened_before=${originalLastOpened}`)
      console.log(`last_opened_get_unchanged=${afterGetOpen === resetLastOpened}`)
      console.log(`last_opened_after_read=${afterOpen}`)
      console.log(`last_opened_read_updated=${afterOpen > resetLastOpened}`)
      console.log(`last_opened_record_http=${recordOpen.status}`)
      console.log(`last_opened_open_http=${open.status}`)
      console.log(`last_opened_open_url_is_library_route=${openRouteOk}`)
      console.log(`last_opened_redirected_to_files=${openRedirectedToFiles}`)
      console.log(`last_opened_files_unchanged=${afterFiles === afterOpen}`)
      console.log(`last_opened_download_unchanged=${afterDownload === afterOpen}`)
      console.log(`last_opened_sort_first_matches=${sortedFirstId === itemId}`)
      console.log(`last_opened_sort_url_filtered=${recentlyOpenedPath.includes('recentlyOpened=1&sort=lastOpened')}`)
      console.log(`last_opened_files_http=${files.status}`)
      console.log(`last_opened_download_http=${download.status}`)
      console.log(`last_opened_download_bytes=${download.bytes}`)

      if (resetLastOpened !== 0 || afterGetOpen !== resetLastOpened || recordOpen.status !== 200 || !(afterOpen > resetLastOpened) || !openRouteOk || open.status !== 200 || !openRedirectedToFiles || afterFiles !== afterOpen || afterDownload !== afterOpen || sortedFirstId !== itemId || files.status !== 200 || download.status !== 200 || download.bytes <= 0) {
        fail('last_opened_contract_failed')
      } else {
        contractPassed = true
      }
    }
  }
} catch (error) {
  fail('exception', { message: error instanceof Error ? error.message : String(error) })
} finally {
  let restored = itemId === 0
  if (itemId) {
    try {
      restoreLastOpened(itemId, originalLastOpened)
      restored = lastOpenedFor(itemId) === originalLastOpened
    } catch {
      restored = false
    }
    console.log(`last_opened_restored=${restored}`)
    if (!restored) {
      fail('last_opened_restore_failed')
    }
  }
  if (token) {
    try {
      const tokenList = runDocker(['user:auth-tokens:list', user])
      for (const id of parseTokenIds(tokenList)) {
        runDocker(['user:auth-tokens:delete', user, id])
      }
      const remaining = parseTokenIds(runDocker(['user:auth-tokens:list', user])).length
      console.log(`temp_token_remaining=${remaining}`)
      if (remaining !== 0) {
        fail('temporary_token_cleanup_failed')
      }
    } catch (error) {
      console.log('temp_token_cleanup_failed=true')
      fail('temporary_token_cleanup_failed')
    }
  }
  if (contractPassed && process.exitCode !== 1) {
    console.log('last_opened_smoke_ok=true')
  }
}
