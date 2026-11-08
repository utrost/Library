import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { attachCheckpoint, requiredEnvironment, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear } from '../fixtures/nextcloud'

for (const suffix of ['', ' @mobile']) test('German curation controls wrap with long fixture names' + suffix, async ({ page }, info) => {
  const fixture = JSON.parse(readFileSync(requiredEnvironment('PW_CURATION_HTTP_FIXTURE'), 'utf8'))
  expect(fixture.owner).toMatch(/^library-http-owner-/)
  const labels = JSON.parse(readFileSync('l10n/de.json', 'utf8')).translations
  const failures = collectBrowserFailures(page)
  await page.goto('/login'); await page.locator('#user').fill(fixture.owner); await page.locator('#password').fill(fixture.password)
  await Promise.all([page.waitForURL(url => !url.pathname.endsWith('/login')), page.locator('button[type="submit"]').click()]); await page.waitForLoadState('networkidle')
  assertKnownNextcloudLoginFailuresAndClear(failures)
  const cases = [
    [`?details=${fixture.bookId}`, labels['Book details']],
    [`?curation=1&curationTab=jobs&curationJob=${fixture.germanJobId}`, labels['Review and organise']],
    ['?genres=1', labels['Genres']],
  ]
  for (const [query, heading] of cases) {
    await page.goto(`/apps/library/${query}`)
    await expect(page.locator('#library-vue-root[data-v-app]')).toBeAttached()
    await expect(page.getByRole('heading', { name: heading, exact: true }).first()).toBeVisible()
    const widths = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }))
    expect(widths.document, query).toBeLessThanOrEqual(widths.viewport + 1)
    if (query.startsWith('?details')) {
      const writeback = page.locator('details').filter({ has: page.locator('summary').filter({ hasText: labels['Write metadata to EPUB'] }) }).first()
      await writeback.locator('summary').click()
      await expect(writeback.getByRole('button', { name: labels['Preview file changes'], exact: true })).toBeVisible()
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
    }
    await attachCheckpoint(page, info, `german-${query.startsWith('?details') ? 'details' : query.startsWith('?curation') ? 'review' : 'genres'}`)
  }
  failures.assertNone()
})
