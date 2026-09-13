import { describe, expect, it } from 'vitest'
import { evaluateLegacyLocalizationGate } from '../scripts/browser-legacy-localization-gate.mjs'

const locales = ['de', 'ar']
const widths = [1280, 390, 320]
const surfaces = ['settings', 'batch', 'detail']
const expected = { de: { lang: 'de', dir: 'ltr' }, ar: { lang: 'ar', dir: 'rtl' } }
const records = () => locales.flatMap((locale) => widths.flatMap((width) => surfaces.map((surface) => ({
  locale, width, surface, present: true, status: 200, overflow: true, missingLabels: [], lang: locale, dir: expected[locale].dir,
  openedIndexedFilesGeometry: true, geometryGate: { pass: true }, keyboardTraversal: { pass: true }, failures: 0, forms: 1, expectedFormMinimum: 1, safeForms: true,
}))))
const evaluate = (rows) => evaluateLegacyLocalizationGate(rows, { locales, widths, surfaces, expected,
  expectedEffectiveLocale: 'en', restored: true, normalizeLocale: (value) => value })

describe('legacy localization width aggregation', () => {
  it('requires exact 1280, 390, and 320 row counts', () => {
    const result = evaluate(records())
    expect(result.ok).toBe(true)
    expect(result.expectedRowsPerWidth).toBe(6)
    expect(result.expectedMobileRows).toBe(12)
  })

  it('makes one otherwise-valid 320 overflow failure control surface, mobile, and final results', () => {
    const mutated = records().map((row) => row.locale === 'de' && row.width === 320 && row.surface === 'settings' ? { ...row, overflow: false } : row)
    const result = evaluate(mutated)
    expect(result.markers.browser_legacy_settings_de).toBe(false)
    expect(result.markers.browser_legacy_mobile_no_overflow).toBe(false)
    expect(result.ok).toBe(false)
  })

  it('mutation-tests opened indexed-file geometry without weakening the global overflow gate', () => {
    const mutated = records().map((row) => row.locale === 'ar' && row.width === 390 && row.surface === 'settings' ? { ...row, openedIndexedFilesGeometry: false } : row)
    const result = evaluate(mutated)
    expect(result.markers.browser_legacy_settings_ar).toBe(false)
    expect(result.markers.browser_legacy_mobile_no_overflow).toBe(false)
    expect(result.markers.browser_legacy_safe_forms).toBe(true)
  })

  it.each([
    { present: false, status: 0 },
    { present: false, status: 404 },
    { present: true, status: 404 },
  ])('fails every relevant downstream aggregate and reports an unavailable stale-evidence prerequisite %#', (availability) => {
    const mutated = records().map((row) => row.locale === 'de' && row.width === 1280 && row.surface === 'detail'
      ? { ...row, ...availability, overflow: true, geometryGate: { pass: true }, safeForms: true, failures: 0 }
      : row)
    const result = evaluate(mutated)
    expect(result.markers.browser_legacy_full_details_de).toBe(false)
    expect(result.markers.browser_legacy_desktop_no_overflow).toBe(false)
    expect(result.markers.browser_legacy_safe_forms).toBe(false)
    expect(result.prerequisiteFailures).toContainEqual(expect.objectContaining({ locale: 'de', width: 1280, surface: 'detail' }))
  })

  it('makes wrong locale, direction, and observation failures prerequisites for downstream aggregates', () => {
    for (const mutation of [{ lang: 'ar' }, { dir: 'rtl' }, { failures: 1 }]) {
      const mutated = records().map((row) => row.locale === 'de' && row.width === 390 && row.surface === 'batch' ? { ...row, ...mutation } : row)
      const result = evaluate(mutated)
      expect(result.markers.browser_legacy_mobile_no_overflow).toBe(false)
      expect(result.markers.browser_legacy_safe_forms).toBe(false)
      expect(result.prerequisiteFailures).toHaveLength(1)
    }
  })
})
