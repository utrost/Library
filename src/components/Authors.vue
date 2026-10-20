<script setup>
import BookCollectionToolbar from './BookCollectionToolbar.vue'
import BookCollectionItem from './BookCollectionItem.vue'
import { pickerIndex } from '../picker-keyboard.js'
import { confirmAction } from '../confirm-action.js'
import { useUnsavedChanges } from '../use-unsaved-changes.js'
import FormActions from './FormActions.vue'
import { bookDetailsUrl } from '../details-return.js'
import { computed, onMounted, onUnmounted, reactive, ref, watch, nextTick } from 'vue'
import { generateUrl } from '@nextcloud/router'
import { t, n } from '@nextcloud/l10n'
import AuthorConflicts from './AuthorConflicts.vue'
import DirectoryBrowser from './DirectoryBrowser.vue'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true } })
const data = ref(null), busy = ref(false), error = ref(''), notice = ref(''), editing = ref(false)
const selected = ref([]), targetSearch = ref(''), targets = ref([]), target = ref(''), review = ref(null), assigning = ref(false), history = ref([]), tasks = ref([])
const visibleTasks = computed(() => tasks.value.filter(task => task.status !== 'completed' && task.status !== 'cancelled'))
const targetSearching = ref(false), targetSearched = ref(false), targetError = ref(''), targetMenuOpen = ref(false), targetActive = ref(-1)
const targetHasLetters = computed(() => (targetSearch.value.match(/\p{L}/gu) || []).length >= 3)
const targetCanCreate = computed(() => targetSearched.value && !targetSearching.value && !targetError.value && !target.value && targets.value.length === 0)
let targetTimer = null, targetController = null, targetSequence = 0
let taskTimer = null
const directory = ref(null), page = ref(1)
let loadController, loadSequence = 0, auxiliaryLoaded = false
const showConflicts = new URLSearchParams(location.search).get('authorConflicts') === '1'
const id = ref(Number(new URLSearchParams(location.search).get('authorId')) || null)
const viewQuery = new URLSearchParams(location.search)
const appliedBookSearch = ref((viewQuery.get('bookSearch') || '').slice(0, 255))
const bookSearch = ref((viewQuery.get('bookDraft') ?? appliedBookSearch.value).slice(0, 255)), bookSort = ref(['title', 'newest', 'series'].includes(viewQuery.get('bookSort')) ? viewQuery.get('bookSort') : 'title'), bookView = ref(viewQuery.get('bookView') === 'list' ? 'list' : 'grid'), bioExpanded = ref(false), photoFailed = ref(false)
const photoFile = ref(null), removePhoto = ref(false)
const draft = reactive({ display_name: '', sort_name: '', given_name: '', family_name: '', biography: '' })
useUnsavedChanges(() => editing.value && (photoFile.value !== null || removePhoto.value || Object.keys(draft).some(key => draft[key] !== (data.value?.author?.[key] || ''))))
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
function collectionUrl() {
  const source = new URL(location.href)
  for (const [key, value, fallback] of [['bookSearch', appliedBookSearch.value, ''], ['bookSort', bookSort.value, 'title'], ['bookView', bookView.value, 'grid'], ['bookPage', String(page.value), '1']]) {
    if (value !== fallback) source.searchParams.set(key, value)
    else source.searchParams.delete(key)
  }
  if (bookSearch.value.trim() !== appliedBookSearch.value) source.searchParams.set('bookDraft', bookSearch.value)
  else source.searchParams.delete('bookDraft')
  return source
}
function rememberBooks() { window.history.replaceState(window.history.state, '', collectionUrl()) }
watch([bookSearch, bookView], rememberBooks)
function bookUrl(book) { return bookDetailsUrl(props.catalogueUrl, book.id, collectionUrl().href) }
function directoryUrl() {
  const source = new URL(location.href)
  for (const key of ['authorId', 'bookSearch', 'bookDraft', 'bookSort', 'bookView', 'bookPage']) source.searchParams.delete(key)
  return source.pathname + source.search
}
function choosePhoto(event) { photoFile.value = event.target.files?.[0] || null; if (photoFile.value) removePhoto.value = false }

function directoryLoaded(result) { data.value = result; page.value = result.page }
async function request(path, body = null, signal = undefined) {
  const response = await fetch(generateUrl('/apps/library/api/authors') + path, {
    signal, credentials: 'same-origin', cache: 'no-store', method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }), requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: body instanceof FormData ? body : JSON.stringify(body) }),
  })
  if (!response.ok && (await response.clone().json().catch(() => ({}))).error === 'invalid_photo') throw new Error(t('library', 'Choose a valid JPEG, PNG or WebP image up to 10 MiB.'))
  if (!response.ok) throw new Error(response.status === 413 ? t('library', 'This change exceeds the supported size. Reassign books in smaller groups.') : response.status === 503 ? t('library', 'Author migration must finish before editing. Refresh to check progress.') : response.status === 409
    ? t('library', 'The author or affected books changed. Reload and review again. Your draft is preserved.')
    : t('library', 'Could not load or save the author. Check the fields and reload before retrying.'))
  if (body !== null) auxiliaryLoaded = false
  return response.json()
}
async function loadAuxiliary(signal) {
  const result = await Promise.all([request('/history', null, signal), request('/tasks', null, signal)])
  if (signal?.aborted) return
  [history.value, tasks.value] = result
  auxiliaryLoaded = true; scheduleTaskPoll()
}
async function load(next = 1, search = appliedBookSearch.value) {
  const sequence = ++loadSequence
  loadController?.abort()
  const controller = new AbortController(); loadController = controller
  busy.value = true; error.value = ''
  try {
    if (!id.value) { await directory.value?.reload(next); if (!auxiliaryLoaded) await loadAuxiliary(); return }
    const result = await request(`/${id.value}?page=${next}&search=${encodeURIComponent(search)}&sort=${bookSort.value}`, null, controller.signal)
    if (sequence !== loadSequence) return
    data.value = result
    appliedBookSearch.value = search
    page.value = next; rememberBooks(); review.value = null; selected.value = []; photoFailed.value = false
    if (!auxiliaryLoaded) await loadAuxiliary(controller.signal)
  } catch (e) { if (sequence === loadSequence && e.name !== 'AbortError') error.value = e.message }
  finally { if (sequence === loadSequence) busy.value = false }
}
function scheduleTaskPoll() {
  if (taskTimer !== null) clearTimeout(taskTimer)
  taskTimer = null
  if (tasks.value.some(task => task.status === 'queued' || task.status === 'running')) taskTimer = setTimeout(pollTasks, 5000)
}
async function pollTasks() {
  taskTimer = null
  try {
    const activeBefore = tasks.value.some(task => task.status === 'queued' || task.status === 'running')
    tasks.value = await request('/tasks')
    if (activeBefore && !tasks.value.some(task => task.status === 'queued' || task.status === 'running')) {
      auxiliaryLoaded = false
      await load(page.value)
      return
    }
  } catch (e) { error.value = e.message }
  scheduleTaskPoll()
}
function taskStatus(task) {
  if (task.status === 'queued') return t('library', 'Queued')
  if (task.status === 'running') return t('library', 'Running')
  if (task.status === 'conflict') return t('library', 'Needs review')
  return t('library', 'Failed')
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
function stopTargetSearch() {
  clearTimeout(targetTimer); targetTimer = null
  targetController?.abort(); targetController = null
  targetSequence++
  targetSearching.value = false
}
function cancelAssignment() {
  assigning.value = false; stopTargetSearch()
  targetSearch.value = ''; targets.value = []; target.value = ''; review.value = null; selected.value = []
  targetSearched.value = false; targetError.value = ''; targetMenuOpen.value = false
}
watch(targetSearch, () => {
  stopTargetSearch()
  target.value = ''; review.value = null; targets.value = []; targetSearched.value = false; targetError.value = ''; targetActive.value = -1
  targetMenuOpen.value = assigning.value
  if (!assigning.value || !targetHasLetters.value) return
  targetSearching.value = true
  targetTimer = setTimeout(findTargets, 250)
}, { flush: 'sync' })
async function findTargets() {
  targetError.value = ''; targetSearching.value = true
  const sequence = targetSequence
  const controller = new AbortController()
  targetController = controller
  try {
    const result = await request(`?search=${encodeURIComponent(targetSearch.value.trim())}`, null, controller.signal)
    if (sequence !== targetSequence) return
    targets.value = result.authors.filter(a => Number(a.id) !== id.value)
    targetActive.value = targets.value.length ? 0 : -1
    targetSearched.value = true
  } catch (e) {
    if (sequence === targetSequence && e.name !== 'AbortError') targetError.value = e.message
  } finally {
    if (sequence === targetSequence) { targetSearching.value = false; targetController = null }
  }
}
function chooseTarget(author) {
  targetSearch.value = author.display_name
  stopTargetSearch()
  target.value = String(author.id); targets.value = []; targetSearched.value = false; targetMenuOpen.value = false; targetActive.value = -1
  review.value = null
  nextTick(() => document.getElementById('target-search')?.focus())
}
function targetKeydown(event) {
  if (event.key === 'Escape') { targetMenuOpen.value = false; targetActive.value = -1; return }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    if (!targets.value.length) return
    event.preventDefault(); targetMenuOpen.value = true
    targetActive.value = pickerIndex(targetActive.value, event.key, targets.value.length)
    nextTick(() => document.getElementById(`target-option-${targetActive.value}`)?.scrollIntoView?.({ block: 'nearest' }))
  } else if (event.key === 'Enter' && targetMenuOpen.value && targetActive.value >= 0) {
    event.preventDefault(); chooseTarget(targets.value[targetActive.value])
  }
}
async function createTarget() {
  if (busy.value || !targetCanCreate.value) return
  busy.value = true; error.value = ''; review.value = null
  try { chooseTarget(await request('', { name: targetSearch.value.trim() })) }
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
    const result = await request(`/${id.value}/assign`, { target: Number(target.value), items: selected.value, token: review.value.token })
    notice.value = result.queued ? t('library', 'Author change queued. The books will update together when the background job finishes.') : t('library', 'Author assignments saved. Original credits are preserved. Undo is available in Recent changes.')
    cancelAssignment()
    await load(page.value)
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
async function undo(operation) {
  busy.value = true; error.value = ''
  try { const result = await request(`/history/${operation.id}/undo`, {}); notice.value = result.queued ? t('library', 'Author undo queued. The books will update together when the background job finishes.') : t('library', 'Author change undone.'); await load(page.value) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function cancelTask(task) {
  busy.value = true; error.value = ''
  try { await request(`/tasks/${task.id}/cancel`, {}); await load(page.value) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function removeUnused(author) {
  if (!await confirmAction(t('library', 'Remove this unused author? No books or files are deleted.'), t('library', 'Remove unused author'))) return
  busy.value = true; error.value = ''
  try { await request(`/${author.id}/remove-unused`, { revision: Number(author.revision) }); notice.value = t('library', 'Unused author removed.'); await load(page.value) }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(async () => {
  if (!showConflicts && id.value) await load(Math.max(1, Math.min(100000, Number(viewQuery.get('bookPage')) || 1)))
  if (!showConflicts && !id.value) {
    try { await loadAuxiliary() } catch (e) { error.value = e.message }
  }
  if (id.value && location.hash === '#author-books') { await nextTick(); document.getElementById('author-books')?.scrollIntoView() }
})
onUnmounted(() => { loadController?.abort(); loadSequence++; stopTargetSearch(); if (taskTimer !== null) clearTimeout(taskTimer) })
</script>
<template>
  <AuthorConflicts v-if="showConflicts" :request-token="requestToken" :catalogue-url="catalogueUrl" />
  <section v-else class="library-authors" :aria-busy="busy" aria-labelledby="authors-heading">
    <a v-if="id" :href="directoryUrl()">{{ t('library', 'All authors') }}</a>
    <header class="author-profile-header">
      <div v-if="id && data?.author" class="author-portrait">
        <img v-if="data.author.photo_key && !photoFailed" :key="data.author.photo_key" :src="photoUrl" :alt="t('library', 'Portrait of {author}', { author: data.author.display_name })" @error="photoFailed = true" />
        <span v-else aria-hidden="true">{{ initials }}</span>
      </div>
      <h1 id="authors-heading">{{ data?.author?.display_name || t('library', 'Authors') }}</h1>
    </header>
    <p v-if="error" role="alert">{{ error }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Reload') }}</button></p>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="busy && id" role="status">{{ t('library', 'Loading') }}</p>
    <template v-if="!id">
      <DirectoryBrowser ref="directory" kind="author" collection="authors" :request="request" :catalogue-url="catalogueUrl" :search-label="t('library', 'Search authors')" :search-help="t('library', 'Matches the beginning of the preferred name or sort name.')" :empty-label="t('library', 'No authors found.')" surname unused-filter @loaded="directoryLoaded" @busy="busy = $event">
        <template #actions="{ entry, unused }">
          <button v-if="unused && Number(entry.book_count) === 0" :disabled="busy || data?.migration.pending || data?.migration.failed" @click="removeUnused(entry)">{{ t('library', 'Remove unused author') }}</button>
        </template>
      </DirectoryBrowser>
      <p v-if="data?.migration && (data.migration.pending || data.migration.failed || data.migration.conflict)" role="status">
        {{ t('library', 'Author migration: {pending} pending, {failed} failed, {conflict} need review.', data.migration) }}
        <a v-if="data.migration.conflict" :href="`${catalogueUrl}?authors=1&amp;authorConflicts=1`">{{ t('library', 'Review imported author changes') }}</a>
        <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button>
      </p>
    </template>
    <template v-else-if="data?.author">
      <p>{{ n('library', '%n book', '%n books', data.bookCount) }}</p>
      <p v-if="data.bookCount"><a :href="`${catalogueUrl}?authorId=${id}`">{{ t('library', 'Browse this author in the catalogue') }}</a></p>
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
        <label for="author-sort">{{ t('library', 'Sort name') }} <LabelHelp :text="t('library', 'For example: Doe, John. Used for surname sorting.')" /></label>
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
        <FormActions :label="t('library', 'Save author')" :busy="busy" @discard="editing = false" />
      </form>
      <details v-if="!editing && !assigning" class="author-actions">
        <summary>{{ t('library', 'More actions') }}</summary>
        <button :disabled="busy || !data.canEdit" @click="assigning = true">{{ t('library', 'Merge or reassign') }}</button>
      </details>
      <section v-if="assigning" class="author-assignment" :aria-label="t('library', 'Merge or reassign')">
        <label>{{ t('library', 'Books to change') }} <LabelHelp :text="t('library', 'Leave all books unselected to merge this author. Select individual books below to reassign only those credits, keeping both authors.')" /></label>
        <p role="status">{{ selected.length ? n('library', '%n selected book', '%n selected books', selected.length) : t('library', 'Merge all books into the chosen author') }}</p>
        <div class="author-destination">
          <label for="target-search">{{ t('library', 'Destination author') }} <LabelHelp :text="t('library', 'Type at least three letters to search authors.')" /></label>
          <input id="target-search" v-model="targetSearch" type="search" maxlength="255" :disabled="busy" role="combobox" :placeholder="t('library', 'Type at least three letters to search authors.')" autocomplete="off" aria-autocomplete="list" aria-controls="target-options" :aria-expanded="targetMenuOpen && targets.length > 0" :aria-activedescendant="targetMenuOpen && targetActive >= 0 ? `target-option-${targetActive}` : undefined" @keydown="targetKeydown" @focus="targetMenuOpen = true" @blur="targetMenuOpen = false" />
          <ul v-if="targetMenuOpen && targets.length" id="target-options" role="listbox" :aria-label="t('library', 'Destination author')">
            <li v-for="(author, index) in targets" :id="`target-option-${index}`" :key="author.id" role="option" :aria-selected="index === targetActive" @mousedown.prevent @click="chooseTarget(author)">
              <span dir="auto">{{ author.display_name }}</span>
              <small dir="auto">{{ author.sort_name }} · #{{ author.id }}</small>
            </li>
          </ul>
          <span v-if="targetSearching" role="status">{{ t('library', 'Searching…') }}</span>
          <span v-else-if="target" role="status">{{ t('library', 'Destination selected. Review the change before applying it.') }}</span>
          <p v-if="targetError" role="alert">{{ targetError }} <button type="button" :disabled="targetSearching" @click="findTargets">{{ t('library', 'Retry') }}</button></p>
          <div v-if="targetCanCreate" class="author-destination-create">
            <span role="status">{{ t('library', 'No authors found.') }}</span>
            <button :disabled="busy" @click="createTarget">{{ t('library', 'Create new author') }}</button>
          </div>
        </div>
        <div><button :disabled="busy || !target" @click="previewAssignment">{{ t('library', 'Review change') }}</button> <button :disabled="busy" @click="cancelAssignment">{{ t('library', 'Cancel') }}</button></div>
        <section v-if="review" class="author-review" :aria-label="t('library', 'Review change')">
          <h2>{{ review.source }} → {{ review.target }}</h2>
          <p>{{ review.merge ? t('library', 'Merge these authors. Future imports of the old name will use the destination author.') : t('library', 'Reassign these books. Both author records remain available.') }}</p>
          <p>{{ n('library', '%n book', '%n books', review.bookCount) }}</p>
          <p v-if="review.queued">{{ t('library', 'The first 20 books are shown. This change will run in the background.') }}</p>
          <ul><li v-for="book in review.books" :key="book.id">{{ book.title }} — {{ t('library', 'Original credit: {credit}', { credit: book.credit || '—' }) }}</li></ul>
          <button class="primary" :disabled="busy" @click="applyAssignment">{{ t('library', 'Confirm author change') }}</button>
        </section>
      </section>
      <section id="author-books" class="author-catalogue" :aria-label="t('library', 'Books in your library')">
        <h2>{{ t('library', 'Books in your library') }}</h2>
        <BookCollectionToolbar v-model:search="bookSearch" v-model:sort="bookSort" v-model:view="bookView" :sorts="[{ value: 'title', label: t('library', 'Title') }, { value: 'newest', label: t('library', 'Publication date, newest first') }, { value: 'series', label: t('library', 'Series, then title') }]" :disabled="busy || editing" @apply="load(1, bookSearch.trim())" />
        <p v-if="bookSearch.trim() !== appliedBookSearch" role="status" class="library-query-draft">{{ t('library', 'Press Search to apply the typed query.') }}</p>
        <p v-if="appliedBookSearch">{{ n('library', '%n book', '%n books', data.matchingCount) }}</p>
        <p v-if="!data.books.length">{{ t('library', 'No books match this view.') }}</p>
        <section v-for="group in bookGroups" :key="group.name ?? 'all'" class="author-book-group">
          <h3 v-if="group.name !== null">{{ group.name || t('library', 'No series recorded') }}</h3>
          <ul class="author-books" :class="{ 'author-books-grid': bookView === 'grid', 'library-collection-grid': bookView === 'grid' }">
            <BookCollectionItem v-for="book in group.books" :key="book.id" :book="book" :href="bookUrl(book)">
              <template #selection><input v-if="assigning" v-model="selected" type="checkbox" :value="Number(book.id)" :aria-label="t('library', 'Select {title}', { title: book.title })" :disabled="busy" @change="review = null" /></template>
              <span v-if="book.series_name" dir="auto">{{ book.series_name }}<template v-if="book.series_number"> · {{ book.series_number }}</template></span>
              <span v-if="book.publication_date">{{ book.publication_date }}</span><span>{{ book.extension?.toUpperCase() }}</span>
              <span v-if="book.scan_status === 'missing'">{{ t('library', 'File missing') }}</span>
              <span v-if="assigning" dir="auto">{{ t('library', 'Original credit: {credit}', { credit: book.creators || '—' }) }}</span>
            </BookCollectionItem>
          </ul>
        </section>
      </section>
    </template>
    <details v-if="visibleTasks.length" class="author-history" open>
      <summary>{{ t('library', 'Background author changes') }}</summary>
      <ul><li v-for="task in visibleTasks" :key="task.id" :data-author-task-id="task.id">
        <span>{{ taskStatus(task) }} · {{ n('library', '%n book', '%n books', Number(task.book_count)) }}</span>
        <button v-if="task.status === 'queued'" :disabled="busy" @click="cancelTask(task)">{{ t('library', 'Cancel') }}</button>
        <span v-if="task.status === 'conflict' || task.status === 'failed'">{{ t('library', 'Review the author and try again. No books were changed by this task.') }}</span>
      </li></ul>
    </details>
    <details v-if="history.length" class="author-history">
      <summary>{{ t('library', 'Recent changes') }}</summary>
      <ul><li v-for="operation in history" :key="operation.id" :data-operation-id="operation.id">
        <span>{{ operation.source }} → {{ operation.target }} · {{ n('library', '%n book', '%n books', Number(operation.books)) }}</span>
        <span v-if="Number(operation.undone)">{{ t('library', 'Undone') }}</span>
        <button v-else :disabled="busy" @click="undo(operation)">{{ t('library', 'Undo') }}</button>
      </li></ul>
    </details>
    <nav v-if="data && id" class="author-pagination" :aria-label="t('library', 'Author pages')">
      <button :disabled="busy || editing || page === 1" @click="load(page - 1)">{{ t('library', 'Previous') }}</button>
      <span>{{ t('library', 'Page {page}', { page }) }}</span>
      <button :disabled="busy || editing || !data.hasNext" @click="load(page + 1)">{{ t('library', 'Next') }}</button>
    </nav>
  </section>
</template>
<style scoped>
.library-authors { padding: 24px; max-width: 1100px; margin: auto; overflow-wrap: anywhere; }
.library-authors h1 { margin-block: 16px; font-size: 24px; font-weight: 600; line-height: 1.35; }
.author-editor { display: flex; flex-direction: column; gap: 8px; margin-block: 20px; }
.author-editor input { width: 100%; max-width: 100%; box-sizing: border-box; }
.author-books { list-style: none; padding: 0; }
.author-books a { font-weight: bold; text-decoration: underline; }
.author-books span { color: var(--color-text-maxcontrast); }
.author-assignment { border: 1px solid var(--color-border); border-radius: 8px; padding: 16px; margin-block: 16px; }
.author-destination { display: flex; flex-direction: column; gap: 8px; margin-block: 16px; min-width: 0; }
.author-destination input { width: 100%; min-width: 0; box-sizing: border-box; }
.author-destination ul { list-style: none; margin: 0; padding: 4px; max-height: 260px; overflow-y: auto; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-main-background); }
.author-destination [role="option"] { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; padding: 10px; min-height: 44px; box-sizing: border-box; cursor: pointer; border-radius: 4px; }
.author-destination [role="option"] small { color: var(--color-text-maxcontrast); }
.author-destination [role="option"]:hover, .author-destination [aria-selected="true"] { background: var(--color-primary-element-light); outline: 2px solid var(--color-primary-element); outline-offset: -2px; }
.author-destination-create { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
.author-destination input:focus-visible { outline: 2px solid var(--color-primary-element); outline-offset: 2px; }
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
.author-book-group h3 { font-size: 18px; font-weight: 600; margin-block: 20px 8px; }
@media (max-width: 600px) {
  .author-portrait { width: 76px; height: 76px; flex-basis: 76px; font-size: 26px; }
  .author-profile-header { gap: 12px; }
}
@media (max-width: 600px) { .library-authors { padding: 24px 12px 12px; } }
</style>
