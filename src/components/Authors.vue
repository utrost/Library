<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { generateUrl } from '@nextcloud/router'
import { t, n } from '@nextcloud/l10n'
import AuthorConflicts from './AuthorConflicts.vue'
import CatalogueCover from './CatalogueCover.vue'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true } })
const data = ref(null), busy = ref(false), error = ref(''), notice = ref(''), editing = ref(false)
const selected = ref([]), targetSearch = ref(''), targets = ref([]), target = ref(''), review = ref(null), assigning = ref(false), history = ref([])
const search = ref(''), unused = ref(false), page = ref(1)
const showConflicts = new URLSearchParams(location.search).get('authorConflicts') === '1'
const id = ref(Number(new URLSearchParams(location.search).get('authorId')) || null)
const bookSearch = ref(''), bookSort = ref('title'), bookView = ref('grid'), bioExpanded = ref(false), photoFailed = ref(false)
const photoFile = ref(null), removePhoto = ref(false)
const draft = reactive({ display_name: '', sort_name: '', given_name: '', family_name: '', biography: '' })
const initials = computed(() => (data.value?.author?.display_name || '').trim().split(/\s+/u).slice(0, 2).map(part => Array.from(part)[0] || '').join('').toLocaleUpperCase())
const photoUrl = computed(() => generateUrl('/apps/library/api/authors/{id}/photo', { id: id.value }) + '?v=' + encodeURIComponent(data.value?.author?.photo_key || ''))
const bookGroups = computed(() => {
  if (bookSort.value !== 'series') return [{ name: null, books: data.value?.books || [] }]
  const groups = new Map()
  for (const book of data.value?.books || []) {
    const name = book.series_name || ''
    if (!groups.has(name)) groups.set(name, [])
    groups.get(name).push(book)
  }
  return Array.from(groups, ([name, books]) => ({ name, books }))
})
function coverUrl(book) { return generateUrl('/apps/library/items/{id}/cover', { id: book.id }) + '?v=' + encodeURIComponent(`${book.cover_revision || ''}-${book.etag || ''}`) }
function choosePhoto(event) { photoFile.value = event.target.files?.[0] || null; if (photoFile.value) removePhoto.value = false }

async function request(path, body = null) {
  const response = await fetch(generateUrl('/apps/library/api/authors') + path, {
    credentials: 'same-origin', cache: 'no-store', method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }), requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: body instanceof FormData ? body : JSON.stringify(body) }),
  })
  if (!response.ok && (await response.clone().json().catch(() => ({}))).error === 'invalid_photo') throw new Error(t('library', 'Choose a valid JPEG, PNG or WebP image up to 10 MiB.'))
  if (!response.ok) throw new Error(response.status === 413 ? t('library', 'This change is too large. Select fewer books to reassign.') : response.status === 503 ? t('library', 'Author migration must finish before editing. Refresh to check progress.') : response.status === 409
    ? t('library', 'The author or affected books changed. Reload and review again. Your draft is preserved.')
    : t('library', 'Could not load or save the author. Check the fields and reload before retrying.'))
  return response.json()
}
async function load(next = 1) {
  busy.value = true; error.value = ''
  try {
    data.value = await request(id.value ? `/${id.value}?page=${next}&search=${encodeURIComponent(bookSearch.value.trim())}&sort=${bookSort.value}` : `?page=${next}&search=${encodeURIComponent(search.value.trim())}&unused=${unused.value ? 1 : 0}`)
    page.value = next; review.value = null; selected.value = []; photoFailed.value = false
    history.value = await request('/history')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function edit() { for (const key of Object.keys(draft)) draft[key] = data.value.author[key] || ''; editing.value = true; notice.value = ''; photoFile.value = null; removePhoto.value = false }
async function save() {
  busy.value = true; error.value = ''
  try {
    const body = new FormData()
    for (const [key, value] of Object.entries(draft)) body.set(key, value)
    body.set('revision', String(data.value.author.revision))
    body.set('remove_photo', removePhoto.value ? '1' : '0')
    if (photoFile.value) body.set('photo', photoFile.value)
    await request(`/${id.value}`, body); editing.value = false; photoFailed.value = false; await load(1); notice.value = t('library', 'Author saved. Original book credits are preserved.') }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
function cancelAssignment() { assigning.value = false; review.value = null; selected.value = [] }
async function findTargets() {
  busy.value = true; error.value = ''; review.value = null
  try { targets.value = (await request(`?search=${encodeURIComponent(targetSearch.value.trim())}`)).authors.filter(a => Number(a.id) !== id.value); target.value = '' }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function createTarget() {
  busy.value = true; error.value = ''; review.value = null
  try { const author = await request('', { name: targetSearch.value.trim() }); targets.value = [author]; target.value = String(author.id) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function previewAssignment() {
  busy.value = true; error.value = ''; review.value = null
  try { review.value = await request(`/${id.value}/preview`, { target: Number(target.value), items: selected.value }) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function applyAssignment() {
  busy.value = true; error.value = ''
  try {
    await request(`/${id.value}/assign`, { target: Number(target.value), items: selected.value, token: review.value.token })
    notice.value = t('library', 'Author assignments saved. Original credits are preserved. Undo is available in Recent changes.')
    assigning.value = false; review.value = null
    await load(page.value)
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
async function undo(operation) {
  busy.value = true; error.value = ''
  try { await request(`/history/${operation.id}/undo`, {}); notice.value = t('library', 'Author change undone.'); await load(page.value) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(() => { if (!showConflicts) load() })
</script>
<template>
  <AuthorConflicts v-if="showConflicts" :request-token="requestToken" :catalogue-url="catalogueUrl" />
  <section v-else class="library-authors" :aria-busy="busy" aria-labelledby="authors-heading">
    <a v-if="id" :href="`${catalogueUrl}?authors=1`">{{ t('library', 'All authors') }}</a>
    <header class="author-profile-header">
      <div v-if="id && data?.author" class="author-portrait">
        <img v-if="data.author.photo_key && !photoFailed" :key="data.author.photo_key" :src="photoUrl" :alt="t('library', 'Portrait of {author}', { author: data.author.display_name })" @error="photoFailed = true" />
        <span v-else aria-hidden="true">{{ initials }}</span>
      </div>
      <h1 id="authors-heading">{{ data?.author?.display_name || t('library', 'Authors') }}</h1>
    </header>
    <p v-if="error" role="alert">{{ error }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Reload') }}</button></p>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="busy" role="status">{{ t('library', 'Loading') }}</p>
    <template v-if="!id">
      <form class="author-search" @submit.prevent="load(1)">
        <label for="author-search">{{ t('library', 'Search authors') }} <LabelHelp :text="t('library', 'Matches the beginning of the preferred name or sort name.')" /></label>
        <input id="author-search" v-model="search" maxlength="255" type="search" />
        <label><input v-model="unused" type="checkbox" /> {{ t('library', 'Unused authors') }}</label>
        <button :disabled="busy" type="submit">{{ t('library', 'Search') }}</button>
      </form>
      <p v-if="data?.migration && (data.migration.pending || data.migration.failed || data.migration.conflict)" role="status">
        {{ t('library', 'Author migration: {pending} pending, {failed} failed, {conflict} need review.', data.migration) }}
        <a v-if="data.migration.conflict" :href="`${catalogueUrl}?authors=1&amp;authorConflicts=1`">{{ t('library', 'Review imported author changes') }}</a>
        <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button>
      </p>
      <ul v-if="data" class="author-directory">
        <li v-for="author in data.authors" :key="author.id">
          <a :href="`${catalogueUrl}?authors=1&authorId=${author.id}`" dir="auto">{{ author.display_name }}</a>
          <span dir="auto">{{ author.sort_name }}</span>
          <span>{{ n('library', '%n book', '%n books', Number(author.book_count)) }}</span>
        </li>
      </ul>
      <p v-if="data && !data.authors.length">{{ t('library', 'No authors found.') }}</p>
    </template>
    <template v-else-if="data?.author">
      <p>{{ n('library', '%n book', '%n books', data.bookCount) }}</p>
      <section v-if="data.author.biography && !editing" class="author-biography">
        <h2>{{ t('library', 'Biography') }}</h2>
        <p dir="auto">{{ bioExpanded || data.author.biography.length <= 320 ? data.author.biography : data.author.biography.slice(0, 280) + '…' }}</p>
        <button v-if="data.author.biography.length > 320" :aria-expanded="bioExpanded" @click="bioExpanded = !bioExpanded">{{ bioExpanded ? t('library', 'Show less') : t('library', 'Show more') }}</button>
      </section>
      <p v-if="data.author.merged_into"><a :href="`${catalogueUrl}?authors=1&authorId=${data.author.merged_into}`">{{ t('library', 'Open merged author') }}</a></p>
      <p v-if="!data.canEdit && !data.author.merged_into" role="status">{{ t('library', 'Author migration must finish before editing. Refresh to check progress.') }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button></p>
      <button v-if="!editing && !assigning" :disabled="busy || !data.canEdit" @click="edit">{{ t('library', 'Edit author') }}</button>
      <form v-if="editing" class="author-editor" @submit.prevent="save">
        <p>{{ t('library', 'This edits the shared author record. Book credits and files stay unchanged.') }}</p>
        <label for="author-display">{{ t('library', 'Preferred name') }}</label>
        <input id="author-display" v-model="draft.display_name" maxlength="255" required :disabled="busy" />
        <label for="author-sort">{{ t('library', 'Sort name') }} <LabelHelp :text="t('library', 'For example: Doe, John. Controls author directory ordering.')" /></label>
        <input id="author-sort" v-model="draft.sort_name" maxlength="255" required :disabled="busy" />
        <label for="author-given">{{ t('library', 'Given name') }} <LabelHelp :text="t('library', 'Optional. Leave empty for organisations or names you cannot safely split.')" /></label>
        <input id="author-given" v-model="draft.given_name" maxlength="255" :disabled="busy" />
        <label for="author-family">{{ t('library', 'Family name') }}</label>
        <input id="author-family" v-model="draft.family_name" maxlength="255" :disabled="busy" />
        <label for="author-bio">{{ t('library', 'Biography') }} <LabelHelp :text="t('library', 'Optional plain text, up to 10,000 characters. This profile is private to your account.')" /></label>
        <textarea id="author-bio" v-model="draft.biography" maxlength="10000" rows="5" :disabled="busy"></textarea>
        <label for="author-photo">{{ t('library', 'Author photo') }} <LabelHelp :text="t('library', 'JPEG, PNG or WebP, up to 10 MiB. Saved as a small square portrait; the original upload is discarded.')" /></label>
        <input id="author-photo" type="file" accept="image/jpeg,image/png,image/webp" :disabled="busy" @change="choosePhoto" />
        <label v-if="data.author.photo_key"><input v-model="removePhoto" type="checkbox" :disabled="busy || !!photoFile" /> {{ t('library', 'Remove photo') }}</label>
        <div><button class="primary" :disabled="busy" type="submit">{{ t('library', 'Save author') }}</button> <button :disabled="busy" type="button" @click="editing = false">{{ t('library', 'Cancel') }}</button></div>
      </form>
      <details v-if="!editing && !assigning" class="author-actions">
        <summary>{{ t('library', 'More actions') }}</summary>
        <button :disabled="busy || !data.canEdit" @click="assigning = true">{{ t('library', 'Merge or reassign') }}</button>
      </details>
      <section v-if="assigning" class="author-assignment" :aria-label="t('library', 'Merge or reassign')">
        <label>{{ t('library', 'Books to change') }} <LabelHelp :text="t('library', 'Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.')" /></label>
        <p role="status">{{ selected.length ? n('library', '%n selected book', '%n selected books', selected.length) : t('library', 'Merge all books into the chosen author') }}</p>
        <form class="author-search" @submit.prevent="findTargets">
          <label for="target-search">{{ t('library', 'Find destination author') }}</label>
          <input id="target-search" v-model="targetSearch" type="search" maxlength="255" :disabled="busy" />
          <button :disabled="busy">{{ t('library', 'Search') }}</button>
        </form>
        <div><button :disabled="busy || !targetSearch.trim()" @click="createTarget">{{ t('library', 'Create separate author') }}</button> <LabelHelp :text="t('library', 'Creates a new person using the entered name, even if someone with that name already exists.')" /></div>
        <label for="target-author">{{ t('library', 'Destination author') }}</label>
        <select id="target-author" v-model="target" :disabled="busy" @change="review = null">
          <option value="">{{ t('library', 'Choose an author') }}</option>
          <option v-for="a in targets" :key="a.id" :value="a.id">{{ a.display_name }} — {{ a.sort_name }} (#{{ a.id }})</option>
        </select>
        <div><button :disabled="busy || !target" @click="previewAssignment">{{ t('library', 'Review change') }}</button> <button :disabled="busy" @click="cancelAssignment">{{ t('library', 'Cancel') }}</button></div>
        <section v-if="review" class="author-review" :aria-label="t('library', 'Review change')">
          <h2>{{ review.source }} → {{ review.target }}</h2>
          <p>{{ review.merge ? t('library', 'Merge these authors. Future imports of the old name will use the destination author.') : t('library', 'Reassign these books. Both author records remain available.') }}</p>
          <p>{{ n('library', '%n book', '%n books', review.books.length) }}</p>
          <ul><li v-for="book in review.books" :key="book.id">{{ book.title }} — {{ t('library', 'Original credit: {credit}', { credit: book.credit || '—' }) }}</li></ul>
          <button class="primary" :disabled="busy" @click="applyAssignment">{{ t('library', 'Confirm author change') }}</button>
        </section>
      </section>
      <section class="author-catalogue" :aria-label="t('library', 'Books in your library')">
        <h2>{{ t('library', 'Books in your library') }}</h2>
        <form class="author-book-controls" @submit.prevent="load(1)">
          <label for="author-book-search">{{ t('library', 'Search titles') }}</label>
          <input id="author-book-search" v-model="bookSearch" type="search" maxlength="255" :disabled="busy || editing" />
          <button :disabled="busy || editing">{{ t('library', 'Search') }}</button>
          <label for="author-book-sort">{{ t('library', 'Sort') }}</label>
          <select id="author-book-sort" v-model="bookSort" :disabled="busy || editing" @change="load(1)">
            <option value="title">{{ t('library', 'Title') }}</option>
            <option value="newest">{{ t('library', 'Publication date, newest first') }}</option>
            <option value="series">{{ t('library', 'Series, then title') }}</option>
          </select>
          <div class="author-view-controls"><button type="button" :aria-pressed="bookView === 'grid'" @click="bookView = 'grid'">{{ t('library', 'Covers') }}</button> <button type="button" :aria-pressed="bookView === 'list'" @click="bookView = 'list'">{{ t('library', 'List') }}</button></div>
        </form>
        <p v-if="bookSearch">{{ n('library', '%n book', '%n books', data.matchingCount) }}</p>
        <p v-if="!data.books.length">{{ t('library', 'No books match this view.') }}</p>
        <section v-for="group in bookGroups" :key="group.name ?? 'all'" class="author-book-group">
          <h3 v-if="group.name !== null">{{ group.name || t('library', 'No series recorded') }}</h3>
          <ul class="author-books" :class="{ 'author-books-grid': bookView === 'grid' }">
            <li v-for="book in group.books" :key="book.id">
              <input v-if="assigning" v-model="selected" type="checkbox" :value="Number(book.id)" :aria-label="t('library', 'Select {title}', { title: book.title })" :disabled="busy" @change="review = null" />
              <a class="author-book-cover" :href="generateUrl('/apps/library/items/{id}', { id: book.id })" :aria-label="book.title"><CatalogueCover :src="coverUrl(book)" /></a>
              <div class="author-book-description">
                <a class="author-book-title" :href="generateUrl('/apps/library/items/{id}', { id: book.id })" dir="auto">{{ book.title }}</a>
                <span v-if="book.series_name" dir="auto">{{ book.series_name }}<template v-if="book.series_number"> · {{ book.series_number }}</template></span>
                <span v-if="book.publication_date">{{ book.publication_date }}</span>
                <span>{{ book.extension?.toUpperCase() }}</span>
                <span v-if="book.scan_status === 'missing'">{{ t('library', 'File missing') }}</span>
                <span v-if="assigning" dir="auto">{{ t('library', 'Original credit: {credit}', { credit: book.creators || '—' }) }}</span>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </template>
    <details v-if="history.length" class="author-history">
      <summary>{{ t('library', 'Recent changes') }}</summary>
      <ul><li v-for="operation in history" :key="operation.id" :data-operation-id="operation.id">
        <span>{{ operation.source }} → {{ operation.target }} · {{ n('library', '%n book', '%n books', Number(operation.books)) }}</span>
        <span v-if="Number(operation.undone)">{{ t('library', 'Undone') }}</span>
        <button v-else :disabled="busy" @click="undo(operation)">{{ t('library', 'Undo') }}</button>
      </li></ul>
    </details>
    <nav v-if="data" class="author-pagination" :aria-label="t('library', 'Author pages')">
      <button :disabled="busy || editing || page === 1" @click="load(page - 1)">{{ t('library', 'Previous') }}</button>
      <span>{{ t('library', 'Page {page}', { page }) }}</span>
      <button :disabled="busy || editing || !data.hasNext" @click="load(page + 1)">{{ t('library', 'Next') }}</button>
    </nav>
  </section>
</template>
<style scoped>
.library-authors { padding: 48px 24px 24px; max-width: 1100px; margin: auto; overflow-wrap: anywhere; }
.library-authors h1 { margin-block: 16px; font-size: 24px; font-weight: 600; line-height: 1.35; }
.author-search, .author-editor { display: flex; flex-direction: column; gap: 8px; margin-block: 20px; }
.author-search input, .author-editor input { width: 100%; max-width: 100%; box-sizing: border-box; }
.author-search button { align-self: flex-start; }
.author-directory, .author-books { list-style: none; padding: 0; }
.author-directory li { display: flex; flex-direction: column; gap: 4px; border-bottom: 1px solid var(--color-border); padding: 14px 0; }
.author-directory a, .author-books a { font-weight: bold; text-decoration: underline; }
.author-directory span, .author-books span { color: var(--color-text-maxcontrast); }
.author-assignment { border: 1px solid var(--color-border); border-radius: 8px; padding: 16px; margin-block: 16px; }
.author-assignment select { width: 100%; margin-block: 8px; }
.author-review ul { max-height: 240px; overflow: auto; }
.author-history li { display: flex; align-items: center; gap: 12px; margin-block: 8px; flex-wrap: wrap; }
.author-books input[type="checkbox"] { width: 20px; height: 20px; min-height: 20px; flex: 0 0 20px; margin: 0; }
.author-pagination { display: flex; align-items: center; gap: 12px; margin-block: 20px; }
 .author-profile-header { display: flex; align-items: center; gap: 20px; margin-block: 20px; }
.author-portrait { width: 112px; height: 112px; flex: 0 0 112px; border-radius: 50%; overflow: hidden; background: var(--color-primary-element-light); display: grid; place-items: center; font-size: 32px; }
.author-portrait img { width: 100%; height: 100%; object-fit: cover; }
.author-biography { margin-block: 20px; }
.author-biography p { white-space: pre-line; }
.author-biography h2, .author-catalogue h2 { font-size: 20px; font-weight: 600; margin-block: 16px; }
.author-actions { display: inline-block; margin-inline-start: 12px; vertical-align: top; }
.author-actions[open] { display: block; margin: 12px 0; }
.author-editor textarea { width: 100%; box-sizing: border-box; resize: vertical; }
.author-editor input[type="checkbox"] { width: 20px; min-height: 20px; height: 20px; }
.author-book-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-block: 16px; }
.author-book-controls input { flex: 1 1 160px; min-width: 0; }
.author-book-controls select { max-width: 100%; }
.author-book-group h3 { font-size: 18px; font-weight: 600; margin-block: 20px 8px; }
.author-books li { display: flex; gap: 12px; border-bottom: 1px solid var(--color-border); padding: 12px 0; min-width: 0; position: relative; }
.author-book-description { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.author-book-cover { flex: 0 0 64px; width: 64px; }
.author-books :deep(.library-cover-image) { width: 100%; height: 100%; object-fit: contain; }
.author-books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px; }
.author-books-grid li { flex-direction: column; border-bottom: 0; }
.author-books-grid .author-book-cover { width: 100%; flex: auto; }
.author-books-grid input[type="checkbox"] { position: absolute; top: 18px; inset-inline-start: 6px; z-index: 1; }
@media (max-width: 600px) {
  .author-portrait { width: 76px; height: 76px; flex-basis: 76px; font-size: 26px; }
  .author-profile-header { gap: 12px; }
  .author-books-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
}
@media (max-width: 600px) { .library-authors { padding: 48px 12px 12px; } }
</style>
