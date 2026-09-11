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
})
