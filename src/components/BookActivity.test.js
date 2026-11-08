import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import BookActivity from './BookActivity.vue'
import { curationRequest } from '../curation-api.js'
vi.mock('../curation-api.js', () => ({ curationRequest: vi.fn() }))
enableAutoUnmount(afterEach)
beforeEach(() => { vi.mocked(curationRequest).mockReset() })
const history = { rows: [{ id: 1, kind: 'manual', created_at: 1, changes: { fields: ['title'], before: { title: 'Original title' }, after: { title: 'Corrected title' } } }], next: null }
const notes = { notes: [], capabilities: { text: true, notes: false } }
function component() { return mount(BookActivity, { props: { itemId: 1, requestToken: 'fixture' }, global: { stubs: { LookupReceipts: true } } }) }
async function open(wrapper) { wrapper.get('details').element.open = true; await wrapper.get('details').trigger('toggle'); await flushPromises() }
const createButton = wrapper => wrapper.findAll('button').find(button => button.text() === 'Create reading note')

it('keeps history visible when source access prevents loading notes, and retries', async () => {
  vi.mocked(curationRequest).mockImplementation(path => path.endsWith('/history') ? Promise.resolve(history) : Promise.reject(new Error('Note access unavailable')))
  const wrapper = component(); await open(wrapper)
  expect(wrapper.text()).toContain('Original title → Corrected title')
  expect(wrapper.get('[role=alert]').text()).toContain('Note access unavailable')
  expect(createButton(wrapper).attributes('disabled')).toBeDefined()
  vi.mocked(curationRequest).mockImplementation(path => Promise.resolve(path.endsWith('/history') ? history : notes))
  await wrapper.get('[role=alert] button').trigger('click'); await flushPromises()
  expect(wrapper.find('[role=alert]').exists()).toBe(false)
  expect(createButton(wrapper).attributes('disabled')).toBeUndefined()
})

it('keeps notes usable when history fails without claiming there is no history', async () => {
  vi.mocked(curationRequest).mockImplementation(path => path.endsWith('/notes') ? Promise.resolve(notes) : Promise.reject(new Error('History temporarily unavailable')))
  const wrapper = component(); await open(wrapper)
  expect(createButton(wrapper).attributes('disabled')).toBeUndefined()
  expect(wrapper.text()).not.toContain('No recorded changes yet.')
  expect(wrapper.get('[role=alert]').text()).toContain('History temporarily unavailable')
})

it('ignores stale results and clears capabilities when navigating to another book', async () => {
  const pending = []
  vi.mocked(curationRequest).mockImplementation(() => new Promise(resolve => pending.push(resolve)))
  const wrapper = component(); await open(wrapper)
  const signal = curationRequest.mock.calls[0][3]
  await wrapper.setProps({ itemId: 2 })
  expect(signal.aborted).toBe(true)
  pending[0](history); pending[1](notes); await flushPromises()
  expect(wrapper.text()).not.toContain('Corrected title')
  expect(createButton(wrapper).attributes('disabled')).toBeDefined()
  pending[2]({ rows: [], next: null }); pending[3](notes); await flushPromises()
  expect(wrapper.text()).toContain('No recorded changes yet.')
  expect(createButton(wrapper).attributes('disabled')).toBeUndefined()
})


it('does not refresh a different book when an earlier Undo finishes late', async () => {
  let finishUndo
  const changed = vi.fn()
  vi.mocked(curationRequest).mockImplementation(path => path.endsWith('/undo')
    ? new Promise(resolve => { finishUndo = resolve })
    : Promise.resolve(path.endsWith('/history') ? history : notes))
  const wrapper = mount(BookActivity, { props: { itemId: 1, requestToken: 'fixture', onChanged: changed }, global: { stubs: { LookupReceipts: true } } })
  await open(wrapper)
  await wrapper.findAll('button').find(button => button.text() === 'Undo').trigger('click')
  await wrapper.setProps({ itemId: 2 })
  finishUndo({ undone: true }); await flushPromises()
  expect(changed).not.toHaveBeenCalled()
})
