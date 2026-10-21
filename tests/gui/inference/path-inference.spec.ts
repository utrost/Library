import { expect, test } from '@playwright/test'
import { login, attachCheckpoint, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear, requiredPositiveIntegerEnvironment } from '../fixtures/nextcloud'

test('patterns select immediately, persist privately and delete; inference stays read-only @inference @smoke', async ({ page }, info) => {
  test.setTimeout(120_000)
  const failures = collectBrowserFailures(page)
  await login(page); assertKnownNextcloudLoginFailuresAndClear(failures)
  await page.goto('/apps/library/?infer=1')
  const panel = page.locator('.library-inference')
  await expect(panel).toHaveAttribute('aria-busy','false')
  const worklist=panel.locator('.library-inference-worklist')
  await expect(worklist.locator('.library-inference-worklist-row')).toHaveCount(Math.min(40, requiredPositiveIntegerEnvironment('PW_TOTAL_CARDS')))
  await worklist.getByRole('combobox',{name:'Pattern for matching files'}).selectOption('preset-title')
  const bulk=worklist.getByRole('button',{name:/Assign to matching files/})
  await expect(bulk).toBeEnabled()
  await bulk.click()
  await expect(worklist.locator('.library-inference-worklist-row select').first()).toHaveValue('preset-title')
  const rootId = await panel.getByRole('combobox',{name:'Shelf',exact:true}).inputValue()
  const before = await page.evaluate(async id=>(await fetch(`/apps/library/api/inference/sample?rootId=${id}`)).json(),rootId)
  await panel.locator('.library-inference-configuration > summary').click()
  await panel.locator('.library-inference-customize > summary').click()
  await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern')
  const templates=panel.locator('.library-inference-templates')
  const input=panel.getByRole('textbox',{name:'Advanced pattern',exact:true})
  await expect(templates).toHaveAttribute('aria-busy','false')
  const picker=templates.getByRole('combobox',{name:'Pattern',exact:true})
  await picker.selectOption('preset-by')
  await expect(input).toHaveValue('%folders%/%title% by %author%.%extension%')
  await expect(templates.getByRole('button',{name:'Use this pattern'})).toHaveCount(0)
  const examplePath = await panel.getByRole('combobox', { name: 'Example path', exact: true }).inputValue()
  const expectedTitle = examplePath.split('/').at(-1)!.replace(/\.[^.]+$/, '')
  await picker.selectOption('preset-title')
  await expect(panel.locator('.library-inference-live dd strong').first()).toHaveText(expectedTitle)
  // Keep syntax explanatory copy out of the layout, but accessible by focus and Escape.
  const help=panel.locator('label').filter({has:page.getByRole('textbox',{name:'Advanced pattern',exact:true})}).getByRole('button',{name:'Help: Advanced pattern',exact:true})
  await help.focus(); await expect(page.getByRole('tooltip')).toContainText('%title% and %subtitle%')
  await page.keyboard.press('Escape'); await expect(page.getByRole('tooltip')).toHaveCount(0)
  const name=`Pattern ${info.project.name} ${Date.now()}`
  let id=''
  try {
    await picker.selectOption('__new__')
    await templates.getByRole('textbox',{name:'Pattern name',exact:true}).fill(name)
    await templates.getByRole('button',{name:'Save new pattern'}).click()
    await expect(templates.getByRole('status')).toContainText('Pattern saved')
    id=await picker.inputValue()
    expect(id).toMatch(/^[a-f0-9]{32}$/)
    await page.reload();await expect(panel).toHaveAttribute('aria-busy','false')
    await panel.locator('.library-inference-configuration > summary').click()
    await panel.locator('.library-inference-customize > summary').click()
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
  await panel.locator('.library-inference-configuration > summary').click()
  await panel.locator('.library-inference-customize > summary').click()
  await panel.getByRole('combobox',{name:'Rule editor',exact:true}).selectOption('pattern')
  const help=panel.locator('label').filter({has:page.getByRole('textbox',{name:'Advanced pattern',exact:true})}).getByRole('button',{name:'Help: Advanced pattern',exact:true})
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

test('two files can use different patterns in one review request @inference @smoke', async ({ page }, info) => {
  await login(page)
  await page.route('**/apps/library/api/inference/sample?*', async route => {
    const response = await route.fetch()
    const data = await response.json()
    if (!data.items || data.items.length < 2) return route.fulfill({ response })
    const items = data.items.slice(0, 2).map((item: Record<string, unknown>, index: number) => ({
      ...item,
      path: index === 0 ? 'Title by Ada Quill.epub' : 'Second - Bob Smith (2020).epub',
      current: {},
    }))
    await route.fulfill({ response, json: { ...data, items, hasNext: false } })
  })
  await page.goto('/apps/library/?infer=1')
  const panel = page.locator('.library-inference')
  await expect(panel).toHaveAttribute('aria-busy', 'false')
  const rows = panel.locator('.library-inference-worklist-row')
  await expect(rows).toHaveCount(2)
  await rows.nth(0).locator('select').selectOption('preset-by')
  await rows.nth(1).locator('select').selectOption('preset-title-author-year')
  await rows.nth(0).getByRole('checkbox', { name: /^Creators:/ }).check()
  await rows.nth(1).getByRole('checkbox', { name: /^Publication year:/ }).check()
  await attachCheckpoint(page, info, 'mixed-pattern-worklist')
  const posted = page.waitForRequest(request => new URL(request.url()).pathname.endsWith('/inference/batches') && request.method() === 'POST')
  await page.route('**/apps/library/api/inference/batches', route => route.fulfill({ status: 422, json: { error: 'test_review_only' } }))
  await panel.getByRole('button', { name: 'Review selected changes (2)' }).click()
  const request = await posted
  const body = request.postDataJSON()
  expect(body.proposals).toHaveLength(2)
  expect(body.proposals[0].changes).toHaveProperty('author')
  expect(body.proposals[1].changes).toHaveProperty('year', '2020')
  const context = JSON.parse(body.context)
  expect(context.mode).toBe('mixed')
  expect(context.assignments[String(body.proposals[0].id)]).toBe('preset-by')
  expect(context.assignments[String(body.proposals[1].id)]).toBe('preset-title-author-year')
  expect(Object.keys(context.definitions)).toEqual(['preset-by', 'preset-title-author-year'])
})
