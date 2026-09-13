import { describe, expect, it } from 'vitest'
import { captureCanonicalDetailCandidates, collectCanonicalDetailCandidates } from '../scripts/browser-detail-candidate-collection.mjs'

describe('browser detail candidate collection boundary', () => {
  it('converts same-origin absolute item anchors to unique canonical pathnames', () => {
    expect(collectCanonicalDetailCandidates([
      'https://cloud.test/apps/library/items/42',
      'https://cloud.test/apps/library/items/42',
      'https://cloud.test/apps/library/items/73',
    ], 'https://cloud.test')).toEqual([
      '/apps/library/items/42',
      '/apps/library/items/73',
    ])
  })

  it.each([
    'https://other.test/apps/library/items/42',
    'https://cloud.test/apps/library/items/42?fixture=910001',
    'https://cloud.test/apps/library/items/42#fixture',
    'https://cloud.test/apps/library/items/%34%32',
    'https://cloud.test/apps/library/items/042',
    'https://cloud.test/apps/library/items/42/',
    'https://cloud.test/apps/library/items/42/extra',
    'https://cloud.test/apps/library/items/9007199254740992',
    'not a URL',
  ])('rejects malformed or bypass anchor %s', (href) => {
    expect(collectCanonicalDetailCandidates([href], 'https://cloud.test')).toEqual([])
  })

  it.each(['910001', '910002', '910003'])('rejects reserved synthetic fixture ID %s', (id) => {
    expect(collectCanonicalDetailCandidates([
      `https://cloud.test/apps/library/items/${id}`,
    ], 'https://cloud.test')).toEqual([])
  })
})

describe('authenticated normal-catalogue candidate capture', () => {
  it('captures canonical real candidates into a separate list', () => {
    expect(captureCanonicalDetailCandidates({
      hrefs: [
        'https://cloud.test/apps/library/items/42',
        'https://cloud.test/apps/library/items/910001',
      ],
      origin: 'https://cloud.test',
    })).toEqual(['/apps/library/items/42'])
  })

  it('fails closed when the normal catalogue yields no real candidate', () => {
    expect(() => captureCanonicalDetailCandidates({
      hrefs: ['https://cloud.test/apps/library/items/910001'],
      origin: 'https://cloud.test',
    })).toThrow('no_real_detail_candidates_captured')
  })
})
