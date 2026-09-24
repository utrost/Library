import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, openLibrary, requiredEnvironment } from '../fixtures/nextcloud'

test('keeps catalogue and detail state consistent through history navigation @catalogue @navigation @timing @regression', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const catalogue = page.locator('#library-catalogue')
  const filters = page.getByRole('form', { name: 'Catalogue search and filters' })
  await filters.getByRole('searchbox', { name: /Search/ }).fill(title)
  const filteredResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
      && url.searchParams.get('format') === 'epub'
  })
  await filters.getByLabel('Format').selectOption('epub')
  expect((await filteredResponse).ok()).toBeTruthy()

  const toolbar = page.getByRole('form', { name: 'Catalogue toolbar' })
  const listResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
      && url.searchParams.get('format') === 'epub'
      && url.searchParams.get('view') === 'list'
  })
  await toolbar.getByRole('button', { name: 'List' }).click()
  expect((await listResponse).ok()).toBeTruthy()
  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title
    && url.searchParams.get('format') === 'epub'
    && url.searchParams.get('view') === 'list')

  const row = catalogue.locator('.library-catalogue-list-row').filter({ hasText: title })
  await expect(row).toHaveCount(1)
  const detailResponse = page.waitForResponse((response) => /\/apps\/library\/items\/\d+\/sidebar$/.test(new URL(response.url()).pathname))
  await row.getByRole('button', { name: title, exact: true }).click()
  expect((await detailResponse).ok()).toBeTruthy()
  const detailUrl = page.url()
  const itemId = new URL(detailUrl).searchParams.get('item')
  expect(itemId).toMatch(/^[1-9][0-9]*$/)

  const sidebar = page.locator('#app-sidebar-vue')
  await expect(sidebar).toBeVisible()
  await expect(sidebar.locator('header').getByRole('heading', { name: title })).toBeVisible()
  await expect(row).toHaveClass(/library-catalogue-list-row--open/)

  await page.goBack()
  await expect(page).toHaveURL((url) => !url.searchParams.has('item')
    && url.searchParams.get('q') === title
    && url.searchParams.get('format') === 'epub'
    && url.searchParams.get('view') === 'list')
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  await expect(sidebar).toBeHidden()
  await expect(filters.getByRole('searchbox', { name: /Search/ })).toHaveValue(title)
  await expect(filters.getByLabel('Format')).toHaveValue('epub')
  await expect(toolbar.getByRole('button', { name: 'List' })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByRole('navigation', { name: 'Active filters' }).getByRole('link', { name: 'Remove filter: Search' })).toBeVisible()
  await expect(row).not.toHaveClass(/library-catalogue-list-row--open/)

  await page.goForward()
  await expect(page).toHaveURL(detailUrl)
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  await expect(sidebar).toBeVisible()
  await expect(sidebar.locator('header').getByRole('heading', { name: title })).toBeVisible()
  await expect(row).toHaveClass(/library-catalogue-list-row--open/)
  await expect(filters.getByRole('searchbox', { name: /Search/ })).toHaveValue(title)
  await expect(filters.getByLabel('Format')).toHaveValue('epub')
  await expect(toolbar.getByRole('button', { name: 'List' })).toHaveAttribute('aria-pressed', 'true')
  browserFailures.assertNone()
})
