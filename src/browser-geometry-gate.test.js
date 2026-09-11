import { describe, expect, it } from 'vitest'
import { evaluateTranslatedControlGeometry } from '../scripts/browser-geometry-gate.mjs'

const control = (overrides = {}) => ({
  specId: 'control',
  text: 'نص تحكم مترجم قصير',
  translated: true,
  exactText: true,
  associated: true,
  naturalControl: true,
  designatedLong: false,
  scrollWidth: 100,
  clientWidth: 100,
  scrollHeight: 40,
  clientHeight: 40,
  textMeasured: true,
  lineCount: 1,
  textRectCount: 1,
  whiteSpace: 'normal',
  wraps: false,
  ...overrides,
})

describe('translated browser control geometry gate', () => {
  it('accepts a long label that fits on one line when another long control wraps', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ specId: 'first', text: 'تسمية مترجمة طويلة تتسع بشكل طبيعي في سطر واحد' }),
      control({ specId: 'long', text: 'عنصر تحكم مترجم طويل يلتف فعليًا على سطرين', wraps: true, lineCount: 2, textRectCount: 2, designatedLong: true, expectWrap: true }),
      control({ specId: 'third' }),
    ])

    expect(result.pass).toBe(true)
    expect(result.wrappedLongControls).toBe(1)
  })

  it('fails for clipping beyond the rounding tolerance', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ specId: 'long', text: 'عنصر تحكم مترجم طويل يلتف فعليًا على سطرين', wraps: true, lineCount: 2, textRectCount: 2, designatedLong: true, expectWrap: true }),
      control({ specId: 'second', scrollWidth: 102 }), control({ specId: 'third' }),
    ])

    expect(result.pass).toBe(false)
    expect(result.unclipped).toBe(false)
  })

  it('allows an unclipped one-line control unless its row contract expects wrapping', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ specId: 'first', text: 'تسمية مترجمة طويلة تتسع بشكل طبيعي في سطر واحد' }),
      control({ specId: 'long', text: 'تسمية مترجمة طويلة أخرى تتسع في سطر واحد', designatedLong: true, expectWrap: false }),
      control({ specId: 'third' }),
    ])

    expect(result.pass).toBe(true)
    expect(result.wrappedLongControls).toBe(0)
  })

  it('fails expected-wrap one-line text and accepts actual measured two-line text', () => {
    const rows = [control({ specId: 'first' }), control({ specId: 'second' })]
    const oneLine = control({ specId: 'long', designatedLong: true, expectWrap: true, text: 'A genuinely long translated control' })
    expect(evaluateTranslatedControlGeometry([oneLine, ...rows]).pass).toBe(false)
    expect(evaluateTranslatedControlGeometry([{ ...oneLine, wraps: true, lineCount: 2, textRectCount: 2 }, ...rows]).pass).toBe(true)
  })

  it('accepts desktop-fit rows with no expected wrapping', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ specId: 'first' }), control({ specId: 'second' }), control({ specId: 'third', designatedLong: true, expectWrap: false }),
    ])
    expect(result.pass).toBe(true)
  })

  it('fails when a synthetic translated flag is false', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ specId: 'long', text: 'عنصر تحكم مترجم طويل يلتف فعليًا على سطرين', wraps: true, designatedLong: true }),
      control({ specId: 'second', translated: false }), control({ specId: 'third' }),
    ])

    expect(result.pass).toBe(false)
    expect(result.representative).toBe(false)
  })

  it('does not trust a wrap flag without measured text line boxes', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ specId: 'long', text: 'عنصر تحكم مترجم طويل يدعي الالتفاف بلا قياس', wraps: true, designatedLong: true, expectWrap: true, textMeasured: false, lineCount: 0, textRectCount: 0 }),
      control({ specId: 'second' }), control({ specId: 'third' }),
    ])

    expect(result.pass).toBe(false)
    expect(result.wrappedLongControls).toBe(0)
  })

  it('mutation-detects substring ancestors and missing label associations', () => {
    const valid = [control({ specId: 'long', designatedLong: true, wraps: true, lineCount: 2, textRectCount: 2, text: 'عنصر تحكم مترجم طويل يلتف فعليًا' }), control({ specId: 'second' }), control({ specId: 'third' })]
    expect(evaluateTranslatedControlGeometry(valid.map((entry, index) => index === 1 ? { ...entry, exactText: false } : entry)).pass).toBe(false)
    expect(evaluateTranslatedControlGeometry(valid.map((entry, index) => index === 1 ? { ...entry, associated: false } : entry)).pass).toBe(false)
    expect(evaluateTranslatedControlGeometry(valid.map((entry, index) => index === 1 ? { ...entry, naturalControl: false } : entry)).pass).toBe(false)
  })

  it('fails closed when catalogue identity, translation, or association is omitted', () => {
    const valid = [control({ specId: 'long', designatedLong: true, wraps: true, lineCount: 2, textRectCount: 2, text: 'عنصر تحكم مترجم طويل يلتف فعليًا' }), control({ specId: 'second' }), control({ specId: 'third' })]
    expect(evaluateTranslatedControlGeometry(valid.map((entry, index) => index === 0 ? { ...entry, specId: undefined } : entry)).pass).toBe(false)
    expect(evaluateTranslatedControlGeometry(valid.map((entry, index) => index === 1 ? { ...entry, translated: undefined } : entry)).pass).toBe(false)
    expect(evaluateTranslatedControlGeometry(valid.map((entry, index) => index === 1 ? { ...entry, associated: undefined } : entry)).pass).toBe(false)
  })
})
