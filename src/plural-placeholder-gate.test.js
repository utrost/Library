import { describe, expect, it } from 'vitest'
import { evaluatePluralPlaceholderIntegrity } from '../scripts/plural-placeholder-gate.mjs'

describe('plural placeholder integrity', () => {
  const key = '_Changed %n item for %s_::_Changed %n items for %s_'

  it('checks every locale plural variant against source count and order', () => {
    expect(evaluatePluralPlaceholderIntegrity(key, Array(6).fill('غيّر %n عنصرًا لـ %s')).pass).toBe(true)
  })

  it.each([
    ['missing %n', 'غيّر عنصرًا لـ %s'],
    ['duplicated %n', 'غيّر %n %n عنصرًا لـ %s'],
    ['corrupt %n', 'غيّر % ن عنصرًا لـ %s'],
    ['reordered placeholders', 'غيّر %s عنصرًا لـ %n'],
  ])('rejects %s in any individual plural form', (_name, mutation) => {
    const variants = Array(6).fill('غيّر %n عنصرًا لـ %s')
    variants[4] = mutation
    expect(evaluatePluralPlaceholderIntegrity(key, variants).pass).toBe(false)
  })
})
