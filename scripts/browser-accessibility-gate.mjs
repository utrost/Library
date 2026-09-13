const own = (object, key) => object != null && Object.prototype.hasOwnProperty.call(object, key)
const exactly = (object, key, value) => own(object, key) && object[key] === value
const count = (object, key, predicate) => own(object, key) && Number.isFinite(Number(object[key])) && predicate(Number(object[key]))
const noErrors = (value) => value?.errors && typeof value.errors === 'object'
  ? Object.keys(value.errors).length === 0
  : !own(value, 'errors')

export function evaluateSidebarFocusEvidence(focus) {
  const desktop = focus?.desktop
  const mobile = focus?.mobile
  return ['headingEntered', 'escapeClosed', 'restored'].every((key) => exactly(desktop, key, true))
    && ['entered', 'modalContained', 'forwardBoundaryContained', 'backwardBoundaryContained', 'escapeClosed', 'restored']
      .every((key) => exactly(mobile, key, true))
    && count(mobile, 'observedFocusinCount', (value) => value >= 3)
    && count(mobile, 'observedKeydownCount', (value) => value === 2)
}

export function evaluateAccessibilitySnapshot(snapshot) {
  const s = snapshot && typeof snapshot === 'object' ? snapshot : {}
  const markers = {
    browser_ax_landmarks: exactly(s, 'observed', true) && count(s.landmarks, 'main', (v) => v === 1)
      && count(s.landmarks, 'namedNavigation', (v) => v >= 1) && count(s.ax, 'main', (v) => v === 1)
      && count(s.ax, 'namedNavigation', (v) => v >= 1),
    browser_ax_headings: count(s.headings, 'present', (v) => v >= 1) && exactly(s.headings, 'validOrder', true)
      && count(s.ax, 'headings', (v) => v >= 1) && exactly(s.ax, 'headingLevelsValid', true),
    browser_ax_controls_named: count(s.controls, 'unnamed', (v) => v === 0)
      && count(s.ax, 'unnamedControls', (v) => v === 0),
    browser_ax_states: count(s.controls, 'invalidStates', (v) => v === 0)
      && count(s.ax, 'descriptions', (v) => v >= 1)
      && ['pressed', 'expanded', 'busyOrLoading', 'disabled', 'current'].every((key) => exactly(s.ax?.controlStates, key, true)),
    browser_ax_live_regions: count(s.liveRegions, 'status', (v) => v >= 1)
      && count(s.liveRegions, 'alert', (v) => v >= 1) && count(s.liveRegions, 'invalid', (v) => v === 0)
      && count(s.liveRegions, 'broad', (v) => v === 0) && exactly(s.ax, 'liveRegions', true),
    browser_ax_sidebar_desktop: ['loading', 'success', 'error', 'complementary'].every((key) => exactly(s.sidebar?.desktop, key, true))
      && exactly(s.ax, 'desktopComplementary', true),
    browser_ax_sidebar_mobile_dialog: ['loading', 'success', 'error', 'namedModalDialog'].every((key) => exactly(s.sidebar?.mobile, key, true))
      && exactly(s.ax, 'mobileNamedModalDialog', true) && exactly(s.ax, 'mobileModalDescribed', true),
    browser_ax_no_broken_references: count(s.references, 'duplicateIds', (v) => v === 0)
      && count(s.references, 'broken', (v) => v === 0) && count(s.descriptions, 'broken', (v) => v === 0)
      && count(s.definitions, 'invalid', (v) => v === 0),
    browser_keyboard_focus_restored: evaluateSidebarFocusEvidence(s.focus),
  }
  return { markers, ok: noErrors(s) && exactly(s.ax, 'collected', true) && Object.values(markers).every(Boolean) }
}

const COMMON_ADAPTATION_FIELDS = ['observed', 'pageReflowContained', 'visibleControlBoundsObserved', 'controlScrollRestored', 'mediaRestored', 'metricsRestored', 'restored']
const truthyFields = (row, fields) => fields.every((field) => exactly(row, field, true))

export function evaluateAdaptationRows(rows) {
  const modes = ['reduced-motion', 'forced-colors', 'scale-200-equivalent', 'scale-400-equivalent']
  const input = Array.isArray(rows) ? rows : []
  const matches = (mode) => input.filter((candidate) => candidate?.mode === mode)
  const row = (mode) => matches(mode).length === 1 ? matches(mode)[0] : null
  const common = (mode) => row(mode) != null && noErrors(row(mode)) && truthyFields(row(mode), COMMON_ADAPTATION_FIELDS)
  const scale = (mode, percent, width) => common(mode)
    && count(row(mode), 'baselineCssWidth', (v) => v === 1280)
    && count(row(mode), 'effectiveCssWidth', (v) => v === width)
    && count(row(mode), 'scalePercent', (v) => v === percent)
  const markers = {
    reduced_motion_media_active_and_configured_durations_zero: common('reduced-motion') && truthyFields(row('reduced-motion'), ['mediaActive', 'representativeDurationsSuppressed']),
    browser_forced_colors_media_active: common('forced-colors') && exactly(row('forced-colors'), 'mediaActive', true),
    browser_scale_200_reflow_model: scale('scale-200-equivalent', 200, 640),
    browser_scale_400_reflow_model: scale('scale-400-equivalent', 400, 320),
    browser_scale_controls_reachable: modes.every(common),
  }
  return { markers, ok: input.length === modes.length && modes.every((mode) => matches(mode).length === 1) && Object.values(markers).every(Boolean) }
}

export function evaluateLegacyTableAxRows(rows, { expected = null, locales = null, widths = null, normalizeLocale = (value) => value } = {}) {
  const input = Array.isArray(rows) ? rows : []
  const expectedKeys = Array.isArray(locales) && Array.isArray(widths) ? locales.flatMap((locale) => widths.map((width) => `${locale}:${width}`)) : null
  if (expectedKeys && (input.length !== expectedKeys.length || expectedKeys.some((key) => input.filter((row) => `${row?.locale}:${row?.width}` === key).length !== 1))) return false
  const desktopRequired = ['representative', 'caption', 'scopedHeaders', 'domAssociations', 'axNamedTable', 'axHeaders', 'axCells', 'exactBackendNodeAssociation', 'inactiveAbsentFromAx']
  const mobileRequired = ['representative', 'axNamedCardList', 'axCards', 'exactBackendNodeAssociation', 'inactiveAbsentFromAx']
  const fields = ['item', 'current', 'new', 'outcome']
  return input.length > 0 && input.every((inputRow) => {
    const wrapped = inputRow?.tableAx != null
    if (wrapped && (inputRow.present !== true || Number(inputRow.status) !== 200 || Number(inputRow.failures) !== 0
      || (expected && (normalizeLocale(inputRow.lang) !== expected[inputRow.locale]?.lang || inputRow.dir !== expected[inputRow.locale]?.dir)))) return false
    const row = wrapped ? inputRow.tableAx : inputRow
    if (!noErrors(row)) return false
    if (Number(row?.width) >= 700 && row?.activeRepresentation === 'table') return truthyFields(row, desktopRequired)
    if (Number(row?.width) < 700 && row?.activeRepresentation === 'cards') {
      return truthyFields(row, mobileRequired) && truthyFields(row.fieldCoverage, fields)
    }
    return false
  })
}
