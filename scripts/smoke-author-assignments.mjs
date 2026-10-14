import { createEvidenceDirectory } from './private-evidence-directory.mjs'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = createEvidenceDirectory('library-author-assignments')

const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
for (const file of ['author_directory_fixture', 'author_assignment_integration']) docker(['cp', `tests/php/${file}.php`, `${container}:/tmp/${file}.php`])
const fixture = action => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', action]))
let browser
const results = []
try {
  fixture('setup')
  const state = JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', '/tmp/author_assignment_integration.php']))
  results.push({ integration: state.assertions, previewAndApplyMs: state.previewAndApplyMs })
  const text = createTemporaryAppPassword(container, state.uid, 'author-assignment-smoke')
  const token = text.match(/app password is:\s*(\S+)/i)?.[1] || text.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${state.uid}:${token}`).toString('base64')}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = []
    page.on('pageerror', e => errors.push(e.message))
    await page.goto(`${base}/apps/library/?authors=1&authorId=${state.source}`)
    const panel = page.locator('.library-authors')
    await expect(panel.locator('.author-books li')).toHaveCount(2)
    for (const mode of ['reassign', 'merge']) {
      await panel.locator('.author-actions summary').click()
      await panel.getByRole('button', { name: 'Merge or reassign', exact: true }).click()
      if (mode === 'reassign') await panel.locator('.author-books input[type=checkbox]').last().check()
      await panel.locator('#target-search').fill('Doe,')
      await panel.locator('.author-assignment').getByRole('button', { name: 'Search', exact: true }).click()
      await expect(panel.locator('#target-author option')).toHaveCount(2)
      await panel.locator('#target-author').selectOption(String(state.target))
      await panel.getByRole('button', { name: 'Review change', exact: true }).click()
      await expect(panel.locator('.author-review li')).toHaveCount(mode === 'merge' ? 2 : 1)
      await page.screenshot({ path: `${out}/${engine}-${mode}-preview.png`, animations: 'disabled' })
      const responsePromise = page.waitForResponse(r => r.url().endsWith(`/authors/${state.source}/assign`) && r.request().method() === 'POST')
      await panel.getByRole('button', { name: 'Confirm author change', exact: true }).click()
      const response = await responsePromise
      assert.equal(response.status(), 200)
      const operation = await response.json()
      await expect(panel.locator('.author-books li')).toHaveCount(mode === 'merge' ? 0 : 1)
      if (mode === 'merge') {
        await expect(panel.getByRole('link', { name: 'Open merged author' })).toBeVisible()
        // Verify the actual catalogue uses canonical names without changing source credits.
        const catalogue = await context.newPage()
        await catalogue.goto(`${base}/apps/library/`)
        await expect(catalogue.locator('.library-cover-creator').first()).toContainText('Doe, John')
        await catalogue.close()
      }
      await panel.locator('.author-history summary').click()
      await panel.locator(`[data-operation-id="${operation.id}"]`).getByRole('button', { name: 'Undo', exact: true }).click()
      await expect(panel.locator('.author-books li')).toHaveCount(2)
      await panel.locator('.author-history summary').click()
    }
    // Explicit homonym creation must not reuse the existing John Doe record.
    await panel.locator('.author-actions summary').click()
    await panel.getByRole('button', { name: 'Merge or reassign', exact: true }).click()
    await panel.locator('.author-books input[type=checkbox]').last().check()
    await panel.locator('#target-search').fill('John Doe')
    const createdResponse = page.waitForResponse(r => r.url().endsWith('/api/authors') && r.request().method() === 'POST')
    await panel.getByRole('button', { name: 'Create separate author', exact: true }).click()
    const createResult = await createdResponse
    assert.equal(createResult.status(), 200, `Create author status: ${createResult.status()} ${createResult.headers().location || ''}`)
    const newAuthor = await createResult.json()
    assert.notEqual(Number(newAuthor.id), state.source)
    await panel.getByRole('button', { name: 'Review change', exact: true }).click()
    await expect(panel.locator('.author-review li')).toHaveCount(1)
    const assignResponse = page.waitForResponse(r => r.url().endsWith(`/authors/${state.source}/assign`) && r.request().method() === 'POST')
    await panel.getByRole('button', { name: 'Confirm author change', exact: true }).click()
    const homonymOperation = await (await assignResponse).json()
    await expect(panel.locator('.author-books li')).toHaveCount(1)
    await panel.locator('.author-history summary').click()
    const undoResponse = page.waitForResponse(r => r.url().endsWith(`/history/${homonymOperation.id}/undo`))
    await panel.locator(`[data-operation-id="${homonymOperation.id}"]`).getByRole('button', { name: 'Undo', exact: true }).click()
    const undoResult = await undoResponse
    assert.equal(undoResult.status(), 200, await undoResult.text())
    await expect(panel.locator('.author-books li')).toHaveCount(2)
    await panel.locator('.author-history summary').click()
    await page.setViewportSize({ width: 390, height: 844 })
    await panel.locator('.author-actions summary').click()
    await panel.getByRole('button', { name: 'Merge or reassign', exact: true }).click()
    await page.screenshot({ path: `${out}/${engine}-assignment-mobile.png`, animations: 'disabled' })
    assert.ok(await panel.evaluate(el => el.scrollWidth <= el.clientWidth + 1), 'mobile panel fits')
    assert.deepEqual(errors, [])
    results.push({ engine, pass: true, merge: true, reassign: true, undo: true, canonicalCatalogue: true, distinctHomonym: true, mobileFits: true })
    await browser.close(); browser = null
  }
} catch (e) {
  results.push({ pass: false, error: e.message }); throw e
} finally {
  if (browser) await browser.close()
  fixture('cleanup')
  for (const file of ['author_directory_fixture', 'author_assignment_integration']) docker(['exec', container, 'rm', '-f', `/tmp/${file}.php`])
  writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2))
}
console.log(JSON.stringify(results))
