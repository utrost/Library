import { expect, test, type Page } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

type LinkedIdentity = { id: number; name: string; part?: string }
type BookSnapshot = {
  title: string
  creators: string
  series: string
  genre: string
  personalRating: number | null
  metadataRevision: string
  authorSyncStatus: number
  seriesSyncStatus: number
  canonicalAuthors: LinkedIdentity[]
  canonicalSeries: LinkedIdentity[]
  canonicalGenres: LinkedIdentity[]
}

async function snapshot(page: Page, itemId: number): Promise<BookSnapshot> {
  const response = await page.request.get(`/apps/library/items/${itemId}/sidebar`)
  expect(response.ok(), `Book snapshot returned ${response.status()}`).toBeTruthy()
  const item = (await response.json() as { item: BookSnapshot }).item
  return { ...item, canonicalAuthors: item.canonicalAuthors || [], canonicalSeries: item.canonicalSeries || [], canonicalGenres: item.canonicalGenres || [] }
}

async function restoreBook(page: Page, itemId: number, before: BookSnapshot): Promise<void> {
  const current = await snapshot(page, itemId)
  const ids = (entries: LinkedIdentity[]) => entries.map(entry => Number(entry.id))
  const linksChanged = JSON.stringify([
    ids(current.canonicalAuthors), current.canonicalSeries[0]?.id ?? null,
    current.canonicalSeries[0]?.part ?? '', ids(current.canonicalGenres),
  ]) !== JSON.stringify([
    ids(before.canonicalAuthors), before.canonicalSeries[0]?.id ?? null,
    before.canonicalSeries[0]?.part ?? '', ids(before.canonicalGenres),
  ])
  if (!linksChanged && current.title === before.title && current.personalRating === before.personalRating) return

  const result = await page.evaluate(async ({ itemId, before }) => {
    const response = await fetch(`/apps/library/items/${itemId}/sidebar`, { credentials: 'same-origin', cache: 'no-store' })
    const current = (await response.json()).item as BookSnapshot
    const token = (document.querySelector('#library-vue-root') as HTMLElement)?.dataset.requestToken || ''
    const body = new FormData()
    body.set('requesttoken', token)
    body.set('metadataAutosave', '1')
    body.set('metadataRevision', current.metadataRevision)
    body.set('simpleEditor', '1')
    body.set('editorLinks', JSON.stringify({
      beforeAuthors: (current.canonicalAuthors || []).map(author => Number(author.id)),
      authors: before.canonicalAuthors.map(author => Number(author.id)),
      beforeSeries: current.canonicalSeries?.[0]?.id ?? null,
      series: before.canonicalSeries[0]?.id ?? null,
      beforePart: current.canonicalSeries?.[0]?.part ?? '',
      part: before.canonicalSeries[0]?.part ?? '',
      beforeGenres: (current.canonicalGenres || []).map(genre => Number(genre.id)),
      genres: before.canonicalGenres.map(genre => Number(genre.id)),
    }))
    if (current.title !== before.title) body.set('title', before.title)
    if (current.personalRating !== before.personalRating) body.set('personalRating', String(before.personalRating ?? ''))
    const saved = await fetch(`/apps/library/items/${itemId}`, { method: 'POST', body, credentials: 'same-origin' })
    return { status: saved.status, data: await saved.json() }
  }, { itemId, before })
  expect(result.status, `Book restore failed: ${JSON.stringify(result.data)}`).toBe(200)
  expect(result.data.saved).toBe(true)
  const restored = await snapshot(page, itemId)
  expect(restored.title).toBe(before.title)
  expect(restored.personalRating).toBe(before.personalRating)
  expect(restored.canonicalAuthors.map(author => author.id)).toEqual(before.canonicalAuthors.map(author => author.id))
  expect(restored.canonicalSeries.map(series => [series.id, series.part ?? ''])).toEqual(before.canonicalSeries.map(series => [series.id, series.part ?? '']))
  expect(restored.canonicalGenres.map(genre => genre.id)).toEqual(before.canonicalGenres.map(genre => genre.id))
}

test('stages book fields and linked names, saves once, and rejects a stale tab @details @metadata @smoke @mutation', async ({ page, context }, testInfo) => {
  test.setTimeout(120_000)
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)

  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const detailsUrl = `/apps/library/?details=${itemId}`
  const response = await page.goto(detailsUrl)
  expect(response?.ok(), `Full details returned ${response?.status()}`).toBeTruthy()
  await expect(page.getByRole('heading', { name: 'Book details' })).toBeVisible()
  const before = await snapshot(page, itemId)
  expect(before.authorSyncStatus).toBe(0)
  expect(before.seriesSyncStatus).toBe(0)
  const suffix = `${testInfo.project.name.replace(/[^a-z]+/gi, '')} ${Date.now()}`
  const editedTitle = `Playwright unified book ${suffix}`
  const authorName = `Playwright Author ${suffix}`
  const seriesName = `Playwright Series ${suffix}`
  const genreName = `Playwright Genre ${suffix}`
  const rating = before.personalRating === 4 ? 5 : 4
  const authors = page.locator('[aria-labelledby="library-full-details-authors-heading"]')
  const series = page.locator('[aria-labelledby="library-full-details-series-heading"]')
  const genres = page.locator('.library-genre-picker')
  const provenance = page.locator('details.library-full-details-provenance')
  let updatePosts = 0
  page.on('request', request => {
    if (request.method() === 'POST' && new URL(request.url()).pathname.endsWith(`/apps/library/items/${itemId}`)) updatePosts++
  })
  let staleTab: Page | undefined

  try {
    await expect(page.locator('.library-full-details-main > section h2')).toHaveText(['Book details', 'Authors', 'Series', 'Genres'])
    await expect(page.getByRole('button', { name: 'Save book details' })).toHaveCount(0)
    await expect(provenance).not.toHaveAttribute('open')
    await page.getByRole('textbox', { name: 'Title', exact: true }).fill(editedTitle)
    await page.getByRole('radio', { name: `Set ${rating} of 5 stars` }).check()

    if (before.canonicalAuthors.length) await authors.locator('.library-full-details-author-row').first().getByRole('button', { name: 'Change' }).click()
    else await authors.getByRole('button', { name: 'Add author' }).click()
    await authors.getByRole('combobox', { name: 'Choose an author' }).fill(authorName)
    await authors.getByRole('button', { name: 'Create and add author' }).click()
    await expect(authors.getByRole('link', { name: authorName })).toBeVisible()

    await series.getByRole('button', { name: before.canonicalSeries.length ? 'Change series' : 'Choose series' }).click()
    await series.getByRole('combobox', { name: 'Choose a series' }).fill(seriesName)
    await series.getByRole('button', { name: 'Create and choose series' }).click()
    await series.getByRole('textbox', { name: 'Part in series' }).fill('2')
    await expect(series.getByRole('link', { name: `${seriesName} · 2` })).toBeVisible()

    await genres.getByRole('combobox', { name: 'Add a genre' }).fill(genreName)
    await genres.getByRole('button', { name: 'Create and add genre' }).click()
    await expect(genres.getByRole('link', { name: genreName })).toBeVisible()
    await expect(page.getByRole('status').filter({ hasText: 'Unsaved book changes' })).toBeVisible()
    expect(updatePosts, 'Draft edits must not update the publication before Save').toBe(0)
    await provenance.scrollIntoViewIfNeeded()
    const saveBar = page.locator('.library-full-details-savebar')
    await expect(saveBar).toBeVisible()
    const saveBarBox = await saveBar.boundingBox()
    const scrollport = await page.locator('main.app-content').boundingBox()
    expect(saveBarBox).not.toBeNull()
    expect(scrollport).not.toBeNull()
    expect(saveBarBox!.y, 'Save actions must remain below the Nextcloud header').toBeGreaterThanOrEqual(scrollport!.y)
    expect(saveBarBox!.y + saveBarBox!.height, 'Save actions must remain inside the scrolling viewport').toBeLessThanOrEqual(scrollport!.y + scrollport!.height)

    staleTab = await context.newPage()
    await staleTab.goto(detailsUrl)
    await expect(staleTab.getByRole('heading', { name: 'Book details' })).toBeVisible()
    await expect(staleTab.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(before.title)
    const stillOriginal = await snapshot(staleTab, itemId)
    expect(stillOriginal.canonicalAuthors.map(author => author.id)).toEqual(before.canonicalAuthors.map(author => author.id))
    expect(stillOriginal.canonicalSeries.map(entry => entry.id)).toEqual(before.canonicalSeries.map(entry => entry.id))
    expect(stillOriginal.canonicalGenres.map(entry => entry.id)).toEqual(before.canonicalGenres.map(entry => entry.id))
    await attachCheckpoint(page, testInfo, 'unified-editor-staged', '.library-full-details-main')

    const saveResponse = page.waitForResponse(candidate => candidate.request().method() === 'POST' && new URL(candidate.url()).pathname.endsWith(`/apps/library/items/${itemId}`))
    await page.getByRole('button', { name: 'Save book details' }).click()
    expect((await saveResponse).status()).toBe(200)
    await expect(page.locator('.library-full-details-feedback')).toContainText('Book details saved')
    expect(updatePosts).toBe(1)
    const saved = await snapshot(page, itemId)
    expect(saved.title).toBe(editedTitle)
    expect(saved.personalRating).toBe(rating)
    expect(saved.canonicalAuthors.map(author => author.name)).toContain(authorName)
    expect(saved.canonicalSeries.map(entry => [entry.name, String(entry.part)])).toContainEqual([seriesName, '2'])
    expect(saved.canonicalGenres.map(entry => entry.name)).toContain(genreName)
    expect([saved.creators, saved.series, saved.genre]).toEqual([before.creators, before.series, before.genre])
    await attachCheckpoint(page, testInfo, 'unified-editor-saved', '.library-full-details-main')

    await page.getByRole('textbox', { name: 'Title', exact: true }).fill(`Discarded edit ${suffix}`)
    await authors.getByRole('button', { name: `Remove author: ${authorName}`, exact: true }).click()
    await series.getByRole('button', { name: 'Remove series', exact: true }).click()
    await page.getByRole('button', { name: 'Discard changes' }).click()
    await expect(page.getByRole('textbox', { name: 'Title', exact: true })).toHaveValue(editedTitle)
    await expect(authors.getByRole('link', { name: authorName, exact: true })).toBeVisible()
    await expect(series.getByRole('link', { name: `${seriesName} · 2`, exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Save book details' })).toHaveCount(0)
    expect(updatePosts, 'Discard must not submit another book update').toBe(1)

    await staleTab.getByRole('textbox', { name: 'Title', exact: true }).fill(`Stale edit ${suffix}`)
    const staleResponse = staleTab.waitForResponse(candidate => candidate.request().method() === 'POST' && new URL(candidate.url()).pathname.endsWith(`/apps/library/items/${itemId}`))
    await staleTab.getByRole('button', { name: 'Save book details' }).click()
    expect((await staleResponse).status()).toBe(409)
    await expect(staleTab.locator('.library-full-details-error')).toContainText('This publication changed since you opened it')
    expect((await snapshot(page, itemId)).title).toBe(editedTitle)

    await provenance.locator('summary').first().click()
    await expect(provenance.locator('.library-full-details-source-values dt').filter({ hasText: 'Creator credit in file' })).toBeVisible()
    await expect(provenance.locator('.library-full-details-source-values')).toContainText(before.creators || '—')
    failures.assertNone()
  } finally {
    await restoreBook(page, itemId, before)
    await staleTab?.close()
  }
})
