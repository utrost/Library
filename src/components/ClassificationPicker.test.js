import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import ClassificationPicker from './ClassificationPicker.vue'
import { curationRequest } from '../curation-api.js'
vi.mock('../curation-api.js', () => ({ curationRequest: vi.fn() }))
enableAutoUnmount(afterEach)
beforeEach(() => { vi.useFakeTimers(); vi.mocked(curationRequest).mockReset() })
afterEach(() => vi.useRealTimers())

it('keeps untyped imported values and stages a scheme-qualified value without saving', async () => {
  const update = vi.fn()
  const wrapper = mount(ClassificationPicker, { props: { modelValue: 'Existing untyped value', requestToken: 'fixture-token', 'onUpdate:modelValue': update } })
  await wrapper.get('select').setValue('DDC')
  await wrapper.findAll('input')[0].setValue('823.92')
  await wrapper.findAll('input')[1].setValue('Fiction')
  await wrapper.findAll('input')[0].trigger('keydown', { key: 'Enter' })
  expect(update).toHaveBeenCalledExactlyOnceWith('Existing untyped value\nDDC: 823.92 — Fiction')
  expect(curationRequest).not.toHaveBeenCalled()
})

it('debounces suggestions and rejects a late result after changing schemes', async () => {
  let completeOld
  vi.mocked(curationRequest).mockImplementationOnce(() => new Promise(resolve => { completeOld = resolve })).mockResolvedValue({ values: ['DDC: 823.92'] })
  const wrapper = mount(ClassificationPicker, { props: { requestToken: 'fixture-token' } })
  const notation = wrapper.findAll('input')[0]
  await notation.setValue('8'); await vi.advanceTimersByTimeAsync(300)
  expect(curationRequest).not.toHaveBeenCalled()
  await notation.setValue('82'); await vi.advanceTimersByTimeAsync(250)
  const previousSignal = curationRequest.mock.calls[0][3]
  await wrapper.get('select').setValue('DDC'); await vi.advanceTimersByTimeAsync(250)
  expect(previousSignal.aborted).toBe(true)
  expect(curationRequest.mock.lastCall[2]).toEqual({ scheme: 'DDC', query: '82' })
  completeOld({ values: ['Old untyped suggestion'] }); await flushPromises()
  expect(wrapper.text()).toContain('DDC: 823.92')
  expect(wrapper.text()).not.toContain('Old untyped suggestion')
})

it('shows request errors and prevents edits while disabled', async () => {
  vi.mocked(curationRequest).mockRejectedValue(new Error('Fixture unavailable'))
  const update = vi.fn()
  const wrapper = mount(ClassificationPicker, { props: { modelValue: 'Original', 'onUpdate:modelValue': update } })
  await wrapper.findAll('input')[0].setValue('82'); await vi.advanceTimersByTimeAsync(250)
  expect(wrapper.get('[role=alert]').text()).toBe('Fixture unavailable')
  await wrapper.setProps({ disabled: true })
  expect(wrapper.findAll('button').every(button => button.attributes('disabled') !== undefined)).toBe(true)
  await wrapper.findAll('input')[0].trigger('keydown', { key: 'Enter' })
  expect(update).not.toHaveBeenCalled()
})
