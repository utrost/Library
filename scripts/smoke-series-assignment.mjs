// Browser checks for a temporary two-EPUB account. The fixture is always removed.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'

const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = process.env.EVIDENCE_DIR || '/tmp/library-series-assignment'
mkdirSync(out, { recursive: true, mode: 0o700 })
const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
docker(['cp', 'tests/php/opf_series_integration.php', `${container}:/tmp/library-opf-series-integration.php`])
const fixtureCommand = action => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', '/tmp/library-opf-series-integration.php', action]))
const results = []
try {
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    const fixture = fixtureCommand('setup')
    const browser = await driver.launch()
    try {
      docker(['exec', '-u', 'www-data', container, 'php', '-r', `define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';\\OCP\\Server::get(\\OCA\\Library\\Service\\SeriesStorageService::class)->advance('${fixture.uid}',50,30);`])
      const tokenOutput = createTemporaryAppPassword(container, fixture.uid, 'series-assignment-smoke')
      const token = tokenOutput.match(/app password is:\s*(\S+)/i)?.[1] || tokenOutput.match(/app password:\s*\n\s*(\S+)/i)?.[1]
      assert.ok(token)
      const authorization = `Basic ${Buffer.from(`${fixture.uid}:${token}`).toString('base64')}`
      const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
      await context.route('**/*', route => route.continue({ headers: {
        ...route.request().headers(),
        ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}),
      } }))
      const page = await context.newPage()
      const errors = []
      page.on('pageerror', error => errors.push(error.message))
      await page.goto(`${base}/apps/library/?series=1`)
      await expect(page.locator('.series-directory a', { hasText: 'Calibre fixture' })).toBeVisible()
      await page.locator('.series-directory a', { hasText: 'Calibre fixture' }).click()
      await expect(page.locator('.series-books li')).toHaveCount(1)
      if (!(await page.locator('.series-actions').evaluate(element => element.open))) await page.locator('.series-actions summary').click()
      await page.getByRole('button', { name: 'Choose destination series' }).click()
      await page.locator('.series-books input[type="checkbox"]').check()
      await page.locator('#series-target-search').fill('EPUB 3')
      await page.locator('.series-assignment').getByRole('button', { name: 'Search' }).click()
      await page.locator('#series-target').selectOption({ index: 1 })
      await page.getByRole('button', { name: 'Review change' }).click()
      await expect(page.locator('.series-review')).toContainText('calibre fixture')
      await page.screenshot({ path: `${out}/${engine}-selected-preview.png`, fullPage: true })
      await page.getByRole('button', { name: 'Confirm series change' }).click()
      await expect(page.locator('.library-series')).toContainText('Series assignment saved')
      await expect(page.locator('.series-books li')).toHaveCount(0)
      await page.locator('.series-history summary').click()
      await page.getByRole('button', { name: 'Undo', exact: true }).click()
      await expect(page.locator('.series-books li')).toHaveCount(1)
      await page.screenshot({ path: `${out}/${engine}-undo.png`, fullPage: true })
      if (!(await page.locator('.series-actions').evaluate(element => element.open))) await page.locator('.series-actions summary').click()
      await page.getByRole('button', { name: 'Choose destination series' }).click()
      await page.locator('#series-target-search').fill('EPUB 3')
      await page.locator('.series-assignment').getByRole('button', { name: 'Search' }).click()
      await page.locator('#series-target').selectOption({ index: 1 })
      await page.getByRole('button', { name: 'Review change' }).click()
      await expect(page.locator('.series-review')).toContainText('Future imports using the old series name')
      await page.getByRole('button', { name: 'Confirm series change' }).click()
      await expect(page.locator('.library-series')).toContainText('Open merged series')
      await page.screenshot({ path: `${out}/${engine}-merged.png`, fullPage: true })
      for (const [incoming, choice] of [['Changed import fixture', 'Keep assignment'], ['Another imported fixture', 'Use imported series']]) {
        docker(['exec', '-u', 'www-data', container, 'php', '-r', `define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';$db=\\OCP\\Server::get(\\OCP\\IDBConnection::class);$db->executeStatement('UPDATE *PREFIX*library_items SET series_name=?,series_sync_status=1 WHERE user_id=? AND id=?',['${incoming}','${fixture.uid}',${Number(fixture.items[0].id)}]);\\OCP\\Server::get(\\OCA\\Library\\Service\\SeriesStorageService::class)->synchronize('${fixture.uid}',${Number(fixture.items[0].id)});`])
        await page.reload()
        await expect(page.locator('.series-conflicts')).toContainText(incoming)
        if (choice === 'Keep assignment') await page.screenshot({ path: `${out}/${engine}-import-review.png`, fullPage: true })
        await page.locator('.series-conflicts').getByRole('button', { name: choice }).click()
        await expect(page.locator('.series-conflicts')).toHaveCount(0)
      }
      await page.screenshot({ path: `${out}/${engine}-reviewed.png`, fullPage: true })
      assert.deepEqual(errors, [])
      results.push({ engine, passed: true, selectedMove: true, undo: true, merge: true, conflictReview: true, pageErrors: errors.length })
    } finally { await browser.close(); assert.equal(fixtureCommand('cleanup').cleanup, true) }
  }
  writeFileSync(`${out}/results.json`, JSON.stringify({ passed: true, results }, null, 2))
  console.log(JSON.stringify({ passed: true, results }))
} finally {
  docker(['exec', container, 'rm', '-f', '/tmp/library-opf-series-integration.php'])
}
