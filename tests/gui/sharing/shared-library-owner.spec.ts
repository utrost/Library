import { expect, test } from '@playwright/test'
import { requiredEnvironment } from '../fixtures/nextcloud'

test.skip(!process.env.PW_RECIPIENT_USER,
  'Requires the disposable three-account sharing fixture')

test('owner can revoke and regrant without changing the Files share', async ({ page, browser }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'Run this mutating journey once after recipient browsing')
  await page.goto('/login')
  await page.locator('#user').fill(requiredEnvironment('PW_USER'))
  await page.locator('#password').fill(requiredEnvironment('PW_PASSWORD'))
  await Promise.all([
    page.waitForURL((url) => !url.pathname.endsWith('/login')),
    page.locator('button[type="submit"]').click(),
  ])
  await page.goto('/apps/library/shares')
  await expect(page.getByRole('heading', { name: 'People with access' })).toBeVisible()
  const remove = page.getByRole('button', { name: /Remove access for.*library-recipient.*Lifecycle fixture/ })
  await expect(remove).toBeVisible()
  await remove.click()
  await expect(page.getByRole('status')).toContainText('Library access was removed')
  await expect(remove).toHaveCount(0)

  const recipient = await browser.newContext({ baseURL: new URL(page.url()).origin })
  try {
    const recipientPage = await recipient.newPage()
    await recipientPage.goto('/login')
    await recipientPage.locator('#user').fill(requiredEnvironment('PW_RECIPIENT_USER'))
    await recipientPage.locator('#password').fill(requiredEnvironment('PW_RECIPIENT_PASSWORD'))
    await Promise.all([
      recipientPage.waitForURL((url) => !url.pathname.endsWith('/login')),
      recipientPage.locator('button[type="submit"]').click(),
    ])
    await recipientPage.goto('/apps/library/shares')
    await expect(recipientPage.getByText('No shared libraries yet.')).toBeVisible()

    const picker = page.getByRole('combobox', { name: 'Nextcloud user' })
    await picker.fill('li')
    await expect(page.getByRole('listbox')).toHaveCount(0)
    await picker.fill('library-reci')
    await expect(page.getByRole('option', { name: /library-recipient/ })).toBeVisible()
    await page.getByRole('option', { name: /library-recipient/ }).click()
    await expect(page.locator('.library-share-recipient-picker [role="status"]')).toContainText('library-recipient')
    await page.getByRole('button', { name: 'Review sharing' }).click()
    await expect(page.getByRole('heading', { name: 'Review read-only sharing' })).toBeVisible()
    await expect(page.getByText('Use the recipient’s existing read-only Files access.')).toBeVisible()
    await page.getByRole('button', { name: 'Share read-only' }).click()
    await expect(page.getByRole('status')).toContainText('Library access was shared')
    await expect(page.getByRole('button', { name: /Remove access for.*library-recipient.*Lifecycle fixture/ })).toBeVisible()
    await recipientPage.reload()
    await expect(recipientPage.getByRole('link', { name: 'Lifecycle fixture' })).toBeVisible()
  } finally {
    await recipient.close()
  }
})
