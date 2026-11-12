import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { login } from '../fixtures/nextcloud'

test.skip(!process.env.PW_LOC_FIXTURE, 'Requires disposable metadata_batch_integration LOC fixture')
async function journey(page, testInfo) {
  const fixtures = JSON.parse(readFileSync(process.env.PW_LOC_FIXTURE!, 'utf8'))
  const fixture = testInfo.project.name === 'mobile-chromium' ? fixtures.mobile : fixtures.desktop
  const errors: string[] = []; page.on('pageerror', error => errors.push(error.message))
  await login(page)
  const base = `/apps/library/items/${fixture.itemId}`
  let searches = 0
  // Synthetic provider search; the prepared server approval and Save/Undo endpoints are real.
  await page.route(`**${base}/metadata-lookup`, route => {
    expect(route.request().postData()).toMatch(/name="provider"\r\n\r\nloc\r\n/)
    searches++
    return route.fulfill({ json: { provider: 'Library of Congress', results: [{ provider: 'Library of Congress', editionId: '2025000001', title: 'LOC fixture book', url: 'https://lccn.loc.gov/2025000001', authors: ['Example Writer'], isbn: [], languages: ['ger'], match: 'title_author' }] } })
  })
  await page.route(`**${base}/metadata-lookup/edition`, route => route.fulfill({ json: fixture.edition }))
  await page.goto(`/apps/library/?details=${fixture.itemId}`)
  const lookup = page.locator('.library-metadata-lookup')
  await lookup.locator('summary').click()
  await lookup.getByRole('combobox', { name: 'Provider', exact: true }).selectOption('loc')
  expect(searches).toBe(0)
  await lookup.getByRole('button', { name: 'Search Library of Congress', exact: true }).click()
  await lookup.getByRole('button', { name: /Compare edition 2025000001/ }).click()
  await expect(lookup.getByRole('link', { name: 'View source at Library of Congress' })).toHaveAttribute('href', 'https://lccn.loc.gov/2025000001')
  await expect(lookup.getByRole('button', { name: 'Preview cover from Open Library' })).toHaveCount(0)
  await lookup.getByRole('link', { name: 'View source at Library of Congress' }).scrollIntoViewIfNeeded()
  await page.screenshot({ path: testInfo.outputPath('loc-comparison.png') })
  await lookup.getByRole('checkbox', { name: 'Publisher', exact: true }).check()
  await lookup.getByRole('button', { name: 'Stage selected details' }).click()
  await page.getByRole('button', { name: 'Discard changes', exact: true }).click()
  await expect.poll(async () => (await (await page.request.get(`${base}/sidebar`)).json()).item.publisher).toBe('')
  await lookup.getByRole('checkbox', { name: 'Publisher', exact: true }).check()
  await lookup.getByRole('button', { name: 'Stage selected details' }).click()
  await page.getByRole('button', { name: 'Save book details', exact: true }).click()
  await expect(page.getByText('Book details saved', { exact: true })).toBeVisible()
  expect((await (await page.request.get(`${base}/sidebar`)).json()).item.fieldSources.publisher).toBe('provider:loc')
  const activity = page.locator('details').filter({ has: page.locator(':scope > summary', { hasText: /^Notes and change history$/ }) })
  await activity.locator(':scope > summary').click()
  const history = activity.locator('details').filter({ has: page.locator(':scope > summary', { hasText: /^Lookup change history$/ }) })
  await history.locator(':scope > summary').click()
  await expect(history.getByRole('link', { name: 'Library of Congress', exact: true }).first()).toHaveAttribute('href', 'https://lccn.loc.gov/2025000001')
  await history.getByRole('link', { name: 'Library of Congress', exact: true }).first().scrollIntoViewIfNeeded()
  await page.screenshot({ path: testInfo.outputPath('loc-receipt.png') })
  await history.getByRole('button', { name: 'Undo', exact: true }).click()
  await expect(history.getByText('Undone', { exact: true }).first()).toBeVisible()
  await expect.poll(async () => (await (await page.request.get(`${base}/sidebar`)).json()).item.publisher).toBe('')
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false)
  expect(errors).toEqual([])
}
test('LOC comparison, Discard, Save and source-labelled Undo', async ({ page }, testInfo) => journey(page, testInfo))
test('LOC review wraps on mobile @mobile', async ({ page }, testInfo) => journey(page, testInfo))
