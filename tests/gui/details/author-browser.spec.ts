import { expect, test, type Page, type TestInfo } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

async function browseAuthors(page: Page, testInfo: TestInfo) {
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const before = (await (await page.request.get(`/apps/library/items/${itemId}/sidebar`)).json()).item
  const author = before.canonicalAuthors[0]
  const profile = await (await page.request.get(`/apps/library/api/authors/${author.id}`)).json()
  const name = profile.author.display_name
  let writes = 0
  page.on('request', request => { if (request.method() !== 'GET' && /\/api\/authors|\/items\//.test(new URL(request.url()).pathname)) writes++ })
  await page.goto('/apps/library/?authors=1')
  const panel = page.locator('.library-authors')
  await expect(panel).toHaveAttribute('aria-busy', 'false')
  await expect(panel.locator('#author-directory-sort')).toHaveValue('name')
  await panel.locator('#author-directory-sort').selectOption('name_desc')
  await expect(page).toHaveURL(/authorSort=name_desc/)
  await panel.locator('#author-search').fill(name)
  await expect(page).toHaveURL(/authorSearch=/)
  await expect(panel).toHaveAttribute('aria-busy', 'false')
  const row = panel.locator('.author-directory-row').filter({ has: page.locator('.author-directory-name', { hasText: name }) }).first()
  await expect(row).toBeVisible()
  const covers = row.locator('.author-directory-book')
  expect(await covers.count()).toBeGreaterThan(0)
  expect(await covers.count()).toBeLessThanOrEqual(3)
  const directory = page.url()
  await attachCheckpoint(page, testInfo, 'author-directory-previews', '.library-authors')
  await covers.first().click()
  await expect(page).toHaveURL(/[?&]details=/)
  const returnTo = new URL(page.url()).searchParams.get('returnTo')!
  expect(new URL(returnTo, page.url()).href).toBe(directory)
  await page.locator('.library-full-details-back').click()
  await expect(panel.locator('#author-search')).toHaveValue(name)
  await expect(panel.locator('#author-directory-sort')).toHaveValue('name_desc')
  await row.locator('.author-directory-count').click()
  await expect(panel.locator('.author-books')).toBeVisible()
  await panel.getByRole('link', { name: 'All authors', exact: true }).click()
  await expect(panel.locator('#author-search')).toHaveValue(name)
  await panel.locator('#author-search').fill('NoMatchingAuthorBrowserFixture')
  await expect(panel).toContainText('No matches found.')
  await panel.locator('#author-search').fill('')
  await expect(panel.locator('.author-directory-row').first()).toBeVisible()
  expect(await panel.evaluate(el => el.scrollWidth <= el.clientWidth + 1)).toBe(true)
  await page.evaluate(() => document.body.setAttribute('data-theme-dark', ''))
  await attachCheckpoint(page, testInfo, 'author-directory-dark', '.library-authors')
  expect(writes).toBe(0)
  failures.assertNone()
}

test('author directory sorting, covers and return navigation @authors @smoke', async ({ page }, testInfo) => browseAuthors(page, testInfo))
test('author directory wraps on mobile @authors @mobile', async ({ page }, testInfo) => browseAuthors(page, testInfo))
