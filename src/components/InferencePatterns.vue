<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import LabelHelp from './LabelHelp.vue'
import { inferencePresets } from '../inference-presets.js'
const props = defineProps({ pattern: { type: String, default: '' }, replaceUnderscores: { type: Boolean, default: false }, mode: { type: String, default: 'pattern' }, rule: { type: Object, default: null }, requestToken: { type: String, default: '' } })
const emit = defineEmits(['choose', 'choose-rule', 'catalog-changed'])
const guided = computed(() => props.mode === 'guided')
const current = computed(() => guided.value ? JSON.stringify(props.rule) : JSON.stringify([props.pattern, props.replaceUnderscores]))
const definition = entry => (entry.kind || 'pattern') === 'guided' ? JSON.stringify(entry.rule) : JSON.stringify([entry.pattern, entry.replaceUnderscores || false])
const saved = ref([]), name = ref(''), selected = ref(''), creating = ref(false), draft = ref(null), busy = ref(false), error = ref(''), message = ref(''), deleting = ref('')
const hidden = ref([])
const presets = computed(() => inferencePresets(t))
const choices = computed(() => [...(guided.value ? [] : presets.value.map(entry => ({ ...entry, id: `preset-${entry.id}` })).filter(entry => !hidden.value.includes(entry.id))), ...saved.value.filter(entry => (entry.kind || 'pattern') === props.mode)].sort((a, b) => a.name.localeCompare(b.name)))
const chosen = computed(() => choices.value.find(entry => entry.id === selected.value))
const selectorValue = computed(() => creating.value ? '__new__' : selected.value || (draft.value ? '__draft__' : ''))
watch([current, choices], () => {
  deleting.value = ''
  if (creating.value) return
  selected.value = choices.value.find(entry => definition(entry) === current.value)?.id || ''
  if (!selected.value && current.value) draft.value = { definition: current.value, name: draft.value?.name || '', creating: false }
}, { immediate: true })
const patternHelp = computed(() => [t('library', 'Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review.'), chosen.value?.example ? `${t('library', 'Example path')}: ${chosen.value.example}` : ''].filter(Boolean).join('\n\n'))
function selectPattern(event) {
  const id = event.target.value
  if (id === '__new__') {
    creating.value = true; selected.value = ''; name.value = ''; message.value = ''; deleting.value = ''
    return
  }
  if (id !== '__draft__' && (creating.value || (!selected.value && current.value))) draft.value = { definition: current.value, name: name.value, creating: creating.value }
  if (id === '__draft__' && draft.value) {
    creating.value = draft.value.creating; name.value = draft.value.name; selected.value = ''
    if (guided.value) emit('choose-rule', JSON.parse(draft.value.definition))
    else { const [pattern, replaceUnderscores] = JSON.parse(draft.value.definition); emit('choose', pattern, replaceUnderscores) }
    message.value = ''; deleting.value = ''
    return
  }
  const entry = choices.value.find(entry => entry.id === id)
  if (!entry) return
  creating.value = false
  selected.value = entry.id
  if (guided.value) emit('choose-rule', JSON.parse(JSON.stringify(entry.rule)))
  else emit('choose', entry.pattern, entry.replaceUnderscores || false)
  message.value = ''; deleting.value = ''
}

async function request(path = '', body = null) {
  const response = await fetch(`${generateUrl('/apps/library/api/inference/patterns')}${path}`, {
    method: body === null ? 'GET' : 'POST', credentials: 'same-origin', cache: 'no-store',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 409 ? t('library', 'That name already exists. Choose a different name.') : response.status === 422 ? t('library', 'Check the definition and name. You can save up to 100 rules and patterns.') : t('library', 'Could not load or save rules and patterns. Check your connection and try again.'))
  return response.json()
}
async function reload() {
  busy.value = true; error.value = ''
  try { const data = await request(); saved.value = data.patterns; hidden.value = data.hidden || [] } catch (e) { error.value = e.message } finally { busy.value = false }
}
async function save() {
  busy.value = true; error.value = ''; message.value = ''
  try {
    const data = await request('', { name: name.value, ...(guided.value ? { kind: 'guided', rule: props.rule } : { pattern: props.pattern, replaceUnderscores: props.replaceUnderscores }) })
    saved.value = [...saved.value, data.saved].sort((a, b) => a.name.localeCompare(b.name))
    emit('catalog-changed')
    creating.value = false; draft.value = null; selected.value = data.saved.id; name.value = ''; message.value = guided.value ? t('library', 'Rule saved to your account.') : t('library', 'Pattern saved to your account.')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
async function remove(id) {
  busy.value = true; error.value = ''; message.value = ''
  try {
    await request(`/${id}/delete`, {})
    saved.value = saved.value.filter(entry => entry.id !== id); hidden.value = [...hidden.value, id]; selected.value = ''; deleting.value = ''
    emit('catalog-changed')
    message.value = id.startsWith('preset-') ? t('library', 'Pattern hidden from your choices. The current preview is unchanged.') : guided.value ? t('library', 'Saved rule deleted. The current preview is unchanged.') : t('library', 'Saved pattern deleted. The current preview is unchanged.')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(reload)
</script>
<template>
  <div class="library-inference-templates" :aria-busy="busy ? 'true' : 'false'">
    <label><LabelHelp :text="guided ? t('library', 'Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.') : patternHelp">{{ guided ? t('library', 'Rule') : t('library', 'Pattern') }}</LabelHelp><select :value="selectorValue" :disabled="busy" @change="selectPattern"><option value="" disabled>{{ guided ? t('library', 'Choose a rule') : t('library', 'Choose a pattern') }}</option><option value="__new__">{{ guided ? t('library', 'New saved rule…') : t('library', 'New saved pattern…') }}</option><option v-if="draft" value="__draft__">{{ guided ? t('library', 'Unsaved rule draft') : t('library', 'Unsaved pattern draft') }}</option><option v-for="entry in choices" :key="entry.id" :value="entry.id">{{ entry.name }}</option></select></label>
    <slot />
    <form v-if="creating" @submit.prevent="save">
      <label><LabelHelp :text="t('library', 'Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.')">{{ guided ? t('library', 'Rule name') : t('library', 'Pattern name') }}</LabelHelp><input v-model="name" maxlength="120" required :disabled="busy"></label>
      <button class="button secondary" :disabled="busy || !name.trim() || (guided ? !rule : !pattern.trim())">{{ guided ? t('library', 'Save new rule') : t('library', 'Save new pattern') }}</button>
    </form>
    <p v-else-if="!selected && draft" class="library-muted">{{ guided ? t('library', 'Unsaved draft. Choose “New saved rule…” above to save this definition.') : t('library', 'Unsaved draft. Choose “New saved pattern…” above to save this definition.') }}</p>
    <div v-if="chosen" class="library-inference-template-actions"><button v-if="!deleting" type="button" class="button secondary" :disabled="busy" @click="deleting = chosen.id">{{ chosen.id.startsWith('preset-') ? t('library', 'Hide pattern') : guided ? t('library', 'Delete rule') : t('library', 'Delete pattern') }}</button><template v-else><button type="button" class="button secondary" :disabled="busy" @click="remove(deleting)">{{ chosen.id.startsWith('preset-') ? t('library', 'Confirm hide') : t('library', 'Confirm deletion') }}</button><button type="button" class="button secondary" :disabled="busy" @click="deleting = ''">{{ t('library', 'Cancel') }}</button></template></div>
    <p v-if="error" role="alert">{{ error }} <button class="button secondary" :disabled="busy" @click="reload">{{ guided ? t('library', 'Reload saved rules') : t('library', 'Reload saved patterns') }}</button></p>
    <p v-if="message" role="status">{{ message }}</p>
  </div>
</template>
<style>
.library-inference-templates { margin-block: 12px; }
.library-inference-templates code { display: block; margin-block: 8px; }
.library-inference-templates form { margin-block: 12px; display: flex; align-items: end; flex-wrap: wrap; gap: 8px; }
.library-inference-templates form label { flex: 1 1 180px; }
.library-inference-template-actions { display: flex; gap: 8px; margin-block: 8px; }
.library-inference-saved-pattern { border-bottom: 1px solid var(--color-border); padding-block: 10px; }
</style>
