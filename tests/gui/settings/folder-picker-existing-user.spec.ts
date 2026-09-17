import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, requiredEnvironment } from '../fixtures/nextcloud'

test('opens and closes the real folder picker for an existing root @settings @folder-picker @regression', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  const rootPath = requiredEnvironment('PW_ROOT_PATH')

  const response = await page.goto('/settings/user/library')
  expect(response?.ok(), `Library settings returned ${response?.status()}`).toBeTruthy()
  const settings = page.locator('#library-settings')
  await expect(settings.getByRole('heading', { name: 'Library settings' })).toBeVisible()

  const rootCard = settings.locator('.library-root-card').filter({ hasText: rootPath })
  await expect(rootCard).toHaveCount(1)
  const pathInput = rootCard.getByRole('textbox', { name: 'Folder path' })
  await expect(pathInput).toHaveValue(rootPath)

  const pickerButton = rootCard.getByRole('button', { name: 'Choose folder' })
  await expect(pickerButton).toBeVisible()
  await pickerButton.click()

  const picker = page.getByRole('dialog', { name: 'Choose a folder for this Library shelf' })
  await expect(picker).toBeVisible()
  await expect(rootCard.locator('[data-library-folder-picker-error]')).toHaveCount(0)
  browserFailures.assertNone()

  await page.keyboard.press('Escape')
  await expect(picker).toBeHidden()
  await expect(pathInput).toHaveValue(rootPath)
  await expect(page).toHaveURL(/\/settings\/user\/library$/)
  // Nextcloud 34 rejects its internal file-picker cancellation promise after
  // a normal Escape close in either engine. Allow zero or one exact close-phase signal.
  browserFailures.assertNoneOrExactSetAndClear([/^pageerror: FilePicker: No nodes selected$/])
  browserFailures.assertNone()
})
