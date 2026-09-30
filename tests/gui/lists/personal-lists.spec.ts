import { expect, test, type Page } from '@playwright/test'
import { login, openLibrary, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint } from '../fixtures/nextcloud'

async function api(page: Page, path = '', body?: Record<string, unknown>) {
  return page.evaluate(async ({ path, body }) => {
    const token = (document.querySelector('#library-vue-root') as HTMLElement)?.dataset.requestToken || ''
    const response = await fetch(`/apps/library/api/lists${path}`, {
      method: body ? 'POST' : 'GET', headers: { 'Content-Type': 'application/json', requesttoken: token },
      ...(body ? { body: JSON.stringify(body) } : {}),
    })
    return { status: response.status, data: await response.json() }
  }, { path, body })
}

test('maintains a private reading list with notes and ordering @lists @smoke', async ({ page }, testInfo) => {
  test.setTimeout(120_000)
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  let listId: number | undefined
  try {
    await page.goto('/apps/library/?lists=1')
    const panel = page.getByRole('region', { name: 'Personal lists' })
    await panel.getByRole('button', { name: 'New list', exact: true }).click()
    const name = `Reading plan ${testInfo.project.name} ${Date.now()}`
    await panel.getByRole('textbox', { name: 'List name', exact: true }).fill(name)
    await panel.getByRole('textbox', { name: 'Description / list note' }).fill('A personal plan for autumn')
    await panel.getByRole('button', { name: 'Save list', exact: true }).click()
    await expect(panel.getByRole('heading', { name, exact: true })).toBeVisible()
    listId = Number(new URL(page.url()).searchParams.get('listId'))
    expect(listId).toBeGreaterThan(0)
    await panel.getByRole('link', { name: 'Add books from catalogue' }).click()
    await expect(page.locator('#library-catalogue')).toHaveAttribute('aria-busy', 'false')
    const selections = page.locator('#library-catalogue .library-item-selection input[type="checkbox"]')
    // Selection controls deliberately refer to explicit catalogue item IDs.
    await expect(selections.first()).toBeVisible()
    for (let i = 0; i < 3; i++) await selections.nth(i).check()
    const selectionBar = page.locator('.library-list-selection')
    await expect(selectionBar.getByRole('combobox', { name: 'Choose a list' })).toHaveValue(String(listId))
    await selectionBar.getByRole('button', { name: 'Add to list', exact: true }).click()
    await expect(selectionBar.getByRole('status')).toHaveText('Added: 3. Already in list: 0. Unavailable: 0.')
    await page.goto(`/apps/library/?lists=1&listId=${listId}`)
    const entries = page.locator('.library-list-entry')
    await expect(entries).toHaveCount(3)
    const firstTitle = await entries.first().getByRole('heading').innerText()
    await entries.first().getByRole('button', { name: 'Add note', exact: true }).click()
    const note = 'Read chapters 1–3. <script>text, not HTML</script>'
    await entries.first().getByRole('textbox', { name: 'Your note for this book in this list' }).fill(note)
    await entries.first().getByRole('button', { name: 'Save note', exact: true }).click()
    await expect(entries.first().locator('.library-list-note')).toHaveText(note)
    await entries.first().getByRole('button', { name: 'Move down', exact: true }).click()
    await expect(entries.nth(1).getByRole('heading')).toHaveText(firstTitle)
    await page.reload()
    await expect(entries.nth(1).locator('.library-list-note')).toHaveText(note)
    await expect(entries.nth(1).getByRole('heading')).toHaveText(firstTitle)
    await attachCheckpoint(page, testInfo, 'personal-list-with-notes')

    // A stale editor receives a conflict and retains the draft for explicit review.
    await entries.nth(1).getByRole('button', { name: 'Edit note', exact: true }).click()
    await entries.nth(1).getByRole('textbox').fill('Unsaved local draft')
    const current = (await api(page, `/${listId}`)).data
    const changed = await api(page, `/${listId}/actions`, { action: 'update', revision: current.list.revision, name: `${name} renamed`, description: current.list.description })
    expect(changed.status).toBe(200)
    await entries.nth(1).getByRole('button', { name: 'Save note', exact: true }).click()
    await expect(panel.getByRole('alert')).toContainText('changed in another tab')
    await expect(entries.nth(1).getByRole('textbox')).toHaveValue('Unsaved local draft')
    // Expected 409 may be reported by the browser console; clear only that exact failure.
    failures.assertNoneOrExactSetAndClear([/^console: Failed to load resource: the server responded with a status of 409 \(Conflict\)$/])
    await panel.getByRole('button', { name: 'Reload list', exact: true }).click()
    await expect(panel.getByRole('heading', { name: `${name} renamed`, exact: true })).toBeVisible()
    await entries.nth(1).getByRole('button', { name: 'Save note', exact: true }).click()
    await expect(entries.nth(1).locator('.library-list-note')).toHaveText('Unsaved local draft')
    await entries.first().getByRole('button', { name: 'Remove from list', exact: true }).click()
    await entries.first().getByRole('button', { name: 'Remove entry and note', exact: true }).click()
    await expect(entries).toHaveCount(2)
    await panel.getByRole('button', { name: 'Delete list', exact: true }).click()
    await panel.getByRole('button', { name: 'Delete list and notes', exact: true }).click()
    await expect(panel.getByRole('status')).toHaveText('List deleted.')
    listId = undefined
    await openLibrary(page)
    await expect(page.locator('#library-catalogue .library-item-selection input[type="checkbox"]')).toHaveCount(40)
    failures.assertNone()
  } finally {
    if (listId) {
      const current = await api(page, `/${listId}`)
      if (current.status === 200) await api(page, `/${listId}/actions`, { action: 'delete', revision: current.data.list.revision })
    }
  }
})

test('list editor works on a narrow screen @lists @mobile', async ({ page }, testInfo) => {
  await login(page)
  await page.goto('/apps/library/?lists=1')
  const panel = page.getByRole('region', { name: 'Personal lists' })
  await panel.getByRole('button', { name: 'New list', exact: true }).click()
  await panel.getByRole('textbox', { name: 'List name' }).fill('My next books')
  await panel.getByRole('textbox', { name: 'Description / list note' }).fill('A long description should wrap naturally on a phone screen.')
  await expect(panel.getByRole('button', { name: 'Save list', exact: true })).toBeInViewport()
  const overflow = await panel.evaluate((el) => el.scrollWidth > el.clientWidth + 1)
  expect(overflow).toBe(false)
  await attachCheckpoint(page, testInfo, 'personal-list-mobile-editor')
})
