import { chromium } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, writeFileSync } from 'node:fs'
const base=process.env.NC_URL, user=process.env.NC_USER, container=process.env.NC_CONTAINER, name=`ui-review-${Date.now()}`
if (!base || !user || !container) throw new Error('Set NC_URL, NC_USER and NC_CONTAINER explicitly')
const out=mkdtempSync('/tmp/library-ui-review-'); console.log(out)
const occ=(...a)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...a],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
let browser; const reports=[],errors=[],blocked=[]
try {
 const secret=createTemporaryAppPassword(container,user,name).match(/app password(?: is)?:\s*(\S+)/i)?.[1]; if(!secret)throw Error('No temporary credential')
 const authorization=`Basic ${Buffer.from(`${user}:${secret}`).toString('base64')}`
 browser=await chromium.launch(); const ctx=await browser.newContext({viewport:{width:1440,height:1000}})
 await ctx.route('**/*',r=>{const q=r.request(),u=new URL(q.url());if(u.origin===base&&u.pathname.includes('/apps/library/')&&!['GET','HEAD'].includes(q.method())&&!u.pathname.endsWith('/api/duplicate-suggestions/lookup')){blocked.push({path:u.pathname,method:q.method()});return r.abort()}return r.continue({headers:{...q.headers(),...(u.origin===base?{authorization}:{})}})})
 const page=await ctx.newPage();page.on('pageerror',e=>errors.push({url:page.url(),error:e.message}));page.on('dialog',d=>d.dismiss())
 await page.goto(base+'/apps/library/?authors=1');await page.waitForTimeout(1500)
 const data=await page.evaluate(async()=>{const get=async p=>{const r=await fetch('/apps/library/'+p);return r.json()};return {authors:await get('api/authors?limit=1&previews=1'),series:await get('api/series?limit=1&previews=1'),lists:await get('api/lists'),catalogue:await get('catalogue?limit=1')}})
 writeFileSync(out+'/discovery.json',JSON.stringify(data,null,2),{mode:0o600})
 const author=data.authors.authors?.find(a=>a.book_count>0)||data.authors.authors?.[0], series=data.series.series?.[0],list=data.lists.lists?.[0];const item=data.catalogue.items?.[0];
 console.log(JSON.stringify({keys:Object.keys(data.catalogue),author:author?.id,series:series?.id,list:list?.id,item:item?.id}))
 const cases=[['home','?home=1'],['catalogue',''],['catalogue-list','?view=list'],['search','?q=Heinlein'],['search-empty','?q=ux-review-no-match-179249'],['favorites','?starred=1'],['continue','?recentlyOpened=1&sort=lastOpened'],['shelves','?shelves=1'],['collections','#library-collections'],['lists','?lists=1'],['new-list','?lists=1&new=1'],['authors','?authors=1'],['series','?series=1'],['genres','?genres=1'],['review-suggestions','?scannerConflicts=1'],['review-missing','?needsMetadata=1'],['review-files','?status=metadata_error'],['review-covers','?coverReview=placeholder'],['author-conflicts','?authors=1&authorConflicts=1'],['duplicates','?duplicates=1'],['inference','?infer=1'],['languages','languages'],['mappings','value-mappings'],['settings','/settings/user/library'],['admin','/settings/admin/library']]
 if(author)cases.push(['author-profile',`?authors=1&authorId=${author.id}`]);if(series)cases.push(['series-profile',`?series=1&seriesId=${series.id}`]);if(list)cases.push(['list-detail',`?lists=1&listId=${list.id}`]);if(item)cases.push(['details',`?details=${item.id}`])
 async function snapshot(label){
  await page.screenshot({path:`${out}/${label}.png`,animations:'disabled'})
  const info=await page.evaluate(()=>{const root=document.querySelector('#library-app')||document.querySelector('#library-settings')||document.querySelector('.library-maintenance-shell')||document.querySelector('#app-content')||document.querySelector('#content')||document.body;const vis=e=>!!e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';const box=e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return {text:(e.getAttribute('aria-label')||e.innerText||e.getAttribute('placeholder')||'').trim().slice(0,100),tag:e.tagName,x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),font:s.fontSize,weight:s.fontWeight,color:s.color,bg:s.backgroundColor,underline:s.textDecorationLine,cls:typeof e.className==='string'?e.className.slice(0,150):''}};return {firstCoverY:document.querySelector('#library-catalogue .library-cover-card')?.getBoundingClientRect().y ?? null,viewport:innerWidth,root:box(root),overflow:Math.max(0,root.scrollWidth-root.clientWidth),headings:[...root.querySelectorAll('h1,h2,h3,h4,summary')].filter(vis).map(box),controls:[...root.querySelectorAll('button,input:not([type=hidden]),select,textarea,a')].filter(vis).map(box),body:root.innerText.slice(0,20000),links:[...root.querySelectorAll('a')].filter(vis).slice(0,100).map(e=>({text:e.textContent.trim().slice(0,60),href:e.getAttribute('href')}))}})
  reports.push({label,url:page.url(),...info});writeFileSync(out+'/report.json',JSON.stringify({reports,errors,blocked},null,2),{mode:0o600})
 }
 for(const [width,theme]of[[1440,'light'],[390,'light'],[390,'dark']]){
  await page.setViewportSize({width,height:width===390?844:1000})
  for(const [key,path]of cases){
   const label=`${key}-${width}-${theme}`
   try {const resp=await page.goto(base+(path.startsWith('/settings')?path:'/apps/library/'+path),{waitUntil:'domcontentloaded',timeout:30000});if (!resp.ok()) throw new Error(`HTTP ${resp.status()}`);await page.locator('#library-app,#library-settings,.library-maintenance-shell,#app-content').first().waitFor({timeout:15000});await page.waitForTimeout(500);await page.locator('.library-inference[aria-busy="true"],.library-authors[aria-busy="true"],.directory-browser[aria-busy="true"],.library-series[aria-busy="true"]').first().waitFor({state:'hidden',timeout:20000}).catch(()=>{}); await page.evaluate(dark=>{document.body.dataset.themes=dark?'dark':'light';if(dark)document.body.dataset.themeDark='';else {delete document.body.dataset.themeDark;document.body.dataset.themeLight=''}},theme==='dark');await snapshot(label); console.log(label,resp.status())
    if(['details','settings','inference','review-suggestions','author-profile','series-profile'].includes(key)&&theme==='light'){
     await page.evaluate(()=>{const candidates=[...document.querySelectorAll('#app-content,#content-vue,#content,.app-content,.library-full-details')];const el=candidates.find(e=>e.scrollHeight>e.clientHeight+200&&['auto','scroll'].includes(getComputedStyle(e).overflowY));if(el)el.scrollTop=(el.scrollHeight-el.clientHeight)/2;else window.scrollTo(0,document.body.scrollHeight/2)});await snapshot(label+'-middle');
     await page.evaluate(()=>{for(const e of document.querySelectorAll('#app-content,#content-vue,#content,.app-content,.library-full-details'))if(e.scrollHeight>e.clientHeight+200&&['auto','scroll'].includes(getComputedStyle(e).overflowY))e.scrollTop=e.scrollHeight;window.scrollTo(0,document.body.scrollHeight)});await snapshot(label+'-bottom')
    }
   }catch(e){reports.push({label,error:e.message});console.log(label,'ERROR',e.message.slice(0,160))}
  }
 }
 writeFileSync(out+'/report.json',JSON.stringify({reports,errors,blocked},null,2),{mode:0o600});console.log(JSON.stringify({out,captures:reports.length,errors,blocked})); if (errors.length || reports.some(row => row.error)) process.exitCode=1
}finally{await browser?.close();for(const entry of JSON.parse(occ('user:auth-tokens:list',user,'--output=json')).filter(t=>t.name===name))occ('user:auth-tokens:delete',user,String(entry.id))}
