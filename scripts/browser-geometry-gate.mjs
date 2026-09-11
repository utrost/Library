export function evaluateTranslatedControlGeometry(controls, { minimumControls = 3, clippingTolerance = 1 } = {}) {
  const measured = Array.isArray(controls) ? controls : []
  const representative = measured.length === minimumControls
    && measured.every((control) => typeof control.specId === 'string' && control.specId.length > 0
      && typeof control.text === 'string' && control.text.length > 0 && control.translated === true
      && control.exactText === true && control.associated === true && control.naturalControl === true)
    && new Set(measured.map((control) => control.specId)).size === minimumControls
  const unclipped = measured.every((control) => (
    control.scrollWidth <= control.clientWidth + clippingTolerance
    && control.scrollHeight <= control.clientHeight + clippingTolerance
  ))
  const wrappingAllowed = measured.every((control) => control.whiteSpace === 'normal')
  const designatedLongControls = measured.filter((control) => control.designatedLong === true)
  const expectedWrappedControls = measured.filter((control) => control.expectWrap === true)
  const wrappedLongControls = designatedLongControls.filter((control) => control.wraps === true
    && control.textMeasured === true
    && Number.isSafeInteger(control.lineCount)
    && control.lineCount >= 2
    && Number.isSafeInteger(control.textRectCount)
    && control.textRectCount >= 2
    && control.clientWidth > 0)
  const expectedWrapping = expectedWrappedControls.every((control) => wrappedLongControls.includes(control))

  return {
    pass: representative && unclipped && wrappingAllowed && expectedWrapping,
    representative,
    unclipped,
    wrappingAllowed,
    wrappedLongControls: wrappedLongControls.length,
    designatedLongControls: designatedLongControls.length,
    minimumControls,
    clippingTolerance,
    expectedWrappedControls: expectedWrappedControls.length,
  }
}
