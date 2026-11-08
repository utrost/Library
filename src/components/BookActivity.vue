<script setup>
import LookupReceipts from './LookupReceipts.vue'
import { ref, watch, onBeforeUnmount } from 'vue'
import { t } from '@nextcloud/l10n'
import { curationRequest } from '../curation-api.js'
const props = defineProps({ itemId: { type: Number, required: true }, revision: { type: String, default: '' }, requestToken: { type: String, required: true }, disabled: Boolean })
const emit = defineEmits(['changed'])
const history = ref([]), notes = ref([]), next = ref(null), error = ref(''), busy = ref(false), opened = ref(false), picker = ref(false), path = ref(''), entries = ref([]), limited = ref(false)
const historyLoaded = ref(false), notesLoaded = ref(false)
let generation = 0, controller
function reset() { generation++; controller?.abort(); history.value = []; notes.value = []; next.value = null; error.value = ''; busy.value = false; picker.value = false; historyLoaded.value = false; notesLoaded.value = false; capabilities.value = null }
watch(() => [props.itemId, props.revision], () => { reset(); if (opened.value) load() })
onBeforeUnmount(reset)
async function act(work) {
  if (busy.value) return
  busy.value = true; error.value = ''; const current = ++generation
  controller = new AbortController()
  try { await work(controller.signal, current) } catch (e) { if (current === generation && e.name !== 'AbortError') error.value = e.message }
  finally { if (current === generation) busy.value = false }
}
function load(more = false) { act(async (signal, token) => {
  const [h, n] = await Promise.allSettled([curationRequest(`/books/${props.itemId}/history`, props.requestToken, { before: more ? next.value : 0 }, signal), curationRequest(`/books/${props.itemId}/notes`, props.requestToken, {}, signal)])
  if (token !== generation) return
  if (h.status === 'fulfilled') { history.value = more ? [...history.value, ...h.value.rows] : h.value.rows; next.value = h.value.next; historyLoaded.value = true }
  if (n.status === 'fulfilled') { notes.value = n.value.notes; capabilities.value = n.value.capabilities; notesLoaded.value = true }
  else { notes.value = []; notesLoaded.value = false; capabilities.value = null }
  error.value = [...new Set([h, n].filter(result => result.status === 'rejected' && result.reason?.name !== 'AbortError').map(result => result.reason.message))].join(' ')
}) }
function toggle(event) { opened.value = event.target.open; if (opened.value && !history.value.length) load() }
function changeNote(action, fileId = 0) { act(async (signal, token) => { const data = await curationRequest(`/books/${props.itemId}/notes`, props.requestToken, { action, fileId }, signal); if (token === generation) { notes.value = data.notes; picker.value = false } }) }
function browse(folder = '') { act(async (signal, token) => { const data = await curationRequest('/note-files', props.requestToken, { path: folder }, signal); if (token === generation) { path.value = folder; entries.value = data.entries; limited.value = data.limited; picker.value = true } }) }
function undo(row) { act(async (signal, token) => { await curationRequest(`/books/${props.itemId}/history/undo`, props.requestToken, { eventId: row.id }, signal); if (token === generation) emit('changed') }) }
const display = value => value == null ? '—' : Array.isArray(value) ? value.map(v => typeof v === 'object' ? v.displayValue || v.value || JSON.stringify(v) : v).join('; ') : typeof value === 'object' ? JSON.stringify(value) : String(value)
const fieldLabels = { publicationType:t('library','Type'),title:t('library','Title'),subtitle:t('library','Subtitle'),creators:t('library','Authors'),authors:t('library','Authors'),publication:t('library','Publication'),series:t('library','Series'),seriesNumber:t('library','Part in series'),genre:t('library','Genre'),publicationDate:t('library','Publication date'),language:t('library','Language'),publisher:t('library','Publisher'),description:t('library','Description'),subjects:t('library','Subjects'),classifications:t('library','Classifications'),personalRating:t('library','Personal rating'),identifiers:t('library','Identifiers'),starred:t('library','Favorite'),workflowStatus:t('library','Reading status'),markedForDeletionAt:t('library','Marked for deletion'),coverRevision:t('library','Cover'),links:t('library','Authors, series and genres') }
const outcomes = { applied: t('library', 'Written to EPUB'), restored: t('library', 'Original restored'), rolled_back: t('library', 'Write failed; original restored'), recovery_required: t('library', 'Recovery required — download the original') }
const capabilities = ref(null)
const kinds = { source_write: t('library', 'Source-file write'), scanner_accept: t('library', 'Imported changes'), restore:t('library','Restore'), path:t('library','Path extraction'), personal:t('library','Personal status'), cover:t('library','Cover'), author_assignment:t('library','Author assignment'),series_assignment:t('library','Series assignment'),author_undo:t('library','Undo author assignment'),series_undo:t('library','Undo series assignment'), imported_evidence:t('library','Imported history evidence'), manual: t('library', 'Manual edit'), organisation: t('library', 'Bulk organisation'), provider: t('library', 'Provider suggestion'), undo: t('library', 'Undo'), scan: t('library', 'Imported metadata') }
</script>
<template>
  <details class="library-full-details-card" @toggle="toggle">
    <summary>{{ t('library', 'Notes and change history') }}</summary>
    <p v-if="busy" role="status">{{ t('library', 'Loading…') }}</p>
    <p v-if="error" role="alert">{{ error }} <button type="button" :disabled="busy" @click="load()">{{ t('library', 'Retry') }}</button></p>
    <h3>{{ t('library', 'Book notes') }}</h3>
    <p v-if="capabilities && !capabilities.text && !capabilities.notes">{{ t('library', 'Neither Text nor Notes is enabled. Notes still open through Files; enable an editor to edit them in Nextcloud.') }}</p>
    <p>{{ t('library', 'Notes are ordinary files. Removing a link never deletes the note.') }}</p>
    <ul><li v-for="note in notes" :key="note.id"><a v-if="note.available" :href="note.url" target="_blank" rel="noopener noreferrer">{{ note.name }}</a><span v-else>{{ t('library', 'Note unavailable') }}</span> <button type="button" :disabled="busy || disabled" @click="changeNote('detach', note.id)">{{ t('library', 'Unlink') }}</button></li></ul>
    <button type="button" :disabled="busy || disabled || !notesLoaded" @click="changeNote('create')">{{ t('library', 'Create reading note') }}</button>
    <button type="button" :disabled="busy || disabled || !notesLoaded" @click="browse()">{{ t('library', 'Attach existing note') }}</button>
    <section v-if="picker" :aria-label="t('library', 'Choose a note')">
      <form @submit.prevent="browse(path)"><label>{{ t('library', 'Folder') }} <input v-model="path" maxlength="1024"></label><button type="submit" :disabled="busy">{{ t('library', 'Browse') }}</button></form>
      <button type="button" :disabled="busy || !path" @click="browse(path.split('/').slice(0, -1).join('/'))">{{ t('library', 'Parent folder') }}</button>
      <ul><li v-for="entry in entries" :key="entry.id"><button type="button" :disabled="busy" @click="entry.folder ? browse(entry.path) : changeNote('attach', entry.id)">{{ entry.name }}{{ entry.folder ? '/' : '' }}</button></li></ul>
      <p v-if="limited">{{ t('library', 'Only the first 200 entries are shown. Choose a more specific folder.') }}</p>
      <button type="button" @click="picker = false">{{ t('library', 'Cancel') }}</button>
    </section>
    <h3>{{ t('library', 'Change history') }}</h3>
    <LookupReceipts :item-id="itemId" :revision="revision" :request-token="requestToken" :disabled="busy || disabled" @undone="emit('changed')" />
    <p>{{ t('library', 'History records new changes for 180 days. Older unrecorded changes are not reconstructed. Provider and merge receipts retain their own Undo controls.') }}</p>
    <p v-if="historyLoaded && !history.length && !busy">{{ t('library', 'No recorded changes yet.') }}</p>
    <details v-for="row in history" :key="row.id"><summary>{{ new Date(Number(row.created_at) * 1000).toLocaleString() }} · {{ kinds[row.kind] || row.kind }}</summary><dl><template v-for="field in row.changes.fields" :key="field"><dt>{{ fieldLabels[field] || field }}</dt><dd>{{ display(field === 'links' ? row.changes.linkNames?.before || row.changes.before[field] : row.changes.before[field]) }} → {{ display(field === 'links' ? row.changes.linkNames?.after || row.changes.after[field] : row.changes.after[field]) }}</dd></template></dl><pre v-if="row.kind === 'imported_evidence'">{{ display(row.changes.source) }}</pre><template v-if="row.kind === 'source_write'"><p>{{ outcomes[row.changes.source.outcome] || row.changes.source.outcome }}</p><dl><template v-for="(value, field) in row.changes.source.review.after" :key="field"><dt>{{ fieldLabels[field] || field }}</dt><dd>{{ display(row.changes.source.review.before[field]) }} → {{ display(value) }}</dd></template></dl></template><p v-if="row.changes.source?.operationId">{{ t('library', 'Operation receipt') }}: {{ row.changes.source.operationId }}</p><button v-if="['manual', 'organisation'].includes(row.kind) && !row.undone" type="button" :disabled="busy || disabled" @click="undo(row)">{{ t('library', 'Undo') }}</button><p v-if="row.undone">{{ t('library', 'Undone') }}</p></details>
    <button v-if="next" type="button" :disabled="busy" @click="load(true)">{{ t('library', 'Load more') }}</button>
  </details>
</template>
<style scoped>
pre { white-space:pre-wrap; overflow-wrap:anywhere; max-height:20rem; overflow:auto; } ul { padding-inline-start: 1rem; } li { margin-block: .5rem; } dd { margin-inline-start: 0; overflow-wrap: anywhere; white-space: pre-wrap; } section { border: 1px solid var(--color-border); border-radius: 8px; padding: .75rem; } button { white-space: normal; } input { max-width: 100%; }
</style>
