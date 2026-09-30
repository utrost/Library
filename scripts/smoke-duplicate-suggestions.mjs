import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync,writeFileSync } from 'node:fs'
import { chromium,firefox,expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const evidence=process.env.EVIDENCE_DIR||'/tmp/library-alpha20-evidence/browser';mkdirSync(evidence,{recursive:true});const name=`Library duplicates smoke ${Date.now()}`,tokenName=name.replaceAll(' ','-')
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:5*1024*1024})
execFileSync('docker',['cp',new URL('./duplicate-books-fixture.php',import.meta.url).pathname,`${container}:/tmp/library-duplicate-books-fixture.php`])
const fixture=action=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e',`LIBRARY_SMOKE_USER=${user}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php','/tmp/library-duplicate-books-fixture.php',action],{encoding:'utf8',maxBuffer:5*1024*1024}))
let browser,created=false;const report=[]
try{
 created=true;const state=fixture('create'),left=state.files['original.epub'].itemId,right=state.files['alternative.pdf'].itemId
 const output=createTemporaryAppPassword(container,user,tokenName),token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token);const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]){
  browser=await launcher.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}});await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage();page.setDefaultTimeout(30000);const errors=[];page.on('pageerror',e=>errors.push(e.message));const catalogue=`${upstream}/apps/library/?q=${encodeURIComponent(name)}`
  const pending=page.waitForResponse(r=>r.url().endsWith('/api/duplicate-suggestions/lookup'));await page.goto(catalogue);const initial=await pending;assert.equal(initial.status(),200);assert.equal(initial.request().postDataJSON().itemIds.length,14)
  const badge=page.locator(`.library-duplicate-badge[href$="bookId=${left}"]`);await expect(badge).toBeVisible();await page.screenshot({path:`${evidence}/${engine}-badges.png`,animations:'disabled'})
  await page.locator(`#library-card-title-${left} button`).click();const sidebar=page.locator('.library-sidebar-content');await sidebar.getByRole('button',{name:'Metadata',exact:true}).click()
  const hints=sidebar.locator('.library-duplicate-suggestions');await expect(hints.locator(`a[href$="compareId=${right}"]`)).toBeVisible();await page.screenshot({path:`${evidence}/${engine}-metadata.png`,animations:'disabled'})
  await hints.locator(`a[href$="compareId=${right}"]`).click();const panel=page.locator('.library-duplicates'),comparison=panel.locator('.library-suggestion-comparison');await expect(comparison.locator('article')).toHaveCount(2);const checkbox=panel.locator('.library-auto-duplicate-settings input[type=checkbox]');assert.ok(await checkbox.evaluate(el=>el.getBoundingClientRect().width<=24),'Settings checkbox stays compact');await comparison.scrollIntoViewIfNeeded();await page.screenshot({path:`${evidence}/${engine}-compare.png`,animations:'disabled'})
  const suggestionPanel=panel.locator('.library-duplicate-suggestions');await suggestionPanel.getByRole('button',{name:'Dismiss match',exact:true}).click();await expect(suggestionPanel).toContainText('Review saved.');await expect(comparison).toHaveCount(0)
  const csrf=await page.locator('#library-vue-root').getAttribute('data-request-token');const lookup=await context.request.post(`${upstream}/apps/library/api/duplicate-suggestions/lookup`,{headers:{authorization,requesttoken:csrf},data:{itemIds:[left]}});assert.equal(lookup.status(),200);assert.ok(!(await lookup.json()).items[left].matches.some(m=>m.id===right))
  await page.reload();await expect(comparison.locator('article')).toHaveCount(2);await suggestionPanel.getByRole('button',{name:'Reset review decision',exact:true}).click();await expect(suggestionPanel).toContainText('Review saved.')
  await page.setViewportSize({width:390,height:844});await page.goto(catalogue);await expect(badge).toBeVisible();await page.screenshot({path:`${evidence}/${engine}-mobile-badges.png`,animations:'disabled'});assert.ok(await badge.evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Badge fits')
  await page.locator(`#library-card-title-${left} button`).click();await sidebar.getByRole('button',{name:'Metadata',exact:true}).click();await expect(hints.locator(`a[href$="compareId=${right}"]`)).toBeVisible();await page.screenshot({path:`${evidence}/${engine}-mobile-metadata.png`,animations:'disabled'});assert.ok(await hints.evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Metadata suggestions fit')
  const denied=await context.request.post(`${upstream}/apps/library/api/duplicate-suggestions/lookup`,{headers:{authorization,requesttoken:'invalid'},data:{itemIds:[left]}});assert.equal(denied.status(),412)
  assert.equal(fixture('verify').unchanged,true);assert.deepEqual(errors,[]);report.push({engine,passed:true,pageBatch14:true,badges:true,metadataSingleLookup:true,comparison:true,dismissalPersistent:true,reset:true,mobileFits:true,csrf:true,sourceAndMetadataUnchanged:true,pageErrors:errors});await browser.close();browser=null
 }
 writeFileSync(`${evidence}/results.json`,JSON.stringify({report},null,2));console.log(JSON.stringify({report}))
}finally{if(browser)await browser.close();if(created)assert.equal(fixture('cleanup').cleaned,true);const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'));for(const entry of tokens.filter(t=>t.name===tokenName))occ('user:auth-tokens:delete',user,String(entry.id))}
