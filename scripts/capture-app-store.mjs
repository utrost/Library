// Capture only an explicitly selected disposable Gutenberg instance.
import { chromium, expect } from '@playwright/test'
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
const base = process.env.PW_BASE_URL
const container = process.env.LIBRARY_LISTS_CONTAINER
const out = process.env.SCREENSHOT_DIR
if (!base || !container || !out || !process.env.PW_PASSWORD) throw new Error('Disposable fixture environment and SCREENSHOT_DIR required')
const label = execFileSync('docker', ['inspect', '--format', '{{index .Config.Labels "library.disposable"}}', container], { encoding: 'utf8' }).trim()
if (label !== 'personal-lists') throw new Error('Only disposable fixtures may supply public screenshots')
mkdirSync(out, { recursive: true })
const browser = await chromium.launch()
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: 'light' })
  const auth = 'Basic ' + Buffer.from(`${process.env.PW_USER}:${process.env.PW_PASSWORD}`).toString('base64')
  await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization: auth } : {}) } }))
  const page = await context.newPage()
  await page.goto(base + '/apps/library/?view=compact&limit=100')
  const cards = page.locator('.library-cover-card')
  await expect(cards).toHaveCount(40)
  await expect.poll(() => cards.locator('img').evaluateAll(images => images.filter(image => image.complete && image.naturalWidth > 0).length)).toBeGreaterThan(3)
  await page.screenshot({ path: out + '/appstore-catalogue.png' })
  await cards.first().locator('.library-cover-link').click()
  await expect(page.locator('#app-sidebar-vue')).toBeVisible()
  await page.screenshot({ path: out + '/appstore-details.png' })
  execFileSync('docker', ['cp', new URL('./performance/store-example.php', import.meta.url).pathname, container + ':/tmp/library-store-example.php'])
  const example = JSON.parse(execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', '/tmp/library-store-example.php'], { encoding: 'utf8' }))
  await page.goto(base + '/apps/library/?infer=1')
  await expect(page.locator('.library-inference')).toHaveAttribute('aria-busy', 'false')
  await page.getByRole('combobox', { name: 'Library root', exact: true }).selectOption(String(example.rootId))
  await page.getByRole('button', { name: 'Load sample', exact: true }).click()
  await expect(page.locator('.library-inference')).toHaveAttribute('aria-busy', 'false')
  await page.getByRole('combobox', { name: 'Suggest fields', exact: true }).selectOption('detected')
  await expect(page.getByRole('complementary', { name: 'Live preview', exact: true })).toBeVisible()
  await page.screenshot({ path: out + '/appstore-inference.png' })
  console.log('public_screenshots_captured=true')
} finally {
  await browser.close()
}
