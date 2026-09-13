import { describe, expect, it } from 'vitest'
import { evaluateAccessibilitySnapshot, evaluateAdaptationRows, evaluateLegacyTableAxRows, evaluateSidebarFocusEvidence } from '../scripts/browser-accessibility-gate.mjs'

const validSnapshot = {
  observed: true,
  landmarks: { main: 1, namedNavigation: 3 },
  headings: { present: 4, validOrder: true },
  controls: { unnamed: 0, invalidStates: 0 },
  liveRegions: { status: 1, alert: 1, invalid: 0, broad: 0 },
  descriptions: { broken: 0 },
  definitions: { invalid: 0 },
  tables: { present: 2, withoutCaption: 0, invalidHeaders: 0, intentionallyContained: true },
  references: { duplicateIds: 0, broken: 0 },
  sidebar: {
    desktop: { loading: true, success: true, error: true, complementary: true },
    mobile: { loading: true, success: true, error: true, namedModalDialog: true },
  },
  focus: {
    desktop: { headingEntered: true, escapeClosed: true, restored: true },
    mobile: { entered: true, modalContained: true, forwardBoundaryContained: true, backwardBoundaryContained: true, escapeClosed: true, restored: true, observedFocusinCount: 4, observedKeydownCount: 2 },
  },
  ax: {
    collected: true, main: 1, namedNavigation: 3, headings: 4, headingLevelsValid: true,
    unnamedControls: 0, descriptions: 2, controlStates: { pressed: true, expanded: true, busyOrLoading: true, disabled: true, current: true }, liveRegions: true,
    desktopComplementary: true, mobileNamedModalDialog: true, mobileModalDescribed: true,
  },
}

const requiredSnapshotPaths = [
  'observed', 'landmarks.main', 'landmarks.namedNavigation', 'headings.present', 'headings.validOrder',
  'controls.unnamed', 'controls.invalidStates', 'liveRegions.status', 'liveRegions.alert',
  'liveRegions.invalid', 'liveRegions.broad', 'descriptions.broken', 'definitions.invalid',
  'references.duplicateIds', 'references.broken', 'sidebar.desktop.loading', 'sidebar.desktop.success',
  'sidebar.desktop.error', 'sidebar.desktop.complementary', 'sidebar.mobile.loading',
  'sidebar.mobile.success', 'sidebar.mobile.error', 'sidebar.mobile.namedModalDialog',
  'focus.desktop.headingEntered', 'focus.desktop.escapeClosed', 'focus.desktop.restored', 'focus.mobile.entered',
  'focus.mobile.modalContained', 'focus.mobile.forwardBoundaryContained', 'focus.mobile.backwardBoundaryContained',
  'focus.mobile.escapeClosed', 'focus.mobile.restored', 'focus.mobile.observedFocusinCount', 'focus.mobile.observedKeydownCount', 'ax.collected',
  'ax.main', 'ax.namedNavigation', 'ax.headings', 'ax.headingLevelsValid', 'ax.unnamedControls',
  'ax.descriptions', 'ax.controlStates.pressed', 'ax.controlStates.expanded', 'ax.controlStates.busyOrLoading', 'ax.controlStates.disabled', 'ax.controlStates.current', 'ax.liveRegions', 'ax.desktopComplementary',
  'ax.mobileNamedModalDialog', 'ax.mobileModalDescribed',
]

function withoutPath(value, path) {
  const copy = structuredClone(value)
  const parts = path.split('.')
  const owner = parts.slice(0, -1).reduce((node, key) => node[key], copy)
  delete owner[parts.at(-1)]
  return copy
}

describe('fail-closed accessibility evidence evaluator', () => {
  it('accepts complete observed DOM, interaction, and CDP AX-tree evidence', () => {
    expect(evaluateAccessibilitySnapshot(validSnapshot).ok).toBe(true)
  })

  it.each(requiredSnapshotPaths)('rejects missing evidence field %s', (path) => {
    expect(evaluateAccessibilitySnapshot(withoutPath(validSnapshot, path)).ok).toBe(false)
  })

  it.each(requiredSnapshotPaths)('rejects an observation error for %s', (path) => {
    const snapshot = structuredClone(validSnapshot)
    snapshot.errors = { [path]: 'injected observation failure' }
    expect(evaluateAccessibilitySnapshot(snapshot).ok).toBe(false)
  })
})

describe('sidebar focus evidence is mode-specific and event-backed', () => {
  const evidence = {
    desktop: { headingEntered: true, escapeClosed: true, restored: true },
    mobile: {
      entered: true,
      modalContained: true,
      forwardBoundaryContained: true,
      backwardBoundaryContained: true,
      escapeClosed: true,
      restored: true,
      observedFocusinCount: 4,
      observedKeydownCount: 2,
    },
  }

  it('accepts desktop heading/close/restore independently of mobile modal traversal', () => {
    expect(evaluateSidebarFocusEvidence(evidence)).toBe(true)
    expect(evidence.desktop).not.toHaveProperty('modalContained')
    expect(evidence.desktop).not.toHaveProperty('forwardBoundaryContained')
    expect(evidence.desktop).not.toHaveProperty('backwardBoundaryContained')
  })

  it.each(['modalContained', 'forwardBoundaryContained', 'backwardBoundaryContained'])(
    'rejects false or absent mobile boundary evidence: %s',
    (field) => {
      expect(evaluateSidebarFocusEvidence({ ...evidence, mobile: { ...evidence.mobile, [field]: false } })).toBe(false)
      const missing = structuredClone(evidence)
      delete missing.mobile[field]
      expect(evaluateSidebarFocusEvidence(missing)).toBe(false)
    },
  )

  it.each(['observedFocusinCount', 'observedKeydownCount'])(
    'rejects absent mobile event evidence: %s',
    (field) => {
      const missing = structuredClone(evidence)
      delete missing.mobile[field]
      expect(evaluateSidebarFocusEvidence(missing)).toBe(false)
    },
  )
})

const validRows = [
  { mode: 'reduced-motion', observed: true, mediaActive: true, representativeDurationsSuppressed: true, pageReflowContained: true, visibleControlBoundsObserved: true, controlScrollRestored: true, mediaRestored: true, metricsRestored: true, restored: true },
  { mode: 'forced-colors', observed: true, mediaActive: true, pageReflowContained: true, visibleControlBoundsObserved: true, controlScrollRestored: true, mediaRestored: true, metricsRestored: true, restored: true },
  { mode: 'scale-200-equivalent', observed: true, baselineCssWidth: 1280, effectiveCssWidth: 640, scalePercent: 200, pageReflowContained: true, visibleControlBoundsObserved: true, controlScrollRestored: true, mediaRestored: true, metricsRestored: true, restored: true },
  { mode: 'scale-400-equivalent', observed: true, baselineCssWidth: 1280, effectiveCssWidth: 320, scalePercent: 400, pageReflowContained: true, visibleControlBoundsObserved: true, controlScrollRestored: true, mediaRestored: true, metricsRestored: true, restored: true },
]

describe('fail-closed adaptation evaluator', () => {
  it('accepts every complete observed row', () => expect(evaluateAdaptationRows(validRows).ok).toBe(true))

  it('uses the exact reduced-motion fact and rejects partial bounds or missing restoration', () => {
    const result = evaluateAdaptationRows(validRows)
    expect(result.markers.reduced_motion_media_active_and_configured_durations_zero).toBe(true)
    expect(result.markers).not.toHaveProperty('browser_reduced_motion_media_and_duration')
    expect(evaluateAdaptationRows(validRows.map((row, index) => index === 3 ? { ...row, visibleControlBoundsObserved: false } : row)).ok).toBe(false)
    expect(evaluateAdaptationRows(validRows.map((row, index) => index === 3 ? { ...row, controlScrollRestored: false } : row)).ok).toBe(false)
  })

  it('mutation-tests every evidence field and row identity', () => {
    for (const [index, row] of validRows.entries()) {
      for (const field of Object.keys(row).filter((key) => key !== 'mode')) {
        const rows = structuredClone(validRows)
        delete rows[index][field]
        expect(evaluateAdaptationRows(rows).ok, `${row.mode}.${field}`).toBe(false)
        rows[index][field] = validRows[index][field]
        rows[index].errors = { [field]: 'injected observation failure' }
        expect(evaluateAdaptationRows(rows).ok, `${row.mode}.${field} error`).toBe(false)
      }
    }
    expect(evaluateAdaptationRows(validRows.slice(1)).ok).toBe(false)
    expect(evaluateAdaptationRows([...validRows, validRows[0]]).ok).toBe(false)
  })
})

describe('fail-closed representative legacy table DOM/AX evaluator', () => {
  const desktop = { width: 1280, activeRepresentation: 'table', representative: true, caption: true, scopedHeaders: true, domAssociations: true, axNamedTable: true, axHeaders: true, axCells: true, exactBackendNodeAssociation: true, inactiveAbsentFromAx: true }
  const mobile = { width: 390, activeRepresentation: 'cards', representative: true, axNamedCardList: true, axCards: true, fieldCoverage: { item: true, current: true, new: true, outcome: true }, exactBackendNodeAssociation: true, inactiveAbsentFromAx: true }
  const mobile320 = { ...mobile, width: 320 }
  it('accepts desktop table and mobile card AX representations', () => expect(evaluateLegacyTableAxRows([desktop, mobile, mobile320])).toBe(true))
  it.each(Object.keys(desktop))('rejects missing or false desktop %s', (field) => {
    if (field === 'width' || field === 'activeRepresentation') return
    const missing = structuredClone(desktop)
    delete missing[field]
    expect(evaluateLegacyTableAxRows([missing])).toBe(false)
    expect(evaluateLegacyTableAxRows([{ ...desktop, [field]: false }])).toBe(false)
  })
  it.each(['representative', 'axNamedCardList', 'axCards', 'exactBackendNodeAssociation', 'inactiveAbsentFromAx'])('rejects missing or false mobile %s', (field) => {
    const mutated = structuredClone(mobile)
    delete mutated[field]
    expect(evaluateLegacyTableAxRows([mutated])).toBe(false)
    expect(evaluateLegacyTableAxRows([{ ...mobile, [field]: false }])).toBe(false)
  })
  it.each(['item', 'current', 'new', 'outcome'])('rejects missing or false mobile field coverage %s', (field) => {
    const mutated = structuredClone(mobile)
    delete mutated.fieldCoverage[field]
    expect(evaluateLegacyTableAxRows([mutated])).toBe(false)
    expect(evaluateLegacyTableAxRows([{ ...mobile, fieldCoverage: { ...mobile.fieldCoverage, [field]: false } }])).toBe(false)
  })
  it('rejects absent tables and observation errors', () => {
    expect(evaluateLegacyTableAxRows([])).toBe(false)
    expect(evaluateLegacyTableAxRows([{ ...desktop, errors: { table: 'injected' } }])).toBe(false)
  })
  it('rejects table/card AX evidence nested under an unavailable legacy row even when stale evidence is true', () => {
    expect(evaluateLegacyTableAxRows([{ present: false, status: 0, failures: 0, lang: 'de', locale: 'de', dir: 'ltr', expectedDir: 'ltr', tableAx: desktop }])).toBe(false)
    expect(evaluateLegacyTableAxRows([{ present: true, status: 200, failures: 0, lang: 'de', locale: 'de', dir: 'ltr', expectedDir: 'ltr', tableAx: desktop }])).toBe(true)
  })
  it('requires every configured locale/width AX row exactly once with matching locale and direction prerequisites', () => {
    const expected = { de: { lang: 'de', dir: 'ltr' }, ar: { lang: 'ar', dir: 'rtl' } }
    const wrap = (locale, row) => ({ locale, width: row.width, present: true, status: 200, failures: 0, lang: locale, dir: expected[locale].dir, tableAx: row })
    const rows = [wrap('de', desktop), wrap('de', mobile), wrap('de', mobile320), wrap('ar', desktop), wrap('ar', mobile), wrap('ar', mobile320)]
    const options = { expected, locales: ['de', 'ar'], widths: [1280, 390, 320], normalizeLocale: (value) => value }
    expect(evaluateLegacyTableAxRows(rows, options)).toBe(true)
    expect(evaluateLegacyTableAxRows(rows.slice(1), options)).toBe(false)
    expect(evaluateLegacyTableAxRows(rows.map((row, index) => index === 4 ? { ...row, dir: 'ltr' } : row), options)).toBe(false)
  })
})
