import { afterEach, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import Authors from './Authors.vue'
import Series from './Series.vue'

vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
afterEach(() => { vi.unstubAllGlobals(); window.history.replaceState({}, '', '/') })
const button = (w, text) => w.findAll('button').find(b => b.text() === text)

for (const [kind, Component, otherView] of [['author', Authors, 'List'], ['series', Series, 'Covers']]) {
  it(`${kind} preserves the applied search, draft, view and book return context separately`, async () => {
    window.history.replaceState({}, '', `/apps/library/?${kind === 'author' ? 'authors' : 'series'}=1&${kind}Id=1&bookSearch=Kept`)
    const requests = []
    vi.stubGlobal('fetch', vi.fn(async url => {
      requests.push(url)
      const data = url.includes('/1?')
        ? { [kind]: { id: 1, display_name: 'Example' }, books: [{ id: 5, title: 'Kept book' }], bookCount: 1, matchingCount: 1 }
        : url.includes('/conflicts') ? { items: [] } : []
      return { ok: true, json: async () => data }
    }))
    const w = mount(Component, { props: { catalogueUrl: '/apps/library/' }, global: { stubs: { LabelHelp: true, CatalogueCover: true, AuthorConflicts: true } } })
    await flushPromises()
    const search = w.get('.library-book-toolbar input')
    await search.setValue('Unsubmitted')
    await button(w, otherView).trigger('click')
    expect(new URL(location.href).searchParams.get('bookSearch')).toBe('Kept')
    expect(new URL(location.href).searchParams.get('bookDraft')).toBe('Unsubmitted')
    const returnTo = new URL(w.get('.author-book-title').attributes('href'), location.origin).searchParams.get('returnTo')
    const context = new URL(returnTo, location.origin)
    expect(context.searchParams.get('bookSearch')).toBe('Kept')
    expect(context.searchParams.get('bookDraft')).toBe('Unsubmitted')
    expect(requests.filter(url => url.includes('/1?'))).toHaveLength(1)
    expect(w.get('.library-query-draft').text()).toContain('Press Search')
    await w.get('.library-book-toolbar').trigger('submit')
    await flushPromises()
    expect(requests.some(url => url.includes('search=Unsubmitted'))).toBe(true)
    expect(new URL(location.href).searchParams.get('bookSearch')).toBe('Unsubmitted')
    expect(new URL(location.href).searchParams.has('bookDraft')).toBe(false)
    await search.setValue('')
    expect(new URL(location.href).searchParams.get('bookSearch')).toBe('Unsubmitted')
    expect(new URL(location.href).searchParams.get('bookDraft')).toBe('')
    const emptyDraftReturn = new URL(w.get('.author-book-title').attributes('href'), location.origin).searchParams.get('returnTo')
    expect(new URL(emptyDraftReturn, location.origin).searchParams.get('bookDraft')).toBe('')
    await w.get('.library-book-toolbar').trigger('submit')
    await flushPromises()
    expect(new URL(location.href).searchParams.has('bookSearch')).toBe(false)
    expect(w.find('.library-query-draft').exists()).toBe(false)
  })
}
