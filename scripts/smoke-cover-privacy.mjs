import { createServer } from 'node:http'
import { execFileSync, spawn } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomBytes } from 'node:crypto'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const primaryUser = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const chromeBin = process.env.CHROME_BIN || 'google-chrome'
const tokenPrefix = `library-cover-privacy-${Date.now()}`
const temporaryUser = `library-cover-smoke-${Date.now()}`
const temporaryPassword = randomBytes(24).toString('base64url')
const trackerUrl = 'https://tracker.invalid/pixel'
const sentinel = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='

function dockerExec(args, options = {}) {
  return execFileSync('docker', ['exec', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...options })
}

function occ(args, env = {}) {
  const envArgs = Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`])
  return dockerExec([...envArgs, '-u', 'www-data', container, 'php', 'occ', ...args])
}

function db(action, values) {
  const code = String.raw`
require '/var/www/html/lib/base.php';
$db = \OC::$server->get(\OCP\IDBConnection::class);
$action = getenv('SMOKE_ACTION'); $user = getenv('SMOKE_USER'); $id = (int)getenv('SMOKE_ITEM');
if ($action === 'first') {
  $q = $db->getQueryBuilder(); $q->select('id','cover_override_url','cover_override_data','cover_override_mime_type','updated_at')->from('library_items')->where($q->expr()->eq('user_id',$q->createNamedParameter($user)))->setMaxResults(1); if ($id > 0) $q->andWhere($q->expr()->eq('id',$q->createNamedParameter($id)));
  $row = $q->executeQuery()->fetchAssociative(); echo json_encode($row ?: null); return;
}
$q = $db->getQueryBuilder(); $q->update('library_items')->set('cover_override_url',$q->createNamedParameter(getenv('SMOKE_URL') === '__NULL__' ? null : getenv('SMOKE_URL')))->set('cover_override_data',$q->createNamedParameter(getenv('SMOKE_DATA') === '__NULL__' ? null : getenv('SMOKE_DATA')))->set('cover_override_mime_type',$q->createNamedParameter(getenv('SMOKE_MIME') === '__NULL__' ? null : getenv('SMOKE_MIME')))->set('updated_at',$q->createNamedParameter((int)getenv('SMOKE_UPDATED_AT')))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->eq('user_id',$q->createNamedParameter($user))); echo $q->executeStatement();`
  const env = { SMOKE_ACTION: action, SMOKE_USER: values.user, SMOKE_ITEM: String(values.item || 0), SMOKE_URL: values.url ?? '__NULL__', SMOKE_DATA: values.data ?? '__NULL__', SMOKE_MIME: values.mime ?? '__NULL__', SMOKE_UPDATED_AT: String(values.updated_at ?? Math.floor(Date.now() / 1000)) }
  return dockerExec([...Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`]), '-u', 'www-data', container, 'php', '-r', code]).trim()
}

function parseToken(output) {
  for (const pattern of [/app password is:\s*(\S+)/i, /app password:\s*\n\s*(\S+)/i, /password is:\s*(\S+)/i, /:\s*(\S+)\s*$/im]) {
    const match = output.match(pattern); if (match) return match[1]
  }
  return output.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).at(-1)?.split(/\s+/).at(-1)
}

function tokenIds(output, name) {
  return output.split(/\r?\n/).filter((line) => line.includes(name)).map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1]).filter(Boolean)
}

function decodeHtmlAttribute(value) {
  return value.replace(/&#x([0-9a-f]+);/gi, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 16))).replace(/&#(\d+);/g, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 10))).replace(/&quot;/g, '"').replace(/&amp;/g, '&')
}

function coverFieldsEqual(left, right) {
  return left?.cover_override_url === right?.cover_override_url
    && left?.cover_override_data === right?.cover_override_data
    && left?.cover_override_mime_type === right?.cover_override_mime_type
    && String(left?.updated_at) === String(right?.updated_at)
}

function userExists(user) {
  const users = JSON.parse(occ(['user:list', '--output=json']))
  return Object.prototype.hasOwnProperty.call(users, user)
}

async function authProxy(user, token, maintainSession = false) {
  const auth = token ? `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}` : ''
  const cookieJar = new Map()
  const server = createServer((req, res) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', async () => {
      try {
        const local = new URL(req.url || '/', 'http://127.0.0.1')
        const browserOrigin = `http://${req.headers.host}`
        const headers = { ...req.headers }; if (auth) headers.authorization = auth; delete headers.host; delete headers.connection; delete headers['accept-encoding']; if (maintainSession && cookieJar.size) headers.cookie = [...cookieJar].map(([name, value]) => `${name}=${value}`).join('; ')
        const response = await fetch(new URL(local.pathname + local.search, upstream), { method: req.method, headers, body: chunks.length ? Buffer.concat(chunks) : undefined, redirect: 'manual' })
        res.statusCode = response.status
        for (const [key, value] of response.headers) {
          if (['content-encoding','transfer-encoding','connection','content-length','set-cookie'].includes(key.toLowerCase())) continue
          res.setHeader(key, value.replaceAll(upstream, browserOrigin))
        }
        const cookies = response.headers.getSetCookie(); if (cookies.length) { res.setHeader('set-cookie', cookies); if (maintainSession) for (const cookie of cookies) { const pair = cookie.split(';', 1)[0]; const separator = pair.indexOf('='); if (separator > 0) cookieJar.set(pair.slice(0, separator), pair.slice(separator + 1)) } }
        const body = Buffer.from(await response.arrayBuffer())
        const contentType = response.headers.get('content-type') || ''
        if (/^(?:text\/|application\/(?:json|javascript|xml|xhtml\+xml))/.test(contentType)) {
          const escapedUpstream = upstream.replaceAll('/', '\\/')
          res.end(body.toString('utf8').replaceAll(upstream, browserOrigin).replaceAll(escapedUpstream, browserOrigin.replaceAll('/', '\\/')))
        } else res.end(body)
      } catch { res.statusCode = 502; res.end('proxy failure') }
    })
  })
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
  return server
}

async function establishBrowserSession(base, user, password) {
  const loginPage = await fetch(`${base}/login`)
  const html = await loginPage.text()
  const requesttoken = decodeHtmlAttribute(html.match(/data-requesttoken="([^"]+)"/)?.[1] || '')
  if (loginPage.status !== 200 || requesttoken === '') return false
  const response = await fetch(`${base}/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded', requesttoken, origin: new URL(base).origin, referer: `${base}/login` },
    body: new URLSearchParams({ user, password, requesttoken, timezone: 'Europe/Berlin', timezone_offset: '-2', redirect_url: '/apps/library/' }),
    redirect: 'manual',
  })
  const location = response.headers.get('location') || ''
  return (response.status === 303 || response.status === 302) && !new URL(location, base).pathname.startsWith('/login')
}

async function waitJson(url) {
  for (let i = 0; i < 80; i++) { try { const r = await fetch(url); if (r.ok) return r.json() } catch {} await new Promise((r) => setTimeout(r, 150)) }
  throw new Error('browser debugging endpoint unavailable')
}

async function chromeDebugPort(profile) {
  const marker = join(profile, 'DevToolsActivePort')
  for (let attempt = 0; attempt < 80; attempt++) {
    if (existsSync(marker)) {
      const port = Number.parseInt(readFileSync(marker, 'utf8').split(/\r?\n/, 1)[0], 10)
      if (Number.isInteger(port) && port > 0) return port
    }
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  throw new Error('browser debugging port unavailable')
}

async function browserProof(base, itemId) {
  const profile = mkdtempSync(join(tmpdir(), 'library-cover-privacy-'))
  const chrome = spawn(chromeBin, ['--headless=new','--no-sandbox','--disable-gpu','--disable-dev-shm-usage','--remote-debugging-port=0',`--user-data-dir=${profile}`,'about:blank'], { stdio: 'ignore' })
  let socket = null
  try {
    stage = 'browser-debug-endpoint'
    const port = await chromeDebugPort(profile)
    await waitJson(`http://127.0.0.1:${port}/json/version`)
    stage = 'browser-target'
    const page = (await waitJson(`http://127.0.0.1:${port}/json/list`)).find((entry) => entry.type === 'page')
    socket = new WebSocket(page.webSocketDebuggerUrl); await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }) })
    let next = 1; const pending = new Map(); const requests = []; const inFlight = new Set()
    socket.addEventListener('message', ({ data }) => {
      const msg = JSON.parse(data)
      if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg.result); pending.delete(msg.id); return }
      if (msg.method === 'Network.requestWillBeSent') {
        if (msg.params.redirectResponse?.url) requests.push({ url: msg.params.redirectResponse.url, type: 'Redirect' })
        requests.push({ url: msg.params.request.url, type: msg.params.type })
        inFlight.add(msg.params.requestId)
      } else if (msg.method === 'Network.loadingFinished' || msg.method === 'Network.loadingFailed') {
        inFlight.delete(msg.params.requestId)
      }
    })
    const send = (method, params = {}) => new Promise((resolve) => { const id = next++; pending.set(id, resolve); socket.send(JSON.stringify({ id, method, params })) })
    const waitForExpression = async (expression) => {
      for (let attempt = 0; attempt < 80; attempt++) {
        const result = await send('Runtime.evaluate', { returnByValue: true, expression })
        if (result?.result?.value === true) return
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
      throw new Error('browser page readiness timeout')
    }
    const waitForNetworkQuiet = async (quietMilliseconds = 750, timeoutMilliseconds = 8000) => {
      const started = Date.now(); let quietSince = inFlight.size === 0 ? Date.now() : 0
      while (Date.now() - started < timeoutMilliseconds) {
        if (inFlight.size === 0) {
          if (quietSince === 0) quietSince = Date.now()
          if (Date.now() - quietSince >= quietMilliseconds) return
        } else quietSince = 0
        await new Promise((resolve) => setTimeout(resolve, 50))
      }
      throw new Error('browser network quiet timeout')
    }
    await send('Network.enable'); await send('Page.enable'); await send('Runtime.enable')
    stage = 'browser-navigation'
    await send('Page.navigate', { url: base + '/apps/library/' })
    await waitForExpression("document.readyState === 'complete' && Boolean(document.querySelector('.library-cover-gallery')) && document.querySelectorAll('.library-cover-image').length > 0")
    stage = 'browser-catalogue-covers'
    await send('Runtime.evaluate', { expression: "Array.from(document.querySelectorAll('.library-cover-image')).slice(0,3).forEach(image => image.scrollIntoView({block:'center'}))" })
    await waitForExpression("Array.from(document.querySelectorAll('.library-cover-image')).slice(0,3).every(image => image.complete)")
    stage = 'browser-catalogue-quiet'
    await waitForNetworkQuiet()
    // Hold the mounted catalogue through an additional bounded quiet window so lazy or delayed activity is captured.
    await new Promise((resolve) => setTimeout(resolve, 750))
    await waitForNetworkQuiet()
    await send('Page.navigate', { url: base + `/apps/library/items/${itemId}` })
    await waitForExpression("document.readyState === 'complete' && Boolean(document.querySelector('.library-item-detail')) && Boolean(document.querySelector('.library-cover-override-form input[name=requesttoken]')?.value)")
    stage = 'browser-dom'
    const dom = await send('Runtime.evaluate', { returnByValue: true, expression: `({cover:document.querySelector('.library-detail-cover')?.src||'', token:document.querySelector('.library-cover-override-form input[name=requesttoken]')?.value||'', urlInput:Boolean(document.querySelector('input[name=coverOverrideUrl]')), detail:Boolean(document.querySelector('.library-item-detail'))})` })
    stage = 'upload-render-revert'
    const mutation = await send('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: `(async()=>{const encoded='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';const bytes=Uint8Array.from(atob(encoded),character=>character.charCodeAt(0));const form=new FormData();form.set('requesttoken',${JSON.stringify(dom.result.value.token)});form.set('coverOverrideFile',new Blob([bytes],{type:'image/png'}),'cover.png');const upload=await fetch('/apps/library/items/${itemId}/cover/override',{method:'POST',body:form,credentials:'same-origin'});const cover=await fetch('/apps/library/items/${itemId}/cover?refresh=1',{credentials:'same-origin'});const rendered=new Uint8Array(await cover.arrayBuffer());const same=rendered.length===bytes.length&&rendered.every((value,index)=>value===bytes[index]);const revert=await fetch('/apps/library/items/${itemId}/cover/revert',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({requesttoken:${JSON.stringify(dom.result.value.token)}}),credentials:'same-origin'});return {uploadOk:upload.ok&&!upload.url.includes('coverUploadError'),rendered:cover.ok&&same,manualSource:cover.headers.get('x-library-cover-status')==='manual-cover',revertOk:revert.ok}})()` })
    socket.close(); socket = null
    const allowedOrigins = new Set([new URL(base).origin])
    const crossOrigin = requests.filter((request) => { try { const url = new URL(request.url); return ['http:', 'https:'].includes(url.protocol) && !allowedOrigins.has(url.origin) } catch { return true } })
    return { ...dom.result.value, ...mutation.result.value, crossOrigin, trackerRequested: requests.some((request) => request.url === trackerUrl) }
  } finally {
    if (socket) socket.close()
    chrome.kill('SIGTERM'); rmSync(profile, { recursive: true, force: true })
  }
}

function print(key, value) { console.log(`${key}=${value}`) }

let original = null, primaryToken = '', secondToken = '', primaryProxy = null, secondProxy = null, temporaryUserCreated = false, stage = 'database-seed'
let smokeSuccess = false
let cleanupSuccess = true
let readExact404 = false
let mutationExact303 = false
let serverErrorObserved = false
let authenticatedSecondUser = false
let secondReadStatus = 0
let secondMutationStatus = 0
let secondRedirectReadStatus = 0
try {
  original = JSON.parse(db('first', { user: primaryUser }))
  if (!original) throw new Error('cover privacy smoke requires one existing catalogue item')
  if (db('write', { user: primaryUser, item: original.id, url: trackerUrl, data: null, mime: null }) !== '1') throw new Error('cover privacy seed did not affect exactly one row')
  stage = 'primary-auth'
  primaryToken = parseToken(occ(['user:add-app-password','--no-interaction','--name',tokenPrefix,primaryUser]))
  if (!primaryToken) throw new Error('primary temporary app password unavailable')
  primaryProxy = await authProxy(primaryUser, primaryToken); const primaryBase = `http://127.0.0.1:${primaryProxy.address().port}`
  stage = 'browser-capture'
  const proof = await browserProof(primaryBase, original.id)
  const localCover = proof.cover.startsWith(primaryBase + `/apps/library/items/${original.id}/cover`)
  if (!proof.detail || proof.urlInput || !localCover || proof.trackerRequested || proof.crossOrigin.length) {
    print('cover_privacy_detail_loaded', proof.detail)
    print('cover_privacy_url_input_absent', !proof.urlInput)
    print('cover_privacy_cover_route_local', localCover)
    print('cover_privacy_tracker_requested', proof.trackerRequested)
    print('cross_origin_cover_requests', proof.crossOrigin.length)
    throw new Error('cross-origin cover regression detected')
  }

  if (!proof.uploadOk || !proof.rendered || !proof.manualSource || !proof.revertOk) {
    print('cover_privacy_upload_accepted', proof.uploadOk)
    print('cover_privacy_upload_rendered', proof.rendered)
    print('cover_privacy_manual_source', proof.manualSource)
    print('cover_privacy_revert_accepted', proof.revertOk)
    throw new Error('uploaded cover did not remain authoritative')
  }

  stage = 'temporary-user-isolation'
  occ(['user:add','--password-from-env','--no-interaction',temporaryUser], { OC_PASS: temporaryPassword }); temporaryUserCreated = true
  stage = 'temporary-user-auth'
  secondToken = parseToken(occ(['user:add-app-password','--no-interaction','--name',tokenPrefix,temporaryUser]))
  if (!secondToken) throw new Error('temporary user app password unavailable')
  secondProxy = await authProxy(temporaryUser, '', true); const secondBase = `http://127.0.0.1:${secondProxy.address().port}`
  if (!await establishBrowserSession(secondBase, temporaryUser, temporaryPassword)) throw new Error('temporary browser session unavailable')
  stage = 'temporary-user-catalogue'
  const authenticatedResponse = await fetch(`${secondBase}/ocs/v2.php/cloud/user?format=json`, { headers: { 'OCS-APIRequest': 'true' } })
  authenticatedSecondUser = authenticatedResponse.status === 200 && (await authenticatedResponse.json())?.ocs?.meta?.statuscode === 200
  const secondCatalogueResponse = await fetch(`${secondBase}/apps/library/`)
  const secondCatalogue = await secondCatalogueResponse.text()
  const secondRequestToken = decodeHtmlAttribute(secondCatalogue.match(/(?:data-requesttoken|name="requesttoken" value)="([^"]+)"/)?.[1] || '')
  const deniedRead = await fetch(`${secondBase}/apps/library/items/${original.id}`, { redirect: 'manual' })
  if (db('write', { user: primaryUser, item: original.id, url: trackerUrl, data: sentinel, mime: 'image/png' }) !== '1') throw new Error('cover privacy sentinel did not affect exactly one row')
  stage = 'temporary-user-mutation'
  const deniedMutation = await fetch(`${secondBase}/apps/library/items/${original.id}/cover/revert`, { method: 'POST', headers: { 'content-type':'application/x-www-form-urlencoded', requesttoken: secondRequestToken }, body: new URLSearchParams({ requesttoken: secondRequestToken }), redirect: 'manual' })
  const mutationLocation = deniedMutation.headers.get('location') || ''
  const mutationRedirect = new URL(mutationLocation, secondBase)
  const redirectedRead = mutationLocation ? await fetch(mutationRedirect, { redirect: 'manual' }) : null
  const state = JSON.parse(db('first', { user: primaryUser, item: original.id }))
  secondReadStatus = deniedRead.status
  secondMutationStatus = deniedMutation.status
  secondRedirectReadStatus = redirectedRead?.status || 0
  readExact404 = deniedRead.status === 404
  mutationExact303 = deniedMutation.status === 303 && mutationRedirect.origin === new URL(secondBase).origin && mutationRedirect.pathname === `/apps/library/items/${original.id}` && mutationRedirect.search === '' && redirectedRead?.status === 404
  serverErrorObserved = deniedRead.status >= 500 || deniedMutation.status >= 500 || (redirectedRead?.status || 0) >= 500
  const isolated = authenticatedSecondUser && secondRequestToken !== '' && secondCatalogueResponse.status === 200 && readExact404 && mutationExact303 && !serverErrorObserved && state.cover_override_url === trackerUrl && state.cover_override_data === sentinel && state.cover_override_mime_type === 'image/png'
  if (!isolated) {
    throw new Error('second-user cover isolation failed')
  }

  smokeSuccess = true
  print('catalogue_and_detail_legacy_cover_usable', true)
  print('cross_origin_cover_requests', 0)
  print('upload_render_revert', true)
  print('second_user_isolation', true)
} catch {
  smokeSuccess = false
  print('cover_privacy_failure_stage', stage)
} finally {
  for (const proxy of [secondProxy, primaryProxy]) {
    if (!proxy) continue
    try { await new Promise((resolve, reject) => proxy.close((error) => error ? reject(error) : resolve())) } catch { cleanupSuccess = false }
  }
  const tokenOwners = temporaryUserCreated ? [primaryUser, temporaryUser] : [primaryUser]
  for (const user of tokenOwners) {
    let ids = []
    try { ids = tokenIds(occ(['user:auth-tokens:list', user]), tokenPrefix) } catch { cleanupSuccess = false }
    for (const id of ids) {
      try { occ(['user:auth-tokens:delete', user, id]) } catch { cleanupSuccess = false }
    }
    try {
      if (tokenIds(occ(['user:auth-tokens:list', user]), tokenPrefix).length !== 0) cleanupSuccess = false
    } catch { cleanupSuccess = false }
  }
  if (temporaryUserCreated) {
    try { occ(['user:delete', temporaryUser]) } catch { cleanupSuccess = false }
    try { if (userExists(temporaryUser)) cleanupSuccess = false } catch { cleanupSuccess = false }
  }
  if (original) {
    try {
      const restoredRows = db('write', { user: primaryUser, item: original.id, url: original.cover_override_url, data: original.cover_override_data, mime: original.cover_override_mime_type, updated_at: original.updated_at })
      if (restoredRows !== '1') cleanupSuccess = false
    } catch { cleanupSuccess = false }
    try {
      const restored = JSON.parse(db('first', { user: primaryUser, item: original.id }))
      if (!coverFieldsEqual(restored, original)) cleanupSuccess = false
    } catch { cleanupSuccess = false }
  }
  print('second_user_read_exact_404', readExact404)
  print('second_user_mutation_exact_303', mutationExact303)
  print('second_user_authenticated', authenticatedSecondUser)
  print('second_user_read_status', secondReadStatus)
  print('second_user_mutation_status', secondMutationStatus)
  print('second_user_redirect_read_status', secondRedirectReadStatus)
  print('second_user_server_error_observed', serverErrorObserved)
  print('cover_privacy_smoke_ok', smokeSuccess)
  print('cover_privacy_cleanup_complete', cleanupSuccess)
  if (!smokeSuccess || !cleanupSuccess) process.exitCode = 1
}
