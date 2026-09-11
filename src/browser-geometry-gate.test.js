import { describe, expect, it } from 'vitest'
import { evaluateTranslatedControlGeometry } from '../scripts/browser-geometry-gate.mjs'

const control = (overrides = {}) => ({
  text: 'نص تحكم مترجم قصير',
  translated: true,
  scrollWidth: 100,
  clientWidth: 100,
  scrollHeight: 40,
  clientHeight: 40,
  whiteSpace: 'normal',
  wraps: false,
  ...overrides,
})

describe('translated browser control geometry gate', () => {
  it('accepts a long label that fits on one line when another long control wraps', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ text: 'تسمية مترجمة طويلة تتسع بشكل طبيعي في سطر واحد' }),
      control({ text: 'عنصر تحكم مترجم طويل يلتف فعليًا على سطرين', wraps: true }),
      control(),
    ])

    expect(result.pass).toBe(true)
    expect(result.wrappedLongControls).toBe(1)
  })

  it('fails for clipping beyond the rounding tolerance', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ text: 'عنصر تحكم مترجم طويل يلتف فعليًا على سطرين', wraps: true }),
      control({ scrollWidth: 102 }),
      control(),
    ])

    expect(result.pass).toBe(false)
    expect(result.unclipped).toBe(false)
  })

  it('fails when no genuinely long translated control wraps', () => {
    const result = evaluateTranslatedControlGeometry([
      control({ text: 'تسمية مترجمة طويلة تتسع بشكل طبيعي في سطر واحد' }),
      control({ text: 'تسمية مترجمة طويلة أخرى تتسع في سطر واحد' }),
      control(),
    ])

    expect(result.pass).toBe(false)
    expect(result.wrappedLongControls).toBe(0)
  })
})
