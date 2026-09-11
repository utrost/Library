const tabKeyEvent = (type) => ({ type, key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 })

export async function dispatchTabKeyPairs(client, pairCount, { afterPair = null } = {}) {
  if (!Number.isSafeInteger(pairCount) || pairCount < 0 || (afterPair !== null && typeof afterPair !== 'function')) {
    throw new Error('invalid_tab_dispatch_bounds')
  }
  for (let step = 0; step < pairCount; step += 1) {
    await client.send('Input.dispatchKeyEvent', tabKeyEvent('rawKeyDown'))
    await client.send('Input.dispatchKeyEvent', tabKeyEvent('keyUp'))
    if (afterPair) await afterPair(step + 1)
  }
  return { dispatchedPairs: pairCount, chunks: pairCount }
}

export function evaluateKeyboardTabTraversal(samples, {
  minimumTargets = 3,
  expectedTargets = null,
  leftSurface = expectedTargets === null,
  exit = expectedTargets === null ? null : undefined,
  postExitSamples = [],
  dispatchedTabSteps = null,
  dispatchedPairs = null,
  keyDownSteps = null,
  keyUpSteps = null,
  maximumTabSteps = null,
  positiveTabIndex = false,
  snapshotStable = true,
  recorderPresent = true,
  overCap = false,
  cancelledTabSteps = [],
  focusInSteps = [],
} = {}) {
  const traversed = Array.isArray(samples) ? samples : []
  const requiredTargets = Number.isInteger(expectedTargets) ? expectedTargets : minimumTargets
  const target = traversed.at(-1)
  const exactSteps = traversed.every((sample, index) => sample.tabStep === index + 1)
  const exactOrder = traversed.every((sample, index) => sample.focusOrderIndex === index)
  const exitStep = exit?.tabStep
  const sentinelExit = exit?.focusExitSentinel === true
  const exactExit = expectedTargets === null || (leftSurface && sentinelExit && exitStep === requiredTargets + 1)
  const noReentry = Array.isArray(postExitSamples) && postExitSamples.length === 0
  const complete = traversed.length === requiredTargets && exactExit && noReentry
  const naturalControl = complete
    && traversed.every((sample) => sample.naturalControl && sample.visible && sample.insideRoot)
  const visibleFocus = complete
    && traversed.every((sample) => sample.focusVisible && sample.focusIndication)
  const orderEvidence = complete
    && exactSteps
    && exactOrder
    && new Set(traversed.map((sample) => sample.identity)).size === traversed.length
  const pairsMatch = keyDownSteps === null && keyUpSteps === null
    ? true
    : Array.isArray(keyDownSteps) && Array.isArray(keyUpSteps)
      && keyDownSteps.every((step, index) => step === index + 1)
      && keyUpSteps.every((step, index) => step === index + 1)
      && keyUpSteps.length === keyDownSteps.length
  const exactDispatchRequired = expectedTargets !== null
  const withinCap = exactDispatchRequired
    ? Number.isInteger(maximumTabSteps) && maximumTabSteps === requiredTargets + 1 && maximumTabSteps <= 200
      && dispatchedTabSteps === maximumTabSteps && dispatchedPairs === maximumTabSteps
      && keyDownSteps?.length === dispatchedTabSteps
    : Number.isInteger(maximumTabSteps) && Number.isInteger(dispatchedTabSteps)
      ? dispatchedTabSteps === maximumTabSteps && keyDownSteps?.length === dispatchedTabSteps
      : true
  const stable = recorderPresent && snapshotStable && !positiveTabIndex && !overCap && pairsMatch && withinCap
    && Array.isArray(cancelledTabSteps) && cancelledTabSteps.length === 0
  return {
    pass: complete && naturalControl && visibleFocus && orderEvidence && stable,
    complete,
    naturalControl,
    visibleFocus,
    orderEvidence,
    tabSteps: traversed.length,
    minimumTargets,
    expectedTargets: requiredTargets,
    leftSurface,
    exactExit,
    sentinelExit,
    pairsMatch,
    snapshotStable,
    stable,
    target: target || null,
  }
}
