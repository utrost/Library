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
const importHealthSummary = computed(() => catalogueState.importHealthSummary || {})
const metadataErrorReview = computed(() => catalogueState.metadataErrorReview || importHealthSummary.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: '?status=metadata_error' })
const archiveMagicSummary = computed(() => catalogueState.archiveMagicSummary || importHealthSummary.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] })
const coverHealthSummary = computed(() => catalogueState.coverHealthSummary || importHealthSummary.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: '' })
const coverSupportMatrix = computed(() => catalogueState.coverSupportMatrix || importHealthSummary.value.coverSupportMatrix || coverHealthSummary.value.byFormat || [])
const environmentCapabilities = computed(() => catalogueState.environmentCapabilities || importHealthSummary.value.environmentCapabilities || {})
const hasImportHealthFindings = computed(() => Number(metadataErrorReview.value.total || 0) > 0 || Number(archiveMagicSummary.value.mismatches || 0) > 0 || (coverHealthSummary.value.byFormat || []).some((row) => row.nextcloudPreview !== 'expected-ok' || row.libraryCoverRoute !== 'expected-ok'))
const isPublicationDiscoveryPage = computed(() => catalogueState.discoveryPage === 'publication')
const isYearDiscoveryPage = computed(() => catalogueState.discoveryPage === 'year')
const isCreatorDiscoveryPage = computed(() => catalogueState.discoveryPage === 'creator')
const isDiscoveryPage = computed(() => isPublicationDiscoveryPage.value || isYearDiscoveryPage.value || isCreatorDiscoveryPage.value)
const discoveryTitle = computed(() => catalogueState.discoveryTitle || activeFilters.publication || activeFilters.year || activeFilters.creator || '')
const catalogueHeading = computed(() => isDiscoveryPage.value ? discoveryTitle.value : t('library', 'Publication catalogue'))
const discoveryKindLabel = computed(() => isCreatorDiscoveryPage.value ? t('library', 'Creator') : (isYearDiscoveryPage.value ? t('library', 'Publication year') : t('library', 'Publication / series')))
const rootCount = computed(() => Number(catalogueState.rootCount || 0))
const enabledRootCount = computed(() => Number(catalogueState.enabledRootCount || 0))
const hasNoConfiguredRoots = computed(() => rootCount.value === 0)
const hasNoEnabledRoots = computed(() => rootCount.value > 0 && enabledRootCount.value === 0)
const hasActiveFilters = computed(() => activeFilterChips.value.length > 0)
const filterLabels = {
  q: 'Search',
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
  return params
}

function applyCatalogueState(nextState) {
  catalogueItems.splice(0, catalogueItems.length, ...((nextState.items || []).map((item) => ({ ...item }))))
  for (const key of ['shelves', 'formats', 'publications', 'publicationSummaries', 'publicationIssueContext', 'publicationYears', 'publicationYearLandingUrls', 'creators', 'creatorLandingUrls', 'scanStatuses', 'workflowStatuses', 'genres', 'classifications', 'cataloguePagination', 'settingsUrl', 'metadataExportUrl', 'metadataSidecarManifestUrl', 'metadataSidecarBundleUrl', 'catalogueEndpointUrl', 'batchTagUrl', 'batchTagRemoveUrl', 'batchMetadataResetUrl', 'batchMetadataEditPreviewUrl', 'batchCoverRefreshUrl', 'scannerConflictReviewUrl', 'metadataErrorsUrl', 'metadataErrorsTsvUrl', 'coverProbeUrl', 'importHealthSummary', 'metadataErrorReview', 'archiveMagicSummary', 'coverHealthSummary', 'coverSupportMatrix', 'environmentCapabilities']) {
    if (Object.prototype.hasOwnProperty.call(nextState, key)) {
      catalogueState[key] = nextState[key]
    }
  }
  Object.assign(activeFilters, nextState.activeFilters || {})
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
    if (normalized !== '' && param !== key && !(param === 'sort' && normalized === 'title')) {
      params.set(param, normalized)
    }
  }
  const query = params.toString()
  return query ? `?${query}` : '?'
}

function clearSearchUrl() {
  return filterChipRemoveUrl('q')
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

function handleCatalogueKeyboardShortcuts(event) {
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
    <div class="library-catalogue-header">
      <div>
        <p v-if="isDiscoveryPage" class="library-muted library-catalogue-eyebrow">{{ discoveryKindLabel }}</p>
        <h2 id="library-catalogue-heading">{{ catalogueHeading }}</h2>
        <p class="library-muted">{{ isDiscoveryPage ? t('library', 'Browse this focused view; use filters only when you need to narrow it further.') : t('library', 'Browse as a shelf/gallery first; open the details panel when metadata matters.') }}</p>
      </div>
      <nav class="library-catalogue-toolbar" :aria-label="t('library', 'Library actions')">
        <details class="library-catalogue-actions-menu">
          <summary>{{ t('library', 'Actions') }}</summary>
          <div class="library-catalogue-actions-list">
            <a :href="settingsUrl" class="button secondary" aria-label="Open Library settings">{{ t('library', 'Settings') }}</a>
            <a v-if="metadataExportUrl" :href="metadataExportUrl" class="button secondary" aria-label="Export corrected metadata">{{ t('library', 'Export corrected metadata') }}</a>
            <a v-if="metadataSidecarManifestUrl" :href="metadataSidecarManifestUrl" class="button secondary" aria-label="Export sidecar manifest">{{ t('library', 'Sidecar manifest') }}</a>
            <a v-if="metadataSidecarBundleUrl" :href="metadataSidecarBundleUrl" class="button secondary" aria-label="Export sidecar ZIP">{{ t('library', 'Sidecar ZIP') }}</a>
          <div v-if="hasImportHealthFindings" class="library-actions-health-overview" aria-labelledby="library-actions-health-heading">
            <p class="library-muted library-catalogue-eyebrow">{{ t('library', 'Import health') }}</p>
            <h3 id="library-actions-health-heading">{{ t('library', 'Metadata overview') }}</h3>
            <p class="library-muted">{{ t('library', 'Metadata errors, archive/container mismatches, and cover risks from current roots. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.') }}</p>
            <div class="library-actions-health-links">
              <a class="button secondary" :href="metadataErrorReview.reviewUrl || '?status=metadata_error'">{{ t('library', 'Review metadata errors') }}</a>
              <a class="button secondary" :href="metadataErrorsUrl">{{ t('library', 'Full review') }}</a>
              <a class="button secondary" :href="metadataErrorsTsvUrl">{{ t('library', 'Export TSV') }}</a>
              <a class="button secondary" :href="coverProbeUrl">{{ t('library', 'Probe covers') }}</a>
            </div>
            <div class="library-actions-health-grid">
              <article>
                <h4>{{ t('library', 'Metadata errors') }}</h4>
                <p class="library-import-health-number">{{ metadataErrorReview.total || 0 }}</p>
                <ul>
                  <li v-for="row in metadataErrorReview.byExtension" :key="row.extension">{{ upper(row.extension) }} · {{ row.count }}</li>
                </ul>
              </article>
              <article>
                <h4>{{ t('library', 'Archive/container check') }}</h4>
                <p class="library-import-health-number">{{ archiveMagicSummary.mismatches || 0 }}</p>
                <ul>
                  <li v-for="row in archiveMagicSummary.byExtensionAndContainer" :key="`${row.extension}-${row.actualContainerType}`">{{ upper(row.extension) }} · {{ row.actualContainerType }} · {{ row.count }}</li>
                </ul>
              </article>
              <article>
                <h4>{{ t('library', 'Cover health') }}</h4>
                <p class="library-muted">{{ coverHealthSummary.note }}</p>
                <ul>
                  <li v-for="row in coverHealthSummary.byFormat" :key="`${row.extension}-${row.nextcloudPreview}-${row.libraryCoverRoute}`">{{ upper(row.extension) }} · nextcloudPreview: {{ row.nextcloudPreview }} · libraryCoverRoute: {{ row.libraryCoverRoute }} · {{ row.count }}</li>
                </ul>
              </article>
              <article>
                <h4>{{ t('library', 'Cover support matrix') }}</h4>
                <p class="library-muted">{{ t('library', 'Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.') }}</p>
                <ul>
                  <li v-for="row in coverSupportMatrix" :key="`${row.extension}-${row.nextcloudPreview}-${row.libraryCoverRoute}-${row.count}`">{{ upper(row.extension) }} · Nextcloud/plugin preview: {{ row.nextcloudPreview }} · Library extraction: {{ row.libraryCoverRoute }} · {{ row.count }}</li>
                </ul>
                <p class="library-muted">{{ t('library', 'Extractor tools') }}: ZIP={{ environmentCapabilities.phpZipArchive ? 'ZipArchive' : 'missing' }} · 7z={{ environmentCapabilities.sevenZipCommand || 'missing' }} · RAR={{ environmentCapabilities.rarCommand || 'missing' }} · bsdtar={{ environmentCapabilities.bsdtarCommand || 'missing' }}</p>
              </article>
            </div>
            <details v-if="metadataErrorReview.examples?.length" class="library-import-health-examples">
              <summary>{{ t('library', 'Example files and suggested actions') }}</summary>
              <ul>
                <li v-for="example in metadataErrorReview.examples" :key="`${example.fileId}-${example.path}`">
                  <code>{{ example.path }}</code>
                  <span>{{ example.scanStatus }} · {{ example.scanError }} · {{ example.actualContainerType }}</span>
                  <strong>{{ example.suggestedRepairAction }}</strong>
                </li>
              </ul>
            </details>
          </div>
          </div>
        </details>
      </nav>
    </div>

    <p v-if="batchMetadataApplyMessage" class="library-notice library-batch-metadata-apply-result">{{ batchMetadataApplyMessage }}</p>

    <form method="get" class="library-quick-filter-bar" :aria-label="t('library', 'Quick catalogue filters')" @submit.prevent="submitFiltersAjax">
      <input v-for="hidden in quickHiddenFilters" :key="hidden.key" type="hidden" :name="hidden.key" :value="hidden.value">
      <div class="library-quick-search-row">
        <label class="library-quick-filter-search">
          <span>{{ t('library', 'Search') }} <kbd class="library-keyboard-hint">/</kbd></span>
          <input ref="quickSearchInput" v-model="activeFilters.q" data-library-quick-search type="search" name="q" placeholder="Camera, Eco, Rolleiflex..." @input="scheduleFilterSubmit">
        </label>
        <button type="submit" class="button primary" :aria-label="t('library', 'Search catalogue')">{{ t('library', 'Search') }}</button>
      </div>
      <details class="library-quick-filter-options">
        <summary>{{ t('library', 'Filter & sort') }}</summary>
        <div class="library-quick-filter-option-grid">
          <label>
            {{ t('library', 'Sort') }}
            <select v-model="activeFilters.sort" name="sort" @change="submitFiltersAjax">
              <option value="title">{{ t('library', 'Title') }}</option>
              <option value="recent">{{ t('library', 'Recently added') }}</option>
              <option value="publicationDate">{{ t('library', 'Publication date') }}</option>
              <option value="publication">{{ t('library', 'Series') }}</option>
              <option value="lastOpened">{{ t('library', 'Recently opened') }}</option>
              <option value="format">{{ t('library', 'Format') }}</option>
            </select>
          </label>
          <label>
            {{ t('library', 'Starred') }}
            <select v-model="activeFilters.starred" name="starred" @change="submitFiltersAjax">
              <option value="">{{ t('library', 'All') }}</option>
              <option value="1">{{ t('library', 'Starred') }}</option>
            </select>
          </label>
          <label>
            {{ t('library', 'Size') }}
            <select :value="pagination.limit" name="limit" @change="submitFiltersAjax">
              <option v-for="limit in pageSizes" :key="limit" :value="limit">{{ limit }}</option>
            </select>
          </label>
          <button type="submit" class="button secondary" :aria-label="t('library', 'Apply catalogue filters')">{{ t('library', 'Apply filters') }}</button>
          <a href="?" class="button secondary" :aria-label="t('library', 'Clear catalogue filters')">{{ t('library', 'Clear all') }}</a>
        </div>
      </details>
    </form>

    <details class="library-filter-panel">
      <summary class="library-filter-panel-summary">{{ t('library', 'Show catalogue filters') }}</summary>
      <form method="get" class="library-filter-bar" :aria-label="t('library', 'Catalogue search and filters')" @submit.prevent="submitFiltersAjax">
        <label>
          {{ t('library', 'Search title / author') }}
          <input v-model="activeFilters.q" type="search" name="q" placeholder="Camera, Eco, Rolleiflex...">
        </label>
      <label>
        {{ t('library', 'Type') }}
        <select v-model="activeFilters.type" name="type">
          <option value="">{{ t('library', 'All types') }}</option>
          <option v-for="type in publicationTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Series / periodical') }}
        <select v-model="activeFilters.publication" name="publication">
          <option value="">{{ t('library', 'All series and periodicals') }}</option>
          <option v-for="publication in publications" :key="publication" :value="publication">{{ publication }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Publication year') }}
        <select v-model="activeFilters.year" name="year">
          <option value="">{{ t('library', 'All years') }}</option>
          <option v-for="year in publicationYears" :key="year" :value="year">{{ year }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Creator') }}
        <select v-model="activeFilters.creator" name="creator" title="Exact full-field creator matches only">
          <option value="">{{ t('library', 'All creators') }}</option>
          <option v-for="creator in creators" :key="creator" :value="creator">{{ creator }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Nextcloud tag') }}
        <input v-model="activeFilters.tag" type="text" name="tag" placeholder="photography">
      </label>
      <label>
        {{ t('library', 'Format') }}
        <select v-model="activeFilters.format" name="format">
          <option value="">{{ t('library', 'All formats') }}</option>
          <option v-for="format in formats" :key="format" :value="format">{{ upper(format) }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Shelf') }}
        <select v-model="activeFilters.shelf" name="shelf">
          <option value="">{{ t('library', 'All shelves') }}</option>
          <option v-for="shelf in shelves" :key="shelf" :value="shelf">{{ shelf }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Scan status') }}
        <select v-model="activeFilters.status" name="status">
          <option value="">{{ t('library', 'All scan statuses') }}</option>
          <option v-for="status in scanStatuses" :key="status" :value="status">{{ status }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Workflow status') }}
        <select v-model="activeFilters.workflowStatus" name="workflowStatus">
          <option value="">{{ t('library', 'All workflow statuses') }}</option>
          <option v-for="status in workflowStatuses" :key="status" :value="status">{{ status }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Genre') }}
        <select v-model="activeFilters.genre" name="genre">
          <option value="">{{ t('library', 'All genres') }}</option>
          <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Classification') }}
        <select v-model="activeFilters.classification" name="classification">
          <option value="">{{ t('library', 'All classifications') }}</option>
          <option v-for="classification in classifications" :key="classification" :value="classification">{{ classification }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Scanner conflicts') }}
        <select v-model="activeFilters.scannerConflicts" name="scannerConflicts">
          <option value="">{{ t('library', 'All metadata') }}</option>
          <option value="1">{{ t('library', 'Needs review') }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Starred') }}
        <select v-model="activeFilters.starred" name="starred">
          <option value="">{{ t('library', 'All publications') }}</option>
          <option value="1">{{ t('library', 'Starred only') }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Sort') }}
        <select v-model="activeFilters.sort" name="sort">
          <option value="title">{{ t('library', 'Title') }}</option>
          <option value="recent">{{ t('library', 'Recently added') }}</option>
          <option value="publicationDate">{{ t('library', 'Publication date') }}</option>
          <option value="publication">{{ t('library', 'Series / periodical') }}</option>
          <option value="lastOpened">{{ t('library', 'Recently opened') }}</option>
          <option value="format">{{ t('library', 'Format') }}</option>
        </select>
      </label>
      <label>
        {{ t('library', 'Page size') }}
        <select :value="pagination.limit" name="limit">
          <option v-for="limit in pageSizes" :key="limit" :value="limit">{{ limit }}</option>
        </select>
      </label>
        <button type="submit" class="button primary" :aria-label="t('library', 'Apply catalogue filters')">{{ t('library', 'Apply filters') }}</button>
        <a href="?" class="button secondary" :aria-label="t('library', 'Clear catalogue filters')">{{ t('library', 'Clear') }}</a>
        <a :href="scannerConflictReviewUrl" class="button secondary library-scanner-conflict-review-link">{{ t('library', 'Review scanner conflicts') }}</a>
      </form>
    </details>

    <section v-if="isDiscoveryPage" class="library-discovery-hero" aria-labelledby="library-discovery-heading">
      <p class="library-muted library-catalogue-eyebrow">{{ discoveryKindLabel }}</p>
      <h3 id="library-discovery-heading">{{ discoveryTitle }}</h3>
      <p class="library-muted">{{ isCreatorDiscoveryPage ? t('library', 'Items by this creator, sorted by publication context when available.') : (isYearDiscoveryPage ? t('library', 'Items from this publication year, sorted by publication date when available.') : t('library', 'Items in this publication, sorted by issue/date context when available.')) }}</p>
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
      </aside>
      <p><a href="/apps/library/" class="button secondary">{{ t('library', 'Back to full catalogue') }}</a></p>
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

    <div class="library-catalogue-utility-row" aria-label="Catalogue tools and discovery shortcuts">
      <details class="library-batch-actions" :aria-label="t('library', 'Batch actions for current results')">
        <summary>{{ t('library', 'Batch') }} <span class="library-settings-count-badge">{{ pagination.total }} {{ t('library', 'Current filter result') }}</span></summary>
        <form method="post" :action="batchTagUrl" class="library-batch-tag-form">
          <input type="hidden" name="requesttoken" :value="requestToken">
          <input v-for="filter in batchHiddenFilters" :key="filter.key" type="hidden" :name="filter.key" :value="filter.value">
          <label>
            <span>{{ t('library', 'Nextcloud tag') }}</span>
            <input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" :placeholder="t('library', 'e.g. Review')" autocomplete="off">
          </label>
          <button type="submit" class="button primary">{{ t('library', 'Apply Nextcloud tag to current results') }}</button>
          <p class="library-muted">{{ t('library', 'Uses the current filters, not just this page. Limit: 5,000 matched items.') }}</p>
        </form>
        <form method="post" :action="batchTagRemoveUrl" class="library-batch-tag-remove-form">
          <input type="hidden" name="requesttoken" :value="requestToken">
          <input v-for="filter in batchHiddenFilters" :key="`remove-tag-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
          <label>
            <span>{{ t('library', 'Nextcloud tag') }}</span>
            <input type="text" name="nextcloudTagName" list="library-nextcloud-tag-suggestions" :placeholder="t('library', 'e.g. Review')" autocomplete="off">
          </label>
          <button type="submit" class="button secondary">{{ t('library', 'Remove tag from current results') }}</button>
          <p class="library-muted">{{ t('library', 'Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.') }}</p>
        </form>
        <form method="post" :action="batchMetadataResetUrl" class="library-batch-metadata-reset-form">
          <input type="hidden" name="requesttoken" :value="requestToken">
          <input v-for="filter in batchHiddenFilters" :key="`reset-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
          <input type="hidden" name="scannerConflicts" value="1">
          <button type="submit" class="button secondary">{{ t('library', 'Reset filtered metadata') }}</button>
          <p class="library-muted">{{ t('library', 'Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.') }}</p>
        </form>
        <form method="post" :action="batchMetadataEditPreviewUrl" class="library-batch-metadata-edit-preview-form" target="_blank">
          <input type="hidden" name="requesttoken" :value="requestToken">
          <input v-for="filter in batchHiddenFilters" :key="`edit-preview-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
          <label>
            <span>{{ t('library', 'Metadata field') }}</span>
            <select name="bulkEditField">
              <option value="publicationType">{{ t('library', 'Publication type') }}</option>
              <option value="subtitle">{{ t('library', 'Subtitle') }}</option>
              <option value="creators">{{ t('library', 'Creators') }}</option>
              <option value="publication">{{ t('library', 'Series / periodical') }}</option>
              <option value="publicationDate">{{ t('library', 'Publication date') }}</option>
              <option value="language">{{ t('library', 'Language') }}</option>
              <option value="publisher">{{ t('library', 'Publisher') }}</option>
              <option value="genres">{{ t('library', 'Genres') }}</option>
              <option value="classifications">{{ t('library', 'Classifications') }}</option>
            </select>
          </label>
          <label>
            <span>{{ t('library', 'Preview value') }}</span>
            <input type="text" name="bulkEditValue" placeholder="magazine, de, photography..." autocomplete="off">
          </label>
          <button type="submit" class="button secondary">{{ t('library', 'Preview & apply metadata edit') }}</button>
          <p class="library-muted">{{ t('library', 'Preview first, then apply from the review page.') }}</p>
        </form>
        <form method="post" :action="batchCoverRefreshUrl" class="library-batch-cover-refresh-form">
          <input type="hidden" name="requesttoken" :value="requestToken">
          <input v-for="filter in batchHiddenFilters" :key="`cover-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
          <button type="submit" class="button secondary">{{ t('library', 'Request fresh cover previews') }}</button>
          <p class="library-muted">{{ t('library', 'Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.') }}</p>
        </form>
      </details>

      <details class="library-discovery-shortcuts">
        <summary>{{ t('library', 'Browse') }}</summary>
        <div class="library-discovery-shortcut-grid">
          <section v-if="publicationSummaries.length > 0" class="library-periodical-groups" aria-labelledby="library-periodical-groups-heading">
            <h3 id="library-periodical-groups-heading">{{ t('library', 'Top series and periodicals') }}</h3>
            <p class="library-muted">{{ t('library', 'Jump into recurring publications with one click.') }}</p>
            <ul>
              <li v-for="summary in publicationSummaries" :key="summary.publication">
                <a :href="publicationLandingUrl(summary.publication)">{{ summary.publication }}</a>
                <span class="library-muted">{{ summary.itemCount }} items</span>
              </li>
            </ul>
          </section>
          <section v-else-if="publicationSummaries.length === 0" class="library-periodical-groups library-periodical-groups-empty" aria-labelledby="library-periodical-groups-empty-heading">
            <h3 id="library-periodical-groups-empty-heading">{{ t('library', 'No series or periodicals found yet') }}</h3>
            <p class="library-muted">{{ t('library', 'Add publication or series names in item details to build this shortcut panel.') }}</p>
          </section>
          <section v-if="publicationYears.length > 0" class="library-year-groups" aria-labelledby="library-year-groups-heading">
            <h3 id="library-year-groups-heading">{{ t('library', 'Top publication years') }}</h3>
            <ul>
              <li v-for="year in publicationYears" :key="year">
                <a :href="yearLandingUrl(year)">{{ year }}</a>
              </li>
            </ul>
          </section>
          <section v-if="creators.length > 0" class="library-creator-groups" aria-labelledby="library-creator-groups-heading">
            <h3 id="library-creator-groups-heading">{{ t('library', 'Top creators') }}</h3>
            <ul>
              <li v-for="creator in creators" :key="creator">
                <a :href="creatorLandingUrl(creator)">{{ creator }}</a>
              </li>
            </ul>
          </section>
        </div>
      </details>
    </div>

    <nav v-if="activeFilterChips.length > 0" class="library-active-filter-chips" :aria-label="t('library', 'Active filters')">
      <span>{{ t('library', 'Active filters') }}</span>
      <a v-for="chip in activeFilterChips" :key="chip.key" :href="filterChipRemoveUrl(chip.key)" class="library-filter-chip" :aria-label="`${t('library', 'Remove filter')}: ${chip.label}`">
        <strong>{{ chip.label }}:</strong> {{ chip.value }} <span aria-hidden="true">×</span>
      </a>
    </nav>


    <div v-if="items.length === 0" class="library-empty-content" :class="{ 'library-first-run-guidance': hasNoConfiguredRoots || hasNoEnabledRoots, 'library-filter-empty-state': hasActiveFilters && !hasNoConfiguredRoots && !hasNoEnabledRoots }" role="status">
      <template v-if="hasNoConfiguredRoots">
        <h3>{{ t('library', 'Start with one Library root') }}</h3>
        <p class="library-muted">{{ t('library', 'Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.') }}</p>
        <p class="library-empty-actions"><a :href="settingsUrl" class="button primary">{{ t('library', 'Add a Library root') }}</a><span class="library-muted">{{ t('library', 'Run a scan after saving a root') }}</span></p>
      </template>
      <template v-else-if="hasNoEnabledRoots">
        <h3>{{ t('library', 'No enabled Library roots') }}</h3>
        <p class="library-muted">{{ t('library', 'Enable a saved root in settings, then scan enabled roots to refresh the catalogue.') }}</p>
        <p class="library-empty-actions"><a :href="settingsUrl" class="button primary">{{ t('library', 'Open Library settings') }}</a></p>
      </template>
      <template v-else-if="hasActiveFilters">
        <h3>{{ t('library', 'No matches for the current filters') }}</h3>
        <p class="library-muted">{{ t('library', 'Try a broader search, remove one active chip, or clear every catalogue filter.') }}</p>
        <p class="library-empty-actions"><a :href="clearSearchUrl()" class="button secondary">{{ t('library', 'Clear search') }}</a><a href="?" class="button primary">{{ t('library', 'Clear all filters') }}</a></p>
      </template>
      <template v-else>
        <h3>{{ t('library', 'No catalogue items yet') }}</h3>
        <p class="library-muted">{{ t('library', 'Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.') }}</p>
        <p class="library-empty-actions"><a :href="settingsUrl" class="button primary">{{ t('library', 'Run a scan from settings') }}</a></p>
      </template>
    </div>

    <div v-else class="library-cover-gallery">
      <article v-for="item in items" :key="item.id" class="library-cover-card" :class="{ 'library-cover-card--open': openCoverDetails[item.id] }">
        <a class="library-cover-link" :href="item.openUrl" :aria-label="`Read ${item.title}`">
          <img class="library-cover-image" :src="item.coverUrl" :alt="`Cover for ${item.title}`" loading="lazy">
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
              <p class="library-cover-actions"><a :href="item.filesUrl">{{ t('library', 'Show in Files') }}</a> · <a :href="item.downloadUrl">{{ t('library', 'Download source') }}</a> · <a :href="item.detailsUrl">{{ t('library', 'Details') }}</a></p>
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
  max-width: min(92vw, 760px);
  padding: 0.75rem;
}

.library-actions-health-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
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

.library-batch-tag-form {
  align-items: end;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.library-batch-tag-form label {
  display: grid;
  gap: 4px;
  margin: 0;
}

.library-batch-tag-form .library-muted {
  flex-basis: 100%;
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

.library-cover-image {
  min-height: 0;
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
