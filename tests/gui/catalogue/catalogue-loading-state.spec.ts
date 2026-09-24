import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, openLibrary, requiredEnvironment } from '../fixtures/nextcloud'

test('announces a pending catalogue request and clears loading state @catalogue @loading @timing @regression', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const title = requiredEnvironment('PW_SEARCH_TITLE')
  let releaseRequest!: () => void
  const requestGate = new Promise<void>((resolve) => { releaseRequest = resolve })
  let observeRequest!: () => void
  const requestObserved = new Promise<void>((resolve) => { observeRequest = resolve })
  let delayed = false
  await page.route('**/apps/library/catalogue**', async (route) => {
    const url = new URL(route.request().url())
    if (!delayed && url.searchParams.get('q') === title) {
      delayed = true
      observeRequest()
      await requestGate
    }
    await route.continue()
  })

  const catalogue = page.locator('#library-catalogue')
  const initialCards = await catalogue.locator('.library-cover-card').count()
  const filters = page.getByRole('form', { name: 'Catalogue search and filters' })
  await filters.getByRole('searchbox', { name: /Search/ }).fill(title)
  await filters.getByRole('button', { name: 'Apply filters' }).click()
  await requestObserved

  await expect(catalogue).toHaveAttribute('aria-busy', 'true')
  await expect(catalogue.getByRole('status')).toHaveText('Updating catalogue…')
  await expect(catalogue.locator('.library-cover-card')).toHaveCount(initialCards)
  expect(new URL(page.url()).searchParams.has('q')).toBeFalsy()

  releaseRequest()
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title)
  await expect(catalogue.getByRole('status')).toContainText('Catalogue updated. 1 item.')
  await expect(catalogue.locator('.library-cover-card').filter({ hasText: title })).toHaveCount(1)
  browserFailures.assertNone()
})
