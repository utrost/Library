import { historicalSmoke } from './historical-smoke-guard.mjs'
historicalSmoke('verify-ux-alpha22.mjs')
// Historical diagnostic: known obsolete UI assumptions; not a current acceptance gate.
// See docs/playwright-journeys.md#older-standalone-diagnostics before reuse.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, firefox } from '@playwright/test'
import { createEvidenceDirectory } from './private-evidence-directory.mjs'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'

const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const container = process.env.NC_CONTAINER || 'nextcloud'
const user = process.env.NC_USER || 'uwe'
const engineName = process.env.PW_ENGINE === 'firefox' ? 'firefox' : 'chromium'
const name = `Library alpha22 visual verification ${Date.now()}`
const evidence = createEvidenceDirectory('library-alpha22-ux')
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
  encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 5 * 1024 * 1024,
})
const output = createTemporaryAppPassword(container, user, name)
const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
assert.ok(token, 'Temporary authentication was not issued')
const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
const origin = new URL(base).origin
let requestToken = ''
let browser
const results = []

async function inspect(page, label, path, selector, checks = async () => ({})) {
  const response = await page.goto(`${base}${path}`, { waitUntil: 'domcontentloaded' })
  assert.equal(response?.status(), 200, `${label} HTTP status`)
  try {
    await page.locator(selector).first().waitFor({ state: 'visible', timeout: 12000 })
  } catch (error) {
    await page.screenshot({ path: `${evidence}/${label}-failed.png`, animations: 'disabled' })
    writeFileSync(`${evidence}/${label}-failed.html`, await page.content(), { mode: 0o600 })
    console.error(JSON.stringify({ label, url: new URL(page.url()).pathname, startup: await page.locator('#library-startup-status').innerText().catch(() => ''), headings: await page.locator('h1').allTextContents(), pageErrors: await page.evaluate(() => document.readyState) }))
    throw error
  }
  const details = await checks()
  const overflow = await page.evaluate((target) => {
    const element = document.querySelector(target)
    return element ? Math.max(0, Math.round(element.scrollWidth - element.clientWidth)) : null
  }, selector)
  await page.screenshot({ path: `${evidence}/${label}.png`, animations: 'disabled' })
  results.push({ label, http: response.status(), overflow, ...details })
}

try {
  browser = await (engineName === 'firefox' ? firefox : chromium).launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  await context.route('**/*', async (route) => {
    const request = route.request()
    const headers = { ...request.headers() }
    if (new URL(request.url()).origin === origin) {
      headers.authorization = authorization
      if (requestToken) headers.requesttoken = requestToken
    }
    await route.continue({ headers })
  })
  const page = await context.newPage()
  const pageErrors = []
  page.on('pageerror', error => pageErrors.push(error.message))

  await inspect(page, 'catalogue-desktop', '/apps/library/', '#library-catalogue', async () => {
    requestToken = await page.locator('#library-vue-root').getAttribute('data-request-token') || ''
    assert.ok(requestToken, 'CSRF token in Library page')
    await page.locator('.library-navigation-tools > details > summary').waitFor()
    return {
      groupedNavigation: await page.locator('.library-navigation-tools > details > summary').isVisible(),
      filtersVisible: await page.locator('.library-sidebar-filter-section').isVisible(),
    }
  })
  await inspect(page, 'home-desktop', '/apps/library/?home=1', '#library-home', async () => {
    const filterSectionCount = await page.locator('.library-sidebar-filter-section').count()
    assert.equal(filterSectionCount, 0, 'Home has no catalogue filter panel')
    return { filterSectionCount }
  })
  await inspect(page, 'authors-desktop', '/apps/library/?authors=1', '.library-authors', async () => {
    const box = await page.locator('.author-search-unused input[type="checkbox"]').boundingBox()
    assert.ok(box && box.width <= 24 && box.height <= 24, 'Authors checkbox dimensions')
    return { checkboxWidth: Math.round(box.width), checkboxHeight: Math.round(box.height) }
  })
  await inspect(page, 'review-desktop', '/apps/library/?scannerConflicts=1', '.library-metadata-review-workbench', async () => ({
    decisionCards: await page.locator('.library-metadata-review-field').count(),
    provenanceCollapsed: await page.locator('.library-metadata-review-provenance[open]').count() === 0,
  }))
  const provenance = page.locator('.library-metadata-review-provenance').first()
  if (await provenance.count()) {
    await provenance.locator('summary').click()
    assert.ok(await provenance.locator('dl').isVisible(), 'Review provenance expands')
    results.push({ label: 'review-provenance', expands: true })
  }
  await inspect(page, 'inference-desktop', '/apps/library/?infer=1', '.library-inference', async () => {
    await page.locator('.library-inference[aria-busy="false"]').waitFor({ timeout: 30000 })
    return {
      editorCollapsed: await page.locator('.library-inference-customize').evaluate(element => !element.open),
      livePreviewVisible: await page.locator('.library-inference-live').isVisible(),
      sampleRows: await page.locator('.library-inference-result').count(),
    }
  })
  const suggestion = page.locator('.library-inference-suggestions select')
  const suggestedValue = await suggestion.locator('option:not([disabled])').first().getAttribute('value')
  if (suggestedValue) {
    await suggestion.selectOption(suggestedValue)
    assert.ok(await page.locator('.library-inference-live').isVisible(), 'Suggestion keeps the live preview visible')
    await page.screenshot({ path: `${evidence}/inference-suggestion-desktop.png`, animations: 'disabled' })
    results.push({ label: 'inference-suggestion', selectionWorks: true })
  }
  await inspect(page, 'languages-desktop', '/apps/library/languages', '.library-maintenance-shell', async () => {
    const navigationVisible = await page.locator('.library-maintenance-navigation-desktop .library-maintenance-links').isVisible()
    assert.ok(navigationVisible, 'Desktop language navigation is visible')
    return { navigationVisible, headingVisible: await page.getByRole('heading', { name: 'Review source languages' }).isVisible() }
  })
  await inspect(page, 'mappings-desktop', '/apps/library/value-mappings', '.library-maintenance-shell', async () => {
    const navigationVisible = await page.locator('.library-maintenance-navigation-desktop .library-maintenance-links').isVisible()
    assert.ok(navigationVisible, 'Desktop mapping navigation is visible')
    return {
      navigationVisible,
      findStepVisible: await page.getByRole('heading', { name: '1. Find an existing value' }).isVisible(),
      previewStepVisible: await page.getByRole('heading', { name: '2. Preview a mapping' }).isVisible(),
    }
  })
  await page.locator('.library-maintenance-search input[name="search"]').fill('Press')
  await page.locator('.library-maintenance-search button').click()
  await page.locator('.library-maintenance-shell').waitFor({ state: 'visible' })
  const sourceChoices = await page.getByRole('link', { name: 'Use as source' }).count()
  if (sourceChoices > 0) {
    await page.getByRole('link', { name: 'Use as source' }).first().click()
    const source = await page.locator('.library-maintenance-mapping-form input[name="source"]').inputValue()
    assert.ok(source, 'Selected source value fills the mapping form')
    await page.screenshot({ path: `${evidence}/mappings-selected-source.png`, animations: 'disabled' })
    results.push({ label: 'mapping-source-selection', choices: sourceChoices, prefilled: true })
  } else {
    results.push({ label: 'mapping-source-selection', choices: 0, prefilled: false })
  }
  await inspect(page, 'settings-desktop', '/settings/user/library', '#library-settings', async () => ({
    roots: await page.locator('.library-root-card').count(),
    closedShelfEditors: await page.locator('.library-root-edit-details:not([open])').count(),
    visibleScanButtons: await page.getByRole('button', { name: 'Scan this root' }).count(),
  }))
  const shelfEditor = page.locator('.library-root-edit-details').first()
  await shelfEditor.locator('summary').click()
  assert.ok(await shelfEditor.locator('form').isVisible(), 'Shelf editor expands')
  assert.ok(await page.locator('.library-root-card').first().getByRole('button', { name: 'Scan this root' }).isVisible(), 'Scan stays visible while editing shelf')
  results.push({ label: 'shelf-editor', expands: true, scanRemainsAvailable: true })

  await page.goto(`${base}/apps/library/`, { waitUntil: 'domcontentloaded' })
  await page.locator('.library-cover-card .library-cover-link').first().click()
  const detailLink = await page.locator('#app-sidebar-vue a').filter({ hasText: 'Full details' }).first().getAttribute('href')
  assert.ok(detailLink, 'Full details link on first book')
  await inspect(page, 'details-desktop', new URL(detailLink, base).pathname + new URL(detailLink, base).search, '.library-full-details', async () => {
    const title = page.locator('#library-full-details-metadata-form input').first()
    const original = await title.inputValue()
    await title.fill(`${original} `)
    const unsaved = await page.locator('.library-full-details-unsaved').isVisible()
    const authorButton = page.getByRole('button', { name: 'Change author' }).first()
    const authorDisabled = await authorButton.count() ? await authorButton.isDisabled() : null
    await page.screenshot({ path: `${evidence}/details-unsaved-desktop.png`, animations: 'disabled' })
    await title.fill(original)
    assert.ok(unsaved, 'Unsaved publication fields indicator')
    return {
      saveLabelVisible: await page.getByRole('button', { name: 'Save publication fields' }).isVisible(),
      unsavedIndicator: unsaved,
      authorDisabledWhileUnsaved: authorDisabled,
    }
  })

  await page.setViewportSize({ width: 390, height: 844 })
  await inspect(page, 'languages-mobile', '/apps/library/languages', '.library-maintenance-shell', async () => {
    const menu = page.locator('.library-maintenance-navigation-mobile')
    assert.ok(await menu.isVisible(), 'Mobile language navigation toggle is visible')
    await menu.locator('summary').click()
    return { navigationOpens: await menu.locator('.library-maintenance-links').isVisible() }
  })
  await inspect(page, 'mappings-mobile', '/apps/library/value-mappings', '.library-maintenance-shell', async () => {
    const menu = page.locator('.library-maintenance-navigation-mobile')
    assert.ok(await menu.isVisible(), 'Mobile mapping navigation toggle is visible')
    await menu.locator('summary').click()
    return { navigationOpens: await menu.locator('.library-maintenance-links').isVisible() }
  })
  await inspect(page, 'inference-mobile', '/apps/library/?infer=1', '.library-inference')
  await inspect(page, 'settings-mobile', '/settings/user/library', '#library-settings')

  const report = { version: '0.3.0-alpha.22', nextcloud: '34.0.3.2', engine: engineName, results, pageErrors }
  writeFileSync(`${evidence}/results.json`, JSON.stringify(report, null, 2), { mode: 0o600 })
  console.log(JSON.stringify({ evidence, engine: engineName, results, pageErrors }))
  assert.deepEqual(pageErrors, [], 'No uncaught browser errors')
  await browser.close()
  browser = null
} finally {
  if (browser) await browser.close()
  const tokens = JSON.parse(occ('user:auth-tokens:list', user, '--output=json'))
  for (const entry of tokens.filter(item => item.name === name)) occ('user:auth-tokens:delete', user, String(entry.id))
}
