import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'

const container = process.env.NC_CONTAINER || 'nextcloud'
const base = process.env.NC_URL || 'http://100.123.149.120:8088'
const out = process.env.EVIDENCE_DIR || '/tmp/library-author-tasks'
mkdirSync(out, { recursive: true, mode: 0o700 })
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
for (const name of ['author_directory_fixture', 'author_task_ui_fixture']) docker('cp', `tests/php/${name}.php`, `${container}:/tmp/${name}.php`)
try {
  docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', 'setup')
  const fixture = JSON.parse(docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_task_ui_fixture.php'))
  const text = createTemporaryAppPassword(container, fixture.uid, 'author-tasks-smoke')
  const token = text.match(/app password is:\s*(\S+)/i)?.[1] || text.match(/app password:\s*\n\s*(\S+)/i)?.[1]
  assert.ok(token)
  const authorization = `Basic ${Buffer.from(`${fixture.uid}:${token}`).toString('base64')}`
  for (const [engine, driver] of Object.entries({ chromium, firefox })) {
    const state = engine === 'chromium' ? fixture : JSON.parse(docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_task_ui_fixture.php'))
    const browser = await driver.launch()
    try {
      const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
      await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}) } }))
      const page = await context.newPage()
      const errors = []
      page.on('pageerror', error => errors.push(error.message))
      const taskResponse = page.waitForResponse(r => r.url().endsWith('/api/authors/tasks') && r.request().method() === 'GET')
      await page.goto(`${base}/apps/library/?authors=1&authorId=${state.source}`)
      const taskResult = await taskResponse
      assert.equal(taskResult.status(), 200, `Task listing: ${taskResult.status()} ${await taskResult.text()}`)
      assert.ok((await taskResult.json()).some(t => t.id === state.task), `Queued task missing from API for ${engine}`)
      const task = page.locator(`[data-author-task-id="${state.task}"]`)
      await expect(task).toContainText('Queued')
      await expect(task).toContainText('503 books')
      await task.scrollIntoViewIfNeeded()
      await page.screenshot({ path: `${out}/${engine}-queued.png`, animations: 'disabled' })
      const response = page.waitForResponse(r => r.url().endsWith(`/tasks/${state.task}/cancel`) && r.request().method() === 'POST')
      await task.getByRole('button', { name: 'Cancel', exact: true }).click()
      assert.equal((await response).status(), 200)
      await expect(task).toHaveCount(0)
      assert.deepEqual(errors, [])
      await context.close()
    } finally { await browser.close() }
  }
  console.log(JSON.stringify({ passed: true, engines: ['chromium', 'firefox'], queuedVisible: true, cancellationVisible: true }))
} finally {
  docker('exec', '-u', 'www-data', container, 'php', '/tmp/author_directory_fixture.php', 'cleanup')
  for (const name of ['author_directory_fixture', 'author_task_ui_fixture']) docker('exec', container, 'rm', '-f', `/tmp/${name}.php`)
}
