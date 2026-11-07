import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import LookupCover from './LookupCover.vue'
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
it('fetches a private preview only on request and never selects it automatically', async () => {
  vi.stubGlobal('URL', { createObjectURL: vi.fn(() => 'blob:fixture'), revokeObjectURL: vi.fn() })
  const version = vi.fn(), select = vi.fn()
  const fetch = vi.fn().mockResolvedValueOnce({ ok: true, json: async () => ({ rows: [{ reviewVersion: 2 }] }) }).mockResolvedValueOnce({ ok: true, blob: async () => new Blob(['image']) })
  vi.stubGlobal('fetch', fetch)
  const wrapper = mount(LookupCover, { attachTo: document.body, props: { jobId: 'a'.repeat(32), itemId: 1, reviewVersion: 1, requestToken: 'fixture', onVersion: version, onSelect: select } })
  expect(fetch).not.toHaveBeenCalled()
  await wrapper.get('button').trigger('click'); await flushPromises()
  expect(version).toHaveBeenCalledOnce(); expect(select).not.toHaveBeenCalled()
  expect(fetch.mock.calls[0][0]).toContain('/cover-preview')
  expect(fetch.mock.calls[0][1].headers.requesttoken).toBe('fixture')
  expect(wrapper.findAll('img')[1].attributes('src')).toBe('blob:fixture')
  await wrapper.get('input[type=checkbox]').setValue(true)
  expect(select).toHaveBeenCalledExactlyOnceWith(true)
})
it('does not offer selection after an image failure', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, json: async () => ({ error: 'cover_unavailable' }) }))
  const wrapper = mount(LookupCover, { props: { jobId: 'b'.repeat(32), itemId: 1, reviewVersion: 1 } })
  await wrapper.get('button').trigger('click'); await flushPromises()
  expect(wrapper.get('[role=alert]').text()).toContain('unavailable')
  expect(wrapper.find('input[type=checkbox]').exists()).toBe(false)
})
