import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL || 'http://100.123.149.120:8088', user=process.env.NC_USER || 'uwe', container=process.env.NC_CONTAINER || 'nextcloud'
const evidence=process.env.EVIDENCE_DIR || '/tmp/library-alpha15-evidence'
mkdirSync(evidence,{recursive:true})
const name=`Library metadata smoke ${Date.now()}`, tokenName=name.replaceAll(' ','-')
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
execFileSync('docker',['cp',new URL('./metadata-fields-fixture.php',import.meta.url).pathname,`${container}:/tmp/library-metadata-fields-fixture.php`])
const fixture=action=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e',`LIBRARY_SMOKE_USER=${user}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php','/tmp/library-metadata-fields-fixture.php',action],{encoding:'utf8',maxBuffer:5*1024*1024}))
let browser,created=false
const report=[]
try {
 created=true
 const state=fixture('create')
 const original=fixture('read')
 const output=createTemporaryAppPassword(container,user,tokenName)
 const token=output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]) {
  browser=await launcher.launch()
  const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[]
  page.on('pageerror',e=>errors.push(e.message))
  const detail=`${upstream}/apps/library/items/${state.itemId}`
  await page.goto(detail)
  const form=page.locator('.library-detail-edit-form')
  for(const [field,value] of Object.entries({series:'Orchard Notes',seriesNumber:'01',genre:'Science fiction'})) await form.locator(`[name="${field}"]`).fill(value)
  await Promise.all([page.waitForURL(u=>u.searchParams.get('metadataSaved')==='1'),form.getByRole('button',{name:'Save metadata',exact:true}).click()])
  for(const [field,value] of Object.entries({series:'Orchard Notes',seriesNumber:'01',genre:'Science fiction'})) await expect(form.locator(`[name="${field}"]`)).toHaveValue(value)
  let current=fixture('rescan')
  assert.equal(current.seriesNumber,'01');assert.equal(current.genre,'Science fiction');assert.equal(current.publisher,original.publisher);assert.equal(current.publication,original.publication)
  // Older clients omit the new keys. Their updates must preserve them.
  const legacy=await page.evaluate(async()=>{const f=document.querySelector('.library-detail-edit-form'),body=new FormData(f);for(const k of ['series','seriesNumber','genre'])body.delete(k);body.set('metadataAutosave','1');const r=await fetch(f.action,{method:'POST',body});return{status:r.status,data:await r.json()}})
  assert.equal(legacy.status,200);assert.equal(fixture('read').seriesNumber,'01')
  const bad=await page.evaluate(async()=>{const f=document.querySelector('.library-detail-edit-form'),body=new FormData(f);body.set('seriesNumber','x'.repeat(65));body.set('metadataAutosave','1');const r=await fetch(f.action,{method:'POST',body});return r.status})
  assert.equal(bad,422);assert.equal(fixture('read').seriesNumber,'01')
  await page.goto(`${upstream}/apps/library/?q=${encodeURIComponent(name)}`)
  await page.locator('.library-cover-title-button').filter({hasText:name}).click()
  await page.getByRole('button',{name:'Metadata',exact:true}).click()
  const sidebar=page.locator('.library-sidebar-metadata-form')
  await expect(sidebar.locator('[name="series"]')).toHaveValue('Orchard Notes')
  await expect(sidebar.locator('[name="seriesNumber"]')).toHaveValue('01')
  assert.ok(await sidebar.locator('[name="series"]').evaluate(el=>el.getBoundingClientRect().width >= el.closest('form').getBoundingClientRect().width * 0.9),'Sidebar input uses available width')
  await sidebar.locator('[name="seriesNumber"]').fill('2.5')
  await sidebar.locator('[name="genre"]').fill('')
  const save=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith(`/items/${state.itemId}`)&&r.request().method()==='POST')
  await sidebar.getByRole('button',{name:'Save metadata',exact:true}).click()
  assert.equal((await save).status(),200)
  current=fixture('rescan');assert.equal(current.seriesNumber,'2.5');assert.equal(current.genre,'');assert.equal(current.series,'Orchard Notes')
  await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-metadata-sidebar.png`})
  await page.setViewportSize({width:390,height:844})
  await sidebar.locator('[name="series"]').scrollIntoViewIfNeeded()
  assert.ok(await page.locator('.library-native-item-sidebar').evaluate(el=>{const r=el.getBoundingClientRect();return r.left>=0&&r.right<=innerWidth}),'Mobile sidebar fits visible content')
  await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-sidebar-mobile.png`})
  await page.setViewportSize({width:1440,height:1000})
  const api=async(path,body)=>page.evaluate(async({path,body})=>{const r=await fetch(`/apps/library/${path}`,{method:body===undefined?'GET':'POST',headers:{Accept:'application/json',requesttoken:document.head.dataset.requesttoken || window.OC.requestToken},...(body===undefined?{}:{body:new URLSearchParams(body)})});return{status:r.status,data:await r.json()}},{path,body})
  const sample=(await api(`api/inference/sample?rootId=${state.rootId}`)).data
  assert.equal(sample.items.length,1);assert.equal(sample.items[0].current.series,'Orchard Notes');assert.equal(sample.items[0].current.seriesNumber,'2.5');assert.equal(sample.items[0].current.genre,null)
  const exported=(await api('export/metadata')).data.items.find(i=>i.id===state.itemId)
  assert.equal(exported.series,'Orchard Notes');assert.equal(exported.seriesNumber,'2.5');assert.equal(exported.genre,'')
  const payload={metadataJson:JSON.stringify({cachedPath:exported.cachedPath,genre:'Fantasy'})}
  const preview=await api('import/metadata/preview',payload);assert.equal(preview.status,200);assert.equal(preview.data.changedFields,1)
  const applied=await api('import/metadata/apply',payload);assert.equal(applied.status,200);assert.equal(applied.data.appliedItems,1)
  current=fixture('read');assert.equal(current.genre,'Fantasy');assert.equal(current.seriesNumber,'2.5');assert.equal(current.title,original.title);assert.equal(current.publisher,original.publisher)
  const restored=await api('import/metadata/apply',{metadataJson:JSON.stringify(exported)});assert.equal(restored.data.appliedItems,1)
  current=fixture('read');assert.equal(current.genre,'');assert.equal(current.seriesNumber,'2.5')
  await page.goto(detail)
  await form.locator('[name="seriesNumber"]').fill('Volume II')
  await Promise.all([page.waitForURL(u=>u.searchParams.get('metadataSaved')==='1'),form.getByRole('button',{name:'Save metadata',exact:true}).click()])
  assert.equal(fixture('rescan').seriesNumber,'Volume II')
  await form.locator('[name="seriesNumber"]').scrollIntoViewIfNeeded()
  await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-metadata-maintenance.png`})
  await page.setViewportSize({width:390,height:844})
  await form.locator('[name="seriesNumber"]').scrollIntoViewIfNeeded()
  await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-metadata-mobile.png`})
  assert.deepEqual(errors,[])
  report.push({engine,passed:true,maintenance:true,sidebar:true,rescan:true,legacyClient:true,invalidValueRejected:true,partialImport:true,exportRoundTrip:true,textNumbers:['01','2.5','Volume II'],sourceUnchanged:true})
  await browser.close();browser=null
 }
} finally {
 if(browser)await browser.close()
 if(created)assert.equal(fixture('cleanup').cleaned,true)
 const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'))
 for(const t of Object.values(tokens))if(t.name===tokenName)occ('user:auth-tokens:delete',user,String(t.id))
}
writeFileSync(`${evidence}/metadata-fields-results.json`,JSON.stringify({report,fixtureRemoved:true,temporaryTokenRemoved:true},null,2))
console.log(`metadata_fields_smoke_ok=true browsers=${report.length} fixture_removed=true`)
