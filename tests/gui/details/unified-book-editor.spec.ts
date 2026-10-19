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
  fileSize: number | null
  filesUrl: string
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

async function verifyFileMetadata(page: Page, before: BookSnapshot): Promise<void> {
  const file = page.locator('details.library-full-details-file')
  await expect(file).not.toHaveAttribute('open')
  expect(await file.evaluate(node => node.nextElementSibling === null)).toBe(true)
  await file.locator('summary').focus()
  await page.keyboard.press('Enter')
  await expect(file).toHaveAttribute('open', '')
  const location = file.getByRole('link')
  await expect(location).toHaveAttribute('href', before.filesUrl)
  expect(await location.evaluate(node => getComputedStyle(node).textDecorationLine)).toContain('underline')
  expect(before.fileSize).not.toBeNull()
  expect(before.fileSize).toBeGreaterThan(0)
  const size = file.locator('dt').filter({ hasText: /^File size$/ }).locator('xpath=following-sibling::dd[1]')
  await expect(size).not.toHaveText('—')
  await expect(size).toHaveAttribute('title', /[0-9]/)
  await file.locator('summary').click()
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
  await verifyFileMetadata(page, before)
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
    await expect(page.locator('.library-full-details-main h2')).toHaveText(['Book details', 'Authors', 'Series', 'Genres'])
    await expect(page.getByRole('button', { name: 'Save book details' })).toHaveCount(0)
    await expect(provenance).not.toHaveAttribute('open')
    await page.getByRole('textbox', { name: 'Title', exact: true }).fill(editedTitle)
    await page.getByRole('radio', { name: `Set ${rating} of 5 stars` }).check()

    if (before.canonicalAuthors.length) await authors.getByRole('button', { name: /^Change author:/ }).first().click()
    else await authors.getByRole('button', { name: 'Add author' }).click()
    await authors.getByRole('combobox', { name: 'Choose an author' }).fill(authorName)
    await authors.getByRole('button', { name: 'Create and add author' }).click()
    await expect(authors.getByRole('link', { name: authorName })).toBeVisible()

    await series.getByRole('button', { name: before.canonicalSeries.length ? 'Change series' : 'Choose series' }).click()
    await series.getByRole('combobox', { name: 'Choose a series' }).fill(seriesName)
    await series.getByRole('button', { name: 'Create and choose series' }).click()
    await series.getByRole('textbox', { name: 'Part in series' }).fill('2')
    await expect(series.getByRole('link', { name: seriesName, exact: true })).toBeVisible()
    await expect(series.getByRole('textbox', { name: 'Part in series' })).toHaveValue('2')

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
    const savedStatus = page.locator('details.library-full-details-status')
    await savedStatus.locator('summary').click()
    await expect(savedStatus).toContainText(`${rating}/5`)
    await savedStatus.locator('summary').click()
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
    await expect(series.getByRole('link', { name: seriesName, exact: true })).toBeVisible()
    await expect(series.getByRole('textbox', { name: 'Part in series' })).toHaveValue('2')
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

test('compact identities wrap, select directly and discard on phones @details @mobile @layout', async ({ page }, testInfo) => {
  test.setTimeout(90_000)
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const longName = 'An exceptionally long name with several words and anunbrokenidentifierthatmustwrapwithoutoverflow'
  let populated = false
  let writes = 0
  let searches = 0
  await page.route('**/apps/library/**', async route => {
    const request = route.request(), url = new URL(request.url())
    if (!['GET', 'HEAD', 'OPTIONS'].includes(request.method())) { writes++; return route.abort() }
    if (url.pathname.endsWith(`/items/${itemId}/sidebar`)) {
      const response = await route.fetch()
      const data = await response.json()
      Object.assign(data.item, {
        authorSyncStatus: 0, seriesSyncStatus: 0,
        canonicalAuthors: populated ? [1, 2, 3].map(id => ({ id, name: `${longName} ${id}` })) : [],
        canonicalSeries: populated ? [{ id: 1, name: longName, part: '1.0' }] : [],
        canonicalGenres: populated ? [1, 2, 3].map(id => ({ id, name: `Long genre classification ${id}` })) : [],
      })
      return route.fulfill({ response, json: data })
    }
    if (url.searchParams.has('search') && /\/api\/(authors|series|genres)$/.test(url.pathname)) {
      searches++
      const kind = url.pathname.split('/').pop()!
      return route.fulfill({ json: { [kind]: [{ id: 99, display_name: `Selected ${kind}` }], hasNext: false } })
    }
    return route.continue()
  })
  await page.goto(`/apps/library/?details=${itemId}`)
  const panel = page.locator('.library-identity-panel')
  const authors = panel.locator('[aria-labelledby="library-full-details-authors-heading"]')
  const series = panel.locator('[aria-labelledby="library-full-details-series-heading"]')
  const genres = panel.locator('.library-genre-picker')
  await expect(panel.getByRole('heading')).toHaveText(['Authors', 'Series', 'Genres'])
  await verifyFileMetadata(page, await snapshot(page, itemId))
  await expect(authors.getByRole('button', { name: 'Add author' })).toBeVisible()
  await expect(series.getByRole('button', { name: 'Choose series' })).toBeVisible()
  await expect(genres.getByRole('button', { name: 'Create and add genre' })).toHaveCount(0)
  await attachCheckpoint(page, testInfo, 'compact-identities-empty', '.library-identity-panel')

  populated = true
  await page.reload()
  await expect(authors.getByRole('link')).toHaveCount(3)
  const assertFits = async () => expect(await panel.locator('button,a,input,[role="listbox"]').evaluateAll(nodes => nodes.filter(node => {
    const box = node.getBoundingClientRect()
    return box.width > 0 && (box.left < 0 || box.right > innerWidth + 1)
  }).map(node => node.outerHTML.slice(0, 120)))).toEqual([])
  await assertFits()
  await authors.getByRole('button', { name: /^Change author:/ }).first().click()
  const authorSearch = authors.getByRole('combobox', { name: 'Choose an author' })
  await authorSearch.fill('Se')
  await page.waitForTimeout(350) // Exceeds the typeahead debounce; two letters must not request results.
  expect(searches).toBe(0)
  await authorSearch.fill('Sel')
  await authors.getByRole('option').first().waitFor()
  await assertFits()
  await authorSearch.press('ArrowDown')
  await authorSearch.press('Enter')
  await expect(authors.getByRole('link').first()).toHaveText('Selected authors')
  await expect(authors.getByRole('link').nth(1)).toHaveText(`${longName} 2`)
  await authors.getByRole('button', { name: `Remove author: ${longName} 3`, exact: true }).click()

  await series.getByRole('button', { name: 'Change series', exact: true }).click()
  await series.getByRole('combobox').fill('Sel')
  await series.getByRole('option').first().click()
  await series.getByRole('textbox', { name: 'Part in series' }).fill('2.5')
  await expect(series.getByRole('link', { name: 'Selected series', exact: true })).toBeVisible()
  await genres.getByRole('button', { name: 'Remove genre: Long genre classification 1', exact: true }).click()
  const genreSearch = genres.getByRole('combobox', { name: 'Add a genre' })
  await genreSearch.fill('Sel')
  await genres.getByRole('option').first().waitFor()
  await assertFits()
  await genreSearch.press('ArrowDown')
  await genreSearch.press('Enter')
  await expect(genres.getByRole('link', { name: 'Selected genres' })).toBeVisible()
  const file = page.locator('details.library-full-details-file')
  await file.locator('summary').click()
  await file.scrollIntoViewIfNeeded()
  const bar = await page.locator('.library-full-details-savebar').boundingBox()
  const scrollport = await page.locator('main.app-content').boundingBox()
  expect(bar!.y).toBeGreaterThanOrEqual(scrollport!.y)
  expect(bar!.y + bar!.height).toBeLessThanOrEqual(scrollport!.y + scrollport!.height)
  await page.getByRole('button', { name: 'Discard changes', exact: true }).click()
  await expect(authors.getByRole('link')).toHaveText([1, 2, 3].map(id => `${longName} ${id}`))
  await expect(series.getByRole('textbox', { name: 'Part in series' })).toHaveValue('1.0')
  await expect(genres.getByRole('link').filter({ hasText: 'Long genre classification' })).toHaveCount(3)
  await expect(page.getByRole('button', { name: 'Save book details', exact: true })).toHaveCount(0)
  expect(writes).toBe(0)
  await assertFits()
  await attachCheckpoint(page, testInfo, 'compact-identities-long', '.library-identity-panel')
  failures.assertNone()
})
