<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { t, n } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { curationRequest } from '../curation-api.js'
import { confirmAction } from '../confirm-action.js'
import { readCurationContext, curationContextUrl } from '../curation-context.js'
import { detailsUrlWithReturn } from '../details-return.js'
import CurationArchives from './CurationArchives.vue'
import CurationEntityPicker from './CurationEntityPicker.vue'
const props = defineProps({ requestToken: String, itemIds: { type: Array, default: () => [] } })
const emit = defineEmits(['close', 'lookup', 'changed'])
const initial = readCurationContext()
const day = ref(initial.day), rootId = ref(initial.rootId), roots = ref([])
const tab = ref(props.itemIds.length && !new URLSearchParams(window.location.search).has('curationTab') ? 'jobs' : initial.tab)
const filter = ref(initial.filter), inbox = ref([]), next = ref(null), before = ref(initial.before), pages = ref(initial.pages), selected = ref(initial.selected), jobs = ref([]), job = ref(null), busy = ref(false), error = ref(''), notice = ref(''), scanned = ref(0)
const field = ref('genres'), mode = ref('add'), entities = ref([]), value = ref(''), requestId = ref('')
const root = generateUrl('/apps/library/')
const ids = computed(() => props.itemIds.length ? props.itemIds : selected.value)
const entityField = computed(() => ['authors', 'series', 'genres'].includes(field.value))
const fieldLabels = { authors: t('library', 'Authors'), genres: t('library', 'Genres'), series: t('library', 'Series'), part: t('library', 'Part in series'), language: t('library', 'Language'), publisher: t('library', 'Publisher') }
const statuses = { preparing: t('library', 'Preparing review'), review: t('library', 'Ready for review'), applying: t('library', 'Applying…'), complete: t('library', 'Complete'), paused: t('library', 'Paused'), cancelled: t('library', 'Cancelled'), undoing: t('library', 'Undoing…'), undone: t('library', 'Undone'), failed: t('library', 'Failed'), ready: t('library', 'Ready'), applied: t('library', 'Applied'), conflict: t('library', 'Changed or unavailable'), undo_conflict: t('library', 'Undo blocked by later changes'), skipped: t('library', 'Skipped') }
const rowErrors = { series_required: t('library', 'Assign a series before setting its part.'), unavailable_or_invalid: t('library', 'This book is unavailable or cannot accept the proposed change.'), changed_or_unavailable: t('library', 'The book or its file changed after review. Prepare a new review to continue.') }
let controller, generation = 0, timer
onBeforeUnmount(() => { generation++; controller?.abort(); clearTimeout(timer) })
function schedule() { clearTimeout(timer); if (tab.value === 'jobs' && job.value && ['preparing', 'applying', 'undoing'].includes(job.value.status)) timer = setTimeout(() => loadJob(job.value.id, job.value.page), 3000) }
async function run(work) {
  if (busy.value) return
  busy.value = true; error.value = ''; const current = ++generation; controller = new AbortController()
  try { await work(controller.signal, current) } catch (e) { if (current === generation && e.name !== 'AbortError') error.value = e.message }
  finally { if (current === generation) { busy.value = false; schedule() } }
}
function loadInbox(cursor = 0, history = pages.value, resetSelection = false) { return run(async (signal, token) => {
  let data, examined = 0, windowCursor = cursor
  // Skip empty filtered windows, but cap each interaction at 200 examined records.
  for (let attempt = 0; attempt < 4; attempt++) {
    data = await curationRequest('/inbox', props.requestToken, { before: windowCursor, filter: filter.value, day: day.value, rootId: rootId.value }, signal)
    if (token !== generation) return
    examined += data.scanned || 0
    if (data.rows.length || !data.next || data.next === windowCursor) break
    windowCursor = data.next
  }
  inbox.value = data.rows; next.value = data.next; before.value = cursor; pages.value = history; scanned.value = examined
  if (data.roots) roots.value = data.roots
  selected.value = resetSelection ? [] : selected.value.filter(id => data.rows.some(row => Number(row.id) === id))
}) }
function loadJobs() { return run(async (signal, token) => { const data = await curationRequest('/jobs', props.requestToken, {}, signal); if (token === generation) jobs.value = data.jobs }) }
function loadJob(id, page = 1) { return run(async (signal, token) => { const data = await curationRequest(`/jobs/${id}`, props.requestToken, { page }, signal); if (token !== generation) return; job.value = data; tab.value = 'jobs' }) }
function start() { return run(async (signal, token) => {
  if (!requestId.value) requestId.value = crypto.randomUUID().replaceAll('-', '')
  const spec = { field: field.value, mode: mode.value, value: entityField.value ? (field.value === 'series' ? entities.value[0]?.id ?? null : entities.value.map(v => v.id)) : value.value }
  const data = await curationRequest('/jobs/create', props.requestToken, { ids: ids.value, spec, requestId: requestId.value }, signal)
  if (token !== generation) return; job.value = data; requestId.value = ''; tab.value = 'jobs'
}) }
async function control(action, itemId = 0) {
  if (['approve', 'undo', 'delete'].includes(action) && !await confirmAction(action === 'approve' ? t('library', 'Apply the ready rows in this reviewed job? Existing values in the selected field will be changed as shown.') : action === 'undo' ? t('library', 'Undo applied rows only where the book and its file have not changed?') : t('library', 'Delete this job and its Undo receipts? Book values will remain unchanged.'), action === 'approve' ? t('library', 'Apply reviewed changes') : action === 'undo' ? t('library', 'Undo') : t('library', 'Delete job'), action === 'delete')) return
  return run(async (signal, token) => { const data = await curationRequest(`/jobs/${job.value.id}/control`, props.requestToken, { action, itemId }, signal); if (token !== generation) return; job.value = data.deleted ? null : data; emit('changed') })
}
function decide(row, state) { return run(async (signal, token) => { await curationRequest(`/inbox/${row.id}`, props.requestToken, { revision: row.revision, state }, signal); if (token !== generation) return; notice.value = t('library', 'Review state saved.'); if (filter.value !== 'all' && filter.value !== state) inbox.value = inbox.value.filter(r => r.id !== row.id); else row.state = state; selected.value = selected.value.filter(id => id !== row.id) }) }
function switchTab(nextTab) { if (busy.value) return; clearTimeout(timer); tab.value = nextTab; if (nextTab === 'inbox') loadInbox(before.value); else { job.value = null; loadJobs() } }
function resetInbox() { notice.value = ''; loadInbox(0, [], true) }
function nextInbox() { loadInbox(next.value, [...pages.value, before.value].slice(-100), true) }
function previousInbox() { loadInbox(pages.value.at(-1), pages.value.slice(0, -1), true) }
function allJobs() { job.value=null;loadJobs() }
function contextUrl() {
  return curationContextUrl(window.location.href, { tab: tab.value, day: day.value, rootId: rootId.value, filter: filter.value, before: before.value, pages: pages.value, selected: selected.value, job: job.value?.id || '', page: job.value?.page || 1 })
}
function persistContext() { window.history.replaceState(window.history.state, '', contextUrl()) }
function bookUrl(id) { return detailsUrlWithReturn(`${root}?details=${id}`, root, contextUrl().href) }
function inferenceUrl() {
  const url = new URL(`${root}?infer=1`, window.location.origin), source = contextUrl()
  url.searchParams.set('rootId', String(rootId.value)); url.searchParams.set('returnTo', source.pathname + source.search)
  return url.href
}
function lookup() { persistContext(); emit('lookup', [...selected.value]) }
watch([tab, day, rootId, filter, before, pages, selected, () => job.value?.id, () => job.value?.page], persistContext, { deep: true })
function batch(row) { day.value = row.batchDay; rootId.value = row.rootId; resetInbox() }
function clearBatch() { day.value = ''; rootId.value = 0; resetInbox() }
function comparison(row, after) {
  const key = job.value.spec.field
  const values = after ? row.proposed : row.before
  if (!values) return '—'
  const raw = after && !entityFieldFor(key) ? values.metadata[key] : entityFieldFor(key) || key === 'part' ? values.links?.[key] : values[key]
  const names = row.names || {}
  if (Array.isArray(raw)) return raw.map(id => names[key]?.[id] || `#${id}`).join('; ') || '—'
  return key === 'series' ? names.series?.[raw] || (raw ? `#${raw}` : '—') : String(raw || '—')
}
const entityFieldFor = key => ['authors', 'genres', 'series'].includes(key)
watch(field, () => { entities.value = []; value.value = ''; mode.value = ['authors', 'genres'].includes(field.value) ? 'add' : 'set'; requestId.value = '' })
watch([mode, value, entities], () => { requestId.value = '' }, { deep: true })
onMounted(() => { if (tab.value === 'jobs' && initial.job) loadJob(initial.job, initial.page); else tab.value === 'inbox' ? loadInbox(before.value) : loadJobs() })
</script>
<template>
  <main class="library-panel curation">
    <header><h2>{{ t('library', 'Review and organise') }}</h2><button type="button" @click="emit('close')">{{ t('library', 'Back to Library') }}</button></header>
    <nav :aria-label="t('library', 'Review sections')"><button type="button" :aria-pressed="tab === 'inbox'" :disabled="busy" @click="switchTab('inbox')">{{ t('library', 'Incoming books') }}</button><button type="button" :aria-pressed="tab === 'jobs'" :disabled="busy" @click="switchTab('jobs')">{{ t('library', 'Organisation jobs') }}</button></nav>
    <p v-if="busy" role="status">{{ t('library', 'Updating…') }}</p><p v-if="notice" role="status">{{ notice }}</p><p v-if="error" role="alert">{{ error }} <button type="button" :disabled="busy" @click="job ? loadJob(job.id, job.page) : switchTab(tab)">{{ t('library', 'Retry') }}</button></p>
    <section v-if="tab === 'inbox'">
      <p>{{ t('library', 'Newest books first. Mark reviewed books Done, or defer them for one day. Changed metadata returns a book to review.') }}</p>
      <label>{{ t('library', 'Show') }}<select :aria-label="t('library', 'Show')" v-model="filter" :disabled="busy" @change="resetInbox"><option value="pending">{{ t('library', 'To review') }}</option><option value="done">{{ t('library', 'Done') }}</option><option value="deferred">{{ t('library', 'Deferred') }}</option><option value="all">{{ t('library', 'All') }}</option></select></label>
      <label>{{ t('library', 'Shelf') }}<select v-model="rootId" :aria-label="t('library', 'Shelf')" :disabled="busy" @change="resetInbox"><option :value="0">{{ t('library', 'All shelves') }}</option><option v-for="shelf in roots" :key="shelf.id" :value="Number(shelf.id)">{{ shelf.label || shelf.path }}</option></select></label>
      <label>{{ t('library', 'First indexed on (UTC)') }}<input v-model="day" type="date" :disabled="busy" @change="resetInbox"></label><button v-if="day || rootId" type="button" :disabled="busy" @click="clearBatch">{{ t('library', 'All incoming batches') }}</button><p>{{ t('library', 'A batch groups books by shelf and the day they were first indexed. Rescanning does not change that date.') }}</p><p v-if="rootId"><a :href="inferenceUrl()">{{ t('library', 'Extract metadata from this shelf') }}</a></p>
      <p v-if="!inbox.length && !busy" role="status">{{ next ? t('library', 'No matches among the {count} books checked. Continue to older books.', { count: scanned }) : t('library', 'No more books match this review filter.') }}</p>
      <article v-for="row in inbox" :key="row.id" class="inbox-row"><label><input v-model="selected" type="checkbox" :value="Number(row.id)" :aria-label="`${t('library', 'Select')}: ${row.title}`" :disabled="busy"></label><a :href="bookUrl(row.id)"><img :src="generateUrl(`/apps/library/items/${row.id}/cover`)" alt="" loading="lazy" @error="$event.target.hidden = true"></a><div><a :href="bookUrl(row.id)">{{ row.title }}</a><p>{{ row.creators }}</p><button type="button" :disabled="busy" @click="batch(row)">{{ row.batchDay }} · {{ row.rootPath }}</button><p v-if="row.missing.length">{{ t('library', 'Missing details') }}: {{ row.missing.map(key => fieldLabels[key] || (key === 'title' ? t('library', 'Title') : t('library', 'Description'))).join(', ') }}</p></div><div class="actions"><button type="button" :disabled="busy" @click="decide(row, 'done')">{{ t('library', 'Done') }}</button><button type="button" :disabled="busy" @click="decide(row, 'deferred')">{{ t('library', 'Defer one day') }}</button><button v-if="row.state !== 'pending'" type="button" :disabled="busy" @click="decide(row, 'pending')">{{ t('library', 'Review again') }}</button></div></article>
      <nav :aria-label="t('library', 'Pagination')"><button type="button" :disabled="busy || !pages.length" @click="previousInbox">{{ t('library', 'Previous') }}</button><button type="button" :disabled="busy || !next" @click="nextInbox">{{ !inbox.length && next ? t('library', 'Continue to older books') : t('library', 'Next') }}</button></nav>
      <div v-if="selected.length"><p role="status">{{ n('library', '%n book selected', '%n books selected', selected.length) }}</p><button type="button" :disabled="busy" @click="lookup">{{ t('library', 'Find book details') }}</button><button type="button" @click="switchTab('jobs')">{{ t('library', 'Organise selected books') }}</button></div>
    </section>
    <section v-else>
      <form v-if="ids.length && !job" @submit.prevent="start">
        <h3>{{ n('library', '%n book selected', '%n books selected', ids.length) }}</h3>
        <label>{{ t('library', 'Field') }}<select :aria-label="t('library', 'Field')" v-model="field" :disabled="busy"><option v-for="(label, key) in fieldLabels" :key="key" :value="key">{{ label }}</option></select></label>
        <label v-if="['authors', 'genres'].includes(field)">{{ t('library', 'Change') }}<select :aria-label="t('library', 'Change')" v-model="mode" :disabled="busy"><option value="add">{{ t('library', 'Add') }}</option><option value="remove">{{ t('library', 'Remove') }}</option><option value="set">{{ t('library', 'Replace all') }}</option></select></label>
        <CurationEntityPicker v-if="entityField" v-model="entities" :kind="field" :disabled="busy" />
        <label v-else>{{ t('library', 'New value') }}<input v-model="value" :disabled="busy" :maxlength="field === 'part' ? 64 : 255"></label>
        <p>{{ t('library', 'Empty replacement values clear the selected field. Files stay unchanged. Review the prepared rows before applying.') }}</p>
        <button type="submit" class="primary" :disabled="busy || (mode !== 'set' && !entities.length)">{{ t('library', 'Prepare review') }}</button>
      </form>
      <template v-if="job">
        <h3>{{ fieldLabels[job.spec.field] }} · {{ statuses[job.status] }}</h3><p>{{ job.prepared }} / {{ job.count }} · {{ t('library', 'Receipts available until') }} {{ new Date(job.expiresAt * 1000).toLocaleDateString() }}</p>
        <p v-if="['preparing', 'applying', 'undoing'].includes(job.status)" role="status">{{ t('library', 'The background worker continues while you leave this page. Updates appear automatically.') }}</p>
        <p v-for="count in job.counts" :key="count.status">{{ statuses[count.status] }}: {{ count.n }}</p>
        <div class="actions"><button v-if="job.status === 'review'" type="button" :disabled="busy" @click="control('approve')">{{ t('library', 'Apply reviewed changes') }}</button><button v-if="['preparing', 'applying'].includes(job.status)" type="button" :disabled="busy" @click="control('pause')">{{ t('library', 'Pause') }}</button><button v-if="['paused', 'failed'].includes(job.status)" type="button" :disabled="busy" @click="control('resume')">{{ t('library', 'Resume') }}</button><button v-if="!['complete', 'undone', 'cancelled'].includes(job.status)" type="button" :disabled="busy" @click="control('cancel')">{{ t('library', 'Cancel job') }}</button><button v-if="['complete', 'cancelled'].includes(job.status)" type="button" :disabled="busy" @click="control('undo')">{{ t('library', 'Undo') }}</button><button v-if="['complete', 'cancelled', 'undone', 'review'].includes(job.status)" type="button" :disabled="busy" @click="control('delete')">{{ t('library', 'Delete job') }}</button><button type="button" :disabled="busy" @click="allJobs">{{ t('library', 'All jobs') }}</button></div>
        <div class="table-wrap"><table role="table"><thead role="rowgroup"><tr role="row"><th role="columnheader">{{ t('library', 'Book') }}</th><th role="columnheader">{{ t('library', 'Before') }}</th><th role="columnheader">{{ t('library', 'Proposed value') }}</th><th role="columnheader">{{ t('library', 'Status') }}</th></tr></thead><tbody role="rowgroup"><tr v-for="row in job.rows" :key="row.id" role="row"><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Book') }}</span><a :href="bookUrl(row.id)">{{ row.title || t('library', 'Unavailable book') }}</a></td><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Before') }}</span>{{ comparison(row, false) }}</td><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Proposed value') }}</span>{{ comparison(row, true) }}</td><td role="cell"><span class="mobile-label" aria-hidden="true">{{ t('library', 'Status') }}</span>{{ statuses[row.status] }}<p v-if="row.error">{{ rowErrors[row.error] || t('library', 'Could not complete the operation. Check your input and try again.') }}</p> <button v-if="job.status === 'review' && ['ready', 'skipped'].includes(row.status)" type="button" :disabled="busy" @click="control(row.status === 'ready' ? 'skip' : 'include', row.id)">{{ row.status === 'ready' ? t('library', 'Skip') : t('library', 'Include') }}</button></td></tr></tbody></table></div>
        <nav :aria-label="t('library', 'Pagination')"><button :disabled="busy || job.page === 1" @click="loadJob(job.id, job.page - 1)">{{ t('library', 'Previous') }}</button><span>{{ t('library', 'Page') }} {{ job.page }}</span><button :disabled="busy || !job.hasNext" @click="loadJob(job.id, job.page + 1)">{{ t('library', 'Next') }}</button></nav>
      </template>
      <ul v-else><li v-for="row in jobs" :key="row.id"><button type="button" :disabled="busy" @click="loadJob(row.id)">{{ new Date(row.created_at * 1000).toLocaleString() }} · {{ statuses[row.status] }}</button></li></ul>
    </section>
    <CurationArchives :request-token="requestToken" />
  </main>
</template>
<style scoped>
nav button[aria-pressed="true"] { background:var(--color-primary-element); color:var(--color-primary-element-text); } .curation { padding: 1.25rem; } header, nav, .actions { display: flex; align-items: center; flex-wrap: wrap; gap: .5rem; margin-block: .75rem; } header { justify-content: space-between; } label { display: inline-flex; flex-direction: column; gap: .25rem; margin: .5rem; max-width: 100%; } button { white-space: normal; } .inbox-row { display: flex; align-items: center; gap: .75rem; border-block-end: 1px solid var(--color-border); padding-block: .75rem; } .inbox-row > div:first-of-type { flex: 1; min-width: 0; overflow-wrap: anywhere; } .inbox-row img { width: 42px; height: 60px; object-fit: contain; } p { margin-block: .5rem; } a { text-decoration: underline; color: var(--color-primary-element); } .table-wrap { overflow: auto; } th, td { padding: .5rem; text-align: start; vertical-align: top; overflow-wrap: anywhere; } table { width: 100%; } @media(max-width:600px) { .inbox-row { flex-wrap: wrap; } .inbox-row .actions { width:100%; } }
.mobile-label { display: none; }
@media(max-width:600px) {
  .table-wrap { overflow: visible; }
  .table-wrap table, .table-wrap tbody { display: block; }
  .table-wrap thead { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); }
  .table-wrap tr { display: grid; margin-block:.75rem; padding:.5rem; border:1px solid var(--color-border); border-radius:8px; }
  .table-wrap td { display:flex; flex-direction:column; min-width:0; gap:.25rem; }
  .table-wrap td button { align-self:flex-start; }
  .mobile-label { display:block; font-weight:600; }
}
</style>
