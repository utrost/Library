// Own disposable account per browser. Source series values remain imported evidence;
// the current editor saves a canonical series link and part through Save book details.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
import { createEvidenceDirectory } from './private-evidence-directory.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud', base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = createEvidenceDirectory('library-opf-series'), results = []
const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
docker(['cp', 'tests/php/opf_series_integration.php', `${container}:/tmp/library-opf-series-integration.php`])
const command = action => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', '/tmp/library-opf-series-integration.php', action]))
let browser, fixture
try {
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    fixture = command('setup')
    assert.deepEqual(fixture.items.map(i => [i.series_name, i.series_number]), [['Calibre fixture', '2.5'], ['EPUB 3 fixture', '01']])
    docker(['exec', '-u', 'www-data', container, 'php', '-r', `define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';foreach ([\\OCA\\Library\\Service\\AuthorStorageService::class,\\OCA\\Library\\Service\\SeriesStorageService::class] as $service) {\\OCP\\Server::get($service)->advance('${fixture.uid}',50,30);}`])
    const text = createTemporaryAppPassword(container, fixture.uid, 'series-smoke')
    const token = text.match(/app password(?: is)?:\s*(\S+)/i)?.[1]; assert.ok(token)
    const authorization = `Basic ${Buffer.from(`${fixture.uid}:${token}`).toString('base64')}`
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width: 1440, height: 1100 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = []
    page.on('pageerror', e => errors.push(e.message))
    const row = page.locator('[aria-labelledby="library-full-details-series-heading"]')
    for (const item of fixture.items) {
      await page.goto(`${base}/apps/library/?details=${item.id}`)
      await expect(row.getByRole('link', { name: item.series_name, exact: true })).toBeVisible()
      await expect(row.getByLabel('Part in series', { exact: true })).toHaveValue(item.series_number)
      await row.screenshot({ path: `${out}/${engine}-${item.title.split(' ')[0]}.png` })
    }
    const edited = fixture.items[0]
    await page.goto(`${base}/apps/library/?details=${edited.id}`)
    await row.getByRole('button', { name: 'Change series', exact: true }).click()
    await row.getByRole('combobox', { name: 'Choose a series' }).fill('My corrected series')
    await row.getByRole('button', { name: 'Create and choose series', exact: true }).click()
    await row.getByLabel('Part in series', { exact: true }).fill('Volume II')
    const saved = page.waitForResponse(r => new URL(r.url()).pathname.endsWith(`/items/${edited.id}`) && r.request().method() === 'POST')
    await page.getByRole('button', { name: 'Save book details', exact: true }).click()
    assert.equal((await saved).status(), 200)
    await expect(page.getByRole('button', { name: 'Discard changes', exact: true })).toHaveCount(0)
    const refreshed = command('rescan')
    // Imported evidence must not be rewritten by a linked-identity correction.
    assert.deepEqual(refreshed.items.map(i => [i.series_name, i.series_number]), fixture.items.map(i => [i.series_name, i.series_number]))
    assert.deepEqual(refreshed.items.map(i => [i.etag, i.size, i.mtime]), fixture.items.map(i => [i.etag, i.size, i.mtime]))
    const candidates = JSON.parse(refreshed.items[0].field_values)
    assert.equal(candidates.series, 'Calibre fixture'); assert.equal(candidates.seriesNumber, '2.5')
    await page.reload()
    await expect(row.getByRole('link', { name: 'My corrected series', exact: true })).toBeVisible()
    await expect(row.getByLabel('Part in series', { exact: true })).toHaveValue('Volume II')
    await row.screenshot({ path: `${out}/${engine}-manual-correction.png` })
    assert.deepEqual(errors, [])
    results.push({ engine, passed: true, canonicalCorrectionPreserved: true, sourceEvidencePreserved: true, sourceMarkersUnchanged: true })
    await browser.close(); browser = null
    assert.equal(command('cleanup').cleanup, true); fixture = null
  }
  console.log(JSON.stringify({ passed: true, results }))
} finally {
  await browser?.close()
  if (fixture) assert.equal(command('cleanup').cleanup, true)
  docker(['exec', container, 'rm', '-f', '/tmp/library-opf-series-integration.php'])
  writeFileSync(`${out}/results.json`, JSON.stringify({ results }, null, 2))
}
