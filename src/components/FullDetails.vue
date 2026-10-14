<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { t } from '@nextcloud/l10n'
import AddToList from './AddToList.vue'

const props = defineProps({
  itemId: { type: String, required: true },
  requestToken: { type: String, required: true },
  catalogueUrl: { type: String, required: true },
})

const item = ref(null)
const context = ref(null)
const draft = reactive({})
const loading = ref(true)
const busy = ref(false)
const error = ref('')
const feedback = ref('')
const tagName = ref('')
const commentMessage = ref('')
const coverFile = ref(null)
const coverInput = ref(null)
const coverRevision = ref(0)
const openUnavailable = new URLSearchParams(window.location.search).get('openUnavailable') === '1'
const savedDraft = ref('')
const dirty = computed(() => savedDraft.value !== '' && JSON.stringify(draft) !== savedDraft.value)
const itemId = computed(() => /^[1-9]\d{0,9}$/.test(props.itemId) && Number(props.itemId) <= 2147483647 ? props.itemId : '')
const itemBase = computed(() => `${props.catalogueUrl.replace(/\/$/, '')}/items/${itemId.value}`)
const workflowOptions = ['', 'to-read', 'reading', 'finished', 'reference', 'paused', 'abandoned', 'needs-action']
const publicationTypes = ['book', 'comic', 'magazine', 'journal', 'manual', 'catalogue', 'other']
const fieldNames = {
  publicationType: 'Type', title: 'Title', subtitle: 'Subtitle', creators: 'Creators',
  series: 'Series', seriesNumber: 'Part in series', genre: 'Genre', publication: 'Publication',
  publicationDate: 'Publication date', language: 'Language', publisher: 'Publisher',
  description: 'Description', subjects: 'Subjects', classifications: 'Classifications',
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
  return { field, label: t('library', label), current: Array.isArray(current) ? current.join('; ') : String(current ?? ''), candidate, source: item.value?.fieldSources?.[field] || item.value?.metadataSource || '', rejected: rejectedFields.value.includes(field) }
}))
const differences = computed(() => provenance.value.filter(row => row.candidate.trim() && row.candidate !== row.current))

function listText(value) {
  return Array.isArray(value) ? value.join('\n') : String(value || '').split(';').map(v => v.trim()).filter(Boolean).join('\n')
}
function lines(value) { return String(value || '').split('\n').map(v => v.trim()).filter(Boolean) }

function setDraft(source) {
  for (const key of ['publicationType', 'title', 'subtitle', 'publication', 'series', 'seriesNumber', 'genre', 'publicationDate', 'publisher', 'description']) draft[key] = source[key] || ''
  draft.creators = Array.isArray(source.authors) ? source.authors.join('\n') : listText(source.creators)
  draft.language = listText(source.language)
  draft.subjects = listText(source.subjects)
  draft.classifications = listText(source.classifications)
  draft.personalRating = source.personalRating ?? ''
  draft.identifiers = Array.isArray(source.identifiers) ? source.identifiers.map(row => ({ scheme: row.scheme, displayValue: row.displayValue || '', valid: row.valid })) : []
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
    return true
  } catch (cause) { error.value = cause.message || t('library', 'Publication details could not be loaded.') }
  finally { loading.value = false }
}

async function post(url, values = {}, file = null) {
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
    if (!await load({ silent: true })) throw new Error(t('library', 'The change was saved, but details could not be reloaded.'))
    feedback.value = t('library', 'Saved')
    return true
  } catch (cause) { error.value = cause.message || t('library', 'The change could not be saved.'); return false }
  finally { busy.value = false }
}

async function saveMetadata() {
  const body = new FormData()
  body.set('requesttoken', props.requestToken)
  body.set('metadataAutosave', '1')
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

async function uploadCover() {
  if (!coverFile.value) return
  const saved = await post(context.value.actions.coverOverride, {}, coverFile.value)
  if (saved) { coverFile.value = null; if (coverInput.value) coverInput.value.value = '' }
}
function pastedCover(event) {
  const file = [...(event.clipboardData?.files || [])].find(entry => ['image/jpeg', 'image/png', 'image/webp'].includes(entry.type))
  if (file) { event.preventDefault(); coverFile.value = file; uploadCover() }
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
  if (await post(context.value.actions.forgetMissing)) window.location.assign(props.catalogueUrl)
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
onBeforeUnmount(() => window.removeEventListener('beforeunload', warnUnsaved))
</script>

<template>
  <main class="library-full-details" @paste="pastedCover">
    <a :href="catalogueUrl" class="library-full-details-back">← {{ t('library', 'All publications') }}</a>
    <p v-if="openUnavailable" role="alert" class="library-full-details-error">{{ t('library', 'The source file could not be opened. Check the file in Nextcloud Files or rescan this root.') }}</p>
    <p v-if="loading" role="status">{{ t('library', 'Loading publication details…') }}</p>
    <p v-if="error" role="alert" class="library-full-details-error">{{ error }} <button v-if="!item" type="button" class="button secondary" @click="load">{{ t('library', 'Retry') }}</button></p>
    <p v-if="feedback" role="status" class="library-full-details-feedback">{{ feedback }}</p>
    <template v-if="item && context">
      <header class="library-full-details-hero">
        <div class="library-full-details-cover"><img :src="`${item.coverUrl}${item.coverUrl.includes('?') ? '&' : '?'}view=${coverRevision}`" alt="" /><div class="library-full-details-cover-actions"><label>{{ t('library', 'Replace cover') }} <input ref="coverInput" type="file" accept="image/jpeg,image/png,image/webp" @change="coverFile = $event.target.files?.[0] || null"></label><button type="button" class="button secondary" :disabled="busy || !coverFile" @click="uploadCover">{{ t('library', 'Upload cover') }}</button><button type="button" class="button secondary" :disabled="busy" @click="post(context.actions.coverRevert)">{{ t('library', 'Revert cover') }}</button><button type="button" class="button secondary" :disabled="busy" @click="coverRevision++">{{ t('library', 'Refresh cover preview') }}</button></div></div>
        <div class="library-full-details-summary"><p class="library-muted">{{ item.publicationType || t('library', 'Publication') }} · {{ (item.extension || '').toUpperCase() }}</p><h1><bdi dir="auto">{{ item.title || t('library', 'Untitled publication') }}</bdi></h1><p><bdi dir="auto">{{ item.displayCreators || item.creators }}</bdi></p><p v-if="item.canonicalAuthors?.length" class="library-full-details-links"><a v-for="author in item.canonicalAuthors" :key="author.id" :href="`${catalogueUrl}?authors=1&authorId=${author.id}`">{{ author.name }}</a></p><p v-if="item.canonicalSeries?.length" class="library-full-details-links"><a v-for="series in item.canonicalSeries" :key="series.id" :href="`${catalogueUrl}?series=1&seriesId=${series.id}`">{{ series.name }}<span v-if="series.part"> · {{ series.part }}</span></a></p><div class="library-full-details-actions"><a class="button primary" :href="item.openUrl" target="_blank" rel="noopener" @click="recordOpen">{{ t('library', 'Open') }}</a><a class="button secondary" :href="item.filesUrl">{{ t('library', 'Show in Files') }}</a><a class="button secondary" :href="item.downloadUrl">{{ t('library', 'Download source') }}</a></div><div class="library-full-details-personal"><button type="button" class="button secondary" :aria-pressed="!!item.starred" :disabled="busy" @click="post(context.actions.star, { starred: item.starred ? '0' : '1' })">{{ item.starred ? '★' : '☆' }} {{ item.starred ? t('library', 'Starred') : t('library', 'Star') }}</button><label>{{ t('library', 'Workflow status') }} <select :value="item.workflowStatus || ''" :disabled="busy" @change="post(context.actions.workflowStatus, { workflowStatus: $event.target.value })"><option v-for="status in workflowOptions" :key="status" :value="status">{{ status ? t('library', status.replaceAll('-', ' ').replace(/^./, c => c.toUpperCase())) : t('library', 'No workflow status') }}</option></select></label></div><AddToList :item-ids="[Number(itemId)]" :request-token="requestToken" :lists-url="`${catalogueUrl}?lists=1`" /></div>
      </header>

      <div class="library-full-details-columns">
        <section class="library-full-details-card" aria-labelledby="library-full-details-metadata"><h2 id="library-full-details-metadata">{{ t('library', 'Publication metadata') }}</h2><form @submit.prevent="saveMetadata"><div class="library-full-details-fields"><label>{{ t('library', 'Title') }}<input v-model="draft.title" required></label><label>{{ t('library', 'Subtitle') }}<input v-model="draft.subtitle"></label><label>{{ t('library', 'Type') }}<select v-model="draft.publicationType"><option v-for="type in publicationTypes" :key="type" :value="type">{{ t('library', type) }}</option></select></label><label :title="t('library', 'One creator per line. Commas within a name are preserved.')">{{ t('library', 'Creators') }}<textarea v-model="draft.creators" rows="3"></textarea></label><label>{{ t('library', 'Publication') }}<input v-model="draft.publication"></label><label>{{ t('library', 'Series') }}<input v-model="draft.series"></label><label>{{ t('library', 'Part in series') }}<input v-model="draft.seriesNumber"></label><label>{{ t('library', 'Genre') }}<input v-model="draft.genre"></label><label :title="t('library', 'Use YYYY, YYYY-MM, or YYYY-MM-DD.')">{{ t('library', 'Publication date') }}<input v-model="draft.publicationDate"></label><label>{{ t('library', 'Publisher') }}<input v-model="draft.publisher"></label><label :title="t('library', 'One language code per line.')">{{ t('library', 'Language') }}<textarea v-model="draft.language" rows="2"></textarea></label><label :title="t('library', 'One subject per line.')">{{ t('library', 'Subjects') }}<textarea v-model="draft.subjects" rows="2"></textarea></label><label :title="t('library', 'One classification per line.')">{{ t('library', 'Classifications') }}<textarea v-model="draft.classifications" rows="2"></textarea></label><label>{{ t('library', 'Personal rating') }}<input v-model="draft.personalRating" type="number" min="0" max="5" step="1"></label><label class="library-full-details-wide">{{ t('library', 'Description') }}<textarea v-model="draft.description" rows="8"></textarea></label></div><fieldset><legend>{{ t('library', 'Identifiers') }}</legend><div v-for="(identifier, index) in draft.identifiers" :key="index" class="library-full-details-identifier"><select v-model="identifier.scheme" :aria-label="t('library', 'Scheme')"><option value="isbn">ISBN</option><option value="issn">ISSN</option></select><input v-model="identifier.displayValue" :aria-label="t('library', 'Identifier value')"><span v-if="identifier.displayValue && identifier.valid === false" role="status">{{ t('library', 'Invalid identifier checksum') }}</span><button type="button" class="button secondary" :aria-label="t('library', 'Remove identifier')" @click="draft.identifiers.splice(index, 1)">×</button></div><button type="button" class="button secondary" @click="draft.identifiers.push({ scheme: 'isbn', displayValue: '' })">{{ t('library', 'Add identifier') }}</button></fieldset><button class="button primary" type="submit" :disabled="busy">{{ t('library', 'Save metadata') }}</button></form></section>

        <div class="library-full-details-aside"><section class="library-full-details-card"><h2>{{ t('library', 'File metadata') }}</h2><dl><dt>{{ t('library', 'Location') }}</dt><dd><bdi dir="ltr">{{ item.cachedPath }}</bdi></dd><dt>{{ t('library', 'Format') }}</dt><dd>{{ (item.extension || '').toUpperCase() }}</dd><dt>{{ t('library', 'Scan status') }}</dt><dd>{{ item.scanStatus || '—' }}</dd><dt>{{ t('library', 'Metadata source') }}</dt><dd>{{ item.metadataSource || '—' }}</dd><dt v-if="item.scanError">{{ t('library', 'Scan error') }}</dt><dd v-if="item.scanError">{{ item.scanError }}</dd><dt>{{ t('library', 'File ID') }}</dt><dd>{{ context.file.fileId || '—' }}</dd><dt>{{ t('library', 'MIME type') }}</dt><dd>{{ context.file.mimeType || '—' }}</dd><dt v-if="item.shelf">{{ t('library', 'Shelf') }}</dt><dd v-if="item.shelf">{{ item.shelf }}</dd></dl><button v-if="item.scanStatus === 'missing'" type="button" class="button secondary" :disabled="busy" @click="forgetMissing">{{ t('library', 'Forget missing publication') }}</button></section>
          <section class="library-full-details-card"><h2>{{ t('library', 'Nextcloud tags') }}</h2><div class="library-full-details-chips"><span v-for="tag in context.tags" :key="tag.id" class="library-full-details-chip"><bdi dir="auto">{{ tag.name }}</bdi><button type="button" :disabled="busy" :aria-label="`${t('library', 'Remove tag')}: ${tag.name}`" @click="post(tag.removeUrl)">×</button></span></div><form @submit.prevent="addTag()"><label>{{ t('library', 'Add Nextcloud tag') }}<input v-model="tagName" list="library-full-details-tag-suggestions"></label><datalist id="library-full-details-tag-suggestions"><option v-for="name in context.tagSuggestions" :key="name" :value="name"></option></datalist><button type="submit" class="button secondary" :disabled="busy || !tagName.trim()">{{ t('library', 'Add tag') }}</button></form></section>
          <section class="library-full-details-card"><h2>{{ t('library', 'Nextcloud comments') }}</h2><p class="library-muted">{{ context.comments.count || 0 }} {{ t('library', 'comments') }}</p><ul v-if="context.comments.recent?.length" class="library-full-details-comments"><li v-for="comment in context.comments.recent" :key="comment.id"><small>{{ comment.actorId }} · {{ comment.createdAt }}</small><p>{{ comment.message }}</p></li></ul><form @submit.prevent="addComment"><label>{{ t('library', 'Add Nextcloud comment') }}<textarea v-model="commentMessage" rows="3"></textarea></label><button type="submit" class="button secondary" :disabled="busy || !commentMessage.trim()">{{ t('library', 'Add comment') }}</button></form></section>
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
.library-full-details-cover img { width: 100%; max-height: 330px; object-fit: contain; border-radius: 8px; background: var(--color-background-dark); }
.library-full-details-cover-actions { display: grid; gap: 8px; margin-top: 12px; }
.library-full-details-cover-actions input { width: 100%; }
.library-full-details-summary h1 { margin: 4px 0; overflow-wrap: anywhere; }
.library-full-details-actions, .library-full-details-personal, .library-full-details-links { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 14px 0; }
.library-full-details-columns { display: grid; grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr); gap: 20px; align-items: start; }
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
