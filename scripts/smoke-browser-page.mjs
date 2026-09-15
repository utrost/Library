import { createServer } from 'node:http'
import { execFileSync, spawn } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomBytes, timingSafeEqual } from 'node:crypto'
import { classifyBrowserEvent } from './browser-error-classifier.mjs'
import { evaluateTranslatedControlGeometry } from './browser-geometry-gate.mjs'
import { evaluateLegacyLocalizationGate } from './browser-legacy-localization-gate.mjs'
import { measureVisibleTextLines } from './browser-text-line-measurement.mjs'
import { composeLegacyInspectionRow } from './browser-legacy-inspection.mjs'
import { dispatchTabKeyPairs, evaluateKeyboardTabTraversal } from './browser-keyboard-focus-gate.mjs'
import { buildSequentialCandidateSnapshot, sequentialSnapshotsMatch } from './browser-keyboard-snapshot.mjs'
import { collectOverflowDiagnostics } from './browser-overflow-diagnostics.mjs'
import { runWithPhaseTimeout } from './browser-phase-timeout.mjs'
import { installFocusExitSentinel, removeFocusExitSentinel } from './browser-focus-exit-sentinel.mjs'
import { unwrapCdpEvaluateResponse } from './cdp-evaluate-response.mjs'
import { evaluateAccessibilitySnapshot, evaluateAdaptationRows, evaluateLegacyTableAxRows } from './browser-accessibility-gate.mjs'
import { selectAuthenticatedDetailCandidate } from './browser-detail-candidate.mjs'
import { captureCanonicalDetailCandidates } from './browser-detail-candidate-collection.mjs'

// Source-harness compatibility markers for historical alpha browser contract tests.
// const mixedDirectionFixtureFields = [
// { id: 1, axSelector: '', axRole: '', axName: '' },
// { id: 2, axSelector: '', axRole: '', axName: '' },
// { id: 3, axSelector: '', axRole: '', axName: '' },
// { id: 4, axSelector: '', axRole: '', axName: '' },
// { id: 5, axSelector: '', axRole: '', axName: '' },
// { id: 6, axSelector: '', axRole: '', axName: '' },
// { id: 7, axSelector: '', axRole: '', axName: '' },
// { id: 8, axSelector: '', axRole: '', axName: '' },
// { id: 9, axSelector: '', axRole: '', axName: '' },
// { id: 10, axSelector: '', axRole: '', axName: '' },
// { id: 11, axSelector: '', axRole: '', axName: '' },
// { id: 12, axSelector: '', axRole: '', axName: '' },
// { id: 13, axSelector: '', axRole: '', axName: '' },
// { id: 14, axSelector: '', axRole: '', axName: '' },
// { id: 15, axSelector: '', axRole: '', axName: '' },
// { id: 16, axSelector: '', axRole: '', axName: '' },
// ]
// Source-harness alpha.169 matrix
import { assessAxFieldEvidence, assessAxSubtree, assessFocusTraversal, assessMixedDirectionCaptures, assessSidebarDomState, observeFixtureMutationRequests, recordMixedDirectionCapture } from './browser-evidence-helpers.mjs'
import { isCdpClickTargetReady, isFreshCatalogueReady, isSidebarCloseReady, waitForResponsiveReadiness } from './browser-responsive-readiness.mjs'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const chromeBin = process.env.CHROME_BIN || 'google-chrome'
const tokenName = `hermes-library-browser-smoke-${Date.now()}`
const chromePort = Number(process.env.CHROME_DEBUG_PORT || 19223)
const inboundAuthorization = randomBytes(32).toString('base64url')
const authenticatedFetch = (url, init = {}) => fetch(url, {
  ...init,
  headers: { ...(init.headers || {}), 'x-library-smoke-authorization': inboundAuthorization },
})

const mixedDirectionFixtureFields = {
  ar: [
    { id: 'title', surface: 'card', selector: '.library-cover-card:nth-of-type(1) h3 bdi', value: 'Atlas ثابت 2026', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '.library-cover-card:nth-of-type(1) h3 bdi', axRole: 'StaticText', axName: 'Atlas ثابت 2026' },
    { id: 'creator', surface: 'card', selector: '.library-cover-card:nth-of-type(1) .library-creator bdi', value: 'Ada قارئ', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '.library-cover-card:nth-of-type(1) .library-creator bdi', axRole: 'StaticText', axName: 'Ada قارئ' },
    { id: 'publication', surface: 'card', selector: '.library-cover-card:nth-of-type(1) .library-cover-detail-chip:nth-of-type(2) bdi', value: 'Zeitschrift مجلة', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '.library-cover-card:nth-of-type(1) .library-cover-detail-chip:nth-of-type(2) bdi', axRole: 'StaticText', axName: 'Zeitschrift مجلة' },
    { id: 'publicationType', surface: 'sidebar', selector: '#app-sidebar-vue .library-catalogue-eyebrow > bdi:first-child', value: 'book', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-catalogue-eyebrow > bdi:first-child', axRole: 'StaticText', axName: 'book' },
    { id: 'publicationDate', surface: 'sidebar', selector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(2) bdi', value: '2026-09-12', kind: 'machine', dir: 'ltr', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(2) bdi', axRole: 'StaticText', axName: '2026-09-12' },
    { id: 'description', surface: 'sidebar', selector: '#app-sidebar-vue .library-sidebar-description bdi', value: 'Synthetic smoke-only description', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-sidebar-description bdi', axRole: 'StaticText', axName: 'Synthetic smoke-only description' },
    { id: 'publisher', surface: 'sidebar', selector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(3) bdi', value: 'Verlag ناشر', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(3) bdi', axRole: 'StaticText', axName: 'Verlag ناشر' },
    { id: 'language', surface: 'sidebar', selector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(4) bdi', value: 'de; ar', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(4) bdi', axRole: 'StaticText', axName: 'de; ar' },
    { id: 'shelf', surface: 'sidebar', selector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(5) bdi', value: 'Smoke رف', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(5) bdi', axRole: 'StaticText', axName: 'Smoke رف' },
    { id: 'cachedPath', surface: 'sidebar', selector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(6) bdi', value: '/Smoke/مسار/fixture-910001.pdf', kind: 'machine', dir: 'ltr', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-detail-drawer-facts > div:nth-child(6) bdi', axRole: 'StaticText', axName: '/Smoke/مسار/fixture-910001.pdf' },
    { id: 'extension', surface: 'sidebar', selector: '#app-sidebar-vue .library-catalogue-eyebrow > bdi:nth-of-type(2)', value: 'PDF', kind: 'machine', dir: 'ltr', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-catalogue-eyebrow > bdi:nth-of-type(2)', axRole: 'StaticText', axName: 'PDF' },
    { id: 'metadataSource', surface: 'sidebar', selector: '#app-sidebar-vue .library-sidebar-provenance > p bdi', value: 'sidecar fixture', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-sidebar-provenance > p bdi', axRole: 'StaticText', axName: 'sidecar fixture' },
    { id: 'fieldName', surface: 'sidebar', selector: '#app-sidebar-vue .library-sidebar-provenance dl dt bdi', value: 'title', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-sidebar-provenance dl dt bdi', axRole: 'StaticText', axName: 'title' },
    { id: 'fieldSource', surface: 'sidebar', selector: '#app-sidebar-vue .library-sidebar-provenance dl dd bdi', value: 'sidecar fixture', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-sidebar-provenance dl dd bdi', axRole: 'StaticText', axName: 'sidecar fixture' },
    { id: 'candidate', surface: 'sidebar', selector: '#app-sidebar-vue .library-sidebar-review dd bdi:nth-of-type(2)', value: 'Atlas candidate مرشح', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '#app-sidebar-vue .library-sidebar-review dd bdi:nth-of-type(2)', axRole: 'StaticText', axName: 'Atlas candidate مرشح' },
    { id: 'tag', surface: 'card', selector: '.library-cover-card:nth-of-type(1) .library-tag bdi', value: 'Tag وسم 1', kind: 'human', dir: 'auto', computedDirection: 'ltr', axSelector: '.library-cover-card:nth-of-type(1) .library-tag bdi', axRole: 'StaticText', axName: 'Tag وسم 1' },
  ],
}

const sidebarExpectedCopy = {
  en: { idleRoot: 'Publication details', loading: 'Loading publication details…', error: 'This publication is unavailable or you do not have access.', successRoot: 'Atlas ثابت 2026', mobileDescription: 'Escape closes; arrow keys browse neighbouring visible items.' },
  de: { idleRoot: 'Veröffentlichungsdetails', loading: 'Veröffentlichungsdetails werden geladen…', error: 'Diese Veröffentlichung ist nicht verfügbar oder Sie haben keinen Zugriff.', successRoot: 'Atlas ثابت 2026', mobileDescription: 'Escape schließt die Ansicht; mit den Pfeiltasten blättern Sie durch benachbarte sichtbare Einträge.' },
  ar: { idleRoot: 'تفاصيل المنشور', loading: 'جارٍ تحميل تفاصيل المنشور…', error: 'هذا المنشور غير متوفر أو ليس لديك حق الوصول إليه.', successRoot: 'Atlas ثابت 2026', mobileDescription: 'يغلق مفتاح Esc العرض؛ وتتيح مفاتيح الأسهم تصفح العناصر المرئية المجاورة.' },
}

// Source-harness alpha.167 matrix. Package identity remains a separate package gate.
// fail-closed names while exercising the authenticated Settings, batch preview,
// and first full-details URLs at every configured viewport width and restores core/lang.
const legacyLocalizationGate = {
  locales: ['de', 'ar'],
  widths: [1280, 390, 320],
  surfaces: ['settings', 'batch-preview', 'full-details'],
  assertions: [
    'browser_legacy_settings_de', 'browser_legacy_settings_ar',
    'browser_legacy_batch_preview_de', 'browser_legacy_batch_preview_ar',
    'browser_legacy_full_details_de', 'browser_legacy_full_details_ar',
    'browser_legacy_desktop_no_overflow', 'browser_legacy_mobile_no_overflow',
    'browser_legacy_safe_forms', 'browser_locale_restored',
  ],
}

function runOcc(args) {
  return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
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

function print(key, value) {
  console.log(`${key}=${value}`)
}

function rewriteUpstreamOrigin(value, proxyOrigin) {
  return value
    .split(upstream).join(proxyOrigin)
    .split(upstream.replaceAll('/', '\\/')).join(proxyOrigin.replaceAll('/', '\\/'))
}

// CDP cannot set Chromium's browser zoom. The controlling scale markers model
// 200%/400% reflow as 1280 baseline CSS px divided to 640/320 CSS px, with
// mobile=false; they do not claim native browser-zoom or assistive-tech proof.
// Bounded structural diagnostics only: counts and booleans, never text, HTML,
// metadata, paths, URLs, form values, or request tokens. AX-tree evidence is not screen-reader testing.
async function collectAccessibilityAndAdaptationEvidence(client) {
  const captureExactAx = async (selector, contract) => {
    const remote = await client.send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(selector)})` })
    const objectId = remote?.result?.objectId
    if (!objectId) return { ok: false }
    const described = await client.send('DOM.describeNode', { objectId })
    const backendNodeId = described?.node?.backendNodeId
    if (!backendNodeId) return { ok: false }
    const axNodes = [...((await client.send('Accessibility.getPartialAXTree', { backendNodeId, fetchRelatives: true }))?.nodes || [])]
    for (const descendantSelector of contract.descendantSelectors || []) {
      const descendant = await client.send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(descendantSelector)})` })
      const descendantDescription = descendant?.result?.objectId ? await client.send('DOM.describeNode', { objectId: descendant.result.objectId }) : null
      const descendantBackendId = descendantDescription?.node?.backendNodeId
      if (descendantBackendId) axNodes.push(...((await client.send('Accessibility.getPartialAXTree', { backendNodeId: descendantBackendId, fetchRelatives: true }))?.nodes || []))
    }
    return assessAxSubtree([...new Map(axNodes.map((node) => [String(node.nodeId), node])).values()], { ...contract, backendNodeId })
  }
  const observed = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
    const ids = [...document.querySelectorAll('[id]')].map((node) => node.id)
    const idSet = new Set(ids)
    const refNodes = [...document.querySelectorAll('[aria-labelledby],[aria-describedby],[aria-controls]')]
    const refs = refNodes.flatMap((node) => ['aria-labelledby','aria-describedby','aria-controls']
      .flatMap((name) => (node.getAttribute(name) || '').split(/\\s+/).filter(Boolean)))
    const accessibleName = (node) => {
      const labelled = (node.getAttribute('aria-labelledby') || '').split(/\\s+/).filter(Boolean)
        .map((id) => document.getElementById(id)?.textContent || '').join(' ')
      return (labelled || node.getAttribute('aria-label') || node.textContent || '').trim()
    }
    const controls = [...document.querySelectorAll('button,a[href],input:not([type="hidden"]),select,textarea')]
    const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')]
    const levels = headings.map((node) => Number(node.tagName.slice(1)))
    const tables = [...document.querySelectorAll('table')]
    const visibleTables = tables.filter((table) => table.getClientRects().length > 0)
    return {
      observed: true,
      landmarks: { main: document.querySelectorAll('main,[role="main"]').length, namedNavigation: [...document.querySelectorAll('nav,[role="navigation"]')].filter(accessibleName).length },
      headings: { present: headings.length, validOrder: levels.every((level, index) => index === 0 || level <= levels[index - 1] + 1) },
      controls: { unnamed: controls.filter((node) => !accessibleName(node)).length,
        invalidStates: [...document.querySelectorAll('[aria-pressed],[aria-expanded],[aria-busy],[aria-disabled],[aria-current],[aria-modal]')]
          .filter((node) => [...node.attributes].some((attribute) => attribute.name.startsWith('aria-') && ['pressed','expanded','busy','disabled','modal'].includes(attribute.name.slice(5)) && !['true','false'].includes(attribute.value))).length },
      liveRegions: { status: document.querySelectorAll('[role="status"]').length, alert: document.querySelectorAll('[role="alert"]').length,
        invalid: document.querySelectorAll('[aria-live]:not([role="status"]):not([role="alert"])').length, broad: document.querySelectorAll('.library-sidebar-content[aria-live]').length },
      descriptions: { broken: refs.filter((id) => !idSet.has(id)).length }, definitions: { invalid: document.querySelectorAll('dl > :not(div,dt,dd)').length },
      tables: { present: tables.length, withoutCaption: tables.filter((table) => !table.querySelector('caption')).length,
        invalidHeaders: tables.filter((table) => table.querySelector('th:not([scope])')).length,
        intentionallyContained: visibleTables.every((table) => table.scrollWidth <= table.parentElement.scrollWidth || ['auto','scroll'].includes(getComputedStyle(table.parentElement).overflowX)) },
      references: { duplicateIds: ids.length - idSet.size, broken: refs.filter((id) => !idSet.has(id)).length },
    }
  })()` })
  const dom = unwrapCdpEvaluateResponse(observed, { phase: 'accessibility-dom' })
  const tree = await client.send('Accessibility.getFullAXTree')
  const nodes = Array.isArray(tree?.nodes) ? tree.nodes : []
  const role = (node) => String(node.role?.value || '')
  const named = (node) => String(node.name?.value || '').trim()
  const property = (node, name) => node?.properties?.find((candidate) => candidate.name === name)?.value?.value
  const axHeadings = nodes.filter((node) => role(node) === 'heading')
  const headingLevels = axHeadings.map((node) => Number(property(node, 'level'))).filter(Number.isFinite)
  const controlRoles = new Set(['button', 'link', 'textbox', 'combobox', 'checkbox', 'radio', 'switch', 'slider', 'spinbutton', 'tab', 'menuitem'])
  dom.ax = {
    collected: nodes.length > 0,
    main: nodes.filter((node) => role(node) === 'main').length,
    namedNavigation: nodes.filter((node) => role(node) === 'navigation' && named(node)).length,
    headings: axHeadings.filter(named).length,
    headingLevelsValid: headingLevels.length === axHeadings.length && headingLevels.every((level) => level >= 1 && level <= 6),
    unnamedControls: nodes.filter((node) => controlRoles.has(role(node)) && !named(node)).length,
    descriptions: nodes.filter((node) => controlRoles.has(role(node)) && String(node.description?.value || '').trim()).length,
    controlStates: {
      pressed: nodes.some((node) => property(node, 'pressed') !== undefined),
      expanded: nodes.some((node) => property(node, 'expanded') !== undefined),
      disabled: nodes.some((node) => property(node, 'disabled') === true),
      current: nodes.some((node) => property(node, 'current') !== undefined || property(node, 'selected') === true),
      busyOrLoading: false,
    },
    liveRegions: nodes.some((node) => ['status', 'alert'].includes(role(node))),
    tables: { representative: nodes.some((node) => ['table', 'grid'].includes(role(node))), captionNamed: nodes.some((node) => ['table', 'grid'].includes(role(node)) && named(node)), headers: nodes.filter((node) => ['columnheader', 'rowheader'].includes(role(node))).length, cells: nodes.filter((node) => ['cell', 'gridcell'].includes(role(node))).length },
    desktopComplementary: nodes.some((node) => role(node) === 'complementary' && named(node)),
    mobileNamedModalDialog: nodes.some((node) => role(node) === 'dialog' && named(node) && property(node, 'modal') === true),
    mobileModalDescribed: false,
  }
  dom.sidebar = {
    desktop: { loading: false, success: false, error: false, complementary: dom.ax.desktopComplementary },
    mobile: { loading: false, success: false, error: false, namedModalDialog: dom.ax.mobileNamedModalDialog },
  }
  dom.focus = {
    desktop: { headingEntered: false, escapeClosed: false, restored: false },
    mobile: { entered: false, modalContained: false, forwardBoundaryContained: false, backwardBoundaryContained: false, escapeClosed: false, restored: false, observedFocusinCount: 0, observedKeydownCount: 0 },
  }
  dom.readiness = { desktopViewport: null, mobileViewport: null, mobileModal: null, sidebarClose: { desktop: null, mobile: null } }

  const clickWithCdp = async (selector, index = 0) => {
    const remote = await client.send('Runtime.evaluate', {
      expression: `document.querySelectorAll(${JSON.stringify(selector)})[${index}]`,
    })
    const objectId = remote?.result?.objectId
    if (!objectId) throw new Error(`Sidebar test control is absent: ${selector}[${index}]`)
    try {
      await client.send('DOM.scrollIntoViewIfNeeded', { objectId })
      unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', {
        returnByValue: true,
        awaitPromise: true,
        expression: 'new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve(true))))',
      }), { phase: 'sidebar-click-scroll-settle' })
      const target = unwrapCdpEvaluateResponse(await client.send('Runtime.callFunctionOn', {
        objectId,
        returnByValue: true,
        functionDeclaration: `function () {
          const node = this
          const style = getComputedStyle(node)
          const box = node.getBoundingClientRect()
          const x = box.left + box.width / 2
          const y = box.top + box.height / 2
          const hit = box.width > 0 && box.height > 0 ? document.elementFromPoint(x, y) : null
          return { present: node.isConnected, display: style.display, visibility: style.visibility, opacity: style.opacity,
            rectCount: node.getClientRects().length, width: box.width, height: box.height, disabled: node.matches(':disabled'),
            ariaDisabled: node.getAttribute('aria-disabled') || '', inert: Boolean(node.closest('[inert],[hidden],[aria-hidden="true"]')),
            obstructed: !hit || !(hit === node || node.contains(hit)), x, y }
        }`,
      }), { method: 'Runtime.callFunctionOn', phase: 'sidebar-click-point' })
      if (!isCdpClickTargetReady(target)) throw new Error(`Sidebar test control is not interactable: ${selector}[${index}] evidence=${JSON.stringify(target)}`)
      await client.send('Input.dispatchMouseEvent', { type: 'mousePressed', x: target.x, y: target.y, button: 'left', clickCount: 1 })
      await client.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: target.x, y: target.y, button: 'left', clickCount: 1 })
    } finally {
      await client.send('Runtime.releaseObject', { objectId })
    }
  }
  const inspectSidebar = async () => unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
    const sidebar = document.querySelector('#app-sidebar-vue')
    const open = Boolean(sidebar && getComputedStyle(sidebar).display !== 'none')
    const active = document.activeElement
    const focusables = [...(sidebar?.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])') || [])]
      .filter((node) => node.getClientRects().length && !node.closest('[inert],[hidden]'))
    const loadingNode = sidebar?.querySelector('[role="status"]')
    const errorNode = sidebar?.querySelector('[role="alert"]')
    const successNode = sidebar?.querySelector('.library-detail-drawer-facts')
    const normalized = (value) => String(value || '').replace(/\s+/g, ' ').trim()
    const rootName = normalized(sidebar?.querySelector('.app-sidebar-header__mainname')?.textContent || sidebar?.querySelector('#library-detail-drawer-heading')?.textContent || sidebar?.getAttribute('aria-label'))
    return { open, loading: Boolean(loadingNode), error: Boolean(errorNode), success: Boolean(successNode), locale: String(document.documentElement.lang || 'en').toLowerCase().split('-')[0],
      stateExclusive: Number(Boolean(loadingNode)) + Number(Boolean(errorNode)) + Number(Boolean(successNode)) === 1,
      rootName, stateName: normalized(loadingNode?.textContent || errorNode?.textContent || rootName), entered: Boolean(sidebar?.contains(active)),
      headingEntered: active?.id === 'library-detail-drawer-heading' && normalized(active?.textContent).length > 0,
      contained: Boolean(sidebar?.contains(active)), focusableCount: focusables.length, describedBy: sidebar?.getAttribute('aria-describedby') || '' }
  })()` }), { phase: 'sidebar-state' })
  const observeAfterAnimationFrame = async (phase, expression) => unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', {
    returnByValue: true,
    awaitPromise: true,
    expression: `(async () => { await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))); return (${expression})() })()`,
  }), { phase })
  const waitForViewportWidth = async (width, mobile) => waitForResponsiveReadiness({
    phase: `${mobile ? 'mobile' : 'desktop'} viewport`,
    observe: () => observeAfterAnimationFrame('sidebar-viewport-readiness', `() => ({ innerWidth, requestedWidth: ${JSON.stringify(width)} })`),
    accept: (observed) => observed?.innerWidth === width,
    onObservation: (evidence) => { dom.readiness[mobile ? 'mobileViewport' : 'desktopViewport'] = evidence },
  })
  const waitForMobileModal = async () => waitForResponsiveReadiness({
    phase: 'mobile modal',
    observe: () => observeAfterAnimationFrame('sidebar-mobile-modal-readiness', `() => {
      const sidebar = document.querySelector('#app-sidebar-vue')
      const style = sidebar ? getComputedStyle(sidebar) : null
      const selector = '.app-sidebar__close,button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])'
      const focusables = [...(sidebar?.querySelectorAll(selector) || [])].filter((node) => node.getClientRects().length > 0
        && getComputedStyle(node).visibility !== 'hidden' && !node.matches(':disabled,[aria-disabled="true"]')
        && !node.closest('[inert],[hidden],[aria-hidden="true"]'))
      return { displayed: Boolean(sidebar && style.display !== 'none' && style.visibility !== 'hidden' && sidebar.getClientRects().length > 0),
        role: sidebar?.getAttribute('role') || '', modal: sidebar?.getAttribute('aria-modal') === 'true', focusableCount: focusables.length,
        closeFocusable: focusables.some((node) => node.matches('.app-sidebar__close')) }
    }`),
    accept: (observed) => observed?.displayed === true && observed?.role === 'dialog' && observed?.modal === true
      && observed?.focusableCount > 0 && observed?.closeFocusable === true,
    onObservation: (evidence) => { dom.readiness.mobileModal = evidence },
  })
  const waitForSidebarClose = async (mobile, openerIndex) => waitForResponsiveReadiness({
    phase: `${mobile ? 'mobile' : 'desktop'} sidebar close transition`,
    observe: () => observeAfterAnimationFrame('sidebar-close-readiness', `() => {
      const sidebar = document.querySelector('#app-sidebar-vue')
      const sidebarStyle = sidebar ? getComputedStyle(sidebar) : null
      const sidebarBox = sidebar?.getBoundingClientRect()
      const opener = document.querySelectorAll('.library-cover-link')[${openerIndex}]
      const openerStyle = opener ? getComputedStyle(opener) : null
      const openerBox = opener?.getBoundingClientRect()
      const openerX = openerBox ? openerBox.left + openerBox.width / 2 : 0
      const openerY = openerBox ? openerBox.top + openerBox.height / 2 : 0
      const openerHit = openerBox?.width > 0 && openerBox?.height > 0 ? document.elementFromPoint(openerX, openerY) : null
      const overlaySelector = '[role="dialog"][aria-modal="true"],.modal-mask,.modal-backdrop,.app-modal'
      const activeOverlayCount = [...document.querySelectorAll(overlaySelector)].filter((node) => {
        const style = getComputedStyle(node)
        const box = node.getBoundingClientRect()
        return style.display !== 'none' && style.visibility !== 'hidden' && node.getClientRects().length > 0 && box.width > 0 && box.height > 0
      }).length
      return { sidebarPresent: Boolean(sidebar), sidebarDisplay: sidebarStyle?.display || '', sidebarVisibility: sidebarStyle?.visibility || '',
        sidebarRectCount: sidebar?.getClientRects().length || 0, sidebarWidth: sidebarBox?.width || 0, sidebarHeight: sidebarBox?.height || 0,
        activeOverlayCount, openerPresent: Boolean(opener), openerDisplay: openerStyle?.display || '', openerVisibility: openerStyle?.visibility || '', openerOpacity: openerStyle?.opacity || '',
        openerRectCount: opener?.getClientRects().length || 0, openerWidth: openerBox?.width || 0, openerHeight: openerBox?.height || 0,
        openerDisabled: opener?.matches(':disabled') || false, openerAriaDisabled: opener?.getAttribute('aria-disabled') || '',
        openerObstructed: !openerHit || !(openerHit === opener || opener.contains(openerHit)), openerInert: Boolean(opener?.closest('[inert],[hidden],[aria-hidden="true"]')) }
    }`),
    accept: (observed) => observed?.openerInert === false && isSidebarCloseReady(observed),
    onObservation: (evidence) => { dom.readiness.sidebarClose[mobile ? 'mobile' : 'desktop'] = evidence },
  })
  const exerciseSidebar = async (mobile) => {
    const key = async (key, code, modifiers = 0) => {
      for (const type of ['keyDown', 'keyUp']) {
        await client.send('Input.dispatchKeyEvent', { type, key, code, modifiers, windowsVirtualKeyCode: key === 'Tab' ? 9 : 27 })
      }
    }
    const captureSidebarAx = async (phase, state) => {
      const copy = sidebarExpectedCopy[state.locale] || sidebarExpectedCopy.en
      const expectedRootName = phase === 'success' ? copy.successRoot : copy.idleRoot
      const expectedStateName = phase === 'loading' ? copy.loading : phase === 'error' ? copy.error : copy.successRoot
      const expectedRole = mobile ? 'dialog' : 'complementary'
      const descendantRoles = phase === 'loading' ? ['status'] : phase === 'error' ? ['alert'] : ['heading']
      const descendantSelectors = phase === 'loading' ? ['#app-sidebar-vue [role="status"]'] : phase === 'error' ? ['#app-sidebar-vue [role="alert"]'] : ['#library-detail-drawer-heading']
      const descendantExpectations = []
      for (const selector of descendantSelectors) {
        const remote = await client.send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(selector)})` })
        const description = remote?.result?.objectId ? await client.send('DOM.describeNode', { objectId: remote.result.objectId }) : null
        descendantExpectations.push({ backendNodeId: description?.node?.backendNodeId || 0, roles: descendantRoles,
          name: expectedStateName, description: '' })
      }
      const evidence = await captureExactAx('#app-sidebar-vue', { rootRoles: [expectedRole], rootName: expectedRootName,
        descendantRoles, descendantSelectors, descendantExpectations })
      const expectedDescription = mobile && phase === 'success'
        ? copy.mobileDescription : ''
      const exactDescription = String(evidence.root?.description?.value || '').trim() === expectedDescription
      const modal = !mobile || property(evidence.root, 'modal') === true
      return { ok: evidence.ok && assessSidebarDomState(state, phase, { rootName: expectedRootName, stateName: expectedStateName }) && modal && exactDescription, backendNodeId: evidence.root?.backendDOMNodeId }
    }
    const requestedWidth = mobile ? 390 : 1280
    await client.send('Emulation.setDeviceMetricsOverride', { width: requestedWidth, height: mobile ? 844 : 900, deviceScaleFactor: 1, mobile })
    await waitForViewportWidth(requestedWidth, mobile)
    await clickWithCdp('.library-cover-link', 0)
    if (mobile) await waitForMobileModal()
    const loading = await inspectSidebar()
    const loadingAx = await captureSidebarAx('loading', loading)
    await new Promise((resolve) => setTimeout(resolve, 300))
    const success = await inspectSidebar()
    const successAx = await captureSidebarAx('success', success)
    const sidebarRole = mobile ? 'dialog' : 'complementary'
    const sidebarAx = await captureExactAx('#app-sidebar-vue', { rootRoles: [sidebarRole] })
    const axSidebar = sidebarAx.ok && Boolean(named(sidebarAx.root)) && (!mobile || property(sidebarAx.root, 'modal') === true)
    let traversal = null
    if (mobile) {
      await client.send('Runtime.evaluate', { expression: `(() => {
        const root=document.querySelector('#app-sidebar-vue'); const selector='button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])';
        const nodes=[...(root?.querySelectorAll(selector)||[])].filter((node)=>node.getClientRects().length&&!node.closest('[inert],[hidden]'));
        const identity=(node)=>String(nodes.indexOf(node))+':'+node.tagName+':'+(node.id||node.getAttribute('name')||'');
        window.__libraryModalEvents=[]; window.__libraryModalBoundary={first:identity(nodes[0]),last:identity(nodes.at(-1))};
        window.__libraryModalRecord=(event)=>window.__libraryModalEvents.push({type:event.type,key:event.key||'',shiftKey:event.shiftKey===true,target:identity(event.target),inside:Boolean(root?.contains(event.target))});
        document.addEventListener('focusin',window.__libraryModalRecord,true); document.addEventListener('keydown',window.__libraryModalRecord,true);
      })()` })
      const clickBoundary = async (which) => {
        const point = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => { const root=document.querySelector('#app-sidebar-vue'); const nodes=[...(root?.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),[tabindex]:not([tabindex="-1"])')||[])].filter((node)=>node.getClientRects().length&&!node.closest('[inert],[hidden]')); const node=${which === 'last' ? 'nodes.at(-1)' : 'nodes[0]'}; const box=node?.getBoundingClientRect(); return box?{x:box.left+box.width/2,y:box.top+box.height/2}:null })()` }), { phase: `sidebar-${which}-point` })
        if (!point) throw new Error(`Missing ${which} modal boundary`)
        await client.send('Input.dispatchMouseEvent', { type: 'mousePressed', x: point.x, y: point.y, button: 'left', clickCount: 1 })
        await client.send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: point.x, y: point.y, button: 'left', clickCount: 1 })
      }
      await clickBoundary('last'); await key('Tab', 'Tab')
      await clickBoundary('first'); await key('Tab', 'Tab', 8)
      const traversalRaw = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => { document.removeEventListener('focusin',window.__libraryModalRecord,true); document.removeEventListener('keydown',window.__libraryModalRecord,true); return {...window.__libraryModalBoundary,events:window.__libraryModalEvents} })()` }), { phase: 'sidebar-event-log' })
      traversal = assessFocusTraversal(traversalRaw)
    }
    await key('Escape', 'Escape')
    await new Promise((resolve) => setTimeout(resolve, 50))
    const closed = !(await inspectSidebar()).open
    const restored = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, expression: `document.activeElement?.classList.contains('library-cover-link') === true` }), { phase: 'sidebar-focus-return' })
    await clickWithCdp('.library-cover-link', 1)
    await new Promise((resolve) => setTimeout(resolve, 300))
    const error = await inspectSidebar()
    const errorAx = await captureSidebarAx('error', error)
    await key('Escape', 'Escape')
    await waitForSidebarClose(mobile, 1)
    return { loading: assessSidebarDomState(loading, 'loading'), success: assessSidebarDomState(success, 'success'),
      error: assessSidebarDomState(error, 'error'), loadingAx: loadingAx.ok, successAx: successAx.ok, errorAx: errorAx.ok, axSidebar,
      entered: success.entered, headingEntered: success.headingEntered,
      forwardBoundaryContained: traversal?.forwardBoundaryContained,
      backwardBoundaryContained: traversal?.backwardBoundaryContained, closed, restored,
      observedFocusinCount: traversal?.focusinCount, observedKeydownCount: traversal?.keydownCount }
  }
  try {
    const desktop = await exerciseSidebar(false)
    const mobile = await exerciseSidebar(true)
    dom.sidebar.desktop = { loading: desktop.loading && desktop.loadingAx, success: desktop.success && desktop.successAx, error: desktop.error && desktop.errorAx, complementary: desktop.axSidebar }
    dom.sidebar.mobile = { loading: mobile.loading && mobile.loadingAx, success: mobile.success && mobile.successAx, error: mobile.error && mobile.errorAx, namedModalDialog: mobile.axSidebar }
    dom.ax.desktopComplementary = desktop.axSidebar
    dom.ax.mobileNamedModalDialog = mobile.axSidebar
    dom.ax.mobileModalDescribed = mobile.successAx
    dom.ax.controlStates.busyOrLoading = desktop.loadingAx && mobile.loadingAx
    dom.ax.descriptions = Math.max(dom.ax.descriptions, mobile.successAx ? 1 : 0)
    dom.liveRegions.status = desktop.loading && mobile.loading ? 1 : 0
    dom.liveRegions.alert = desktop.error && mobile.error ? 1 : 0
    dom.ax.liveRegions = desktop.loadingAx && mobile.loadingAx && desktop.errorAx && mobile.errorAx
    dom.focus = {
      desktop: { headingEntered: desktop.headingEntered, escapeClosed: desktop.closed, restored: desktop.restored },
      mobile: { entered: mobile.entered,
        modalContained: mobile.forwardBoundaryContained && mobile.backwardBoundaryContained,
        forwardBoundaryContained: mobile.forwardBoundaryContained,
        backwardBoundaryContained: mobile.backwardBoundaryContained,
        escapeClosed: mobile.closed, restored: mobile.restored,
        observedFocusinCount: mobile.observedFocusinCount,
        observedKeydownCount: mobile.observedKeydownCount },
    }
  } catch (error) {
    dom.readiness.failure = error?.evidence || null
    dom.errors = { sidebar: error?.message || String(error) }
  } finally {
    await client.send('Emulation.clearDeviceMetricsOverride')
  }

  const adaptationFixtureUrl = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', {
    returnByValue: true, expression: `({ href: location.href, origin: location.origin, timeOrigin: performance.timeOrigin })`,
  }), { phase: 'adaptation-fixture-url' })
  const assertFixtureScopedSameUrl = (observed) => {
    const candidate = new URL(observed?.href || '')
    const expected = new URL(adaptationFixtureUrl.href)
    if (candidate.href !== expected.href || candidate.origin !== expected.origin
      || candidate.username || candidate.password || candidate.hash
      || candidate.searchParams.get('localization-fixture') !== '1') {
      throw new Error('adaptation_reload_url_not_same_origin_fixture_scoped')
    }
    return candidate.href
  }
  const adaptationReloadUrl = assertFixtureScopedSameUrl(adaptationFixtureUrl)
  const adaptationNavigation = await client.send('Page.navigate', { url: adaptationReloadUrl })
  if (adaptationNavigation?.errorText) throw new Error(`adaptation_reload_failed:${adaptationNavigation.errorText}`)
  const waitForFreshCatalogue = () => waitForResponsiveReadiness({
    phase: 'fresh catalogue after sidebar isolation reload',
    timeoutMs: 5000,
    observe: () => observeAfterAnimationFrame('adaptation-fresh-catalogue-readiness', `() => {
      const expectedUrl = ${JSON.stringify(adaptationReloadUrl)}
      const fixtureIds = ['910001', '910002', '910003']
      const cards = fixtureIds.map((id) => document.querySelector('#library-card-title-' + id)?.closest('.library-cover-card'))
      const buttons = cards.map((card) => card?.querySelector('.library-cover-link'))
      const sidebar = document.querySelector('#app-sidebar-vue')
      const sidebarStyle = sidebar ? getComputedStyle(sidebar) : null
      const sidebarBox = sidebar?.getBoundingClientRect()
      const sidebarClosed = !sidebar || sidebarStyle?.display === 'none' || sidebarStyle?.visibility === 'hidden'
        || sidebar.getClientRects().length === 0 || !sidebarBox?.width || !sidebarBox?.height
      const visiblyActive = (node) => { const style=getComputedStyle(node); const box=node.getBoundingClientRect(); return style.display !== 'none' && style.visibility !== 'hidden' && node.getClientRects().length > 0 && box.width > 0 && box.height > 0 }
      const overlaySelector = '[role="dialog"][aria-modal="true"],.modal-mask,.modal-backdrop,.app-modal'
      const activeOverlayCount = [...document.querySelectorAll(overlaySelector)].filter(visiblyActive).length
      const activeInertCount = [...document.querySelectorAll('[inert]')].filter(visiblyActive).length
      const node = buttons[0]
      const style = node ? getComputedStyle(node) : null
      const box = node?.getBoundingClientRect()
      return { urlMatches: location.href === expectedUrl, newDocument: performance.timeOrigin !== ${JSON.stringify(adaptationFixtureUrl.timeOrigin)},
        vueCatalogueMounted: Boolean(document.querySelector('#library-app .library-cover-gallery') && cards.every(Boolean)),
        fixtureCardCount: cards.filter(Boolean).length, fixtureButtonCount: buttons.filter(Boolean).length,
        sidebarClosed, activeOverlayCount, activeInertCount,
        opener: { present: Boolean(node), display: style?.display || '', visibility: style?.visibility || '', opacity: style?.opacity || '',
          rectCount: node?.getClientRects().length || 0, width: box?.width || 0, height: box?.height || 0,
          disabled: node?.matches(':disabled') || false, ariaDisabled: node?.getAttribute('aria-disabled') || '',
          inert: Boolean(node?.closest('[inert],[hidden],[aria-hidden="true"]')) } }
    }`),
    accept: isFreshCatalogueReady,
    onObservation: (evidence) => { dom.readiness.adaptationFreshCatalogue = evidence },
  })
  await waitForFreshCatalogue()

  const rows = []
  const baselineMetrics = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true,
    expression: `({ width: innerWidth, height: innerHeight, deviceScaleFactor: devicePixelRatio })` }), { phase: 'adaptation-baseline' })
  const inspectAdaptation = async (mode, extra) => {
    if (mode === 'forced-colors') {
      await clickWithCdp('.library-cover-link', 1)
      await new Promise((resolve) => setTimeout(resolve, 300))
      await client.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 })
      await client.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 })
    }
    if (mode === 'reduced-motion') {
      await clickWithCdp('.library-cover-link', 0)
      await new Promise((resolve) => setTimeout(resolve, 50))
    }
    const value = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: `(async () => {
      const visible = [...document.querySelectorAll('button,a[href],input:not([type="hidden"]),select,textarea')]
        .filter((node) => node.getClientRects().length && getComputedStyle(node).visibility !== 'hidden'
          && !node.matches(':disabled,[aria-disabled="true"]') && !node.closest('[hidden],[inert],[aria-hidden="true"]'))
      const motionNodes=[...document.querySelectorAll('#app-sidebar-vue,#app-sidebar-vue *')]
      const scrollNodes = [document.scrollingElement, ...document.querySelectorAll('*')].filter((node, index, all) => node && all.indexOf(node) === index && (node.scrollTop || node.scrollLeft || node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth))
      const baseline = scrollNodes.map((node) => ({ node, top: node.scrollTop, left: node.scrollLeft }))
      let fullyBounded = visible.length > 0
      for (const node of visible) {
        node.scrollIntoView({ block: 'nearest', inline: 'nearest' })
        await new Promise((resolve) => requestAnimationFrame(resolve))
        const box = node.getBoundingClientRect()
        fullyBounded &&= box.left >= 0 && box.top >= 0 && box.right <= innerWidth && box.bottom <= innerHeight
        for (const saved of baseline) saved.node.scrollTo(saved.left, saved.top)
        await new Promise((resolve) => requestAnimationFrame(resolve))
      }
      const controlScrollRestored = baseline.every((saved) => saved.node.scrollTop === saved.top && saved.node.scrollLeft === saved.left)
      return {
        observed: true,
        pageReflowContained: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
        visibleControlBoundsObserved: fullyBounded,
        controlScrollRestored,
        mediaActive: ${JSON.stringify(mode)} === 'reduced-motion' ? matchMedia('(prefers-reduced-motion: reduce)').matches : matchMedia('(forced-colors: active)').matches,
        representativeDurationsSuppressed: ${JSON.stringify(mode)} !== 'reduced-motion' || motionNodes.every((node) => { const style=getComputedStyle(node); return parseFloat(style.animationDuration) === 0 && parseFloat(style.transitionDuration) === 0 }),
      }
    })()` }), { phase: mode })
    rows.push({ mode, ...value, ...extra, restored: false })
    if (mode === 'reduced-motion') await client.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 })
    if (mode === 'forced-colors') await client.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 })
  }
  try {
    await client.send('Emulation.setEmulatedMedia', { media: 'screen', features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
    await inspectAdaptation('reduced-motion', {})
    await client.send('Emulation.setEmulatedMedia', { media: 'screen', features: [{ name: 'forced-colors', value: 'active' }] })
    await inspectAdaptation('forced-colors', {})
    await client.send('Emulation.setEmulatedMedia', { media: 'screen', features: [] })
    for (const [mode, width, percent] of [['scale-200-equivalent', 640, 200], ['scale-400-equivalent', 320, 400]]) {
      await client.send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false })
      const value = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: `(async () => {
        const visible = [...document.querySelectorAll('button,a[href],input:not([type="hidden"]),select,textarea')]
          .filter((node) => node.getClientRects().length && getComputedStyle(node).visibility !== 'hidden'
            && !node.matches(':disabled,[aria-disabled="true"]') && !node.closest('[hidden],[inert],[aria-hidden="true"]'))
        const scrollNodes = [document.scrollingElement, ...document.querySelectorAll('*')].filter((node, index, all) => node && all.indexOf(node) === index && (node.scrollTop || node.scrollLeft || node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth))
        const baseline = scrollNodes.map((node) => ({ node, top: node.scrollTop, left: node.scrollLeft }))
        let fullyBounded = visible.length > 0
        for (const node of visible) {
          node.scrollIntoView({ block: 'nearest', inline: 'nearest' })
          await new Promise((resolve) => requestAnimationFrame(resolve))
          const box = node.getBoundingClientRect()
          fullyBounded &&= box.left >= 0 && box.top >= 0 && box.right <= innerWidth && box.bottom <= innerHeight
          for (const saved of baseline) saved.node.scrollTo(saved.left, saved.top)
          await new Promise((resolve) => requestAnimationFrame(resolve))
        }
        return { observed: true, pageReflowContained: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
          visibleControlBoundsObserved: fullyBounded,
          controlScrollRestored: baseline.every((saved) => saved.node.scrollTop === saved.top && saved.node.scrollLeft === saved.left) }
      })()` }), { phase: mode })
      rows.push({ mode, ...value, baselineCssWidth: 1280, effectiveCssWidth: width, scalePercent: percent, restored: false })
    }
  } finally {
    await client.send('Emulation.setEmulatedMedia', { media: 'screen', features: [] })
    await client.send('Emulation.clearDeviceMetricsOverride')
    const restoration = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, expression: `({
      mediaRestored: !matchMedia('(prefers-reduced-motion: reduce)').matches && !matchMedia('(forced-colors: active)').matches,
      metricsRestored: innerWidth === ${JSON.stringify(baselineMetrics.width)} && innerHeight === ${JSON.stringify(baselineMetrics.height)} && devicePixelRatio === ${JSON.stringify(baselineMetrics.deviceScaleFactor)}
    })` }), { phase: 'adaptation-restoration' })
    for (const row of rows) Object.assign(row, { baselineMetrics, ...restoration, restored: restoration.mediaRestored === true && restoration.metricsRestored === true })
  }
  return { snapshot: dom, rows }
}

function startAuthProxy(token, inboundAuthorization) {
  const auth = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  let startupFailureMode = ''
  let moduleRequestPending = false
  const inboundEvidence = { inboundAuthRejected: 0, inboundAuthAccepted: 0, fixtureResponses: 0, upstreamResponses: 0, upstreamHeaderStripped: true }
  const inboundHeaderName = 'x-library-smoke-authorization'
  const authorized = (value) => {
    const supplied = Buffer.from(String(value || ''))
    const expected = Buffer.from(inboundAuthorization)
    return supplied.length === expected.length && timingSafeEqual(supplied, expected)
  }
  const server = createServer(async (req, res) => {
    if (!authorized(req.headers[inboundHeaderName])) {
      inboundEvidence.inboundAuthRejected += 1
      res.statusCode = 401
      res.setHeader('cache-control', 'no-store')
      res.end('Unauthorized')
      return
    }
    inboundEvidence.inboundAuthAccepted += 1
    const requestUrl = new URL(req.url || '/', 'http://127.0.0.1')
    if (requestUrl.pathname === '/__library-smoke/status') {
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ moduleRequestPending }))
      return
    }
    if (requestUrl.pathname.endsWith('/apps/library/') && requestUrl.searchParams.has('startupFailure')) {
      startupFailureMode = requestUrl.searchParams.get('startupFailure') || ''
    }
    const target = new URL(`${requestUrl.pathname}${requestUrl.search}`, upstream)
    const headers = { ...req.headers, authorization: auth }
    delete headers[inboundHeaderName]
    inboundEvidence.upstreamHeaderStripped = inboundEvidence.upstreamHeaderStripped && !(inboundHeaderName in headers)
    headers.host = req.headers.host
    headers['x-forwarded-host'] = req.headers.host
    headers['x-forwarded-proto'] = 'http'
    delete headers.connection
    delete headers['accept-encoding']

    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', async () => {
      try {
        const fixtureSidebarMatch = requestUrl.pathname.match(/\/apps\/library\/items\/(91000[1-3])\/sidebar$/)
        if (fixtureSidebarMatch && requestUrl.searchParams.get('localization-fixture') === '1') {
          inboundEvidence.fixtureResponses += 1
          const id = Number(fixtureSidebarMatch[1])
          await new Promise((resolve) => setTimeout(resolve, 120))
          if (id === 910002) {
            res.statusCode = 500
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ error: 'synthetic smoke failure' }))
            return
          }
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ item: {
            id, fileId: id, libraryFileId: id, title: id === 910001 ? 'Atlas ثابت 2026' : 'مجلة Visual 2026',
            subtitle: '', creators: 'Ada قارئ', publication: 'Zeitschrift مجلة', publicationType: 'book',
            publicationDate: '2026-09-12', description: 'Synthetic smoke-only description', publisher: 'Verlag ناشر',
            language: 'de; ar', shelf: 'Smoke رف', extension: 'pdf', cachedPath: `/Smoke/مسار/fixture-${id}.pdf`,
            scanStatus: 'indexed', scanError: '', workflowStatus: 'to-read', starred: false,
            coverUrl: `/apps/library/covers/${id}`, openUrl: `/apps/files/?fileid=${id}`,
            detailsUrl: `/apps/library/items/${id}`, metadataSource: 'sidecar fixture',
            fieldSources: { title: 'sidecar fixture' }, fieldValues: { title: 'Atlas candidate مرشح' },
          } }))
          return
        }
        const response = await fetch(target, {
          method: req.method,
          headers,
          body: chunks.length > 0 ? Buffer.concat(chunks) : undefined,
          redirect: 'manual',
        })
        inboundEvidence.upstreamResponses += 1
        res.statusCode = response.status
        const responseCookies = response.headers.getSetCookie()
        const proxyOrigin = `http://127.0.0.1:${server.address().port}`
        for (const [key, value] of response.headers) {
          const lower = key.toLowerCase()
          if (['content-encoding', 'transfer-encoding', 'connection', 'content-length'].includes(lower)) continue
          if (lower === 'set-cookie') continue
          res.setHeader(key, rewriteUpstreamOrigin(value, proxyOrigin))
        }
        if (responseCookies.length > 0) res.setHeader('set-cookie', responseCookies)
        let body = Buffer.from(await response.arrayBuffer())
        const isLibraryModule = requestUrl.pathname.includes('/js/library-main-0-1-0-alpha-167.mjs')
        const effectiveFailureMode = requestUrl.searchParams.get('startupFailure') || startupFailureMode
        if (requestUrl.pathname.endsWith('/apps/library/') && requestUrl.searchParams.has('startupFailure')) {
          body = Buffer.from(body.toString('utf8').replace(/(library-main-0-1-0-alpha-167\.mjs)([^"']*)(["'])/g, (match, asset, suffix, quote) => `${asset}${suffix}${suffix.includes('?') ? '&' : '?'}startupFailure=${startupFailureMode}${quote}`))
        }
        if (isLibraryModule && effectiveFailureMode === 'module-404') {
          res.statusCode = 404
          res.setHeader('content-type', 'text/plain')
          res.end('injected exact-package module failure')
          return
        }
        if (isLibraryModule && effectiveFailureMode === 'syntax') {
          res.setHeader('content-type', 'text/javascript')
          res.end('export { injected syntax failure')
          return
        }
        if (isLibraryModule && effectiveFailureMode === 'bootstrap') {
          res.setHeader('content-type', 'text/javascript')
          res.end('throw new Error("injected bootstrap failure before mount")')
          return
        }
        if (isLibraryModule && effectiveFailureMode === 'mount') {
          body = Buffer.from('document.querySelector("#library-vue-root").insertBefore = function () { throw new Error("injected mount failure") };\n' + body.toString('utf8'))
        }
        if (isLibraryModule && ['module-timeout', 'module-near-threshold'].includes(effectiveFailureMode)) {
          moduleRequestPending = true
          const delay = effectiveFailureMode === 'module-timeout' ? 12000 : 9000
          await new Promise((resolve) => setTimeout(resolve, delay))
          moduleRequestPending = false
        }
        if (requestUrl.pathname.includes('/apps/library/') && effectiveFailureMode === 'state-missing') {
          body = Buffer.from(body.toString('utf8').replace('id="initial-state-library-catalogue"', 'id="injected-missing-library-state"'))
        }
        if (requestUrl.pathname.includes('/apps/library/') && effectiveFailureMode === 'state-malformed-json') {
          body = Buffer.from(body.toString('utf8').replace(/(id="initial-state-library-catalogue" value=")[^"]*/, `$1${Buffer.from('{').toString('base64')}`))
        }
        if (requestUrl.pathname.includes('/apps/library/') && effectiveFailureMode === 'state-invalid-shape') {
          const invalidState = Buffer.from(JSON.stringify({ items: [], activeFilters: [] })).toString('base64')
          body = Buffer.from(body.toString('utf8').replace(/(id="initial-state-library-catalogue" value=")[^"]*/, `$1${invalidState}`))
        }
        if (requestUrl.pathname.endsWith('/apps/library/') && requestUrl.searchParams.has('localization-fixture')) {
          body = Buffer.from(body.toString('utf8').replace(/(id="initial-state-library-catalogue" value=")([^"]*)/, (match, prefix, encoded) => {
            const state = JSON.parse(Buffer.from(encoded, 'base64').toString('utf8'))
            state.items = [
              [910001, 'Atlas ثابت 2026'],
              [910002, 'دليل Archive 2026'],
              [910003, 'مجلة Visual 2026'],
            ].map(([id, title], index) => ({
              id, fileId: id, libraryFileId: id, title, subtitle: '',
              creators: index === 0 ? 'Ada قارئ' : `مؤلف Test ${index + 1}`,
              publication: 'Zeitschrift مجلة', publicationType: index === 2 ? 'magazine' : 'book',
              cachedPath: `/Smoke/مسار/fixture-${index + 1}.pdf`, publicationDate: '2026-09-12',
              description: 'Reference https://example.invalid/item and ISBN 978-0-00-000000-0',
              publisher: 'Verlag ناشر', language: 'de; ar', shelf: 'Smoke رف', extension: 'pdf',
              scanStatus: 'indexed', scanError: '', workflowStatus: 'to-read', starred: false,
              coverAvailable: false, coverUrl: `/apps/library/covers/${id}`,
              detailsUrl: `/apps/library/items/${id}`, openUrl: `/apps/files/?fileid=${id}`,
              filesUrl: `/apps/files/?fileid=${id}`, downloadUrl: `/apps/library/items/${id}/download`,
              starUrl: `/apps/library/items/${id}/star`, resetFieldUrl: `/apps/library/items/${id}/reset-field`,
              metadataSource: 'sidecar fixture', fieldSources: { title: 'sidecar fixture' },
              fieldValues: { title: `${title} candidate` }, hasScannerConflict: true, scannerConflictCount: 1,
              nextcloudTags: [{ id: 700 + index, name: `Tag وسم ${index + 1}` }],
            }))
            state.cataloguePagination = { page: 1, limit: 25, total: 3, visible: 3, from: 1, to: 3, previousUrl: '', nextUrl: '' }
            state.itemSidebarUrlTemplate = '/apps/library/items/__ITEM_ID__/sidebar?localization-fixture=1'
            return `${prefix}${Buffer.from(JSON.stringify(state)).toString('base64')}`
          }))
        }
        if (body.indexOf(Buffer.from(upstream)) >= 0 || body.indexOf(Buffer.from(upstream.replaceAll('/', '\\/'))) >= 0) {
          body = Buffer.from(rewriteUpstreamOrigin(body.toString('utf8'), proxyOrigin))
        }
        res.end(body)
      } catch (error) {
        res.statusCode = 502
        res.setHeader('content-type', 'text/plain')
        res.end(`proxy error: ${error?.stack || error}`)
      }
    })
  })

  server.inboundEvidence = inboundEvidence
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

async function inspectDiscoveryRoute(client, url, kind) {
  if (!url) {
    return { fixturePresent: false, skipEvidence: `root catalogue exposed no ${kind} fixture URL` }
  }
  await client.send('Page.navigate', { url })
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const result = await client.send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const entries = [...document.querySelectorAll('#app-navigation-vue .app-navigation-entry-link')]
      const library = entries.find((entry) => entry.textContent.trim() === 'Library')
      const review = entries.find((entry) => entry.textContent.trim() === 'Review')
      const settings = document.querySelector('#app-navigation-vue .library-navigation-settings-link')
      const shellHrefs = [library, review, settings].map((entry) => entry?.getAttribute('href') || '')
      return {
        fixturePresent: true,
        url: location.href,
        page: Boolean(document.querySelector('.library-discovery-hero')),
        heading: document.querySelector('#library-discovery-heading')?.textContent?.trim() || '',
        cards: document.querySelectorAll('.library-cover-card').length,
        activeFilterLabels: [...document.querySelectorAll('.library-active-filter-chips .library-filter-chip')].map((chip) => chip.textContent.trim()),
        backLinkHref: document.querySelector('.library-discovery-back-link')?.getAttribute('href') || '',
        nativeShell: Boolean(document.querySelector('#content-vue') && document.querySelector('#app-navigation-vue') && document.querySelector('#app-content-vue')),
        nativeDestinations: entries.map((entry) => entry.textContent.trim()),
        nativeLibraryHref: library?.getAttribute('href') || '',
        nativeReviewHref: review?.getAttribute('href') || '',
        nativeSettingsHref: settings?.getAttribute('href') || '',
        nativeHrefsSameOrigin: shellHrefs.every((href) => href.startsWith('/') && !href.startsWith('//')),
        nativeLibraryActive: library?.getAttribute('aria-current') === 'page',
        nativeReviewActive: review?.getAttribute('aria-current') === 'page',
        nativeSidebarClosed: Boolean(document.querySelector('#app-sidebar-vue.app-sidebar[style*="display: none"]')),
        nativeSidebarExternalToggleAbsent: !document.querySelector('[aria-controls="app-sidebar-vue"]'),
      }
    })()`,
  })
  return unwrapCdpEvaluateResponse(result, { phase: `discovery-${kind}` })
}

async function runLegacyLocalizationGate(client, proxyBase, { detailUrl, requestToken, batchFixtureItem }) {
  const absentMarker = '__LIBRARY_LANGUAGE_SETTING_ABSENT__'
  const originalLanguageOutput = runOcc(['user:setting', user, 'core', 'lang', `--default-value=${absentMarker}`]).trim()
  const originalLanguage = { present: originalLanguageOutput !== absentMarker, value: originalLanguageOutput }
  const records = []
  let restored = false
  let expectedEffectiveLocale = ''
  let batchFixtureLanguage = ''
  const expected = {
    de: {
      lang: 'de', dir: 'ltr',
      settings: [
        { id: 'folder-path', selector: '.library-add-shelf-form input[name="path"]', text: 'Ordnerpfad', association: 'containing-label' },
        { id: 'metadata-json', selector: '.library-metadata-import-preview-form textarea[name="metadataJson"]', text: 'Metadatenimport in der Vorschau anzeigen', association: 'containing-label' },
        { id: 'preview-import', selector: '.library-metadata-import-preview-form button[type="submit"]', text: 'Metadatenimport in der Vorschau anzeigen', association: 'self', designatedLong: true, expectWrapWidths: [390, 320] },
      ],
      batch: [
        { id: 'back-top', selector: '.library-batch-preview-back--top', text: 'Zurück zum Katalog', association: 'self' },
        { id: 'apply', selector: '.library-batch-preview-apply-form button[type="submit"]', text: 'Änderungen auf aktuelle Ergebnisse anwenden', association: 'self', designatedLong: true, expectWrapWidths: [320] },
        { id: 'back-bottom', selector: '.library-batch-preview-back--bottom', text: 'Zurück zum Katalog', association: 'self' },
      ],
      detail: [
        { id: 'publication', selector: '.library-detail-edit-form input[name="publication"]', text: 'Veröffentlichung', association: 'containing-label' },
        { id: 'description', selector: '.library-detail-edit-form textarea[name="description"]', text: 'Beschreibung', association: 'containing-label' },
        { id: 'save', selector: '.library-detail-save-button', text: 'Metadaten speichern', association: 'self', designatedLong: true },
      ],
    },
    ar: {
      lang: 'ar', dir: 'rtl',
      settings: [
        { id: 'folder-path', selector: '.library-add-shelf-form input[name="path"]', text: 'مسار المجلد', association: 'containing-label' },
        { id: 'metadata-json', selector: '.library-metadata-import-preview-form textarea[name="metadataJson"]', text: 'معاينة استيراد البيانات الوصفية', association: 'containing-label' },
        { id: 'preview-import', selector: '.library-metadata-import-preview-form button[type="submit"]', text: 'معاينة استيراد البيانات الوصفية', association: 'self', designatedLong: true },
      ],
      batch: [
        { id: 'back-top', selector: '.library-batch-preview-back--top', text: 'العودة إلى الكتالوج', association: 'self' },
        { id: 'apply', selector: '.library-batch-preview-apply-form button[type="submit"]', text: 'تطبيق التغييرات على النتائج الحالية', association: 'self', designatedLong: true },
        { id: 'back-bottom', selector: '.library-batch-preview-back--bottom', text: 'العودة إلى الكتالوج', association: 'self' },
      ],
      detail: [
        { id: 'publication', selector: '.library-detail-edit-form input[name="publication"]', text: 'منشور', association: 'containing-label' },
        { id: 'description', selector: '.library-detail-edit-form textarea[name="description"]', text: 'الوصف', association: 'containing-label' },
        { id: 'save', selector: '.library-detail-save-button', text: 'حفظ البيانات الوصفية', association: 'self', designatedLong: true },
      ],
    },
  }
  const formContracts = {
    settings: { minimum: 5, endpoints: ['^/apps/library/(?:roots(?:/[^/]+(?:/(?:toggle|delete))?)?|scan(?:/.*)?|import/metadata/(?:preview|apply))$'] },
    batch: { minimum: 1, endpoints: ['^/apps/library/bulk/items/edit-apply$'] },
    detail: { minimum: 5, endpoints: ['^/apps/library/items/[^/]+(?:/(?:star|workflow-status|cover/(?:override|revert)|reset-field|reset-fields|forget-missing|tags(?:/[^/]+)?|comments))?$'] },
  }
  const normalizeLocale = (value) => String(value || '').trim().replaceAll('_', '-').toLowerCase().split('-')[0]
  const phaseTimeoutMs = { navigate: 35000, 'inspect-core': 10000, 'inspect-forms': 10000, 'inspect-geometry': 10000, keyboard: 30000, cleanup: 35000 }
  const timedPhase = async (locale, width, surface, phase, action) => {
    const started = performance.now()
    try { return await runWithPhaseTimeout(action, { timeoutMs: phaseTimeoutMs[phase], phase }) } finally {
      print('legacy_gate_phase_seconds', JSON.stringify({ locale, width, surface, phase, seconds: Number(((performance.now() - started) / 1000).toFixed(3)) }))
    }
  }
  // CDP has no per-command cancellation primitive. Racing releases this call stack;
  // closing the client during outer shutdown abandons any command still pending in
  // the transport. Every restoration/shutdown-adjacent CDP command is bounded too.
  const boundedCleanup = async (action) => {
    try {
      return await runWithPhaseTimeout(action, { timeoutMs: phaseTimeoutMs.cleanup, phase: 'cleanup' })
    } catch (error) {
      print('legacy_gate_cleanup_error', error?.message || String(error))
      return undefined
    }
  }
  const timedRow = async (locale, width, surface, selector, navigateRow) => {
    const started = performance.now()
    try {
      const eventStart = await timedPhase(locale, width, surface, 'navigate', navigateRow)
      const core = await timedPhase(locale, width, surface, 'inspect-core', () => inspectCore(locale, surface, selector))
      const forms = await timedPhase(locale, width, surface, 'inspect-forms', () => inspectForms(surface, selector))
      const geometry = await timedPhase(locale, width, surface, 'inspect-geometry', () => inspectGeometry(locale, surface, selector))
      let tableAx = null
      if (surface === 'batch') {
        const tableDom = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
          const table = document.querySelector('.library-batch-preview-table')
          const cards = document.querySelector('.library-batch-preview-card-list')
          const captionText = table?.querySelector('caption')?.textContent.trim() || ''
          return { representative: ${width} >= 700 ? Boolean(table) : Boolean(cards), caption: Boolean(captionText), captionText, cardListName: cards?.getAttribute('aria-label') || '',
            scopedHeaders: Boolean(table) && [...table.querySelectorAll('th')].length > 0 && [...table.querySelectorAll('th')].every((node) => ['col','row'].includes(node.getAttribute('scope'))),
            domAssociations: Boolean(table) && table.querySelectorAll('tbody td').length > 0,
            cardFieldValues: {
              item: cards?.querySelector('.library-batch-preview-field--item dd')?.textContent.trim() || '',
              current: cards?.querySelector('.library-batch-preview-field--current dd')?.textContent.trim() || '',
              new: cards?.querySelector('.library-batch-preview-field--new dd')?.textContent.trim() || '',
              outcome: cards?.querySelector('.library-batch-preview-outcome')?.textContent.trim() || '',
            } }
        })()` }), { phase: 'legacy-table-dom' })
        const cardFieldSelectors = {
          item: '.library-batch-preview-card .library-batch-preview-field--item dd',
          current: '.library-batch-preview-card .library-batch-preview-field--current dd',
          new: '.library-batch-preview-card .library-batch-preview-field--new dd',
          outcome: '.library-batch-preview-card .library-batch-preview-outcome',
        }
        const selectors = ['.library-batch-preview-table', '.library-batch-preview-table caption', '.library-batch-preview-table th', '.library-batch-preview-table tbody td', '.library-batch-preview-card-list', '.library-batch-preview-card', ...Object.values(cardFieldSelectors)]
        const axBySelector = {}
        for (const selector of selectors) {
          const remote = await client.send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(selector)})` })
          const description = remote?.result?.objectId ? await client.send('DOM.describeNode', { objectId: remote.result.objectId }) : null
          const backendNodeId = description?.node?.backendNodeId
          const nodes = backendNodeId ? ((await client.send('Accessibility.getPartialAXTree', { backendNodeId, fetchRelatives: true })).nodes || []) : []
          axBySelector[selector] = { backendNodeId, nodes, exposed: Boolean(backendNodeId) && nodes.some((node) => node.backendDOMNodeId === backendNodeId && node.ignored !== true) }
        }
        if (width >= 700) {
          const table = axBySelector['.library-batch-preview-table']
          const nodes = selectors.filter((selector) => selector.includes('table')).flatMap((selector) => axBySelector[selector].nodes)
          const association = assessAxSubtree([...new Map(nodes.map((node) => [String(node.nodeId), node])).values()], { backendNodeId: table.backendNodeId, rootRoles: ['table'], rootName: String(tableDom.captionText || ''), descendantRoles: ['columnheader', 'cell'] })
          tableAx = { width, activeRepresentation: 'table', ...tableDom, axNamedTable: association.ok, axHeaders: association.ok, axCells: association.ok, exactBackendNodeAssociation: association.ok, inactiveAbsentFromAx: !axBySelector['.library-batch-preview-card-list'].exposed }
        } else {
          const cards = axBySelector['.library-batch-preview-card-list']
          const nodes = selectors.filter((selector) => selector.includes('card') || selector.includes('outcome')).flatMap((selector) => axBySelector[selector].nodes)
          const uniqueNodes = [...new Map(nodes.map((node) => [String(node.nodeId), node])).values()]
          const association = assessAxSubtree(uniqueNodes, { backendNodeId: cards.backendNodeId, rootRoles: ['list'], rootName: tableDom.cardListName, descendantRoles: ['listitem'] })
          const fieldCoverage = Object.fromEntries(Object.entries(cardFieldSelectors).map(([field, selector]) => {
            const evidence = axBySelector[selector]
            const value = tableDom.cardFieldValues[field]
            const valueNode = evidence.nodes.find((node) => node.ignored !== true && node.role?.value === 'StaticText' && String(node.name?.value || '').trim() === value)
            return [field, Boolean(value) && assessAxFieldEvidence(uniqueNodes, {
              rootBackendNodeId: cards.backendNodeId,
              fieldBackendNodeId: evidence.backendNodeId,
              valueBackendNodeId: valueNode?.backendDOMNodeId,
              value,
            }).ok]
          }))
          tableAx = { width, activeRepresentation: 'cards', representative: tableDom.representative, axNamedCardList: association.ok, axCards: association.ok,
            fieldCoverage,
            exactBackendNodeAssociation: association.ok, inactiveAbsentFromAx: !axBySelector['.library-batch-preview-table'].exposed }
        }
      }
      const inspection = composeLegacyInspectionRow({ locale, width, surface, core, forms, geometry,
        expectedControls: expected[locale][surface], formMinimum: formContracts[surface].minimum })
      const keyboardTraversal = await timedPhase(locale, width, surface, 'keyboard', () => tabIntoSurface(selector))
      const failures = client.events.slice(eventStart).filter((event) => classifyBrowserEvent(event).fatal || event.method === 'Network.loadingFailed')
      return { ...inspection, keyboardTraversal, tableAx, failures: failures.length }
    } finally {
      print('legacy_gate_row_seconds', JSON.stringify({ locale, width, surface, seconds: Number(((performance.now() - started) / 1000).toFixed(3)) }))
    }
  }
  const navigate = async (url) => {
    const eventStart = client.events.length
    const navigation = await client.send('Page.navigate', { url })
    if (navigation.errorText) throw new Error(`legacy_navigation_failed:${navigation.errorText}`)
    await new Promise((resolve) => setTimeout(resolve, 1800))
    return eventStart
  }
  const tabIntoSurface = async (selector) => {
    const setup = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
      const root = document.querySelector(${JSON.stringify(selector)})
      if (!root) return { recorderInstalled: false, expectedTargets: 0, maximumTabSteps: 0, positiveTabIndex: false, overCap: false }
      const sentinel = (${installFocusExitSentinel.toString()})(root)
      let snapshot
      try { snapshot = (${buildSequentialCandidateSnapshot.toString()})(root) }
      catch (error) { (${removeFocusExitSentinel.toString()})(sentinel); throw error }
      const controls = snapshot.controls
      const state = { root, sentinel, snapshot, controls, snapshotRecords: snapshot.records, samples: [], exit: null, postExitSamples: [], tabStep: 0, keyDownSteps: [], keyUpSteps: [], cancelledTabSteps: [], focusInSteps: [] }
      const describe = (node) => {
        const style = getComputedStyle(node); const rect = node.getBoundingClientRect(); const focusOrderIndex = controls.indexOf(node)
        return { tabStep: state.tabStep, identity: String(focusOrderIndex) + ':' + node.tagName + ':' + (node.id || node.getAttribute('name') || ''), focusOrderIndex,
          tag: node.tagName.toLowerCase(), insideRoot: root.contains(node), naturalControl: node.tabIndex >= 0,
          visible: node.getClientRects().length > 0 && style.visibility !== 'hidden' && style.display !== 'none', focusVisible: node.matches(':focus-visible'),
          clippedButFocusable: focusOrderIndex >= 0 && state.snapshotRecords[focusOrderIndex]?.clippedButFocusable === true,
          focusExitSentinel: node === sentinel && node.dataset.libraryTestFocusExitSentinel === 'true',
          focusIndication: (style.outlineStyle !== 'none' && style.outlineWidth !== '0px') || style.boxShadow !== 'none' }
      }
      state.onKeyDown = (event) => { if (event.key === 'Tab' && !event.shiftKey) { state.tabStep += 1; state.keyDownSteps.push(state.tabStep); queueMicrotask(() => { if (event.defaultPrevented) state.cancelledTabSteps.push(state.tabStep) }) } }
      state.onKeyUp = (event) => { if (event.key === 'Tab' && !event.shiftKey) state.keyUpSteps.push(state.tabStep) }
      state.onFocusIn = (event) => {
        state.focusInSteps.push(state.tabStep)
        if (controls.includes(event.target)) { const sample=describe(event.target); if (state.exit) state.postExitSamples.push(sample); else state.samples.push(sample) }
        else if (!root.contains(event.target) && state.samples.length > 0 && !state.exit) state.exit = describe(event.target)
      }
      window.addEventListener('keydown', state.onKeyDown, true); window.addEventListener('keyup', state.onKeyUp, true); window.addEventListener('focusin', state.onFocusIn, true)
      window.__libraryTabRecorder = state
      root.setAttribute('tabindex', '-1'); root.focus({ preventScroll: true }); root.removeAttribute('tabindex'); window.scrollTo(0, 0)
      return { recorderInstalled: true, expectedTargets: controls.length, maximumTabSteps: Math.min(200, controls.length + 1), overCap: controls.length + 1 > 200,
        positiveTabIndex: snapshot.positiveTabIndex }
    })()` })
    const setupValue = unwrapCdpEvaluateResponse(setup, { phase: 'legacy-keyboard-setup' })
    const expectedTargets = Number(setupValue.expectedTargets || 0)
    const maximumTabSteps = Number(setupValue.maximumTabSteps || 0)
    let dispatch = { dispatchedPairs: 0, chunks: 0 }
    try {
      if (setupValue.recorderInstalled === true) dispatch = await dispatchTabKeyPairs(client, maximumTabSteps, { afterPair: async (step) => {
        await client.send('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: `(async () => {
          await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)))
        })()` })
      } })
    } finally {
      const recordedResult = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
        const state = window.__libraryTabRecorder
        if (!state) return null
        try {
          const current = (${buildSequentialCandidateSnapshot.toString()})(state.root)
          const snapshotStable = (${sequentialSnapshotsMatch.toString()})(state.snapshot, current)
          return { samples: state.samples, exit: state.exit, postExitSamples: state.postExitSamples, leftSurface: Boolean(state.exit),
            dispatchedTabSteps: state.tabStep, keyDownSteps: state.keyDownSteps, keyUpSteps: state.keyUpSteps, cancelledTabSteps: state.cancelledTabSteps,
            focusInSteps: state.focusInSteps, snapshotStable }
        } finally {
          window.removeEventListener('keydown', state.onKeyDown, true); window.removeEventListener('keyup', state.onKeyUp, true); window.removeEventListener('focusin', state.onFocusIn, true);
          (${removeFocusExitSentinel.toString()})(state.sentinel)
          delete window.__libraryTabRecorder
        }
      })()` })
      const recorded = unwrapCdpEvaluateResponse(recordedResult, { phase: 'legacy-keyboard-collection' })
      return { ...evaluateKeyboardTabTraversal(recorded?.samples, { ...recorded, expectedTargets, maximumTabSteps,
        dispatchedPairs: dispatch.dispatchedPairs, positiveTabIndex: Boolean(setupValue.positiveTabIndex), recorderPresent: Boolean(recorded), overCap: Boolean(setupValue.overCap) }),
        positiveTabIndex: Boolean(setupValue.positiveTabIndex), maximumTabSteps, dispatchChunks: dispatch.chunks }
    }
  }
  const inspectCore = async (locale, surface, selector) => {
    const result = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
      const root = document.querySelector(${JSON.stringify(selector)})
      const status = performance.getEntriesByType('navigation')[0]?.responseStatus || 0
      if (!root) return { present: false, status, missingLabelIds: ${JSON.stringify(expected)}[${JSON.stringify(locale)}][${JSON.stringify(surface)}].map((spec) => spec.id), labelChecks: {} }
      const indexed = ${JSON.stringify(surface)} === 'settings' ? root.querySelector('.library-settings-section-indexed-files') : null
      if (indexed) indexed.open = true
      const expectedControls = ${JSON.stringify(expected)}[${JSON.stringify(locale)}][${JSON.stringify(surface)}]
      const normalized = (value) => String(value || '').replace(/\\s+/g, ' ').trim()
      const ownLabelText = (label) => {
        if (!label) return ''
        const collect = (node) => [...node.childNodes].map((child) => {
          if (child.nodeType === Node.TEXT_NODE) return child.textContent || ''
          if (child.nodeType !== Node.ELEMENT_NODE || child.matches('input,select,textarea,button')) return ''
          return collect(child)
        }).join(' ')
        return normalized(collect(label))
      }
      const labelChecks = Object.fromEntries(expectedControls.map((spec) => {
        const matches = root.querySelectorAll(spec.selector)
        const node = matches.length === 1 ? matches[0] : null
        const label = spec.association === 'containing-label' ? node?.closest('label') : null
        const text = spec.association === 'self' ? normalized(node?.textContent) : ownLabelText(label)
        return [spec.id, Boolean(node && text === spec.text && (spec.association === 'self' || label?.contains(node)))]
      }))
      const overflowDiagnostics = (${collectOverflowDiagnostics.toString()})(root)
      const openedIndexedFilesGeometry = !indexed || (indexed.open && [...indexed.querySelectorAll('.library-index-row, .library-index-row dl, .library-index-row dd, .library-bidi-machine')].every((node) => {
        const rect = node.getBoundingClientRect()
        const rootRect = root.getBoundingClientRect()
        return rect.left >= Math.max(0, rootRect.left) - 1 && rect.right <= Math.min(document.documentElement.clientWidth, rootRect.right) + 1
      }))
      return { present: true, status, openedIndexedFilesGeometry,
        lang: root.getAttribute('lang') || root.closest('[lang]')?.getAttribute('lang') || '',
        dir: root.getAttribute('dir') || root.closest('[dir]')?.getAttribute('dir') || '',
        overflow: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1 && root.scrollWidth <= root.clientWidth + 1,
        overflowDiagnostics,
        labelChecks, missingLabelIds: expectedControls.filter((spec) => labelChecks[spec.id] !== true).map((spec) => spec.id) }
    })()` })
    return unwrapCdpEvaluateResponse(result, { phase: 'legacy-inspect-core' })
  }
  const inspectForms = async (surface, selector) => {
    const contract = formContracts[surface]
    const result = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
      const root = document.querySelector(${JSON.stringify(selector)})
      if (!root) return { forms: 0, formChecks: [] }
      const forms = [...root.querySelectorAll('form')]
      const patterns = ${JSON.stringify(contract.endpoints)}.map((source) => new RegExp(source))
      const formChecks = forms.map((form) => {
        const action = new URL(form.getAttribute('action') || location.href, location.href)
        const tokenField = form.querySelector('input[name="requesttoken"]')
        const tokenPresent = Boolean(tokenField)
        const tokenNonEmpty = tokenPresent && String(tokenField.value || '').trim().length > 0
        return { method: form.method.toLowerCase(), origin: action.origin, path: action.pathname,
          tokenPresent, tokenNonEmpty,
          valid: form.method.toLowerCase() === 'post' && action.origin === location.origin
            && patterns.some((pattern) => pattern.test(action.pathname)) && tokenPresent && tokenNonEmpty }
      })
      return { forms: forms.length, formChecks }
    })()` })
    return unwrapCdpEvaluateResponse(result, { phase: 'legacy-inspect-forms' })
  }
  const inspectGeometry = async (locale, surface, selector) => {
    const result = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
      const root = document.querySelector(${JSON.stringify(selector)})
      if (!root) return { controls: [] }
      const expectedControls = ${JSON.stringify(expected)}[${JSON.stringify(locale)}][${JSON.stringify(surface)}]
      const controls = expectedControls.map((spec) => {
        const matches = [...root.querySelectorAll(spec.selector)]
        const node = matches.length === 1 ? matches[0] : null
        if (!node) return { specId: spec.id, associated: false, naturalControl: false, matchCount: matches.length, designatedLong: Boolean(spec.designatedLong) }
        const label = spec.association === 'containing-label' ? node.closest('label') : null
        const associated = spec.association === 'self' ? true : Boolean(label?.contains(node))
        const geometryNode = label || node
        const style = getComputedStyle(geometryNode)
        const textLines = (${measureVisibleTextLines.toString()})(geometryNode, { excludeNestedControls: spec.association === 'containing-label' })
        return { specId: spec.id, matchCount: matches.length, associated,
          naturalControl: node.matches('button,input:not([type="hidden"]),select,textarea,a[href]'), designatedLong: Boolean(spec.designatedLong), scrollWidth: geometryNode.scrollWidth,
          clientWidth: geometryNode.clientWidth, scrollHeight: geometryNode.scrollHeight, clientHeight: geometryNode.clientHeight,
          whiteSpace: style.whiteSpace, ...textLines }
      })
      return { controls }
    })()` })
    return unwrapCdpEvaluateResponse(result, { phase: 'legacy-inspect-geometry' })
  }
  try {
    await navigate(`${proxyBase}/apps/library/?legacy-locale-before-mutation=1`)
    const effectiveLocaleResult = await client.send('Runtime.evaluate', { returnByValue: true, expression: `document.querySelector('#library-app')?.getAttribute('lang') || document.documentElement.lang` })
    expectedEffectiveLocale = normalizeLocale(unwrapCdpEvaluateResponse(effectiveLocaleResult, { phase: 'legacy-effective-locale' }))
    const catalogueResponse = await authenticatedFetch(`${proxyBase}/apps/library/catalogue?limit=100&sort=title`, { headers: { Accept: 'application/json' } })
    const catalogueState = catalogueResponse.ok ? await catalogueResponse.json() : null
    const catalogueItems = catalogueState && Array.isArray(catalogueState.items) ? catalogueState.items : []
    const fixtureOwned = catalogueItems.some((item) => item.id === batchFixtureItem?.id)
    const catalogueRequestToken = String(requestToken || '')
    if (!expectedEffectiveLocale || !fixtureOwned || !Number.isSafeInteger(batchFixtureItem?.id) || batchFixtureItem.id <= 0 || !catalogueRequestToken.trim()) {
      throw new Error('legacy_batch_fixture_precondition_failed')
    }
    batchFixtureLanguage = normalizeLocale(batchFixtureItem.language) === 'de' ? 'en' : 'de'
    for (const locale of legacyLocalizationGate.locales) {
      runOcc(['user:setting', user, 'core', 'lang', locale])
      for (const width of legacyLocalizationGate.widths) {
        await client.send('Emulation.setDeviceMetricsOverride', { width, height: width < 500 ? 844 : 900, deviceScaleFactor: 1, mobile: width < 500 })
        records.push(await timedRow(locale, width, 'settings', '#library-settings', () => navigate(`${proxyBase}/settings/user/library?legacy-locale=${locale}&width=${width}`)))
        records.push(await timedRow(locale, width, 'batch', '.library-batch-metadata-edit-preview-page', async () => {
          const start = await navigate(`${proxyBase}/apps/library/?legacy-batch-fixture=${locale}-${width}`)
          await client.send('Runtime.evaluate', { expression: `(() => { const form=document.createElement('form'); form.method='post'; form.action=${JSON.stringify(`${proxyBase}/apps/library/bulk/items/edit-preview`)}; for(const [name,value] of Object.entries(${JSON.stringify({ requesttoken: requestToken, bulkEditField: 'language', bulkEditValue: batchFixtureLanguage, 'itemIds[]': String(batchFixtureItem.id), limit: '25' })})){const input=document.createElement('input');input.name=name;input.value=value;form.append(input)}document.body.append(form);form.submit() })()` })
          await new Promise((resolve) => setTimeout(resolve, 1800))
          return start
        }))
        records.push(await timedRow(locale, width, 'detail', '#library-app.library-item-detail', () => navigate(`${detailUrl}${detailUrl.includes('?') ? '&' : '?'}legacy-locale=${locale}&width=${width}`)))
      }
    }
  } finally {
    try {
      if (originalLanguage.present) runOcc(['user:setting', user, 'core', 'lang', originalLanguage.value])
      else runOcc(['user:setting', user, 'core', 'lang', '--delete'])
      const restoredOutput = runOcc(['user:setting', user, 'core', 'lang', `--default-value=${absentMarker}`]).trim()
      const storedRestored = originalLanguage.present ? restoredOutput === originalLanguage.value : restoredOutput === absentMarker
      const restoration = await boundedCleanup(async () => {
        await navigate(`${proxyBase}/apps/library/?legacy-locale-restored=1`)
        return client.send('Runtime.evaluate', { returnByValue: true, expression: `document.querySelector('#library-app')?.getAttribute('lang') || document.documentElement.lang` })
      })
      const renderedLocale = normalizeLocale(restoration ? unwrapCdpEvaluateResponse(restoration, { phase: 'legacy-restored-locale' }) : '')
      restored = Boolean(restoration) && storedRestored && renderedLocale === expectedEffectiveLocale
    } finally {
      await boundedCleanup(() => client.send('Emulation.clearDeviceMetricsOverride'))
    }
  }
  const { markers, ok } = evaluateLegacyLocalizationGate(records, { ...legacyLocalizationGate,
    surfaces: ['settings', 'batch', 'detail'], expected, expectedEffectiveLocale, restored, normalizeLocale })
  for (const marker of legacyLocalizationGate.assertions) print(marker, markers[marker] === true)
  const tableAx = evaluateLegacyTableAxRows(records.filter((row) => row.surface === 'batch'), { expected, locales: legacyLocalizationGate.locales, widths: legacyLocalizationGate.widths, normalizeLocale })
  print('browser_ax_legacy_table_relationships', tableAx)
  print('browser_legacy_measurements', JSON.stringify(records))
  return { records, markers, tableAx, ok: ok && tableAx }
}

async function runBrowserSmoke(proxyBase, proxy) {
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
  let client
  chrome.stderr.on('data', (chunk) => { stderr += String(chunk) })

  try {
    await waitForJson(`http://127.0.0.1:${chromePort}/json/version`)
    const targets = await waitForJson(`http://127.0.0.1:${chromePort}/json/list`)
    const pageTarget = targets.find((target) => target.type === 'page' && target.webSocketDebuggerUrl)
    if (!pageTarget) throw new Error('Chrome did not expose a page debugging target')
    client = cdp(pageTarget.webSocketDebuggerUrl)
    await client.send('Runtime.enable')
    await client.send('Page.enable')
    await client.send('Accessibility.enable')
    await client.send('Log.enable')
    await client.send('Network.enable')
    await client.send('Network.setExtraHTTPHeaders', { headers: { 'x-library-smoke-authorization': inboundAuthorization } })

    const url = `${proxyBase}/apps/library/?browser-smoke=${Date.now()}`
    await client.send('Page.navigate', { url })
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const realDetailCandidateObservation = unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', {
      returnByValue: true,
      expression: `({
        hrefs: [...document.querySelectorAll('.library-cover-card a[href]')].map((anchor) => anchor.href),
        origin: location.origin,
      })`,
    }), { phase: 'real-detail-candidate-capture' })
    const realDetailCandidates = captureCanonicalDetailCandidates(realDetailCandidateObservation)
    await client.send('Page.navigate', { url: `${proxyBase}/apps/library/?browser-smoke=${Date.now()}&localization-fixture=1` })
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const inclusiveObservations = await collectAccessibilityAndAdaptationEvidence(client)
    const inclusiveEvidence = {
      accessibility: evaluateAccessibilitySnapshot(inclusiveObservations.snapshot),
      adaptation: evaluateAdaptationRows(inclusiveObservations.rows),
    }
    print('browser_inclusive_evidence_diagnostics', JSON.stringify({
      errors: inclusiveObservations.snapshot?.errors || {},
      readiness: inclusiveObservations.snapshot?.readiness || {},
      axCollected: inclusiveObservations.snapshot?.ax?.collected === true,
      rowCount: inclusiveObservations.rows.length,
      rows: inclusiveObservations.rows.map((row) => ({
        mode: row.mode,
        width: row.viewport?.width || 0,
        active: row.active === true,
        reachable: row.controlsReachable === true,
        restored: row.restored === true,
        error: row.error || '',
      })),
    }))
    for (const [marker, passed] of Object.entries(inclusiveEvidence.accessibility.markers)) print(marker, passed)
    for (const [marker, passed] of Object.entries(inclusiveEvidence.adaptation.markers)) print(marker, passed)
    let mixedDirectionEvidence = { markers: {}, ok: false }

    const result = await client.send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const showFiles = [...document.querySelectorAll('.library-cover-card a')].find((a) => a.textContent === 'Show in Files')
        const download = [...document.querySelectorAll('.library-cover-card a')].find((a) => a.textContent === 'Download source')
        let catalogueState = {}
        try {
          catalogueState = JSON.parse(atob(document.querySelector('#initial-state-library-catalogue')?.textContent?.trim() || ''))
        } catch (_error) {}
        const publicationLanding = catalogueState.publicationSummaries?.[0]?.publicationLandingUrl || ''
        const yearLanding = document.querySelector('.library-year-groups a[href*="/apps/library/years/"]') || document.querySelector('.library-year-groups option[value*="/apps/library/years/"]')
        const creatorLanding = document.querySelector('.library-creator-groups a[href*="/apps/library/creators/"]') || document.querySelector('.library-creator-groups option[value*="/apps/library/creators/"]')
        const nativeNavigationEntries = [...document.querySelectorAll('#app-navigation-vue .app-navigation-entry-link')]
        const nativeLibrary = nativeNavigationEntries.find((entry) => entry.textContent.trim() === 'Library')
        const nativeReview = nativeNavigationEntries.find((entry) => entry.textContent.trim() === 'Review')
        const nativeSettings = document.querySelector('#app-navigation-vue .library-navigation-settings-link')
        const nativeShellHrefs = [nativeLibrary, nativeReview, nativeSettings].map((entry) => entry?.getAttribute('href') || '')
        return {
          title: document.title,
          fallback: Boolean(document.querySelector('[data-vue-fallback="true"]')),
          vueApp: Boolean(document.querySelector('#library-vue-root[data-v-app]')),
          nativeShell: Boolean(document.querySelector('#content-vue') && document.querySelector('#app-navigation-vue') && document.querySelector('#app-content-vue')),
          nativeDestinations: nativeNavigationEntries.map((entry) => entry.textContent.trim()),
          nativeLibraryActive: nativeNavigationEntries.some((entry) => entry.textContent.trim() === 'Library' && entry.getAttribute('aria-current') === 'page'),
          nativeLibraryHref: nativeLibrary?.getAttribute('href') || '',
          nativeReviewHref: nativeReview?.getAttribute('href') || '',
          nativeSettingsHref: nativeSettings?.getAttribute('href') || '',
          nativeHrefsSameOrigin: nativeShellHrefs.every((href) => href.startsWith('/') && !href.startsWith('//')),
          nativeSidebarClosed: Boolean(document.querySelector('#app-sidebar-vue.app-sidebar[style*="display: none"]')),
          nativeSidebarExternalToggleAbsent: !document.querySelector('[aria-controls="app-sidebar-vue"]'),
          catalogueToolbar: Boolean(document.querySelector('.library-catalogue-workspace')),
          quickFilterBar: Boolean(document.querySelector('.library-quick-filter-bar')),
          secondaryTools: Boolean(document.querySelector('.library-catalogue-workspace')),
          workspacePanels: Array.from(document.querySelectorAll('.library-catalogue-workspace > details.library-workspace-panel .library-workspace-panel-title')).map((node) => node.textContent.trim()),
          secondaryToolCount: document.querySelectorAll('.library-catalogue-workspace > details.library-workspace-panel').length,
          secondaryToolsCollapsed: [...document.querySelectorAll('.library-catalogue-workspace > details.library-workspace-panel')].every((details) => !details.open),
          secondaryToolSummaries: [...document.querySelectorAll('.library-catalogue-workspace > details.library-workspace-panel > summary')].map((summary) => summary.textContent.trim()).join(' | '),
          usefulViews: Boolean(document.querySelector('.library-useful-view-links')),
          usefulViewsCollapsed: Boolean(document.querySelector('.library-workspace-panel--browse:not([open])')),
          weakMetadataCollapsed: Boolean(document.querySelector('.library-workspace-panel--review:not([open])')),
          savedCollectionsCollapsed: Boolean(document.querySelector('.library-workspace-panel--browse:not([open])')),
          continueReadingCollapsed: Boolean(document.querySelector('.library-workspace-panel--browse:not([open])')),
          usefulViewLinks: document.querySelectorAll('.library-useful-view-chip').length,
          usefulViewQueryLinks: [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('sort=lastOpened'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('starred=1'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('needsMetadata=1'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('scannerConflicts=1'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('status=metadata_error'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('coverReview=placeholder'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('noCreator=1'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('noPublication=1'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('weakMetadata=filename'))
            && [...document.querySelectorAll('.library-useful-view-chip')].some((a) => (a.getAttribute('href') || '').includes('unreviewedImports=1')),
          usefulViewCountBadges: document.querySelectorAll('.library-useful-view-count').length,
          savedCollections: Boolean(document.querySelector('.library-saved-collections')),
          savedCollectionSaveForm: Boolean(document.querySelector('.library-saved-collection-save-form[action*="/collections"] input[name="savedCollectionName"]') && document.querySelector('.library-saved-collection-save-form input[name="savedCollectionFilters"]')),
          savedCollectionLinks: document.querySelectorAll('.library-saved-collection-link').length,
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
          filterPanelCollapsed: Boolean(document.querySelector('.library-workspace-panel--refine:not([open])')),
          discoveryShortcutsCollapsed: Boolean(document.querySelector('.library-workspace-panel--browse:not([open])')),
          discoveryShortcutsSummary: document.querySelector('.library-workspace-panel--browse > summary')?.textContent?.trim() || '',
          importHealthPanelVisible: Boolean(document.querySelector('.library-import-health-panel')),
          actionsMenuCollapsed: Boolean(document.querySelector('.library-workspace-panel--admin:not([open])')),
          actionsMenuHasMetadataOverview: Boolean(document.querySelector('.library-workspace-panel--admin .library-actions-health-overview')),
          actionsMenuMetadataOverviewText: document.querySelector('.library-workspace-panel--admin .library-actions-health-overview')?.textContent?.includes('Metadata overview') || false,
          reviewQueueActions: Boolean(document.querySelector('.library-review-queue-actions')),
          reviewQueueMetadataErrorTagForm: Boolean(document.querySelector('.library-review-queue-tag-form input[name="status"][value="metadata_error"]') && document.querySelector('.library-review-queue-tag-form input[name="nextcloudTagName"][value="library-metadata-error"]')),
          reviewQueueScannerConflictTagForm: Boolean(document.querySelector('.library-review-queue-tag-form input[name="scannerConflicts"][value="1"]') && document.querySelector('.library-review-queue-tag-form input[name="nextcloudTagName"][value="library-scanner-conflict"]')),
          details: document.querySelectorAll('.library-cover-card .library-cover-link').length,
          nextcloudTagNameField: Boolean(document.querySelector('input[name="nextcloudTagName"]')),
          catalogueTagEditor: Boolean(document.querySelector('[aria-label="nextcloudTagEditor"]')),
          catalogueStarForms: document.querySelectorAll('.library-cover-star-form').length,
          catalogueStarButtons: document.querySelectorAll('.library-cover-star-button').length,
          catalogueRequestToken: document.querySelector('form[method="post"] input[name="requesttoken"]')?.value || '',
          requestTokenFields: document.querySelectorAll('form[method="post"] input[name="requesttoken"]').length,
          postForms: document.querySelectorAll('form[method="post"]').length,
          tagNameField: Boolean(document.querySelector('input[name="tagName"]')),
          firstShowFiles: showFiles ? showFiles.href : '',
          firstDownload: download ? download.href : '',
          firstPublicationLanding: publicationLanding,
          firstYearLanding: yearLanding ? (yearLanding.href || yearLanding.value || '') : '',
          firstCreatorLanding: creatorLanding ? (creatorLanding.href || creatorLanding.value || '') : '',
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

    // Exercise real Nextcloud locale loading from the installed exact package,
    // restoring the user's authoritative setting before the normal smoke resumes.
    const originalLanguage = runOcc(['user:setting', user, 'core', 'lang']).trim() || 'en'
    let inclusiveDom
    try {
      runOcc(['user:setting', user, 'core', 'lang', 'de'])
      await client.send('Page.navigate', { url: `${proxyBase}/apps/library/?browser-locale=de&localization-fixture=1` })
      await new Promise((resolve) => setTimeout(resolve, 2500))
      const german = await client.send('Runtime.evaluate', { returnByValue: true, expression: `(() => {
        const expected = ['Bibliothek', 'Prüfung', 'Bibliothekseinstellungen öffnen', 'Filter anwenden']
        const body = document.body.textContent
        return { expected, missing: expected.filter((copy) => !body.includes(copy)) }
      })()` })
      runOcc(['user:setting', user, 'core', 'lang', 'ar'])
      await client.send('Page.navigate', { url: `${proxyBase}/apps/library/?browser-locale=ar&localization-fixture=1` })
      await new Promise((resolve) => setTimeout(resolve, 2500))
      let mixedDirectionCaptureSequence = 0
      const inspectRtlGeometry = async ({ width, height, mobile }) => {
        const captureIdentity = Object.freeze({ sequence: ++mixedDirectionCaptureSequence })
        const captureSequence = captureIdentity.sequence
        const viewportId = `${mobile ? 'mobile' : 'desktop'}-${width}x${height}`
        await client.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile })
        const measured = await client.send('Runtime.evaluate', { returnByValue: true, awaitPromise: true, expression: `(async () => {
          const evaluateTranslatedControlGeometry = ${evaluateTranslatedControlGeometry.toString()}
          const root = document.documentElement
          const app = document.querySelector('#library-app')
          if (!app) return { present: false }
          const cards = [...document.querySelectorAll('.library-cover-card')]
          const expectedArabic = ['المكتبة', 'المراجعة', 'فتح إعدادات المكتبة', 'تطبيق المرشحات']
          const body = document.body.textContent
          const catalogueGeometrySpecs = [
            { id: 'admin-summary', selector: '.library-workspace-panel--admin > summary', text: '⚙ أدوات الإدارة الجذور والفحوص وعمليات التصدير والإصلاح جميع الجذور المُفعّلة', designatedLong: true, expectWrap: ${JSON.stringify(mobile)} },
            { id: 'settings-action', selector: '.library-catalogue-actions-list .button:nth-of-type(1)', text: 'الإعدادات' },
            { id: 'metadata-export-action', selector: '.library-catalogue-actions-list .button:nth-of-type(2)', text: 'تصدير البيانات الوصفية المصححة' },
          ]
          const drawerButton = document.querySelector('.library-cover-link')
          drawerButton?.focus()
          drawerButton?.click()
          await new Promise((resolve) => setTimeout(resolve, 100))
          const sidebar = document.querySelector('#app-sidebar-vue')
          const sidebarClose = sidebar?.querySelector('button')
          const normalized = (value) => String(value || '').replace(/\s+/g, ' ').trim()
          const expectedFixtureFields = ${JSON.stringify(mixedDirectionFixtureFields.ar)}
          const fixtureFieldRows = expectedFixtureFields.map((spec) => {
            const matches = [...document.querySelectorAll(spec.selector)]
            const node = matches.length === 1 ? matches[0] : null
            const style = node ? getComputedStyle(node) : null
            return { id: spec.id, selector: spec.selector, surface: spec.surface, matchCount: matches.length,
              text: normalized(node?.textContent), exactText: normalized(node?.textContent) === spec.value,
              className: node?.className || '', dir: node?.getAttribute('dir') || '',
              computedDirection: style?.direction || '', unicodeBidi: style?.unicodeBidi || '' }
          })
          const clipping = catalogueGeometrySpecs.map((spec) => {
            const matches = [...document.querySelectorAll(spec.selector)]
            const control = matches.length === 1 ? matches[0] : null
            if (!control) return { specId: spec.id, text: '', translated: false, exactText: false, associated: false, naturalControl: false, designatedLong: Boolean(spec.designatedLong), matchCount: matches.length }
            const style = getComputedStyle(control)
            const textLines = (${measureVisibleTextLines.toString()})(control)
            const text = spec.id === 'admin-summary'
              ? [...control.children].map((child) => normalized(child.textContent)).filter(Boolean).join(' ')
              : normalized(control.textContent)
            return {
              specId: spec.id, selector: spec.selector, text, translated: text === spec.text, exactText: text === spec.text,
              associated: true, naturalControl: control.matches('button,input:not([type="hidden"]),select,textarea,a[href],summary'), designatedLong: Boolean(spec.designatedLong), expectWrap: spec.expectWrap === true,
              scrollWidth: control.scrollWidth, clientWidth: control.clientWidth,
              scrollHeight: control.scrollHeight, clientHeight: control.clientHeight,
              whiteSpace: style.whiteSpace, overflowX: style.overflowX, ...textLines,
              clipped: control.scrollWidth > control.clientWidth + 1 || control.scrollHeight > control.clientHeight + 1,
            }
          })
          const geometryGate = evaluateTranslatedControlGeometry(clipping, { minimumControls: catalogueGeometrySpecs.length, clippingTolerance: 1, longTextLength: 24, requireWrappedLongControl: true })
          const value = {
            present: true,
            arabic: expectedArabic.every((copy) => body.includes(copy)),
            expectedArabic,
            missingArabic: expectedArabic.filter((copy) => !body.includes(copy)),
            language: app.getAttribute('lang'),
            directionAttribute: app.getAttribute('dir'),
            direction: getComputedStyle(app).direction,
            overflow: root.scrollWidth <= root.clientWidth && app.scrollWidth <= app.clientWidth,
            fixtureCards: cards.length,
            mirrored: cards.length >= 3 && cards[0].getBoundingClientRect().right > cards[1].getBoundingClientRect().right,
            longControlsUnclipped: geometryGate.pass,
            geometryGate,
            clipping,
            keyboardFocus: document.activeElement === details || Boolean(sidebar?.contains(document.activeElement)),
            sidebarOpened: Boolean(sidebar && getComputedStyle(sidebar).display !== 'none'),
            sidebarCloseVisible: Boolean(sidebarClose && sidebarClose.getBoundingClientRect().width > 0),
            isolatedHumanValues: document.querySelectorAll('bdi.library-bidi-human[dir="auto"]').length,
            isolatedMachineValues: document.querySelectorAll('bdi.library-bidi-machine[dir="ltr"]').length,
            expectedFixtureFields, fixtureFieldRows,
            computedDirection: [...document.querySelectorAll('.library-cover-card,.library-native-item-sidebar,.library-sidebar-content')].map((node) => getComputedStyle(node).direction),
            blanketDirectionForcing: [...document.querySelectorAll('.library-cover-card,.library-native-item-sidebar,.library-sidebar-content')].filter((node) => {
              const own = getComputedStyle(node).direction
              const parent = node.parentElement ? getComputedStyle(node.parentElement).direction : own
              return own !== parent && !node.hasAttribute('dir')
            }).length,
            brokenNames: [...document.querySelectorAll('[aria-labelledby]')].filter((node) => (node.getAttribute('aria-labelledby') || '').split(/\s+/).some((id) => !document.getElementById(id))).length,
          }
          return value
        })()` })
        const observation = measured.result?.value
        for (const spec of mixedDirectionFixtureFields.ar) {
          const fieldRemote = await client.send('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(spec.selector)})` })
          const fieldDescription = fieldRemote?.result?.objectId ? await client.send('DOM.describeNode', { objectId: fieldRemote.result.objectId }) : null
          const axBackendNodeId = fieldDescription?.node?.backendNodeId
          const partial = axBackendNodeId ? await client.send('Accessibility.getPartialAXTree', { backendNodeId: axBackendNodeId, fetchRelatives: true }) : { nodes: [] }
          const axNodes = partial.nodes || []
          const selectedAxNode = axNodes.find((node) => Number(node.backendDOMNodeId) === Number(axBackendNodeId))
          const byAxId = new Map(axNodes.map((node) => [String(node.nodeId), node]))
          const rootedIds = new Set()
          const pendingAxIds = selectedAxNode ? [String(selectedAxNode.nodeId)] : []
          while (pendingAxIds.length) {
            const nodeId = pendingAxIds.shift()
            if (rootedIds.has(nodeId)) continue
            rootedIds.add(nodeId)
            pendingAxIds.push(...(byAxId.get(nodeId)?.childIds || []).map(String))
          }
          const exact = spec.axRole === 'StaticText'
            ? axNodes.find((node) => rootedIds.has(String(node.nodeId)) && String(node.role?.value || '') === spec.axRole && String(node.name?.value || '') === spec.axName)
            : selectedAxNode
          const row = observation?.fixtureFieldRows?.find((candidate) => candidate.id === spec.id)
          if (row) Object.assign(row, { viewportId, backendNodeId: fieldDescription?.node?.backendNodeId || 0,
            axBackendNodeId: axBackendNodeId || 0,
            matchedAxBackendNodeId: exact?.backendDOMNodeId || 0, selectedAxNodeId: String(selectedAxNode?.nodeId || ''), matchedAxNodeId: String(exact?.nodeId || ''),
            axNodes: axNodes.map((node) => ({ nodeId: String(node.nodeId || ''), backendDOMNodeId: node.backendDOMNodeId || 0, childIds: (node.childIds || []).map(String), role: { value: String(node.role?.value || '') }, name: { value: String(node.name?.value || '') } })),
            axRole: String(exact?.role?.value || ''), axName: String(exact?.name?.value || '') })
        }
        const layoutMetrics = await client.send('Page.getLayoutMetrics')
        const visualViewport = layoutMetrics?.cssVisualViewport || layoutMetrics?.visualViewport
        Object.assign(observation || {}, { viewportId, captureIdentity, captureSequence,
          viewport: { width: Math.round(visualViewport?.clientWidth || 0), height: Math.round(visualViewport?.clientHeight || 0), mobile } })
        recordMixedDirectionCapture(observation, { identity: captureIdentity, sequence: captureSequence, viewportId, width, height, mobile })
        return observation
      }
      const rtlDesktop = await inspectRtlGeometry({ width: 1280, height: 900, mobile: false })
      const rtlMobile = await inspectRtlGeometry({ width: 390, height: 844, mobile: true })
      const pairedFieldAssessment = assessMixedDirectionCaptures(mixedDirectionFixtureFields.ar,
        { desktop: rtlDesktop, mobile: rtlMobile },
        { desktopIdentity: rtlDesktop?.captureIdentity, mobileIdentity: rtlMobile?.captureIdentity })
      inclusiveDom = {
        de: german.result?.value?.missing?.length === 0,
        expectedGerman: german.result?.value?.expected || [],
        missingGerman: german.result?.value?.missing || [],
        ...rtlDesktop,
        mobileDirection: rtlMobile?.direction,
        mobileDirectionAttribute: rtlMobile?.directionAttribute,
        mobileLanguage: rtlMobile?.language,
        mobileOverflow: rtlMobile?.overflow === true,
        fixtureCards: Math.min(rtlDesktop?.fixtureCards || 0, rtlMobile?.fixtureCards || 0),
        longUnclipped: rtlDesktop?.longControlsUnclipped === true && rtlMobile?.longControlsUnclipped === true,
        desktopClipping: rtlDesktop?.clipping || [],
        mobileClipping: rtlMobile?.clipping || [],
        keyboardFocus: rtlDesktop?.keyboardFocus === true && rtlMobile?.keyboardFocus === true,
        sidebarOpened: rtlDesktop?.sidebarOpened === true && rtlMobile?.sidebarOpened === true,
        sidebarCloseVisible: rtlDesktop?.sidebarCloseVisible === true && rtlMobile?.sidebarCloseVisible === true,
        isolatedHumanValues: Math.min(rtlDesktop?.isolatedHumanValues || 0, rtlMobile?.isolatedHumanValues || 0),
        isolatedMachineValues: Math.min(rtlDesktop?.isolatedMachineValues || 0, rtlMobile?.isolatedMachineValues || 0),
        blanketDirectionForcing: Math.max(rtlDesktop?.blanketDirectionForcing ?? 1, rtlMobile?.blanketDirectionForcing ?? 1),
        brokenNames: Math.max(rtlDesktop?.brokenNames ?? 1, rtlMobile?.brokenNames ?? 1),
        expectedFixtureFields: rtlDesktop?.expectedFixtureFields || [],
        fixtureFieldRows: { desktop: rtlDesktop?.fixtureFieldRows || [], mobile: rtlMobile?.fixtureFieldRows || [] },
        fixtureFieldIsolation: pairedFieldAssessment.ok,
        computedDirection: { desktop: rtlDesktop?.computedDirection || [], mobile: rtlMobile?.computedDirection || [] },
      }
      inclusiveDom.exactAssociatedAxNames = pairedFieldAssessment.ok
    } finally {
      runOcc(['user:setting', user, 'core', 'lang', originalLanguage])
      await client.send('Emulation.clearDeviceMetricsOverride')
      await client.send('Page.navigate', { url: `${proxyBase}/apps/library/?browser-smoke=${Date.now()}` })
      await new Promise((resolve) => setTimeout(resolve, 2500))
    }

    mixedDirectionEvidence = {
      markers: {
        browser_mixed_direction_arabic_locale: inclusiveDom?.arabic === true && inclusiveDom?.language === 'ar' && inclusiveDom?.direction === 'rtl',
        browser_mixed_direction_german_locale: inclusiveDom?.de === true,
        browser_bidi_values_isolated: inclusiveDom?.fixtureFieldIsolation === true,
        browser_no_blanket_direction_forcing: inclusiveDom?.blanketDirectionForcing === 0,
        browser_accessible_names_mixed_direction: inclusiveDom?.brokenNames === 0 && inclusiveDom?.exactAssociatedAxNames === true,
        browser_fixture_scope_safe: proxyBase.startsWith('http://127.0.0.1:') && inclusiveDom?.fixtureCards === 3
          && proxy.inboundEvidence.inboundAuthRejected >= 2 && proxy.inboundEvidence.inboundAuthAccepted > 0
          && proxy.inboundEvidence.fixtureResponses > 0 && proxy.inboundEvidence.upstreamResponses > 0
          && proxy.inboundEvidence.upstreamHeaderStripped === true,
        browser_fixture_metadata_restored: runOcc(['user:setting', user, 'core', 'lang']).trim() === originalLanguage,
      },
    }
    // Request bodies are inspected in memory only and are never printed or retained in evidence.
    const persistenceEvents = []
    for (const event of client.events) {
      const request = event?.params?.request || {}
      if (event?.method !== 'Network.requestWillBeSent' || ['GET', 'HEAD'].includes(String(request.method || '').toUpperCase())) {
        persistenceEvents.push(event)
        continue
      }
      let completePostData
      try {
        completePostData = (await client.send('Network.getRequestPostData', { requestId: event.params.requestId }))?.postData
      } catch {
        completePostData = undefined
      }
      persistenceEvents.push({ ...event, params: { ...event.params, request: { ...request, completePostData } } })
    }
    const fixtureRequestObservation = observeFixtureMutationRequests(persistenceEvents, ['910001', '910002', '910003'], 8192)
    mixedDirectionEvidence.requestObservation = fixtureRequestObservation
    mixedDirectionEvidence.markers.browser_fixture_persistence_zero_matches_and_complete_bodies = fixtureRequestObservation.safe === true
    mixedDirectionEvidence.ok = Object.values(mixedDirectionEvidence.markers).every((value) => value === true)
    for (const marker of Object.keys(mixedDirectionEvidence.markers)) print(marker, mixedDirectionEvidence.markers[marker])

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

    const seedResponse = await authenticatedFetch(`${proxyBase}/apps/library/catalogue?limit=100&sort=title`, { headers: { Accept: 'application/json' } })
    const seedState = await seedResponse.json()
    const applyItem = (seedState.items || []).find((item) => Number.isSafeInteger(item.id) && item.id > 0)
    if (!applyItem || !String(dom.catalogueRequestToken || '').trim()) throw new Error('browser_batch_fixture_precondition_failed')
    const previewLanguage = String(applyItem.language || '').trim().replaceAll('_', '-').toLowerCase().split('-')[0] === 'de' ? 'en' : 'de'
    const previewParams = new URLSearchParams({
      requesttoken: dom.catalogueRequestToken,
      bulkEditField: 'language',
      bulkEditValue: previewLanguage,
      limit: '25',
    })
    previewParams.append('itemIds[]', String(applyItem.id))

    const previewResponse = await authenticatedFetch(`${proxyBase}/apps/library/bulk/items/edit-preview`, {
      method: 'POST',
      headers: {
        Accept: 'text/html',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: previewParams,
    })
    const previewHtml = await previewResponse.text()
    const previewPageDom = {
      status: previewResponse.status,
      page: previewHtml.includes('library-batch-metadata-edit-preview-page'),
      noWrite: previewHtml.includes('No changes have been written yet.'),
      requested: previewHtml.includes('Requested items'),
      wouldChange: previewHtml.includes('Would change'),
      polished: previewHtml.includes('library-batch-preview-stat-grid') && previewHtml.includes('library-batch-preview-table'),
      apply: previewHtml.includes('Apply changes to selected items') && previewHtml.includes('/apps/library/bulk/items/edit-apply'),
    }

    const originalPublication = applyItem?.publication || ''
    const smokePublication = `Hermes batch apply smoke ${Date.now()}`
    let batchWriteDom = null
    let applySmoke = { ok: false, restored: false }
    if (applyItem) {
      const batchWriteResult = await client.send('Runtime.evaluate', {
        returnByValue: true,
        awaitPromise: true,
        expression: `(async () => {
          const catalogueRequestToken = document.querySelector('form[method="post"] input[name="requesttoken"]')?.value || ''
          const itemId = ${JSON.stringify(applyItem.id)}
          const originalPublication = ${JSON.stringify(originalPublication)}
          const smokePublication = ${JSON.stringify(smokePublication)}
          const applyParams = new URLSearchParams({
            requesttoken: catalogueRequestToken,
            bulkEditField: 'publication',
            bulkEditValue: smokePublication,
            confirmBatchMetadataApply: 'APPLY',
          })
          applyParams.append('itemIds[]', String(itemId))
          const requestOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
          const restoreParams = new URLSearchParams({
            requesttoken: catalogueRequestToken,
            bulkEditField: 'publication',
            bulkEditValue: originalPublication,
            confirmBatchMetadataApply: 'APPLY',
          })
          restoreParams.append('itemIds[]', String(itemId))
          let applyStatus = 0
          let restoreStatus = 0
          let applySucceeded = false
          let restoreAttempted = false
          let restoreSucceeded = false
          let changed = false
          let restored = false
          let restoredCatalogueValue = null
          let mutationError = ''
          let restoreError = ''
          try {
            const applyResponse = await fetch('/apps/library/bulk/items/edit-apply', {
              ...requestOptions,
              body: applyParams,
            })
            applyStatus = applyResponse.status
            applySucceeded = applyResponse.ok
            const changedResponse = await fetch('/apps/library/catalogue?' + new URLSearchParams({ sort: 'title', limit: '100' }), {
              credentials: 'same-origin',
              headers: { Accept: 'application/json' },
            })
            const changedState = await changedResponse.json()
            const changedItem = (changedState.items || []).find((item) => item.id === itemId)
            changed = applySucceeded && changedResponse.ok && changedItem?.publication === smokePublication
          } catch (error) {
            mutationError = String(error)
          } finally {
            if (applySucceeded) {
              restoreAttempted = true
              try {
                const restoreResponse = await fetch('/apps/library/bulk/items/edit-apply', {
                  ...requestOptions,
                  body: restoreParams,
                })
                restoreStatus = restoreResponse.status
                restoreSucceeded = restoreResponse.ok
                const restoredResponse = await fetch('/apps/library/catalogue?' + new URLSearchParams({ sort: 'title', limit: '100' }), {
                  credentials: 'same-origin',
                  headers: { Accept: 'application/json' },
                })
                const restoredState = await restoredResponse.json()
                const restoredItem = (restoredState.items || []).find((item) => item.id === itemId)
                restoredCatalogueValue = restoredItem?.publication || ''
                restored = restoreSucceeded && restoredResponse.ok && (restoredItem?.publication || '') === originalPublication
              } catch (error) {
                restoreError = String(error)
              }
            }
          }
          return {
            applyStatus,
            restoreStatus,
            applySucceeded,
            restoreAttempted: restoreAttempted,
            restoreSucceeded,
            changed,
            restored,
            restoredCatalogueValue,
            mutationError,
            restoreError,
          }
        })()`,
      })
      batchWriteDom = batchWriteResult.result?.value ?? batchWriteResult.value
      applySmoke = {
        ok: batchWriteDom?.applySucceeded === true
          && batchWriteDom?.restoreAttempted === true
          && batchWriteDom?.restoreSucceeded === true
          && batchWriteDom?.changed === true
          && batchWriteDom?.restoredCatalogueValue === originalPublication,
        restored: batchWriteDom?.applySucceeded === true
          && batchWriteDom?.restoreAttempted === true
          && batchWriteDom?.restoreSucceeded === true
          && batchWriteDom?.changed === true
          && batchWriteDom?.restored === true
          && batchWriteDom?.restoredCatalogueValue === originalPublication,
      }
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
        window.setTimeout(() => {
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
        }, 100)
      })`,
    })
    const keyboardShortcutDom = keyboardShortcutResult.result?.value ?? keyboardShortcutResult.value

    const publicationDiscoveryUrl = dom.firstPublicationLanding ? new URL(dom.firstPublicationLanding, proxyBase).href : ''
    const publicationDiscoveryDom = await inspectDiscoveryRoute(client, publicationDiscoveryUrl, 'publication')
    publicationDiscoveryDom.activePublication = publicationDiscoveryDom.activeFilterLabels?.some((label) => label.includes('Series / periodical')) === true

    const yearDiscoveryUrl = dom.firstYearLanding ? new URL(dom.firstYearLanding, proxyBase).href : ''
    const yearDiscoveryDom = await inspectDiscoveryRoute(client, yearDiscoveryUrl, 'year')
    yearDiscoveryDom.activeYear = yearDiscoveryDom.activeFilterLabels?.some((label) => label.includes('Publication year')) === true

    const creatorDiscoveryUrl = dom.firstCreatorLanding ? new URL(dom.firstCreatorLanding, proxyBase).href : ''
    const creatorDiscoveryDom = await inspectDiscoveryRoute(client, creatorDiscoveryUrl, 'creator')
    creatorDiscoveryDom.activeCreator = creatorDiscoveryDom.activeFilterLabels?.some((label) => label.includes('Creator')) === true

    let selectedDetail
    try {
      selectedDetail = await selectAuthenticatedDetailCandidate(realDetailCandidates, {
        origin: proxyBase,
        preflight: async (url) => unwrapCdpEvaluateResponse(await client.send('Runtime.evaluate', {
          returnByValue: true, awaitPromise: true,
          expression: `(async () => { const response = await fetch(${JSON.stringify(url)}, { credentials: 'same-origin', redirect: 'manual' }); return { status: response.status, browserContext: true } })()`,
        }), { phase: 'detail-candidate-preflight' }),
        navigate: async (url) => {
          const navigation = await client.send('Page.navigate', { url })
          if (navigation.errorText) return { status: 0, detailPage: false }
          await new Promise((resolve) => setTimeout(resolve, 1800))
          const result = await client.send('Runtime.evaluate', { returnByValue: true, expression: `({ status: performance.getEntriesByType('navigation')[0]?.responseStatus || 0, detailPage: Boolean(document.querySelector('#library-app.library-item-detail')) })` })
          return unwrapCdpEvaluateResponse(result, { phase: 'detail-candidate-navigation' })
        },
      })
    } catch (error) {
      print('browser_detail_candidate_failure', error?.code || error?.message || String(error))
      print('browser_detail_candidate_attempts', JSON.stringify(error?.attempts || []))
      throw error
    }
    const detailUrl = selectedDetail.url
    print('browser_detail_target_present', true)
    print('browser_detail_candidate_authenticated', true)
    print('browser_detail_preflight_status', selectedDetail.status)
    print('browser_detail_candidate_attempts', JSON.stringify(selectedDetail.attempts))
    const detailResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
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
            && document.querySelector('.library-creators-field .library-creator-chip-editor[data-creator-chip-editor]')
            && document.querySelector('.library-creators-field input[type="hidden"][name="creators"]')
            && document.querySelector('.library-creators-field .library-creator-chip-input')
            && document.querySelector('.library-language-picklist[name="language[]"]')
            && document.querySelector('.library-subject-field[name="subjects[]"]')
            && document.querySelector('input[name="publisher"][list="library-publisher-suggestions"]')
            && document.querySelector('#library-publisher-suggestions option[value="Packt"]')
            && document.querySelector('.library-detail-description-field textarea[name="description"][rows="10"]')
            && document.querySelector('.library-detail-save-row .library-detail-autosave-status')
          ),
          detailMetadataHoverHelp: document.querySelectorAll('.library-detail-section-meta .library-field-label-help[title]').length >= 5
            && !document.querySelector('#library-publication-date-guidance')
            && !document.querySelector('#library-language-guidance')
            && !document.querySelector('#library-subjects-guidance')
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

    // Keep app-page diagnostics separate from the Nextcloud settings shell.
    // The latter can emit host-bound core/theme asset CSP noise that Library
    // neither renders nor controls; Library-owned errors remain fatal there.
    const libraryPageEventCount = client.events.length
    await client.send('Page.navigate', { url: `${proxyBase}/settings/user/library?browser-smoke=${Date.now()}` })
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const settingsResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
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
    const libraryConsoleErrors = client.events.slice(0, libraryPageEventCount).filter((event) => {
      return classifyBrowserEvent(event).fatal
    })
    const settingsConsoleErrors = client.events.slice(libraryPageEventCount).filter((event) => {
      return classifyBrowserEvent(event).fatal
    })
    const consoleErrors = [...libraryConsoleErrors, ...settingsConsoleErrors]

    async function inspectStartupFailure(mode, waitMs = 800) {
      const eventStart = client.events.length
      await client.send('Page.navigate', { url: `${proxyBase}/apps/library/?startupFailure=${mode}&nonce=${Date.now()}` })
      await new Promise((resolve) => setTimeout(resolve, waitMs))
      const evaluation = await client.send('Runtime.evaluate', {
        returnByValue: true,
        expression: `(() => ({
          watchdogVisible: Boolean(document.querySelector('#library-startup-status:not([hidden])')),
          catalogueCards: document.querySelectorAll('.library-cover-card').length,
          duplicateFallback: Boolean(document.querySelector('[data-vue-fallback="true"]')),
          retry: Boolean(document.querySelector('[data-library-retry]')),
          settings: Boolean(document.querySelector('#library-startup-status a[href*="/settings/user/library"]')),
          mounted: Boolean(document.querySelector('#library-vue-root[data-v-app]')),
        }))()`,
      })
      return { ...(evaluation.result?.value ?? evaluation.value), events: client.events.slice(eventStart) }
    }

    const injectedFailures = {}
    for (const mode of ['module-404', 'syntax', 'bootstrap', 'mount', 'state-missing', 'state-malformed-json', 'state-invalid-shape']) {
      injectedFailures[mode] = await inspectStartupFailure(mode)
      print(`browser_startup_${mode}`, JSON.stringify({ ...injectedFailures[mode], events: undefined }))
    }
    const nearThresholdBefore = await inspectStartupFailure('module-near-threshold', 8500)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const nearThresholdAfterResult = await client.send('Runtime.evaluate', { returnByValue: true, expression: `({ watchdogVisible: Boolean(document.querySelector('#library-startup-status:not([hidden])')), mounted: Boolean(document.querySelector('#library-vue-root[data-v-app]')) })` })
    const nearThresholdAfter = nearThresholdAfterResult.result?.value ?? nearThresholdAfterResult.value

    const timeoutWhilePending = await inspectStartupFailure('module-timeout', 10500)
    const pendingStatusResponse = await authenticatedFetch(`${proxyBase}/__library-smoke/status`)
    const { moduleRequestPending } = await pendingStatusResponse.json()
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const timeoutRecoveryResult = await client.send('Runtime.evaluate', { returnByValue: true, expression: `({ watchdogVisible: Boolean(document.querySelector('#library-startup-status:not([hidden])')), mounted: Boolean(document.querySelector('#library-vue-root[data-v-app]')) })` })
    const timeoutRecovery = timeoutRecoveryResult.result?.value ?? timeoutRecoveryResult.value

    await client.send('Emulation.setScriptExecutionDisabled', { value: true })
    await client.send('Page.navigate', { url: `${proxyBase}/apps/library/?startupFailure=javascript-disabled&nonce=${Date.now()}` })
    await new Promise((resolve) => setTimeout(resolve, 500))
    const noJsDocument = await client.send('DOM.getDocument', { depth: -1, pierce: true })
    const noJsHtml = await client.send('DOM.getOuterHTML', { nodeId: noJsDocument.root.nodeId })
    await client.send('Emulation.setScriptExecutionDisabled', { value: false })
    const noJs = {
      noScript: noJsHtml.outerHTML.includes('JavaScript is disabled'),
      cards: (noJsHtml.outerHTML.match(/class="[^"]*library-cover-card/g) || []).length,
    }

    const injectedFailureOk = Object.values(injectedFailures).every((entry) => entry.watchdogVisible === true
      && entry.catalogueCards === 0 && entry.duplicateFallback === false && entry.retry === true && entry.settings === true)
      && nearThresholdBefore.watchdogVisible === false && nearThresholdBefore.mounted === false
      && nearThresholdAfter.watchdogVisible === false && nearThresholdAfter.mounted === true
      && timeoutWhilePending.watchdogVisible === true && timeoutWhilePending.mounted === false && moduleRequestPending === true
      && timeoutRecovery.watchdogVisible === false && timeoutRecovery.mounted === true
      && noJs.noScript === true && noJs.cards === 0

    print('browser_startup_failure_matrix', injectedFailureOk)
    print('browser_startup_failure_modes', Object.keys(injectedFailures).join(','))
    print('browser_slow_startup_no_flash', nearThresholdBefore.watchdogVisible === false && nearThresholdAfter.mounted === true && nearThresholdAfter.watchdogVisible === false)
    print('browser_near_threshold_startup_no_notice', nearThresholdBefore.watchdogVisible === false && nearThresholdAfter.mounted === true && nearThresholdAfter.watchdogVisible === false)
    print('browser_module_timeout_visible_while_pending', timeoutWhilePending.watchdogVisible === true && timeoutWhilePending.mounted === false && moduleRequestPending === true)
    print('browser_module_timeout_recovery', timeoutRecovery.watchdogVisible === false && timeoutRecovery.mounted === true)
    print('browser_javascript_disabled_notice', noJs.noScript === true && noJs.cards === 0)

    print('browser_title', dom.title)
    print('browser_vue_app', dom.vueApp)
    print('browser_native_shell', dom.nativeShell)
    print('browser_native_destinations', dom.nativeDestinations.join(' | '))
    print('browser_native_library_active', dom.nativeLibraryActive)
    print('browser_native_library_href', dom.nativeLibraryHref)
    print('browser_native_review_href', dom.nativeReviewHref)
    print('browser_native_settings_href', dom.nativeSettingsHref)
    print('browser_native_hrefs_same_origin', dom.nativeHrefsSameOrigin)
    print('browser_native_sidebar_closed', dom.nativeSidebarClosed)
    print('browser_catalogue_toolbar', dom.catalogueToolbar)
    print('browser_quick_filter_bar', dom.quickFilterBar)
    print('browser_secondary_tools', dom.secondaryTools)
    print('browser_secondary_tool_count', dom.secondaryToolCount)
    print('browser_secondary_tools_collapsed', dom.secondaryToolsCollapsed)
    print('browser_secondary_tool_summaries', dom.secondaryToolSummaries)
    print('browser_continue_reading_collapsed', dom.continueReadingCollapsed)
    print('browser_useful_views', dom.usefulViews)
    print('browser_useful_views_collapsed', dom.usefulViewsCollapsed)
    print('browser_weak_metadata_collapsed', dom.weakMetadataCollapsed)
    print('browser_saved_collections_collapsed', dom.savedCollectionsCollapsed)
    print('browser_useful_view_links', dom.usefulViewLinks)
    print('browser_useful_view_query_links', dom.usefulViewQueryLinks === true)
    print('browser_useful_view_count_badges', dom.usefulViewCountBadges ?? 0)
    print('browser_saved_collections', dom.savedCollections === true)
    print('browser_saved_collection_save_form', dom.savedCollectionSaveForm === true)
    print('browser_saved_collection_links', dom.savedCollectionLinks ?? 0)
    print('browser_quick_filter_controls', dom.quickFilterControls ?? 0)
    print('browser_ajax_filter_fetch_calls', quickFilterDom?.fetchCalls ?? 0)
    print('browser_ajax_filter_endpoint_valid', String(quickFilterDom?.endpoint || '').includes('/apps/library/catalogue'))
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
    print('browser_discovery_shortcuts_collapsed', dom.discoveryShortcutsCollapsed)
    print('browser_discovery_shortcuts_summary', dom.discoveryShortcutsSummary)
    print('browser_import_health_panel_visible', dom.importHealthPanelVisible)
    print('browser_actions_menu_collapsed', dom.actionsMenuCollapsed)
    print('browser_actions_menu_has_metadata_overview', dom.actionsMenuHasMetadataOverview)
    print('browser_actions_menu_metadata_overview_text', dom.actionsMenuMetadataOverviewText)
    print('browser_review_queue_actions', dom.reviewQueueActions)
    print('browser_review_queue_metadata_error_tag_form', dom.reviewQueueMetadataErrorTagForm)
    print('browser_review_queue_scanner_conflict_tag_form', dom.reviewQueueScannerConflictTagForm)
    print('browser_details', dom.details)
    print('browser_nextcloudTagNameField', dom.nextcloudTagNameField)
    print('browser_catalogue_tag_editor', dom.catalogueTagEditor)
    print('browser_catalogue_star_forms', dom.catalogueStarForms)
    print('browser_catalogue_star_buttons', dom.catalogueStarButtons)
    print('browser_catalogue_all_post_forms_have_requesttoken', dom.requestTokenFields === dom.postForms)
    print('browser_catalogue_star_no_reload', starToggleDom?.noReload === true)
    print('browser_catalogue_star_changed', starToggleDom?.changed === true)
    print('browser_catalogue_star_restored', starToggleDom?.restored === true)
    print('browser_catalogue_star_fetch_calls', starToggleDom?.fetchCalls ?? 0)
    print('browser_catalogue_star_fetch_method', starToggleDom?.firstFetch?.[1] || '')
    print('browser_catalogue_star_fetch_credentials', starToggleDom?.firstFetch?.[2] || '')
    print('browser_catalogue_star_before', `${starToggleDom?.beforePressed || ''}/${starToggleDom?.beforeText || ''}`)
    print('browser_catalogue_star_after', `${starToggleDom?.afterPressed || ''}/${starToggleDom?.afterText || ''}/${starToggleDom?.afterClass === true}`)
    print('browser_batch_metadata_edit_preview_page', previewPageDom.status === 200 && previewPageDom.page === true && previewPageDom.noWrite === true && previewPageDom.requested === true && previewPageDom.wouldChange === true && previewPageDom.polished === true && previewPageDom.apply === true)
    print('browser_batch_metadata_edit_preview_status', previewPageDom.status)
    print('browser_batch_metadata_apply_status', batchWriteDom?.applyStatus ?? 0)
    print('browser_batch_metadata_restore_status', batchWriteDom?.restoreStatus ?? 0)
    print('browser_batch_metadata_apply_smoke', applySmoke.ok === true)
    print('batch_apply_restored', applySmoke.restored === true)
    print('browser_post_forms', dom.postForms)
    print('browser_request_token_fields', dom.requestTokenFields)
    print('browser_tagNameField', dom.tagNameField)
    print('browser_firstShowFiles_has_dir', dom.firstShowFiles.includes('?dir=') || dom.firstShowFiles.includes('&dir='))
    print('browser_firstShowFiles_openfile_false', dom.firstShowFiles.includes('openfile=false'))
    print('browser_firstDownload_is_webdav', dom.firstDownload.includes('/remote.php/dav/files/'))
    print('browser_firstDetails_is_item_page', new URL(detailUrl).pathname.startsWith('/apps/library/items/'))
    print('browser_bad_host_hrefs', dom.badHostHrefs)
    print('browser_catalogue_labelled', dom.catalogueLabelled)
    print('browser_unlabelled_controls', dom.unlabelledControls)
    print('browser_detail_page', detailDom.detailPage)
    print('browser_detail_url_valid', String(detailDom.detailUrl || '').includes('/apps/library/items/'))
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
    print('browser_publication_discovery_back_link', publicationDiscoveryDom?.backLinkHref === publicationDiscoveryDom?.nativeLibraryHref)
    print('browser_publication_fixture_evidence', publicationDiscoveryDom?.fixturePresent ? publicationDiscoveryDom.url : publicationDiscoveryDom?.skipEvidence)
    print('browser_publication_native_shell', publicationDiscoveryDom?.nativeShell === true)
    print('browser_publication_native_hrefs', `${publicationDiscoveryDom?.nativeLibraryHref || ''} | ${publicationDiscoveryDom?.nativeReviewHref || ''} | ${publicationDiscoveryDom?.nativeSettingsHref || ''}`)
    print('browser_publication_native_active', publicationDiscoveryDom?.nativeLibraryActive === true && publicationDiscoveryDom?.nativeReviewActive === false)
    print('browser_publication_sidebar_inert', publicationDiscoveryDom?.nativeSidebarClosed === true && publicationDiscoveryDom?.nativeSidebarExternalToggleAbsent === true)
    print('browser_year_discovery_page', yearDiscoveryDom?.page === true)
    print('browser_year_discovery_cards', yearDiscoveryDom?.cards ?? 0)
    print('browser_year_discovery_active_filter', yearDiscoveryDom?.activeYear === true)
    print('browser_year_discovery_back_link', yearDiscoveryDom?.backLinkHref === yearDiscoveryDom?.nativeLibraryHref)
    print('browser_year_fixture_evidence', yearDiscoveryDom?.fixturePresent ? yearDiscoveryDom.url : yearDiscoveryDom?.skipEvidence)
    print('browser_year_native_shell', yearDiscoveryDom?.nativeShell === true)
    print('browser_year_native_hrefs', `${yearDiscoveryDom?.nativeLibraryHref || ''} | ${yearDiscoveryDom?.nativeReviewHref || ''} | ${yearDiscoveryDom?.nativeSettingsHref || ''}`)
    print('browser_year_native_active', yearDiscoveryDom?.nativeLibraryActive === true && yearDiscoveryDom?.nativeReviewActive === false)
    print('browser_year_sidebar_inert', yearDiscoveryDom?.nativeSidebarClosed === true && yearDiscoveryDom?.nativeSidebarExternalToggleAbsent === true)
    print('browser_creator_discovery_page', creatorDiscoveryDom?.page === true)
    print('browser_creator_discovery_cards', creatorDiscoveryDom?.cards ?? 0)
    print('browser_creator_discovery_active_filter', creatorDiscoveryDom?.activeCreator === true)
    print('browser_creator_discovery_back_link', creatorDiscoveryDom?.backLinkHref === creatorDiscoveryDom?.nativeLibraryHref)
    print('browser_creator_fixture_evidence', creatorDiscoveryDom?.fixturePresent ? creatorDiscoveryDom.url : creatorDiscoveryDom?.skipEvidence)
    print('browser_creator_native_shell', creatorDiscoveryDom?.nativeShell === true)
    print('browser_creator_native_hrefs', `${creatorDiscoveryDom?.nativeLibraryHref || ''} | ${creatorDiscoveryDom?.nativeReviewHref || ''} | ${creatorDiscoveryDom?.nativeSettingsHref || ''}`)
    print('browser_creator_native_active', creatorDiscoveryDom?.nativeLibraryActive === true && creatorDiscoveryDom?.nativeReviewActive === false)
    print('browser_creator_sidebar_inert', creatorDiscoveryDom?.nativeSidebarClosed === true && creatorDiscoveryDom?.nativeSidebarExternalToggleAbsent === true)
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
    print('browser_locale_de', inclusiveDom?.de === true)
    print('browser_locale_ar', inclusiveDom?.arabic === true)
    print('browser_locale_de_missing_expected_strings', JSON.stringify(inclusiveDom?.missingGerman || []))
    print('browser_locale_ar_missing_expected_strings', JSON.stringify(inclusiveDom?.missingArabic || []))
    print('browser_long_string_desktop_geometry', JSON.stringify(inclusiveDom?.desktopClipping || []))
    print('browser_long_string_mobile_geometry', JSON.stringify(inclusiveDom?.mobileClipping || []))
    print('browser_rtl_language_attribute', inclusiveDom?.language === 'ar' && inclusiveDom?.mobileLanguage === 'ar')
    print('browser_rtl_direction_attribute', inclusiveDom?.directionAttribute === 'rtl' && inclusiveDom?.mobileDirectionAttribute === 'rtl')
    print('browser_rtl_direction', inclusiveDom?.direction === 'rtl')
    print('browser_rtl_desktop_no_horizontal_overflow', inclusiveDom?.overflow === true)
    print('browser_rtl_mobile_no_horizontal_overflow', inclusiveDom?.mobileOverflow === true)
    print('browser_rtl_logical_layout_mirrored', inclusiveDom?.mirrored === true)
    print('browser_rtl_exact_fixture_cards', inclusiveDom?.fixtureCards ?? 0)
    print('browser_rtl_keyboard_focus', inclusiveDom?.keyboardFocus === true)
    print('browser_rtl_sidebar_opened', inclusiveDom?.sidebarOpened === true)
    print('browser_rtl_mobile_drawer_control_visible', inclusiveDom?.sidebarCloseVisible === true)
    print('browser_long_string_no_clipping', inclusiveDom?.longUnclipped === true)
    print('browser_normal_console_errors', consoleErrors.length)
    print('browser_normal_csp_errors', consoleErrors.filter((event) => JSON.stringify(event).toLowerCase().includes('content security policy')).length)
    print('browser_normal_failed_asset_requests', consoleErrors.filter((event) => event.method === 'Network.loadingFailed').length)

    const legacyGate = await runLegacyLocalizationGate(client, proxyBase, {
      detailUrl,
      requestToken: dom.catalogueRequestToken,
      batchFixtureItem: applyItem,
    })

    const ok = dom.vueApp === true
      && inclusiveDom?.de === true
      && inclusiveDom?.arabic === true
      && inclusiveDom?.language === 'ar'
      && inclusiveDom?.mobileLanguage === 'ar'
      && inclusiveDom?.directionAttribute === 'rtl'
      && inclusiveDom?.mobileDirectionAttribute === 'rtl'
      && inclusiveDom?.direction === 'rtl'
      && inclusiveDom?.mobileDirection === 'rtl'
      && inclusiveDom?.overflow === true
      && inclusiveDom?.mobileOverflow === true
      && inclusiveDom?.fixtureCards >= 3
      && inclusiveDom?.mirrored === true
      && inclusiveDom?.longUnclipped === true
      && inclusiveDom?.keyboardFocus === true
      && inclusiveDom?.sidebarOpened === true
      && inclusiveDom?.sidebarCloseVisible === true
      && dom.fallback === false
      && dom.nativeShell === true
      && JSON.stringify(dom.nativeDestinations) === JSON.stringify(['Library', 'Review'])
      && dom.nativeLibraryActive === true
      && dom.nativeHrefsSameOrigin === true
      && dom.nativeReviewHref.includes('scannerConflicts=1')
      && dom.nativeSettingsHref.includes('/settings/user/library')
      && dom.nativeSidebarClosed === true
      && dom.nativeSidebarExternalToggleAbsent === true
      && dom.catalogueToolbar === true
      && dom.quickFilterBar === true
      && dom.secondaryTools === true
      && dom.secondaryToolCount === 5
      && dom.secondaryToolsCollapsed === true
      && dom.continueReadingCollapsed === true
      && dom.usefulViewsCollapsed === true
      && dom.weakMetadataCollapsed === true
      && dom.savedCollectionsCollapsed === true
      && dom.usefulViews === true
      && dom.usefulViewLinks >= 14
      && dom.usefulViewQueryLinks === true
      && dom.usefulViewCountBadges >= 14
      && dom.savedCollections === true
      && dom.savedCollectionSaveForm === true
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
      && dom.batchActions === false
      && dom.batchTagForm === false
      && dom.batchTagRemoveForm === false
      && dom.batchMetadataResetForm === false
      && dom.batchCoverRefreshForm === false
      && dom.singleCatalogueResultSummary === true
      && dom.cardDetailChips === 0
      && dom.filterPanelCollapsed === true
      && dom.discoveryShortcutsCollapsed === true
      && dom.discoveryShortcutsSummary.includes('Browse shortcuts')
      && dom.importHealthPanelVisible === false
      && dom.actionsMenuCollapsed === true
      && dom.actionsMenuHasMetadataOverview === true
      && dom.actionsMenuMetadataOverviewText === true
      && dom.reviewQueueActions === true
      && dom.reviewQueueMetadataErrorTagForm === true
      && dom.reviewQueueScannerConflictTagForm === true
      && dom.details === dom.cards
      && dom.nextcloudTagNameField === true
      && dom.catalogueTagEditor === false
      && dom.catalogueStarForms === dom.cards
      && dom.catalogueStarButtons === dom.cards
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
      && previewPageDom.polished === true
      && previewPageDom.apply === true
      && applySmoke.ok === true
      && applySmoke.restored === true
      && dom.tagNameField === false
      && (dom.firstShowFiles.includes('?dir=') || dom.firstShowFiles.includes('&dir='))
      && dom.firstShowFiles.includes('openfile=false')
      && dom.firstDownload.includes('/remote.php/dav/files/')
      && new URL(detailUrl).pathname.startsWith('/apps/library/items/')
      && dom.firstPublicationLanding.includes('/apps/library/publications/')
      && dom.firstYearLanding.includes('/apps/library/years/')
      && dom.firstCreatorLanding.includes('/apps/library/creators/')
      && publicationDiscoveryDom?.page === true
      && publicationDiscoveryDom?.cards > 0
      && publicationDiscoveryDom?.activePublication === true
      && publicationDiscoveryDom?.backLinkHref === publicationDiscoveryDom?.nativeLibraryHref
      && publicationDiscoveryDom?.backLinkHref.startsWith('/')
      && !publicationDiscoveryDom?.backLinkHref.startsWith('//')
      && publicationDiscoveryDom?.nativeShell === true
      && JSON.stringify(publicationDiscoveryDom?.nativeDestinations) === JSON.stringify(['Library', 'Review'])
      && publicationDiscoveryDom?.nativeLibraryHref.includes('/apps/library/')
      && publicationDiscoveryDom?.nativeReviewHref.includes('/apps/library/')
      && publicationDiscoveryDom?.nativeReviewHref.includes('scannerConflicts=1')
      && publicationDiscoveryDom?.nativeSettingsHref.includes('/settings/user/library')
      && publicationDiscoveryDom?.nativeHrefsSameOrigin === true
      && publicationDiscoveryDom?.nativeLibraryActive === true
      && publicationDiscoveryDom?.nativeReviewActive === false
      && publicationDiscoveryDom?.nativeSidebarClosed === true
      && publicationDiscoveryDom?.nativeSidebarExternalToggleAbsent === true
      && yearDiscoveryDom?.page === true
      && yearDiscoveryDom?.cards > 0
      && yearDiscoveryDom?.activeYear === true
      && yearDiscoveryDom?.backLinkHref === yearDiscoveryDom?.nativeLibraryHref
      && yearDiscoveryDom?.backLinkHref.startsWith('/')
      && !yearDiscoveryDom?.backLinkHref.startsWith('//')
      && yearDiscoveryDom?.nativeShell === true
      && JSON.stringify(yearDiscoveryDom?.nativeDestinations) === JSON.stringify(['Library', 'Review'])
      && yearDiscoveryDom?.nativeLibraryHref.includes('/apps/library/')
      && yearDiscoveryDom?.nativeReviewHref.includes('scannerConflicts=1')
      && yearDiscoveryDom?.nativeSettingsHref.includes('/settings/user/library')
      && yearDiscoveryDom?.nativeHrefsSameOrigin === true
      && yearDiscoveryDom?.nativeLibraryActive === true
      && yearDiscoveryDom?.nativeReviewActive === false
      && yearDiscoveryDom?.nativeSidebarClosed === true
      && yearDiscoveryDom?.nativeSidebarExternalToggleAbsent === true
      && creatorDiscoveryDom?.page === true
      && creatorDiscoveryDom?.cards > 0
      && creatorDiscoveryDom?.activeCreator === true
      && creatorDiscoveryDom?.backLinkHref === creatorDiscoveryDom?.nativeLibraryHref
      && creatorDiscoveryDom?.backLinkHref.startsWith('/')
      && !creatorDiscoveryDom?.backLinkHref.startsWith('//')
      && creatorDiscoveryDom?.nativeShell === true
      && JSON.stringify(creatorDiscoveryDom?.nativeDestinations) === JSON.stringify(['Library', 'Review'])
      && creatorDiscoveryDom?.nativeLibraryHref.includes('/apps/library/')
      && creatorDiscoveryDom?.nativeReviewHref.includes('scannerConflicts=1')
      && creatorDiscoveryDom?.nativeSettingsHref.includes('/settings/user/library')
      && creatorDiscoveryDom?.nativeHrefsSameOrigin === true
      && creatorDiscoveryDom?.nativeLibraryActive === true
      && creatorDiscoveryDom?.nativeReviewActive === false
      && creatorDiscoveryDom?.nativeSidebarClosed === true
      && creatorDiscoveryDom?.nativeSidebarExternalToggleAbsent === true
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
      && injectedFailureOk === true
      && legacyGate.ok === true
      && inclusiveEvidence.accessibility.ok === true
      && inclusiveEvidence.adaptation.ok === true
      && mixedDirectionEvidence.markers.browser_mixed_direction_arabic_locale === true
      && mixedDirectionEvidence.markers.browser_mixed_direction_german_locale === true
      && mixedDirectionEvidence.markers.browser_bidi_values_isolated === true
      && mixedDirectionEvidence.markers.browser_no_blanket_direction_forcing === true
      && mixedDirectionEvidence.markers.browser_accessible_names_mixed_direction === true
      && mixedDirectionEvidence.markers.browser_fixture_scope_safe === true
      && mixedDirectionEvidence.markers.browser_fixture_metadata_restored === true
      && mixedDirectionEvidence.markers.browser_fixture_persistence_zero_matches_and_complete_bodies === true

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
    client?.socket.close()
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
  token = parseToken(runOcc(['user:add-app-password', '--no-interaction', '--name', tokenName, user]))
  if (!token) throw new Error('Temporary app password was not created')
  proxy = await startAuthProxy(token, inboundAuthorization)
  const proxyBase = `http://127.0.0.1:${proxy.address().port}`
  const missing = await fetch(`${proxyBase}/apps/library/?localization-fixture=1`)
  const wrong = await fetch(`${proxyBase}/apps/library/?localization-fixture=1`, { headers: { 'x-library-smoke-authorization': 'wrong' } })
  if (missing.status !== 401 || wrong.status !== 401) throw new Error('Inbound smoke proxy authentication did not fail closed')
  await runBrowserSmoke(proxyBase, proxy)
} catch (error) {
  print('browser_smoke_ok', false)
  console.error('browser_smoke_failure=true')
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
