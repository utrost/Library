import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import EntityPicker from './EntityPicker.vue'
enableAutoUnmount(afterEach)
beforeEach(() => vi.useFakeTimers())
afterEach(() => vi.useRealTimers())

it('waits for three letters, selects by keyboard and does not create while loading', async () => {
  const search = vi.fn().mockResolvedValue([{ id: 3, label: 'Example series' }]), onChoose = vi.fn()
  const w = mount(EntityPicker, { props: { label: 'Series', search, allowCreate: true, onChoose } })
  await w.setProps({ modelValue: '123' }); await vi.advanceTimersByTimeAsync(300)
  expect(search).not.toHaveBeenCalled()
  await w.setProps({ modelValue: 'Ex' }); await vi.advanceTimersByTimeAsync(300)
  expect(search).not.toHaveBeenCalled()
  await w.setProps({ modelValue: 'Exa' })
  expect(w.text()).toContain('Searching')
  expect(w.findAll('button')).toHaveLength(0)
  await vi.advanceTimersByTimeAsync(250); await flushPromises()
  await w.get('input').trigger('focus')
  expect(w.findAll('[role=option]')).toHaveLength(1)
  await w.get('input').trigger('keydown', { key: 'ArrowDown' })
  await w.get('input').trigger('keydown', { key: 'Enter' })
  expect(onChoose).toHaveBeenCalledWith({ id: 3, label: 'Example series' })
})

it('distinguishes lookup errors from an empty result and retries', async () => {
  const search = vi.fn().mockRejectedValueOnce(new Error()).mockResolvedValue([])
  const w = mount(EntityPicker, { props: { label: 'Series', search, allowCreate: true } })
  await w.setProps({ modelValue: 'Example' }); await vi.advanceTimersByTimeAsync(250)
  expect(w.get('[role=alert]').text()).toContain('Could not load')
  expect(w.text()).not.toContain('No matches')
  await w.get('button').trigger('click'); await vi.advanceTimersByTimeAsync(250)
  expect(w.text()).toContain('No matches')
  expect(w.get('button').text()).toContain('Create')
})

it('ignores a late response for an earlier query', async () => {
  let resolve
  const search = vi.fn().mockImplementationOnce(() => new Promise(done => { resolve = done })).mockResolvedValue([{ id: 2, label: 'New result' }])
  const w = mount(EntityPicker, { props: { label: 'Series', search } })
  await w.setProps({ modelValue: 'Old' }); await vi.advanceTimersByTimeAsync(250)
  await w.setProps({ modelValue: 'New' }); await vi.advanceTimersByTimeAsync(250)
  resolve([{ id: 1, label: 'Old result' }]); await flushPromises()
  await w.get('input').trigger('focus')
  expect(w.text()).toContain('New result')
  expect(w.text()).not.toContain('Old result')
})
