// Real HTTP admin/CSRF boundaries and desktop/mobile cache settings, with owned-token cleanup.
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { randomBytes } from 'node:crypto'
import { mkdirSync,writeFileSync } from 'node:fs'
import { chromium,expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const base=process.env.NC_URL||'http://100.123.149.120:8088',container=process.env.NC_CONTAINER||'nextcloud',admin=process.env.NC_USER||'uwe',out=process.env.EVIDENCE_DIR||'/tmp/library-thumbnail-settings'
mkdirSync(out,{recursive:true,mode:0o700})
const actor='library-thumbnail-smoke-'+randomBytes(6).toString('hex'),tokenName='library-thumbnail-settings-'+Date.now(),tokens=[]
const docker=(args)=>execFileSync('docker',args,{encoding:'utf8',stdio:['ignore','pipe','pipe']}),occ=(...args)=>docker(['exec','-u','www-data',container,'php','occ',...args])
let browser,created=false
const report={passed:false}
try {
 docker(['exec','-u','www-data','-e','OC_PASS='+randomBytes(24).toString('hex'),container,'php','occ','user:add','--password-from-env',actor]);created=true
 browser=await chromium.launch()
 const authenticate=async user=>{
  const output=createTemporaryAppPassword(container,user,tokenName);tokens.push(user)
  const token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
  const context=await browser.newContext({viewport:{width:1440,height:1000}})
  const response=await context.request.get(base+'/apps/library/',{headers:{Authorization:'Basic '+Buffer.from(user+':'+token).toString('base64')}});assert.equal(response.status(),200)
  const csrf=(await response.text()).match(/data-request-token="([^"]+)"/)?.[1]?.replaceAll('&amp;','&');assert.ok(csrf)
  return {context,csrf}
 }
 const privileged=await authenticate(admin),unprivileged=await authenticate(actor)
 const form={budgetMiB:'64',retentionHours:'72'}
 report.nonAdminStatus=(await unprivileged.context.request.post(base+'/apps/library/admin/thumbnails',{form,headers:{requesttoken:unprivileged.csrf},maxRedirects:0})).status();assert.equal(report.nonAdminStatus,403)
 report.csrfStatus=(await privileged.context.request.post(base+'/apps/library/admin/thumbnails',{form,maxRedirects:0})).status();assert.equal(report.csrfStatus,412)
 report.invalidBudgetStatus=(await privileged.context.request.post(base+'/apps/library/admin/thumbnails',{form:{...form,budgetMiB:'2048'},headers:{requesttoken:privileged.csrf},maxRedirects:0})).status();assert.equal(report.invalidBudgetStatus,422)
 const page=await privileged.context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message))
 await page.goto(base+'/settings/admin/library');await expect(page.getByLabel('Cache budget per account (MiB)',{exact:true})).toBeVisible()
 await page.screenshot({path:out+'/desktop.png',fullPage:true})
 await page.setViewportSize({width:390,height:844});await page.reload();await page.getByRole('button',{name:'Help',exact:true}).first().click();await expect(page.getByRole('tooltip')).toBeVisible()
 const box=await page.getByRole('tooltip').boundingBox();report.mobileHelpFits=box.x>=0&&box.x+box.width<=391;assert.ok(report.mobileHelpFits)
 await page.screenshot({path:out+'/mobile-help.png',fullPage:true});assert.deepEqual(errors,[])
 report.passed=true
}finally{
 if(browser)await browser.close()
 for(const user of tokens)for(const entry of JSON.parse(occ('user:auth-tokens:list',user,'--output=json')).filter(t=>t.name===tokenName))occ('user:auth-tokens:delete',user,String(entry.id))
 if(created)occ('user:delete',actor)
 writeFileSync(out+'/results.json',JSON.stringify(report,null,2))
}
console.log(JSON.stringify(report))
