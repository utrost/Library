<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ rootId: { type: String, default: '' }, folder: { type: String, default: '' }, requestToken: { type: String, default: '' }, disabled: Boolean, scopePending: Boolean })
const emit = defineEmits(['loaded'])
const definitions = ref([]), assignments = ref([]), selected = ref(''), recursive = ref(true), loading = ref(false), saving = ref(false), error = ref(''), deleting = ref('')
const busy = computed(() => props.disabled || loading.value || saving.value)
let generation = 0
async function request(url, body) {
  const response = await fetch(generateUrl(`/apps/library/api/inference/${url}`), {
    method: body === undefined ? 'GET' : 'POST', credentials: 'same-origin', cache: 'no-store',
    headers: { Accept: 'application/json', ...(body === undefined ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 409 ? t('library', 'This rule is already assigned to this folder.') : response.status === 422 ? t('library', 'Check the folder and rule. You can save up to 100 folder assignments.') : response.status === 404 ? t('library', 'The folder or saved rule is unavailable. Reload and check your access.') : t('library', 'Could not load or save folder rules. Try again.'))
  return response.json()
}
async function reload() {
  const current = ++generation, rootId = props.rootId
  assignments.value = []; deleting.value = ''; error.value = ''
  emit('loaded', { rootId, assignments: [] })
  if (!rootId) return
  loading.value = true
  try {
    const [rules, folders] = await Promise.all([request('patterns'), request(`folders?rootId=${encodeURIComponent(rootId)}`)])
    if (current !== generation) return
    definitions.value = rules.patterns; assignments.value = folders.assignments
    if (!definitions.value.some(entry => entry.id === selected.value)) selected.value = ''
    emit('loaded', { rootId, assignments: folders.assignments })
  } catch (e) { if (current === generation) error.value = e.message } finally { if (current === generation) loading.value = false }
}
async function assign() {
  if (busy.value || props.scopePending || !selected.value) return
  saving.value = true; error.value = ''
  try {
    await request('folders', { rootId: props.rootId, folder: props.folder, recursive: recursive.value, definitionId: selected.value })
    await reload()
  } catch (e) { error.value = e.message } finally { saving.value = false }
}
async function remove(id) {
  if (busy.value) return
  saving.value = true; error.value = ''
  try { await request(`folders/${id}/delete`, {}); await reload() } catch (e) { error.value = e.message } finally { saving.value = false }
}
watch(() => props.rootId, reload, { immediate: true })
onBeforeUnmount(() => { generation++ })
</script>
<template>
  <div class="library-inference-folder-rules" :aria-busy="busy ? 'true' : 'false'">
    <form @submit.prevent="assign">
      <label><LabelHelp :text="t('library', 'Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.')">{{ t('library', 'Saved rule or pattern') }}</LabelHelp><select v-model="selected" :disabled="busy"><option value="" disabled>{{ t('library', 'Choose a saved definition') }}</option><option v-for="definition in definitions" :key="definition.id" :value="definition.id">{{ definition.name }}</option></select></label>
      <p class="library-inference-path">{{ t('library', 'Assignment folder') }}: <bdi>{{ folder || '/' }}</bdi></p>
      <label class="library-inference-checkbox"><input v-model="recursive" type="checkbox" :disabled="busy">{{ t('library', 'Use in subfolders') }}</label>
      <button class="button primary" :disabled="busy || scopePending || !selected || !rootId">{{ t('library', 'Assign to this folder') }}</button>
    </form>
    <p v-if="scopePending" role="status">{{ t('library', 'Load the folder before assigning a rule.') }}</p>
    <p v-if="error" role="alert">{{ error }}</p>
    <button class="button secondary" :disabled="busy" @click="reload">{{ t('library', 'Reload folder rules') }}</button>
    <h3><LabelHelp :text="t('library', 'Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.')">{{ t('library', 'Rules for this root') }}</LabelHelp></h3>
    <p v-if="!assignments.length && !loading">{{ t('library', 'No folder rules assigned yet.') }}</p>
    <ul class="library-inference-folder-list">
      <li v-for="entry in assignments" :key="entry.id" class="library-inference-folder-entry">
        <strong>{{ entry.definition.name }}</strong>
        <bdi>{{ entry.folder || '/' }}</bdi>
        <small>{{ entry.recursive ? t('library', 'Includes subfolders') : t('library', 'Direct children only') }}</small>
        <p v-if="!entry.available" role="status">{{ t('library', 'Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.') }}</p>
        <button v-if="deleting !== entry.id" type="button" class="button secondary" :disabled="busy" @click="deleting = entry.id">{{ t('library', 'Remove assignment') }}</button>
        <template v-else><button class="button secondary" :disabled="busy" @click="remove(entry.id)">{{ t('library', 'Confirm removal') }}</button><button class="button secondary" :disabled="busy" @click="deleting = ''">{{ t('library', 'Cancel') }}</button></template>
      </li>
    </ul>
  </div>
</template>
<style>
.library-inference-folder-rules form { display: grid; gap: 10px; margin-block: 12px; }
.library-inference-folder-rules button { width: fit-content; max-width: 100%; }
.library-inference-folder-rules h3 { margin-block: 16px 8px; }
.library-inference-folder-list { list-style: none; padding: 0; }
.library-inference-folder-entry { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding-block: 12px; border-bottom: 1px solid var(--color-border); overflow-wrap: anywhere; }
.library-inference-folder-entry strong, .library-inference-folder-entry bdi { flex: 1 1 100%; }
.library-inference-folder-entry small { flex: 1 1 100%; }
</style>
