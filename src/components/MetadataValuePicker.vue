<script setup>
import { computed, onBeforeUnmount, ref, useId, watch } from 'vue'
import { pickerIndex } from '../picker-keyboard.js'
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
const searching = ref(false), lookupError = ref('')
let generation = 0
const selected = computed(() => [...new Set(props.modelValue.split('\n').map(normalizedInput).filter(Boolean))])
const isLanguage = computed(() => props.kind === 'language')
const label = computed(() => isLanguage.value ? t('library', 'Language') : t('library', 'Subjects'))
const addLabel = computed(() => isLanguage.value ? t('library', 'Add language') : t('library', 'Add subject'))
const inputLabel = computed(() => isLanguage.value ? t('library', 'Search languages or enter a code') : t('library', 'Search subjects'))
const languageCodes = [
  'ar', 'zh', 'da', 'nl', 'en', 'en-GB', 'en-US', 'fi', 'fr', 'de', 'el', 'hi', 'it',
  'ja', 'ko', 'no', 'pl', 'pt', 'pt-BR', 'ru', 'es', 'sv', 'tr', 'uk',
]
const commonLanguageCodes = [
  'en', 'es', 'fr', 'de', 'pt', 'zh', 'hi', 'ar', 'ru', 'ja',
  'ko', 'it', 'nl', 'pl', 'tr', 'uk', 'sv', 'da', 'fi', 'no',
]
const languageAliases = {
  ara: 'ar', chi: 'zh', zho: 'zh', dut: 'nl', nld: 'nl', eng: 'en',
  fre: 'fr', fra: 'fr', ger: 'de', deu: 'de', ita: 'it', jpn: 'ja', spa: 'es',
  por: 'pt', rus: 'ru',
}
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
  return match ? (languageAliases[match[1].toLowerCase()] || match[1].toLowerCase()) + (match[2] ? `-${match[2].toUpperCase()}` : '') : trimmed
}
function validLanguageCode(value) {
  const match = /^([a-z]{2,3})(?:-([A-Z]{2}))?$/.exec(value)
  if (!match) return false
  if (typeof Intl.DisplayNames !== 'function') return true
  const languageName = new Intl.DisplayNames(['en'], { type: 'language' }).of(match[1])
  if (!languageName || languageName.toLowerCase() === match[1] || languageName === 'Unknown language') return false
  if (!match[2]) return true
  const name = new Intl.DisplayNames(['en'], { type: 'region' }).of(match[2])
  return Boolean(name && name !== match[2] && name !== 'Unknown Region')
}
const candidate = computed(() => normalizedInput(search.value))
const canAdd = computed(() => candidate.value.length > 0 && candidate.value.length <= 255
  && (!isLanguage.value || validLanguageCode(candidate.value))
  && !selected.value.some(value => value.toLowerCase() === candidate.value.toLowerCase()))
const options = computed(() => {
  const query = search.value.trim().toLocaleLowerCase()
  if (!query) return isLanguage.value
    ? commonLanguageCodes.filter(value => !selected.value.some(chosen => chosen.toLowerCase() === value)).sort((a, b) => display(a).localeCompare(display(b))).slice(0, 20)
    : []
  const values = isLanguage.value
    ? languageCodes.filter(value => value.toLowerCase().includes(query) || display(value).toLocaleLowerCase().includes(query) || languageAliases[query] === value)
    : remoteSuggestions.value
  return values.filter(value => !selected.value.some(chosen => chosen.toLowerCase() === value.toLowerCase())).slice(0, 12)
})
function add(value = candidate.value) {
  if (props.disabled || searching.value || lookupError.value) return
  const next = normalizedInput(value)
  if (!next || next.length > 255 || (isLanguage.value && !validLanguageCode(next))) return
  if (!selected.value.some(entry => entry.toLowerCase() === next.toLowerCase())) emit('update:modelValue', [...selected.value, next].join('\n'))
  search.value = ''
  focused.value = false
}
function remove(value) {
  emit('update:modelValue', selected.value.filter(entry => entry !== value).join('\n'))
}
function onKeydown(event) {
  if (event.key === 'Escape') { focused.value = false; activeIndex.value = -1; return }
  if (['ArrowDown', 'ArrowUp'].includes(event.key) && options.value.length) {
    event.preventDefault()
    focused.value = true
    activeIndex.value = pickerIndex(activeIndex.value, event.key, options.value.length)
  } else if (event.key === 'Enter') {
    event.preventDefault()
    if (focused.value && options.value.length && activeIndex.value >= 0) add(options.value[activeIndex.value])
    // Creation is explicit: Enter on a search fragment must not create metadata.
  }
}
let timer = null
let controller = null
function findSuggestions(value) {
  const current = ++generation
  lookupError.value = ''
  searching.value = !isLanguage.value && value.trim().length >= 3
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
      if (!response.ok) throw new Error()
      if (generation === current) {
        const result = await response.json()
        if (search.value === value) remoteSuggestions.value = Array.isArray(result.subjects) ? result.subjects.filter(entry => typeof entry === 'string') : []
      }
    } catch (cause) { if (current === generation && cause.name !== 'AbortError') lookupError.value = t('library', 'Could not load suggestions. Try again.') }
    finally { if (current === generation) searching.value = false }
  }, 200)
}
watch(search, findSuggestions)
watch(options, values => { activeIndex.value = values.length ? 0 : -1 })
onBeforeUnmount(() => { clearTimeout(timer); controller?.abort() })
</script>

<template>
  <div class="library-metadata-picker">
    <label :for="`${listId}-input`" :title="isLanguage ? t('library', 'Choose one or more language codes.') : t('library', 'Existing subjects are suggested as you type. You can add a new subject.')">{{ label }}</label>
    <div class="library-metadata-picker-input">
      <input :id="`${listId}-input`" v-model="search" type="search" autocomplete="off" role="combobox" aria-autocomplete="list" :aria-controls="listId" :aria-expanded="focused && options.length > 0" :aria-activedescendant="focused && activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined" :aria-label="inputLabel" :placeholder="inputLabel" :disabled="disabled" @focus="focused = true" @input="focused = true" @blur="focused = false" @keydown="onKeydown">
      <button v-if="search.trim() && canAdd && (isLanguage || !options.some(value => value.toLowerCase() === candidate.toLowerCase()))" type="button" class="button secondary" :disabled="disabled || !canAdd || searching || !!lookupError" @click="add()">{{ isLanguage ? addLabel : t('library', 'Create subject “{name}”', { name: candidate }) }}</button>
    </div>
    <small v-if="isLanguage && search.trim() && !options.length && !canAdd" role="status">{{ t('library', 'Choose a language from the suggestions or enter a valid code, for example {english} or {german}.', { english: 'en', german: 'de' }) }}</small>
    <small v-if="searching" role="status">{{ t('library', 'Searching…') }}</small>
    <p v-if="lookupError" role="alert">{{ lookupError }} <button type="button" @click="findSuggestions(search)">{{ t('library', 'Retry') }}</button></p>
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
.library-metadata-picker-input { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 6px; min-width: 0; }
.library-metadata-picker-input input { box-sizing: border-box; min-width: 0; width: 100%; }
.library-metadata-picker-input button { max-width: 9rem; white-space: normal; }
.library-metadata-picker-options { position: absolute; z-index: 10; inset-inline: 0; top: 100%; max-height: 220px; overflow: auto; list-style: none; margin: 2px 0 0; padding: 4px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-main-background); box-shadow: 0 4px 12px var(--color-box-shadow); }
.library-metadata-picker-options li { padding: 6px 8px; cursor: pointer; }
.library-metadata-picker-options li:hover, .library-metadata-picker-options [aria-selected="true"] { background: var(--color-background-hover); }
.library-metadata-picker-values { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.library-metadata-picker-chip { display: inline-flex; align-items: center; gap: 5px; max-width: 100%; padding: 3px 8px; border-radius: 18px; background: var(--color-background-dark); }
.library-metadata-picker-chip bdi { overflow-wrap: anywhere; }
.library-metadata-picker-chip button { border: 0; background: transparent; cursor: pointer; }
</style>
