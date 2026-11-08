import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import CurationArchives from './CurationArchives.vue'
const { request } = vi.hoisted(() => ({ request: vi.fn() }))
vi.mock('../curation-api.js', () => ({ curationRequest: request }))
vi.mock('../confirm-action.js', () => ({ confirmAction: vi.fn(async () => true) }))
enableAutoUnmount(afterEach)
const job = status => ({ id: 'fixture-job', mode: 'restore', status, counts: [], rows: [], page: 1, hasNext: false, expiresAt: Date.now() / 1000 + 3600 })
beforeEach(() => request.mockReset().mockResolvedValue({ jobs: [] }))
async function upload(wrapper, bytes) {
  const input = wrapper.findAll('input[type=file]')[0]
  Object.defineProperty(input.element, 'files', { configurable: true, value: [{ size: bytes.length, stream: () => new ReadableStream({ start(controller) { controller.enqueue(bytes); controller.close() } }) }] })
  await input.trigger('change'); await flushPromises()
}
const encode = value => new TextEncoder().encode(value)

it('accepts an empty archive as a no-op without uploading records', async () => {
  request.mockResolvedValueOnce({ jobs: [] }).mockResolvedValueOnce(job('uploading')).mockResolvedValueOnce(job('complete'))
  const wrapper = mount(CurationArchives, { props: { requestToken: 'fixture' } }); await flushPromises()
  await upload(wrapper, encode('{"format":"library-curation","version":2,"records":0}\n'))
  expect(wrapper.text()).toContain('This archive contains no records to restore. Nothing was changed.')
  expect(request.mock.calls.map(call => call[0])).toEqual(['/archives', '/archives/create', '/archives/fixture-job/control'])
  expect(request.mock.calls[2][2]).toEqual({ action: 'finish', count: 0 })
})

it('retains an incomplete upload for resume and never finishes it', async () => {
  request.mockResolvedValueOnce({ jobs: [] }).mockResolvedValueOnce(job('uploading')).mockResolvedValueOnce(job('uploading'))
  const wrapper = mount(CurationArchives, { props: { requestToken: 'fixture' } }); await flushPromises()
  await upload(wrapper, encode('{"format":"library-curation","version":2,"records":2}\n{"kind":"genre","key":"1","data":{"display_name":"Fixture"}}\n'))
  expect(wrapper.get('[role=alert]').text()).toContain('The archive is incomplete. Nothing has been restored.')
  expect(wrapper.text()).toContain('Resume upload with the same archive')
  expect(request.mock.calls.some(call => call[0].endsWith('/control'))).toBe(false)
})

it('rejects malformed UTF-8 without uploading or approving partial data', async () => {
  request.mockResolvedValueOnce({ jobs: [] }).mockResolvedValueOnce(job('uploading'))
  const wrapper = mount(CurationArchives, { props: { requestToken: 'fixture' } }); await flushPromises()
  await upload(wrapper, new Uint8Array([0xff, 0xfe]))
  expect(wrapper.find('[role=alert]').exists()).toBe(true)
  expect(request.mock.calls.map(call => call[0])).toEqual(['/archives', '/archives/create'])
})

it('aborts an in-flight archive request when leaving the workbench', async () => {
  let finish
  request.mockImplementationOnce(() => new Promise(resolve => { finish = resolve }))
  const wrapper = mount(CurationArchives, { props: { requestToken: 'fixture' } }); await flushPromises()
  const signal = request.mock.calls[0][3]
  wrapper.unmount(); expect(signal.aborted).toBe(true)
  finish({ jobs: [{ id: 'stale', mode: 'restore', status: 'complete', created_at: 1 }] }); await flushPromises()
  expect(request).toHaveBeenCalledTimes(1)
})

it('explains a background size limit without promising that Resume will fix it', async () => {
  request.mockResolvedValueOnce({ jobs: [] }).mockResolvedValueOnce({ ...job('paused'), mode: 'export', error: 'archive_size_limit' })
  const wrapper = mount(CurationArchives, { props: { requestToken: 'fixture' } }); await flushPromises()
  await wrapper.findAll('button').find(button => button.text() === 'Prepare curation archive').trigger('click'); await flushPromises()
  expect(wrapper.get('[role=alert]').text()).toContain('Retrying will not raise the limit')
  expect(wrapper.get('[role=alert]').text()).not.toContain('Resume to retry')
})

it('explains unfinished indexing before offering a restore retry', async () => {
  request.mockResolvedValueOnce({ jobs: [] }).mockResolvedValueOnce({ ...job('paused'), error: 'catalogue_indexing' })
  const wrapper = mount(CurationArchives, { props: { requestToken: 'fixture' } }); await flushPromises()
  await wrapper.findAll('button').find(button => button.text() === 'Prepare curation archive').trigger('click'); await flushPromises()
  expect(wrapper.get('[role=alert]').text()).toContain('Let background indexing finish')
  expect(wrapper.get('[role=alert]').text()).toContain('Completed archive records are retained')
})
