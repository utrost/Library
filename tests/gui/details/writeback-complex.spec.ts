import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { login, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, requiredEnvironment } from '../fixtures/nextcloud'

for (const suffix of ['', ' @mobile']) test('complex EPUB fields identify the conflict and allow another field preview' + suffix, async ({ page }, info) => {
  const fixture = JSON.parse(readFileSync(requiredEnvironment('PW_CURATION_HTTP_FIXTURE'), 'utf8'))
  expect(requiredEnvironment('PW_USER')).toBe(fixture.owner)
  expect(fixture.owner).toMatch(/^library-http-owner-/)
  expect(fixture.complexBookId).toBeGreaterThan(0)
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  await page.goto(`/apps/library/?details=${fixture.complexBookId}`)
  const source = page.getByRole('link', { name: 'Download source', exact: true })
  const sourceURL = (await source.getAttribute('href'))!
  const sourceHash = async () => {
    const response = await page.request.get(sourceURL)
    expect(response.status()).toBe(200)
    return createHash('sha256').update(await response.body()).digest('hex')
  }
  expect(await sourceHash()).toBe(fixture.complexHash)
  const panel = page.locator('details').filter({ has: page.locator('summary', { hasText: /^Write metadata to EPUB$/ }) }).first()
  await panel.locator('summary').focus()
  await page.keyboard.press('Enter')
  const preview = panel.getByRole('button', { name: 'Preview file changes', exact: true })
  await expect(preview).toBeEnabled()
  const pending = page.waitForResponse(response => response.url().includes(`/writeback/books/${fixture.complexBookId}/preview`))
  await preview.click()
  const rejected = await pending
  expect(rejected.status()).toBe(422)
  expect(await rejected.json()).toEqual({ error: 'complex_metadata', field: 'title' })
  await expect(panel.getByRole('alert')).toContainText('Title: A selected field has complex EPUB refinements.')
  failures.assertNoneOrExactSetAndClear([/^console: Failed to load resource: the server responded with a status of 422 \(Unprocessable (?:Entity|Content)\)$/])
  await panel.getByRole('checkbox', { name: 'Title', exact: true }).uncheck()
  await preview.click()
  await expect(panel.getByRole('button', { name: 'Write to EPUB', exact: true })).toBeVisible()
  await expect(panel.getByRole('alert')).toHaveCount(0)
  expect(await sourceHash()).toBe(fixture.complexHash)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy()
  await preview.scrollIntoViewIfNeeded()
  await attachCheckpoint(page, info, 'complex-epub-field-recovered')
  await page.screenshot({ path: info.outputPath('complex-epub-field-recovered.png'), animations: 'disabled' })
  await panel.locator('article').filter({ has: page.locator('strong', { hasText: /^complex-/ }) }).getByRole('button', { name: 'Delete backup', exact: true }).click()
  await page.getByRole('dialog').getByRole('button', { name: 'Delete backup', exact: true }).click()
  await expect(panel.getByRole('button', { name: 'Write to EPUB', exact: true })).toHaveCount(0)
  expect(await sourceHash()).toBe(fixture.complexHash)
  failures.assertNone()
})
