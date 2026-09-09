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
    fieldSources: { title: 'epub-opf', creators: 'path-template' },
    fieldValues: { title: 'Scanner Title', creators: 'Ada Path' },
    resetFieldUrl: '/apps/library/items/7/reset-field',
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
  it('keeps header actions and discovery shortcuts in compact disclosure controls above the covers', () => {
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          metadataSidecarManifestUrl: '/apps/library/export/sidecars/manifest',
          metadataSidecarBundleUrl: '/apps/library/export/sidecars.zip',
          publicationSummaries: [{ publication: 'Science of Everything', itemCount: 42 }],
          publicationYears: ['2026'],
          creators: ['Ada Reader'],
        },
      },
    })

    const toolbar = wrapper.find('.library-catalogue-toolbar')
    expect(Array.from(toolbar.element.children).filter((child) => child.matches('a.button'))).toHaveLength(0)
    expect(toolbar.find('.library-catalogue-actions-menu > summary').text()).toBe('Actions')

    const utilityRow = wrapper.find('.library-catalogue-utility-row')
    expect(utilityRow.exists()).toBe(true)
    expect(utilityRow.findAll('details')).toHaveLength(2)
    expect(utilityRow.find('.library-batch-actions > summary').text()).toContain('Batch')
    expect(utilityRow.find('.library-discovery-shortcuts > summary').text()).toContain('Browse')

    const utilityTop = utilityRow.element.compareDocumentPosition(wrapper.find('.library-cover-gallery').element)
    expect(Boolean(utilityTop & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
  })

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
    const discoveryShortcuts = wrapper.find('.library-discovery-shortcuts')
    expect(filterPanel.exists()).toBe(true)
    expect(filterPanel.attributes('open')).toBeUndefined()
    expect(filterPanel.find('summary').text()).toBe('Show catalogue filters')
    expect(discoveryShortcuts.exists()).toBe(true)
    expect(discoveryShortcuts.attributes('open')).toBeUndefined()
    expect(discoveryShortcuts.find('summary').text()).toBe('Browse')
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

  it('shows a home dashboard for fast browsing and opens an in-page details drawer', async () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.find('.library-home-dashboard').exists()).toBe(true)
    expect(wrapper.text()).toContain('Continue reading')
    expect(wrapper.text()).toContain('Recently added')
    expect(wrapper.text()).toContain('Rediscover')
    expect(wrapper.find('.library-detail-drawer').exists()).toBe(false)

    await wrapper.find('.library-cover-details').trigger('toggle')
    await wrapper.find('.library-cover-details-drawer-button').trigger('click')

    expect(wrapper.find('.library-detail-drawer').exists()).toBe(true)
    expect(wrapper.find('.library-detail-drawer').text()).toContain('Example Book')
    expect(wrapper.find('.library-detail-drawer').text()).toContain('View full details')
    expect(wrapper.find('.library-detail-drawer-backdrop').exists()).toBe(true)
  })

  it('supports keyboard navigation inside the details drawer', async () => {
    const keyboardState = {
      ...state,
      items: [
        { ...state.items[0], id: 7, title: 'Example Book', coverUrl: '/apps/library/items/7/cover' },
        { ...state.items[0], id: 8, title: 'Second Book', coverUrl: '/apps/library/items/8/cover' },
      ],
      cataloguePagination: { ...state.cataloguePagination, total: 2, visible: 2, to: 2 },
    }
    const wrapper = mount(App, { props: { state: keyboardState } })

    await wrapper.findAll('.library-cover-details')[0].trigger('toggle')
    await wrapper.findAll('.library-cover-details-drawer-button')[0].trigger('click')
    expect(wrapper.find('.library-detail-drawer').text()).toContain('Example Book')
    expect(wrapper.find('.library-detail-drawer-keyboard-hint').text()).toContain('Esc closes')
    expect(wrapper.find('.library-detail-drawer-keyboard-hint').text()).toContain('arrow keys browse')

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.library-detail-drawer').text()).toContain('Second Book')

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.library-detail-drawer').text()).toContain('Example Book')

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.library-detail-drawer').exists()).toBe(false)
  })

  it('switches between compact gallery and shelf cover modes without navigation', async () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.find('.library-view-mode-toggle').exists()).toBe(true)
    expect(wrapper.find('.library-cover-gallery').classes()).toContain('library-cover-gallery--compact')

    await wrapper.find('[data-library-view-mode=gallery]').trigger('click')
    expect(wrapper.find('.library-cover-gallery').classes()).toContain('library-cover-gallery--gallery')

    await wrapper.find('[data-library-view-mode=shelf]').trigger('click')
    expect(wrapper.find('.library-cover-gallery').classes()).toContain('library-cover-gallery--shelf')
    expect(wrapper.find('[data-library-view-mode=shelf]').attributes('aria-pressed')).toBe('true')
  })

  it('shows a review-next metadata workbench for scanner conflicts', () => {
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          activeFilters: { ...state.activeFilters, scannerConflicts: '1' },
          scannerConflictReviewUrl: '?scannerConflicts=1',
        },
      },
    })

    const workbench = wrapper.find('.library-metadata-review-workbench')
    expect(workbench.exists()).toBe(true)
    expect(workbench.text()).toContain('Review next conflict')
    expect(workbench.text()).toContain('Current value')
    expect(workbench.text()).toContain('scanner candidate')
    expect(workbench.text()).toContain('path-template candidate')
    expect(workbench.text()).toContain('sidecar value')
    expect(workbench.text()).toContain('source provenance')
    expect(workbench.text()).toContain('No source files are changed')
    expect(workbench.text()).toContain('user-edited values are never silently overwritten')
    const acceptForm = workbench.find('form.library-metadata-review-accept-form')
    expect(acceptForm.attributes('action')).toBe('/apps/library/items/7/reset-field')
    expect(acceptForm.find('input[name="field"]').exists()).toBe(true)
    expect(acceptForm.find('input[name="returnTo"]').element.value).toBe('catalogue')
  })

  it('shows cover loading polish and a graceful broken-cover fallback', async () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.find('.library-cover-frame').exists()).toBe(true)
    expect(wrapper.find('.library-cover-loading-shimmer').exists()).toBe(true)
    expect(wrapper.find('.library-cover-image').classes()).not.toContain('library-cover-image--loaded')

    await wrapper.find('.library-cover-image').trigger('load')
    expect(wrapper.find('.library-cover-image').classes()).toContain('library-cover-image--loaded')
    expect(wrapper.find('.library-cover-loading-shimmer').exists()).toBe(false)

    await wrapper.find('.library-cover-image').trigger('error')
    expect(wrapper.find('.library-cover-card').classes()).toContain('library-cover-card--cover-error')
    expect(wrapper.find('.library-cover-fallback').text()).toContain('Cover unavailable')
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
