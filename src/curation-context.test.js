import { expect, it } from 'vitest'
import { readCurationContext, curationContextUrl, withoutCuration } from './curation-context.js'
it('bounds untrusted queue values and rejects invalid cursors and job IDs', () => {
  expect(readCurationContext('?curationTab=bad&inboxRoot=-1&inboxBefore=50&inboxPages=0,100,20,broken&inboxSelected=1,1,2,-3&curationJob=wrong')).toMatchObject({ tab: 'inbox', rootId: 0, before: 50, pages: [0, 100], selected: [1, 2], job: '' })
})
it('round trips intake state and leaves the originating catalogue filter when closing', () => {
  const state = { tab: 'inbox', filter: 'done', rootId: 4, day: '2026-11-09', before: 50, pages: [0, 100], selected: [42], job: '', page: 1 }
  const url = curationContextUrl('http://localhost/apps/library/?q=Fixture&metadataLookup=1&lookupJob=old', state)
  expect(readCurationContext(url.search)).toEqual(state)
  expect(url.searchParams.has('metadataLookup')).toBe(false)
  expect(withoutCuration(url.href).search).toBe('?q=Fixture')
})
