import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
// Source-harness marker: keeps catalogue workspace panels collapsed so the cover shelf stays central
import { enableAutoUnmount, mount } from '@vue/test-utils'
import NcAppContent from '@nextcloud/vue/components/NcAppContent'
import NcAppNavigation from '@nextcloud/vue/components/NcAppNavigation'
import NcAppNavigationItem from '@nextcloud/vue/components/NcAppNavigationItem'
import NcAppNavigationList from '@nextcloud/vue/components/NcAppNavigationList'
import NcAppNavigationSettings from '@nextcloud/vue/components/NcAppNavigationSettings'
import NcAppSidebar from '@nextcloud/vue/components/NcAppSidebar'
import NcContent from '@nextcloud/vue/components/NcContent'
import App from './App.vue'

enableAutoUnmount(afterEach)

let mediaQuery
let consoleError

function installMatchMedia(initialMatches = false, { legacy = false } = {}) {
  const listeners = new Set()
  mediaQuery = {
    matches: initialMatches,
    media: '(max-width: 1023px)',
    addEventListener: legacy ? undefined : vi.fn((_type, listener) => listeners.add(listener)),
    removeEventListener: legacy ? undefined : vi.fn((_type, listener) => listeners.delete(listener)),
    addListener: legacy ? vi.fn((listener) => listeners.add(listener)) : undefined,
    removeListener: legacy ? vi.fn((listener) => listeners.delete(listener)) : undefined,
    setMatches(matches) {
      this.matches = matches
      for (const listener of [...listeners]) listener({ matches, media: this.media })
    },
    listenerCount: () => listeners.size,
  }
  vi.stubGlobal('matchMedia', vi.fn(() => mediaQuery))
  return mediaQuery
}

function setNextcloudViewport(width) {
  Object.defineProperty(document.documentElement, 'clientWidth', { configurable: true, value: width })
  window.dispatchEvent(new Event('resize'))
}

async function waitForSidebarEvent(wrapper, event, count = 1) {
  const sidebar = wrapper.findComponent(NcAppSidebar)
  await wrapper.vm.$nextTick()
  const transitionHook = event === 'opened' ? 'onAfterEnter' : 'onAfterLeave'
  // Vue Test Utils does not expose a portable CSS clock. Complete the installed
  // component's real post-transition hook instead of asserting against the
  // pre-transition render tick.
  sidebar.vm[transitionHook](sidebar.element)
  await wrapper.vm.$nextTick()
  if (event === 'closed') await new Promise((resolve) => window.requestAnimationFrame(resolve))
  return sidebar
}

const state = {
  catalogueRootUrl: '/nc/index.php/apps/library/',
  homeUrl: '/nc/index.php/apps/library/?home=1',
  shelvesUrl: '/nc/index.php/apps/library/?shelves=1',
  reviewUrl: '/nc/index.php/apps/library/?scannerConflicts=1',
  settingsUrl: '/nc/index.php/settings/user/library',
  requestToken: 'test-token',
  rootCount: 1,
  enabledRootCount: 1,
  metadataExportUrl: '/apps/library/export/metadata',
  batchTagUrl: '/apps/library/bulk/tags',
  shelves: ['Books'],
  formats: ['epub'],
  scanStatuses: ['indexed'],
  subjects: ['History'],
  classifications: ['DDC 900'],
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
    detailsUrl: '/nc/index.php/apps/library/items/7',
    filesUrl: '/apps/files/files/178?openfile=true',
    downloadUrl: '/apps/library/items/7/download',
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

beforeEach(() => {
  vi.restoreAllMocks()
  setNextcloudViewport(1280)
  installMatchMedia(false)
  consoleError = vi.spyOn(console, 'error')
  document.body.innerHTML = '<div id="skip-actions"></div>'
})

afterEach(async () => {
  await new Promise((resolve) => window.setTimeout(resolve, 20))
  expect(consoleError).not.toHaveBeenCalled()
  vi.unstubAllGlobals()
})

describe('Library catalogue Vue app', () => {
  it('hydrates deferred index facets and counts once without replacing initial items', async () => {
    let resolveHydration
    const animationFrames = []
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      animationFrames.push(callback)
      return animationFrames.length
    })
    global.fetch = vi.fn().mockReturnValue(new Promise((resolve) => { resolveHydration = resolve }))
    const initialItem = { ...state.items[0], title: 'Initial first-paint item' }
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface: 'index',
      items: [initialItem],
      formats: [],
      smartViewCounts: {},
      smartViewCountsPending: ['scanner-conflicts'],
      savedCollections: [{ id: 9, name: 'Unread', count: null, countPending: true }],
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, format: 'epub' },
    } } })

    await wrapper.vm.$nextTick()
    expect(global.fetch).not.toHaveBeenCalled()
    expect(animationFrames.length).toBeGreaterThan(0)

    for (const callback of animationFrames.splice(0)) callback(performance.now())
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?hydrate=1&format=epub', expect.objectContaining({ credentials: 'same-origin' }))
    resolveHydration({ ok: true, json: async () => ({
      ...state,
      items: [{ ...state.items[0], title: 'API item must not replace first paint' }],
      formats: ['epub', 'pdf'],
      smartViewCounts: { 'scanner-conflicts': 4 },
      smartViewCountsPending: [],
      savedCollections: [{ id: 9, name: 'Unread', count: 12, countPending: false }],
    }) })

    await vi.waitFor(() => expect(wrapper.get('select[name="format"]').findAll('option')).toHaveLength(3))
    expect(wrapper.text()).toContain('Initial first-paint item')
    expect(wrapper.text()).not.toContain('API item must not replace first paint')
    expect(wrapper.get('.library-navigation-saved-collection').text()).toContain('12')
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it('shows a pending marker instead of false zero review queue counts', () => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface: 'catalogue_api',
      activeFilters: { ...state.activeFilters, scannerConflicts: '1' },
      smartViewCounts: {},
      smartViewCountsPending: ['scanner-conflicts'],
    } } })

    expect(wrapper.get('.library-review-queue-link b').text()).toBe('—')
  })

  it('does not display a pending saved collection count as zero', () => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      savedCollections: [{ id: 9, name: 'Unread', filters: { workflowStatus: 'unread' }, count: null, countPending: true }],
    } } })

    const collection = wrapper.get('.library-navigation-saved-collection')
    expect(collection.text()).toContain('Unread')
    expect(collection.text()).not.toContain('0 items')
    expect(collection.text()).not.toContain('items')
    const deleteAction = collection.get('.library-navigation-saved-collection-delete-action')
    expect(deleteAction.attributes('aria-label')).toContain('Delete collection')
  })

  it('renders server-backed Home rows independently from catalogue items', () => {
    const homeItem = {
      ...state.items[0],
      id: 41,
      title: 'Server Home Publication',
    }
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          surface: 'home',
          items: [{ ...state.items[0], id: 99, title: 'Catalogue Page Only' }],
          homeUrl: '/apps/library/?home=1',
          homeRows: { continueReading: [homeItem], recentlyAdded: [homeItem] },
          homeShelves: [{ shelf: 'Books', itemCount: 12, url: '/apps/library/?shelf=Books' }],
          needsAttention: { count: 3, url: '/apps/library/?needsMetadata=1' },
        },
      },
    })

    expect(wrapper.find('#library-home').exists()).toBe(true)
    expect(wrapper.text()).toContain('Server Home Publication')
    expect(wrapper.text()).not.toContain('Catalogue Page Only')
    expect(wrapper.text()).toContain('Continue reading')
    expect(wrapper.text()).toContain('Recently added')
    expect(wrapper.text()).toContain('Shelves')
    expect(wrapper.text()).toContain('Needs attention')
    expect(wrapper.find('[aria-labelledby="library-home-shelves-heading"] > header a').attributes('href')).toBe(state.shelvesUrl)
    expect(wrapper.findAllComponents(NcAppNavigationItem)[0].props('active')).toBe(true)
    expect(wrapper.findAllComponents(NcAppNavigationItem)[0].props('href')).toBe('/apps/library/?home=1')
  })

  it('renders collapsed shelf roots and fetches bounded children once on expansion', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ nodes: [
        { id: 'root-4-/Books/Art', rootId: 4, label: 'Art', path: '/Books/Art', itemCount: 3, childCount: 0, hasChildren: false, url: '/apps/library/?folder=%2FBooks%2FArt' },
      ] }),
    })
    vi.stubGlobal('fetch', fetchMock)
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface: 'shelves',
      items: [{ ...state.items[0], title: 'Catalogue Page Only' }],
      shelfChildrenUrl: '/apps/library/shelves/children',
      shelfTree: [
        { id: 'root-4', rootId: 4, label: 'Books', path: '/Books', itemCount: 12, childCount: 1, hasChildren: true, url: '/apps/library/?folder=%2FBooks' },
        { id: 'root-5', rootId: 5, label: 'Empty root', path: '/Empty', itemCount: 0, childCount: 0, hasChildren: false, url: '/apps/library/?folder=%2FEmpty' },
      ],
    } } })

    expect(wrapper.find('#library-shelves-landing').exists()).toBe(true)
    expect(wrapper.text()).toContain('Books')
    expect(wrapper.text()).toContain('12 items')
    expect(wrapper.text()).toContain('Empty root')
    expect(wrapper.text()).not.toContain('Catalogue Page Only')
    expect(wrapper.findAll('.library-shelf-tree-node')).toHaveLength(2)
    expect(wrapper.find('.library-shelf-tree > .library-shelf-tree-node > a').attributes('href')).toBe('/apps/library/?folder=%2FBooks')
    expect(wrapper.text()).not.toContain('Art')
    const expand = wrapper.find('.library-shelf-tree-toggle')
    expect(expand.attributes('aria-expanded')).toBe('false')
    await expand.trigger('click')
    await vi.waitFor(() => expect(wrapper.text()).toContain('Art'))
    expect(fetchMock).toHaveBeenCalledWith('/apps/library/shelves/children?rootId=4&parent=%2FBooks&limit=100&offset=0', expect.objectContaining({ credentials: 'same-origin' }))
    const child = wrapper.find('.library-shelf-tree .library-shelf-tree .library-shelf-tree-node')
    expect(child.text()).toContain('Art')
    expect(child.text()).toContain('3 items')
    expect(child.find('a').attributes('href')).toBe('/apps/library/?folder=%2FBooks%2FArt')
    await expand.trigger('click')
    await expand.trigger('click')
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(wrapper.findAllComponents(NcAppNavigationItem)[4].props('active')).toBe(true)
    expect(wrapper.findAllComponents(NcAppNavigationItem)[4].props('href')).toBe(state.shelvesUrl)

    const empty = mount(App, { props: { state: { ...state, surface: 'shelves', shelfTree: [] } } })
    expect(empty.find('.library-shelves-empty').exists()).toBe(true)
    const emptyActions = empty.findAll('.library-shelves-empty .button')
    expect(emptyActions.map((action) => action.text())).toEqual(['Add a Library root', 'All publications'])
    expect(emptyActions.map((action) => action.attributes('href'))).toEqual([state.settingsUrl, state.catalogueRootUrl])
  })

  it('shows and removes an active folder filter chip', async () => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      activeFilters: { ...state.activeFilters, folder: '/Books/Art' },
    } } })

    const chip = wrapper.find('.library-filter-chip[aria-label="Remove filter: Folder"]')
    expect(chip.text()).toContain('Folder: /Books/Art')
    await chip.trigger('click')
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Folder"]').exists()).toBe(false)
  })

  it('renders active filter chips with human-readable labels and values', () => {
    const longFolder = '/Very/Long/Imported/Calibre/Library/Comics'
    const wrapper = mount(App, { props: { state: {
      ...state,
      activeFilters: {
        ...state.activeFilters,
        format: 'epub',
        starred: '1',
        scannerConflicts: '1',
        needsMetadata: '1',
        weakMetadata: 'filename',
        sort: 'lastOpened',
        folder: longFolder,
      },
    } } })

    const chips = wrapper.findAll('.library-filter-chip')
    const chipTexts = chips.map((chip) => chip.text().replace(/\s+/g, ' ').trim())

    expect(chipTexts).toContain('Format: EPUB ×')
    expect(chipTexts).toContain('Starred ×')
    expect(chipTexts).toContain('Suggested updates ×')
    expect(chipTexts).toContain('Needs details ×')
    expect(chipTexts).toContain('Filename-derived metadata ×')
    expect(chipTexts).toContain('Sort: Recently opened ×')
    expect(chipTexts).toContain('Folder: …/Comics ×')
    expect(chipTexts.join(' ')).not.toContain(': 1')
    expect(chipTexts.filter((text) => text.includes('Needs details'))).toHaveLength(1)

    const folderChip = wrapper.get('.library-filter-chip[aria-label="Remove filter: Folder"]')
    expect(folderChip.attributes('title')).toBe(`Folder: ${longFolder}`)
    expect(folderChip.get('.library-filter-chip-value').attributes('title')).toBe(longFolder)
  })

  it('does not render an empty Shelves discovery section in the normal catalogue', () => {
    const wrapper = mount(App, { props: { state: { ...state, surface: 'catalogue' } } })

    expect(wrapper.find('#library-catalogue').exists()).toBe(true)
    expect(wrapper.find('#library-shelves').exists()).toBe(false)
    expect(wrapper.find('.library-discovery-shortcuts').exists()).toBe(false)
  })

  it('submits only selected publication IDs for Fresh covers and offers no action without a selection', async () => {
    const submit = vi.fn((event) => event.preventDefault())
    document.addEventListener('submit', submit)
    const wrapper = mount(App, { props: { state: {
      ...state,
      batchCoverRefreshUrl: '/apps/library/bulk/covers/refresh',
      items: [
        { ...state.items[0], id: 11, title: 'A' },
        { ...state.items[0], id: 12, title: 'B' },
        { ...state.items[0], id: 13, title: 'C' },
      ],
    } } })

    expect(wrapper.find('.library-batch-cover-refresh-form').exists()).toBe(false)
    expect(submit).not.toHaveBeenCalled()
    const checkboxes = wrapper.findAll('.library-item-selection input')
    await checkboxes[0].setValue(true)
    await checkboxes[1].setValue(true)
    const form = wrapper.find('.library-batch-cover-refresh-form')
    await form.trigger('submit')
    expect(form.findAll('input[name="itemIds[]"]').map((input) => input.element.value)).toEqual(['11', '12'])
    expect(form.findAll('input[name="itemIds[]"]').map((input) => input.element.value)).not.toContain('13')
    document.removeEventListener('submit', submit)
  })
  it('starts with one visible navigation filter form plus Sort and View content controls and no catalogue workbenches', () => {
    const wrapper = mount(App, { props: { state } })
    const search = wrapper.get('[data-library-quick-search]')

    expect(search.element.closest('details')).toBeNull()
    expect(wrapper.findAll('form.library-sidebar-filters')).toHaveLength(1)
    expect(wrapper.findAll('[data-library-control="sort"]')).toHaveLength(1)
    expect(wrapper.findAll('[data-library-control="view"]')).toHaveLength(1)
    expect(wrapper.find('.library-quick-filter-options').exists()).toBe(false)
    expect(wrapper.findAll('form.library-filter-bar')).toHaveLength(1)
    expect(wrapper.find('[data-workspace-panel="review"]').exists()).toBe(false)
    expect(wrapper.find('[data-workspace-panel="admin"]').exists()).toBe(false)
    expect(wrapper.text()).not.toMatch(/Recently added|Rediscover/)
  })

  it('places catalogue filters below navigation while keeping result controls in content', () => {
    const wrapper = mount(App, { attachTo: document.body, props: { state: {
      ...state,
      publishers: ['Example Press'],
      publications: ['Nature Weekly'],
      publicationYears: ['2026'],
      creators: ['Ada Reader'],
    } } })
    const navigation = wrapper.findComponent(NcAppNavigation)
    const filters = navigation.get('form.library-sidebar-filters')

    expect(navigation.get('#library-sidebar-filters-heading').text()).toBe('Filters')
    expect(filters.get('[data-library-quick-search]').attributes('name')).toBe('q')
    expect(filters.get('select[name="type"]').exists()).toBe(true)
    expect(filters.get('input[name="publisherSearch"]').exists()).toBe(true)
    expect(filters.get('input[type="hidden"][name="publisher"]').exists()).toBe(true)
    expect(filters.get('input[name="publicationSearch"]').exists()).toBe(true)
    expect(filters.get('input[name="yearSearch"]').exists()).toBe(true)
    expect(filters.get('input[name="creatorSearch"]').exists()).toBe(true)
    expect(filters.get('input[name="subjectSearch"]').attributes('role')).toBe('combobox')
    expect(filters.get('input[name="subjectSearch"]').attributes('title')).toBe('Exact subject matches only')
    expect(filters.get('input[type="hidden"][name="subject"]').exists()).toBe(true)
    expect(filters.get('select[name="format"]').exists()).toBe(true)
    expect(filters.get('select[name="status"]').exists()).toBe(true)
    expect(filters.find('select[name="subject"]').exists()).toBe(false)
    expect(filters.find('select[name="genre"]').exists()).toBe(false)
    expect(wrapper.find('#library-catalogue form.library-filter-bar').exists()).toBe(false)
    expect(wrapper.find('#library-catalogue [data-library-control="filter"]').exists()).toBe(true)
    expect(wrapper.find('#library-catalogue [data-library-control="sort"]').exists()).toBe(true)
    expect(wrapper.find('#library-catalogue [data-library-control="view"]').exists()).toBe(true)
  })

  it('renders a mobile filter panel trigger with active count, result count, groups and clear-all action', () => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      cataloguePagination: { ...state.cataloguePagination, total: 842, from: 1, to: 25 },
      activeFilters: { ...state.activeFilters, type: 'book', format: 'pdf', sort: 'title', view: 'compact' },
    } } })
    const panel = wrapper.get('[data-library-control="filter"]')
    const summary = panel.get('summary')

    expect(summary.text()).toContain('Filters (2)')
    expect(summary.attributes('aria-label')).toBe('Open filters panel; 2 active filters')
    expect(panel.get('.library-mobile-filter-count').text()).toBe('842 items')
    expect(panel.findAll('.library-mobile-filter-group').map((group) => group.get('legend').text())).toEqual([
      'Content',
      'Location',
      'Review',
      'Personal / display',
    ])
    expect(panel.get('.library-mobile-filter-primary').text()).toBe('Show 842 items')
    expect(panel.get('.library-mobile-filter-clear').attributes('href')).toBe(state.catalogueRootUrl)
  })

  it('focuses the mobile search field when opening the filter panel and submits via the fast catalogue path', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, q: 'bauhaus', type: 'book' } }),
    })
    const wrapper = mount(App, { attachTo: document.body, props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, type: 'book' },
    } } })
    const panel = wrapper.get('[data-library-control="filter"]')

    panel.element.open = true
    await panel.trigger('toggle')
    await wrapper.vm.$nextTick()
    expect(document.activeElement).toBe(panel.get('[data-library-mobile-filter-search]').element)

    await panel.get('[data-library-mobile-filter-search]').setValue('bauhaus')
    await panel.get('form.library-mobile-filter-form').trigger('submit')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?q=bauhaus&type=book',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('applies a manually typed exact subject without requiring a suggestion', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, subject: 'Social history' } }),
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })

    await wrapper.get('input[name="subjectSearch"]').setValue(' Social history ')
    await wrapper.get('.library-subject-apply').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?subject=Social+history',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(global.fetch.mock.calls.map(([url]) => new URL(url, window.location.origin).searchParams.get('hydrate'))).not.toContain('1')
  })

  it('keeps select-filter catalogue interactions on the non-hydrating fast path', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, type: 'book' } }),
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })

    await wrapper.get('select[name="type"]').setValue('book')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalled())

    const urls = global.fetch.mock.calls.map(([url]) => new URL(url, window.location.origin))
    expect(urls.some((url) => url.pathname === '/apps/library/catalogue' && url.searchParams.get('type') === 'book')).toBe(true)
    expect(urls.map((url) => url.searchParams.get('hydrate'))).not.toContain('1')
  })

  it.each([
    ['publication', 3],
    ['creator', 3],
    ['publisher', 3],
    ['subject', 3],
    ['classification', 3],
    ['tag', 2],
    ['year', 2],
  ])('does not request %s suggestions until %i trimmed characters are entered', async (facet, minimum) => {
    global.fetch = vi.fn()
    const wrapper = mount(App, { props: { state: {
      ...state,
      [`${facet}SuggestionsUrl`]: `/apps/library/catalogue/${facet}-suggestions`,
    } } })

    const input = wrapper.get(`input[name="${facet}Search"]`)
    await input.setValue(` ${'a'.repeat(minimum - 1)} `)
    await new Promise((resolve) => window.setTimeout(resolve, 250))
    expect(global.fetch).not.toHaveBeenCalled()

    const query = 'a'.repeat(minimum)
    await input.setValue(` ${query} `)
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      `/apps/library/catalogue/${facet}-suggestions?${facet}Search=${query}`,
      expect.objectContaining({ credentials: 'same-origin' }),
    ), { timeout: 1000 })
  })

  it('keeps short active exact typeahead values representable and applies them immediately', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state }),
    })
    const shortValues = { publication: 'AB', creator: 'Li', publisher: 'Q', subject: 'AI', classification: 'QA', tag: 'X', year: '19' }
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, ...shortValues },
    } } })

    for (const [facet, value] of Object.entries(shortValues)) {
      expect(wrapper.get(`input[name="${facet}Search"]`).element.value).toBe(value)
      expect(wrapper.get(`input[type="hidden"][name="${facet}"]`).element.value).toBe(value)
    }
    await new Promise((resolve) => window.setTimeout(resolve, 250))
    expect(global.fetch).not.toHaveBeenCalled()

    await wrapper.get('form.library-sidebar-filters').trigger('submit')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?publisher=Q&publication=AB&year=19&creator=Li&tag=X&subject=AI&classification=QA',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('fetches and applies an exact subject suggestion while preserving other filters', async () => {
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ subjects: ['Social history', 'History of science'] }) })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ ...state, activeFilters: { ...state.activeFilters, subject: 'Social history', format: 'epub' } }),
      })
    const wrapper = mount(App, { props: { state: {
      ...state,
      subjectSuggestionsUrl: '/apps/library/catalogue/subject-suggestions',
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, subject: '', format: 'epub' },
    } } })

    const input = wrapper.get('input[name="subjectSearch"]')
    await input.trigger('focus')
    await input.setValue('hist')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue/subject-suggestions?format=epub&subjectSearch=hist',
      expect.objectContaining({ credentials: 'same-origin' }),
    ), { timeout: 1000 })
    await vi.waitFor(() => expect(wrapper.findAll('.library-subject-suggestion')).toHaveLength(2))
    await wrapper.findAll('.library-subject-suggestion')[0].trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenLastCalledWith(
      '/apps/library/catalogue?format=epub&subject=Social+history',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('fetches and applies tag and classification suggestions while preserving other filters', async () => {
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ tags: ['Research'] }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, tag: 'Research', format: 'epub' } }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ classifications: ['DDC 900'] }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, tag: 'Research', classification: 'DDC 900', format: 'epub' } }) })
    const wrapper = mount(App, { props: { state: {
      ...state,
      tagSuggestionsUrl: '/apps/library/catalogue/tag-suggestions',
      classificationSuggestionsUrl: '/apps/library/catalogue/classification-suggestions',
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, tag: '', classification: '', format: 'epub' },
    } } })

    const tagInput = wrapper.get('input[name="tagSearch"]')
    await tagInput.trigger('focus')
    await tagInput.setValue('re')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue/tag-suggestions?format=epub&tagSearch=re',
      expect.objectContaining({ credentials: 'same-origin' }),
    ), { timeout: 1000 })
    await vi.waitFor(() => expect(wrapper.findAll('.library-tag-suggestion').length).toBeGreaterThan(0))
    await wrapper.findAll('.library-tag-suggestion')[0].trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenLastCalledWith(
      '/apps/library/catalogue?tag=Research&format=epub',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))

    const classificationInput = wrapper.get('input[name="classificationSearch"]')
    await classificationInput.trigger('focus')
    await classificationInput.setValue('ddc')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue/classification-suggestions?format=epub&tag=Research&classificationSearch=ddc',
      expect.objectContaining({ credentials: 'same-origin' }),
    ), { timeout: 1000 })
    await vi.waitFor(() => expect(wrapper.findAll('.library-classification-suggestion').length).toBeGreaterThan(0))
    await wrapper.findAll('.library-classification-suggestion')[0].trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenLastCalledWith(
      '/apps/library/catalogue?tag=Research&format=epub&classification=DDC+900',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('does not render classification as an eager dropdown facet', async () => {
    const manyClassifications = Array.from({ length: 80 }, (_, index) => `Class ${index}`)
    const wrapper = mount(App, { props: { state: { ...state, classifications: manyClassifications } } })

    expect(wrapper.find('select[name="classification"]').exists()).toBe(false)
    expect(wrapper.find('input[name="classificationSearch"]').exists()).toBe(true)
    expect(wrapper.findAll('.library-classification-suggestion')).toHaveLength(0)
  })

  it('lets keyboard users navigate and select facet combobox suggestions', async () => {
    global.fetch = vi.fn(async (url) => {
      if (String(url).includes('publisher-suggestions')) return { ok: true, json: async () => ({ publishers: ['Alpha Press', 'Beta Press'] }) }
      return { ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, publisher: 'Beta Press' } }) }
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      publisherSuggestionsUrl: '/apps/library/catalogue/publisher-suggestions',
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, publisher: '' },
    } } })

    const input = wrapper.get('input[name="publisherSearch"]')
    await input.trigger('focus')
    await input.setValue('pre')
    await vi.waitFor(() => expect(wrapper.findAll('.library-publisher-suggestion')).toHaveLength(2))

    await input.trigger('keydown', { key: 'ArrowDown' })
    await input.trigger('keydown', { key: 'ArrowDown' })
    expect(input.attributes('aria-activedescendant')).toBe('library-desktop-publisher-suggestion-1')
    expect(wrapper.find('#library-desktop-publisher-suggestion-1').attributes('aria-selected')).toBe('true')

    await input.trigger('keydown', { key: 'Enter' })
    await vi.waitFor(() => expect(global.fetch).toHaveBeenLastCalledWith(
      '/apps/library/catalogue?publisher=Beta+Press',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('announces ordinary catalogue loading outside Review without clearing stale results', async () => {
    let resolveCatalogue
    global.fetch = vi.fn().mockReturnValue(new Promise((resolve) => { resolveCatalogue = resolve }))
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })

    await wrapper.get('form.library-catalogue-toolbar select[name="sort"]').setValue('recent')
    await wrapper.vm.$nextTick()

    const catalogue = wrapper.get('#library-catalogue')
    expect(catalogue.attributes('aria-busy')).toBe('true')
    expect(wrapper.get('.library-catalogue-request-status').text()).toContain('Updating catalogue')
    expect(wrapper.findAll('.library-cover-card')).toHaveLength(1)

    resolveCatalogue({ ok: true, json: async () => ({ ...state, cataloguePagination: { ...state.cataloguePagination, total: 1 } }) })
    await vi.waitFor(() => expect(catalogue.attributes('aria-busy')).toBe('false'))
    expect(wrapper.get('.library-catalogue-request-status').text()).toContain('Catalogue updated')
  })

  it('gives Home cover image buttons stable accessible names', () => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface: 'home',
      homeRows: { continueReading: [state.items[0]], recentlyAdded: [{ ...state.items[0], id: 8, title: 'New Book' }] },
    } } })

    const coverButtons = wrapper.findAll('.library-home-card .library-cover-link')
    expect(coverButtons.map((button) => button.attributes('aria-label'))).toEqual([
      'Details: Example Book',
      'Details: New Book',
    ])
  })

  it('preserves active hidden catalogue constraints when applying sidebar filters', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ ...state }) })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, folder: '/Books/Art', starred: '1', coverReview: 'placeholder' },
    } } })
    const form = wrapper.get('form.library-sidebar-filters')

    expect(form.findAll('input[name="folder"]')).toHaveLength(1)
    expect(form.findAll('input[name="starred"]')).toHaveLength(1)
    expect(form.findAll('input[name="coverReview"]')).toHaveLength(1)
    expect(form.findAll('[name="scannerConflicts"]')).toHaveLength(1)
    await form.get('input[name="q"]').setValue('bauhaus')
    await form.trigger('submit')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?folder=%2FBooks%2FArt&starred=1&coverReview=placeholder&q=bauhaus',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('immediately applies a changed select filter without an Apply click', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, format: 'epub' } }),
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })

    await wrapper.get('select[name="format"]').setValue('epub')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?format=epub',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('waits for Enter before applying typed search text', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, q: 'bauhaus' } }),
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const search = wrapper.get('input[name="q"]')

    await search.setValue('bauhaus')
    await new Promise((resolve) => window.setTimeout(resolve, 400))
    expect(global.fetch).not.toHaveBeenCalled()

    await search.trigger('keydown', { key: 'Enter' })
    await search.element.form.requestSubmit()

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?q=bauhaus',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('offers a per-filter reset that clears only that active filter', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, type: '', format: 'epub' } }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, type: 'book', format: 'epub' },
    } } })

    const resets = wrapper.findAll('.library-filter-chip')
    expect(resets.map((reset) => reset.attributes('aria-label'))).toEqual(expect.arrayContaining([
      'Remove filter: Type',
      'Remove filter: Format',
    ]))
    await wrapper.get('.library-filter-chip[aria-label="Remove filter: Type"]').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?format=epub',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Type"]').exists()).toBe(false)
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Format"]').exists()).toBe(true)
  })

  it('clears catalogue selection filters together while preserving sort and view', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        activeFilters: { ...state.activeFilters, sort: 'recent', view: 'gallery' },
      }),
    })
    const wrapper = mount(App, { attachTo: document.body, props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: {
        ...state.activeFilters,
        q: 'bauhaus',
        type: 'book',
        format: 'epub',
        sort: 'recent',
        view: 'gallery',
      },
      cataloguePagination: { ...state.cataloguePagination, page: 3 },
    } } })

    const clearAll = wrapper.get('.library-active-filter-clear-all')
    clearAll.element.focus()
    expect(document.activeElement).toBe(clearAll.element)
    expect(clearAll.attributes('href')).toBe(`${state.catalogueRootUrl}?sort=recent&view=gallery`)
    await clearAll.trigger('click')
    await wrapper.vm.$nextTick()

    expect(document.activeElement).toBe(wrapper.get('#library-catalogue-heading').element)
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?sort=recent&view=gallery',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Search"]').exists()).toBe(false)
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Type"]').exists()).toBe(false)
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Format"]').exists()).toBe(false)
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Sort"]').exists()).toBe(true)
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: View mode"]').exists()).toBe(true)
  })

  it('clears review selection filters through AJAX while preserving sort and view', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        activeFilters: { ...state.activeFilters, sort: 'recent', view: 'list' },
      }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: {
        ...state.activeFilters,
        scannerConflicts: '1',
        type: 'book',
        sort: 'recent',
        view: 'list',
      },
    } } })

    await wrapper.get('.library-active-filter-clear-all').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?sort=recent&view=list',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('offers grouped filter reset actions that preserve filters outside the group and reset pagination', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, shelf: 'Books', scannerConflicts: '1' } }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: {
        ...state.activeFilters,
        q: 'bauhaus',
        type: 'book',
        shelf: 'Books',
        scannerConflicts: '1',
      },
      cataloguePagination: { ...state.cataloguePagination, page: 4 },
    } } })

    const contentGroup = wrapper.get('[data-library-filter-group="content"]')
    expect(contentGroup.text()).toContain('Content')
    expect(contentGroup.get('.library-filter-group-clear').text()).toBe('Clear Content')
    await contentGroup.get('.library-filter-group-clear').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?shelf=Books&scannerConflicts=1',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    const requested = new URL(global.fetch.mock.calls.at(-1)[0], window.location.origin)
    expect(requested.searchParams.has('page')).toBe(false)
  })

  it.each(['home', 'shelves'])('explains active catalogue filters on the %s surface without loading results underneath', (surface) => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface,
      items: [],
      activeFilters: { ...state.activeFilters, type: 'book', folder: '/Books' },
    } } })

    const callout = wrapper.get('.library-active-filter-callout')
    expect(callout.text()).toContain('Active catalogue filters')
    expect(callout.text()).toContain('View filtered catalogue')
    expect(callout.get('.library-filter-callout-view').attributes('href')).toBe(`${state.catalogueRootUrl}?type=book&folder=%2FBooks`)
    expect(wrapper.find('#library-catalogue').exists()).toBe(false)
    expect(surface === 'home' ? wrapper.find('#library-home').exists() : wrapper.find('#library-shelves-landing').exists()).toBe(true)
  })

  it('shows accessible pending draft indicators and keeps typing delayed until Apply', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, q: 'bauhaus', publisher: 'Acme Press' } }),
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })

    await wrapper.get('input[name="q"]').setValue('bauhaus')
    await wrapper.get('input[name="publisherSearch"]').setValue('Acme Press')
    await new Promise((resolve) => window.setTimeout(resolve, 400))
    expect(global.fetch.mock.calls.map(([url]) => new URL(url, window.location.origin).pathname)).not.toContain('/apps/library/catalogue')
    expect(wrapper.get('[data-library-pending-draft="q"]').text()).toContain('Not applied yet')
    expect(wrapper.get('[data-library-pending-draft="publisher"]').text()).toContain('Press Enter or Apply')
    expect(wrapper.get('.library-publisher-apply').classes()).toContain('library-filter-apply--pending')

    await wrapper.get('form.library-sidebar-filters').trigger('submit')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?q=bauhaus&publisher=Acme+Press',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('turns filtered-empty states into chip-specific exits and only shows Clear search when search is active or pending', async () => {
    const wrapper = mount(App, { props: { state: {
      ...state,
      items: [],
      activeFilters: { ...state.activeFilters, type: 'book', format: 'epub' },
      cataloguePagination: { ...state.cataloguePagination, total: 0, visible: 0, from: 0, to: 0 },
    } } })

    const empty = wrapper.get('.library-filter-empty-state')
    expect(empty.text()).toContain('No items match these filters')
    expect(empty.find('.library-empty-clear-search').exists()).toBe(false)
    expect(empty.findAll('.library-filter-chip')).toHaveLength(2)
    expect(empty.text()).toContain('Try removing Type: book')

    await wrapper.get('input[name="q"]').setValue('bauhaus')
    await wrapper.vm.$nextTick()
    expect(empty.find('.library-empty-clear-search').exists()).toBe(true)
  })

  it.each(['home', 'shelves'])('clears filters from %s by navigating to the canonical catalogue', async (surface) => {
    global.fetch = vi.fn()
    const submissions = []
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(function () {
      submissions.push({ action: this.getAttribute('action'), params: Object.fromEntries(new FormData(this)) })
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface,
      activeFilters: {
        ...state.activeFilters,
        type: 'book',
        format: 'epub',
        sort: 'recent',
        view: 'gallery',
      },
    } } })

    await wrapper.get('.library-active-filter-clear-all').trigger('click')

    expect(global.fetch).not.toHaveBeenCalled()
    expect(submissions).toEqual([{
      action: state.catalogueRootUrl,
      params: { sort: 'recent', view: 'gallery' },
    }])
    nativeSubmit.mockRestore()
  })

  it('preserves hydrated facet choices when a fast catalogue refresh defers facets', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        facetsDeferred: true,
        items: [{ ...state.items[0], title: 'Filtered result' }],
        formats: [],
        smartViewCounts: {},
        smartViewCountsPending: ['scanner-conflicts'],
        savedCollections: [{ id: 9, name: 'Unread', count: null, countPending: true }],
        activeFilters: { ...state.activeFilters, subject: 'photolab' },
      }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      formats: ['epub', 'pdf'],
      smartViewCounts: { 'scanner-conflicts': 4 },
      smartViewCountsPending: [],
      savedCollections: [{ id: 9, name: 'Unread', count: 12, countPending: false }],
    } } })

    await wrapper.get('input[name="subjectSearch"]').setValue('photolab')
    await wrapper.get('.library-subject-apply').trigger('click')

    await vi.waitFor(() => expect(wrapper.text()).toContain('Filtered result'))
    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?subject=photolab', expect.objectContaining({ credentials: 'same-origin' }))
    expect(wrapper.get('select[name="format"]').findAll('option').map((option) => option.text())).toEqual(['All formats', 'EPUB', 'PDF'])
    expect(wrapper.get('.library-navigation-saved-collection').text()).toContain('12')
  })

  it.each(['home', 'shelves'])('offers active filter resets on %s and navigates to the canonical catalogue', async (surface) => {
    global.fetch = vi.fn()
    const submissions = []
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(function () {
      submissions.push({ action: this.getAttribute('action'), params: Object.fromEntries(new FormData(this)) })
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface,
      activeFilters: { ...state.activeFilters, type: 'book', format: 'epub' },
    } } })

    const chip = wrapper.get('.library-filter-chip[aria-label="Remove filter: Type"]')
    await chip.trigger('click')

    expect(global.fetch).not.toHaveBeenCalled()
    expect(submissions).toEqual([{
      action: state.catalogueRootUrl,
      params: { format: 'epub' },
    }])
    nativeSubmit.mockRestore()
  })

  it('offers active filter resets on Review and updates the catalogue through AJAX', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1', type: '' } }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, scannerConflicts: '1', type: 'book' },
    } } })

    await wrapper.get('.library-filter-chip[aria-label="Remove filter: Type"]').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?scannerConflicts=1',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('resets a non-default Sort independently while preserving the type filter', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, sort: 'title', type: 'book' } }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, sort: 'recent', type: 'book' },
    } } })

    await wrapper.get('.library-filter-chip[aria-label="Remove filter: Sort"]').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?type=book',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(wrapper.get('select[name="sort"]').element.value).toBe('title')
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Type"]').exists()).toBe(true)
    expect(wrapper.find('.library-filter-chip[aria-label="Remove filter: Sort"]').exists()).toBe(false)
  })

  it.each(['home', 'shelves'])('full-navigates sidebar filter submissions from the %s surface', async (surface) => {
    global.fetch = vi.fn()
    const submissions = []
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(function () {
      submissions.push({ action: this.getAttribute('action'), params: Object.fromEntries(new FormData(this)) })
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      surface,
      activeFilters: { ...state.activeFilters, folder: '/Books' },
    } } })
    const form = wrapper.get('form.library-sidebar-filters')

    await form.get('input[name="q"]').setValue('design')
    await form.trigger('submit')
    await wrapper.vm.$nextTick()

    expect(global.fetch).not.toHaveBeenCalled()
    expect(submissions).toEqual([{
      action: state.catalogueRootUrl,
      params: { folder: '/Books', q: 'design' },
    }])
    nativeSubmit.mockRestore()
  })

  it('focuses the already-visible navigation search with slash', async () => {
    const wrapper = mount(App, { attachTo: document.body, props: { state } })
    const filters = wrapper.findComponent(NcAppNavigation).get('form.library-sidebar-filters')

    window.dispatchEvent(new KeyboardEvent('keydown', { key: '/', bubbles: true, cancelable: true }))
    await wrapper.vm.$nextTick()

    expect(document.activeElement).toBe(filters.get('[data-library-quick-search]').element)
  })
  it('wraps the unchanged catalogue in the first native application shell scaffold', () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.findComponent(NcContent).exists()).toBe(true)
    expect(wrapper.findComponent(NcAppNavigation).exists()).toBe(true)
    expect(wrapper.findComponent(NcAppNavigationList).exists()).toBe(true)
    expect(wrapper.findComponent(NcAppContent).exists()).toBe(true)

    const destinations = wrapper.findAllComponents(NcAppNavigationItem)
    expect(destinations).toHaveLength(7)
    expect(destinations.map((destination) => destination.props('name'))).toEqual(['Home', 'All publications', 'Starred', 'Continue reading', 'Shelves', 'Collections', 'Review'])
    expect(destinations[0].props('href')).toBe(state.homeUrl)
    expect(destinations[1].props('href')).toBe(state.catalogueRootUrl)
    expect(destinations[1].props('active')).toBe(true)
    expect(destinations[6].props('href')).toBe(state.reviewUrl)
    expect(destinations[6].props('active')).toBe(false)

    expect(wrapper.findComponent(NcAppNavigationSettings).exists()).toBe(false)
    const settings = wrapper.find('.library-navigation-settings-link')
    expect(settings.attributes('href')).toBe('/nc/index.php/settings/user/library')
    expect(settings.text()).toContain('Settings')

    const content = wrapper.findComponent(NcAppContent)
    expect(content.find('.library-vue-catalogue').exists()).toBe(true)
    expect(content.find('.library-catalogue-workspace').exists()).toBe(true)
    expect(content.findAll('.library-workspace-panel')).toHaveLength(0)
    expect(content.text()).toContain('Example Book')

    const sidebar = wrapper.findComponent(NcAppSidebar)
    expect(sidebar.exists()).toBe(true)
    expect(sidebar.props('open')).toBe(false)
    expect(sidebar.props('noToggle')).toBe(true)
    expect(document.body.textContent).not.toContain('Open sidebar')
  })

  it('implements the catalogue shell, toolbar, card hierarchy, and selection-only batch contract', () => {
    const wrapper = mount(App, { props: { state: { ...state, smartViewCounts: { 'scanner-conflicts': 2, 'needs-metadata': 3 } } } })
    const destinations = wrapper.findAllComponents(NcAppNavigationItem)

    expect(destinations.map((item) => item.props('name'))).toEqual([
      'Home', 'All publications', 'Starred', 'Continue reading', 'Shelves', 'Collections', 'Review (5)',
    ])
    expect(wrapper.find('#library-catalogue-heading').text()).toBe('Library')
    const navigation = wrapper.findComponent(NcAppNavigation)
    expect(navigation.findAll('form.library-sidebar-filters')).toHaveLength(1)
    expect(navigation.get('#library-sidebar-filters-heading').text()).toBe('Filters')
    expect(wrapper.find('#library-catalogue form.library-sidebar-filters').exists()).toBe(false)
    expect(wrapper.find('#library-catalogue [data-library-control="sort"]').exists()).toBe(true)
    expect(wrapper.find('#library-catalogue [data-library-control="view"]').exists()).toBe(true)
    expect(navigation.find('form.library-sidebar-filters button[type="submit"]').exists()).toBe(true)
    expect(wrapper.find('.library-workspace-panel--batch').exists()).toBe(false)
    expect(wrapper.find('.library-cover-creator').text()).toBe('Ada Reader')
    expect(wrapper.findAll('.library-cover-context')).toHaveLength(1)
    expect(wrapper.find('.library-cover-context').text()).toBe('2026')
    expect(wrapper.find('.library-cover-card--open').exists()).toBe(false)
  })

  it('keeps app-internal shell destinations same-origin and correct from nested routes', () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/creators/Ada%20Reader')
    const wrapper = mount(App, { props: { state } })
    const hrefs = [
      ...wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('href')),
      wrapper.find('.library-navigation-settings-link').attributes('href'),
    ]

    expect(hrefs).toEqual([
      '/nc/index.php/apps/library/?home=1',
      '/nc/index.php/apps/library/',
      '/nc/index.php/apps/library/?starred=1',
      '/nc/index.php/apps/library/?sort=lastOpened',
      '/nc/index.php/apps/library/?shelves=1',
      '/nc/index.php/apps/library/#library-collections',
      '/nc/index.php/apps/library/?scannerConflicts=1',
      '/nc/index.php/settings/user/library',
    ])
    expect(hrefs.every((href) => href.startsWith('/') && !/^\/\//.test(href))).toBe(true)
    expect(hrefs.every((href) => !/^[a-z][a-z\d+.-]*:/i.test(href))).toBe(true)
  })

  it.each([
    ['missing', {}],
    ['malformed', { catalogueRootUrl: '/nc/%zz', reviewUrl: '/nc/%', settingsUrl: '/nc/%zz' }],
    ['absolute', { catalogueRootUrl: 'https://evil.invalid/apps/library/', reviewUrl: 'https://evil.invalid/review', settingsUrl: 'https://evil.invalid/settings' }],
    ['scheme-relative', { catalogueRootUrl: '//evil.invalid/apps/library/', reviewUrl: '//evil.invalid/review', settingsUrl: '//evil.invalid/settings' }],
    ['unsafe', { catalogueRootUrl: '/nc/index.php/apps/library/\\evil', reviewUrl: '/other/review', settingsUrl: 'javascript:alert(1)' }],
  ])('falls back to safe webroot-aware navigation for %s initial-state URLs', (_kind, urls) => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/creators/Ada')
    const wrapper = mount(App, { props: { state: { ...state, ...urls } } })
    const destinations = wrapper.findAllComponents(NcAppNavigationItem)

    expect(destinations.map((item) => item.props('href'))).toEqual([
      '/nc/index.php/apps/library/?home=1',
      '/nc/index.php/apps/library/',
      '/nc/index.php/apps/library/?starred=1',
      '/nc/index.php/apps/library/?sort=lastOpened',
      '/nc/index.php/apps/library/?shelves=1',
      '/nc/index.php/apps/library/#library-collections',
      '/nc/index.php/apps/library/?scannerConflicts=1',
    ])
    expect(wrapper.find('.library-navigation-settings-link').attributes('href')).toBe('/nc/index.php/settings/user/library')
  })

  it.each([
    ['encoded backslash', '/nc/index.php/apps/library/%5cevil'],
    ['encoded NUL', '/nc/index.php/apps/library/%00evil'],
    ['encoded dot traversal', '/nc/index.php/apps/library/%2e%2e/settings'],
    ['double-encoded backslash', '/nc/index.php/apps/library/%255cevil'],
    ['double-encoded dot traversal', '/nc/index.php/apps/library/%252e%252e/settings'],
  ])('rejects %s in initial-state navigation URLs', (_kind, unsafeUrl) => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/creators/Ada')
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          catalogueRootUrl: unsafeUrl,
          reviewUrl: unsafeUrl,
          settingsUrl: unsafeUrl,
        },
      },
    })

    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('href'))).toEqual([
      '/nc/index.php/apps/library/?home=1',
      '/nc/index.php/apps/library/',
      '/nc/index.php/apps/library/?starred=1',
      '/nc/index.php/apps/library/?sort=lastOpened',
      '/nc/index.php/apps/library/?shelves=1',
      '/nc/index.php/apps/library/#library-collections',
      '/nc/index.php/apps/library/?scannerConflicts=1',
    ])
    expect(wrapper.find('.library-navigation-settings-link').attributes('href')).toBe('/nc/index.php/settings/user/library')
  })

  it.each([
    '/nc/index.php/apps/library/Ada%20Reader',
    '/nc/index.php/apps/library/%E2%9C%93?title=Encoded%20title',
  ])('preserves legitimate encoded navigation path %s', (encodedUrl) => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/creators/Ada')
    const wrapper = mount(App, { props: { state: { ...state, catalogueRootUrl: encodedUrl } } })

    expect(wrapper.findAllComponents(NcAppNavigationItem)[1].props('href')).toBe(encodedUrl)
  })

  it.each(['publication', 'year', 'creator'])('returns from the nested %s discovery page through the generated catalogue root', (discoveryPage) => {
    window.history.replaceState({}, '', `/nc/index.php/apps/library/${discoveryPage}/nested`)
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          discoveryPage,
          discoveryTitle: 'Nested discovery fixture',
        },
      },
    })

    const backLink = wrapper.find('.library-discovery-hero .button.secondary')
    expect(backLink.text()).toBe('Back to full catalogue')
    expect(backLink.attributes('href')).toBe(state.catalogueRootUrl)
    expect(backLink.attributes('href')).not.toBe('/apps/library/')
  })

  it.each([
    ['index', undefined],
    ['publication', 'publication'],
    ['year', 'year'],
    ['creator', 'creator'],
  ])('uses root destinations and review active state from the %s route', (_route, discoveryPage) => {
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          discoveryPage,
          activeFilters: { ...state.activeFilters, scannerConflicts: '1' },
        },
      },
    })
    const destinations = wrapper.findAllComponents(NcAppNavigationItem)

    expect(destinations[1].props('href')).toBe(state.catalogueRootUrl)
    expect(destinations[1].props('active')).toBe(false)
    expect(destinations[6].props('href')).toBe(state.reviewUrl)
    expect(destinations[6].props('active')).toBe(true)
  })

  it('treats canonical weak-metadata review filters as Review and ordinary filters as Library', () => {
    const review = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, weakMetadata: 'filename' } } },
    }).findAllComponents(NcAppNavigationItem)
    const library = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, q: 'camera' } } },
    }).findAllComponents(NcAppNavigationItem)

    expect(review.map((item) => item.props('active'))).toEqual([false, false, false, false, false, false, true])
    expect(library.map((item) => item.props('active'))).toEqual([false, true, false, false, false, false, false])
  })

  it.each([
    ['scannerConflicts', '0'],
    ['needsMetadata', 'false'],
    ['coverReview', 'all'],
    ['noCreator', '0'],
    ['weakMetadata', 'bogus'],
  ])('does not activate Review or project malformed %s=%s', (key, value) => {
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, [key]: value } } },
    })

    expect(wrapper.find('.library-review-destination').exists()).toBe(false)
    expect(wrapper.find('.library-catalogue-workspace').exists()).toBe(true)
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, true, false, false, false, false, false])
    expect(wrapper.findAll('input[type="hidden"]').some((input) => input.attributes('name') === key && input.attributes('value') === value)).toBe(false)
  })

  it.each([
    ['scanner conflicts', { scannerConflicts: '1' }],
    ['weak metadata', { weakMetadata: 'filename' }],
    ['metadata errors', { status: 'metadata_error' }],
    ['missing creator', { noCreator: '1' }],
  ])('renders %s as a dedicated native Review destination', (_label, reviewFilter) => {
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, ...reviewFilter } } },
    })

    expect(wrapper.find('.library-review-destination').exists()).toBe(true)
    expect(wrapper.find('#library-review-heading').text()).toBe('Review')
    expect(wrapper.find('.library-catalogue-workspace').exists()).toBe(false)
    expect(wrapper.find('.library-view-mode-toggle').exists()).toBe(false)
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, false, false, false, false, false, true])
    expect(wrapper.find('.library-review-results').text()).toContain('Example Book')
  })

  it('keeps Review queue URLs shareable, webroot-aware and independently selectable', () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?scannerConflicts=1')
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1' } } },
    })
    const links = wrapper.findAll('.library-review-queue-link')

    expect(links.map((link) => link.attributes('href'))).toEqual([
      '/nc/index.php/apps/library/?scannerConflicts=1',
      '/nc/index.php/apps/library/?needsMetadata=1',
      '/nc/index.php/apps/library/?status=metadata_error',
      '/nc/index.php/apps/library/?coverReview=placeholder',
      '/nc/index.php/apps/library/?unreviewedImports=1',
    ])
    expect(links[0].attributes('aria-current')).toBe('page')
  })

  it('loads a clicked Review queue through the catalogue endpoint while retaining its href fallback', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, needsMetadata: '1' } }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, scannerConflicts: '1' },
    } } })
    const link = wrapper.findAll('.library-review-queue-link')[1]

    expect(link.attributes('href')).toBe('/nc/index.php/apps/library/?needsMetadata=1')
    await link.trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?needsMetadata=1',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('records Review filtering in browser history and clears stale review state from the response', async () => {
    const pushState = vi.spyOn(window.history, 'pushState')
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        activeFilters: { ...state.activeFilters, q: 'camera', scannerConflicts: '1' },
      }),
    })
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1' } } },
    })

    await wrapper.find('.library-review-filter-form input[type="search"]').setValue('camera')
    await wrapper.find('.library-review-filter-form').trigger('submit')
    await vi.waitFor(() => expect(wrapper.find('.library-review-results').text()).toContain('Example Book'))

    expect(pushState).toHaveBeenCalledWith({}, '', '?scannerConflicts=1&q=camera')
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, false, false, false, false, false, true])
  })

  it('reloads the server-backed destination on browser history traversal', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, q: 'camera' } }),
    })
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1' } } },
    })
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?q=camera')

    window.dispatchEvent(new PopStateEvent('popstate'))
    await vi.waitFor(() => expect(wrapper.find('.library-catalogue-workspace').exists()).toBe(true))

    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?q=camera', expect.objectContaining({ credentials: 'same-origin' }))
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, true, false, false, false, false, false])
  })

  it.each([
    ['scanner conflict canonical then noncanonical', '?scannerConflicts=1&scannerConflicts=0'],
    ['scanner conflict noncanonical then canonical', '?scannerConflicts=0&scannerConflicts=1'],
    ['scanner conflict duplicate canonical', '?scannerConflicts=1&scannerConflicts=1'],
    ['scanner conflict array syntax', '?scannerConflicts%5B%5D=1'],
    ['metadata error then indexed', '?status=metadata_error&status=indexed'],
    ['indexed then metadata error', '?status=indexed&status=metadata_error'],
    ['metadata error duplicate canonical', '?status=metadata_error&status=metadata_error'],
    ['metadata error array syntax', '?status%5B%5D=metadata_error'],
  ])('fail-closes repeated Review parameters during history/AJAX handling: %s', async (_label, search) => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters } }),
    })
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1' } } },
    })
    window.history.replaceState({}, '', `/nc/index.php/apps/library/${search}`)

    window.dispatchEvent(new PopStateEvent('popstate'))
    await vi.waitFor(() => expect(wrapper.find('.library-catalogue-workspace').exists()).toBe(true))

    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue', expect.objectContaining({ credentials: 'same-origin' }))
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, true, false, false, false, false, false])
    expect(wrapper.findAll('.library-filter-bar input[type="hidden"], .library-review-filter-form input[type="hidden"]')
      .some((input) => ['scannerConflicts', 'status'].includes(input.attributes('name')))).toBe(false)
  })

  it('keeps an ordinary non-Review status filter valid through history/AJAX handling', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, status: 'indexed' } }),
    })
    const wrapper = mount(App, { props: { state } })
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?status=indexed')

    window.dispatchEvent(new PopStateEvent('popstate'))
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalled())

    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?status=indexed', expect.any(Object))
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, true, false, false, false, false, false])
  })

  it('removes an active year filter chip through AJAX while preserving other filters', async () => {
    setNextcloudViewport(390)
    installMatchMedia(true)
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        activeFilters: { ...state.activeFilters, year: '', format: 'epub' },
      }),
    })
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          catalogueEndpointUrl: '/apps/library/catalogue',
          activeFilters: { ...state.activeFilters, year: '1999', format: 'epub' },
        },
      },
    })
    const yearChip = wrapper.findAll('.library-filter-chip').find((chip) => chip.text().includes('1999'))
    const tap = new MouseEvent('click', { bubbles: true, cancelable: true })

    yearChip.element.dispatchEvent(tap)
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalled())

    expect(tap.defaultPrevented).toBe(true)
    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?format=epub', expect.objectContaining({ credentials: 'same-origin' }))
    expect(global.fetch.mock.calls.map(([url]) => new URL(url, window.location.origin).searchParams.get('hydrate'))).not.toContain('1')
    await vi.waitFor(() => expect(wrapper.findAll('.library-filter-chip').some((chip) => chip.text().includes('1999'))).toBe(false))
    expect(wrapper.find('.library-filter-bar input[name="yearSearch"]').element.value).toBe('')
    expect(wrapper.find('.library-filter-bar select[name="format"]').element.value).toBe('epub')
  })

  it('persists an applied year filter from the AJAX catalogue response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        publicationYears: ['1999'],
        activeFilters: { ...state.activeFilters, year: '1999', type: 'book' },
      }),
    })
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          catalogueEndpointUrl: '/apps/library/catalogue',
          publicationYears: ['1999'],
          publicationTypes: ['book'],
        },
      },
    })

    await wrapper.find('.library-filter-bar input[name="yearSearch"]').setValue('1999')
    await wrapper.find('.library-filter-bar select[name="type"]').setValue('book')
    await wrapper.find('.library-filter-bar').trigger('submit')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalled())

    expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?type=book&year=1999', expect.objectContaining({ credentials: 'same-origin' }))
    await vi.waitFor(() => expect(wrapper.find('.library-filter-bar input[name="yearSearch"]').element.value).toBe('1999'))
    expect(wrapper.findAll('.library-filter-chip').some((chip) => chip.text().includes('1999'))).toBe(true)
  })

  it('renders a capped publication typeahead instead of a publication select', async () => {
    const publications = Array.from({ length: 40 }, (_, index) => `Series ${String(index + 1).padStart(2, '0')}`)
    const wrapper = mount(App, { props: { state: { ...state, publications, publicationSummaries: [{ publication: 'Series 01', itemCount: 2 }] } } })

    expect(wrapper.find('select[name="publication"]').exists()).toBe(false)
    expect(wrapper.find('input[name="publicationSearch"]').exists()).toBe(true)
    expect(wrapper.find('.library-periodical-groups').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('Choose series')
    expect(wrapper.find('input[type="hidden"][name="publication"]').exists()).toBe(true)
    await wrapper.get('input[name="publicationSearch"]').trigger('focus')
    expect(wrapper.findAll('.library-publication-suggestion')).toHaveLength(20)
  })

  it('filters publication suggestions and applies a selected exact value through AJAX', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        ...state,
        publications: ['Nature Weekly', 'Nature World'],
        activeFilters: { ...state.activeFilters, publication: 'Nature Weekly' },
      }),
    })
    const wrapper = mount(App, {
      props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue', publications: ['Science Today', 'Nature Weekly', 'Nature World'] } },
    })

    const search = wrapper.get('input[name="publicationSearch"]')
    await search.trigger('focus')
    await search.setValue('weekly')
    expect(wrapper.findAll('.library-publication-suggestion').map((candidate) => candidate.text())).toEqual(['Nature Weekly'])
    await wrapper.get('.library-publication-suggestion').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith('/apps/library/catalogue?publication=Nature+Weekly', expect.objectContaining({ credentials: 'same-origin' })))
    await vi.waitFor(() => expect(wrapper.findAll('.library-filter-chip').some((chip) => chip.text().includes('Nature Weekly'))).toBe(true))
    expect(wrapper.get('input[type="hidden"][name="publication"]').element.value).toBe('Nature Weekly')
    expect(search.element.value).toBe('Nature Weekly')
  })

  it('fetches remote publication suggestions outside the seed and applies one through AJAX', async () => {
    global.fetch = vi.fn().mockImplementation(async (url) => {
      if (String(url).startsWith('/apps/library/catalogue/publication-suggestions')) {
        return { ok: true, json: async () => ({ publications: ['Zzz Remote Quarterly'] }) }
      }
      return {
        ok: true,
        json: async () => ({
          ...state,
          publications: ['Local Seed'],
          activeFilters: { ...state.activeFilters, publication: 'Zzz Remote Quarterly', year: '1999' },
        }),
      }
    })
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          catalogueEndpointUrl: '/apps/library/catalogue',
          publicationSuggestionsUrl: '/apps/library/catalogue/publication-suggestions',
          publications: ['Local Seed'],
          publicationYears: ['1999'],
          activeFilters: { ...state.activeFilters, publication: 'Old Selected Series', year: '1999' },
        },
      },
    })

    const search = wrapper.get('input[name="publicationSearch"]')
    await search.trigger('focus')
    await search.setValue('zzz remote')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue/publication-suggestions?year=1999&publicationSearch=zzz+remote',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(global.fetch.mock.calls.filter(([url]) => /^\/apps\/library\/catalogue(?:\?|$)/.test(String(url)))).toHaveLength(0)
    await vi.waitFor(() => expect(wrapper.findAll('.library-publication-suggestion').map((candidate) => candidate.text())).toEqual(['Zzz Remote Quarterly']))
    await wrapper.get('.library-publication-suggestion').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?publication=Zzz+Remote+Quarterly&year=1999',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('renders creator and year as typeaheads without legacy shortcut pick lists', () => {
    const wrapper = mount(App, { props: { state: { ...state, creators: ['Ada Reader'], publicationYears: ['1999'] } } })

    for (const facet of ['creator', 'year']) {
      expect(wrapper.find(`select[name="${facet}"]`).exists()).toBe(false)
      expect(wrapper.find(`input[name="${facet}Search"]`).exists()).toBe(true)
      expect(wrapper.find(`input[type="hidden"][name="${facet}"]`).exists()).toBe(true)
    }
    expect(wrapper.text()).not.toContain('Choose creator')
    expect(wrapper.text()).not.toContain('Choose year')
    expect(wrapper.find('.library-creator-groups').exists()).toBe(false)
    expect(wrapper.find('.library-year-groups').exists()).toBe(false)
  })

  it.each([
    ['creator', 'Ada Remote', '1999', 'creators'],
    ['publisher', 'Canonical Press', 'Ada Reader', 'publishers'],
    ['year', '1984', 'Ada Reader', 'years'],
  ])('fetches remote %s suggestions with its own canonical key omitted and applies the selection', async (facet, suggestion, otherValue, payloadKey) => {
    const ownUrl = `/apps/library/catalogue/${facet}-suggestions`
    const otherFacet = facet === 'creator' ? 'year' : 'creator'
    global.fetch = vi.fn().mockImplementation(async (url) => {
      if (String(url).startsWith(ownUrl)) return { ok: true, json: async () => ({ [payloadKey]: [suggestion] }) }
      return { ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, [facet]: suggestion, [otherFacet]: otherValue } }) }
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      [`${facet}SuggestionsUrl`]: ownUrl,
      activeFilters: { ...state.activeFilters, [facet]: `Old ${facet}`, [otherFacet]: otherValue },
    } } })

    const search = wrapper.get(`input[name="${facet}Search"]`)
    const query = suggestion.slice(0, 4).trim()
    await search.trigger('focus')
    await search.setValue(query)
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      `${ownUrl}?${otherFacet}=${encodeURIComponent(otherValue).replace('%20', '+')}&${facet}Search=${encodeURIComponent(query).replace('%20', '+')}`,
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(global.fetch.mock.calls.filter(([url]) => /^\/apps\/library\/catalogue(?:\?|$)/.test(String(url)))).toHaveLength(0)
    expect(global.fetch.mock.calls.find(([url]) => String(url).startsWith(ownUrl))[0]).not.toContain(`${facet}=`)
    await vi.waitFor(() => expect(wrapper.findAll(`.library-${facet}-suggestion`).map((candidate) => candidate.text())).toEqual([suggestion]))
    await wrapper.get(`.library-${facet}-suggestion`).trigger('click')

    const expectedQuery = facet === 'creator'
      ? `year=1999&creator=${encodeURIComponent(suggestion).replace('%20', '+')}`
      : facet === 'publisher'
        ? `publisher=${encodeURIComponent(suggestion).replace('%20', '+')}&creator=${encodeURIComponent(otherValue).replace('%20', '+')}`
        : `year=${suggestion}&creator=${encodeURIComponent(otherValue).replace('%20', '+')}`
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      `/apps/library/catalogue?${expectedQuery}`,
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    const catalogueCall = global.fetch.mock.calls.find(([url]) => String(url).startsWith('/apps/library/catalogue?'))[0]
    expect(catalogueCall).not.toContain(`${facet}Search`)
  })

  it('offers folder paths after three characters and applies the exact selected folder', async () => {
    const folder = '/Calibre/Ada Lovelace'
    global.fetch = vi.fn().mockImplementation(async (url) => {
      if (String(url).startsWith('/apps/library/catalogue/folder-suggestions')) return { ok: true, json: async () => ({ folders: [folder] }) }
      return { ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, folder } }) }
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      folderSuggestionsUrl: '/apps/library/catalogue/folder-suggestions',
      activeFilters: { ...state.activeFilters, creator: 'Ada Reader' },
    } } })

    const search = wrapper.get('input[name="folderSearch"]')
    await search.trigger('focus')
    await search.setValue('/C')
    await new Promise((resolve) => window.setTimeout(resolve, 250))
    expect(global.fetch).not.toHaveBeenCalled()

    await search.setValue('/Cal')
    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue/folder-suggestions?creator=Ada+Reader&folderSearch=%2FCal',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    await vi.waitFor(() => expect(wrapper.get('.library-folder-suggestion').text()).toBe(folder))
    await wrapper.get('.library-folder-suggestion').trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledWith(
      '/apps/library/catalogue?folder=%2FCalibre%2FAda+Lovelace&creator=Ada+Reader',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
    expect(wrapper.get('input[type="hidden"][name="folder"]').element.value).toBe(folder)
  })

  it.each([
    ['Review to Library', { scannerConflicts: '1' }, '?q=camera'],
    ['Library to Review', { q: 'camera' }, '?scannerConflicts=1'],
  ])('full-navigates the current history URL when %s popstate fails', async (_label, initialFilters, targetSearch) => {
    const submit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(() => {})
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 503 })
    mount(App, { props: { state: { ...state, activeFilters: { ...state.activeFilters, ...initialFilters } } } })
    window.history.replaceState({}, '', `/nc/index.php/apps/library/${targetSearch}`)

    window.dispatchEvent(new PopStateEvent('popstate'))
    await vi.waitFor(() => expect(submit).toHaveBeenCalledOnce())

    const fallback = submit.mock.instances[0]
    expect(fallback.action).toBe('http://localhost:3000/nc/index.php/apps/library/')
    expect(Array.from(new FormData(fallback).entries())).toEqual(Array.from(new URLSearchParams(targetSearch).entries()))
  })

  it.each([
    ['network failure', () => Promise.reject(new TypeError('offline'))],
    ['invalid JSON', () => Promise.resolve({ ok: true, json: async () => { throw new SyntaxError('bad json') } })],
  ])('full-navigates the captured popstate destination after %s', async (_label, response) => {
    const submit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(() => {})
    global.fetch = vi.fn(response)
    mount(App, { props: { state } })
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?scannerConflicts=1')

    window.dispatchEvent(new PopStateEvent('popstate'))
    await vi.waitFor(() => expect(submit).toHaveBeenCalledOnce())
    expect(new FormData(submit.mock.instances[0]).get('scannerConflicts')).toBe('1')
  })

  it('ignores stale raced responses and aborts the superseded request without fallback', async () => {
    const requests = []
    global.fetch = vi.fn((_url, options) => new Promise((resolve, reject) => {
      requests.push({ resolve, reject, signal: options.signal })
      options.signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')))
    }))
    const submit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(() => {})
    const wrapper = mount(App, { props: { state } })

    await wrapper.find('input[type="search"]').setValue('first')
    await wrapper.find('.library-filter-bar').trigger('submit')
    await wrapper.find('input[type="search"]').setValue('second')
    await wrapper.find('.library-filter-bar').trigger('submit')
    expect(requests[0].signal.aborted).toBe(true)
    requests[1].resolve({ ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, q: 'second' } }) })
    await vi.waitFor(() => expect(wrapper.find('input[type="search"]').element.value).toBe('second'))
    expect(submit).not.toHaveBeenCalled()
  })

  it('gives Review explicit loading, error and empty-state contracts', async () => {
    let resolveRequest
    global.fetch = vi.fn(() => new Promise((resolve) => { resolveRequest = resolve }))
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          items: [],
          cataloguePagination: { ...state.cataloguePagination, total: 0, visible: 0, from: 0, to: 0 },
          activeFilters: { ...state.activeFilters, scannerConflicts: '1' },
        },
      },
    })

    expect(wrapper.find('.library-review-empty').attributes('role')).toBe('status')
    await wrapper.find('.library-review-filter-form').trigger('submit')
    expect(wrapper.find('.library-review-request-status').attributes('aria-busy')).toBe('true')
    resolveRequest({ ok: false, status: 503 })
    await vi.waitFor(() => expect(wrapper.find('.library-review-request-error').exists()).toBe(true))
    expect(wrapper.find('.library-review-request-error').attributes('role')).toBe('alert')
    expect(wrapper.find('.library-review-empty').exists()).toBe(false)
    expect(wrapper.find('.library-review-request-status').attributes('aria-busy')).toBe('false')
  })

  it('keeps filters in navigation and result controls between the catalogue heading and covers', () => {
    const wrapper = mount(App, {
      props: {
        state: {
          ...state,
          metadataSidecarManifestUrl: '/apps/library/export/sidecars/manifest',
          metadataSidecarBundleUrl: '/apps/library/export/sidecars.zip',
          publicationSummaries: [{ publication: 'Science of Everything', itemCount: 42 }],
          publicationYears: ['2026'],
          creators: ['Ada Reader'],
          activeFilters: { ...state.activeFilters, shelf: 'Books' },
        },
      },
    })

    expect(wrapper.find('#library-catalogue-heading').text()).toBe('Library')
    expect(wrapper.text()).not.toContain('One catalogue workspace for finding, browsing, acting on and reviewing publication files.')
    expect(wrapper.text()).not.toContain('Compact / Gallery / Shelf')
    expect(wrapper.text()).not.toContain('Browse as a shelf/gallery first')

    const workspace = wrapper.find('.library-catalogue-workspace')
    expect(workspace.exists()).toBe(true)
    expect(workspace.findAll(':scope > details.library-workspace-panel')).toHaveLength(0)
    expect(wrapper.findComponent(NcAppNavigation).find('form.library-sidebar-filters').exists()).toBe(true)
    expect(wrapper.find('#library-catalogue form.library-sidebar-filters').exists()).toBe(false)
    expect(workspace.text()).not.toContain('Search, sort and filters narrow the current result set')
    expect(workspace.text()).not.toContain('Search also checks descriptions')
    expect(workspace.text()).not.toContain('changed / unchanged / skipped / error feedback')
    expect(workspace.text()).not.toContain('Source files stay in Nextcloud Files')
    expect(wrapper.find('.library-quick-filter-search').attributes('title')).toContain('Search also checks descriptions')

    const heading = wrapper.find('#library-catalogue-heading')
    expect(heading.text()).toBe('Library')
    const headingBeforeWorkspace = heading.element.compareDocumentPosition(workspace.element)
    expect(Boolean(headingBeforeWorkspace & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
    const workspaceTop = workspace.element.compareDocumentPosition(wrapper.find('.library-cover-gallery').element)
    expect(Boolean(workspaceTop & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
  })

  it('keeps explanatory help in hover labels instead of always-visible prose', () => {
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

    const visibleAntiPatterns = [
      'Search, sort and filters narrow the current result set',
      'Search also checks descriptions',
      'Shortcuts reopen ordinary catalogue views',
      'Fast entry points keep browsing visual',
      'Batch actions for selected publications',
      'Batch actions for selected publications',
      'Batch actions for selected publications',
      'Review cards compare current values',
      'Maintain roots, scans, exports and repair operations',
      'Cached metadata overview loads quickly',
    ]
    for (const phrase of visibleAntiPatterns) {
      expect(wrapper.text()).not.toContain(phrase)
    }

    const filters = wrapper.findComponent(NcAppNavigation).get('form.library-sidebar-filters')
    expect(filters.attributes('aria-label')).toBe('Catalogue search and filters')
    expect(wrapper.find('#library-catalogue .library-workspace-panel--refine').exists()).toBe(false)
    expect(wrapper.find('.library-quick-filter-search').attributes('title')).toContain('Search also checks descriptions')
    expect(wrapper.find('.library-workspace-panel--batch').exists()).toBe(false)
    expect(wrapper.find('.library-workspace-panel--admin').exists()).toBe(false)
    expect(wrapper.find('.library-review-queues').exists()).toBe(false)
  })

  it('renders the result controls below the Library heading', () => {
    const wrapper = mount(App, { props: { state } })

    const workspace = wrapper.find('.library-catalogue-workspace')
    const heading = wrapper.find('#library-catalogue-heading')
    expect(workspace.classes()).toContain('library-workspace-menubar')
    expect(heading.text()).toBe('Library')
    const headingBeforeWorkspace = heading.element.compareDocumentPosition(workspace.element)
    expect(Boolean(headingBeforeWorkspace & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
    const headerBeforeCovers = heading.element.compareDocumentPosition(wrapper.find('.library-cover-gallery').element)
    expect(Boolean(headerBeforeCovers & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
  })

  it('gives navigation filters a direct form identity and exposes a catalogue mobile filter panel', () => {
    const wrapper = mount(App, { props: { state } })
    const navigation = wrapper.findComponent(NcAppNavigation)

    expect(navigation.findAll('form.library-sidebar-filters')).toHaveLength(1)
    expect(navigation.find('details').exists()).toBe(false)
    expect(wrapper.find('#library-catalogue [data-library-control="filter"]').exists()).toBe(true)
  })

  it('renders the catalogue from Nextcloud initial state', () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.text()).toContain('Library')
    expect(wrapper.text()).not.toContain('Publication catalogue')
    expect(wrapper.text()).toContain('Example Book')
    expect(wrapper.find('.library-cover-creator').text()).toBe('Ada Reader')
    expect(wrapper.find('.library-cover-context').text()).toBe('2026')
    expect(wrapper.find('.library-cover-detail-chip').exists()).toBe(false)
    expect(wrapper.find('.library-cover-badge').exists()).toBe(false)
    expect(wrapper.find('.library-cover-read').exists()).toBe(false)
    expect(wrapper.find('.library-cover-primary-actions').exists()).toBe(false)
    expect(wrapper.findAll('.library-cover-card')).toHaveLength(1)
    expect(wrapper.find('.library-cover-image').attributes('src')).toBe('/apps/library/items/7/cover')
    expect(wrapper.find('.library-cover-link').attributes('type')).toBe('button')
    const starForm = wrapper.find('form.library-cover-star-form')
    expect(starForm.exists()).toBe(true)
    expect(starForm.attributes('action')).toBe('/apps/library/items/7/star')
    expect(starForm.find('input[name="requesttoken"]').element.value).toBe('test-token')
    expect(starForm.find('input[name="starred"]').element.value).toBe('1')
    expect(starForm.find('.library-cover-star-button').text()).toBe('☆')
    expect(wrapper.text()).toContain('Details')
    expect(wrapper.findComponent(NcAppNavigation).find('form.library-sidebar-filters').exists()).toBe(true)
    expect(wrapper.find('#library-catalogue .library-workspace-panel--refine').exists()).toBe(false)
    expect(wrapper.find('.library-workspace-panel--browse').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('Export corrected metadata')
  })

  it('renders view=list as metadata rows with open and details actions instead of cover cards', async () => {
    const wrapper = mount(App, { props: { state: { ...state, activeFilters: { ...state.activeFilters, view: 'list' } } } })

    expect(wrapper.find('[data-library-catalogue-list]').exists()).toBe(true)
    expect(wrapper.findAll('.library-catalogue-list-row')).toHaveLength(1)
    expect(wrapper.find('.library-cover-gallery').exists()).toBe(false)
    expect(wrapper.find('.library-cover-card').exists()).toBe(false)
    expect(wrapper.find('.library-catalogue-list-row').text()).toContain('Ada Reader')
    expect(wrapper.find('.library-catalogue-list-row').text()).toContain('2026')
    expect(wrapper.find('.library-catalogue-list-row').text()).toContain('EPUB')
    expect(wrapper.find('.library-catalogue-list-actions a').attributes('href')).toBe('/f/178')
    expect(wrapper.find('.library-catalogue-list-actions button').text()).toBe('Details')
  })

  it.each(['list', 'gallery', 'shelf'])('immediately loads view=%s through the catalogue endpoint and preserves filters', async (view) => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ...state, activeFilters: { ...state.activeFilters, type: 'book', q: 'camera', view } }),
    })
    const wrapper = mount(App, { props: { state: {
      ...state,
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, type: 'book', q: 'camera' },
    } } })

    await wrapper.get(`[data-library-view-mode="${view}"]`).trigger('click')

    await vi.waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
    const [requestUrl, requestOptions] = global.fetch.mock.calls[0]
    const request = new URL(requestUrl, window.location.origin)
    expect(request.pathname).toBe('/apps/library/catalogue')
    expect(Object.fromEntries(request.searchParams)).toEqual({ q: 'camera', type: 'book', view })
    expect(requestOptions).toEqual(expect.objectContaining({ credentials: 'same-origin' }))
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

  it('ignores rapid catalogue star clicks while saving and reports a failure', async () => {
    let rejectRequest
    const fetchSpy = vi.fn(() => new Promise((_resolve, reject) => { rejectRequest = reject }))
    globalThis.fetch = fetchSpy
    const wrapper = mount(App, { props: { state } })
    const button = wrapper.find('.library-cover-star-button')

    await button.trigger('click')
    await button.trigger('click')
    expect(fetchSpy).toHaveBeenCalledTimes(1)
    expect(button.attributes('disabled')).toBeDefined()
    rejectRequest(new Error('offline'))
    await Promise.resolve()
    await wrapper.vm.$nextTick()

    expect(button.attributes('disabled')).toBeUndefined()
    expect(button.text()).toBe('☆')
    expect(wrapper.find('[data-library-star-error="7"]').attributes('role')).toBe('alert')
    expect(wrapper.text()).toContain('Could not update star. Try again.')
  })

  it('only applies the latest catalogue response and aborts superseded requests', async () => {
    const requests = []
    globalThis.fetch = vi.fn((_url, options) => new Promise((resolve) => requests.push({ resolve, options })))
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const form = wrapper.find('form.library-sidebar-filters')

    await form.find('input[name="q"]').setValue('first')
    await form.trigger('submit')
    await vi.waitFor(() => expect(requests).toHaveLength(1))
    await form.find('input[name="q"]').setValue('latest')
    await form.trigger('submit')
    await vi.waitFor(() => expect(requests).toHaveLength(2))

    expect(requests[0].options.signal).toBeInstanceOf(AbortSignal)
    expect(requests[0].options.signal.aborted).toBe(true)
    requests[1].resolve({ ok: true, json: async () => ({ ...state, items: [{ ...state.items[0], title: 'Latest result' }], activeFilters: { ...state.activeFilters, q: 'latest' } }) })
    await Promise.resolve()
    await Promise.resolve()
    requests[0].resolve({ ok: true, json: async () => ({ ...state, items: [{ ...state.items[0], title: 'Stale result' }], activeFilters: { ...state.activeFilters, q: 'first' } }) })
    await Promise.resolve()
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Latest result')
    expect(wrapper.text()).not.toContain('Stale result')
  })

  it('keeps typed search as a draft until the user submits it', async () => {
    const requests = []
    globalThis.fetch = vi.fn((_url, options) => new Promise((resolve) => requests.push({ resolve, options })))
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const input = wrapper.find('form.library-sidebar-filters input[name="q"]')
    const form = wrapper.find('form.library-sidebar-filters')

    await input.setValue('first')
    await form.trigger('submit')
    await vi.waitFor(() => expect(requests).toHaveLength(1))

    requests[0].resolve({ ok: true, json: async () => ({ ...state, items: [{ ...state.items[0], title: 'First result' }], activeFilters: { ...state.activeFilters, q: 'first' } }) })
    await Promise.resolve()
    await wrapper.vm.$nextTick()

    await input.setValue('latest')
    expect(input.element.value).toBe('latest')
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
    await form.trigger('submit')
    await vi.waitFor(() => expect(globalThis.fetch).toHaveBeenCalledTimes(2))
    expect(globalThis.fetch.mock.calls[1][0]).toContain('q=latest')
    requests[1].resolve({ ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, q: 'latest' } }) })
    await Promise.resolve()
    await wrapper.vm.$nextTick()
  })

  it('falls back with the failed request snapshot while preserving newer controls', async () => {
    let rejectRequest
    globalThis.fetch = vi.fn(() => new Promise((_resolve, reject) => { rejectRequest = reject }))
    const submitted = []
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(function () {
      submitted.push(Object.fromEntries(new FormData(this)))
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const input = wrapper.find('form.library-sidebar-filters input[name="q"]')
    const form = wrapper.find('form.library-sidebar-filters')

    await input.setValue('first')
    await form.trigger('submit')
    await vi.waitFor(() => expect(rejectRequest).toBeTypeOf('function'))
    input.element.value = 'latest'
    rejectRequest(new Error('network down'))
    await Promise.resolve()
    await Promise.resolve()

    expect(input.element.value).toBe('latest')
    expect(submitted).toEqual([{ q: 'first' }])
    nativeSubmit.mockRestore()
  })

  it('falls back on a current catalogue rejection and aborts it on unmount', async () => {
    let rejectRequest
    let requestOptions
    globalThis.fetch = vi.fn((_url, options) => {
      requestOptions = options
      return new Promise((_resolve, reject) => { rejectRequest = reject })
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const form = wrapper.find('form.library-sidebar-filters')
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(() => {})

    await form.trigger('submit')
    await Promise.resolve()
    rejectRequest(new Error('network down'))
    await Promise.resolve()
    await Promise.resolve()
    expect(nativeSubmit).toHaveBeenCalledTimes(1)

    void form.trigger('submit')
    await Promise.resolve()
    wrapper.unmount()
    expect(requestOptions.signal.aborted).toBe(true)
    expect(nativeSubmit).toHaveBeenCalledTimes(1)
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
    expect(fetchSpy).toHaveBeenCalledWith('/apps/library/catalogue', expect.objectContaining({
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

  it('keeps catalogue filters out of the content workspace so the cover shelf stays central', () => {
    const wrapper = mount(App, { props: { state } })

    const workspace = wrapper.find('.library-catalogue-workspace')
    expect(workspace.exists()).toBe(true)
    expect(workspace.element.tagName).toBe('NAV')

    expect(workspace.find('.library-workspace-panel--refine').exists()).toBe(false)
    expect(wrapper.findComponent(NcAppNavigation).find('form.library-sidebar-filters').exists()).toBe(true)
    expect(workspace.find('.library-workspace-panel--browse').exists()).toBe(false)
    expect(workspace.find('.library-workspace-panel--review').exists()).toBe(false)
    expect(workspace.find('.library-workspace-panel--admin').exists()).toBe(false)

    const toolsBeforeCovers = workspace.element.compareDocumentPosition(wrapper.find('.library-cover-gallery').element)
    expect(Boolean(toolsBeforeCovers & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
  })

  it('opens an in-page details drawer from cover cards', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.findComponent(NcAppSidebar).props('open')).toBe(false)

    await wrapper.find('.library-cover-link').trigger('click')

    await waitForSidebarEvent(wrapper, 'opened')
    expect(wrapper.findComponent(NcAppSidebar).props('open')).toBe(true)
    expect(wrapper.get('.library-cover-card').classes()).toContain('library-cover-card--open')
    expect(wrapper.get('.library-cover-link').attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('.library-sidebar-content').text()).toContain('Example Book')
    expect(wrapper.find('.library-sidebar-content').text()).toContain('Overview')
    expect(wrapper.find('.library-sidebar-publication-header').exists()).toBe(true)
    expect(window.location.search).toContain('item=7')
  })

  it('turns drawer metadata facts into catalogue filter links', async () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?format=epub&page=3')
    const item = {
      ...state.items[0],
      publication: 'Viscount of Adrilankha',
      publicationDate: '2004-04-15',
      publisher: 'Tom Doherty Associates',
      language: 'eng; de',
    }
    globalThis.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ item }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ ...state, activeFilters: { ...state.activeFilters, format: 'epub', language: 'de' } }) })
    const wrapper = mount(App, { props: { state: {
      ...state,
      items: [item],
      catalogueEndpointUrl: '/apps/library/catalogue',
      activeFilters: { ...state.activeFilters, format: 'epub' },
    } } })

    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')

    const links = wrapper.findAll('.library-detail-facet-link')
    const hrefs = links.map((link) => link.attributes('href'))
    expect(hrefs).toContain('/nc/index.php/apps/library/?format=epub&publication=Viscount+of+Adrilankha')
    expect(hrefs).toContain('/nc/index.php/apps/library/?format=epub&year=2004')
    expect(hrefs).toContain('/nc/index.php/apps/library/?format=epub&publisher=Tom+Doherty+Associates')
    expect(hrefs).toContain('/nc/index.php/apps/library/?format=epub&language=eng')
    expect(hrefs).toContain('/nc/index.php/apps/library/?format=epub&language=de')
    expect(hrefs.join(' ')).not.toContain('page=3')

    await links.find((link) => link.text() === 'de').trigger('click')
    await vi.waitFor(() => expect(globalThis.fetch).toHaveBeenLastCalledWith(
      '/apps/library/catalogue?format=epub&language=de',
      expect.objectContaining({ credentials: 'same-origin' }),
    ))
  })

  it('normalizes HTML-ish descriptions in the details drawer without rendering raw HTML', async () => {
    const item = {
      ...state.items[0],
      description: '&lt;p&gt;Meet &lt;em&gt;Anita&lt;/em&gt;&amp;nbsp;Blake.&lt;/p&gt;&lt;p&gt;Second&lt;br/&gt;line.&lt;/p&gt;&lt;script&gt;alert(1)&lt;/script&gt;',
    }
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item }) }))
    const wrapper = mount(App, { props: { state: { ...state, items: [item] } } })

    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')

    const description = wrapper.get('.library-sidebar-description')
    expect(description.text()).toBe('Meet Anita Blake.\n\nSecond\nline.')
    expect(description.html()).not.toContain('<p>')
    expect(description.html()).not.toContain('<em>')
    expect(description.html()).not.toContain('alert(1)')
  })

  it('marks selected cards independently from the opened publication', async () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/')
    const wrapper = mount(App, { props: { state } })

    await wrapper.get('.library-item-selection input').setValue(true)

    expect(wrapper.get('.library-cover-card').classes()).toContain('library-cover-card--selected')
    expect(wrapper.get('.library-cover-card').classes()).not.toContain('library-cover-card--open')
    expect(wrapper.find('.library-cover-badge').exists()).toBe(false)
    expect(wrapper.get('.library-cover-context').text()).toBe('2026')
  })

  it('keeps Open primary and groups file and legacy maintenance actions', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state } })

    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')

    const actions = wrapper.get('.library-detail-drawer-actions')
    const primary = actions.get('a')
    expect(primary.text()).toBe('Open')
    expect(primary.attributes('href')).toBe(state.items[0].openUrl)
    expect(primary.classes()).toEqual(expect.arrayContaining(['button', 'primary']))
    expect(actions.find('button').exists()).toBe(true)
  })

  it('makes Overview, Metadata, and Activity canonical sidebar sections', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state } })
    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')

    const sectionButtons = wrapper.findAll('.library-sidebar-sections button')
    expect(sectionButtons.map((button) => button.text())).toEqual(['Overview', 'Metadata', 'Activity'])
    await sectionButtons[1].trigger('click')
    expect(wrapper.find('.library-sidebar-metadata-form').exists()).toBe(true)
    expect(wrapper.find('.library-sidebar-review').text()).toContain('Scanner suggestions')
    expect(wrapper.find('.library-sidebar-review').text()).toContain('Suggestion: Scanner Title')
  })

  it('links the Activity file path through the canonical open URL and preserves empty-url fallback text', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state } })
    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    await wrapper.findAll('.library-sidebar-sections button')[2].trigger('click')

    const fileValue = wrapper.get('.library-detail-drawer-file')
    expect(fileValue.text()).toBe(state.items[0].cachedPath)
    expect(fileValue.get('a').attributes('href')).toBe(state.items[0].openUrl)

    const itemWithoutOpenUrl = { ...state.items[0], openUrl: '' }
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: itemWithoutOpenUrl }) }))
    await wrapper.find('.app-sidebar__close').trigger('click')
    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened', 2)
    await wrapper.findAll('.library-sidebar-sections button')[2].trigger('click')

    const fallbackValue = wrapper.get('.library-detail-drawer-file')
    expect(fallbackValue.text()).toBe(itemWithoutOpenUrl.cachedPath)
    expect(fallbackValue.find('a').exists()).toBe(false)
  })

  it.each([
    ['2011-09-18T22:00:00+00:00', '2011-09-18'],
    ['2011-09-18T23:30:00-11:00', '2011-09-18'],
  ])('renders and submits stored ISO publication dates as their calendar date for %s', async (storedDate, expectedDate) => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/')
    const item = { ...state.items[0], publicationDate: storedDate }
    globalThis.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ item }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ saved: true }) })
    const wrapper = mount(App, { props: { state: { ...state, items: [item] } } })

    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    expect(wrapper.find('.library-detail-drawer-facts').text()).toContain(expectedDate)
    expect(wrapper.find('.library-detail-drawer-facts').text()).not.toContain('T23:30:00')

    await wrapper.findAll('.library-sidebar-sections button')[1].trigger('click')
    const dateInput = wrapper.get('input[name="publicationDate"]')
    expect(dateInput.element.value).toBe(expectedDate)
    await wrapper.get('.library-sidebar-metadata-form').trigger('submit')
    await vi.waitFor(() => expect(globalThis.fetch).toHaveBeenCalledTimes(2))
    const submitted = globalThis.fetch.mock.calls[1][1].body
    expect(submitted.get('publicationDate')).toBe(expectedDate)
  })

  it('accepts and clears an empty publication date without rendering placeholder text', async () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/')
    const item = { ...state.items[0], publicationDate: '' }
    globalThis.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ item }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ saved: true }) })
    const wrapper = mount(App, { props: { state: { ...state, items: [item] } } })

    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    expect(wrapper.find('.library-detail-drawer-facts').text()).not.toContain('Date')
    await wrapper.findAll('.library-sidebar-sections button')[1].trigger('click')
    expect(wrapper.get('input[name="publicationDate"]').element.value).toBe('')
    await wrapper.get('.library-sidebar-metadata-form').trigger('submit')
    await vi.waitFor(() => expect(globalThis.fetch).toHaveBeenCalledTimes(2))
    expect(globalThis.fetch.mock.calls[1][1].body.get('publicationDate')).toBe('')
    expect(wrapper.text()).toContain('Metadata saved.')
  })

  it('moves focus into the drawer and restores each activating control on Escape and close', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    const opener = wrapper.find('.library-cover-link')
    opener.element.focus()
    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    expect(document.activeElement).toBe(wrapper.find('#library-detail-drawer-heading').element)

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await waitForSidebarEvent(wrapper, 'closed')
    expect(document.activeElement).toBe(opener.element)

    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened', 2)
    expect(document.activeElement).toBe(wrapper.find('#library-detail-drawer-heading').element)
    await wrapper.find('.app-sidebar__close').trigger('click')
    await waitForSidebarEvent(wrapper, 'closed', 2)
    expect(document.activeElement).toBe(opener.element)
  })

  it('wins the real persistent-sidebar close lifecycle and cancels stale opener restores', async () => {
    document.body.innerHTML = '<button id="persistent-focus">Persistent mount focus</button><div id="skip-actions"></div>'
    const persistentFocus = document.querySelector('#persistent-focus')
    persistentFocus.focus()
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    const sidebar = wrapper.findComponent(NcAppSidebar)
    const opener = wrapper.find('.library-cover-link')

    opener.element.focus()
    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()
    sidebar.vm.onAfterLeave(sidebar.element)
    expect(document.activeElement).toBe(persistentFocus)
    await new Promise((resolve) => window.requestAnimationFrame(resolve))
    expect(document.activeElement).toBe(opener.element)

    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened', 2)
    await wrapper.find('.app-sidebar__close').trigger('click')
    await wrapper.vm.$nextTick()
    sidebar.vm.onAfterLeave(sidebar.element)
    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened', 3)
    await new Promise((resolve) => window.requestAnimationFrame(resolve))
    expect(document.activeElement).toBe(wrapper.find('#library-detail-drawer-heading').element)

    await wrapper.find('.app-sidebar__close').trigger('click')
    await wrapper.vm.$nextTick()
    sidebar.vm.onAfterLeave(sidebar.element)
    opener.element.remove()
    await new Promise((resolve) => window.requestAnimationFrame(resolve))
    expect(document.activeElement).not.toBe(opener.element)
  })

  it('cancels a queued opener restoration when the app unmounts', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    const sidebar = wrapper.findComponent(NcAppSidebar)
    const opener = wrapper.find('.library-cover-link')
    const focus = vi.spyOn(opener.element, 'focus')
    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    await wrapper.find('.app-sidebar__close').trigger('click')
    await wrapper.vm.$nextTick()
    sidebar.vm.onAfterLeave(sidebar.element)
    focus.mockClear()
    wrapper.unmount()
    await new Promise((resolve) => window.requestAnimationFrame(resolve))
    expect(focus).not.toHaveBeenCalled()
  })

  it('gives the mobile sidebar a named modal dialog and lets its native trap own settled focus and Tab containment', async () => {
    mediaQuery.setMatches(true)
    setNextcloudViewport(480)
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    await wrapper.find('.library-cover-link').trigger('click')
    const sidebar = wrapper.find('.library-native-item-sidebar')
    await waitForSidebarEvent(wrapper, 'opened')
    expect(sidebar.attributes('role')).toBe('dialog')
    expect(sidebar.attributes('aria-modal')).toBe('true')
    expect(sidebar.attributes('aria-labelledby')).toBe('library-detail-drawer-heading')
    expect(wrapper.find('#library-detail-drawer-heading').text()).toBe('Example Book')
    expect(document.activeElement).toBe(sidebar.find('.app-sidebar__close').element)

    const focusable = [...sidebar.element.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    focusable.at(-1).focus()
    focusable.at(-1).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }))
    await vi.waitFor(() => expect(document.activeElement).toBe(focusable[0]))
    focusable[0].focus()
    focusable[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }))
    await vi.waitFor(() => expect(document.activeElement).toBe(focusable.at(-1)))
  })

  it('tracks desktop-to-mobile changes while closed and open, including the wider mobile containment fallback', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    const sidebar = wrapper.find('.library-native-item-sidebar')
    expect(sidebar.attributes('role')).toBeUndefined()

    mediaQuery.setMatches(true)
    setNextcloudViewport(800)
    await vi.waitFor(() => expect(sidebar.attributes('role')).toBe('dialog'))
    expect(sidebar.attributes('aria-modal')).toBe('true')
    expect(sidebar.attributes('aria-labelledby')).toBe('library-detail-drawer-heading')

    await wrapper.find('.library-cover-link').trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    const focusable = [...sidebar.element.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    expect(document.activeElement).toBe(sidebar.find('.app-sidebar__close').element)
    focusable.at(-1).focus()
    focusable.at(-1).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }))
    expect(document.activeElement).toBe(focusable[0])
    focusable[0].focus()
    focusable[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true }))
    expect(document.activeElement).toBe(focusable.at(-1))
  })

  it('tracks mobile-to-desktop changes while open and closed and removes modern and legacy listeners', async () => {
    mediaQuery.setMatches(true)
    setNextcloudViewport(480)
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    const opener = wrapper.find('.library-cover-link')
    opener.element.focus()
    await opener.trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    const sidebar = wrapper.find('.library-native-item-sidebar')
    expect(document.activeElement).toBe(sidebar.find('.app-sidebar__close').element)

    setNextcloudViewport(1280)
    mediaQuery.setMatches(false)
    await vi.waitFor(() => expect(sidebar.attributes('role')).toBeUndefined())
    expect(sidebar.attributes('aria-modal')).toBeUndefined()
    expect(sidebar.attributes('aria-labelledby')).toBeUndefined()
    await vi.waitFor(() => expect(document.activeElement).toBe(wrapper.find('#library-detail-drawer-heading').element))

    await sidebar.find('.app-sidebar__close').trigger('click')
    await waitForSidebarEvent(wrapper, 'closed')
    expect(document.activeElement).toBe(opener.element)
    wrapper.unmount()
    expect(mediaQuery.removeEventListener).toHaveBeenCalledWith('change', expect.any(Function))
    expect(mediaQuery.listenerCount()).toBe(0)

    const legacyQuery = installMatchMedia(false, { legacy: true })
    const legacyWrapper = mount(App, { props: { state } })
    expect(legacyQuery.addListener).toHaveBeenCalledWith(expect.any(Function))
    legacyWrapper.unmount()
    expect(legacyQuery.removeListener).toHaveBeenCalledWith(expect.any(Function))
    expect(legacyQuery.listenerCount()).toBe(0)
  })

  it('focuses a meaningful heading when opened from a canonical deep link', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?item=7')
    const wrapper = mount(App, { props: { state }, attachTo: document.body })
    await waitForSidebarEvent(wrapper, 'opened')
    expect(document.activeElement).toBe(wrapper.find('#library-detail-drawer-heading').element)
  })

  it.each([
    ['missing ID', {}],
    ['malformed item', { item: null }],
    ['string-ambiguous ID', { item: { ...state.items[0], id: '7' } }],
    ['mismatched ID', { item: { ...state.items[0], id: 8 } }],
  ])('fails the seeded detail request atomically for %s', async (_label, payload) => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/')
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => payload }))
    const wrapper = mount(App, { props: { state } })
    await wrapper.find('.library-cover-link').trigger('click')
    await vi.waitFor(() => expect(wrapper.find('.library-sidebar-state').exists()).toBe(true))
    await waitForSidebarEvent(wrapper, 'opened')
    expect(wrapper.find('.library-sidebar-content').text()).toContain('Could not load publication details. Try again.')
    expect(wrapper.find('.library-sidebar-content').text()).not.toContain('Advanced details')
    expect(wrapper.find('.library-sidebar-state button').text()).toBe('Try again')
    expect(window.location.search).toBe('?item=7')
  })

  it('does not hijack Left and Right while editing drawer metadata fields', async () => {
    const keyboardState = {
      ...state,
      items: [
        { ...state.items[0], id: 7, title: 'Example Book', coverUrl: '/apps/library/items/7/cover' },
        { ...state.items[0], id: 8, title: 'Second Book', coverUrl: '/apps/library/items/8/cover' },
      ],
      cataloguePagination: { ...state.cataloguePagination, total: 2, visible: 2, to: 2 },
    }
    globalThis.fetch = vi.fn(async (url) => {
      const item = url.includes('/8/') ? keyboardState.items[1] : keyboardState.items[0]
      return { ok: true, json: async () => ({ item }) }
    })
    const wrapper = mount(App, { props: { state: keyboardState }, attachTo: document.body })

    await wrapper.findAll('.library-cover-link')[0].trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    await wrapper.findAll('.library-sidebar-sections button')[1].trigger('click')
    const titleInput = wrapper.get('input[name="title"]')
    titleInput.element.focus()
    await titleInput.setValue('Unsaved Draft Title')

    titleInput.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }))
    titleInput.element.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.library-sidebar-content').text()).toContain('Example Book')
    expect(wrapper.find('.library-sidebar-content').text()).not.toContain('Second Book')
    expect(wrapper.get('input[name="title"]').element.value).toBe('Unsaved Draft Title')
    expect(globalThis.fetch.mock.calls.some(([url]) => String(url).includes('/items/8/sidebar'))).toBe(false)
  })

  it('supports keyboard navigation inside the details drawer from non-editable drawer surfaces', async () => {
    const keyboardState = {
      ...state,
      items: [
        { ...state.items[0], id: 7, title: 'Example Book', coverUrl: '/apps/library/items/7/cover' },
        { ...state.items[0], id: 8, title: 'Second Book', coverUrl: '/apps/library/items/8/cover' },
      ],
      cataloguePagination: { ...state.cataloguePagination, total: 2, visible: 2, to: 2 },
    }
    globalThis.fetch = vi.fn(async (url) => {
      const item = url.includes('/8/') ? keyboardState.items[1] : keyboardState.items[0]
      return { ok: true, json: async () => ({ item }) }
    })
    const wrapper = mount(App, { props: { state: keyboardState } })

    await wrapper.findAll('.library-cover-link')[0].trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    expect(wrapper.find('.library-sidebar-content').text()).toContain('Example Book')
    expect(wrapper.find('#library-detail-drawer-keyboard-hint').text()).toContain('Escape closes')
    expect(wrapper.find('#library-detail-drawer-keyboard-hint').text()).toContain('arrow keys browse')

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
    await wrapper.vm.$nextTick()
    await vi.waitFor(() => expect(wrapper.find('.library-sidebar-content').text()).toContain('Second Book'))

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
    await wrapper.vm.$nextTick()
    await vi.waitFor(() => expect(wrapper.find('.library-sidebar-content').text()).toContain('Example Book'))

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await waitForSidebarEvent(wrapper, 'closed')
    expect(wrapper.findComponent(NcAppSidebar).props('open')).toBe(false)
  })

  it('opens canonical deep links and fails malformed or repeated item ids closed', async () => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: state.items[0] }) }))
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?scannerConflicts=1&item=7')
    const wrapper = mount(App, { props: { state: { ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1' } } } })
    await waitForSidebarEvent(wrapper, 'opened')
    expect(wrapper.findComponent(NcAppSidebar).props('open')).toBe(true)
    expect(globalThis.fetch).toHaveBeenCalledWith(expect.stringContaining('/items/7/sidebar'), expect.objectContaining({ credentials: 'same-origin' }))

    wrapper.unmount()
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?item=7&item=8')
    const malformed = mount(App, { props: { state } })
    expect(malformed.findComponent(NcAppSidebar).props('open')).toBe(false)
    expect(window.location.search).toBe('')
  })

  it.each([
    ['the backend maximum', '2147483647', true],
    ['one above the backend maximum', '2147483648', false],
    ['a larger safe integer', '9007199254740991', false],
    ['an integer beyond safe precision', '9007199254740992', false],
  ])('applies the canonical item ID boundary for %s', async (_label, itemId, requestable) => {
    globalThis.fetch = vi.fn(async () => ({ ok: true, json: async () => ({ item: { ...state.items[0], id: Number(itemId) } }) }))
    window.history.replaceState({}, '', `/nc/index.php/apps/library/?scannerConflicts=1&item=${itemId}`)
    const wrapper = mount(App, { props: { state } })

    if (requestable) {
      await waitForSidebarEvent(wrapper, 'opened')
      expect(wrapper.findComponent(NcAppSidebar).props('open')).toBe(true)
      expect(globalThis.fetch).toHaveBeenCalledWith(expect.stringContaining(`/items/${itemId}/sidebar`), expect.any(Object))
      expect(window.location.search).toBe(`?scannerConflicts=1&item=${itemId}`)
    } else {
      await wrapper.vm.$nextTick()
      expect(wrapper.findComponent(NcAppSidebar).props('open')).toBe(false)
      expect(wrapper.find('.library-sidebar-state').exists()).toBe(false)
      expect(globalThis.fetch).not.toHaveBeenCalled()
      expect(window.location.search).toBe('?scannerConflicts=1')
    }
  })

  it('prevents a slower item response from replacing the latest selection', async () => {
    const pending = []
    globalThis.fetch = vi.fn((url, options) => new Promise((resolve) => pending.push({ url, options, resolve })))
    const keyboardState = { ...state, items: [{ ...state.items[0] }, { ...state.items[0], id: 8, title: 'Second Book' }] }
    const wrapper = mount(App, { props: { state: keyboardState } })
    await wrapper.findAll('.library-cover-link')[0].trigger('click')
    await waitForSidebarEvent(wrapper, 'opened')
    await wrapper.findAll('.library-cover-link')[1].trigger('click')
    expect(pending[0].options.signal.aborted).toBe(true)
    pending[1].resolve({ ok: true, json: async () => ({ item: keyboardState.items[1] }) })
    await vi.waitFor(() => expect(wrapper.find('.library-sidebar-content').text()).toContain('Second Book'))
    pending[0].resolve({ ok: true, json: async () => ({ item: keyboardState.items[0] }) })
    expect(wrapper.find('.library-sidebar-content').text()).toContain('Second Book')
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
    expect(workbench.text()).toContain('Review next suggestion')
    expect(workbench.text()).toContain('Current value')
    expect(workbench.text()).toContain('Suggested value')
    expect(workbench.text()).toContain('Path-based suggestion')
    expect(workbench.text()).toContain('Sidecar value')
    expect(workbench.text()).toContain('Source')
    expect(workbench.text()).not.toContain('No source files are changed')
    expect(workbench.text()).not.toContain('user-edited values are never silently overwritten')
    expect(workbench.find('#library-metadata-review-workbench-heading').attributes('title')).toContain('No source files are changed')
    expect(workbench.find('#library-metadata-review-workbench-heading').attributes('title')).toContain('user-edited values are never silently overwritten')
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
    expect(wrapper.text()).toContain('No items match these filters')
    expect(wrapper.text()).toContain('Clear search')
    expect(wrapper.text()).toContain('Clear all filters')
    expect(wrapper.find(`a[href="${state.catalogueRootUrl}?format=pdf"]`).exists()).toBe(true)
  })
})
