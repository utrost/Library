export const focusExitSentinelSelector = '[data-library-test-focus-exit-sentinel="true"]'

export function installFocusExitSentinel(root) {
  if (!root?.ownerDocument || !root.isConnected) throw new Error('invalid_focus_exit_sentinel_root')
  const sentinel = root.ownerDocument.createElement('span')
  sentinel.tabIndex = 0
  sentinel.dataset.libraryTestFocusExitSentinel = 'true'
  sentinel.style.cssText = 'position:fixed;inset:0 auto auto 0;width:1px;height:1px;margin:0;padding:0;border:0;overflow:hidden;pointer-events:none;'
  root.after(sentinel)
  return sentinel
}

export function removeFocusExitSentinel(sentinel) {
  if (sentinel?.matches?.('[data-library-test-focus-exit-sentinel="true"]')) sentinel.remove()
}
