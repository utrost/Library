import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'
import { openBookDetails, saveBookDetails } from '../fixtures/book-details'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, requiredEnvironment, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('exports a corrected item, previews and applies an imported title, then restores the item @metadata @import @export @smoke @mutation', async ({ page }, testInfo) => {
  test.setTimeout(120_000)
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)

  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const originalTitle = requiredEnvironment('PW_SEARCH_TITLE')
  let titleWasRead = false

  try {
    await openBookDetails(page, itemId)
    const title = page.getByRole('textbox', { name: 'Title', exact: true })
    await expect(title).toHaveValue(originalTitle)
    titleWasRead = true
    const exportTitle = `Playwright export ${itemId} ${Date.now()}`
    await title.fill(exportTitle)
    await saveBookDetails(page, itemId)

    const settingsResponse = await page.goto('/settings/user/library')
    expect(settingsResponse?.ok(), `Library settings returned ${settingsResponse?.status()}`).toBeTruthy()
    const portability = page.locator('.library-settings-section-portability')
    await portability.locator('summary').click()
    await attachCheckpoint(page, testInfo, 'metadata-export-import-settings', '.library-settings-section-portability')

    const downloadPromise = page.waitForEvent('download')
    await portability.getByRole('link', { name: 'Export corrected metadata' }).click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toBe('library-metadata-export.json')
    const exportPath = testInfo.outputPath(download.suggestedFilename())
    await download.saveAs(exportPath)
    const metadataJson = await readFile(exportPath, 'utf8')
    const exportPayload = JSON.parse(metadataJson) as { exportKind?: string; items?: Array<{ id?: number; title?: string }>; [key: string]: unknown }
    expect(exportPayload.exportKind).toBe('library-corrected-metadata')
    const item = exportPayload.items?.find((candidate) => Number(candidate.id) === itemId)
    expect(item, `Item ${itemId} was not included in the corrected metadata export`).toBeTruthy()
    const importedTitle = `Playwright import ${itemId} ${Date.now()}`
    item!.title = importedTitle
    const oneItemExport = { ...exportPayload, itemCount: 1, items: [item] }
    const importJson = JSON.stringify(oneItemExport)

    await portability.locator('textarea[name="metadataJson"]').fill(importJson)
    await Promise.all([
      page.waitForURL((url) => url.pathname.endsWith('/apps/library/import/metadata/preview')),
      portability.getByRole('button', { name: 'Preview metadata import' }).click(),
    ])
    await expect(page.getByRole('heading', { name: 'Review metadata import' })).toBeVisible()
    await expect(page.getByText('Review these counts before applying.')).toBeVisible()
    const preview = page.locator('.library-import-preview-summary')
    const metric = async (summary: typeof preview, label: string) => summary.locator('dt').filter({ hasText: label }).evaluate((term) => Number(term.nextElementSibling?.textContent?.trim() ?? ''))
    expect(await metric(preview, 'Total items')).toBe(1)
    expect(await metric(preview, 'Matched items')).toBe(1)
    expect(await metric(preview, 'Missing items')).toBe(0)
    expect(await metric(preview, 'Invalid items')).toBe(0)
    expect(await metric(preview, 'Changed fields')).toBe(1)
    await attachCheckpoint(page, testInfo, 'metadata-import-preview', '.library-metadata-import-result')

    await Promise.all([
      page.waitForURL((url) => url.pathname.endsWith('/apps/library/import/metadata/apply')),
      page.getByRole('button', { name: 'Apply this reviewed import' }).click(),
    ])
    await expect(page.getByRole('heading', { name: 'Import result' })).toBeVisible()
    const result = page.locator('.library-import-preview-summary')
    expect(await metric(result, 'Matched items')).toBe(1)
    expect(await metric(result, 'Applied items')).toBe(1)
    expect(await metric(result, 'Skipped items')).toBe(0)
    await attachCheckpoint(page, testInfo, 'metadata-import-applied', '.library-metadata-import-result')

    await openBookDetails(page, itemId)
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(importedTitle)
    browserFailures.assertNone()
  } finally {
    if (titleWasRead) {
      await openBookDetails(page, itemId)
      const title = page.getByRole('textbox', { name: 'Title', exact: true })
      await title.fill(originalTitle)
      await saveBookDetails(page, itemId)
      await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(originalTitle)
    }
  }
})
