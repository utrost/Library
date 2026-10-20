import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import DeleteBook from './DeleteBook.vue'
enableAutoUnmount(afterEach)
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function () { this.open = true }
  HTMLDialogElement.prototype.close = function () { this.open = false }
})
afterEach(() => vi.unstubAllGlobals())
const plan = { file: '/Shelf/Book.pdf', opf: '/Shelf/metadata.opf', keepOpf: '', parent: '/Shelf', token: 'confirmed-file-token' }
const response = data => ({ ok: true, json: async () => data })
const deleted = vi.fn()
function setup() { deleted.mockClear(); return mount(DeleteBook, { props: { url: '/items/1/deletion', requestToken: 'csrf', onDeleted: deleted } }) }
it('only previews on opening and preserves edits on Cancel', async () => {
  const fetch = vi.fn().mockResolvedValue(response(plan)); vi.stubGlobal('fetch', fetch)
  const w = setup(); await w.get('.library-delete-trigger').trigger('click'); await flushPromises()
  expect(w.get('dialog').element.open).toBe(true); expect(w.get('ul').text()).toContain('metadata.opf')
  await w.findAll('button').find(b => b.text() === 'Cancel').trigger('click')
  expect(fetch).toHaveBeenCalledTimes(1); expect(w.emitted('deleted')).toBeUndefined()
})
it('keeps shared OPF out of the deletion list and posts only the token', async () => {
  const fetch = vi.fn().mockResolvedValueOnce(response({ ...plan, keepOpf: 'shared' })).mockResolvedValueOnce(response({ deleted: true, warnings: ['folder_retained'] })); vi.stubGlobal('fetch', fetch)
  const w = setup(); await w.get('.library-delete-trigger').trigger('click'); await flushPromises()
  expect(w.get('ul').text()).not.toContain('metadata.opf'); expect(w.text()).toContain('shared with another')
  await w.get('dialog .primary').trigger('click'); await flushPromises(); await flushPromises()
  expect(fetch.mock.calls[1][1].body.get('token')).toBe(plan.token)
  expect(fetch.mock.calls[1][1].body.get('requesttoken')).toBe('csrf')
  expect(w.find('[role=alert]').exists() ? w.get('[role=alert]').text() : '').toBe('')
  expect(deleted).toHaveBeenCalledWith({ deleted: true, warnings: ['folder_retained'] })
})
it('requires a fresh confirmation after stale targets or failed deletion', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce(response(plan)).mockResolvedValueOnce({ ok: false, status: 409 }))
  const w = setup(); await w.get('.library-delete-trigger').trigger('click'); await flushPromises()
  await w.get('dialog .primary').trigger('click'); await flushPromises(); await flushPromises()
  expect(w.get('[role=alert]').text()).toContain('refresh the book'); expect(w.find('dialog .primary').exists()).toBe(false)
  expect(w.emitted('deleted')).toBeUndefined()
})
it('does not offer confirmation when preview is denied', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 403 }))
  const w = setup(); await w.get('.library-delete-trigger').trigger('click'); await flushPromises()
  expect(w.get('[role=alert]').text()).toContain('permissions'); expect(w.find('dialog .primary').exists()).toBe(false)
})
