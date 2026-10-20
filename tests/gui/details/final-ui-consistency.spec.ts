import { expect, test } from '@playwright/test'
import { login, requiredEnvironment, attachCheckpoint } from '../fixtures/nextcloud'

async function profiles(page, info) {
  await login(page)
  const item = Number(requiredEnvironment('PW_ITEM_ID'))
  for (const kind of ['author', 'series']) {
    const plural = kind === 'author' ? 'authors' : 'series'
    await page.route(`**/api/${plural}/987654?*`, route => {
      const search = new URL(route.request().url()).searchParams.get('search') || ''
      const books = search ? [] : [{ id: item, title: 'Profile navigation fixture', creators: 'Example author' }]
      return route.fulfill({ json: { [kind]: { id: 987654, display_name: 'Profile fixture' }, books, bookCount: 1, matchingCount: books.length, page: 1, hasNext: false } })
    })
    await page.goto(`/apps/library/?${plural}=1&${kind}Id=987654`)
    const back = page.getByRole('link', { name: `All ${plural}`, exact: true })
    await expect(back).toBeVisible()
    expect(await back.evaluate(link => {
      const r = link.getBoundingClientRect(), hit = document.elementFromPoint(r.left + 5, r.top + r.height / 2)
      return hit === link || link.contains(hit)
    })).toBe(true)
    const search = page.getByRole('searchbox', { name: 'Search titles', exact: true })
    await search.fill('Unsubmitted')
    const views = page.locator('.library-book-views')
    await views.getByRole('button', { name: kind === 'author' ? 'List' : 'Covers', exact: true }).click()
    const chosen = views.locator('[aria-pressed="true"]'), other = views.locator('[aria-pressed="false"]')
    expect(await chosen.evaluate(e => getComputedStyle(e).backgroundColor)).not.toBe(await other.evaluate(e => getComputedStyle(e).backgroundColor))
    await page.locator('.author-book-title').click()
    await expect(page.locator('.library-full-details')).toBeVisible()
    await page.locator('.library-full-details-back').click()
    await expect(page.locator('.library-collection-book')).toHaveCount(1)
    await expect(search).toHaveValue('Unsubmitted')
    await page.reload()
    await expect(page.locator('.library-collection-book')).toHaveCount(1)
    await expect(search).toHaveValue('Unsubmitted')
    await page.locator('.library-book-toolbar').getByRole('button', { name: 'Search', exact: true }).click()
    await expect(page.locator('.library-collection-book')).toHaveCount(0)
    await search.fill('')
    await page.locator('.library-book-toolbar').getByRole('button', { name: 'Search', exact: true }).click()
    await expect(page.locator('.library-collection-book')).toHaveCount(1)
    await attachCheckpoint(page, info, `${kind}-consistent-profile`)
  }
}
test('profile drafts, views and Back preserve the displayed scope @ux', ({ page }, info) => profiles(page, info))
test('mobile profile headers and draft navigation stay usable @ux @mobile', ({ page }, info) => profiles(page, info))

async function filters(page, info) {
  await login(page)
  const mobile = info.project.name.includes('mobile')
  for (const [facet, key, query, values] of [
    ['publication', 'publications', 'Xan', ['Xanth', 'Xanth Monthly']],
    ['year', 'years', '200', ['2000', '2001']],
    ['publisher', 'publishers', 'Pen', ['Penguin', 'Penguin Books']],
  ] as const) {
    await page.route(`**/catalogue/${facet}-suggestions?*`, route => route.fulfill({ json: { [key]: values } }))
    await page.goto('/apps/library/')
    if (mobile) await page.locator('.library-mobile-filter-panel > summary').click()
    const input = page.locator(`#library-${mobile ? 'mobile-' : ''}${facet}-search`)
    await input.fill(query)
    const list = page.locator(`#${await input.getAttribute('aria-controls')}`)
    await expect(list.getByRole('option').first()).toHaveAttribute('aria-selected', 'true')
    await input.press('ArrowDown')
    await expect(list.getByRole('option').nth(1)).toHaveAttribute('aria-selected', 'true')
    expect(await list.getByRole('option').nth(1).locator('button').evaluate(e => getComputedStyle(e).backgroundColor)).not.toBe(await list.getByRole('option').first().locator('button').evaluate(e => getComputedStyle(e).backgroundColor))
    await input.press('Enter')
    await expect.poll(() => new URL(page.url()).searchParams.get(facet)).toBe(values[1])
  }
  let attempts = 0
  await page.route('**/catalogue/publication-suggestions?*', route => ++attempts === 1 ? route.fulfill({ status: 503, json: {} }) : route.fulfill({ json: { publications: [] } }))
  await page.goto('/apps/library/')
  if (mobile) await page.locator('.library-mobile-filter-panel > summary').click()
  const query = page.locator(`#library-${mobile ? 'mobile-' : ''}publication-search`)
  const field = query.locator('..')
  await query.fill('Za')
  await expect(field).toContainText('Type at least 3 characters.')
  expect(attempts).toBe(0)
  await query.fill('Zan')
  await expect(field.getByRole('alert')).toContainText('Could not load suggestions')
  await query.press('Enter')
  expect(new URL(page.url()).searchParams.get('publication')).toBeNull()
  await field.getByRole('button', { name: 'Retry', exact: true }).click()
  await query.focus()
  await expect(field).toContainText('No matches found.')
  await attachCheckpoint(page, info, 'consistent-catalogue-filter-keyboard')
}
test('catalogue facet pickers share Arrow and Enter behavior @ux', ({ page }, info) => filters(page, info))
test('mobile catalogue facet pickers share Arrow and Enter behavior @ux @mobile', ({ page }, info) => filters(page, info))

async function maintenance(page, info) {
  await login(page)
  await page.goto('/apps/library/languages')
  if (info.project.name.includes('mobile')) {
    const toggle = page.getByRole('button', { name: 'Open navigation', exact: true })
    await toggle.click()
    const dialog = page.getByRole('dialog', { name: 'Library navigation' })
    await expect(dialog.getByRole('link', { name: 'Authors', exact: true })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
    await expect(toggle).toBeFocused()
  }
  // The fixture may have no unresolved languages; value selection is also unit-tested.
  const picker = page.getByRole('combobox', { name: 'Search languages or enter a code' }).first()
  if (await picker.count()) {
    await picker.fill('German')
    await picker.press('Enter')
    await expect(page.getByRole('button', { name: 'Remove: de' }).first()).toBeVisible()
    await page.getByRole('button', { name: 'Remove: de' }).first().click()
  }
  await attachCheckpoint(page, info, 'maintenance-navigation-and-language-entry')
  await page.goto(`/apps/library/?details=${requiredEnvironment('PW_ITEM_ID')}&openUnavailable=1`)
  const error = page.locator('.library-full-details-error').first()
  await expect(error).toBeVisible()
  for (const theme of ['light', 'dark']) {
    await page.evaluate(theme => {
      document.body.dataset.themes = theme
      delete document.body.dataset.themeLight; delete document.body.dataset.themeDark
      document.body.setAttribute(`data-theme-${theme}`, '')
    }, theme)
    const contrast = await error.evaluate(element => {
      const luminance = color => {
        const values = color.match(/[\d.]+/g).slice(0, 3).map(Number).map(n => n / 255).map(n => n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)
        return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722
      }
      let parent = element, background = getComputedStyle(parent).backgroundColor
      while ((background === 'rgba(0, 0, 0, 0)' || background === 'transparent') && parent.parentElement) { parent = parent.parentElement; background = getComputedStyle(parent).backgroundColor }
      const a = luminance(getComputedStyle(element).color), b = luminance(background)
      return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
    })
    expect(contrast, `${theme} error contrast`).toBeGreaterThanOrEqual(4.5)
    await attachCheckpoint(page, info, `error-contrast-${theme}`)
  }
}
test('maintenance uses the common navigation and language controls @ux', ({ page }, info) => maintenance(page, info))
test('mobile maintenance navigation supports Escape and focus return @ux @mobile', ({ page }, info) => maintenance(page, info))
