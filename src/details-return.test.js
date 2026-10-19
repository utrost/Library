import { describe, expect, it } from 'vitest'
import { bookDetailsUrl, detailsReturnContext } from './details-return.js'

describe('canonical editor navigation', () => {
  const base = '/apps/library/'
  it.each(['?authors=1&authorId=7', '?series=1&seriesId=9', '?search=A%26B&sort=title&page=2', '?authors=1&authorConflicts=1'])('retains the originating view %s', search => {
    const result = bookDetailsUrl(base, 42, `https://cloud.example${base}${search}`)
    const target = new URL(result, 'https://cloud.example')
    expect(target.searchParams.get('details')).toBe('42')
    expect(detailsReturnContext(base, target.href)).toEqual({ url: base + search, hasSource: true })
  })
  it.each(['https://evil.invalid/', '//evil.invalid/', '/elsewhere', '/apps/library/?details=2', '/apps/library/?item=2', '/apps/library/?returnTo=x', '/apps/library/\\evil'])('rejects unsafe or recursive return %s', source => {
    expect(detailsReturnContext(base, `https://cloud.example${base}?details=42&returnTo=${encodeURIComponent(source)}`)).toEqual({ url: base, hasSource: false })
  })
})
