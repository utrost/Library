<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { n, t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import AddToList from './AddToList.vue'
import StarRating from './StarRating.vue'
import MetadataValuePicker from './MetadataValuePicker.vue'
import { detailsReturnContext } from '../details-return.js'

const props = defineProps({
  itemId: { type: String, required: true },
  requestToken: { type: String, required: true },
  catalogueUrl: { type: String, required: true },
})

const item = ref(null)
const context = ref(null)
const draft = reactive({})
const publisherSuggestions = ref([])
let publisherTimer = null
let publisherController = null
watch(() => draft.publisher, value => {
  clearTimeout(publisherTimer)
  publisherController?.abort()
  publisherSuggestions.value = []
  if (typeof value !== 'string' || value.trim().length < 3) return
  publisherTimer = setTimeout(async () => {
    publisherController = new AbortController()
    try {
      const url = new URL(generateUrl('/apps/library/catalogue/publisher-suggestions'), window.location.origin)
      url.searchParams.set('publisherSearch', value.trim())
      const response = await fetch(url, { credentials: 'same-origin', signal: publisherController.signal })
      if (response.ok) {
        const result = await response.json()
        if (draft.publisher === value) publisherSuggestions.value = Array.isArray(result.publishers) ? result.publishers.filter(entry => typeof entry === 'string') : []
      }
    } catch { /* Free text remains available when suggestions cannot be loaded. */ }
  }, 200)
})
const loading = ref(true)
const busy = ref(false)
const error = ref('')
const feedback = ref('')
const tagName = ref('')
const commentMessage = ref('')
const coverFile = ref(null)
const coverInput = ref(null)
const coverRevision = ref(0)
const coverRefreshRequested = ref(false)
const coverPasteStatus = ref('')
const editingAuthor = ref(null)
const authorSearch = ref('')
const authorInput = ref(null)
const authorResults = ref([])
const authorHasNext = ref(false)
const authorSuggestionsOpen = ref(false)
const authorActiveIndex = ref(-1)
const selectedAuthorId = ref('')
const authorSearchBusy = ref(false)
let authorSearchTimer = null
let authorSearchController = null
let authorSearchRequest = 0
const openUnavailable = new URLSearchParams(window.location.search).get('openUnavailable') === '1'
const savedDraft = ref('')
const dirty = computed(() => savedDraft.value !== '' && JSON.stringify(draft) !== savedDraft.value)
const itemId = computed(() => /^[1-9]\d{0,9}$/.test(props.itemId) && Number(props.itemId) <= 2147483647 ? props.itemId : '')
const itemBase = computed(() => `${props.catalogueUrl.replace(/\/$/, '')}/items/${itemId.value}`)
const returnContext = computed(() => detailsReturnContext(props.catalogueUrl, window.location.href))
const workflowOptions = [
  { value: '', label: t('library', 'No workflow status') },
  { value: 'to-read', label: t('library', 'To read') },
  { value: 'reading', label: t('library', 'Reading') },
  { value: 'finished', label: t('library', 'Finished') },
  { value: 'reference', label: t('library', 'Reference') },
  { value: 'paused', label: t('library', 'Paused') },
  { value: 'abandoned', label: t('library', 'Abandoned') },
  { value: 'needs-action', label: t('library', 'Needs action') },
]
const publicationTypes = [
  { value: 'book', label: t('library', 'book') }, { value: 'comic', label: t('library', 'comic') },
  { value: 'magazine', label: t('library', 'magazine') }, { value: 'journal', label: t('library', 'journal') },
  { value: 'manual', label: t('library', 'manual') }, { value: 'catalogue', label: t('library', 'catalogue') },
  { value: 'other', label: t('library', 'other') },
]
const fieldNames = {
  publicationType: t('library', 'Type'), title: t('library', 'Title'), subtitle: t('library', 'Subtitle'), creators: t('library', 'Creators'),
  series: t('library', 'Series'), seriesNumber: t('library', 'Part in series'), genre: t('library', 'Genre'), publication: t('library', 'Publication'),
  publicationDate: t('library', 'Publication date'), language: t('library', 'Language'), publisher: t('library', 'Publisher'),
  description: t('library', 'Description'), subjects: t('library', 'Subjects'), classifications: t('library', 'Classifications'),
}
const rejectedFields = computed(() => {
  try {
    const value = JSON.parse(item.value?.fieldValues?.rejectedFields || '[]')
    return Array.isArray(value) ? value : []
  } catch { return [] }
})
const provenance = computed(() => Object.entries(fieldNames).map(([field, label]) => {
  const current = item.value?.[field]
  const candidate = String(item.value?.fieldValues?.[field] ?? '')
  return { field, label, current: Array.isArray(current) ? current.join('; ') : String(current ?? ''), candidate, source: item.value?.fieldSources?.[field] || item.value?.metadataSource || '', rejected: rejectedFields.value.includes(field) }
}))
const differences = computed(() => provenance.value.filter(row => row.candidate.trim() && row.candidate !== row.current))

function listText(value) {
  return Array.isArray(value) ? value.join('\n') : String(value || '').split(';').map(v => v.trim()).filter(Boolean).join('\n')
}
function languageText(value) {
  return Array.isArray(value) ? value.join('\n') : String(value || '').split(/[;,\n]+/).map(v => v.trim()).filter(Boolean).join('\n')
}
function lines(value) { return String(value || '').split('\n').map(v => v.trim()).filter(Boolean) }

const authorsApi = generateUrl('/apps/library/api/authors')
async function authorRequest(path, body = null, signal = null) {
  const response = await fetch(authorsApi + path, {
    credentials: 'same-origin',
    cache: 'no-store',
    ...(signal ? { signal } : {}),
    method: body === null ? 'GET' : 'POST',
    headers: {
      Accept: 'application/json',
      ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }),
    },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 409
    ? t('library', 'The author assignment changed. Reload this publication and try again.')
    : response.status === 503
      ? t('library', 'Author migration must finish before editing. Refresh to check progress.')
      : t('library', 'The author change could not be saved.'))
  return response.json()
}
function cancelAuthorEdit() {
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  authorSearchRequest++
  editingAuthor.value = null
  authorSearch.value = ''
  authorResults.value = []
  authorHasNext.value = false
  authorSuggestionsOpen.value = false
  authorSearchBusy.value = false
  selectedAuthorId.value = ''
}
function editAuthor(author) {
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  editingAuthor.value = author
  authorSearch.value = ''
  authorResults.value = []
  selectedAuthorId.value = ''
  authorSuggestionsOpen.value = true
  findAuthors('')
  nextTick(() => authorInput.value?.focus())
}
watch(authorSearch, value => {
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  authorSearchRequest++
  authorResults.value = []
  authorHasNext.value = false
  authorActiveIndex.value = -1
  selectedAuthorId.value = ''
  if (!editingAuthor.value) return
  authorSuggestionsOpen.value = true
  authorSearchBusy.value = true
  authorSearchTimer = setTimeout(() => findAuthors(value.trim()), value.trim() ? 220 : 0)
})
async function findAuthors(search = authorSearch.value.trim()) {
  const request = ++authorSearchRequest
  authorSearchController?.abort()
  const controller = new AbortController()
  authorSearchController = controller
  authorSearchBusy.value = true
  error.value = ''
  try {
    const result = await authorRequest(`?search=${encodeURIComponent(search)}`, null, controller.signal)
    if (request !== authorSearchRequest || !editingAuthor.value) return
    authorResults.value = result.authors.filter(author => Number(author.id) !== Number(editingAuthor.value?.id))
    authorHasNext.value = result.hasNext === true
  } catch (cause) {
    if (cause.name !== 'AbortError' && request === authorSearchRequest) error.value = cause.message
  } finally {
    if (request === authorSearchRequest) authorSearchBusy.value = false
  }
}
function selectAuthor(candidate) {
  selectedAuthorId.value = String(candidate.id)
  authorSuggestionsOpen.value = false
  authorActiveIndex.value = -1
}
function authorPickerKeydown(event) {
  if (event.key === 'Escape') { authorSuggestionsOpen.value = false; return }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    authorSuggestionsOpen.value = true
    if (!authorResults.value.length) return
    authorActiveIndex.value = event.key === 'ArrowDown'
      ? (authorActiveIndex.value + 1) % authorResults.value.length
      : (authorActiveIndex.value < 0 ? authorResults.value.length - 1 : (authorActiveIndex.value - 1 + authorResults.value.length) % authorResults.value.length)
  } else if (event.key === 'Enter' && authorSuggestionsOpen.value && authorResults.value.length) {
    event.preventDefault()
    selectAuthor(authorResults.value[Math.max(0, authorActiveIndex.value)])
  }
}
async function createAuthor() {
  const name = authorSearch.value.trim()
  if (!name) return
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  authorSearchRequest++
  authorSearchBusy.value = true
  error.value = ''
  try {
    const author = await authorRequest('', { name })
    authorResults.value = [author]
    selectedAuthorId.value = String(author.id)
    authorSuggestionsOpen.value = false
  } catch (cause) { error.value = cause.message }
  finally { authorSearchBusy.value = false }
}
async function replaceAuthor() {
  if (!editingAuthor.value || !selectedAuthorId.value || busy.value) return
  if (dirty.value && !window.confirm(t('library', 'Discard unsaved metadata edits?'))) return
  busy.value = true
  error.value = ''
  feedback.value = ''
  try {
    const sourceId = Number(editingAuthor.value.id)
    const target = Number(selectedAuthorId.value)
    const items = [Number(itemId.value)]
    const preview = await authorRequest(`/${sourceId}/preview`, { target, items })
    if (preview.bookCount !== 1 || preview.merge || Number(preview.books?.[0]?.id) !== items[0]) throw new Error(t('library', 'The author assignment changed. Reload this publication and try again.'))
    await authorRequest(`/${sourceId}/assign`, { target, items, token: preview.token })
    cancelAuthorEdit()
    if (!await load({ silent: true })) throw new Error(t('library', 'The change was saved, but details could not be reloaded.'))
    feedback.value = t('library', 'Author assignment saved. The book credit was preserved.')
  } catch (cause) { error.value = cause.message || t('library', 'The author change could not be saved.') }
  finally { busy.value = false }
}

function setDraft(source) {
  for (const key of ['publicationType', 'title', 'subtitle', 'publication', 'series', 'seriesNumber', 'genre', 'publicationDate', 'publisher', 'description']) draft[key] = source[key] || ''
  draft.creators = Array.isArray(source.authors) ? source.authors.join('\n') : listText(source.creators)
  draft.language = languageText(source.language)
  draft.subjects = listText(source.subjects)
  draft.classifications = listText(source.classifications)
  draft.personalRating = source.personalRating ?? ''
  draft.identifiers = Array.isArray(source.identifiers) ? source.identifiers.map(row => ({ scheme: row.scheme, displayValue: row.displayValue || '', valid: row.valid, originalScheme: row.scheme, originalDisplayValue: row.displayValue || '' })) : []
  savedDraft.value = JSON.stringify(draft)
}

async function load({ silent = false } = {}) {
  if (!itemId.value) { error.value = t('library', 'Publication not found.'); loading.value = false; return }
  if (!silent) loading.value = true
  error.value = ''
  try {
    const [itemResponse, contextResponse] = await Promise.all([
      fetch(`${itemBase.value}/sidebar`, { credentials: 'same-origin', cache: 'no-store' }),
      fetch(`${itemBase.value}/details-context`, { credentials: 'same-origin', cache: 'no-store' }),
    ])
    if (!itemResponse.ok || !contextResponse.ok) throw new Error(t('library', 'Publication details could not be loaded.'))
    item.value = (await itemResponse.json()).item
    context.value = await contextResponse.json()
    if (!item.value || !context.value) throw new Error(t('library', 'Publication not found.'))
    setDraft(item.value)
    coverRevision.value++
    coverRefreshRequested.value = false
    return true
  } catch (cause) { error.value = cause.message || t('library', 'Publication details could not be loaded.') }
  finally { loading.value = false }
}

async function post(url, values = {}, file = null, { reload = true } = {}) {
  if (!url || busy.value) return false
  if (dirty.value && !window.confirm(t('library', 'Discard unsaved metadata edits?'))) return false
  busy.value = true
  error.value = ''
  feedback.value = ''
  try {
    const body = new FormData()
    body.set('requesttoken', props.requestToken)
    body.set('returnTo', 'details')
    for (const [key, value] of Object.entries(values)) {
      if (Array.isArray(value)) value.forEach(entry => body.append(`${key}[]`, entry))
      else body.set(key, String(value ?? ''))
    }
    if (file) body.set('coverOverrideFile', file, file.name || 'cover.png')
    const response = await fetch(url, { method: 'POST', body, credentials: 'same-origin' })
    if (!response.ok) throw new Error(t('library', 'The change could not be saved.'))
    const resultUrl = new URL(response.url)
    const coverError = resultUrl.searchParams.get('coverUploadError')
    const tagResult = resultUrl.searchParams.get('tagResult')
    if (coverError) throw new Error(t('library', 'Choose a valid JPEG, PNG, or WebP cover within the upload limits.'))
    if (tagResult && !['added', 'created', 'already-assigned'].includes(tagResult)) throw new Error(t('library', 'The tag could not be assigned.'))
    if (reload && !await load({ silent: true })) throw new Error(t('library', 'The change was saved, but details could not be reloaded.'))
    feedback.value = t('library', 'Saved')
    return true
  } catch (cause) { error.value = cause.message || t('library', 'The change could not be saved.'); return false }
  finally { busy.value = false }
}

async function saveMetadata() {
  const body = new FormData()
  body.set('requesttoken', props.requestToken)
  body.set('metadataAutosave', '1')
  body.set('metadataRevision', item.value?.metadataRevision || '')
  body.set('creatorFormat', 'lines')
  for (const key of ['publicationType', 'title', 'subtitle', 'creators', 'publication', 'series', 'seriesNumber', 'genre', 'publicationDate', 'publisher', 'description', 'personalRating']) body.set(key, String(draft[key] ?? ''))
  for (const key of ['language', 'subjects', 'classifications']) {
    const entries = lines(draft[key])
    if (entries.length === 0) body.set(key, '')
    else entries.forEach(entry => body.append(`${key}[]`, entry))
  }
  draft.identifiers.forEach((identifier, index) => {
    body.set(`identifiers[${index}][scheme]`, identifier.scheme)
    body.set(`identifiers[${index}][displayValue]`, identifier.displayValue)
  })
  busy.value = true
  error.value = ''
  feedback.value = ''
  try {
    const response = await fetch(item.value.updateUrl, { method: 'POST', body, credentials: 'same-origin' })
    const result = await response.json()
    if (!response.ok || !result.saved) throw new Error(result.error || t('library', 'Metadata was not saved.'))
    if (!await load({ silent: true })) throw new Error(t('library', 'Metadata was saved, but details could not be reloaded.'))
    feedback.value = t('library', 'Metadata saved')
  } catch (cause) { error.value = cause.message || t('library', 'Metadata was not saved.') }
  finally { busy.value = false }
}

async function saveRating(nextRating) {
  if (busy.value || !item.value) return
  const previous = draft.personalRating
  draft.personalRating = nextRating
  busy.value = true
  error.value = ''
  feedback.value = ''
  try {
    const body = new FormData()
    body.set('requesttoken', props.requestToken)
    body.set('metadataRevision', item.value.metadataRevision || '')
    body.set('personalRating', String(nextRating ?? ''))
    const response = await fetch(`${itemBase.value}/rating`, { method: 'POST', body, credentials: 'same-origin' })
    if (!response.ok) throw new Error(response.status === 409
      ? t('library', 'This publication changed. Reload its details before rating it.')
      : t('library', 'The rating could not be saved.'))
    const result = await response.json()
    if (!/^[a-f0-9]{64}$/.test(result.metadataRevision || '') || (result.rating !== null && !Number.isInteger(result.rating))) throw new Error(t('library', 'The rating could not be saved.'))
    item.value.personalRating = result.rating
    item.value.metadataRevision = result.metadataRevision
    draft.personalRating = result.rating ?? ''
    const baseline = JSON.parse(savedDraft.value)
    baseline.personalRating = draft.personalRating
    savedDraft.value = JSON.stringify(baseline)
    feedback.value = t('library', 'Rating saved')
  } catch (cause) {
    draft.personalRating = previous
    error.value = cause.message || t('library', 'The rating could not be saved.')
  } finally { busy.value = false }
}

async function uploadCover() {
  if (!coverFile.value) return
  const saved = await post(context.value.actions.coverOverride, {}, coverFile.value)
  if (saved) {
    coverFile.value = null
    coverPasteStatus.value = t('library', 'Cover updated.')
    if (coverInput.value) coverInput.value.value = ''
  } else {
    coverPasteStatus.value = error.value || t('library', 'The change could not be saved.')
  }
}
function chooseCover(event) {
  coverFile.value = event.target.files?.[0] || null
  if (coverFile.value) uploadCover()
}
async function prepareCoverPaste() {
  coverPasteStatus.value = t('library', 'Press Ctrl+V or ⌘V to paste a copied image.')
  if (!navigator.clipboard?.read) return
  try {
    const clipboardItems = await navigator.clipboard.read()
    const supported = ['image/png', 'image/jpeg', 'image/webp']
    for (const entry of clipboardItems) {
      const type = supported.find(candidate => entry.types.includes(candidate))
      if (!type) continue
      const blob = await entry.getType(type)
      coverFile.value = new File([blob], 'pasted-cover', { type })
      coverPasteStatus.value = t('library', 'Saving pasted cover…')
      await uploadCover()
      return
    }
  } catch { /* Keyboard paste remains available if clipboard read is unavailable or denied. */ }
}
function refreshCoverPreview() {
  coverRevision.value++
  coverRefreshRequested.value = true
}
function pastedCover(event) {
  const supported = ['image/jpeg', 'image/png', 'image/webp']
  const file = [...(event.clipboardData?.files || [])].find(entry => supported.includes(entry.type))
    || [...(event.clipboardData?.items || [])].find(entry => supported.includes(entry.type))?.getAsFile()
  event.preventDefault()
  if (!file) { coverPasteStatus.value = t('library', 'Clipboard has no JPEG, PNG, or WebP image.'); return }
  coverPasteStatus.value = t('library', 'Saving pasted cover…')
  coverFile.value = file
  uploadCover()
}
async function addTag(value = tagName.value) {
  if (!value.trim()) return
  if (await post(context.value.actions.tag, { nextcloudTagName: value.trim() })) tagName.value = ''
}
async function addComment() {
  if (!commentMessage.value.trim()) return
  if (await post(context.value.actions.comment, { commentMessage: commentMessage.value.trim() })) commentMessage.value = ''
}
async function forgetMissing() {
  if (!window.confirm(t('library', 'Forget this missing publication?'))) return
  if (await post(context.value.actions.forgetMissing, {}, null, { reload: false })) {
    savedDraft.value = JSON.stringify(draft)
    window.location.assign(returnContext.value.url)
  }
}
function recordOpen() {
  if (!item.value?.recordOpenUrl) return
  const body = new FormData()
  body.set('requesttoken', props.requestToken)
  fetch(item.value.recordOpenUrl, { method: 'POST', body, credentials: 'same-origin', keepalive: true }).catch(() => {})
}
function warnUnsaved(event) {
  if (!dirty.value) return
  event.preventDefault()
  event.returnValue = ''
}
onMounted(() => { window.addEventListener('beforeunload', warnUnsaved); load() })
onBeforeUnmount(() => { window.removeEventListener('beforeunload', warnUnsaved); clearTimeout(publisherTimer); publisherController?.abort(); clearTimeout(authorSearchTimer); authorSearchController?.abort() })
</script>

<template>
  <main class="library-full-details">
    <a :href="returnContext.url" class="library-full-details-back">← {{ returnContext.hasSource ? t('library', 'Back to results') : t('library', 'All publications') }}</a>
    <p v-if="openUnavailable" role="alert" class="library-full-details-error">{{ t('library', 'The source file could not be opened. Check the file in Nextcloud Files or rescan this root.') }}</p>
    <p v-if="loading" role="status">{{ t('library', 'Loading publication details…') }}</p>
    <p v-if="error" role="alert" class="library-full-details-error">{{ error }} <button v-if="!item" type="button" class="button secondary" @click="load">{{ t('library', 'Retry') }}</button></p>
    <p v-if="feedback" role="status" class="library-full-details-feedback">{{ feedback }}</p>
    <template v-if="item && context">
      <header class="library-full-details-hero">
        <div class="library-full-details-cover" @paste="pastedCover">
          <div class="library-full-details-cover-frame">
            <img :src="`${item.coverUrl}${item.coverUrl.includes('?') ? '&' : '?'}view=${coverRevision}${coverRefreshRequested ? '&refresh=1' : ''}`" alt="">
            <div class="library-full-details-cover-tools">
              <button v-if="item.hasManualCover" type="button" :disabled="busy" :title="t('library', 'Revert cover')" :aria-label="t('library', 'Revert cover')" @click="post(context.actions.coverRevert)"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 5 4 10l5 5M4 10h10a6 6 0 0 1 0 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              <button type="button" :disabled="busy" :title="t('library', 'Refresh cover preview')" :aria-label="t('library', 'Refresh cover preview')" @click="refreshCoverPreview"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 7v5h-5M4 17v-5h5M6.1 9A7 7 0 0 1 19 7l1 5M4 12l1 5a7 7 0 0 0 12.9-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
            <div class="library-full-details-cover-actions">
              <button type="button" class="library-cover-primary-action" :disabled="busy" @click="coverInput?.click()"><span aria-hidden="true">✎</span> {{ t('library', 'Replace cover') }}</button>
              <button type="button" class="library-cover-paste-action" :disabled="busy" @click="prepareCoverPaste">{{ t('library', 'Paste image') }}</button>
            </div>
          </div>
          <input ref="coverInput" class="library-cover-file-input" type="file" tabindex="-1" accept="image/jpeg,image/png,image/webp" :aria-label="t('library', 'Replace cover')" @change="chooseCover">
          <p v-if="coverPasteStatus" class="library-cover-paste-guide" role="status">{{ coverPasteStatus }}</p>
        </div>
        <div class="library-full-details-summary"><p class="library-muted">{{ item.publicationType || t('library', 'Publication') }} · {{ (item.extension || '').toUpperCase() }}</p><h1><bdi dir="auto">{{ item.title || t('library', 'Untitled publication') }}</bdi></h1><p><bdi dir="auto">{{ item.displayCreators || item.creators }}</bdi></p><p v-if="item.canonicalAuthors?.length" class="library-full-details-links"><a v-for="author in item.canonicalAuthors" :key="author.id" :href="`${catalogueUrl}?authors=1&authorId=${author.id}`">{{ author.name }}</a></p><p v-if="item.canonicalSeries?.length" class="library-full-details-links"><a v-for="series in item.canonicalSeries" :key="series.id" :href="`${catalogueUrl}?series=1&seriesId=${series.id}`">{{ series.name }}<span v-if="series.part"> · {{ series.part }}</span></a></p><div class="library-full-details-actions"><a class="button primary" :href="item.openUrl" target="_blank" rel="noopener" @click="recordOpen">{{ t('library', 'Open') }}</a><a class="button secondary" :href="item.filesUrl">{{ t('library', 'Show in Files') }}</a><a class="button secondary" :href="item.downloadUrl">{{ t('library', 'Download source') }}</a></div><div class="library-full-details-personal"><button type="button" class="button secondary" :aria-pressed="!!item.starred" :disabled="busy" @click="post(context.actions.star, { starred: item.starred ? '0' : '1' })">{{ item.starred ? '★' : '☆' }} {{ t('library', 'Favorite') }}</button><label>{{ t('library', 'Workflow status') }} <select :value="item.workflowStatus || ''" :disabled="busy" @change="post(context.actions.workflowStatus, { workflowStatus: $event.target.value })"><option v-for="status in workflowOptions" :key="status.value" :value="status.value">{{ status.label }}</option></select></label></div><AddToList :item-ids="[Number(itemId)]" :request-token="requestToken" :lists-url="`${catalogueUrl}?lists=1`" /></div>
      </header>

      <div class="library-full-details-columns">
        <section class="library-full-details-card library-full-details-authors" aria-labelledby="library-full-details-authors-heading">
          <h2 id="library-full-details-authors-heading">{{ t('library', 'Authors') }}</h2>
          <template v-if="item.canonicalAuthors?.length">
            <div v-for="author in item.canonicalAuthors" :key="author.id" class="library-full-details-author-row">
              <a :href="`${catalogueUrl}?authors=1&authorId=${author.id}`"><bdi dir="auto">{{ author.name }}</bdi></a>
              <button v-if="item.authorSyncStatus === 0" type="button" class="button secondary" :disabled="busy" @click="editAuthor(author)">{{ t('library', 'Change author') }}</button>
            </div>
            <p v-if="item.authorSyncStatus === 2"><a :href="`${catalogueUrl}?authors=1&authorConflicts=1`">{{ t('library', 'Review imported author changes') }}</a></p>
            <p v-else-if="item.authorSyncStatus !== 0" class="library-muted">{{ t('library', 'Author migration must finish before editing. Refresh to check progress.') }}</p>
            <div v-if="editingAuthor" class="library-full-details-author-picker">
              <p>{{ t('library', 'Replace {author} for this publication', { author: editingAuthor.name }) }}</p>
              <div class="library-full-details-author-search">
                <label for="library-details-author-search">{{ t('library', 'Choose an author') }}</label>
                <input id="library-details-author-search" ref="authorInput" v-model="authorSearch" type="search" maxlength="255" autocomplete="off" role="combobox" aria-autocomplete="list" aria-controls="library-details-author-suggestions" :aria-expanded="authorSuggestionsOpen && authorResults.length > 0 ? 'true' : 'false'" :aria-activedescendant="authorActiveIndex >= 0 && authorSuggestionsOpen ? `library-details-author-option-${authorResults[authorActiveIndex]?.id}` : undefined" :placeholder="t('library', 'Search authors')" :disabled="busy" @focus="authorSuggestionsOpen = true" @keydown="authorPickerKeydown">
                <span v-if="authorSearchBusy" class="library-muted" role="status">{{ t('library', 'Searching…') }}</span>
                <ul v-if="authorSuggestionsOpen && authorResults.length" id="library-details-author-suggestions" class="library-full-details-author-suggestions" role="listbox">
                  <li v-for="(candidate, index) in authorResults" :id="`library-details-author-option-${candidate.id}`" :key="candidate.id" role="option" :aria-selected="authorActiveIndex === index"><button type="button" :class="{ 'is-active': authorActiveIndex === index }" @mousedown.prevent @click="selectAuthor(candidate)"><strong>{{ candidate.display_name }}</strong><small>{{ candidate.sort_name }} · {{ n('library', '%n book', '%n books', Number(candidate.book_count || 0)) }}</small></button></li>
                </ul>
                <p v-if="authorSuggestionsOpen && authorHasNext" class="library-muted">{{ t('library', 'More matches. Keep typing to narrow the list.') }}</p>
                <p v-if="authorSuggestionsOpen && !authorSearchBusy && !authorResults.length && authorSearch.trim()" class="library-muted">{{ t('library', 'No matching author. You can create a separate author below.') }}</p>
                <p v-if="selectedAuthorId" class="library-full-details-author-selected" role="status">{{ t('library', 'Selected author') }}: <strong>{{ authorResults.find(candidate => String(candidate.id) === selectedAuthorId)?.display_name }}</strong></p>
              </div>
              <div class="library-full-details-author-actions">
                <button type="button" class="button secondary" :disabled="busy || authorSearchBusy || !authorSearch.trim()" :title="t('library', 'Creates a separate author identity, even if the name already exists.')" @click="createAuthor">{{ t('library', 'Create separate author') }}</button>
                <button type="button" class="button primary" :disabled="busy || authorSearchBusy || !selectedAuthorId" @click="replaceAuthor">{{ t('library', 'Save author assignment') }}</button>
                <button type="button" class="button secondary" :disabled="busy" @click="cancelAuthorEdit">{{ t('library', 'Cancel') }}</button>
              </div>
            </div>
          </template>
          <p v-else class="library-muted">{{ t('library', 'No linked authors are available yet. Expand Source creator credits below to see the book credit.') }}</p>
        </section>
        <section class="library-full-details-card" aria-labelledby="library-full-details-metadata"><h2 id="library-full-details-metadata">{{ t('library', 'Publication metadata') }}</h2><form @submit.prevent="saveMetadata"><div class="library-full-details-fields"><label>{{ t('library', 'Title') }}<input v-model="draft.title" required></label><label>{{ t('library', 'Subtitle') }}<input v-model="draft.subtitle"></label><label>{{ t('library', 'Type') }}<select v-model="draft.publicationType"><option v-for="type in publicationTypes" :key="type.value" :value="type.value">{{ type.label }}</option></select></label><details class="library-full-details-wide library-full-details-source-credit"><summary :title="t('library', 'This is the book credit used for source metadata and export. Change the linked person above for author browsing. One creator per line; commas within a name are preserved.')">{{ t('library', 'Source creator credits') }}</summary><label>{{ t('library', 'Source creator credits') }}<textarea v-model="draft.creators" rows="3"></textarea></label></details><label>{{ t('library', 'Publication') }}<input v-model="draft.publication"></label><label>{{ t('library', 'Series') }}<input v-model="draft.series"></label><label>{{ t('library', 'Part in series') }}<input v-model="draft.seriesNumber"></label><label>{{ t('library', 'Genre') }}<input v-model="draft.genre"></label><label :title="t('library', 'Use YYYY, YYYY-MM, or YYYY-MM-DD.')">{{ t('library', 'Publication date') }}<input v-model="draft.publicationDate"></label><label :title="t('library', 'Search publishers')">{{ t('library', 'Publisher') }}<input v-model="draft.publisher" list="library-details-publisher-suggestions" autocomplete="off"><datalist id="library-details-publisher-suggestions"><option v-for="name in publisherSuggestions" :key="name" :value="name"></option></datalist></label><MetadataValuePicker v-model="draft.language" kind="language" :disabled="busy" /><MetadataValuePicker v-model="draft.subjects" kind="subject" :disabled="busy" /><label :title="t('library', 'One classification per line.')">{{ t('library', 'Classifications') }}<textarea v-model="draft.classifications" rows="2"></textarea></label><StarRating :model-value="draft.personalRating" :disabled="busy" @update:model-value="saveRating" /><label class="library-full-details-wide">{{ t('library', 'Description') }}<textarea v-model="draft.description" rows="8"></textarea></label></div><fieldset><legend>{{ t('library', 'Identifiers') }}</legend><div v-for="(identifier, index) in draft.identifiers" :key="index" class="library-full-details-identifier"><select v-model="identifier.scheme" :aria-label="t('library', 'Scheme')"><option value="isbn">{{ t('library', 'ISBN') }}</option><option value="issn">{{ t('library', 'ISSN') }}</option></select><input v-model="identifier.displayValue" :aria-label="t('library', 'Identifier value')"><span v-if="identifier.displayValue && identifier.valid === false && identifier.scheme === identifier.originalScheme && identifier.displayValue === identifier.originalDisplayValue" role="status">{{ t('library', 'Invalid identifier checksum') }}</span><button type="button" class="button secondary" :aria-label="t('library', 'Remove identifier')" @click="draft.identifiers.splice(index, 1)">×</button></div><button type="button" class="button secondary" @click="draft.identifiers.push({ scheme: 'isbn', displayValue: '' })">{{ t('library', 'Add identifier') }}</button></fieldset><button class="button primary" type="submit" :disabled="busy">{{ t('library', 'Save metadata') }}</button></form></section>

        <div class="library-full-details-aside"><section class="library-full-details-card"><h2>{{ t('library', 'File metadata') }}</h2><dl><dt>{{ t('library', 'Location') }}</dt><dd><bdi dir="ltr">{{ item.cachedPath }}</bdi></dd><dt>{{ t('library', 'Format') }}</dt><dd>{{ (item.extension || '').toUpperCase() }}</dd><dt>{{ t('library', 'Scan status') }}</dt><dd>{{ item.scanStatus || '—' }}</dd><dt>{{ t('library', 'Metadata source') }}</dt><dd>{{ item.metadataSource || '—' }}</dd><dt v-if="item.scanError">{{ t('library', 'Scan error') }}</dt><dd v-if="item.scanError">{{ item.scanError }}</dd><dt>{{ t('library', 'File ID') }}</dt><dd>{{ context.file.fileId || '—' }}</dd><dt>{{ t('library', 'MIME type') }}</dt><dd>{{ context.file.mimeType || '—' }}</dd><dt v-if="item.shelf">{{ t('library', 'Shelf') }}</dt><dd v-if="item.shelf">{{ item.shelf }}</dd></dl><button v-if="item.scanStatus === 'missing'" type="button" class="button secondary" :disabled="busy" @click="forgetMissing">{{ t('library', 'Forget missing publication') }}</button></section>
          <section class="library-full-details-card"><h2>{{ t('library', 'Nextcloud tags') }}</h2><div class="library-full-details-chips"><span v-for="tag in context.tags" :key="tag.id" class="library-full-details-chip"><bdi dir="auto">{{ tag.name }}</bdi><button type="button" :disabled="busy" :aria-label="`${t('library', 'Remove tag')}: ${tag.name}`" @click="post(tag.removeUrl)">×</button></span></div><form @submit.prevent="addTag()"><label>{{ t('library', 'Add Nextcloud tag') }}<input v-model="tagName" list="library-full-details-tag-suggestions"></label><datalist id="library-full-details-tag-suggestions"><option v-for="name in context.tagSuggestions" :key="name" :value="name"></option></datalist><button type="submit" class="button secondary" :disabled="busy || !tagName.trim()">{{ t('library', 'Add tag') }}</button></form></section>
          <section class="library-full-details-card"><h2>{{ t('library', 'Nextcloud comments') }}</h2><p class="library-muted">{{ n('library', '%n comment', '%n comments', context.comments.count || 0) }}</p><ul v-if="context.comments.recent?.length" class="library-full-details-comments"><li v-for="comment in context.comments.recent" :key="comment.id"><small>{{ comment.actorId }} · {{ comment.createdAt }}</small><p>{{ comment.message }}</p></li></ul><form @submit.prevent="addComment"><label>{{ t('library', 'Add Nextcloud comment') }}<textarea v-model="commentMessage" rows="3"></textarea></label><button type="submit" class="button secondary" :disabled="busy || !commentMessage.trim()">{{ t('library', 'Add comment') }}</button></form></section>
        </div>
      </div>
      <section class="library-full-details-card library-full-details-provenance"><h2>{{ t('library', 'Metadata provenance') }}</h2><p class="library-muted">{{ t('library', 'Scanner suggestions never replace your edits automatically.') }}</p><div v-if="differences.length" class="library-full-details-differences"><article v-for="row in differences" :key="row.field"><h3>{{ row.label }}</h3><p>{{ t('library', 'Current') }}: <bdi dir="auto">{{ row.current || '—' }}</bdi></p><p>{{ t('library', 'Scanner candidate') }}: <bdi dir="auto">{{ row.candidate }}</bdi></p><button type="button" class="button secondary" :disabled="busy || row.rejected" :title="row.rejected ? t('library', 'This source value exceeds field limits. Edit the field instead.') : ''" @click="post(context.actions.resetField, { field: row.field })">{{ t('library', 'Reset to scanner') }}</button></article></div><p v-else>{{ t('library', 'No scanner differences for this item.') }}</p><details><summary>{{ t('library', 'Show all scanner provenance') }}</summary><div class="library-full-details-differences"><article v-for="row in provenance" :key="row.field"><h3>{{ row.label }}</h3><p>{{ t('library', 'Scanner source') }}: {{ row.source || '—' }}</p><p>{{ t('library', 'Current') }}: <bdi dir="auto">{{ row.current || '—' }}</bdi></p><p>{{ t('library', 'Scanner candidate') }}: <bdi dir="auto">{{ row.candidate || '—' }}</bdi></p></article></div></details><button v-if="differences.length" type="button" class="button secondary" :disabled="busy || rejectedFields.length > 0" :title="rejectedFields.length ? t('library', 'This source value exceeds field limits. Edit the field instead.') : ''" @click="post(context.actions.resetFields)">{{ t('library', 'Reset all fields to scanner') }}</button></section>
    </template>
  </main>
</template>

<style scoped>
.library-full-details { max-width: 1280px; margin: 0 auto; padding: 24px; }
.library-full-details-back { display: inline-block; margin-bottom: 20px; }
.library-full-details-error { color: var(--color-error); }
.library-full-details-feedback { color: var(--color-success); }
.library-full-details-hero { display: grid; grid-template-columns: minmax(150px, 220px) 1fr; gap: 24px; margin-bottom: 24px; }
.library-full-details-cover-frame { background: var(--color-background-dark); border: 1px solid var(--color-border); border-radius: 12px; isolation: isolate; overflow: hidden; position: relative; }
.library-full-details-cover-frame img { display: block; width: 100%; max-height: 330px; min-height: 220px; object-fit: contain; }
.library-full-details-cover-tools { display: flex; gap: 5px; inset-block-start: 8px; inset-inline-end: 8px; position: absolute; z-index: 2; }
.library-full-details-cover-tools button { align-items: center; backdrop-filter: blur(8px); background: #101820c9; border: 1px solid #ffffff80; border-radius: 9px; color: #fff; cursor: pointer; display: inline-flex; font-size: 1.3rem; height: 38px; justify-content: center; line-height: 1; padding: 0; width: 38px; }
.library-full-details-cover-tools button:hover, .library-full-details-cover-tools button:focus-visible { background: #101820; outline: 2px solid #fff; outline-offset: 2px; }
.library-full-details-cover-tools svg { height: 18px; width: 18px; }
.library-full-details-cover-tools button:disabled { opacity: .5; }
.library-full-details-cover-actions { background: linear-gradient(transparent, #101820dc 35%, #101820f0); display: flex; flex-wrap: wrap; gap: 5px; inset-block-end: 0; inset-inline: 0; padding: 28px 9px 9px; position: absolute; z-index: 2; }
.library-full-details-cover-actions button { align-items: center; border-radius: 8px; cursor: pointer; display: inline-flex; font-size: .82rem; font-weight: 700; gap: 4px; justify-content: center; min-height: 36px; padding: 4px 7px; }
.library-full-details-cover-actions button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.library-cover-primary-action { background: var(--color-primary-element, #0082c9); border: 1px solid var(--color-primary-element, #0082c9); color: var(--color-primary-text, #fff); flex: 1 1 auto; }
.library-cover-paste-action { background: #101820bd; border: 1px solid #ffffff80; color: #fff; flex: 1 1 auto; }
.library-cover-file-input { clip-path: inset(50%); height: 1px; overflow: hidden; position: absolute; width: 1px; }
.library-cover-paste-guide { background: var(--color-background-hover); border-radius: 8px; font-size: .85rem; margin: 8px 0 0; padding: 7px 9px; }
.library-full-details-summary h1 { margin: 4px 0; overflow-wrap: anywhere; }
.library-full-details-actions, .library-full-details-personal, .library-full-details-links { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 14px 0; }
.library-full-details-columns { display: grid; grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr); gap: 20px; align-items: start; }
.library-full-details-authors { grid-column: 1 / -1; }
.library-full-details-author-row, .library-full-details-author-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
.library-full-details-author-row { margin: 8px 0; }
.library-full-details-author-picker { display: grid; gap: 12px; margin-top: 16px; padding: 16px; border: 1px solid var(--color-border); border-radius: 8px; }
.library-full-details-author-search { min-width: 0; position: relative; }
.library-full-details-author-search > label { display: block; margin-bottom: 5px; }
.library-full-details-author-search > input { width: 100%; }
.library-full-details-author-suggestions { background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: 10px; box-shadow: 0 12px 32px #0003; inset-inline: 0; list-style: none; margin: 4px 0 0; max-height: 270px; overflow-y: auto; padding: 4px; position: absolute; top: 100%; z-index: 10; }
.library-full-details-author-suggestions li { margin: 0; }
.library-full-details-author-suggestions button { background: transparent; border: 0; border-radius: 7px; color: var(--color-main-text); cursor: pointer; display: grid; gap: 2px; padding: 8px 10px; text-align: start; width: 100%; }
.library-full-details-author-suggestions button:hover, .library-full-details-author-suggestions button.is-active { background: var(--color-background-hover); }
.library-full-details-author-suggestions small { color: var(--color-text-maxcontrast); }
.library-full-details-author-selected { background: color-mix(in srgb, var(--color-primary-element, #0082c9) 12%, var(--color-main-background)); border-radius: 8px; margin: 8px 0 0; padding: 8px 10px; }
.library-full-details-source-credit { border: 1px solid var(--color-border); border-radius: 8px; padding: 10px 12px; }
.library-full-details-source-credit summary { cursor: pointer; }
.library-full-details-source-credit label { margin-top: 10px; }
.library-full-details-aside { display: grid; gap: 20px; }
.library-full-details-card { border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; min-width: 0; }
.library-full-details-card h2 { margin: 0 0 16px; }
.library-full-details-card form { display: grid; gap: 14px; }
.library-full-details-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.library-full-details-card label { display: grid; gap: 5px; min-width: 0; }
.library-full-details-card input, .library-full-details-card textarea, .library-full-details-card select { width: 100%; min-width: 0; box-sizing: border-box; }
.library-full-details-wide { grid-column: 1 / -1; }
.library-full-details-identifier { display: flex; align-items: center; gap: 8px; margin: 8px 0; }
.library-full-details-identifier select { max-width: 100px; }
.library-full-details-card dt { font-weight: 600; margin-top: 10px; }
.library-full-details-card dd { margin: 3px 0 0; overflow-wrap: anywhere; }
.library-full-details-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 12px; }
.library-full-details-chip { display: inline-flex; gap: 5px; align-items: center; border-radius: 18px; padding: 3px 8px; background: var(--color-background-dark); }
.library-full-details-chip button { border: 0; background: transparent; cursor: pointer; }
.library-full-details-comments { list-style: none; padding: 0; }
.library-full-details-comments li { border-bottom: 1px solid var(--color-border); padding: 8px 0; overflow-wrap: anywhere; }
.library-full-details-provenance { margin-top: 20px; }
.library-full-details-differences { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; margin: 16px 0; }
.library-full-details-differences article { border: 1px solid var(--color-border); border-radius: 8px; padding: 12px; min-width: 0; overflow-wrap: anywhere; }
.library-full-details-differences h3 { margin: 0 0 8px; }
@media (max-width: 900px) { .library-full-details-columns { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .library-full-details { padding: 16px; } .library-full-details-hero, .library-full-details-fields { grid-template-columns: 1fr; } .library-full-details-cover { max-width: 200px; } }
</style>
