import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, latestScanJobId, login, openLibrary, requiredEnvironment, requiredPositiveIntegerEnvironment, waitForScanCompletion } from '../fixtures/nextcloud'

test('scans a configured root and finds its publication in the catalogue @scan @catalogue @smoke @mutation', async ({ page }, testInfo) => {
  test.setTimeout(180_000)
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)

  const rootPath = requiredEnvironment('PW_ROOT_PATH')
  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const expectedCards = requiredPositiveIntegerEnvironment('PW_EXPECTED_CARDS')

  const settingsResponse = await page.goto('/settings/user/library')
  expect(settingsResponse?.ok(), `Library settings returned ${settingsResponse?.status()}`).toBeTruthy()
  const root = page.locator('.library-root-card').filter({ has: page.locator('.library-root-card-header p').getByText(rootPath, { exact: true }) })
  await expect(root).toHaveCount(1)
  await expect(root.getByRole('button', { name: 'Scan this root' })).toBeVisible()
  await attachCheckpoint(page, testInfo, 'scan-root-before', '.library-root-list')

  const previousJobId = await latestScanJobId(page)
  await Promise.all([
    page.waitForURL((url) => url.pathname.endsWith('/settings/user/library')),
    root.getByRole('button', { name: 'Scan this root' }).click(),
  ])
  await waitForScanCompletion(page, previousJobId)

  await page.reload()
  await expect(page.locator('[data-library-scan-status]')).toHaveText('completed')
  await expect(page.locator('[data-library-scan-completion-summary]')).toBeVisible()
  await attachCheckpoint(page, testInfo, 'scan-root-completed', '.library-scan-progress')

  await openLibrary(page)
  const filters = page.getByRole('form', { name: 'Catalogue search and filters' })
  await filters.locator('[data-library-quick-search]').fill(title)
  const catalogueResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === title
  })
  await filters.getByRole('button', { name: 'Apply filters' }).click()
  expect((await catalogueResponse).ok()).toBeTruthy()
  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title)
  await expect(page.locator('#library-catalogue .library-cover-card')).toHaveCount(expectedCards)
  await attachCheckpoint(page, testInfo, 'scan-root-catalogue', '#library-catalogue')
  browserFailures.assertNone()
})
