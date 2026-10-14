import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL || 'http://100.123.149.120:8088', user=process.env.NC_USER || 'uwe', container=process.env.NC_CONTAINER || 'nextcloud'
const evidence=process.env.EVIDENCE_DIR || '/tmp/library-alpha16-evidence'
mkdirSync(evidence,{recursive:true})
const name=`Library metadata smoke ${Date.now()}`, tokenName=name.replaceAll(' ','-')
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
for(const [source,target] of [['./metadata-fields-fixture.php','library-metadata-fields-fixture.php'],['../tests/php/inference_batches_integration.php','library-inference-batches-integration.php']])execFileSync('docker',['cp',new URL(source,import.meta.url).pathname,`${container}:/tmp/${target}`])
const fixture=action=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e',`LIBRARY_SMOKE_USER=${user}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php','/tmp/library-metadata-fields-fixture.php',action],{encoding:'utf8',maxBuffer:5*1024*1024}))
let browser,created=false
const report=[]
try {
 created=true
 const state=fixture('create'),original=fixture('read')
 const output=createTemporaryAppPassword(container,user,tokenName)
 const token=output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]) {
  browser=await launcher.launch()
  const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[];page.setDefaultTimeout(20000)
  page.on('pageerror',e=>errors.push(e.message))
  const panel=page.locator('.library-inference'),approval=panel.locator('.library-inference-apply')
  const ready=async()=>{await expect(panel).toHaveAttribute('aria-busy','false',{timeout:30000});await expect(approval).toHaveAttribute('aria-busy','false')}
  const open=async()=>{await page.goto(`${upstream}/apps/library/?infer=1`);await ready();await panel.getByRole('combobox',{name:'Library root',exact:true}).selectOption(String(state.rootId));await ready();await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern');await panel.getByRole('textbox',{name:'Advanced pattern',exact:true}).fill('%genre%/%series%/%seriesNumber%_%title%.%extension%')}
  const review=async()=>{
   await approval.getByRole('button',{name:'Select empty fields',exact:true}).click()
   await expect(approval.getByRole('button',{name:'Review selected changes (3)',exact:true})).toBeEnabled()
   const response=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/inference/batches')&&r.request().method()==='POST')
   await approval.getByRole('button',{name:'Review selected changes (3)',exact:true}).click()
   const r=await response;assert.equal(r.status(),200);const data=await r.json()
   assert.deepEqual(data.entries[0].changes.map(c=>c.field),['genre','series','seriesNumber'])
   await ready();return data
  }
  await open()
  const noCsrf=await page.evaluate(async()=>{const r=await fetch('/apps/library/api/inference/batches',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json','X-Requested-With':'XMLHttpRequest'},body:JSON.stringify({proposals:[]})});return r.status})
  assert.ok([403,412].includes(noCsrf),'Mutation requires CSRF')
  await expect(approval.locator('input[type=checkbox]')).toHaveCount(4)
  let plan=await review()
  await expect(approval.getByRole('button',{name:'Review selected changes (3)',exact:true})).toBeDisabled()
  await approval.locator('fieldset details > summary').first().click()
  const replaceTitle=approval.locator(`input[value="${state.itemId}:title"]`)
  await replaceTitle.check();await expect(approval.locator('.library-inference-confirm')).toHaveCount(0)
  await replaceTitle.uncheck();plan=await review()
  const confirmed=approval.getByRole('region',{name:'Confirmed change review',exact:true})
  await confirmed.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-review.png`})
  await page.setViewportSize({width:390,height:844});await expect.poll(()=>page.locator('.app-navigation').evaluate(el=>el.getBoundingClientRect().right)).toBeLessThanOrEqual(9)
  await confirmed.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-review-mobile.png`})
  assert.ok(await confirmed.evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Review has no horizontal overflow')
  await page.setViewportSize({width:1440,height:1000})
  const apply=page.waitForResponse(r=>r.url().endsWith(`/batches/${plan.id}/apply`))
  await approval.getByRole('button',{name:'Apply reviewed changes',exact:true}).click();assert.equal((await apply).status(),200);await ready()
  const applied=fixture('read');assert.equal(applied.series,'Orchard Notes');assert.equal(applied.seriesNumber,'01');assert.equal(applied.genre,'Science fiction');assert.equal(applied.title,original.title)
  // Reopening the page proves durable history, independent of a component's draft state.
  await page.reload();await ready()
  await approval.locator('.library-inference-history > summary').click()
  await approval.locator('.library-inference-history button').filter({hasText:'Applied'}).first().click();await ready()
  await approval.getByRole('button',{name:'Undo this batch',exact:true}).click()
  const undo=page.waitForResponse(r=>r.url().endsWith(`/batches/${plan.id}/undo`))
  await approval.getByRole('button',{name:'Confirm undo',exact:true}).click();assert.equal((await undo).status(),200);await ready()
  const restored=fixture('read');for(const key of ['title','series','seriesNumber','genre','fieldSources','fieldValues','metadataSource','userEdited'])assert.deepEqual(restored[key],original[key],key)
  await approval.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-undone.png`})
  if(engine==='firefox') {
   await open();await review();fixture('intervene')
   const stale=page.waitForResponse(r=>r.url().endsWith('/apply')&&r.request().method()==='POST')
   await approval.getByRole('button',{name:'Apply reviewed changes',exact:true}).click();assert.equal((await stale).status(),409)
   await expect(approval.getByRole('alert')).toContainText('stale or expired')
   await expect(approval.getByRole('button',{name:'Apply reviewed changes',exact:true})).toBeDisabled()
   await expect(approval.getByRole('button',{name:'Load sample',exact:true})).toBeVisible()
   assert.equal(fixture('read').genre,'Later manual edit');assert.equal(fixture('read').series,'')
   await approval.getByRole('alert').scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/firefox-stale-review.png`})
  }
  assert.deepEqual(errors,[]);report.push({engine,passed:true,csrf:true,selectionInvalidation:true,explicitReplacementSelection:true,apply:true,reloadHistory:true,undo:true,mobile:true,staleRejection:engine==='firefox'?'passed':'not-run'})
  await browser.close();browser=null
 }
 const integration=fixture('integration');assert.equal(integration.integration,true)
 writeFileSync(`${evidence}/inference-apply-results.json`,JSON.stringify({report,integration},null,2))
} finally {
 if(browser)await browser.close()
 if(created)assert.equal(fixture('cleanup').cleaned,true)
 const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'))
 for(const t of Object.values(tokens))if(t.name===tokenName)occ('user:auth-tokens:delete',user,String(t.id))
}
console.log(`inference_apply_smoke_ok=true browsers=${report.length} integration=true fixture_removed=true token_removed=true`)
