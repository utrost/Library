import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

const state = {
  settingsUrl: '/settings/user/library',
  requestToken: 'test-token',
  rootCount: 1,
  enabledRootCount: 1,
  metadataExportUrl: '/apps/library/export/metadata',
  batchTagUrl: '/apps/library/bulk/tags',
  shelves: ['Books'],
  formats: ['epub'],
  scanStatuses: ['indexed'],
  activeFilters: { q: '', type: '', format: '', tag: '', shelf: '', status: '', sort: 'title' },
  cataloguePagination: { page: 1, limit: 100, total: 1, visible: 1, from: 1, to: 1, previousUrl: '', nextUrl: '' },
  items: [{
    id: 7,
    fileId: 178,
    title: 'Example Book',
    creators: 'Ada Reader',
    publicationType: 'book',
    extension: 'epub',
    shelf: 'Books',
    scanStatus: 'indexed',
    scanError: '',
    metadataSource: 'epub-opf',
    userEdited: false,
    cachedPath: '/Books/Example.epub',
    publication: '',
    publicationDate: '2026',
    language: 'en',
    publisher: 'Example Press',
    subtitle: '',
    coverUrl: '/apps/library/items/7/cover',
    openUrl: '/f/178',
    filesUrl: '/apps/files/files/178?openfile=true',
    starUrl: '/apps/library/items/7/star',
    starred: false,
    updateUrl: '/apps/library/items/7',
    tagUrl: '/apps/library/items/7/tags',
    tagRemoveBaseUrl: '/apps/library/items/7/tags/__TAG_ID__',
    commentUrl: '/apps/library/items/7/comments',
    nextcloudTags: [{ id: 3, name: 'photography' }],
    nextcloudComments: { count: 1, recent: [{ actorId: 'uwe', createdAt: '2026-09-05', message: 'note' }] },
  }],
}

describe('Library catalogue Vue app', () => {
  it('renders the catalogue from Nextcloud initial state', () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.text()).toContain('Publication catalogue')
    expect(wrapper.text()).toContain('Example Book')
    expect(wrapper.text()).toContain('Ada Reader')
    expect(wrapper.find('.library-cover-detail-chip').exists()).toBe(true)
    expect(wrapper.findAll('.library-cover-detail-chip').map((chip) => chip.text())).toContain('Format:EPUB')
    expect(wrapper.findAll('.library-cover-card')).toHaveLength(1)
    expect(wrapper.find('.library-cover-image').attributes('src')).toBe('/apps/library/items/7/cover')
    expect(wrapper.find('.library-cover-link').attributes('href')).toBe('/f/178')
    expect(wrapper.text()).toContain('Show in Files')
    const starForm = wrapper.find('form.library-cover-star-form')
    expect(starForm.exists()).toBe(true)
    expect(starForm.attributes('action')).toBe('/apps/library/items/7/star')
    expect(starForm.find('input[name="requesttoken"]').element.value).toBe('test-token')
    expect(starForm.find('input[name="starred"]').element.value).toBe('1')
    expect(starForm.find('.library-cover-star-button').text()).toBe('☆')
    expect(wrapper.text()).toContain('Details')
    const filterPanel = wrapper.find('.library-filter-panel')
    const periodicalsPanel = wrapper.find('.library-periodical-groups')
    expect(filterPanel.exists()).toBe(true)
    expect(filterPanel.attributes('open')).toBeUndefined()
    expect(filterPanel.find('summary').text()).toBe('Show catalogue filters')
    expect(periodicalsPanel.exists()).toBe(true)
    expect(periodicalsPanel.attributes('open')).toBeUndefined()
    expect(periodicalsPanel.find('summary').text()).toBe('Show top series and periodicals')
    expect(wrapper.text()).toContain('Export corrected metadata')
    expect(wrapper.find('a[aria-label="Export corrected metadata"]').attributes('href')).toBe('/apps/library/export/metadata')
  })

  it('toggles catalogue stars without submitting a page reload', async () => {
    const fetchSpy = vi.fn(() => Promise.resolve({ ok: true }))
    globalThis.fetch = fetchSpy
    const wrapper = mount(App, { props: { state } })

    const button = wrapper.find('.library-cover-star-button')
    await button.trigger('click')

    expect(fetchSpy).toHaveBeenCalledWith('/apps/library/items/7/star', expect.objectContaining({
      method: 'POST',
      credentials: 'same-origin',
    }))
    const form = wrapper.find('form.library-cover-star-form')
    expect(form.find('input[name="starred"]').element.value).toBe('0')
    expect(wrapper.find('.library-cover-star-button').text()).toBe('★')
    expect(wrapper.find('.library-cover-star-button').classes()).toContain('library-cover-star-button--starred')
  })

  it('supports slash focus and Escape-to-clear keyboard search shortcuts', async () => {
    const fetchSpy = vi.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        ...state,
        activeFilters: { ...state.activeFilters, q: '' },
      }),
    }))
    globalThis.fetch = fetchSpy
    const wrapper = mount(App, {
      attachTo: document.body,
      props: {
        state: {
          ...state,
          activeFilters: { ...state.activeFilters, q: 'Camera' },
          catalogueEndpointUrl: '/apps/library/catalogue',
        },
      },
    })

    window.dispatchEvent(new KeyboardEvent('keydown', { key: '/' }))

    const searchInput = wrapper.find('[data-library-quick-search]').element
    expect(document.activeElement).toBe(searchInput)

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await Promise.resolve()
    await Promise.resolve()

    expect(searchInput.value).toBe('')
    expect(fetchSpy).toHaveBeenCalledWith('/apps/library/catalogue?sort=title&limit=100', expect.objectContaining({
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
    }))

    wrapper.unmount()
  })

  it('shows first-run root guidance instead of filtered-empty copy when no roots exist', () => {
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          rootCount: 0,
          enabledRootCount: 0,
          items: [],
          cataloguePagination: { page: 1, limit: 100, total: 0, visible: 0, from: 0, to: 0, previousUrl: '', nextUrl: '' },
        },
      },
    })

    expect(wrapper.find('.library-first-run-guidance').exists()).toBe(true)
    expect(wrapper.text()).toContain('Start with one Library root')
    expect(wrapper.text()).toContain('Add a Library root')
    expect(wrapper.text()).toContain('Run a scan after saving a root')
  })

  it('shows filter recovery actions when active filters produce no results', () => {
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          items: [],
          activeFilters: { ...state.activeFilters, q: 'missing-title', format: 'pdf' },
          cataloguePagination: { page: 1, limit: 100, total: 0, visible: 0, from: 0, to: 0, previousUrl: '', nextUrl: '' },
        },
      },
    })

    expect(wrapper.find('.library-filter-empty-state').exists()).toBe(true)
    expect(wrapper.text()).toContain('No matches for the current filters')
    expect(wrapper.text()).toContain('Clear search')
    expect(wrapper.text()).toContain('Clear all filters')
    expect(wrapper.find('a[href="?format=pdf"]').exists()).toBe(true)
  })
})
