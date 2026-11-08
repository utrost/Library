import { test, expect } from '@playwright/test'
import { performance } from 'node:perf_hooks'
import { login, collectBrowserFailures, assertKnownNextcloudLoginFailuresAndClear, attachCheckpoint } from '../fixtures/nextcloud'

for (const suffix of ['', ' @mobile']) test('curation remains responsive with the synthetic 100k catalogue' + suffix, async ({ page }, info) => {
  test.skip(process.env.PW_SCALE_FIXTURE !== '1', 'Requires tests/php/curation_scale.php on a disposable instance')
  test.setTimeout(150000)
  expect(process.env.PW_USER).toBe('library-scale')
  const failures = collectBrowserFailures(page)
  await login(page)
  assertKnownNextcloudLoginFailuresAndClear(failures)
  const samples: Record<string, number[]> = { incoming: [], home: [], filter: [] }
  for (let run = 0; run < 6; run++) {
    let start = performance.now()
    await page.goto('/apps/library/?curation=1')
    const curation = page.locator('main.curation')
    await expect(curation.locator('.inbox-row')).toHaveCount(50)
    samples.incoming.push(Math.round(performance.now() - start))
    start = performance.now()
    await curation.getByRole('combobox', { name: 'Show', exact: true }).selectOption('all')
    await expect(curation.getByRole('combobox', { name: 'Show', exact: true })).toBeEnabled()
    await expect(curation.locator('.inbox-row')).toHaveCount(50)
    samples.filter.push(Math.round(performance.now() - start))
    start = performance.now()
    await page.goto('/apps/library/?home=1')
    await expect(page.locator('.personal-home .cards article').first()).toBeVisible()
    await expect(page.getByRole('button', { name: 'Customise Home', exact: true })).toBeEnabled()
    samples.home.push(Math.round(performance.now() - start))
  }
  const median = (values: number[]) => [...values].sort((a,b)=>a-b)[Math.floor(values.length / 2)]
  const summary = Object.fromEntries(Object.entries(samples).map(([key, values]) => [key, { coldMs: values[0], warmMedianMs: median(values.slice(1)), maxMs: Math.max(...values), samplesMs: values }]))
  console.log('curation_scale_browser=' + JSON.stringify({ project: info.project.name, ...summary }))
  await info.attach('scale-timings', { body: JSON.stringify(summary, null, 2), contentType: 'application/json' })
  await attachCheckpoint(page, info, 'synthetic-scale-home')
  for (const result of Object.values(summary)) expect(result.warmMedianMs).toBeLessThan(2000)
  failures.assertNone()
})
