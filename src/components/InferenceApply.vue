<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ results: { type: Array, required: true }, labels: { type: Object, required: true }, context: { type: String, default: '' }, requestToken: { type: String, default: '' }, disabled: Boolean, wholeFolder:Boolean })
const emit = defineEmits(['changed'])
const selected = ref([]), plan = ref(null), history = ref([]), busy = ref(false), error = ref(''), message = ref(''), confirmation = ref('')
const supported = new Set(['author', 'title', 'subtitle', 'series', 'seriesNumber', 'genre', 'language', 'publisher', 'subject', 'year'])
const candidates = computed(() => props.results.filter(item => ['ready', 'conflict'].includes(item.status) && item.revision).map(item => ({ ...item, changes: item.changes.filter(change => supported.has(change.field) && ['ready', 'conflict'].includes(change.status)) })).filter(item => item.changes.length))
const key = (item, change) => `${item.id}:${change.field}`
const chosen = computed(() => candidates.value.map(item => ({ id: item.id, revision: item.revision, changes: Object.fromEntries(item.changes.filter(change => selected.value.includes(key(item, change))).map(change => [change.field, change.field === 'author' ? (change.values || [change.value]) : change.value])) })).filter(item => Object.keys(item.changes).length))
const statuses = computed(() => ({ prepared: t('library', 'Awaiting approval'), applied: t('library', 'Applied'), undone: t('library', 'Undone') }))
let generation = 0
watch(() => JSON.stringify([props.results, props.context]), () => { selected.value = []; if (plan.value?.status === 'prepared') plan.value = null; confirmation.value = ''; generation++ })
watch(() => JSON.stringify(selected.value), () => { if (plan.value?.status === 'prepared') plan.value = null; confirmation.value = ''; generation++ })
function selectEmpty() { selected.value = candidates.value.flatMap(item => item.changes.filter(change => change.status === 'ready').map(change => key(item, change))) }
async function api(path = '', body) {
  const response = await fetch(generateUrl(`/apps/library/api/inference/batches${path}`), { credentials: 'same-origin', cache: 'no-store', method: body === undefined ? 'GET' : 'POST', headers: { 'Content-Type': 'application/json', requesttoken: props.requestToken }, ...(body === undefined ? {} : { body: JSON.stringify(body) }) })
  const data = await response.json()
  if (!response.ok) {
    if (response.status === 409) {
      if (plan.value) plan.value = { ...plan.value, blocked: true }
      throw new Error(t('library', 'This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes.'))
    }
    if (data.error === 'history_limit') throw new Error(t('library', 'Recent batch history is full. Discard unused reviews or wait for history to expire.'))
    if (response.status === 404) throw new Error(t('library', 'The batch or one of its books is no longer available.'))
    throw new Error(t('library', 'Could not save these changes. Check the selected values or use a smaller selection.'))
  }
  return data
}
async function refreshHistory() { history.value = (await api()).batches }
async function run(action) { busy.value = true; error.value = ''; message.value = ''; try { await action() } catch(e) { error.value = e.message } finally { busy.value = false } }
function reloadSample() { plan.value = null; error.value = ''; confirmation.value = ''; emit('changed') }
async function review() {
  const current = generation
  await run(async () => { const prepared = await api('', { proposals: chosen.value, context: props.context }); if (current === generation) plan.value = prepared; await refreshHistory() })
}
async function open(id) { await run(async () => { plan.value = await api(`/${id}`); confirmation.value = '' }) }
async function apply() {
  if (!plan.value || props.disabled) return
  const approved = plan.value, id = approved.id
  await run(async () => { const result = await api(`/${id}/apply`, {}); plan.value = { ...approved, ...result }; message.value = t('library', 'Selected metadata changes were applied. Source files were not changed.'); selected.value = []; await refreshHistory(); emit('changed') })
}
async function undo() {
  const approved = plan.value, id = approved.id
  await run(async () => { const result = await api(`/${id}/undo`, {}); plan.value = { ...approved, ...result }; confirmation.value = ''; message.value = t('library', 'The batch was undone. Previous metadata and provenance were restored.'); await refreshHistory(); emit('changed') })
}
async function discard() { await run(async () => { await api(`/${plan.value.id}/discard`, {}); plan.value = null; await refreshHistory() }) }
onMounted(() => run(refreshHistory))
</script>
<template>
  <section class="library-inference-apply" :aria-label="t('library', 'Review and apply metadata')" :aria-busy="busy ? 'true' : 'false'">
    <h2><LabelHelp :text="wholeFolder ? t('library','Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.') : t('library', 'Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.')">{{ wholeFolder ? t('library','Review and apply metadata') : t('library', '4. Review and apply metadata') }}</LabelHelp></h2>
    <p v-if="error" role="alert">{{ error }}</p><button v-if="plan?.blocked" class="button secondary" :disabled="busy" @click="reloadSample">{{ t('library', 'Load sample') }}</button><p v-if="message" role="status">{{ message }}</p>
    <fieldset :disabled="busy || disabled" class="library-inference-approval-fields">
      <div class="library-inference-presets"><button class="button secondary" :disabled="!candidates.length" @click="selectEmpty">{{ t('library', 'Select empty fields') }}</button><button class="button secondary" :disabled="!selected.length" @click="selected = []">{{ t('library', 'Clear selection') }}</button><button class="button primary" :disabled="!chosen.length || plan?.status === 'prepared'" @click="review">{{ t('library', 'Review selected changes') }} ({{ selected.length }})</button></div>
      <div class="library-inference-approval-candidates" :class="{ 'library-inference-approval-scroll': candidates.length > 8 }" role="region" tabindex="0" :aria-label="t('library','Select metadata fields')"><details v-for="item in candidates" :key="item.id" class="library-inference-result">
        <summary>{{ item.path }}</summary>
        <label v-for="change in item.changes" :key="change.field" class="library-inference-approval-field"><input v-model="selected" type="checkbox" :value="key(item, change)" :aria-label="`${labels[change.field]}: ${item.path}`"><span><strong>{{ labels[change.field] }}</strong><span class="library-inference-before-after"><span>{{ change.before || '—' }}</span><span aria-hidden="true"> → </span><strong>{{ change.value }}</strong></span><small v-if="change.status === 'conflict'">{{ t('library', 'Replaces an existing value') }}</small></span></label>
      </details></div>
    </fieldset>
    <section v-if="plan" class="library-inference-confirm" :aria-label="t('library', 'Confirmed change review')">
      <h3>{{ statuses[plan.status] }}</h3>
      <p><LabelHelp :text="t('library', 'Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.')">{{ t('library', 'Available until') }}</LabelHelp>: {{ new Date(plan.expiresAt * 1000).toLocaleString() }}</p>
      <div class="library-inference-confirm-entries" :class="{ 'library-inference-approval-scroll': plan.entries.length > 4 }" role="region" tabindex="0" :aria-label="t('library','Reviewed metadata changes')"><article v-for="item in plan.entries" :key="item.id"><h4 class="library-inference-path">{{ item.path }}</h4><dl><div v-for="change in item.changes" :key="change.field"><dt>{{ labels[change.field] }}</dt><dd><span>{{ t('library', 'Before') }}: {{ change.before || '—' }}</span><strong>{{ t('library', 'After') }}: {{ change.after }}</strong></dd></div></dl></article></div>
      <div class="library-inference-presets"><button v-if="plan.status === 'prepared'" class="button primary" :disabled="busy || disabled || plan.blocked" @click="apply">{{ t('library', 'Apply reviewed changes') }}</button><button v-if="plan.status !== 'applied'" class="button secondary" :disabled="busy" @click="discard">{{ t('library', 'Discard review') }}</button><button v-if="plan.status === 'applied' && !confirmation" class="button secondary" :disabled="busy || plan.blocked" @click="confirmation = plan.id">{{ t('library', 'Undo this batch') }}</button><template v-if="confirmation"><button class="button primary" :disabled="busy || plan.blocked" @click="undo">{{ t('library', 'Confirm undo') }}</button><button class="button secondary" :disabled="busy" @click="confirmation = ''">{{ t('library', 'Cancel') }}</button></template></div>
    </section>
    <details class="library-inference-history"><summary>{{ t('library', 'Recent metadata batches') }} ({{ history.length }})</summary><ul><li v-for="batch in history" :key="batch.id"><button class="button secondary" :disabled="busy" @click="open(batch.id)">{{ new Date(Number(batch.created_at) * 1000).toLocaleString() }} · {{ statuses[batch.status] }}</button></li></ul></details>
  </section>
</template>
<style>
.library-inference-approval-fields { border: 0; margin: 0; padding: 0; min-width: 0; }
.library-inference .library-inference-approval-field { display: flex; align-items: start; gap: 12px; margin: 12px 0; padding: 10px; border: 1px solid var(--color-border); border-radius: 8px; }
.library-inference-approval-field > span { min-width: 0; overflow-wrap: anywhere; }
.library-inference-before-after, .library-inference-approval-field small { display: block; }
.library-inference-confirm { margin-block: 16px; padding: 16px; border: 2px solid var(--color-primary-element); border-radius: 12px; }
.library-inference-confirm h3 { font-size: 18px; font-weight: bold; }
.library-inference-confirm article { margin-block: 16px; }
.library-inference-confirm article h4 { font-size: 14px; line-height: 1.5; margin-block: 8px 12px; font-weight: normal; }
.library-inference-confirm dl > div { display: grid; grid-template-columns: minmax(100px, 150px) minmax(0, 1fr); gap: 8px; margin-block: 12px; }
.library-inference .library-inference-confirm dt { font-weight: bold; width: auto; margin: 0; padding: 0; float: none; text-align: start; }
.library-inference .library-inference-confirm dd { width: auto; padding: 0; float: none; }
@media (max-width: 600px) { .library-inference-confirm dl > div { grid-template-columns: minmax(0, 1fr); gap: 4px; } }
.library-inference-confirm dd { margin: 0 0 12px; overflow-wrap: anywhere; }
.library-inference-confirm dd > * { display: block; }
.library-inference-history li { margin-block: 8px; }
.library-inference-approval-scroll { max-height:440px; overflow:auto; margin-block:12px; }
@media (max-width:600px) { .library-inference-approval-scroll { max-height:40dvh; } .library-analysis-results { max-height:32dvh; } }
</style>
