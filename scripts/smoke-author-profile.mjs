import { createEvidenceDirectory } from './private-evidence-directory.mjs'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { writeFileSync, readFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = createEvidenceDirectory('library-author-profile')

const docker = args => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
for (const name of ['author_directory', 'author_profile']) docker(['cp', `tests/php/${name}_fixture.php`, `${container}:/tmp/library-${name.replaceAll('_', '-')}-fixture.php`])
const fixture = (name, action) => JSON.parse(docker(['exec', '-u', 'www-data', container, 'php', `/tmp/library-${name}-fixture.php`, action]))
const auth = uid => {
  const text = createTemporaryAppPassword(container, uid, 'author-profile-smoke')
  const token = text.match(/app password is:\s*(\S+)/i)?.[1] || text.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  return `Basic ${Buffer.from(`${uid}:${token}`).toString('base64')}`
}
let browser
const results = []
try {
  fixture('author-directory', 'setup')
  const state = fixture('author-profile', 'setup')
  assert.equal(state.assertions, 7)
  docker(['cp', `${container}:/tmp/library-author-profile-upload.png`, `${out}/fixture-portrait.png`])
  const authorization = auth(state.uid), otherAuthorization = auth(state.otherUid)
  const api = `${base}/apps/library/api/authors/${state.authorId}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    browser = await driver.launch()
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
    const page = await context.newPage(), errors = []
    page.on('pageerror', e => errors.push(e.message))
    await page.goto(`${base}/apps/library/?authors=1&authorId=${state.authorId}`)
    const panel = page.locator('.library-authors')
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    await expect(panel.locator('.author-books li')).toHaveCount(50)
    await panel.getByRole('button', { name: 'Next', exact: true }).click()
    await expect(panel.locator('.author-books li')).toHaveCount(3)
    await panel.getByRole('button', { name: 'Previous', exact: true }).click()
    await expect(panel.locator('.author-books li')).toHaveCount(50)
    await panel.getByRole('button', { name: 'Edit author', exact: true }).click()
    const bio = `John Doe — ${engine}. ` + 'A manually maintained biography. '.repeat(15) + '<script>throw new Error("unsafe")</script>'
    await panel.locator('#author-bio').fill(bio)
    await panel.locator('#author-photo').setInputFiles(`${out}/fixture-portrait.png`)
    await panel.getByRole('button', { name: 'Save author', exact: true }).click()
    await expect(panel.locator('.author-portrait img')).toBeVisible()
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    await expect(panel.getByRole('button', { name: 'Show more', exact: true })).toBeVisible()
    await panel.getByRole('button', { name: 'Show more', exact: true }).click()
    await expect(panel.locator('.author-biography p')).toHaveText(bio)
    assert.equal(await panel.locator('.author-biography script').count(), 0)
    await panel.getByRole('button', { name: 'Show less', exact: true }).click()
    const response = await context.request.get(`${api}/photo`, { headers: { authorization } })
    assert.equal(response.status(), 200)
    assert.equal(response.headers()['content-type'], 'image/jpeg')
    assert.match(response.headers()['cache-control'], /private/)
    assert.ok((await response.body()).length <= 102400)
    const dimensions = await panel.locator('.author-portrait img').evaluate(img => ({ w: img.naturalWidth, h: img.naturalHeight }))
    assert.deepEqual(dimensions, { w: 320, h: 320 })
    const before = await (await context.request.get(api, { headers: { authorization } })).json()
    const requesttoken = await page.evaluate(() => OC.requestToken)
    const fields = { display_name: 'John Doe', sort_name: 'Doe, John', given_name: 'John', family_name: 'Doe', biography: 'must not save', revision: Number(before.author.revision) - 1 }
    assert.equal((await context.request.post(api, { headers: { authorization, requesttoken }, data: fields })).status(), 409)
    assert.equal((await context.request.post(api, { headers: { authorization, requesttoken }, multipart: { ...fields, revision: String(before.author.revision), photo: { name: 'invalid.png', mimeType: 'image/png', buffer: Buffer.from('not an image') } } })).status(), 422)
    const preserved = await (await context.request.get(api, { headers: { authorization } })).json()
    assert.equal(preserved.author.biography, bio)
    assert.equal(preserved.author.photo_key, before.author.photo_key)
    // Older name-only clients must leave profile attributes intact.
    const nameOnly = { ...fields, revision: Number(preserved.author.revision) }
    delete nameOnly.biography
    assert.equal((await context.request.post(api, { headers: { authorization, requesttoken }, data: nameOnly })).status(), 200)
    const kept = await (await context.request.get(api, { headers: { authorization } })).json()
    assert.equal(kept.author.biography, bio)
    assert.equal(kept.author.photo_key, before.author.photo_key)
    const replacement = await context.request.post(api, { headers: { authorization, requesttoken }, multipart: { ...nameOnly, revision: String(kept.author.revision), photo: { name: 'portrait.png', mimeType: 'image/png', buffer: readFileSync(`${out}/fixture-portrait.png`) } } })
    assert.equal(replacement.status(), 200)
    assert.notEqual((await replacement.json()).author.photo_key, before.author.photo_key)
    await page.reload()
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    await expect(panel.locator('.author-portrait img')).toBeVisible()
    const outsider = await browser.newContext()
    assert.equal((await outsider.request.get(api, { headers: { authorization: otherAuthorization } })).status(), 404)
    assert.equal((await outsider.request.get(`${api}/photo`, { headers: { authorization: otherAuthorization } })).status(), 404)
    await outsider.close()
    await panel.evaluate(el => { for (let p = el; p; p = p.parentElement) p.scrollTop = 0; window.scrollTo(0, 0) })
    await page.screenshot({ path: `${out}/${engine}-profile.png`, animations: 'disabled' })
    await panel.locator('#author-book-search').fill('fixture 51')
    await panel.locator('.author-book-controls').getByRole('button', { name: 'Search', exact: true }).click()
    await expect(panel.locator('.author-books li')).toHaveCount(1)
    await expect(panel.locator('.author-books li')).toContainText('Profile fixture 51')
    await panel.locator('#author-book-search').fill('no such title')
    await panel.locator('.author-book-controls').getByRole('button', { name: 'Search', exact: true }).click()
    await expect(panel.getByText('No books match this view.', { exact: true })).toBeVisible()
    await panel.locator('#author-book-search').fill('')
    await panel.locator('#author-book-sort').selectOption('newest')
    await expect(panel.locator('.author-books li').first()).toContainText('2024')
    await panel.locator('#author-book-sort').selectOption('series')
    await expect(panel.getByRole('heading', { name: 'Profile series', exact: true })).toBeVisible()
    await panel.getByRole('button', { name: 'List', exact: true }).click()
    await expect(panel.locator('.author-books-grid')).toHaveCount(0)
    await panel.evaluate(el => { for (let p = el; p; p = p.parentElement) p.scrollTop = 0; window.scrollTo(0, 0) })
    await page.screenshot({ path: `${out}/${engine}-series-list.png`, animations: 'disabled' })
    await page.setViewportSize({ width: 390, height: 844 })
    await panel.getByRole('button', { name: 'Covers', exact: true }).click()
    await panel.evaluate(el => { for (let p = el; p; p = p.parentElement) p.scrollTop = 0; window.scrollTo(0, 0) })
    await page.screenshot({ path: `${out}/${engine}-mobile.png`, animations: 'disabled' })
    assert.ok(await panel.evaluate(el => el.scrollWidth <= el.clientWidth + 1), 'mobile panel fits')
    await panel.getByRole('button', { name: 'Edit author', exact: true }).click()
    await panel.getByLabel('Remove photo', { exact: true }).check()
    await panel.getByRole('button', { name: 'Save author', exact: true }).click()
    await expect(panel.locator('.author-portrait img')).toHaveCount(0)
    await expect(panel).toHaveAttribute('aria-busy', 'false')
    assert.equal((await context.request.get(`${api}/photo`, { headers: { authorization } })).status(), 404)
    assert.deepEqual(errors, [])
    results.push({ engine, pass: true, backendAssertions: state.assertions, books: 53, pagination: true, biographyPlainText: true, photoUploadRemoval: true, photoReplacement: true, nameOnlyPreservesProfile: true, private320pxPortrait: true, staleEditRejected: true, invalidUploadRejected: true, ownership: true, searchSortViews: true, mobileFits: true })
    await browser.close(); browser = null
  }
} finally {
  if (browser) await browser.close()
  fixture('author-profile', 'cleanup'); fixture('author-directory', 'cleanup')
}
writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2))
console.log(JSON.stringify(results))
