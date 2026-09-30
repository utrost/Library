import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream = process.env.NC_URL || 'http://100.123.149.120:8088'
const user = process.env.NC_USER || 'uwe', container = process.env.NC_CONTAINER || 'nextcloud'
const evidence = process.env.EVIDENCE_DIR || '/tmp/library-alpha13-evidence'
mkdirSync(evidence, { recursive: true })
const tokenName = `library-guided-smoke-${Date.now()}`
const occ = (...args) => execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
let browser
try {
 const output = createTemporaryAppPassword(container, user, tokenName)
 const token = output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1]
 assert.ok(token)
 const authorization = `Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for (const [engine, launcher] of [['chromium', chromium], ['firefox', firefox]]) {
  browser = await launcher.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
  await context.route('**/*', route => route.continue({ headers: { ...route.request().headers(), ...(new URL(route.request().url()).origin === new URL(upstream).origin ? { authorization } : {}) } }))
  const page = await context.newPage(), errors = [], unexpectedWrites = [], owned = new Set()
  page.on('pageerror', e => errors.push(e.message))
  page.on('request', r => { if (r.url().includes('/apps/library/') && !['GET','HEAD'].includes(r.method()) && !new URL(r.url()).pathname.startsWith('/apps/library/api/inference/patterns')) unexpectedWrites.push(r.url()) })
  await page.goto(`${upstream}/apps/library/?infer=1`)
  const panel = page.locator('.library-inference')
  const ready = async () => { await expect(panel).toHaveAttribute('aria-busy', 'false', { timeout: 30000 }); await expect(panel.locator('.library-inference-templates')).toHaveAttribute('aria-busy','false') }
  await ready()
  const api = async (suffix = '', body) => page.evaluate(async ({ suffix, body }) => {
   const r = await fetch('/apps/library/api/inference/patterns' + suffix, { method: body === undefined ? 'GET' : 'POST', headers: { 'Content-Type': 'application/json', requesttoken: document.head.dataset.requesttoken || window.OC.requestToken }, ...(body === undefined ? {} : { body: JSON.stringify(body) }) })
   return { status: r.status, data: await r.json() }
  }, { suffix, body })
  const before = (await api()).data
  try {
   const roots = await panel.getByRole('combobox', { name: 'Library root', exact: true }).locator('option').evaluateAll(options => options.map(o => ({ value: o.value, label: o.textContent })))
   const sampleRoot = roots.find(r => /sample|inference|extract/i.test(r.label))
   if (sampleRoot) { await panel.getByRole('combobox', { name: 'Library root', exact: true }).selectOption(sampleRoot.value); await panel.getByRole('button', { name: 'Load sample', exact: true }).click(); await ready() }
   const rootId = await panel.getByRole('combobox', { name: 'Library root', exact: true }).inputValue()
   const sample = async () => page.evaluate(async rootId => (await fetch(`/apps/library/api/inference/sample?rootId=${rootId}`)).json(), rootId)
   const original = await sample()
   const example = panel.getByRole('combobox', { name: 'Example path', exact: true })
   const paths = await example.locator('option').evaluateAll(options => options.map(o=>o.value))
   const path = paths.find(p => p.endsWith('/Ada Quill - A Quiet Orchard.epub'))
   assert.ok(path, 'Need the existing Path parsing samples shelf')
   await example.selectOption(path)
   await panel.getByRole('button', { name: 'Reset assignments from this example', exact: true }).click()
   const filename = panel.locator('.library-inference-part').filter({ has: page.locator(':scope > .library-inference-part-source', { hasText: path.split('/').pop().replace(/\.[^.]+$/,'') }) }).last()
   await filename.getByRole('button', { name: 'Split this part', exact: true }).click()
   await filename.getByRole('combobox', { name: 'Split at', exact: true }).selectOption('last')
   // Split the title piece again, with a different delimiter.
   const authorYear = filename.locator(':scope > .library-inference-part').nth(1)
   await authorYear.getByRole('button', { name: 'Split this part', exact: true }).click()
   await authorYear.getByRole('textbox', { name: 'Separator', exact: true }).fill(' ')
   const author = filename.locator(':scope > .library-inference-part').nth(0)
   const year = authorYear.locator(':scope > .library-inference-part').nth(1)
   await author.getByRole('combobox', { name: /^Field:/ }).selectOption('author')
   await author.getByText('Transform this value', { exact: true }).click()
   await author.getByRole('textbox', { name: 'Map exact value', exact: true }).fill('Ada Quill')
   await author.getByRole('textbox', { name: 'Replacement value', exact: true }).fill('Quill, Ada')
   await author.getByRole('combobox', { name: 'Separate authors by', exact: true }).selectOption('custom')
   await author.getByRole('textbox', { name: 'Custom separator', exact: true }).fill(';')
   await author.getByRole('checkbox', { name: 'Convert Surname, Given name to Given name Surname', exact: true }).check()
   await year.getByRole('combobox', { name: /^Field:/ }).selectOption('title')
   await year.getByText('Transform this value', { exact: true }).click()
   await year.getByRole('textbox', { name: 'Map exact value', exact: true }).fill('Quiet Orchard')
   await year.getByRole('textbox', { name: 'Replacement value', exact: true }).fill('A Quiet Orchard')
   await year.getByRole('checkbox', { name: 'Replace underscores with spaces', exact: true }).check()
   await panel.getByRole('checkbox', { name: 'Combine authors from multiple parts', exact: true }).check()
   const live = panel.getByRole('complementary', { name: 'Live preview', exact: true })
   await expect(live.locator('dt')).toHaveCount(2)
   await expect(live.locator('.library-inference-author-chips strong')).toHaveCount(1)
   const preview = await live.innerText()
   const name = `${tokenName}-${engine}`
   await panel.getByRole('textbox', { name: 'Rule name', exact: true }).fill(name)
   const savedResponse = page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/inference/patterns') && r.request().method()==='POST')
   await panel.getByRole('button', { name: 'Save current rule as new', exact: true }).click()
   const save = await savedResponse; assert.equal(save.status(),201)
   const saved = (await save.json()).saved; owned.add(saved.id)
   assert.equal(saved.rule.combineAuthors,true)
   assert.equal(saved.rule.parts.at(-1).split.children[1].split.delimiter,' ')
   assert.equal(saved.rule.parts.at(-1).split.children[0].customAuthorSeparator,';')
   assert.equal((await api('', { name, kind:'guided',rule:saved.rule })).status,409)
   assert.equal((await api('', { name:name+'-bad',kind:'guided',rule:{...saved.rule,parts:[]} })).status,422)
   assert.equal((await api('', { name:name+'-bad',kind:'guided',rule:{...saved.rule,rootId:rootId} })).status,422)
   // Unsaved changes must neither overwrite the definition nor persist across reload.
   await panel.getByRole('checkbox', { name: 'Combine authors from multiple parts', exact: true }).uncheck()
   await expect(panel.getByRole('combobox', { name:'Saved rule',exact:true })).toHaveValue('')
   assert.deepEqual((await api()).data.patterns.find(p=>p.id===saved.id).rule,saved.rule)
   await page.reload(); await ready()
   if (await panel.getByRole('combobox', { name: 'Library root', exact: true }).inputValue() !== rootId) {
    await panel.getByRole('combobox', { name: 'Library root', exact: true }).selectOption(rootId)
    await panel.getByRole('button', { name: 'Load sample', exact: true }).click(); await ready()
   }
   await example.selectOption(path)
   await panel.getByRole('combobox', { name:'Saved rule',exact:true }).selectOption(saved.id)
   await expect(live).toHaveText(preview, { useInnerText: true })
   await expect(panel.getByRole('checkbox', { name: 'Combine authors from multiple parts', exact: true })).toBeChecked()
   await expect(panel.getByRole('textbox', { name: 'Custom separator', exact: true })).toHaveValue(';')
   assert.deepEqual(await panel.getByRole('textbox', { name: 'Separator', exact: true }).evaluateAll(xs=>xs.map(x=>x.value)), [' - ',' '])
   await expect(example).toHaveValue(path)
   await panel.getByRole('combobox', { name:'Saved rule',exact:true }).scrollIntoViewIfNeeded()
   await page.screenshot({ animations: 'disabled', path:`${evidence}/${engine}-saved-rule.png` })
   await panel.getByRole('button', { name:'Delete rule',exact:true }).click()
   await panel.getByRole('button', { name:'Cancel',exact:true }).click()
   assert.ok((await api()).data.patterns.some(p=>p.id===saved.id))
   await page.setViewportSize({ width:390,height:844 })
   await expect(page.locator('.app-navigation')).toHaveClass(/app-navigation--closed/)
   await expect.poll(() => page.locator('.app-navigation').evaluate(el => el.getBoundingClientRect().right)).toBeLessThanOrEqual(9)
   await panel.getByRole('combobox', { name:'Saved rule',exact:true }).scrollIntoViewIfNeeded()
   assert.equal(await panel.evaluate(el=>el.scrollWidth>el.clientWidth+1),false)
   await page.screenshot({ animations: 'disabled', path:`${evidence}/${engine}-mobile.png` })
   await panel.getByRole('button', { name:'Delete rule',exact:true }).click()
   await panel.getByRole('button', { name:'Confirm deletion',exact:true }).click()
   await expect(panel.getByText('Saved rule deleted. The current preview is unchanged.',{exact:true})).toBeVisible()
   await expect(live).toHaveText(preview, { useInnerText: true })
   assert.equal((await api()).data.patterns.some(p=>p.id===saved.id),false); owned.delete(saved.id)
   await panel.getByRole('combobox', { name:'Rule editor',exact:true }).selectOption('pattern')
   await expect(panel.locator('.library-inference-templates')).toHaveAttribute('aria-busy','false')
   await panel.getByRole('combobox', { name:'Pattern',exact:true }).selectOption('preset-title')
   await expect(panel.getByRole('textbox', { name:'Advanced pattern',exact:true })).toHaveValue('%folders%/%title%.%extension%')
   assert.deepEqual((await sample()).items,original.items)
   assert.deepEqual(errors,[]);assert.deepEqual(unexpectedWrites,[])
   writeFileSync(`${evidence}/${engine}.json`,JSON.stringify({status:'PASS',sampleRoot:rootId,sampleBooks:original.items.length,checks:['UI nested split creation','author custom separator and name formatting','complete definition save','duplicate and invalid rejection','unsaved draft isolation','reload persistence','immediate selection and live preview','split input restoration','scope preserved','delete cancellation','confirmed deletion keeps preview','mobile overflow','advanced preset regression','sample metadata unchanged','no unexpected writes','no page errors']},null,2)+'\n')
   console.log(`${engine}_guided_rules=PASS sample_books=${original.items.length}`)
  } finally {
   for(const id of owned) { const deleted=await api(`/${id}/delete`,{});assert.equal(deleted.status,200) }
   assert.deepEqual((await api()).data,before,'Existing user definitions must remain unchanged')
   await browser.close();browser=null
  }
 }
} finally {
 await browser?.close()
 for(const row of occ('user:auth-tokens:list',user).split(/\r?\n/).filter(l=>l.includes(tokenName))) { const id=row.match(/\|\s*(\d+)\s*\|/)?.[1];assert.ok(id);occ('user:auth-tokens:delete',user,id) }
 assert.equal(occ('user:auth-tokens:list',user).includes(tokenName),false)
 console.log('temporary_token_removed=true')
}
