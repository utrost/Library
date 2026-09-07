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
const batchMetadataResetUrl = computed(() => catalogueState.batchMetadataResetUrl || '/apps/library/bulk/items/reset-filtered-fields')
const scannerConflictReviewUrl = computed(() => catalogueState.scannerConflictReviewUrl || '?scannerConflicts=1')
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
  for (const key of ['shelves', 'formats', 'publications', 'publicationSummaries', 'publicationYears', 'creators', 'scanStatuses', 'workflowStatuses', 'genres', 'classifications', 'cataloguePagination', 'settingsUrl', 'metadataExportUrl', 'metadataSidecarManifestUrl', 'metadataSidecarBundleUrl', 'catalogueEndpointUrl', 'batchTagUrl', 'batchMetadataResetUrl', 'scannerConflictReviewUrl']) {
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
  <section class="library-panel" aria-labelledby="library-catalogue-heading">
    <div class="library-catalogue-header">
      <div>
        <h2 id="library-catalogue-heading">{{ t('library', 'Publication catalogue') }}</h2>
        <p class="library-muted">{{ t('library', 'Browse as a shelf/gallery first; open the details panel when metadata matters.') }}</p>
      </div>
      <nav class="library-catalogue-toolbar" :aria-label="t('library', 'Library actions')">
        <a :href="settingsUrl" class="button secondary" aria-label="Open Library settings">{{ t('library', 'Settings') }}</a>
        <a v-if="metadataExportUrl" :href="metadataExportUrl" class="button secondary" aria-label="Export corrected metadata">{{ t('library', 'Export corrected metadata') }}</a>
        <a v-if="metadataSidecarManifestUrl" :href="metadataSidecarManifestUrl" class="button secondary" aria-label="Export sidecar manifest">{{ t('library', 'Sidecar manifest') }}</a>
        <a v-if="metadataSidecarBundleUrl" :href="metadataSidecarBundleUrl" class="button secondary" aria-label="Export sidecar ZIP">{{ t('library', 'Sidecar ZIP') }}</a>
      </nav>
    </div>

    <form method="get" class="library-quick-filter-bar" :aria-label="t('library', 'Quick catalogue filters')" @submit.prevent="submitFiltersAjax">
      <input v-for="hidden in quickHiddenFilters" :key="hidden.key" type="hidden" :name="hidden.key" :value="hidden.value">
      <label class="library-quick-filter-search">
        {{ t('library', 'Search') }} <kbd class="library-keyboard-hint">/</kbd>
        <input ref="quickSearchInput" v-model="activeFilters.q" data-library-quick-search type="search" name="q" placeholder="Camera, Eco, Rolleiflex..." @input="scheduleFilterSubmit">
      </label>
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
      <button type="submit" class="button primary" :aria-label="t('library', 'Apply catalogue filters')">{{ t('library', 'Apply filters') }}</button>
      <a href="?" class="button secondary" :aria-label="t('library', 'Clear catalogue filters')">{{ t('library', 'Clear all') }}</a>
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

    <p class="library-muted library-filter-result-summary">{{ t('library', 'Showing') }} {{ pagination.from }}–{{ pagination.to }} {{ t('library', 'of') }} {{ pagination.total }} {{ t('library', 'catalogue items') }}<span v-if="activeFilterChips.length > 0"> · <a href="?">{{ t('library', 'Clear all filters') }}</a></span></p>

    <details class="library-batch-actions">
      <summary>{{ t('library', 'Batch actions for current results') }} <span class="library-settings-count-badge">{{ pagination.total }} {{ t('library', 'Current filter result') }}</span></summary>
      <form method="post" :action="batchTagUrl" class="library-batch-tag-form">
        <input type="hidden" name="requesttoken" :value="requestToken">
        <input v-for="filter in batchHiddenFilters" :key="filter.key" type="hidden" :name="filter.key" :value="filter.value">
        <label>
          {{ t('library', 'Apply Nextcloud tag to current results') }}
          <input type="text" name="nextcloudTagName" placeholder="batch-review">
        </label>
        <button type="submit" class="button secondary">{{ t('library', 'Apply tag to filtered results') }}</button>
        <p class="library-muted">{{ t('library', 'Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata.') }}</p>
      </form>
      <form method="post" :action="batchMetadataResetUrl" class="library-batch-metadata-reset-form">
        <input type="hidden" name="requesttoken" :value="requestToken">
        <input v-for="filter in batchHiddenFilters" :key="`reset-${filter.key}`" type="hidden" :name="filter.key" :value="filter.value">
        <input type="hidden" name="scannerConflicts" value="1">
        <button type="submit" class="button secondary">{{ t('library', 'Reset filtered metadata') }}</button>
        <p class="library-muted">{{ t('library', 'Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.') }}</p>
      </form>
    </details>

    <nav v-if="activeFilterChips.length > 0" class="library-active-filter-chips" :aria-label="t('library', 'Active filters')">
      <span>{{ t('library', 'Active filters') }}</span>
      <a v-for="chip in activeFilterChips" :key="chip.key" :href="filterChipRemoveUrl(chip.key)" class="library-filter-chip" :aria-label="`${t('library', 'Remove filter')}: ${chip.label}`">
        <strong>{{ chip.label }}:</strong> {{ chip.value }} <span aria-hidden="true">×</span>
      </a>
    </nav>

    <nav class="library-pagination" :aria-label="t('library', 'Catalogue pagination')">
      <span class="library-pagination-range">{{ t('library', 'Page') }} {{ pagination.page }}<span v-if="pagination.total > 0"> · {{ pagination.from }}–{{ pagination.to }}</span></span>
      <a v-if="pagination.previousUrl" :href="pagination.previousUrl">{{ t('library', 'Previous') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Previous') }}</span>
      <a v-if="pagination.nextUrl" :href="pagination.nextUrl">{{ t('library', 'Next') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Next') }}</span>
    </nav>

    <details v-if="publicationSummaries.length > 0" class="library-periodical-groups">
      <summary class="library-periodical-groups-summary">{{ t('library', 'Show top series and periodicals') }}</summary>
      <h3 id="library-periodical-groups-heading">{{ t('library', 'Top series and periodicals') }}</h3>
      <p class="library-muted">{{ t('library', 'Jump into recurring publications with one click.') }}</p>
      <ul>
        <li v-for="summary in publicationSummaries" :key="summary.publication">
          <a :href="publicationFilterUrl(summary.publication)">{{ summary.publication }}</a>
          <span class="library-muted">{{ summary.itemCount }} items</span>
        </li>
      </ul>
    </details>
    <details v-else-if="publicationSummaries.length === 0" class="library-periodical-groups library-periodical-groups-empty">
      <summary class="library-periodical-groups-summary">{{ t('library', 'Show top series and periodicals') }}</summary>
      <h3 id="library-periodical-groups-empty-heading">{{ t('library', 'No series or periodicals found yet') }}</h3>
      <p class="library-muted">{{ t('library', 'Add publication or series names in item details to build this shortcut panel.') }}</p>
    </details>

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
  </section>

  </div>
</template>

<style>
.library-cover-gallery {
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.library-filter-panel,
.library-periodical-groups {
  margin: 0 0 1rem;
}

.library-quick-filter-bar {
  align-items: end;
  display: grid;
  gap: 8px;
  grid-template-columns: minmax(180px, 1fr) repeat(3, minmax(110px, auto)) auto auto;
  margin: 0.75rem 0;
}

.library-quick-filter-bar label {
  display: grid;
  gap: 4px;
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

.library-batch-actions {
  border: 1px solid var(--color-border, #d0d0d0);
  border-radius: var(--border-radius, 6px);
  margin: 0 0 0.75rem;
  padding: 0.5rem 0.75rem;
}

.library-batch-actions > summary {
  cursor: pointer;
  font-weight: 600;
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

.library-filter-panel-summary,
.library-periodical-groups-summary {
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}

.library-filter-panel .library-filter-bar {
  margin-top: 12px;
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
  .library-quick-filter-bar {
    grid-template-columns: 1fr 1fr;
  }

  .library-quick-filter-search {
    grid-column: 1 / -1;
  }

  .library-cover-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
