import { describe, expect, it, vi } from 'vitest'
import { selectAuthenticatedDetailCandidate } from '../scripts/browser-detail-candidate.mjs'

describe('authenticated real-catalogue detail candidate selection', () => {
  it('skips a stale first 404 and selects a later 200 detail page', async () => {
    const preflight = vi.fn(async (url) => ({ status: url.endsWith('/1') ? 404 : 200, browserContext: true }))
    const navigate = vi.fn(async (url) => ({ status: 200, detailPage: url.endsWith('/2') }))
    await expect(selectAuthenticatedDetailCandidate(['/apps/library/items/1', '/apps/library/items/2'], {
      origin: 'https://cloud.test', preflight, navigate,
    })).resolves.toMatchObject({ url: 'https://cloud.test/apps/library/items/2', status: 200 })
    expect(preflight).toHaveBeenCalledTimes(2)
    expect(navigate).toHaveBeenCalledTimes(1)
  })

  it('fails explicitly when every real candidate is unavailable', async () => {
    await expect(selectAuthenticatedDetailCandidate(['/apps/library/items/1'], {
      origin: 'https://cloud.test', preflight: async () => ({ status: 404, browserContext: true }), navigate: vi.fn(),
    })).rejects.toThrow('no_accessible_real_detail_candidate')
  })

  it('requires browser authentication context and same-origin candidates', async () => {
    const navigate = vi.fn()
    await expect(selectAuthenticatedDetailCandidate([
      'https://other.test/apps/library/items/1', '/apps/library/items/2',
    ], {
      origin: 'https://cloud.test',
      preflight: async () => ({ status: 200, browserContext: false }),
      navigate,
    })).rejects.toThrow('no_accessible_real_detail_candidate')
    expect(navigate).not.toHaveBeenCalled()
  })

  it.each(['910001', '910002', '910003'])('never selects reserved synthetic bidi fixture ID %s despite forged success evidence', async (id) => {
    const preflight = vi.fn(async () => ({ status: 200, browserContext: true }))
    const navigate = vi.fn(async () => ({ status: 200, detailPage: true }))
    await expect(selectAuthenticatedDetailCandidate([`/apps/library/items/${id}`], {
      origin: 'https://cloud.test', preflight, navigate,
    })).rejects.toThrow('no_accessible_real_detail_candidate')
    expect(preflight).not.toHaveBeenCalled()
    expect(navigate).not.toHaveBeenCalled()
  })

  it.each([
    'apps/library/items/42', '//cloud.test/apps/library/items/42',
    '/apps/library/items/%39%31%30%30%30%31', '/apps/library/items/910%30%30%32',
    '/apps/library/items/%2e%2e/items/42', '/apps/library/items/042',
    '/apps/library/items/42/extra', '/apps/library/items/42?fixture=910001',
  ])('rejects non-canonical or non-root-relative item path %s', async (candidate) => {
    const preflight = vi.fn(async () => ({ status: 200, browserContext: true }))
    await expect(selectAuthenticatedDetailCandidate([candidate], {
      origin: 'https://cloud.test', preflight, navigate: vi.fn(async () => ({ status: 200, detailPage: true })),
    })).rejects.toThrow('no_accessible_real_detail_candidate')
    expect(preflight).not.toHaveBeenCalled()
  })

  it('keeps a canonical positive safe real ID valid after rejecting malformed candidates', async () => {
    await expect(selectAuthenticatedDetailCandidate(['/apps/library/items/%34%32', '/apps/library/items/42'], {
      origin: 'https://cloud.test', preflight: async () => ({ status: 200, browserContext: true }), navigate: async () => ({ status: 200, detailPage: true }),
    })).resolves.toMatchObject({ url: 'https://cloud.test/apps/library/items/42' })
  })
})
