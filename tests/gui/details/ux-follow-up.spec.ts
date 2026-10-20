import { expect, test } from '@playwright/test'
import { login, requiredEnvironment, attachCheckpoint } from '../fixtures/nextcloud'

test('picker Enter and ArrowUp select visible values, and subject creation is explicit @ux', async ({ page }, info) => {
  await login(page)
  await page.route('**/catalogue/subject-suggestions?*', route => route.fulfill({ json: { subjects: ['History', 'Historical fiction', 'Histology'] } }))
  await page.goto(`/apps/library/?details=${requiredEnvironment('PW_ITEM_ID')}`)
  const subjects = page.getByRole('combobox', { name: 'Search subjects' })
  await subjects.fill('Hist')
  await expect(page.getByRole('option', { name: 'History', exact: true })).toHaveAttribute('aria-selected', 'true')
  await subjects.press('ArrowUp')
  await expect(page.getByRole('option', { name: 'Histology', exact: true })).toHaveAttribute('aria-selected', 'true')
  await subjects.press('Enter')
  await expect(page.getByRole('button', { name: 'Remove: Histology', exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Remove: Hist', exact: true })).toHaveCount(0)
  await page.getByRole('button', { name: 'Discard changes', exact: true }).click()
  const language = page.getByRole('combobox', { name: 'Search languages or enter a code' })
  // Pick a known language not already on this fixture.
  const name = await page.getByRole('button', { name: 'Remove: de', exact: true }).count() ? 'Japanese' : 'German'
  const code = name === 'German' ? 'de' : 'ja'
  await language.fill(name)
  await expect(page.getByRole('option', { name: `${name} (${code})`, exact: true })).toHaveAttribute('aria-selected', 'true')
  await language.press('Enter')
  await expect(page.getByRole('button', { name: `Remove: ${code}`, exact: true })).toBeVisible()
  await attachCheckpoint(page, info, 'consistent-keyboard-pickers')
  await page.getByRole('button', { name: 'Discard changes', exact: true }).click()
})

test('short directory queries keep their applied scope through sorting and return @ux', async ({ page }) => {
  await login(page)
  await page.goto('/apps/library/?authors=1')
  const search = page.locator('#author-search')
  await search.fill('Fixture')
  await expect(page).toHaveURL(/authorSearch=Fixture/)
  await search.fill('Fi')
  await expect(page.locator('.directory-query-hint')).toContainText('Fixture')
  await page.locator('#author-directory-sort').selectOption('name_desc')
  await expect(page).toHaveURL(/authorSearch=Fixture/)
  await expect(search).toHaveValue('Fi')
  await page.reload()
  await expect(search).toHaveValue('Fi')
  await expect(page.locator('.directory-query-hint')).toContainText('Fixture')
  await search.fill('')
  await expect(page).not.toHaveURL(/authorSearch=/)
})

async function returnJourney(page, info) {
  await login(page)
  await page.goto('/apps/library/?limit=100')
  const cards = page.locator('#library-catalogue .library-cover-card')
  await expect(cards.nth(10)).toBeVisible()
  const root = page.locator('#app-content-vue'), link = cards.nth(10).locator('.library-cover-link')
  await link.scrollIntoViewIfNeeded()
  const before = await root.evaluate(el => el.scrollTop)
  expect(before).toBeGreaterThan(100)
  await link.click()
  await expect(page.locator('.library-full-details')).toBeVisible()
  await page.locator('.library-full-details-back').click()
  await expect.poll(async () => Math.abs((await root.evaluate(el => el.scrollTop)) - before)).toBeLessThan(60)
  await expect(link).toBeFocused()
  await attachCheckpoint(page, info, 'restored-catalogue-position')
  await link.click()
  await expect(page.locator('.library-full-details')).toBeVisible()
  await page.goBack()
  await expect.poll(async () => Math.abs((await root.evaluate(el => el.scrollTop)) - before)).toBeLessThan(60)
}
test('Details Back and browser Back restore catalogue position @ux', async ({ page }, info) => returnJourney(page, info))
test('mobile Details Back restores catalogue position @ux @mobile', async ({ page }, info) => returnJourney(page, info))

async function seriesJourney(page, info) {
  await login(page)
  const list = await (await page.request.get('/apps/library/api/series?previews=1')).json()
  let series = list.series.find(entry => entry.book_count > 0)
  let createdAssignment = false
  const itemId = requiredEnvironment('PW_ITEM_ID')
  if (!series) {
    // Mixed-file fixtures need not contain any series. Assign one on the disposable
    // test book and remove the assignment in finally, preserving its other fields.
    await page.goto(`/apps/library/?details=${itemId}`)
    const editor = page.locator('[aria-labelledby="library-full-details-series-heading"]')
    await editor.getByRole('button', { name: 'Choose series', exact: true }).click()
    await editor.getByRole('combobox', { name: 'Choose a series' }).fill(`Browser series ${Date.now()}`)
    await editor.getByRole('button', { name: 'Create and choose series' }).click()
    await page.getByRole('button', { name: 'Save book details', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Discard changes', exact: true })).toHaveCount(0)
    const saved = await (await page.request.get(`/apps/library/items/${itemId}/sidebar`)).json()
    series = saved.item.canonicalSeries[0]
    expect(series).toBeTruthy()
    createdAssignment = true
  }
  try {
  await page.goto(`/apps/library/?series=1&seriesId=${series.id}`)
  const toolbar = page.locator('.library-book-toolbar')
  await expect(toolbar.locator('select')).toHaveValue('part')
  const title = await page.locator('.series-books .author-book-title').first().innerText()
  await toolbar.getByRole('searchbox', { name: 'Search titles' }).fill(title)
  await toolbar.getByRole('button', { name: 'Search', exact: true }).click()
  await expect(page).toHaveURL(/bookSearch=/)
  await toolbar.locator('select').selectOption('title')
  await expect(page).toHaveURL(/bookSort=title/)
  await toolbar.getByRole('button', { name: 'Covers', exact: true }).click()
  await expect(page).toHaveURL(/bookView=grid/)
  const source = page.url()
  await page.locator('.series-books .author-book-title').first().click()
  await expect(page.locator('.library-full-details')).toBeVisible()
  await page.locator('.library-full-details-back').click()
  await expect(page).toHaveURL(source)
  await expect(toolbar.locator('select')).toHaveValue('title')
  await expect(toolbar.getByRole('searchbox')).toHaveValue(title)
  await attachCheckpoint(page, info, 'series-browsing-toolbar')
  } finally {
    if (createdAssignment) {
      await page.goto(`/apps/library/?details=${itemId}`)
      await page.getByRole('button', { name: 'Remove series', exact: true }).click()
      await page.getByRole('button', { name: 'Save book details', exact: true }).click()
      await expect(page.getByRole('button', { name: 'Discard changes', exact: true })).toHaveCount(0)
      const restored = await (await page.request.get(`/apps/library/items/${itemId}/sidebar`)).json()
      expect(restored.item.canonicalSeries ?? []).toEqual([])
    }
  }
}
test('series collection toolbar preserves search, ordering and view through Details @ux @mutation', async ({ page }, info) => seriesJourney(page, info))
test('series collection toolbar fits mobile and preserves return state @ux @mobile @mutation', async ({ page }, info) => seriesJourney(page, info))
