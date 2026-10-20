import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import DirectoryBrowser from './DirectoryBrowser.vue'
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
beforeEach(() => { vi.useFakeTimers(); window.history.replaceState({}, '', '/apps/library/?genres=1') })
afterEach(() => { vi.useRealTimers(); window.history.replaceState({}, '', '/') })
it.each([['genre', 'genres'], ['series', 'series']])('shares paging, sorting and preview links for %s', async (kind, collection) => {
  const request = vi.fn(async path => ({ [collection]: [{ id: 1, display_name: 'A very long entry name', book_count: 1, books: [{ id: 2, title: 'A very long book title' }] }], hasNext: !path.includes('page=2'), page: path.includes('page=2') ? 2 : 1 }))
  const w = mount(DirectoryBrowser, { props: { kind, collection, request, catalogueUrl: '/apps/library/', searchLabel: 'Search', searchHelp: 'Help', emptyLabel: 'Empty' }, global: { stubs: { CatalogueCover: true, LabelHelp: true } } })
  await flushPromises()
  expect(request.mock.calls[0][0]).toContain('sort=name&previews=1')
  expect(w.get('.directory-book').attributes('href')).toContain('?details=2&returnTo=')
  await w.get(`#${kind}-directory-sort`).setValue('name_desc'); await flushPromises()
  expect(location.search).toContain(`${kind}Sort=name_desc`)
  await w.findAll('button').find(b => b.text() === 'Next').trigger('click'); await flushPromises()
  expect(location.search).toContain(`${kind}Page=2`)
  await w.get(`#${kind}-search`).setValue('Short'); await vi.advanceTimersByTimeAsync(250); await flushPromises()
  expect(request.mock.calls.at(-1)[0]).toContain('page=1&search=Short')
})
it('shows failed requests with retry and aborts on unmount', async () => {
  const request = vi.fn().mockRejectedValueOnce(new Error('Offline')).mockImplementation(() => new Promise(() => {}))
  const w = mount(DirectoryBrowser, { props: { kind: 'genre', collection: 'genres', request, catalogueUrl: '/apps/library/', searchLabel: 'Search', searchHelp: 'Help', emptyLabel: 'Empty' }, global: { stubs: { CatalogueCover: true, LabelHelp: true } } })
  await flushPromises(); expect(w.get('[role=alert]').text()).toContain('Offline')
  await w.get('button').trigger('click'); const signal = request.mock.calls.at(-1)[2]
  w.unmount(); expect(signal.aborted).toBe(true)
})
