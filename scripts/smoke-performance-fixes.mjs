// Read-only developer GUI regression: real catalogue, cursor navigation and viewport covers.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync,writeFileSync } from 'node:fs'
import { chromium,firefox,expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const base=process.env.NC_URL||'http://100.123.149.120:8088',container=process.env.NC_CONTAINER||'nextcloud',user=process.env.NC_USER||'uwe',out=process.env.EVIDENCE_DIR||'/tmp/library-performance-fixes-browser'
mkdirSync(out,{recursive:true,mode:0o700});const name='library-performance-gui-'+Date.now()
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
const output=createTemporaryAppPassword(container,user,name),token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
let browser;const results=[]
try{
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]){
  browser=await launcher.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
  const authenticated=await context.request.get(base+'/apps/library/',{headers:{Authorization:'Basic '+Buffer.from(user+':'+token).toString('base64')}});assert.equal(authenticated.status(),200)
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message))
  const catalogue=async(path)=>{const r=await context.request.get(base+'/apps/library/catalogue'+path);assert.equal(r.status(),200);return r.json()}
  const first=await catalogue('?limit=100');assert.ok(first.cataloguePagination.nextUrl.includes('cursor='))
  await page.goto(base+'/apps/library/?limit=100');await expect(page.locator('#library-vue-root')).toHaveAttribute('data-library-version','0.2.0-beta.1');await expect(page.locator('.library-cover-card')).toHaveCount(100)
  const ids=()=>page.locator('.library-cover-card form[action$="/star"]').evaluateAll(forms=>forms.map(f=>Number(f.action.match(/items\/(\d+)\/star/)[1])))
  assert.deepEqual(await ids(),first.items.map(i=>i.id))
  await expect(page.locator('.library-cover-card img').first()).toHaveAttribute('src',/\/cover/)
  await page.waitForTimeout(1200)
  const fetched=await page.locator('.library-cover-card img').evaluateAll(images=>images.filter(i=>i.getAttribute('src')).length);assert.ok(fetched>0&&fetched<100,'Only covers near viewport requested')
  await page.screenshot({path:out+'/'+engine+'-catalogue.png'})
  const next=await catalogue(first.cataloguePagination.nextUrl)
  await Promise.all([page.waitForURL(url=>url.searchParams.get('page')==='2'),page.locator('.library-pagination--top').getByRole('link',{name:'Next',exact:true}).click()])
  await expect(page.locator('.library-cover-card')).toHaveCount(100);assert.deepEqual(await ids(),next.items.map(i=>i.id))
  await Promise.all([page.waitForURL(url=>url.searchParams.get('page')==='1'),page.locator('.library-pagination--top').getByRole('link',{name:'Previous',exact:true}).click()])
  await expect(page.locator('.library-cover-card')).toHaveCount(100);assert.deepEqual(await ids(),first.items.map(i=>i.id))
  const checkbox=page.locator('.library-cover-card .library-item-selection input').first();await checkbox.check();await expect(page.getByRole('button',{name:'Add to list',exact:true})).toBeVisible();await checkbox.uncheck()
  await page.setViewportSize({width:390,height:844});await page.waitForTimeout(700);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Mobile page fits viewport')
  await page.screenshot({path:out+'/'+engine+'-mobile.png'});assert.deepEqual(errors,[])
  results.push({engine,passed:true,cursorForwardBackward:true,nearViewportCovers:fetched,selectionActionVisible:true,mobileFits:true,pageErrors:errors});await browser.close();browser=null
 }
 writeFileSync(out+'/results.json',JSON.stringify({results},null,2));console.log(JSON.stringify({results}))
}finally{
 if(browser)await browser.close()
 for(const entry of JSON.parse(occ('user:auth-tokens:list',user,'--output=json')).filter(t=>t.name===name))occ('user:auth-tokens:delete',user,String(entry.id))
}
