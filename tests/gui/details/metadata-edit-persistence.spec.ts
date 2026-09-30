import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, latestScanJobId, login, openLibrary, requiredEnvironment, requiredPositiveIntegerEnvironment, waitForScanCompletion } from '../fixtures/nextcloud'

test('edits metadata, rescans, then repairs the suggestion and restores the title @details @metadata @scan @review @smoke @mutation', async ({ page }, testInfo) => {
  test.setTimeout(180_000)
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)

  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const originalTitle = requiredEnvironment('PW_SEARCH_TITLE')
  const rootPath = requiredEnvironment('PW_ROOT_PATH')
  const detailUrl = `/apps/library/items/${itemId}`
  let titleWasRead = false

  try {
    const detailResponse = await page.goto(detailUrl)
    expect(detailResponse?.ok(), `Item details returned ${detailResponse?.status()}`).toBeTruthy()
    await expect(page.getByRole('heading', { name: 'Publication metadata' })).toBeVisible()
    await expect(page.getByRole('heading', { name: originalTitle })).toBeVisible()

    const title = page.getByRole('textbox', { name: 'Title', exact: true })
    await expect(title).toHaveValue(originalTitle)
    const metadataForm = page.locator('form.library-detail-edit-form')
    await attachCheckpoint(page, testInfo, 'metadata-edit-form', 'form.library-detail-edit-form')
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
    await attachCheckpoint(page, testInfo, 'metadata-edited', '.library-detail-workbench')

    const settingsResponse = await page.goto('/settings/user/library')
    expect(settingsResponse?.ok(), `Library settings returned ${settingsResponse?.status()}`).toBeTruthy()
    const root = page.locator('.library-root-card').filter({ has: page.locator('.library-root-card-header p').getByText(rootPath, { exact: true }) })
    await expect(root).toHaveCount(1)
    const previousJobId = await latestScanJobId(page)
    await Promise.all([
      page.waitForURL((url) => url.pathname.endsWith('/settings/user/library')),
      root.getByRole('button', { name: 'Scan this root' }).click(),
    ])
    await waitForScanCompletion(page, previousJobId)

    const afterScanResponse = await page.goto(detailUrl)
    expect(afterScanResponse?.ok(), `Post-scan details returned ${afterScanResponse?.status()}`).toBeTruthy()
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(editedTitle)
    await page.locator('details.library-detail-section-provenance > summary').click()
    const conflictRow = page.locator('.library-provenance-differences tr.library-field-conflict').filter({ has: page.getByRole('rowheader', { name: 'Title', exact: true }) })
    await expect(conflictRow).toBeVisible()
    await expect(conflictRow).toContainText(editedTitle)
    await attachCheckpoint(page, testInfo, 'metadata-retained-after-rescan', '.library-detail-workbench')

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

    const persistedResponse = await page.goto(detailUrl)
    expect(persistedResponse?.ok(), `Persisted item details returned ${persistedResponse?.status()}`).toBeTruthy()
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(suggestedTitle)
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
