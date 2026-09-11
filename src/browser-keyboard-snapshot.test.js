// @vitest-environment happy-dom
import { beforeEach, describe, expect, it } from 'vitest'
import { buildSequentialCandidateSnapshot, sequentialSnapshotsMatch } from '../scripts/browser-keyboard-snapshot.mjs'

const render = (root) => {
  for (const element of [root, ...root.querySelectorAll('*')]) {
    if (element.tagName === 'SUMMARY') element.tabIndex = 0
    element.getClientRects = () => element.dataset.noRect === 'yes' ? [] : [{ width: 20, height: 10 }]
    element.getBoundingClientRect = () => ({ left: 0, right: 20, width: element.classList.contains('clipped') ? 1 : 20, height: element.classList.contains('clipped') ? 1 : 10 })
  }
}
const snapshot = (markup) => {
  document.body.innerHTML = `<main id="root">${markup}</main>`
  const root = document.querySelector('#root')
  render(root)
  return buildSequentialCandidateSnapshot(root)
}

describe('native sequential forward-Tab snapshot', () => {
  beforeEach(() => { document.body.innerHTML = '' })

  it('keeps only a closed details direct first summary', () => {
    const result = snapshot('<button id="a">A</button><details><summary id="s">S</summary><button id="closed">C</button><summary id="second">S2</summary></details><button id="b">B</button>')
    expect(result.controls.map((node) => node.id)).toEqual(['a', 's', 'b'])
  })

  it('models radio groups by form owner and name with checked or deterministic fallback', () => {
    const result = snapshot('<form id="one"><input id="a" type="radio" name="g"><input id="b" type="radio" name="g" checked></form><form id="two"><input id="c" type="radio" name="g"><input id="d" type="radio" name="g"></form>')
    expect(result.controls.map((node) => node.id)).toEqual(['b', 'c'])
  })

  it('excludes disabled, hidden, inert, visibility-hidden, display-none, and no-rect candidates', () => {
    const result = snapshot('<button id="ok">O</button><div hidden><button id="hidden">H</button></div><div inert><button id="inert">I</button></div><button id="disabled" disabled>D</button><div style="visibility:hidden"><button id="visibility">V</button></div><div style="display:none"><button id="display">N</button></div><button id="rect" data-no-rect="yes">R</button>')
    expect(result.controls.map((node) => node.id)).toEqual(['ok'])
  })

  it('preserves clipped tabbable controls as separate accessibility evidence', () => {
    const result = snapshot('<button id="fallback" class="clipped" style="clip:rect(0,0,0,0)">F</button>')
    expect(result.controls.map((node) => node.id)).toEqual(['fallback'])
    expect(result.records[0].clippedButFocusable).toBe(true)
  })

  it('matches the live broad-to-native fixture counts and flags positive tabindex', () => {
    const settingsClosed = Array.from({ length: 19 }, (_, index) => `<button id="sc${index}">C</button>`).join('')
    const settings = snapshot(`${Array.from({ length: 41 }, (_, index) => `<button id="s${index}">S</button>`).join('')}<details><summary id="summary">Summary</summary>${settingsClosed}</details>`)
    expect(document.querySelectorAll('button,summary')).toHaveLength(61)
    expect(settings.controls).toHaveLength(42)
    const detailClosed = Array.from({ length: 25 }, (_, index) => `<button id="dc${index}">C</button>`).join('')
    const detail = snapshot(`${Array.from({ length: 24 }, (_, index) => `<button id="d${index}">D</button>`).join('')}<details><summary id="detail-summary">Summary</summary>${detailClosed}</details>`)
    expect(document.querySelectorAll('button,summary')).toHaveLength(50)
    expect(detail.controls).toHaveLength(25)
    expect(snapshot('<a href="#a">A</a><button>B</button><input>').controls).toHaveLength(3)
    expect(snapshot('<button tabindex="2">P</button>').positiveTabIndex).toBe(true)
  })

  it('ignores ordinary focus and class styling while comparing a fresh snapshot', () => {
    const first = snapshot('<a id="link" href="#a">A</a><button id="button">B</button>')
    const root = document.querySelector('#root')
    document.querySelector('#button').classList.add('focus-visible')
    document.querySelector('#button').focus()
    render(root)
    expect(sequentialSnapshotsMatch(first, buildSequentialCandidateSnapshot(root))).toBe(true)
  })

  it.each([
    ['hidden', (root) => { root.querySelector('#button').hidden = true }],
    ['disabled', (root) => { root.querySelector('#button').disabled = true }],
    ['tabindex', (root) => { root.querySelector('#button').tabIndex = -1 }],
    ['href', (root) => { root.querySelector('#link').setAttribute('href', '#changed') }],
    ['details', (root) => { root.querySelector('details').open = true }],
    ['radio', (root) => { root.querySelector('#radio-b').checked = true }],
    ['order', (root) => { root.append(root.querySelector('#link')) }],
    ['disconnection', (root) => { root.querySelector('#button').remove() }],
  ])('fails closed for %s eligibility/order/property mutation', (_name, mutate) => {
    const first = snapshot('<a id="link" href="#a">A</a><button id="button">B</button><details><summary id="summary">S</summary><button id="inside">I</button></details><input id="radio-a" type="radio" name="g" checked><input id="radio-b" type="radio" name="g">')
    const root = document.querySelector('#root')
    mutate(root)
    render(root)
    expect(sequentialSnapshotsMatch(first, buildSequentialCandidateSnapshot(root))).toBe(false)
  })
})
