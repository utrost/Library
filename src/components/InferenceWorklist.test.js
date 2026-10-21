import { afterEach, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import InferenceWorklist from './InferenceWorklist.vue'
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
const items = [
  { id: 1, path: 'Title by Ada Quill.epub', revision: 'a', current: {} },
  { id: 2, path: 'Second - Bob Smith (2020).epub', revision: 'b', current: {} },
]
const props = { items, labels: { title: 'Title', author: 'Author', year: 'Year' }, statuses: { ready: 'Ready', conflict: 'Review', unmatched: 'Unmatched', ambiguous: 'Ambiguous', invalid: 'Invalid', unchanged: 'Unchanged' }, rootId: '7', folder: '', requestToken: 'csrf' }
function mounted() {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ patterns: [], hidden: [], batches: [] }) }))
  return mount(InferenceWorklist, { props, global: { stubs: { InferenceApply: true } } })
}
it('keeps independent pattern selections and field approvals in one mixed review', async () => {
  const wrapper = mounted(); await flushPromises()
  const selects = wrapper.findAll('.library-inference-worklist-row select')
  expect(selects.map(select => select.element.value)).toEqual(['preset-by', 'preset-title-author-year'])
  await wrapper.findAll('.library-inference-worklist-row')[0].find('input[type=checkbox]').setValue(true)
  await wrapper.findAll('.library-inference-worklist-row')[1].find('input[type=checkbox]').setValue(true)
  const apply = wrapper.findComponent({ name: 'InferenceApply' })
  expect(apply.props('results').map(result => result.status)).toEqual(['ready', 'ready'])
  expect(apply.props('results').map(result => result.changes.length)).toEqual([2, 3])
  expect(apply.props('externalSelection')).toHaveLength(2)
  const context = JSON.parse(apply.props('context'))
  expect(context.mode).toBe('mixed')
  expect(context.assignments).toEqual({ 1: 'preset-by', 2: 'preset-title-author-year' })
  expect(Object.keys(context.definitions)).toEqual(['preset-by', 'preset-title-author-year'])
  await selects[1].setValue('preset-title')
  expect(apply.props('externalSelection')).toEqual(['1:title'])
})
it('bulk assignment returns only full matches and selects empty fields for review', async () => {
  const wrapper = mounted(); await flushPromises()
  await wrapper.find('.library-inference-worklist-toolbar select').setValue('preset-by')
  expect(wrapper.find('.library-inference-worklist-toolbar button').text()).toContain('(1)')
  await wrapper.find('.library-inference-worklist-toolbar button').trigger('click'); await flushPromises()
  expect(wrapper.findAll('.library-inference-worklist-row')).toHaveLength(1)
  expect(wrapper.findComponent({ name: 'InferenceApply' }).props('externalSelection')).toEqual(['1:title', '1:author'])
})
it('bulk assignment preserves earlier file-specific pattern choices', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ patterns: [], hidden: [], batches: [] }) }))
  const wrapper = mount(InferenceWorklist, { props: { ...props, items: [items[0], { ...items[0], id: 3, path: 'Other by Bob Smith.epub' }] }, global: { stubs: { InferenceApply: true } } })
  await flushPromises()
  await wrapper.findAll('.library-inference-worklist-row select')[0].setValue('preset-title')
  await wrapper.find('.library-inference-worklist-toolbar select').setValue('preset-by')
  expect(wrapper.find('.library-inference-worklist-toolbar button').text()).toContain('(1)')
  await wrapper.find('.library-inference-worklist-toolbar button').trigger('click'); await flushPromises()
  expect(wrapper.findAll('.library-inference-worklist-row')).toHaveLength(1)
  expect(wrapper.findAll('.library-inference-worklist-row select')[0].element.value).toBe('preset-by')
  await wrapper.find('.library-inference-worklist-toolbar select').setValue('')
  await wrapper.findAll('.library-inference-worklist-toolbar select')[1].setValue('all')
  expect(wrapper.findAll('.library-inference-worklist-row select')[0].element.value).toBe('preset-title')
})
