import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const evidence=process.env.EVIDENCE_DIR||'/tmp/library-alpha18-evidence/browser'
mkdirSync(evidence,{recursive:true})
const name=`Library metadata smoke ${Date.now()}`,tokenName=name.replaceAll(' ','-')
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:5*1024*1024})
execFileSync('docker',['cp',new URL('./metadata-fields-fixture.php',import.meta.url).pathname,`${container}:/tmp/library-metadata-fields-fixture.php`])
const fixture=action=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e',`LIBRARY_SMOKE_USER=${user}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php','/tmp/library-metadata-fields-fixture.php',action],{encoding:'utf8',maxBuffer:5*1024*1024}))
const report=[];let browser,created=false
try {
 created=true;const state=fixture('create');assert.equal(fixture('expand').expanded,83)
 const output=createTemporaryAppPassword(container,user,tokenName)
 const token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]) {
  browser=await launcher.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[];page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message))
  const panel=page.locator('.library-inference'),analysis=panel.locator('.library-inference-analysis'),approval=analysis.locator('.library-inference-apply')
  const ready=async()=>{await expect(panel).toHaveAttribute('aria-busy','false');await expect(analysis).toHaveAttribute('aria-busy','false')}
  const selectRoot=async()=>{await ready();await panel.getByRole('combobox',{name:'Library root',exact:true}).selectOption(String(state.rootId));await ready()}
  await page.goto(`${upstream}/apps/library/?infer=1`);await selectRoot()
  await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern')
  await panel.getByRole('textbox',{name:'Advanced pattern',exact:true}).fill('%folders%/%seriesNumber%_%title%.%extension%')
  const start=async()=>{const pending=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/inference/analyses')&&r.request().method()==='POST');await analysis.getByRole('button',{name:'Analyse whole folder',exact:true}).click();const response=await pending;assert.equal(response.status(),200);return response.json()}
  const cancelled=await start();assert.equal(cancelled.total,83)
  await analysis.getByRole('button',{name:'Cancel analysis',exact:true}).click();await ready();await expect(analysis.getByRole('status').first()).toContainText('Analysis cancelled')
  assert.equal(fixture('read').seriesNumber,'')
  await analysis.getByRole('button',{name:'Discard analysis',exact:true}).click();await ready()
  const job=await start();const csrf=await page.locator('#library-vue-root').getAttribute('data-request-token')
  await page.goto('about:blank')
  const readJob=async()=>{const response=await context.request.get(`${upstream}/apps/library/api/inference/analyses/${job.id}`,{headers:{authorization}});assert.equal(response.status(),200);return response.json()}
  // Execute real queued jobs after leaving the UI, restricted to this owned analysis.
  await expect.poll(async()=>{
   const current=await readJob();if(current.status!=='running')return current.status
   const queued=JSON.parse(occ('background-job:list','--class','OCA\\Library\\BackgroundJob\\InferenceAnalysisJob','--output=json').replace(/"id"\s*:\s*(\d+)/g,'"id":"$1"'))
   const entry=queued.find(entry=>{const argument=typeof entry.argument==='string'?JSON.parse(entry.argument):entry.argument;return argument?.id===job.id&&argument?.userId===user})
   if(entry) {
    try {occ('background-job:execute',String(entry.id),'--force-execute')}
    catch(e){if(!String(e.stdout).includes('could not be found in the database'))throw e} // Normal race with Nextcloud's live worker.
   }
   return (await readJob()).status
  },{timeout:120000,intervals:[500,1000]}).toBe('completed')
  const complete=await readJob();assert.equal(complete.status,'completed');assert.equal(complete.processed,83)
  await page.goto(`${upstream}/apps/library/?infer=1`);await selectRoot()
  await analysis.getByRole('combobox',{name:'Saved analyses',exact:true}).selectOption(job.id);await ready()
  await expect(analysis.getByRole('status').first()).toContainText('Analysis complete · 83/83')
  await expect(analysis.locator('.library-analysis-results > details.library-inference-result')).toHaveCount(40)
  await analysis.locator('h2').first().scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-complete.png`})
  await analysis.getByRole('combobox',{name:'Show results',exact:true}).selectOption('unmatched');await ready();await expect(analysis.locator('.library-analysis-results > details.library-inference-result')).toHaveCount(0)
  await analysis.getByRole('combobox',{name:'Show results',exact:true}).selectOption('all');await ready()
  await expect(approval).toHaveAttribute('aria-busy','false')
  await approval.getByRole('button',{name:'Select empty fields',exact:true}).click()
  assert.equal(await approval.locator('input:checked').count(),40)
  const pending=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/inference/batches')&&r.request().method()==='POST')
  await approval.getByRole('button',{name:'Review selected changes (40)',exact:true}).click()
  const reviewed=await pending;assert.equal(reviewed.status(),200);const plan=await reviewed.json();assert.equal(plan.entries.length,40)
  assert.equal(reviewed.request().postDataJSON().context,JSON.stringify({analysisId:job.id}))
  await approval.locator('.library-inference-confirm').scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-review.png`})
  await page.setViewportSize({width:390,height:844});await approval.locator('.library-inference-confirm').scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-review-mobile.png`})
  assert.ok(await analysis.evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Mobile analysis fits')
  await page.setViewportSize({width:1440,height:1000})
  await approval.getByRole('button',{name:'Apply reviewed changes',exact:true}).click();await ready();await expect(approval).toHaveAttribute('aria-busy','false')
  assert.equal(fixture('read').seriesNumber,'01')
  // Third page proves the UI can reach the final three books beyond the sample.
  await analysis.getByRole('navigation',{name:'Analysis pages',exact:true}).getByRole('button',{name:'Next page',exact:true}).click();await ready()
  await expect(analysis.locator('.library-analysis-results > details.library-inference-result')).toHaveCount(40)
  await analysis.getByRole('navigation',{name:'Analysis pages',exact:true}).getByRole('button',{name:'Next page',exact:true}).click();await ready()
  await expect(analysis.locator('.library-analysis-results > details.library-inference-result')).toHaveCount(3)
  await expect(analysis.getByRole('navigation',{name:'Analysis pages',exact:true}).getByRole('button',{name:'Next page',exact:true})).toBeDisabled()
  // Reopen the exact applied batch from durable history and undo it.
  await approval.locator('.library-inference-history > summary').click()
  await approval.locator('.library-inference-history button').filter({hasText:'Applied'}).first().click();await expect(approval).toHaveAttribute('aria-busy','false')
  await approval.getByRole('button',{name:'Undo this batch',exact:true}).click()
  await approval.getByRole('button',{name:'Confirm undo',exact:true}).click();await ready();await expect(approval).toHaveAttribute('aria-busy','false')
  assert.equal(fixture('read').seriesNumber,'')
  // Invalid CSRF cannot enqueue an analysis.
  const denied=await context.request.post(`${upstream}/apps/library/api/inference/analyses`,{headers:{authorization,requesttoken:'invalid'},data:{definition:{rootId:state.rootId,folder:'',recursive:true,mode:'pattern',pattern:'%title%.epub'}}});assert.equal(denied.status(),412)
  assert.ok(csrf);assert.deepEqual(errors,[])
  await analysis.getByRole('button',{name:'Discard analysis',exact:true}).click();await ready()
  report.push({engine,passed:true,books:83,cancel:true,actualBackgroundJobs:true,leaveAndReopen:true,threePages:true,statusFilter:true,explicit40Review:true,apply:true,durableUndo:true,mobileFits:true,csrf:true,sourceUnchanged:true})
  await browser.close();browser=null
 }
 writeFileSync(`${evidence}/analysis-results.json`,JSON.stringify({report},null,2));console.log(JSON.stringify({report}))
}finally {
 if(browser)await browser.close()
 if(created)assert.equal(fixture('cleanup').cleaned,true)
 const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'))
 for(const entry of tokens.filter(t=>t.name===tokenName))occ('user:auth-tokens:delete',user,String(entry.id))
}
