import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import CurationWorkbench from './CurationWorkbench.vue'
const { request } = vi.hoisted(() => ({ request: vi.fn() }))
vi.mock('./CurationArchives.vue', () => ({ default: { template: '<div />' } }))
vi.mock('./CurationEntityPicker.vue', () => ({ default: { template: '<div />' } }))
vi.mock('../curation-api.js', () => ({ curationRequest: request }))
vi.mock('../confirm-action.js', () => ({ confirmAction: vi.fn(async () => true) }))
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
vi.mock('@nextcloud/l10n', () => ({ t: (_app, text, values = {}) => text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? key), n: (_app, one, many, count) => (count === 1 ? one : many).replace('%n', count) }))
enableAutoUnmount(afterEach)
const row = id => ({ id, title: `Book ${id}`, creators: 'Fixture', missing: [], state: 'pending', revision: 'fixture', batchDay: '2026-11-09', rootId: 7, rootPath: '/Incoming' })
const page = (rows, next = null) => ({ rows, next, scanned: 50, roots: [{ id: 7, label: 'Incoming', path: '/Incoming' }] })
const create = () => mount(CurationWorkbench, { props: { requestToken: 'fixture' }, global: { stubs: { CurationArchives: true, CurationEntityPicker: true } } })
const button = (w, name) => w.findAll('button').find(b => b.text() === name)
beforeEach(() => { window.history.replaceState({}, '', '/apps/library/?curation=1'); request.mockReset().mockResolvedValue(page([row(90)], 50)) })

it('retains shelf, filter, cursor history and checked books through reload and a details link', async () => {
  window.history.replaceState({}, '', '/apps/library/?curation=1&inboxRoot=7&inboxFilter=all&inboxBefore=100&inboxPages=0,200&inboxSelected=90')
  const w = create(); await flushPromises()
  expect(request.mock.calls[0][2]).toMatchObject({ rootId: 7, filter: 'all', before: 100 })
  expect(w.get('input[type=checkbox]').element.checked).toBe(true)
  const details = new URL(w.findAll('a').find(a => a.text() === 'Book 90').attributes('href'), window.location.origin)
  expect(details.searchParams.get('returnTo')).toContain('inboxPages=0%2C200')
  expect(details.searchParams.get('returnTo')).toContain('inboxSelected=90')
  await button(w, 'Previous').trigger('click'); await flushPromises()
  expect(request.mock.lastCall[2].before).toBe(200)
  expect(new URLSearchParams(window.location.search).get('inboxBefore')).toBe('200')
})

it('skips empty filtered windows and keeps the batch scoped', async () => {
  request.mockResolvedValueOnce(page([], 100)).mockResolvedValueOnce(page([], 50)).mockResolvedValueOnce(page([row(10)]))
  const w = create(); await flushPromises()
  expect(request.mock.calls.map(c => c[2].before)).toEqual([0, 100, 50])
  expect(w.text()).toContain('Book 10')
  expect(w.text()).not.toContain('No more books')
})

it('bounds traversal and offers continuation instead of claiming the queue is empty', async () => {
  for (const cursor of [400, 300, 200, 100]) request.mockResolvedValueOnce(page([], cursor))
  const w = create(); await flushPromises()
  expect(request).toHaveBeenCalledTimes(4)
  expect(w.text()).toContain('No matches among the 200 books checked')
  await button(w, 'Continue to older books').trigger('click'); await flushPromises()
  expect(request.mock.lastCall[2].before).toBe(100)
})

it('does not lose pagination or checked rows on a failed next-page request', async () => {
  const w = create(); await flushPromises()
  await w.get('input[type=checkbox]').setValue(true)
  request.mockRejectedValueOnce(new Error('Fixture failure'))
  await button(w, 'Next').trigger('click'); await flushPromises()
  expect(w.get('[role=alert]').text()).toContain('Fixture failure')
  expect(w.get('input[type=checkbox]').element.checked).toBe(true)
  expect(button(w, 'Previous').element.disabled).toBe(true)
  expect(new URLSearchParams(window.location.search).get('inboxBefore')).toBe(null)
})

it('preserves selected books when leaving for jobs and records the active job for reload', async () => {
  const w = create(); await flushPromises(); await w.get('input[type=checkbox]').setValue(true)
  request.mockResolvedValueOnce({ jobs: [] })
  await button(w, 'Organise selected books').trigger('click'); await flushPromises()
  expect(w.text()).toContain('1 book selected')
  expect(new URLSearchParams(window.location.search).get('curationTab')).toBe('jobs')
  expect(new URLSearchParams(window.location.search).get('inboxSelected')).toBe('90')
})

it('filters shelves independently of date and links path extraction back to the queue', async () => {
  const w = create(); await flushPromises()
  await w.get('select[aria-label=Shelf]').setValue('7'); await flushPromises()
  expect(request.mock.lastCall[2]).toMatchObject({ rootId: 7, day: '', before: 0 })
  const link = w.findAll('a').find(a => a.text() === 'Extract metadata from this shelf')
  const target = new URL(link.attributes('href'))
  expect(target.searchParams.get('rootId')).toBe('7')
  expect(target.searchParams.get('returnTo')).toContain('inboxRoot=7')
})

it('saves Done without leaving the queue and retains another checked book', async () => {
  request.mockResolvedValueOnce(page([row(90), row(80)]))
  const w = create(); await flushPromises(); await w.findAll('input[type=checkbox]')[1].setValue(true)
  request.mockResolvedValueOnce({ saved: true })
  await button(w, 'Done').trigger('click'); await flushPromises()
  expect(w.text()).not.toContain('Book 90')
  expect(w.text()).toContain('Review state saved.')
  expect(w.get('input[type=checkbox]').element.checked).toBe(true)
  expect(window.location.search).toContain('curation=1')
})
