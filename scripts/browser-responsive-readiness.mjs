export function isCdpClickTargetReady(observed) {
  return observed?.present === true
    && observed?.display !== 'none'
    && observed?.visibility !== 'hidden'
    && observed?.visibility !== 'collapse'
    && observed?.opacity !== '0'
    && Number(observed?.rectCount) > 0
    && Number.isFinite(observed?.width) && observed.width > 0
    && Number.isFinite(observed?.height) && observed.height > 0
    && observed?.disabled === false
    && observed?.ariaDisabled !== 'true'
    && observed?.inert === false
    && observed?.obstructed === false
}

export function isSidebarCloseReady(observed) {
  const sidebarClosed = observed?.sidebarPresent === false
    || observed?.sidebarDisplay === 'none'
    || observed?.sidebarVisibility === 'hidden'
    || observed?.sidebarVisibility === 'collapse'
    || Number(observed?.sidebarRectCount) === 0
    || Number(observed?.sidebarWidth) <= 0
    || Number(observed?.sidebarHeight) <= 0
  return sidebarClosed
    && Number(observed?.activeOverlayCount) === 0
    && isCdpClickTargetReady({
      present: observed?.openerPresent,
      display: observed?.openerDisplay,
      visibility: observed?.openerVisibility,
      opacity: observed?.openerOpacity,
      rectCount: observed?.openerRectCount,
      width: observed?.openerWidth,
      height: observed?.openerHeight,
      disabled: observed?.openerDisabled,
      ariaDisabled: observed?.openerAriaDisabled,
      inert: observed?.openerInert,
      obstructed: observed?.openerObstructed,
    })
}

export function isFreshCatalogueReady(observed) {
  const opener = observed?.opener
  return observed?.urlMatches === true
    && observed?.newDocument === true
    && observed?.vueCatalogueMounted === true
    && observed?.fixtureCardCount === 3
    && observed?.fixtureButtonCount === 3
    && observed?.sidebarClosed === true
    && Number(observed?.activeOverlayCount) === 0
    && Number(observed?.activeInertCount) === 0
    && opener?.present === true
    && opener?.display !== 'none'
    && opener?.visibility !== 'hidden'
    && opener?.visibility !== 'collapse'
    && opener?.opacity !== '0'
    && Number(opener?.rectCount) > 0
    && Number.isFinite(opener?.width) && opener.width > 0
    && Number.isFinite(opener?.height) && opener.height > 0
    && opener?.disabled === false
    && opener?.ariaDisabled !== 'true'
    && opener?.inert === false
}

export async function waitForResponsiveReadiness({ phase, observe, accept, timeoutMs = 2000, now = Date.now, onObservation = () => {} }) {
  const startedAt = now()
  let attempts = 0
  let observed = null
  do {
    observed = await observe()
    attempts += 1
    const ready = accept(observed) === true
    const evidence = { ...observed, attempts, ready }
    onObservation(evidence)
    if (ready) return evidence
  } while (now() - startedAt < timeoutMs)

  const error = new Error(`Timed out waiting for ${phase} readiness after ${attempts} observations`)
  error.evidence = { ...observed, attempts, ready: false }
  throw error
}
