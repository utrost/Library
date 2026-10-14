<script setup>
import { computed, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { suggestInferenceRules } from '../inference-suggestions.js'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ path: { type: String, default: '' }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } })
const emit = defineEmits(['choose'])
const selected = ref('')
const suggestions = computed(() => suggestInferenceRules(props.path, props.sample))
const chosen = computed(() => suggestions.value.find(entry => entry.id === selected.value))
const reasons = computed(() => ({
  'year-parentheses': t('library', 'Trailing year in parentheses'),
  'year-trailing': t('library', 'Possible trailing year'),
  'author-by': t('library', 'Title by Author'),
  'author-dash': t('library', 'Title - Author'),
  'author-first': t('library', 'Author - Title'),
  'author-folder-agrees': t('library', 'Author matches a folder name'),
  'author-comma': t('library', 'Possible Surname, Given name folder'),
  'series-inline': t('library', 'Series #Number - Title'),
  'series-folder': t('library', 'Series folder with a numbered title'),
  'language-folder': t('library', 'Recognized language folder'),
  'language-genre-folder': t('library', 'Language and genre in one folder'),
  'filename-title': t('library', 'Title from filename'),
}))
const cautions = computed(() => ({
  'year-may-be-title': t('library', 'A year-like number may belong to the title. Check before applying.'),
  'author-needs-review': t('library', 'A name-shaped phrase may be a title or several people. Check the author; commas are preserved.'),
  'series-needs-review': t('library', 'Check that the parent folder names a series and the number is its position.'),
}))
watch(() => props.path, () => { selected.value = '' })
watch(() => JSON.stringify(props.rule), value => { if (chosen.value && JSON.stringify(chosen.value.rule) !== value) selected.value = '' })
function choose(event) {
  selected.value = event.target.value
  if (chosen.value) emit('choose', JSON.parse(JSON.stringify(chosen.value.rule)))
}
</script>
<template>
  <div class="library-inference-suggestions">
    <label><LabelHelp :text="t('library', 'Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.') + (chosen ? '\n\n' + chosen.clues.map(clue => reasons[clue]).join('\n') : '')">{{ t('library', 'Suggest fields') }}</LabelHelp>
      <select v-model="selected" :disabled="!suggestions.length" @change="choose">
        <option value="" disabled>{{ t('library', 'Choose a suggestion') }}</option>
        <option v-for="entry in suggestions" :key="entry.id" :value="entry.id">{{ entry.id === 'filename' ? t('library', 'Title from filename') : t('library', 'Suggested assignments') }}</option>
      </select>
    </label>
    <div v-if="chosen" aria-live="polite">
      <p>{{ t('library', '{matched} of {total} paths on this page match this structure.', { matched: chosen.matched, total: chosen.total }) }}</p>
      <p v-for="warning in chosen.warnings" :key="warning" class="library-inference-suggestion-warning">{{ cautions[warning] }}</p>
    </div>
  </div>
</template>
<style>
.library-inference-suggestions { margin-block: 12px; }
.library-inference-suggestions p { margin-block: 8px; overflow-wrap: anywhere; }
.library-inference-suggestion-warning { border-inline-start: 3px solid var(--color-warning); padding-inline-start: 10px; }
</style>
