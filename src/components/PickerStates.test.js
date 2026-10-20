import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, enableAutoUnmount } from '@vue/test-utils'
import GenrePicker from './GenrePicker.vue'
import MetadataValuePicker from './MetadataValuePicker.vue'
import DuplicateSuggestionSettings from './DuplicateSuggestionSettings.vue'
enableAutoUnmount(afterEach)
beforeEach(() => vi.useFakeTimers())
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals() })
const response = data => ({ ok: true, json: async () => data })

it('does not offer genre creation while loading or when a match is already assigned', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response({ genres: [{ id: 5, display_name: 'Fantasy' }] })))
  const wrapper = mount(GenrePicker, { props: { itemId: 1, requestToken: 'fixture', catalogueUrl: '/apps/library/', genres: [{ id: 5, name: 'Fantasy' }], draftMode: true } })
  await wrapper.get('input').setValue('Fan')
  expect(wrapper.text()).toContain('Searching')
  expect(wrapper.text()).not.toContain('Create and add genre')
  await vi.advanceTimersByTimeAsync(250)
  expect(wrapper.text()).not.toContain('Create and add genre')
})

it('subject Enter cannot bypass a failed suggestion lookup', async () => {
  vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Offline')))
  const changed = vi.fn()
  const wrapper = mount(MetadataValuePicker, { props: { kind: 'subject', 'onUpdate:modelValue': changed } })
  await wrapper.get('input').setValue('History')
  await vi.advanceTimersByTimeAsync(250)
  expect(wrapper.get('[role=alert]').text()).toContain('Retry')
  await wrapper.get('input').trigger('keydown', { key: 'Enter' })
  expect(changed).not.toHaveBeenCalled()
})

it('duplicate index polling preserves an unsaved preference and Save submits explicitly', async () => {
  const fetch = vi.fn().mockImplementation(async (_url, options) => response(options.method === 'POST' ? { enabled: false, status: 'disabled' } : { enabled: true, status: 'building', processed: 1, total: 100 }))
  vi.stubGlobal('fetch', fetch)
  const wrapper = mount(DuplicateSuggestionSettings, { props: { requestToken: 'fixture' } })
  await vi.advanceTimersByTimeAsync(1)
  await wrapper.get('input').setValue(false)
  await vi.advanceTimersByTimeAsync(5100)
  expect(wrapper.get('input').element.checked).toBe(false)
  expect(fetch.mock.calls.every(([, options]) => options.method !== 'POST')).toBe(true)
  const save = wrapper.findAll('button').find(button => button.text() === 'Save')
  await save.trigger('click'); await vi.advanceTimersByTimeAsync(1)
  expect(fetch.mock.calls.filter(([, options]) => options.method === 'POST')).toHaveLength(1)
  expect(wrapper.text()).toContain('Settings saved.')
})
