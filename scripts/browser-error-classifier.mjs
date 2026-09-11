const PERSONAL_ICON_PATH = '/apps/settings/img/personal.svg'
const LIBRARY_MARKERS = ['/custom_apps/library/', '[library]', 'library-main.mjs']
const FATAL_RUNTIME_PATTERN = /content security policy|\bcsp\b|module script|failed to fetch dynamically imported module/i

export function isConsoleError(event) {
  return event?.method === 'Runtime.exceptionThrown'
    || (event?.method === 'Log.entryAdded' && ['error', 'warning'].includes(event.params?.entry?.level))
    || (event?.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(event.params?.type))
}

export function classifyBrowserEvent(event) {
  if (!isConsoleError(event)) return { fatal: false, reason: 'not-console-error' }
  if (event.method === 'Runtime.exceptionThrown') return { fatal: true, reason: 'runtime-exception' }
  const text = JSON.stringify(event)
  const libraryOwned = LIBRARY_MARKERS.some((marker) => text.includes(marker))
  const personalIcon = text.includes(PERSONAL_ICON_PATH)
  if (libraryOwned || FATAL_RUNTIME_PATTERN.test(text) || personalIcon) {
    return { fatal: true, reason: libraryOwned ? 'library-owned' : 'runtime-or-unverified-resource' }
  }
  return { fatal: false, reason: 'unrelated-shell-event' }
}
