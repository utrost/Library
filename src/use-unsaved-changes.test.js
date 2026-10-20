import { afterEach, expect, it, vi } from 'vitest'
import { mount, enableAutoUnmount } from '@vue/test-utils'
import { ref } from 'vue'
import { useUnsavedChanges } from './use-unsaved-changes.js'
enableAutoUnmount(afterEach)
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals() })

it('guards dirty navigation and browser unload, but not clean forms or new tabs', async () => {
  const dirty = ref(false)
  const confirm = vi.fn(() => false)
  vi.stubGlobal('confirm', confirm)
  const w = mount({ setup() { useUnsavedChanges(dirty) }, template: '<div><a href="/elsewhere">Back</a><a href="/elsewhere" target="_blank">New tab</a></div>' }, { attachTo: document.body })
  const unload = () => { const e = new Event('beforeunload', { cancelable: true }); window.dispatchEvent(e); return e.defaultPrevented }
  expect(unload()).toBe(false)
  dirty.value = true
  expect(unload()).toBe(true)
  const event = new MouseEvent('click', { bubbles: true, cancelable: true })
  w.get('a').element.dispatchEvent(event)
  expect(event.defaultPrevented).toBe(true)
  expect(confirm).toHaveBeenCalledOnce()
  w.get('a[target]').element.addEventListener('click', event => event.preventDefault())
  await w.get('a[target]').trigger('click')
  expect(confirm).toHaveBeenCalledOnce()
  dirty.value = false
  expect(unload()).toBe(false)
})
