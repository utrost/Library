import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { requiredEnvironment, attachCheckpoint } from '../fixtures/nextcloud'

function textApp(enabled: boolean) {
  const container = requiredEnvironment('LIBRARY_LISTS_CONTAINER')
  expect(execFileSync('docker', ['inspect', '--format', '{{index .Config.Labels "library.disposable"}}', container], { encoding: 'utf8' }).trim()).toBe('personal-lists')
  execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', `app:${enabled ? 'enable' : 'disable'}`, 'text'], { timeout: 30000 })
}

for (const suffix of ['', ' @mobile']) for (const enabled of [true, false]) test(`linked reading note with Text ${enabled ? 'enabled' : 'disabled'}` + suffix, async ({ page }, info) => {
  test.setTimeout(90000)
  const fixture = JSON.parse(readFileSync(requiredEnvironment('PW_CURATION_HTTP_FIXTURE'), 'utf8'))
  expect(fixture.owner).toMatch(/^library-http-owner-/)
  const requests: string[] = []
  page.context().on('request', request => { if (new URL(request.url()).hostname === 'example.invalid') requests.push(request.url()) })
  textApp(enabled)
  try {
    await page.goto('/login'); await page.locator('#user').fill(fixture.owner); await page.locator('#password').fill(fixture.password)
    await Promise.all([page.waitForURL(url => !url.pathname.endsWith('/login')), page.locator('button[type="submit"]').click()])
    await page.goto(`/apps/library/?details=${fixture.bookId}`)
    const davPath = `/remote.php/dav/files/${encodeURIComponent(fixture.owner)}/Library%20notes/${encodeURIComponent(fixture.textNoteName)}`
    const before = await page.request.get(davPath)
    expect(before.status()).toBe(200)
    const beforeHash = createHash('sha256').update(await before.body()).digest('hex')
    const section = page.locator('details').filter({ has: page.locator('summary').filter({ hasText: 'Notes and change history' }) }).first()
    await section.locator(':scope > summary').click()
    const link = section.getByRole('link', { name: fixture.textNoteName, exact: true })
    await expect(link).toBeVisible()
    const warning = section.getByText('Neither Text nor Notes is enabled.', { exact: false })
    if (enabled) await expect(warning).toHaveCount(0)
    else await expect(warning).toBeVisible()
    const [notePage] = await Promise.all([page.waitForEvent('popup'), link.click()])
    await notePage.waitForURL(/\/apps\/files\//)
    if (enabled) {
      const editor = notePage.locator('.tiptap.ProseMirror[role="textbox"]')
      await expect(editor).toBeVisible({ timeout: 30000 })
      await expect(editor).toContainText(fixture.textNoteTitle)
      await expect(editor.locator('img')).toHaveCount(0)
      await expect(editor.locator('a[href*="example.invalid"]')).toHaveCount(0)
    } else {
      await expect(notePage.locator('#app-content-vue, #app-content').first()).toBeVisible()
      await expect(notePage.locator('.tiptap.ProseMirror')).toHaveCount(0)
    }
    await attachCheckpoint(notePage, info, enabled ? 'reading-note-text' : 'reading-note-files-fallback')
    const download = await page.request.get(davPath)
    expect(download.status()).toBe(200)
    // Text may normalize Markdown during opening; Files without an editor must not write it.
    if (!enabled) expect(createHash('sha256').update(await download.body()).digest('hex')).toBe(beforeHash)
    else expect(await download.text()).toContain('[Library](')
    expect(requests).toEqual([])
    await notePage.close()
  } finally { textApp(true) }
})
