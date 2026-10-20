import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { chromium } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'

const container = process.env.NC_CONTAINER || 'library-bench-34-0-4'
const base = process.env.NC_URL
assert.ok(base, 'NC_URL is required')
const uid = process.env.NC_USER || 'library-recovery-smoke'
assert.match(uid, /^library-(?:recovery-smoke|author-[a-f0-9]{12})$/, 'Only a disposable recovery or author fixture account is permitted')
const php = code => execFileSync('docker', ['exec', '-u', 'www-data', '-e', `NC_USER=${uid}`, container, 'php', '-r', code], { encoding: 'utf8' }).trim()
const id = Number(php('define("OC_CONSOLE",true);require "/var/www/html/lib/base.php";$db=\\OC::$server->get(\\OCP\\IDBConnection::class);echo $db->executeQuery("SELECT id FROM *PREFIX*library_items WHERE user_id=? ORDER BY id LIMIT 1",[getenv("NC_USER")])->fetchOne();'))
assert.ok(id > 0)
const tokenName = `native-conflict-smoke-${Date.now()}`
const generated = createTemporaryAppPassword(container, uid, tokenName)
const token = generated.match(/app password is:\s*(\S+)/i)?.[1] || generated.match(/app password:\s*\n\s*(\S+)/i)?.[1]
assert.ok(token)
const authorization = `Basic ${Buffer.from(`${uid}:${token}`).toString('base64')}`
const browser = await chromium.launch()
try {
  const context = await browser.newContext()
  await context.route('**/*', route => route.continue({ headers: {
    ...route.request().headers(),
    ...(new URL(route.request().url()).origin === new URL(base).origin ? { authorization } : {}),
  } }))
  const page = await context.newPage()
  await page.goto(`${base}/apps/library/items/${id}`)
  await page.getByRole('heading', { name: 'Book details', exact: true }).waitFor()
  // Native POST compatibility is retained, but its old editor DOM is not.
  // Build the legacy client's payload from the current context and revision.
  const result = await page.evaluate(async url => {
    const snapshot = await (await fetch(`${url}/sidebar`)).json()
    const csrfToken = document.querySelector('#library-vue-root').dataset.requestToken
    const makeForm = () => {
      const body = new FormData()
      body.set('requesttoken', csrfToken)
      body.set('metadataRevision', snapshot.item.metadataRevision)
      body.set('returnTo', 'details')
      return body
    }
    const first = makeForm()
    first.set('title', 'First native tab')
    first.set('metadataAutosave', '0')
    const firstResponse = await fetch(url, { method: 'POST', body: first, credentials: 'same-origin' })
    const second = makeForm()
    second.set('title', 'Second native draft')
    second.set('metadataAutosave', '0')
    const secondResponse = await fetch(url, { method: 'POST', body: second, credentials: 'same-origin' })
    const conflictHtml = await secondResponse.text()
    const conflictDocument = new DOMParser().parseFromString(conflictHtml, 'text/html')
    const reviewed = conflictDocument.querySelector('.library-metadata-conflict form')
    const savedRevision = reviewed?.querySelector('[name="metadataRevision"]')?.value || ''
    const csrf = reviewed?.querySelector('[name="requesttoken"]')?.value || ''
    let reviewedStatus = 0
    if (reviewed) {
      const action = new URL(reviewed.getAttribute('action'), location.href)
      reviewedStatus = (await fetch(action, { method: 'POST', body: new FormData(reviewed), credentials: 'same-origin' })).status
    }
    return { firstStatus: firstResponse.status, conflictStatus: secondResponse.status,
      draftVisible: conflictHtml.includes('Second native draft'), savedVisible: conflictHtml.includes('First native tab'),
      savedRevision, csrfPresent: csrf !== '', reviewedStatus }
  }, `${base}/apps/library/items/${id}`)
  assert.equal(result.firstStatus, 200, JSON.stringify(result))
  assert.equal(result.conflictStatus, 409, JSON.stringify(result))
  assert.equal(result.draftVisible && result.savedVisible, true, JSON.stringify(result))
  assert.match(result.savedRevision, /^[a-f0-9]{64}$/)
  assert.equal(result.csrfPresent, true, JSON.stringify(result))
  assert.equal(result.reviewedStatus, 200, JSON.stringify(result))
  const title = php(`define("OC_CONSOLE",true);require "/var/www/html/lib/base.php";$db=\\OC::$server->get(\\OCP\\IDBConnection::class);echo $db->executeQuery("SELECT title FROM *PREFIX*library_items WHERE user_id=? AND id=?",["${uid}",${id}])->fetchOne();`)
  assert.equal(title, 'Second native draft')
  console.log(JSON.stringify({ passed: true, nativeConflict: 409, draftPreserved: true, reviewedResubmit: true }))
} finally {
  await browser.close()
  const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8' })
  for (const entry of JSON.parse(occ('user:auth-tokens:list', uid, '--output=json')).filter(entry => entry.name === tokenName)) {
    occ('user:auth-tokens:delete', uid, String(entry.id))
  }
}
