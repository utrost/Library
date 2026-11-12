import { afterEach, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import PathInference from './PathInference.vue'
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
afterEach(() => { vi.unstubAllGlobals(); window.history.replaceState({}, '', '/') })
const sample = { roots: [{ id: 7, label: 'Incoming', path: '/Incoming' }], scope: '/Incoming', folders: [], items: [{ id: 1, path: 'Title.epub', revision: 'before', current: {} }], page: 1, hasNext: true }
const response = data => ({ ok: true, json: async () => data })
async function setup() {
  window.history.replaceState({}, '', '/?infer=1&rootId=7')
  let finish
  vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce(response(sample)).mockImplementation(() => new Promise(resolve => { finish = resolve })))
  const wrapper = mount(PathInference, { global: { stubs: { InferenceWorklist: true, InferenceAnalysis: true, InferencePatterns: true, InferenceSuggestions: true, InferencePart: true, InferenceRuleTrace: true } } })
  await flushPromises()
  return { wrapper, finish: data => finish(data) }
}
it('keeps the same worklist mounted and disabled while refreshing after Apply', async () => {
  const { wrapper, finish } = await setup()
  const worklist = wrapper.findComponent({ name: 'InferenceWorklist' }), instance = worklist.vm.$.uid
  worklist.vm.$emit('changed', 'applied'); await flushPromises()
  expect(wrapper.findComponent({ name: 'InferenceWorklist' }).vm.$.uid).toBe(instance)
  expect(worklist.props('disabled')).toBe(true)
  finish(response({ ...sample, items: [{ ...sample.items[0], revision: 'after', current: { title: 'Title' } }] })); await flushPromises()
  expect(wrapper.findComponent({ name: 'InferenceWorklist' }).vm.$.uid).toBe(instance)
  expect(worklist.props('disabled')).toBe(false)
  expect(worklist.props('items')[0].revision).toBe('after')
})
it('removes stale rows when refreshing after Apply fails', async () => {
  const { wrapper, finish } = await setup()
  wrapper.findComponent({ name: 'InferenceWorklist' }).vm.$emit('changed', 'applied'); await flushPromises()
  finish({ ok: false }); await flushPromises()
  expect(wrapper.findComponent({ name: 'InferenceWorklist' }).exists()).toBe(false)
  expect(wrapper.text()).toContain('Could not load this folder')
})
it('resets the worklist when navigating to another sample page', async () => {
  const { wrapper, finish } = await setup()
  await wrapper.findAll('button').find(button => button.text() === 'Next page').trigger('click')
  expect(wrapper.findComponent({ name: 'InferenceWorklist' }).exists()).toBe(false)
  finish(response({ ...sample, page: 2 })); await flushPromises()
  expect(wrapper.findComponent({ name: 'InferenceWorklist' }).exists()).toBe(true)
})
