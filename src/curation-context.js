// URL-only intake context: no private catalogue data is persisted in shared browser storage.
const positive = value => /^[1-9][0-9]{0,14}$/.test(String(value)) ? Number(value) : 0
export const curationKeys = ['curation', 'curationTab', 'curationJob', 'curationPage', 'inboxDay', 'inboxRoot', 'inboxFilter', 'inboxBefore', 'inboxPages', 'inboxSelected']
export function readCurationContext(search = window.location.search) {
  const params = new URLSearchParams(search)
  const list = (key, limit, zero = false) => [...new Set((params.get(key) || '').slice(0, 1600).split(',').filter(v => positive(v) || (zero && v === '0')).map(Number))].slice(0, limit)
  const before = positive(params.get('inboxBefore'))
  return {
    tab: params.get('curationTab') === 'jobs' ? 'jobs' : 'inbox',
    filter: ['pending', 'done', 'deferred', 'all'].includes(params.get('inboxFilter')) ? params.get('inboxFilter') : 'pending',
    day: /^\d{4}-\d{2}-\d{2}$/.test(params.get('inboxDay') || '') ? params.get('inboxDay') : '',
    rootId: positive(params.get('inboxRoot')), before,
    pages: list('inboxPages', 100, true).filter(v => before && (v === 0 || v > before)),
    selected: list('inboxSelected', 50),
    job: /^[a-f0-9]{32}$/.test(params.get('curationJob') || '') ? params.get('curationJob') : '',
    page: Math.min(100000, positive(params.get('curationPage')) || 1),
  }
}
export function curationContextUrl(href, state) {
  const url = new URL(href, window.location.origin)
  for (const key of [...curationKeys, 'metadataLookup', 'lookupJob', 'details', 'returnTo']) url.searchParams.delete(key)
  const values = { curation: 1, curationTab: state.tab, inboxFilter: state.filter, inboxDay: state.day, inboxRoot: state.rootId, inboxBefore: state.before, inboxPages: state.pages.join(','), inboxSelected: state.selected.join(','), curationJob: state.job, curationPage: state.job ? state.page : '' }
  for (const [key, value] of Object.entries(values)) if (value !== '' && value !== 0) url.searchParams.set(key, String(value))
  return url
}
export function withoutCuration(href) {
  const url = new URL(href, window.location.origin)
  for (const key of curationKeys) url.searchParams.delete(key)
  return url
}
