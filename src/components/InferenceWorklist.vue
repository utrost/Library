<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import InferenceApply from './InferenceApply.vue'
import { inferencePresets } from '../inference-presets.js'
import { isCompleteMatch, mixedReviewContext, previewDefinition, suggestChoice } from '../inference-worklist.js'

const props = defineProps({ items: { type: Array, required: true }, labels: { type: Object, required: true }, statuses: { type: Object, required: true }, rootId: { type: String, required: true }, folder: { type: String, default: '' }, current: { type: Object, default: null }, requestToken: { type: String, default: '' }, disabled: Boolean, patternsVersion: { type: Number, default: 0 } })
const emit = defineEmits(['changed'])
const saved = ref([]), hidden = ref([]), error = ref(''), loading = ref(false)
const manual = ref({}), selected = ref([]), bulkId = ref(''), filter = ref('all'), lastMatchedIds = ref([])
const quickSelection = ref([]), applyControl = ref(null), quickRowId = ref(null), quickBusy = ref(false), rowNoticeId = ref(null), rowError = ref('')
let pendingPreserve = null
let generation = 0
const choices = computed(() => [
  ...(props.current && ['guided', 'pattern'].includes(props.current.mode) ? [{ id: 'current-draft', name: t('library', 'Current draft'), ...props.current }] : []),
  ...inferencePresets(t).filter(entry => !hidden.value.includes(`preset-${entry.id}`)).map(entry => ({ ...entry, id: `preset-${entry.id}`, mode: 'pattern' })),
  ...saved.value.map(entry => ({ ...entry, mode: entry.kind === 'guided' ? 'guided' : 'pattern' })),
])
const suggestionChoices = computed(() => choices.value.filter(entry => entry.id !== 'current-draft'))
const rows = computed(() => props.items.map(item => {
  const suggestion = suggestChoice(item, suggestionChoices.value)
  const id = Object.hasOwn(manual.value, item.id) ? manual.value[item.id] : suggestion.id
  const choice = choices.value.find(entry => entry.id === id)
  const result = choice ? previewDefinition(item, choice) : { status: 'unmatched', changes: [] }
  return { ...item, ...result, choiceId: choice?.id || '', suggested: !Object.hasOwn(manual.value, item.id) && Boolean(choice), ambiguous: !choice && suggestion.ambiguous, result }
}))
const visibleRows = computed(() => rows.value.filter(row => filter.value === 'all' || (filter.value === 'matched' ? lastMatchedIds.value.includes(row.id) : filter.value === 'assigned' ? Boolean(row.choiceId) : !row.choiceId || !isCompleteMatch(row.result))))
const bulkChoice = computed(() => choices.value.find(entry => entry.id === bulkId.value))
const bulkMatches = computed(() => bulkChoice.value ? props.items.filter(item => !Object.hasOwn(manual.value, item.id) && isCompleteMatch(previewDefinition(item, bulkChoice.value))) : [])
const activeSelection = computed(() => quickSelection.value.length ? quickSelection.value : selected.value)
const context = computed(() => mixedReviewContext(props.items, choices.value, Object.fromEntries(rows.value.map(row => [row.id, row.choiceId])), activeSelection.value, props.rootId, props.folder))
async function applyRow(row) {
  const fields = row.result.changes.filter(change => selected.value.includes(`${row.id}:${change.field}`)).map(change => `${row.id}:${change.field}`)
  if (!fields.length || !row.choiceId) return
  quickRowId.value = row.id
  rowNoticeId.value = null
  rowError.value = ''
  quickSelection.value = fields
  await nextTick()
  quickBusy.value = true
  try {
    const prepared = await applyControl.value?.review()
    if (!prepared) return
    const hasReplacement = row.result.changes.some(change => fields.includes(`${row.id}:${change.field}`) && change.status === 'conflict')
    if (hasReplacement) {
      applyControl.value?.$el?.querySelector('.library-inference-confirm')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    } else await applyControl.value?.apply()
  } finally { quickBusy.value = false }
}
function worklistFailed(message) { if (quickRowId.value !== null) rowError.value = message }
function worklistChanged(status) {
  if (quickRowId.value !== null) {
    pendingPreserve = { manual: { ...manual.value }, selected: selected.value.filter(key => !key.startsWith(`${quickRowId.value}:`)) }
    if (status === 'applied') rowNoticeId.value = quickRowId.value
  }
  emit('changed')
}

function setChoice(item, id) {
  manual.value = { ...manual.value, [item.id]: id }
  selected.value = selected.value.filter(key => !key.startsWith(`${item.id}:`))
}
function toggle(item, field, checked) {
  quickSelection.value = []
  const key = `${item.id}:${field}`
  selected.value = checked ? [...new Set([...selected.value, key])] : selected.value.filter(value => value !== key)
}
async function assignMatching() {
  if (!bulkChoice.value || !bulkMatches.value.length) return
  const matches = [...bulkMatches.value], choice = bulkChoice.value
  const ids = new Set(matches.map(item => item.id))
  lastMatchedIds.value = [...ids]
  filter.value = 'matched'
  selected.value = selected.value.filter(key => !ids.has(Number(key.split(':')[0])))
  manual.value = { ...manual.value, ...Object.fromEntries(matches.map(item => [item.id, choice.id])) }
  await nextTick()
  selected.value = [...selected.value, ...matches.flatMap(item => previewDefinition(item, choice).changes
    .filter(change => change.status === 'ready').map(change => `${item.id}:${change.field}`))]
}
async function loadPatterns() {
  const current = ++generation
  loading.value = true; error.value = ''
  try {
    const response = await fetch(generateUrl('/apps/library/api/inference/patterns'), { credentials: 'same-origin', cache: 'no-store' })
    if (!response.ok) throw new Error(t('library', 'Could not load saved patterns.'))
    const data = await response.json()
    if (current === generation) { saved.value = data.patterns || []; hidden.value = data.hidden || [] }
  } catch (e) { if (current === generation) error.value = e.message } finally { if (current === generation) loading.value = false }
}
watch(() => props.patternsVersion, loadPatterns)
watch(() => props.items, () => {
  manual.value = pendingPreserve?.manual || {}
  selected.value = pendingPreserve?.selected || []
  pendingPreserve = null
  quickSelection.value = []; quickRowId.value = null; lastMatchedIds.value = []; filter.value = 'all'
})
watch(rows, (now, old) => {
  const changed = new Set(now.filter(row => old?.find(previous => previous.id === row.id)?.choiceId !== row.choiceId).map(row => row.id))
  const available = new Set(now.flatMap(row => row.result.changes
    .filter(change => ['ready', 'conflict'].includes(change.status))
    .map(change => `${row.id}:${change.field}`)))
  selected.value = selected.value.filter(key => available.has(key) && !changed.has(Number(key.split(':')[0])))
})
onMounted(loadPatterns)
</script>

<template>
  <section class="library-inference-worklist" :aria-label="t('library', 'File pattern worklist')">
    <div class="library-inference-worklist-toolbar">
      <label>{{ t('library', 'Pattern for matching files') }}
        <select v-model="bulkId" :disabled="loading"><option value="">{{ t('library', 'Choose a pattern') }}</option><option v-for="entry in choices" :key="entry.id" :value="entry.id">{{ entry.name }}</option></select>
      </label>
      <button class="button secondary" :disabled="disabled || !bulkMatches.length" @click="assignMatching">{{ t('library', 'Assign to matching files') }} ({{ bulkMatches.length }})</button>
      <label>{{ t('library', 'Show files') }}<select v-model="filter"><option value="all">{{ t('library', 'All') }} ({{ rows.length }})</option><option v-if="lastMatchedIds.length" value="matched">{{ t('library', 'Matching files') }} ({{ lastMatchedIds.length }})</option><option value="assigned">{{ t('library', 'Assigned') }} ({{ rows.filter(row => row.choiceId).length }})</option><option value="needs">{{ t('library', 'Needs a pattern') }} ({{ rows.filter(row => !row.choiceId || !isCompleteMatch(row.result)).length }})</option></select></label>
    </div>
    <p v-if="error" role="alert">{{ error }} <button class="button secondary" @click="loadPatterns">{{ t('library', 'Retry') }}</button></p>
    <p class="library-muted">{{ t('library', 'Suggested patterns are based on structure. Check each proposed value before applying. Bulk assignment selects empty fields only.') }}</p>
    <div class="library-inference-worklist-table" role="table" :aria-label="t('library', 'Files and assigned patterns')">
      <div class="library-inference-worklist-head" role="row"><span role="columnheader">{{ t('library', 'File') }}</span><span role="columnheader">{{ t('library', 'Pattern') }}</span><span role="columnheader">{{ t('library', 'Proposed fields') }}</span></div>
      <div v-for="row in visibleRows" :key="row.id" class="library-inference-worklist-row" role="row">
        <div class="library-inference-worklist-path" role="cell" :title="row.path">{{ row.path }}<small>{{ row.fileType || t('library', 'Unknown type') }} · {{ row.modifiedAt ? new Date(row.modifiedAt * 1000).toLocaleDateString() : t('library', 'Date unknown') }}</small></div>
        <div role="cell" class="library-inference-worklist-pattern">
          <label :for="`worklist-pattern-${row.id}`" class="visually-hidden">{{ t('library', 'Pattern for {file}', { file: row.path }) }}</label>
          <select :id="`worklist-pattern-${row.id}`" :value="row.choiceId" :disabled="disabled || loading" @change="setChoice(row, $event.target.value)"><option value="">{{ t('library', 'Choose a pattern') }}</option><option v-for="entry in choices" :key="entry.id" :value="entry.id">{{ entry.name }}</option></select>
          <small v-if="row.suggested">{{ t('library', 'Suggested') }}</small><small v-else-if="row.ambiguous">{{ t('library', 'Several patterns match; choose one.') }}</small>
          <small v-if="row.choiceId">{{ statuses[row.result.status] }}</small>
          <button v-if="row.choiceId && isCompleteMatch(row.result)" class="button secondary library-inference-row-apply" :aria-label="t('library', 'Apply selected changes for {file}', { file: row.path })" :disabled="disabled || loading || quickBusy || !selected.some(key => key.startsWith(`${row.id}:`))" @click="applyRow(row)">{{ quickBusy && quickRowId === row.id ? t('library', 'Applying…') : t('library', 'Apply now') }}</button><small v-if="rowNoticeId === row.id" role="status">{{ t('library', 'Changes applied to this file.') }}</small><small v-if="quickRowId === row.id && rowError" role="alert">{{ rowError }}</small>
        </div>
        <div role="cell" class="library-inference-worklist-fields">
          <template v-if="isCompleteMatch(row.result)">
            <label v-for="change in row.result.changes.filter(entry => ['ready', 'conflict'].includes(entry.status))" :key="change.field" class="library-inference-worklist-field">
              <input type="checkbox" :checked="selected.includes(`${row.id}:${change.field}`)" :disabled="disabled" @change="toggle(row, change.field, $event.target.checked)">
              <span><strong>{{ labels[change.field] }}</strong>: {{ change.before || '—' }} → {{ change.value }} <small v-if="change.status === 'conflict'">{{ t('library', 'Replaces an existing value') }}</small></span>
            </label>
            <small v-if="!row.result.changes.some(entry => ['ready', 'conflict'].includes(entry.status))">{{ t('library', 'No changes') }}</small>
          </template>
          <small v-else>{{ row.choiceId ? statuses[row.result.status] : t('library', 'Choose a pattern') }}</small>
        </div>
      </div>
    </div>
    <p v-if="!visibleRows.length" class="library-muted">{{ t('library', 'No files in this view.') }}</p>
    <InferenceApply ref="applyControl" compact :external-selection="activeSelection" :results="rows" :labels="labels" :request-token="requestToken" :context="context" :disabled="disabled" @changed="worklistChanged" @failed="worklistFailed" />
  </section>
</template>

<style>
.library-inference-worklist-toolbar { display:flex; flex-wrap:wrap; align-items:end; gap:12px; margin-block:12px; }
.library-inference-worklist-toolbar label { flex:1 1 220px; }
.library-inference-worklist-toolbar button { align-self:end; }
.library-inference-worklist-table { border:1px solid var(--color-border); border-radius:8px; overflow:hidden; }
.library-inference-worklist-head, .library-inference-worklist-row { display:grid; grid-template-columns:minmax(0,2fr) minmax(160px,1fr) minmax(0,2fr); gap:12px; padding:10px 12px; align-items:start; }
.library-inference-worklist-head { background:var(--color-background-hover); font-weight:bold; }
.library-inference-worklist-row + .library-inference-worklist-row { border-top:1px solid var(--color-border); }
.library-inference-worklist-row > * { min-width:0; }
.library-inference-worklist-path { overflow-wrap:anywhere; }
.library-inference-worklist-pattern select { width:100%; }
.library-inference-worklist-pattern small, .library-inference-worklist-fields small { display:block; color:var(--color-text-maxcontrast); }
.library-inference-row-apply { margin-top:8px; }
.library-inference-worklist-field { display:flex !important; flex-direction:row; align-items:start; gap:8px; margin-block:4px; overflow-wrap:anywhere; }
.library-inference-worklist-field input { flex:none; margin-top:4px; }
.library-inference-worklist-field span { min-width:0; }
.library-inference-worklist .visually-hidden { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
@media (max-width:760px) {
  .library-inference-worklist-head { display:none; }
  .library-inference-worklist-row { grid-template-columns:minmax(0,1fr); gap:6px; }
  .library-inference-worklist-pattern select { max-width:100%; }
}
</style>
