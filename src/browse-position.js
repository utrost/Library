import { onMounted, onBeforeUnmount } from 'vue'
const key = 'library-browse-positions'
const maxAge = 30 * 60 * 1000
function records() {
  try {
    const value = JSON.parse(sessionStorage.getItem(key) || '[]')
    return new Map(Array.isArray(value) ? value.filter(row => Array.isArray(row) && row.length === 2 && typeof row[0] === 'string' && row[1] && typeof row[1] === 'object') : [])
  } catch { return new Map() }
}
function write(value) { try { sessionStorage.setItem(key, JSON.stringify([...value])) } catch { /* Storage is optional. */ } }
function locationKey() { return location.pathname + location.search + location.hash }
function itemId(link) {
  try { const u = new URL(link.href, location.href); return u.origin === location.origin && u.pathname === location.pathname ? u.searchParams.get('details') : null } catch { return null }
}
/** Preserve list position without putting private titles or scroll coordinates in URLs. */
export function useBrowsePosition() {
  let observer, timer, frame
  function remember(event) {
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = event.target.closest?.('a[href]')
    if (!link || link.target === '_blank') return
    const id = itemId(link), root = document.getElementById('app-content-vue')
    if (!id || !root || new URLSearchParams(location.search).has('details')) return
    const entries = new Map([...records()].filter(([, v]) => Date.now() - v.time < maxAge).slice(-19))
    entries.set(locationKey(), { id, top: root.scrollTop, offset: link.getBoundingClientRect().top, time: Date.now() })
    write(entries)
  }
  function stop() { observer?.disconnect(); clearTimeout(timer); cancelAnimationFrame(frame) }
  function restore() {
    const entries = records(), saved = entries.get(locationKey())
    if (!saved || Date.now() - saved.time > maxAge || new URLSearchParams(location.search).has('details')) return
    const root = document.getElementById('app-content-vue')
    if (!root) return
    function attempt(final = false) {
      const link = [...root.querySelectorAll('a[href]')].find(a => itemId(a) === saved.id && a.getClientRects().length)
      if (!link && !final) return
      stop()
      frame = requestAnimationFrame(() => {
        root.scrollTop = link ? root.scrollTop + link.getBoundingClientRect().top - saved.offset : saved.top
        link?.focus({ preventScroll: true })
        entries.delete(locationKey()); write(entries)
      })
    }
    observer = new MutationObserver(() => attempt())
    observer.observe(root, { childList: true, subtree: true })
    timer = setTimeout(() => attempt(true), 10000)
    attempt()
  }
  onMounted(() => { document.addEventListener('click', remember, true); restore() })
  onBeforeUnmount(() => { document.removeEventListener('click', remember, true); stop() })
}
