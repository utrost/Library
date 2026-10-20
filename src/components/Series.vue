<script setup>
import BookCollectionToolbar from './BookCollectionToolbar.vue'
import BookCollectionItem from './BookCollectionItem.vue'
import OperationStatus from './OperationStatus.vue'
import ReviewValues from './ReviewValues.vue'
import { useUnsavedChanges } from '../use-unsaved-changes.js'
import FormActions from './FormActions.vue'
import { bookDetailsUrl } from '../details-return.js'
import { onMounted, reactive, ref, nextTick, watch } from 'vue'
import { generateUrl } from '@nextcloud/router'
import { t, n } from '@nextcloud/l10n'
import LabelHelp from './LabelHelp.vue'
import EntityPicker from './EntityPicker.vue'
import DirectoryBrowser from './DirectoryBrowser.vue'

const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true } })
const viewQuery = new URLSearchParams(location.search)
const appliedBookSearch = ref((viewQuery.get('bookSearch') || '').slice(0, 255))
const bookSearch = ref((viewQuery.get('bookDraft') ?? appliedBookSearch.value).slice(0, 255)), bookSort = ref(['part', 'title', 'newest'].includes(viewQuery.get('bookSort')) ? viewQuery.get('bookSort') : 'part'), bookView = ref(viewQuery.get('bookView') === 'grid' ? 'grid' : 'list')
const bookSorts = [{ value: 'part', label: t('library', 'Part in series') }, { value: 'title', label: t('library', 'Title') }, { value: 'newest', label: t('library', 'Publication date, newest first') }]
function rememberBooks() { const url = new URL(location.href); for (const [key, value, fallback] of [['bookSearch', appliedBookSearch.value, ''], ['bookSort', bookSort.value, 'part'], ['bookView', bookView.value, 'list'], ['bookPage', String(page.value), '1']]) { if (value === fallback) url.searchParams.delete(key); else url.searchParams.set(key, value) } if (bookSearch.value.trim() !== appliedBookSearch.value) url.searchParams.set('bookDraft', bookSearch.value); else url.searchParams.delete('bookDraft'); historyReplace(url) }
function historyReplace(url) { window.history.replaceState(window.history.state, '', url) }
watch([bookSearch, bookView], rememberBooks)
const selectedId = Number(new URLSearchParams(location.search).get('seriesId')) || null
const data = ref(null), page = ref(1), busy = ref(false), error = ref(''), notice = ref(''), editing = ref(false)
const assigning = ref(false), selected = ref([]), targetSearch = ref(''), targets = ref([]), target = ref(''), review = ref(null)
const history = ref([]), conflicts = ref({ items: [], page: 1, hasNext: false }), conflictPage = ref(1)
const directory = ref(null)
function directoryUrl() { const url = new URL(location.href); url.searchParams.delete('seriesId'); for (const key of ['bookPage', 'bookSearch', 'bookDraft', 'bookSort', 'bookView']) url.searchParams.delete(key); url.hash = ''; return url.pathname + url.search }
const draft = reactive({ name: '', description: '' })
useUnsavedChanges(() => editing.value && (draft.name !== (data.value?.series?.display_name || '') || draft.description !== (data.value?.series?.description || '')))
function directoryLoaded(result) { data.value = result; page.value = result.page }
async function request(path, body = null, signal = undefined) {
  const response = await fetch(generateUrl('/apps/library/api/series') + path, {
    signal, credentials: 'same-origin', cache: 'no-store', method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 413 ? t('library', 'Choose at most 500 books for one series change.') : response.status === 409 ? t('library', 'This series changed. Reload and review your edit.') : t('library', 'Could not load or save the series.'))
  return response.json()
}
async function loadAuxiliary() { [history.value, conflicts.value] = await Promise.all([request('/history'), request(`/conflicts?page=${conflictPage.value}`)]) }
async function load(next = 1, search = appliedBookSearch.value) {
  busy.value = true; error.value = ''
  try {
    if (!selectedId) { await directory.value?.reload(next); await loadAuxiliary(); return }
    const [series, recent, changed] = await Promise.all([
      request(`/${selectedId}?page=${next}&search=${encodeURIComponent(search)}&sort=${bookSort.value}`),
      request('/history'), request(`/conflicts?page=${conflictPage.value}`),
    ])
    appliedBookSearch.value = search
    data.value = series; history.value = recent; conflicts.value = changed
    review.value = null
    page.value = next; rememberBooks()
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function edit() { draft.name = data.value.series.display_name; draft.description = data.value.series.description || ''; editing.value = true; notice.value = '' }
async function save() {
  busy.value = true; error.value = ''
  try {
    data.value = await request(`/${selectedId}`, { name: draft.name, description: draft.description, revision: Number(data.value.series.revision) })
    editing.value = false; await load(page.value); notice.value = t('library', 'Series saved. Original book metadata is preserved.')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function bookUrl(book) {
  const source = new URL(location.href)
  if (selectedId && page.value > 1) source.searchParams.set('bookPage', String(page.value))
  else source.searchParams.delete('bookPage')
  return bookDetailsUrl(props.catalogueUrl, book.id, source.href)
}
async function findTargets(query, signal) {
  return (await request(`?search=${encodeURIComponent(query)}`, null, signal)).series.filter(entry => Number(entry.id) !== selectedId).map(entry => ({ ...entry, label: entry.display_name }))
}
function resetTarget() { target.value = ''; review.value = null }
function chooseTarget(entry) { targets.value = [entry]; target.value = String(entry.id); review.value = null }
async function createTarget() {
  busy.value = true; error.value = ''; review.value = null
  try { const created = await request('', { name: targetSearch.value.trim() }); targets.value = [created.series]; target.value = String(created.series.id) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function previewAssignment() {
  busy.value = true; error.value = ''
  try { review.value = await request(`/${selectedId}/preview`, { target: Number(target.value), items: selected.value.map(Number) }) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
function cancelAssignment() { assigning.value = false; review.value = null; selected.value = [] }
async function applyAssignment() {
  busy.value = true; error.value = ''
  try {
    await request(`/${selectedId}/assign`, { target: Number(target.value), items: selected.value.map(Number), token: review.value.token })
    assigning.value = false; selected.value = []; await load(1); notice.value = t('library', 'Series assignment saved. Original book metadata is preserved.')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
async function undo(operation) {
  busy.value = true; error.value = ''
  try { await request(`/history/${operation.id}/undo`, {}); await load(page.value); notice.value = t('library', 'Series change undone.') }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function resolveConflict(entry, choice) {
  busy.value = true; error.value = ''
  try { await request(`/conflicts/${entry.id}/resolve`, { choice, token: entry.token }); conflictPage.value = 1; await load(page.value); notice.value = t('library', 'Imported series change reviewed.') }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function changeConflictPage(next) { conflictPage.value = next; await load(page.value) }
onMounted(async () => { if (selectedId) { await load(Math.max(1, Math.min(100000, Number(new URLSearchParams(location.search).get('bookPage')) || 1))); if (location.hash === '#series-books') { await nextTick(); document.getElementById('series-books')?.scrollIntoView() } } else { try { await loadAuxiliary() } catch (e) { error.value = e.message } } })
</script>
<template>
  <section class="library-series" :aria-busy="busy" aria-labelledby="library-series-heading">
    <a v-if="selectedId" :href="directoryUrl()">{{ t('library', 'All series') }}</a>
    <h1 id="library-series-heading">{{ data?.series?.display_name || t('library', 'Series') }}</h1>
    <OperationStatus :loading="busy" :error="error" :message="notice" @retry="load(page)" />
    <template v-if="!selectedId">
      <DirectoryBrowser ref="directory" kind="series" collection="series" :request="request" :catalogue-url="catalogueUrl" :search-label="t('library', 'Search series')" :search-help="t('library', 'Matches the beginning of a preferred series name.')" :empty-label="t('library', 'No series found yet.')" @loaded="directoryLoaded" @busy="busy = $event" />
      <p v-if="data?.migration && (data.migration.pending || data.migration.failed || data.migration.conflict)" role="status">
        {{ t('library', 'Series migration: {pending} pending, {failed} failed.', data.migration) }}
        <span v-if="data.migration.conflict">{{ n('library', '%n imported series change to review', '%n imported series changes to review', Number(data.migration.conflict)) }}</span>
        <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button>
      </p>
    </template>
    <template v-else-if="data?.series">
      <p>{{ n('library', '%n book', '%n books', Number(data.bookCount)) }}</p>
      <p v-if="data.series.merged_into"><a :href="`${catalogueUrl}?series=1&seriesId=${data.series.merged_into}`">{{ t('library', 'Open merged series') }}</a></p>
      <p v-if="data.series.description && !editing" class="series-description" dir="auto">{{ data.series.description }}</p>
      <p v-if="data.bookCount"><a :href="`${catalogueUrl}?seriesId=${selectedId}`">{{ t('library', 'Browse this series in the catalogue') }}</a></p>
      <button v-if="!editing && !data.series.merged_into" :disabled="busy" @click="edit">{{ t('library', 'Edit series') }}</button>
      <form v-if="editing" class="series-editor" @submit.prevent="save">
        <label for="series-name">{{ t('library', 'Preferred name') }} <LabelHelp :text="t('library', 'Renaming this shared series changes its display name; the original text in each book stays unchanged.')" /></label>
        <input id="series-name" v-model="draft.name" maxlength="255" required :disabled="busy" />
        <label for="series-description">{{ t('library', 'Description') }}</label>
        <textarea id="series-description" v-model="draft.description" maxlength="10000" rows="4" :disabled="busy"></textarea>
        <FormActions :label="t('library', 'Save series')" :busy="busy" @discard="editing = false" />
      </form>
      <details v-if="!editing && !data.series.merged_into" class="series-actions">
        <summary>{{ t('library', 'Move or merge books') }}</summary>
        <button v-if="!assigning" :disabled="busy" @click="assigning = true">{{ t('library', 'Choose destination series') }}</button>
        <section v-if="assigning" class="series-assignment">
          <label>{{ t('library', 'Books to change') }} <LabelHelp :text="t('library', 'Leave books unselected to merge the whole series. Select books below to move only those books. Original file metadata remains unchanged.')" /></label>
          <p role="status">{{ selected.length ? n('library', '%n selected book', '%n selected books', selected.length) : t('library', 'Merge all books into the destination series') }}</p>
          <EntityPicker v-model="targetSearch" :label="t('library', 'Destination series')" :search="findTargets" :disabled="busy" allow-create @update:model-value="resetTarget" @choose="chooseTarget" @create="createTarget" />
          <p v-if="target" role="status">{{ t('library', 'Selected') }}: {{ targets.find(entry => String(entry.id) === target)?.display_name }}</p>
          <div><button :disabled="busy || !target" @click="previewAssignment">{{ t('library', 'Review change') }}</button> <button :disabled="busy" @click="cancelAssignment">{{ t('library', 'Cancel') }}</button></div>
          <section v-if="review" class="series-review" :aria-label="t('library', 'Review change')">
            <h2>{{ review.source }} → {{ review.target }}</h2>
            <p>{{ n('library', '%n book', '%n books', Number(review.bookCount)) }}</p>
            <p>{{ review.merge ? t('library', 'Future imports using the old series name will use the destination series.') : t('library', 'Only selected books will move. Both series remain available.') }}</p>
            <ul><li v-for="book in review.books" :key="book.id" dir="auto">{{ book.title }}</li></ul>
            <button class="primary" :disabled="busy" @click="applyAssignment">{{ t('library', 'Confirm series change') }}</button>
          </section>
        </section>
      </details>
      <section id="series-books" :aria-label="t('library', 'Books in your library')">
        <BookCollectionToolbar v-model:search="bookSearch" v-model:sort="bookSort" v-model:view="bookView" :sorts="bookSorts" :disabled="busy || editing || assigning" @apply="load(1, bookSearch.trim())" />
        <p v-if="bookSearch.trim() !== appliedBookSearch" role="status" class="library-query-draft">{{ t('library', 'Press Search to apply the typed query.') }}</p>
        <p v-if="appliedBookSearch">{{ n('library', '%n book', '%n books', Number(data.matchingCount)) }}</p>
        <p v-if="!data.books.length">{{ t('library', 'No books match this view.') }}</p>
        <ol class="series-books" :class="{ 'library-collection-grid': bookView === 'grid' }">
          <BookCollectionItem v-for="book in data.books" :key="book.id" :book="book" :href="bookUrl(book)">
            <template #selection><input v-if="assigning" v-model="selected" type="checkbox" :value="Number(book.id)" :aria-label="t('library', 'Select {title}', { title: book.title })" :disabled="busy" @change="review = null" /></template>
            <span v-if="book.part_number">{{ t('library', 'Part {number}', { number: book.part_number }) }}</span>
            <small dir="auto">{{ book.creators || '—' }}</small>
            <small v-if="book.scan_status === 'missing'">{{ t('library', 'File missing') }}</small>
          </BookCollectionItem>
        </ol>
      </section>
    </template>
    <details v-if="conflicts.items.length" class="series-conflicts">
      <summary>{{ t('library', 'Review imported series changes') }}</summary>
      <ul><li v-for="entry in conflicts.items" :key="entry.id">
        <strong dir="auto">{{ entry.title }}</strong>
        <ReviewValues :current="[entry.assignedName, entry.assignedNumber].filter(Boolean).join(' · ')" :proposed="[entry.incomingName, entry.incomingNumber].filter(Boolean).join(' · ')" />
        <div><button :disabled="busy" @click="resolveConflict(entry, 'keep')">{{ t('library', 'Keep current') }}</button> <button :disabled="busy" @click="resolveConflict(entry, 'import')">{{ t('library', 'Apply suggestion') }}</button></div>
      </li></ul>
      <div><button :disabled="busy || conflictPage === 1" @click="changeConflictPage(conflictPage - 1)">{{ t('library', 'Previous') }}</button> <button :disabled="busy || !conflicts.hasNext" @click="changeConflictPage(conflictPage + 1)">{{ t('library', 'Next') }}</button></div>
    </details>
    <details v-if="history.length" class="series-history">
      <summary>{{ t('library', 'Recent changes') }}</summary>
      <ul><li v-for="operation in history" :key="operation.id" :data-series-operation-id="operation.id">
        <span>{{ operation.source || t('library', 'No series') }} → {{ operation.target }} · {{ n('library', '%n book', '%n books', Number(operation.books)) }}</span>
        <span v-if="Number(operation.undone)">{{ t('library', 'Undone') }}</span>
        <button v-else :disabled="busy" @click="undo(operation)">{{ t('library', 'Undo') }}</button>
      </li></ul>
    </details>
    <nav v-if="data && selectedId" class="series-pagination" :aria-label="t('library', 'Series pages')">
      <button :disabled="busy || page === 1" @click="load(page - 1)">{{ t('library', 'Previous') }}</button>
      <span>{{ t('library', 'Page {page}', { page }) }}</span>
      <button :disabled="busy || !data.hasNext" @click="load(page + 1)">{{ t('library', 'Next') }}</button>
    </nav>
  </section>
</template>
<style scoped>
.library-series { padding: 24px; max-width: 1100px; margin: auto; overflow-wrap: anywhere; }
.library-series h1 { font-size: 24px; line-height: 1.35; }
.series-editor { display: flex; flex-direction: column; gap: 8px; margin-block: 20px; }
.series-editor input,.series-editor textarea { width: 100%; box-sizing: border-box; }
.series-books { list-style: none; padding: 0; }

.series-description { white-space: pre-line; }
.series-actions,.series-conflicts,.series-history { margin-block: 16px; }
.series-assignment,.series-review { border: 1px solid var(--color-border); border-radius: 8px; padding: 16px; margin-block: 12px; }
.series-assignment select { display: block; width: 100%; margin-block: 8px; }
.series-review ul { max-height: 240px; overflow: auto; }
.series-conflicts ul,.series-history ul { list-style: none; padding: 0; }
.series-conflicts li { display: flex; flex-direction: column; gap: 6px; border-bottom: 1px solid var(--color-border); padding: 12px 0; }
.series-history li { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-block: 8px; }
.series-pagination { display: flex; align-items: center; gap: 12px; margin-block: 20px; }
</style>
