import { test, expect } from '@playwright/test'
import { login, collectBrowserFailures } from '../fixtures/nextcloud'

test('administrator can configure thumbnail budget and retention @settings @performance', async ({ page }, testInfo) => {
  const failures = collectBrowserFailures(page)
  await login(page)
  await page.goto('/settings/admin/library')
  const budget = page.getByLabel('Cache budget per account (MiB)', { exact: true })
  const retention = page.getByLabel('Retention (hours)', { exact: true })
  await expect(budget).toBeVisible()
  const previousBudget = await budget.inputValue()
  const previousRetention = await retention.inputValue()
  const save = async (bytes: string, hours: string) => {
    await budget.fill(bytes)
    await retention.fill(hours)
    await Promise.all([
      page.waitForNavigation({waitUntil:'domcontentloaded'}),
      page.getByRole('button', { name: 'Save', exact: true }).click(),
    ])
    await expect(budget).toHaveValue(bytes)
    await expect(retention).toHaveValue(hours)
  }
  try {
    await save('64', '72')
    await page.reload()
    await expect(budget).toHaveValue('64')
    await expect(retention).toHaveValue('72')
    await page.screenshot({ path: testInfo.outputPath('thumbnail-admin.png'), fullPage: true })
    await save('0', '24')
    const rejected = await page.request.post('/apps/library/admin/thumbnails', { form: { budgetMiB: '64', retentionHours: '72' } })
    expect(rejected.status()).toBe(412)
  } finally {
    await page.goto('/settings/admin/library')
    await save(previousBudget, previousRetention)
  }
  failures.assertNone()
})
