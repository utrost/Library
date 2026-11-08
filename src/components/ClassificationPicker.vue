<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { t } from '@nextcloud/l10n'
import { curationRequest } from '../curation-api.js'
const props = defineProps({ modelValue: { type: String, default: '' }, requestToken: String, disabled: Boolean })
const emit = defineEmits(['update:modelValue'])
const scheme = ref(''), notation = ref(''), description = ref(''), matches = ref([]), busy = ref(false), error = ref('')
const schemes = { '': t('library', 'Unspecified / custom'), LCC: t('library', 'Library of Congress Classification'), DDC: t('library', 'Dewey Decimal Classification'), UDC: t('library', 'Universal Decimal Classification'), RVK: t('library', 'Regensburg Classification'), BK: t('library', 'Basic Classification'), ASB: t('library', 'General Classification for Public Libraries') }
const references = { LCC: 'https://www.loc.gov/catdir/cpso/lcco/', DDC: 'https://www.oclc.org/en/dewey.html', UDC: 'https://udcc.org/', RVK: 'https://rvk.uni-regensburg.de/', BK: 'https://uri.gbv.de/terminology/bk/', ASB: 'https://www.asb-kab-online.de/' }
const selected = computed(() => props.modelValue.split('\n').filter(v => v.trim()))
const candidate = computed(() => `${scheme.value ? `${scheme.value}: ` : ''}${notation.value.trim()}${description.value.trim() ? ` — ${description.value.trim()}` : ''}`)
let timer, controller, generation = 0
function cancel() { clearTimeout(timer); controller?.abort(); generation++ }
onBeforeUnmount(cancel)
watch([notation, scheme], () => {
  cancel(); matches.value = []; busy.value = false; error.value = ''
  if (notation.value.trim().length < 2) return
  const token = generation; busy.value = true
  timer = setTimeout(async () => {
    controller = new AbortController()
    try { const data = await curationRequest('/classifications', props.requestToken, { scheme: scheme.value, query: notation.value.trim() }, controller.signal); if (token === generation) matches.value = data.values }
    catch (e) { if (token === generation && e.name !== 'AbortError') error.value = e.message }
    finally { if (token === generation) busy.value = false }
  }, 250)
})
function add(value = candidate.value) { if (props.disabled || !notation.value.trim() || value.length > 255) return; if (!selected.value.includes(value)) emit('update:modelValue', [...selected.value, value].join('\n')); notation.value = ''; description.value = '' }
</script>
<template>
  <fieldset class="classifications"><legend>{{ t('library', 'Classifications') }}</legend>
    <ul><li v-for="(value, index) in selected" :key="index"><span>{{ value }}</span><button type="button" :disabled="disabled" :aria-label="`${t('library', 'Remove classification')}: ${value}`" @click="emit('update:modelValue', selected.filter((_, i) => i !== index).join('\n'))">×</button></li></ul>
    <label>{{ t('library', 'Classification scheme') }}<select :aria-label="t('library', 'Classification scheme')" v-model="scheme" :disabled="disabled"><option v-for="(label, key) in schemes" :key="key" :value="key">{{ label }}</option></select></label>
    <label>{{ t('library', 'Notation') }}<input v-model="notation" maxlength="220" :disabled="disabled" @keydown.enter.prevent="add()"></label>
    <label>{{ t('library', 'Description (optional)') }}<input v-model="description" maxlength="150" :disabled="disabled" @keydown.enter.prevent="add()"></label>
    <button type="button" :disabled="disabled || !notation.trim() || candidate.length > 255" @click="add()">{{ t('library', 'Add classification') }}</button>
    <p v-if="busy" role="status">{{ t('library', 'Searching…') }}</p><p v-if="error" role="alert">{{ error }}</p>
    <ul v-if="matches.length"><li v-for="value in matches" :key="value"><button type="button" :disabled="disabled" @click="add(value)">{{ value }}</button></li></ul>
    <small>{{ t('library', 'Suggestions come from your catalogue. A scheme is never inferred for existing values; notation is not checked against a licensed schedule.') }} <a v-if="references[scheme]" :href="references[scheme]" target="_blank" rel="noopener noreferrer">{{ t('library', 'Official classification reference') }}</a></small>
    <details><summary>{{ t('library', 'Edit raw values') }}</summary><label>{{ t('library', 'One classification per line.') }}<textarea :value="modelValue" :disabled="disabled" rows="3" @input="emit('update:modelValue', $event.target.value)"></textarea></label></details>
  </fieldset>
</template>
<style scoped>
.classifications { min-width:0; border:1px solid var(--color-border); border-radius:8px; padding:.75rem; } legend { font-weight:600; } label { display:grid; gap:.25rem; margin-block:.5rem; } input, select, textarea { width:100%; min-width:0; max-width:100%; } ul { list-style:none; padding:0; } li { display:flex; align-items:center; gap:.5rem; overflow-wrap:anywhere; } li span { flex:1; min-width:0; } small { display:block; margin-block:.5rem; } a { text-decoration:underline; } button { white-space:normal; }
</style>
