import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { attachCheckpoint, requiredEnvironment } from '../fixtures/nextcloud'

for (const suffix of ['', ' @mobile']) test('maximum organisation review stays paginated and responsive' + suffix, async ({ page }, info) => {
  const fixture = JSON.parse(readFileSync(requiredEnvironment('PW_CURATION_BOUNDARY_FIXTURE'), 'utf8'))
  expect(fixture.uid).toMatch(/^library-bulk-boundary-/)
  await page.goto('/login')
  await page.locator('#user').fill(fixture.uid)
  await page.locator('#password').fill('Disposable-boundary-2026')
  await Promise.all([page.waitForURL(url => !url.pathname.endsWith('/login')), page.locator('button[type="submit"]').click()])
  const responsePromise = page.waitForResponse(response => response.url().endsWith(`/api/curation/jobs/${fixture.job}`))
  const started = Date.now()
  await page.goto(`/apps/library/?curation=1&curationTab=jobs&curationJob=${fixture.job}&curationPage=100`)
  const response = await responsePromise
  const body = await response.json()
  expect(response.status()).toBe(200)
  expect(body.count).toBe(5000)
  expect(body.rows).toHaveLength(50)
  expect(body.hasNext).toBe(false)
  const table = page.locator('.curation table').first()
  await expect(table.locator('tbody').getByRole('row')).toHaveCount(50)
  await expect(page.getByText('Page 100', { exact: true })).toBeVisible()
  const usableMs = Date.now() - started
  const width = await page.evaluate(() => ({ viewport: innerWidth, actual: document.documentElement.scrollWidth }))
  expect(width.actual).toBeLessThanOrEqual(width.viewport + 1)
  const pageChanges = []
  for (const [name, number] of [['Previous', 99], ['Next', 100], ['Previous', 99]] as const) {
    const nextResponse = page.waitForResponse(reply => reply.url().endsWith(`/api/curation/jobs/${fixture.job}`) && reply.request().postDataJSON()?.page === number)
    const began = Date.now()
    await page.getByRole('navigation', { name: 'Pagination', exact: true }).first().getByRole('button', { name, exact: true }).click()
    expect((await nextResponse).status()).toBe(200)
    await expect(page.getByText(`Page ${number}`, { exact: true })).toBeVisible()
    pageChanges.push(Date.now() - began)
  }
  const medianPageChangeMs = [...pageChanges].sort((a, b) => a - b)[1]
  await info.attach('maximum-review-timing', { body: JSON.stringify({ coldUsableMs: usableMs, pageChanges, medianPageChangeMs, responseBytes: (await response.body()).length, rows: body.rows.length }), contentType: 'application/json' })
  await attachCheckpoint(page, info, 'maximum-review-page')
  console.log(JSON.stringify({ case: 'maximum-organisation-review', project: info.project.name, coldUsableMs: usableMs, pageChanges, medianPageChangeMs, responseBytes: (await response.body()).length }))
  expect(medianPageChangeMs).toBeLessThan(2000)
})
