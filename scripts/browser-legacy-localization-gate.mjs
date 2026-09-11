export function evaluateLegacyLocalizationGate(records, { locales, widths, surfaces, expected, expectedEffectiveLocale, restored, normalizeLocale }) {
  const rows = Array.isArray(records) ? records : []
  const surfaceOk = (locale, surface) => {
    const matching = rows.filter((row) => row.locale === locale && row.surface === surface)
    return matching.length === widths.length && matching.every((row) => row.present && row.status === 200 && row.overflow === true
      && row.missingLabels.length === 0 && normalizeLocale(row.lang) === expected[locale].lang
      && row.dir === expected[locale].dir && row.geometryGate?.pass === true
      && row.keyboardTraversal?.pass === true && row.failures === 0)
  }
  const expectedRowsPerWidth = locales.length * surfaces.length
  const desktopRows = rows.filter((row) => row.width === 1280)
  const mobileWidths = widths.filter((width) => width < 500)
  const mobileRows = rows.filter((row) => mobileWidths.includes(row.width))
  const desktop = desktopRows.length === expectedRowsPerWidth
    && desktopRows.every((row) => row.overflow === true && row.geometryGate?.pass === true)
  const mobile = mobileWidths.length === 2 && mobileWidths.includes(390) && mobileWidths.includes(320)
    && mobileRows.length === expectedRowsPerWidth * mobileWidths.length
    && mobileWidths.every((width) => mobileRows.filter((row) => row.width === width).length === expectedRowsPerWidth)
    && mobileRows.every((row) => row.overflow === true && row.geometryGate?.pass === true)
  const safeForms = rows.length > 0 && rows.every((row) => row.forms >= row.expectedFormMinimum && row.safeForms)
  const markers = {
    browser_legacy_settings_de: surfaceOk('de', 'settings'), browser_legacy_settings_ar: surfaceOk('ar', 'settings'),
    browser_legacy_batch_preview_de: surfaceOk('de', 'batch'), browser_legacy_batch_preview_ar: surfaceOk('ar', 'batch'),
    browser_legacy_full_details_de: surfaceOk('de', 'detail'), browser_legacy_full_details_ar: surfaceOk('ar', 'detail'),
    browser_legacy_desktop_no_overflow: desktop, browser_legacy_mobile_no_overflow: mobile,
    browser_legacy_safe_forms: safeForms, browser_locale_restored: restored === true,
  }
  return { markers, ok: Object.values(markers).every((value) => value === true), expectedRowsPerWidth, expectedMobileRows: expectedRowsPerWidth * 2 }
}
