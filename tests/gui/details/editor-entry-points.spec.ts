import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('author, series and bookmarked links use one editor and retain Back context @details @smoke', async ({ page, browser }, testInfo) => {
  test.setTimeout(90_000)
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  const id = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const snapshot = await page.request.get(`/apps/library/items/${id}/sidebar`)
  const book = (await snapshot.json()).item
  let writes = 0
  page.on('request', request => { if (request.method() !== 'GET' && new URL(request.url()).pathname.includes('/apps/library/')) writes++ })
  // Navigation fixtures keep this journey read-only even when the sample has no series.
  await page.route('**/apps/library/api/authors/987654?*', route => route.fulfill({ json: {
    author: { id: 987654, display_name: 'Entry author', sort_name: 'Entry author', biography: '' },
    books: [{ id, title: book.title, extension: book.extension }], canEdit: true, bookCount: 1, matchingCount: 1,
  } }))
  await page.route('**/apps/library/api/series/987654?*', route => route.fulfill({ json: {
    series: { id: 987654, display_name: 'Entry series', description: '' },
    books: [{ id, title: book.title, extension: book.extension }], canEdit: true, bookCount: 1,
  } }))
  for (const [source, selector] of [
    ['/apps/library/?authors=1&authorId=987654&bookSearch=fixture&bookSort=newest&bookView=list', '.author-book-title'],
    ['/apps/library/?series=1&seriesId=987654', '.series-books a'],
  ]) {
    await page.goto(source)
    const link = page.locator(selector).first()
    await expect(link).toBeVisible()
    await expect(page.locator('.library-authors, .library-series')).toHaveAttribute('aria-busy', 'false')
    const href = await link.getAttribute('href')
    expect(new URL(href!, page.url()).searchParams.get('returnTo')).toBe(source)
    await link.click()
    await expect(page.getByRole('heading', { name: 'Book details', exact: true })).toBeVisible()
    await expect(page.locator('.library-detail-edit-form--autosave')).toHaveCount(0)
    await expect(page.locator('.library-identity-panel')).toBeVisible()
    await page.locator('.library-full-details-back').click()
    await expect(page).toHaveURL(new RegExp(source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$'))
    // A changed URL is not a loaded destination. Finish Back navigation before
    // starting the next journey so Firefox does not abort Nextcloud startup.
    await expect(page.locator(selector).first()).toBeVisible()
    await expect(page.locator('.library-authors, .library-series')).toHaveAttribute('aria-busy', 'false')
    await page.waitForLoadState('networkidle')
  }
  const source = '/apps/library/?search=fixture&sort=title'
  const oldUrl = `/apps/library/items/${id}?metadataSaved=1&returnTo=${encodeURIComponent(source)}`
  const redirect = await page.request.get(oldUrl, { maxRedirects: 0 })
  expect(redirect.status()).toBe(303)
  const target = new URL(redirect.headers().location, page.url())
  expect(target.searchParams.get('details')).toBe(String(id))
  expect(target.searchParams.get('returnTo')).toBe(source)
  await page.goto(oldUrl)
  await expect(page.getByRole('heading', { name: 'Book details', exact: true })).toBeVisible()
  await expect(page.getByRole('status').filter({ hasText: /^Saved$/ })).toBeVisible()
  await expect(page.locator('.library-full-details-back')).toHaveAttribute('href', source)
  const status = page.locator('details.library-full-details-status')
  await expect(status).not.toHaveAttribute('open')
  const labels = await page.locator('main.library-full-details > details > summary').allTextContents()
  expect(labels).toEqual(['Metadata status', 'Imported metadata and scan suggestions', 'File metadata'])
  await status.locator('summary').focus()
  await page.keyboard.press('Enter')
  await expect(status).toHaveAttribute('open', '')
  await expect(status.locator('dt')).toHaveText(['Completeness', 'Confidence', 'Attention', 'Personal'])
  await expect(status.locator('h1,h2,h3,h4')).toHaveCount(0)
  await attachCheckpoint(page, testInfo, 'canonical-editor-status', '.library-full-details-status')
  const refreshedCover = page.waitForResponse(response => response.url().includes(`/items/${id}/cover?`) && new URL(response.url()).searchParams.get('refresh') === '1')
  await page.goto(`/apps/library/items/${id}?coverRefresh=1&openUnavailable=1&coverUploadError=invalid`)
  await expect(page.getByRole('alert').filter({ hasText: 'The source file could not be opened.' })).toBeVisible()
  await expect(page.getByRole('alert').filter({ hasText: 'Cover was not saved.' })).toBeVisible()
  expect((await refreshedCover).headers()['cache-control']).toContain('no-store')
  expect(writes).toBe(0)
  const after = (await (await page.request.get(`/apps/library/items/${id}/sidebar`)).json()).item
  expect(after.metadataRevision).toBe(book.metadataRevision)
  const missing = await page.request.get('/apps/library/items/2147483647', { maxRedirects: 0 })
  expect(missing.status()).toBe(404)
  expect(missing.headers().location).toBeUndefined()
  failures.assertNone()
  const otherContext = await browser.newContext()
  try {
    const otherPage = await otherContext.newPage()
    await otherPage.goto('/login')
    await otherPage.locator('#user').fill('library-lists-other')
    await otherPage.locator('#password').fill('Disposable-lists-other-2026')
    await Promise.all([otherPage.waitForURL(url => !url.pathname.endsWith('/login')), otherPage.locator('button[type="submit"]').click()])
    for (const suffix of ['', '/sidebar', '/details-context']) {
      const denied = await otherPage.request.get(`/apps/library/items/${id}${suffix}`, { maxRedirects: 0 })
      expect(denied.status()).toBe(404)
      expect(denied.headers().location).toBeUndefined()
    }
  } finally { await otherContext.close() }
})

test('bottom disclosures wrap and expand by keyboard in light and dark themes @details @mobile', async ({ page }, testInfo) => {
  await login(page)
  const id = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  for (const theme of ['light', 'dark'] as const) {
    await page.emulateMedia({ colorScheme: theme })
    await page.goto(`/apps/library/items/${id}`)
    await expect(page.getByRole('heading', { name: 'Book details', exact: true })).toBeVisible()
    await page.evaluate(theme => {
      document.body.removeAttribute('data-theme-light')
      document.body.removeAttribute('data-theme-dark')
      document.body.setAttribute(`data-theme-${theme}`, '')
    }, theme)
    const disclosures = page.locator('main.library-full-details > details')
    await expect(disclosures.locator(':scope > summary')).toHaveText(['Metadata status', 'Imported metadata and scan suggestions', 'File metadata'])
    for (const disclosure of await disclosures.all()) {
      await disclosure.locator(':scope > summary').focus()
      await page.keyboard.press('Enter')
      await expect(disclosure).toHaveAttribute('open', '')
      expect(await page.locator('.library-full-details').evaluate(node => node.scrollWidth <= node.clientWidth + 1)).toBe(true)
      await disclosure.locator(':scope > summary').press('Enter')
    }
    await attachCheckpoint(page, testInfo, `canonical-bottom-${theme}`, 'main.library-full-details')
  }
})
