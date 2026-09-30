import { describe, expect, it, vi } from 'vitest'
import { createCachedTranslator } from './cached-translator.js'
describe('static translation reuse', () => {
  it('reuses the original sanitized result for the same application and label', () => {
    const translate = vi.fn((app, text) => `${app}:${text}`), t = createCachedTranslator(translate)
    expect(t('library', 'Details')).toBe('library:Details')
    expect(t('library', 'Details')).toBe('library:Details')
    expect(translate).toHaveBeenCalledTimes(1)
    t('other', 'Details'); expect(translate).toHaveBeenCalledTimes(2)
  })
  it('does not cache substitutions, explicit options or non-string values', () => {
    const translate = vi.fn(() => 'translated'), t = createCachedTranslator(translate)
    for (let n = 0; n < 2; n++) { t('library', '{title}', { title: '<script>' }); t('library', 'Details', undefined, { sanitize: true }); t('library', 12) }
    expect(translate).toHaveBeenCalledTimes(6)
  })
  it('invalidates all static values when the language/locale context changes', () => {
    let locale = 'en'; const translate = vi.fn(() => locale), t = createCachedTranslator(translate, () => locale)
    expect(t('library', 'Details')).toBe('en'); locale = 'de'
    expect(t('library', 'Details')).toBe('de'); expect(translate).toHaveBeenCalledTimes(2)
  })
  it('bounds retained labels and evicts oldest values', () => {
    const translate = vi.fn((app, text) => text), t = createCachedTranslator(translate, () => 'en', 2)
    t('library', 'a'); t('library', 'b'); t('library', 'c'); t('library', 'a')
    expect(translate).toHaveBeenCalledTimes(4)
  })
})
