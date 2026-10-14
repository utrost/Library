import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',container=process.env.NC_CONTAINER||'nextcloud'
const evidence=process.env.EVIDENCE_DIR||'/tmp/library-alpha21-evidence/browser';mkdirSync(evidence,{recursive:true})
const name=`library-scheduled-scan-ui-${Date.now()}`,occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
const output=createTemporaryAppPassword(container,user,name),token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`;let browser,original
const report=[]
try{
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]){
  browser=await launcher.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[];page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message))
  await page.goto(`${upstream}/settings/user/library`)
  const panel=page.locator('.library-scan-schedule'),select=panel.locator('select');await expect(select).toBeVisible();original??=await select.inputValue()
  await select.selectOption('21600');await panel.getByRole('button',{name:'Save schedule',exact:true}).click();await expect(select).toHaveValue('21600');await expect(panel.locator('time')).toBeVisible()
  await panel.scrollIntoViewIfNeeded();await page.screenshot({path:`${evidence}/${engine}-schedule.png`,animations:'disabled'})
  const csrf=await panel.locator('input[name=requesttoken]').inputValue()
  const bad=await context.request.post(`${upstream}/apps/library/scan/schedule`,{headers:{authorization,requesttoken:csrf},form:{interval:'1'}});assert.equal(bad.status(),422)
  const denied=await context.request.post(`${upstream}/apps/library/scan/schedule`,{headers:{authorization,requesttoken:'invalid'},form:{interval:'0'}});assert.equal(denied.status(),412)
  await page.setViewportSize({width:390,height:844});await panel.scrollIntoViewIfNeeded();assert.ok(await select.evaluate(el=>el.getBoundingClientRect().right<=window.innerWidth),'Frequency fits mobile');await page.screenshot({path:`${evidence}/${engine}-mobile-schedule.png`,animations:'disabled'})
  await select.selectOption('0');await panel.getByRole('button',{name:'Save schedule',exact:true}).click();await expect(select).toHaveValue('0');await expect(panel.locator('time')).toHaveCount(0)
  // Restore pre-test setting; production enablement is a separate explicit deployment step.
  if(original!=='0'){await select.selectOption(original);await panel.getByRole('button',{name:'Save schedule',exact:true}).click();await expect(select).toHaveValue(original)}
  assert.deepEqual(errors,[]);report.push({engine,passed:true,savePersists:true,nextDueVisible:true,offClearsDue:true,invalidRejected:true,csrf:true,mobileFits:true,pageErrors:errors});await browser.close();browser=null
 }
 writeFileSync(`${evidence}/results.json`,JSON.stringify({report},null,2));console.log(JSON.stringify({report}))
}finally{
 if(browser)await browser.close()
 const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'));for(const entry of tokens.filter(t=>t.name===name))occ('user:auth-tokens:delete',user,String(entry.id))
}
