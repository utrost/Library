import { expect, test, type Page, type TestInfo } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

async function authorRequest(page: Page, path: string, body?: object) {
  return page.evaluate(async ({ path, body }) => {
    const token = (document.querySelector('#library-vue-root') as HTMLElement)?.dataset.requestToken || ''
    const response = await fetch('/apps/library/api/authors' + path, {
      method: body ? 'POST' : 'GET', credentials: 'same-origin',
      headers: { Accept: 'application/json', ...(body ? { 'Content-Type': 'application/json', requesttoken: token } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
    })
    if (!response.ok) throw new Error(`Author fixture request returned ${response.status()}`)
    return response.json()
  }, { path, body })
}

async function destinationJourney(page: Page, testInfo: TestInfo) {
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  const itemId = requiredPositiveIntegerEnvironment('PW_ITEM_ID')
  const snapshot = async () => (await (await page.request.get(`/apps/library/items/${itemId}/sidebar`)).json()).item
  const before = await snapshot()
  const source = before.canonicalAuthors[0].id
  await page.goto(`/apps/library/?authors=1&authorId=${source}`)
  const panel = page.locator('.library-authors')
  await expect(panel).toHaveAttribute('aria-busy', 'false')
  const suffix = `${testInfo.project.name} ${Date.now()}`
  const existingName = `Destination existing ${suffix}`
  const newName = `Destination new ${suffix}`
  const created: number[] = []
  let assigns = 0, searches = 0
  page.on('request', request => {
    if (request.method() === 'POST' && new URL(request.url()).pathname.endsWith('/assign')) assigns++
    if (new URL(request.url()).pathname.endsWith('/api/authors') && new URL(request.url()).searchParams.has('search')) searches++
  })
  try {
    const existing = await authorRequest(page, '', { name: existingName }); created.push(existing.id)
    await panel.locator('.author-actions summary').click()
    await panel.getByRole('button', { name: 'Merge or reassign', exact: true }).click()
    const destination = panel.getByRole('combobox', { name: 'Destination author' })
    const review = panel.getByRole('button', { name: 'Review change', exact: true })
    await destination.fill('De')
    await page.waitForTimeout(400)
    expect(searches).toBe(0)
    await expect(panel.getByRole('button', { name: 'Create new author', exact: true })).toHaveCount(0)
    await destination.fill(existingName)
    await expect(panel.getByRole('option').filter({ hasText: existingName })).toBeVisible()
    await expect(panel.getByRole('button', { name: 'Create new author', exact: true })).toHaveCount(0)
    await attachCheckpoint(page, testInfo, 'author-destination-results', '.author-assignment')
    await destination.press('ArrowDown')
    await destination.press('Enter')
    await expect(review).toBeEnabled()
    expect(assigns).toBe(0)
    await review.click()
    await expect(panel.locator('.author-review')).toContainText(existingName)
    await destination.fill(newName)
    await expect(review).toBeDisabled()
    await expect(panel.locator('.author-review')).toHaveCount(0)
    const createButton = panel.getByRole('button', { name: 'Create new author', exact: true })
    await expect(createButton).toBeVisible()
    await attachCheckpoint(page, testInfo, 'author-destination-empty', '.author-assignment')
    const creation = page.waitForResponse(response => new URL(response.url()).pathname.endsWith('/api/authors') && response.request().method() === 'POST')
    await createButton.click()
    const result = await (await creation).json(); created.push(result.id)
    await expect(destination).toHaveValue(newName)
    await expect(destination).toBeFocused()
    await expect(review).toBeEnabled()
    await review.click()
    await expect(panel.locator('.author-review')).toContainText(newName)
    expect(await panel.evaluate(node => node.scrollWidth <= node.clientWidth + 1)).toBe(true)
    await panel.getByRole('button', { name: 'Cancel', exact: true }).click()
    expect(assigns).toBe(0)
    const after = await snapshot()
    expect(after.canonicalAuthors).toEqual(before.canonicalAuthors)
    expect(after.metadataRevision).toBe(before.metadataRevision)
    failures.assertNone()
  } finally {
    // Only records made by this test are removed; book assignments were never submitted.
    for (const id of created.reverse()) {
      const profile = await authorRequest(page, `/${id}`)
      await authorRequest(page, `/${id}/remove-unused`, { revision: Number(profile.author.revision) })
    }
  }
}

test('destination author typeahead selects or creates before explicit review @authors @smoke', async ({ page }, testInfo) => {
  await destinationJourney(page, testInfo)
})
test('destination author search and creation fit mobile @authors @mobile', async ({ page }, testInfo) => {
  await destinationJourney(page, testInfo)
})
