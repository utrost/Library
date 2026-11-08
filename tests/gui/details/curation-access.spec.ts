import { test, expect, type Page } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { requiredEnvironment } from '../fixtures/nextcloud'

async function signIn(page: Page, user: string, password: string) {
  await page.goto('/login')
  await page.locator('#user').fill(user)
  await page.locator('#password').fill(password)
  await Promise.all([page.waitForURL(url => !url.pathname.endsWith('/login')), page.locator('button[type="submit"]').click()])
  await page.goto('/apps/library/')
  return (await page.locator('head').getAttribute('data-requesttoken'))!
}

test('curation HTTP endpoints isolate accounts and require mutation CSRF tokens', async ({ browser, page }) => {
  test.setTimeout(90000)
  const fixture = JSON.parse(readFileSync(requiredEnvironment('PW_CURATION_HTTP_FIXTURE'), 'utf8'))
  expect(fixture.owner).toMatch(/^library-http-owner-/)
  const token = await signIn(page, fixture.owner, fixture.password)
  const post = (path: string, data = {}, requestToken = token) => page.request.post(`/apps/library/api/${path}`, { data, headers: requestToken ? { requesttoken: requestToken } : {} })
  const endpoints = [
    [`curation/books/${fixture.bookId}/history`, {}],
    [`curation/books/${fixture.bookId}/history/undo`, { eventId: fixture.eventId }],
    [`curation/books/${fixture.bookId}/notes`, {}],
    [`curation/books/${fixture.bookId}/notes`, { action: 'create' }],
    [`curation/books/${fixture.bookId}/notes`, { action: 'attach', fileId: fixture.noteId }],
    [`curation/books/${fixture.bookId}/notes`, { action: 'detach', fileId: fixture.noteId }],
    [`curation/inbox/${fixture.bookId}`, { state: 'done', revision: fixture.revision }],
    [`curation/jobs/${fixture.jobId}`, {}],
    [`curation/jobs/${fixture.jobId}/control`, { action: 'delete' }],
    [`curation/archives/${fixture.exportId}`, {}],
    [`curation/archives/${fixture.restoreId}/upload`, { records: [{ kind: 'genre', key: '1', data: { display_name: 'Unauthorized fixture genre' } }] }],
    [`curation/archives/${fixture.restoreId}/control`, { action: 'delete' }],
    [`curation/dashboard`, { action: 'save', widgets: ['upNext'], listId: fixture.listId }],
    [`writeback/books/${fixture.bookId}/preview`, { fields: ['title'] }],
    [`writeback/${fixture.backupId}`, { action: 'delete' }],
  ] as const
  // A cookie-authenticated request without a CSRF token must fail before touching data.
  for (const [path, data] of endpoints) expect([403, 412], path).toContain((await post(path, data, '')).status())
  const ownHistory = await post(`curation/books/${fixture.bookId}/history`)
  expect(ownHistory.status()).toBe(200)
  expect(ownHistory.headers()['cache-control']).toContain('no-store')
  const origin = new URL(page.url()).origin
  const outsiderContext = await browser.newContext({ baseURL: origin })
  const guest = await browser.newContext({ baseURL: origin })
  try {
    const outsider = await outsiderContext.newPage()
    const outsiderToken = await signIn(outsider, fixture.outsider, fixture.password)
    for (const [path, data] of endpoints) {
      const response = await outsider.request.post(`/apps/library/api/${path}`, { data, headers: { requesttoken: outsiderToken } })
      expect(response.status(), path).toBe(404)
      expect(response.headers()['cache-control'], path).toContain('no-store')
      expect(await response.text(), path).not.toContain('Private HTTP')
    }
    for (const path of [`curation/archives/${fixture.exportId}/download`, `writeback/${fixture.backupId}/backup`]) {
      const response = await outsider.request.get(`/apps/library/api/${path}`)
      expect(response.status(), path).toBe(404)
      expect(response.headers()['cache-control']).toContain('no-store')
      const anonymous = await guest.request.get(`/apps/library/api/${path}`, { maxRedirects: 0 })
      expect([302, 303, 401, 403, 404], path).toContain(anonymous.status())
      expect(await anonymous.text()).not.toContain('Private HTTP')
      const own = await page.request.get(`/apps/library/api/${path}`)
      expect(own.status(), path).toBe(200)
      expect(own.headers()['cache-control']).toContain('no-store')
      if (path.endsWith('/backup')) expect(createHash('sha256').update(await own.body()).digest('hex')).toBe(fixture.sourceHash)
    }
    expect((await post(`curation/jobs/${fixture.jobId}`)).status()).toBe(200)
    expect((await post(`curation/archives/${fixture.restoreId}`)).status()).toBe(200)
    expect((await post(`curation/books/${fixture.bookId}/notes`)).status()).toBe(200)
  } finally { await outsiderContext.close(); await guest.close() }
})
