import { expect, test } from '@playwright/test'
import { requiredEnvironment } from '../fixtures/nextcloud'

test.skip(!process.env.PW_SHARE_GRANT_ID || !process.env.PW_SHARE_BOOK_ID,
  'Requires the disposable Files-share removal fixture')

test('Files share removal immediately hides the Library shelf and its cover', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'Run once after the disposable Files share is removed')
  await page.goto('/login')
  await page.locator('#user').fill(requiredEnvironment('PW_RECIPIENT_USER'))
  await page.locator('#password').fill(requiredEnvironment('PW_RECIPIENT_PASSWORD'))
  await Promise.all([
    page.waitForURL((url) => !url.pathname.endsWith('/login')),
    page.locator('button[type="submit"]').click(),
  ])
  await page.goto('/apps/library/shares')
  await expect(page.getByText('No shared libraries yet.')).toBeVisible()
  const grantId = requiredEnvironment('PW_SHARE_GRANT_ID')
  const bookId = requiredEnvironment('PW_SHARE_BOOK_ID')
  for (const path of [
    `/apps/library/shares/${grantId}`,
    `/apps/library/shares/${grantId}/books/${bookId}`,
    `/apps/library/shares/${grantId}/books/${bookId}/cover`,
  ]) {
    const response = await page.request.get(path)
    expect(response.status(), `unexpected access to ${path}`).toBe(404)
  }
})
