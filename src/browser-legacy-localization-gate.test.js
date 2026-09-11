import { describe, expect, it } from 'vitest'
import { evaluateLegacyLocalizationGate } from '../scripts/browser-legacy-localization-gate.mjs'

const locales = ['de', 'ar']
const widths = [1280, 390, 320]
const surfaces = ['settings', 'batch', 'detail']
const expected = { de: { lang: 'de', dir: 'ltr' }, ar: { lang: 'ar', dir: 'rtl' } }
const records = () => locales.flatMap((locale) => widths.flatMap((width) => surfaces.map((surface) => ({
  locale, width, surface, present: true, status: 200, overflow: true, missingLabels: [], lang: locale, dir: expected[locale].dir,
  geometryGate: { pass: true }, keyboardTraversal: { pass: true }, failures: 0, forms: 1, expectedFormMinimum: 1, safeForms: true,
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
})
