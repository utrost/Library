import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, openLibrary, requiredEnvironment, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('searches for a deterministic publication and opens and closes its details @catalogue @detail @smoke', async ({ page }, testInfo) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)
  const title = requiredEnvironment('PW_SEARCH_TITLE')
  const expectedCards = requiredPositiveIntegerEnvironment('PW_EXPECTED_CARDS')

  const catalogue = page.locator('#library-catalogue')

  const filters = page.locator('form.library-sidebar-filters[aria-label="Catalogue search and filters"]')
  await filters.locator('[data-library-quick-search]').fill(title)
  const catalogueResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('q') === title
  })
  await filters.getByRole('button', { name: 'Apply filters' }).click()
  expect((await catalogueResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => url.searchParams.get('q') === title)
  await expect(catalogue.locator('.library-cover-card')).toHaveCount(expectedCards)
  const itemWord = expectedCards === 1 ? 'item' : 'items'
  await expect(catalogue.getByRole('status')).toContainText(`Catalogue updated. ${expectedCards} ${itemWord}.`)
  await expect(catalogue.locator('.library-filter-result-summary')).toContainText(`of ${expectedCards} catalogue items`)

  const card = catalogue.locator('.library-cover-card').filter({ hasText: title })
  await expect(card).toHaveCount(1)
  await attachCheckpoint(page, testInfo, 'catalogue-search-results', '#library-catalogue')
  const opener = card.locator('.library-cover-link')
  const sidebarResponse = page.waitForResponse((response) => /\/apps\/library\/items\/\d+\/sidebar$/.test(new URL(response.url()).pathname))
  await opener.click()
  expect((await sidebarResponse).ok()).toBeTruthy()

  await expect(page).toHaveURL((url) => Boolean(url.searchParams.get('item')))
  const sidebar = page.locator('#app-sidebar-vue')
  await expect(sidebar).toBeVisible()
  await expect(sidebar.locator('header').getByRole('heading', { name: title })).toBeVisible()
  await expect(sidebar.getByRole('navigation', { name: 'Publication detail sections' })).toBeVisible()
  await expect(sidebar.getByRole('link', { name: 'Open', exact: true })).toBeVisible()
  await attachCheckpoint(page, testInfo, 'catalogue-sidebar')

  await page.keyboard.press('Escape')
  await expect(sidebar).toBeHidden()
  await expect(page).toHaveURL((url) => !url.searchParams.has('item'))
  await expect(opener).toBeFocused()

  const toolbar = page.getByRole('form', { name: 'Catalogue toolbar' })
  const listResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue')
      && url.searchParams.get('q') === title
      && url.searchParams.get('view') === 'list'
  })
  await toolbar.getByRole('button', { name: 'List' }).click()
  expect((await listResponse).ok()).toBeTruthy()
  const list = catalogue.getByRole('table', { name: 'Catalogue list' })
  const row = list.locator('.library-catalogue-list-row').filter({ hasText: title })
  await expect(row).toHaveCount(1)
  for (const heading of ['Title', 'Creators', 'Publication date', 'Series', 'Format', 'Shelf']) {
    await expect(list.getByRole('columnheader', { name: heading, exact: true })).toBeVisible()
  }
  const titleButton = row.getByRole('button', { name: title, exact: true })
  await expect(titleButton).toHaveCSS('display', 'block')
  await expect(titleButton).toHaveCSS('white-space', 'normal')
  const thumbnail = row.locator('.library-catalogue-list-cover')
  await expect(thumbnail).toBeVisible()
  const coverImage = thumbnail.locator('img')
  await expect(coverImage).toBeVisible()
  await expect.poll(() => coverImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true)
  await attachCheckpoint(page, testInfo, 'catalogue-list-view', '[data-library-catalogue-list-scroll]')
  browserFailures.assertNone()
})
