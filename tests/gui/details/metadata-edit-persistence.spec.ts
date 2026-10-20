import { expect, test } from '@playwright/test'
import { openBookDetails, saveBookDetails } from '../fixtures/book-details'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, latestScanJobId, login, openLibrary, requiredEnvironment, requiredPositiveIntegerEnvironment, waitForScanCompletion } from '../fixtures/nextcloud'

test('edits metadata, rescans, then repairs the suggestion and restores the title @details @metadata @scan @review @smoke @mutation', async ({ page }, testInfo) => {
  test.setTimeout(180_000)
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)

  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const originalTitle = requiredEnvironment('PW_SEARCH_TITLE')
  const rootPath = requiredEnvironment('PW_ROOT_PATH')
  let titleWasRead = false

  try {
    await openBookDetails(page, itemId)
    await expect(page.getByRole('heading', { name: originalTitle })).toBeVisible()

    const title = page.getByRole('textbox', { name: 'Title', exact: true })
    await expect(title).toHaveValue(originalTitle)
    await attachCheckpoint(page, testInfo, 'metadata-edit-form', '.library-full-details-main')
    titleWasRead = true
    const editedTitle = `Playwright metadata ${itemId} ${Date.now()}`
    await title.fill(editedTitle)

    await saveBookDetails(page, itemId)
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(editedTitle)
    await expect(page.getByRole('heading', { name: editedTitle })).toBeVisible()
    await attachCheckpoint(page, testInfo, 'metadata-edited', '.library-full-details-main')

    const settingsResponse = await page.goto('/settings/user/library')
    expect(settingsResponse?.ok(), `Library settings returned ${settingsResponse?.status()}`).toBeTruthy()
    const root = page.locator('.library-root-card').filter({ has: page.locator('.library-root-card-header p').getByText(rootPath, { exact: true }) })
    await expect(root).toHaveCount(1)
    const previousJobId = await latestScanJobId(page)
    await Promise.all([
      // The POST redirects to this same URL; require a new document navigation.
      page.waitForEvent('framenavigated', { predicate: frame => frame === page.mainFrame() && new URL(frame.url()).pathname.endsWith('/settings/user/library') }),
      root.getByRole('button', { name: 'Scan this shelf' }).click(),
    ])
    await page.waitForLoadState('load')
    await waitForScanCompletion(page, previousJobId)

    await openBookDetails(page, itemId)
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(editedTitle)
    await page.locator('details.library-full-details-provenance > summary').click()
    const conflictRow = page.locator('details.library-full-details-provenance > .library-full-details-differences article').filter({ has: page.getByRole('heading', { name: 'Title', exact: true }) })
    await expect(conflictRow).toBeVisible()
    await expect(conflictRow).toContainText(editedTitle)
    await attachCheckpoint(page, testInfo, 'metadata-retained-after-rescan', '.library-full-details')

    await openLibrary(page)
    const search = page.locator('.library-catalogue-search')
    await page.locator('#library-main-search').fill(editedTitle)
    const catalogueResponse = page.waitForResponse((candidate) => {
      const url = new URL(candidate.url())
      return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === editedTitle
    })
    await search.getByRole('button', { name: 'Search', exact: true }).click()
    expect((await catalogueResponse).ok()).toBeTruthy()
    await expect(page.locator('.library-cover-card').filter({ hasText: editedTitle })).toHaveCount(1)

    const reviewResponse = await page.goto(`/apps/library/?q=${encodeURIComponent(editedTitle)}&scannerConflicts=1`)
    expect(reviewResponse?.ok(), `Suggested updates review returned ${reviewResponse?.status()}`).toBeTruthy()
    const workbench = page.locator('.library-metadata-review-workbench')
    await expect(workbench).toBeVisible()
    await expect(workbench.locator('.library-metadata-review-card header strong')).toContainText(editedTitle)
    await attachCheckpoint(page, testInfo, 'suggested-update-review', '.library-metadata-review-workbench')
    const titleSuggestion = workbench.locator('.library-metadata-review-field').filter({ has: page.getByRole('heading', { name: /^title$/i }) })
    const suggestedTitleValue = titleSuggestion.locator('dd').nth(1)
    await expect(suggestedTitleValue).toBeVisible()
    const suggestedTitle = (await suggestedTitleValue.innerText()).trim()
    expect(suggestedTitle).not.toBe('—')
    expect(suggestedTitle).not.toBe('')
    const reviewUrl = page.url()
    await Promise.all([
      // The review page already has this pathname. Wait for its POST redirect,
      // otherwise the next goto aborts core scripts while they are initializing.
      page.waitForURL((url) => url.href !== reviewUrl && url.pathname.endsWith('/apps/library/'), { waitUntil: 'load' }),
      titleSuggestion.getByRole('button', { name: 'Use suggested value' }).click(),
    ])

    await openBookDetails(page, itemId)
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(suggestedTitle)
    browserFailures.assertNone()
  } finally {
    if (titleWasRead) {
      await openBookDetails(page, itemId)
      const title = page.getByRole('textbox', { name: 'Title', exact: true })
      if (await title.inputValue() !== originalTitle) {
        await title.fill(originalTitle)
        await saveBookDetails(page, itemId)
      }
      await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(originalTitle)
    }
  }
})
