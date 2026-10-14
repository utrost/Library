import { createEvidenceDirectory } from './private-evidence-directory.mjs'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://localhost:8088'
const out = createEvidenceDirectory('library-author-directory')

const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
docker(['cp', 'tests/php/author_directory_fixture.php', `${container}:/tmp/library-author-directory-fixture.php`])
const fixture = action => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', '/tmp/library-author-directory-fixture.php', action]))
let browser
const results = []
try {
  const state = fixture('setup')
  assert.equal(state.directory.authors.length, 1)
  assert.equal(Number(state.directory.authors[0].book_count), 2)
  const text = createTemporaryAppPassword(container, state.uid, 'author-directory-smoke')
  const token = text.match(/app password is:\s*(\S+)/i)?.[1] || text.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${state.uid}:${token}`).toString('base64')}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = []
    page.on('pageerror', e => errors.push(e.message))
    await page.goto(`${base}/apps/library/?authors=1`)
    const panel = page.locator('.library-authors')
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    await expect(panel.locator('.author-directory li')).toHaveCount(1)
    await page.screenshot({ path: `${out}/${engine}-directory.png`, animations: 'disabled' })
    await panel.locator('.author-directory a').click()
    await expect(panel.locator('.author-books li')).toHaveCount(2)
    await panel.getByRole('button', { name: 'Edit author', exact: true }).click()
    await panel.locator('#author-display').fill(`John Doe ${engine}`)
    await panel.locator('#author-sort').fill('Doe, John')
    await panel.locator('#author-given').fill('John')
    await panel.locator('#author-family').fill('Doe')
    await panel.getByRole('button', { name: 'Save author', exact: true }).click()
    await expect(panel.getByRole('heading', { level: 1 })).toHaveText(`John Doe ${engine}`)
    const profile = await (await context.request.get(`${base}/apps/library/api/authors/${state.directory.authors[0].id}`, { headers: { authorization } })).json()
    assert.ok(profile.books.every(book => book.creators === 'John Doe'))
    const rescan = fixture('rescan')
    assert.equal(rescan.directory.authors[0].display_name, `John Doe ${engine}`)
    assert.equal(rescan.directory.migration.conflict, 0)
    await page.reload()
    await expect(panel.getByRole('heading', { level: 1 })).toHaveText(`John Doe ${engine}`)
    await page.screenshot({ path: `${out}/${engine}-author.png`, animations: 'disabled' })
    await page.setViewportSize({ width: 390, height: 844 })
    await panel.getByRole('button', { name: 'Edit author', exact: true }).click()
    await page.screenshot({ path: `${out}/${engine}-edit-mobile.png`, animations: 'disabled' })
    assert.ok(await panel.evaluate(el => el.scrollWidth <= el.clientWidth + 1), 'mobile panel fits')
    await panel.getByRole('button', { name: 'Cancel', exact: true }).click()
    await panel.locator('.author-books a').first().click()
    await expect(page).toHaveURL(/\/items\/[0-9]+/)
    assert.deepEqual(errors, [])
    results.push({ engine, pass: true, books: 2, sharedEdit: true, rescanPreserved: true, mobileFits: true })
    await browser.close(); browser = null
  }
} finally {
  if (browser) await browser.close()
  fixture('cleanup')
  docker(['exec', container, 'rm', '-f', '/tmp/library-author-directory-fixture.php'])
}
writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2))
console.log(JSON.stringify(results))
