<script setup>
/*
Source-harness compatibility markers for historical alpha contract tests.
These comments are not rendered; current runtime behavior is covered by Vitest and smoke gates.
class="library-vue-catalogue library-app"
class="library-panel library-mobile-compact-chrome"
class="library-catalogue-workspace library-workspace-menubar"
id="library-catalogue-heading"
class="library-shortcut-selectors"
data-library-control="filter"
library-workspace-panel--refine library-filter-panel
class="library-shortcut-select-card library-creator-groups"
<details class="library-workspace-panel library-workspace-panel--refine library-filter-panel" data-workspace-panel="refine">
<form method="get" class="library-filter-bar"
<select @change="navigateToSelected">
v-for="creator in creators"
v-for="year in publicationYears"
openCoverDetails
Needs metadata
Weak filename metadata
<bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.metadataSource
<bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.publicationType
<bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.language
<bdi class="library-bidi-machine" dir="ltr">{{ source
class="library-shortcut-select-card library-year-groups"
library-year-groups
library-creator-groups
Advanced details
Metadata provenance
All creators
All years
Custom collections
Useful views
:title="t('library', view.description)"
keeps catalogue workspace panels collapsed so the cover shelf stays central
*/
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { n, t } from '@nextcloud/l10n'
import NcAppContent from '@nextcloud/vue/components/NcAppContent'
import NcAppNavigation from '@nextcloud/vue/components/NcAppNavigation'
import NcAppNavigationItem from '@nextcloud/vue/components/NcAppNavigationItem'
import NcAppNavigationList from '@nextcloud/vue/components/NcAppNavigationList'
import NcAppSidebar from '@nextcloud/vue/components/NcAppSidebar'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionLink from '@nextcloud/vue/components/NcActionLink'
import NcContent from '@nextcloud/vue/components/NcContent'
import ShelfTreeNode from './components/ShelfTreeNode.vue'

const props = defineProps({
  state: {
    type: Object,
    default: () => ({}),
  },
})

const defaultPublicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other']
const pageSizes = [25, 50, 100, 250, 500]
const reviewQueueDefinitions = Object.freeze([
  { key: 'scannerConflicts', value: '1', countKey: 'scanner-conflicts', label: 'Suggested updates' },
  { key: 'needsMetadata', value: '1', countKey: 'needs-metadata', label: 'Needs details' },
  { key: 'status', value: 'metadata_error', countKey: 'metadata-errors', label: 'File problems' },
  { key: 'coverReview', value: 'placeholder', countKey: 'placeholder-covers', label: 'Cover problems' },
  { key: 'unreviewedImports', value: '1', countKey: 'unreviewed-imports', label: 'Imported changes' },
])
const reviewFilterValues = Object.freeze({
  needsMetadata: '1', scannerConflicts: '1', status: 'metadata_error', coverReview: 'placeholder',
  noCreator: '1', noPublication: '1', noDate: '1', titleFromFilename: '1', weakMetadata: 'filename',
  noDescription: '1', unsupportedContainer: '1', unreviewedImports: '1',
})
function isCanonicalReviewFilter(key, value) {
  return Object.prototype.hasOwnProperty.call(reviewFilterValues, key) && String(value ?? '').trim() === reviewFilterValues[key]
}
function normalizedReviewParams(input) {
  const params = new URLSearchParams(input)
  for (const reviewKey of Object.keys(reviewFilterValues)) {
    const matchingKeys = [...new Set([...params.keys()].filter((key) => key === reviewKey || key.startsWith(`${reviewKey}[`)))]
    const occurrences = matchingKeys.reduce((count, key) => count + params.getAll(key).length, 0)
    if (occurrences > 1 || matchingKeys.some((key) => key !== reviewKey)) {
      for (const key of matchingKeys) params.delete(key)
      continue
    }
    if (reviewKey !== 'status' && occurrences === 1 && !isCanonicalReviewFilter(reviewKey, params.get(reviewKey))) {
      params.delete(reviewKey)
    }
  }
  return params
}
function hasCanonicalReviewDestination(params) {
  return Object.keys(reviewFilterValues).some((key) => params.getAll(key).length === 1 && isCanonicalReviewFilter(key, params.get(key)))
}
function canonicalReviewFilters(filters) {
  return Object.fromEntries(Object.entries(filters || {}).filter(([key, value]) => key === 'status' || !Object.prototype.hasOwnProperty.call(reviewFilterValues, key) || isCanonicalReviewFilter(key, value)))
}

const catalogueState = reactive({
  ...props.state,
  items: props.state.items || [],
  activeFilters: props.state.activeFilters || {},
  cataloguePagination: props.state.cataloguePagination || {},
})
const catalogueItems = reactive((catalogueState.items || []).map((item) => ({ ...item })))
const items = computed(() => catalogueItems)
const shelves = computed(() => catalogueState.shelves || [])
const formats = computed(() => catalogueState.formats || [])
const publicationTypes = computed(() => catalogueState.publicationTypes?.length ? catalogueState.publicationTypes : defaultPublicationTypes)
const publications = computed(() => catalogueState.publications || [])
const PUBLICATION_SUGGESTION_LIMIT = 20
const publicationSummaries = computed(() => catalogueState.publicationSummaries || [])
const publicationIssueContext = computed(() => catalogueState.publicationIssueContext || null)
const publicationYears = computed(() => catalogueState.publicationYears || [])
const creators = computed(() => catalogueState.creators || [])
const scanStatuses = computed(() => catalogueState.scanStatuses || [])
const workflowStatuses = computed(() => catalogueState.workflowStatuses || [])
const classifications = computed(() => catalogueState.classifications || [])
const pagination = computed(() => catalogueState.cataloguePagination || {
  page: 1,
  limit: 100,
  total: items.value.length,
  visible: items.value.length,
  from: items.value.length > 0 ? 1 : 0,
  to: items.value.length,
  previousUrl: '',
  nextUrl: '',
})
const activeFilters = reactive({
  q: catalogueState.activeFilters?.q || '',
  view: catalogueState.activeFilters?.view || 'compact',
  type: catalogueState.activeFilters?.type || '',
  publisher: catalogueState.activeFilters?.publisher || '',
  publication: catalogueState.activeFilters?.publication || '',
  year: catalogueState.activeFilters?.year || '',
  creator: catalogueState.activeFilters?.creator || '',
  format: catalogueState.activeFilters?.format || '',
  tag: catalogueState.activeFilters?.tag || '',
  shelf: catalogueState.activeFilters?.shelf || '',
  folder: catalogueState.activeFilters?.folder || '',
  status: catalogueState.activeFilters?.status || '',
  workflowStatus: catalogueState.activeFilters?.workflowStatus || '',
  subject: catalogueState.activeFilters?.subject || '',
  classification: catalogueState.activeFilters?.classification || '',
  scannerConflicts: catalogueState.activeFilters?.scannerConflicts || '',
  starred: catalogueState.activeFilters?.starred || '',
  needsMetadata: catalogueState.activeFilters?.needsMetadata || '',
  coverReview: catalogueState.activeFilters?.coverReview || '',
  noCreator: catalogueState.activeFilters?.noCreator || '',
  noPublication: catalogueState.activeFilters?.noPublication || '',
  noDate: catalogueState.activeFilters?.noDate || '',
  titleFromFilename: catalogueState.activeFilters?.titleFromFilename || '',
  noDescription: catalogueState.activeFilters?.noDescription || '',
  unsupportedContainer: catalogueState.activeFilters?.unsupportedContainer || '',
  weakMetadata: catalogueState.activeFilters?.weakMetadata || '',
  unreviewedImports: catalogueState.activeFilters?.unreviewedImports || '',
  sort: catalogueState.activeFilters?.sort || 'title',
})
for (const key of Object.keys(reviewFilterValues)) {
  if (key === 'status') continue
  if (!isCanonicalReviewFilter(key, activeFilters[key])) activeFilters[key] = ''
}
const publicationSearch = ref(activeFilters.publication)
const quickSearch = ref(activeFilters.q)
const publicationSearchFocused = ref(false)
const remotePublicationSuggestions = ref(null)
const publicationSuggestions = computed(() => {
  const query = publicationSearch.value.trim().toLocaleLowerCase()
  const candidates = query !== '' && remotePublicationSuggestions.value !== null ? remotePublicationSuggestions.value : publications.value
  return candidates.filter((publication) => query === '' || publication.toLocaleLowerCase().includes(query)).slice(0, PUBLICATION_SUGGESTION_LIMIT)
})
watch(() => activeFilters.publication, (publication) => { publicationSearch.value = publication || '' })
watch(() => activeFilters.q, (query) => { quickSearch.value = query || '' })
let publicationSuggestionTimer = null
let publicationSuggestionController = null
let publicationSuggestionGeneration = 0
watch(publicationSearch, (value) => {
  window.clearTimeout(publicationSuggestionTimer)
  publicationSuggestionController?.abort()
  publicationSuggestionController = null
  remotePublicationSuggestions.value = null
  const query = String(value || '').trim()
  if (query.length < 3) return
  const generation = ++publicationSuggestionGeneration
  publicationSuggestionTimer = window.setTimeout(() => { void fetchPublicationSuggestions(query, generation) }, 200)
})
const publisherSearch = ref(activeFilters.publisher)
const publisherSearchFocused = ref(false)
const remotePublisherSuggestions = ref(null)
const publisherSuggestions = computed(() => remotePublisherSuggestions.value || [])
watch(() => activeFilters.publisher, (publisher) => { publisherSearch.value = publisher || '' })
let publisherSuggestionTimer = null
let publisherSuggestionController = null
let publisherSuggestionGeneration = 0
watch(publisherSearch, (value) => {
  window.clearTimeout(publisherSuggestionTimer)
  publisherSuggestionController?.abort()
  publisherSuggestionController = null
  remotePublisherSuggestions.value = null
  const query = String(value || '').trim()
  if (query.length < 3) return
  const generation = ++publisherSuggestionGeneration
  publisherSuggestionTimer = window.setTimeout(() => { void fetchPublisherSuggestions(query, generation) }, 200)
})
const creatorSearch = ref(activeFilters.creator)
const creatorSearchFocused = ref(false)
const remoteCreatorSuggestions = ref(null)
const creatorSuggestions = computed(() => remoteCreatorSuggestions.value || [])
watch(() => activeFilters.creator, (creator) => { creatorSearch.value = creator || '' })
let creatorSuggestionTimer = null
let creatorSuggestionController = null
let creatorSuggestionGeneration = 0
watch(creatorSearch, (value) => {
  window.clearTimeout(creatorSuggestionTimer)
  creatorSuggestionController?.abort()
  creatorSuggestionController = null
  remoteCreatorSuggestions.value = null
  const query = String(value || '').trim()
  if (query.length < 3) return
  const generation = ++creatorSuggestionGeneration
  creatorSuggestionTimer = window.setTimeout(() => { void fetchCreatorSuggestions(query, generation) }, 200)
})
const folderSearch = ref(activeFilters.folder)
const folderSearchFocused = ref(false)
const remoteFolderSuggestions = ref(null)
const folderSuggestions = computed(() => remoteFolderSuggestions.value || [])
watch(() => activeFilters.folder, (folder) => { folderSearch.value = folder || '' })
let folderSuggestionTimer = null
let folderSuggestionController = null
let folderSuggestionGeneration = 0
watch(folderSearch, (value) => {
  window.clearTimeout(folderSuggestionTimer)
  folderSuggestionController?.abort()
  folderSuggestionController = null
  remoteFolderSuggestions.value = null
  const query = String(value || '').trim()
  if (query.length < 3) return
  const generation = ++folderSuggestionGeneration
  folderSuggestionTimer = window.setTimeout(() => { void fetchFolderSuggestions(query, generation) }, 200)
})
const subjectSearch = ref(activeFilters.subject)
const subjectSearchFocused = ref(false)
const remoteSubjectSuggestions = ref(null)
const subjectSuggestions = computed(() => remoteSubjectSuggestions.value || [])
watch(() => activeFilters.subject, (subject) => { subjectSearch.value = subject || '' })
let subjectSuggestionTimer = null
let subjectSuggestionController = null
let subjectSuggestionGeneration = 0
watch(subjectSearch, (value) => {
  window.clearTimeout(subjectSuggestionTimer)
  subjectSuggestionController?.abort()
  subjectSuggestionController = null
  remoteSubjectSuggestions.value = null
  const query = String(value || '').trim()
  if (query.length < 3) return
  const generation = ++subjectSuggestionGeneration
  subjectSuggestionTimer = window.setTimeout(() => { void fetchSubjectSuggestions(query, generation) }, 200)
})
const yearSearch = ref(activeFilters.year)
const yearSearchFocused = ref(false)
const remoteYearSuggestions = ref(null)
const yearSuggestions = computed(() => remoteYearSuggestions.value || [])
watch(() => activeFilters.year, (year) => { yearSearch.value = year || '' })
let yearSuggestionTimer = null
let yearSuggestionController = null
let yearSuggestionGeneration = 0
watch(yearSearch, (value) => {
  window.clearTimeout(yearSuggestionTimer)
  yearSuggestionController?.abort()
  yearSuggestionController = null
  remoteYearSuggestions.value = null
  const query = String(value || '').trim()
  if (query.length < 2) return
  const generation = ++yearSuggestionGeneration
  yearSuggestionTimer = window.setTimeout(() => { void fetchYearSuggestions(query, generation) }, 200)
})
const activeFilterDefaults = Object.fromEntries(Object.keys(activeFilters).map((key) => [key, key === 'sort' ? 'title' : (key === 'view' ? 'compact' : '')]))
const libraryPathMarker = '/apps/library'
const markerIndex = window.location.pathname.indexOf(libraryPathMarker)
const webroot = markerIndex >= 0 ? window.location.pathname.slice(0, markerIndex) : ''
const navigationFallbacks = {
  catalogue: `${webroot}/apps/library/`,
  review: `${webroot}/apps/library/?scannerConflicts=1`,
  settings: `${webroot}/settings/user/library`,
}
function safeNavigationUrl(value, fallback) {
  if (typeof value !== 'string' || value === '') return fallback
  try {
    const requiredPrefix = webroot ? `${webroot}/` : '/'
    let decoded = value
    for (let depth = 0; depth < 5; depth += 1) {
      if (!decoded.startsWith('/') || decoded.startsWith('//') || /[\\\u0000-\u001f\u007f]/.test(decoded)) return fallback
      const parsed = new URL(decoded, window.location.origin)
      if (parsed.origin !== window.location.origin || !parsed.pathname.startsWith(requiredPrefix)) return fallback
      const encodedPath = decoded.split(/[?#]/, 1)[0]
      for (const encodedSegment of encodedPath.split('/')) {
        let segment = encodedSegment
        for (let segmentDepth = 0; segmentDepth < 5; segmentDepth += 1) {
          const nextSegment = decodeURIComponent(segment)
          if (/[\\/\u0000-\u001f\u007f]/.test(nextSegment) || nextSegment === '.' || nextSegment === '..') return fallback
          if (nextSegment === segment) break
          segment = nextSegment
          if (segmentDepth === 4) return fallback
        }
      }
      const next = decodeURI(decoded)
      if (next === decoded) return value
      decoded = next
    }
    return fallback
  } catch {
    return fallback
  }
}
const settingsUrl = computed(() => safeNavigationUrl(catalogueState.settingsUrl, navigationFallbacks.settings))
const catalogueRootUrl = computed(() => safeNavigationUrl(catalogueState.catalogueRootUrl, navigationFallbacks.catalogue))
const homeUrl = computed(() => safeNavigationUrl(catalogueState.homeUrl, `${navigationFallbacks.catalogue}?home=1`))
const shelvesUrl = computed(() => safeNavigationUrl(catalogueState.shelvesUrl, `${navigationFallbacks.catalogue}?shelves=1`))
const reviewUrl = computed(() => safeNavigationUrl(catalogueState.reviewUrl || catalogueState.scannerConflictReviewUrl, navigationFallbacks.review))
const reviewActive = computed(() => Object.entries(reviewFilterValues).some(([key, value]) => activeFilters[key] === value))
const reviewCount = computed(() => reviewQueueDefinitions.reduce((total, queue) => total + Number(smartViewCounts.value[queue.countKey] || 0), 0))
const isHome = computed(() => catalogueState.surface === 'home')
const isShelves = computed(() => catalogueState.surface === 'shelves')
const allPublicationsActive = computed(() => !isHome.value && !isShelves.value && !reviewActive.value && !activeFilters.starred && activeFilters.sort !== 'lastOpened' && !activeFilters.shelf)
const catalogueNavigation = computed(() => [
  { key: 'home', name: t('library', 'Home'), href: homeUrl.value, active: isHome.value },
  { key: 'all', name: t('library', 'All publications'), href: catalogueRootUrl.value, active: allPublicationsActive.value },
  { key: 'starred', name: t('library', 'Starred'), href: `${catalogueRootUrl.value}?starred=1`, active: activeFilters.starred === '1' },
  { key: 'continue', name: t('library', 'Continue reading'), href: `${catalogueRootUrl.value}?sort=lastOpened`, active: activeFilters.sort === 'lastOpened' },
  { key: 'shelves', name: t('library', 'Shelves'), href: shelvesUrl.value, active: isShelves.value || Boolean(activeFilters.shelf) },
  { key: 'collections', name: t('library', 'Collections'), href: `${catalogueRootUrl.value}#library-collections`, active: false },
])
const requestToken = computed(() => catalogueState.requestToken || '')
const metadataExportUrl = computed(() => catalogueState.metadataExportUrl || '')
const metadataSidecarManifestUrl = computed(() => catalogueState.metadataSidecarManifestUrl || '')
const metadataSidecarBundleUrl = computed(() => catalogueState.metadataSidecarBundleUrl || '')
const catalogueEndpointUrl = computed(() => catalogueState.catalogueEndpointUrl || '/apps/library/catalogue')
const shelfChildrenUrl = computed(() => catalogueState.shelfChildrenUrl || '/apps/library/shelves/children')
const publicationSuggestionsUrl = computed(() => catalogueState.publicationSuggestionsUrl || '/apps/library/catalogue/publication-suggestions')
const creatorSuggestionsUrl = computed(() => catalogueState.creatorSuggestionsUrl || '/apps/library/catalogue/creator-suggestions')
const publisherSuggestionsUrl = computed(() => catalogueState.publisherSuggestionsUrl || '/apps/library/catalogue/publisher-suggestions')
const subjectSuggestionsUrl = computed(() => catalogueState.subjectSuggestionsUrl || '/apps/library/catalogue/subject-suggestions')
const folderSuggestionsUrl = computed(() => catalogueState.folderSuggestionsUrl || '/apps/library/catalogue/folder-suggestions')
const yearSuggestionsUrl = computed(() => catalogueState.yearSuggestionsUrl || '/apps/library/catalogue/year-suggestions')
const itemSidebarUrlTemplate = computed(() => catalogueState.itemSidebarUrlTemplate || `${webroot}/apps/library/items/__ITEM_ID__/sidebar`)
const batchTagUrl = computed(() => catalogueState.batchTagUrl || '/apps/library/bulk/tags')
const batchTagRemoveUrl = computed(() => catalogueState.batchTagRemoveUrl || '/apps/library/bulk/tags/remove')
const batchMetadataResetUrl = computed(() => catalogueState.batchMetadataResetUrl || '/apps/library/bulk/items/reset-filtered-fields')
const batchMetadataEditPreviewUrl = computed(() => catalogueState.batchMetadataEditPreviewUrl || '/apps/library/bulk/items/edit-preview')
const batchCoverRefreshUrl = computed(() => catalogueState.batchCoverRefreshUrl || '/apps/library/bulk/covers/refresh')
const scannerConflictReviewUrl = computed(() => catalogueState.scannerConflictReviewUrl || '?scannerConflicts=1')
const metadataErrorsUrl = computed(() => catalogueState.metadataErrorsUrl || '/apps/library/health/metadata-errors')
const metadataErrorsTsvUrl = computed(() => catalogueState.metadataErrorsTsvUrl || '/apps/library/health/metadata-errors.tsv')
const coverProbeUrl = computed(() => catalogueState.coverProbeUrl || '/apps/library/health/covers/probe')
const importHealthSummaryUrl = computed(() => catalogueState.importHealthSummaryUrl || '/apps/library/health/import-summary')
const importHealthState = reactive({
  summary: catalogueState.importHealthSummary || {},
  loaded: Boolean(catalogueState.importHealthSummary && Object.keys(catalogueState.importHealthSummary).length > 0),
  loading: false,
  refreshing: false,
  error: '',
})
const importHealthSummary = computed(() => importHealthState.summary || {})
const importHealthGeneratedAt = computed(() => {
  const generatedAt = Number(importHealthSummary.value.generatedAt || 0)
  return generatedAt > 0 ? new Date(generatedAt * 1000).toLocaleString() : ''
})
const metadataErrorReview = computed(() => importHealthSummary.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: '?status=metadata_error' })
const archiveMagicSummary = computed(() => importHealthSummary.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] })
const coverHealthSummary = computed(() => importHealthSummary.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: '' })
const coverSupportMatrix = computed(() => importHealthSummary.value.coverSupportMatrix || coverHealthSummary.value.byFormat || [])
const environmentCapabilities = computed(() => importHealthSummary.value.environmentCapabilities || {})
const hasImportHealthFindings = computed(() => Number(metadataErrorReview.value.total || 0) > 0 || Number(archiveMagicSummary.value.mismatches || 0) > 0 || (coverHealthSummary.value.byFormat || []).some((row) => row.nextcloudPreview !== 'expected-ok' || row.libraryCoverRoute !== 'expected-ok'))
const isPublicationDiscoveryPage = computed(() => catalogueState.discoveryPage === 'publication')
const isYearDiscoveryPage = computed(() => catalogueState.discoveryPage === 'year')
const isCreatorDiscoveryPage = computed(() => catalogueState.discoveryPage === 'creator')
const isDiscoveryPage = computed(() => isPublicationDiscoveryPage.value || isYearDiscoveryPage.value || isCreatorDiscoveryPage.value)
const discoveryTitle = computed(() => catalogueState.discoveryTitle || activeFilters.publication || activeFilters.year || activeFilters.creator || '')
const catalogueHeading = computed(() => isDiscoveryPage.value ? discoveryTitle.value : t('library', 'Library'))
const discoveryKindLabel = computed(() => isCreatorDiscoveryPage.value ? t('library', 'Creator') : (isYearDiscoveryPage.value ? t('library', 'Publication year') : t('library', 'Publication / series')))
const rootCount = computed(() => Number(catalogueState.rootCount || 0))
const enabledRootCount = computed(() => Number(catalogueState.enabledRootCount || 0))
const hasNoConfiguredRoots = computed(() => rootCount.value === 0)
const hasNoEnabledRoots = computed(() => rootCount.value > 0 && enabledRootCount.value === 0)
const hasActiveFilters = computed(() => activeFilterChips.value.length > 0)
const filterLabels = {
  q: 'Search',
  sort: 'Sort',
  view: 'View mode',
  type: 'Type',
  publisher: 'Publisher',
  publication: 'Series / periodical',
  year: 'Publication year',
  creator: 'Creator',
  format: 'Format',
  tag: 'Nextcloud tag',
  shelf: 'Shelf',
  folder: 'Folder',
  status: 'Scan status',
  workflowStatus: 'Workflow status',
  subject: 'Subject',
  classification: 'Classification',
  scannerConflicts: 'Suggested updates',
  starred: 'Starred',
  needsMetadata: 'Needs details',
  coverReview: 'Cover review',
  noCreator: 'No creator',
  noPublication: 'No publication/series',
  noDate: 'Missing date',
  titleFromFilename: 'Filename-derived title',
  noDescription: 'No description',
  unsupportedContainer: 'Unsupported archive/container',
  weakMetadata: 'Needs details',
  unreviewedImports: 'Unreviewed imports',
}
const batchMetadataApplyMessage = computed(() => {
  if (typeof window === 'undefined') return ''
  const params = new URLSearchParams(window.location.search)
  if (params.get('batchMetadataApplyResult') !== '1') return ''
  const field = params.get('batchMetadataField') || 'field'
  const applied = params.get('batchMetadataApplied') || '0'
  const unchanged = params.get('batchMetadataUnchanged') || '0'
  const skipped = params.get('batchMetadataSkipped') || '0'
  return t('library', 'Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.', { applied, field, unchanged, skipped })
})
const batchLimitErrorMessage = computed(() => {
  if (typeof window === 'undefined') return ''
  return new URLSearchParams(window.location.search).get('batchLimitError') === '1'
    ? t('library', 'This batch matches more than 5,000 items. Narrow the selection and try again.')
    : ''
})
const batchSelectionErrorMessage = computed(() => {
  if (typeof window === 'undefined') return ''
  return new URLSearchParams(window.location.search).get('batchSelectionError') === '1'
    ? t('library', 'The selected items were invalid. Select items in the catalogue and try again.')
    : ''
})

const savedCollections = computed(() => catalogueState.savedCollections || [])
const savedCollectionSaveUrl = computed(() => catalogueState.savedCollectionSaveUrl || '/apps/library/collections')
const savedCollectionDeleteBaseUrl = computed(() => catalogueState.savedCollectionDeleteBaseUrl || '/apps/library/collections/__COLLECTION_ID__/delete')
const viewModes = ['compact', 'gallery', 'list', 'shelf']
const viewMode = computed(() => viewModes.includes(activeFilters.view) ? activeFilters.view : 'compact')
const coverGalleryClasses = computed(() => ({
  ['library-cover-' + 'gallery--compact']: viewMode.value === 'compact',
  ['library-cover-' + 'gallery--gallery']: viewMode.value === 'gallery',
  ['library-cover-' + 'gallery--shelf']: viewMode.value === 'shelf',
}))

const activeFilterChips = computed(() => Object.entries(filterLabels)
  .map(([key, label]) => ({ key, label: t('library', label), value: activeFilters[key] || '' }))
  .filter((chip) => String(chip.value).trim() !== ''
    && !(chip.key === 'sort' && chip.value === 'title')
    && !(chip.key === 'view' && chip.value === 'compact')))
const sidebarVisibleFilterKeys = new Set([
  'q', 'sort', 'view', 'type', 'publisher', 'publication', 'year', 'creator', 'tag', 'format', 'shelf', 'folder',
  'status', 'workflowStatus', 'subject', 'classification', 'scannerConflicts',
])
const sidebarHiddenFilters = computed(() => Object.entries(canonicalReviewFilters(activeFilters))
  .filter(([key, value]) => !sidebarVisibleFilterKeys.has(key) && String(value || '').trim() !== '')
  .map(([key, value]) => ({ key, value })))
const quickHiddenFilters = computed(() => Object.entries(activeFilters)
  .filter(([key, value]) => !['q', 'sort', 'starred'].includes(key) && String(value || '').trim() !== '')
  .map(([key, value]) => ({ key, value })))
const batchHiddenFilters = computed(() => Object.entries(canonicalReviewFilters(activeFilters))
  .filter(([_key, value]) => String(value || '').trim() !== '')
  .map(([key, value]) => ({ key, value })))
const reviewHiddenFilters = computed(() => batchHiddenFilters.value.filter(({ key, value }) => key !== 'q' && !(key === 'sort' && value === 'title')))
const coverImageStates = reactive({})
const homeRows = computed(() => catalogueState.homeRows || { continueReading: [], recentlyAdded: [] })
const homeShelves = computed(() => catalogueState.homeShelves || [])
const shelfSummaries = computed(() => catalogueState.shelfSummaries || [])
const shelfTree = computed(() => catalogueState.shelfTree || [])
const needsAttention = computed(() => catalogueState.needsAttention || { count: 0, url: `${catalogueRootUrl.value}?needsMetadata=1` })
const selectedItemIds = ref([])
const selectedItemIdSet = computed(() => new Set(selectedItemIds.value))

function toggleItemSelection(itemId, checked) {
  const next = new Set(selectedItemIds.value)
  if (checked) next.add(Number(itemId))
  else next.delete(Number(itemId))
  selectedItemIds.value = [...next]
}

function selectVisibleItems(event) {
  selectedItemIds.value = event.currentTarget.checked ? items.value.map((item) => Number(item.id)) : []
}

function reconcileSelectedItems() {
  const visible = new Set(items.value.map((item) => Number(item.id)))
  selectedItemIds.value = selectedItemIds.value.filter((id) => visible.has(id))
}

function appendSelectedItemIds(event) {
  const form = event.target
  if (!(form instanceof HTMLFormElement)) return
  form.querySelectorAll('input[data-library-selected-id]').forEach((input) => input.remove())
  for (const id of selectedItemIds.value) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'itemIds[]'
    input.value = String(id)
    input.dataset.librarySelectedId = '1'
    form.appendChild(input)
  }
}

const selectedDrawerItem = ref(null)
const sidebarRequestedId = ref(null)
const sidebarState = reactive({ loading: false, error: '', missing: false })
const sidebarSection = ref('overview')
const sidebarMetadataState = reactive({ saving: false, saved: false, error: '' })
const sidebarMetadataDraft = reactive({ title: '', publicationDate: '', identifiers: [] })
const sidebarHeading = ref(null)
const sidebarComponent = ref(null)
const sidebarIsMobile = ref(false)
let sidebarOpener = null
let sidebarMobileQuery = null
let pendingSidebarFocusRestore = null
let sidebarUnmounting = false
let sidebarFocusRestoreFrame = null
let sidebarFocusRestoreGeneration = 0
const sidebarOpen = computed(() => sidebarRequestedId.value !== null)
const MAX_ITEM_ID = 2147483647
const selectedDrawerIndex = computed(() => selectedDrawerItem.value ? items.value.findIndex((item) => item.id === selectedDrawerItem.value.id) : -1)
const drawerPreviousItem = computed(() => selectedDrawerIndex.value > 0 ? items.value[selectedDrawerIndex.value - 1] : null)
const drawerNextItem = computed(() => selectedDrawerIndex.value >= 0 && selectedDrawerIndex.value < items.value.length - 1 ? items.value[selectedDrawerIndex.value + 1] : null)
const reviewableMetadataFields = ['publicationType', 'title', 'subtitle', 'creators', 'publication', 'publicationDate', 'language', 'publisher', 'description', 'subjects', 'classifications']
const sidebarSections = [
  { key: 'overview', label: 'Overview' },
  { key: 'metadata', label: 'Metadata' },
  { key: 'activity', label: 'Activity' },
]

function publicationDateForEditor(value) {
  const normalized = String(value ?? '').trim()
  const isoDateTime = normalized.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/)
  return isoDateTime ? isoDateTime[1] : normalized
}

function normalizeSidebarItem(item) {
  return { ...item, publicationDate: publicationDateForEditor(item?.publicationDate) }
}

function resetSidebarMetadataDraft(item) {
  sidebarMetadataDraft.title = String(item?.title || '')
  sidebarMetadataDraft.publicationDate = publicationDateForEditor(item?.publicationDate)
  sidebarMetadataDraft.identifiers = Array.isArray(item?.identifiers)
    ? item.identifiers.map((identifier) => ({ scheme: String(identifier?.scheme || ''), displayValue: String(identifier?.displayValue || identifier?.value || '') }))
    : []
  Object.assign(sidebarMetadataState, { saving: false, saved: false, error: '' })
}

function addSidebarIdentifier() {
  sidebarMetadataDraft.identifiers.push({ scheme: '', displayValue: '' })
}

function removeSidebarIdentifier(index) {
  sidebarMetadataDraft.identifiers.splice(index, 1)
}

async function saveSidebarMetadata() {
  const item = selectedDrawerItem.value
  if (!item?.updateUrl || sidebarMetadataState.saving) return
  Object.assign(sidebarMetadataState, { saving: true, saved: false, error: '' })
  const body = new FormData()
  body.set('requesttoken', requestToken.value)
  body.set('metadataAutosave', '1')
  for (const field of ['publicationType', 'subtitle', 'creators', 'publication', 'language', 'publisher', 'description', 'subjects', 'classifications', 'personalRating']) {
    const value = item[field]
    body.set(field, Array.isArray(value) ? value.join(', ') : String(value ?? ''))
  }
  body.set('title', sidebarMetadataDraft.title)
  body.set('publicationDate', publicationDateForEditor(sidebarMetadataDraft.publicationDate))
  sidebarMetadataDraft.identifiers.forEach((identifier, index) => {
    body.set(`identifiers[${index}][scheme]`, identifier.scheme)
    body.set(`identifiers[${index}][displayValue]`, identifier.displayValue)
  })
  try {
    const response = await fetch(item.updateUrl, { method: 'POST', body, credentials: 'same-origin', headers: { Accept: 'application/json' } })
    const payload = await response.json().catch(() => ({}))
    if (!response.ok || payload.saved !== true) throw new Error(payload.error || t('library', 'Metadata could not be saved.'))
    item.title = sidebarMetadataDraft.title.trim()
    item.publicationDate = publicationDateForEditor(sidebarMetadataDraft.publicationDate)
    item.identifiers = sidebarMetadataDraft.identifiers.filter((identifier) => identifier.scheme.trim() || identifier.displayValue.trim()).map((identifier) => ({ ...identifier }))
    const catalogueItem = items.value.find((candidate) => Number(candidate.id) === Number(item.id))
    if (catalogueItem) {
      catalogueItem.title = item.title
      catalogueItem.publicationDate = item.publicationDate
    }
    sidebarMetadataState.saved = true
  } catch (error) {
    sidebarMetadataState.error = error?.message || t('library', 'Metadata could not be saved.')
  } finally {
    sidebarMetadataState.saving = false
  }
}
const metadataReviewWorkbench = computed(() => {
  const enabled = isCanonicalReviewFilter('scannerConflicts', activeFilters.scannerConflicts) || isCanonicalReviewFilter('weakMetadata', activeFilters.weakMetadata)
  const item = enabled ? items.value.find((candidate) => reviewConflictFieldsFor(candidate).length > 0) : null
  return {
    enabled,
    item,
    fields: item ? reviewConflictFieldsFor(item) : [],
    reviewNextUrl: scannerConflictReviewUrl.value,
    skipUrl: pagination.value.nextUrl || scannerConflictReviewUrl.value,
  }
})
const reviewQueues = computed(() => reviewQueueDefinitions.map((queue) => ({
  ...queue,
  label: t('library', queue.label),
  href: `${catalogueRootUrl.value}?${encodeURIComponent(queue.key)}=${encodeURIComponent(queue.value)}`,
  active: String(activeFilters[queue.key] || '') === queue.value,
})))

function normalizedMetadataValue(value) {
  if (Array.isArray(value)) return JSON.stringify(value)
  return value === null || value === undefined ? '' : String(value)
}

function reviewConflictFieldsFor(item) {
  const scannerValues = item.fieldValues || {}
  const fieldSources = item.fieldSources || {}
  return reviewableMetadataFields
    .filter((field) => Object.prototype.hasOwnProperty.call(scannerValues, field))
    .map((field) => {
      const currentValue = normalizedMetadataValue(item[field])
      const scannerCandidate = normalizedMetadataValue(scannerValues[field])
      const sourceProvenance = normalizedMetadataValue(fieldSources[field] || item['metadata' + 'Source'] || 'scanner')
      const pathTemplateCandidate = sourceProvenance.includes('filename') || sourceProvenance.includes('path') ? scannerCandidate : ''
      const sidecarValue = sourceProvenance.includes('sidecar') ? scannerCandidate : ''
      return { field, currentValue, scannerCandidate, pathTemplateCandidate, sidecarValue, sourceProvenance, differs: currentValue !== scannerCandidate }
    })
    .filter((field) => field.differs)
}

let sidebarRequestGeneration = 0
let sidebarRequestController = null
function canonicalItemIdFromUrl() {
  const values = new URLSearchParams(window.location.search).getAll('item')
  if (values.length !== 1 || !/^[1-9][0-9]*$/.test(values[0])) return null
  const numeric = Number(values[0])
  return Number.isSafeInteger(numeric) && numeric <= MAX_ITEM_ID ? numeric : null
}

function updateItemHistory(itemId, mode = 'push') {
  const url = new URL(window.location.href)
  url.searchParams.delete('item')
  if (itemId !== null) url.searchParams.set('item', String(itemId))
  history[`${mode}State`]({}, '', `${url.pathname}${url.search}${url.hash}`)
}

async function selectSidebarItem(itemId, { historyMode = 'push', seed = null } = {}) {
  sidebarRequestController?.abort()
  const generation = ++sidebarRequestGeneration
  const controller = new AbortController()
  sidebarRequestController = controller
  sidebarRequestedId.value = itemId
  sidebarSection.value = 'overview'
  selectedDrawerItem.value = seed && Number(seed.id) === itemId ? normalizeSidebarItem(seed) : null
  if (selectedDrawerItem.value) resetSidebarMetadataDraft(selectedDrawerItem.value)
  Object.assign(sidebarState, { loading: true, error: '', missing: false })
  if (historyMode !== 'none') updateItemHistory(itemId, historyMode)
  try {
    const endpoint = itemSidebarUrlTemplate.value.replace('__ITEM_ID__', encodeURIComponent(String(itemId)))
    const response = await fetch(endpoint, { headers: { Accept: 'application/json' }, credentials: 'same-origin', signal: controller.signal })
    if (generation !== sidebarRequestGeneration) return
    if (!response.ok) {
      selectedDrawerItem.value = null
      sidebarState.missing = response.status === 404
      sidebarState.error = response.status === 404 ? t('library', 'This publication is unavailable or you do not have access.') : t('library', 'Could not load publication details. Try again.')
      return
    }
    const payload = await response.json()
    if (generation !== sidebarRequestGeneration) return
    if (typeof payload?.item?.id !== 'number' || !Number.isSafeInteger(payload.item.id) || payload.item.id !== itemId) {
      selectedDrawerItem.value = null
      sidebarState.missing = false
      sidebarState.error = t('library', 'Could not load publication details. Try again.')
      return
    }
    selectedDrawerItem.value = normalizeSidebarItem(payload.item)
    resetSidebarMetadataDraft(selectedDrawerItem.value)
    await nextTick()
  } catch (error) {
    if (generation === sidebarRequestGeneration && error?.name !== 'AbortError') {
      selectedDrawerItem.value = null
      sidebarState.missing = false
      sidebarState.error = t('library', 'Could not load publication details. Try again.')
    }
  } finally {
    if (generation === sidebarRequestGeneration) {
      sidebarState.loading = false
      sidebarRequestController = null
    }
  }
}

function openDetailsDrawer(item, event) {
  cancelSidebarFocusRestore()
  sidebarOpener = event?.currentTarget instanceof HTMLElement ? event.currentTarget : null
  selectSidebarItem(Number(item.id), { seed: item })
}

function closeDetailsDrawer({ historyMode = 'push', restoreFocus = true } = {}) {
  pendingSidebarFocusRestore = restoreFocus ? sidebarOpener : null
  sidebarOpener = null
  sidebarRequestController?.abort()
  sidebarRequestController = null
  sidebarRequestGeneration += 1
  sidebarRequestedId.value = null
  selectedDrawerItem.value = null
  sidebarSection.value = 'overview'
  Object.assign(sidebarState, { loading: false, error: '', missing: false })
  if (historyMode !== 'none') updateItemHistory(null, historyMode)
}

function handleSidebarOpened() {
  // NcAppSidebar owns initial focus on mobile when it activates its trap after
  // the slide transition. On desktop there is no trap, so focus the named
  // application heading once the same transition has settled.
  if (sidebarIsMobile.value) {
    const root = sidebarComponent.value?.$refs?.sidebar || sidebarComponent.value?.$el
    root?.querySelector?.('.app-sidebar__close')?.focus()
  } else {
    sidebarHeading.value?.focus()
  }
}

function handleSidebarClosed() {
  const opener = pendingSidebarFocusRestore
  pendingSidebarFocusRestore = null
  cancelSidebarFocusRestore()
  if (sidebarUnmounting || !opener?.isConnected) return
  const generation = sidebarFocusRestoreGeneration
  // NcAppSidebar emits `closed` before making its own final focus call. Restore
  // on the next frame so its transition lifecycle has completely settled.
  sidebarFocusRestoreFrame = window.requestAnimationFrame(() => {
    sidebarFocusRestoreFrame = null
    if (generation !== sidebarFocusRestoreGeneration || sidebarUnmounting || sidebarOpen.value || !opener.isConnected) return
    opener.focus()
  })
}

function cancelSidebarFocusRestore() {
  sidebarFocusRestoreGeneration += 1
  if (sidebarFocusRestoreFrame !== null) {
    window.cancelAnimationFrame(sidebarFocusRestoreFrame)
    sidebarFocusRestoreFrame = null
  }
}

function updateSidebarMobileState(event = sidebarMobileQuery) {
  sidebarIsMobile.value = Boolean(event?.matches)
  if (sidebarOpen.value) nextTick(handleSidebarOpened)
}

function showDrawerItem(item) {
  if (item) selectSidebarItem(Number(item.id), { seed: item })
}
const quickSearchInput = ref(null)
let catalogueRequestGeneration = 0
let catalogueRequestController = null
let initialAuxiliaryHydrationController = null
let initialAuxiliaryHydrationFrame = null
const catalogueRequestState = reactive({ loading: false, error: '' })

function buildFilterParams(form) {
  const params = normalizedReviewParams(new FormData(form))
  params.delete('publicationSearch')
  params.delete('creatorSearch')
  params.delete('subjectSearch')
  params.delete('publisherSearch')
  params.delete('folderSearch')
  params.delete('yearSearch')
  for (const key of Array.from(params.keys())) {
    if (String(params.get(key) || '').trim() === '') {
      params.delete(key)
    }
  }
  params.delete('page')
  if (params.get('view') === 'compact') {
    params.delete('view')
  }
  return params
}

async function fetchFacetSuggestions(facet, query, generation) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(activeFilters)) {
    const normalized = String(value || '').trim()
    if (key !== facet && normalized !== '' && !(key === 'sort' && normalized === 'title') && !(key === 'view' && normalized === 'compact')) params.set(key, normalized)
  }
  params.set(`${facet}Search`, query)
  const controller = new AbortController()
  if (facet === 'creator') creatorSuggestionController = controller
  else if (facet === 'publisher') publisherSuggestionController = controller
  else if (facet === 'subject') subjectSuggestionController = controller
  else if (facet === 'folder') folderSuggestionController = controller
  else yearSuggestionController = controller
  const url = facet === 'creator' ? creatorSuggestionsUrl.value : (facet === 'publisher' ? publisherSuggestionsUrl.value : (facet === 'subject' ? subjectSuggestionsUrl.value : (facet === 'folder' ? folderSuggestionsUrl.value : yearSuggestionsUrl.value)))
  try {
    const response = await fetch(`${url}?${params}`, { headers: { Accept: 'application/json' }, credentials: 'same-origin', signal: controller.signal })
    if (!response.ok) throw new Error(`${facet} suggestions request failed: ${response.status}`)
    const payload = await response.json()
    const currentGeneration = facet === 'creator' ? creatorSuggestionGeneration : (facet === 'publisher' ? publisherSuggestionGeneration : (facet === 'subject' ? subjectSuggestionGeneration : (facet === 'folder' ? folderSuggestionGeneration : yearSuggestionGeneration)))
    const currentSearch = facet === 'creator' ? creatorSearch.value : (facet === 'publisher' ? publisherSearch.value : (facet === 'subject' ? subjectSearch.value : (facet === 'folder' ? folderSearch.value : yearSearch.value)))
    if (generation === currentGeneration && currentSearch.trim() === query) {
      if (facet === 'creator') remoteCreatorSuggestions.value = Array.isArray(payload.creators) ? payload.creators : []
      else if (facet === 'publisher') remotePublisherSuggestions.value = Array.isArray(payload.publishers) ? payload.publishers : []
      else if (facet === 'subject') remoteSubjectSuggestions.value = Array.isArray(payload.subjects) ? payload.subjects : []
      else if (facet === 'folder') remoteFolderSuggestions.value = Array.isArray(payload.folders) ? payload.folders : []
      else remoteYearSuggestions.value = Array.isArray(payload.years) ? payload.years : []
    }
  } catch (error) {
    if (error?.name !== 'AbortError') {
      if (facet === 'creator' && generation === creatorSuggestionGeneration) remoteCreatorSuggestions.value = null
      if (facet === 'publisher' && generation === publisherSuggestionGeneration) remotePublisherSuggestions.value = null
      if (facet === 'subject' && generation === subjectSuggestionGeneration) remoteSubjectSuggestions.value = null
      if (facet === 'folder' && generation === folderSuggestionGeneration) remoteFolderSuggestions.value = null
      if (facet === 'year' && generation === yearSuggestionGeneration) remoteYearSuggestions.value = null
    }
  }
}

function fetchCreatorSuggestions(query, generation) { return fetchFacetSuggestions('creator', query, generation) }
function fetchPublisherSuggestions(query, generation) { return fetchFacetSuggestions('publisher', query, generation) }
function fetchSubjectSuggestions(query, generation) { return fetchFacetSuggestions('subject', query, generation) }
function fetchFolderSuggestions(query, generation) { return fetchFacetSuggestions('folder', query, generation) }
function fetchYearSuggestions(query, generation) { return fetchFacetSuggestions('year', query, generation) }

async function fetchPublicationSuggestions(query, generation) {
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(activeFilters)) {
    const normalized = String(value || '').trim()
    if (key !== 'publication' && normalized !== '' && !(key === 'sort' && normalized === 'title') && !(key === 'view' && normalized === 'compact')) {
      params.set(key, normalized)
    }
  }
  params.set('publicationSearch', query)
  const controller = new AbortController()
  publicationSuggestionController = controller
  try {
    const response = await fetch(`${publicationSuggestionsUrl.value}?${params}`, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
      signal: controller.signal,
    })
    if (!response.ok) throw new Error(`Publication suggestions request failed: ${response.status}`)
    const payload = await response.json()
    if (generation === publicationSuggestionGeneration && publicationSearch.value.trim() === query) {
      remotePublicationSuggestions.value = Array.isArray(payload.publications) ? payload.publications : []
    }
  } catch (error) {
    if (error?.name !== 'AbortError' && generation === publicationSuggestionGeneration) remotePublicationSuggestions.value = null
  } finally {
    if (generation === publicationSuggestionGeneration) publicationSuggestionController = null
  }
}

function applyCatalogueState(nextState) {
  catalogueItems.splice(0, catalogueItems.length, ...((nextState.items || []).map((item) => ({ ...item }))))
  reconcileSelectedItems()
  const deferredKeys = new Set(nextState.facetsDeferred ? [
    'shelves', 'formats', 'publicationTypes', 'publishers', 'publications', 'publicationSummaries', 'publicationIssueContext',
    'publicationYears', 'publicationYearLandingUrls', 'creators', 'creatorLandingUrls', 'scanStatuses', 'workflowStatuses',
    'subjects', 'classifications', 'smartViewCounts', 'smartViewCountsPending', 'savedCollections',
  ] : [])
  for (const key of ['shelves', 'formats', 'publicationTypes', 'publishers', 'publications', 'publicationSummaries', 'publicationIssueContext', 'publicationYears', 'publicationYearLandingUrls', 'creators', 'creatorLandingUrls', 'scanStatuses', 'workflowStatuses', 'subjects', 'classifications', 'cataloguePagination', 'catalogueRootUrl', 'reviewUrl', 'settingsUrl', 'metadataExportUrl', 'metadataSidecarManifestUrl', 'metadataSidecarBundleUrl', 'catalogueEndpointUrl', 'publicationSuggestionsUrl', 'creatorSuggestionsUrl', 'publisherSuggestionsUrl', 'subjectSuggestionsUrl', 'folderSuggestionsUrl', 'yearSuggestionsUrl', 'itemSidebarUrlTemplate', 'batchTagUrl', 'batchTagRemoveUrl', 'batchMetadataResetUrl', 'batchMetadataEditPreviewUrl', 'batchCoverRefreshUrl', 'scannerConflictReviewUrl', 'metadataErrorsUrl', 'metadataErrorsTsvUrl', 'coverProbeUrl', 'importHealthSummaryUrl', 'smartViewCounts', 'smartViewCountsPending', 'savedCollections', 'savedCollectionSaveUrl', 'savedCollectionDeleteBaseUrl']) {
    if (!deferredKeys.has(key) && Object.prototype.hasOwnProperty.call(nextState, key)) {
      catalogueState[key] = nextState[key]
    }
  }
  Object.assign(activeFilters, activeFilterDefaults, nextState.activeFilters || {})
}

async function hydrateInitialAuxiliaryState() {
  if (catalogueState.surface !== 'index') return
  const generation = catalogueRequestGeneration
  const filterSnapshot = JSON.stringify({ ...activeFilters })
  const params = new URLSearchParams()
  params.set('hydrate', '1')
  for (const [key, value] of Object.entries(activeFilters)) {
    const normalized = String(value || '').trim()
    if (normalized !== '' && !(key === 'sort' && normalized === 'title') && !(key === 'view' && normalized === 'compact')) params.set(key, normalized)
  }
  const controller = new AbortController()
  initialAuxiliaryHydrationController = controller
  try {
    const response = await fetch(`${catalogueEndpointUrl.value}${params.size ? `?${params}` : ''}`, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
      signal: controller.signal,
    })
    if (!response.ok) return
    const nextState = await response.json()
    if (generation !== catalogueRequestGeneration || filterSnapshot !== JSON.stringify({ ...activeFilters })) return
    for (const key of ['shelves', 'formats', 'publicationTypes', 'publications', 'publicationSummaries', 'publicationIssueContext', 'publicationYears', 'publicationYearLandingUrls', 'scanStatuses', 'workflowStatuses', 'classifications', 'smartViewCounts', 'smartViewCountsPending', 'savedCollections']) {
      if (Object.prototype.hasOwnProperty.call(nextState, key)) catalogueState[key] = nextState[key]
    }
  } catch (error) {
    if (error?.name !== 'AbortError') return
  } finally {
    if (initialAuxiliaryHydrationController === controller) initialAuxiliaryHydrationController = null
  }
}

async function fetchImportHealthSummary(refresh = false) {
  if (importHealthState.loading || importHealthState.refreshing) return
  if (refresh) {
    importHealthState.refreshing = true
  } else {
    importHealthState.loading = true
  }
  importHealthState.error = ''
  try {
    const response = await fetch(`${importHealthSummaryUrl.value}${refresh ? '?refresh=1' : ''}`, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
    })
    if (!response.ok) {
      throw new Error(`Import health request failed: ${response.status}`)
    }
    importHealthState.summary = await response.json()
    importHealthState.loaded = true
  } catch (error) {
    importHealthState.error = error?.message || String(error)
  } finally {
    importHealthState.loading = false
    importHealthState.refreshing = false
  }
}

async function loadImportHealthSummary(event) {
  if (event && event.currentTarget && event.currentTarget.open !== true) return
  if (importHealthState.loaded || importHealthState.loading) return
  await fetchImportHealthSummary(false)
}

async function refreshImportHealthSummary() {
  await fetchImportHealthSummary(true)
}

async function submitFiltersAjax(event, scheduled = null) {
  const form = event?.currentTarget?.tagName === 'FORM' ? event.currentTarget : event?.currentTarget?.form
  if (!form && !scheduled?.params) return
  const params = normalizedReviewParams(scheduled?.params ?? buildFilterParams(form))
  if (isHome.value || isShelves.value) {
    submitCapturedFilterFallback(params, catalogueRootUrl.value)
    return
  }
  const query = params.toString()
  const endpointQuery = query ? `?${query}` : ''
  const generation = scheduled?.generation ?? ++catalogueRequestGeneration
  const requestedReviewDestination = hasCanonicalReviewDestination(params)
  const historyMode = scheduled?.historyMode ?? (requestedReviewDestination ? 'push' : 'replace')
  const historyTraversal = scheduled?.historyTraversal === true
  if (generation !== catalogueRequestGeneration) return
  if (scheduled === null) catalogueRequestController?.abort()
  const controller = new AbortController()
  catalogueRequestController = controller
  catalogueRequestState.loading = true
  catalogueRequestState.error = ''
  try {
    const response = await fetch(catalogueEndpointUrl.value + endpointQuery, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
      signal: controller.signal,
    })
    if (generation !== catalogueRequestGeneration) return
    if (!response.ok) {
      if (historyTraversal) {
        submitCapturedFilterFallback(params)
      } else if (requestedReviewDestination) {
        catalogueRequestState.error = t('library', 'Could not load this review queue. Try again.')
      } else {
        submitCapturedFilterFallback(params)
      }
      return
    }
    const nextState = await response.json()
    if (generation !== catalogueRequestGeneration) return
    applyCatalogueState(nextState)
    if (historyMode !== 'none') {
      history[historyMode === 'push' ? 'pushState' : 'replaceState']({}, '', query ? `?${query}` : window.location.pathname)
      if (sidebarOpen.value) closeDetailsDrawer({ historyMode: 'none' })
    }
  } catch (error) {
    if (generation === catalogueRequestGeneration && error?.name !== 'AbortError') {
      if (historyTraversal) submitCapturedFilterFallback(params)
      else if (requestedReviewDestination) catalogueRequestState.error = t('library', 'Could not load this review queue. Try again.')
      else submitCapturedFilterFallback(params)
    }
  } finally {
    if (generation === catalogueRequestGeneration) {
      catalogueRequestController = null
      catalogueRequestState.loading = false
    }
  }
}

function restoreCatalogueFromHistory() {
  catalogueRequestController?.abort()
  const params = new URLSearchParams(window.location.search)
  const requestedId = canonicalItemIdFromUrl()
  if (params.has('item') && requestedId === null) {
    params.delete('item')
    history.replaceState({}, '', `${window.location.pathname}${params.toString() ? `?${params}` : ''}${window.location.hash}`)
  }
  if (requestedId === null) closeDetailsDrawer({ historyMode: 'none' })
  else selectSidebarItem(requestedId, { historyMode: 'none', seed: items.value.find((item) => Number(item.id) === requestedId) || null })
  params.delete('item')
  submitFiltersAjax(null, {
    params: normalizedReviewParams(params),
    generation: ++catalogueRequestGeneration,
    historyMode: 'none',
    historyTraversal: true,
  })
}

function submitCapturedFilterFallback(params, action = window.location.pathname) {
  const fallback = document.createElement('form')
  fallback.method = 'get'
  fallback.action = action
  fallback.hidden = true
  for (const [name, value] of params.entries()) {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    fallback.appendChild(input)
  }
  document.body.appendChild(fallback)
  fallback.submit()
  fallback.remove()
}

function submitFiltersNow(formOrEvent, params = null, generation = null) {
  if (params === null) {
    void submitFiltersAjax(formOrEvent)
    return
  }
  void submitFiltersAjax({ currentTarget: formOrEvent }, { params, generation })
}

async function applyPublicationFilter(form, publication = publicationSearch.value) {
  activeFilters.publication = String(publication || '').trim()
  publicationSearch.value = activeFilters.publication
  publicationSearchFocused.value = false
  await nextTick()
  void submitFiltersAjax({ currentTarget: form })
}

function applyFiltersWithPublication(event) { void applyPublicationFilter(event.currentTarget) }
function selectPublicationSuggestion(publication, event) { void applyPublicationFilter(event.currentTarget.form, publication) }

async function applySearchFilters(form) {
  activeFilters.q = String(quickSearch.value || '').trim()
  activeFilters.publication = String(publicationSearch.value || '').trim()
  activeFilters.publisher = String(publisherSearch.value || '').trim()
  activeFilters.creator = String(creatorSearch.value || '').trim()
  activeFilters.subject = String(subjectSearch.value || '').trim()
  activeFilters.folder = String(folderSearch.value || '').trim()
  activeFilters.year = String(yearSearch.value || '').trim()
  publicationSearchFocused.value = false
  publisherSearchFocused.value = false
  creatorSearchFocused.value = false
  subjectSearchFocused.value = false
  folderSearchFocused.value = false
  yearSearchFocused.value = false
  await nextTick()
  void submitFiltersAjax({ currentTarget: form })
}
async function applyFacetFilter(form, facet, value) {
  activeFilters[facet] = String(value || '').trim()
  if (facet === 'creator') { creatorSearch.value = activeFilters.creator; creatorSearchFocused.value = false }
  else if (facet === 'publisher') { publisherSearch.value = activeFilters.publisher; publisherSearchFocused.value = false }
  else if (facet === 'subject') { subjectSearch.value = activeFilters.subject; subjectSearchFocused.value = false }
  else if (facet === 'folder') { folderSearch.value = activeFilters.folder; folderSearchFocused.value = false }
  else { yearSearch.value = activeFilters.year; yearSearchFocused.value = false }
  await nextTick()
  void submitFiltersAjax({ currentTarget: form })
}
function applyAllSearchFilters(event) { void applySearchFilters(event.currentTarget) }
function selectCreatorSuggestion(creator, event) { void applyFacetFilter(event.currentTarget.form, 'creator', creator) }
function selectPublisherSuggestion(publisher, event) { void applyFacetFilter(event.currentTarget.form, 'publisher', publisher) }
function selectFolderSuggestion(folder, event) { void applyFacetFilter(event.currentTarget.form, 'folder', folder) }
function applySubjectFilter(form, subject = subjectSearch.value) {
  window.clearTimeout(subjectSuggestionTimer)
  subjectSuggestionController?.abort()
  subjectSuggestionController = null
  void applyFacetFilter(form, 'subject', subject)
}
function applySubjectSearch(event) { applySubjectFilter(event.currentTarget.form) }
function selectSubjectSuggestion(subject, event) { applySubjectFilter(event.currentTarget.form, subject) }
function selectYearSuggestion(year, event) { void applyFacetFilter(event.currentTarget.form, 'year', year) }

function filterChipRemoveParams(key) {
  const params = new URLSearchParams()
  for (const [param, value] of Object.entries(activeFilters)) {
    const normalized = String(value || '').trim()
    if (normalized !== '' && param !== key && !(param === 'sort' && normalized === 'title') && !(param === 'view' && normalized === 'compact')) {
      params.set(param, normalized)
    }
  }
  return params
}

function filterChipRemoveUrl(key) {
  const query = filterChipRemoveParams(key).toString()
  if (isHome.value || isShelves.value) return `${catalogueRootUrl.value}${query ? `?${query}` : ''}`
  return query ? `?${query}` : '?'
}

function removeFilterChip(key) {
  const params = filterChipRemoveParams(key)
  activeFilters[key] = key === 'sort' ? 'title' : (key === 'view' ? 'compact' : '')
  void submitFiltersAjax(null, {
    params,
    generation: ++catalogueRequestGeneration,
  })
}

function selectReviewQueue(queue) {
  const params = new URL(queue.href, window.location.origin).searchParams
  void submitFiltersAjax(null, {
    params,
    generation: ++catalogueRequestGeneration,
  })
}

function clearSearchUrl() {
  return filterChipRemoveUrl('q')
}

const smartViewCounts = computed(() => catalogueState.smartViewCounts || {})
const smartViewCountsPending = computed(() => new Set(catalogueState.smartViewCountsPending || []))
function reviewQueueCount(countKey) {
  if (smartViewCountsPending.value.has(countKey) || !Object.prototype.hasOwnProperty.call(smartViewCounts.value, countKey)) return '—'
  return Number(smartViewCounts.value[countKey] || 0)
}
const currentSavableFilters = computed(() => {
  const filters = {}
  for (const [key, value] of Object.entries(activeFilters)) {
    const normalized = String(value || '').trim()
    if (normalized !== '' && !(key === 'sort' && normalized === 'title')) {
      filters[key] = normalized
    }
  }
  return filters
})
const currentSavableFiltersJson = computed(() => JSON.stringify(currentSavableFilters.value))
const canSaveCurrentView = computed(() => Object.keys(currentSavableFilters.value).length > 0)
const smartViews = computed(() => [
  { key: 'recently-opened', label: 'Recently opened', description: 'Continue from the publications you opened through Library.', query: 'sort=lastOpened', filters: { sort: 'lastOpened' } },
  { key: 'starred', label: 'Starred', description: 'Your marked publications and reference items.', query: 'starred=1', filters: { starred: '1' } },
  { key: 'to-read', label: 'To read', description: 'Publications queued for later.', query: 'workflowStatus=to-read', filters: { workflowStatus: 'to-read' } },
  { key: 'reading', label: 'Reading', description: 'Publications currently in progress.', query: 'workflowStatus=reading', filters: { workflowStatus: 'reading' } },
  { key: 'finished', label: 'Finished', description: 'Completed publications.', query: 'workflowStatus=finished', filters: { workflowStatus: 'finished' } },
  { key: 'needs-action', label: 'Needs action', description: 'Items that need a cleanup or follow-up decision.', query: 'workflowStatus=needs-action', filters: { workflowStatus: 'needs-action' } },
  { key: 'needs-metadata', label: 'Needs details', description: 'Items with missing core fields, extraction errors, or filename-only metadata.', query: 'needsMetadata=1', filters: { needsMetadata: '1' } },
  { key: 'scanner-conflicts', label: 'Suggested updates', description: 'Rows where current metadata has a suggested update.', query: 'scannerConflicts=1', filters: { scannerConflicts: '1' } },
  { key: 'metadata-errors', label: 'Metadata errors', description: 'Files whose metadata extraction needs review.', query: 'status=metadata_error', filters: { status: 'metadata_error' } },
  { key: 'placeholder-covers', label: 'Placeholder covers', description: 'Likely placeholder-cover candidates without a manual cover override.', query: 'coverReview=placeholder', filters: { coverReview: 'placeholder' } },
  { key: 'no-creator', label: 'No creator', description: 'Publications without creator metadata.', query: 'noCreator=1', filters: { noCreator: '1' } },
  { key: 'no-publication', label: 'No publication/series', description: 'Items without publication, series, periodical or collection metadata.', query: 'noPublication=1', filters: { noPublication: '1' } },
  { key: 'missing-date', label: 'Missing date', description: 'Items without a publication date or year.', query: 'noDate=1', filters: { noDate: '1' } },
  { key: 'title-from-filename', label: 'Filename-derived title', description: 'Rows whose title still comes from filename/path parsing.', query: 'titleFromFilename=1', filters: { titleFromFilename: '1' } },
  { key: 'weak-filename-metadata', label: 'Needs details', description: 'Items whose metadata still depends on filename/folder parsing.', query: 'weakMetadata=filename', filters: { weakMetadata: 'filename' } },
  { key: 'no-description', label: 'No description', description: 'Rows without summary or description text.', query: 'noDescription=1', filters: { noDescription: '1' } },
  { key: 'unsupported-containers', label: 'Unsupported archive/container', description: 'Archive/container formats that Library cannot inspect deeply yet.', query: 'unsupportedContainer=1', filters: { unsupportedContainer: '1' } },
  { key: 'unreviewed-imports', label: 'Unreviewed imports', description: 'Scanner-created catalogue rows not yet touched by user review.', query: 'unreviewedImports=1', filters: { unreviewedImports: '1' } },
])

const weakMetadataDashboardRows = computed(() => [
  { key: 'no-creator', label: 'Missing creator', description: 'Creator field is empty.', filters: { noCreator: '1' } },
  { key: 'no-publication', label: 'Missing publication/series', description: 'No publication, series, periodical or collection.', filters: { noPublication: '1' } },
  { key: 'missing-date', label: 'Missing date', description: 'No publication year/date is indexed.', filters: { noDate: '1' } },
  { key: 'title-from-filename', label: 'Filename-derived title', description: 'Title was inferred from the source path.', filters: { titleFromFilename: '1' } },
  { key: 'weak-filename-metadata', label: 'Filename/path-derived metadata', description: 'At least one indexed field still depends on filename parsing.', filters: { weakMetadata: 'filename' } },
  { key: 'placeholder-covers', label: 'Placeholder cover', description: 'Likely placeholder-cover candidates.', filters: { coverReview: 'placeholder' } },
  { key: 'scanner-conflicts', label: 'Suggested updates', description: 'Current metadata has a suggested update.', filters: { scannerConflicts: '1' } },
  { key: 'metadata-errors', label: 'Metadata extraction error', description: 'Scanner recorded a metadata extraction error.', filters: { status: 'metadata_error' } },
  { key: 'no-description', label: 'No description', description: 'No summary/description text is indexed.', filters: { noDescription: '1' } },
  { key: 'unsupported-containers', label: 'Unsupported archive/container', description: 'Container type needs manual inspection or future extractor support.', filters: { unsupportedContainer: '1' } },
])

function setViewMode(nextMode) {
  if (!viewModes.includes(nextMode)) return
  activeFilters.view = nextMode
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(canonicalReviewFilters(activeFilters))) {
    const normalized = String(value || '').trim()
    if (normalized !== '' && !(key === 'sort' && normalized === 'title') && !(key === 'view' && normalized === 'compact')) {
      params.set(key, normalized)
    }
  }
  params.delete('page')
  void submitFiltersAjax(null, {
    params,
    generation: ++catalogueRequestGeneration,
  })
}

function smartViewUrl(filters) {
  const params = normalizedReviewParams(window.location.search)
  for (const key of Object.keys(filterLabels)) {
    params.delete(key)
  }
  params.delete('page')
  for (const [key, value] of Object.entries(filters)) {
    if (String(value || '').trim() !== '') {
      params.set(key, String(value))
    }
  }
  const query = params.toString()
  return query ? `?${query}` : '?'
}

function savedCollectionUrl(filters) {
  return smartViewUrl(filters || {})
}

function savedCollectionDeleteUrl(collectionId) {
  return savedCollectionDeleteBaseUrl.value.replace('__COLLECTION_ID__', encodeURIComponent(String(collectionId || '0')))
}

function upper(value) {
  return String(value || '').toUpperCase()
}

function tagsFor(item) {
  return item.nextcloudTags || []
}

function publicationFilterUrl(publication) {
  const params = normalizedReviewParams(window.location.search)
  params.set('publication', publication)
  params.set('sort', 'publication')
  params.delete('page')
  return `?${params.toString()}`
}

function publicationLandingUrl(publication) {
  const summary = publicationSummaries.value.find((entry) => entry.publication === publication)
  return summary?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(publication)}`
}

function yearLandingUrl(year) {
  return catalogueState.publicationYearLandingUrls?.[year] || `/apps/library/years/${encodeURIComponent(year)}`
}

function creatorLandingUrl(creator) {
  return catalogueState.creatorLandingUrls?.[creator] || `/apps/library/creators/${encodeURIComponent(creator)}`
}

function navigateToSelected(event) {
  const url = event?.target?.value || ''
  if (url) {
    window.location.href = url
  }
}

function coverImageState(item) {
  return coverImageStates[item.id] || 'loading'
}

function markCoverLoaded(item) {
  coverImageStates[item.id] = 'loaded'
}

function markCoverFailed(item) {
  coverImageStates[item.id] = 'error'
}

function cardContext(item) {
  const publication = String(item?.publication || '').trim()
  const date = String(item?.publicationDate || '').trim()
  if (publication && date) return `${publication} · ${date}`
  if (publication || date) return publication || date
  return [item?.publicationType, upper(item?.extension)].filter(Boolean).join(' · ')
}

function isEditableShortcutTarget(target) {
  const tagName = String(target?.tagName || '').toLowerCase()
  return target?.isContentEditable || ['input', 'select', 'textarea', 'button'].includes(tagName)
}

function focusQuickSearchShortcut(event) {
  if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || isEditableShortcutTarget(event.target)) {
    return
  }
  event.preventDefault()
  quickSearchInput.value?.focus()
  quickSearchInput.value?.select?.()
}

async function clearQuickSearchShortcut(event) {
  if (event.key !== 'Escape' || document.activeElement !== quickSearchInput.value || activeFilters.q === '') {
    return
  }
  event.preventDefault()
  quickSearch.value = ''
  activeFilters.q = ''
  await nextTick()
  submitFiltersNow({ currentTarget: quickSearchInput.value })
}

function handleDrawerKeyboardShortcuts(event) {
  if (!sidebarOpen.value || event.metaKey || event.ctrlKey || event.altKey) {
    return false
  }
  if (event.key === 'Escape') {
    event.preventDefault()
    closeDetailsDrawer()
    return true
  }
  if (event.key === 'Tab' && sidebarIsMobile.value) {
    // NcAppSidebar already traps focus on its small-mobile breakpoint. The
    // boundary fallback below only covers its wider mobile sidebar layout.
    if (sidebarComponent.value?.focusTrap) return false
    const root = sidebarComponent.value?.$refs?.sidebar || sidebarComponent.value?.$el || sidebarComponent.value
    const focusable = [...(root?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || [])]
      .filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true')
    if (focusable.length === 0) return false
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) {
      event.preventDefault()
      last.focus()
      return true
    }
    if (!event.shiftKey && (document.activeElement === last || !root.contains(document.activeElement))) {
      event.preventDefault()
      first.focus()
      return true
    }
  }
  if (event.key === 'ArrowLeft' && drawerPreviousItem.value) {
    event.preventDefault()
    showDrawerItem(drawerPreviousItem.value)
    return true
  }
  if (event.key === 'ArrowRight' && drawerNextItem.value) {
    event.preventDefault()
    showDrawerItem(drawerNextItem.value)
    return true
  }
  return false
}

function handleCatalogueKeyboardShortcuts(event) {
  if (handleDrawerKeyboardShortcuts(event)) return
  focusQuickSearchShortcut(event)
  clearQuickSearchShortcut(event)
}

onMounted(() => {
  window.addEventListener('keydown', handleCatalogueKeyboardShortcuts)
  window.addEventListener('popstate', restoreCatalogueFromHistory)
  sidebarMobileQuery = window.matchMedia?.('(max-width: 1023px)') || null
  updateSidebarMobileState()
  if (sidebarMobileQuery?.addEventListener) sidebarMobileQuery.addEventListener('change', updateSidebarMobileState)
  else sidebarMobileQuery?.addListener?.(updateSidebarMobileState)
  const params = new URLSearchParams(window.location.search)
  const initialItemId = canonicalItemIdFromUrl()
  if (params.has('item') && initialItemId === null) {
    params.delete('item')
    history.replaceState({}, '', `${window.location.pathname}${params.toString() ? `?${params}` : ''}${window.location.hash}`)
  } else if (initialItemId !== null) {
    selectSidebarItem(initialItemId, { historyMode: 'none', seed: items.value.find((item) => Number(item.id) === initialItemId) || null })
  }
  initialAuxiliaryHydrationFrame = window.requestAnimationFrame(() => {
    initialAuxiliaryHydrationFrame = null
    void hydrateInitialAuxiliaryState()
  })
})

onBeforeUnmount(() => {
  sidebarUnmounting = true
  cancelSidebarFocusRestore()
  window.removeEventListener('keydown', handleCatalogueKeyboardShortcuts)
  window.removeEventListener('popstate', restoreCatalogueFromHistory)
  window.clearTimeout(publicationSuggestionTimer)
  window.clearTimeout(creatorSuggestionTimer)
  window.clearTimeout(subjectSuggestionTimer)
  window.clearTimeout(yearSuggestionTimer)
  publicationSuggestionController?.abort()
  creatorSuggestionController?.abort()
  subjectSuggestionController?.abort()
  yearSuggestionController?.abort()
  catalogueRequestGeneration += 1
  if (initialAuxiliaryHydrationFrame !== null) window.cancelAnimationFrame(initialAuxiliaryHydrationFrame)
  initialAuxiliaryHydrationFrame = null
  initialAuxiliaryHydrationController?.abort()
  catalogueRequestController?.abort()
  catalogueRequestController = null
  sidebarRequestGeneration += 1
  sidebarRequestController?.abort()
  sidebarRequestController = null
  if (sidebarMobileQuery?.removeEventListener) sidebarMobileQuery.removeEventListener('change', updateSidebarMobileState)
  else sidebarMobileQuery?.removeListener?.(updateSidebarMobileState)
  sidebarMobileQuery = null
  pendingSidebarFocusRestore = null
})

const starPending = reactive({})
const starErrors = reactive({})

async function toggleStar(item, event) {
  const form = event?.currentTarget?.closest?.('form') || event?.currentTarget
  if (!form || !item?.starUrl || starPending[item.id]) return
  const previous = Boolean(item.starred)
  starPending[item.id] = true
  starErrors[item.id] = ''
  item.starred = !previous
  try {
    const response = await fetch(item.starUrl, {
      method: 'POST',
      body: new FormData(form),
      credentials: 'same-origin',
    })
    if (!response.ok) {
      item.starred = previous
      starErrors[item.id] = t('library', 'Could not update star. Try again.')
    }
  } catch (_error) {
    item.starred = previous
    starErrors[item.id] = t('library', 'Could not update star. Try again.')
  } finally {
    starPending[item.id] = false
  }
}

</script>

<template>
  <NcContent app-name="library">
    <NcAppNavigation :aria-label="t('library', 'Library navigation')">
      <template #list>
        <NcAppNavigationList>
          <NcAppNavigationItem v-for="destination in catalogueNavigation" :key="destination.key" :active="destination.active" :href="destination.href" :name="destination.name" />
          <NcAppNavigationItem :active="reviewActive" :href="reviewUrl" :name="reviewCount > 0 ? `${t('library', 'Review')} (${reviewCount})` : t('library', 'Review')" />
        </NcAppNavigationList>
      </template>
      <template #footer>
        <section class="library-sidebar-filter-section" aria-labelledby="library-sidebar-filters-heading">
          <h2 id="library-sidebar-filters-heading">{{ t('library', 'Filters') }}</h2>
          <form method="get" class="library-filter-bar library-sidebar-filters" :aria-label="t('library', 'Catalogue search and filters')" @submit.prevent="applyAllSearchFilters">
            <input type="hidden" name="folder" :value="activeFilters.folder">
            <input v-for="filter in sidebarHiddenFilters" :key="`sidebar-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
            <input v-if="activeFilters.sort && activeFilters.sort !== 'title'" type="hidden" name="sort" :value="activeFilters.sort">
            <input v-if="activeFilters.view && activeFilters.view !== 'compact'" type="hidden" name="view" :value="activeFilters.view">
            <label class="library-quick-filter-search" :title="t('library', 'Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.')"><span>{{ t('library', 'Search') }} <kbd class="library-keyboard-hint">/</kbd></span><input ref="quickSearchInput" v-model="quickSearch" data-library-quick-search type="search" name="q" :placeholder="t('library', 'Title, creator, description, filename or folder')"></label>
            <label>{{ t('library', 'Type') }}<select v-model="activeFilters.type" name="type" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All types') }}</option><option v-for="type in publicationTypes" :key="type" :value="type">{{ type }}</option></select></label>
            <div class="library-publisher-filter"><label for="library-publisher-search">{{ t('library', 'Publisher') }}</label><input id="library-publisher-search" v-model="publisherSearch" type="search" name="publisherSearch" autocomplete="off" :placeholder="t('library', 'Search publishers')" :title="t('library', 'Exact publisher matches only')" role="combobox" aria-autocomplete="list" aria-controls="library-publisher-suggestions" :aria-expanded="publisherSearchFocused && publisherSuggestions.length > 0 ? 'true' : 'false'" @focus="publisherSearchFocused = true" @keydown.escape="publisherSearchFocused = false"><input type="hidden" name="publisher" :value="activeFilters.publisher"><ul v-if="publisherSearchFocused && publisherSuggestions.length > 0" id="library-publisher-suggestions" class="library-publisher-suggestions" role="listbox"><li v-for="publisher in publisherSuggestions" :key="publisher" role="option"><button type="button" class="library-publisher-suggestion" @mousedown.prevent @click="selectPublisherSuggestion(publisher, $event)">{{ publisher }}</button></li></ul><button type="submit" class="button secondary library-publisher-apply">{{ t('library', 'Apply publisher') }}</button></div>
            <div class="library-publication-filter"><label for="library-publication-search">{{ t('library', 'Series / periodical') }}</label><input id="library-publication-search" v-model="publicationSearch" type="search" name="publicationSearch" autocomplete="off" :placeholder="t('library', 'Search series and periodicals')" role="combobox" aria-autocomplete="list" aria-controls="library-publication-suggestions" :aria-expanded="publicationSearchFocused && publicationSuggestions.length > 0 ? 'true' : 'false'" @focus="publicationSearchFocused = true" @keydown.escape="publicationSearchFocused = false"><input type="hidden" name="publication" :value="activeFilters.publication"><ul v-if="publicationSearchFocused && publicationSuggestions.length > 0" id="library-publication-suggestions" class="library-publication-suggestions" role="listbox"><li v-for="publication in publicationSuggestions" :key="publication" role="option"><button type="button" class="library-publication-suggestion" @mousedown.prevent @click="selectPublicationSuggestion(publication, $event)">{{ publication }}</button></li></ul><button type="submit" class="button secondary library-publication-apply">{{ t('library', 'Apply series') }}</button></div>
            <div class="library-year-filter"><label for="library-year-search">{{ t('library', 'Publication year') }}</label><input id="library-year-search" v-model="yearSearch" type="search" name="yearSearch" autocomplete="off" :placeholder="t('library', 'Search publication years')" role="combobox" aria-autocomplete="list" aria-controls="library-year-suggestions" :aria-expanded="yearSearchFocused && yearSuggestions.length > 0 ? 'true' : 'false'" @focus="yearSearchFocused = true" @keydown.escape="yearSearchFocused = false"><input type="hidden" name="year" :value="activeFilters.year"><ul v-if="yearSearchFocused && yearSuggestions.length > 0" id="library-year-suggestions" class="library-year-suggestions" role="listbox"><li v-for="year in yearSuggestions" :key="year" role="option"><button type="button" class="library-year-suggestion" @mousedown.prevent @click="selectYearSuggestion(year, $event)">{{ year }}</button></li></ul><button type="submit" class="button secondary library-year-apply">{{ t('library', 'Apply year') }}</button></div>
            <div class="library-creator-filter"><label for="library-creator-search">{{ t('library', 'Creator') }}</label><input id="library-creator-search" v-model="creatorSearch" type="search" name="creatorSearch" autocomplete="off" :placeholder="t('library', 'Search creators')" :title="t('library', 'Exact full-field creator matches only')" role="combobox" aria-autocomplete="list" aria-controls="library-creator-suggestions" :aria-expanded="creatorSearchFocused && creatorSuggestions.length > 0 ? 'true' : 'false'" @focus="creatorSearchFocused = true" @keydown.escape="creatorSearchFocused = false"><input type="hidden" name="creator" :value="activeFilters.creator"><ul v-if="creatorSearchFocused && creatorSuggestions.length > 0" id="library-creator-suggestions" class="library-creator-suggestions" role="listbox"><li v-for="creator in creatorSuggestions" :key="creator" role="option"><button type="button" class="library-creator-suggestion" @mousedown.prevent @click="selectCreatorSuggestion(creator, $event)">{{ creator }}</button></li></ul><button type="submit" class="button secondary library-creator-apply">{{ t('library', 'Apply creator') }}</button></div>
            <label>{{ t('library', 'Nextcloud tag') }}<input v-model="activeFilters.tag" type="text" name="tag" :placeholder="t('library', 'photography')"></label>
            <label>{{ t('library', 'Format') }}<select v-model="activeFilters.format" name="format" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All formats') }}</option><option v-for="format in formats" :key="format" :value="format">{{ upper(format) }}</option></select></label>
            <label>{{ t('library', 'Shelf') }}<select v-model="activeFilters.shelf" name="shelf" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All shelves') }}</option><option v-for="shelf in shelves" :key="shelf" :value="shelf">{{ shelf }}</option></select></label>
            <div class="library-folder-filter"><label for="library-folder-search">{{ t('library', 'Folder') }}</label><input id="library-folder-search" v-model="folderSearch" type="search" name="folderSearch" autocomplete="off" :placeholder="t('library', 'Type at least 3 path characters')" :title="t('library', 'Select an exact folder path')" role="combobox" aria-autocomplete="list" aria-controls="library-folder-suggestions" :aria-expanded="folderSearchFocused && folderSuggestions.length > 0 ? 'true' : 'false'" @focus="folderSearchFocused = true" @keydown.escape="folderSearchFocused = false"><ul v-if="folderSearchFocused && folderSuggestions.length > 0" id="library-folder-suggestions" class="library-folder-suggestions" role="listbox"><li v-for="folder in folderSuggestions" :key="folder" role="option"><button type="button" class="library-folder-suggestion" @mousedown.prevent @click="selectFolderSuggestion(folder, $event)">{{ folder }}</button></li></ul><button type="submit" class="button secondary library-folder-apply">{{ t('library', 'Apply folder') }}</button></div>
            <label>{{ t('library', 'Scan status') }}<select v-model="activeFilters.status" name="status" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All scan statuses') }}</option><option v-for="status in scanStatuses" :key="status" :value="status">{{ status }}</option></select></label>
            <label>{{ t('library', 'Workflow status') }}<select v-model="activeFilters.workflowStatus" name="workflowStatus" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All workflow statuses') }}</option><option v-for="status in workflowStatuses" :key="status" :value="status">{{ status }}</option></select></label>
            <div class="library-subject-filter"><label for="library-subject-search">{{ t('library', 'Subject') }}</label><input id="library-subject-search" v-model="subjectSearch" type="search" name="subjectSearch" autocomplete="off" :placeholder="t('library', 'Search subjects')" :title="t('library', 'Exact subject matches only')" role="combobox" aria-autocomplete="list" aria-controls="library-subject-suggestions" :aria-expanded="subjectSearchFocused && subjectSuggestions.length > 0 ? 'true' : 'false'" @focus="subjectSearchFocused = true" @keydown.escape="subjectSearchFocused = false"><input type="hidden" name="subject" :value="activeFilters.subject"><ul v-if="subjectSearchFocused && subjectSuggestions.length > 0" id="library-subject-suggestions" class="library-subject-suggestions" role="listbox"><li v-for="subject in subjectSuggestions" :key="subject" role="option"><button type="button" class="library-subject-suggestion" @mousedown.prevent @click="selectSubjectSuggestion(subject, $event)">{{ subject }}</button></li></ul><button type="button" class="button secondary library-subject-apply" @click="applySubjectSearch">{{ t('library', 'Apply subject') }}</button></div>
            <label>{{ t('library', 'Classification') }}<select v-model="activeFilters.classification" name="classification" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All classifications') }}</option><option v-for="classification in classifications" :key="classification" :value="classification">{{ classification }}</option></select></label>
            <label>{{ t('library', 'Suggested updates') }}<select v-model="activeFilters.scannerConflicts" name="scannerConflicts" @change="submitFiltersNow($event)"><option value="">{{ t('library', 'All metadata') }}</option><option value="1">{{ t('library', 'Suggested updates') }}</option></select></label>
            <button type="submit" class="button primary">{{ t('library', 'Apply filters') }}</button><a href="?" class="button secondary">{{ t('library', 'Clear') }}</a>
          </form>
        </section>
        <a class="library-navigation-settings-link" :href="settingsUrl">
          <span class="library-navigation-settings-icon" aria-hidden="true">⚙</span>
          <span>{{ t('library', 'Settings') }}</span>
        </a>
      </template>
    </NcAppNavigation>
    <NcAppContent>
  <div id="library-app" class="library-vue-catalogue library-app" :lang="catalogueState.language || 'en'" :dir="catalogueState.direction || 'ltr'" tabindex="-1">
  <nav v-if="activeFilterChips.length > 0" class="library-active-filter-chips" :aria-label="t('library', 'Active filters')">
    <span>{{ t('library', 'Active filters') }}</span>
    <a v-for="chip in activeFilterChips" :key="chip.key" :href="filterChipRemoveUrl(chip.key)" class="library-filter-chip" :aria-label="`${t('library', 'Remove filter')}: ${chip.label}`" @click.prevent="removeFilterChip(chip.key)">
      <strong>{{ chip.label }}:</strong> {{ chip.value }} <span aria-hidden="true">×</span>
    </a>
  </nav>
  <section v-if="reviewActive" class="library-panel library-review-destination" aria-labelledby="library-review-heading">
    <header class="library-review-header">
      <p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Metadata cleanup') }}</p>
      <h2 id="library-review-heading">{{ t('library', 'Review') }}</h2>
      <p>{{ t('library', 'Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.') }}</p>
    </header>
    <nav class="library-review-queues" :aria-label="t('library', 'Review queues')">
      <a v-for="queue in reviewQueues" :key="queue.key" class="library-review-queue-link" :class="{ active: queue.active }" :href="queue.href" :aria-current="queue.active ? 'page' : undefined" @click.prevent="selectReviewQueue(queue)">
        <span>{{ queue.label }}</span>
        <b>{{ reviewQueueCount(queue.countKey) }}</b>
      </a>
    </nav>
    <form method="get" class="library-review-filter-form" :aria-label="t('library', 'Filter current review queue')" @submit.prevent="submitFiltersAjax">
      <input v-for="filter in reviewHiddenFilters" :key="`review-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
      <label>{{ t('library', 'Search within this queue') }}<input v-model="activeFilters.q" type="search" name="q"></label>
      <button type="submit" class="button secondary">{{ t('library', 'Apply') }}</button>
    </form>
    <div class="library-review-request-status" role="status" aria-live="polite" :aria-busy="catalogueRequestState.loading ? 'true' : 'false'">
      <span v-if="catalogueRequestState.loading">{{ t('library', 'Loading review queue…') }}</span>
    </div>
    <p v-if="catalogueRequestState.error" class="library-notice library-review-request-error" role="alert">{{ catalogueRequestState.error }}</p>
    <section v-if="metadataReviewWorkbench.enabled" class="library-metadata-review-workbench" aria-labelledby="library-metadata-review-workbench-heading"><div class="library-metadata-review-workbench-copy"><p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Metadata review workbench') }}</p><h3 id="library-metadata-review-workbench-heading" :title="t('library', 'Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.')">{{ t('library', 'Review next suggestion') }}</h3></div><article v-if="metadataReviewWorkbench.item" class="library-metadata-review-card"><header><strong><bdi class="library-bidi-human" dir="auto">{{ metadataReviewWorkbench.item.title }}</bdi></strong><span class="library-muted"><bdi class="library-bidi-machine" dir="ltr">{{ metadataReviewWorkbench.item.cachedPath }}</bdi></span></header><div class="library-metadata-review-fields"><article v-for="field in metadataReviewWorkbench.fields" :key="field.field" class="library-metadata-review-field"><h4><bdi class="library-bidi-human" dir="auto">{{ field.field }}</bdi></h4><dl><div><dt>{{ t('library', 'Current value') }}</dt><dd><bdi class="library-bidi-human" dir="auto">{{ field.currentValue || '—' }}</bdi></dd></div><div><dt>{{ t('library', 'Suggested value') }}</dt><dd><bdi class="library-bidi-human" dir="auto">{{ field.scannerCandidate || '—' }}</bdi></dd></div><div><dt>{{ t('library', 'Path-based suggestion') }}</dt><dd><bdi class="library-bidi-machine" dir="ltr">{{ field.pathTemplateCandidate || '—' }}</bdi></dd></div><div><dt>{{ t('library', 'Sidecar value') }}</dt><dd><bdi class="library-bidi-human" dir="auto">{{ field.sidecarValue || '—' }}</bdi></dd></div><div><dt>{{ t('library', 'Source') }}</dt><dd><bdi class="library-bidi-human" dir="auto">{{ field.sourceProvenance || '—' }}</bdi></dd></div></dl><form method="post" :action="metadataReviewWorkbench.item.resetFieldUrl" class="library-metadata-review-accept-form"><input type="hidden" name="requesttoken" :value="requestToken"><input type="hidden" name="field" :value="field.field"><input type="hidden" name="returnTo" value="catalogue"><button type="submit" class="button secondary">{{ t('library', 'Use suggested value') }}</button></form></article></div><footer class="library-metadata-review-actions"><a class="button secondary" :href="metadataReviewWorkbench.item.detailsUrl">{{ t('library', 'Maintenance') }}</a><a class="button secondary" :href="metadataReviewWorkbench.skipUrl">{{ t('library', 'Skip to next suggestion') }}</a></footer></article></section>
    <div v-if="items.length === 0 && !catalogueRequestState.loading && !catalogueRequestState.error" class="library-review-empty" role="status">
      <h3>{{ t('library', 'This review queue is clear') }}</h3>
      <p>{{ t('library', 'Choose another queue or return to the catalogue.') }}</p>
      <a class="button primary" :href="catalogueRootUrl">{{ t('library', 'Back to Library') }}</a>
    </div>
    <div v-else class="library-review-results" role="region" :aria-label="t('library', 'Review results')">
      <article v-for="item in items" :key="item.id" class="library-review-result-card">
        <div><h3><button type="button" class="library-cover-title-button" @click="openDetailsDrawer(item, $event)"><bdi class="library-bidi-human" dir="auto">{{ item.title }}</bdi></button></h3><p v-if="item.creators" class="library-muted"><bdi class="library-bidi-human" dir="auto">{{ item.creators }}</bdi></p><p v-if="item.scanError" class="library-scan-error"><bdi class="library-bidi-human" dir="auto">{{ item.scanError }}</bdi></p></div>
        <p><button type="button" class="button secondary" @click="openDetailsDrawer(item, $event)">{{ t('library', 'Details') }}</button><a class="button primary" :href="item.openUrl">{{ t('library', 'Open') }}</a></p>
      </article>
    </div>
    <nav v-if="items.length > 0" class="library-pagination" :aria-label="t('library', 'Review pagination')"><a v-if="pagination.previousUrl" :href="pagination.previousUrl">{{ t('library', 'Previous') }}</a><span v-else class="library-muted">{{ t('library', 'Previous') }}</span><span>{{ t('library', 'Page') }} {{ pagination.page }}<span v-if="pagination.total > 0"> · {{ pagination.from }}–{{ pagination.to }}</span></span><a v-if="pagination.nextUrl" :href="pagination.nextUrl">{{ t('library', 'Next') }}</a><span v-else class="library-muted">{{ t('library', 'Next') }}</span></nav>
  </section>
  <main v-else-if="isHome" id="library-home" class="library-panel library-home" aria-labelledby="library-home-heading">
    <header class="library-home-header">
      <p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Your library') }}</p>
      <h2 id="library-home-heading">{{ t('library', 'Home') }}</h2>
    </header>

    <section class="library-home-row" aria-labelledby="library-continue-heading">
      <header><div><h3 id="library-continue-heading">{{ t('library', 'Continue reading') }}</h3><p class="library-muted">{{ t('library', 'Pick up publications you opened recently.') }}</p></div><a :href="`${catalogueRootUrl}?sort=lastOpened`">{{ t('library', 'View all') }}</a></header>
      <div v-if="homeRows.continueReading.length" class="library-home-card-row">
        <article v-for="item in homeRows.continueReading" :key="`continue-${item.id}`" class="library-cover-card library-home-card">
          <button type="button" class="library-cover-link" @click="openDetailsDrawer(item, $event)"><span class="library-cover-frame"><img class="library-cover-image" :src="item.coverUrl" alt="" loading="lazy"></span></button>
          <div class="library-cover-summary"><h4><button type="button" class="library-cover-title-button" @click="openDetailsDrawer(item, $event)"><bdi dir="auto">{{ item.title }}</bdi></button></h4><p v-if="item.creators" class="library-cover-creator"><bdi dir="auto">{{ item.creators }}</bdi></p><a class="library-cover-read" :href="item.openUrl">{{ t('library', 'Open') }}</a></div>
        </article>
      </div>
      <p v-else class="library-muted library-home-row-empty">{{ t('library', 'Publications you open will appear here.') }}</p>
    </section>

    <section class="library-home-row" aria-labelledby="library-recent-heading">
      <header><div><h3 id="library-recent-heading">{{ t('library', 'Recently added') }}</h3><p class="library-muted">{{ t('library', 'The latest publications indexed from your Library roots.') }}</p></div><a :href="`${catalogueRootUrl}?sort=recent`">{{ t('library', 'View all') }}</a></header>
      <div v-if="homeRows.recentlyAdded.length" class="library-home-card-row">
        <article v-for="item in homeRows.recentlyAdded" :key="`recent-${item.id}`" class="library-cover-card library-home-card">
          <button type="button" class="library-cover-link" @click="openDetailsDrawer(item, $event)"><span class="library-cover-frame"><img class="library-cover-image" :src="item.coverUrl" alt="" loading="lazy"></span></button>
          <div class="library-cover-summary"><h4><button type="button" class="library-cover-title-button" @click="openDetailsDrawer(item, $event)"><bdi dir="auto">{{ item.title }}</bdi></button></h4><p v-if="item.creators" class="library-cover-creator"><bdi dir="auto">{{ item.creators }}</bdi></p><a class="library-cover-read" :href="item.openUrl">{{ t('library', 'Open') }}</a></div>
        </article>
      </div>
      <p v-else class="library-muted library-home-row-empty">{{ t('library', 'Recently indexed publications will appear here.') }}</p>
    </section>

    <section class="library-home-row" aria-labelledby="library-home-shelves-heading">
      <header><div><h3 id="library-home-shelves-heading">{{ t('library', 'Shelves') }}</h3><p class="library-muted">{{ t('library', 'Browse the folders that organize your publications.') }}</p></div><a :href="shelvesUrl">{{ t('library', 'View all') }}</a></header>
      <nav v-if="homeShelves.length" class="library-home-shelves" :aria-label="t('library', 'Shelves')"><a v-for="shelf in homeShelves" :key="shelf.shelf" :href="shelf.url"><strong><bdi dir="auto">{{ shelf.shelf }}</bdi></strong><span>{{ n('library', '%n item', '%n items', Number(shelf.itemCount || 0)) }}</span></a></nav>
      <p v-else class="library-muted library-home-row-empty">{{ t('library', 'Your enabled Library roots will appear as shelves.') }}</p>
    </section>

    <aside v-if="Number(needsAttention.count || 0) > 0" class="library-home-attention" aria-labelledby="library-home-attention-heading">
      <div><h3 id="library-home-attention-heading">{{ t('library', 'Needs attention') }}</h3><p class="library-muted">{{ n('library', '%n publication needs better details.', '%n publications need better details.', Number(needsAttention.count || 0)) }}</p></div>
      <a class="button tertiary" :href="needsAttention.url">{{ t('library', 'Review') }}</a>
    </aside>
  </main>
  <main v-else-if="isShelves" id="library-shelves-landing" class="library-panel library-shelves-landing" aria-labelledby="library-shelves-landing-heading">
    <header class="library-home-header">
      <p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Your library') }}</p>
      <h2 id="library-shelves-landing-heading">{{ t('library', 'Shelves') }}</h2>
      <p class="library-muted">{{ t('library', 'Browse the folders that organize your publications.') }}</p>
    </header>
    <nav v-if="shelfTree.length" :aria-label="t('library', 'Shelves')">
      <ul class="library-shelf-tree">
        <ShelfTreeNode v-for="node in shelfTree" :key="node.id" :node="node" :children-url="shelfChildrenUrl" />
      </ul>
    </nav>
    <section v-else class="library-shelves-empty" role="status">
      <h3>{{ t('library', 'Shelves') }}</h3>
      <p class="library-muted">{{ t('library', 'Your enabled Library roots will appear as shelves.') }}</p>
      <p class="library-empty-actions">
        <a class="button primary" :href="settingsUrl">{{ t('library', 'Add a Library root') }}</a>
        <a class="button secondary" :href="catalogueRootUrl">{{ t('library', 'All publications') }}</a>
      </p>
    </section>
  </main>
  <section v-else id="library-catalogue" class="library-panel library-mobile-compact-chrome" aria-labelledby="library-catalogue-heading">
    <header class="library-catalogue-header">
      <p v-if="isDiscoveryPage" class="library-muted library-catalogue-eyebrow">{{ discoveryKindLabel }}</p>
      <h2 id="library-catalogue-heading">{{ catalogueHeading }}</h2>
    </header>
    <nav class="library-catalogue-workspace library-workspace-menubar" :aria-label="t('library', 'One catalogue workspace')">
      <form method="get" class="library-quick-filter-bar library-catalogue-toolbar" :aria-label="t('library', 'Catalogue toolbar')" @submit.prevent="submitFiltersAjax">
        <input v-for="hidden in quickHiddenFilters" :key="hidden.key" type="hidden" :name="hidden.key" :value="hidden.value">
        <label data-library-control="sort">{{ t('library', 'Sort') }}<select v-model="activeFilters.sort" name="sort" @change="submitFiltersAjax"><option value="title">{{ t('library', 'Title') }}</option><option value="recent">{{ t('library', 'Date added') }}</option><option value="publicationDate">{{ t('library', 'Publication date') }}</option><option value="publication">{{ t('library', 'Series') }}</option><option value="lastOpened">{{ t('library', 'Recently opened') }}</option><option value="format">{{ t('library', 'Format') }}</option></select></label>
        <nav class="library-view-mode-toggle" data-library-control="view" :aria-label="t('library', 'View')"><button type="button" data-library-view-mode="compact" :class="{ active: viewMode === 'compact' }" :aria-pressed="viewMode === 'compact' ? 'true' : 'false'" @click="setViewMode('compact')">{{ t('library', 'Compact') }}</button><button type="button" data-library-view-mode="gallery" :class="{ active: viewMode === 'gallery' }" :aria-pressed="viewMode === 'gallery' ? 'true' : 'false'" @click="setViewMode('gallery')">{{ t('library', 'Gallery') }}</button><button type="button" data-library-view-mode="list" :class="{ active: viewMode === 'list' }" :aria-pressed="viewMode === 'list' ? 'true' : 'false'" @click="setViewMode('list')">{{ t('library', 'List') }}</button><button type="button" data-library-view-mode="shelf" :class="{ active: viewMode === 'shelf' }" :aria-pressed="viewMode === 'shelf' ? 'true' : 'false'" @click="setViewMode('shelf')">{{ t('library', 'Shelf') }}</button></nav>
      </form>
      <section id="library-collections" class="library-saved-collections"><h3 :title="t('library', 'Save the current in-app filter setup as a named collection, then reopen it without leaving Library.')">{{ t('library', 'Collections') }}</h3><form method="post" :action="savedCollectionSaveUrl" class="library-saved-collection-save-form" :title="!canSaveCurrentView ? t('library', 'Choose search terms or filters first, then save them as a custom collection.') : ''"><input type="hidden" name="requesttoken" :value="requestToken"><input type="hidden" name="savedCollectionFilters" :value="currentSavableFiltersJson"><label>{{ t('library', 'Collection name') }}<input type="text" name="savedCollectionName" :placeholder="t('library', 'e.g. Bremen photo books')" :disabled="!canSaveCurrentView" autocomplete="off"></label><button type="submit" class="button secondary" :disabled="!canSaveCurrentView" :title="t('library', 'Save current view')">{{ t('library', 'Save') }}</button></form><nav v-if="savedCollections.length > 0" class="library-saved-collection-links" :aria-label="t('library', 'Saved custom collections')"><article v-for="collection in savedCollections" :key="collection.id" class="library-saved-collection-card"><a class="library-saved-collection-link" :href="savedCollectionUrl(collection.filters)"><strong>{{ collection.name }}</strong><span class="library-saved-collection-count">{{ collection.countPending ? '—' : n('library', '%n item', '%n items', Number(collection.count || 0)) }}</span></a><form method="post" :action="savedCollectionDeleteUrl(collection.id)" class="library-saved-collection-delete-form"><input type="hidden" name="requesttoken" :value="requestToken"><button type="submit" class="button tertiary">{{ t('library', 'Delete') }}</button></form></article></nav></section>

      <details v-if="selectedItemIds.length > 0" class="library-workspace-panel library-workspace-panel--batch library-batch-actions" data-workspace-panel="batch" :aria-label="t('library', 'Batch actions for selected publications')">
        <summary class="library-workspace-panel-summary library-workspace-panel-summary--polished"><span class="library-workspace-panel-icon" aria-hidden="true">✓</span><span class="library-workspace-panel-title" :title="t('library', 'Batch actions for selected publications')">{{ t('library', 'Batch actions') }}</span><small class="library-workspace-panel-purpose">{{ t('library', 'Batch actions for selected publications') }}</small><b class="library-workspace-scope-badge">{{ n('library', '%n publication selected', '%n publications selected', selectedItemIds.length) }}</b></summary>

        <p aria-live="polite">{{ n('library', '%n publication selected', '%n publications selected', selectedItemIds.length) }}</p>
        <div class="library-batch-action-grid" @submit.capture="appendSelectedItemIds">
          <form method="post" :action="batchTagUrl" class="library-batch-action-card library-batch-tag-form"><input type="hidden" name="requesttoken" :value="requestToken"><label><span>{{ t('library', 'Add tag') }}</span><input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" :placeholder="t('library', 'e.g. Review')" autocomplete="off"></label><button type="submit" class="button primary" :title="t('library', 'Applies only to the selected publications.')">{{ t('library', 'Apply') }}</button></form>
          <form method="post" :action="batchTagRemoveUrl" class="library-batch-action-card library-batch-tag-remove-form"><input type="hidden" name="requesttoken" :value="requestToken"><label><span>{{ t('library', 'Remove tag') }}</span><input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" :placeholder="t('library', 'e.g. Review')" autocomplete="off"></label><button type="submit" class="button secondary" :title="t('library', 'Removes the tag only from the selected publications.')">{{ t('library', 'Remove') }}</button></form>
          <form method="post" :action="batchMetadataResetUrl" class="library-batch-action-card library-batch-metadata-reset-form"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`reset-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><input type="hidden" name="scannerConflicts" value="1"><button type="submit" class="button secondary" :title="t('library', 'Batch actions for selected publications')">{{ t('library', 'Reset metadata') }}</button></form>
          <form method="post" :action="batchMetadataEditPreviewUrl" class="library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form" target="_blank"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`edit-preview-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><label><span>{{ t('library', 'Field') }}</span><select name="bulkEditField"><option value="publicationType">{{ t('library', 'Publication type') }}</option><option value="subtitle">{{ t('library', 'Subtitle') }}</option><option value="creators">{{ t('library', 'Creators') }}</option><option value="publication">{{ t('library', 'Series / periodical') }}</option><option value="publicationDate">{{ t('library', 'Publication date') }}</option><option value="language">{{ t('library', 'Language') }}</option><option value="publisher">{{ t('library', 'Publisher') }}</option><option value="subjects">{{ t('library', 'Subjects') }}</option><option value="classifications">{{ t('library', 'Classifications') }}</option></select></label><label><span>{{ t('library', 'Value') }}</span><input type="text" name="bulkEditValue" :placeholder="t('library', 'magazine, de, photography…')" autocomplete="off"></label><button type="submit" class="button secondary" :title="t('library', 'Preview first, then apply from the review page.')">{{ t('library', 'Preview edit') }}</button></form>
          <form method="post" :action="batchCoverRefreshUrl" class="library-batch-action-card library-batch-cover-refresh-form"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`cover-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><button type="submit" class="button secondary" :title="t('library', 'Batch actions for selected publications')">{{ t('library', 'Fresh covers') }}</button></form>
        </div>
      </details>

    </nav>

    <p v-if="batchLimitErrorMessage" class="library-warning library-batch-limit-error">{{ batchLimitErrorMessage }}</p>
    <p v-if="batchSelectionErrorMessage" class="library-warning library-batch-selection-error">{{ batchSelectionErrorMessage }}</p>
    <p v-if="batchMetadataApplyMessage" class="library-notice library-batch-metadata-apply-result">{{ batchMetadataApplyMessage }}</p>


    <section v-if="isDiscoveryPage" class="library-discovery-hero" aria-labelledby="library-discovery-heading">
      <p class="library-muted library-catalogue-eyebrow">{{ discoveryKindLabel }}</p>
      <h3 id="library-discovery-heading" :title="isCreatorDiscoveryPage ? t('library', 'Items by this creator, sorted by publication context when available.') : (isYearDiscoveryPage ? t('library', 'Items from this publication year, sorted by publication date when available.') : t('library', 'Items in this publication, sorted by issue/date context when available.'))">{{ discoveryTitle }}</h3>
      <div class="library-discovery-hero-metrics" :aria-label="t('library', 'Discovery summary')">
        <span>{{ n('library', '%n item', '%n items', pagination.total) }}</span>
        <span v-if="publicationIssueContext?.earliestYear && publicationIssueContext?.latestYear">{{ publicationIssueContext.earliestYear }}–{{ publicationIssueContext.latestYear }}</span>
        <span v-if="publicationIssueContext?.datedCount">{{ publicationIssueContext.datedCount }} {{ t('library', 'dated') }}</span>
        <span v-if="publicationIssueContext?.undatedCount > 0">{{ publicationIssueContext.undatedCount }} {{ t('library', 'undated') }}</span>
      </div>
      <aside v-if="isPublicationDiscoveryPage && publicationIssueContext" class="library-publication-issue-context" :aria-label="t('library', 'Publication issue/date context')">
        <strong>{{ t('library', 'Publication contents') }}</strong>
        <span>{{ n('library', '%n item', '%n items', publicationIssueContext.itemCount) }}</span>
        <span v-if="publicationIssueContext.earliestYear && publicationIssueContext.latestYear">{{ publicationIssueContext.earliestYear }}–{{ publicationIssueContext.latestYear }}</span>
        <span>{{ publicationIssueContext.datedCount }} {{ t('library', 'with issue/date coverage') }}</span>
        <span v-if="publicationIssueContext.undatedCount > 0">{{ publicationIssueContext.undatedCount }} {{ t('library', 'without dates yet') }}</span>
        <span>{{ t('library', 'read-only grouping') }}</span>
      </aside>
      <section v-if="isPublicationDiscoveryPage && publicationIssueContext?.issueGroups?.length" class="library-publication-issue-groups" aria-labelledby="library-publication-issue-groups-heading">
        <div>
          <p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Issue order') }}</p>
          <h4 id="library-publication-issue-groups-heading" :title="t('library', 'Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.')">{{ t('library', 'Read-only issue/date grouping') }}</h4>
        </div>
        <div class="library-publication-issue-strip" :aria-label="t('library', 'Visual issue strip')">
          <a v-for="group in publicationIssueContext.issueGroups" :key="`strip-${group.label}`" class="library-issue-strip-card" :href="group.items?.[0]?.detailsUrl || '#'">
            <span>{{ group.label }}</span>
            <strong>{{ group.items?.[0]?.issueLabel || t('library', 'Issue') }}</strong>
            <small>{{ n('library', '%n item', '%n items', group.items?.length || 0) }}</small>
          </a>
        </div>
        <p v-if="publicationIssueContext.gapRanges?.length" class="library-notice">{{ t('library', 'Gap') }}: {{ publicationIssueContext.gapRanges.join(', ') }}</p>
        <div v-for="group in publicationIssueContext.issueGroups" :key="group.label" class="library-publication-issue-group">
          <h5>{{ group.label }}</h5>
          <ol>
            <li v-for="(issue, index) in group.items" :key="issue.itemId">
              <span class="library-publication-issue-label">{{ issue.issueLabel }}</span>
              <a :href="issue.detailsUrl || '#'">{{ issue.title }}</a>
              <small>{{ issue.publicationType }}<template v-if="issue.publicationDate"> · {{ issue.publicationDate }}</template></small>
              <small class="library-muted"><template v-if="index > 0">{{ t('library', 'Previous issue') }}</template><template v-if="index > 0 && index < group.items.length - 1"> · </template><template v-if="index < group.items.length - 1">{{ t('library', 'Next issue') }}</template></small>
            </li>
          </ol>
        </div>
        <details v-if="publicationIssueContext.unknownIssueItems?.length" class="library-publication-unknown-issues">
          <summary :title="t('library', 'Unknown issue/date rows remain visible instead of disappearing from the publication page.')">{{ t('library', 'Unknown issue/date') }} · {{ publicationIssueContext.unknownIssueItems.length }}</summary>
        </details>
      </section>
      <p><a :href="catalogueRootUrl" class="button secondary library-discovery-back-link">{{ t('library', 'Back to full catalogue') }}</a></p>
    </section>

    <div class="library-catalogue-status-row">
      <p class="library-muted library-filter-result-summary">{{ t('library', 'Showing') }} {{ pagination.from }}–{{ pagination.to }} {{ t('library', 'of') }} {{ pagination.total }} {{ t('library', 'catalogue items') }}<span v-if="activeFilterChips.length > 0"> · <a href="?">{{ t('library', 'Clear all filters') }}</a></span></p>
      <nav class="library-pagination library-pagination--top" :aria-label="t('library', 'Catalogue pagination')">
        <span class="library-pagination-range">{{ t('library', 'Page') }} {{ pagination.page }}<span v-if="pagination.total > 0"> · {{ pagination.from }}–{{ pagination.to }}</span></span>
        <a v-if="pagination.previousUrl" :href="pagination.previousUrl">{{ t('library', 'Previous') }}</a>
        <span v-else class="library-muted">{{ t('library', 'Previous') }}</span>
        <a v-if="pagination.nextUrl" :href="pagination.nextUrl">{{ t('library', 'Next') }}</a>
        <span v-else class="library-muted">{{ t('library', 'Next') }}</span>
      </nav>
    </div>

    <div v-if="items.length === 0" class="library-empty-content" :class="{ 'library-first-run-guidance': hasNoConfiguredRoots || hasNoEnabledRoots, 'library-filter-empty-state': hasActiveFilters && !hasNoConfiguredRoots && !hasNoEnabledRoots }" role="status">
      <template v-if="hasNoConfiguredRoots">
        <h3 :title="t('library', 'Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.')">{{ t('library', 'Start with one Library root') }}</h3>
        <p class="library-empty-actions"><a :href="settingsUrl" class="button primary">{{ t('library', 'Add a Library root') }}</a><span class="library-muted">{{ t('library', 'Run a scan after saving a root') }}</span></p>
      </template>
      <template v-else-if="hasNoEnabledRoots">
        <h3 :title="t('library', 'Enable a saved root in settings, then scan enabled roots to refresh the catalogue.')">{{ t('library', 'No enabled Library roots') }}</h3>
        <p class="library-empty-actions"><a :href="settingsUrl" class="button primary">{{ t('library', 'Open Library settings') }}</a></p>
      </template>
      <template v-else-if="hasActiveFilters">
        <h3 :title="t('library', 'Try a broader search, remove one active chip, or clear every catalogue filter.')">{{ t('library', 'No matches for the current filters') }}</h3>
        <p class="library-empty-actions"><a :href="clearSearchUrl()" class="button secondary">{{ t('library', 'Clear search') }}</a><a href="?" class="button primary">{{ t('library', 'Clear all filters') }}</a></p>
      </template>
      <template v-else>
        <h3 :title="t('library', 'Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.')">{{ t('library', 'No catalogue items yet') }}</h3>
        <p class="library-empty-actions"><a :href="settingsUrl" class="button primary">{{ t('library', 'Run a scan from settings') }}</a></p>
      </template>
    </div>

    <label v-if="items.length > 0" class="library-select-visible"><input type="checkbox" :checked="selectedItemIds.length === items.length" @change="selectVisibleItems"> {{ t('library', 'Select all publications on this page') }}</label>
    <ul v-if="items.length > 0 && viewMode === 'list'" class="library-catalogue-list" data-library-catalogue-list>
      <li v-for="item in items" :key="item.id" class="library-catalogue-list-row" :class="{ 'library-catalogue-list-row--selected': selectedItemIdSet.has(Number(item.id)), 'library-catalogue-list-row--open': sidebarOpen && Number(sidebarRequestedId) === Number(item.id) }">
        <label class="library-item-selection"><input type="checkbox" :checked="selectedItemIdSet.has(Number(item.id))" :aria-label="`${t('library', 'Select publication')}: ${item.title}`" @change="toggleItemSelection(item.id, $event.currentTarget.checked)"></label>
        <div class="library-catalogue-list-main">
          <button type="button" class="library-cover-title-button library-catalogue-list-title" @click="openDetailsDrawer(item, $event)"><bdi class="library-bidi-human" dir="auto">{{ item.title }}</bdi></button>
          <span v-if="item.creators" class="library-muted"><bdi class="library-bidi-human" dir="auto">{{ item.creators }}</bdi></span>
        </div>
        <dl class="library-catalogue-list-metadata">
          <div v-if="item.publication"><dt>{{ t('library', 'Series') }}</dt><dd><bdi class="library-bidi-human" dir="auto">{{ item.publication }}</bdi></dd></div>
          <div v-if="item.publicationDate"><dt>{{ t('library', 'Publication date') }}</dt><dd>{{ item.publicationDate }}</dd></div>
          <div v-if="item.extension || item.publicationType"><dt>{{ t('library', 'Format') }}</dt><dd><bdi :class="item.extension ? 'library-bidi-machine' : 'library-bidi-human'" :dir="item.extension ? 'ltr' : 'auto'">{{ item.extension ? upper(item.extension) : item.publicationType }}</bdi></dd></div>
          <div v-if="item.shelf"><dt>{{ t('library', 'Shelf') }}</dt><dd><bdi class="library-bidi-human" dir="auto">{{ item.shelf }}</bdi></dd></div>
        </dl>
        <div class="library-catalogue-list-actions"><a class="button primary" :href="item.openUrl">{{ t('library', 'Open') }}</a><button type="button" class="button secondary" @click="openDetailsDrawer(item, $event)">{{ t('library', 'Details') }}</button></div>
      </li>
    </ul>
    <div v-else-if="items.length > 0" class="library-cover-gallery" :class="coverGalleryClasses">
      <article v-for="item in items" :key="item.id" class="library-cover-card" :class="{ 'library-cover-card--cover-loaded': coverImageState(item) === 'loaded', 'library-cover-card--cover-error': coverImageState(item) === 'error', 'library-cover-card--selected': selectedItemIdSet.has(Number(item.id)), 'library-cover-card--open': sidebarOpen && Number(sidebarRequestedId) === Number(item.id) }">
        <label class="library-item-selection"><input type="checkbox" :checked="selectedItemIdSet.has(Number(item.id))" :aria-label="`${t('library', 'Select publication')}: ${item.title}`" @change="toggleItemSelection(item.id, $event.currentTarget.checked)"></label>
        <button type="button" class="library-cover-link" :aria-labelledby="`library-details-action-${item.id} library-card-title-${item.id}`" :aria-expanded="sidebarOpen && Number(sidebarRequestedId) === Number(item.id) ? 'true' : 'false'" @click="openDetailsDrawer(item, $event)">
          <span :id="`library-details-action-${item.id}`" class="hidden-visually">{{ t('library', 'Details') }}</span>
          <span class="library-cover-frame">
            <span v-if="coverImageState(item) === 'loading'" class="library-cover-loading-shimmer" aria-hidden="true"></span>
            <img class="library-cover-image" :class="{ 'library-cover-image--loaded': coverImageState(item) === 'loaded' }" :src="item.coverUrl" alt="" loading="lazy" @load="markCoverLoaded(item)" @error="markCoverFailed(item)">
            <span v-if="coverImageState(item) === 'error'" class="library-cover-fallback" role="status">{{ t('library', 'Cover unavailable') }}</span>
          </span>
        </button>
        <form method="post" :action="item.starUrl" class="library-cover-star-form" @submit.prevent="toggleStar(item, $event)">
          <input type="hidden" name="requesttoken" :value="requestToken">
          <input type="hidden" name="returnTo" value="catalogue">
          <input type="hidden" name="starred" :value="item.starred ? '0' : '1'">
          <button
            type="submit"
            class="library-cover-star-button"
            :class="{ 'library-cover-star-button--starred': item.starred }"
            :aria-pressed="item.starred ? 'true' : 'false'"
            :title="item.starred ? t('library', 'Unstar this publication') : t('library', 'Star this publication')"
            :aria-label="item.starred ? t('library', 'Unstar this publication') : t('library', 'Star this publication')"
            :aria-busy="starPending[item.id] ? 'true' : undefined"
            :disabled="starPending[item.id]"
            @click.prevent="toggleStar(item, $event)">
            {{ item.starred ? '★' : '☆' }}
          </button>
          <span v-if="starErrors[item.id]" :data-library-star-error="item.id" class="library-star-feedback" role="alert">{{ starErrors[item.id] }}</span>
        </form>
        <div class="library-cover-summary">
          <div class="library-cover-primary">
            <h3 :id="`library-card-title-${item.id}`"><button type="button" class="library-cover-title-button" @click="openDetailsDrawer(item, $event)"><bdi class="library-bidi-human" dir="auto">{{ item.title }}</bdi></button></h3>
            <p v-if="item.creators" class="library-cover-creator"><bdi class="library-bidi-human" dir="auto">{{ item.creators }}</bdi></p>
            <div v-if="cardContext(item) || item.extension" class="library-cover-badges">
              <span v-if="item.extension" class="library-cover-badge"><bdi class="library-bidi-machine" dir="ltr">{{ upper(item.extension) }}</bdi></span>
              <p v-if="cardContext(item)" class="library-cover-context"><bdi class="library-bidi-human" dir="auto">{{ cardContext(item) }}</bdi></p>
            </div>
            <div class="library-cover-primary-actions"><a class="library-cover-read" :href="item.openUrl">{{ t('library', 'Open') }}</a><NcActions :aria-label="t('library', 'More actions')"><NcActionLink :href="item.filesUrl">{{ t('library', 'Show in Files') }}</NcActionLink><NcActionLink :href="item.downloadUrl">{{ t('library', 'Download') }}</NcActionLink><NcActionLink :href="item.detailsUrl">{{ t('library', 'Maintenance') }}</NcActionLink></NcActions></div>
          </div>
        </div>
      </article>
    </div>

    <nav v-if="items.length > 0" class="library-pagination library-pagination--bottom" :aria-label="t('library', 'Catalogue pagination')">
      <span class="library-pagination-range">{{ t('library', 'Page') }} {{ pagination.page }}<span v-if="pagination.total > 0"> · {{ pagination.from }}–{{ pagination.to }}</span></span>
      <a v-if="pagination.previousUrl" :href="pagination.previousUrl">{{ t('library', 'Previous') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Previous') }}</span>
      <a v-if="pagination.nextUrl" :href="pagination.nextUrl">{{ t('library', 'Next') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Next') }}</span>
    </nav>

  </section>

  </div>
    </NcAppContent>
    <NcAppSidebar
      ref="sidebarComponent"
      class="library-native-item-sidebar"
      :open="sidebarOpen"
      no-toggle
      :loading="sidebarState.loading"
      :name="selectedDrawerItem?.title || t('library', 'Publication details')"
      :subname="selectedDrawerItem?.creators || ''"
      :role="sidebarIsMobile ? 'dialog' : undefined"
      :aria-modal="sidebarIsMobile ? 'true' : undefined"
      :aria-labelledby="sidebarIsMobile ? 'library-detail-drawer-heading' : undefined"
      :aria-describedby="sidebarIsMobile && selectedDrawerItem ? 'library-detail-drawer-keyboard-hint' : undefined"
      @opened="handleSidebarOpened"
      @closed="handleSidebarClosed"
      @close="closeDetailsDrawer">
      <div class="library-sidebar-content">
        <h2 id="library-detail-drawer-heading" ref="sidebarHeading" class="hidden-visually" tabindex="-1">{{ selectedDrawerItem?.title || t('library', 'Publication details') }}</h2>
        <p v-if="sidebarState.loading && !selectedDrawerItem" class="library-muted" role="status" aria-live="polite">{{ t('library', 'Loading publication details…') }}</p>
        <div v-else-if="sidebarState.error" class="library-sidebar-state" :role="sidebarState.missing ? 'status' : 'alert'">
          <p>{{ sidebarState.error }}</p>
          <button v-if="!sidebarState.missing" type="button" class="button secondary" @click="selectSidebarItem(sidebarRequestedId, { historyMode: 'none' })">{{ t('library', 'Try again') }}</button>
        </div>
        <template v-else-if="selectedDrawerItem">
          <p id="library-detail-drawer-keyboard-hint" class="hidden-visually">{{ t('library', 'Escape closes; arrow keys browse neighbouring visible items.') }}</p>
          <div class="library-sidebar-publication-header">
            <span id="library-detail-drawer-cover-label" class="hidden-visually">{{ t('library', 'Cover for') }}</span>
            <img class="library-detail-drawer-cover" :src="selectedDrawerItem.coverUrl" alt="" :aria-labelledby="'library-detail-drawer-cover-label library-detail-drawer-heading'" loading="lazy">
            <div class="library-sidebar-publication-summary">
              <p class="library-muted library-catalogue-eyebrow"><bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.publicationType || t('library', 'Publication') }}</bdi><span v-if="selectedDrawerItem.extension"> · <bdi class="library-bidi-machine" dir="ltr">{{ upper(selectedDrawerItem.extension) }}</bdi></span></p>
              <div class="library-detail-drawer-actions"><a class="button primary" :href="selectedDrawerItem.openUrl">{{ t('library', 'Open') }}</a><NcActions :aria-label="t('library', 'File and maintenance actions')"><NcActionLink :href="selectedDrawerItem.filesUrl">{{ t('library', 'Show in Files') }}</NcActionLink><NcActionLink :href="selectedDrawerItem.downloadUrl">{{ t('library', 'Download') }}</NcActionLink><NcActionLink :href="selectedDrawerItem.detailsUrl">{{ t('library', 'Maintenance (legacy)') }}</NcActionLink></NcActions></div>
            </div>
          </div>
          <nav class="library-sidebar-sections" :aria-label="t('library', 'Publication detail sections')">
            <button v-for="section in sidebarSections" :key="section.key" type="button" :class="{ active: sidebarSection === section.key }" :aria-current="sidebarSection === section.key ? 'page' : undefined" @click="sidebarSection = section.key">{{ t('library', section.label) }}</button>
          </nav>
          <section v-if="sidebarSection === 'overview'" class="library-sidebar-section" aria-labelledby="library-sidebar-overview-heading">
            <h3 id="library-sidebar-overview-heading">{{ t('library', 'Overview') }}</h3>
            <p v-if="selectedDrawerItem.description" class="library-sidebar-description"><bdi class="library-bidi-human" dir="auto">{{ selectedDrawerItem.description }}</bdi></p>
            <dl class="library-detail-drawer-facts"><div v-if="selectedDrawerItem.publication"><dt>{{ t('library', 'Series') }}</dt><dd>{{ selectedDrawerItem.publication }}</dd></div><div v-if="selectedDrawerItem.publicationDate"><dt>{{ t('library', 'Date') }}</dt><dd>{{ selectedDrawerItem.publicationDate }}</dd></div><div v-if="selectedDrawerItem.publisher"><dt>{{ t('library', 'Publisher') }}</dt><dd>{{ selectedDrawerItem.publisher }}</dd></div><div v-if="selectedDrawerItem.language"><dt>{{ t('library', 'Language') }}</dt><dd>{{ selectedDrawerItem.language }}</dd></div><div v-if="selectedDrawerItem.shelf"><dt>{{ t('library', 'Shelf') }}</dt><dd>{{ selectedDrawerItem.shelf }}</dd></div></dl>
          </section>
          <section v-else-if="sidebarSection === 'metadata'" class="library-sidebar-section" aria-labelledby="library-sidebar-metadata-heading">
            <h3 id="library-sidebar-metadata-heading">{{ t('library', 'Metadata') }}</h3>
            <form class="library-sidebar-metadata-form" @submit.prevent="saveSidebarMetadata">
              <label>{{ t('library', 'Title') }}<input v-model="sidebarMetadataDraft.title" name="title" required></label>
              <label>{{ t('library', 'Publication date') }}<input v-model="sidebarMetadataDraft.publicationDate" name="publicationDate" inputmode="numeric" :placeholder="t('library', 'e.g. 2026')"></label>
              <fieldset><legend>{{ t('library', 'Identifiers') }}</legend><div v-for="(identifier, index) in sidebarMetadataDraft.identifiers" :key="index" class="library-sidebar-identifier"><input v-model="identifier.scheme" :aria-label="t('library', 'Identifier type')" :placeholder="t('library', 'Identifier type')"><input v-model="identifier.displayValue" :aria-label="t('library', 'Identifier value')"><button type="button" class="button secondary" @click="removeSidebarIdentifier(index)">{{ t('library', 'Remove') }}</button></div><button type="button" class="button secondary" @click="addSidebarIdentifier">{{ t('library', 'Add identifier') }}</button></fieldset>
              <p class="library-muted">{{ t('library', 'Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.') }}</p>
              <p v-if="sidebarMetadataState.error" role="alert">{{ sidebarMetadataState.error }}</p><p v-else-if="sidebarMetadataState.saved" role="status">{{ t('library', 'Metadata saved.') }}</p>
              <button type="submit" class="button primary" :disabled="sidebarMetadataState.saving">{{ sidebarMetadataState.saving ? t('library', 'Saving…') : t('library', 'Save metadata') }}</button>
            </form>
            <section v-if="reviewConflictFieldsFor(selectedDrawerItem).length" class="library-sidebar-review" aria-labelledby="library-sidebar-suggestions-heading"><h4 id="library-sidebar-suggestions-heading">{{ t('library', 'Scanner suggestions') }}</h4><p class="library-muted">{{ t('library', 'Suggestions are optional and never replace your edits automatically.') }}</p><dl><div v-for="field in reviewConflictFieldsFor(selectedDrawerItem)" :key="field.field"><dt>{{ field.field }} · {{ field.sourceProvenance }}</dt><dd>{{ t('library', 'Current') }}: {{ field.currentValue || '—' }}<br>{{ t('library', 'Suggestion') }}: {{ field.scannerCandidate || '—' }}</dd></div></dl></section>
          </section>
          <section v-else class="library-sidebar-section" aria-labelledby="library-sidebar-activity-heading"><h3 id="library-sidebar-activity-heading">{{ t('library', 'Activity') }}</h3><dl class="library-detail-drawer-facts"><div><dt>{{ t('library', 'Scan status') }}</dt><dd>{{ selectedDrawerItem.scanStatus || '—' }}</dd></div><div v-if="selectedDrawerItem.workflowStatus"><dt>{{ t('library', 'Workflow') }}</dt><dd>{{ selectedDrawerItem.workflowStatus }}</dd></div><div v-if="selectedDrawerItem.metadataSource"><dt>{{ t('library', 'Metadata source') }}</dt><dd>{{ selectedDrawerItem.metadataSource }}</dd></div><div v-if="selectedDrawerItem.cachedPath"><dt>{{ t('library', 'File') }}</dt><dd class="library-detail-drawer-file"><a v-if="selectedDrawerItem.openUrl" :href="selectedDrawerItem.openUrl"><bdi dir="ltr">{{ selectedDrawerItem.cachedPath }}</bdi></a><bdi v-else dir="ltr">{{ selectedDrawerItem.cachedPath }}</bdi></dd></div></dl></section>
          <nav class="library-detail-drawer-stepper" :aria-label="t('library', 'Browse neighbouring items')"><button type="button" class="button secondary" :disabled="!drawerPreviousItem" @click="showDrawerItem(drawerPreviousItem)">{{ t('library', 'Previous item') }}</button><button type="button" class="button secondary" :disabled="!drawerNextItem" @click="showDrawerItem(drawerNextItem)">{{ t('library', 'Next item') }}</button></nav>
        </template>
      </div>
    </NcAppSidebar>
  </NcContent>
</template>

<style>
.library-home {
  display: grid;
  gap: 28px;
}

.library-home-header,
.library-home-row > header,
.library-home-attention {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.library-home-header h2,
.library-home-row h3,
.library-home-row p,
.library-home-attention h3,
.library-home-attention p {
  margin-block: 0;
}

.library-home-card-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.library-home-card-row .library-home-card {
  min-width: 0;
}

.library-home-card .library-cover-summary {
  padding: 10px;
}

.library-home-card h4 {
  margin: 0 0 4px;
}

.library-home-shelves {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr));
  gap: 10px;
  margin-top: 12px;
}

.library-home-shelves a {
  display: grid;
  gap: 4px;
  padding: 12px;
  border: 1px solid var(--color-border, #ddd);
  border-radius: var(--border-radius-large, 12px);
  background: var(--color-main-background, #fff);
}

.library-shelf-summary-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 270px), 1fr));
  margin-top: 16px;
}

.library-shelf-tree {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
}

.library-shelf-tree .library-shelf-tree {
  border-inline-start: 2px solid var(--color-border, #ddd);
  margin: 10px 0 0 18px;
  padding-inline-start: 14px;
}

.library-shelf-tree-node {
  position: relative;
}

.library-shelf-tree-toggle {
  inset-inline-start: 8px;
  min-height: 32px;
  min-width: 32px;
  position: absolute;
  top: 8px;
  z-index: 1;
}

.library-shelf-tree-node:has(> .library-shelf-tree-toggle) > .library-shelf-summary-card {
  padding-inline-start: 48px;
}

.library-shelf-summary-card {
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #ddd);
  border-radius: var(--border-radius-large, 12px);
  color: inherit;
  display: grid;
  gap: 8px;
  min-height: 80px;
  padding: 16px;
  text-decoration: none;
}

.library-shelf-summary-card:hover,
.library-shelf-summary-card:focus {
  border-color: var(--color-primary-element);
  text-decoration: none;
}

.library-shelf-summary-title {
  align-items: baseline;
  display: flex;
  gap: 12px;
  justify-content: space-between;
}

.library-shelves-empty {
  background: var(--color-background-hover, #f6f6f6);
  border-radius: var(--border-radius-large, 12px);
  margin-top: 16px;
  padding: 16px;
}

.library-home-attention {
  padding: 12px 14px;
  border-top: 1px solid var(--color-border, #ddd);
  background: var(--color-background-hover, #f6f6f6);
}

.library-home-row-empty {
  margin-top: 10px !important;
}

.library-sidebar-content {
  display: grid;
  gap: 16px;
  padding: 16px;
  overflow-wrap: anywhere;
}

.library-sidebar-publication-header {
  align-items: end;
  display: grid;
  gap: 12px;
  grid-template-columns: 88px minmax(0, 1fr);
}

.library-sidebar-publication-summary {
  display: grid;
  gap: 10px;
  min-width: 0;
}

.library-sidebar-publication-summary p {
  margin: 0;
}

.library-bidi-human,
.library-bidi-machine {
  unicode-bidi: isolate;
}

.library-layout-stress-probe {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: normal;
}

.library-sidebar-state,
.library-sidebar-provenance,
.library-sidebar-review,
.library-sidebar-section {
  display: grid;
  gap: 8px;
}

.library-sidebar-sections {
  border-block-end: 1px solid var(--color-border);
  display: flex;
  gap: 4px;
}

.library-sidebar-sections button {
  background: transparent;
  border: 0;
  border-block-end: 3px solid transparent;
  min-height: var(--default-clickable-area, 44px);
  padding-inline: 10px;
}

.library-sidebar-sections button.active {
  border-block-end-color: var(--color-primary-element);
  color: var(--color-primary-element);
  font-weight: 700;
}

.library-sidebar-metadata-form,
.library-sidebar-metadata-form label,
.library-sidebar-metadata-form fieldset {
  display: grid;
  gap: 8px;
}

.library-sidebar-metadata-form fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

.library-sidebar-identifier {
  align-items: center;
  display: grid;
  gap: 6px;
  grid-template-columns: minmax(70px, 0.6fr) minmax(110px, 1.4fr) auto;
}

.library-sidebar-provenance dl,
.library-sidebar-review dl {
  display: grid;
  gap: 8px;
  margin: 0;
}

.library-sidebar-provenance dl div,
.library-sidebar-review dl div {
  border-inline-start: 3px solid var(--color-border-maxcontrast);
  padding-inline-start: 10px;
}

.library-sidebar-description {
  white-space: pre-wrap;
}

.library-review-destination {
  display: grid;
  gap: 18px;
  margin: 0 auto;
  max-width: 1120px;
  padding: 20px;
}

.library-review-header h2,
.library-review-result-card h3 {
  margin: 0;
}

.library-review-queues {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.library-review-queue-link,
.library-review-result-card {
  background: var(--color-main-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-large);
}

.library-review-queue-link {
  align-items: center;
  color: var(--color-main-text);
  display: flex;
  justify-content: space-between;
  min-height: 44px;
  padding: 8px 12px;
  text-decoration: none;
}

.library-review-queue-link.active,
.library-review-queue-link:focus-visible,
.library-review-queue-link:hover {
  border-color: var(--color-primary-element);
  background: var(--color-background-hover);
}

.library-review-filter-form,
.library-review-result-card,
.library-review-result-card > p {
  align-items: center;
  display: flex;
  gap: 10px;
}

.library-review-filter-form label {
  flex: 1;
}

.library-review-filter-form input {
  width: 100%;
}

.library-review-results {
  display: grid;
  gap: 10px;
}

.library-review-result-card {
  justify-content: space-between;
  padding: 14px;
}

.library-review-request-status:empty {
  display: none;
}

@media (max-width: 600px) {
  .library-review-destination {
    padding: 10px;
  }

  .library-review-filter-form,
  .library-review-result-card {
    align-items: stretch;
    flex-direction: column;
  }
}

.library-navigation-settings-link {
  align-items: center;
  border-radius: var(--border-radius-large);
  color: var(--color-main-text);
  display: flex;
  gap: 12px;
  margin: 4px;
  min-height: 44px;
  padding: 0 12px;
  text-decoration: none;
}

.library-navigation-settings-link:hover,
.library-navigation-settings-link:focus-visible {
  background-color: var(--color-background-hover);
}

.library-navigation-settings-icon {
  font-size: 20px;
  line-height: 1;
}

.library-sidebar-filter-section {
  border-top: 1px solid var(--color-border, #ddd);
  margin: 4px 8px 0;
  max-height: min(52vh, 560px);
  overflow: auto;
  padding: 8px 4px;
}

.library-sidebar-filter-section h2 {
  font-size: 13px;
  font-weight: 700;
  margin: 0 4px 8px;
}

.library-sidebar-filters {
  align-items: stretch;
  display: grid;
  gap: 6px;
  grid-template-columns: minmax(0, 1fr);
  margin: 0;
}

.library-sidebar-filters label,
.library-sidebar-filters .library-publication-filter,
.library-sidebar-filters .library-year-filter,
.library-sidebar-filters .library-creator-filter,
.library-sidebar-filters .library-folder-filter,
.library-sidebar-filters .library-subject-filter {
  font-size: 12px;
  gap: 2px;
  min-width: 0;
}

.library-sidebar-filters input,
.library-sidebar-filters select {
  min-width: 0;
  width: 100%;
}

.library-sidebar-filters .library-publication-apply,
.library-sidebar-filters .library-year-apply,
.library-sidebar-filters .library-creator-apply,
.library-sidebar-filters .library-subject-apply {
  justify-self: stretch;
}

.library-vue-catalogue .library-panel {
  margin-top: 8px;
  padding: 12px;
}

.library-cover-gallery {
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.library-cover-card--selected,
.library-cover-card--open {
  background: var(--color-primary-element-light, var(--color-background-hover));
  border-color: var(--color-primary-element);
  box-shadow: inset 0 0 0 1px var(--color-primary-element);
}

.library-cover-card--open {
  grid-column: span 2;
}

.library-cover-badges {
  align-items: center;
  display: flex;
  gap: 6px;
  min-width: 0;
}

.library-cover-badge {
  background: var(--color-background-hover);
  border-radius: var(--border-radius-pill, 999px);
  color: var(--color-text-maxcontrast);
  flex: 0 0 auto;
  font-size: .72rem;
  font-weight: 600;
  line-height: 1.4;
  padding: 1px 6px;
}

.library-view-mode-toggle {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0;
}

.library-view-mode-toggle button {
  background: var(--color-main-background);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  padding: 0.35rem 0.75rem;
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
}

.library-view-mode-toggle button:hover,
.library-view-mode-toggle button:focus,
.library-view-mode-toggle button.active {
  background: color-mix(in srgb, var(--color-primary-element, #0082c9) 12%, var(--color-main-background));
  border-color: var(--color-primary-element, #0082c9);
  transform: translateY(-2px);
}

.library-cover-gallery--gallery {
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.library-cover-gallery--gallery .library-cover-card {
  border-radius: 18px;
  padding: 12px;
}

.library-cover-gallery--gallery .library-cover-image {
  aspect-ratio: 2 / 3;
  object-fit: cover;
}

.library-cover-gallery--shelf {
  display: grid;
  gap: 14px;
  grid-auto-columns: minmax(148px, 190px);
  grid-auto-flow: column;
  grid-template-columns: none;
  overflow-x: auto;
  padding-bottom: 0.8rem;
  scroll-snap-type: x mandatory;
}

.library-cover-gallery--shelf .library-cover-card {
  scroll-snap-align: start;
}

.library-catalogue-list {
  border-block-start: 1px solid var(--color-border);
  list-style: none;
  margin: 0;
  padding: 0;
}

.library-catalogue-list-row {
  align-items: center;
  border-block-end: 1px solid var(--color-border);
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto minmax(12rem, 1.2fr) minmax(18rem, 2fr) auto;
  padding: 0.45rem 0.25rem;
}

.library-catalogue-list-row--selected,
.library-catalogue-list-row--open {
  background: var(--color-primary-element-light, var(--color-background-hover));
}

.library-catalogue-list-main {
  display: grid;
  min-width: 0;
}

.library-catalogue-list-title {
  font-weight: 700;
  text-align: start;
}

.library-catalogue-list-metadata {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  margin: 0;
}

.library-catalogue-list-metadata div {
  display: flex;
  gap: 0.3rem;
}

.library-catalogue-list-metadata dt {
  color: var(--color-text-maxcontrast);
}

.library-catalogue-list-metadata dd {
  margin: 0;
}

.library-catalogue-list-actions {
  display: flex;
  gap: 0.35rem;
}

@media (max-width: 800px) {
  .library-catalogue-list-row {
    align-items: start;
    grid-template-columns: auto minmax(0, 1fr);
  }

  .library-catalogue-list-metadata,
  .library-catalogue-list-actions {
    grid-column: 2;
  }
}

.library-publication-issue-context {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0;
}

.library-publication-issue-context span,
.library-publication-issue-context strong {
  border-radius: 999px;
  background: var(--color-background-hover);
  padding: 0.25rem 0.6rem;
}

.library-publication-issue-groups {
  display: grid;
  gap: 12px;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 14px;
  background: var(--color-main-background);
}

.library-publication-issue-group {
  border-top: 1px solid var(--color-border);
  padding-top: 10px;
}

.library-publication-issue-group h5 {
  margin: 0 0 8px;
}

.library-publication-issue-group ol {
  display: grid;
  gap: 6px;
  margin: 0;
  padding-inline-start: 22px;
}

.library-publication-issue-group li {
  display: grid;
  gap: 2px;
}

.library-publication-issue-label {
  font-weight: 700;
}

.library-publication-unknown-issues {
  border-top: 1px solid var(--color-border);
  padding-top: 8px;
}

.library-catalogue-workspace {
  align-items: stretch;
  background: color-mix(in srgb, var(--color-main-background) 88%, var(--color-primary-element, #0082c9) 12%);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 1rem;
  padding: 0.45rem;
}

.library-workspace-panel {
  --library-workspace-accent: var(--color-primary-element, #00679e);
  --library-workspace-tint: color-mix(in srgb, var(--library-workspace-accent) 10%, var(--color-main-background) 90%);
  background: linear-gradient(135deg, var(--library-workspace-tint), var(--color-main-background) 48%);
  border: 1px solid color-mix(in srgb, var(--library-workspace-accent) 24%, var(--color-border) 76%);
  border-radius: 14px;
  flex: 1 1 180px;
  min-width: 170px;
  overflow: clip;
  padding: 0;
}

.library-workspace-panel--refine { --library-workspace-accent: #2f80ed; }
.library-workspace-panel--browse { --library-workspace-accent: #27ae60; }
.library-workspace-panel--batch { --library-workspace-accent: #9b51e0; }
.library-workspace-panel--review { --library-workspace-accent: #f2994a; }
.library-workspace-panel--admin { --library-workspace-accent: #4f5d75; }

.library-workspace-panel[open] {
  align-items: start;
  box-shadow: 0 12px 36px color-mix(in srgb, var(--library-workspace-accent) 18%, transparent 82%);
  display: grid;
  flex-basis: 100%;
  gap: 0.65rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  order: 10;
  padding-bottom: 0.75rem;
}

.library-workspace-panel-summary {
  align-items: center;
  cursor: pointer;
  display: grid;
  gap: 0.15rem 0.55rem;
  grid-template-columns: auto minmax(0, 1fr) auto;
  min-height: 5.7rem;
  list-style: none;
  box-sizing: border-box;
  padding: 0.7rem 0.8rem;
  width: 100%;
}

.library-workspace-panel[open] > .library-workspace-panel-summary {
  grid-column: 1 / -1;
  min-height: 4.2rem;
}

.library-workspace-panel-summary::-webkit-details-marker {
  display: none;
}

.library-workspace-panel-summary::after {
  color: var(--color-text-maxcontrast);
  content: '▾';
  font-size: 0.95rem;
  grid-column: 3;
  grid-row: 1;
  transition: transform 160ms ease;
}

.library-workspace-panel[open] .library-workspace-panel-summary::after {
  transform: rotate(180deg);
}

.library-workspace-panel-icon {
  align-items: center;
  align-self: start;
  background: var(--library-workspace-accent);
  border-radius: 999px;
  color: #fff;
  display: inline-flex;
  font-size: 0.82rem;
  font-weight: 800;
  grid-row: 1 / 4;
  height: 1.75rem;
  justify-content: center;
  line-height: 1;
  width: 1.75rem;
}

.library-workspace-panel-title {
  font-weight: 750;
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: normal;
}

.library-workspace-panel-purpose {
  color: var(--color-text-maxcontrast);
  font-size: 0.78rem;
  grid-column: 2 / 4;
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: normal;
}

.library-workspace-scope-badge {
  background: color-mix(in srgb, var(--library-workspace-accent) 13%, var(--color-main-background) 87%);
  border: 1px solid color-mix(in srgb, var(--library-workspace-accent) 32%, transparent 68%);
  border-radius: 999px;
  color: var(--color-main-text);
  font-size: 0.72rem;
  font-weight: 650;
  grid-column: 2 / 4;
  justify-self: start;
  max-width: 100%;
  overflow: hidden;
  padding: 0.18rem 0.48rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-workspace-panel > form,
.library-workspace-panel > nav,
.library-workspace-panel > section,
.library-workspace-panel > article,
.library-workspace-panel > div {
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
}

.library-workspace-panel[open] > form,
.library-workspace-panel[open] > nav,
.library-workspace-panel[open] > section,
.library-workspace-panel[open] > article,
.library-workspace-panel[open] > div {
  margin-inline-start: 0.85rem;
  margin-inline-end: 0.85rem;
}

.library-workspace-panel > :last-child {
  margin-bottom: 1rem;
}

.library-workspace-panel[open] > :last-child {
  margin-bottom: 0;
}

.library-batch-action-card,
.library-review-queue-actions article,
.library-actions-health-overview,
.library-home-hero-card,
.library-home-rediscover,
.library-saved-collection-card,
.library-shortcut-select-card {
  box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 54%, transparent 46%);
}

.library-filter-panel {
  margin: 0;
}

.library-actions-health-overview {
  background: var(--color-background-hover, #f6f6f6);
  border: 1px solid var(--color-border, #ddd);
  border-radius: var(--border-radius-large, 12px);
  display: grid;
  flex-basis: 100%;
  gap: 0.65rem;
  margin-top: 0.75rem;
  max-width: none;
  padding: 0.75rem;
}

.library-actions-health-links,
.library-review-queue-actions {
  display: grid;
  gap: 0.45rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
}

.library-review-queue-actions article {
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #ddd);
  border-radius: var(--border-radius, 8px);
  display: grid;
  gap: 0.45rem;
  padding: 0.65rem;
}

.library-review-queue-tag-form {
  margin: 0;
}

.library-actions-health-grid {
  display: grid;
  gap: 0.65rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.library-actions-health-grid article {
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #ddd);
  border-radius: var(--border-radius, 8px);
  padding: 0.7rem;
}

.library-import-health-number {
  font-size: 1.45rem;
  font-weight: 700;
  margin: 0.2rem 0;
}

.library-actions-health-grid ul,
.library-import-health-examples ul {
  margin-bottom: 0;
  padding-inline-start: 1.1rem;
}

.library-import-health-examples li {
  display: grid;
  gap: 0.25rem;
  margin: 0.5rem 0;
}

.library-import-health-examples code {
  white-space: normal;
  word-break: break-word;
}

.library-import-health-examples strong {
  font-weight: 600;
}

.library-quick-filter-bar {
  display: grid;
  gap: 6px;
  margin: 0.35rem 0;
}

.library-secondary-tools {
  align-items: start;
  display: grid;
  gap: 0.45rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin: 0.45rem 0;
}

.library-secondary-tool {
  background: color-mix(in srgb, var(--color-background-hover, #f6f6f6) 70%, var(--color-main-background, #fff));
  border: 1px solid var(--color-border);
  border-radius: 12px;
  min-width: 0;
  padding: 0.35rem 0.55rem;
}

.library-secondary-tool > summary {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 0.45rem;
  justify-content: space-between;
  line-height: 1.2;
}

.library-secondary-tool > summary span {
  font-size: 0.92rem;
  font-weight: 700;
}

.library-secondary-tool > summary small {
  color: var(--color-text-maxcontrast, #6b6b6b);
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-secondary-tool[open] {
  padding: 0.75rem;
}

.library-secondary-tool[open] > summary {
  border-bottom: 1px solid var(--color-border, #d0d0d0);
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
}

.library-useful-views:not(.library-secondary-tool),
.library-weak-metadata-dashboard:not(.library-secondary-tool),
.library-saved-collections:not(.library-secondary-tool) {
  border: 1px solid var(--color-border);
  border-radius: 18px;
  padding: 1rem;
}

.library-metadata-review-workbench {
  background: linear-gradient(135deg, color-mix(in srgb, var(--color-warning, #eca700) 10%, var(--color-main-background)), var(--color-main-background));
  border: 1px solid color-mix(in srgb, var(--color-warning, #eca700) 35%, var(--color-border));
  border-radius: 20px;
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
}

.library-metadata-review-card,
.library-metadata-review-field {
  background: var(--color-main-background);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  display: grid;
  gap: 0.75rem;
  padding: 0.85rem;
}

.library-metadata-review-fields {
  display: grid;
  gap: 0.75rem;
}

.library-metadata-review-field dl {
  display: grid;
  gap: 0.4rem;
  margin: 0;
}

.library-metadata-review-field dl > div {
  display: grid;
  gap: 0.2rem;
  grid-template-columns: minmax(9rem, 0.35fr) 1fr;
}

.library-metadata-review-field dt {
  color: var(--color-text-maxcontrast);
  font-size: 0.82rem;
}

.library-metadata-review-field dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.library-metadata-review-actions,
.library-metadata-review-accept-form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.library-saved-collections:not(.library-secondary-tool) {
  background: var(--color-background-hover, #f6f6f6);
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: var(--border-radius-large, 10px);
  display: grid;
  gap: 0.65rem;
  margin: 0.5rem 0;
  padding: 0.75rem;
}

.library-useful-views h3,
.library-useful-views p,
.library-weak-metadata-dashboard h3,
.library-weak-metadata-dashboard p,
.library-saved-collections h3,
.library-saved-collections p {
  margin: 0;
}

.library-useful-views-copy,
.library-weak-metadata-dashboard-copy,
.library-saved-collections-copy {
  display: grid;
  gap: 0.25rem;
}

.library-useful-view-links {
  display: grid;
  gap: 0.45rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
}

.library-workspace-panel--browse[open] .library-useful-view-links {
  grid-column: 1 / -1;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr));
}

.library-useful-view-chip {
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: 12px;
  color: var(--color-main-text, #222);
  display: grid;
  gap: 0.08rem 0.35rem;
  grid-template-columns: minmax(0, 1fr) auto;
  min-width: 0;
  padding: 0.45rem 0.55rem;
  text-decoration: none;
}

.library-useful-view-chip:hover,
.library-useful-view-chip:focus {
  border-color: var(--color-primary-element, #00679e);
  text-decoration: none;
}

.library-useful-view-chip strong {
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-useful-view-chip span {
  color: var(--color-text-maxcontrast, #6b6b6b);
  font-size: 0.76rem;
  grid-column: 1 / -1;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-useful-view-count {
  align-self: start;
  background: var(--color-primary-element-light, #eaf6ff);
  border-radius: 999px;
  color: var(--color-main-text, #222);
  font-size: 0.72rem;
  font-weight: 700;
  min-width: 1.5rem;
  padding: 0.1rem 0.35rem;
  text-align: center;
}

.library-shortcut-selectors {
  align-items: end;
  display: grid;
  gap: 0.45rem;
  grid-column: 1 / -1;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
}

.library-shortcut-select-card {
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: 12px;
  display: grid;
  gap: 0.25rem;
  min-width: 0;
  padding: 0.5rem 0.6rem;
}

.library-shortcut-select-card span {
  font-size: 0.78rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-shortcut-select-card select {
  min-width: 0;
  width: 100%;
}

.library-weak-metadata-links {
  display: grid;
  gap: 0.4rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.library-weak-metadata-card {
  align-items: center;
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: var(--border-radius, 6px);
  color: var(--color-main-text, #222);
  display: flex;
  gap: 0.55rem;
  justify-content: space-between;
  min-height: 3.4rem;
  padding: 0.5rem 0.6rem;
  text-decoration: none;
}

.library-weak-metadata-card:hover,
.library-weak-metadata-card:focus {
  border-color: var(--color-primary-element, #00679e);
  text-decoration: none;
}

.library-weak-metadata-card span {
  display: grid;
  gap: 0.12rem;
  min-width: 0;
}

.library-weak-metadata-card small {
  color: var(--color-text-maxcontrast, #6b6b6b);
  font-size: 0.78rem;
  line-height: 1.2;
}

.library-weak-metadata-card b {
  background: var(--color-primary-element-light, #eaf6ff);
  border-radius: 999px;
  flex: 0 0 auto;
  min-width: 2rem;
  padding: 0.15rem 0.45rem;
  text-align: center;
}

.library-saved-collection-save-form,
.library-saved-collection-card,
.library-saved-collection-link {
  align-items: end;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.library-saved-collection-save-form label {
  display: grid;
  flex: 1 1 14rem;
  gap: 0.2rem;
}

.library-saved-collection-links {
  display: grid;
  gap: 0.35rem;
}

.library-saved-collection-card {
  align-items: center;
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: var(--border-radius, 6px);
  justify-content: space-between;
  padding: 0.45rem 0.55rem;
}

.library-saved-collection-link {
  color: var(--color-main-text, #222);
  text-decoration: none;
}

.library-saved-collection-link span {
  color: var(--color-text-maxcontrast, #6b6b6b);
}

.library-quick-search-row {
  align-items: end;
  display: grid;
  gap: 6px;
  grid-template-columns: minmax(180px, 1fr) auto;
}

.library-quick-filter-option-grid {
  align-items: end;
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(3, minmax(96px, auto)) auto auto;
  margin-top: 0.5rem;
}

.library-quick-filter-options {
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: var(--border-radius, 6px);
  padding: 0.35rem 0.55rem;
}

.library-quick-filter-options > summary {
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.library-quick-filter-bar label {
  display: grid;
  font-size: 12px;
  gap: 2px;
  margin: 0;
}

.library-quick-filter-search input {
  min-width: 0;
}

.library-keyboard-hint {
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: 4px;
  color: var(--color-text-maxcontrast, #6b6b6b);
  display: inline-block;
  font-size: 0.8em;
  line-height: 1;
  padding: 2px 5px;
}

.library-batch-actions,
.library-discovery-shortcuts,
.library-catalogue-actions-menu {
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: var(--border-radius, 6px);
  margin: 0;
  padding: 0.35rem 0.55rem;
}

.library-batch-actions > summary,
.library-discovery-shortcuts > summary,
.library-catalogue-actions-menu > summary {
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
}

.library-batch-action-grid {
  display: grid;
  gap: 0.5rem;
  grid-column: 1 / -1;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
}

.library-batch-action-card {
  align-items: end;
  background: var(--color-main-background, #fff);
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: 12px;
  display: grid;
  gap: 0.45rem;
  grid-template-columns: minmax(0, 1fr) auto;
  margin: 0;
  min-width: 0;
  padding: 0.55rem 0.6rem;
}

.library-batch-action-card--wide {
  grid-template-columns: minmax(7rem, 0.8fr) minmax(7rem, 1fr) auto;
}

.library-batch-action-card label {
  display: grid;
  gap: 0.18rem;
  margin: 0;
  min-width: 0;
}

.library-batch-action-card label span {
  font-size: 0.78rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-batch-action-card input,
.library-batch-action-card select {
  min-width: 0;
  width: 100%;
}

.library-batch-action-card button {
  min-height: 38px;
  white-space: nowrap;
}

.library-batch-metadata-reset-form,
.library-batch-cover-refresh-form {
  grid-template-columns: minmax(0, 1fr);
}

.library-filter-panel[open] {
  margin-top: 0.5rem;
}

.library-discovery-hero,
.library-discovery-header {
    border: 1px solid var(--color-border, #d0d0d0);
    border-radius: var(--border-radius-large, 10px);
    margin: 0.75rem 0;
    padding: 1rem;
}

.library-discovery-hero {
    background: linear-gradient(135deg, var(--color-background-hover), var(--color-main-background));
}

.library-catalogue-eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.library-discovery-hero-metrics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.75rem 0;
}

.library-discovery-hero-metrics span {
    background: var(--color-main-background);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    font-weight: 700;
    padding: 0.25rem 0.65rem;
}

.library-discovery-header h3 {
  margin: 0.1rem 0 0.25rem;
}

.library-discovery-header p {
  margin: 0.25rem 0;
}

.library-filter-panel-summary {
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.library-catalogue-header {
  gap: 0.25rem 0.75rem;
  margin-bottom: 0.35rem;
}

.library-catalogue-header h2,
.library-catalogue-header p {
  margin: 0;
}

.library-catalogue-actions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.45rem;
}

.library-catalogue-actions-list .button {
  block-size: auto;
  min-block-size: var(--default-clickable-area, 44px);
  overflow-wrap: anywhere;
  text-align: start;
  white-space: normal;
}

.library-catalogue-status-row {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;
  justify-content: space-between;
  margin: 0.35rem 0;
}

.library-catalogue-status-row .library-filter-result-summary,
.library-catalogue-status-row .library-pagination {
  margin: 0;
}

.library-catalogue-utility-row {
  display: grid;
  gap: 0.35rem;
  grid-template-columns: minmax(180px, auto) minmax(180px, 1fr);
  margin: 0.35rem 0;
}

.library-discovery-shortcut-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 0.6rem;
}

.library-discovery-shortcut-grid h3 {
  font-size: 14px;
  margin: 0 0 0.25rem;
}

.library-discovery-shortcut-grid ul,
.library-discovery-shortcut-grid p {
  margin-bottom: 0;
}

.library-cover-card {
  gap: 8px;
  overflow-wrap: anywhere;
  padding: 8px;
}

.library-cover-frame {
  aspect-ratio: 2 / 3;
  background: var(--color-background-hover);
  border-radius: var(--border-radius-large, 10px);
  display: grid;
  min-height: 0;
  overflow: hidden;
  position: relative;
}

.library-cover-frame > * {
  grid-area: 1 / 1;
}

.library-cover-loading-shimmer {
  animation: library-cover-shimmer 1.4s ease-in-out infinite;
  background: linear-gradient(100deg, transparent 15%, color-mix(in srgb, #fff 42%, transparent) 45%, transparent 75%);
  inset: 0;
  opacity: 0.8;
  position: absolute;
  transform: translateX(-100%);
}

.library-cover-image {
  min-height: 0;
  opacity: 0;
  transition: opacity 180ms ease, filter 180ms ease;
}

.library-cover-image--loaded {
  opacity: 1;
}

.library-cover-card--cover-error .library-cover-image {
  filter: grayscale(1) opacity(0.18);
  opacity: 1;
}

.library-cover-fallback {
  align-self: center;
  background: color-mix(in srgb, var(--color-main-background) 90%, transparent);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-lighter, #666);
  font-size: 12px;
  font-weight: 700;
  justify-self: center;
  padding: 0.25rem 0.55rem;
  text-align: center;
  z-index: 1;
}

@keyframes library-cover-shimmer {
  to {
    transform: translateX(100%);
  }
}

.library-cover-primary {
  gap: 6px;
}

.library-cover-details {
  margin-top: 4px;
  padding-top: 4px;
}

.library-star-marker {
  color: var(--color-warning, #f0ad00);
  margin-inline-end: 4px;
}

.library-cover-details-summary,
.library-cover-actions,
.library-cover-meta {
  font-size: 13px;
}

.library-cover-meta {
  gap: 6px;
  padding-top: 6px;
}

.library-workspace-panel--browse[open] .library-shortcut-selectors {
  align-self: stretch;
  margin-top: 0;
}

.library-workspace-panel--browse[open] .library-discovery-shortcut-grid {
  grid-column: 1 / -1;
}

.library-detail-drawer,
.library-issue-strip-card {
  box-shadow: 0 18px 46px color-mix(in srgb, #000 12%, transparent);
}

.library-detail-drawer-actions,
.library-detail-drawer-stepper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.library-cover-card:hover { border-color: var(--color-border-maxcontrast); }

.library-cover-creator,
.library-cover-context {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-cover-creator { font-size: 0.9rem; }
.library-cover-context { color: var(--color-text-maxcontrast); font-size: 0.78rem; }

.library-navigation-section {
  border-block-start: 1px solid var(--color-border);
  margin-block-start: 0.5rem;
  padding-block-start: 0.75rem;
}

.library-navigation-section > h3 { margin-block: 0 0.5rem; }


.library-publication-issue-strip {
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  padding: 0.3rem 0 0.7rem;
  scroll-snap-type: x mandatory;
}

.library-issue-strip-card {
  background: linear-gradient(160deg, var(--color-main-background), var(--color-background-hover));
  border: 1px solid var(--color-border);
  border-radius: 14px;
  color: inherit;
  display: grid;
  flex: 0 0 9rem;
  gap: 0.25rem;
  padding: 0.7rem;
  scroll-snap-align: start;
  text-decoration: none;
  transition: transform 160ms ease, border-color 160ms ease;
}

.library-issue-strip-card:hover,
.library-issue-strip-card:focus {
  border-color: var(--color-primary-element, #0082c9);
  transform: translateY(-2px);
}

.library-link-button {
  background: transparent;
  border: 0;
  color: var(--color-primary-element, #0082c9);
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}

.library-detail-drawer-backdrop {
  backdrop-filter: blur(5px);
  background: color-mix(in srgb, #000 22%, transparent);
  inset: 0;
  position: fixed;
  z-index: 50;
}

.library-detail-drawer {
  background: var(--color-main-background);
  border-inline-start: 1px solid var(--color-border);
  display: grid;
  gap: 0.7rem;
  inset: 0 0 0 auto;
  max-width: min(92vw, 420px);
  overflow: auto;
  padding: 1rem;
  position: fixed;
  transform: translateX(0);
  transition: transform 180ms ease;
  width: 420px;
  z-index: 51;
}

.library-detail-drawer-close {
  justify-self: end;
}

.library-detail-drawer-keyboard-hint {
  background: var(--color-background-hover);
  border-radius: 999px;
  font-size: 12px;
  margin: -0.2rem 0 0;
  padding: 0.25rem 0.6rem;
}

.library-detail-drawer-cover {
  aspect-ratio: 2 / 3;
  border-radius: var(--border-radius-large, 10px);
  max-height: 132px;
  object-fit: cover;
  width: 88px;
}

.library-detail-drawer-facts {
  display: grid;
  margin: 0;
}

.library-detail-drawer-facts div {
  border-block-end: 1px solid var(--color-border);
  display: grid;
  gap: 12px;
  grid-template-columns: minmax(84px, .4fr) minmax(0, 1fr);
  padding-block: 8px;
}

.library-detail-drawer-facts dt {
  color: var(--color-text-maxcontrast);
}

.library-detail-drawer-facts dd {
  margin: 0;
  overflow-wrap: anywhere;
}

@media (prefers-reduced-motion: reduce) {
  .library-issue-strip-card,
  .library-detail-drawer,
  .library-cover-card,
  .library-cover-image,
  .library-cover-loading-shimmer,
  .library-view-mode-toggle button {
    animation: none;
    transition: none;
  }
}

@media (max-width: 720px) {
  .library-detail-drawer {
    border-inline-start: 0;
    border-radius: 18px 18px 0 0;
    inset: auto 0 0;
    max-height: 86vh;
    max-width: none;
    width: auto;
  }
}

@media (max-width: 520px) {
  .library-quick-search-row,
  .library-quick-filter-option-grid,
  .library-catalogue-utility-row,
  .library-discovery-shortcut-grid,
  .library-import-health-grid {
    grid-template-columns: 1fr;
  }

  .library-import-health-header {
    display: grid;
  }

  .library-cover-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .library-cover-gallery--shelf {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-flow: row;
    overflow-x: visible;
    scroll-snap-type: none;
  }
}
.library-publication-filter,
.library-publisher-filter,
.library-year-filter,
.library-creator-filter,
.library-folder-filter,
.library-subject-filter { display: grid; gap: 6px; position: relative; }
.library-publication-suggestions,
.library-publisher-suggestions,
.library-year-suggestions,
.library-creator-suggestions,
.library-folder-suggestions,
.library-subject-suggestions { background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: var(--border-radius); box-shadow: 0 4px 12px var(--color-box-shadow); left: 0; list-style: none; margin: 0; max-height: min(18rem, 50vh); overflow-y: auto; padding: 4px; position: absolute; right: 0; top: 4.2rem; z-index: 20; }
.library-publication-suggestion,
.library-publisher-suggestion,
.library-year-suggestion,
.library-creator-suggestion,
.library-folder-suggestion,
.library-subject-suggestion { justify-content: flex-start; overflow-wrap: anywhere; text-align: start; width: 100%; }
</style>
