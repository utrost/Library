<script setup>
import { pickerIndex } from '../picker-keyboard.js'
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { n, t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import AddToList from './AddToList.vue'
import DeleteBook from './DeleteBook.vue'
import StarRating from './StarRating.vue'
import EntityPicker from './EntityPicker.vue'
import MetadataValuePicker from './MetadataValuePicker.vue'
import GenrePicker from './GenrePicker.vue'
import IdentityAction from './IdentityAction.vue'
import { formatFileSize } from '../file-size.js'
import { detailsReturnContext } from '../details-return.js'

const props = defineProps({
  itemId: { type: String, required: true },
  requestToken: { type: String, required: true },
  catalogueUrl: { type: String, required: true },
})

const item = ref(null)
const context = ref(null)
const fileSize = computed(() => formatFileSize(item.value?.fileSize, document.documentElement.lang || 'en'))
const exactFileSize = computed(() => formatFileSize(item.value?.fileSize, document.documentElement.lang || 'en', true))
const draft = reactive({})
async function searchPublishers(query, signal) {
  const url = new URL(generateUrl('/apps/library/catalogue/publisher-suggestions'), location.origin)
  url.searchParams.set('publisherSearch', query)
  const response = await fetch(url, { credentials: 'same-origin', signal })
  if (!response.ok) throw new Error('lookup_failed')
  return ((await response.json()).publishers || []).map(label => ({ label }))
}
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
const authorSearchReady = computed(() => (authorSearch.value.match(/\p{L}/gu) || []).length >= 3)
const authorInput = ref(null)
const authorResults = ref([])
const authorHasNext = ref(false)
const authorSuggestionsOpen = ref(false)
const authorActiveIndex = ref(-1)
const authorSearchBusy = ref(false)
const authorLookupError = ref(''), authorLookupCompleted = ref(false)
let authorSearchTimer = null
let authorSearchController = null
let authorSearchRequest = 0
const editingSeries = ref(false)
const seriesSearch = ref('')
const seriesSearchReady = computed(() => (seriesSearch.value.match(/\p{L}/gu) || []).length >= 3)
const currentSeriesMatchesSearch = computed(() => {
  const query = seriesSearch.value.trim().toLocaleLowerCase()
  return seriesSearchReady.value && String(draft.seriesLink?.name || '').toLocaleLowerCase().startsWith(query)
})
const seriesInput = ref(null)
const seriesResults = ref([])
const seriesHasNext = ref(false)
const seriesSuggestionsOpen = ref(false)
const seriesActiveIndex = ref(-1)
const seriesSearchBusy = ref(false)
const seriesLookupError = ref(''), seriesLookupCompleted = ref(false)
let seriesSearchTimer = null
let seriesSearchController = null
let seriesSearchRequest = 0
const openUnavailable = new URLSearchParams(window.location.search).get('openUnavailable') === '1'
const savedDraft = ref('')
const dirty = computed(() => savedDraft.value !== '' && JSON.stringify(draft) !== savedDraft.value)
const itemId = computed(() => /^[1-9]\d{0,9}$/.test(props.itemId) && Number(props.itemId) <= 2147483647 ? props.itemId : '')
const itemBase = computed(() => `${props.catalogueUrl.replace(/\/$/, '')}/items/${itemId.value}`)
const returnContext = computed(() => detailsReturnContext(props.catalogueUrl, window.location.href))
const workflowOptions = [
  { value: '', label: t('library', 'No reading status') },
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
  publicationType: t('library', 'Type'), title: t('library', 'Title'), subtitle: t('library', 'Subtitle'), creators: t('library', 'Creator credit in file'),
  series: t('library', 'Series'), seriesNumber: t('library', 'Part in series'), genre: t('library', 'Genre'), publication: t('library', 'Publication / periodical'),
  publicationDate: t('library', 'Publication date'), language: t('library', 'Language'), publisher: t('library', 'Publisher'),
  description: t('library', 'Description'), subjects: t('library', 'Subjects'), classifications: t('library', 'Classifications'),
}
const rejectedFields = computed(() => {
  try {
    const value = JSON.parse(item.value?.fieldValues?.rejectedFields || '[]')
    return Array.isArray(value) ? value : []
  } catch { return [] }
})
function reviewList(value) {
  if (Array.isArray(value)) return value
  if (typeof value !== 'string') return []
  try {
    const parsed = JSON.parse(value)
    if (Array.isArray(parsed)) return parsed
  } catch { /* Older provenance can contain a scalar list. */ }
  return value.split(/[;\n]+/)
}
function reviewValue(field, value) {
  if (field === 'subjects' || field === 'classifications') {
    return [...new Set(reviewList(value).map(entry => String(entry).trim().toLocaleLowerCase()).filter(Boolean))].sort().join('\u0000')
  }
  return String(value ?? '').trim()
}
const provenance = computed(() => Object.entries(fieldNames).map(([field, label]) => {
  const current = item.value?.[field]
  const values = item.value?.fieldValues || {}
  const rawCandidate = values[field]
  const isList = field === 'subjects' || field === 'classifications'
  const original = values[`${field}Original`]
  let sourceOriginal = ''
  if (typeof original === 'string') {
    try { sourceOriginal = JSON.stringify(JSON.parse(original)) } catch { sourceOriginal = original }
  }
  return {
    field, label, current: Array.isArray(current) ? current.join('; ') : String(current ?? ''),
    candidate: isList ? reviewList(rawCandidate).join('; ') : String(rawCandidate ?? ''),
    hasCandidate: Object.hasOwn(values, field), changed: reviewValue(field, rawCandidate) !== reviewValue(field, current),
    sourceOriginal, source: item.value?.fieldSources?.[field] || item.value?.metadataSource || '',
    rejected: rejectedFields.value.includes(field),
  }
}))
const differences = computed(() => provenance.value.filter(row => row.hasCandidate && row.changed))
const metadataStatus = computed(() => context.value?.metadataStatus)
const confidenceLabels = {
  'user-edited': t('library', 'User edited'), mixed: t('library', 'Mixed sources'),
  inferred: t('library', 'Filename/path inferred'), extracted: t('library', 'Extracted'),
}
const attentionLabels = {
  'file-status': t('library', 'File status needs attention'), 'scan-error': t('library', 'Metadata extraction problem'),
  suggestions: t('library', 'Suggested updates available'), 'identifier-problems': t('library', 'Invalid identifier checksum'),
}
const statusAttention = computed(() => {
  const entries = (metadataStatus.value?.attention || []).filter(key => key !== 'suggestions')
  if (differences.value.length) entries.push('suggestions')
  return entries.map(key => attentionLabels[key]).filter(Boolean).join(' · ') || t('library', 'No current problems')
})
const completenessPercent = computed(() => {
  const value = metadataStatus.value?.completeness
  return value?.total ? Math.round(value.complete / value.total * 100) : 100
})
let redirectFeedbackPending = true
function applyRedirectFeedback() {
  if (!redirectFeedbackPending) return
  redirectFeedbackPending = false
  const query = new URLSearchParams(window.location.search)
  coverRefreshRequested.value = query.get('coverRefresh') === '1'
  if (query.get('metadataSaved') === '1') feedback.value = t('library', 'Saved')
  const metadataError = query.get('metadataError')
  if (metadataError) error.value = t('library', 'Metadata was not saved: %s', [metadataError.slice(0, 4096)])
  const coverError = query.get('coverUploadError')
  if (coverError === 'invalid') error.value = t('library', 'Cover was not saved. Choose a valid JPEG, PNG, or WebP within the upload limits.')
  if (coverError === 'remote-url-disabled') error.value = t('library', 'Cover was not saved. Upload a JPEG, PNG, or WebP image.')
  const tag = (query.get('tagName') || t('library', 'tag')).slice(0, 4096)
  switch (query.get('tagResult')) {
    case 'added': case 'created': feedback.value = t('library', 'Tag added: %s', [tag]); break
    case 'already-assigned': feedback.value = t('library', 'Tag already assigned: %s', [tag]); break
    case 'empty': feedback.value = t('library', 'Empty tag ignored.'); break
    case 'not-assignable': error.value = t('library', 'Tag is not assignable: %s', [tag]); break
    case 'item-not-found': error.value = t('library', 'Publication not found for tag update.'); break
  }
}


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
  authorLookupError.value = ''; authorLookupCompleted.value = false
  authorResults.value = []
  authorHasNext.value = false
  authorSuggestionsOpen.value = false
  authorSearchBusy.value = false
}
function editAuthor(author) {
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  editingAuthor.value = author
  authorSearch.value = ''
  authorLookupError.value = ''; authorLookupCompleted.value = false
  authorResults.value = []
  authorSuggestionsOpen.value = false
  nextTick(() => authorInput.value?.focus())
}
watch(authorSearch, value => {
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  authorSearchRequest++
  authorLookupError.value = ''; authorLookupCompleted.value = false
  authorResults.value = []
  authorHasNext.value = false
  authorActiveIndex.value = -1
  if (!editingAuthor.value || !authorSearchReady.value) {
    authorSuggestionsOpen.value = false
    authorSearchBusy.value = false
    return
  }
  authorSuggestionsOpen.value = true
  authorSearchBusy.value = true
  authorSearchTimer = setTimeout(() => findAuthors(value.trim()), 220)
})
async function findAuthors(search = authorSearch.value.trim()) {
  if ((search.match(/\p{L}/gu) || []).length < 3) return
  const request = ++authorSearchRequest
  authorSearchController?.abort()
  const controller = new AbortController()
  authorSearchController = controller
  authorSearchBusy.value = true
  authorLookupError.value = ''; authorLookupCompleted.value = false
  try {
    const result = await authorRequest(`?search=${encodeURIComponent(search)}`, null, controller.signal)
    if (request !== authorSearchRequest || !editingAuthor.value) return
    authorResults.value = result.authors.filter(author => Number(author.id) !== Number(editingAuthor.value?.id))
    authorActiveIndex.value = authorResults.value.length ? 0 : -1
    authorHasNext.value = result.hasNext === true
    authorLookupCompleted.value = true
  } catch (cause) {
    if (cause.name !== 'AbortError' && request === authorSearchRequest) authorLookupError.value = cause.message
  } finally {
    if (request === authorSearchRequest) authorSearchBusy.value = false
  }
}
function selectAuthor(candidate) {
  if (!editingAuthor.value || busy.value) return
  const position = draft.authorLinks.findIndex(author => Number(author.id) === Number(editingAuthor.value.id))
  if (draft.authorLinks.some((author, index) => index !== position && Number(author.id) === Number(candidate.id))) return
  if (position < 0 && Number(editingAuthor.value.id) === 0) draft.authorLinks.push({ id: Number(candidate.id), name: candidate.display_name })
  else if (position >= 0) draft.authorLinks.splice(position, 1, { id: Number(candidate.id), name: candidate.display_name })
  else return
  cancelAuthorEdit()
}
function authorPickerKeydown(event) {
  if (event.key === 'Escape') { authorSuggestionsOpen.value = false; return }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    if (!authorSearchReady.value) return
    event.preventDefault()
    authorSuggestionsOpen.value = true
    if (!authorResults.value.length) return
    authorActiveIndex.value = pickerIndex(authorActiveIndex.value, event.key, authorResults.value.length)
  } else if (event.key === 'Enter' && authorSuggestionsOpen.value && authorResults.value.length) {
    event.preventDefault()
    selectAuthor(authorResults.value[Math.max(0, authorActiveIndex.value)])
  }
}
async function createAuthor() {
  const name = authorSearch.value.trim()
  if (!name || !authorLookupCompleted.value || authorLookupError.value || authorSearchBusy.value || busy.value) return
  clearTimeout(authorSearchTimer)
  authorSearchController?.abort()
  authorSearchRequest++
  authorSearchBusy.value = true
  error.value = ''
  try {
    const author = await authorRequest('', { name })
    selectAuthor(author)
  } catch (cause) { error.value = cause.message }
  finally { authorSearchBusy.value = false }
}

const seriesApi = generateUrl('/apps/library/api/series')
async function seriesRequest(path, body = null, signal = null) {
  const response = await fetch(seriesApi + path, {
    credentials: 'same-origin', cache: 'no-store', ...(signal ? { signal } : {}),
    method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 409
    ? t('library', 'The series assignment changed. Reload this publication and try again.')
    : t('library', 'The series change could not be saved.'))
  return response.json()
}
function cancelSeriesEdit() {
  clearTimeout(seriesSearchTimer)
  seriesSearchController?.abort()
  seriesSearchRequest++
  editingSeries.value = false
  seriesSearch.value = ''
  seriesLookupError.value = ''; seriesLookupCompleted.value = false
  seriesResults.value = []
  seriesHasNext.value = false
  seriesSuggestionsOpen.value = false
  seriesSearchBusy.value = false
}
function editSeries() {
  editingSeries.value = true
  seriesSearch.value = ''
  seriesLookupError.value = ''; seriesLookupCompleted.value = false
  seriesResults.value = []
  seriesSuggestionsOpen.value = false
  nextTick(() => seriesInput.value?.focus())
}
function removeSeries() {
  draft.seriesLink = null
  draft.seriesPart = ''
}
watch(seriesSearch, value => {
  clearTimeout(seriesSearchTimer)
  seriesSearchController?.abort()
  seriesSearchRequest++
  seriesLookupError.value = ''; seriesLookupCompleted.value = false
  seriesResults.value = []
  seriesHasNext.value = false
  seriesActiveIndex.value = -1
  if (!editingSeries.value || !seriesSearchReady.value) {
    seriesSuggestionsOpen.value = false
    seriesSearchBusy.value = false
    return
  }
  seriesSuggestionsOpen.value = true
  seriesSearchBusy.value = true
  seriesSearchTimer = setTimeout(() => findSeries(value.trim()), 220)
})
async function findSeries(search = seriesSearch.value.trim()) {
  if ((search.match(/\p{L}/gu) || []).length < 3) return
  const request = ++seriesSearchRequest
  seriesSearchController?.abort()
  const controller = new AbortController()
  seriesSearchController = controller
  seriesSearchBusy.value = true
  seriesLookupError.value = ''; seriesLookupCompleted.value = false
  try {
    const result = await seriesRequest(`?search=${encodeURIComponent(search)}`, null, controller.signal)
    if (request !== seriesSearchRequest || !editingSeries.value) return
    const currentId = Number(draft.seriesLink?.id || 0)
    seriesResults.value = result.series.filter(candidate => Number(candidate.id) !== currentId)
    seriesActiveIndex.value = seriesResults.value.length ? 0 : -1
    seriesHasNext.value = result.hasNext === true
    seriesLookupCompleted.value = true
  } catch (cause) {
    if (cause.name !== 'AbortError' && request === seriesSearchRequest) seriesLookupError.value = cause.message
  } finally {
    if (request === seriesSearchRequest) seriesSearchBusy.value = false
  }
}
function selectSeries(candidate) {
  if (!editingSeries.value || busy.value) return
  draft.seriesLink = { id: Number(candidate.id), name: candidate.display_name }
  cancelSeriesEdit()
}
function seriesPickerKeydown(event) {
  if (event.key === 'Escape') { seriesSuggestionsOpen.value = false; return }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    if (!seriesSearchReady.value) return
    event.preventDefault()
    seriesSuggestionsOpen.value = true
    if (!seriesResults.value.length) return
    seriesActiveIndex.value = pickerIndex(seriesActiveIndex.value, event.key, seriesResults.value.length)
  } else if (event.key === 'Enter' && seriesSuggestionsOpen.value && seriesResults.value.length) {
    event.preventDefault()
    selectSeries(seriesResults.value[Math.max(0, seriesActiveIndex.value)])
  }
}
async function createSeries() {
  const name = seriesSearch.value.trim()
  if (!name || !seriesLookupCompleted.value || seriesLookupError.value || seriesSearchBusy.value || busy.value) return
  clearTimeout(seriesSearchTimer)
  seriesSearchController?.abort()
  seriesSearchRequest++
  seriesSearchBusy.value = true
  error.value = ''
  try {
    const created = await seriesRequest('', { name })
    selectSeries(created.series)
  } catch (cause) { error.value = cause.message }
  finally { seriesSearchBusy.value = false }
}

function setDraft(source) {
  for (const key of ['publicationType', 'title', 'subtitle', 'publication', 'publicationDate', 'publisher', 'description']) draft[key] = source[key] || ''
  draft.authorLinks = (source.canonicalAuthors || []).map(author => ({ id: Number(author.id), name: author.name }))
  draft.seriesLink = source.canonicalSeries?.[0] ? { id: Number(source.canonicalSeries[0].id), name: source.canonicalSeries[0].name } : null
  draft.seriesPart = String(source.canonicalSeries?.[0]?.part || '')
  draft.genres = (source.canonicalGenres || []).map(genre => ({ id: Number(genre.id), name: genre.name }))
  draft.language = languageText(source.language)
  draft.subjects = listText(source.subjects)
  draft.classifications = listText(source.classifications)
  draft.personalRating = source.personalRating ?? ''
  draft.identifiers = Array.isArray(source.identifiers) ? source.identifiers.map(row => ({ scheme: row.scheme, displayValue: row.displayValue || '', valid: row.valid, originalScheme: row.scheme, originalDisplayValue: row.displayValue || '' })) : []
  savedDraft.value = JSON.stringify(draft)
}

function discardBookChanges() {
  if (busy.value || !item.value) return
  cancelAuthorEdit()
  cancelSeriesEdit()
  setDraft(item.value)
  error.value = ''
  feedback.value = t('library', 'Book changes discarded')
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
    applyRedirectFeedback()
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
  body.set('simpleEditor', '1')
  body.set('editorLinks', JSON.stringify({
    beforeAuthors: (item.value.canonicalAuthors || []).map(author => Number(author.id)),
    authors: draft.authorLinks.map(author => Number(author.id)),
    beforeSeries: item.value.canonicalSeries?.[0] ? Number(item.value.canonicalSeries[0].id) : null,
    series: draft.seriesLink ? Number(draft.seriesLink.id) : null,
    beforePart: String(item.value.canonicalSeries?.[0]?.part || ''),
    part: draft.seriesPart,
    beforeGenres: (item.value.canonicalGenres || []).map(genre => Number(genre.id)),
    genres: draft.genres.map(genre => Number(genre.id)),
  }))
  const original = JSON.parse(savedDraft.value || '{}')
  for (const key of ['publicationType', 'title', 'subtitle', 'publication', 'publicationDate', 'publisher', 'description', 'personalRating']) {
    if (draft[key] !== original[key]) body.set(key, String(draft[key] ?? ''))
  }
  for (const key of ['language', 'subjects', 'classifications']) {
    if (draft[key] === original[key]) continue
    const entries = lines(draft[key])
    if (entries.length === 0) body.set(key, '')
    else entries.forEach(entry => body.append(`${key}[]`, entry))
  }
  const identifierValues = rows => (rows || []).map(row => [row.scheme, row.displayValue])
  if (JSON.stringify(identifierValues(draft.identifiers)) !== JSON.stringify(identifierValues(original.identifiers))) {
    body.set('identifiersPresent', '1')
    draft.identifiers.forEach((identifier, index) => {
      body.set(`identifiers[${index}][scheme]`, identifier.scheme)
      body.set(`identifiers[${index}][displayValue]`, identifier.displayValue)
    })
  }
  busy.value = true
  error.value = ''
  feedback.value = ''
  try {
    const response = await fetch(item.value.updateUrl, { method: 'POST', body, credentials: 'same-origin' })
    const result = await response.json()
    if (!response.ok || !result.saved) throw new Error(result.error || t('library', 'Metadata was not saved.'))
    if (!await load({ silent: true })) throw new Error(t('library', 'Metadata was saved, but details could not be reloaded.'))
    feedback.value = t('library', 'Book details saved')
  } catch (cause) { error.value = cause.message || t('library', 'Metadata was not saved.') }
  finally { busy.value = false }
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
function bookDeleted(result) {
  savedDraft.value = JSON.stringify(draft)
  try { sessionStorage.setItem('library-deletion-result', JSON.stringify(result)) } catch { /* Navigation still succeeds without storage. */ }
  window.location.assign(returnContext.value.url)
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
onBeforeUnmount(() => { window.removeEventListener('beforeunload', warnUnsaved); clearTimeout(authorSearchTimer); authorSearchController?.abort(); clearTimeout(seriesSearchTimer); seriesSearchController?.abort() })
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
        <div class="library-full-details-summary"><p class="library-muted">{{ item.publicationType || t('library', 'Publication / periodical') }} · {{ (item.extension || '').toUpperCase() }}</p><h1><bdi dir="auto">{{ item.title || t('library', 'Untitled publication') }}</bdi></h1><p v-if="!item.canonicalAuthors?.length"><bdi dir="auto">{{ item.creators }}</bdi></p><p v-if="item.canonicalAuthors?.length" class="library-full-details-links"><a v-for="author in item.canonicalAuthors" :key="author.id" :href="`${catalogueUrl}?authors=1&authorId=${author.id}`">{{ author.name }}</a></p><p v-if="item.canonicalSeries?.length" class="library-full-details-links"><a v-for="series in item.canonicalSeries" :key="series.id" :href="`${catalogueUrl}?series=1&seriesId=${series.id}`">{{ series.name }}<span v-if="series.part"> · {{ series.part }}</span></a></p><div class="library-full-details-actions"><a class="button primary" :href="item.openUrl" target="_blank" rel="noopener" @click="recordOpen">{{ t('library', 'Open') }}</a><a class="button secondary" :href="item.filesUrl">{{ t('library', 'Show in Files') }}</a><a class="button secondary" :href="item.downloadUrl">{{ t('library', 'Download source') }}</a><DeleteBook v-if="item.scanStatus !== 'missing'" :url="`${itemBase}/deletion`" :request-token="requestToken" :disabled="busy" @deleted="bookDeleted" /></div><div class="library-full-details-personal"><button type="button" class="button secondary" :aria-pressed="!!item.starred" :disabled="busy" @click="post(context.actions.star, { starred: item.starred ? '0' : '1' })">{{ item.starred ? '★' : '☆' }} {{ t('library', 'Favorite') }}</button><label>{{ t('library', 'Reading status') }} <select :value="item.workflowStatus || ''" :disabled="busy" @change="post(context.actions.workflowStatus, { workflowStatus: $event.target.value })"><option v-for="status in workflowOptions" :key="status.value" :value="status.value">{{ status.label }}</option></select></label></div><AddToList :item-ids="[Number(itemId)]" :request-token="requestToken" :lists-url="`${catalogueUrl}?lists=1`" /></div>
      </header>

      <div v-if="dirty" class="library-full-details-savebar" role="group" :aria-label="t('library', 'Book changes')">
        <span role="status">{{ t('library', 'Unsaved book changes') }}</span>
        <div class="library-full-details-savebar-actions">
          <button type="button" class="button secondary" :disabled="busy" @click="discardBookChanges">{{ t('library', 'Discard changes') }}</button>
          <button type="submit" form="library-full-details-metadata-form" class="button primary" :disabled="busy">{{ busy ? t('library', 'Saving…') : t('library', 'Save book details') }}</button>
        </div>
      </div>

      <div class="library-full-details-columns">
        <div class="library-full-details-main">
          <section class="library-full-details-card" aria-labelledby="library-full-details-metadata"><h2 id="library-full-details-metadata">{{ t('library', 'Book details') }}</h2><form id="library-full-details-metadata-form" @submit.prevent="saveMetadata"><div class="library-full-details-fields"><label>{{ t('library', 'Title') }}<input v-model="draft.title" required></label><label>{{ t('library', 'Subtitle') }}<input v-model="draft.subtitle"></label><label>{{ t('library', 'Type') }}<select v-model="draft.publicationType"><option v-for="type in publicationTypes" :key="type.value" :value="type.value">{{ type.label }}</option></select></label><label>{{ t('library', 'Publication / periodical') }}<input v-model="draft.publication"></label><label :title="t('library', 'Use YYYY, YYYY-MM, or YYYY-MM-DD.')">{{ t('library', 'Publication date') }}<input v-model="draft.publicationDate"></label><EntityPicker v-model="draft.publisher" :label="t('library', 'Publisher')" :search="searchPublishers" :disabled="busy" @choose="draft.publisher = $event.label" /><MetadataValuePicker v-model="draft.language" kind="language" :disabled="busy" /><MetadataValuePicker v-model="draft.subjects" kind="subject" :disabled="busy" /><label :title="t('library', 'One classification per line.')">{{ t('library', 'Classifications') }}<textarea v-model="draft.classifications" rows="2"></textarea></label><StarRating :model-value="draft.personalRating" :disabled="busy" @update:model-value="draft.personalRating = $event" /><label class="library-full-details-wide">{{ t('library', 'Description') }}<textarea v-model="draft.description" rows="8"></textarea></label></div><fieldset><legend>{{ t('library', 'Identifiers') }}</legend><div v-for="(identifier, index) in draft.identifiers" :key="index" class="library-full-details-identifier"><select v-model="identifier.scheme" :aria-label="t('library', 'Scheme')"><option value="isbn">{{ t('library', 'ISBN') }}</option><option value="issn">{{ t('library', 'ISSN') }}</option></select><input v-model="identifier.displayValue" :aria-label="t('library', 'Identifier value')"><span v-if="identifier.displayValue && identifier.valid === false && identifier.scheme === identifier.originalScheme && identifier.displayValue === identifier.originalDisplayValue" role="status">{{ t('library', 'Invalid identifier checksum') }}</span><button type="button" class="button secondary" :aria-label="t('library', 'Remove identifier')" @click="draft.identifiers.splice(index, 1)">×</button></div><button type="button" class="button secondary" @click="draft.identifiers.push({ scheme: 'isbn', displayValue: '' })">{{ t('library', 'Add identifier') }}</button></fieldset></form></section>
          <div class="library-full-details-card library-identity-panel">
          <section class="library-identity-row" aria-labelledby="library-full-details-authors-heading">
            <h2 id="library-full-details-authors-heading">{{ t('library', 'Authors') }}</h2>
            <div class="library-identity-content">
            <div class="library-identity-values">
            <template v-if="draft.authorLinks?.length">
              <div v-for="author in draft.authorLinks" :key="author.id" class="library-full-details-author-row">
                <a :href="`${catalogueUrl}?authors=1&authorId=${author.id}`"><bdi dir="auto">{{ author.name }}</bdi></a>
                <span class="library-identity-controls"><IdentityAction v-if="item.authorSyncStatus === 0" icon="edit" :disabled="busy" :label="`${t('library', 'Change author')}: ${author.name}`" @click="editAuthor(author)" /><IdentityAction v-if="item.authorSyncStatus === 0" :disabled="busy" :label="`${t('library', 'Remove author')}: ${author.name}`" @click="draft.authorLinks = draft.authorLinks.filter(entry => entry.id !== author.id)" /></span>
              </div>
              <p v-if="item.authorSyncStatus === 2"><a :href="`${catalogueUrl}?authors=1&authorConflicts=1`">{{ t('library', 'Review imported author changes') }}</a></p>
              <p v-else-if="item.authorSyncStatus !== 0" class="library-muted">{{ t('library', 'Author migration must finish before editing. Refresh to check progress.') }}</p>
            </template>
            <p v-else class="library-muted">{{ t('library', 'No authors assigned yet.') }}</p>
            <button v-if="item.authorSyncStatus === 0 && !editingAuthor" type="button" class="button secondary" :disabled="busy" @click="editAuthor({ id: 0, name: '' })">{{ t('library', 'Add author') }}</button>
            </div>
              <div v-if="editingAuthor" class="library-full-details-author-picker">
                <p v-if="editingAuthor.id">{{ t('library', 'Replace {author} for this publication', { author: editingAuthor.name }) }}</p>
                <div class="library-full-details-author-search">
                  <label for="library-details-author-search" :title="t('library', 'Type at least 3 letters to search authors.')">{{ t('library', 'Choose an author') }}</label>
                  <input id="library-details-author-search" ref="authorInput" v-model="authorSearch" type="search" maxlength="255" autocomplete="off" role="combobox" aria-autocomplete="list" aria-controls="library-details-author-suggestions" :aria-expanded="authorSuggestionsOpen && authorResults.length > 0 ? 'true' : 'false'" :aria-activedescendant="authorActiveIndex >= 0 && authorSuggestionsOpen ? `library-details-author-option-${authorResults[authorActiveIndex]?.id}` : undefined" :placeholder="t('library', 'Search authors')" :disabled="busy" @focus="authorSuggestionsOpen = authorSearchReady" @keydown="authorPickerKeydown">
                  <p v-if="authorLookupError" role="alert">{{ authorLookupError }} <button type="button" :disabled="authorSearchBusy" @click="findAuthors()">{{ t('library', 'Retry') }}</button></p>
                  <span v-if="authorSearchBusy" class="library-muted" role="status">{{ t('library', 'Searching…') }}</span>
                  <ul v-if="authorSuggestionsOpen && authorResults.length" id="library-details-author-suggestions" class="library-full-details-author-suggestions" role="listbox">
                    <li v-for="(candidate, index) in authorResults" :id="`library-details-author-option-${candidate.id}`" :key="candidate.id" role="option" :aria-selected="authorActiveIndex === index"><button type="button" :class="{ 'is-active': authorActiveIndex === index }" @mousedown.prevent @click="selectAuthor(candidate)"><strong>{{ candidate.display_name }}</strong><small>{{ candidate.sort_name }} · {{ n('library', '%n book', '%n books', Number(candidate.book_count || 0)) }}</small></button></li>
                  </ul>
                  <p v-if="authorSuggestionsOpen && authorHasNext" class="library-muted">{{ t('library', 'More matches. Keep typing to narrow the list.') }}</p>
                  <p v-if="authorSuggestionsOpen && authorLookupCompleted && !authorLookupError && !authorSearchBusy && !authorResults.length" class="library-muted">{{ t('library', 'No matching author. You can create a separate author below.') }}</p>
                </div>
                <div class="library-full-details-author-actions">
                  <button v-if="authorSearch.trim() && authorLookupCompleted && !authorLookupError" type="button" class="button secondary" :disabled="busy || authorSearchBusy" :title="t('library', 'Creates a separate author identity, even if the name already exists.')" @click="createAuthor">{{ t('library', 'Create and add author') }}</button>
                  <button type="button" class="button secondary" :disabled="busy" @click="cancelAuthorEdit">{{ t('library', 'Cancel') }}</button>
                </div>
              </div>
            </div>
          </section>
          <section class="library-identity-row" aria-labelledby="library-full-details-series-heading">
            <h2 id="library-full-details-series-heading">{{ t('library', 'Series') }}</h2>
            <div class="library-identity-content">
            <div class="library-identity-values">
              <div v-if="draft.seriesLink" class="library-identity-series">
                <a :href="`${catalogueUrl}?series=1&seriesId=${draft.seriesLink.id}`"><bdi dir="auto">{{ draft.seriesLink.name }}</bdi></a>
                <span v-if="item.seriesSyncStatus === 0" class="library-identity-controls"><IdentityAction v-if="!editingSeries" icon="edit" :disabled="busy" :label="t('library', 'Change series')" @click="editSeries" /><IdentityAction :disabled="busy" :label="t('library', 'Remove series')" @click="removeSeries" /></span>
              </div>
              <button v-else-if="item.seriesSyncStatus === 0 && !editingSeries" type="button" class="button secondary" :disabled="busy" @click="editSeries">{{ t('library', 'Choose series') }}</button>
              <label v-if="draft.seriesLink && item.seriesSyncStatus === 0" class="library-full-details-series-part">{{ t('library', 'Part in series') }}<input v-model="draft.seriesPart" maxlength="64"></label>
            </div>
            <p v-if="item.seriesSyncStatus === 3"><a :href="`${catalogueUrl}?series=1&seriesConflicts=1`">{{ t('library', 'Review imported series changes') }}</a></p>
            <p v-else-if="item.seriesSyncStatus !== 0" class="library-muted">{{ t('library', 'Series migration must finish before editing. Refresh to check progress.') }}</p>
            <div v-if="editingSeries" class="library-full-details-author-picker">
              <div class="library-full-details-author-search">
                <label for="library-details-series-search" :title="t('library', 'Type at least 3 letters to search series.')">{{ t('library', 'Choose a series') }}</label>
                <input id="library-details-series-search" ref="seriesInput" v-model="seriesSearch" type="search" maxlength="255" autocomplete="off" role="combobox" aria-autocomplete="list" aria-controls="library-details-series-suggestions" :aria-expanded="seriesSuggestionsOpen && seriesResults.length > 0 ? 'true' : 'false'" :aria-activedescendant="seriesActiveIndex >= 0 && seriesSuggestionsOpen ? `library-details-series-option-${seriesResults[seriesActiveIndex]?.id}` : undefined" :placeholder="t('library', 'Search series')" :disabled="busy" @focus="seriesSuggestionsOpen = seriesSearchReady" @keydown="seriesPickerKeydown">
                <p v-if="seriesLookupError" role="alert">{{ seriesLookupError }} <button type="button" :disabled="seriesSearchBusy" @click="findSeries()">{{ t('library', 'Retry') }}</button></p>
                  <span v-if="seriesSearchBusy" class="library-muted" role="status">{{ t('library', 'Searching…') }}</span>
                <ul v-if="seriesSuggestionsOpen && seriesResults.length" id="library-details-series-suggestions" class="library-full-details-author-suggestions" role="listbox">
                  <li v-for="(candidate, index) in seriesResults" :id="`library-details-series-option-${candidate.id}`" :key="candidate.id" role="option" :aria-selected="seriesActiveIndex === index"><button type="button" :class="{ 'is-active': seriesActiveIndex === index }" @mousedown.prevent @click="selectSeries(candidate)"><strong>{{ candidate.display_name }}</strong><small>{{ n('library', '%n book', '%n books', Number(candidate.book_count || 0)) }}</small></button></li>
                </ul>
                <p v-if="seriesSuggestionsOpen && seriesHasNext" class="library-muted">{{ t('library', 'More matches. Keep typing to narrow the list.') }}</p>
                <p v-if="seriesSuggestionsOpen && seriesLookupCompleted && !seriesLookupError && !seriesSearchBusy && !seriesResults.length" class="library-muted">{{ currentSeriesMatchesSearch ? t('library', 'The matching series is already assigned to this book. Search another name to change it.') : t('library', 'No matching series. You can create one below.') }}</p>
              </div>
              <div class="library-full-details-author-actions">
                <button v-if="seriesSearch.trim() && seriesLookupCompleted && !seriesLookupError" type="button" class="button secondary" :disabled="busy || seriesSearchBusy" @click="createSeries">{{ t('library', 'Create and choose series') }}</button>
                <button type="button" class="button secondary" :disabled="busy" @click="cancelSeriesEdit">{{ t('library', 'Cancel') }}</button>
              </div>
            </div>
            </div>
          </section>
          <GenrePicker class="library-full-details-genres" :item-id="Number(itemId)" :genres="draft.genres || []" :request-token="requestToken" :catalogue-url="catalogueUrl" :disabled="busy" draft-mode @update:genres="draft.genres = $event" />
          </div>
        </div>

        <div class="library-full-details-aside">

          <section class="library-full-details-card"><h2>{{ t('library', 'Nextcloud tags') }}</h2><div class="library-full-details-chips"><span v-for="tag in context.tags" :key="tag.id" class="library-full-details-chip"><bdi dir="auto">{{ tag.name }}</bdi><button type="button" :disabled="busy" :aria-label="`${t('library', 'Remove tag')}: ${tag.name}`" @click="post(tag.removeUrl)">×</button></span></div><form @submit.prevent="addTag()"><label>{{ t('library', 'Add Nextcloud tag') }}<input v-model="tagName" list="library-full-details-tag-suggestions"></label><datalist id="library-full-details-tag-suggestions"><option v-for="name in context.tagSuggestions" :key="name" :value="name"></option></datalist><button type="submit" class="button secondary" :disabled="busy || !tagName.trim()">{{ t('library', 'Add tag') }}</button></form></section>
          <section class="library-full-details-card"><h2>{{ t('library', 'Nextcloud comments') }}</h2><p class="library-muted">{{ n('library', '%n comment', '%n comments', context.comments.count || 0) }}</p><ul v-if="context.comments.recent?.length" class="library-full-details-comments"><li v-for="comment in context.comments.recent" :key="comment.id"><small>{{ comment.actorId }} · {{ comment.createdAt }}</small><p>{{ comment.message }}</p></li></ul><form @submit.prevent="addComment"><label>{{ t('library', 'Add Nextcloud comment') }}<textarea v-model="commentMessage" rows="3"></textarea></label><button type="submit" class="button secondary" :disabled="busy || !commentMessage.trim()">{{ t('library', 'Add comment') }}</button></form></section>
        </div>
      </div>
      <details v-if="metadataStatus" class="library-full-details-card library-full-details-status">
        <summary>{{ t('library', 'Metadata status') }}</summary>
        <dl class="library-full-details-source-values">
          <dt>{{ t('library', 'Completeness') }}</dt>
          <dd>{{ completenessPercent }}% · {{ metadataStatus.completeness.complete }}/{{ metadataStatus.completeness.total }}
            <span v-if="metadataStatus.completeness.missing.length" class="library-status-missing">{{ t('library', 'Missing details') }} {{ metadataStatus.completeness.missing.map(field => field === 'creators' ? t('library', 'Authors') : fieldNames[field] || field).join(', ') }}</span>
          </dd>
          <dt>{{ t('library', 'Confidence') }}</dt><dd>{{ confidenceLabels[metadataStatus.confidence] || '—' }}</dd>
          <dt>{{ t('library', 'Attention') }}</dt><dd>{{ statusAttention }}</dd>
          <dt>{{ t('library', 'Personal') }}</dt><dd>{{ t('library', 'Favorite') }}: {{ metadataStatus.personal.starred ? t('library', 'Yes') : t('library', 'No') }} · {{ metadataStatus.personal.rating ? `${metadataStatus.personal.rating}/5` : t('library', 'Not rated') }} · {{ workflowOptions.find(option => option.value === metadataStatus.personal.workflow)?.label || t('library', 'No reading status') }}</dd>
        </dl>
      </details>
      <details class="library-full-details-card library-full-details-provenance"><summary>{{ t('library', 'Imported metadata and scan suggestions') }}</summary><dl class="library-full-details-source-values"><dt>{{ t('library', 'Creator credit in file') }}</dt><dd>{{ item.creators || '—' }}</dd><dt>{{ t('library', 'Series in file') }}</dt><dd>{{ item.series || '—' }}<span v-if="item.seriesNumber"> · {{ item.seriesNumber }}</span></dd><dt>{{ t('library', 'Genre in file') }}</dt><dd>{{ item.genre || '—' }}</dd></dl><p class="library-muted">{{ t('library', 'Scanner suggestions never replace your edits automatically.') }}</p><div v-if="differences.length" class="library-full-details-differences"><article v-for="row in differences" :key="row.field"><h3>{{ row.label }}</h3><p>{{ t('library', 'Current') }}: <bdi dir="auto">{{ row.current || '—' }}</bdi></p><p>{{ t('library', 'Scanner candidate') }}: <bdi dir="auto">{{ row.candidate || '—' }}</bdi></p><button type="button" class="button secondary" :disabled="busy || row.rejected" :title="row.rejected ? t('library', 'This source value exceeds field limits. Edit the field instead.') : ''" @click="post(context.actions.resetField, { field: row.field })">{{ t('library', 'Reset to scanner') }}</button></article></div><p v-else>{{ t('library', 'No scanner differences for this item.') }}</p><details><summary>{{ t('library', 'Show all scanner provenance') }}</summary><div class="library-full-details-differences"><article v-for="row in provenance" :key="row.field"><h3>{{ row.label }}</h3><p>{{ t('library', 'Scanner source') }}: {{ row.source || '—' }}</p><p>{{ t('library', 'Current') }}: <bdi dir="auto">{{ row.current || '—' }}</bdi></p><p>{{ t('library', 'Scanner candidate') }}: <bdi dir="auto">{{ row.candidate || '—' }}</bdi></p><p v-if="row.sourceOriginal">{{ t('library', 'Original source value') }}: <bdi dir="auto">{{ row.sourceOriginal }}</bdi></p></article></div></details><button v-if="differences.length" type="button" class="button secondary" :disabled="busy || rejectedFields.length > 0" :title="rejectedFields.length ? t('library', 'This source value exceeds field limits. Edit the field instead.') : ''" @click="post(context.actions.resetFields)">{{ t('library', 'Reset all fields to scanner') }}</button></details>
      <details class="library-full-details-card library-full-details-file"><summary>{{ t('library', 'File metadata') }}</summary><dl class="library-full-details-source-values"><dt>{{ t('library', 'Location') }}</dt><dd><a v-if="item.filesUrl" :href="item.filesUrl" :title="t('library', 'Show in Files')"><bdi dir="ltr">{{ item.cachedPath }}</bdi></a><bdi v-else dir="ltr">{{ item.cachedPath }}</bdi></dd><dt>{{ t('library', 'File size') }}</dt><dd :title="exactFileSize">{{ fileSize }}</dd><dt>{{ t('library', 'Format') }}</dt><dd>{{ (item.extension || '').toUpperCase() }}</dd><dt>{{ t('library', 'Scan status') }}</dt><dd>{{ item.scanStatus || '—' }}</dd><dt>{{ t('library', 'Metadata source') }}</dt><dd>{{ item.metadataSource || '—' }}</dd><dt v-if="item.scanError">{{ t('library', 'Scan error') }}</dt><dd v-if="item.scanError">{{ item.scanError }}</dd><dt>{{ t('library', 'File ID') }}</dt><dd>{{ context.file.fileId || '—' }}</dd><dt>{{ t('library', 'MIME type') }}</dt><dd>{{ context.file.mimeType || '—' }}</dd><dt v-if="item.shelf">{{ t('library', 'Shelf') }}</dt><dd v-if="item.shelf">{{ item.shelf }}</dd></dl><button v-if="item.scanStatus === 'missing'" type="button" class="button secondary" :disabled="busy" @click="forgetMissing">{{ t('library', 'Forget missing publication') }}</button></details>
    </template>
  </main>
</template>

<style scoped>
.library-full-details { box-sizing: border-box; container-type: inline-size; max-width: 1280px; margin: 0 auto; padding: 24px; }
.library-full-details-back { display: inline-block; margin-bottom: 20px; }
.library-full-details-error { color: var(--color-error-text, var(--color-error)); }
.library-full-details-feedback { color: var(--color-success-text, #176b35); }
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
.library-full-details-main { display: grid; gap: 20px; min-width: 0; }
.library-full-details-savebar { align-items: center; background: var(--color-main-background); border: 2px solid var(--color-primary-element, #0082c9); border-radius: 12px; box-shadow: 0 10px 28px #0003; display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; margin-bottom: 20px; padding: 12px 16px; position: sticky; top: 12px; z-index: 20; }
.library-full-details-savebar > span { font-weight: 600; }
.library-full-details-savebar-actions { display: flex; flex-wrap: wrap; gap: 8px; }
.library-full-details-card .library-full-details-series-part { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 0; }
.library-full-details-card .library-full-details-series-part input { width: 80px; }
.library-full-details-author-row, .library-full-details-author-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
.library-full-details-author-row { background: var(--color-background-dark); border-radius: 18px; gap: 2px; margin: 0; max-width: 100%; padding: 2px 4px 2px 10px; }
.library-full-details-author-row > a { min-width: 0; overflow-wrap: anywhere; flex: 1 1 auto; }
.library-full-details-author-picker { display: grid; gap: 8px; margin-top: 8px; min-width: 0; }
.library-full-details-author-search { min-width: 0; position: relative; }
.library-full-details-author-search > label { display: block; margin-bottom: 5px; }
.library-full-details-author-search > input { width: 100%; }
.library-full-details-author-suggestions { background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: 10px; box-shadow: 0 12px 32px #0003; inset-inline: 0; list-style: none; margin: 4px 0 0; max-height: 270px; overflow-y: auto; padding: 4px; position: absolute; top: 100%; z-index: 10; }
.library-full-details-author-suggestions li { margin: 0; }
.library-full-details-author-suggestions button { background: transparent; border: 0; border-radius: 7px; color: var(--color-main-text); cursor: pointer; display: grid; gap: 2px; padding: 8px 10px; text-align: start; width: 100%; }
.library-full-details-author-suggestions button:hover, .library-full-details-author-suggestions button.is-active { background: var(--color-background-hover); }
.library-full-details-author-suggestions small { color: var(--color-text-maxcontrast); }
.library-full-details-aside { display: grid; gap: 20px; min-width: 0; }
.library-full-details-card { border: 1px solid var(--color-border); border-radius: 12px; padding: 20px; min-width: 0; }
.library-full-details-card h2 { margin: 0 0 16px; }
.library-full-details-card form { display: grid; gap: 14px; }
.library-full-details-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.library-full-details-card label { display: grid; gap: 5px; min-width: 0; }
.library-full-details-card input, .library-full-details-card textarea, .library-full-details-card select { width: 100%; min-width: 0; box-sizing: border-box; }
.library-full-details-wide { grid-column: 1 / -1; }
.library-full-details-identifier { display: flex; align-items: center; gap: 8px; margin: 8px 0; }
.library-full-details-identifier select { max-width: 100px; }
.library-full-details-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 12px; }
.library-full-details-chip { display: inline-flex; gap: 5px; align-items: center; border-radius: 18px; padding: 3px 8px; background: var(--color-background-dark); }
.library-full-details-chip button { border: 0; background: transparent; cursor: pointer; }
.library-full-details-comments { list-style: none; padding: 0; }
.library-full-details-comments li { border-bottom: 1px solid var(--color-border); padding: 8px 0; overflow-wrap: anywhere; }
.library-full-details-status > summary, .library-full-details-provenance > summary, .library-full-details-file > summary { cursor: pointer; font-size: 1.2rem; font-weight: 600; }
.library-full-details-status, .library-full-details-provenance, .library-full-details-file { margin-top: 20px; }
.library-full-details-status > summary:focus-visible, .library-full-details-provenance > summary:focus-visible, .library-full-details-file > summary:focus-visible { outline: 2px solid var(--color-primary-element); outline-offset: 4px; border-radius: 3px; }
.library-full-details-source-values { display: grid; grid-template-columns: max-content minmax(0, 1fr); gap: 5px 12px; margin: 16px 0; }
.library-full-details-source-values dt, .library-full-details-source-values dd { float: none; width: auto; min-width: 0; padding: 0; margin: 0; text-align: start; }
.library-full-details-source-values dt { font-weight: 600; }
.library-full-details-source-values dd { margin: 0; overflow-wrap: anywhere; }
.library-full-details-differences { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; margin: 16px 0; }
.library-full-details-differences article { border: 1px solid var(--color-border); border-radius: 8px; padding: 12px; min-width: 0; overflow-wrap: anywhere; }
.library-full-details-differences h3 { margin: 0 0 8px; }
@container (max-width: 1100px) { .library-full-details-columns { grid-template-columns: minmax(0, 1fr); } }
@container (max-width: 760px) { .library-full-details-fields { grid-template-columns: minmax(0, 1fr); } }
.library-status-missing { display: block; }
.library-full-details-status dt { font-weight: 600; }
@container (max-width: 560px) { .library-full-details-file .library-full-details-source-values { grid-template-columns: minmax(0, 1fr); } .library-full-details-file .library-full-details-source-values dd { margin-bottom: 8px; } .library-full-details-savebar { align-items: stretch; flex-direction: column; } .library-full-details-savebar-actions > button { flex: 1 1 auto; } }
@media (max-width: 600px) { .library-full-details { padding: 16px; } .library-full-details-hero { grid-template-columns: 1fr; } .library-full-details-cover { max-width: 200px; } }
</style>

<style>
.library-full-details-card.library-identity-panel { padding: 0 16px; }
.library-identity-panel .library-identity-row { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 8px 16px; padding: 12px 0; min-width: 0; }
.library-identity-panel .library-identity-row + .library-identity-row { border-top: 1px solid var(--color-border); }
.library-identity-panel .library-identity-row > h2 { font-size: 16px; line-height: 24px; font-weight: 600; margin: 6px 0 0; }
.library-identity-panel .library-identity-content { min-width: 0; }
.library-identity-panel .library-identity-content p { margin: 6px 0; }
.library-identity-panel .library-identity-values { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 8px; min-width: 0; }
.library-identity-panel .library-identity-controls { display: inline-flex; flex: 0 0 auto; }
.library-identity-panel .library-identity-series { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 4px; max-width: 100%; }
.library-identity-panel .library-identity-series > a { min-width: 0; overflow-wrap: anywhere; }
.library-identity-panel .library-full-details-author-actions button { max-width: 100%; white-space: normal; }
.library-status-missing { display: block; }
.library-full-details-status dt { font-weight: 600; }
@container (max-width: 560px) {
  .library-identity-panel .library-identity-row { grid-template-columns: minmax(0, 1fr); }
  .library-identity-panel .library-identity-row > h2 { margin: 0; }
}
</style>
