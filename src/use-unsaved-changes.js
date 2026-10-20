import { onMounted, onBeforeUnmount, toValue } from 'vue'
import { t } from '@nextcloud/l10n'

/** Protect drafts without changing save semantics or blocking links in new tabs. */
export function useUnsavedChanges(dirty) {
  let leaving = false, timer
  function beforeUnload(event) {
    if (!toValue(dirty) || leaving) return
    event.preventDefault()
    event.returnValue = ''
  }
  function followLink(event) {
    const link = event.target.closest?.('a[href]')
    if (!toValue(dirty) || !link || event.defaultPrevented || event.button !== 0
      || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey
      || link.target === '_blank' || link.hasAttribute('download')) return
    const url = new URL(link.href, location.href)
    if (url.pathname === location.pathname && url.search === location.search && url.hash) return
    if (!window.confirm(t('library', 'Discard unsaved changes and leave this page?'))) {
      event.preventDefault()
      event.stopImmediatePropagation()
    } else {
      leaving = true
      timer = setTimeout(() => { leaving = false }, 1000)
    }
  }
  onMounted(() => {
    window.addEventListener('beforeunload', beforeUnload)
    document.addEventListener('click', followLink, true)
  })
  onBeforeUnmount(() => {
    clearTimeout(timer)
    window.removeEventListener('beforeunload', beforeUnload)
    document.removeEventListener('click', followLink, true)
  })
}
