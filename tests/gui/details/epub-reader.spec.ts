import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { login, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear, requiredEnvironment } from '../fixtures/nextcloud'

// Requires the EPUB Viewer companion app on the explicitly disposable target.
for (const suffix of ['', ' @mobile']) test('EPUB originals and reviewed copies open from Library in the companion reader' + suffix, async ({ page }, info) => {
  test.setTimeout(180000)
  const fixture = JSON.parse(readFileSync(requiredEnvironment('PW_EPUB_READER_FIXTURE'), 'utf8'))
  expect(fixture.user).toMatch(/^library-reader-/)
  expect(requiredEnvironment('PW_USER')).toBe(fixture.user)
  expect(fixture.books).toHaveLength(6)
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  for (const book of fixture.books) {
    await page.goto(`/apps/library/?details=${book.itemId}`)
    const download = (await page.getByRole('link', { name: 'Download source', exact: true }).getAttribute('href'))!
    const pending = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Open', exact: true }).click()
    const reader = await pending
    const readerErrors: string[] = []
    reader.on('pageerror', error => readerErrors.push('pageerror: ' + error.message))
    reader.on('console', message => { if (message.type() === 'error') readerErrors.push(message.text()) })
    try {
      await expect.poll(() => reader.frames().some(frame => frame.url().includes('/apps/epubviewer/')), { timeout: 20000 }).toBeTruthy()
      const shell = reader.frames().find(frame => frame.url().includes('/apps/epubviewer/'))!
      await expect(shell.locator('#book-title')).toHaveText(book.title)
      const chapter = shell.frameLocator('#viewer iframe')
      await expect(chapter.getByRole('heading', { name: 'Fixture chapter', exact: true })).toBeVisible()
      await expect(chapter.getByText('This paragraph and its formatting must survive metadata correction.', { exact: true })).toBeVisible()
      await expect(chapter.locator('em')).toHaveText('Emphasis')
      await expect(chapter.getByRole('heading', { name: 'Fixture chapter', exact: true })).toHaveCSS('color', 'rgb(40, 60, 80)')
      await expect(chapter.getByRole('img', { name: 'Fixture image', exact: true })).toBeVisible()
      await expect(chapter.getByRole('img', { name: 'Fixture image', exact: true })).toHaveJSProperty('naturalWidth', 16)
      await chapter.getByRole('link', { name: 'internal link', exact: true }).click()
      await expect(chapter.getByRole('heading', { name: 'Ending', exact: true })).toBeVisible()
      await reader.screenshot({ path: info.outputPath(book.name + '.png'), animations: 'disabled' })
      // EPUB Viewer 1.9.19 emits these on the unmodified originals too. Preserve
      // them as companion diagnostics; never waive unrelated browser errors.
      await info.attach(book.name + '-reader-diagnostics', { body: JSON.stringify(readerErrors, null, 2), contentType: 'application/json' })
      const knownCompanion = [
        /^\[ERROR\] viewer: Could not register handler \{app: viewer, uid: library-reader-[a-f0-9]+, level: 2, error: The handler is already registered, handler: Object\}$/,
        /^Setting the document's base URI to 'http:\/\/127\.0\.0\.1:\d+\/apps\/epubviewer\/EPUB\/chapter\.xhtml' violates the following Content Security Policy directive: "base-uri 'none'"\. The action has been blocked\.$/,
        /^\[ERROR\] viewer: Could not register handler JSHandle@object$/,
        /^\[JavaScript Error: "Content-Security-Policy: The page’s settings blocked the loading of a resource \(base-uri\) at http:\/\/127\.0\.0\.1:\d+\/apps\/epubviewer\/EPUB\/chapter\.xhtml because it violates the following directive: “base-uri 'none'”" \{file: "http:\/\/127\.0\.0\.1:\d+\/custom_apps\/epubviewer\/js\/epubjs\/epub\.min\.js\?v=1\.9\.19\.[0-9]+" line: 10\}\]$/,
        /^Blocked script execution in 'http:\/\/127\.0\.0\.1:\d+\/apps\/epubviewer\/\?file=[^']+%2Fepub-[23]-(?:original|reviewed|cleared-authors)\.epub&type=application%2Fepub%2Bzip' because the document's frame is sandboxed and the 'allow-scripts' permission is not set\.$/,
      ]
      expect(readerErrors.filter(error => !knownCompanion.some(pattern => pattern.test(error)))).toEqual([])
    } finally { await reader.close() }
    const bytes = await page.request.get(download)
    expect(bytes.status()).toBe(200)
    expect(createHash('sha256').update(await bytes.body()).digest('hex')).toBe(book.hash)
  }
  failures.assertNone()
})
