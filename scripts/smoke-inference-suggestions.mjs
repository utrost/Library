// Real developer Nextcloud UI with representative, read-only path fixtures.
// Only a temporary saved rule is written; it and the app token are removed.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const container = process.env.NC_CONTAINER || 'nextcloud', user = process.env.NC_USER || 'uwe'
const out = process.env.EVIDENCE_DIR || '/tmp/library-alpha29-suggestions'
mkdirSync(out, { recursive: true, mode: 0o700 })
const tokenName = `library-suggestion-smoke-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
const results = []
let browser
try {
  const output = createTemporaryAppPassword(container, user, tokenName)
  const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = [], writes = []
    let savedId = ''
    page.on('pageerror', error => errors.push(error.message))
    page.on('request', request => { if (request.url().includes('/apps/library/api/') && !['GET', 'HEAD'].includes(request.method())) writes.push(new URL(request.url()).pathname) })
    try {
      await page.goto(new URL('/apps/library/?infer=1', base).href)
      const panel = page.locator('.library-inference')
      await expect(panel).toHaveAttribute('aria-busy', 'false', { timeout: 30000 })
      const rootId = await panel.getByRole('combobox', { name: 'Library root', exact: true }).inputValue()
      const endpoint = `/apps/library/api/inference/sample?rootId=${rootId}`
      const original = await page.evaluate(async url => (await fetch(url)).json(), endpoint)
      assert.ok(original.items.length > 0)
      const paths = [
        'books/english_science_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub',
        'Abercrombie, Joe/The Blade Itself (2006).epub',
        '1984.epub',
        'Brandon Sanderson/Mistborn #04 - The Alloy of Law.epub',
      ]
      // No fixture files or catalogue metadata are created. Only the sample response is replaced.
      await page.route('**/apps/library/api/inference/sample?*', route => route.fulfill({ json: { ...original, page: 1, hasNext: false, items: paths.map((path, index) => ({ ...original.items[index % original.items.length], id: index + 1, path, current: {} })) } }))
      await page.reload(); await expect(panel).toHaveAttribute('aria-busy', 'false')
      const suggestions = panel.getByRole('combobox', { name: 'Suggest fields', exact: true })
      const example = panel.getByRole('combobox', { name: 'Example path', exact: true })
      const live = panel.getByRole('complementary', { name: 'Live preview', exact: true })
      await suggestions.selectOption('detected')
      await expect(live.locator('dd strong')).toHaveText(['en', 'science fiction', 'Children of Time', 'Adrian Tchaikovsky', '2016'])
      await expect(panel.locator('.library-inference-customize')).not.toHaveAttribute('open', '')
      await panel.locator('.library-inference-suggestions').scrollIntoViewIfNeeded()
      await page.screenshot({ path: `${out}/${engine}-suggested.png` })
      assert.deepEqual(writes, [], 'Suggesting fields never writes metadata or preferences')
      await example.selectOption(paths[1]); await suggestions.selectOption('detected')
      await expect(live.locator('.library-inference-author-chips strong')).toHaveText(['Abercrombie, Joe'])
      await expect(panel.locator('.library-inference-suggestions')).toContainText('commas are preserved')
      await panel.locator('.library-inference-customize > summary').click()
      const templates = panel.locator('.library-inference-templates')
      await expect(templates).toHaveAttribute('aria-busy', 'false')
      await templates.getByRole('textbox', { name: 'Rule name', exact: true }).fill(`Suggestion smoke ${engine} ${Date.now()}`)
      await templates.getByRole('button', { name: 'Save current rule as new', exact: true }).click()
      await expect(templates.getByRole('status')).toContainText('Rule saved')
      savedId = await templates.getByRole('combobox', { name: 'Saved rule', exact: true }).inputValue()
      assert.match(savedId, /^[a-f0-9]{32}$/)
      await example.selectOption(paths[2]); await suggestions.selectOption('filename')
      await expect(live.locator('dd strong')).toHaveText(['1984'])
      await expect(live.locator('dt')).toHaveCount(1)
      await example.selectOption(paths[3]); await suggestions.selectOption('detected')
      await expect(live.locator('dd strong')).toHaveText(['Mistborn', '04', 'The Alloy of Law'])
      await page.setViewportSize({ width: 390, height: 844 })
      await page.reload(); await expect(panel).toHaveAttribute('aria-busy', 'false')
      await example.selectOption(paths[3]); await suggestions.selectOption('detected')
      await panel.locator('.library-inference-suggestions').scrollIntoViewIfNeeded()
      assert.equal(await panel.evaluate(el => el.scrollWidth > el.clientWidth + 1), false)
      const bounds = await suggestions.boundingBox()
      assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 391, 'Suggestion control fits the phone viewport')
      const clipped = await panel.locator('h1, h2, h3, .library-inference-live-status').evaluateAll(elements => elements.filter(el => el.scrollWidth > el.clientWidth + 1).length)
      assert.equal(clipped, 0, 'Headings and status wrap on the phone')
      const stacked = await live.locator('.library-inference-live-field').evaluateAll(rows => rows.every(row => row.querySelector('dt').getBoundingClientRect().bottom <= row.querySelector('dd').getBoundingClientRect().top))
      assert.ok(stacked, 'Preview labels appear above their values without overlap')
      await page.screenshot({ path: `${out}/${engine}-mobile.png` })
      await page.unroute('**/apps/library/api/inference/sample?*')
      const after = await page.evaluate(async url => (await fetch(url)).json(), endpoint)
      assert.deepEqual(after.items, original.items)
      assert.deepEqual(errors, [])
      assert.ok(writes.every(path => path === '/apps/library/api/inference/patterns'))
      results.push({ engine, passed: true, realSampleUnchanged: true, commaAuthorPreserved: true, numericTitlePreserved: true, guidedRuleServerAccepted: true, mobileFits: true, pageErrors: 0 })
    } finally {
      if (savedId) {
        const status = await page.evaluate(async id => (await fetch(`/apps/library/api/inference/patterns/${id}/delete`, { method: 'POST', headers: { requesttoken: document.querySelector('#library-vue-root').dataset.requestToken } })).status, savedId)
        assert.equal(status, 200)
        const remains = await page.evaluate(async id => (await (await fetch('/apps/library/api/inference/patterns')).json()).patterns.some(entry => entry.id === id), savedId)
        assert.equal(remains, false, 'Temporary saved rule removed')
      }
      await browser.close(); browser = null
    }
  }
  writeFileSync(`${out}/results.json`, JSON.stringify({ passed: true, results }, null, 2))
  console.log(JSON.stringify({ passed: true, results }))
} finally {
  await browser?.close()
  for (const row of occ('user:auth-tokens:list', user).split(/\r?\n/).filter(line => line.includes(tokenName))) {
    const id = row.match(/\|\s*(\d+)\s*\|/)?.[1]; assert.ok(id); occ('user:auth-tokens:delete', user, id)
  }
  assert.equal(occ('user:auth-tokens:list', user).includes(tokenName), false)
  console.log('temporary_token_removed=true')
}
