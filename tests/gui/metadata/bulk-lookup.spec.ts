import { test, expect, type Page, type TestInfo } from '@playwright/test'
import { login } from '../fixtures/nextcloud'

test.skip(!process.env.PW_LOOKUP_JOB, 'Requires the disposable metadata_batch_integration fixture')
async function journey(page: Page, testInfo: TestInfo) {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await login(page)
  await page.goto(`/apps/library/?metadataLookup=1&lookupJob=${process.env.PW_LOOKUP_JOB}`)
  const panel = page.getByRole('region', { name: 'Find book details', exact: true })
  await expect(panel.getByRole('heading', { name: 'Find book details', exact: true })).toBeVisible()
  const row = panel.locator('article').first()
  const checkbox = row.getByRole('checkbox').first()
  await expect(checkbox).toBeVisible()
  await checkbox.focus()
  await page.keyboard.press('Space')
  await expect(row.getByRole('button', { name: 'Apply now', exact: true })).toBeEnabled()
  await page.reload()
  await expect(page.getByRole('region', { name: 'Find book details', exact: true }).locator('article').first().getByRole('checkbox').first()).toBeChecked()
  await page.screenshot({ path: testInfo.outputPath('bulk-lookup-proposals.png'), fullPage: true })
  await page.evaluate(() => { document.body.removeAttribute('data-theme-light'); document.body.setAttribute('data-theme-dark', '') })
  await page.screenshot({ path: testInfo.outputPath('bulk-lookup-dark.png'), fullPage: true })
  await row.getByRole('button', { name: 'Apply now', exact: true }).click()
  await expect(row.getByText('Applied', { exact: true })).toBeVisible()
  await expect(row.getByRole('heading')).toBeFocused()
  await expect(panel).toContainText('Changes applied. Continue with the next book.')
  await row.getByRole('button', { name: 'Undo', exact: true }).click()
  await expect(row.getByText('Undone', { exact: true })).toBeVisible()
  const second = panel.locator('article').nth(1)
  await second.getByRole('button', { name: 'Skip', exact: true }).click()
  await expect(second.getByText('Skipped', { exact: true })).toBeVisible()
  await expect(page).toHaveURL(/lookupJob=/)
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false)
  await page.screenshot({ path: testInfo.outputPath('bulk-lookup-review.png'), fullPage: true })
  await panel.getByRole('button', { name: 'Back to browsing' }).click()
  await expect(panel).toHaveCount(0)
  await expect(page).not.toHaveURL(/metadataLookup=/)
  const selection = page.locator('.library-item-selection input').first()
  await selection.check()
  await page.locator('.library-list-selection').getByRole('button', { name: 'Find book details', exact: true }).click()
  await expect(panel.getByRole('button', { name: 'Find matches', exact: true })).toBeVisible()
  await expect(panel.getByRole('combobox', { name: 'Update policy', exact: true })).toHaveValue('missing')
  if (process.env.PW_LOOKUP_LIST) {
    await page.goto(`/apps/library/?lists=1&listId=${process.env.PW_LOOKUP_LIST}`)
    await page.getByRole('checkbox', { name: 'Select all', exact: true }).check()
    await page.getByRole('button', { name: 'Find book details', exact: true }).click()
    await expect(panel).toContainText('2 books selected')
    await expect(panel.getByRole('button', { name: 'Find matches', exact: true })).toBeEnabled()
  }
  const foreignRead = await page.request.post('/apps/library/api/metadata-batches/00000000000000000000000000000000', {
    headers: { requesttoken: await page.evaluate(() => (window as any).OC.requestToken) }, data: {},
  })
  expect(foreignRead.status()).toBe(404)
  expect(errors).toEqual([])
}

test('selected-book lookup review, persistent selection, Apply and Undo', async ({ page }, testInfo) => journey(page, testInfo))
test('selected-book lookup review wraps on mobile @mobile', async ({ page }, testInfo) => journey(page, testInfo))
