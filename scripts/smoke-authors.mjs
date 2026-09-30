import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium, firefox, expect } from '@playwright/test'
import { createTemporaryAppPassword } from './temporary-app-password.mjs'
const upstream=process.env.NC_URL || 'http://100.123.149.120:8088', user=process.env.NC_USER || 'uwe', container=process.env.NC_CONTAINER || 'nextcloud'
const evidence=process.env.EVIDENCE_DIR || '/tmp/library-alpha17-evidence/authors'
mkdirSync(evidence,{recursive:true})
const name=`Library metadata smoke ${Date.now()}`,tokenName=name.replaceAll(' ','-')
const occ=(...args)=>execFileSync('docker',['exec','-u','www-data',container,'php','occ',...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']})
execFileSync('docker',['cp',new URL('./metadata-fields-fixture.php',import.meta.url).pathname,`${container}:/tmp/library-metadata-fields-fixture.php`])
const fixture=action=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e',`LIBRARY_SMOKE_USER=${user}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php','/tmp/library-metadata-fields-fixture.php',action],{encoding:'utf8',maxBuffer:5*1024*1024}))
let browser,created=false
const report=[]
try {
 created=true
 const state=fixture('create')
 const output=createTemporaryAppPassword(container,user,tokenName)
 const token=output.match(/app password is:\s*(\S+)/i)?.[1] || output.match(/app password:\s*\n\s*(\S+)/i)?.[1];assert.ok(token)
 const authorization=`Basic ${Buffer.from(`${user}:${token}`).toString('base64')}`
 for(const [engine,launcher] of [['chromium',chromium],['firefox',firefox]]) {
  const original=fixture('read')
  browser=await launcher.launch()
  const context=await browser.newContext({viewport:{width:1440,height:1000}})
  await context.route('**/*',route=>route.continue({headers:{...route.request().headers(),...(new URL(route.request().url()).origin===new URL(upstream).origin?{authorization}:{})}}))
  const page=await context.newPage(),errors=[];page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message))
  const panel=page.locator('.library-inference'),approval=panel.locator('.library-inference-apply')
  const ready=async()=>{await expect(panel).toHaveAttribute('aria-busy','false',{timeout:30000});await expect(approval).toHaveAttribute('aria-busy','false')}
  await page.goto(`${upstream}/apps/library/?infer=1`);await ready()
  await panel.getByRole('combobox',{name:'Library root',exact:true}).selectOption(String(state.rootId));await ready()
  await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('guided')
  await panel.getByRole('button',{name:'Reset assignments from this example',exact:true}).click()
  const author=panel.locator('.library-inference-part').first()
  await author.getByRole('combobox',{name:/^Field:/}).selectOption('author')
  await author.getByText('Transform this value',{exact:true}).click()
  await author.getByRole('textbox',{name:'Map exact value',exact:true}).fill('Science fiction')
  await author.getByRole('textbox',{name:'Replacement value',exact:true}).fill('Abercrombie, Joe & Elizabeth Bear & Abercrombie, Joe & A; B')
  const chips=panel.locator('.library-inference-author-chips strong')
  await expect(chips).toHaveCount(1);await expect(chips.first()).toHaveText('Abercrombie, Joe & Elizabeth Bear & Abercrombie, Joe & A; B')
  await author.getByRole('combobox',{name:'Separate authors by',exact:true}).selectOption('ampersand')
  await expect(chips).toHaveCount(3);assert.deepEqual(await chips.allTextContents(),['Abercrombie, Joe','Elizabeth Bear','A; B'])
  await approval.locator('fieldset details > summary').first().click()
  await approval.locator(`input[value="${state.itemId}:author"]`).check()
  const reviewed=page.waitForResponse(r=>new URL(r.url()).pathname.endsWith('/inference/batches')&&r.request().method()==='POST')
  await approval.getByRole('button',{name:'Review selected changes (1)',exact:true}).click()
  const response=await reviewed;assert.equal(response.status(),200);const plan=await response.json()
  assert.deepEqual(response.request().postDataJSON().proposals[0].changes.author,['Abercrombie, Joe','Elizabeth Bear','A; B'])
  assert.equal(plan.entries[0].changes[0].before,original.creators);assert.equal(plan.entries[0].changes[0].after,'Abercrombie, Joe; Elizabeth Bear; A; B')
  await approval.locator('.library-inference-confirm').scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-author-review.png`})
  await page.setViewportSize({width:390,height:844});await approval.locator('.library-inference-confirm').scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-author-review-mobile.png`})
  assert.ok(await approval.evaluate(el=>el.scrollWidth<=el.clientWidth+1),'Mobile author review fits')
  await page.setViewportSize({width:1440,height:1000})
  const applied=page.waitForResponse(r=>r.url().endsWith(`/batches/${plan.id}/apply`))
  await approval.getByRole('button',{name:'Apply reviewed changes',exact:true}).click();assert.equal((await applied).status(),200);await ready()
  assert.deepEqual(fixture('read').authors,['Abercrombie, Joe','Elizabeth Bear','A; B'])
  // Browse from the actual details drawer to an individual author landing page.
  await page.goto(`${upstream}/apps/library/?q=${encodeURIComponent(name)}`)
  await page.locator('.library-cover-title-button').first().click()
  const links=page.locator('.library-author-links');await expect(links.getByRole('link',{name:'Elizabeth Bear',exact:true})).toBeVisible()
  await links.scrollIntoViewIfNeeded();await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-author-links.png`})
  await links.getByRole('link',{name:'Elizabeth Bear',exact:true}).click();await expect(page).toHaveURL(/\/creators\/Elizabeth/)
  await expect(page.locator('.library-cover-title-button').filter({hasText:name})).toBeVisible()
  await page.screenshot({animations:'disabled',path:`${evidence}/${engine}-author-browse.png`})
  const search=page.locator('#library-creator-search');await search.fill('Abercrombie');await search.focus()
  await expect(page.locator('#library-creator-suggestions').getByRole('button',{name:'Abercrombie, Joe',exact:true})).toBeVisible()
  // Durable author Undo after leaving and reopening the inference page.
  await page.goto(`${upstream}/apps/library/?infer=1`);await ready()
  await approval.locator('.library-inference-history > summary').click()
  await approval.locator('.library-inference-history button').filter({hasText:'Applied'}).first().click();await ready()
  await approval.getByRole('button',{name:'Undo this batch',exact:true}).click()
  const undone=page.waitForResponse(r=>r.url().endsWith(`/batches/${plan.id}/undo`))
  await approval.getByRole('button',{name:'Confirm undo',exact:true}).click();assert.equal((await undone).status(),200);await ready()
  const restored=fixture('read');for(const key of ['creators','authors','fieldSources','fieldValues','metadataSource','userEdited'])assert.deepEqual(restored[key],original[key],key)
  // Maintenance uses one chip per person and must preserve punctuation through its real form.
  await page.goto(`${upstream}/apps/library/items/${state.itemId}`)
  const form=page.locator('.library-detail-edit-form'),editor=form.locator('[data-creator-chip-editor]')
  await expect(editor).toBeVisible()
  const input=editor.locator('.library-creator-chip-input')
  await input.fill('Surname, Given');await input.press('Enter')
  await input.fill('A;B');await input.press('Enter')
  const expected=[...new Set([...original.authors,'Surname, Given','A;B'])]
  await expect.poll(()=>fixture('read').authors,{timeout:30000}).toEqual(expected)
  await page.reload();await expect(editor).toBeVisible()
  assert.deepEqual(await editor.locator('.library-creator-chip span:first-child').allTextContents(),expected)
  fixture('rescan');assert.deepEqual(fixture('read').authors,expected)
  assert.deepEqual(errors,[]);report.push({engine,passed:true,noneDefault:true,commaPreserved:true,orderedChips:true,exactDedupe:true,structuredPayload:true,apply:true,authorLinks:true,individualLanding:true,suggestions:true,durableUndo:true,mobile:true,maintenancePunctuation:true,maintenanceRescanProtection:true})
  await browser.close();browser=null
 }
 writeFileSync(`${evidence}/authors-results.json`,JSON.stringify({report},null,2));console.log(JSON.stringify({report}))
} finally {
 if(browser)await browser.close()
 if(created)assert.equal(fixture('cleanup').cleaned,true)
 const tokens=JSON.parse(occ('user:auth-tokens:list',user,'--output=json'))
 for(const entry of tokens.filter(t=>t.name===tokenName))occ('user:auth-tokens:delete',user,String(entry.id))
}
