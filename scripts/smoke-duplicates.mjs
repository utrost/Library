import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync,writeFileSync } from 'node:fs'
import { chromium,firefox,expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const evidence=process.env.EVIDENCE_DIR||'/tmp/library-alpha19-evidence/browser';mkdirSync(evidence,{recursive:true})
const name=`Library duplicates smoke ${Date.now()}`,tokenName=name.replaceAll(' ','-')
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:5*1024*1024})
execFileSync('docker',['cp',new URL('./duplicate-books-fixture.php',import.meta.url).pathname,`${container}:/tmp/library-duplicate-books-fixture.php`])
const fixture=action=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e',`LIBRARY_SMOKE_USER=${user}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php','/tmp/library-duplicate-books-fixture.php',action],{encoding:'utf8',maxBuffer:5*1024*1024}))
let browser,created=false;const report=[]
try {
 created=true;const state=fixture('create')
 const output=createTemporaryAppPassword(container,user,tokenName),token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]) {
  browser=await launcher.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[];page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message))
  const panel=page.locator('.library-duplicates');const ready=()=>expect(panel).toHaveAttribute('aria-busy','false')
  await page.goto(`${upstream}/apps/library/?duplicates=1`);await ready();await expect(panel.getByRole('heading',{name:'Possible duplicates',exact:true})).toBeVisible()
  await panel.getByRole('combobox',{name:'Library root',exact:true}).selectOption(String(state.rootId));await expect(panel.getByRole('checkbox',{name:'Compare file contents',exact:true})).not.toBeChecked();await panel.getByRole('checkbox',{name:'Compare file contents',exact:true}).check()
  const start=async()=>{const pending=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/api/duplicates')&&r.request().method()==='POST');await panel.getByRole('button',{name:'Find possible duplicates',exact:true}).click();const r=await pending;assert.equal(r.status(),200);return r.json()}
  const cancelled=await start();assert.equal(cancelled.total,14);await ready();await panel.getByRole('button',{name:'Cancel scan',exact:true}).click();await ready();await expect(panel).toContainText('Duplicate scan cancelled');await panel.getByRole('button',{name:'Discard scan',exact:true}).click();await ready()
  const scan=await start();await ready();await page.goto('about:blank')
  const read=async()=>{const r=await context.request.get(`${upstream}/apps/library/api/duplicates/${scan.id}?filter=all`,{headers:{authorization}});assert.equal(r.status(),200);return r.json()}
  await expect.poll(async()=>{
   const current=await read();if(current.status!=='running')return current.status
   const queued=JSON.parse(occ('background-job:list','--class','OCA\\Library\\BackgroundJob\\DuplicateJob','--output=json').replace(/"id"\s*:\s*(\d+)/g,'"id":"$1"'))
   const entry=queued.find(e=>{const a=typeof e.argument==='string'?JSON.parse(e.argument):e.argument;return a?.id===scan.id&&a?.userId===user})
   if(entry){try{occ('background-job:execute',String(entry.id),'--force-execute')}catch(e){if(!String(e.stdout).includes('could not be found in the database'))throw e}}
   return (await read()).status
  },{timeout:120000,intervals:[500,1000]}).toBe('completed')
  const complete=await read();assert.equal(complete.processed,14);assert.ok(complete.matches>10);assert.equal(complete.hashSkipped,0)
  await page.goto(`${upstream}/apps/library/?duplicates=1`);await ready();await panel.getByRole('combobox',{name:'Saved duplicate scans',exact:true}).selectOption(scan.id);await ready()
  await expect(panel.getByRole('combobox',{name:'Library root',exact:true})).toHaveValue(String(state.rootId));await expect(panel.getByRole('checkbox',{name:'Compare file contents',exact:true})).toBeChecked()
  await panel.getByRole('heading',{level:1}).scrollIntoViewIfNeeded();await page.screenshot({path:`${evidence}/${engine}-overview.png`,animations:'disabled'})
  const cards=panel.locator('.library-duplicate-pair');await expect(cards).toHaveCount(10)
  await panel.getByRole('button',{name:'Next page',exact:true}).click();await ready();assert.ok(await cards.count()>0);await panel.getByRole('button',{name:'Previous page',exact:true}).click();await ready()
  await cards.first().evaluate(el=>{el.style.scrollMarginTop='70px';el.scrollIntoView({block:'start'})});await page.screenshot({path:`${evidence}/${engine}-comparisons.png`,animations:'disabled'})
  assert.ok(await cards.first().locator('dt').evaluateAll(labels=>labels.every(el=>el.scrollWidth<=el.clientWidth+1)), 'Metadata labels fit their columns')
  const firstId=await cards.first().getAttribute('data-pair-id');await cards.first().getByRole('button',{name:'Prefer this copy',exact:true}).first().click();await ready();await expect(panel).toContainText('Review saved.')
  await panel.getByRole('combobox',{name:'Show comparisons',exact:true}).selectOption('preferred');await ready();await expect(cards).toHaveCount(1);await expect(cards.first()).toHaveAttribute('data-pair-id',firstId);await expect(cards.first().locator('.library-duplicate-preferred')).toHaveCount(1)
  await page.reload();await ready();await panel.getByRole('combobox',{name:'Saved duplicate scans',exact:true}).selectOption(scan.id);await ready();await panel.getByRole('combobox',{name:'Show comparisons',exact:true}).selectOption('preferred');await ready();await expect(cards).toHaveCount(1)
  await page.setViewportSize({width:390,height:844});await cards.first().evaluate(el=>{el.style.scrollMarginTop='70px';el.scrollIntoView({block:'start'})});await page.screenshot({path:`${evidence}/${engine}-preferred-mobile.png`,animations:'disabled'});assert.ok(await cards.first().locator('dt').evaluateAll(labels=>labels.every(el=>el.scrollWidth<=el.clientWidth+1)), 'Mobile labels fit');assert.ok(await panel.evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Mobile panel fits');assert.ok(await cards.first().evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Mobile comparison fits')
  await page.setViewportSize({width:1440,height:1000});await cards.first().getByRole('button',{name:'Keep both',exact:true}).click();await ready();await panel.getByRole('combobox',{name:'Show comparisons',exact:true}).selectOption('keep');await ready();await expect(cards).toHaveCount(1)
  await cards.first().getByRole('button',{name:'Dismiss match',exact:true}).click();await ready();await panel.getByRole('combobox',{name:'Show comparisons',exact:true}).selectOption('dismissed');await ready();await expect(cards).toHaveCount(1)
  await cards.first().getByRole('button',{name:'Reset review decision',exact:true}).click();await ready();await expect(cards).toHaveCount(0)
  const denied=await context.request.post(`${upstream}/apps/library/api/duplicates`,{headers:{authorization,requesttoken:'invalid'},data:{rootId:state.rootId,contents:false}});assert.equal(denied.status(),412)
  assert.equal(fixture('verify').unchanged,true);assert.deepEqual(errors,[])
  await panel.getByRole('button',{name:'Discard scan',exact:true}).click();await ready()
  report.push({engine,passed:true,books:14,matches:complete.matches,cancel:true,actualBackgroundJobs:true,reopen:true,pages:true,preferred:true,keepBoth:true,dismiss:true,reset:true,reloadPersistence:true,mobileFits:true,csrf:true,filesAndMetadataUnchanged:true,pageErrors:errors})
  await browser.close();browser=null
 }
 writeFileSync(`${evidence}/duplicates-results.json`,JSON.stringify({report},null,2));console.log(JSON.stringify({report}))
}finally{
 if(browser)await browser.close()
 if(created)assert.equal(fixture('cleanup').cleaned,true)
 const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'));for(const entry of tokens.filter(t=>t.name===tokenName))occ('user:auth-tokens:delete',user,String(entry.id))
}
