import { createEvidenceDirectory } from './private-evidence-directory.mjs'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = createEvidenceDirectory('library-author-conflicts')

const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
for (const name of ['author_directory_fixture', 'author_conflict_integration']) docker(['cp', `tests/php/${name}.php`, `${container}:/tmp/${name}.php`])
const run = (name, action) => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', `/tmp/${name}.php`, action]))
let browser, created = false
const results = []
try {
  created = true
  const fixture = run('author_directory_fixture', 'setup')
  const integration = run('author_conflict_integration', 'test')
  assert.ok(integration.assertions >= 41)
  results.push({ backendAssertions: integration.assertions, pass: true })
  const text = createTemporaryAppPassword(container, fixture.uid, 'author-conflict-smoke')
  const token = text.match(/app password is:\s*(\S+)/i)?.[1] || text.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${fixture.uid}:${token}`).toString('base64')}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    run('author_conflict_integration', 'seed')
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = []
    page.on('pageerror', e => errors.push(e.message))
    await page.goto(`${base}/apps/library/?authors=1`)
    await page.getByRole('link', { name: 'Review imported author changes', exact: true }).click()
    const panel = page.locator('.author-conflicts')
    await expect(panel.locator('.author-conflict-books li')).toHaveCount(2)
    await panel.getByRole('button', { name: 'Review change', exact: true }).first().click()
    await expect(panel.locator('.author-conflict-review')).toBeVisible()
    await expect(panel.getByRole('heading', { level: 2 })).toBeFocused()
    await page.screenshot({ path: `${out}/${engine}-review.png`, animations: 'disabled' })
    run('author_conflict_integration', 'seed')
    const staleResponse = page.waitForResponse(r => r.request().method() === 'POST' && r.url().includes('/authors/conflicts/'))
    await panel.getByRole('button', { name: 'Keep current assignments', exact: true }).click()
    assert.equal((await staleResponse).status(), 409)
    await expect(panel.getByRole('alert')).toContainText('Reload and review again.')
    await panel.getByRole('button', { name: 'Reload', exact: true }).click()
    await expect(panel.locator('.author-conflict-books li')).toHaveCount(2)
    await panel.getByRole('button', { name: 'Review change', exact: true }).first().click()
    await panel.getByRole('button', { name: 'Keep current assignments', exact: true }).click()
    await expect(panel.locator('.author-conflict-books li')).toHaveCount(1)
    await panel.getByRole('button', { name: 'Review change', exact: true }).click()
    await page.setViewportSize({ width: 390, height: 844 })
    await panel.evaluate(el => { for (let p = el; p; p = p.parentElement) p.scrollTop = 0 })
    await page.screenshot({ path: `${out}/${engine}-mobile.png`, animations: 'disabled' })
    assert.ok(await panel.evaluate(el => el.scrollWidth <= el.clientWidth + 1), 'mobile panel fits')
    await panel.getByRole('button', { name: 'Use imported authors', exact: true }).click()
    await expect(panel.getByText('No author changes need review.', { exact: true })).toBeVisible()
    await page.reload()
    await expect(panel.getByText('No author changes need review.', { exact: true })).toBeVisible()
    assert.deepEqual(errors, [])
    results.push({ engine, pass: true, keep: true, accept: true, stalePreviewRejected: true, emptyQueuePersists: true, mobileFits: true })
    await browser.close(); browser = null
  }
} catch (e) { results.push({ pass: false, error: e.message }); throw e }
finally {
  if (browser) await browser.close()
  if (created) run('author_directory_fixture', 'cleanup')
  writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2))
}
console.log(JSON.stringify(results))
