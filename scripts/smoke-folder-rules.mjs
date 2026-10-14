import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
import { newPart, newRule } from '../src/path-inference-rule.js'
const upstream=process.env.NC_URL || 'http://100.123.149.120:8088', user=process.env.NC_USER || 'uwe', container=process.env.NC_CONTAINER || 'nextcloud'
const evidence=process.env.EVIDENCE_DIR || '/tmp/library-alpha14-evidence'
mkdirSync(evidence,{recursive:true})
const tokenName=`library-folder-smoke-${Date.now()}`
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
let browser
try {
 const output=createTemporaryAppPassword(container,user,tokenName)
 const token=output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]) {
  browser=await launcher.launch()
  const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[],unexpectedWrites=[],definitions=new Set(),assignments=new Set()
  page.on('pageerror',error=>errors.push(error.message))
  page.on('request',r=>{if(r.url().includes('/apps/library/')&&!['GET','HEAD'].includes(r.method())&&!/\/api\/inference\/(patterns|folders)(\/|$)/.test(new URL(r.url()).pathname))unexpectedWrites.push(r.url())})
  await page.goto(`${upstream}/apps/library/?infer=1`)
  const panel=page.locator('.library-inference'), manager=panel.locator('.library-inference-folder-rules'),live=panel.getByRole('complementary',{name:'Live preview',exact:true})
  const ready=async()=>expect(panel).toHaveAttribute('aria-busy','false',{timeout:30000})
  const rulesReady=async()=>expect(manager).toHaveAttribute('aria-busy','false',{timeout:10000})
  await ready()
  const api=async(path,body)=>page.evaluate(async({path,body})=>{
   const r=await fetch(`/apps/library/api/inference/${path}`,{method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',requesttoken:document.head.dataset.requesttoken || window.OC.requestToken},...(body===undefined?{}:{body:JSON.stringify(body)})})
   return{status:r.status,data:await r.json()}
  },{path,body})
  const beforeDefinitions=(await api('patterns')).data
  const rootPicker=panel.getByRole('combobox',{name:'Library root',exact:true})
  const roots=await rootPicker.locator('option').evaluateAll(xs=>xs.map(x=>({value:x.value,label:x.textContent})))
  const sampleRoot=roots.find(r=>r.label==='Path parsing samples');assert.ok(sampleRoot)
  await rootPicker.selectOption(sampleRoot.value);await ready()
  const rootId=sampleRoot.value
  const beforeAssignments=(await api(`folders?rootId=${rootId}`)).data
  const sample=async()=>page.evaluate(async rootId=>(await fetch(`/apps/library/api/inference/sample?rootId=${rootId}`)).json(),rootId)
  const original=await sample()
  const scope=panel.getByRole('textbox',{name:'Subfolder relative to this root',exact:true})
  const loadFolder=async(folder)=>{await scope.fill(folder);await panel.getByRole('button',{name:'Load sample',exact:true}).click();await ready();await rulesReady()}
  const createDefinition=async(suffix,definition)=>{const r=await api('patterns',{name:`${tokenName}-${engine}-${suffix}`,...definition});assert.equal(r.status,201);definitions.add(r.data.saved.id);return r.data.saved}
  const attach=async(definition)=>{
   await manager.getByRole('combobox',{name:'Saved rule or pattern',exact:true}).selectOption(definition.id)
   const wait=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/inference/folders')&&r.request().method()==='POST')
   await manager.getByRole('button',{name:'Assign to this folder',exact:true}).click()
   const response=await wait;assert.equal(response.status(),201);const id=(await response.json()).id;assignments.add(id);await rulesReady();return id
  }
  const remove=async(id,name)=>{
   const row=manager.locator('.library-inference-folder-entry').filter({has:page.getByText(name,{exact:true})})
   await row.getByRole('button',{name:'Remove assignment',exact:true}).click()
   await row.getByRole('button',{name:'Confirm removal',exact:true}).click()
   await expect(row).toHaveCount(0);assignments.delete(id)
  }
  try {
   const broad=await createDefinition('fallback',{pattern:'%folders%/%title%.%extension%'})
   const author=await createDefinition('author-title',{pattern:'%author% - %title%.%extension%'})
   const conflict=await createDefinition('reverse',{pattern:'%title% - %author%.%extension%'})
   const seriesRule=newRule('Orchard Notes/01_Soil Basics_Ada Quill.epub')
   seriesRule.parts[0].field='series'
   seriesRule.parts[1].split={delimiter:'_',occurrence:'every',children:[newPart('seriesNumber'),newPart('title'),newPart('author')]}
   const series=await createDefinition('guided-series',{kind:'guided',rule:seriesRule})
   await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('folders');await rulesReady()
   const rootAssignment=await attach(broad)
   await expect(live.locator('dd strong')).toHaveText(['Ada Quill - A Quiet Orchard'])
   await loadFolder('01 Author - Title')
   const childAssignment=await attach(author)
   await expect(live.locator('dd strong')).toHaveText(['Ada Quill','A Quiet Orchard'])
   await expect(live).toContainText(author.name)
   // Require loading a changed folder before creating an assignment.
   await scope.fill('02 Author folders')
   await expect(manager.getByRole('button',{name:'Assign to this folder',exact:true})).toBeDisabled()
   await expect(manager.getByRole('status')).toHaveText('Load the folder before assigning a rule.')
   await scope.fill('01 Author - Title')
   const bad=await api('folders',{rootId,folder:'../',recursive:true,definitionId:broad.id});assert.equal(bad.status,422)
   assert.equal((await api('folders',{rootId:2147483647,folder:'',recursive:true,definitionId:broad.id})).status,404)
   assert.equal((await api('folders',{rootId,folder:'01 Author - Title',recursive:true,definitionId:'b'.repeat(32)})).status,404)
   assert.equal((await api('folders',{rootId,folder:'01 Author - Title',recursive:true,definitionId:author.id})).status,409)
   const conflictAssignment=await attach(conflict)
   const loaded=(await api(`folders?rootId=${rootId}`)).data.assignments.find(a=>a.id===conflictAssignment)
   assert.equal(loaded.folder,'01 Author - Title')
   await expect(live.locator('.library-inference-rule-conflict')).toHaveCount(2)
   await expect(live.locator('dt')).toHaveCount(0)
   await expect(live).toContainText('Ambiguous matches')
   await live.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-conflicts.png`})
   const row=manager.locator('.library-inference-folder-entry').filter({has:page.getByText(conflict.name,{exact:true})})
   await row.getByRole('button',{name:'Remove assignment',exact:true}).click();await row.getByRole('button',{name:'Cancel',exact:true}).click()
   assert.ok((await api(`folders?rootId=${rootId}`)).data.assignments.some(a=>a.id===conflictAssignment))
   await remove(conflictAssignment,conflict.name)
   await expect(live.locator('dd strong')).toHaveText(['Ada Quill','A Quiet Orchard'])
   await loadFolder('04 Series')
   const seriesAssignment=await attach(series)
   await expect(live.locator('dd strong')).toHaveText(['Orchard Notes','01','Soil Basics','Ada Quill'])
   await panel.getByRole('combobox',{name:'Example path',exact:true}).selectOption('Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub')
   await expect(live.locator('dd strong')).toHaveText(['Orchard Notes','2.5','Autumn Appendix','Ada Quill'])
   await live.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-guided-series.png`})
   // Deleting a saved definition does not change its assigned fixed copy.
   assert.equal((await api(`patterns/${series.id}/delete`,{})).status,200);definitions.delete(series.id)
   await page.reload();await ready();await rootPicker.selectOption(rootId);await ready()
   await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('folders');await rulesReady()
   await panel.getByRole('combobox',{name:'Example path',exact:true}).selectOption('04 Series/Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub')
   await expect(live.locator('dd strong')).toHaveText(['Orchard Notes','2.5','Autumn Appendix','Ada Quill'])
   // An unmatched child rule falls back; this file uses underscores, not " - ".
   await loadFolder('06 Edge cases');const edgeAssignment=await attach(author)
   await panel.getByRole('combobox',{name:'Example path',exact:true}).selectOption('Ada Quill__Unexpected Separator.epub')
   await expect(live.locator('dd strong')).toHaveText(['Ada Quill__Unexpected Separator'])
   await live.getByText('Rule evaluation',{exact:true}).click()
   await expect(live.locator('details')).toContainText(author.name);await expect(live.locator('details')).toContainText(broad.name)
   await panel.getByRole('combobox',{name:'Example path',exact:true}).selectOption('A - B - C.epub')
   await expect(live).toContainText('Ambiguous matches');await expect(live.locator('dt')).toHaveCount(0)
   // Root switching must not reuse rules from the previous root.
   const otherRoot=roots.find(r=>r.value!==rootId);assert.ok(otherRoot)
   await rootPicker.selectOption(otherRoot.value);await ready();await rulesReady()
   await expect(manager.locator('.library-inference-folder-list')).not.toContainText(broad.name)
   await rootPicker.selectOption(rootId);await ready();await rulesReady()
   await panel.getByRole('combobox',{name:'Example path',exact:true}).selectOption('01 Author - Title/Ada Quill - A Quiet Orchard.epub')
   await expect(live.locator('dd strong')).toHaveText(['Ada Quill','A Quiet Orchard'])
   await manager.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-folder-rules.png`})
   await page.setViewportSize({width:390,height:844})
   await expect(page.locator('.app-navigation')).toHaveClass(/app-navigation--closed/)
   await expect.poll(()=>page.locator('.app-navigation').evaluate(el=>el.getBoundingClientRect().right)).toBeLessThanOrEqual(9)
   await manager.getByRole('combobox',{name:'Saved rule or pattern',exact:true}).scrollIntoViewIfNeeded()
   assert.equal(await panel.evaluate(el=>el.scrollWidth>el.clientWidth+1),false)
   await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-mobile.png`})
   assert.deepEqual((await sample()).items,original.items)
   assert.deepEqual(errors,[]);assert.deepEqual(unexpectedWrites,[])
   writeFileSync(`${evidence}/${engine}.json`,JSON.stringify({status:'PASS',sampleRoot:rootId,sampleBooks:original.items.length,checks:['UI assignment creation','root fallback','deeper rule precedence','conflicting same-depth proposals','unsubmitted scope blocks assignment','invalid scope and definition rejection','duplicate assignment rejection','cancel removal','confirmed removal','guided series/decimal position','snapshot after definition deletion','page reload persistence','ancestor fallback on unmatched child','ambiguous child blocks fallback','root switching isolation','mobile overflow','sample metadata unchanged','no unrelated Library writes','no uncaught exceptions']},null,2)+'\n')
   console.log(`${engine}_folder_rules=PASS sample_books=${original.items.length}`)
  } finally {
   for(const id of assignments) assert.equal((await api(`folders/${id}/delete`,{})).status,200)
   for(const id of definitions) assert.equal((await api(`patterns/${id}/delete`,{})).status,200)
   assert.deepEqual((await api('patterns')).data,beforeDefinitions)
   assert.deepEqual((await api(`folders?rootId=${rootId}`)).data,beforeAssignments)
   console.log(`${engine}_existing_preferences_unchanged=true`)
   await browser.close();browser=null
  }
 }
} finally {
 await browser?.close()
 for(const row of occ('user:auth-tokens:list',user).split(/\r?\n/).filter(l=>l.includes(tokenName))){const id=row.match(/\|\s*(\d+)\s*\|/)?.[1];assert.ok(id);occ('user:auth-tokens:delete',user,id)}
 assert.equal(occ('user:auth-tokens:list',user).includes(tokenName),false)
 console.log('temporary_token_removed=true')
}
