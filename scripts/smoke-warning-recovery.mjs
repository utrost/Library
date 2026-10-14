// Read-only real-warning GUI checks; private screenshots and temporary authentication.
import assert from 'node:assert/strict'
import {execFileSync} from 'node:child_process'
import {mkdirSync,writeFileSync} from 'node:fs'
import {chromium,firefox,expect} from '@playwright/test'
import {createTemporaryAppPassword} from './temporary-app-password.mjs'
const container=process.env.NC_CONTAINER||'nextcloud',base=process.env.NC_URL||'http://100.123.149.120:8088',user=process.env.NC_USER||'uwe',out=process.env.EVIDENCE_DIR||'/tmp/library-warning-browser'
mkdirSync(out,{recursive:true,mode:0o700});const name='library-warning-gui-'+Date.now()
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8'})
const id=Number(execFileSync('docker',['exec','-u','www-data','-e','NC_USER='+user,container,'php','-r',`require '/var/www/html/lib/base.php';$db=\\OC::$server->get(\\OCP\\IDBConnection::class);echo $db->executeQuery('SELECT i.id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=? AND f.scan_error LIKE ? ORDER BY i.id LIMIT 1',[getenv('NC_USER'),'metadata_fields_invalid:%'])->fetchOne();`],{encoding:'utf8'}));assert.ok(id>0,'Recovered warning item exists')
const output=createTemporaryAppPassword(container,user,name),token=output.match(/app password is:\s*(\S+)/i)?.[1]||output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
let browser;const results=[]
try{
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]){
  browser=await launcher.launch();const context=await browser.newContext({viewport:{width:1440,height:1000}})
  const auth=await context.request.get(base+'/apps/library/',{headers:{Authorization:'Basic '+Buffer.from(user+':'+token).toString('base64')}});assert.equal(auth.status(),200)
  const response=await context.request.get(base+'/apps/library/items/'+id+'/sidebar');assert.equal(response.status(),200);const {item}=await response.json();assert.equal(item.scanStatus,'metadata_error');assert.ok(item.scanError.startsWith('metadata_fields_invalid:'));const rejected=JSON.parse(item.fieldValues.rejectedFields);assert.ok(rejected.length>0);const field=rejected[0];assert.ok(Array.from(item.fieldValues[field]).length>512,'Complete rejected value available');assert.ok(Array.from(item.title).length<=512,'Canonical title fits storage')
  const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'/apps/library/items/'+id)
  await page.locator('#library-provenance-heading').click();writeFileSync(out+'/'+engine+'-private.html',await page.content(),{mode:0o600});await page.screenshot({path:out+'/'+engine+'-inspection.png'});const reset=page.locator(`.library-provenance-differences .library-field-reset-form:has(input[name="field"][value="${field}"]) button`);await expect(reset).toBeDisabled();await expect(reset).toHaveAttribute('title',/exceeds field limits/);await expect(page.getByRole('button',{name:'Reset all fields to scanner',exact:true})).toBeDisabled()
  await page.screenshot({path:out+'/'+engine+'-rejected-fields.png'});await page.setViewportSize({width:390,height:844});await page.waitForTimeout(400);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Recovered detail fits mobile viewport');await page.screenshot({path:out+'/'+engine+'-mobile.png'});assert.deepEqual(errors,[])
  results.push({engine,passed:true,recoveredItemVisible:true,rejectedValueRetained:true,unsafeResetDisabled:true,mobileFits:true,pageErrors:0});await browser.close();browser=null
 }
 writeFileSync(out+'/results.json',JSON.stringify({results},null,2));console.log(JSON.stringify({results}))
}finally{if(browser)await browser.close();for(const entry of JSON.parse(occ('user:auth-tokens:list',user,'--output=json')).filter(t=>t.name===name))occ('user:auth-tokens:delete',user,String(entry.id))}
