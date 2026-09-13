// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest'
import { collectOverflowDiagnostics } from '../scripts/browser-overflow-diagnostics.mjs'

const box = (element, { left = 0, right = 320, width = right - left, scrollWidth = width, clientWidth = width } = {}) => {
  element.getBoundingClientRect = () => ({ left, right, width })
  Object.defineProperty(element, 'scrollWidth', { configurable: true, value: scrollWidth })
  Object.defineProperty(element, 'clientWidth', { configurable: true, value: clientWidth })
  element.getClientRects = () => width > 0 ? [{ left, right, width }] : []
}

describe('privacy-safe overflow diagnostics', () => {
  beforeEach(() => { document.body.innerHTML = '<main id="root"><div id="clip"><span id="intrinsic">private text</span></div><input id="hidden" type="hidden"><div id="escape"></div></main>'; Object.defineProperty(document.documentElement, 'clientWidth', { configurable: true, value: 320 }) })

  it('ignores no-box hidden descendants and intrinsic width clipped inside its own box', () => {
    const root = document.querySelector('#root'); const clip = document.querySelector('#clip'); const intrinsic = document.querySelector('#intrinsic'); const hidden = document.querySelector('#hidden')
    box(root); box(clip); box(intrinsic, { left: 0, right: 200, scrollWidth: 500, clientWidth: 200 }); box(hidden, { width: 0, right: 0, scrollWidth: 0, clientWidth: 0 })
    clip.style.overflowX = 'hidden'
    const result = collectOverflowDiagnostics(root)
    expect(result.offenders).toEqual([])
    expect(JSON.stringify(result)).not.toContain('private text')
  })

  it('reports numeric evidence when a descendant crosses the root or propagates ancestor overflow', () => {
    const root = document.querySelector('#root'); const clip = document.querySelector('#clip'); const escape = document.querySelector('#escape')
    box(root, { scrollWidth: 360, clientWidth: 320 }); box(clip, { scrollWidth: 360, clientWidth: 320 }); box(document.querySelector('#intrinsic')); box(document.querySelector('#hidden'), { width: 0, right: 0 }); box(escape, { left: 300, right: 360 })
    const result = collectOverflowDiagnostics(root)
    expect(result.offenders.map((entry) => entry.identity.id)).toContain('escape')
    expect(result.rootBounds.scrollWidth).toBe(360)
  })

  it('excludes only the approved hidden-visually signature and its descendants', () => {
    document.body.innerHTML = '<main id="root"><div class="hidden-visually" id="approved"><span id="approved-child"></span></div><div class="hidden-visually" id="fake"></div></main>'
    const root = document.querySelector('#root'); const approved = document.querySelector('#approved'); const child = document.querySelector('#approved-child'); const fake = document.querySelector('#fake')
    box(root); box(approved, { left: -9992, right: -9991, width: 1 }); box(child, { left: -9992, right: -9900, width: 92 }); box(fake, { left: -50, right: 20, width: 70 })
    Object.assign(approved.style, { position: 'absolute', width: '1px', minWidth: '1px', height: '1px', minHeight: '1px', margin: '-1px', padding: '0px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)', whiteSpace: 'nowrap', border: '0px' })
    expect(collectOverflowDiagnostics(root).offenders.map((entry) => entry.identity.id)).toEqual(['fake'])
  })

  it.each([
    ['width', '2px'], ['minWidth', '2px'], ['height', '2px'], ['minHeight', '2px'],
    ['margin', '8px'], ['padding', '12px'], ['borderWidth', '4px'],
    ['clip', 'auto'], ['clipPath', 'none'], ['overflow', 'visible'], ['whiteSpace', 'normal'],
  ])('keeps a hidden-visually lookalike with wrong %s visible as an offender', (property, value) => {
    document.body.innerHTML = '<main id="root"><div class="hidden-visually" id="lookalike"></div></main>'
    const root = document.querySelector('#root'); const lookalike = document.querySelector('#lookalike')
    box(root); box(lookalike, { left: -10, right: -9, width: 1 })
    Object.assign(lookalike.style, { position: 'absolute', width: '1px', minWidth: '1px', height: '1px', minHeight: '1px', margin: '-1px', padding: '0px', overflow: 'hidden', clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)', whiteSpace: 'nowrap', border: '0px', [property]: value })
    expect(collectOverflowDiagnostics(root).offenders.map((entry) => entry.identity.id)).toContain('lookalike')
  })

  it('ignores closed details descendants but detects the same offender when opened', () => {
    document.body.innerHTML = '<main id="root"><details id="details"><summary>Files</summary><div id="offender"></div></details></main>'
    const root = document.querySelector('#root'); const details = document.querySelector('#details'); const offender = document.querySelector('#offender')
    box(root); box(details); box(details.querySelector('summary')); box(offender, { left: 300, right: 400, width: 100 })
    expect(collectOverflowDiagnostics(root).offenders).toEqual([])
    details.open = true
    expect(collectOverflowDiagnostics(root).offenders.map((entry) => entry.identity.id)).toContain('offender')
  })
})
