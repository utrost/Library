import { expect, test } from '@playwright/test'
import { login } from '../fixtures/nextcloud'

test.skip(process.env.PW_LOOKUP_SETUP_FIXTURE !== '1', 'Requires the disposable metadata_batch_integration fixture')

for (const suffix of ['', ' @mobile']) test('selected-book setup shows only supported fields and preserves browsing' + suffix, async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await login(page)
  await page.goto('/apps/library/?q=Lookup&sort=title&limit=20&page=1')
  await expect(page.locator('#library-catalogue')).toHaveAttribute('aria-busy', 'false')
  await page.locator('.library-item-selection input').first().check()
  await page.locator('.library-list-selection').getByRole('button', { name: 'Find book details', exact: true }).click()
  const setup = page.getByRole('region', { name: 'Find book details', exact: true })
  await expect(setup).toContainText('1 book selected')
  const provider = setup.getByRole('combobox', { name: 'Provider', exact: true })
  await expect(provider).toHaveValue('loc')
  await provider.selectOption('dnb')
  await expect(setup.getByRole('checkbox', { name: 'Cover', exact: true })).toHaveCount(0)
  await expect(setup.getByRole('checkbox', { name: 'GGKEY', exact: true })).toHaveCount(0)
  await provider.selectOption('openlibrary')
  await expect(setup.getByRole('checkbox', { name: 'Cover', exact: true })).not.toBeChecked()
  await expect(setup.getByRole('button', { name: 'Find matches', exact: true })).toBeEnabled()
  await setup.getByRole('button', { name: 'Back to browsing', exact: true }).click()
  await expect(setup).toHaveCount(0)
  expect(new URL(page.url()).searchParams.get('q')).toBe('Lookup')
  expect(new URL(page.url()).searchParams.get('sort')).toBe('title')
  expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false)
  expect(errors).toEqual([])
})
