export function measureVisibleTextLines(root, { excludeNestedControls = false, topTolerance = 1.5, rangeFactory } = {}) {
  const maximumTextRects = 64
  if (!root || typeof root !== 'object' || !Number.isFinite(topTolerance) || topTolerance < 0) {
    return { textMeasured: false, wraps: false, lineCount: 0, textRectCount: 0 }
  }
  const documentValue = root.ownerDocument
  const makeRange = rangeFactory || (() => documentValue.createRange())
  const nodeApi = documentValue?.defaultView?.Node || globalThis.Node
  if (!nodeApi || typeof makeRange !== 'function') return { textMeasured: false, wraps: false, lineCount: 0, textRectCount: 0 }

  const textNodes = []
  const visit = (node) => {
    for (const child of node.childNodes || []) {
      if (child.nodeType === nodeApi.TEXT_NODE) {
        if (String(child.textContent || '').trim()) textNodes.push(child)
        continue
      }
      if (child.nodeType !== nodeApi.ELEMENT_NODE) continue
      if (excludeNestedControls && child.matches?.('input,select,textarea,button')) continue
      visit(child)
    }
  }
  visit(root)

  const tops = []
  let textRectCount = 0
  for (const textNode of textNodes) {
    let range
    try {
      range = makeRange()
      range.selectNodeContents(textNode)
      for (const rect of range.getClientRects()) {
        if (textRectCount >= maximumTextRects) break
        if (!Number.isFinite(rect.top) || !(rect.width > 0) || !(rect.height > 0)) continue
        textRectCount += 1
        if (!tops.some((top) => Math.abs(top - rect.top) <= topTolerance)) tops.push(rect.top)
      }
    } catch {
      // Missing/non-rendered nodes are deliberately fail-closed.
    } finally {
      range?.detach?.()
    }
    if (textRectCount >= maximumTextRects) break
  }
  const lineCount = Math.min(tops.length, maximumTextRects)
  return { textMeasured: textRectCount > 0, wraps: lineCount >= 2, lineCount, textRectCount }
}
