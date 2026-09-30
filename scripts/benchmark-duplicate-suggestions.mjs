import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync,writeFileSync } from 'node:fs'
import { chromium,expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const evidence=process.env.EVIDENCE_DIR||'/tmp/library-alpha20-evidence';mkdirSync(evidence,{recursive:true});const name=`library-suggestion-benchmark-${Date.now()}`
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:5*1024*1024})
const output=createTemporaryAppPassword(container,user,name),token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`;let browser
const summarize=values=>{const sorted=[...values].sort((a,b)=>a-b);return {samples:values.length,medianMs:sorted[Math.floor(sorted.length/2)],p95Ms:sorted[Math.ceil(sorted.length*.95)-1],minMs:sorted[0],maxMs:sorted.at(-1),valuesMs:values}}
try{
 browser=await chromium.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
 await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
 const page=await context.newPage();page.setDefaultTimeout(30000);const errors=[];page.on('pageerror',e=>errors.push(e.message))
 const t=performance.now();let badgeResponseMs;const suggestion=page.waitForResponse(r=>r.url().endsWith('/api/duplicate-suggestions/lookup')).then(r=>{badgeResponseMs=performance.now()-t;return r});await page.goto(`${upstream}/apps/library/`,{waitUntil:'domcontentloaded'});await expect(page.locator('.library-cover-gallery,.library-catalogue-list').first()).toBeVisible();const catalogueVisibleMs=performance.now()-t;const initial=await suggestion;assert.equal(initial.status(),200);const data=await initial.json();const ids=initial.request().postDataJSON().itemIds;assert.equal(ids.length,100)
 const csrf=await page.locator('#library-vue-root').getAttribute('data-request-token');assert.ok(csrf)
 const request=async(path,body)=>{const begin=performance.now();const r=body===undefined?await context.request.get(upstream+path,{headers:{authorization}}):await context.request.post(upstream+path,{headers:{authorization,requesttoken:csrf},data:body});assert.equal(r.status(),200,await r.text());return {ms:performance.now()-begin,data:await r.json()}}
 const groups=[]
 for(const [label,itemIds] of [['one-visible-book',[ids[0]]],['100-visible-books',ids]]){const times=[];for(let i=0;i<20;i++)times.push((await request('/apps/library/api/duplicate-suggestions/lookup',{itemIds})).ms);groups.push({label,...summarize(times)})}
 const catalogueTimes=[];for(let i=0;i<10;i++)catalogueTimes.push((await request('/apps/library/catalogue?limit=100')).ms)
 // Rebuild only this account's derived metadata index while measuring ordinary browsing.
 let backgroundRebuild=null,state=(await request('/apps/library/api/duplicate-suggestions')).data;
 if(process.env.SKIP_REBUILD!=='1'){
 await request('/apps/library/api/duplicate-suggestions',{enabled:false});const start=performance.now();await request('/apps/library/api/duplicate-suggestions',{enabled:true});const during=[]
 do{during.push((await request('/apps/library/catalogue?limit=100')).ms);state=(await request('/apps/library/api/duplicate-suggestions')).data;if(state.status==='ready')break;assert.ok(performance.now()-start<180000,'Background index completed within benchmark timeout');await new Promise(r=>setTimeout(r,500))}while(true)
 backgroundRebuild={elapsedMs:performance.now()-start,state,catalogueDuring:summarize(during)}
 }
 assert.deepEqual(errors,[])
 const result={catalogueRecords:state.total,initialPage:{catalogueVisibleMs,suggestionsResponseMs:badgeResponseMs,visibleBooks:ids.length,booksWithHints:Object.values(data.items).filter(x=>x.count).length,partialBooks:Object.values(data.items).filter(x=>x.status==='partial').length},http:groups,catalogueIdle:summarize(catalogueTimes),backgroundRebuild,pageErrors:errors}
 writeFileSync(`${evidence}/http-performance.json`,JSON.stringify(result,null,2));console.log(JSON.stringify(result))
}finally{if(browser)await browser.close();const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'));for(const entry of tokens.filter(t=>t.name===name))occ('user:auth-tokens:delete',user,String(entry.id))}
