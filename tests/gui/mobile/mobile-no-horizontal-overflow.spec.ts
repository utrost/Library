import { expect, test, type Locator, type Page } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, collectBrowserFailures, login, openLibrary, requiredEnvironment } from '../fixtures/nextcloud'

async function expectNoHorizontalOverflow(page: Page, scope: Locator): Promise<void> {
  const overflow = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))
  expect(overflow.scrollWidth, `document width ${overflow.scrollWidth}px exceeded viewport ${overflow.clientWidth}px`).toBeLessThanOrEqual(overflow.clientWidth + 1)

  const escaped = await scope.locator('button, a[href], input, select, .library-cover-card').evaluateAll((elements) => elements
    .filter((element) => {
      const style = window.getComputedStyle(element)
      const rect = element.getBoundingClientRect()
      return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0
    })
    .map((element) => {
      const rect = element.getBoundingClientRect()
      return { tag: element.tagName, text: element.getAttribute('aria-label') || element.textContent?.trim().slice(0, 80) || '', left: rect.left, right: rect.right }
    })
    .filter(({ left, right }) => left < -1 || right > document.documentElement.clientWidth + 1))
  expect(escaped, `visible controls outside viewport: ${JSON.stringify(escaped)}`).toEqual([])
}

test('keeps catalogue controls and filtered results within the phone viewport @mobile @layout @css @regression', async ({ page }) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const catalogue = page.locator('#library-catalogue')
  await expectNoHorizontalOverflow(page, catalogue)

  const panel = catalogue.locator('details[data-library-control="filter"]')
  await panel.locator('summary.library-mobile-filter-trigger').click()
  const form = panel.getByRole('form', { name: 'Mobile catalogue filters' })
  await expect(form).toBeVisible()
  await expectNoHorizontalOverflow(page, catalogue)

  await form.locator('[data-library-mobile-filter-search]').fill(title)
  const filteredResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === title
  })
  await form.locator('.library-mobile-filter-primary').click()
  expect((await filteredResponse).ok()).toBeTruthy()
  await expect(catalogue).toHaveAttribute('aria-busy', 'false')
  const card = catalogue.locator('.library-cover-card').filter({ hasText: title })
  await expect(card).toHaveCount(1)
  await expectNoHorizontalOverflow(page, catalogue)
  browserFailures.assertNone()
})
