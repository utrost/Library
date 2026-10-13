// Isolated account on the selected server; never edits the user's own books.
import assert from 'node:assert/strict'
import {execFileSync} from 'node:child_process'
import {mkdirSync,writeFileSync} from 'node:fs'
import {chromium,firefox,expect} from '@playwright/test'
import {createTemporaryAppPassword} from './temporary-app-password.mjs'
const container=process.env.NC_CONTAINER||'nextcloud',base=process.env.NC_URL||'http://100.123.149.120:8088',out=process.env.EVIDENCE_DIR||'/tmp/library-opf-series'
mkdirSync(out,{recursive:true,mode:0o700})
const docker=args=>execFileSync('docker',args,{encoding:'utf8',stdio:['ignore','pipe','pipe']})
docker(['cp','tests/php/opf_series_integration.php',container+':/tmp/library-opf-series-integration.php'])
const command=action=>JSON.parse(docker(['exec','-u','www-data',container,'php','/tmp/library-opf-series-integration.php',action]))
let browser,fixture;const results=[]
try{
 fixture=command('setup');assert.equal(fixture.items.length,2)
 assert.deepEqual(fixture.items.map(i=>[i.series_name,i.series_number]),[['Calibre fixture','2.5'],['EPUB 3 fixture','01']])
 const tokenOutput=createTemporaryAppPassword(container,fixture.uid,'series-smoke')
 const token=tokenOutput.match(/app password is:\s*(\S+)/i)?.[1]||tokenOutput.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${fixture.uid}:${token}`).toString('base64')}`
 for(const [engine,driver] of Object.entries({chromium,firefox})){
  browser=await driver.launch();const context=await browser.newContext({viewport:{width:1440,height:1100}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(base).origin?{authorization}:{})}}))
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message))
  for(const item of command('status').items){
   await page.goto(`${base}/apps/library/items/${item.id}`);await expect(page.locator('input[name="series"]')).toHaveValue(item.series_name);await expect(page.locator('input[name="seriesNumber"]')).toHaveValue(item.series_number)
   await page.locator('input[name="series"]').scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/${engine}-${item.title.split(' ')[0]}.png`})
  }
  const edited=fixture.items[0];await page.goto(`${base}/apps/library/items/${edited.id}`)
  const form=page.locator('.library-detail-edit-form');await form.locator('input[name="series"]').fill('My corrected series');await form.locator('input[name="seriesNumber"]').fill('Volume II')
  await form.getByRole('button',{name:'Save metadata',exact:true}).click()
  await expect.poll(()=>command('status').items[0].series_name).toBe('My corrected series')
  await expect.poll(()=>command('status').items[0].series_number).toBe('Volume II')
  const refreshed=command('rescan');assert.equal(refreshed.items[0].series_name,'My corrected series');assert.equal(refreshed.items[0].series_number,'Volume II')
  const candidates=JSON.parse(refreshed.items[0].field_values);assert.equal(candidates.series,'Calibre fixture');assert.equal(candidates.seriesNumber,'2.5')
  assert.deepEqual(refreshed.items.map(i=>[i.etag,i.size,i.mtime]),fixture.items.map(i=>[i.etag,i.size,i.mtime]))
  await page.reload();await expect(page.locator('input[name="series"]')).toHaveValue('My corrected series');await expect(page.locator('input[name="seriesNumber"]')).toHaveValue('Volume II')
  await page.locator('input[name="series"]').scrollIntoViewIfNeeded();await page.screenshot({path:`${out}/${engine}-manual-correction.png`});assert.deepEqual(errors,[])
  results.push({engine,passed:true,manualCorrectionPreserved:true,candidatesRefreshed:true,sourceMarkersUnchanged:true});await browser.close();browser=null
 }
 writeFileSync(`${out}/results.json`,JSON.stringify({passed:true,results},null,2));console.log(JSON.stringify({passed:true,results}))
}finally{
 await browser?.close();if(fixture)assert.equal(command('cleanup').cleanup,true)
 docker(['exec',container,'rm','-f','/tmp/library-opf-series-integration.php'])
}
