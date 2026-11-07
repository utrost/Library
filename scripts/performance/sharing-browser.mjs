// Disposable maximum-selection benchmark. All source files and accounts are synthetic.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { chromium } from '@playwright/test'

const base = process.env.PW_BASE_URL
const container = process.env.LIBRARY_LISTS_CONTAINER
const evidence = process.env.LIBRARY_SHARING_EVIDENCE
assert.ok(base && container && evidence, 'Disposable fixture environment required')
assert.equal(execFileSync('docker', ['inspect', '--format', '{{index .Config.Labels "library.disposable"}}', container], { encoding: 'utf8' }).trim(), 'personal-lists')
const state = JSON.parse(readFileSync(`${evidence}/scale.json`, 'utf8'))
const browser = await chromium.launch()
const results = { catalogueBooks: state.count, selectedBooks: state.selected, browser: [], downloads: [], pageErrors: [] }
const contexts = []
async function login() {
  const context = await browser.newContext({ baseURL: base, viewport: { width: 1365, height: 900 } })
  contexts.push(context)
  const page = await context.newPage()
  page.on('pageerror', error => results.pageErrors.push(error.message))
  await page.goto('/login')
  await page.locator('#user').fill('library-other')
  await page.locator('#password').fill('Disposable-sharing-2026')
  await Promise.all([page.waitForURL(url => !url.pathname.endsWith('/login'), { waitUntil: 'domcontentloaded' }),
    page.locator('button[type="submit"]').click({ noWaitAfter: true })])
  return { context, page }
}
const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)]
try {
  const { context, page } = await login()
  const url = `/apps/library/shares/${state.grantId}`
  for (const [name, query, expected] of [['listing', '', 80], ['matching-search', 'Mixed', 80], ['empty-search', 'nonexistent', 0]]) {
    for (let run = 0; run < 6; run++) {
      const start = performance.now()
      await page.goto(`${url}?search=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' })
      assert.equal(await page.locator('.library-shared-book-row').count(), expected)
      results.browser.push({ name, run, ms: performance.now() - start })
    }
  }
  await page.goto(url)
  const next = page.getByRole('link', { name: 'Next books' })
  await next.click()
  assert.equal(await page.locator('.library-shared-book-row').count(), 20)
  assert.equal(await page.getByRole('link', { name: 'Next books' }).count(), 0)
  await page.screenshot({ path: `${evidence}/maximum-selection-desktop.png`, fullPage: false })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto(url)
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false)
  await page.screenshot({ path: `${evidence}/maximum-selection-mobile.png` })
  const cookie = (await context.cookies()).map(c => `${c.name}=${c.value}`).join('; ')
  const downloadUrl = `${base}${url}/books/${state.largeItemId}/content`
  const ranged = await fetch(downloadUrl, { headers: { Cookie: cookie, Range: 'bytes=0-3', 'X-Library-Fixture-Measure': 'range' } })
  assert.equal(ranged.status, 206)
  assert.equal(await ranged.text(), '%PDF')
  results.downloads.push({ name: 'range', status: ranged.status, contentRange: ranged.headers.get('content-range') })
  const multiChunk = await fetch(downloadUrl, { headers: { Cookie: cookie, Range: 'bytes=0-2097151' } })
  assert.equal(multiChunk.status, 206)
  const chunkBytes = new Uint8Array(await multiChunk.arrayBuffer())
  assert.equal(chunkBytes.length, 2097152)
  assert.equal(new TextDecoder().decode(chunkBytes.subarray(0, 4)), '%PDF')
  assert.ok(chunkBytes.subarray(-16).every(byte => byte === 0))
  const suffix = await fetch(downloadUrl, { headers: { Cookie: cookie, Range: 'bytes=-16' } })
  assert.equal(suffix.status, 206)
  assert.deepEqual(new Uint8Array(await suffix.arrayBuffer()), new Uint8Array(16))
  results.downloads.push({ name: 'multi-chunk-and-suffix-ranges', bytes: chunkBytes.length, status: 206 })
  for (const revoke of [false, true]) {
    // Use a separate recipient session to test new requests while the first transfer is open.
    const other = revoke ? await login() : null
    const secondCookie = other ? (await other.context.cookies()).map(c => `${c.name}=${c.value}`).join('; ') : ''
    const start = performance.now()
    const response = await fetch(downloadUrl, { headers: { Cookie: cookie, 'X-Library-Fixture-Measure': revoke ? 'large-revoke' : 'large' } })
    assert.equal(response.status, 200)
    const reader = response.body.getReader()
    let bytes = 0
    const first = await reader.read(); bytes += first.value.byteLength
    const firstByteMs = performance.now() - start
    if (revoke) {
      execFileSync('docker', ['exec', '-u', 'www-data', '-e', 'LIBRARY_DISPOSABLE_FIXTURE=1', container,
        'php', '/tmp/library-sharing-upgrade.php', 'revoke-scale'], { stdio: 'pipe' })
      const denied = await fetch(downloadUrl, { headers: { Cookie: secondCookie, Range: 'bytes=0-3' }, signal: AbortSignal.timeout(15000) })
      assert.equal(denied.status, 404)
      await denied.arrayBuffer()
    }
    for (;;) { const { done, value } = await reader.read(); if (done) break; bytes += value.byteLength }
    assert.equal(bytes, Number(response.headers.get('content-length')))
    assert.ok(bytes >= 512 * 1024 * 1024)
    results.downloads.push({ name: revoke ? 'revoked-in-flight' : 'complete', bytes, firstByteMs, ms: performance.now() - start })
  }
  results.summary = Object.fromEntries(['listing', 'matching-search', 'empty-search'].map(name => {
    const values = results.browser.filter(row => row.name === name)
    return [name, { firstMs: values[0].ms, medianRepeatedMs: median(values.slice(1).map(row => row.ms)), maxMs: Math.max(...values.map(row => row.ms)) }]
  }))
  assert.equal(results.pageErrors.length, 0)
  for (const value of Object.values(results.summary)) assert.ok(value.medianRepeatedMs < 2000, 'Repeated shared-page median exceeds two seconds')
  console.log(JSON.stringify({ ...results.summary, downloads: results.downloads }))
} finally {
  writeFileSync(`${evidence}/browser-performance.json`, JSON.stringify(results, null, 2), { mode: 0o600 })
  for (const context of contexts) await context.close()
  await browser.close()
}
