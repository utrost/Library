import { describe, expect, it } from 'vitest'
import { composeLegacyInspectionRow } from '../scripts/browser-legacy-inspection.mjs'

const expectedControls = [
  { id: 'label', text: 'A sufficiently long translated label', designatedLong: true },
]
const passing = {
  locale: 'de', width: 390, surface: 'settings', expectedControls, formMinimum: 1,
  core: { present: true, status: 200, lang: 'de', dir: 'ltr', overflow: true, missingLabelIds: [], labelChecks: { label: true } },
  forms: { forms: 1, formChecks: [{ method: 'post', origin: 'https://cloud.test', path: '/apps/library/scan', tokenPresent: true, tokenNonEmpty: true, valid: true }] },
  geometry: { controls: [{ specId: 'label', matchCount: 1, associated: true, naturalControl: true, designatedLong: true, scrollWidth: 90, clientWidth: 90, scrollHeight: 40, clientHeight: 40, whiteSpace: 'normal', textMeasured: true, lineCount: 2, textRectCount: 2, wraps: true }] },
}

const diagnosticKeys = ['rootBounds', 'viewportBounds', 'offenders']
const offenderKeys = ['identity', 'parentIdentity', 'rect', 'scrollWidth', 'clientWidth', 'minInlineSize', 'inlineSize', 'whiteSpace', 'display', 'gridTemplateColumns', 'flexWrap', 'overflowX']

describe('legacy browser inspection composition', () => {
  it('keeps token values and requesttoken contents out of persisted measurements', () => {
    const secret = 'private-requesttoken-value-123'
    const row = composeLegacyInspectionRow({
      ...passing,
      forms: { forms: 1, formChecks: [{ ...passing.forms.formChecks[0], tokenValue: secret, requesttoken: secret }] },
    })
    const record = JSON.stringify([row])
    expect(record).not.toContain(secret)
    expect(record).not.toContain('tokenValue')
    expect(record).not.toContain('requesttoken')
  })

  it('preserves missing expected label IDs without returning label text', () => {
    const row = composeLegacyInspectionRow({ ...passing, core: { ...passing.core, missingLabelIds: ['label'], labelChecks: { label: false } } })
    expect(row.missingLabels).toEqual(['label'])
    expect(row.geometryGate.pass).toBe(false)
  })

  it('fails closed when a request token is empty', () => {
    const row = composeLegacyInspectionRow({
      ...passing,
      forms: { forms: 1, formChecks: [{ ...passing.forms.formChecks[0], tokenNonEmpty: false, valid: false }] },
    })
    expect(row.safeForms).toBe(false)
  })

  it('emits only allowlisted privacy-safe overflow diagnostics on every row', () => {
    const secret = 'secret-token-value'
    const overflowDiagnostics = { rootBounds: { left: 0, right: 390, width: 390, scrollWidth: 420, clientWidth: 390 }, viewportBounds: { left: 0, right: 390, width: 390 }, offenders: [{
      identity: { tag: 'div', id: 'hero', classes: ['library-detail-hero'] }, parentIdentity: { tag: 'main', id: 'root', classes: [] }, rect: { left: 0, right: 420, width: 420 },
      scrollWidth: 420, clientWidth: 390, minInlineSize: 'auto', inlineSize: '420px', whiteSpace: 'normal', display: 'grid', gridTemplateColumns: '220px 1fr', flexWrap: 'nowrap', overflowX: 'visible',
      text: secret, value: secret, href: `https://example.test/${secret}`, outerHTML: secret, dataToken: secret,
    }] }
    const row = composeLegacyInspectionRow({ ...passing, core: { ...passing.core, overflowDiagnostics } })
    expect(Object.keys(row.overflowDiagnostics).sort()).toEqual(diagnosticKeys.sort())
    expect(Object.keys(row.overflowDiagnostics.offenders[0]).sort()).toEqual(offenderKeys.sort())
    expect(Object.keys(row.overflowDiagnostics.offenders[0].identity).sort()).toEqual(['classes', 'id', 'tag'])
    expect(Object.keys(row.overflowDiagnostics.offenders[0].rect).sort()).toEqual(['left', 'right', 'width'])
    expect(Object.keys(row.overflowDiagnostics.rootBounds).sort()).toEqual(['clientWidth', 'left', 'right', 'scrollWidth', 'width'])
    expect(JSON.stringify(row)).not.toContain(secret)
  })

  it.each([
    ['locale', { core: { ...passing.core, lang: 'ar' } }],
    ['forms', { forms: { forms: 0, formChecks: [] } }],
    ['geometry', { geometry: { controls: [] } }],
  ])('retains fail-closed %s semantics', (_name, replacement) => {
    const row = composeLegacyInspectionRow({ ...passing, ...replacement })
    if (_name === 'locale') expect(row.lang).not.toBe('de')
    if (_name === 'forms') expect(row.safeForms).toBe(false)
    if (_name === 'geometry') expect(row.geometryGate.pass).toBe(false)
  })
})
