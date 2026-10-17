<script setup>
import { computed, onBeforeUnmount, ref, useId, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'

const props = defineProps({
  modelValue: { type: String, default: '' },
  kind: { type: String, required: true },
  disabled: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
const search = ref('')
const focused = ref(false)
const activeIndex = ref(-1)
const listId = useId()
const remoteSuggestions = ref([])
const selected = computed(() => props.modelValue.split('\n').map(value => value.trim()).filter(Boolean))
const isLanguage = computed(() => props.kind === 'language')
const label = computed(() => isLanguage.value ? t('library', 'Language') : t('library', 'Subjects'))
const addLabel = computed(() => isLanguage.value ? t('library', 'Add language') : t('library', 'Add subject'))
const inputLabel = computed(() => isLanguage.value ? t('library', 'Search languages or enter a code') : t('library', 'Search subjects'))
const languageCodes = [
  'ar', 'zh', 'da', 'nl', 'en', 'en-GB', 'en-US', 'fi', 'fr', 'de', 'el', 'hi', 'it',
  'ja', 'ko', 'no', 'pl', 'pt', 'pt-BR', 'ru', 'es', 'sv', 'tr', 'uk',
  'ara', 'chi', 'zho', 'dut', 'nld', 'eng', 'fre', 'fra', 'ger', 'deu', 'ita', 'jpn', 'spa',
]
const languageNames = typeof Intl.DisplayNames === 'function'
  ? new Intl.DisplayNames([document.documentElement.lang || 'en'], { type: 'language' })
  : null
function display(value) {
  if (!isLanguage.value) return value
  let name = ''
  try { name = languageNames?.of(value) || '' } catch { /* Keep the imported code visible. */ }
  return name && name.toLowerCase() !== value.toLowerCase() ? `${name} (${value})` : value
}
function normalizedInput(value) {
  const trimmed = value.trim()
  if (!isLanguage.value) return trimmed
  const match = /^([a-z]{2,3})(?:-([a-z]{2}))?$/i.exec(trimmed)
  return match ? match[1].toLowerCase() + (match[2] ? `-${match[2].toUpperCase()}` : '') : trimmed
}
const candidate = computed(() => normalizedInput(search.value))
const canAdd = computed(() => candidate.value.length > 0 && candidate.value.length <= 255
  && (!isLanguage.value || /^[a-z]{2,3}(-[A-Z]{2})?$/.test(candidate.value))
  && !selected.value.some(value => value.toLowerCase() === candidate.value.toLowerCase()))
const options = computed(() => {
  const query = search.value.trim().toLocaleLowerCase()
  if (!query) return []
  const values = isLanguage.value
    ? languageCodes.filter(value => value.toLowerCase().includes(query) || display(value).toLocaleLowerCase().includes(query))
    : remoteSuggestions.value
  return values.filter(value => !selected.value.some(chosen => chosen.toLowerCase() === value.toLowerCase())).slice(0, 12)
})
function add(value = candidate.value) {
  const next = normalizedInput(value)
  if (!next || next.length > 255 || (isLanguage.value && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(next))) return
  if (!selected.value.some(entry => entry.toLowerCase() === next.toLowerCase())) emit('update:modelValue', [...selected.value, next].join('\n'))
  search.value = ''
  focused.value = false
}
function remove(value) {
  emit('update:modelValue', selected.value.filter(entry => entry !== value).join('\n'))
}
function onKeydown(event) {
  if (event.key === 'Escape') { focused.value = false; activeIndex.value = -1; return }
  if (event.key === 'ArrowDown' && options.value.length) {
    event.preventDefault()
    focused.value = true
    activeIndex.value = (activeIndex.value + 1) % options.value.length
  } else if (event.key === 'ArrowUp' && options.value.length) {
    event.preventDefault()
    focused.value = true
    activeIndex.value = (activeIndex.value + options.value.length - 1) % options.value.length
  } else if (event.key === 'Enter') {
    event.preventDefault()
    add(activeIndex.value >= 0 ? options.value[activeIndex.value] : candidate.value)
    activeIndex.value = -1
  }
}
let timer = null
let controller = null
watch(search, value => {
  activeIndex.value = -1
  clearTimeout(timer)
  controller?.abort()
  remoteSuggestions.value = []
  if (isLanguage.value || value.trim().length < 3) return
  timer = setTimeout(async () => {
    controller = new AbortController()
    try {
      const url = new URL(generateUrl('/apps/library/catalogue/subject-suggestions'), window.location.origin)
      url.searchParams.set('subjectSearch', value.trim())
      const response = await fetch(url, { credentials: 'same-origin', signal: controller.signal })
      if (response.ok) {
        const result = await response.json()
        if (search.value === value) remoteSuggestions.value = Array.isArray(result.subjects) ? result.subjects.filter(entry => typeof entry === 'string') : []
      }
    } catch { /* The user may continue typing or enter a new subject. */ }
  }, 200)
})
onBeforeUnmount(() => { clearTimeout(timer); controller?.abort() })
</script>

<template>
  <div class="library-metadata-picker">
    <label :for="`${listId}-input`" :title="isLanguage ? t('library', 'Choose one or more language codes.') : t('library', 'Existing subjects are suggested as you type. You can add a new subject.')">{{ label }}</label>
    <div class="library-metadata-picker-input">
      <input :id="`${listId}-input`" v-model="search" type="search" autocomplete="off" role="combobox" aria-autocomplete="list" :aria-controls="listId" :aria-expanded="focused && options.length > 0" :aria-activedescendant="activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined" :aria-label="inputLabel" :placeholder="inputLabel" :disabled="disabled" @focus="focused = true" @input="focused = true" @blur="focused = false" @keydown="onKeydown">
      <button type="button" class="button secondary" :disabled="disabled || !canAdd" @click="add()">{{ addLabel }}</button>
    </div>
    <ul v-if="focused && options.length" :id="listId" class="library-metadata-picker-options" role="listbox" :aria-label="inputLabel">
      <li v-for="(option, index) in options" :id="`${listId}-${index}`" :key="option" role="option" :aria-selected="index === activeIndex" @mousedown.prevent @click="add(option)">{{ display(option) }}</li>
    </ul>
    <div v-if="selected.length" class="library-metadata-picker-values">
      <span v-for="value in selected" :key="value" class="library-metadata-picker-chip"><bdi dir="auto">{{ display(value) }}</bdi><button type="button" :disabled="disabled" :aria-label="`${t('library', 'Remove')}: ${value}`" @click="remove(value)">×</button></span>
    </div>
  </div>
</template>

<style scoped>
.library-metadata-picker { position: relative; min-width: 0; }
.library-metadata-picker > label { display: block; margin-bottom: 5px; }
.library-metadata-picker-input { display: flex; gap: 6px; }
.library-metadata-picker-input input { flex: 1 1 auto; }
.library-metadata-picker-input button { flex: 0 0 auto; }
.library-metadata-picker-options { position: absolute; z-index: 10; inset-inline: 0; top: 100%; max-height: 220px; overflow: auto; list-style: none; margin: 2px 0 0; padding: 4px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-main-background); box-shadow: 0 4px 12px var(--color-box-shadow); }
.library-metadata-picker-options li { padding: 6px 8px; cursor: pointer; }
.library-metadata-picker-options li:hover, .library-metadata-picker-options [aria-selected="true"] { background: var(--color-background-hover); }
.library-metadata-picker-values { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.library-metadata-picker-chip { display: inline-flex; align-items: center; gap: 5px; max-width: 100%; padding: 3px 8px; border-radius: 18px; background: var(--color-background-dark); }
.library-metadata-picker-chip bdi { overflow-wrap: anywhere; }
.library-metadata-picker-chip button { border: 0; background: transparent; cursor: pointer; }
</style>
