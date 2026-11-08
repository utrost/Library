<script setup>
import { ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import EntityPicker from './EntityPicker.vue'
const props = defineProps({ kind: String, modelValue: { type: Array, default: () => [] }, disabled: Boolean, single: Boolean, label: String })
const emit = defineEmits(['update:modelValue'])
const term = ref('')
watch(() => props.kind, () => { term.value = '' })
async function search(value, signal) {
  const response = await fetch(generateUrl(`/apps/library/api/${props.kind}`) + `?search=${encodeURIComponent(value)}`, { credentials: 'same-origin', cache: 'no-store', signal })
  if (!response.ok) throw new Error('unavailable')
  const data = await response.json()
  return (data[props.kind] || []).map(row => ({ id: Number(row.id), label: row.displayName || row.display_name || row.name }))
}
function select(row) {
  if (props.disabled) return
  const entry = { id: row.id, name: row.label }
  if (props.single || props.kind === 'series') emit('update:modelValue', [entry])
  else if (!props.modelValue.some(value => value.id === entry.id)) emit('update:modelValue', [...props.modelValue, entry])
  term.value = ''
}
</script>
<template>
  <div class="curation-entity-picker">
    <ul v-if="modelValue.length" class="selected"><li v-for="row in modelValue" :key="row.id"><span>{{ row.name }}</span><button type="button" :disabled="disabled" :aria-label="`${t('library', 'Remove')}: ${row.name}`" @click="emit('update:modelValue', modelValue.filter(value => value.id !== row.id))">×</button></li></ul>
    <EntityPicker :key="kind" v-model="term" :label="label || t('library', 'Find an existing name')" :search="search" :disabled="disabled" @choose="select" />
  </div>
</template>
<style scoped>
.curation-entity-picker { max-width: 40rem; min-width: 0; }
.selected { display: flex; flex-wrap: wrap; gap: .5rem; list-style: none; padding: 0; }
.selected li { display: flex; align-items: center; gap: .25rem; border-radius: 12px; background: var(--color-background-dark); padding-inline-start: .5rem; max-width: 100%; overflow-wrap: anywhere; }
.selected span { min-width: 0; }
.selected button { flex-shrink: 0; }
</style>
