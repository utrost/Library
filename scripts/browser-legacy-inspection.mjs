import { evaluateTranslatedControlGeometry } from './browser-geometry-gate.mjs'

const finiteMeasurement = (value) => Number.isFinite(value) ? value : 0
const identity = (value) => value && typeof value === 'object' ? {
  tag: String(value.tag || ''), id: String(value.id || ''), classes: Array.isArray(value.classes) ? value.classes.slice(0, 6).map(String) : [],
} : null
const bounds = (value, widths = false) => ({
  left: finiteMeasurement(value?.left), right: finiteMeasurement(value?.right), width: finiteMeasurement(value?.width),
  ...(widths ? { scrollWidth: finiteMeasurement(value?.scrollWidth), clientWidth: finiteMeasurement(value?.clientWidth) } : {}),
})
const overflowDiagnostics = (value) => ({
  rootBounds: bounds(value?.rootBounds, true),
  viewportBounds: bounds(value?.viewportBounds),
  offenders: Array.isArray(value?.offenders) ? value.offenders.slice(0, 24).map((offender) => ({
    identity: identity(offender?.identity), parentIdentity: identity(offender?.parentIdentity), rect: bounds(offender?.rect),
    scrollWidth: finiteMeasurement(offender?.scrollWidth), clientWidth: finiteMeasurement(offender?.clientWidth),
    minInlineSize: String(offender?.minInlineSize || ''), inlineSize: String(offender?.inlineSize || ''),
    whiteSpace: String(offender?.whiteSpace || ''), display: String(offender?.display || ''),
    gridTemplateColumns: String(offender?.gridTemplateColumns || ''), flexWrap: String(offender?.flexWrap || ''), overflowX: String(offender?.overflowX || ''),
  })) : [],
})

export function composeLegacyInspectionRow({ locale, width, surface, core, forms, geometry, expectedControls, formMinimum }) {
  const coreValue = core && typeof core === 'object' ? core : {}
  const formValue = forms && typeof forms === 'object' ? forms : {}
  const geometryValue = geometry && typeof geometry === 'object' ? geometry : {}
  const expected = Array.isArray(expectedControls) ? expectedControls : []
  const labelChecks = coreValue.labelChecks && typeof coreValue.labelChecks === 'object' ? coreValue.labelChecks : {}
  const formChecks = Array.isArray(formValue.formChecks) ? formValue.formChecks.map((check) => ({
    method: String(check?.method || ''),
    origin: String(check?.origin || ''),
    path: String(check?.path || ''),
    tokenPresent: check?.tokenPresent === true,
    tokenNonEmpty: check?.tokenNonEmpty === true,
    valid: check?.valid === true,
  })) : []
  const clipping = Array.isArray(geometryValue.controls) ? geometryValue.controls.map((control) => {
    const spec = expected.find((candidate) => candidate.id === control?.specId)
    return {
      specId: String(control?.specId || ''),
      text: spec ? String(spec.text || '') : '',
      translated: labelChecks[control?.specId] === true,
      exactText: labelChecks[control?.specId] === true,
      associated: control?.associated === true,
      naturalControl: control?.naturalControl === true,
      matchCount: finiteMeasurement(control?.matchCount),
      designatedLong: control?.designatedLong === true,
      expectWrap: spec?.expectWrapWidths?.includes(width) === true,
      scrollWidth: finiteMeasurement(control?.scrollWidth),
      clientWidth: finiteMeasurement(control?.clientWidth),
      scrollHeight: finiteMeasurement(control?.scrollHeight),
      clientHeight: finiteMeasurement(control?.clientHeight),
      whiteSpace: String(control?.whiteSpace || ''),
      textMeasured: control?.textMeasured === true,
      lineCount: Math.min(64, Math.max(0, finiteMeasurement(control?.lineCount))),
      textRectCount: Math.min(64, Math.max(0, finiteMeasurement(control?.textRectCount))),
      wraps: control?.wraps === true,
    }
  }) : []
  const geometryGate = evaluateTranslatedControlGeometry(clipping, {
    minimumControls: expected.length,
    clippingTolerance: 2,
  })
  const formsCount = Number.isSafeInteger(formValue.forms) ? formValue.forms : 0

  return {
    locale, width, surface,
    present: coreValue.present === true,
    status: finiteMeasurement(coreValue.status),
    lang: String(coreValue.lang || ''),
    dir: String(coreValue.dir || ''),
    overflow: coreValue.overflow === true,
    overflowDiagnostics: overflowDiagnostics(coreValue.overflowDiagnostics),
    missingLabels: Array.isArray(coreValue.missingLabelIds) ? coreValue.missingLabelIds.map(String) : expected.map((spec) => spec.id),
    forms: formsCount,
    expectedFormMinimum: formMinimum,
    safeForms: formsCount >= formMinimum && formChecks.length === formsCount && formChecks.every((check) => check.valid),
    formChecks,
    geometryGate,
    clipping,
  }
}
