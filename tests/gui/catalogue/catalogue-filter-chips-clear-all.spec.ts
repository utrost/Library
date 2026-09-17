import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, requiredEnvironment } from '../fixtures/nextcloud'

test('removes one desktop filter and clears selection filters while preserving sort and view @catalogue @filters @regression @desktop', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)

  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const response = await page.goto('/apps/library/?page=2&limit=25')
  expect(response?.ok(), `Library returned ${response?.status()}`).toBeTruthy()
  const catalogue = page.locator('#library-catalogue')
  await expect(catalogue).toBeVisible()
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  await expect(page).toHaveURL((url) => url.searchParams.get('page') === '2')

  const toolbar = page.getByRole('form', { name: 'Catalogue toolbar' })
  await toolbar.getByLabel('Sort').selectOption('recent')
  await expect(page).toHaveURL((url) => url.searchParams.get('sort') === 'recent')
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  await toolbar.getByRole('button', { name: 'List' }).click()
  await expect(page).toHaveURL((url) => url.searchParams.get('sort') === 'recent' && url.searchParams.get('view') === 'list')
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  await expect(toolbar.getByRole('button', { name: 'List' })).toHaveAttribute('aria-pressed', 'true')

  const sidebarFilters = page.getByRole('form', { name: 'Catalogue search and filters' })
  await sidebarFilters.getByRole('searchbox', { name: /Search/ }).fill(title)
  const filteredResponse = page.waitForResponse((candidate) => {
    const url = new URL(candidate.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
      && url.searchParams.get('format') === 'epub'
  })
  await sidebarFilters.getByLabel('Format').selectOption('epub')
  expect((await filteredResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title
    && url.searchParams.get('format') === 'epub'
    && !url.searchParams.has('page'))
  const activeFilters = page.getByRole('navigation', { name: 'Active filters' })
  await expect(activeFilters.getByRole('link', { name: 'Remove filter: Search' })).toBeVisible()
  await expect(activeFilters.getByRole('link', { name: 'Remove filter: Format' })).toBeVisible()

  const removeFormatResponse = page.waitForResponse((candidate) => {
    const url = new URL(candidate.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
      && !url.searchParams.has('format')
  })
  await activeFilters.getByRole('link', { name: 'Remove filter: Format' }).click()
  expect((await removeFormatResponse).ok()).toBeTruthy()
  await expect(activeFilters.getByRole('link', { name: 'Remove filter: Search' })).toBeVisible()
  await expect(activeFilters.getByRole('link', { name: 'Remove filter: Format' })).toHaveCount(0)

  const clearResponse = page.waitForResponse((candidate) => {
    const url = new URL(candidate.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && !url.searchParams.has('q')
      && url.searchParams.get('sort') === 'recent'
      && url.searchParams.get('view') === 'list'
  })
  await activeFilters.getByRole('link', { name: 'Clear all' }).click()
  expect((await clearResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => !url.searchParams.has('q')
    && !url.searchParams.has('format')
    && !url.searchParams.has('page')
    && url.searchParams.get('sort') === 'recent'
    && url.searchParams.get('view') === 'list')
  await expect(page.getByRole('navigation', { name: 'Active filters' }).getByRole('link', { name: 'Remove filter: Search' })).toHaveCount(0)
  await expect(page.locator('#library-catalogue-heading')).toBeFocused()
  await expect(toolbar.getByRole('button', { name: 'List' })).toHaveAttribute('aria-pressed', 'true')
  await expect(toolbar.getByLabel('Sort')).toHaveValue('recent')
  browserFailures.assertNone()
})
