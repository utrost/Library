// Read-only real-account timing. Credentials are ephemeral and never printed.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { chromium, expect } from '@playwright/test'
import { createTemporaryAppPassword } from '../temporary-app-password.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud', base = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER
if (!user) throw new Error('NC_USER is required')
const name = `author-performance-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
let browser
try {
  const output = createTemporaryAppPassword(container, user, name)
  const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
  await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
  const page = await context.newPage(), errors = [], samples = []
  page.on('pageerror', e => errors.push(e.message))
  for (let i = 0; i < 6; i++) {
    const start = performance.now()
    await page.goto(`${base}/apps/library/?authors=1`)
    await expect(page.locator('.library-authors')).toHaveAttribute('aria-busy', 'false')
    await expect(page.locator('.author-directory li').first()).toBeVisible()
    samples.push(performance.now() - start)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  assert.ok(await page.locator('.library-authors').evaluate(el => el.scrollWidth <= el.clientWidth + 1))
  assert.deepEqual(errors, [])
  const first = samples.shift(); samples.sort((a, b) => a - b)
  const report = { firstMs: first, warmMedianMs: samples[2], warmMaxMs: samples[4], samples: 6, rows: await page.locator('.author-directory li').count(), pageErrors: errors.length, mobileFits: true }
  if (process.env.OUTPUT_JSON) writeFileSync(process.env.OUTPUT_JSON, JSON.stringify(report, null, 2))
  console.log(JSON.stringify(report))
} finally {
  if (browser) await browser.close()
  for (const token of JSON.parse(occ('user:auth-tokens:list', user, '--output=json')).filter(t => t.name === name)) occ('user:auth-tokens:delete', user, String(token.id))
}
