import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import WriteBack from './WriteBack.vue'
vi.mock('../confirm-action.js', () => ({ confirmAction: vi.fn(async () => true) }))
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
const reply = data => ({ ok: true, json: async () => data })
const job = (name = 'Original fixture.epub', status = 'preview') => ({ id: 'fixture-job', name, status, itemId: 1, confirmUntil: Date.now() / 1000 + 300, expiresAt: Date.now() / 1000 + 3600, backupUrl: '/fixture-backup', review: { entry: 'content.opf', before: { title: ['Original'] }, after: { title: ['Changed'] } } })
let fetchMock
beforeEach(() => { fetchMock = vi.fn(); vi.stubGlobal('fetch', fetchMock) })
function component(extra = {}) { return mount(WriteBack, { props: { itemId: 1, revision: 'one', requestToken: 'fixture', ...extra } }) }
async function open(wrapper) { wrapper.get('details').element.open = true; await wrapper.get('details').trigger('toggle'); await flushPromises() }
const button = (wrapper, text) => wrapper.findAll('button').find(node => node.text() === text)

it('disables source changes while the parent editor has unsaved changes', async () => {
  fetchMock.mockResolvedValue(reply({ jobs: [job('Fixture.epub', 'applied')] }))
  const wrapper = component({ disabled: true }); await open(wrapper)
  expect(button(wrapper, 'Preview file changes').attributes('disabled')).toBeDefined()
  expect(button(wrapper, 'Restore original').attributes('disabled')).toBeDefined()
  expect(wrapper.findAll('input').every(input => input.attributes('disabled') !== undefined)).toBe(true)
})

it('shows a useful error when the server returns a non-JSON failure', async () => {
  fetchMock.mockResolvedValue({ ok: false, status: 502, json: async () => { throw new SyntaxError('Unexpected token <') } })
  const wrapper = component(); await open(wrapper)
  expect(wrapper.get('[role=alert]').text()).toContain('Inspect the retained job before retrying')
  expect(wrapper.text()).not.toContain('Unexpected token')
})

it('explains the remote-storage restriction while retaining ordinary metadata editing', async () => {
  fetchMock.mockResolvedValueOnce(reply({ jobs: [] })).mockResolvedValue({ ok: false, status: 422, json: async () => ({ error: 'storage_not_supported' }) })
  const wrapper = component(); await open(wrapper)
  await button(wrapper, 'Preview file changes').trigger('click'); await flushPromises()
  expect(wrapper.get('[role=alert]').text()).toContain('writable local filesystem storage')
  expect(wrapper.get('[role=alert]').text()).toContain('Library metadata edits still work')
  expect(button(wrapper, 'Write to EPUB')).toBeUndefined()
})

it('names the selected EPUB field whose refinements must be preserved', async () => {
  fetchMock.mockResolvedValueOnce(reply({ jobs: [] })).mockResolvedValue({ ok: false, status: 422, json: async () => ({ error: 'complex_metadata', field: 'authors' }) })
  const wrapper = component(); await open(wrapper)
  await button(wrapper, 'Preview file changes').trigger('click'); await flushPromises()
  expect(wrapper.get('[role=alert]').text()).toContain('Authors: A selected field has complex EPUB refinements')
  expect(wrapper.get('[role=alert]').text()).toContain('Deselect that field')
  expect(button(wrapper, 'Write to EPUB')).toBeUndefined()
})

it('ignores a late job refresh after previewing a different book', async () => {
  let finishOld
  fetchMock.mockResolvedValueOnce(reply({ jobs: [] }))
    .mockResolvedValueOnce(reply(job()))
    .mockImplementationOnce(() => new Promise(resolve => { finishOld = resolve }))
    .mockResolvedValue(reply({ jobs: [job('Current fixture.epub', 'restored')] }))
  const wrapper = component(); await open(wrapper)
  await button(wrapper, 'Preview file changes').trigger('click'); await flushPromises()
  await wrapper.setProps({ itemId: 2, revision: 'two' }); await flushPromises()
  finishOld(reply({ jobs: [job('Stale fixture.epub')] })); await flushPromises()
  expect(wrapper.text()).toContain('Current fixture.epub')
  expect(wrapper.text()).not.toContain('Stale fixture.epub')
})

it('does not reload a new book when an earlier source-write refresh finishes', async () => {
  let finishOld
  const changed = vi.fn()
  fetchMock.mockResolvedValueOnce(reply({ jobs: [job('Original fixture.epub', 'applied')] }))
    .mockResolvedValueOnce(reply(job('Original fixture.epub', 'restored')))
    .mockImplementationOnce(() => new Promise(resolve => { finishOld = resolve }))
    .mockResolvedValue(reply({ jobs: [job('Current fixture.epub', 'restored')] }))
  const wrapper = component({ onChanged: changed }); await open(wrapper)
  await button(wrapper, 'Restore original').trigger('click'); await flushPromises()
  await wrapper.setProps({ itemId: 2, revision: 'two' }); await flushPromises()
  finishOld(reply({ jobs: [job('Stale fixture.epub', 'restored')] })); await flushPromises()
  expect(changed).not.toHaveBeenCalled()
  expect(wrapper.text()).toContain('Current fixture.epub')
  expect(wrapper.text()).not.toContain('Stale fixture.epub')
})
