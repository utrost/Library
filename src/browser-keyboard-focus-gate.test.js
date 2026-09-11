import { describe, expect, it } from 'vitest'
import { dispatchTabKeyPairs, evaluateKeyboardTabTraversal } from '../scripts/browser-keyboard-focus-gate.mjs'
import { installFocusExitSentinel, removeFocusExitSentinel } from '../scripts/browser-focus-exit-sentinel.mjs'
import { buildSequentialCandidateSnapshot } from '../scripts/browser-keyboard-snapshot.mjs'

const sample = (overrides = {}) => ({
  tabStep: 1,
  identity: 'save-root',
  focusOrderIndex: 0,
  insideRoot: true,
  naturalControl: true,
  visible: true,
  focusVisible: true,
  focusIndication: true,
  ...overrides,
})

describe('keyboard Tab traversal gate', () => {
  const sequence = () => [0, 1, 2].map((index) => sample({ tabStep: index + 1, identity: `control-${index}`, focusOrderIndex: index }))

  it('accepts several consecutive natural controls reached in DOM order', () => {
    expect(evaluateKeyboardTabTraversal(sequence()).pass).toBe(true)
  })

  it('rejects synthetic focus without Tab-order evidence', () => {
    const result = evaluateKeyboardTabTraversal(sequence().map((entry) => ({ ...entry, tabStep: 0 })))
    expect(result.pass).toBe(false)
    expect(result.orderEvidence).toBe(false)
  })

  it('rejects hidden or non-indicated focus targets', () => {
    expect(evaluateKeyboardTabTraversal(sequence().map((entry, index) => index === 1 ? { ...entry, visible: false } : entry)).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence().map((entry, index) => index === 1 ? { ...entry, focusVisible: false } : entry)).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence().map((entry, index) => index === 1 ? { ...entry, focusIndication: false } : entry)).pass).toBe(false)
  })

  it('rejects reversed, skipped, duplicated, and single synthetic sequences', () => {
    expect(evaluateKeyboardTabTraversal(sequence().toReversed()).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence().map((entry, index) => index === 2 ? { ...entry, focusOrderIndex: 4 } : entry)).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence().map((entry, index) => index === 2 ? { ...entry, identity: 'control-1' } : entry)).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal([sample()]).pass).toBe(false)
  })

  it('requires every visible control, including controls after the third, and a surface exit', () => {
    const complete = [0, 1, 2, 3, 4].map((index) => sample({
      tabStep: index + 1,
      identity: `control-${index}`,
      focusOrderIndex: index,
    }))

    expect(evaluateKeyboardTabTraversal(complete, {
      expectedTargets: 5,
      leftSurface: true,
      exit: { tabStep: 6, focusExitSentinel: true },
      dispatchedTabSteps: 6,
      dispatchedPairs: 6,
      keyDownSteps: [1, 2, 3, 4, 5, 6],
      keyUpSteps: [1, 2, 3, 4, 5, 6],
      maximumTabSteps: 6,
      snapshotStable: true,
      recorderPresent: true,
    }).pass).toBe(true)
    expect(evaluateKeyboardTabTraversal(complete.slice(0, 3), { expectedTargets: 5, leftSurface: true }).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(complete, { expectedTargets: 5, leftSurface: false }).pass).toBe(false)
  })

  it('rejects defects in a later control even when the first three are valid', () => {
    const complete = [0, 1, 2, 3, 4].map((index) => sample({
      tabStep: index + 1,
      identity: `control-${index}`,
      focusOrderIndex: index,
    }))

    expect(evaluateKeyboardTabTraversal(complete.map((entry, index) => index === 4 ? { ...entry, focusIndication: false } : entry), { expectedTargets: 5, leftSurface: true }).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(complete.map((entry, index) => index === 4 ? { ...entry, focusOrderIndex: 6 } : entry), { expectedTargets: 5, leftSurface: true }).pass).toBe(false)
  })

  it('requires exact steps 1..N and exit at N+1', () => {
    const options = { expectedTargets: 3, leftSurface: true, exit: { tabStep: 4, focusExitSentinel: true }, dispatchedTabSteps: 4, dispatchedPairs: 4, keyDownSteps: [1, 2, 3, 4], keyUpSteps: [1, 2, 3, 4], maximumTabSteps: 4 }
    expect(evaluateKeyboardTabTraversal(sequence(), options).pass).toBe(true)
    expect(evaluateKeyboardTabTraversal(sequence(), { expectedTargets: 3, leftSurface: true, exit: { tabStep: 4 } }).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence().map((entry, index) => index === 1 ? { ...entry, tabStep: 3 } : entry), options).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence(), { ...options, exit: { tabStep: 3 } }).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence(), { ...options, exit: { tabStep: 5 } }).pass).toBe(false)
  })

  it('fails closed for recorder, snapshot, exit, trap, re-entry, pair, and cap defects', () => {
    const valid = { expectedTargets: 3, leftSurface: true, exit: { tabStep: 4, focusExitSentinel: true }, dispatchedTabSteps: 4, dispatchedPairs: 4, keyDownSteps: [1, 2, 3, 4], keyUpSteps: [1, 2, 3, 4], maximumTabSteps: 4 }
    for (const mutation of [
      { recorderPresent: false },
      { snapshotStable: false },
      { positiveTabIndex: true },
      { leftSurface: false, exit: null },
      { postExitSamples: [sample({ tabStep: 5 })] },
      { dispatchedTabSteps: 5 },
      { dispatchedPairs: 3 },
      { keyDownSteps: [1, 2, 3, 4], keyUpSteps: [1, 2, 4, 4] },
      { overCap: true },
    ]) expect(evaluateKeyboardTabTraversal(sequence(), { ...valid, ...mutation }).pass).toBe(false)
  })

  it('requires N+1 to focus the dedicated outside-root sentinel and rejects a trapped surface', () => {
    const valid = { expectedTargets: 3, leftSurface: true, exit: { tabStep: 4, focusExitSentinel: true }, dispatchedTabSteps: 4,
      dispatchedPairs: 4, keyDownSteps: [1, 2, 3, 4], keyUpSteps: [1, 2, 3, 4], maximumTabSteps: 4 }
    expect(evaluateKeyboardTabTraversal(sequence(), valid).pass).toBe(true)
    expect(evaluateKeyboardTabTraversal(sequence(), { ...valid, leftSurface: false, exit: null }).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence(), { ...valid, exit: { tabStep: 4, focusExitSentinel: false } }).pass).toBe(false)
    expect(evaluateKeyboardTabTraversal(sequence(), { ...valid, exit: { tabStep: 3, focusExitSentinel: true } }).pass).toBe(false)
  })

  it('installs an empty, fixed 1px sentinel immediately after the root and cleans it up', () => {
    document.body.innerHTML = '<main id="before"></main><section id="surface"><button>Save</button></section><footer id="after"></footer>'
    const root = document.querySelector('#surface')
    const sentinel = installFocusExitSentinel(root)
    expect(root.nextElementSibling).toBe(sentinel)
    expect(sentinel.tabIndex).toBe(0)
    expect(sentinel.dataset.libraryTestFocusExitSentinel).toBe('true')
    expect(sentinel.textContent).toBe('')
    expect(sentinel.getAttribute('value')).toBe(null)
    expect(sentinel.getAttribute('href')).toBe(null)
    expect(sentinel.style.position).toBe('fixed')
    expect(sentinel.style.width).toBe('1px')
    expect(sentinel.style.height).toBe('1px')
    expect(buildSequentialCandidateSnapshot(root).controls).toHaveLength(1)
    sentinel.focus()
    expect(document.activeElement).toBe(sentinel)
    removeFocusExitSentinel(sentinel)
    expect(document.querySelector('[data-library-test-focus-exit-sentinel]')).toBe(null)
  })

  it('removes the sentinel when traversal setup fails', () => {
    document.body.innerHTML = '<section id="surface"><button>Save</button></section>'
    const root = document.querySelector('#surface')
    expect(() => {
      let sentinel
      try {
        sentinel = installFocusExitSentinel(root)
        throw new Error('simulated traversal failure')
      } finally {
        removeFocusExitSentinel(sentinel)
      }
    }).toThrow('simulated traversal failure')
    expect(document.querySelector('[data-library-test-focus-exit-sentinel]')).toBe(null)
  })

  it('dispatches exact adjacent rawKeyDown/keyUp pairs sequentially and settles each pair', async () => {
    const calls = []
    let outstanding = 0
    let maximumOutstanding = 0
    const client = { send: async (method, payload) => {
      outstanding += 1
      maximumOutstanding = Math.max(maximumOutstanding, outstanding)
      calls.push([method, payload.type])
      await Promise.resolve()
      outstanding -= 1
    } }

    const settled = []
    const result = await dispatchTabKeyPairs(client, 7, { afterPair: async (step) => settled.push(step) })
    expect(result).toEqual({ dispatchedPairs: 7, chunks: 7 })
    expect(maximumOutstanding).toBe(1)
    expect(settled).toEqual([1, 2, 3, 4, 5, 6, 7])
    expect(calls).toHaveLength(14)
    for (let index = 0; index < calls.length; index += 2) {
      expect(calls.slice(index, index + 2)).toEqual([
        ['Input.dispatchKeyEvent', 'rawKeyDown'],
        ['Input.dispatchKeyEvent', 'keyUp'],
      ])
    }
  })
})
