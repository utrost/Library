export function buildSequentialCandidateSnapshot(root) {
  if (!root) return { controls: [], records: [], positiveTabIndex: false }
  const view = root.ownerDocument.defaultView
  const elements = [...root.querySelectorAll('*')]
  const closedDetailsAllows = (element) => {
    for (let details = element.closest('details:not([open])'); details; details = details.parentElement?.closest('details:not([open])')) {
      const firstSummary = [...details.children].find((child) => child.tagName === 'SUMMARY')
      if (element !== firstSummary) return false
    }
    return true
  }
  const rendered = (element) => {
    if (element.closest('[hidden], [inert]')) return false
    for (let ancestor = element; ancestor && root.contains(ancestor); ancestor = ancestor.parentElement) {
      const style = view.getComputedStyle(ancestor)
      if (style.visibility === 'hidden' || style.display === 'none') return false
    }
    return element.getClientRects().length > 0
  }
  const baseEligible = (element) => element.tabIndex >= 0
    && !element.matches(':disabled, input[type="hidden"]')
    && closedDetailsAllows(element)
    && rendered(element)
  const eligible = elements.filter(baseEligible)
  const radioChoice = new Map()
  for (const radio of eligible.filter((element) => element.matches('input[type="radio"][name]'))) {
    const group = eligible.filter((candidate) => candidate.matches('input[type="radio"][name]')
      && candidate.name === radio.name && candidate.form === radio.form && candidate.getRootNode() === radio.getRootNode())
    const selected = group.find((candidate) => candidate.checked) || group[0]
    for (const member of group) radioChoice.set(member, selected)
  }
  const controls = eligible.filter((element) => !radioChoice.has(element) || radioChoice.get(element) === element)
  const clipped = (element) => {
    const style = view.getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    return (rect.width <= 1 && rect.height <= 1)
      || style.clip !== 'auto' || style.clipPath !== 'none'
  }
  return {
    controls,
    records: controls.map((element, focusOrderIndex) => ({
      element,
      focusOrderIndex,
      clippedButFocusable: clipped(element),
      tabIndex: element.tabIndex,
      disabled: element.matches(':disabled'),
      hidden: element.hidden === true,
      href: element.matches('a,area') ? element.getAttribute('href') : null,
      type: element.matches('input,button') ? element.getAttribute('type') : null,
      checked: element.matches('input[type="radio"]') ? element.checked : null,
      detailsOpen: element.closest('details')?.open ?? null,
    })),
    positiveTabIndex: eligible.some((element) => element.tabIndex > 0),
  }
}

export function sequentialSnapshotsMatch(before, after) {
  if (!before || !after || before.positiveTabIndex !== after.positiveTabIndex
    || before.records.length !== after.records.length) return false
  const properties = ['focusOrderIndex', 'tabIndex', 'disabled', 'hidden', 'href', 'type', 'checked', 'detailsOpen']
  return before.records.every((record, index) => record.element?.isConnected
    && after.records[index]?.element === record.element
    && properties.every((property) => after.records[index][property] === record[property]))
}
