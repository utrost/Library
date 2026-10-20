// Capture the beginner journey on an empty, explicitly owned disposable instance.
import { chromium } from '@playwright/test'
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
const base = process.env.PW_BASE_URL, container = process.env.LIBRARY_LISTS_CONTAINER
const out = process.env.SCREENSHOT_DIR || 'docs/images/first-library'
if (!base || !container || !process.env.PW_PASSWORD) throw new Error('Disposable instance environment required')
const label = execFileSync('docker', ['inspect', '--format', '{{index .Config.Labels "library.disposable"}}', container], {encoding:'utf8'}).trim()
if (label !== 'personal-lists') throw new Error('Only disposable fixtures may supply public screenshots')
mkdirSync(out, {recursive:true})
const browser = await chromium.launch()
try {
 const context = await browser.newContext({viewport:{width:1440,height:1000},colorScheme:'light'})
 const page = await context.newPage()
 await page.goto(base+'/login')
 await page.locator('#user').fill(process.env.PW_USER)
 await page.locator('#password').fill(process.env.PW_PASSWORD)
 await Promise.all([page.waitForURL(url=>!url.pathname.endsWith('/login')),page.locator('button[type=submit]').click()])
 const shot = async (name, locator) => { await locator.scrollIntoViewIfNeeded(); await locator.screenshot({path:`${out}/${name}.png`,animations:'disabled'}) }
 const submit = async button => { await Promise.all([page.waitForEvent('framenavigated',{predicate:frame=>frame===page.mainFrame()}),button.click()]); await page.waitForLoadState('load') }
 await page.goto(base+'/settings/user/library')
 if (await page.locator('.library-root-card').count()) throw new Error('Start with an empty disposable Library; this capture creates its first root')
 const add = page.locator('.library-add-shelf-card')
 await add.getByRole('textbox',{name:'Folder path',exact:true}).fill('/Books/Gutenberg English')
 await add.getByRole('textbox',{name:'Label',exact:true}).fill('Gutenberg English')
 await add.getByRole('textbox',{name:'Label',exact:true}).press('Home')
 await add.getByRole('heading',{name:'Add a shelf',exact:true}).click()
 await shot('01-add-folder',add)
 await submit(add.getByRole('button',{name:'Save shelf',exact:true}))
 const root = page.locator('.library-root-card').filter({hasText:'/Books/Gutenberg English'})
 await shot('02-saved-folder',root)
 await submit(root.getByRole('button',{name:'Scan this shelf',exact:true}))
 execFileSync('docker',['exec','-u','www-data',container,'php','occ','background-job:worker','--stop_after=5',"OCA\\Library\\BackgroundJob\\ScanJob"],{stdio:'pipe'})
 for(let i=0;i<60;i++) {
   await page.reload()
   if ((await page.locator('[data-library-scan-status]').textContent())?.trim()==='completed') break
   if(i===59) throw new Error('Scan did not complete')
   await page.waitForTimeout(1000)
 }
 await shot('03-scan-complete',page.locator('.library-scan-progress'))
 await page.locator('#library-scan-interval').selectOption('86400')
 await submit(page.getByRole('button',{name:'Save schedule',exact:true}))
 await shot('06-automatic-scans',page.locator('.library-scan-schedule'))
 await page.goto(base+'/apps/library/?view=compact&limit=100')
 await page.locator('.library-cover-card').first().waitFor()
 // Wait for the visible covers and their fallback artwork to settle.
 await page.waitForFunction(()=>document.querySelectorAll('.library-cover-card').length===40 && [...document.querySelectorAll('.library-cover-card img[src]')].every(i=>i.complete))
 await page.screenshot({path:out+'/04-browse.png',animations:'disabled'})
 await page.locator('.library-cover-card').first().locator('.library-quick-view').click()
 await page.locator('#app-sidebar-vue').getByRole('navigation',{name:'Publication detail sections'}).waitFor()
 await page.waitForTimeout(400)
 await page.screenshot({path:out+'/05-book-details.png',animations:'disabled'})
 console.log('first_library_screenshots_captured=true')
} finally { await browser.close() }
