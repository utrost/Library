import { expect, test, type Page, type TestInfo } from '@playwright/test'
import { attachCheckpoint, requiredEnvironment } from '../fixtures/nextcloud'

test.skip(!process.env.PW_RECIPIENT_USER || !process.env.PW_OUTSIDER_USER,
  'Requires the disposable three-account sharing fixture')

async function loginAs(page: Page, user: string, password: string): Promise<void> {
  const response = await page.goto('/login')
  expect(response?.ok()).toBeTruthy()
  await page.locator('#user').fill(user)
  await page.locator('#password').fill(password)
  await Promise.all([
    page.waitForURL((url) => !url.pathname.endsWith('/login')),
    page.locator('button[type="submit"]').click(),
  ])
}

async function browseSharedShelf(page: Page, testInfo: TestInfo): Promise<void> {
  await loginAs(page, requiredEnvironment('PW_RECIPIENT_USER'), requiredEnvironment('PW_RECIPIENT_PASSWORD'))
  await page.goto('/apps/library/shares')
  await expect(page.getByRole('heading', { name: 'Shared libraries' })).toBeVisible()
  const shelf = page.locator('#library-received-heading').locator('..').getByRole('link', { name: 'Lifecycle fixture' })
  await expect(shelf).toBeVisible()
  const shelfUrl = await shelf.getAttribute('href')
  expect(shelfUrl).toMatch(/\/apps\/library\/shares\/\d+$/)
  await shelf.click()
  await expect(page.getByRole('heading', { name: 'Lifecycle fixture' })).toBeVisible()

  const search = page.getByRole('searchbox', { name: 'Search titles and authors' })
  await search.fill('Canonical Fixture Name')
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  const book = page.locator('.library-shared-book-row a')
  await expect(book).toHaveCount(1)
  await expect(book).toContainText('Canonical Fixture Name')
  const coverUrl = await book.locator('img').getAttribute('src')
  expect(coverUrl).toMatch(/\/cover$/)
  const cover = await page.request.get(coverUrl!)
  expect(cover.status()).toBe(200)
  expect(cover.headers()['cache-control']).toContain('private')
  expect(cover.headers()['cache-control']).toContain('no-store')
  await attachCheckpoint(page, testInfo, 'shared-shelf')

  await book.click()
  await expect(page.getByRole('link', { name: 'Open in Nextcloud' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Shared books' })).toBeVisible()
  await expect(page.getByText('Canonical Fixture Name')).toBeVisible()
  await expect(page.getByRole('button', { name: /save|delete|edit/i })).toHaveCount(0)
  await expect(page.getByRole('link', { name: 'Shared books' })).toHaveAttribute('href', /search=Canonical(?:%20|\+)Fixture(?:%20|\+)Name/)
  await attachCheckpoint(page, testInfo, 'shared-book')

  const bookUrl = new URL(page.url())
  const grantUrl = new URL(shelfUrl!, bookUrl)
  const outsider = await page.context().browser()!.newContext({ baseURL: bookUrl.origin })
  try {
    const outsiderPage = await outsider.newPage()
    await loginAs(outsiderPage, requiredEnvironment('PW_OUTSIDER_USER'), requiredEnvironment('PW_OUTSIDER_PASSWORD'))
    for (const url of [grantUrl.toString(), bookUrl.toString(), new URL(coverUrl!, bookUrl).toString()]) {
      const denied = await outsiderPage.request.get(url)
      expect(denied.status(), `outsider accessed ${new URL(url).pathname}`).toBe(404)
    }
  } finally {
    await outsider.close()
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
  expect(overflow).toBe(false)
}

test('recipient can browse a shared shelf while an outsider cannot', async ({ page }, testInfo) => {
  await browseSharedShelf(page, testInfo)
})

test('recipient can browse a shared shelf on mobile @mobile', async ({ page }, testInfo) => {
  await browseSharedShelf(page, testInfo)
})
