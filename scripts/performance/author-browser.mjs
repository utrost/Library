// Read-only real-account timing. Credentials are ephemeral and never printed.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, expect } from '@playwright/test'
import { createTemporaryAppPassword } from '../temporary-app-password.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud', base = process.env.NC_URL || 'http://localhost:8088'
const user = process.env.NC_USER
if (!user) throw new Error('NC_USER is required')
const name = `author-performance-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
let browser, blockedWrites = 0
try {
  const output = createTemporaryAppPassword(container, user, name)
  const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  await context.route('**/*', route => {
    const request = route.request(), url = new URL(request.url())
    if (url.origin === new URL(base).origin && url.pathname.includes('/apps/library/') && !['GET', 'HEAD'].includes(request.method()) && !url.pathname.endsWith('/api/duplicate-suggestions/lookup')) { blockedWrites++; return route.abort() }
    return route.continue({ headers: { ...request.headers(), ...(url.origin === new URL(base).origin ? { authorization } : {}) } })
  })
  const page = await context.newPage(), errors = [], consoleErrors = [], samples = [], related = {}
  page.on('pageerror', e => errors.push(e.message))
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()) })
  for (let i = 0; i < 6; i++) {
    const start = performance.now()
    await page.goto(`${base}/apps/library/?authors=1`)
    await expect(page.locator('.library-authors')).toHaveAttribute('aria-busy', 'false')
    await expect(page.locator('.author-directory li').first()).toBeVisible()
    samples.push(performance.now() - start)
  }
  if (process.env.OUTPUT_DIR) await page.screenshot({ path: `${process.env.OUTPUT_DIR}/authors-desktop.png` })
  if (process.env.SMOKE_AUTHORS === '1') {
    const panel = page.locator('.library-authors')
    await panel.locator('#author-directory-sort').selectOption('name_desc')
    await expect(page).toHaveURL(/authorSort=name_desc/)
    await panel.locator('#author-search').fill('Hein')
    await expect(page).toHaveURL(/authorSearch=Hein/)
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    const book = panel.locator('.author-directory-book').first()
    await expect(book).toBeVisible()
    const source = page.url()
    await book.click()
    await expect(page).toHaveURL(/[?&]details=/)
    await page.waitForLoadState('networkidle')
    await page.locator('.library-full-details-back').click()
    await expect(page).toHaveURL(source)
    await expect(panel.locator('#author-search')).toHaveValue('Hein')
    await panel.locator('.author-directory-name').first().click()
    await expect(panel.locator('.author-books').first()).toBeVisible()
    await panel.getByRole('link', { name: 'All authors', exact: true }).click()
    await expect(panel.locator('#author-search')).toHaveValue('Hein')
    await panel.locator('#author-search').fill('')
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    await expect(page).not.toHaveURL(/authorSearch=/)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  assert.ok(await page.locator('.library-authors').evaluate(el => el.scrollWidth <= el.clientWidth + 1))
  if (process.env.OUTPUT_DIR) {
    await page.screenshot({ path: `${process.env.OUTPUT_DIR}/authors-mobile.png` })
    await page.evaluate(() => { document.body.dataset.themeDark = ''; document.body.dataset.themes = 'dark' })
    await page.screenshot({ path: `${process.env.OUTPUT_DIR}/authors-mobile-dark.png` })
  }
  const authorRows = await page.locator('.author-directory li').count()
  if (process.env.SMOKE_AUTHORS === '1') {
    for (const [kind, flag] of [['series', 'series'], ['genre', 'genres']]) {
      const start = performance.now()
      await page.goto(`${base}/apps/library/?${flag}=1`)
      const directory = page.locator('.directory-browser')
      await expect(directory).toHaveAttribute('aria-busy', 'false')
      related[kind] = { readyMs: performance.now() - start, rows: await directory.locator('.directory-row').count(), previews: await directory.locator('.directory-book').count() }
      await directory.locator(`#${kind}-directory-sort`).selectOption('name_desc')
      await expect(page).toHaveURL(new RegExp(`${kind}Sort=name_desc`))
      assert.ok(await directory.evaluate(el => el.scrollWidth <= el.clientWidth + 1))
      if (process.env.OUTPUT_DIR) await page.screenshot({ path: `${process.env.OUTPUT_DIR}/${kind}-mobile.png` })
      if (related[kind].previews) {
        await directory.locator('.directory-book').first().click()
        await expect(page).toHaveURL(/[?&]details=/)
        await page.waitForLoadState('networkidle')
        await page.locator('.library-full-details-back').click()
        await expect(directory.locator(`#${kind}-directory-sort`)).toHaveValue('name_desc')
      }
      await page.waitForLoadState('networkidle')
    }
  }
  assert.equal(blockedWrites, 0)
  assert.deepEqual(consoleErrors, [])
  assert.deepEqual(errors, [])
  const first = samples.shift(); samples.sort((a, b) => a - b)
  const report = { firstMs: first, warmMedianMs: samples[2], warmMaxMs: samples[4], samples: 6, rows: authorRows, pageErrors: errors.length, consoleErrors: consoleErrors.length, blockedWrites, related, mobileFits: true }
  if (process.env.OUTPUT_JSON) writeFileSync(process.env.OUTPUT_JSON, JSON.stringify(report, null, 2))
  console.log(JSON.stringify(report))
} finally {
  if (browser) await browser.close()
  for (const token of JSON.parse(occ('user:auth-tokens:list', user, '--output=json')).filter(t => t.name === name)) occ('user:auth-tokens:delete', user, String(token.id))
}
