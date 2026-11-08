<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import GoogleBooksAttribution from './GoogleBooksAttribution.vue'
const props = defineProps({ itemId: Number, revision: String, requestToken: String, disabled: Boolean })
const emit = defineEmits(['undone'])
const opened = ref(false), busy = ref(false), error = ref(''), receipts = ref([])
let generation = 0
onBeforeUnmount(() => { generation++ })
async function request(url, data = {}) {
  const r = await fetch(generateUrl(url), { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json', requesttoken: props.requestToken }, body: JSON.stringify(data) })
  if (!r.ok) throw new Error(t('library', 'The change could not be undone. Later edits and changed files are protected.'))
  return r.json()
}
function toggle(event) { opened.value = event.target.open; if (opened.value) load() }
async function load() {
  const token = ++generation
  busy.value = true; error.value = ''
  try { const data = await request(`/apps/library/items/${props.itemId}/metadata-lookup/receipts`); if (token === generation) receipts.value = data.receipts }
  catch (cause) { if (token === generation) error.value = cause.message }
  finally { if (token === generation) busy.value = false }
}
watch(() => [props.itemId, props.revision], () => { generation++; receipts.value = []; if (opened.value) load() })
async function undo(row) {
  if (busy.value || props.disabled) return
  busy.value = true; error.value = ''
  try { await request(`/apps/library/api/metadata-batches/${row.jobId}/books/${props.itemId}`, { action: 'undo', reviewVersion: row.reviewVersion }); emit('undone'); await load() }
  catch (cause) { error.value = cause.message }
  finally { busy.value = false }
}
const display = value => Array.isArray(value) ? value.map(v => typeof v === 'object' ? `${v.scheme}: ${v.displayValue}` : v).join('; ') : String(value ?? '—')
const labels = { title: t('library', 'Title'), subtitle: t('library', 'Subtitle'), publisher: t('library', 'Publisher'), publicationDate: t('library', 'Publication date'), description: t('library', 'Description'), subjects: t('library', 'Subjects'), language: t('library', 'Language'), identifiers: t('library', 'Identifiers') }
</script>
<template>
  <details class="library-full-details-card" @toggle="toggle">
    <summary>{{ t('library', 'Lookup change history') }}</summary>
    <p v-if="busy" role="status">{{ t('library', 'Updating…') }}</p><p v-if="error" role="alert">{{ error }}</p>
    <p v-if="disabled">{{ t('library', 'Save or discard your edits before Undo.') }}</p>
    <p v-if="!busy && !receipts.length">{{ t('library', 'No retained lookup changes for this book.') }}</p>
    <article v-for="row in receipts" :key="row.jobId"><GoogleBooksAttribution v-if="row.receipt.provider === 'googlebooks'" />
      <p><a :href="row.receipt.url" target="_blank" rel="noopener noreferrer">{{ row.receipt.provider === 'googlebooks' ? 'Google Books' : 'Open Library' }}</a> · {{ new Date(row.receipt.appliedAt * 1000).toLocaleString() }}</p>
      <dl><template v-for="(value, field) in row.receipt.after" :key="field"><dt>{{ labels[field] || field }}</dt><dd>{{ display(row.receipt.before[field]) }} → {{ display(value) }}</dd></template></dl>
      <p v-if="row.receipt.cover">{{ t('library', 'Cover replaced') }}</p>
      <button v-if="row.status === 'applied'" type="button" :disabled="busy || disabled" @click="undo(row)">{{ t('library', 'Undo') }}</button><span v-else>{{ t('library', 'Undone') }}</span>
    </article>
  </details>
</template>
<style scoped>
article { border-top: 1px solid var(--color-border); padding-block: 12px; }
dd { margin-inline-start: 16px; overflow-wrap: anywhere; white-space: pre-wrap; }
dt { font-weight: 600; }
a { color: var(--color-primary-element); text-decoration: underline; }
</style>
