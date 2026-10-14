import { expect, test } from '@playwright/test'
import { assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint, collectBrowserFailures, login, openLibrary } from '../fixtures/nextcloud'

test('keeps list covers readable and action buttons inside the table @catalogue @list @visual', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1787, height: 1300 })
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const toolbar = page.getByRole('form', { name: 'Catalogue toolbar' })
  const listResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('view') === 'list'
  })
  await toolbar.getByRole('button', { name: 'List' }).click()
  expect((await listResponse).ok()).toBeTruthy()

  const catalogue = page.locator('#library-catalogue')
  const list = catalogue.getByRole('table', { name: 'Catalogue list' })
  await expect(list.locator('.library-catalogue-list-row').first()).toBeVisible()
  const firstImage = list.locator('.library-catalogue-list-cover img').first()
  await expect.poll(() => firstImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true)

  const coverHeights = await list.locator('.library-catalogue-list-cover img').evaluateAll((images: HTMLImageElement[]) =>
    images.slice(0, 10).map((image) => Math.round(image.getBoundingClientRect().height)))
  expect(coverHeights.length).toBeGreaterThan(0)
  expect(coverHeights.every((height) => height === 96)).toBe(true)
  const visibleCovers = list.locator('.library-catalogue-list-cover img').all()
  await expect.poll(async () => Promise.all((await visibleCovers).slice(0, 7).map((image) =>
    image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)))).toEqual(Array(7).fill(true))
  const coverRendering = await list.locator('.library-catalogue-list-cover img').evaluateAll((images: HTMLImageElement[]) =>
    images.slice(0, 7).map((image) => {
      const box = image.getBoundingClientRect()
      const style = getComputedStyle(image)
      return {
        ratioDifference: Math.abs(box.width / box.height - image.naturalWidth / image.naturalHeight),
        objectFit: style.objectFit,
        width: box.width,
        height: box.height,
      }
    }))
  // A constrained square/landscape image can have a narrower CSS box while
  // object-fit: contain preserves the actual artwork without cropping it.
  expect(coverRendering.every(({ ratioDifference, objectFit, width, height }) =>
    width > 0 && height > 0 && (ratioDifference < 0.03 || objectFit === 'contain')),
  JSON.stringify(coverRendering)).toBe(true)

  const creatorOverflow = await list.locator('.library-catalogue-list-creators > bdi').evaluateAll((creators: HTMLElement[]) =>
    creators.slice(0, 10).map((creator) => creator.scrollWidth > creator.clientWidth + 1))
  expect(creatorOverflow).not.toContain(true)
  const metadataOverflow = await list.locator('.library-catalogue-list-row > td > bdi').evaluateAll((fields: HTMLElement[]) =>
    fields.map((field) => field.scrollWidth > field.clientWidth + 1))
  expect(metadataOverflow).not.toContain(true)

  const scroll = page.locator('[data-library-catalogue-list-scroll]')
  const geometry = await scroll.evaluate((container) => {
    const button = container.querySelector('.library-catalogue-list-actions a')
    if (!(button instanceof HTMLElement)) throw new Error('Open action is missing')
    const buttonRect = button.getBoundingClientRect()
    const actions = [...container.querySelectorAll('.library-catalogue-list-actions a, .library-catalogue-list-actions button')] as HTMLElement[]
    const trailingMargin = Math.max(0, ...actions.map(action => Number.parseFloat(getComputedStyle(action).marginInlineEnd) || 0))
    const actionsRight = Math.max(...actions.map(action => action.getBoundingClientRect().right))
    const containerRect = container.getBoundingClientRect()
    return {
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth,
      trailingMargin,
      actionsRight,
      buttonLeft: buttonRect.left,
      buttonRight: buttonRect.right,
      containerLeft: containerRect.left,
      containerRight: containerRect.right,
    }
  })
  // A trailing button margin can extend the scroll box without clipping an action.
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.clientWidth + geometry.trailingMargin + 1)
  expect(geometry.actionsRight).toBeLessThanOrEqual(geometry.containerRight + 1)
  expect(geometry.buttonLeft).toBeGreaterThanOrEqual(geometry.containerLeft)
  expect(geometry.buttonRight).toBeLessThanOrEqual(geometry.containerRight + 1)
  await expect(list.locator('.library-catalogue-list-actions').first().getByRole('link', { name: 'Open', exact: true })).toBeVisible()
  await expect(list.locator('.library-catalogue-list-actions').first().getByRole('button', { name: 'Details', exact: true })).toBeVisible()

  await attachCheckpoint(page, testInfo, 'catalogue-list-layout')
  browserFailures.assertNone()
})

test('keeps the list table horizontally usable on phones @catalogue @list @mobile', async ({ page }, testInfo) => {
  const browserFailures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(browserFailures)
  await openLibrary(page)

  const toolbar = page.getByRole('form', { name: 'Catalogue toolbar' })
  const listResponse = page.waitForResponse((response) => {
    const url = new URL(response.url())
    return url.pathname.endsWith('/apps/library/catalogue') && url.searchParams.get('view') === 'list'
  })
  await toolbar.getByRole('button', { name: 'List' }).click()
  expect((await listResponse).ok()).toBeTruthy()

  const scroll = page.locator('[data-library-catalogue-list-scroll]')
  const initial = await scroll.evaluate((container) => ({
    scrollWidth: container.scrollWidth,
    clientWidth: container.clientWidth,
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
  }))
  expect(initial.scrollWidth).toBeGreaterThan(initial.clientWidth)
  expect(initial.documentWidth).toBeLessThanOrEqual(initial.viewportWidth + 1)
  await attachCheckpoint(page, testInfo, 'catalogue-list-mobile-start')

  await scroll.evaluate((container) => { container.scrollLeft = container.scrollWidth })
  const open = page.locator('.library-catalogue-list-actions').first().getByRole('link', { name: 'Open', exact: true })
  await expect(open).toBeVisible()
  const actionFits = await scroll.evaluate((container) => {
    const button = container.querySelector('.library-catalogue-list-actions a')
    if (!(button instanceof HTMLElement)) return false
    const buttonRect = button.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    return buttonRect.left >= containerRect.left && buttonRect.right <= containerRect.right + 1
  })
  expect(actionFits).toBe(true)
  await attachCheckpoint(page, testInfo, 'catalogue-list-mobile-actions')
  browserFailures.assertNone()
})
