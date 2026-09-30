import { test, expect } from '@playwright/test'
import { login, attachCheckpoint, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear } from '../fixtures/nextcloud'

test('settings explanations use accessible label help @help @smoke',async({page},info)=>{
  const failures=collectBrowserFailures(page)
  await login(page);assertKnownNextcloudLoginFailuresAndClear(failures)
  await page.goto('/settings/user/library')
  const help=page.locator('[data-library-help-button]').first()
  await expect(help).toBeVisible()
  // Navigation can leave the pointer over a help label in Firefox.
  await page.mouse.move(1, 1)
  await page.keyboard.press('Escape')
  await expect(page.locator('[data-library-help]:visible')).toHaveCount(0)
  const pathLabel = page.locator('.library-folder-path-field label').first()
  expect(await pathLabel.evaluate((label: HTMLLabelElement) => label.control === label.querySelector('input'))).toBe(true)
  const bounds = await pathLabel.locator('[data-library-help-button]').boundingBox()
  const inputBounds = await pathLabel.locator('input').boundingBox()
  expect(bounds).not.toBeNull()
  expect(inputBounds).not.toBeNull()
  expect(bounds!.width).toBeLessThanOrEqual(32)
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(inputBounds!.y)
  await help.focus()
  await expect(page.locator('[data-library-help]:visible')).toHaveCount(1)
  await expect(page.locator('[data-library-help]:visible')).toContainText('Configure the folders')
  await page.keyboard.press('Escape')
  await expect(page.locator('[data-library-help]:visible')).toHaveCount(0)
  await attachCheckpoint(page,info,'settings-context-help')
  failures.assertNone()
})
