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

  await trigger.click()
  const form = panel.locator('form[aria-label="Mobile catalogue filters"]')
  await expect(form).toBeVisible()
  for (const group of ['Content', 'Location', 'Review', 'Personal / display']) {
    await expect(form.getByRole('group', { name: group })).toBeVisible()
  }

  await form.locator('[data-library-mobile-filter-search]').fill(title)
  const catalogueResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
  })
  await form.locator('button.library-mobile-filter-primary').click()
  expect((await catalogueResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title && !url.searchParams.has('format'))
  await expect(trigger).toHaveAccessibleName('Open filters panel; 1 active filters')
  await expect(trigger).toContainText('Filters (1)')
  await expect(form.getByRole('button', { name: 'Show 1 item' })).toBeVisible()
  await expect(page.locator('.library-cover-card').filter({ hasText: title })).toHaveCount(1)
  await attachCheckpoint(page, testInfo, 'mobile-filter-panel', '#library-catalogue')

  await Promise.all([
    page.waitForURL((url) => !url.searchParams.has('q')),
    form.getByRole('link', { name: 'Clear all' }).click(),
  ])
  await expect(page.locator('#library-catalogue')).toHaveAttribute('aria-busy', 'false')
  await expect(page.locator('.library-active-filter-chips')).toHaveCount(0)
  browserFailures.assertNone()
})
