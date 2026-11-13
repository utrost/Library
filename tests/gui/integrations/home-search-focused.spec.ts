import { expect, test } from '@playwright/test'
import { login } from '../fixtures/nextcloud'

test.skip(process.env.PW_LOOKUP_SETUP_FIXTURE !== '1', 'Requires the disposable metadata_batch_integration fixture')

for (const suffix of ['', ' @mobile']) test('Home health and native search keep private, usable links' + suffix, async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await login(page)
  const headers = { 'OCS-APIRequest': 'true' }
  for (const [provider, term] of [['library-books', 'Lookup'], ['library-authors', 'Example']]) {
    const response = await page.request.get(`/ocs/v2.php/search/providers/${provider}/search?format=json&term=${term}&limit=5`, { headers })
    expect(response.ok()).toBeTruthy()
    const data = (await response.json()).ocs.data
    expect(data.entries.length).toBeGreaterThan(0)
    expect(data.entries.length).toBeLessThanOrEqual(5)
    expect(data.entries.every((entry: { resourceUrl: string }) => entry.resourceUrl.includes('/apps/library/') && !entry.resourceUrl.includes('/files/'))).toBe(true)
    if (provider === 'library-books') {
      await page.goto(data.entries[0].resourceUrl)
      await expect(page.getByRole('heading', { name: 'Book details', exact: true })).toBeVisible()
      await expect(page.locator('.library-full-details-back')).toBeVisible()
    }
  }
  await page.goto('/apps/library/?home=1')
  const home = page.locator('.personal-home')
  await expect(home.getByRole('heading', { name: 'Library health' })).toBeVisible()
  await expect(home.getByRole('link', { name: /Possible duplicates/ })).toBeVisible()
  await expect(home.getByRole('link', { name: /Review unfinished organisation jobs/ })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false)
  expect(errors).toEqual([])
})
