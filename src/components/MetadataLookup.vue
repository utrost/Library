<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import LookupCover from './LookupCover.vue'
import { n, t } from '@nextcloud/l10n'

const props = defineProps({
  item: { type: Object, required: true },
  draft: { type: Object, required: true },
  baseUrl: { type: String, required: true },
  requestToken: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  staged: { type: Boolean, default: false },
})
const emit = defineEmits(['stage'])
const provider = ref('openlibrary')
const providerName = computed(() => provider.value === 'googlebooks' ? t('library', 'Google Books') : t('library', 'Open Library'))
const mode = ref('title')
const isbn = ref('')
const title = ref('')
const author = ref('')
const busy = ref(false)
const error = ref('')
const results = ref([])
const searched = ref(false)
const edition = ref(null)
const selectedFields = ref([])
const notice = ref('')
let generation = 0
let requestController = null
const labels = {
  title: t('library', 'Title'), subtitle: t('library', 'Subtitle'),
  publisher: t('library', 'Publisher'), publicationDate: t('library', 'Publication date'),
  description: t('library', 'Description'), subjects: t('library', 'Subjects'), language: t('library', 'Language'),
}
watch(() => [props.item.id, props.item.metadataRevision], () => {
  generation += 1
  requestController?.abort()
  requestController = null
  busy.value = false
  error.value = ''
  selectedFields.value = []
  const identifier = (props.item.identifiers || []).find(row => row.scheme === 'isbn' && row.valid !== false && row.displayValue)
  isbn.value = identifier?.displayValue || ''
  title.value = props.item.title || ''
  author.value = props.item.canonicalAuthors?.[0]?.name || props.item.creators?.split(/[;,]/)[0]?.trim() || ''
  mode.value = isbn.value ? 'isbn' : 'title'
  results.value = []
  edition.value = null
  searched.value = false
  notice.value = ''
}, { immediate: true })
watch(provider, () => {
  generation += 1
  requestController?.abort()
  requestController = null
  busy.value = false
  error.value = ''
  notice.value = ''
  results.value = []
  edition.value = null
  selectedFields.value = []
  searched.value = false
})
onBeforeUnmount(() => { generation += 1; requestController?.abort() })

async function request(path, values, signal) {
  const body = new FormData()
  body.set('requesttoken', props.requestToken)
  body.set('provider', provider.value)
  Object.entries(values).forEach(([key, value]) => body.set(key, value))
  const response = await fetch(`${props.baseUrl}/metadata-lookup${path}`, {
    method: 'POST', credentials: 'same-origin', cache: 'no-store', body, signal,
  })
  if (!response.ok) {
    const failure = await response.json().catch(() => ({}))
    throw new Error(failure.error === 'job_limit'
    ? t('library', 'Finish or cancel active lookups, or delete an old run before starting another.')
    : response.status === 429
    ? t('library', '{provider} is busy. Wait a moment and try again.', { provider: providerName.value })
    : response.status === 400
    ? t('library', 'Enter a valid ISBN or at least three title characters.')
    : failure.error === 'provider_unconfigured'
    ? t('library', 'Google Books needs a server API key. Ask your Nextcloud administrator to configure it.')
    : response.status === 503
    ? t('library', '{provider} lookup is disabled on this Nextcloud server.', { provider: providerName.value })
    : t('library', '{provider} is unavailable. Try again later or edit the book directly.', { provider: providerName.value }))
  }
  return response.json()
}
async function search() {
  if (busy.value || props.disabled || props.staged) return
  const current = ++generation
  busy.value = true
  error.value = ''
  notice.value = ''
  results.value = []
  edition.value = null
  searched.value = false
  requestController = new AbortController()
  try {
    const values = mode.value === 'isbn' ? { isbn: isbn.value } : { title: title.value, author: author.value }
    const response = await request('', values, requestController.signal)
    if (current !== generation) return
    results.value = response.results || []
    searched.value = true
  } catch (cause) { if (current === generation && cause.name !== 'AbortError') error.value = cause.message }
  finally { if (current === generation) { busy.value = false; requestController = null } }
}
async function choose(candidate) {
  if (busy.value || props.disabled || props.staged) return
  const current = ++generation
  busy.value = true
  error.value = ''
  edition.value = null
  selectedFields.value = []
  requestController = new AbortController()
  try { const result = await request('/edition', { editionId: candidate.editionId }, requestController.signal); if (current === generation) edition.value = result }
  catch (cause) { if (current === generation && cause.name !== 'AbortError') error.value = cause.message }
  finally { if (current === generation) { busy.value = false; requestController = null } }
}
function display(value) { return Array.isArray(value) ? value.join('\n') : String(value ?? '') }
const fields = computed(() => Object.entries(edition.value?.fields || {}).filter(([key, value]) =>
  Object.hasOwn(labels, key) && display(value).trim() && display(value).trim() !== display(props.draft[key]).trim(),
).map(([key, value]) => ({ key, label: labels[key], current: display(props.draft[key]), suggested: display(value) })).concat(
  (edition.value?.isbn || []).filter(code => !((props.draft.identifiers || []).some(row => row.scheme === 'isbn' && String(row.displayValue || '').replace(/[\s-]/g, '').toUpperCase() === String(code).replace(/[\s-]/g, '').toUpperCase())))
    .map(code => ({ key: `isbn:${code}`, label: t('library', 'ISBN'), current: '', suggested: code })),
  edition.value?.ggkey && !(props.draft.identifiers || []).some(row => row.scheme === 'ggkey' && row.displayValue === edition.value.ggkey)
    ? [{ key: `ggkey:${edition.value.ggkey}`, label: t('library', 'GGKEY'), current: '', suggested: edition.value.ggkey }]
    : [],
))
function coverVersion(job) { edition.value.lookup.reviewVersion = job.rows[0].reviewVersion; selectedFields.value = selectedFields.value.filter(f => f !== 'cover') }
function stage() {
  const rows = fields.value.filter(row => selectedFields.value.includes(row.key))
  const selected = Object.fromEntries(rows.filter(row => !row.key.startsWith('isbn:') && !row.key.startsWith('ggkey:')).map(row => [row.key, row.suggested]))
  const isbns = rows.filter(row => row.key.startsWith('isbn:')).map(row => row.suggested)
  if (isbns.length) selected.isbn = isbns
  const ggkeys = rows.filter(row => row.key.startsWith('ggkey:')).map(row => row.suggested)
  if (ggkeys.length) selected.ggkey = ggkeys
  const cover = selectedFields.value.includes('cover')
  if (!rows.length && !cover) return
  const approved = [...new Set(rows.map(row => row.key.startsWith('isbn:') ? 'isbn' : row.key.startsWith('ggkey:') ? 'ggkey' : row.key))]
  if (cover) approved.push('cover')
  emit('stage', selected, { ...edition.value.lookup, fields: approved })
  notice.value = n('library', '%n suggested field staged. Review and save your book changes.', '%n suggested fields staged. Review and save your book changes.', rows.length + (cover ? 1 : 0))
  selectedFields.value = []
}
</script>

<template>
  <details class="library-metadata-lookup library-full-details-card">
    <summary>{{ t('library', 'Find book details') }}</summary>
    <div class="library-metadata-lookup-content">
      <p>{{ t('library', 'Choose a provider, then search explicitly. Your ISBN or title and author are sent only to the selected provider when you choose Search. Suggestions change nothing until you review and save.') }}</p>
      <p v-if="staged">{{ t('library', 'Save or discard staged suggestions before choosing another edition.') }}</p>
      <form class="library-metadata-lookup-form" @submit.prevent="search">
        <label>{{ t('library', 'Provider') }} <select v-model="provider" :disabled="disabled || staged"><option value="openlibrary">{{ t('library', 'Open Library') }}</option><option value="googlebooks">{{ t('library', 'Google Books') }}</option></select></label>
        <label>{{ t('library', 'Search by') }} <select v-model="mode" :disabled="busy || disabled || staged"><option value="isbn">{{ t('library', 'ISBN') }}</option><option value="title">{{ t('library', 'Title and author') }}</option></select></label>
        <label v-if="mode === 'isbn'">{{ t('library', 'ISBN') }} <input v-model="isbn" inputmode="text" maxlength="50" :disabled="busy || disabled || staged"></label>
        <template v-else><label>{{ t('library', 'Title') }} <input v-model="title" maxlength="200" :disabled="busy || disabled || staged"></label><label>{{ t('library', 'Author') }} <input v-model="author" maxlength="200" :disabled="busy || disabled || staged"></label></template>
        <button type="submit" class="button secondary" :disabled="busy || disabled || staged || (mode === 'isbn' ? !isbn.trim() : title.trim().length < 3)">{{ busy ? t('library', 'Searching…') : t('library', 'Search {provider}', { provider: providerName }) }}</button>
      </form>
      <p v-if="busy" role="status" aria-live="polite">{{ t('library', 'Searching {provider}…', { provider: providerName }) }}</p>
      <p v-if="error" role="alert" class="library-full-details-error">{{ error }}</p>
      <p v-if="notice" role="status" class="library-full-details-feedback">{{ notice }}</p>
      <p v-if="searched && !results.length" role="status">{{ t('library', 'No matching editions found. Try the title and author search or edit the book directly.') }}</p>
      <p v-if="searched && results.length" role="status">{{ n('library', '%n matching edition found. Choose one to compare.', '%n matching editions found. Choose one to compare.', results.length) }}</p>
      <ul v-if="results.length" class="library-metadata-lookup-results" :aria-label="t('library', 'Matching editions')">
        <li v-for="candidate in results" :key="candidate.editionId"><button type="button" class="button secondary" :aria-label="`${t('library', 'Compare edition')} ${candidate.editionId}: ${candidate.title}`" :disabled="busy || disabled || staged" @click="choose(candidate)">{{ candidate.title }}</button><span class="library-muted">{{ [candidate.authors?.join(', '), candidate.publisher, candidate.year, candidate.languages?.join(', '), candidate.match === 'isbn' ? t('library', 'ISBN match') : ''].filter(Boolean).join(' · ') }}</span></li>
      </ul>
      <div v-if="edition" class="library-metadata-lookup-review">
        <h3>{{ t('library', 'Selected edition') }} · {{ edition.editionId }}</h3>
        <p>{{ t('library', 'Compare this edition with your current book details. Select only fields you want to stage.') }} <a :href="edition.url" target="_blank" rel="noopener noreferrer">{{ t('library', 'View source at {provider}', { provider: providerName }) }}</a></p>
        <p v-if="edition.languages?.length && !edition.fields.language">{{ t('library', 'Unrecognized language evidence. Review it manually; no language change is offered.') }}</p>
        <p class="library-muted">{{ [edition.isbn?.length ? `ISBN ${edition.isbn.join(', ')}` : '', edition.languages?.length ? `${t('library', 'Language')}: ${edition.languages.join(', ')}` : ''].filter(Boolean).join(' · ') }}</p>
        <p v-if="!fields.length" role="status">{{ t('library', 'This edition has no different supported details to suggest.') }}</p>
        <div v-for="row in fields" :key="row.key" class="library-metadata-lookup-field"><label><input v-model="selectedFields" type="checkbox" :value="row.key" :disabled="disabled"><strong>{{ row.label }}<template v-if="row.key.startsWith('isbn:') || row.key.startsWith('ggkey:')"> {{ row.suggested }}</template></strong></label><div><small>{{ t('library', 'Current draft') }}</small><p>{{ row.current || '—' }}</p></div><div><small>{{ t('library', 'Suggested') }}</small><p>{{ row.suggested }}</p></div></div>
        <LookupCover v-if="edition.coverId && edition.lookup" :job-id="edition.lookup.jobId" :item-id="item.id" :review-version="edition.lookup.reviewVersion" :request-token="requestToken" :disabled="disabled || staged" :selected="selectedFields.includes('cover')" @version="coverVersion" @select="selectedFields = $event ? [...selectedFields, 'cover'] : selectedFields.filter(f => f !== 'cover')" />
        <p v-if="provider === 'googlebooks'">{{ t('library', 'Saving covers from Google Books is not supported.') }}</p>
        <button v-if="fields.length || edition.coverId" type="button" class="button secondary" :disabled="disabled || !selectedFields.length" @click="stage">{{ t('library', 'Stage selected details') }}</button>
      </div>
    </div>
  </details>
</template>

<style scoped>
.library-metadata-lookup-content { display: grid; gap: .75rem; padding-top: 1rem; }
.library-metadata-lookup-content p { margin: 0; }
.library-metadata-lookup-form { display: flex; flex-wrap: wrap; align-items: end; gap: .75rem; }
.library-metadata-lookup-form label { display: grid; gap: .25rem; min-width: min(100%, 13rem); flex: 1; }
.library-metadata-lookup-results { display: grid; gap: .5rem; margin: 0; padding-left: 1.25rem; }
.library-metadata-lookup-results li { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; }
.library-metadata-lookup-review { display: grid; gap: .75rem; }
.library-metadata-lookup-field { display: grid; grid-template-columns: minmax(8rem, .8fr) repeat(2, minmax(0, 1fr)); gap: .75rem; padding: .65rem 0; border-top: 1px solid var(--color-border); }
.library-metadata-lookup-field p { white-space: pre-wrap; overflow-wrap: anywhere; }
.library-metadata-lookup-field label { display: flex; align-items: start; gap: .4rem; }
@media (max-width: 650px) { .library-metadata-lookup-field { grid-template-columns: 1fr; gap: .25rem; } }
</style>
