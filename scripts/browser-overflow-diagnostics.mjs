export function collectOverflowDiagnostics(root) {
  if (!root) return { rootBounds: {}, viewportBounds: {}, offenders: [] }
  const view = root.ownerDocument.defaultView
  const numeric = (rect) => ({ left: Number(rect.left), right: Number(rect.right), width: Number(rect.width) })
  const identity = (element) => ({ tag: element.tagName.toLowerCase(), id: element.id || '', classes: [...element.classList].slice(0, 6).sort() })
  const rootRect = root.getBoundingClientRect()
  const viewportWidth = Number(root.ownerDocument.documentElement.clientWidth)
  const viewportBounds = { left: 0, right: viewportWidth, width: viewportWidth }
  const rootBounds = { ...numeric(rootRect), scrollWidth: Number(root.scrollWidth), clientWidth: Number(root.clientWidth) }
  const boundaryLeft = Math.max(0, rootRect.left)
  const boundaryRight = Math.min(viewportBounds.right, rootRect.right)
  const rootOverflows = root.scrollWidth > root.clientWidth + 1
  const approvedVisualHiding = (element) => {
    if (!element.classList.contains('hidden-visually')) return false
    const style = view.getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    const px = (value, expected) => Number.parseFloat(value) === expected
    const zeroSides = (prefix) => ['Top', 'Right', 'Bottom', 'Left'].every((side) => px(style[`${prefix}${side}`], 0))
    const negativeOneMargins = ['Top', 'Right', 'Bottom', 'Left'].every((side) => px(style[`margin${side}`], -1))
    const zeroBorder = ['Top', 'Right', 'Bottom', 'Left'].every((side) => px(style[`border${side}Width`], 0))
    const clip = String(style.clip).replace(/\s+/g, '').toLowerCase()
    const clipPath = String(style.clipPath).replace(/\s+/g, '').toLowerCase()
    return style.position === 'absolute' && rect.width <= 1 && px(style.width, 1) && px(style.minWidth, 1)
      && px(style.height, 1) && px(style.minHeight, 1) && negativeOneMargins && zeroSides('padding') && zeroBorder
      && style.overflow === 'hidden' && (style.overflowX || style.overflow) === 'hidden' && (style.overflowY || style.overflow) === 'hidden'
      && style.whiteSpace === 'nowrap' && ['rect(0px,0px,0px,0px)', 'rect(0px,0px,0px,0px)'].includes(clip)
      && clipPath === 'inset(50%)'
  }
  const offenders = [...root.querySelectorAll('*')].filter((element) => {
    const style = view.getComputedStyle(element)
    const rect = element.getBoundingClientRect()
    if (style.display === 'none' || style.visibility === 'hidden' || element.getClientRects().length === 0 || (rect.width === 0 && rect.height === 0)) return false
    const closedDetails = element.closest('details:not([open])')
    if (closedDetails && !closedDetails.querySelector(':scope > summary')?.contains(element)) return false
    let ancestor = element
    while (ancestor && ancestor !== root) {
      if (approvedVisualHiding(ancestor)) return false
      ancestor = ancestor.parentElement
    }
    const crossesBoundary = rect.left < boundaryLeft - 1 || rect.right > boundaryRight + 1
    const propagatesOverflow = rootOverflows && element.scrollWidth > element.clientWidth + 1
      && !['hidden', 'clip', 'auto', 'scroll'].includes(style.overflowX)
    return crossesBoundary || propagatesOverflow
  }).slice(0, 24).map((element) => {
    const style = view.getComputedStyle(element)
    return { identity: identity(element), parentIdentity: element.parentElement ? identity(element.parentElement) : null,
      rect: numeric(element.getBoundingClientRect()), scrollWidth: Number(element.scrollWidth), clientWidth: Number(element.clientWidth),
      minInlineSize: style.minInlineSize, inlineSize: style.inlineSize, whiteSpace: style.whiteSpace, display: style.display,
      gridTemplateColumns: style.gridTemplateColumns, flexWrap: style.flexWrap, overflowX: style.overflowX }
  })
  return { rootBounds, viewportBounds, offenders }
}
