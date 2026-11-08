import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, enableAutoUnmount } from '@vue/test-utils'
import CurationEntityPicker from './CurationEntityPicker.vue'
import EntityPicker from './EntityPicker.vue'
enableAutoUnmount(afterEach)
beforeEach(() => { vi.useFakeTimers(); vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ genres: [{ id: 12, display_name: 'Mystery' }] }) })) })
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals() })

it('uses the shared three-letter keyboard picker and preserves selected order', async () => {
  const change = vi.fn()
  const wrapper = mount(CurationEntityPicker, { props: { kind: 'genres', modelValue: [{ id: 7, name: 'Fiction' }], 'onUpdate:modelValue': change } })
  await wrapper.get('input').setValue('My'); await vi.advanceTimersByTimeAsync(300)
  expect(fetch).not.toHaveBeenCalled()
  await wrapper.get('input').setValue('Mys'); await vi.advanceTimersByTimeAsync(250)
  await wrapper.get('input').trigger('keydown', { key: 'Enter' })
  expect(change).toHaveBeenCalledExactlyOnceWith([{ id: 7, name: 'Fiction' }, { id: 12, name: 'Mystery' }])
})

it('replaces a single parent and rejects duplicate multiple selections', async () => {
  const change = vi.fn()
  const wrapper = mount(CurationEntityPicker, { props: { kind: 'genres', single: true, modelValue: [{ id: 7, name: 'Fiction' }], 'onUpdate:modelValue': change } })
  wrapper.getComponent(EntityPicker).vm.$emit('choose', { id: 12, label: 'Mystery' })
  expect(change).toHaveBeenLastCalledWith([{ id: 12, name: 'Mystery' }])
  change.mockClear(); await wrapper.setProps({ single: false })
  wrapper.getComponent(EntityPicker).vm.$emit('choose', { id: 7, label: 'Fiction' })
  expect(change).not.toHaveBeenCalled()
})
