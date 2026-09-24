import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, openLibrary, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('recovers after a search returns no catalogue results @catalogue @search @edge-case @regression', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const expectedCards = requiredPositiveIntegerEnvironment('PW_EXPECTED_CARDS')
  const missingQuery = `pw-guaranteed-missing-${Date.now()}-${Math.random().toString(36).slice(2)}`
  const catalogue = page.locator('#library-catalogue')
  const filters = page.getByRole('form', { name: 'Catalogue search and filters' })

  await filters.getByRole('searchbox', { name: /Search/ }).fill(missingQuery)
  const emptyResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === missingQuery
  })
  await filters.getByRole('button', { name: 'Apply filters' }).click()
  expect((await emptyResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => url.searchParams.get('q') === missingQuery)
  await expect(filters.getByRole('searchbox', { name: /Search/ })).toHaveValue(missingQuery)
  const activeFilters = page.locator('nav.library-active-filter-chips[aria-label="Active filters"]')
  await expect(activeFilters.locator(':scope > a.library-filter-chip[aria-label="Remove filter: Search"]')).toContainText(missingQuery)
  await expect(catalogue.locator('.library-cover-card')).toHaveCount(0)
  const emptyState = catalogue.locator('.library-filter-empty-state')
  await expect(emptyState).toHaveRole('status')
  await expect(emptyState.getByRole('heading', { name: 'No items match these filters' })).toBeVisible()

  const recoveryResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && !url.searchParams.has('q')
  })
  await emptyState.getByRole('link', { name: 'Clear search' }).click()
  expect((await recoveryResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => !url.searchParams.has('q'))
  await expect(filters.getByRole('searchbox', { name: /Search/ })).toHaveValue('')
  await expect(page.getByRole('navigation', { name: 'Active filters' })).toHaveCount(0)
  await expect(emptyState).toHaveCount(0)
  await expect(catalogue.locator('.library-cover-card')).toHaveCount(expectedCards)
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  browserFailures.assertNone()
})
