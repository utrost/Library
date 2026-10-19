import { expect, type Page } from '@playwright/test'

export async function openBookDetails(page: Page, itemId: number): Promise<void> {
  const response = await page.goto(`/apps/library/?details=${itemId}`)
  expect(response?.ok(), `Book details returned ${response?.status()}`).toBeTruthy()
  await expect(page.locator('.library-full-details').getByRole('heading', { name: 'Book details' })).toBeVisible()
}

export async function saveBookDetails(page: Page, itemId: number): Promise<void> {
  const response = page.waitForResponse(candidate => candidate.request().method() === 'POST'
    && new URL(candidate.url()).pathname.endsWith(`/apps/library/items/${itemId}`))
  await page.getByRole('button', { name: 'Save book details' }).click()
  expect((await response).status()).toBe(200)
  await expect(page.locator('.library-full-details-feedback')).toContainText('Book details saved')
}
