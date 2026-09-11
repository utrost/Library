export function evaluateTranslatedControlGeometry(controls, { minimumControls = 3, clippingTolerance = 1, longTextLength = 24 } = {}) {
  const measured = Array.isArray(controls) ? controls : []
  const representative = measured.length >= minimumControls
    && measured.every((control) => typeof control.text === 'string' && control.text.length > 0 && control.translated === true)
  const unclipped = measured.every((control) => (
    control.scrollWidth <= control.clientWidth + clippingTolerance
    && control.scrollHeight <= control.clientHeight + clippingTolerance
  ))
  const wrappingAllowed = measured.every((control) => control.whiteSpace === 'normal')
  const wrappedLongControls = measured.filter((control) => typeof control.text === 'string' && control.text.length > longTextLength && control.wraps === true)

  return {
    pass: representative && unclipped && wrappingAllowed && wrappedLongControls.length > 0,
    representative,
    unclipped,
    wrappingAllowed,
    wrappedLongControls: wrappedLongControls.length,
    minimumControls,
    clippingTolerance,
    longTextLength,
  }
}
