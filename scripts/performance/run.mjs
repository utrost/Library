import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { randomBytes,createHash } from 'node:crypto'
import { mkdirSync,writeFileSync,readFileSync,existsSync,rmSync } from 'node:fs'
import { dirname,resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'
import { createTemporaryAppPassword } from '../temporary-app-password.mjs'
const here=dirname(fileURLToPath(import.meta.url)),base=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const out=resolve(process.env.EVIDENCE_DIR||`/tmp/library-performance-${new Date().toISOString().replaceAll(':','-')}`),samples=Number(process.env.SAMPLES||3),runId=`library-performance-${Date.now()}`
const browserEnabled=process.env.SKIP_BROWSER!=='1'&&(process.env.BROWSER==='1'||process.env.COMPREHENSIVE==='1'),sqlEnabled=process.env.SKIP_SQL!=='1';mkdirSync(out,{recursive:true,mode:0o700})
const docker=(args,options={})=>execFileSync('docker',args,{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:20*1024*1024,...options})
const occ=(...args)=>docker(['exec','-u','www-data',container,'php','occ',...args])
const cp=(source,target)=>docker(['cp',source,`${container}:${target}`])
const php=(file,args=[])=>docker(['exec','-u','www-data','-e',`LIBRARY_BENCHMARK_USER=${user}`,container,'php',file,...args],{timeout:180000})
const appPath='/var/www/html/custom_apps/library/lib/AppInfo/Application.php',secret=randomBytes(32).toString('hex');let original,patched,token,browser,opcacheHelper
const summary=values=>{const a=[...values].sort((x,y)=>x-y);return {samples:a.length,medianMs:a.length%2?a[(a.length-1)/2]:(a[a.length/2-1]+a[a.length/2])/2,p95Ms:a[Math.ceil(a.length*.95)-1],maxMs:a.at(-1),valuesMs:values}}
let stopping=false;const stopController=new AbortController();for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>{stopping=true;stopController.abort();browser?.close().catch(()=>{})});
const result={startedAt:new Date().toISOString(),mode:process.env.COMPREHENSIVE==='1'?'comprehensive':'quick',samples,http:[],gui:[],errors:[]}
async function invalidateApplication() {
 const response = await fetch(base + '/' + opcacheHelper, {headers:{'X-Library-Benchmark':secret},signal:AbortSignal.timeout(10000)});
 assert.equal(response.status,200,'Application opcode invalidation');
 assert.equal((await response.json()).ok,true);
}
function save(){writeFileSync(`${out}/results.json`,JSON.stringify(result,null,2))}
function log(message){console.log(message)}
try{
 cp(`${here}/inventory.php`,'/tmp/library-performance-inventory.php');writeFileSync(`${out}/inventory.json`,php('/tmp/library-performance-inventory.php'))
 writeFileSync(`${out}/host.txt`,execFileSync('sh',['-c',"uname -sr; nproc; free -m; docker stats --no-stream --format '{{.Name}} CPU={{.CPUPerc}} Memory={{.MemUsage}} Limit={{.MemPerc}}'"],{encoding:'utf8'}))
 if(sqlEnabled){
  opcacheHelper='ocs-provider/library-performance-opcache-'+randomBytes(12).toString('hex')+'.php';
  const helper=`<?php if (!hash_equals('${secret}', $_SERVER['HTTP_X_LIBRARY_BENCHMARK'] ?? '')) { http_response_code(403); exit; } echo json_encode(['ok' => !function_exists('opcache_invalidate') || opcache_invalidate(dirname(__DIR__) . '/custom_apps/library/lib/AppInfo/Application.php', true)]);`;
  writeFileSync(`${out}/opcache-helper.php`,helper,{mode:0o600});cp(`${out}/opcache-helper.php`,'/var/www/html/'+opcacheHelper);
  docker(['exec',container,'chown','www-data:www-data','/var/www/html/'+opcacheHelper]);
  original=docker(['exec',container,'cat',appPath]);assert.ok(!original.includes('library-performance-http-hook'),'Profiler already installed; run cleanup first')
  const marker='public function boot(\\OCP\\AppFramework\\Bootstrap\\IBootContext $context): void {}';assert.ok(original.includes(marker),'Unknown Application boot; update profiler adapter')
  patched=original.replace(marker,"public function boot(\\OCP\\AppFramework\\Bootstrap\\IBootContext $context): void { if (is_file('/tmp/library-performance-http-hook.php')) require '/tmp/library-performance-http-hook.php'; }")
  writeFileSync(`${out}/Application.original.php`,original,{mode:0o600});writeFileSync(`${out}/Application.profiled.php`,patched,{mode:0o600});writeFileSync(`${out}/profiler-secret`,secret,{mode:0o600})
  cp(`${here}/sql-profiler.php`,'/tmp/library-performance-sql-profiler.php');cp(`${here}/http-hook.php`,'/tmp/library-performance-http-hook.php');cp(`${out}/profiler-secret`,'/tmp/library-performance-secret');cp(`${out}/Application.profiled.php`,appPath)
  docker(['exec',container,'sh','-c','chown www-data:www-data /tmp/library-performance-secret /var/www/html/custom_apps/library/lib/AppInfo/Application.php; chmod 600 /tmp/library-performance-secret; rm -f /tmp/library-performance-http.jsonl'])
 }
 if(sqlEnabled)await invalidateApplication();
 const output=createTemporaryAppPassword(container,user,runId);token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token,'Temporary token created')
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 const cookies=new Map();
 const request=async(path,body,label)=>{
  const started=performance.now();const response=await fetch(base+path,{method:body===undefined?'GET':'POST',headers:{Authorization:authorization,Cookie:[...cookies].map(([k,v])=>`${k}=${v}`).join('; '),...(body===undefined?{}:{'Content-Type':'application/json',requesttoken:result.csrf}),...(label&&sqlEnabled?{'X-Library-Benchmark':secret,'X-Library-Benchmark-Id':label}:{})},body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.any([AbortSignal.timeout(90000),stopController.signal])});for(const raw of response.headers.getSetCookie()){const part=raw.split(';')[0],at=part.indexOf('=');if(at>0)cookies.set(part.slice(0,at),part.slice(at+1))}const bytes=await response.arrayBuffer(),ms=performance.now()-started;let data;try{data=JSON.parse(Buffer.from(bytes).toString())}catch{}
  return {status:response.status,ms,bytes:bytes.byteLength,headers:{cache:response.headers.get('cache-control'),coverSource:response.headers.get('x-library-cover-status'),thumbnailCache:response.headers.get('x-library-thumbnail-cache')},data,text:data?undefined:Buffer.from(bytes).toString()}
 }
 const initial=await request('/apps/library/');assert.equal(initial.status,200)
 result.csrf=initial.text?.match(/data-request-token="([^"]+)"/)?.[1]?.replaceAll('&amp;','&');assert.ok(result.csrf,'CSRF token available')
 const cat=await request('/apps/library/catalogue?limit=100');assert.equal(cat.status,200);const items=cat.data.items;assert.ok(items?.length);const first=items[0],id=first.id,ids=items.map(x=>x.id)
 const inventory=JSON.parse(readFileSync(`${out}/inventory.json`,'utf8')),root=inventory.roots.find(x=>Number(x.books)>0),lists=await request('/apps/library/api/lists'),list=lists.data?.lists?.[0]
 const cases=[['catalogue-25','/apps/library/catalogue?limit=25'],['catalogue-100','/apps/library/catalogue?limit=100'],['catalogue-page-400','/apps/library/catalogue?limit=100&page=400'],['catalogue-recent','/apps/library/catalogue?limit=100&sort=recent'],['search-word','/apps/library/catalogue?limit=100&q=science'],['filter-epub','/apps/library/catalogue?limit=100&format=epub'],['review-missing','/apps/library/catalogue?limit=100&status=missing'],['review-conflicts','/apps/library/catalogue?limit=100&scannerConflicts=1'],['creator-typeahead','/apps/library/catalogue/creator-suggestions?creatorSearch=San'],['publisher-typeahead','/apps/library/catalogue/publisher-suggestions?publisherSearch=Pen'],['folder-typeahead','/apps/library/catalogue/folder-suggestions?folderSearch=books'],['shelf-children','/apps/library/shelves/children'],['home-html','/apps/library/?home=1'],['shelves-html','/apps/library/?shelves=1'],['catalogue-html','/apps/library/'],['settings-html','/settings/user/library'],['sidebar','/apps/library/items/'+id+'/sidebar'],['detail','/apps/library/items/'+id],['lists-index','/apps/library/api/lists'],['lists-membership','/apps/library/api/lists?itemId='+id],['inference-roots','/apps/library/api/inference/sample'],['scan-progress','/apps/library/scan/progress'],['duplicates-1','/apps/library/api/duplicate-suggestions/lookup',{itemIds:[id]}],['duplicates-100','/apps/library/api/duplicate-suggestions/lookup',{itemIds:ids}]]
 if(cat.data.cataloguePagination?.nextUrl)cases.push(['catalogue-cursor-next','/apps/library/catalogue'+cat.data.cataloguePagination.nextUrl]);
 if(process.env.DEEP_CURSOR==='1'){
  const anchor=await request('/apps/library/catalogue?limit=100&page=399');assert.equal(anchor.status,200);assert.ok(anchor.data.cataloguePagination.nextUrl?.includes('cursor='));
  result.cursorAnchor={page:399,ms:anchor.ms,status:anchor.status,excludedFromCursorTiming:true};
  cases.push(['catalogue-cursor-deep','/apps/library/catalogue'+anchor.data.cataloguePagination.nextUrl]);
 }
 cases.push(['review-counts','/apps/library/catalogue?hydrate=counts']);
 cases.push(['cover-first','/apps/library/items/'+id+'/cover']);
 for(const extension of ['pdf','epub','cbz']){const book=items.find(i=>i.extension===extension);if(book)cases.push(['cover-'+extension,'/apps/library/items/'+book.id+'/cover'])}
 if(root)cases.push(['shelf-root-children','/apps/library/shelves/children?rootId='+root.id]);
 cases.push(['metadata-export','/apps/library/export/metadata'],['sidecar-manifest','/apps/library/export/metadata/sidecar-manifest']);
 if(root)cases.push(['inference-sample','/apps/library/api/inference/sample?rootId='+root.id]);if(list)cases.push(['list-page','/apps/library/api/lists/'+list.id]);
 if(process.env.HYDRATE==='1')cases.push(['catalogue-hydrate','/apps/library/catalogue?limit=100&hydrate=1'])
 const selected=process.env.BENCH_CASES?.split(',');
 for(const [label,path,body] of cases.filter(([label])=>selected?selected.includes(label):process.env.COMPREHENSIVE==='1'||!['catalogue-page-400','review-missing','review-counts'].includes(label))){if(stopping)throw new Error('Benchmark interrupted');const records=[];for(let n=0;n<samples;n++){try{const r=await request(path,body);records.push({status:r.status,ms:r.ms,bytes:r.bytes,headers:r.headers});if(r.status!==200)break}catch(e){records.push({error:e.name});break}}
  const record={label,requests:records,...(records[0]?.ms!==undefined?summary(records.filter(r=>r.ms!==undefined).map(r=>r.ms)):{})};
  if(sqlEnabled&&records[0]?.status===200){try{const r=await request(path,body,label);record.profiled={status:r.status,ms:r.ms,bytes:r.bytes}}catch(e){record.profiled={error:e.name}}}
  result.http.push(record);save();log(`${label}: ${record.medianMs?.toFixed(0)||'ERROR'} ms; status ${records[0]?.status}`)
 }
 // Cache-aware browser navigation: authenticate its cookie jar with an API request, then use cookies only.
 if(browserEnabled){browser=await chromium.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}});const auth=await context.request.get(base+'/apps/library/',{headers:{Authorization:authorization}});assert.equal(auth.status(),200)
 await context.addInitScript(()=>{
  window.__libraryPerf={longTasks:[],paints:[],readyAt:null,lcp:null};
  for(const type of ['longtask','paint','largest-contentful-paint']){try{new PerformanceObserver(list=>{for(const e of list.getEntries()){if(type==='longtask')window.__libraryPerf.longTasks.push({start:e.startTime,ms:e.duration});else if(type==='paint')window.__libraryPerf.paints.push({name:e.name,ms:e.startTime});else window.__libraryPerf.lcp=e.startTime}}).observe({type,buffered:true})}catch{}}
  const selectors=['.library-cover-gallery','.library-catalogue-list tbody tr','.library-home','.library-personal-lists','.library-inference','.library-shelves-landing','#library-settings','.library-review-destination'];
  const inspect=()=>{if(window.__libraryPerf.readyAt===null&&selectors.some(s=>{const el=document.querySelector(s);return el&&el.getBoundingClientRect().height>0}))window.__libraryPerf.readyAt=performance.now()};new MutationObserver(inspect).observe(document,{subtree:true,childList:true,attributes:true});document.addEventListener('DOMContentLoaded',inspect)
 })
 const page=await context.newPage();const coverHeaders=[];page.on('response',r=>{if(/\/items\/\d+\/cover$/.test(new URL(r.url()).pathname)){const h=r.headers();coverHeaders.push({path:new URL(r.url()).pathname,cache:h['cache-control'],type:h['content-type'],source:h['x-library-cover-status']})}});let pending=new Map();page.on('request',r=>pending.set(r,{path:new URL(r.url()).pathname,hydrate:new URL(r.url()).searchParams.has('hydrate'),start:performance.now()}));page.on('requestfinished',r=>pending.delete(r));page.on('requestfailed',r=>pending.delete(r));page.setDefaultTimeout(30000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const [label,path] of [['catalogue-first','/apps/library/'],['catalogue-repeat','/apps/library/'],['home','/apps/library/?home=1'],['shelves','/apps/library/?shelves=1'],['lists','/apps/library/?lists=1'],['inference','/apps/library/?infer=1'],['review','/apps/library/?scannerConflicts=1'],['settings','/settings/user/library']].filter(([label])=>!process.env.GUI_CASES||process.env.GUI_CASES.split(',').includes(label))){
  if(stopping)throw new Error('Benchmark interrupted');
  try{const nav=await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:90000});assert.equal(nav.status(),200);assert.ok(!page.url().includes('/login'),'Cookie authentication failed');await page.waitForFunction(()=>window.__libraryPerf.readyAt!==null,{},{timeout:30000}).catch(()=>{});await page.waitForTimeout(1500);
   const metrics=await page.evaluate(()=>({observedAt:performance.now(),timings:window.__libraryPerf,navigation:performance.getEntriesByType('navigation')[0]?.toJSON(),resources:performance.getEntriesByType('resource').map(r=>({kind:r.initiatorType,url:new URL(r.name).pathname+(new URL(r.name).searchParams.has('hydrate')?'?hydrate=1':''),ms:r.duration,bytes:r.transferSize,decoded:r.decodedBodySize,start:r.startTime})),images:{total:document.images.length,loaded:[...document.images].filter(i=>i.complete&&i.naturalWidth>0).length},viewport:{width:innerWidth,height:innerHeight}}));
   // Navigation name may include selected book paths; retain timing fields only.
   if(metrics.navigation)delete metrics.navigation.name;
   result.gui.push({label,...metrics,pending:[...pending.values()].map(r=>({path:r.path,hydrate:r.hydrate,ageMs:performance.now()-r.start}))});await page.screenshot({path:`${out}/gui-${label}.png`,animations:'disabled'});save();log(`GUI ${label}: ready ${metrics.timings.readyAt?.toFixed(0)||'unobserved'} ms`)
  }catch(e){result.gui.push({label,error:e.name,message:e.message.slice(0,160)});save();log(`GUI ${label}: ${e.name}`)}
 }
 result.browserErrors=errors;result.coverHeaders=coverHeaders;await browser.close();browser=null
 }
 delete result.csrf;result.finishedAt=new Date().toISOString();save()
 }finally{
 if(browser)await browser.close().catch(()=>{})
 let restored=!original
 if(sqlEnabled&&original){
  try{const live=docker(['exec',container,'cat',appPath]);if(live===patched)cp(`${out}/Application.original.php`,appPath);else assert.equal(live,original,'Application changed during benchmark; manual profiler removal needed');docker(['exec',container,'chown','www-data:www-data',appPath]);assert.equal(docker(['exec',container,'cat',appPath]),original);await invalidateApplication();restored=true;log('Profiler hook removed; original Application restored')}catch(e){result.errors.push('RESTORE FAILED: '+e.message);process.exitCode=1}
  try{
   const sql=docker(['exec',container,'cat','/tmp/library-performance-http.jsonl']);writeFileSync(`${out}/sql-http.jsonl`,sql);
   const records=sql.trim().split('\n').filter(Boolean).map(line=>JSON.parse(line));
   for(const r of result.http.filter(r=>r.profiled?.status===200))assert.ok(records.some(x=>x.id===r.label&&!x.profilerError),'Missing SQL profile: '+r.label);
  }catch(e){result.errors.push('SQL profiling failed: '+e.message)}
  docker(['exec',container,'rm','-f','/tmp/library-performance-secret','/tmp/library-performance-http.jsonl'])
  // If another edit prevented restoration, retain an inert hook to avoid breaking Application::boot.
  if(restored)docker(['exec',container,'rm','-f','/tmp/library-performance-http-hook.php'])
  rmSync(`${out}/profiler-secret`,{force:true})
 }
 if(token){try{const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'));for(const entry of tokens.filter(t=>t.name===runId))occ('user:auth-tokens:delete',user,String(entry.id))}catch(e){result.errors.push('Temporary token cleanup failed');process.exitCode=1}}
 if(opcacheHelper){docker(['exec',container,'rm','-f','/var/www/html/'+opcacheHelper]);rmSync(`${out}/opcache-helper.php`,{force:true})}
 delete result.csrf;result.cleanup={applicationRestored:restored};result.failures=[...result.http.filter(x=>x.requests.some(r=>r.status!==200||r.error)).map(x=>x.label),...result.gui.filter(x=>x.error||x.timings?.readyAt===null).map(x=>'gui-'+x.label)];if(result.failures.length||result.errors.length)process.exitCode=1;save();log('Evidence: '+out)
}
