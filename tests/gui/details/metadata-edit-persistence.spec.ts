import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, openLibrary, requiredEnvironment, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('persists a reversible title edit through advanced details and catalogue search @details @metadata @smoke @mutation', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)

  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const originalTitle = requiredEnvironment('PW_SEARCH_TITLE')
  const detailUrl = `/apps/library/items/${itemId}`
  let titleWasRead = false

  try {
    const detailResponse = await page.goto(detailUrl)
    expect(detailResponse?.ok(), `Item details returned ${detailResponse?.status()}`).toBeTruthy()
    await expect(page.getByRole('heading', { name: 'Publication metadata' })).toBeVisible()
    await expect(page.getByRole('heading', { name: originalTitle })).toBeVisible()

    const title = page.getByRole('textbox', { name: 'Title', exact: true })
    await expect(title).toHaveValue(originalTitle)
    titleWasRead = true
    const editedTitle = `Playwright metadata ${itemId} ${Date.now()}`
    await title.fill(editedTitle)

    await Promise.all([
      page.waitForURL((url) => url.pathname.endsWith(`/apps/library/items/${itemId}`) && url.searchParams.get('metadataSaved') === '1'),
      page.getByRole('button', { name: 'Save metadata' }).click(),
    ])
    await expect(page.getByRole('status')).toContainText('Metadata saved')
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(editedTitle)
    await expect(page.getByRole('heading', { name: editedTitle })).toBeVisible()

    await openLibrary(page)
    const filters = page.getByRole('form', { name: 'Catalogue search and filters' })
    await filters.getByRole('searchbox', { name: /Search/ }).fill(editedTitle)
    const catalogueResponse = page.waitForResponse((candidate) => {
      const url = new URL(candidate.url())
      return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === editedTitle
    })
    await filters.getByRole('button', { name: 'Apply filters' }).click()
    expect((await catalogueResponse).ok()).toBeTruthy()
    await expect(page.locator('.library-cover-card').filter({ hasText: editedTitle })).toHaveCount(1)

    const persistedResponse = await page.goto(detailUrl)
    expect(persistedResponse?.ok(), `Persisted item details returned ${persistedResponse?.status()}`).toBeTruthy()
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(editedTitle)
    browserFailures.assertNone()
  } finally {
    if (titleWasRead) {
      await page.goto(detailUrl)
      const title = page.getByRole('textbox', { name: 'Title', exact: true })
      await title.fill(originalTitle)
      await Promise.all([
        page.waitForURL((url) => url.pathname.endsWith(`/apps/library/items/${itemId}`) && url.searchParams.get('metadataSaved') === '1'),
        page.getByRole('button', { name: 'Save metadata' }).click(),
      ])
      await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(originalTitle)
    }
  }
})
