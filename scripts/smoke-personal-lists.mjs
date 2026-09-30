import { readFileSync } from 'node:fs'
// Small developer-instance check. Only its own temporary list and token are removed.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { chromium, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `library-lists-smoke-${Date.now()}`
const screenshot = process.env.LIBRARY_LISTS_SCREENSHOT || '/tmp/library-dev-lists.png'
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
let listId, authorization, requestToken, browser, page

async function request(path = '', body) {
  const response = await page.evaluate(async ({ path, body, requestToken }) => {
    const result = await fetch(`/apps/library/api/lists${path}`, {
      method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', requesttoken: requestToken || '' },
      ...(body ? { body: JSON.stringify(body) } : {}),
    })
    return { status: result.status, data: result.ok ? await result.json() : null }
  }, { path, body, requestToken })
  assert.equal(response.status, 200, `List request ${path} returned ${response.status}`)
  return response.data
}

try {
  const output = createTemporaryAppPassword(container, user, tokenName)
  const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token, 'Temporary app password was not returned')
  authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  // Never send the temporary credential to another origin.
  await context.route('**/*', (route) => route.continue({ headers: {
    ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(upstream).origin ? { authorization } : {}),
  } }))
  page = await context.newPage()
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto(new URL('/apps/library/?lists=1', upstream).href)
  await page.locator('.library-personal-lists').waitFor()
  requestToken = await page.locator('#library-vue-root').getAttribute('data-request-token')
  const existingLists = (await request()).lists
  await page.getByRole('link', { name: 'Create a new list', exact: true }).click()
  await page.getByRole('textbox', { name: 'List name', exact: true }).fill(tokenName)
  await page.getByRole('button', { name: 'Save list', exact: true }).click()
  await page.getByRole('heading', { name: tokenName, exact: true }).waitFor()
  listId = Number(new URL(page.url()).searchParams.get('listId'))
  const created = await request(`/${listId}`)
  await request(`/${listId}/actions`, { action: 'update', revision: created.list.revision, name: `${tokenName} edited`, description: 'Edit persisted' })
  const updated = await request(`/${listId}`)
  assert.equal(updated.list.description, 'Edit persisted')
  await page.goto(new URL(`/apps/library/?lists=1&listId=${listId}`, upstream).href)
  await page.getByRole('heading', { name: `${tokenName} edited`, exact: true }).waitFor()
  await page.screenshot({ path: screenshot })
  await page.goto(new URL(`/apps/library/?limit=25&addToList=${listId}`, upstream).href)
  await page.locator('#library-catalogue[aria-busy="false"]').waitFor()
  const selection = page.locator('.library-list-selection')
  await selection.waitFor()
  assert.ok((await page.locator('#library-startup-status').getAttribute('data-library-main-script')).includes(JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version.replaceAll('.', '-')))
  await page.locator('#library-catalogue .library-item-selection input[type="checkbox"]').first().check()
  await expect(selection.getByRole('combobox', { name: 'Choose a list' })).toHaveValue(String(listId))
  for (const list of existingLists) await expect(selection.locator('option', { hasText: list.name })).toHaveCount(1)
  await expect(page.locator('.library-navigation-personal-list').filter({ hasText: `${tokenName} edited` })).toBeVisible()
  await selection.getByRole('combobox', { name: 'More actions' }).selectOption('tag')
  await expect(selection.locator('.library-selection-action form')).toHaveCount(1)
  await expect(selection.locator('.library-batch-tag-form')).toBeVisible()
  await page.screenshot({ path: `${screenshot}.more-actions.png` })
  await selection.getByRole('button', { name: 'Cancel', exact: true }).click()
  await page.locator('#library-catalogue .library-item-selection input[type="checkbox"]').first().check()
  await page.locator('#library-catalogue .library-item-selection input[type="checkbox"]').nth(1).check()
  await page.locator('#library-catalogue .library-item-selection input[type="checkbox"]').nth(2).check()
  await page.screenshot({ path: `${screenshot}.selection.png` })
  await selection.getByRole('button', { name: 'Add to list', exact: true }).click()
  await expect(selection.getByRole('status')).toHaveText('Added: 3. Already in list: 0. Unavailable: 0.')
  assert.equal((await request(`/${listId}`)).total, 3)
  await selection.getByRole('link', { name: 'Back to list', exact: true }).click()
  const entries = page.locator('.library-list-entry')
  await expect(entries).toHaveCount(3)
  const firstTitle = await entries.first().getByRole('heading').innerText()
  await page.getByRole('button', { name: 'Edit list', exact: true }).click()
  await page.getByRole('textbox', { name: 'List name', exact: true }).fill(`${tokenName} draft`)
  await page.getByRole('textbox', { name: 'Description / list note', exact: true }).fill('Keep this unsaved description')
  await entries.first().getByRole('button', { name: 'Move down', exact: true }).click()
  await expect(entries.nth(1).getByRole('heading')).toHaveText(firstTitle)
  await expect(page.getByRole('textbox', { name: 'List name', exact: true })).toHaveValue(`${tokenName} draft`)
  await entries.nth(1).getByRole('button', { name: 'Move up', exact: true }).click()
  await expect(entries.first().getByRole('heading')).toHaveText(firstTitle)
  await entries.first().getByRole('button', { name: 'Remove from list', exact: true }).click()
  await entries.first().getByRole('button', { name: 'Remove entry and note', exact: true }).click()
  await expect(entries).toHaveCount(2)
  await expect(page.getByRole('textbox', { name: 'Description / list note', exact: true })).toHaveValue('Keep this unsaved description')
  await page.screenshot({ path: `${screenshot}.editing.png` })
  await page.getByRole('button', { name: 'Save list', exact: true }).click()
  await page.getByRole('heading', { name: `${tokenName} draft`, exact: true }).waitFor()
  await page.reload()
  await expect(entries).toHaveCount(2)
  const saved = await request(`/${listId}`)
  assert.equal(saved.list.description, 'Keep this unsaved description')
  assert.equal(saved.list.name, `${tokenName} draft`)
  console.log('move_up_down_while_editing=true remove_while_editing=true list_draft_preserved=true')
  await page.goto(new URL(`/apps/library/?limit=25&addToList=${listId}`, upstream).href)
  await page.locator('#library-catalogue[aria-busy="false"]').waitFor()
  const filtersBeforeLists = await page.getByRole('link', { name: 'Lists', exact: true }).evaluate((link) => {
    return [...document.querySelectorAll('.library-navigation-saved-collection-row')].every((row) => Boolean(row.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING))
  })
  assert.ok(filtersBeforeLists, 'Saved filters must appear before Lists')
  await page.screenshot({ path: screenshot })
  assert.deepEqual(errors, [], 'Browser startup errors')
  console.log('visible_add_to_list=true target_list_preserved=true book_added=true saved_filters_before_lists=true')
  console.log(`personal_lists_dev_smoke_ok=true startup=true create=true edit=true catalogue=true screenshot=${screenshot}`)
} finally {
  try {
    if (listId) {
      const current = await request(`/${listId}`)
      await request(`/${listId}/actions`, { action: 'delete', revision: current.list.revision })
      assert.equal((await request()).lists.some((list) => list.id === listId), false)
      console.log('temporary_list_removed=true')
    }
  } finally {
    try { await browser?.close() } finally {
      const rows = occ('user:auth-tokens:list', user).split(/\r?\n/).filter((row) => row.includes(tokenName))
      for (const row of rows) {
        const id = row.match(/\|\s*(\d+)\s*\|/)?.[1]
        assert.ok(id, 'Cannot identify temporary token for cleanup')
        occ('user:auth-tokens:delete', user, id)
      }
      assert.equal(occ('user:auth-tokens:list', user).includes(tokenName), false)
      console.log('temporary_token_removed=true')
    }
  }
}
