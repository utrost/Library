import { afterEach, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useBrowsePosition } from './browse-position.js'
afterEach(() => { sessionStorage.clear(); document.body.innerHTML = ''; vi.useRealTimers(); window.history.replaceState({}, '', '/') })
it('records only same-app editor links and ignores modified clicks', async () => {
  window.history.replaceState({}, '', '/apps/library/?q=book')
  const w = mount({ setup() { useBrowsePosition() }, template: '<div id="app-content-vue"><a @click.prevent href="/apps/library/?details=12">Cover</a><a @click.prevent href="/apps/library/?details=12">Title</a></div>' }, { attachTo: document.body })
  w.element.scrollTop = 400
  await w.get('a').trigger('click', { ctrlKey: true })
  expect(sessionStorage.getItem('library-browse-positions')).toBeNull()
  w.findAll('a').forEach(a => { a.element.getClientRects = () => [new DOMRect()] })
  await w.findAll('a')[1].trigger('click')
  const saved = new Map(JSON.parse(sessionStorage.getItem('library-browse-positions'))).get('/apps/library/?q=book')
  expect(saved.id).toBe('12'); expect(saved.top).toBe(400); expect(saved.linkIndex).toBe(1)
  w.unmount()
})
it('restores a missing item with the stored scroll fallback and cleans up', async () => {
  vi.useFakeTimers(); window.history.replaceState({}, '', '/apps/library/')
  sessionStorage.setItem('library-browse-positions', JSON.stringify([['/apps/library/', { id: '12', top: 200, offset: 30, time: Date.now() }]]))
  const w = mount({ setup() { useBrowsePosition() }, template: '<div id="app-content-vue"></div>' }, { attachTo: document.body })
  await vi.advanceTimersByTimeAsync(10100)
  expect(w.element.scrollTop).toBe(200)
  expect(JSON.parse(sessionStorage.getItem('library-browse-positions'))).toEqual([])
  w.unmount()
})
