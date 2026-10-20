// Destructive smoke uses only an owned disposable fixture account, then removes it.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
import { createEvidenceDirectory } from './private-evidence-directory.mjs'
import { writeFileSync } from 'node:fs'
const container = process.env.NC_CONTAINER || 'nextcloud', base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = createEvidenceDirectory('library-book-deletion'), results = []
const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
let created = false, browser
const fixture = action => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', '/tmp/library-book-deletion-fixture.php', action]))
try {
  docker(['cp', 'tests/php/book_deletion_fixture.php', `${container}:/tmp/library-book-deletion-fixture.php`])
  // setup writes its account identity before creating files, so partial setup is recoverable.
  docker(['exec', container, 'test', '!', '-e', '/tmp/library-book-deletion-fixture.json'])
  created = true
  const state = fixture('setup')
  assert.match(state.uid, /^library-delete-[a-f0-9]{12}$/)
  results.push({ backend: fixture('verify') })
  const text = createTemporaryAppPassword(container, state.uid, 'book-deletion-smoke')
  const token = text.match(/app password(?: is)?:\s*(\S+)/i)?.[1]; assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${state.uid}:${token}`).toString('base64')}`
  for (const [engine, driver, width] of [['chromium', chromium, 1440], ['firefox', firefox, 1440], ['mobile', chromium, 390]]) {
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 1000 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = [], consoleErrors = []; let metadataWrites = 0
    page.on('pageerror', e => errors.push(e.message)); page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()) })
    page.on('request', r => { if (r.method() === 'POST' && /\/items\/\d+\/(update|metadata)/.test(r.url())) metadataWrites++ })
    const id = state.items[`browser-${engine}`], returnTo = '/apps/library/?q=Deletion&sort=title'
    await page.goto(`${base}/apps/library/?details=${id}&returnTo=${encodeURIComponent(returnTo)}`)
    await expect(page.locator('.library-full-details #library-full-details-metadata')).toBeVisible()
    await page.waitForLoadState('networkidle')
    const title = page.locator('#library-full-details-metadata-form').getByLabel('Title', { exact: true })
    await title.fill('Unsaved deletion draft')
    await page.getByRole('button', { name: 'Delete book', exact: true }).click()
    const dialog = page.getByRole('dialog', { name: 'Delete book?' })
    await expect(dialog.getByRole('button', { name: 'Delete book', exact: true })).toBeEnabled()
    await expect(dialog).toContainText('metadata.opf')
    await expect(dialog.getByRole('button', { name: 'Cancel', exact: true })).toBeFocused()
    assert.ok(await dialog.evaluate(el => el.scrollWidth <= el.clientWidth + 1))
    await page.screenshot({ path: `${out}/${engine}-confirmation.png` })
    if (engine === 'firefox') {
      await page.evaluate(() => { document.body.dataset.themeDark = ''; document.body.dataset.themes = 'dark' })
      await page.screenshot({ path: `${out}/${engine}-confirmation-dark.png` })
    }
    await page.keyboard.press('Escape'); await expect(dialog).not.toBeVisible(); await expect(title).toHaveValue('Unsaved deletion draft')
    await page.getByRole('button', { name: 'Delete book', exact: true }).click()
    await expect(dialog.getByRole('button', { name: 'Delete book', exact: true })).toBeEnabled()
    const response = page.waitForResponse(r => r.url().endsWith(`/items/${id}/deletion`) && r.request().method() === 'POST')
    await dialog.getByRole('button', { name: 'Delete book', exact: true }).click()
    const deleted = await response; assert.equal(deleted.status(), 200)
    await expect(page).toHaveURL(base + returnTo)
    await expect(page.getByRole('status').filter({ hasText: 'Book deleted.' })).toBeVisible()
    await expect(page.locator('.library-deletion-notice p')).toHaveCount(0)
    await page.waitForLoadState('networkidle')
    assert.equal(metadataWrites, 0); assert.deepEqual(errors, []); assert.deepEqual(consoleErrors, [])
    results.push({ engine, pass: true, cancellation: true, unsavedEditsNotSaved: true, returnContext: true, mobileFits: true })
    await browser.close(); browser = null
  }
  const after = fixture('status'); for (const name of ['browser-chromium','browser-firefox','browser-mobile']) assert.equal(after.items[name], undefined)
  console.log(JSON.stringify({ passed: true, results }))
} finally {
  await browser?.close()
  if (created) { try { fixture('cleanup') } catch (error) { console.error('Fixture cleanup failed; inspect the fixture state in the container.'); throw error } }
  writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2), { mode: 0o600 })
}
