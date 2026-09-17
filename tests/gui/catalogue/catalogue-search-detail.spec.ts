import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, openLibrary, requiredEnvironment, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('searches for a deterministic publication and opens and closes its details @catalogue @detail @smoke', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)
  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const expectedCards = requiredPositiveIntegerEnvironment('PW_EXPECTED_CARDS')

  const catalogue = page.locator('#library-catalogue')
  await expect(catalogue.locator('.library-cover-card')).toHaveCount(expectedCards)

  const filters = page.locator('form.library-sidebar-filters[aria-label="Catalogue search and filters"]')
  await filters.locator('[data-library-quick-search]').fill(title)
  const catalogueResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === title
  })
  await filters.getByRole('button', { name: 'Apply filters' }).click()
  expect((await catalogueResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title)
  await expect(catalogue.getByRole('status')).toContainText('Catalogue updated. 1 item.')
  await expect(catalogue.locator('.library-filter-result-summary')).toContainText('Showing 1–1 of 1 catalogue items')

  const card = catalogue.locator('.library-cover-card').filter({ hasText: title })
  await expect(card).toHaveCount(1)
  const opener = card.locator('.library-cover-link')
  const sidebarResponse = page.waitForResponse((response) => /\/apps\/library\/items\/\d+\/sidebar$/.test(new URL(response.url()).pathname))
  await opener.click()
  expect((await sidebarResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => Boolean(url.searchParams.get('item')))
  const sidebar = page.locator('#app-sidebar-vue')
  await expect(sidebar).toBeVisible()
  await expect(sidebar.locator('header').getByRole('heading', { name: title })).toBeVisible()
  await expect(sidebar.getByRole('navigation', { name: 'Publication detail sections' })).toBeVisible()
  await expect(sidebar.getByRole('link', { name: 'Open', exact: true })).toBeVisible()

  await page.keyboard.press('Escape')
  await expect(sidebar).toBeHidden()
  await expect(page).toHaveURL((url) => !url.searchParams.has('item'))
  await expect(opener).toBeFocused()
  browserFailures.assertNone()
})
