<script setup>
import GoogleBooksAttribution from './GoogleBooksAttribution.vue'
import LookupCover from './LookupCover.vue'
import LookupCandidates from './LookupCandidates.vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { t, n } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { confirmAction } from '../confirm-action.js'
const props = defineProps({ returnToIncoming: Boolean, itemIds: { type: Array, default: () => [] }, requestToken: { type: String, required: true } })
const emit = defineEmits(['close', 'changed'])
const options = ref({ providers: [], fields: [], limit: 50 })
const provider = ref('')
const policy = ref('missing')
const fields = ref([])
const history = ref([])
const job = ref(null)
const busy = ref(false)
const error = ref('')
const notice = ref('')
const outcomes = ref([])
const queueFilter = ref('all')
const pinnedRow = ref(null)
const searchDraft = ref(null)
const selectedIds = [...props.itemIds]
const createKey = Array.from(crypto.getRandomValues(new Uint8Array(16)), byte => byte.toString(16).padStart(2, '0')).join('')
let timer
let disposed = false
let generation = 0
const labels = {
  cover: t('library', 'Cover'), identifiers: t('library', 'Identifiers'), isbn: t('library', 'ISBN'), ggkey: t('library', 'GGKEY'),
  title: t('library', 'Title'), subtitle: t('library', 'Subtitle'), publisher: t('library', 'Publisher'),
  publicationDate: t('library', 'Publication date'), description: t('library', 'Description'), subjects: t('library', 'Subjects'), language: t('library', 'Language'),
}
const states = {
  queued: t('library', 'Queued'), working: t('library', 'Searching…'), matches: t('library', 'Choose a match'),
  ready: t('library', 'Ready to review'), no_match: t('library', 'No matches'), failed: t('library', 'Needs attention'),
  applied: t('library', 'Applied'), skipped: t('library', 'Skipped'), cancelled: t('library', 'Cancelled'), undone: t('library', 'Undone'),
  archived: t('library', 'Change receipts'), running: t('library', 'Finding matches'), paused: t('library', 'Paused'), review: t('library', 'Ready for review'),
}
const providerName = id => id === 'loc' ? t('library', 'Library of Congress') : id === 'dnb' ? t('library', 'DNB (German National Library)') : id === 'googlebooks' ? t('library', 'Google Books') : t('library', 'Open Library')
const display = value => Array.isArray(value) ? value.map(entry => entry && typeof entry === 'object' ? `${entry.scheme}: ${entry.displayValue}` : entry).join('; ') : String(value ?? '')
const reviewed = computed(() => job.value?.rows.filter(row => !['queued', 'working'].includes(row.status)).length || 0)
const selectedCount = computed(() => job.value?.rows.filter(row => row.status === 'ready' && row.selected.length).length || 0)
const selectedFields = computed(() => job.value?.rows.reduce((total, row) => total + (row.status === 'ready' ? row.selected.length : 0), 0) || 0)
const strongCount = computed(() => job.value?.rows.filter(row => row.strongMissingFields?.length).length || 0)
const visibleRows = computed(() => (job.value?.rows || []).filter(row => {
  if (pinnedRow.value === row.id || searchDraft.value?.id === row.id) return true
  return queueFilter.value === 'all'
    || (queueFilter.value === 'review' && ['matches', 'ready'].includes(row.status))
    || (queueFilter.value === 'selected' && row.status === 'ready' && row.selected.length)
    || (queueFilter.value === 'applied' && ['applied', 'undone'].includes(row.status))
    || (queueFilter.value === 'no_match' && row.status === 'no_match')
    || (queueFilter.value === 'failed' && (row.status === 'failed' || row.applyError))
}))
function coverVersion(next) { generation++; job.value = next }
function refine(row) {
  searchDraft.value = { id: row.id, reviewVersion: row.reviewVersion, provider: row.provider, isbn: row.query?.isbn || '', title: row.query?.title || row.title, author: row.query?.author || '' }
}
function searchAgain() {
  const { id, ...draft } = searchDraft.value
  act(async () => {
    job.value = await request(`/${job.value.id}/books/${id}`, { action: 'search', ...draft })
    searchDraft.value = null; pinnedRow.value = id
    notice.value = t('library', 'Search queued for this book. Previous matches and approvals were cleared.')
    await nextTick(); document.getElementById(`lookup-book-${id}`)?.focus({ preventScroll: true })
  })
}
function failure(code) {
  return ({
    review_changed: t('library', 'This review changed in another tab. Reload the lookup before approving fields.'),
    stale_book: t('library', 'This book changed since lookup began. Start a new lookup to review its current values.'),
    not_found: t('library', 'This lookup or book is no longer available.'),
    job_limit: t('library', 'Finish or cancel active lookups, or delete an old run before starting another.'),
    resume_required: t('library', 'Resume a paused lookup before searching or requesting another edition. Cancelled lookups cannot restart.'),
    provider_disabled: t('library', 'The provider is disabled. Ask your administrator or try later.'),
    provider_unconfigured: t('library', 'Google Books needs a server API key.'),
    rate_limited: t('library', 'The provider is busy. A delayed retry is scheduled while attempts remain.'),
  })[code] || t('library', 'The operation could not finish. Try again; already applied books will not be applied twice.')
}
async function request(path = '', body = {}) {
  const response = await fetch(generateUrl(`/apps/library/api/metadata-batches${path}`), {
    method: 'POST', credentials: 'same-origin', cache: 'no-store',
    headers: { 'Content-Type': 'application/json', requesttoken: props.requestToken }, body: JSON.stringify(body),
  })
  let data
  try { data = await response.json() } catch { throw new Error(failure('operation_failed')) }
  if (!response.ok) throw new Error(failure(data.error))
  return data
}
async function act(work) {
  if (busy.value) return
  busy.value = true; error.value = ''; notice.value = ''; generation++
  clearTimeout(timer)
  try { await work() } catch (cause) { notice.value = ''; error.value = cause.message }
  finally { busy.value = false; schedule() }
}
function schedule() {
  clearTimeout(timer)
  if (disposed || busy.value || !job.value || !job.value.rows.some(row => ['queued', 'working'].includes(row.status)) || (job.value.status === 'paused' && !job.value.rows.some(row => row.status === 'working'))) return
  timer = setTimeout(poll, 3000)
}
async function poll() {
  const token = generation
  try {
    const next = await request(`/${job.value.id}`)
    if (disposed || token !== generation) return
    job.value = next; error.value = ''
    schedule()
  } catch (cause) { if (!disposed && token === generation) error.value = cause.message }
}
function setJob(next) {
  if (disposed) return
  job.value = next
  queueFilter.value = 'all'; pinnedRow.value = null; searchDraft.value = null
  const url = new URL(window.location.href)
  url.searchParams.set('metadataLookup', '1'); url.searchParams.set('lookupJob', next.id)
  window.history.replaceState({}, '', url)
}
async function load() {
  await act(async () => {
    const data = await request()
    options.value = data.options; history.value = data.jobs
    provider.value = data.options.defaultProvider || (data.options.providers.length === 1 ? data.options.providers[0] : '')
    fields.value = data.options.fields.filter(field => field !== 'cover')
    const id = new URLSearchParams(window.location.search).get('lookupJob')
    if (id) setJob(await request(`/${id}`))
  })
}
function create() { act(async () => { setJob(await request('/create', { requestId: createKey, ids: selectedIds, provider: provider.value, policy: policy.value, fields: fields.value.filter(field => (field !== 'ggkey' || provider.value === 'googlebooks') && (field !== 'cover' || provider.value === 'openlibrary')) })); notice.value = t('library', 'Lookup queued. Background processing depends on your server’s cron schedule. You can leave and return here.'); }) }
function open(id) { act(async () => { outcomes.value = []; setJob(await request(`/${id}`)) }) }
function control(action) { act(async () => { job.value = await request(`/${job.value.id}/control`, { action }) }) }
function rowAction(row, action, extra = {}) {
  act(async () => {
    job.value = await request(`/${job.value.id}/books/${row.id}`, { action, reviewVersion: row.reviewVersion, ...extra })
    if (action === 'editions') notice.value = t('library', 'Other editions queued. Previous edition approvals were cleared; other books are unchanged.')
    if (['apply', 'undo'].includes(action)) emit('changed')
    if (['apply', 'undo', 'skip', 'editions'].includes(action)) { pinnedRow.value = row.id; await nextTick(); document.getElementById(`lookup-book-${row.id}`)?.focus({ preventScroll: true }) }
    if (action === 'apply' || action === 'undo') notice.value = action === 'apply' ? t('library', 'Changes applied. Continue with the next book.') : t('library', 'Changes undone. Later edits are protected.')
  })
}
function toggle(row, field, checked) {
  const selected = new Set(row.selected)
  if (checked) selected.add(field); else selected.delete(field)
  rowAction(row, 'select', { fields: [...selected] })
}
function applySelected() {
  act(async () => {
    const id = job.value.id
    const rows = job.value.rows.filter(row => row.status === 'ready' && row.selected.length).map(row => ({ id: row.id, reviewVersion: row.reviewVersion }))
    outcomes.value = []
    for (let offset = 0; offset < rows.length; offset += 10) {
      if (disposed) break
      notice.value = t('library', 'Applying reviewed changes: {done} of {total} books', { done: offset, total: rows.length })
      const result = await request(`/${id}/apply`, { rows: rows.slice(offset, offset + 10) })
      job.value = result.job; outcomes.value.push(...result.outcomes)
      if (result.outcomes.some(row => row.status === 'applied')) emit('changed')
    }
    if (!disposed) notice.value = t('library', 'Batch finished. Check each outcome below.')
  })
}
async function remove() {
  const archived = job.value.status === 'archived'
  const message = archived ? t('library', 'Delete these change receipts and their Undo history? Applied metadata stays in your books.') : t('library', 'Delete lookup suggestions? Applied-change receipts remain available for 90 days after application.')
  if (!await confirmAction(message, archived ? t('library', 'Delete receipts') : t('library', 'Delete lookup'))) return
  await act(async () => {
    await request(`/${job.value.id}/control`, { action: archived ? 'delete_receipts' : 'delete' })
    job.value = null
    const url = new URL(window.location.href); url.searchParams.delete('lookupJob'); window.history.replaceState({}, '', url)
    history.value = (await request()).jobs
  })
}
function close() {
  generation++
  const url = new URL(window.location.href); url.searchParams.delete('lookupJob'); url.searchParams.delete('metadataLookup'); window.history.replaceState({}, '', url)
  emit('close')
}
onMounted(load)
onBeforeUnmount(() => { disposed = true; generation++; clearTimeout(timer) })
</script>

<template>
<GoogleBooksAttribution v-if="provider === 'googlebooks' || job?.provider === 'googlebooks'" />
  <section class="library-batch-lookup" :aria-busy="busy" :aria-label="t('library', 'Find book details')">
    <header class="library-batch-toolbar"><h2>{{ t('library', 'Find book details') }}</h2><button type="button" @click="close">{{ returnToIncoming ? t('library', 'Back to incoming books') : t('library', 'Back to browsing') }}</button></header>
    <p v-if="busy" role="status">{{ t('library', 'Updating…') }}</p>
    <p v-if="error" role="alert">{{ error }} <button type="button" :disabled="busy" @click="job ? act(poll) : load()">{{ t('library', 'Retry') }}</button></p>
    <p v-if="notice" role="status">{{ notice }}</p>
    <template v-if="!job">
      <form v-if="selectedIds.length" @submit.prevent="create">
        <p>{{ n('library', '%n book selected', '%n books selected', selectedIds.length) }}</p>
        <p>{{ t('library', 'Find matches sends each selected book’s ISBN, or title and author, to your chosen provider. Nothing is saved to books until you select fields and apply them.') }}</p>
        <div class="library-batch-toolbar">
          <label>{{ t('library', 'Provider') }}<select v-model="provider" :disabled="busy"><option value="">{{ t('library', 'Choose a provider') }}</option><option v-for="id in options.providers" :key="id" :value="id">{{ providerName(id) }}</option></select></label>
          <label>{{ t('library', 'Update policy') }}<select v-model="policy" :disabled="busy"><option value="missing">{{ t('library', 'Fill missing fields') }}</option><option value="review">{{ t('library', 'Review replacements too') }}</option></select></label>
        </div>
        <fieldset :disabled="busy"><legend>{{ t('library', 'Fields to look up') }}</legend><label v-for="field in options.fields.filter(field => (field !== 'ggkey' || provider === 'googlebooks') && (field !== 'cover' || provider === 'openlibrary'))" :key="field" class="library-batch-check"><input v-model="fields" type="checkbox" :value="field">{{ labels[field] }}</label></fieldset>
        <p v-if="selectedIds.length > options.limit" role="alert">{{ t('library', 'Select at most 50 books for one lookup.') }}</p>
        <p v-if="!options.providers.length">{{ t('library', 'No metadata provider is available. Check Library settings.') }}</p>
        <button type="submit" class="button primary" :disabled="busy || !provider || !fields.length || selectedIds.length > options.limit">{{ t('library', 'Find matches') }}</button>
      </form>
      <p v-else>{{ t('library', 'Select up to 50 books in your catalogue or a list, then choose Find book details.') }}</p>
      <h3>{{ t('library', 'Recent lookups') }}</h3>
      <p>{{ t('library', 'Lookup suggestions expire after 30 days. Applied-change receipts and Undo remain available for 90 days after application. Applied book metadata is retained.') }}</p>
      <ul><li v-for="run in history" :key="run.id"><button type="button" :disabled="busy" @click="open(run.id)">{{ new Date(Number(run.created_at) * 1000).toLocaleString() }} · {{ states[run.status] }}</button></li></ul>
    </template>
    <template v-else>
      <div class="library-batch-toolbar">
        <strong>{{ providerName(job.provider) }} · {{ states[job.status] }}</strong>
        <span role="status">{{ t('library', '{done} of {total} books processed', { done: reviewed, total: job.rows.length }) }}</span>
        <progress :value="reviewed" :max="job.rows.length" :aria-label="t('library', 'Lookup progress')" />
        <button v-if="job.status === 'running'" type="button" :disabled="busy" @click="control('pause')">{{ t('library', 'Pause') }}</button>
        <button v-if="job.status === 'paused'" type="button" :disabled="busy" @click="control('resume')">{{ t('library', 'Resume') }}</button>
        <button v-if="['running', 'paused'].includes(job.status)" type="button" :disabled="busy" @click="control('cancel')">{{ t('library', 'Cancel lookup') }}</button>
        <button type="button" :disabled="busy" @click="remove">{{ job.status === 'archived' ? t('library', 'Delete receipts') : t('library', 'Delete lookup') }}</button>
      </div>
      <p v-if="job.status !== 'archived'">{{ t('library', 'Review editions carefully: an ISBN match alone does not guarantee the correct edition. Cancel stops new work; an in-flight request may finish. Completed suggestions remain available.') }}</p>
      <p v-if="job.status === 'archived'">{{ t('library', 'Suggestions have been removed. Change receipts remain available; Undo still protects later edits.') }}</p>
      <div class="library-batch-toolbar">
        <label>{{ t('library', 'Show books') }}<select v-model="queueFilter" @change="pinnedRow = null">
          <option value="all">{{ t('library', 'All') }}</option><option value="review">{{ t('library', 'Needs review') }}</option>
          <option value="selected">{{ t('library', 'Ready to apply') }}</option><option value="applied">{{ t('library', 'Applied') }}</option>
          <option value="no_match">{{ t('library', 'No matches') }}</option><option value="failed">{{ t('library', 'Needs attention') }}</option>
        </select></label>
        <button v-if="job.status !== 'archived'" type="button" :disabled="busy || !strongCount" @click="control('select_missing')">{{ t('library', 'Select missing fields from strong matches') }}</button>
      </div>
      <p v-if="job.status !== 'archived'" role="status">{{ n('library', '%n book selected', '%n books selected', selectedCount) }} · {{ n('library', '%n field selected', '%n fields selected', selectedFields) }} — {{ t('library', 'Across all filters') }}</p>
      <button v-if="job.status !== 'archived'" type="button" class="button primary" :disabled="busy || !selectedCount" @click="applySelected">{{ n('library', 'Apply selected fields in %n book', 'Apply selected fields in %n books', selectedCount) }}</button>
      <ul v-if="outcomes.length" aria-live="polite"><li v-for="outcome in outcomes" :key="outcome.id">{{ job.rows.find(row => row.id === outcome.id)?.title }}: {{ outcome.status === 'applied' ? t('library', 'Applied') : t('library', 'Not applied; review this book again.') }}</li></ul>
      <p v-if="!visibleRows.length">{{ t('library', 'No books match this filter.') }}</p>
      <article v-for="row in visibleRows" :key="row.id" class="library-batch-book">
        <header class="library-batch-toolbar">
          <img :src="generateUrl(`/apps/library/items/${row.id}/cover`)" alt="" loading="lazy" width="40" height="56">
          <h3 :id="`lookup-book-${row.id}`" tabindex="-1">{{ row.title }}</h3><span>{{ states[row.status] }}</span><span class="library-muted">{{ providerName(row.provider) }}</span>
          <button v-if="row.status === 'ready'" type="button" class="button primary" :disabled="busy || !row.selected.length" @click="rowAction(row, 'apply')">{{ t('library', 'Apply now') }}</button>
          <button v-if="row.status === 'applied'" type="button" :disabled="busy" @click="rowAction(row, 'undo')">{{ t('library', 'Undo') }}</button>
          <button v-if="['failed', 'no_match', 'skipped'].includes(row.status) && !['paused', 'cancelled', 'archived'].includes(job.status)" type="button" :disabled="busy" @click="rowAction(row, 'retry')">{{ t('library', 'Retry') }}</button>
          <button v-if="!['applied', 'undone', 'skipped'].includes(row.status)" type="button" :disabled="busy" @click="rowAction(row, 'skip')">{{ t('library', 'Skip') }}</button>
          <button v-if="!['applied', 'undone'].includes(row.status) && !['paused', 'cancelled', 'archived'].includes(job.status)" type="button" :disabled="busy" @click="refine(row)">{{ t('library', 'Refine search') }}</button>
        </header>
        <form v-if="searchDraft?.id === row.id" class="library-batch-search" @submit.prevent="searchAgain">
          <p>{{ t('library', 'Changing this search clears its previous matches and field approvals. Other books are unchanged.') }}</p>
          <div class="library-batch-toolbar">
            <label>{{ t('library', 'Provider') }}<select v-model="searchDraft.provider" :disabled="busy"><option v-for="id in options.providers" :key="id" :value="id">{{ providerName(id) }}</option></select></label>
            <label>{{ t('library', 'ISBN') }}<input v-model="searchDraft.isbn" maxlength="50" :disabled="busy"></label>
            <label>{{ t('library', 'Title') }}<input v-model="searchDraft.title" maxlength="200" :disabled="busy"></label>
            <label>{{ t('library', 'Author') }}<input v-model="searchDraft.author" maxlength="200" :disabled="busy"></label>
          </div>
          <p>{{ t('library', 'An ISBN search takes precedence. Clear it to search by title and author.') }}</p>
          <button type="submit" :disabled="busy || !searchDraft.provider || (!searchDraft.isbn.trim() && searchDraft.title.trim().length < 3)">{{ t('library', 'Search this book') }}</button>
          <button type="button" :disabled="busy" @click="searchDraft = null">{{ t('library', 'Cancel') }}</button>
        </form>
        <p v-if="row.phase === 'editions' && ['queued', 'working'].includes(row.status)" role="status">{{ t('library', 'Loading other editions…') }}</p>
        <p v-if="row.retryAt > Date.now() / 1000 && row.status === 'queued'">{{ t('library', 'Retry after {time}', { time: new Date(row.retryAt * 1000).toLocaleString() }) }}</p>
        <p v-if="row.applyError" role="alert">{{ failure(row.applyError) }}</p>
        <p v-if="row.error">{{ failure(row.error) }}</p>
        <details v-if="row.results.length && ['matches', 'ready'].includes(row.status)" :open="row.status === 'matches'">
          <summary>{{ t('library', 'Edition matches') }}</summary>
          <LookupCandidates :results="row.results" :edition-page="row.editionPage || null" :disabled="busy || ['paused', 'cancelled'].includes(job.status)" @choose="rowAction(row, 'choose', { editionId: $event.editionId })" @editions="rowAction(row, 'editions', $event)" />
        </details>
        <details v-if="row.receipt">
          <summary>{{ t('library', 'Change receipt') }}</summary>
          <a :href="row.receipt.url" target="_blank" rel="noopener noreferrer">{{ t('library', 'Provider source') }}</a>
          <div v-for="(value, field) in row.receipt.after" :key="field" class="library-batch-proposal"><span><strong>{{ labels[field] }}</strong><span class="library-batch-values"><span>{{ t('library', 'Before') }}: {{ display(row.receipt.before[field]) || '—' }}</span><span>{{ t('library', 'After') }}: {{ display(value) }}</span></span></span></div>
        </details>
        <template v-if="row.status === 'ready'">
          <LookupCover v-if="row.edition.coverId && job.fields.includes('cover')" :job-id="job.id" :item-id="row.id" :review-version="row.reviewVersion" :request-token="requestToken" :disabled="busy" :selected="row.selected.includes('cover')" @version="coverVersion" @select="toggle(row, 'cover', $event)" />
          <p v-if="row.provider === 'googlebooks' && job.fields.includes('cover')">{{ t('library', 'Saving covers from Google Books is not supported.') }}</p>
          <p v-if="row.edition.languages?.length">{{ t('library', 'Language') }}: {{ display(row.edition.languages) }}<span v-if="!row.edition.fields.language"> · {{ t('library', 'Unrecognized language evidence. Review it manually; no language change is offered.') }}</span></p>
          <p><a :href="row.edition.url" target="_blank" rel="noopener noreferrer">{{ t('library', 'Provider source') }} · {{ row.edition.fields.title || row.editionId }}</a></p>
          <p v-if="!row.proposals.length">{{ t('library', 'No changes for the selected fields and update policy.') }}</p>
          <label v-for="proposal in row.proposals.filter(proposal => proposal.key !== 'cover')" :key="proposal.key" class="library-batch-proposal">
            <input type="checkbox" :checked="row.selected.includes(proposal.key)" :disabled="busy" @change="toggle(row, proposal.key, $event.target.checked)">
            <span><strong>{{ labels[proposal.key] }}</strong><span class="library-batch-values"><span>{{ t('library', 'Before') }}: {{ display(proposal.before) || '—' }}</span><span>{{ t('library', 'After') }}: {{ display(proposal.after) }}</span></span></span>
          </label>
        </template>
      </article>
    </template>
  </section>
</template>

<style scoped>
.library-batch-lookup { padding: 20px; max-width: 1200px; margin-inline: auto; }
.library-batch-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-block: 12px; }
.library-batch-toolbar h3 { font-size: 18px; font-weight: 600; flex: 1 1 200px; margin: 0; overflow-wrap: anywhere; }
.library-batch-toolbar img { object-fit: contain; }
.library-batch-toolbar label { display: grid; gap: 4px; min-width: 0; }
.library-batch-search { padding: 12px; background: var(--color-background-hover); border-radius: 8px; }
.library-batch-search input { width: 100%; min-width: 0; box-sizing: border-box; }
.library-batch-search .library-batch-toolbar label { flex: 1 1 180px; }
.library-batch-check { display: inline-flex; align-items: center; gap: 8px; padding: 8px; }
.library-batch-book { border-bottom: 1px solid var(--color-border); padding-block: 12px; }
.library-batch-book li { padding: 12px 0; overflow-wrap: anywhere; }
.library-batch-book a { color: var(--color-primary-element); text-decoration: underline; margin-inline-end: 12px; }
.library-batch-proposal { display: flex; align-items: start; gap: 12px; padding: 10px; }
.library-batch-proposal > span { min-width: 0; flex: 1; }
.library-batch-values { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; white-space: pre-wrap; overflow-wrap: anywhere; }
.library-batch-lookup button, .library-batch-lookup select { min-height: 36px; max-width: 100%; }
.library-batch-lookup :focus-visible { outline: 2px solid var(--color-primary-element); outline-offset: 3px; }
@media (max-width: 600px) { .library-batch-values { grid-template-columns: 1fr; } .library-batch-lookup { padding: 12px; } .library-batch-lookup button { min-height: 44px; } }
</style>
