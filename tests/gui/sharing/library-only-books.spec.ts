import { expect, test, type Browser, type Page, type TestInfo } from '@playwright/test'
import { attachCheckpoint, requiredEnvironment } from '../fixtures/nextcloud'

test.skip(!process.env.PW_OTHER_USER || !process.env.PW_SHARE_EXCLUDED_ITEM_ID,
  'Requires the disposable Library-only sharing fixture')

async function login(page: Page, user: string, password: string): Promise<void> {
  await page.goto('/login')
  await page.locator('#user').fill(user)
  await page.locator('#password').fill(password)
  await Promise.all([
    page.waitForURL(url => !url.pathname.endsWith('/login'), { waitUntil: 'domcontentloaded' }),
    page.locator('button[type="submit"]').click({ noWaitAfter: true }),
  ])
  // Let the Nextcloud shell finish its lazy imports before navigating away from login.
  await page.waitForLoadState('networkidle', { timeout: 15_000 })
}

async function selectedBooksJourney(page: Page, browser: Browser, testInfo: TestInfo): Promise<void> {
  const pageErrors: string[] = []
  page.on('pageerror', error => pageErrors.push(error.message))
  const otherUser = requiredEnvironment('PW_OTHER_USER')
  const escapedOtherUser = otherUser.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const removeAccess = new RegExp(`Remove access for.*${escapedOtherUser}.*Lifecycle fixture`)
  await login(page, requiredEnvironment('PW_USER'), requiredEnvironment('PW_PASSWORD'))
  await page.goto('/apps/library/shares')
  const previous = page.getByRole('button', { name: removeAccess })
  if (await previous.count()) await previous.click()
  await page.getByRole('combobox', { name: 'Access' }).selectOption('library_only')
  await expect(page.getByRole('combobox', { name: 'Books to share' })).toBeVisible()
  await page.getByRole('combobox', { name: 'Books to share' }).selectOption({ label: 'One selected fixture book (1)' })
  const picker = page.getByRole('combobox', { name: 'Nextcloud user' })
  await picker.fill(otherUser)
  await page.getByRole('option', { name: new RegExp(escapedOtherUser) }).click()
  await page.getByRole('button', { name: 'Review sharing' }).click()
  await expect(page.getByText('Selected books only, without a Nextcloud Files share')).toBeVisible()
  await expect(page.getByText('One selected fixture book')).toBeVisible()
  await page.getByText('Review selected books', { exact: true }).click()
  await expect(page.locator('details').filter({ has: page.getByText('Review selected books', { exact: true }) })).toContainText('/LibraryLifecycle/example.pdf')
  await attachCheckpoint(page, testInfo, 'library-only-confirm')
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false)
  await page.getByRole('button', { name: 'Share read-only' }).click()
  await expect(page.getByRole('status')).toContainText('Library access was shared')

  const recipientContext = await browser.newContext({ baseURL: new URL(page.url()).origin,
    viewport: page.viewportSize() ?? undefined })
  const outsiderContext = await browser.newContext({ baseURL: new URL(page.url()).origin })
  try {
    const recipient = await recipientContext.newPage()
    recipient.on('pageerror', error => pageErrors.push(error.message))
    await login(recipient, requiredEnvironment('PW_OTHER_USER'), requiredEnvironment('PW_OTHER_PASSWORD'))
    await recipient.goto('/apps/library/shares')
    const shelf = recipient.getByRole('link', { name: 'Lifecycle fixture' })
    await expect(shelf).toBeVisible()
    await shelf.click()
    const book = recipient.locator('.library-shared-book-row a')
    await expect(book).toHaveCount(1)
    const coverUrl = await book.locator('img').getAttribute('src')
    expect((await recipient.request.get(coverUrl!)).status()).toBe(200)
    const shelfUrl = recipient.url()
    await book.click()
    const download = recipient.getByRole('link', { name: 'Download shared file' })
    await expect(download).toBeVisible()
    const contentUrl = await download.getAttribute('href')
    expect(contentUrl).toMatch(/\/content$/)
    const response = await recipient.request.get(contentUrl!)
    expect(response.status()).toBe(200)
    expect(response.headers()['content-disposition']).toContain('attachment')
    expect(response.headers()['cache-control']).toContain('no-store')
    expect((await response.body()).subarray(0, 4).toString()).toBe('%PDF')
    // Range and conditional requests must authorize before exposing any source bytes.
    const ranged = await recipient.request.get(contentUrl!, { headers: { Range: 'bytes=0-3' } })
    expect(ranged.status()).toBe(206)
    expect(ranged.headers()['content-range']).toMatch(/^bytes 0-3\/\d+$/)
    expect((await ranged.body()).toString()).toBe('%PDF')
    const suffix = await recipient.request.get(contentUrl!, { headers: { Range: 'bytes=-4' } })
    expect(suffix.status()).toBe(206)
    expect(await suffix.body()).toEqual((await response.body()).subarray(-4))
    const impossible = await recipient.request.get(contentUrl!, { headers: { Range: 'bytes=9999999999-' } })
    expect(impossible.status()).toBe(416)
    expect(impossible.headers()['content-range']).toMatch(/^bytes \*\/\d+$/)
    const staleRange = await recipient.request.get(contentUrl!, { headers: { Range: 'bytes=0-3', 'If-Range': '"stale-fixture"' } })
    expect(staleRange.status()).toBe(200)
    expect(await staleRange.body()).toEqual(await response.body())
    const etag = response.headers().etag
    expect(etag).toBeTruthy()
    const conditional = await recipient.request.get(contentUrl!, { headers: { 'If-None-Match': etag } })
    expect(conditional.status()).toBe(304)
    const excluded = `${shelfUrl.replace(/\?.*$/, '')}/books/${requiredEnvironment('PW_SHARE_EXCLUDED_ITEM_ID')}`
    for (const deniedUrl of [excluded, `${excluded}/content`, `${excluded}/cover`]) {
      expect((await recipient.request.get(deniedUrl)).status()).toBe(404)
    }
    const overflow = await recipient.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
    expect(overflow).toBe(false)
    await attachCheckpoint(recipient, testInfo, 'library-only-book')

    const outsider = await outsiderContext.newPage()
    outsider.on('pageerror', error => pageErrors.push(error.message))
    await login(outsider, requiredEnvironment('PW_OUTSIDER_USER'), requiredEnvironment('PW_OUTSIDER_PASSWORD'))
    for (const deniedUrl of [shelfUrl, contentUrl!, coverUrl!]) {
      expect((await outsider.request.get(deniedUrl)).status()).toBe(404)
    }
    await page.getByRole('button', { name: removeAccess }).click()
    await expect(page.getByRole('status')).toContainText('Library access was removed')
    expect((await recipient.request.get(contentUrl!, { headers: { Range: 'bytes=0-3' } })).status()).toBe(404)
    expect((await recipient.request.get(contentUrl!, { headers: { 'If-None-Match': etag } })).status()).toBe(404)
    expect((await recipient.request.get(coverUrl!)).status()).toBe(404)
    expect((await recipient.request.get(recipient.url())).status()).toBe(404)
  } finally {
    await recipientContext.close()
    await outsiderContext.close()
  }
  expect(pageErrors).toEqual([])
}

test('owner shares selected books without Files access; recipient can download only those books', async ({ page, browser }, testInfo) => {
  await selectedBooksJourney(page, browser, testInfo)
})

test('selected-book sharing wraps and works on mobile @mobile', async ({ page, browser }, testInfo) => {
  await selectedBooksJourney(page, browser, testInfo)
})
