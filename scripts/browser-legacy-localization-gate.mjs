export function evaluateLegacyLocalizationGate(records, { locales, widths, surfaces, expected, expectedEffectiveLocale, restored, normalizeLocale }) {
  const rows = Array.isArray(records) ? records : []
  const expectedKeys = locales.flatMap((locale) => widths.flatMap((width) => surfaces.map((surface) => `${locale}:${width}:${surface}`)))
  const rowKey = (row) => `${row?.locale}:${row?.width}:${row?.surface}`
  const prerequisiteOk = (row) => row?.present === true && Number(row.status) === 200 && Number(row.failures) === 0
    && expected[row.locale] != null && normalizeLocale(row.lang) === expected[row.locale].lang && row.dir === expected[row.locale].dir
  const prerequisiteFailures = expectedKeys.flatMap((key) => {
    const matching = rows.filter((row) => rowKey(row) === key)
    if (matching.length === 1 && prerequisiteOk(matching[0])) return []
    const [locale, width, surface] = key.split(':')
    return [{ locale, width: Number(width), surface, reason: matching.length !== 1 ? 'expected_row_not_uniquely_available' : 'expected_row_prerequisite_failed', present: matching[0]?.present === true, status: Number(matching[0]?.status || 0), failures: Number(matching[0]?.failures || 0) }]
  })
  const complete = rows.length === expectedKeys.length && prerequisiteFailures.length === 0
  const surfaceOk = (locale, surface) => {
    const matching = rows.filter((row) => row.locale === locale && row.surface === surface)
    return matching.length === widths.length && matching.every((row) => prerequisiteOk(row) && row.overflow === true
      && (surface !== 'settings' || row.openedIndexedFilesGeometry === true)
      && row.missingLabels.length === 0 && normalizeLocale(row.lang) === expected[locale].lang
      && row.dir === expected[locale].dir && row.geometryGate?.pass === true
      && row.keyboardTraversal?.pass === true && row.failures === 0)
  }
  const expectedRowsPerWidth = locales.length * surfaces.length
  const desktopRows = rows.filter((row) => row.width === 1280)
  const mobileWidths = widths.filter((width) => width < 500)
  const mobileRows = rows.filter((row) => mobileWidths.includes(row.width))
  const desktop = complete && desktopRows.length === expectedRowsPerWidth
    && desktopRows.every((row) => prerequisiteOk(row) && row.overflow === true && row.geometryGate?.pass === true && (row.surface !== 'settings' || row.openedIndexedFilesGeometry === true))
  const mobile = mobileWidths.length === 2 && mobileWidths.includes(390) && mobileWidths.includes(320)
    && mobileRows.length === expectedRowsPerWidth * mobileWidths.length
    && mobileWidths.every((width) => mobileRows.filter((row) => row.width === width).length === expectedRowsPerWidth)
    && complete && mobileRows.every((row) => prerequisiteOk(row) && row.overflow === true && row.geometryGate?.pass === true && (row.surface !== 'settings' || row.openedIndexedFilesGeometry === true))
  const safeForms = complete && rows.every((row) => prerequisiteOk(row) && row.forms >= row.expectedFormMinimum && row.safeForms)
  const markers = {
    browser_legacy_settings_de: surfaceOk('de', 'settings'), browser_legacy_settings_ar: surfaceOk('ar', 'settings'),
    browser_legacy_batch_preview_de: surfaceOk('de', 'batch'), browser_legacy_batch_preview_ar: surfaceOk('ar', 'batch'),
    browser_legacy_full_details_de: surfaceOk('de', 'detail'), browser_legacy_full_details_ar: surfaceOk('ar', 'detail'),
    browser_legacy_desktop_no_overflow: desktop, browser_legacy_mobile_no_overflow: mobile,
    browser_legacy_safe_forms: safeForms, browser_locale_restored: restored === true,
  }
  return { markers, ok: Object.values(markers).every((value) => value === true), expectedRowsPerWidth, expectedMobileRows: expectedRowsPerWidth * 2, prerequisiteFailures }
}
