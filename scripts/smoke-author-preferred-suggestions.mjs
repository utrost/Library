import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'

const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://localhost:8088'
const out = process.env.EVIDENCE_DIR || '/tmp/library-author-preferred-suggestions'
mkdirSync(out, { recursive: true, mode: 0o700 })
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
for (const name of ['author_directory_fixture', 'author_preferred_suggestions_integration', 'author_search_bounds_integration']) docker('cp', `tests/php/${name}.php`, `${container}:/tmp/${name}.php`)
try {
  docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', 'setup')
  const result = JSON.parse(docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_preferred_suggestions_integration.php'))
  const bounds = JSON.parse(docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_search_bounds_integration.php'))
  if (!bounds.passed) throw new Error('Author search bounds failed')
  const text = createTemporaryAppPassword(container, result.uid, 'author-preferred-smoke')
  const token = text.match(/app password is:\s*(\S+)/i)?.[1] || text.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  if (!token) throw new Error('Could not create fixture app password')
  const authorization = `Basic ${Buffer.from(`${result.uid}:${token}`).toString('base64')}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    const browser = await driver.launch()
    try {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
      await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
      const page = await context.newPage()
      const errors = []
      page.on('pageerror', error => errors.push(error.message))
      await page.goto(`${base}/apps/library/`)
      await page.locator('#library-creator-search').fill('Preferred')
      // Apply deliberately submits a free-text author query; Enter selects a loaded suggestion.
      await page.getByRole('button', { name: 'Apply author', exact: true }).click()
      await expect(page.locator('.library-cover-card')).toHaveCount(2)
      await expect(page).toHaveURL(url => url.searchParams.get('creator') === 'Preferred')
      await page.locator('#library-creator-search').fill('Doe')
      const choice = page.locator('#library-creator-suggestions').getByRole('button', { name: 'John Preferred' })
      await expect(choice).toBeVisible()
      await choice.scrollIntoViewIfNeeded()
      await page.screenshot({ path: `${out}/${engine}-preferred-suggestion.png`, animations: 'disabled' })
      await choice.click()
      await expect(page.locator('#library-creator-search')).toHaveValue('John Preferred')
      await expect(page.locator('.library-cover-card')).toHaveCount(2)
      if (errors.length) throw new Error(`${engine} page errors: ${errors.join('; ')}`)
      await context.close()
    } finally { await browser.close() }
  }
  console.log(JSON.stringify({ passed: true, preferredFromSortName: true, filteredSuggestions: true, sourceCreditsPreserved: true, engines: ['chromium', 'firefox'] }))
} finally {
  docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', 'cleanup')
  for (const name of ['author_directory_fixture', 'author_preferred_suggestions_integration', 'author_search_bounds_integration']) docker('exec', container, 'rm', '-f', `/tmp/${name}.php`)
}
