import { expect, test } from '@playwright/test'
import { login, attachCheckpoint, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear } from '../fixtures/nextcloud'

test('patterns select immediately, persist privately and delete; inference stays read-only @inference @smoke', async ({ page }, info) => {
  test.setTimeout(120_000)
  const failures = collectBrowserFailures(page)
  await login(page); assertKnownNextcloudLoginFailuresAndClear(failures)
  await page.goto('/apps/library/?infer=1')
  const panel = page.locator('.library-inference')
  await expect(panel).toHaveAttribute('aria-busy','false')
  await expect(panel.locator('.library-inference-step').filter({has:page.getByRole('heading',{name:'3. Review the sample',exact:true})}).locator('.library-inference-result')).toHaveCount(40)
  const rootId = await panel.getByRole('combobox',{name:'Library root',exact:true}).inputValue()
  const before = await page.evaluate(async id=>(await fetch(`/apps/library/api/inference/sample?rootId=${id}`)).json(),rootId)
  await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern')
  const templates=panel.locator('.library-inference-templates')
  await expect(templates).toHaveAttribute('aria-busy','false')
  const picker=templates.getByRole('combobox',{name:'Pattern',exact:true})
  const input=panel.getByRole('textbox',{name:'Advanced pattern',exact:true})
  await picker.selectOption('preset-by')
  await expect(input).toHaveValue('%folders%/%title% by %author%.%extension%')
  await expect(templates.getByRole('button',{name:'Use this pattern'})).toHaveCount(0)
  await picker.selectOption('preset-title')
  await expect(panel.locator('.library-inference-live dd strong').first()).toContainText('pg')
  // Keep syntax explanatory copy out of the layout, but accessible by focus and Escape.
  const help=panel.locator('label').filter({has:page.getByRole('textbox',{name:'Advanced pattern',exact:true})}).getByRole('button',{name:'Help',exact:true})
  await help.focus(); await expect(page.getByRole('tooltip')).toContainText('Placeholders capture text')
  await page.keyboard.press('Escape'); await expect(page.getByRole('tooltip')).toHaveCount(0)
  const name=`Pattern ${info.project.name} ${Date.now()}`
  let id=''
  try {
    await templates.getByRole('textbox',{name:'Pattern name',exact:true}).fill(name)
    await templates.getByRole('button',{name:'Save current pattern as new'}).click()
    await expect(templates.getByRole('status')).toContainText('Pattern saved')
    id=await picker.inputValue()
    expect(id).toMatch(/^[a-f0-9]{32}$/)
    await page.reload();await expect(panel).toHaveAttribute('aria-busy','false')
    await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern')
    await expect(templates).toHaveAttribute('aria-busy','false')
    await picker.selectOption(id)
    await expect(input).toHaveValue('%folders%/%title%.%extension%')
    await attachCheckpoint(page,info,'inference-pattern-preview')
    await templates.getByRole('button',{name:'Delete pattern',exact:true}).click()
    await templates.getByRole('button',{name:'Confirm deletion',exact:true}).click()
    await expect(picker.locator(`option[value="${id}"]`)).toHaveCount(0)
    id=''
    await input.fill('%unknown%')
    await expect(panel.locator('.library-inference-live')).toContainText('Invalid pattern or value')
    await expect(panel.locator('.library-inference-live dt')).toHaveCount(0)
    const after=await page.evaluate(async id=>(await fetch(`/apps/library/api/inference/sample?rootId=${id}`)).json(),rootId)
    expect(after.items).toEqual(before.items)
    failures.assertNone()
  } finally {
    if (id) await page.evaluate(async id=>fetch(`/apps/library/api/inference/patterns/${id}/delete`,{method:'POST',headers:{requesttoken:(document.querySelector('#library-vue-root') as HTMLElement).dataset.requestToken!}}),id)
  }
})

test('inference label help works by tap without horizontal overflow @inference @mobile', async({page},info)=>{
  await login(page);await page.goto('/apps/library/?infer=1')
  const panel=page.locator('.library-inference')
  await expect(panel).toHaveAttribute('aria-busy','false')
  await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern')
  const input=panel.getByRole('textbox',{name:'Advanced pattern',exact:true})
  const help=panel.locator('label').filter({has:page.getByRole('textbox',{name:'Advanced pattern',exact:true})}).getByRole('button',{name:'Help',exact:true})
  await help.click();await expect(page.getByRole('tooltip')).toBeInViewport()
  const box=await page.getByRole('tooltip').boundingBox();expect(box!.x).toBeGreaterThanOrEqual(0);expect(box!.x+box!.width).toBeLessThanOrEqual(391)
  await page.keyboard.press('Escape')
  expect(await panel.evaluate(el=>el.scrollWidth>el.clientWidth+1)).toBe(false)
  await attachCheckpoint(page,info,'inference-mobile')
})

test('saved pattern API enforces ownership, validation and CSRF @inference @security',async({page,browser},info)=>{
  await login(page);await page.goto('/apps/library/?infer=1')
  const invoke=async(path='',body?:Record<string,unknown>,badToken=false)=>page.evaluate(async({path,body,badToken})=>{
    const token=(document.querySelector('#library-vue-root') as HTMLElement).dataset.requestToken || ''
    const response=await fetch(`/apps/library/api/inference/patterns${path}`,{method:body?'POST':'GET',headers:{'Content-Type':'application/json',requesttoken:badToken?'invalid':token},...(body?{body:JSON.stringify(body)}:{})})
    return {status:response.status,data:await response.json()}
  },{path,body,badToken})
  const name=`Security ${info.project.name} ${Date.now()}`
  expect((await invoke('',{name,pattern:'%unknown%'})).status).toBe(422)
  expect((await invoke('',{name,pattern:'%title%%author%.epub'})).status).toBe(422)
  const rejected=await page.evaluate(async()=>{
    const response=await fetch('/apps/library/api/inference/patterns',{method:'POST',headers:{'Content-Type':'application/json',requesttoken:'invalid'},body:JSON.stringify({name:'Invalid CSRF',pattern:'%title%.epub'})});return response.status
  })
  expect([403,412]).toContain(rejected)
  const saved=await invoke('',{name,pattern:'%title%.%extension%'});expect(saved.status).toBe(201)
  const id=saved.data.saved.id
  const context=await browser.newContext()
  try {
    expect((await invoke('',{name,pattern:'%author%.%extension%'})).status).toBe(409)
    const other=await context.newPage()
    await other.goto(new URL('/login',page.url()).href)
    await other.locator('#user').fill('library-lists-other');await other.locator('#password').fill('Disposable-lists-other-2026')
    await Promise.all([other.waitForURL(url=>!url.pathname.endsWith('/login')),other.locator('button[type=submit]').click()])
    await other.goto(new URL('/apps/library/?infer=1',page.url()).href)
    const result=await other.evaluate(async id=>{
      const before=await (await fetch('/apps/library/api/inference/patterns')).json()
      const token=(document.querySelector('#library-vue-root') as HTMLElement).dataset.requestToken || ''
      const deleted=await fetch(`/apps/library/api/inference/patterns/${id}/delete`,{method:'POST',headers:{requesttoken:token}})
      return {before,status:deleted.status}
    },id)
    expect(result.before.patterns.some((entry:{id:string})=>entry.id===id)).toBe(false)
    expect(result.status).toBe(200) // Idempotent delete applies only to the caller's preferences.
    expect((await invoke()).data.patterns.some((entry:{id:string})=>entry.id===id)).toBe(true)
  } finally {await context.close();await invoke(`/${id}/delete`,{})}
})
