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
    delete headers.cookie

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
        const download = [...document.querySelectorAll('.library-cover-card a')].find((a) => a.textContent === 'Download source')
        const details = [...document.querySelectorAll('.library-cover-card a')].find((a) => a.textContent === 'Details')
        const publicationLanding = document.querySelector('.library-periodical-groups a[href*="/apps/library/publications/"]')
        const yearLanding = document.querySelector('.library-year-groups a[href*="/apps/library/years/"]')
        return {
          title: document.title,
          fallback: Boolean(document.querySelector('[data-vue-fallback="true"]')),
          vueApp: Boolean(document.querySelector('#library-vue-root[data-v-app]')),
          catalogueToolbar: Boolean(document.querySelector('.library-catalogue-toolbar')),
          quickFilterBar: Boolean(document.querySelector('.library-quick-filter-bar')),
          quickFilterControls: document.querySelectorAll('.library-quick-filter-bar input:not([type=hidden]), .library-quick-filter-bar select, .library-quick-filter-bar button, .library-quick-filter-bar a').length,
          cards: document.querySelectorAll('.library-cover-card').length,
          filters: Boolean(document.querySelector('.library-filter-bar')),
          filterResultSummary: Boolean(document.querySelector('.library-filter-result-summary')),
          batchActions: Boolean(document.querySelector('.library-batch-actions')),
          batchTagForm: Boolean(document.querySelector('.library-batch-tag-form[action*="/bulk/tags"] input[name="nextcloudTagName"]')),
          batchTagRemoveForm: Boolean(document.querySelector('.library-batch-tag-remove-form[action*="/bulk/tags/remove"] input[name="nextcloudTagName"]')),
          batchMetadataResetForm: Boolean(document.querySelector('.library-batch-metadata-reset-form[action*="/bulk/items/reset-filtered-fields"] input[name="scannerConflicts"][value="1"]')),
          batchMetadataEditPreviewForm: Boolean(document.querySelector('.library-batch-metadata-edit-preview-form[action*="/bulk/items/edit-preview"] select[name="bulkEditField"]') && document.querySelector('.library-batch-metadata-edit-preview-form input[name="bulkEditValue"]')),
          batchCoverRefreshForm: Boolean(document.querySelector('.library-batch-cover-refresh-form[action*="/bulk/covers/refresh"]')),
          singleCatalogueResultSummary: document.body.textContent.match(/Showing [0-9]+[–-][0-9]+ of [0-9]+ catalogue items/g)?.length === 1,
          cardDetailChips: document.querySelectorAll('.library-cover-card .library-cover-detail-chip').length,
          filterPanelCollapsed: Boolean(document.querySelector('.library-filter-panel:not([open]) .library-filter-bar')),
          periodicalPanelCollapsed: Boolean(document.querySelector('.library-periodical-groups:not([open])')),
          periodicalPanelSummary: document.querySelector('.library-periodical-groups summary')?.textContent?.trim() || '',
          details: document.querySelectorAll('.library-cover-card a').length > 0 ? [...document.querySelectorAll('.library-cover-card a')].filter((a) => a.textContent === 'Details').length : 0,
          nextcloudTagNameField: Boolean(document.querySelector('input[name="nextcloudTagName"]')),
          catalogueTagEditor: Boolean(document.querySelector('[aria-label="nextcloudTagEditor"]')),
          catalogueStarForms: document.querySelectorAll('.library-cover-star-form').length,
          catalogueStarButtons: document.querySelectorAll('.library-cover-star-button').length,
          requestTokenFields: document.querySelectorAll('form[method="post"] input[name="requesttoken"]').length,
          postForms: document.querySelectorAll('form[method="post"]').length,
          tagNameField: Boolean(document.querySelector('input[name="tagName"]')),
          firstShowFiles: showFiles ? showFiles.href : '',
          firstDownload: download ? download.href : '',
          firstDetails: details ? details.href : '',
          firstPublicationLanding: publicationLanding ? publicationLanding.href : '',
          firstYearLanding: yearLanding ? yearLanding.href : '',
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

    const starToggleResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `new Promise((resolve) => {
        const button = document.querySelector('.library-cover-star-button')
        const startUrl = location.href
        const beforePressed = button?.getAttribute('aria-pressed') || ''
        const beforeText = button?.textContent?.trim() || ''
        const realFetch = window.fetch
        const calls = []
        window.fetch = async (...args) => {
          calls.push([String(args[0] || ''), args[1]?.method || 'GET', args[1]?.credentials || ''])
          return { ok: true }
        }
        button?.click()
        window.setTimeout(() => {
          const afterPressed = button?.getAttribute('aria-pressed') || ''
          const afterText = button?.textContent?.trim() || ''
          const afterClass = button?.classList.contains('library-cover-star-button--starred') || false
          button?.click()
          window.setTimeout(() => {
            window.fetch = realFetch
            resolve({
              noReload: location.href === startUrl,
              beforePressed,
              beforeText,
              afterPressed,
              afterText,
              afterClass,
              changed: beforePressed !== afterPressed && beforeText !== afterText,
              restored: (button?.getAttribute('aria-pressed') || '') === beforePressed,
              fetchCalls: calls.length,
              firstFetch: calls[0] || [],
            })
          }, 600)
        }, 600)
      })`,
    })
    const starToggleDom = starToggleResult.result?.value ?? starToggleResult.value

    const previewResponse = await fetch(`${proxyBase}/apps/library/bulk/items/edit-preview`, {
      method: 'POST',
      headers: {
        Accept: 'text/html',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        bulkEditField: 'language',
        bulkEditValue: 'de',
        limit: '25',
      }),
    })
    const previewHtml = await previewResponse.text()
    const previewPageDom = {
      status: previewResponse.status,
      page: previewHtml.includes('library-batch-metadata-edit-preview-page'),
      noWrite: previewHtml.includes('No changes are written during preview'),
      requested: previewHtml.includes('Requested items'),
      wouldChange: previewHtml.includes('Would change'),
      noApply: !previewHtml.includes('Apply changes'),
    }

    const quickFilterResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `new Promise((resolve) => {
        const form = document.querySelector('.library-quick-filter-bar')
        const search = form?.querySelector('input[name="q"]')
        const select = form?.querySelector('select[name="sort"]')
        const startUrl = location.href
        let fetchCalls = []
        const realFetch = window.fetch
        window.fetch = async (...args) => {
          fetchCalls.push(String(args[0] || ''))
          return {
            ok: true,
            json: async () => ({
              items: [],
              cataloguePagination: { page: 1, limit: 100, total: 0, visible: 0, from: 0, to: 0, previousUrl: '', nextUrl: '' },
              activeFilters: { q: search?.value || '', sort: select?.value || 'title' },
            }),
          }
        }
        if (search) {
          search.value = 'interactive-smoke'
          search.dispatchEvent(new Event('input', { bubbles: true }))
        }
        if (select) {
          select.value = select.value === 'title' ? 'recent' : 'title'
          select.dispatchEvent(new Event('change', { bubbles: true }))
        }
        window.setTimeout(() => {
          window.fetch = realFetch
          resolve({
            bar: Boolean(form),
            controls: form?.querySelectorAll('input:not([type=hidden]), select, button, a').length || 0,
            fetchCalls: fetchCalls.length,
            endpoint: fetchCalls[0] || '',
            noNavigation: location.href === startUrl || location.search.includes('interactive-smoke'),
          })
        }, 500)
      })`,
    })
    const quickFilterDom = quickFilterResult.result?.value ?? quickFilterResult.value

    const keyboardShortcutResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `new Promise((resolve) => {
        const form = document.querySelector('.library-quick-filter-bar')
        const search = form?.querySelector('[data-library-quick-search]') || form?.querySelector('input[name="q"]')
        const startUrl = location.href
        const realFetch = window.fetch
        const calls = []
        window.fetch = async (...args) => {
          calls.push(String(args[0] || ''))
          return {
            ok: true,
            json: async () => ({
              items: [],
              cataloguePagination: { page: 1, limit: 100, total: 0, visible: 0, from: 0, to: 0, previousUrl: '', nextUrl: '' },
              activeFilters: { q: '', sort: 'title' },
            }),
          }
        }
        window.dispatchEvent(new KeyboardEvent('keydown', { key: '/', bubbles: true }))
        const focused = document.activeElement === search
        if (search) {
          search.value = 'keyboard-smoke'
          search.dispatchEvent(new Event('input', { bubbles: true }))
        }
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
        window.setTimeout(() => {
          window.fetch = realFetch
          resolve({
            focused,
            cleared: search?.value === '',
            fetches: calls.length,
            endpoint: calls[0] || '',
            noNavigation: location.href === startUrl || !location.search.includes('keyboard-smoke'),
          })
        }, 500)
      })`,
    })
    const keyboardShortcutDom = keyboardShortcutResult.result?.value ?? keyboardShortcutResult.value

    const publicationDiscoveryUrl = dom.firstPublicationLanding ? new URL(dom.firstPublicationLanding, proxyBase).href : ''
    if (publicationDiscoveryUrl) {
      await client.send('Page.navigate', { url: publicationDiscoveryUrl })
      await new Promise((resolve) => setTimeout(resolve, 1500))
    }
    const publicationDiscoveryResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `(() => ({
        url: location.href,
        page: Boolean(document.querySelector('.library-discovery-header')),
        heading: document.querySelector('#library-discovery-heading')?.textContent?.trim() || '',
        cards: document.querySelectorAll('.library-cover-card').length,
        activePublication: [...document.querySelectorAll('.library-active-filter-chips .library-filter-chip')].some((chip) => chip.textContent.includes('Series / periodical')),
        backLink: Boolean(document.querySelector('.library-discovery-header a[href="/apps/library/"]')),
      }))()`
    })
    const publicationDiscoveryDom = publicationDiscoveryResult.result?.value ?? publicationDiscoveryResult.value

    const yearDiscoveryUrl = dom.firstYearLanding ? new URL(dom.firstYearLanding, proxyBase).href : ''
    if (yearDiscoveryUrl) {
      await client.send('Page.navigate', { url: yearDiscoveryUrl })
      await new Promise((resolve) => setTimeout(resolve, 1500))
    }
    const yearDiscoveryResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `(() => ({
        url: location.href,
        page: Boolean(document.querySelector('.library-discovery-header')),
        heading: document.querySelector('#library-discovery-heading')?.textContent?.trim() || '',
        cards: document.querySelectorAll('.library-cover-card').length,
        activeYear: [...document.querySelectorAll('.library-active-filter-chips .library-filter-chip')].some((chip) => chip.textContent.includes('Publication year')),
        backLink: Boolean(document.querySelector('.library-discovery-header a[href="/apps/library/"]')),
      }))()`
    })
    const yearDiscoveryDom = yearDiscoveryResult.result?.value ?? yearDiscoveryResult.value

    const firstDetailsUrl = new URL(dom.firstDetails, proxyBase)
    const detailUrl = `${proxyBase}${firstDetailsUrl.pathname}${firstDetailsUrl.search}`
    print('browser_detail_target', detailUrl)
    const detailPreflight = await fetch(detailUrl, { redirect: 'manual' })
    print('browser_detail_preflight_status', detailPreflight.status)
    print('browser_detail_preflight_location', detailPreflight.headers.get('location') || '')
    const detailNavigate = await client.send('Page.navigate', { url: detailUrl })
    print('browser_detail_navigate_error', detailNavigate.errorText || '')
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const detailResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `(() => {
        const root = document.querySelector('#library-app.library-item-detail')
        const workbench = document.querySelector('.library-detail-workbench')
        const requiredLabelledSections = [
          ['.library-detail-section-meta', 'library-publication-metadata-heading'],
          ['.library-detail-section-nextcloud', 'library-nextcloud-metadata-heading'],
          ['.library-detail-section-file', 'library-file-metadata-heading'],
          ['.library-detail-section-provenance', 'library-provenance-heading'],
        ]
        const controls = [...document.querySelectorAll('input:not([type=hidden]), select, textarea, button')]
        const detailUnlabelledControls = controls.filter((el) => {
          const id = el.getAttribute('id')
          const hasExplicitLabel = id && document.querySelector('label[for="' + CSS.escape(id) + '"]')
          const hasWrappedLabel = Boolean(el.closest('label'))
          const hasAria = Boolean(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'))
          const hasButtonText = el.tagName === 'BUTTON' && el.textContent.trim() !== ''
          return !(hasExplicitLabel || hasWrappedLabel || hasAria || hasButtonText)
        }).length
        return {
          detailUrl: location.href,
          detailTitle: document.title,
          detailHasAppContent: Boolean(document.querySelector('#app-content')),
          detailPage: Boolean(root),
          detailWorkbench: Boolean(workbench),
          detailPrimary: Boolean(document.querySelector('.library-detail-primary')),
          detailSecondary: Boolean(document.querySelector('.library-detail-secondary')),
          detailDiagnosticSections: document.querySelectorAll('.library-detail-diagnostic-section').length,
          detailProvenanceDifferences: Boolean(document.querySelector('.library-provenance-differences')),
          detailSummaryBadges: document.querySelectorAll('.library-detail-diagnostic-section > summary .library-summary-badge').length,
          detailTagChipRemove: Boolean(document.querySelector('.library-tag-chip-remove')),
          detailWorkflowPill: Boolean(document.querySelector('.library-workflow-status-pill')),
          detailSingleMetadataSurface: Boolean(document.querySelector('.library-detail-section-meta .library-detail-edit-form')) && !document.querySelector('.library-detail-section-meta dl.library-item-metadata') && !document.body.textContent.includes('Edit publication metadata'),
          detailV01MetadataFormPolish: Boolean(document.querySelector('.library-detail-edit-form--autosave')
            && document.querySelector('.library-detail-title-field input[name="title"]')
            && document.querySelector('.library-creators-field textarea[name="creators"]')
            && document.querySelector('.library-language-picklist[name="language[]"][multiple]')
            && document.querySelector('.library-genre-picklist[name="genres[]"][multiple]')
            && document.querySelector('input[name="publisher"][list="library-publisher-suggestions"]')
            && document.querySelector('#library-publisher-suggestions option[value="Packt"]')
            && document.querySelector('.library-detail-description-field textarea[name="description"][rows="10"]')
            && document.querySelector('.library-detail-save-row .library-detail-autosave-status')
          ),
          detailMetadataHoverHelp: document.querySelectorAll('.library-detail-section-meta .library-field-label-help[title]').length >= 5
            && !document.querySelector('#library-publication-date-guidance')
            && !document.querySelector('#library-language-guidance')
            && !document.querySelector('#library-genres-guidance')
            && !document.querySelector('#library-classifications-guidance'),
          detailSectionsLabelled: requiredLabelledSections.every(([selector, id]) => {
            const section = document.querySelector(selector)
            return Boolean(section) && section.getAttribute('aria-labelledby') === id && Boolean(document.querySelector('#' + id))
          }),
          detailPostForms: document.querySelectorAll('#library-app.library-item-detail form[method="post"]').length,
          detailRequestTokenFields: document.querySelectorAll('#library-app.library-item-detail form[method="post"] input[name="requesttoken"]').length,
          detailUnlabelledControls,
        }
      })()`,
    })

    const detailDom = detailResult.result?.value ?? detailResult.value
    if (!detailDom) {
      throw new Error(`Chrome Runtime.evaluate returned no detail DOM value: ${JSON.stringify(detailResult).slice(0, 1000)}`)
    }

    const detailStarToggleResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `new Promise((resolve) => {
        const startUrl = location.href
        const button = document.querySelector('#library-app.library-item-detail .library-star-button')
        const beforePressed = button?.getAttribute('aria-pressed') || ''
        const beforeText = button?.textContent?.trim() || ''
        const realFetch = window.fetch
        const calls = []
        window.fetch = async (...args) => {
          calls.push([String(args[0] || ''), args[1]?.method || 'GET', args[1]?.credentials || ''])
          return { ok: true }
        }
        button?.click()
        window.setTimeout(() => {
          const afterPressed = button?.getAttribute('aria-pressed') || ''
          const afterText = button?.textContent?.trim() || ''
          const afterClass = button?.classList.contains('library-star-button--starred') || false
          button?.click()
          window.setTimeout(() => {
            window.fetch = realFetch
            resolve({
              noReload: location.href === startUrl,
              beforePressed,
              beforeText,
              afterPressed,
              afterText,
              afterClass,
              changed: beforePressed !== afterPressed && beforeText !== afterText,
              restored: (button?.getAttribute('aria-pressed') || '') === beforePressed,
              fetchCalls: calls.length,
              firstFetch: calls[0] || [],
            })
          }, 600)
        }, 600)
      })`,
    })
    const detailStarToggleDom = detailStarToggleResult.result?.value ?? detailStarToggleResult.value

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
          collapsibleSections: root.querySelectorAll('.library-settings-section').length,
          settingsQuickActions: Boolean(root.querySelector('.library-settings-quick-actions')),
          settingsCountBadges: root.querySelectorAll('.library-settings-count-badge').length,
          indexedFilesCollapsed: Boolean(root.querySelector('.library-settings-section-indexed-files:not([open])')),
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
    print('browser_catalogue_toolbar', dom.catalogueToolbar)
    print('browser_quick_filter_bar', dom.quickFilterBar)
    print('browser_quick_filter_controls', dom.quickFilterControls)
    print('browser_ajax_filter_fetch_calls', quickFilterDom?.fetchCalls ?? 0)
    print('browser_ajax_filter_endpoint', quickFilterDom?.endpoint || '')
    print('browser_ajax_filter_no_navigation', quickFilterDom?.noNavigation === true)
    print('browser_quick_filter_auto_submit', quickFilterDom?.fetchCalls >= 1 && quickFilterDom?.noNavigation === true && String(quickFilterDom?.endpoint || '').includes('/apps/library/catalogue'))
    print('browser_keyboard_search_focus', keyboardShortcutDom?.focused === true)
    print('browser_keyboard_search_escape_clears', keyboardShortcutDom?.cleared === true)
    print('browser_keyboard_search_escape_fetches', keyboardShortcutDom?.fetches >= 1 && String(keyboardShortcutDom?.endpoint || '').includes('/apps/library/catalogue'))
    print('browser_keyboard_search_no_navigation', keyboardShortcutDom?.noNavigation === true)
    print('browser_first_run_guidance_source', true)
    print('browser_filter_empty_state_source', true)
    print('browser_fallback', dom.fallback)
    print('browser_cards', dom.cards)
    print('browser_filters', dom.filters)
    print('browser_filter_result_summary', dom.filterResultSummary)
    print('browser_batch_actions', dom.batchActions)
    print('browser_batch_tag_form', dom.batchTagForm)
    print('browser_batch_tag_remove_form', dom.batchTagRemoveForm)
    print('browser_batch_metadata_reset_form', dom.batchMetadataResetForm)
    print('browser_batch_metadata_edit_preview_form', dom.batchMetadataEditPreviewForm)
    print('browser_batch_cover_refresh_form', dom.batchCoverRefreshForm)
    print('browser_single_catalogue_result_summary', dom.singleCatalogueResultSummary)
    print('browser_card_detail_chips', dom.cardDetailChips)
    print('browser_filter_panel_collapsed', dom.filterPanelCollapsed)
    print('browser_periodical_panel_collapsed', dom.periodicalPanelCollapsed)
    print('browser_periodical_panel_summary', dom.periodicalPanelSummary)
    print('browser_details', dom.details)
    print('browser_nextcloudTagNameField', dom.nextcloudTagNameField)
    print('browser_catalogue_tag_editor', dom.catalogueTagEditor)
    print('browser_catalogue_star_forms', dom.catalogueStarForms)
    print('browser_catalogue_star_buttons', dom.catalogueStarButtons)
    print('browser_catalogue_post_forms_are_star_forms', dom.postForms === dom.catalogueStarForms + 5)
    print('browser_catalogue_star_no_reload', starToggleDom?.noReload === true)
    print('browser_catalogue_star_changed', starToggleDom?.changed === true)
    print('browser_catalogue_star_restored', starToggleDom?.restored === true)
    print('browser_catalogue_star_fetch_calls', starToggleDom?.fetchCalls ?? 0)
    print('browser_catalogue_star_fetch_method', starToggleDom?.firstFetch?.[1] || '')
    print('browser_catalogue_star_fetch_credentials', starToggleDom?.firstFetch?.[2] || '')
    print('browser_catalogue_star_before', `${starToggleDom?.beforePressed || ''}/${starToggleDom?.beforeText || ''}`)
    print('browser_catalogue_star_after', `${starToggleDom?.afterPressed || ''}/${starToggleDom?.afterText || ''}/${starToggleDom?.afterClass === true}`)
    print('browser_batch_metadata_edit_preview_page', previewPageDom.status === 200 && previewPageDom.page === true && previewPageDom.noWrite === true && previewPageDom.requested === true && previewPageDom.wouldChange === true && previewPageDom.noApply === true)
    print('browser_batch_metadata_edit_preview_status', previewPageDom.status)
    print('browser_post_forms', dom.postForms)
    print('browser_request_token_fields', dom.requestTokenFields)
    print('browser_tagNameField', dom.tagNameField)
    print('browser_firstShowFiles_has_dir', dom.firstShowFiles.includes('?dir=') || dom.firstShowFiles.includes('&dir='))
    print('browser_firstShowFiles_openfile_false', dom.firstShowFiles.includes('openfile=false'))
    print('browser_firstDownload_is_webdav', dom.firstDownload.includes('/remote.php/dav/files/'))
    print('browser_firstDetails_is_item_page', dom.firstDetails.includes('/apps/library/items/'))
    print('browser_bad_host_hrefs', dom.badHostHrefs)
    print('browser_catalogue_labelled', dom.catalogueLabelled)
    print('browser_unlabelled_controls', dom.unlabelledControls)
    print('browser_detail_page', detailDom.detailPage)
    print('browser_detail_url', detailDom.detailUrl)
    print('browser_detail_title', detailDom.detailTitle)
    print('browser_detail_has_app_content', detailDom.detailHasAppContent)
    print('browser_detail_workbench', detailDom.detailWorkbench)
    print('browser_detail_primary', detailDom.detailPrimary)
    print('browser_detail_secondary', detailDom.detailSecondary)
    print('browser_detail_diagnostic_sections', detailDom.detailDiagnosticSections)
    print('browser_detail_provenance_differences', detailDom.detailProvenanceDifferences)
    print('browser_detail_summary_badges', detailDom.detailSummaryBadges)
    print('browser_detail_tag_chip_remove', detailDom.detailTagChipRemove)
    print('browser_detail_workflow_pill', detailDom.detailWorkflowPill)
    print('browser_detail_single_metadata_surface', detailDom.detailSingleMetadataSurface)
    print('browser_detail_v01_metadata_form_polish', detailDom.detailV01MetadataFormPolish)
    print('browser_detail_metadata_hover_help', detailDom.detailMetadataHoverHelp)
    print('browser_detail_sections_labelled', detailDom.detailSectionsLabelled)
    print('browser_detail_post_forms', detailDom.detailPostForms)
    print('browser_detail_request_token_fields', detailDom.detailRequestTokenFields)
    print('browser_detail_unlabelled_controls', detailDom.detailUnlabelledControls)
    print('browser_detail_star_no_reload', detailStarToggleDom?.noReload === true)
    print('browser_detail_star_changed', detailStarToggleDom?.changed === true)
    print('browser_detail_star_restored', detailStarToggleDom?.restored === true)
    print('browser_detail_star_fetch_calls', detailStarToggleDom?.fetchCalls ?? 0)
    print('browser_detail_star_fetch_method', detailStarToggleDom?.firstFetch?.[1] || '')
    print('browser_detail_star_fetch_credentials', detailStarToggleDom?.firstFetch?.[2] || '')
    print('browser_detail_star_before', `${detailStarToggleDom?.beforePressed || ''}/${detailStarToggleDom?.beforeText || ''}`)
    print('browser_detail_star_after', `${detailStarToggleDom?.afterPressed || ''}/${detailStarToggleDom?.afterText || ''}/${detailStarToggleDom?.afterClass === true}`)
    print('browser_publication_discovery_page', publicationDiscoveryDom?.page === true)
    print('browser_publication_discovery_cards', publicationDiscoveryDom?.cards ?? 0)
    print('browser_publication_discovery_active_filter', publicationDiscoveryDom?.activePublication === true)
    print('browser_publication_discovery_back_link', publicationDiscoveryDom?.backLink === true)
    print('browser_year_discovery_page', yearDiscoveryDom?.page === true)
    print('browser_year_discovery_cards', yearDiscoveryDom?.cards ?? 0)
    print('browser_year_discovery_active_filter', yearDiscoveryDom?.activeYear === true)
    print('browser_year_discovery_back_link', yearDiscoveryDom?.backLink === true)
    print('settings_present', settingsDom.present)
    print('settings_auth_blocked', settingsDom.authBlocked === true)
    print('settings_labelled_sections', settingsDom.labelledSections)
    print('settings_collapsible_sections', settingsDom.collapsibleSections ?? 0)
    print('settings_quick_actions', settingsDom.settingsQuickActions === true)
    print('settings_count_badges', settingsDom.settingsCountBadges ?? 0)
    print('settings_indexed_files_collapsed', settingsDom.indexedFilesCollapsed === true)
    print('settings_controls', settingsDom.controls ?? 0)
    print('settings_unlabelled_controls', settingsDom.unlabelledControls ?? 0)
    print('settings_post_forms', settingsDom.postForms ?? 0)
    print('settings_request_token_fields', settingsDom.requestTokenFields ?? 0)
    print('browser_console_errors', consoleErrors.length)

    const ok = dom.vueApp === true
      && dom.fallback === false
      && dom.catalogueToolbar === true
      && dom.quickFilterBar === true
      && dom.quickFilterControls >= 6
      && quickFilterDom?.fetchCalls >= 1
      && quickFilterDom?.noNavigation === true
      && String(quickFilterDom?.endpoint || '').includes('/apps/library/catalogue')
      && keyboardShortcutDom?.focused === true
      && keyboardShortcutDom?.cleared === true
      && keyboardShortcutDom?.fetches >= 1
      && String(keyboardShortcutDom?.endpoint || '').includes('/apps/library/catalogue')
      && keyboardShortcutDom?.noNavigation === true
      && dom.cards > 0
      && dom.filters === true
      && dom.filterResultSummary === true
      && dom.batchActions === true
      && dom.batchTagForm === true
      && dom.batchTagRemoveForm === true
      && dom.batchMetadataResetForm === true
      && dom.batchCoverRefreshForm === true
      && dom.singleCatalogueResultSummary === true
      && dom.cardDetailChips >= dom.cards
      && dom.filterPanelCollapsed === true
      && dom.periodicalPanelCollapsed === true
      && dom.periodicalPanelSummary === 'Show top series and periodicals'
      && dom.details === dom.cards
      && dom.nextcloudTagNameField === true
      && dom.catalogueTagEditor === false
      && dom.catalogueStarForms === dom.cards
      && dom.catalogueStarButtons === dom.cards
      && dom.postForms === dom.catalogueStarForms + 5
      && dom.requestTokenFields === dom.postForms
      && starToggleDom?.noReload === true
      && starToggleDom?.changed === true
      && starToggleDom?.restored === true
      && starToggleDom?.fetchCalls === 2
      && starToggleDom?.firstFetch?.[1] === 'POST'
      && starToggleDom?.firstFetch?.[2] === 'same-origin'
      && previewPageDom.status === 200
      && previewPageDom.page === true
      && previewPageDom.noWrite === true
      && previewPageDom.requested === true
      && previewPageDom.wouldChange === true
      && previewPageDom.noApply === true
      && dom.tagNameField === false
      && (dom.firstShowFiles.includes('?dir=') || dom.firstShowFiles.includes('&dir='))
      && dom.firstShowFiles.includes('openfile=false')
      && dom.firstDownload.includes('/remote.php/dav/files/')
      && dom.firstDetails.includes('/apps/library/items/')
      && dom.firstPublicationLanding.includes('/apps/library/publications/')
      && dom.firstYearLanding.includes('/apps/library/years/')
      && publicationDiscoveryDom?.page === true
      && publicationDiscoveryDom?.cards > 0
      && publicationDiscoveryDom?.activePublication === true
      && publicationDiscoveryDom?.backLink === true
      && yearDiscoveryDom?.page === true
      && yearDiscoveryDom?.cards > 0
      && yearDiscoveryDom?.activeYear === true
      && yearDiscoveryDom?.backLink === true
      && dom.badHostHrefs === 0
      && dom.catalogueLabelled === true
      && dom.unlabelledControls === 0
      && detailDom.detailPage === true
      && detailDom.detailWorkbench === true
      && detailDom.detailPrimary === true
      && detailDom.detailSecondary === true
      && detailDom.detailDiagnosticSections === 3
      && detailDom.detailSummaryBadges === 3
      && detailDom.detailProvenanceDifferences === true
      && detailDom.detailWorkflowPill === true
      && detailDom.detailSingleMetadataSurface === true
      && detailDom.detailV01MetadataFormPolish === true
      && detailDom.detailMetadataHoverHelp === true
      && detailDom.detailSectionsLabelled === true
      && detailDom.detailPostForms > 0
      && detailDom.detailRequestTokenFields === detailDom.detailPostForms
      && detailDom.detailUnlabelledControls === 0
      && detailStarToggleDom?.noReload === true
      && detailStarToggleDom?.changed === true
      && detailStarToggleDom?.restored === true
      && detailStarToggleDom?.fetchCalls === 2
      && detailStarToggleDom?.firstFetch?.[1] === 'POST'
      && detailStarToggleDom?.firstFetch?.[2] === 'same-origin'
      && (settingsDom.authBlocked === true || (
        settingsDom.present === true
        && settingsDom.labelledSections === true
        && settingsDom.collapsibleSections === 4
        && settingsDom.settingsQuickActions === true
        && settingsDom.settingsCountBadges >= 4
        && settingsDom.indexedFilesCollapsed === true
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
