// Read-only CPU and long-task attribution; raw profiles remain in a private local directory.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium } from '@playwright/test'
import { createTemporaryAppPassword } from '../temporary-app-password.mjs'
const base=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const out=process.env.EVIDENCE_DIR||'/tmp/library-catalogue-cpu',name='library-performance-cpu-'+Date.now()
mkdirSync(out,{recursive:true,mode:0o700})
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
let browser
try {
 const generated=createTemporaryAppPassword(container,user,name),token=generated.match(/app password is:\s*(\S+)/i)?.[1]||generated.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 browser=await chromium.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
 assert.equal((await context.request.get(base+'/apps/library/',{headers:{Authorization:'Basic '+Buffer.from(user+':'+token).toString('base64')}})).status(),200)
 await context.addInitScript(()=>{
  window.__libraryCpu={tasks:[]};new PerformanceObserver(list=>{for(const entry of list.getEntries())window.__libraryCpu.tasks.push({startMs:entry.startTime,ms:entry.duration})}).observe({type:'longtask',buffered:true})
 })
 const page=await context.newPage(),cdp=await context.newCDPSession(page),results=[]
 await cdp.send('Profiler.enable');await cdp.send('Profiler.setSamplingInterval',{interval:500})
 for(let run=0;run<Number(process.env.SAMPLES||3);run++){
  await cdp.send('Profiler.start');await page.goto(base+'/apps/library/?limit=100',{waitUntil:'domcontentloaded'});await page.waitForSelector('.library-cover-card');await page.waitForTimeout(1800)
  const {profile}=await cdp.send('Profiler.stop');writeFileSync(out+'/profile-'+run+'.json',JSON.stringify(profile),{mode:0o600})
  const nodes=new Map(profile.nodes.map(node=>[node.id,node])),groups={},functions={}
  for(let n=0;n<(profile.samples||[]).length;n++){
   const frame=nodes.get(profile.samples[n]).callFrame,ms=(profile.timeDeltas[n]||0)/1000,url=frame.url||''
   const category=url.includes('/apps/library/')||url.includes('/custom_apps/library/')?'library':url.includes('/dist/')||url.includes('/core/')?'nextcloud':frame.functionName==='(idle)'?'idle':url?'other':'browser'
   groups[category]=(groups[category]||0)+ms
   if(category==='library'){const symbol=frame.functionName||'(anonymous)';functions[symbol]=(functions[symbol]||0)+ms}
  }
  const tasks=(await page.evaluate(()=>window.__libraryCpu)).tasks
  results.push({run,groups,libraryFunctions:Object.entries(functions).sort((a,b)=>b[1]-a[1]).slice(0,15).map(([symbol,ms])=>({symbol,ms})),longTaskMs:tasks.reduce((sum,t)=>sum+t.ms,0),tasks})
 }
 writeFileSync(out+'/aggregates.json',JSON.stringify({results},null,2));console.log(JSON.stringify({results}))
} finally {
 if(browser)await browser.close()
 for(const token of JSON.parse(occ('user:auth-tokens:list',user,'--output=json')).filter(t=>t.name===name))occ('user:auth-tokens:delete',user,String(token.id))
}
