import { createServer } from 'node:http'
import { execFileSync, spawn } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const chromeBin = process.env.CHROME_BIN || 'google-chrome'
const tokenName = `hermes-library-browser-smoke-${Date.now()}`
const chromePort = Number(process.env.CHROME_DEBUG_PORT || 19223)

function runOcc(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
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
  return output.split(/\r?\n/)
    .filter((line) => line.includes(tokenName))
    .map((line) => line.match(/\|\s*(\d+)\s*\|/)?.[1])
    .filter(Boolean)
}

function print(key, value) {
  console.log(`${key}=${value}`)
}

function startAuthProxy(token) {
  const auth = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  const server = createServer(async (req, res) => {
    const requestUrl = new URL(req.url || '/', 'http://127.0.0.1')
    const target = new URL(`${requestUrl.pathname}${requestUrl.search}`, upstream)
    const headers = { ...req.headers, authorization: auth }
    delete headers.host
    delete headers.connection
    delete headers['accept-encoding']

    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', async () => {
      try {
        const response = await fetch(target, {
          method: req.method,
          headers,
          body: chunks.length > 0 ? Buffer.concat(chunks) : undefined,
          redirect: 'manual',
        })
        res.statusCode = response.status
        for (const [key, value] of response.headers) {
          const lower = key.toLowerCase()
          if (['content-encoding', 'transfer-encoding', 'connection', 'content-length'].includes(lower)) continue
          if (lower === 'location') {
            const rewritten = value.startsWith(upstream)
              ? value.replace(upstream, `http://127.0.0.1:${server.address().port}`)
              : value
            res.setHeader(key, rewritten)
          } else {
            res.setHeader(key, value)
          }
        }
        res.end(Buffer.from(await response.arrayBuffer()))
      } catch (error) {
        res.statusCode = 502
        res.setHeader('content-type', 'text/plain')
        res.end(`proxy error: ${error?.stack || error}`)
      }
    })
  })

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server))
  })
}

async function waitForJson(url, timeoutMs = 10000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url)
      if (response.ok) return await response.json()
    } catch {
      // retry until Chrome opens the debugging endpoint
    }
    await new Promise((resolve) => setTimeout(resolve, 150))
  }
  throw new Error(`Timed out waiting for ${url}`)
}

function cdp(wsUrl) {
  const socket = new WebSocket(wsUrl)
  let nextId = 1
  const pending = new Map()
  const events = []

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) reject(new Error(JSON.stringify(message.error)))
      else resolve(message.result)
    } else if (message.method) {
      events.push(message)
    }
  })

  const ready = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true })
    socket.addEventListener('error', reject, { once: true })
  })

  async function send(method, params = {}) {
    await ready
    const id = nextId++
    const promise = new Promise((resolve, reject) => pending.set(id, { resolve, reject }))
    socket.send(JSON.stringify({ id, method, params }))
    return promise
  }

  return { socket, send, events }
}

async function runBrowserSmoke(proxyBase) {
  const userDataDir = mkdtempSync(join(tmpdir(), 'library-chrome-'))
  const chrome = spawn(chromeBin, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    `--remote-debugging-port=${chromePort}`,
    `--user-data-dir=${userDataDir}`,
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] })

  let stderr = ''
  chrome.stderr.on('data', (chunk) => { stderr += String(chunk) })

  try {
    await waitForJson(`http://127.0.0.1:${chromePort}/json/version`)
    const targets = await waitForJson(`http://127.0.0.1:${chromePort}/json/list`)
    const pageTarget = targets.find((target) => target.type === 'page' && target.webSocketDebuggerUrl)
    if (!pageTarget) throw new Error('Chrome did not expose a page debugging target')
    const client = cdp(pageTarget.webSocketDebuggerUrl)
    await client.send('Runtime.enable')
    await client.send('Page.enable')
    await client.send('Log.enable')

    const url = `${proxyBase}/apps/library/?browser-smoke=${Date.now()}`
    await client.send('Page.navigate', { url })
    await new Promise((resolve) => setTimeout(resolve, 2500))

    const result = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `(() => {
        const showFiles = [...document.querySelectorAll('.library-cover-card a')].find((a) => a.textContent === 'Show in Files')
        const details = [...document.querySelectorAll('.library-cover-card a')].find((a) => a.textContent === 'Details')
        return {
          title: document.title,
          fallback: Boolean(document.querySelector('[data-vue-fallback="true"]')),
          vueApp: Boolean(document.querySelector('#library-vue-root[data-v-app]')),
          cards: document.querySelectorAll('.library-cover-card').length,
          filters: Boolean(document.querySelector('.library-filter-bar')),
          details: document.querySelectorAll('.library-cover-card a').length > 0 ? [...document.querySelectorAll('.library-cover-card a')].filter((a) => a.textContent === 'Details').length : 0,
          nextcloudTagNameField: Boolean(document.querySelector('input[name="nextcloudTagName"]')),
          catalogueTagEditor: Boolean(document.querySelector('[aria-label="nextcloudTagEditor"]')),
          requestTokenFields: document.querySelectorAll('form[method="post"] input[name="requesttoken"]').length,
          postForms: document.querySelectorAll('form[method="post"]').length,
          tagNameField: Boolean(document.querySelector('input[name="tagName"]')),
          firstShowFiles: showFiles ? showFiles.href : '',
          firstDetails: details ? details.href : '',
          badHostHrefs: [...document.querySelectorAll('a[href]')].filter((a) => a.href.startsWith('http://f/') || a.href.startsWith('http://settings/')).length,
          catalogueLabelled: document.querySelector('.library-panel')?.getAttribute('aria-labelledby') === 'library-catalogue-heading'
            && Boolean(document.querySelector('#library-catalogue-heading')),
          unlabelledControls: [...document.querySelectorAll('input:not([type=hidden]), select, textarea, button')].filter((el) => {
            const id = el.getAttribute('id')
            const hasExplicitLabel = id && document.querySelector('label[for="' + CSS.escape(id) + '"]')
            const hasWrappedLabel = Boolean(el.closest('label'))
            const hasAria = Boolean(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))
            const hasButtonText = el.tagName === 'BUTTON' && el.textContent.trim() !== ''
            return !(hasExplicitLabel || hasWrappedLabel || hasAria || hasButtonText)
          }).length,
        }
      })()`,
    })

    const dom = result.result?.value ?? result.value
    if (!dom) {
      throw new Error(`Chrome Runtime.evaluate returned no DOM value: ${JSON.stringify(result).slice(0, 1000)}`)
    }

    await client.send('Page.navigate', { url: `${proxyBase}/settings/user/library?browser-smoke=${Date.now()}` })
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const settingsResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `(() => {
        const root = document.querySelector('#library-settings')
        if (!root) {
          return {
            present: false,
            authBlocked: true,
          }
        }
        const requiredHeadings = [
          'library-settings-heading',
          'library-scan-progress-heading',
          'library-scan-history-heading',
          'library-indexed-files-heading',
        ]
        const controls = [...root.querySelectorAll('input:not([type=hidden]), select, textarea, button')]
        const unlabelledControls = controls.filter((el) => {
          const id = el.getAttribute('id')
          const hasExplicitLabel = id && root.querySelector('label[for="' + CSS.escape(id) + '"]')
          const hasWrappedLabel = Boolean(el.closest('label'))
          const hasAria = Boolean(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))
          const hasButtonText = el.tagName === 'BUTTON' && el.textContent.trim() !== ''
          return !(hasExplicitLabel || hasWrappedLabel || hasAria || hasButtonText)
        }).length
        return {
          present: true,
          labelledSections: requiredHeadings.every((id) => Boolean(root.querySelector('#' + id)))
            && Boolean(root.querySelector('[aria-labelledby="library-settings-heading"]'))
            && Boolean(root.querySelector('[aria-labelledby="library-scan-progress-heading"]'))
            && Boolean(root.querySelector('[aria-labelledby="library-scan-history-heading"]'))
            && Boolean(root.querySelector('[aria-labelledby="library-indexed-files-heading"]')),
          controls: controls.length,
          unlabelledControls,
          postForms: root.querySelectorAll('form[method="post"]').length,
          requestTokenFields: root.querySelectorAll('form[method="post"] input[name="requesttoken"]').length,
        }
      })()`,
    })

    const settingsDom = settingsResult.result?.value ?? settingsResult.value
    if (!settingsDom) {
      throw new Error(`Chrome Runtime.evaluate returned no settings DOM value: ${JSON.stringify(settingsResult).slice(0, 1000)}`)
    }
    const consoleErrors = client.events.filter((event) => {
      const text = JSON.stringify(event)
      const isLibraryError = text.includes('/custom_apps/library/') || text.includes('[library]') || text.includes('library-main.mjs')
      if (!isLibraryError) return false
      if (event.method === 'Runtime.exceptionThrown') return true
      if (event.method === 'Log.entryAdded' && ['error', 'warning'].includes(event.params?.entry?.level)) return true
      if (event.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(event.params?.type)) return true
      return false
    })

    print('browser_title', dom.title)
    print('browser_vue_app', dom.vueApp)
    print('browser_fallback', dom.fallback)
    print('browser_cards', dom.cards)
    print('browser_filters', dom.filters)
    print('browser_details', dom.details)
    print('browser_nextcloudTagNameField', dom.nextcloudTagNameField)
    print('browser_catalogue_tag_editor', dom.catalogueTagEditor)
    print('browser_catalogue_post_forms_zero', dom.postForms === 0)
    print('browser_post_forms', dom.postForms)
    print('browser_request_token_fields', dom.requestTokenFields)
    print('browser_tagNameField', dom.tagNameField)
    print('browser_firstShowFiles_has_dir', dom.firstShowFiles.includes('?dir=') || dom.firstShowFiles.includes('&dir='))
    print('browser_firstShowFiles_openfile_false', dom.firstShowFiles.includes('openfile=false'))
    print('browser_firstDetails_is_item_page', dom.firstDetails.includes('/apps/library/items/'))
    print('browser_bad_host_hrefs', dom.badHostHrefs)
    print('browser_catalogue_labelled', dom.catalogueLabelled)
    print('browser_unlabelled_controls', dom.unlabelledControls)
    print('settings_present', settingsDom.present)
    print('settings_auth_blocked', settingsDom.authBlocked === true)
    print('settings_labelled_sections', settingsDom.labelledSections)
    print('settings_controls', settingsDom.controls ?? 0)
    print('settings_unlabelled_controls', settingsDom.unlabelledControls ?? 0)
    print('settings_post_forms', settingsDom.postForms ?? 0)
    print('settings_request_token_fields', settingsDom.requestTokenFields ?? 0)
    print('browser_console_errors', consoleErrors.length)

    const ok = dom.vueApp === true
      && dom.fallback === false
      && dom.cards > 0
      && dom.filters === true
      && dom.details === dom.cards
      && dom.nextcloudTagNameField === false
      && dom.catalogueTagEditor === false
      && dom.postForms === 0
      && dom.requestTokenFields === 0
      && dom.tagNameField === false
      && (dom.firstShowFiles.includes('?dir=') || dom.firstShowFiles.includes('&dir='))
      && dom.firstShowFiles.includes('openfile=false')
      && dom.firstDetails.includes('/apps/library/items/')
      && dom.badHostHrefs === 0
      && dom.catalogueLabelled === true
      && dom.unlabelledControls === 0
      && (settingsDom.authBlocked === true || (
        settingsDom.present === true
        && settingsDom.labelledSections === true
        && settingsDom.controls > 0
        && settingsDom.unlabelledControls === 0
        && settingsDom.postForms > 0
        && settingsDom.requestTokenFields === settingsDom.postForms
      ))
      && consoleErrors.length === 0

    if (!ok) {
      print('browser_smoke_ok', false)
      if (consoleErrors.length > 0) {
        console.log('browser_console_error_sample=' + JSON.stringify(consoleErrors.slice(0, 3)))
      }
      process.exitCode = 1
    } else {
      print('browser_smoke_ok', true)
    }
  } finally {
    if (!chrome.killed) chrome.kill('SIGTERM')
    await new Promise((resolve) => {
      chrome.once('close', resolve)
      setTimeout(resolve, 1500)
    })
    rmSync(userDataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
    if (process.exitCode && stderr) {
      console.error(stderr.slice(-4000))
    }
  }
}

let token = ''
let proxy
try {
  token = parseToken(runOcc(['user:add-app-password', '--name', tokenName, user]))
  if (!token) throw new Error('Temporary app password was not created')
  proxy = await startAuthProxy(token)
  const proxyBase = `http://127.0.0.1:${proxy.address().port}`
  await runBrowserSmoke(proxyBase)
} catch (error) {
  print('browser_smoke_ok', false)
  console.error(error?.stack || error)
  process.exitCode = 1
} finally {
  if (proxy) await new Promise((resolve) => proxy.close(resolve))
  try {
    const tokenList = runOcc(['user:auth-tokens:list', user])
    for (const id of parseTokenIds(tokenList)) {
      runOcc(['user:auth-tokens:delete', user, id])
    }
    const remaining = runOcc(['user:auth-tokens:list', user]).includes(tokenName) ? 1 : 0
    print('temp_token_remaining', remaining)
  } catch {
    print('temp_token_cleanup_error', true)
  }
}
