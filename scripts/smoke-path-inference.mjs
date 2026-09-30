import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { chromium, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe'
const container = process.env.NC_CONTAINER || 'nextcloud'
const tokenName = `library-inference-smoke-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
let browser
try {
  const output = createTemporaryAppPassword(container, user, tokenName)
  const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 } })
  await context.route('**/*', (route) => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(upstream).origin ? { authorization } : {}) } }))
  const page = await context.newPage()
  const errors = [], writes = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('request', (request) => { if (request.url().includes('/apps/library/') && !['GET', 'HEAD'].includes(request.method())) writes.push(request.method()) })
  await page.goto(new URL('/apps/library/?infer=1', upstream).href)
  const panel = page.locator('.library-inference')
  await expect(panel).toHaveAttribute('aria-busy', 'false', { timeout: 30000 })
  await expect(panel.getByRole('alert')).toHaveCount(0)
  assert.ok(await panel.locator('.library-inference-result').count() > 0, 'Expected a real indexed sample')
  const rootId = await panel.getByRole('combobox', { name: 'Library root', exact: true }).inputValue()
  const endpoint = `/apps/library/api/inference/sample?rootId=${rootId}`
  const original = await page.evaluate(async (url) => (await fetch(url)).json(), endpoint)
  assert.ok(original.items.length > 0 && original.items.length <= 40)
  await panel.getByRole('heading', { name: 'Extract metadata from paths', exact: true }).scrollIntoViewIfNeeded()
  await page.screenshot({ path: '/tmp/library-inference-start.png' })
  await panel.locator('.library-inference-result').first().locator('summary').click()
  await expect(panel.getByRole('columnheader', { name: 'Proposed value', exact: true }).first()).toBeVisible()
  await page.screenshot({ path: '/tmp/library-inference-desktop.png', fullPage: true })
  await panel.getByRole('combobox', { name: 'Rule editor', exact: true }).selectOption('pattern')
  await panel.getByRole('textbox', { name: 'Advanced pattern', exact: true }).fill('%unknown%')
  await expect(panel.locator('.library-inference-result').first().locator('summary')).toContainText('Invalid pattern or value')
  const live = panel.getByRole('complementary', { name: 'Live preview', exact: true })
  await expect(live).toContainText('No fields extracted from this example')
  await expect(live.locator('dt')).toHaveCount(0)
  await panel.getByRole('combobox', { name: 'Pattern', exact: true }).selectOption('preset-title')
  await expect(panel.getByRole('textbox', { name: 'Advanced pattern', exact: true })).toHaveValue(/%title%/)
  const denied = await page.evaluate(async () => (await fetch('/apps/library/api/inference/sample?rootId=2147483647')).status)
  assert.equal(denied, 404)
  const traversal = await page.evaluate(async (rootId) => (await fetch(`/apps/library/api/inference/sample?rootId=${rootId}&folder=..`)).status, rootId)
  assert.equal(traversal, 422)
  const direct = await page.evaluate(async (rootId) => (await fetch(`/apps/library/api/inference/sample?rootId=${rootId}&recursive=0`)).json(), rootId)
  assert.ok(direct.items.every((item) => !item.path.includes('/')))
  const child = original.items.find((item) => item.path.includes('/'))?.path.split('/')[0]
  if (child) {
    const scoped = await page.evaluate(async ({ rootId, child }) => (await fetch(`/apps/library/api/inference/sample?rootId=${rootId}&folder=${encodeURIComponent(child)}`)).json(), { rootId, child })
    assert.ok(scoped.scope.endsWith('/' + child))
    assert.ok(scoped.items.length > 0)
  }
  const after = await page.evaluate(async (url) => (await fetch(url)).json(), endpoint)
  assert.deepEqual(after.items, original.items)
  await panel.getByRole('combobox', { name: 'Rule editor', exact: true }).selectOption('guided')
  await panel.getByRole('combobox', { name: /^Field:/ }).last().selectOption('author')
  const stem = original.items[0].path.split('/').pop().replace(/\.[^.]+$/, '')
  await expect(live.locator('dd strong')).toHaveText([stem])
  await panel.getByRole('combobox', { name: 'Rule editor', exact: true }).selectOption('pattern')
  const activePattern = await panel.getByRole('textbox', { name: 'Advanced pattern', exact: true }).inputValue()
  if (original.items.length > 1) {
    await panel.getByRole('combobox', { name: 'Example path', exact: true }).selectOption(original.items[1].path)
    await expect(panel.getByRole('textbox', { name: 'Advanced pattern', exact: true })).toHaveValue(activePattern)
    await expect(live.locator('.library-inference-live-path')).toHaveText(original.items[1].path)
  }
  await live.scrollIntoViewIfNeeded()
  await page.screenshot({ path: '/tmp/library-live-preview-desktop.png' })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.reload()
  await expect(panel).toHaveAttribute('aria-busy', 'false', { timeout: 30000 })
  await panel.getByRole('heading', { name: 'Extract metadata from paths', exact: true }).scrollIntoViewIfNeeded()
  await page.screenshot({ path: '/tmp/library-inference-mobile.png', fullPage: true })
  assert.equal(await panel.evaluate((el) => el.scrollWidth > el.clientWidth + 1), false, 'Panel overflow on mobile')
  await panel.getByRole('combobox', { name: 'Rule editor', exact: true }).selectOption('pattern')
  await panel.getByRole('textbox', { name: 'Advanced pattern', exact: true }).scrollIntoViewIfNeeded()
  await expect(live).toBeInViewport()
  await page.screenshot({ path: '/tmp/library-live-preview-mobile.png' })
  assert.deepEqual(errors, [])
  assert.deepEqual(writes, [])
  console.log(`inference_smoke_ok=true sample_books=${original.items.length} guided_mapping=true invalid_pattern=true scope_access=true metadata_unchanged=true no_write_requests=true mobile_overflow=false`)
} finally {
  try { await browser?.close() } finally {
    for (const row of occ('user:auth-tokens:list', user).split(/\r?\n/).filter((line) => line.includes(tokenName))) {
      const id = row.match(/\|\s*(\d+)\s*\|/)?.[1]
      assert.ok(id)
      occ('user:auth-tokens:delete', user, id)
    }
    assert.equal(occ('user:auth-tokens:list', user).includes(tokenName), false)
    console.log('temporary_token_removed=true')
  }
}
