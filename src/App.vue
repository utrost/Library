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
const scanStatuses = computed(() => props.state.scanStatuses || [])
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
  format: props.state.activeFilters?.format || '',
  tag: props.state.activeFilters?.tag || '',
  shelf: props.state.activeFilters?.shelf || '',
  status: props.state.activeFilters?.status || '',
  sort: props.state.activeFilters?.sort || 'title',
})
const settingsUrl = computed(() => props.state.settingsUrl || '')
const requestToken = computed(() => props.state.requestToken || '')

function upper(value) {
  return String(value || '').toUpperCase()
}

function tagsFor(item) {
  return item.nextcloudTags || []
}

function commentsFor(item) {
  return item.nextcloudComments || { count: 0, recent: [] }
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
        {{ t('library', 'Sort') }}
        <select v-model="activeFilters.sort" name="sort">
          <option value="title">{{ t('library', 'Title') }}</option>
          <option value="recent">{{ t('library', 'Recently added') }}</option>
          <option value="publicationDate">{{ t('library', 'Publication date') }}</option>
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
    </form>

    <nav class="library-pagination" :aria-label="t('library', 'Catalogue pagination')">
      <span>Showing {{ pagination.from }}–{{ pagination.to }} of {{ pagination.total }} catalogue items</span>
      <a v-if="pagination.previousUrl" :href="pagination.previousUrl">{{ t('library', 'Previous') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Previous') }}</span>
      <a v-if="pagination.nextUrl" :href="pagination.nextUrl">{{ t('library', 'Next') }}</a>
      <span v-else class="library-muted">{{ t('library', 'Next') }}</span>
    </nav>

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
          <h3>{{ item.title }}</h3>
          <p v-if="item.creators" class="library-creator">{{ item.creators }}</p>
          <p class="library-muted">
            <span>{{ item.publicationType }}</span>
            <span v-if="item.extension"> · Format: {{ upper(item.extension) }}</span>
            <span v-if="item.shelf"> · Shelf: {{ item.shelf }}</span>
          </p>
          <p v-if="item.scanStatus !== 'indexed' || item.scanError" class="library-item-scan-status library-scan-error">
            scanStatus: {{ item.scanStatus || 'unknown' }}<span v-if="item.scanError"> · scanError: {{ item.scanError }}</span>
          </p>
          <div class="library-nextcloud-tags" aria-label="nextcloudTags">
            <span v-if="tagsFor(item).length === 0" class="library-muted">No Nextcloud tags</span>
            <span v-for="tag in tagsFor(item)" v-else :key="tag.id" class="library-tag">{{ tag.name }}</span>
          </div>
          <p><a :href="item.openUrl">{{ t('library', 'Read') }}</a> · <a :href="item.filesUrl">{{ t('library', 'Show in Files') }}</a> · <a :href="item.detailsUrl">{{ t('library', 'Details') }}</a></p>
        </div>

        <details>
          <summary>Details / edit metadata</summary>
          <dl class="library-item-metadata">
            <dt>publicationType</dt><dd>{{ item.publicationType }}</dd>
            <dt>metadataSource</dt><dd>{{ item.metadataSource }}</dd>
            <dt>userEdited</dt><dd>{{ item.userEdited ? 'yes' : 'no' }}</dd>
            <dt>path</dt><dd>{{ item.cachedPath }}</dd>
            <dt>publication</dt><dd>{{ item.publication || '—' }}</dd>
            <dt>date</dt><dd>{{ item.publicationDate || '—' }}</dd>
            <dt>language</dt><dd>{{ item.language || '—' }}</dd>
            <dt>publisher</dt><dd>{{ item.publisher || '—' }}</dd>
          </dl>

          <div class="library-nextcloud-comments" aria-label="nextcloudComments">
            <strong>Nextcloud comments</strong> <span class="library-muted">(file-level notes)</span>:
            <span v-if="commentsFor(item).count === 0" class="library-muted">No Nextcloud comments</span>
            <template v-else>
              <span>{{ commentsFor(item).count }} total</span>
              <ul class="library-comment-list">
                <li v-for="comment in commentsFor(item).recent" :key="`${comment.actorId}-${comment.createdAt}-${comment.message}`">
                  <span class="library-muted">{{ comment.actorId }} · {{ comment.createdAt }}</span>
                  <span>{{ comment.message }}</span>
                </li>
              </ul>
            </template>
            <form method="post" :action="item.commentUrl" class="library-comment-form">
              <input v-if="requestToken" type="hidden" name="requesttoken" :value="requestToken">
              <label>
                Add Nextcloud comment
                <textarea name="commentMessage" rows="2" placeholder="file-level note..."></textarea>
              </label>
              <button type="submit">Add comment</button>
            </form>
          </div>

          <form method="post" :action="item.updateUrl" class="library-item-form">
            <input v-if="requestToken" type="hidden" name="requesttoken" :value="requestToken">
            <label>
              Title
              <input type="text" name="title" :value="item.title">
            </label>
            <label>
              Type
              <select name="publicationType" :value="item.publicationType">
                <option v-for="type in publicationTypes" :key="type" :value="type">{{ type }}</option>
              </select>
            </label>
            <label>
              Creators
              <input type="text" name="creators" :value="item.creators">
            </label>
            <label>
              Publication
              <input type="text" name="publication" :value="item.publication">
            </label>
            <label>
              Date
              <input type="text" name="publicationDate" :value="item.publicationDate">
            </label>
            <input type="hidden" name="subtitle" :value="item.subtitle">
            <input type="hidden" name="language" :value="item.language">
            <input type="hidden" name="publisher" :value="item.publisher">
            <button type="submit">Save metadata</button>
          </form>
        </details>
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
    </div>
  </section>
  </div>
</template>
