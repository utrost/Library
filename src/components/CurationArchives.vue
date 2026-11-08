<script setup>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { curationRequest } from '../curation-api.js'
import { confirmAction } from '../confirm-action.js'
const props = defineProps({ requestToken: String })
const jobs = ref([]), job = ref(null), busy = ref(false), error = ref(''), uploaded = ref(0)
let controller, timer, generation = 0
const recordLabels = { author: t('library', 'Authors'), series: t('library', 'Series'), genre: t('library', 'Genres'), redirect: t('library', 'Redirects'), hierarchy: t('library', 'Genre relationships'), book: t('library', 'Books'), list: t('library', 'Lists'), entry: t('library', 'List entries'), collection: t('library', 'Collections'), note: t('library', 'Note links'), preference: t('library', 'Preferences'), mapping: t('library', 'Value mappings'), history: t('library', 'Change history') }
const fieldLabels = { publicationType:t('library','Type'),title:t('library','Title'),subtitle:t('library','Subtitle'),creators:t('library','Source creators'),authors:t('library','Source creators'),publication:t('library','Publication'),series:t('library','Source series'),seriesNumber:t('library','Source part in series'),genre:t('library','Source genre'),publicationDate:t('library','Publication date'),language:t('library','Language'),publisher:t('library','Publisher'),description:t('library','Description'),subjects:t('library','Subjects'),classifications:t('library','Classifications'),personalRating:t('library','Personal rating'),identifiers:t('library','Identifiers'),starred:t('library','Favorite'),workflowStatus:t('library','Reading status'),markedForDeletionAt:t('library','Marked for deletion'),coverOverrideIncluded:t('library','Custom cover'),assignedAuthors:t('library','Assigned authors'),assignedSeries:t('library','Assigned series'),assignedGenres:t('library','Assigned genres'),assignedPart:t('library','Part in series'),display_name:t('library','Name'),sort_name:t('library','Sort name'),given_name:t('library','Given name'),family_name:t('library','Family name'),biography:t('library','Biography'),name:t('library','Name'),path:t('library','Location'),size:t('library','File size') }
const reviewErrors = { review_too_large:t('library','This record exceeds the 128 KiB review limit. Shorten its metadata before importing again; nothing was applied.'),file_not_found:t('library','No matching file exists in this account. Restore the file in Files and scan its shelf before importing again.'),ambiguous_file:t('library','More than one catalogue entry matches this file. Resolve the duplicates before importing again.'),dependency_unavailable:t('library','A required book, author, series, genre or list was missing or skipped. This dependent record was not applied.'),existing_series_differs:t('library','A series with this name already has different details. Its existing details were preserved.'),existing_hierarchy_differs:t('library','This genre already has a different parent. Its existing hierarchy was preserved.'),existing_preference_differs:t('library','An existing preference differs from the archive. Your current setting was preserved.'),existing_mapping_differs:t('library','An existing mapping differs from the archive. Your current mapping was preserved.'),destination_shelf_required:t('library','Create and scan the corresponding destination shelf before importing again.'),note_unavailable:t('library','The note file is unavailable. Restore it in Files before importing again.'),note_changed:t('library','The note file differs from the archived reference. Its link was not restored.'),book_changed:t('library','The book changed after review. Review a new import before applying it.'),invalid_or_unavailable:t('library','This record is invalid or unavailable and was not applied.') }
const progress = computed(() => {
  const counts = job.value?.counts || []
  return { total: counts.reduce((sum, row) => sum + Number(row.n), 0), processed: counts.filter(row => job.value?.status === 'validating' ? row.status !== 'staged' : ['applied', 'conflict', 'skipped', 'exported'].includes(row.status)).reduce((sum, row) => sum + Number(row.n), 0) }
})
const active = value => ['exporting', 'validating', 'applying'].includes(value)
const labels = { uploading: t('library', 'Uploading…'), exporting: t('library', 'Preparing archive'), validating: t('library', 'Preparing review'), review: t('library', 'Ready for review'), applying: t('library', 'Applying…'), complete: t('library', 'Complete'), paused: t('library', 'Paused'), staged: t('library', 'Queued'), ready: t('library', 'Ready'), applied: t('library', 'Applied'), conflict: t('library', 'Changed or unavailable'), skipped: t('library', 'Skipped'), exported: t('library', 'Exported') }
onBeforeUnmount(() => { generation++; controller?.abort(); clearTimeout(timer) })
async function request(path, data, signal) { return curationRequest(`/archives${path}`, props.requestToken, data, signal) }
async function run(work) {
  if (busy.value) return
  busy.value = true; error.value = ''; clearTimeout(timer); const token = ++generation; controller = new AbortController()
  try { await work(controller.signal, token) } catch (e) { if (token === generation && e.name !== 'AbortError') error.value = e.message }
  finally { if (token === generation) { busy.value = false; if (active(job.value?.status)) timer = setTimeout(() => open(job.value.id, job.value.page), 3000) } }
}
function load() { run(async (signal, token) => { const data = await request('', {}, signal); if (token === generation) jobs.value = data.jobs }) }
function open(id, page = 1) { run(async (signal, token) => { const data = await request(`/${id}`, { page }, signal); if (token === generation) job.value = data }) }
function createExport() { run(async (signal, token) => { const data = await request('/create', { mode: 'export' }, signal); if (token === generation) job.value = data }) }
async function control(action, rowId = 0) {
  if (['approve', 'delete'].includes(action) && !await confirmAction(action === 'approve' ? t('library', 'Restore reviewed curation? Matching books will be updated and new profiles and lists will be created. Keep a destination backup before continuing.') : t('library', 'Delete this archive job? Applied changes remain.'), t('library', 'Continue'))) return
  run(async (signal, token) => { const data = await request(`/${job.value.id}/control`, { action, rowId }, signal); if (token === generation) { job.value = data.deleted ? null : data; const refreshed = await request('', {}, signal); if (token === generation) jobs.value = refreshed.jobs } })
}
function upload(event, resume = false) {
  const file = event.target.files?.[0]; event.target.value = ''; if (!file) return
  run(async (signal, token) => {
    if (file.size > 1073741824) throw new Error(t('library', 'Archive exceeds the 1 GiB limit.'))
    const created = resume && job.value?.status === 'uploading' ? job.value : await request('/create', { mode: 'restore' }, signal); if (token !== generation) return
    job.value = created; uploaded.value = 0
    const reader = file.stream().getReader(), decoder = new TextDecoder('utf-8', { fatal: true })
    let buffer = '', manifest = null, count = 0, batch = [], batchBytes = 0
    const flush = async () => { if (!batch.length) return; await request(`/${created.id}/upload`, { records: batch }, signal); count += batch.length; batch = []; batchBytes = 0; if (token === generation) uploaded.value = count }
    const line = async value => {
      if (!value.trim()) return
      if (value.length > 15000000) throw new Error(t('library', 'An archive record is too large.'))
      const record = JSON.parse(value)
      if (!manifest) { if (record.format !== 'library-curation' || record.version !== 2 || !Number.isSafeInteger(record.records) || record.records < 0) throw new Error(t('library', 'Unsupported curation archive.')); manifest = record; return }
      if (batch.length >= 20 || batchBytes + value.length > 524288) await flush()
      batch.push(record); batchBytes += value.length
    }
    try {
      while (true) {
        if (signal.aborted) throw new DOMException('Aborted', 'AbortError')
        const result = await reader.read(); buffer += decoder.decode(result.value, { stream: !result.done })
        let index; while ((index = buffer.indexOf('\n')) >= 0) { await line(buffer.slice(0, index)); buffer = buffer.slice(index + 1) }
        if (buffer.length > 15000000) throw new Error(t('library', 'An archive record is too large.'))
        if (result.done) break
      }
      if (buffer.trim()) await line(buffer)
      await flush()
      if (!manifest || count !== manifest.records) throw new Error(t('library', 'The archive is incomplete. Nothing has been restored.'))
      const data = await request(`/${created.id}/control`, { action: 'finish', count }, signal); if (token === generation) job.value = data
    } finally { await reader.cancel().catch(() => {}); reader.releaseLock() }
  })
}
const display = value => value === null || value === undefined || value === '' ? '—' : typeof value === 'boolean' ? value ? t('library', 'Yes') : t('library', 'No') : Array.isArray(value) ? value.map(display).join(', ') || '—' : typeof value === 'object' ? JSON.stringify(value) : String(value)
onMounted(load)
</script>
<template>
  <section class="library-archives" :aria-label="t('library', 'Curation archives')">
    <h3>{{ t('library', 'Curation archives') }}</h3>
    <p>{{ t('library', 'Export private metadata, author profiles, genre relationships, reading lists, collections and retained history. Patterns, folder rules, note links and private preferences are included. Source files, sharing permissions and credentials are excluded.') }}</p>
    <p>{{ t('library', 'Archives contain private library data. Store them securely. Exports capture records as the background job visits them; avoid editing while an export runs.') }}</p>
    <button type="button" :disabled="busy" @click="createExport">{{ t('library', 'Prepare curation archive') }}</button>
    <label>{{ t('library', 'Review an archive to restore') }}<input type="file" accept=".jsonl,application/x-ndjson" :disabled="busy" @change="upload"></label>
    <button type="button" :disabled="busy" @click="load">{{ t('library', 'Refresh jobs') }}</button>
    <p v-if="busy" role="status">{{ t('library', 'Updating…') }} <span v-if="uploaded">{{ uploaded }} {{ t('library', 'records uploaded') }}</span></p>
    <p v-if="error" role="alert">{{ error }}</p>
    <ul><li v-for="entry in jobs" :key="entry.id"><button type="button" :disabled="busy" @click="open(entry.id)">{{ new Date(Number(entry.created_at) * 1000).toLocaleString() }} · {{ entry.mode === 'export' ? t('library', 'Export') : t('library', 'Restore') }} · {{ labels[entry.status] || entry.status }}</button></li></ul>
    <section v-if="job" :aria-label="t('library', 'Archive review')">
      <label v-if="job.status === 'uploading'">{{ t('library', 'Resume upload with the same archive') }}<input type="file" accept=".jsonl,application/x-ndjson" :disabled="busy" @change="upload($event, true)"></label><h4>{{ labels[job.status] || job.status }}</h4><p>{{ t('library', 'Available until') }} {{ new Date(job.expiresAt * 1000).toLocaleString() }}</p>
      <p v-if="job.error" role="alert">{{ job.error === 'catalogue_indexing' ? t('library', 'Author or series indexing is incomplete. Let background indexing finish, resolve any indexing errors, then retry. Completed archive records are retained.') : job.error === 'archive_size_limit' ? t('library', 'This archive exceeds the supported size limit. Retrying will not raise the limit. Use a Files and database backup for the full library.') : t('library', 'Background work paused after an interruption. Completed records are retained. Resume to retry the remaining work.') }}</p>
      <p role="status">{{ t('library', 'Records processed') }}: {{ progress.processed }}<template v-if="job.mode === 'restore'"> / {{ progress.total }}</template></p>
      <p v-if="job.mode === 'restore' && job.status === 'complete' && progress.total === 0" role="status">{{ t('library', 'This archive contains no records to restore. Nothing was changed.') }}</p>
      <p>{{ t('library', 'Background work requires Nextcloud cron. Restore matches the file path and size, then checks file identity and saved metadata again before applying. Missing and changed books are reported as conflicts.') }}</p>
      <a v-if="job.mode === 'export' && job.status === 'complete'" :href="generateUrl(`/apps/library/api/curation/archives/${job.id}/download`)">{{ t('library', 'Download archive') }}</a>
      <button v-if="job.status === 'review'" type="button" :disabled="busy" @click="control('approve')">{{ t('library', 'Restore reviewed records') }}</button>
      <button v-if="active(job.status)" type="button" :disabled="busy" @click="control('pause')">{{ t('library', 'Pause') }}</button>
      <button v-if="job.status === 'paused'" type="button" :disabled="busy" @click="control('resume')">{{ t('library', 'Resume') }}</button>
      <button v-if="!active(job.status)" type="button" :disabled="busy" @click="control('delete')">{{ t('library', 'Delete job') }}</button>
      <ul><li v-for="count in job.counts" :key="`${count.kind}-${count.status}`">{{ recordLabels[count.kind] || count.kind }} · {{ labels[count.status] || count.status }}: {{ count.n }}</li></ul>
      <div class="archive-table"><table role="table"><thead role="rowgroup"><tr role="row"><th role="columnheader">{{ t('library', 'Record') }}</th><th role="columnheader">{{ t('library', 'Status') }}</th><th role="columnheader">{{ t('library', 'Review') }}</th></tr></thead><tbody role="rowgroup"><tr v-for="row in job.rows" :key="row.id" role="row"><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Record') }}</span>{{ row.review.label === row.kind ? recordLabels[row.kind] || row.kind : row.review.label || recordLabels[row.kind] || row.kind }}</td><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Status') }}</span>{{ labels[row.status] || row.status }}<p v-if="row.review.error">{{ reviewErrors[row.review.error] || reviewErrors.invalid_or_unavailable }}</p></td><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Review') }}</span><details v-if="row.review.after"><summary>{{ t('library', 'Before and after') }}</summary><dl><template v-for="(value, field) in row.review.after" :key="field"><dt>{{ fieldLabels[field] || field }}</dt><dd>{{ display(row.review.beforeDisplay?.[field] ?? row.review.before?.[field]) }} → {{ display(value) }}</dd></template></dl></details><button v-if="job.status === 'review' && ['ready', 'skipped'].includes(row.status)" type="button" :disabled="busy" @click="control(row.status === 'ready' ? 'skip' : 'include', row.id)">{{ row.status === 'ready' ? t('library', 'Skip') : t('library', 'Include') }}</button></td></tr></tbody></table></div>
      <button type="button" :disabled="busy || job.page <= 1" @click="open(job.id, job.page - 1)">{{ t('library', 'Previous') }}</button><button type="button" :disabled="busy || !job.hasNext" @click="open(job.id, job.page + 1)">{{ t('library', 'Next') }}</button>
    </section>
  </section>
</template>
<style scoped>
.library-archives { margin-block:1rem; } .archive-table { overflow:auto; } table { width:100%; } td,th { text-align:start; padding:.5rem; vertical-align:top; overflow-wrap:anywhere; } td { max-width:28rem; } label { display:inline-flex; flex-wrap:wrap; align-items:center; gap:.5rem; margin:.5rem; } input { max-width:100%; } ul { padding-inline-start:1rem; } dd { margin:0; white-space:pre-wrap; overflow-wrap:anywhere; } button { white-space:normal; }
.mobile-label { display:none; }
@media(max-width:600px) {
  .archive-table { overflow:visible; }
  .archive-table table, .archive-table tbody { display:block; }
  .archive-table thead { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); }
  .archive-table tr { display:grid; margin-block:.75rem; padding:.5rem; border:1px solid var(--color-border); border-radius:8px; }
  .archive-table td { display:flex; flex-direction:column; max-width:none; min-width:0; gap:.25rem; }
  .archive-table td button { align-self:flex-start; }
  .mobile-label { display:block; font-weight:600; }
}
</style>
