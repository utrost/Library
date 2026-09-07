<script setup>
import { computed, reactive } from 'vue'
import { t } from '@nextcloud/l10n'

const props = defineProps({
  state: {
    type: Object,
    default: () => ({}),
  },
})

const publicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other']
const pageSizes = [25, 50, 100, 250, 500]

const items = computed(() => props.state.items || [])
const shelves = computed(() => props.state.shelves || [])
const formats = computed(() => props.state.formats || [])
const publications = computed(() => props.state.publications || [])
const publicationSummaries = computed(() => props.state.publicationSummaries || [])
const publicationYears = computed(() => props.state.publicationYears || [])
const creators = computed(() => props.state.creators || [])
const scanStatuses = computed(() => props.state.scanStatuses || [])
const workflowStatuses = computed(() => props.state.workflowStatuses || [])
const genres = computed(() => props.state.genres || [])
const classifications = computed(() => props.state.classifications || [])
const pagination = computed(() => props.state.cataloguePagination || {
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
  q: props.state.activeFilters?.q || '',
  type: props.state.activeFilters?.type || '',
  publication: props.state.activeFilters?.publication || '',
  year: props.state.activeFilters?.year || '',
  creator: props.state.activeFilters?.creator || '',
  format: props.state.activeFilters?.format || '',
  tag: props.state.activeFilters?.tag || '',
  shelf: props.state.activeFilters?.shelf || '',
  status: props.state.activeFilters?.status || '',
  workflowStatus: props.state.activeFilters?.workflowStatus || '',
  genre: props.state.activeFilters?.genre || '',
  classification: props.state.activeFilters?.classification || '',
  scannerConflicts: props.state.activeFilters?.scannerConflicts || '',
  starred: props.state.activeFilters?.starred || '',
  sort: props.state.activeFilters?.sort || 'title',
})
const settingsUrl = computed(() => props.state.settingsUrl || '')
const metadataExportUrl = computed(() => props.state.metadataExportUrl || '')
const scannerConflictReviewUrl = computed(() => props.state.scannerConflictReviewUrl || '?scannerConflicts=1')
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

function filterChipRemoveUrl(key) {
  const params = new URLSearchParams(window.location.search)
  params.delete(key)
  params.delete('page')
  const query = params.toString()
  return query ? `?${query}` : '?'
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

</script>

<template>
  <div class="library-vue-catalogue">
  <section class="library-panel" aria-labelledby="library-catalogue-heading">
    <h2 id="library-catalogue-heading">{{ t('library', 'Publication catalogue') }}</h2>
    <p class="library-muted">{{ t('library', 'Browse as a shelf/gallery first; open the details panel when metadata matters.') }}</p>

    <form method="get" class="library-filter-bar" :aria-label="t('library', 'Catalogue search and filters')">
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

    <nav v-if="activeFilterChips.length > 0" class="library-active-filter-chips" :aria-label="t('library', 'Active filters')">
      <span>{{ t('library', 'Active filters') }}</span>
      <a v-for="chip in activeFilterChips" :key="chip.key" :href="filterChipRemoveUrl(chip.key)" class="library-filter-chip" :aria-label="`${t('library', 'Remove filter')}: ${chip.label}`">
        <strong>{{ chip.label }}:</strong> {{ chip.value }} <span aria-hidden="true">×</span>
      </a>
    </nav>

    <nav class="library-pagination" :aria-label="t('library', 'Catalogue pagination')">
      <span>Showing {{ pagination.from }}–{{ pagination.to }} of {{ pagination.total }} catalogue items</span>
      <a v-if="pagination.previousUrl" :href="pagination.previousUrl">{{ t('library', 'Previous') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Previous') }}</span>
      <a v-if="pagination.nextUrl" :href="pagination.nextUrl">{{ t('library', 'Next') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Next') }}</span>
    </nav>

    <section v-if="publicationSummaries.length > 0" class="library-periodical-groups" aria-labelledby="library-periodical-groups-heading">
      <h3 id="library-periodical-groups-heading">{{ t('library', 'Top series and periodicals') }}</h3>
      <p class="library-muted">{{ t('library', 'Jump into recurring publications with one click.') }}</p>
      <ul>
        <li v-for="summary in publicationSummaries" :key="summary.publication">
          <a :href="publicationFilterUrl(summary.publication)">{{ summary.publication }}</a>
          <span class="library-muted">{{ summary.itemCount }} items</span>
        </li>
      </ul>
    </section>
    <section v-else-if="publicationSummaries.length === 0" class="library-periodical-groups library-periodical-groups-empty" aria-labelledby="library-periodical-groups-empty-heading">
      <h3 id="library-periodical-groups-empty-heading">{{ t('library', 'No series or periodicals found yet') }}</h3>
      <p class="library-muted">{{ t('library', 'Add publication or series names in item details to build this shortcut panel.') }}</p>
    </section>

    <div v-if="items.length === 0" class="library-empty-content" role="status">
      <h3>{{ t('library', 'No catalogue items match') }}</h3>
      <p class="library-muted">{{ t('library', 'Scan enabled roots or clear the active filters.') }}</p>
    </div>

    <div v-else class="library-cover-gallery">
      <article v-for="item in items" :key="item.id" class="library-cover-card">
        <a class="library-cover-link" :href="item.openUrl" :aria-label="`Read ${item.title}`">
          <img class="library-cover-image" :src="item.coverUrl" :alt="`Cover for ${item.title}`" loading="lazy">
        </a>
        <div class="library-cover-summary">
          <div class="library-cover-primary">
            <h3><span v-if="item.starred" class="library-star-marker" :aria-label="t('library', 'Starred')">★</span>{{ item.title }}</h3>
            <a class="library-cover-read" :href="item.openUrl">{{ t('library', 'Read') }}</a>
          </div>
          <details class="library-cover-details">
            <summary class="library-cover-details-summary" :aria-label="`${t('library', 'Show details and actions')}: ${item.title}`">{{ t('library', 'Details') }}</summary>
            <div class="library-cover-meta">
              <p v-if="item.creators" class="library-creator">{{ item.creators }}</p>
              <p class="library-muted">
                <span>{{ item.publicationType }}</span>
                <span v-if="item.publication"> · {{ item.publication }}</span>
                <span v-if="item.publicationDate"> · {{ item.publicationDate }}</span>
                <span v-if="item.workflowStatus"> · Workflow status: {{ item.workflowStatus }}</span>
                <span v-if="item.genres?.length"> · Genres: {{ item.genres.join('; ') }}</span>
                <span v-if="item.classifications?.length"> · Classifications: {{ item.classifications.join('; ') }}</span>
                <span v-if="item.hasScannerConflict"> · Needs scanner review: {{ item.scannerConflictCount }} fields</span>
                <span v-if="item.lastOpenedAt"> · Last opened: {{ item.lastOpenedAt }}</span>
                <span v-if="item.extension"> · Format: {{ upper(item.extension) }}</span>
                <span v-if="item.shelf"> · Shelf: {{ item.shelf }}</span>
              </p>
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

  <section class="library-hero library-secondary-panel" aria-label="Library settings">
    <div>
      <h2>Library</h2>
      <p class="library-lede">Browse publications already stored in Nextcloud.</p>
    </div>
    <div class="library-hero-actions">
      <a :href="settingsUrl" class="button secondary" aria-label="Open Library settings">Library settings</a>
      <a v-if="metadataExportUrl" :href="metadataExportUrl" class="button secondary" aria-label="Export corrected metadata">Export corrected metadata</a>
    </div>
  </section>
  </div>
</template>

<style>
.library-cover-gallery {
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.library-cover-card {
  gap: 8px;
  padding: 8px;
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
  .library-cover-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
