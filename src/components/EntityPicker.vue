<script setup>
import { ref, watch, onBeforeUnmount, useId } from 'vue'
import { pickerIndex } from '../picker-keyboard.js'
import { t } from '@nextcloud/l10n'
const props = defineProps({ label: String, modelValue: { type: String, default: '' }, search: { type: Function, required: true }, disabled: Boolean, allowCreate: Boolean, minimum: { type: Number, default: 3 } })
const emit = defineEmits(['update:modelValue', 'choose', 'create'])
const id = useId(), options = ref([]), loading = ref(false), completed = ref(false), error = ref(''), open = ref(false), active = ref(-1)
let timer, controller, sequence = 0
function lookup() {
  clearTimeout(timer); controller?.abort()
  const current = ++sequence
  options.value = []; completed.value = false; error.value = ''; active.value = -1
  loading.value = (props.modelValue.match(/\p{L}/gu) || []).length >= props.minimum
  if (!loading.value) return
  timer = setTimeout(async () => {
    controller = new AbortController()
    try {
      const result = await props.search(props.modelValue.trim(), controller.signal)
      if (sequence === current) { options.value = result; active.value = result.length ? 0 : -1; completed.value = true }
    } catch (cause) {
      if (sequence === current && cause.name !== 'AbortError') error.value = t('library', 'Could not load suggestions. Try again.')
    } finally { if (sequence === current) loading.value = false }
  }, 250)
}
watch(() => props.modelValue, lookup)
function input(event) { emit('update:modelValue', event.target.value); open.value = true }
function select(option) { open.value = false; emit('choose', option) }
function keydown(event) {
  if (event.key === 'Escape') { open.value = false; return }
  if (['ArrowDown', 'ArrowUp'].includes(event.key) && options.value.length) {
    event.preventDefault(); open.value = true
    active.value = pickerIndex(active.value, event.key, options.value.length)
  } else if (event.key === 'Enter') {
    event.preventDefault()
    if (open.value && options.value.length) select(options.value[Math.max(0, active.value)])
  }
}
onBeforeUnmount(() => { clearTimeout(timer); sequence++; controller?.abort() })
</script>
<template>
  <div class="library-entity-picker">
    <label :for="id">{{ label }}</label>
    <div class="library-entity-picker-input">
      <input :id="id" :value="modelValue" type="search" autocomplete="off" role="combobox" aria-autocomplete="list" :aria-controls="`${id}-options`" :aria-expanded="open && options.length > 0" :aria-activedescendant="open && active >= 0 ? `${id}-${active}` : undefined" :disabled="disabled" :placeholder="t('library', 'Type at least 3 letters…')" @input="input" @focus="open = true" @blur="open = false" @keydown="keydown">
      <ul v-if="open && options.length" :id="`${id}-options`" role="listbox">
        <li v-for="(option, index) in options" :id="`${id}-${index}`" :key="option.id ?? option.label" role="option" :aria-selected="active === index" @mousedown.prevent @click="select(option)">{{ option.label }}</li>
      </ul>
    </div>
    <small v-if="loading" role="status">{{ t('library', 'Searching…') }}</small>
    <p v-else-if="error" role="alert">{{ error }} <button type="button" @click="lookup">{{ t('library', 'Retry') }}</button></p>
    <small v-else-if="completed && !options.length" role="status">{{ t('library', 'No matches found.') }}</small>
    <button v-if="allowCreate && completed && !options.length && !error && !loading" type="button" :disabled="disabled" @click="emit('create', modelValue.trim())">{{ t('library', 'Create “{name}”', { name: modelValue.trim() }) }}</button>
  </div>
</template>
<style>
.library-entity-picker { display: grid; gap: 8px; min-width: 0; }
.library-entity-picker-input { position: relative; min-width: 0; }
.library-entity-picker input { width: 100%; min-width: 0; box-sizing: border-box; }
.library-entity-picker ul { position: absolute; inset-inline: 0; top: 100%; z-index: 20; max-height: 240px; overflow: auto; margin: 4px 0; padding: 4px; list-style: none; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-main-background); box-shadow: 0 4px 12px var(--color-box-shadow); }
.library-entity-picker li { padding: 10px; cursor: pointer; overflow-wrap: anywhere; }
.library-entity-picker li:hover, .library-entity-picker [aria-selected="true"] { background: var(--color-background-hover); }
.library-entity-picker > button { justify-self: start; white-space: normal; }
</style>
