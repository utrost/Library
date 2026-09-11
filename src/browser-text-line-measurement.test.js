// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { measureVisibleTextLines } from '../scripts/browser-text-line-measurement.mjs'

const rect = (top) => ({ top, width: 80, height: 16 })
const measure = (element, rectsByText, options = {}) => measureVisibleTextLines(element, {
  ...options,
  rangeFactory: () => {
    let node
    return { selectNodeContents: (value) => { node = value }, getClientRects: () => rectsByText.get(node) || [], detach: () => {} }
  },
})

describe('rendered text-line measurement', () => {
  it('rejects a padded single-line button even when the element is tall', () => {
    const button = document.createElement('button')
    button.textContent = 'A long control with generous vertical padding'
    button.style.padding = '20px'
    const result = measure(button, new Map([[button.firstChild, [rect(20)]]]))
    expect(result).toEqual({ textMeasured: true, wraps: false, lineCount: 1, textRectCount: 1 })
  })

  it('excludes a nested input from a containing label line count', () => {
    const label = document.createElement('label')
    label.append('Long label text')
    const input = document.createElement('input')
    input.append(document.createTextNode('synthetic child text'))
    label.append(input)
    const result = measure(label, new Map([[label.firstChild, [rect(0)]], [input.firstChild, [rect(30)]]]), { excludeNestedControls: true })
    expect(result.wraps).toBe(false)
    expect(result.lineCount).toBe(1)
    expect(result.textRectCount).toBe(1)
  })

  it('accepts genuine two-line text and clusters small top-position jitter', () => {
    const button = document.createElement('button')
    button.textContent = 'Genuinely wrapped translated text'
    expect(measure(button, new Map([[button.firstChild, [rect(10), rect(10.8), rect(29)]]]))).toEqual({
      textMeasured: true, wraps: true, lineCount: 2, textRectCount: 3,
    })
  })

  it.each([null, document.createElement('button')])('fails closed for absent or nontext content', (node) => {
    expect(measureVisibleTextLines(node)).toEqual({ textMeasured: false, wraps: false, lineCount: 0, textRectCount: 0 })
  })
})
