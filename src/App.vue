<script setup>
import { computed, reactive } from 'vue'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'

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

function upper(value) {
  return String(value || '').toUpperCase()
}

function tagsFor(item) {
  return item.nextcloudTags || []
}

function commentsFor(item) {
  return item.nextcloudComments || { count: 0, recent: [] }
}

function removeTagUrl(item, tag) {
  return String(item.tagRemoveBaseUrl || '').replace('__TAG_ID__', String(tag.id))
}
</script>

<template>
  <section class="library-hero">
    <div>
      <h1>Library</h1>
      <p class="library-lede">
        Browse publications already stored in Nextcloud.
      </p>
    </div>
    <div class="library-hero-actions">
      <NcButton :href="settingsUrl" variant="secondary" aria-label="Open Library settings">
        Library settings
      </NcButton>
    </div>
  </section>

  <section class="library-panel" aria-label="Publication catalogue">
    <h2>Publication catalogue</h2>
    <p class="library-muted">Browse as a shelf/gallery first; open the details panel when metadata matters.</p>

    <form method="get" class="library-filter-bar" aria-label="Catalogue search and filters">
      <label>
        Search title / author
        <input v-model="activeFilters.q" type="search" name="q" placeholder="Camera, Eco, Rolleiflex...">
      </label>
      <label>
        Type
        <select v-model="activeFilters.type" name="type">
          <option value="">All types</option>
          <option v-for="type in publicationTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
      <label>
        Nextcloud tag
        <input v-model="activeFilters.tag" type="text" name="tag" placeholder="photography">
      </label>
      <label>
        Format
        <select v-model="activeFilters.format" name="format">
          <option value="">All formats</option>
          <option v-for="format in formats" :key="format" :value="format">{{ upper(format) }}</option>
        </select>
      </label>
      <label>
        Shelf
        <select v-model="activeFilters.shelf" name="shelf">
          <option value="">All shelves</option>
          <option v-for="shelf in shelves" :key="shelf" :value="shelf">{{ shelf }}</option>
        </select>
      </label>
      <label>
        Scan status
        <select v-model="activeFilters.status" name="status">
          <option value="">All scan statuses</option>
          <option v-for="status in scanStatuses" :key="status" :value="status">{{ status }}</option>
        </select>
      </label>
      <label>
        Sort
        <select v-model="activeFilters.sort" name="sort">
          <option value="title">Title</option>
          <option value="recent">Recently added</option>
          <option value="publicationDate">Publication date</option>
          <option value="format">Format</option>
        </select>
      </label>
      <label>
        Page size
        <select :value="pagination.limit" name="limit">
          <option v-for="limit in pageSizes" :key="limit" :value="limit">{{ limit }}</option>
        </select>
      </label>
      <NcButton type="submit" variant="primary" aria-label="Apply catalogue filters">
        Apply filters
      </NcButton>
      <NcButton href="?" variant="tertiary" aria-label="Clear catalogue filters">
        Clear
      </NcButton>
    </form>

    <nav class="library-pagination" aria-label="Catalogue pagination">
      <span>Showing {{ pagination.from }}–{{ pagination.to }} of {{ pagination.total }} catalogue items</span>
      <a v-if="pagination.previousUrl" :href="pagination.previousUrl">Previous</a>
      <span v-else class="library-muted">Previous</span>
      <a v-if="pagination.nextUrl" :href="pagination.nextUrl">Next</a>
      <span v-else class="library-muted">Next</span>
    </nav>

    <NcEmptyContent
      v-if="items.length === 0"
      name="No catalogue items match"
      description="Scan enabled roots or clear the active filters." />

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
          <p><a :href="item.openUrl">Read</a> · <a :href="item.filesUrl">Show in Files</a></p>
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

          <div class="library-nextcloud-tags" aria-label="nextcloudTagEditor">
            <strong>Nextcloud tags</strong>
            <ul v-if="tagsFor(item).length > 0" class="library-tag-remove-list" aria-label="Remove Nextcloud tag">
              <li v-for="tag in tagsFor(item)" :key="tag.id">
                <span class="library-tag">{{ tag.name }}</span>
                <form method="post" :action="removeTagUrl(item, tag)" class="library-inline-form">
                  <button type="submit">Remove tag</button>
                </form>
              </li>
            </ul>
            <form method="post" :action="item.tagUrl" class="library-tag-form">
              <label>
                Add Nextcloud tag
                <input type="text" name="tagName" placeholder="photography, project-library...">
              </label>
              <button type="submit">Add tag</button>
            </form>
          </div>

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
              <label>
                Add Nextcloud comment
                <textarea name="commentMessage" rows="2" placeholder="file-level note..."></textarea>
              </label>
              <button type="submit">Add comment</button>
            </form>
          </div>

          <form method="post" :action="item.updateUrl" class="library-item-form">
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
</template>
