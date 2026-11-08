<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { confirmAction } from '../confirm-action.js'
const props = defineProps({ itemId: Number, revision: String, requestToken: String, disabled: Boolean })
const emit = defineEmits(['changed'])
const opened = ref(false), fields = ref(['title', 'publisher']), job = ref(null), jobs = ref([]), busy = ref(false), error = ref('')
const labels = { title: t('library', 'Title'), authors: t('library', 'Authors'), publisher: t('library', 'Publisher'), language: t('library', 'Language'), publicationDate: t('library', 'Publication date'), description: t('library', 'Description'), subjects: t('library', 'Subjects'), identifiers: t('library', 'Identifiers') }
const states = { preview: t('library', 'Ready for review'), writing: t('library', 'Interrupted write — inspect before recovery'), applied: t('library', 'Written to EPUB'), restored: t('library', 'Original restored'), rolled_back: t('library', 'Write failed; original restored'), recovery_required: t('library', 'Recovery required — download the original') }
const errors = { authors_not_ready: t('library', 'Author migration must finish before editing. Refresh to check progress.'), storage_not_supported: t('library', 'Source-file write-back currently requires writable local filesystem storage. Remote and encrypted storage remain read-only in this workflow; Library metadata edits still work.'), backup_changed: t('library', 'A retained backup could not be verified. Inspect the retained job and original before retrying.'), changed: t('library', 'The file or metadata changed. Prepare a fresh preview.'), not_available: t('library', 'The file is unavailable or not writable.'), complex_metadata: t('library', 'A selected field has complex EPUB refinements. Deselect that field to preserve them.'), protected_epub: t('library', 'Encrypted, signed or rights-managed EPUBs cannot be rewritten.'), unsupported_epub: t('library', 'Write-back currently supports ordinary EPUB 2/3 files up to 128 MiB.'), storage_not_seekable: t('library', 'This storage cannot safely rewrite the file. Use metadata export instead.'), backup_limit: t('library', 'Five write-back backups are already retained. Download and remove an old backup before continuing.'), multiple_renditions: t('library', 'EPUBs with multiple renditions cannot be rewritten.'), locked: t('library', 'The file is busy. Try again later.') }
let controller, generation = 0
onBeforeUnmount(() => { generation++; controller?.abort() })
watch(() => [props.itemId, props.revision], () => { generation++; controller?.abort(); job.value = null; busy.value = false; error.value = ''; if (opened.value) load() })
async function request(path, values, signal) {
  const response = await fetch(generateUrl('/apps/library/api/writeback') + path, { method: 'POST', credentials: 'same-origin', cache: 'no-store', signal, headers: { 'Content-Type': 'application/json', requesttoken: props.requestToken }, body: JSON.stringify(values) })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const message = errors[data.error] || t('library', 'Write-back could not finish. Inspect the retained job before retrying.')
    throw new Error(data.error === 'complex_metadata' && Object.hasOwn(labels, data.field) ? `${labels[data.field]}: ${message}` : message)
  }
  return data
}
async function run(work) { if (busy.value) return; busy.value = true; error.value = ''; const token = ++generation; controller = new AbortController(); try { await work(controller.signal, token) } catch (e) { if (token === generation && e.name !== 'AbortError') error.value = e.message } finally { if (token === generation) busy.value = false } }
function toggle(event) { opened.value=event.target.open; if (opened.value) load() }
function load() { return run(async (signal, token) => { const data = await request('/jobs', {}, signal); if (token === generation) jobs.value = data.jobs }) }
function preview() { return run(async (signal, token) => { const data = await request(`/books/${props.itemId}/preview`, { fields: fields.value }, signal); if (token === generation) { job.value = data; const refreshed = await request('/jobs', {}, signal); if (token === generation) jobs.value = refreshed.jobs } }) }
async function action(row, action) {
  const message = action === 'apply' ? t('library', 'Write these reviewed fields into this EPUB? Content stays intact. The original is retained for seven days; other formats and OPF sidecars stay unchanged.') : action === 'restore' ? t('library', 'Restore the retained original only if this file still matches the written version? Library-only edits stay unchanged.') : t('library', 'Delete this retained original and preview? This does not change the book file and removes this recovery option.')
  if (!await confirmAction(message, action === 'apply' ? t('library', 'Write to EPUB') : action === 'restore' ? t('library', 'Restore original') : t('library', 'Delete backup'))) return
  return run(async (signal, token) => { const data = await request(`/${row.id}`, { action }, signal); if (token !== generation) return; job.value = data.deleted ? null : data; const refreshed = await request('/jobs', {}, signal); if (token !== generation) return; jobs.value = refreshed.jobs; if (action !== 'delete') emit('changed') })
}
</script>
<template>
  <details class="library-full-details-card" @toggle="toggle"><summary>{{ t('library', 'Write metadata to EPUB') }}</summary>
    <p>{{ t('library', 'Optional source-file operation. Save or discard edits first. Only selected publication fields are written; covers, genres, classifications, ratings, notes and reading status are excluded.') }}</p>
    <p>{{ t('library', 'Identifiers are added without removing the EPUB unique identifier or unknown identifiers. Complex refinements, DRM and signed archives are refused. A backup is retained for seven days; download it for longer retention.') }}</p>
    <p>{{ t('library', 'Source-file write-back currently requires writable local filesystem storage. Remote and encrypted storage remain read-only in this workflow; Library metadata edits still work.') }}</p>
    <fieldset><legend>{{ t('library', 'Fields to write') }}</legend><label v-for="(label, key) in labels" :key="key"><input v-model="fields" type="checkbox" :value="key" :disabled="busy || disabled">{{ label }}</label></fieldset>
    <button type="button" :disabled="busy || disabled || !fields.length" @click="preview()">{{ t('library', 'Preview file changes') }}</button><p v-if="busy" role="status">{{ t('library', 'Preparing or writing the file… Keep this page open until the outcome appears.') }}</p><p v-if="error" role="alert">{{ error }} <button type="button" :disabled="busy" @click="load()">{{ t('library', 'Refresh jobs') }}</button></p>
    <section v-if="job"><h3>{{ job.name }} · {{ states[job.status] }}</h3><p>{{ t('library', 'Changed archive entry') }}: {{ job.review.entry }}</p><dl><template v-for="(values, field) in job.review.after" :key="field"><dt>{{ labels[field] }}</dt><dd>{{ job.review.before[field].join('; ') || '—' }} → {{ values.join('; ') || '—' }}</dd></template></dl><p v-if="job.review.modified">{{ t('library', 'The EPUB modification timestamp is updated too.') }}</p><button v-if="job.status === 'preview'" type="button" :disabled="busy || disabled || job.confirmUntil * 1000 < Date.now()" @click="action(job, 'apply')">{{ t('library', 'Write to EPUB') }}</button></section>
    <h3>{{ t('library', 'Retained write-back jobs') }}</h3><p>{{ t('library', 'These backups cover your account. Interrupted jobs never overwrite unexplained file changes; download the original for manual recovery if needed.') }}</p>
    <article v-for="row in jobs" :key="row.id"><p v-if="row.reconciliationPending" role="status">{{ t('library', 'The file changed, but catalogue refresh is pending. Rescan this shelf.') }}</p><strong>{{ row.name }}</strong> · {{ states[row.status] }}<p v-if="['writing', 'recovery_required'].includes(row.status)">{{ t('library', 'Recovery backups are retained while the source-file outcome is unresolved. Download the original for recovery.') }}</p><p v-else>{{ t('library', 'Backup retained until') }} {{ new Date(row.expiresAt * 1000).toLocaleString() }}</p><a :href="row.backupUrl">{{ t('library', 'Download original') }}</a> <button type="button" :disabled="busy || disabled" @click="job = row">{{ t('library', 'View review') }}</button><button v-if="row.status === 'writing'" type="button" :disabled="busy || disabled" @click="action(row, 'apply')">{{ t('library', 'Resolve interrupted write') }}</button><button v-if="['applied', 'writing', 'recovery_required'].includes(row.status)" type="button" :disabled="busy || disabled" @click="action(row, 'restore')">{{ t('library', 'Restore original') }}</button><button v-if="!['writing', 'recovery_required'].includes(row.status)" type="button" :disabled="busy" @click="action(row, 'delete')">{{ t('library', 'Delete backup') }}</button></article>
  </details>
</template>
<style scoped>
label { display:inline-flex; align-items:center; gap:.35rem; margin:.5rem; } article, section { border-block-start:1px solid var(--color-border); padding-block:.75rem; } h3, strong { overflow-wrap:anywhere; } h3 { font-size:1rem; line-height:1.5; margin-block:.75rem; } p { margin-block:.5rem; } dt { font-weight:600; } dd { margin-inline-start:0; white-space:pre-wrap; overflow-wrap:anywhere; } button { white-space:normal; } a { text-decoration:underline; }
</style>
