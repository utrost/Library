import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, openLibrary, requiredEnvironment } from '../fixtures/nextcloud'

test('applies and clears catalogue filters at a phone viewport @catalogue @filters @mobile @smoke', async ({ page }, testInfo) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const panel = page.locator('#library-catalogue details[data-library-control="filter"]')
  const trigger = panel.locator('summary.library-mobile-filter-trigger')
  await expect(trigger).toBeVisible()
  await expect(trigger).toHaveAccessibleName('Open filters panel')
  await expect(page.locator('.library-sidebar-filter-section')).toBeHidden()

  // Search is outside Filters after the UX overhaul and must work while they are closed.
  await page.locator('#library-main-search').fill(title)
  const catalogueResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
  })
  await page.locator('.library-catalogue-search').getByRole('button', { name: 'Search', exact: true }).click()
  expect((await catalogueResponse).ok()).toBeTruthy()

  await trigger.click()
  const form = panel.locator('form[aria-label="Mobile catalogue filters"]')
  await expect(form).toBeVisible()
  for (const group of ['Content', 'Location', 'Review', 'Personal / display']) {
    await expect(form.getByRole('group', { name: group })).toBeVisible()
  }
  const filteredResponse = page.waitForResponse(response => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title && url.searchParams.get('format') === 'epub'
  })
  await form.getByRole('combobox', { name: 'Format', exact: true }).selectOption('epub')
  expect((await filteredResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title && url.searchParams.get('format') === 'epub')
  await expect(trigger).toHaveAccessibleName('Open filters panel; 2 active filters')
  await expect(trigger).toContainText('Filters (2)')
  await expect(form.getByRole('button', { name: 'Show 1 item' })).toBeVisible()
  await expect(page.locator('.library-cover-card').filter({ hasText: title })).toHaveCount(1)
  await attachCheckpoint(page, testInfo, 'mobile-filter-panel', '#library-catalogue')

  await Promise.all([
    page.waitForURL((url) => !url.searchParams.has('q') && !url.searchParams.has('format')),
    form.getByRole('link', { name: 'Clear all' }).click(),
  ])
  await expect(page.locator('#library-catalogue')).toHaveAttribute('aria-busy', 'false')
  await expect(page.locator('.library-active-filter-chips')).toHaveCount(0)
  browserFailures.assertNone()
})
