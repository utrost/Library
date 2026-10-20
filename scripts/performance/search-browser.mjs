// Read-only search regression probe against installed assets. No book mutations.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, expect } from '@playwright/test'
import { createTemporaryAppPassword } from '../temporary-app-password.mjs'
import { createEvidenceDirectory } from '../private-evidence-directory.mjs'
const base = process.env.NC_URL || 'http://localhost:8088'
const container = process.env.NC_CONTAINER || 'nextcloud', user = process.env.NC_USER || 'maintainer'
const query = process.env.SEARCH_QUERY || 'Heinlein'
const out = createEvidenceDirectory('library-search-browser'), name = `library-search-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
const report = { samples: [], pageErrors: [], consoleErrors: [], mutations: 0 }
let browser
try {
  const generated = createTemporaryAppPassword(container, user, name)
  const token = generated.match(/app password(?: is)?:\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  browser = await chromium.launch()
  for (const viewport of [{ width: 1440, height: 900 }, ...(process.env.MOBILE === '1' ? [{ width: 390, height: 844 }] : [])]) {
    const context = await browser.newContext({ viewport })
    await context.route('**/*', route => {
      const request = route.request(), url = new URL(request.url())
      if (url.origin !== new URL(base).origin) return route.continue()
      if (request.method() === 'POST' && url.pathname.endsWith('/api/duplicate-suggestions/lookup')) {
        report.duplicateLookups = (report.duplicateLookups || 0) + 1
        return route.continue({ headers: { ...request.headers(), authorization } })
      }
      if (url.pathname.includes('/apps/library/') && !['GET', 'HEAD', 'OPTIONS'].includes(request.method())) {
        report.blockedRequests ||= []; report.blockedRequests.push({ method: request.method(), path: url.pathname }); report.mutations++; return route.abort('blockedbyclient')
      }
      return route.continue({ headers: { ...request.headers(), authorization } })
    })
    const page = await context.newPage()
    page.on('pageerror', error => report.pageErrors.push(error.message))
    page.on('console', message => { if (message.type() === 'error') report.consoleErrors.push(message.text()) })
    page.setDefaultTimeout(60000)
    for (const facet of ['q', 'creator']) {
      await page.goto(`${base}/apps/library/`)
      await expect(page.locator('[data-library-quick-search]').first()).toBeAttached()
      report.version = await page.locator('#library-vue-root').getAttribute('data-library-version')
      if (viewport.width < 600) await page.getByRole('button', { name: /^Filters/ }).click()
      const form = page.locator(viewport.width < 600 ? '.library-mobile-filter-form' : '.library-sidebar-filters')
      const input = form.locator(`input[name="${facet === 'q' ? 'q' : 'creatorSearch'}"]`)
      const responsePromise = page.waitForResponse(response => {
        const url = new URL(response.url())
        return url.pathname.endsWith('/library/catalogue') && url.searchParams.get(facet) === query
      })
      const start = performance.now()
      await input.fill(query)
      await input.press('Enter')
      const response = await responsePromise
      assert.equal(response.status(), 200)
      const payload = await response.json()
      await expect(page.locator('.library-search-spinner')).toHaveCount(0)
      report.samples.push({ width: viewport.width, facet, ms: Math.round(performance.now() - start), total: payload.cataloguePagination?.total ?? payload.totalItems ?? payload.total, items: payload.items?.length })
      await page.screenshot({ path: `${out}/${viewport.width}-${facet}.png` })
    }
    await context.close()
  }
  assert.equal(report.mutations, 0)
  assert.deepEqual(report.pageErrors, [])
  assert.deepEqual(report.consoleErrors, [])
} finally {
  await browser?.close()
  const tokens = JSON.parse(occ('user:auth-tokens:list', user, '--output=json'))
  for (const entry of tokens.filter(entry => entry.name === name)) occ('user:auth-tokens:delete', user, String(entry.id))
  report.tokenRemoved = !JSON.parse(occ('user:auth-tokens:list', user, '--output=json')).some(entry => entry.name === name)
  writeFileSync(`${out}/results.json`, JSON.stringify(report, null, 2), { mode: 0o600 })
}
console.log(JSON.stringify({ evidence: out, ...report }))
