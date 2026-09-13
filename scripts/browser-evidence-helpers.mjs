const roleOf = (node) => String(node?.role?.value || '')
const nameOf = (node) => String(node?.name?.value || '').trim()
const descriptionOf = (node) => String(node?.description?.value || '').trim()

export function assessAxSubtree(nodes, contract) {
  const input = Array.isArray(nodes) ? nodes : []
  const root = input.find((node) => Number(node.backendDOMNodeId) === Number(contract?.backendNodeId))
  if (!root || !contract.rootRoles?.includes(roleOf(root)) || (contract.rootName != null && nameOf(root) !== contract.rootName)) return { ok: false }
  const byId = new Map(input.map((node) => [String(node.nodeId), node]))
  const descendants = []
  const pending = [...(root.childIds || [])]
  const visited = new Set()
  while (pending.length) {
    const id = String(pending.shift())
    if (visited.has(id)) continue
    visited.add(id)
    const node = byId.get(id)
    if (!node) continue
    descendants.push(node)
    pending.push(...(node.childIds || []))
  }
  const descendantRoles = contract.descendantRoles || []
  const descendantExpectations = contract.descendantExpectations || []
  const exactDescendants = descendantExpectations.every((expected) => descendants.some((node) =>
    Number(node.backendDOMNodeId) === Number(expected.backendNodeId)
      && expected.roles?.includes(roleOf(node))
      && nameOf(node) === expected.name
      && descriptionOf(node) === expected.description))
  return { ok: descendantRoles.every((required) => descendants.some((node) => roleOf(node) === required)) && exactDescendants, root, descendants }
}

export function assessAxFieldEvidence(nodes, contract) {
  const input = Array.isArray(nodes) ? nodes : []
  const byId = new Map(input.map((node) => [String(node.nodeId), node]))
  const root = input.find((node) => Number(node.backendDOMNodeId) === Number(contract?.rootBackendNodeId))
  const field = input.find((node) => Number(node.backendDOMNodeId) === Number(contract?.fieldBackendNodeId))
  const value = input.find((node) => Number(node.backendDOMNodeId) === Number(contract?.valueBackendNodeId))
  if (!root || root.ignored === true || !field || field.ignored === true || !value || value.ignored === true) return { ok: false }
  const reachableFrom = (start) => {
    const reachable = new Set()
    const pending = [String(start.nodeId)]
    while (pending.length) {
      const id = pending.shift()
      if (reachable.has(id)) continue
      reachable.add(id)
      pending.push(...(byId.get(id)?.childIds || []).map(String))
    }
    return reachable
  }
  return {
    ok: reachableFrom(root).has(String(field.nodeId))
      && reachableFrom(field).has(String(value.nodeId))
      && roleOf(value) === 'StaticText'
      && nameOf(value) === String(contract?.value ?? '').trim(),
    root, field, value,
  }
}

export function assessFocusTraversal(observation) {
  const events = Array.isArray(observation?.events) ? observation.events : []
  const focusEvents = events.filter((event) => event.type === 'focusin')
  const keyEvents = events.filter((event) => event.type === 'keydown')
  const forward = events.findIndex((event) => event.type === 'keydown' && event.key === 'Tab' && event.shiftKey === false && event.target === observation.last)
  const backward = events.findIndex((event) => event.type === 'keydown' && event.key === 'Tab' && event.shiftKey === true && event.target === observation.first)
  const immediateFocus = (index, target) => index >= 0 && events[index + 1]?.type === 'focusin' && events[index + 1]?.target === target && events[index + 1]?.inside === true
  const eventStreamValid = Boolean(observation?.first && observation?.last)
    && events.every((event) => event.inside === true)
    && focusEvents.length >= 3 && keyEvents.length === 2
    && focusEvents[0]?.target === observation.last
  const forwardBoundaryContained = eventStreamValid && immediateFocus(forward, observation.first)
  const backwardBoundaryContained = eventStreamValid && backward > forward && immediateFocus(backward, observation.last)
  return {
    ok: forwardBoundaryContained && backwardBoundaryContained,
    forwardBoundaryContained,
    backwardBoundaryContained,
    focusinCount: focusEvents.length,
    keydownCount: keyEvents.length,
  }
}

export function assessSidebarDomState(observation, phase, contract) {
  const expected = ['loading', 'success', 'error']
  return expected.includes(phase) && observation?.open === true && observation?.stateExclusive === true
    && expected.every((state) => observation?.[state] === (state === phase))
    && (contract == null || (observation?.rootName === contract.rootName && observation?.stateName === contract.stateName))
}

export function observeFixtureMutationRequests(events, fixtureIds, bodyLimit = 8192) {
  const ids = (fixtureIds || []).map(String)
  let observedNonGetRequests = 0
  let fixtureMutationRequests = 0
  let truncatedBodies = 0
  let unavailableBodies = 0
  for (const event of events || []) {
    if (event?.method !== 'Network.requestWillBeSent') continue
    const request = event.params?.request || {}
    if (['GET', 'HEAD'].includes(String(request.method || '').toUpperCase())) continue
    observedNonGetRequests += 1
    const rawBody = typeof request.completePostData === 'string' ? request.completePostData : typeof request.postData === 'string' ? request.postData : null
    if (rawBody === null) unavailableBodies += 1
    if (typeof request.completePostData !== 'string' && (rawBody?.length || 0) > bodyLimit) truncatedBodies += 1
    const boundedBody = typeof request.completePostData === 'string' ? rawBody : (rawBody || '').slice(0, bodyLimit)
    if (ids.some((id) => String(request.url || '').includes(id) || boundedBody.includes(id))) fixtureMutationRequests += 1
  }
  return { observedNonGetRequests, fixtureMutationRequests, truncatedBodies, unavailableBodies,
    safe: fixtureMutationRequests === 0 && truncatedBodies === 0 && unavailableBodies === 0 }
}

const mixedDirectionCaptureRegistry = new WeakMap()

const snapshotAxValue = (value) => Object.freeze({ value: value?.value })

function snapshotMixedDirectionRows(rows) {
  if (!Array.isArray(rows)) return Object.freeze([])
  return Object.freeze(rows.map((row) => Object.freeze({
    id: row?.id,
    selector: row?.selector,
    surface: row?.surface,
    text: row?.text,
    exactText: row?.exactText,
    className: row?.className,
    dir: row?.dir,
    computedDirection: row?.computedDirection,
    unicodeBidi: row?.unicodeBidi,
    axSelector: row?.axSelector,
    axRole: row?.axRole,
    axName: row?.axName,
    backendNodeId: row?.backendNodeId,
    axBackendNodeId: row?.axBackendNodeId,
    matchedAxBackendNodeId: row?.matchedAxBackendNodeId,
    selectedAxNodeId: row?.selectedAxNodeId,
    matchedAxNodeId: row?.matchedAxNodeId,
    viewportId: row?.viewportId,
    axNodes: Object.freeze((Array.isArray(row?.axNodes) ? row.axNodes : []).map((node) => Object.freeze({
      backendDOMNodeId: node?.backendDOMNodeId,
      nodeId: node?.nodeId,
      childIds: Object.freeze(Array.isArray(node?.childIds) ? [...node.childIds] : []),
      role: snapshotAxValue(node?.role),
      name: snapshotAxValue(node?.name),
    }))),
  })))
}

export function recordMixedDirectionCapture(observation, contract) {
  if (!observation || typeof observation !== 'object' || !contract || typeof contract !== 'object') return false
  const viewport = observation.viewport
  const exact = observation.captureIdentity === contract.identity
    && observation.captureSequence === contract.sequence
    && observation.viewportId === contract.viewportId
    && viewport?.width === contract.width && viewport?.height === contract.height && viewport?.mobile === contract.mobile
  if (!exact) return false
  mixedDirectionCaptureRegistry.set(observation, Object.freeze({
    identity: contract.identity,
    sequence: observation.captureSequence,
    viewportId: observation.viewportId,
    width: viewport.width,
    height: viewport.height,
    mobile: viewport.mobile,
    fixtureFieldRows: snapshotMixedDirectionRows(observation.fixtureFieldRows),
  }))
  return true
}

export function assessMixedDirectionFields(specs, rows, viewportId) {
  const expected = Array.isArray(specs) ? specs : []
  const observed = Array.isArray(rows) ? rows : []
  if (expected.length === 0 || expected.length !== observed.length) return { ok: false }
  const byId = new Map(observed.map((row) => [row.id, row]))
  const ok = expected.every((spec) => {
    const row = byId.get(spec.id)
    const axNodes = Array.isArray(row?.axNodes) ? row.axNodes : []
    const byAxId = new Map(axNodes.map((node) => [String(node.nodeId), node]))
    const selected = byAxId.get(String(row?.selectedAxNodeId))
    const matched = byAxId.get(String(row?.matchedAxNodeId))
    const reachable = new Set()
    const pending = selected ? [String(selected.nodeId)] : []
    while (pending.length) {
      const nodeId = pending.shift()
      if (reachable.has(nodeId)) continue
      reachable.add(nodeId)
      pending.push(...(byAxId.get(nodeId)?.childIds || []).map(String))
    }
    const exactAxAssociation = Number(selected?.backendDOMNodeId) === Number(row?.backendNodeId)
      && Number(row?.axBackendNodeId) === Number(row?.backendNodeId)
      && Number(matched?.backendDOMNodeId) === Number(row?.matchedAxBackendNodeId)
      && reachable.has(String(row?.matchedAxNodeId))
      && roleOf(matched) === spec.axRole && nameOf(matched) === spec.axName
      && (spec.axRole === 'StaticText'
        ? true
        : String(row?.matchedAxNodeId) === String(row?.selectedAxNodeId)
          && Number(row?.matchedAxBackendNodeId) === Number(row?.axBackendNodeId))
    return (spec.axSelector == null || spec.axSelector === spec.selector)
      && typeof spec.axRole === 'string' && spec.axRole.length > 0
      && typeof spec.axName === 'string'
      && row && row.selector === spec.selector && row.surface === spec.surface
      && row.text === spec.value && row.exactText === true
      && row.className === `library-bidi-${spec.kind}` && row.dir === spec.dir
      && row.computedDirection === spec.computedDirection && row.unicodeBidi === 'isolate'
      && (row.axSelector == null || row.axSelector === row.selector) && row.axRole === spec.axRole && row.axName === spec.axName
      && Number.isInteger(row.backendNodeId) && row.backendNodeId > 0
      && Number.isInteger(row.axBackendNodeId) && row.axBackendNodeId > 0
      && Number.isInteger(row.matchedAxBackendNodeId) && row.matchedAxBackendNodeId > 0
      && exactAxAssociation
      && (viewportId == null || row.viewportId === viewportId)
  })
  return { ok }
}

export function assessMixedDirectionCaptures(specs, captures, identities) {
  const desktop = captures?.desktop
  const mobile = captures?.mobile
  const desktopRecord = desktop && mixedDirectionCaptureRegistry.get(desktop)
  const mobileRecord = mobile && mixedDirectionCaptureRegistry.get(mobile)
  const exactRecord = (observation, record, expectedIdentity, expected) => record
    && record.identity === expectedIdentity && observation.captureIdentity === expectedIdentity
    && record.sequence === expected.sequence && observation.captureSequence === expected.sequence
    && record.viewportId === expected.viewportId && observation.viewportId === expected.viewportId
    && record.width === expected.width && record.height === expected.height && record.mobile === expected.mobile
    && observation.viewport?.width === expected.width && observation.viewport?.height === expected.height
    && observation.viewport?.mobile === expected.mobile
  const desktopExpected = { sequence: 1, viewportId: 'desktop-1280x900', width: 1280, height: 900, mobile: false }
  const mobileExpected = { sequence: 2, viewportId: 'mobile-390x844', width: 390, height: 844, mobile: true }
  const provenanceOk = identities?.desktopIdentity !== identities?.mobileIdentity
    && exactRecord(desktop, desktopRecord, identities?.desktopIdentity, desktopExpected)
    && exactRecord(mobile, mobileRecord, identities?.mobileIdentity, mobileExpected)
  return { ok: Boolean(provenanceOk)
      && assessMixedDirectionFields(specs, desktopRecord?.fixtureFieldRows, desktopExpected.viewportId).ok
      && assessMixedDirectionFields(specs, mobileRecord?.fixtureFieldRows, mobileExpected.viewportId).ok }
}
