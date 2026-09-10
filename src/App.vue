<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { t } from '@nextcloud/l10n'

const props = defineProps({
  state: {
    type: Object,
    default: () => ({}),
  },
})

const publicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other']
const pageSizes = [25, 50, 100, 250, 500]

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
const publications = computed(() => catalogueState.publications || [])
const publicationSummaries = computed(() => catalogueState.publicationSummaries || [])
const publicationIssueContext = computed(() => catalogueState.publicationIssueContext || null)
const publicationYears = computed(() => catalogueState.publicationYears || [])
const creators = computed(() => catalogueState.creators || [])
const scanStatuses = computed(() => catalogueState.scanStatuses || [])
const workflowStatuses = computed(() => catalogueState.workflowStatuses || [])
const genres = computed(() => catalogueState.genres || [])
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
  publication: catalogueState.activeFilters?.publication || '',
  year: catalogueState.activeFilters?.year || '',
  creator: catalogueState.activeFilters?.creator || '',
  format: catalogueState.activeFilters?.format || '',
  tag: catalogueState.activeFilters?.tag || '',
  shelf: catalogueState.activeFilters?.shelf || '',
  status: catalogueState.activeFilters?.status || '',
  workflowStatus: catalogueState.activeFilters?.workflowStatus || '',
  genre: catalogueState.activeFilters?.genre || '',
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
const settingsUrl = computed(() => catalogueState.settingsUrl || '')
const requestToken = computed(() => catalogueState.requestToken || '')
const metadataExportUrl = computed(() => catalogueState.metadataExportUrl || '')
const metadataSidecarManifestUrl = computed(() => catalogueState.metadataSidecarManifestUrl || '')
const metadataSidecarBundleUrl = computed(() => catalogueState.metadataSidecarBundleUrl || '')
const catalogueEndpointUrl = computed(() => catalogueState.catalogueEndpointUrl || '/apps/library/catalogue')
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
  view: 'View mode',
  type: 'Type',
  publication: 'Series / periodical',
  year: 'Publication year',
  creator: 'Creator',
  format: 'Format',
  tag: 'Nextcloud tag',
  shelf: 'Shelf',
  status: 'Scan status',
  workflowStatus: 'Workflow status',
  genre: 'Genre',
  classification: 'Classification',
  scannerConflicts: 'Scanner conflicts',
  starred: 'Starred',
  needsMetadata: 'Needs metadata',
  coverReview: 'Cover review',
  noCreator: 'No creator',
  noPublication: 'No publication/series',
  noDate: 'Missing date',
  titleFromFilename: 'Filename-derived title',
  noDescription: 'No description',
  unsupportedContainer: 'Unsupported archive/container',
  weakMetadata: 'Weak metadata',
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

const savedCollections = computed(() => catalogueState.savedCollections || [])
const savedCollectionSaveUrl = computed(() => catalogueState.savedCollectionSaveUrl || '/apps/library/collections')
const savedCollectionDeleteBaseUrl = computed(() => catalogueState.savedCollectionDeleteBaseUrl || '/apps/library/collections/__COLLECTION_ID__/delete')
const viewModes = ['compact', 'gallery', 'shelf']
const viewMode = computed(() => viewModes.includes(activeFilters.view) ? activeFilters.view : 'compact')
const coverGalleryClasses = computed(() => ({
  ['library-cover-' + 'gallery--compact']: viewMode.value === 'compact',
  ['library-cover-' + 'gallery--gallery']: viewMode.value === 'gallery',
  ['library-cover-' + 'gallery--shelf']: viewMode.value === 'shelf',
}))

const activeFilterChips = computed(() => Object.entries(filterLabels)
  .map(([key, label]) => ({ key, label, value: activeFilters[key] || '' }))
  .filter((chip) => String(chip.value).trim() !== ''))
const quickHiddenFilters = computed(() => Object.entries(activeFilters)
  .filter(([key, value]) => !['q', 'sort', 'starred'].includes(key) && String(value || '').trim() !== '')
  .map(([key, value]) => ({ key, value })))
const batchHiddenFilters = computed(() => Object.entries(activeFilters)
  .filter(([_key, value]) => String(value || '').trim() !== '')
  .map(([key, value]) => ({ key, value })))
const openCoverDetails = reactive({})
const coverImageStates = reactive({})

const featuredHomeItems = computed(() => items.value.filter((item) => item.starred || item.workflowStatus === 'reading' || item.lastOpenedAt).slice(0, 5))
const recentHomeItems = computed(() => [...items.value].slice(0, 6))
const rediscoverItem = computed(() => items.value.find((item) => item['description'] || item.publication || item.creators) || items.value[0] || null)
const hasHomeDashboard = computed(() => !isDiscoveryPage.value && items.value.length > 0)
const selectedDrawerItem = ref(null)
const selectedDrawerIndex = computed(() => selectedDrawerItem.value ? items.value.findIndex((item) => item.id === selectedDrawerItem.value.id) : -1)
const drawerPreviousItem = computed(() => selectedDrawerIndex.value > 0 ? items.value[selectedDrawerIndex.value - 1] : null)
const drawerNextItem = computed(() => selectedDrawerIndex.value >= 0 && selectedDrawerIndex.value < items.value.length - 1 ? items.value[selectedDrawerIndex.value + 1] : null)
const reviewableMetadataFields = ['publicationType', 'title', 'subtitle', 'creators', 'publication', 'publicationDate', 'language', 'publisher', 'description', 'genres', 'classifications']
const metadataReviewWorkbench = computed(() => {
  const enabled = activeFilters.scannerConflicts === '1' || String(activeFilters.weakMetadata || '').trim() !== ''
  const item = enabled ? items.value.find((candidate) => reviewConflictFieldsFor(candidate).length > 0) : null
  return {
    enabled,
    item,
    fields: item ? reviewConflictFieldsFor(item) : [],
    reviewNextUrl: scannerConflictReviewUrl.value,
    skipUrl: pagination.value.nextUrl || scannerConflictReviewUrl.value,
  }
})

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

function openDetailsDrawer(item) {
  selectedDrawerItem.value = item
}

function closeDetailsDrawer() {
  selectedDrawerItem.value = null
}

function showDrawerItem(item) {
  if (item) selectedDrawerItem.value = item
}
const quickSearchInput = ref(null)
let filterSubmitTimer = null

function buildFilterParams(form) {
  const params = new URLSearchParams(new FormData(form))
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

function applyCatalogueState(nextState) {
  catalogueItems.splice(0, catalogueItems.length, ...((nextState.items || []).map((item) => ({ ...item }))))
  for (const key of ['shelves', 'formats', 'publications', 'publicationSummaries', 'publicationIssueContext', 'publicationYears', 'publicationYearLandingUrls', 'creators', 'creatorLandingUrls', 'scanStatuses', 'workflowStatuses', 'genres', 'classifications', 'cataloguePagination', 'settingsUrl', 'metadataExportUrl', 'metadataSidecarManifestUrl', 'metadataSidecarBundleUrl', 'catalogueEndpointUrl', 'batchTagUrl', 'batchTagRemoveUrl', 'batchMetadataResetUrl', 'batchMetadataEditPreviewUrl', 'batchCoverRefreshUrl', 'scannerConflictReviewUrl', 'metadataErrorsUrl', 'metadataErrorsTsvUrl', 'coverProbeUrl', 'importHealthSummaryUrl', 'smartViewCounts', 'savedCollections', 'savedCollectionSaveUrl', 'savedCollectionDeleteBaseUrl']) {
    if (Object.prototype.hasOwnProperty.call(nextState, key)) {
      catalogueState[key] = nextState[key]
    }
  }
  Object.assign(activeFilters, nextState.activeFilters || {})
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

async function submitFiltersAjax(event) {
  const form = event?.currentTarget?.tagName === 'FORM' ? event.currentTarget : event?.currentTarget?.form
  if (!form) return
  const params = buildFilterParams(form)
  const query = params.toString()
  const endpointQuery = query ? `?${query}` : ''
  const response = await fetch(catalogueEndpointUrl.value + endpointQuery, {
    headers: { Accept: 'application/json' },
    credentials: 'same-origin',
  })
  if (!response.ok) {
    form.submit()
    return
  }
  applyCatalogueState(await response.json())
  history.replaceState({}, '', query ? `?${query}` : window.location.pathname)
}

function submitFiltersNow(event) {
  void submitFiltersAjax(event)
}

function scheduleFilterSubmit(event) {
  window.clearTimeout(filterSubmitTimer)
  filterSubmitTimer = window.setTimeout(() => submitFiltersNow(event), 350)
}

function filterChipRemoveUrl(key) {
  const params = new URLSearchParams()
  for (const [param, value] of Object.entries(activeFilters)) {
    const normalized = String(value || '').trim()
    if (normalized !== '' && param !== key && !(param === 'sort' && normalized === 'title') && !(param === 'view' && normalized === 'compact')) {
      params.set(param, normalized)
    }
  }
  const query = params.toString()
  return query ? `?${query}` : '?'
}

function clearSearchUrl() {
  return filterChipRemoveUrl('q')
}

const smartViewCounts = computed(() => catalogueState.smartViewCounts || {})
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
  { key: 'needs-metadata', label: 'Needs metadata', description: 'Items with missing core fields, extraction errors, or filename-only metadata.', query: 'needsMetadata=1', filters: { needsMetadata: '1' } },
  { key: 'scanner-conflicts', label: 'Scanner conflicts', description: 'Rows where current metadata differs from scanner candidates.', query: 'scannerConflicts=1', filters: { scannerConflicts: '1' } },
  { key: 'metadata-errors', label: 'Metadata errors', description: 'Files whose metadata extraction needs review.', query: 'status=metadata_error', filters: { status: 'metadata_error' } },
  { key: 'placeholder-covers', label: 'Placeholder covers', description: 'Likely placeholder-cover candidates without a manual cover override.', query: 'coverReview=placeholder', filters: { coverReview: 'placeholder' } },
  { key: 'no-creator', label: 'No creator', description: 'Publications without creator metadata.', query: 'noCreator=1', filters: { noCreator: '1' } },
  { key: 'no-publication', label: 'No publication/series', description: 'Items without publication, series, periodical or collection metadata.', query: 'noPublication=1', filters: { noPublication: '1' } },
  { key: 'missing-date', label: 'Missing date', description: 'Items without a publication date or year.', query: 'noDate=1', filters: { noDate: '1' } },
  { key: 'title-from-filename', label: 'Filename-derived title', description: 'Rows whose title still comes from filename/path parsing.', query: 'titleFromFilename=1', filters: { titleFromFilename: '1' } },
  { key: 'weak-filename-metadata', label: 'Weak filename metadata', description: 'Items whose metadata still depends on filename/folder parsing.', query: 'weakMetadata=filename', filters: { weakMetadata: 'filename' } },
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
  { key: 'scanner-conflicts', label: 'Scanner conflict', description: 'Current metadata differs from scanner candidates.', filters: { scannerConflicts: '1' } },
  { key: 'metadata-errors', label: 'Metadata extraction error', description: 'Scanner recorded a metadata extraction error.', filters: { status: 'metadata_error' } },
  { key: 'no-description', label: 'No description', description: 'No summary/description text is indexed.', filters: { noDescription: '1' } },
  { key: 'unsupported-containers', label: 'Unsupported archive/container', description: 'Container type needs manual inspection or future extractor support.', filters: { unsupportedContainer: '1' } },
])

function setViewMode(nextMode) {
  if (!viewModes.includes(nextMode)) return
  activeFilters.view = nextMode
  const params = new URLSearchParams(window.location.search)
  if (nextMode === 'compact') {
    params.delete('view')
  } else {
    params.set('view', nextMode)
  }
  params.delete('page')
  history.replaceState({}, '', params.toString() ? `?${params.toString()}` : window.location.pathname)
}

function smartViewUrl(filters) {
  const params = new URLSearchParams(window.location.search)
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
  const params = new URLSearchParams(window.location.search)
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

function setCoverDetailsOpen(itemId, event) {
  openCoverDetails[itemId] = Boolean(event?.currentTarget?.open)
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
  const refinePanel = quickSearchInput.value?.closest?.('.library-workspace-panel--refine')
  if (refinePanel) {
    refinePanel.open = true
  }
  quickSearchInput.value?.focus()
  quickSearchInput.value?.select?.()
}

function clearQuickSearchShortcut(event) {
  if (event.key !== 'Escape' || document.activeElement !== quickSearchInput.value || activeFilters.q === '') {
    return
  }
  event.preventDefault()
  activeFilters.q = ''
  quickSearchInput.value.value = ''
  window.clearTimeout(filterSubmitTimer)
  submitFiltersNow({ currentTarget: quickSearchInput.value })
}

function handleDrawerKeyboardShortcuts(event) {
  if (!selectedDrawerItem.value || event.metaKey || event.ctrlKey || event.altKey) {
    return false
  }
  if (event.key === 'Escape') {
    event.preventDefault()
    closeDetailsDrawer()
    return true
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
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleCatalogueKeyboardShortcuts)
})

async function toggleStar(item, event) {
  const form = event?.currentTarget?.closest?.('form') || event?.currentTarget
  if (!form || !item?.starUrl) return
  const previous = Boolean(item.starred)
  item.starred = !previous
  try {
    const response = await fetch(item.starUrl, {
      method: 'POST',
      body: new FormData(form),
      credentials: 'same-origin',
    })
    if (!response.ok) {
      item.starred = previous
    }
  } catch (_error) {
    item.starred = previous
  }
}

</script>

<template>
  <div class="library-vue-catalogue">
  <section class="library-panel library-mobile-compact-chrome" aria-labelledby="library-catalogue-heading">
    <nav class="library-catalogue-workspace library-workspace-menubar" :aria-label="t('library', 'One catalogue workspace')">
      <details class="library-workspace-panel library-workspace-panel--refine library-filter-panel" data-workspace-panel="refine">
        <summary class="library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary">
          <span class="library-workspace-panel-icon" aria-hidden="true">⌕</span>
          <span class="library-workspace-panel-title" :title="t('library', 'Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.')">{{ t('library', 'Refine results') }}</span>
          <small class="library-workspace-panel-purpose">{{ t('library', 'Filters, facets and saved filter shortcuts') }}</small>
          <b class="library-workspace-scope-badge">{{ activeFilters.shelf ? t('library', 'this shelf') : (activeFilterChips.length > 0 ? t('library', 'current results') : t('library', 'whole catalogue')) }}</b>
        </summary>
        <form method="get" class="library-quick-filter-bar" :aria-label="t('library', 'Quick catalogue filters')" @submit.prevent="submitFiltersAjax">
          <input v-for="hidden in quickHiddenFilters" :key="hidden.key" type="hidden" :name="hidden.key" :value="hidden.value">
          <div class="library-quick-search-row">
            <label class="library-quick-filter-search" :title="t('library', 'Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.')">
              <span>{{ t('library', 'Search title, creator, description, filename or folder') }} <kbd class="library-keyboard-hint">/</kbd></span>
              <input ref="quickSearchInput" v-model="activeFilters.q" data-library-quick-search type="search" name="q" placeholder="Camera, Eco, Rolleiflex, description or folder..." @input="scheduleFilterSubmit">
            </label>
            <button type="submit" class="button primary" :aria-label="t('library', 'Search catalogue')">{{ t('library', 'Search') }}</button>
          </div>
          <details class="library-quick-filter-options">
            <summary>{{ t('library', 'Filter & sort') }}</summary>
            <div class="library-quick-filter-option-grid">
            <label>{{ t('library', 'Sort') }}<select v-model="activeFilters.sort" name="sort" @change="submitFiltersAjax"><option value="title">{{ t('library', 'Title') }}</option><option value="recent">{{ t('library', 'Recently added') }}</option><option value="publicationDate">{{ t('library', 'Publication date') }}</option><option value="publication">{{ t('library', 'Series') }}</option><option value="lastOpened">{{ t('library', 'Recently opened') }}</option><option value="format">{{ t('library', 'Format') }}</option></select></label>
            <label>{{ t('library', 'Starred') }}<select v-model="activeFilters.starred" name="starred" @change="submitFiltersAjax"><option value="">{{ t('library', 'All') }}</option><option value="1">{{ t('library', 'Starred') }}</option></select></label>
            <label>{{ t('library', 'Size') }}<select :value="pagination.limit" name="limit" @change="submitFiltersAjax"><option v-for="limit in pageSizes" :key="limit" :value="limit">{{ limit }}</option></select></label>
            <button type="submit" class="button secondary" :aria-label="t('library', 'Apply catalogue filters')">{{ t('library', 'Apply filters') }}</button>
            <a href="?" class="button secondary" :aria-label="t('library', 'Clear catalogue filters')">{{ t('library', 'Clear all') }}</a>
          </div>
          </details>
        </form>
        <form method="get" class="library-filter-bar" :aria-label="t('library', 'Catalogue search and filters')" @submit.prevent="submitFiltersAjax">
          <label>{{ t('library', 'Type') }}<select v-model="activeFilters.type" name="type"><option value="">{{ t('library', 'All types') }}</option><option v-for="type in publicationTypes" :key="type" :value="type">{{ type }}</option></select></label>
          <label>{{ t('library', 'Series / periodical') }}<select v-model="activeFilters.publication" name="publication"><option value="">{{ t('library', 'All series and periodicals') }}</option><option v-for="publication in publications" :key="publication" :value="publication">{{ publication }}</option></select></label>
          <label>{{ t('library', 'Publication year') }}<select v-model="activeFilters.year" name="year"><option value="">{{ t('library', 'All years') }}</option><option v-for="year in publicationYears" :key="year" :value="year">{{ year }}</option></select></label>
          <label>{{ t('library', 'Creator') }}<select v-model="activeFilters.creator" name="creator" title="Exact full-field creator matches only"><option value="">{{ t('library', 'All creators') }}</option><option v-for="creator in creators" :key="creator" :value="creator">{{ creator }}</option></select></label>
          <label>{{ t('library', 'Nextcloud tag') }}<input v-model="activeFilters.tag" type="text" name="tag" placeholder="photography"></label>
          <label>{{ t('library', 'Format') }}<select v-model="activeFilters.format" name="format"><option value="">{{ t('library', 'All formats') }}</option><option v-for="format in formats" :key="format" :value="format">{{ upper(format) }}</option></select></label>
          <label>{{ t('library', 'Shelf') }}<select v-model="activeFilters.shelf" name="shelf"><option value="">{{ t('library', 'All shelves') }}</option><option v-for="shelf in shelves" :key="shelf" :value="shelf">{{ shelf }}</option></select></label>
          <label>{{ t('library', 'Scan status') }}<select v-model="activeFilters.status" name="status"><option value="">{{ t('library', 'All scan statuses') }}</option><option v-for="status in scanStatuses" :key="status" :value="status">{{ status }}</option></select></label>
          <label>{{ t('library', 'Workflow status') }}<select v-model="activeFilters.workflowStatus" name="workflowStatus"><option value="">{{ t('library', 'All workflow statuses') }}</option><option v-for="status in workflowStatuses" :key="status" :value="status">{{ status }}</option></select></label>
          <label>{{ t('library', 'Genre') }}<select v-model="activeFilters.genre" name="genre"><option value="">{{ t('library', 'All genres') }}</option><option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option></select></label>
          <label>{{ t('library', 'Classification') }}<select v-model="activeFilters.classification" name="classification"><option value="">{{ t('library', 'All classifications') }}</option><option v-for="classification in classifications" :key="classification" :value="classification">{{ classification }}</option></select></label>
          <label>{{ t('library', 'Scanner conflicts') }}<select v-model="activeFilters.scannerConflicts" name="scannerConflicts"><option value="">{{ t('library', 'All metadata') }}</option><option value="1">{{ t('library', 'Needs review') }}</option></select></label>
          <button type="submit" class="button primary">{{ t('library', 'Apply filters') }}</button><a href="?" class="button secondary">{{ t('library', 'Clear') }}</a>
        </form>
      </details>

      <details class="library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard" data-workspace-panel="browse">
        <summary class="library-workspace-panel-summary library-workspace-panel-summary--polished"><span class="library-workspace-panel-icon" aria-hidden="true">↗</span><span class="library-workspace-panel-title" :title="t('library', 'Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.')">{{ t('library', 'Browse shortcuts') }}</span><small class="library-workspace-panel-purpose">{{ t('library', 'Continue reading, recently added, rediscover and useful views') }}</small><b class="library-workspace-scope-badge">{{ t('library', 'whole catalogue') }}</b></summary>

        <article v-if="hasHomeDashboard" class="library-home-hero-card"><h3 :title="t('library', 'Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.')">{{ t('library', 'Continue reading') }}</h3><div class="library-home-hero-actions"><a v-if="featuredHomeItems[0]" class="button primary" :href="featuredHomeItems[0].openUrl">{{ t('library', 'Read now') }}</a><button v-if="featuredHomeItems[0]" type="button" class="button secondary" @click="openDetailsDrawer(featuredHomeItems[0])">{{ t('library', 'Details') }}</button></div></article>
        <article v-if="rediscoverItem" class="library-home-rediscover"><p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Rediscover') }}</p><strong>{{ rediscoverItem.title }}</strong><span class="library-muted">{{ rediscoverItem.creators || rediscoverItem.publication || rediscoverItem.cachedPath }}</span><button type="button" class="button secondary" @click="openDetailsDrawer(rediscoverItem)">{{ t('library', 'Peek') }}</button></article>
        <nav class="library-useful-view-links" :aria-label="t('library', 'Useful views')"><a v-for="view in smartViews" :key="view.key" class="library-useful-view-chip" :href="smartViewUrl(view.filters)" :title="t('library', view.description)"><strong>{{ t('library', view.label) }}</strong><small class="library-useful-view-count">{{ Number(smartViewCounts[view.key] || 0) }}</small></a></nav>
        <div class="library-shortcut-selectors"><label v-if="publicationSummaries.length > 0" class="library-shortcut-select-card library-periodical-groups" :title="t('library', 'Jump into recurring publications with one click.')"><span>{{ t('library', 'Series / periodicals') }}</span><select @change="navigateToSelected"><option value="">{{ t('library', 'Choose series') }}</option><option v-for="summary in publicationSummaries" :key="summary.publication" :value="publicationLandingUrl(summary.publication)">{{ summary.publication }} · {{ summary.itemCount }}</option></select></label><label v-if="publicationYears.length > 0" class="library-shortcut-select-card library-year-groups"><span>{{ t('library', 'Publication year') }}</span><select @change="navigateToSelected"><option value="">{{ t('library', 'Choose year') }}</option><option v-for="year in publicationYears" :key="year" :value="yearLandingUrl(year)">{{ year }}</option></select></label><label v-if="creators.length > 0" class="library-shortcut-select-card library-creator-groups"><span>{{ t('library', 'Creator') }}</span><select @change="navigateToSelected"><option value="">{{ t('library', 'Choose creator') }}</option><option v-for="creator in creators" :key="creator" :value="creatorLandingUrl(creator)">{{ creator }}</option></select></label></div>
        <section class="library-saved-collections"><h3 :title="t('library', 'Save the current in-app filter setup as a named collection, then reopen it without leaving Library.')">{{ t('library', 'Custom collections') }}</h3><form method="post" :action="savedCollectionSaveUrl" class="library-saved-collection-save-form" :title="!canSaveCurrentView ? t('library', 'Choose search terms or filters first, then save them as a custom collection.') : ''"><input type="hidden" name="requesttoken" :value="requestToken"><input type="hidden" name="savedCollectionFilters" :value="currentSavableFiltersJson"><label>{{ t('library', 'Collection name') }}<input type="text" name="savedCollectionName" :placeholder="t('library', 'e.g. Bremen photo books')" :disabled="!canSaveCurrentView" autocomplete="off"></label><button type="submit" class="button secondary" :disabled="!canSaveCurrentView" :title="t('library', 'Save current view')">{{ t('library', 'Save') }}</button></form><nav v-if="savedCollections.length > 0" class="library-saved-collection-links" :aria-label="t('library', 'Saved custom collections')"><article v-for="collection in savedCollections" :key="collection.id" class="library-saved-collection-card"><a class="library-saved-collection-link" :href="savedCollectionUrl(collection.filters)"><strong>{{ collection.name }}</strong><span>{{ Number(collection.count || 0) }} {{ t('library', 'items') }}</span></a><form method="post" :action="savedCollectionDeleteUrl(collection.id)" class="library-saved-collection-delete-form"><input type="hidden" name="requesttoken" :value="requestToken"><button type="submit" class="button tertiary">{{ t('library', 'Delete') }}</button></form></article></nav></section>
      </details>

      <details class="library-workspace-panel library-workspace-panel--batch library-batch-actions" data-workspace-panel="batch" :aria-label="t('library', 'Batch actions for current results')">
        <summary class="library-workspace-panel-summary library-workspace-panel-summary--polished"><span class="library-workspace-panel-icon" aria-hidden="true">✓</span><span class="library-workspace-panel-title" :title="t('library', 'Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.')">{{ t('library', 'Batch actions') }}</span><small class="library-workspace-panel-purpose">{{ t('library', 'Preview and apply changes to current results') }}</small><b class="library-workspace-scope-badge">{{ pagination.total }} {{ t('library', 'Current filter result') }}</b></summary>

        <div class="library-batch-action-grid">
          <form method="post" :action="batchTagUrl" class="library-batch-action-card library-batch-tag-form"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="filter.key" type="hidden" :name="filter.key" :value="filter.value"><label><span>{{ t('library', 'Add tag') }}</span><input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" :placeholder="t('library', 'e.g. Review')" autocomplete="off"></label><button type="submit" class="button primary" :title="t('library', 'Uses the current filters, not just this page. Limit: 5,000 matched items.')">{{ t('library', 'Apply') }}</button></form>
          <form method="post" :action="batchTagRemoveUrl" class="library-batch-action-card library-batch-tag-remove-form"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`remove-tag-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><label><span>{{ t('library', 'Remove tag') }}</span><input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" :placeholder="t('library', 'e.g. Review')" autocomplete="off"></label><button type="submit" class="button secondary" :title="t('library', 'Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.')">{{ t('library', 'Remove') }}</button></form>
          <form method="post" :action="batchMetadataResetUrl" class="library-batch-action-card library-batch-metadata-reset-form"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`reset-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><input type="hidden" name="scannerConflicts" value="1"><button type="submit" class="button secondary" :title="t('library', 'Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.')">{{ t('library', 'Reset metadata') }}</button></form>
          <form method="post" :action="batchMetadataEditPreviewUrl" class="library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form" target="_blank"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`edit-preview-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><label><span>{{ t('library', 'Field') }}</span><select name="bulkEditField"><option value="publicationType">{{ t('library', 'Publication type') }}</option><option value="subtitle">{{ t('library', 'Subtitle') }}</option><option value="creators">{{ t('library', 'Creators') }}</option><option value="publication">{{ t('library', 'Series / periodical') }}</option><option value="publicationDate">{{ t('library', 'Publication date') }}</option><option value="language">{{ t('library', 'Language') }}</option><option value="publisher">{{ t('library', 'Publisher') }}</option><option value="genres">{{ t('library', 'Genres') }}</option><option value="classifications">{{ t('library', 'Classifications') }}</option></select></label><label><span>{{ t('library', 'Value') }}</span><input type="text" name="bulkEditValue" placeholder="magazine, de, photography..." autocomplete="off"></label><button type="submit" class="button secondary" :title="t('library', 'Preview first, then apply from the review page.')">{{ t('library', 'Preview edit') }}</button></form>
          <form method="post" :action="batchCoverRefreshUrl" class="library-batch-action-card library-batch-cover-refresh-form"><input type="hidden" name="requesttoken" :value="requestToken"><input v-for="filter in batchHiddenFilters" :key="`cover-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value"><button type="submit" class="button secondary" :title="t('library', 'Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.')">{{ t('library', 'Fresh covers') }}</button></form>
        </div>
      </details>

      <details class="library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard" data-workspace-panel="review">
        <summary class="library-workspace-panel-summary library-workspace-panel-summary--polished"><span class="library-workspace-panel-icon" aria-hidden="true">!</span><span class="library-workspace-panel-title" :title="t('library', 'Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.')">{{ t('library', 'Review queue') }}</span><small class="library-workspace-panel-purpose">{{ t('library', 'Weak metadata, conflicts, missing files and extraction errors') }}</small><b class="library-workspace-scope-badge">{{ t('library', 'current results') }}</b></summary>

        <nav class="library-weak-metadata-links" :aria-label="t('library', 'Weak metadata catalogue views')"><a v-for="row in weakMetadataDashboardRows" :key="row.key" class="library-weak-metadata-card" :href="smartViewUrl(row.filters)" :title="t('library', row.description)"><span><strong>{{ t('library', row.label) }}</strong></span><b>{{ Number(smartViewCounts[row.key] || 0) }}</b></a></nav>
        <div class="library-review-queue-actions" aria-label="Review queue shortcuts"><article :title="t('library', 'Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.')"><h4>{{ t('library', 'Metadata-error queue') }}</h4><a class="button secondary" :href="metadataErrorReview.reviewUrl || '?status=metadata_error'">{{ t('library', 'Open metadata-error rows') }}</a><a class="button secondary" :href="metadataErrorsTsvUrl">{{ t('library', 'Export metadata-error rows') }}</a><form method="post" :action="batchTagUrl" class="library-review-queue-tag-form"><input type="hidden" name="requesttoken" :value="requestToken"><input type="hidden" name="status" value="metadata_error"><input type="hidden" name="nextcloudTagName" value="library-metadata-error"><button type="submit" class="button secondary">{{ t('library', 'Tag metadata-error rows') }}</button></form></article><article :title="t('library', 'Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.')"><h4>{{ t('library', 'Scanner-conflict queue') }}</h4><a class="button secondary" :href="scannerConflictReviewUrl">{{ t('library', 'Review scanner conflicts') }}</a><form method="post" :action="batchTagUrl" class="library-review-queue-tag-form"><input type="hidden" name="requesttoken" :value="requestToken"><input type="hidden" name="scannerConflicts" value="1"><input type="hidden" name="nextcloudTagName" value="library-scanner-conflict"><button type="submit" class="button secondary">{{ t('library', 'Tag scanner-conflict rows') }}</button></form></article></div>
        <section v-if="metadataReviewWorkbench.enabled" class="library-metadata-review-workbench" aria-labelledby="library-metadata-review-workbench-heading"><div class="library-metadata-review-workbench-copy"><p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Metadata review workbench') }}</p><h3 id="library-metadata-review-workbench-heading" :title="t('library', 'Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.')">{{ t('library', 'Review next conflict') }}</h3></div><article v-if="metadataReviewWorkbench.item" class="library-metadata-review-card"><header><strong>{{ metadataReviewWorkbench.item.title }}</strong><span class="library-muted">{{ metadataReviewWorkbench.item.cachedPath }}</span></header><div class="library-metadata-review-fields"><article v-for="field in metadataReviewWorkbench.fields" :key="field.field" class="library-metadata-review-field"><h4>{{ field.field }}</h4><dl><div><dt>{{ t('library', 'Current value') }}</dt><dd>{{ field.currentValue || '—' }}</dd></div><div><dt>{{ t('library', 'scanner candidate') }}</dt><dd>{{ field.scannerCandidate || '—' }}</dd></div><div><dt>{{ t('library', 'path-template candidate') }}</dt><dd>{{ field.pathTemplateCandidate || '—' }}</dd></div><div><dt>{{ t('library', 'sidecar value') }}</dt><dd>{{ field.sidecarValue || '—' }}</dd></div><div><dt>{{ t('library', 'source provenance') }}</dt><dd>{{ field.sourceProvenance || '—' }}</dd></div></dl><form method="post" :action="metadataReviewWorkbench.item.resetFieldUrl" class="library-metadata-review-accept-form"><input type="hidden" name="requesttoken" :value="requestToken"><input type="hidden" name="field" :value="field.field"><input type="hidden" name="returnTo" value="catalogue"><button type="submit" class="button secondary">{{ t('library', 'accept scanner candidate') }}</button></form></article></div><footer class="library-metadata-review-actions"><a class="button secondary" :href="metadataReviewWorkbench.item.detailsUrl">{{ t('library', 'Open full details') }}</a><a class="button secondary" :href="metadataReviewWorkbench.skipUrl">{{ t('library', 'Skip to next conflict') }}</a></footer></article><p v-else class="library-muted">{{ t('library', 'No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.') }}</p><a class="button secondary" :href="metadataReviewWorkbench.reviewNextUrl">{{ t('library', 'Review next conflict') }}</a></section>
      </details>

      <details class="library-workspace-panel library-workspace-panel--admin" data-workspace-panel="admin" @toggle="loadImportHealthSummary">
        <summary class="library-workspace-panel-summary library-workspace-panel-summary--polished"><span class="library-workspace-panel-icon" aria-hidden="true">⚙</span><span class="library-workspace-panel-title" :title="t('library', 'Maintain roots, scans, exports and repair operations away from the browse cards.')">{{ t('library', 'Admin tools') }}</span><small class="library-workspace-panel-purpose">{{ t('library', 'Roots, scans, exports and repair operations') }}</small><b class="library-workspace-scope-badge">{{ t('library', 'all enabled roots') }}</b></summary>

        <div class="library-catalogue-actions-list"><a :href="settingsUrl" class="button secondary" aria-label="Open Library settings">{{ t('library', 'Settings') }}</a><a v-if="metadataExportUrl" :href="metadataExportUrl" class="button secondary" aria-label="Export corrected metadata">{{ t('library', 'Export corrected metadata') }}</a><a v-if="metadataSidecarManifestUrl" :href="metadataSidecarManifestUrl" class="button secondary" aria-label="Export sidecar manifest">{{ t('library', 'Sidecar manifest') }}</a><a v-if="metadataSidecarBundleUrl" :href="metadataSidecarBundleUrl" class="button secondary" aria-label="Export sidecar ZIP">{{ t('library', 'Sidecar ZIP') }}</a></div>
        <div class="library-actions-health-overview"><p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Import health') }}</p><h3 :title="t('library', 'Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.')">{{ t('library', 'Metadata overview') }}</h3><p v-if="importHealthState.loading" class="library-muted">{{ t('library', 'Loading cached metadata overview…') }}</p><p v-else-if="importHealthState.error" class="library-notice">{{ importHealthState.error }}</p><p v-else-if="!importHealthState.loaded" class="library-muted">{{ t('library', 'Open Admin tools to load the cached metadata and cover overview.') }}</p><template v-if="importHealthState.loaded"><p v-if="importHealthSummary.message" class="library-muted">{{ importHealthSummary.message }}</p><p v-else-if="importHealthSummary.cacheStatus === 'missing'" class="library-muted">{{ t('library', 'No cached metadata overview exists yet') }}</p><p v-if="importHealthGeneratedAt" class="library-muted">{{ t('library', 'Last generated') }}: {{ importHealthGeneratedAt }}</p><button type="button" class="button secondary library-import-health-refresh" :disabled="importHealthState.refreshing" @click="refreshImportHealthSummary">{{ importHealthState.refreshing ? t('library', 'Refreshing metadata overview…') : t('library', 'Refresh metadata overview') }}</button><div class="library-actions-health-links"><a class="button secondary" :href="metadataErrorReview.reviewUrl || '?status=metadata_error'">{{ t('library', 'Review metadata errors') }}</a><a class="button secondary" :href="metadataErrorsUrl">{{ t('library', 'Full review') }}</a><a class="button secondary" :href="metadataErrorsTsvUrl">{{ t('library', 'Export TSV') }}</a><a class="button secondary" :href="coverProbeUrl">{{ t('library', 'Probe covers') }}</a></div><div class="library-actions-health-grid"><article><h4>{{ t('library', 'Metadata errors') }}</h4><p class="library-import-health-number">{{ metadataErrorReview.total || 0 }}</p></article><article><h4>{{ t('library', 'Archive/container check') }}</h4><p class="library-import-health-number">{{ archiveMagicSummary.mismatches || 0 }}</p></article><article><h4>{{ t('library', 'Cover health') }}</h4><p class="library-muted">{{ coverHealthSummary.note }}</p></article><article><h4>{{ t('library', 'Cover support matrix') }}</h4><p class="library-muted">{{ t('library', 'Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.') }}</p></article><details v-if="metadataErrorReview.examples?.length" class="library-import-health-examples"><summary>{{ t('library', 'Example files and suggested actions') }}</summary><ul><li v-for="example in metadataErrorReview.examples" :key="`${example.fileId}-${example.path}`"><code>{{ example.path }}</code><span>{{ example.scanStatus }} · {{ example.scanError }} · {{ example.actualContainerType }}</span><strong>{{ example.suggestedRepairAction }}</strong></li></ul></details></div></template></div>
      </details>
    </nav>

    <div class="library-catalogue-header">
      <div>
        <p v-if="isDiscoveryPage" class="library-muted library-catalogue-eyebrow">{{ discoveryKindLabel }}</p>
        <h2 id="library-catalogue-heading">{{ catalogueHeading }}</h2>
      </div>
    </div>

    <p v-if="batchLimitErrorMessage" class="library-warning library-batch-limit-error">{{ batchLimitErrorMessage }}</p>
    <p v-if="batchMetadataApplyMessage" class="library-notice library-batch-metadata-apply-result">{{ batchMetadataApplyMessage }}</p>


    <section v-if="isDiscoveryPage" class="library-discovery-hero" aria-labelledby="library-discovery-heading">
      <p class="library-muted library-catalogue-eyebrow">{{ discoveryKindLabel }}</p>
      <h3 id="library-discovery-heading" :title="isCreatorDiscoveryPage ? t('library', 'Items by this creator, sorted by publication context when available.') : (isYearDiscoveryPage ? t('library', 'Items from this publication year, sorted by publication date when available.') : t('library', 'Items in this publication, sorted by issue/date context when available.'))">{{ discoveryTitle }}</h3>
      <div class="library-discovery-hero-metrics" aria-label="Discovery summary">
        <span>{{ pagination.total }} {{ t('library', 'items') }}</span>
        <span v-if="publicationIssueContext?.earliestYear && publicationIssueContext?.latestYear">{{ publicationIssueContext.earliestYear }}–{{ publicationIssueContext.latestYear }}</span>
        <span v-if="publicationIssueContext?.datedCount">{{ publicationIssueContext.datedCount }} {{ t('library', 'dated') }}</span>
        <span v-if="publicationIssueContext?.undatedCount > 0">{{ publicationIssueContext.undatedCount }} {{ t('library', 'undated') }}</span>
      </div>
      <aside v-if="isPublicationDiscoveryPage && publicationIssueContext" class="library-publication-issue-context" aria-label="Publication issue/date context">
        <strong>{{ t('library', 'Publication contents') }}</strong>
        <span>{{ publicationIssueContext.itemCount }} {{ t('library', 'items') }}</span>
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
        <div class="library-publication-issue-strip" aria-label="Visual issue strip">
          <a v-for="group in publicationIssueContext.issueGroups" :key="`strip-${group.label}`" class="library-issue-strip-card" :href="group.items?.[0]?.detailsUrl || '#'">
            <span>{{ group.label }}</span>
            <strong>{{ group.items?.[0]?.issueLabel || t('library', 'Issue') }}</strong>
            <small>{{ group.items?.length || 0 }} {{ t('library', 'items') }}</small>
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
      <p><a href="/apps/library/" class="button secondary">{{ t('library', 'Back to full catalogue') }}</a></p>
    </section>

    <nav class="library-view-mode-toggle" aria-label="Cover view mode">
      <button type="button" data-library-view-mode="compact" :class="{ active: viewMode === 'compact' }" :aria-pressed="viewMode === 'compact' ? 'true' : 'false'" @click="setViewMode('compact')">{{ t('library', 'Compact') }}</button>
      <button type="button" data-library-view-mode="gallery" :class="{ active: viewMode === 'gallery' }" :aria-pressed="viewMode === 'gallery' ? 'true' : 'false'" @click="setViewMode('gallery')">{{ t('library', 'Gallery') }}</button>
      <button type="button" data-library-view-mode="shelf" :class="{ active: viewMode === 'shelf' }" :aria-pressed="viewMode === 'shelf' ? 'true' : 'false'" @click="setViewMode('shelf')">{{ t('library', 'Shelf') }}</button>
    </nav>

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

    <nav v-if="activeFilterChips.length > 0" class="library-active-filter-chips" :aria-label="t('library', 'Active filters')">
      <span>{{ t('library', 'Active filters') }}</span>
      <a v-for="chip in activeFilterChips" :key="chip.key" :href="filterChipRemoveUrl(chip.key)" class="library-filter-chip" :aria-label="`${t('library', 'Remove filter')}: ${chip.label}`">
        <strong>{{ chip.label }}:</strong> {{ chip.value }} <span aria-hidden="true">×</span>
      </a>
    </nav>


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

    <div v-else class="library-cover-gallery" :class="coverGalleryClasses">
      <article v-for="item in items" :key="item.id" class="library-cover-card" :class="{ 'library-cover-card--open': openCoverDetails[item.id], 'library-cover-card--cover-loaded': coverImageState(item) === 'loaded', 'library-cover-card--cover-error': coverImageState(item) === 'error' }">
        <a class="library-cover-link" :href="item.openUrl" :aria-label="`Read ${item.title}`">
          <span class="library-cover-frame">
            <span v-if="coverImageState(item) === 'loading'" class="library-cover-loading-shimmer" aria-hidden="true"></span>
            <img class="library-cover-image" :class="{ 'library-cover-image--loaded': coverImageState(item) === 'loaded' }" :src="item.coverUrl" :alt="`Cover for ${item.title}`" loading="lazy" @load="markCoverLoaded(item)" @error="markCoverFailed(item)">
            <span v-if="coverImageState(item) === 'error'" class="library-cover-fallback" role="status">{{ t('library', 'Cover unavailable') }}</span>
          </span>
        </a>
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
            @click.prevent="toggleStar(item, $event)">
            {{ item.starred ? '★' : '☆' }}
          </button>
        </form>
        <div class="library-cover-summary">
          <div class="library-cover-primary">
            <h3><span v-if="item.starred" class="library-star-marker" :aria-label="t('library', 'Starred')">★</span>{{ item.title }}</h3>
            <a class="library-cover-read" :href="item.openUrl">{{ t('library', 'Read') }}</a>
          </div>
          <details class="library-cover-details" @toggle="setCoverDetailsOpen(item.id, $event)">
            <summary class="library-cover-details-summary" :aria-label="`${t('library', 'Show details and actions')}: ${item.title}`">{{ t('library', 'Details') }}</summary>
            <div class="library-cover-meta">
              <p v-if="item.creators" class="library-creator">{{ item.creators }}</p>
              <dl class="library-cover-detail-list">
                <div class="library-cover-detail-chip"><dt>{{ t('library', 'Type') }}</dt><dd>{{ item.publicationType }}</dd></div>
                <div v-if="item.publication" class="library-cover-detail-chip"><dt>{{ t('library', 'Series') }}</dt><dd>{{ item.publication }}</dd></div>
                <div v-if="item.publicationDate" class="library-cover-detail-chip"><dt>{{ t('library', 'Date') }}</dt><dd>{{ item.publicationDate }}</dd></div>
                <div v-if="item.workflowStatus" class="library-cover-detail-chip"><dt>{{ t('library', 'Status') }}</dt><dd>{{ item.workflowStatus }}</dd></div>
                <div v-if="item.hasScannerConflict" class="library-cover-detail-chip"><dt>{{ t('library', 'Review') }}</dt><dd>{{ item.scannerConflictCount }} fields</dd></div>
                <div v-if="item.lastOpenedAt" class="library-cover-detail-chip"><dt>{{ t('library', 'Last opened') }}</dt><dd>{{ item.lastOpenedAt }}</dd></div>
                <div v-if="item.extension" class="library-cover-detail-chip"><dt>{{ t('library', 'Format') }}:</dt><dd> {{ upper(item.extension) }}</dd></div>
                <div v-if="item.shelf" class="library-cover-detail-chip"><dt>{{ t('library', 'Shelf') }}</dt><dd>{{ item.shelf }}</dd></div>
              </dl>
              <p v-if="item.description" class="library-muted library-cover-description">{{ item.description }}</p>
              <p v-if="item.scanStatus !== 'indexed' || item.scanError" class="library-item-scan-status library-scan-error">
                scanStatus: {{ item.scanStatus || 'unknown' }}<span v-if="item.scanError"> · scanError: {{ item.scanError }}</span>
              </p>
              <div class="library-nextcloud-tags library-cover-tags" aria-label="nextcloudTags">
                <span v-if="tagsFor(item).length === 0" class="library-muted">No Nextcloud tags</span>
                <span v-for="tag in tagsFor(item)" v-else :key="tag.id" class="library-tag">{{ tag.name }}</span>
              </div>
              <p class="library-cover-actions"><a :href="item.filesUrl">{{ t('library', 'Show in Files') }}</a> · <a :href="item.downloadUrl">{{ t('library', 'Download source') }}</a> · <button type="button" class="library-link-button library-cover-details-drawer-button" @click="openDetailsDrawer(item)">{{ t('library', 'Details drawer') }}</button> · <a :href="item.detailsUrl">{{ t('library', 'Details') }}</a></p>
            </div>
          </details>
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

    <div v-if="selectedDrawerItem" class="library-detail-drawer-backdrop" @click="closeDetailsDrawer" aria-hidden="true"></div>
    <aside v-if="selectedDrawerItem" class="library-detail-drawer" aria-labelledby="library-detail-drawer-heading" aria-describedby="library-detail-drawer-keyboard-hint" role="dialog" aria-modal="true">
      <button type="button" class="library-detail-drawer-close" aria-label="Close details panel" @click="closeDetailsDrawer">×</button>
      <p id="library-detail-drawer-keyboard-hint" class="library-muted library-detail-drawer-keyboard-hint">{{ t('library', 'Esc closes; arrow keys browse neighbouring items.') }}</p>
      <img class="library-detail-drawer-cover" :src="selectedDrawerItem.coverUrl" :alt="`Cover for ${selectedDrawerItem.title}`" loading="lazy">
      <p class="library-muted library-catalogue-eyebrow">{{ selectedDrawerItem.publicationType || t('library', 'Publication') }}</p>
      <h3 id="library-detail-drawer-heading">{{ selectedDrawerItem.title }}</h3>
      <p v-if="selectedDrawerItem.creators" class="library-creator">{{ selectedDrawerItem.creators }}</p>
      <p v-if="selectedDrawerItem.description" class="library-muted">{{ selectedDrawerItem.description }}</p>
      <dl class="library-detail-drawer-facts">
        <div v-if="selectedDrawerItem.publication"><dt>{{ t('library', 'Series') }}</dt><dd>{{ selectedDrawerItem.publication }}</dd></div>
        <div v-if="selectedDrawerItem.publicationDate"><dt>{{ t('library', 'Date') }}</dt><dd>{{ selectedDrawerItem.publicationDate }}</dd></div>
        <div v-if="selectedDrawerItem.shelf"><dt>{{ t('library', 'Shelf') }}</dt><dd>{{ selectedDrawerItem.shelf }}</dd></div>
      </dl>
      <p class="library-detail-drawer-actions">
        <a class="button primary" :href="selectedDrawerItem.openUrl">{{ t('library', 'Read') }}</a>
        <a class="button secondary" :href="selectedDrawerItem.detailsUrl">{{ t('library', 'View full details') }}</a>
      </p>
      <nav class="library-detail-drawer-stepper" :aria-label="t('library', 'Browse neighbouring items')">
        <button type="button" class="button secondary" :disabled="!drawerPreviousItem" @click="showDrawerItem(drawerPreviousItem)">{{ t('library', 'Previous issue') }}</button>
        <button type="button" class="button secondary" :disabled="!drawerNextItem" @click="showDrawerItem(drawerNextItem)">{{ t('library', 'Next issue') }}</button>
      </nav>
    </aside>
  </section>

  </div>
</template>

<style>
.library-vue-catalogue .library-panel {
  margin-top: 8px;
  padding: 12px;
}

.library-cover-gallery {
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
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
  padding-left: 22px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.library-workspace-panel-purpose {
  color: var(--color-text-maxcontrast);
  font-size: 0.78rem;
  grid-column: 2 / 4;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  margin-left: 1rem;
  margin-right: 1rem;
}

.library-workspace-panel[open] > form,
.library-workspace-panel[open] > nav,
.library-workspace-panel[open] > section,
.library-workspace-panel[open] > article,
.library-workspace-panel[open] > div {
  margin-left: 0.85rem;
  margin-right: 0.85rem;
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
  padding-left: 1.1rem;
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

.library-cover-card--open {
  grid-column: span 2;
  position: relative;
  z-index: 2;
}

.library-cover-frame {
  background: linear-gradient(145deg, var(--color-background-hover), color-mix(in srgb, var(--color-primary-element, #0082c9) 7%, var(--color-main-background)));
  border-radius: 12px;
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
  margin-right: 4px;
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

.library-home-dashboard {
  display: grid;
  gap: 12px;
  grid-template-columns: minmax(220px, 1.25fr) minmax(220px, 1.6fr) minmax(180px, 0.8fr);
  margin: 0.75rem 0;
}

.library-workspace-panel--browse[open] .library-home-hero-card,
.library-workspace-panel--browse[open] .library-home-rediscover,
.library-workspace-panel--browse[open] .library-shortcut-selectors {
  align-self: stretch;
  margin-top: 0;
}

.library-workspace-panel--browse[open] .library-discovery-shortcut-grid {
  grid-column: 1 / -1;
}

.library-home-hero-card,
.library-home-rediscover,
.library-detail-drawer,
.library-issue-strip-card {
  box-shadow: 0 18px 46px color-mix(in srgb, #000 12%, transparent);
}

.library-home-hero-card,
.library-home-rediscover {
  background: radial-gradient(circle at top left, color-mix(in srgb, var(--color-primary-element, #0082c9) 18%, transparent), transparent 45%), var(--color-main-background);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  display: grid;
  gap: 0.7rem;
  padding: 1rem;
}

.library-home-hero-actions,
.library-detail-drawer-actions,
.library-detail-drawer-stepper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.library-home-rail {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(88px, 1fr));
}

.library-home-rail h4 {
  grid-column: 1 / -1;
  margin: 0;
}

.library-home-mini-card {
  background: var(--color-main-background);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  cursor: pointer;
  display: grid;
  gap: 0.35rem;
  padding: 0.45rem;
  text-align: left;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}

.library-home-mini-card:hover,
.library-home-mini-card:focus,
.library-cover-card:hover {
  transform: translateY(-2px);
}

.library-home-mini-card img {
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
}

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
  border-left: 1px solid var(--color-border);
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
  border-radius: 16px;
  max-height: 42vh;
  object-fit: cover;
  width: min(100%, 260px);
}

.library-detail-drawer-facts {
  display: grid;
  gap: 0.35rem;
}

.library-detail-drawer-facts div {
  display: flex;
  justify-content: space-between;
}

@media (prefers-reduced-motion: reduce) {
  .library-home-mini-card,
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
  .library-home-dashboard {
    grid-template-columns: 1fr;
  }

  .library-home-rail {
    display: flex;
    overflow-x: auto;
  }

  .library-home-mini-card {
    flex: 0 0 8rem;
  }

  .library-detail-drawer {
    border-left: 0;
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
}
</style>
