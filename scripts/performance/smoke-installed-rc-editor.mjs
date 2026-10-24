// Read-only installed-package check: stage and discard a book edit on desktop and phone.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { chromium, expect } from '@playwright/test'
import { createTemporaryAppPassword } from '../temporary-app-password.mjs'

const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const itemId = Number(process.env.LIBRARY_SMOKE_ITEM_ID)
assert.ok(Number.isSafeInteger(itemId) && itemId > 0, 'Set LIBRARY_SMOKE_ITEM_ID to an owned book ID')
const tokenName = `library-rc1-discard-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], {
  encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
})
let browser
try {
  const output = createTemporaryAppPassword(container, user, tokenName)
  const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token, 'Temporary app password unavailable')
  const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  browser = await chromium.launch()
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport })
    await context.route('**/*', route => route.continue({
      headers: {
        ...route.request().headers(),
        ...(new URL(route.request().url()).origin === new URL(upstream).origin ? { authorization } : {}),
      },
    }))
    const page = await context.newPage()
    const errors = []
    const writes = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('request', request => {
      if (request.method() === 'POST' && new URL(request.url()).pathname.endsWith(`/apps/library/items/${itemId}`)) writes.push(request.url())
    })
    await page.goto(`${upstream}/apps/library/?details=${itemId}`)
    const title = page.getByRole('textbox', { name: 'Title', exact: true })
    await expect(title).toBeVisible()
    const original = await title.inputValue()
    assert.ok(original.length > 0)
    const before = await context.request.get(`${upstream}/apps/library/items/${itemId}/sidebar`, { headers: { authorization } })
    assert.equal(before.status(), 200)
    const savedBefore = (await before.json()).item
    await title.fill(`${original} — unsaved RC smoke`)
    const save = page.getByRole('button', { name: 'Save book details' })
    await expect(save).toBeVisible()
    await page.locator('details.library-full-details-file').scrollIntoViewIfNeeded()
    await expect(save).toBeVisible()
    await page.getByRole('button', { name: 'Discard changes' }).click()
    await expect(title).toHaveValue(original)
    await expect(save).toHaveCount(0)
    const after = await context.request.get(`${upstream}/apps/library/items/${itemId}/sidebar`, { headers: { authorization } })
    assert.equal(after.status(), 200)
    const savedAfter = (await after.json()).item
    assert.equal(savedAfter.title, savedBefore.title)
    assert.equal(savedAfter.metadataRevision, savedBefore.metadataRevision)
    assert.deepEqual(writes, [], 'Discard submitted a book update')
    assert.deepEqual(errors, [], 'Browser errors occurred')
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
    assert.equal(overflow, false, 'Horizontal overflow in installed editor')
    console.log(JSON.stringify({ viewport: viewport.width, itemId, discarded: true, bookUpdates: writes.length, pageErrors: errors.length, overflow }))
    await context.close()
  }
  console.log('installed_rc_editor_smoke_ok=true')
} finally {
  await browser?.close()
  const tokens = JSON.parse(occ('user:auth-tokens:list', user, '--output=json'))
  for (const entry of tokens.filter(candidate => candidate.name === tokenName)) occ('user:auth-tokens:delete', user, String(entry.id))
}
