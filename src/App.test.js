import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
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

const state = {
  catalogueRootUrl: '/nc/index.php/apps/library/',
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
  document.body.innerHTML = '<div id="skip-actions"></div>'
})

describe('Library catalogue Vue app', () => {
  it('wraps the unchanged catalogue in the first native application shell scaffold', () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.findComponent(NcContent).exists()).toBe(true)
    expect(wrapper.findComponent(NcAppNavigation).exists()).toBe(true)
    expect(wrapper.findComponent(NcAppNavigationList).exists()).toBe(true)
    expect(wrapper.findComponent(NcAppContent).exists()).toBe(true)

    const destinations = wrapper.findAllComponents(NcAppNavigationItem)
    expect(destinations).toHaveLength(2)
    expect(destinations.map((destination) => destination.props('name'))).toEqual(['Library', 'Review'])
    expect(destinations[0].props('href')).toBe(state.catalogueRootUrl)
    expect(destinations[0].props('active')).toBe(true)
    expect(destinations[1].props('href')).toBe(state.reviewUrl)
    expect(destinations[1].props('active')).toBe(false)

    expect(wrapper.findComponent(NcAppNavigationSettings).exists()).toBe(false)
    const settings = wrapper.find('.library-navigation-settings-link')
    expect(settings.attributes('href')).toBe('/nc/index.php/settings/user/library')
    expect(settings.text()).toContain('Settings')

    const content = wrapper.findComponent(NcAppContent)
    expect(content.find('.library-vue-catalogue').exists()).toBe(true)
    expect(content.find('.library-catalogue-workspace').exists()).toBe(true)
    expect(content.findAll('.library-workspace-panel')).toHaveLength(5)
    expect(content.text()).toContain('Example Book')

    const sidebar = wrapper.findComponent(NcAppSidebar)
    expect(sidebar.exists()).toBe(true)
    expect(sidebar.props('open')).toBe(false)
    expect(sidebar.props('noToggle')).toBe(true)
    expect(document.body.textContent).not.toContain('Open sidebar')
  })

  it('keeps app-internal shell destinations same-origin and correct from nested routes', () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/creators/Ada%20Reader')
    const wrapper = mount(App, { props: { state } })
    const hrefs = [
      ...wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('href')),
      wrapper.find('.library-navigation-settings-link').attributes('href'),
    ]

    expect(hrefs).toEqual([
      '/nc/index.php/apps/library/',
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
      '/nc/index.php/apps/library/',
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
      '/nc/index.php/apps/library/',
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

    expect(wrapper.findAllComponents(NcAppNavigationItem)[0].props('href')).toBe(encodedUrl)
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

    expect(destinations[0].props('href')).toBe(state.catalogueRootUrl)
    expect(destinations[0].props('active')).toBe(false)
    expect(destinations[1].props('href')).toBe(state.reviewUrl)
    expect(destinations[1].props('active')).toBe(true)
  })

  it('treats canonical weak-metadata review filters as Review and ordinary filters as Library', () => {
    const review = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, weakMetadata: 'filename' } } },
    }).findAllComponents(NcAppNavigationItem)
    const library = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, q: 'camera' } } },
    }).findAllComponents(NcAppNavigationItem)

    expect(review.map((item) => item.props('active'))).toEqual([false, true])
    expect(library.map((item) => item.props('active'))).toEqual([true, false])
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
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([true, false])
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
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, true])
    expect(wrapper.find('.library-review-results').text()).toContain('Example Book')
  })

  it('keeps Review queue URLs shareable, webroot-aware and independently selectable', () => {
    window.history.replaceState({}, '', '/nc/index.php/apps/library/?scannerConflicts=1')
    const wrapper = mount(App, {
      props: { state: { ...state, activeFilters: { ...state.activeFilters, scannerConflicts: '1' } } },
    })
    const links = wrapper.findAll('.library-review-queue-link')

    expect(links.map((link) => link.attributes('href'))).toEqual([
      '/nc/index.php/apps/library/?needsMetadata=1',
      '/nc/index.php/apps/library/?scannerConflicts=1',
      '/nc/index.php/apps/library/?status=metadata_error',
      '/nc/index.php/apps/library/?coverReview=placeholder',
      '/nc/index.php/apps/library/?noCreator=1',
      '/nc/index.php/apps/library/?noPublication=1',
      '/nc/index.php/apps/library/?noDate=1',
      '/nc/index.php/apps/library/?titleFromFilename=1',
      '/nc/index.php/apps/library/?weakMetadata=filename',
      '/nc/index.php/apps/library/?noDescription=1',
      '/nc/index.php/apps/library/?unsupportedContainer=1',
      '/nc/index.php/apps/library/?unreviewedImports=1',
    ])
    expect(links[1].attributes('aria-current')).toBe('page')
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
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([false, true])
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
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([true, false])
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
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([true, false])
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
    expect(wrapper.findAllComponents(NcAppNavigationItem).map((item) => item.props('active'))).toEqual([true, false])
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

  it('frames catalogue tools as one consistent expandable workspace above the covers', () => {
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
    const panels = workspace.findAll(':scope > details.library-workspace-panel')
    expect(panels).toHaveLength(5)
    expect(panels.map((panel) => panel.find('.library-workspace-panel-title').text())).toEqual([
      'Refine results',
      'Browse shortcuts',
      'Batch actions',
      'Review queue',
      'Admin tools',
    ])
    expect(panels.map((panel) => panel.find('summary small').text())).toEqual([
      'Filters, facets and saved filter shortcuts',
      'Continue reading, recently added, rediscover and useful views',
      'Preview and apply changes to current results',
      'Weak metadata, conflicts, missing files and extraction errors',
      'Roots, scans, exports and repair operations',
    ])
    expect(panels.map((panel) => panel.find('.library-workspace-scope-badge').text())).toEqual([
      'this shelf',
      'whole catalogue',
      '1 Current filter result',
      'current results',
      'all enabled roots',
    ])
    for (const panel of panels) {
      expect(panel.find('.library-workspace-panel-copy').exists()).toBe(false)
      expect(panel.find('.library-workspace-panel-title').attributes('title')).toBeTruthy()
    }
    expect(workspace.text()).not.toContain('Search, sort and filters narrow the current result set')
    expect(workspace.text()).not.toContain('Search also checks descriptions')
    expect(workspace.text()).not.toContain('changed / unchanged / skipped / error feedback')
    expect(workspace.text()).not.toContain('Source files stay in Nextcloud Files')
    expect(wrapper.find('.library-quick-filter-search').attributes('title')).toContain('Search also checks descriptions')

    const heading = wrapper.find('#library-catalogue-heading')
    expect(heading.text()).toBe('Library')
    const workspaceBeforeHeading = workspace.element.compareDocumentPosition(heading.element)
    expect(Boolean(workspaceBeforeHeading & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
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
      'Every batch action uses the current filters',
      'Reset current scanner-conflict results',
      'Refresh cover previews for current results',
      'Review cards compare current values',
      'Maintain roots, scans, exports and repair operations',
      'Cached metadata overview loads quickly',
    ]
    for (const phrase of visibleAntiPatterns) {
      expect(wrapper.text()).not.toContain(phrase)
    }

    expect(wrapper.find('.library-workspace-panel--refine .library-workspace-panel-title').attributes('title')).toContain('Search, sort and filters')
    expect(wrapper.find('.library-quick-filter-search').attributes('title')).toContain('Search also checks descriptions')
    expect(wrapper.find('.library-batch-metadata-reset-form button').attributes('title')).toContain('Reset current scanner-conflict results')
    expect(wrapper.find('.library-actions-health-overview h3').attributes('title')).toContain('Cached metadata overview loads quickly')
  })

  it('renders collapsed workspace controls as a menu bar above the Library heading', () => {
    const wrapper = mount(App, { props: { state } })

    const workspace = wrapper.find('.library-catalogue-workspace')
    const heading = wrapper.find('#library-catalogue-heading')
    expect(workspace.classes()).toContain('library-workspace-menubar')
    expect(heading.text()).toBe('Library')
    const workspaceBeforeHeading = workspace.element.compareDocumentPosition(heading.element)
    expect(Boolean(workspaceBeforeHeading & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
    const headerBeforeCovers = heading.element.compareDocumentPosition(wrapper.find('.library-cover-gallery').element)
    expect(Boolean(headerBeforeCovers & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
  })

  it('gives each workspace panel a polished visual identity without changing its contract', () => {
    const wrapper = mount(App, { props: { state } })
    const panels = wrapper.findAll('.library-catalogue-workspace > details.library-workspace-panel')

    expect(panels).toHaveLength(5)
    expect(panels.map((panel) => panel.attributes('data-workspace-panel'))).toEqual([
      'refine',
      'browse',
      'batch',
      'review',
      'admin',
    ])
    expect(panels.map((panel) => panel.find('.library-workspace-panel-icon').text())).toEqual([
      '⌕',
      '↗',
      '✓',
      '!',
      '⚙',
    ])
    for (const panel of panels) {
      expect(panel.find('.library-workspace-panel-title').exists()).toBe(true)
      expect(panel.find('.library-workspace-panel-purpose').exists()).toBe(true)
      expect(panel.find('.library-workspace-panel-summary').classes()).toContain('library-workspace-panel-summary--polished')
    }
  })

  it('renders the catalogue from Nextcloud initial state', () => {
    const wrapper = mount(App, { props: { state } })

    expect(wrapper.text()).toContain('Library')
    expect(wrapper.text()).not.toContain('Publication catalogue')
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
    const filterPanel = wrapper.find('.library-workspace-panel--refine')
    const discoveryShortcuts = wrapper.find('.library-workspace-panel--browse')
    expect(filterPanel.exists()).toBe(true)
    expect(filterPanel.attributes('open')).toBeUndefined()
    expect(filterPanel.find('.library-workspace-panel-title').text()).toBe('Refine results')
    expect(discoveryShortcuts.exists()).toBe(true)
    expect(discoveryShortcuts.attributes('open')).toBeUndefined()
    expect(discoveryShortcuts.find('.library-workspace-panel-title').text()).toBe('Browse shortcuts')
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
    const form = wrapper.find('.library-quick-filter-bar')

    await form.find('input[name="q"]').setValue('first')
    void form.trigger('submit')
    await Promise.resolve()
    await form.find('input[name="q"]').setValue('latest')
    void form.trigger('submit')
    await Promise.resolve()

    expect(requests).toHaveLength(2)
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

  it('invalidates a pending response as soon as newer debounced input expresses user intent', async () => {
    vi.useFakeTimers()
    const requests = []
    globalThis.fetch = vi.fn((_url, options) => new Promise((resolve) => requests.push({ resolve, options })))
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const input = wrapper.find('.library-quick-filter-bar input[name="q"]')
    const form = wrapper.find('.library-quick-filter-bar')

    await input.setValue('first')
    void form.trigger('submit')
    await Promise.resolve()
    await input.setValue('latest')

    expect(requests).toHaveLength(1)
    expect(requests[0].options.signal.aborted).toBe(true)
    requests[0].resolve({ ok: true, json: async () => ({ ...state, items: [{ ...state.items[0], title: 'Stale result' }], activeFilters: { ...state.activeFilters, q: 'first' } }) })
    await Promise.resolve()
    await wrapper.vm.$nextTick()

    expect(input.element.value).toBe('latest')
    expect(wrapper.text()).not.toContain('Stale result')
    await vi.advanceTimersByTimeAsync(350)
    expect(globalThis.fetch).toHaveBeenCalledTimes(2)
    expect(globalThis.fetch.mock.calls[1][0]).toContain('q=latest')
    vi.useRealTimers()
  })

  it('falls back with the failed request snapshot while preserving newer controls', async () => {
    vi.useFakeTimers()
    let rejectRequest
    globalThis.fetch = vi.fn(() => new Promise((_resolve, reject) => { rejectRequest = reject }))
    const submitted = []
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(function () {
      submitted.push(Object.fromEntries(new FormData(this)))
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const input = wrapper.find('.library-quick-filter-bar input[name="q"]')
    const form = wrapper.find('.library-quick-filter-bar')

    await input.setValue('first')
    void form.trigger('submit')
    await Promise.resolve()
    input.element.value = 'latest'
    rejectRequest(new Error('network down'))
    await Promise.resolve()
    await Promise.resolve()

    expect(input.element.value).toBe('latest')
    expect(submitted).toEqual([{ q: 'first', sort: 'title', limit: '100' }])
    nativeSubmit.mockRestore()
    vi.useRealTimers()
  })

  it('falls back on a current catalogue rejection and aborts it on unmount', async () => {
    let rejectRequest
    let requestOptions
    globalThis.fetch = vi.fn((_url, options) => {
      requestOptions = options
      return new Promise((_resolve, reject) => { rejectRequest = reject })
    })
    const wrapper = mount(App, { props: { state: { ...state, catalogueEndpointUrl: '/apps/library/catalogue' } } })
    const form = wrapper.find('.library-quick-filter-bar')
    const nativeSubmit = vi.spyOn(HTMLFormElement.prototype, 'submit').mockImplementation(() => {})

    void form.trigger('submit')
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

  it('keeps catalogue workspace panels collapsed so the cover shelf stays central', () => {
    const wrapper = mount(App, { props: { state } })

    const workspace = wrapper.find('.library-catalogue-workspace')
    expect(workspace.exists()).toBe(true)
    expect(workspace.element.tagName).toBe('NAV')

    for (const selector of [
      '.library-workspace-panel--refine',
      '.library-workspace-panel--browse',
      '.library-workspace-panel--batch',
      '.library-workspace-panel--review',
      '.library-workspace-panel--admin',
    ]) {
      const panel = workspace.find(selector)
      expect(panel.exists()).toBe(true)
      expect(panel.element.tagName).toBe('DETAILS')
      expect(panel.attributes('open')).toBeUndefined()
    }

    expect(workspace.find('.library-workspace-panel--refine .library-workspace-panel-title').text()).toContain('Refine results')
    expect(workspace.find('.library-workspace-panel--browse .library-workspace-panel-title').text()).toContain('Browse shortcuts')
    expect(workspace.find('.library-workspace-panel--batch .library-workspace-panel-title').text()).toContain('Batch actions')
    expect(workspace.find('.library-workspace-panel--review .library-workspace-panel-title').text()).toContain('Review queue')
    expect(workspace.find('.library-workspace-panel--admin .library-workspace-panel-title').text()).toContain('Admin tools')

    const toolsBeforeCovers = workspace.element.compareDocumentPosition(wrapper.find('.library-cover-gallery').element)
    expect(Boolean(toolsBeforeCovers & Node.DOCUMENT_POSITION_FOLLOWING)).toBe(true)
  })

  it('opens an in-page details drawer from cover cards', async () => {
    const wrapper = mount(App, { props: { state } })

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
    expect(wrapper.text()).toContain('No matches for the current filters')
    expect(wrapper.text()).toContain('Clear search')
    expect(wrapper.text()).toContain('Clear all filters')
    expect(wrapper.find('a[href="?format=pdf"]').exists()).toBe(true)
  })
})
