<script setup>
import { computed, ref } from 'vue'
import { t } from '@nextcloud/l10n'
import LabelHelp from './LabelHelp.vue'
import { newPart, splitPart } from '../path-inference-rule.js'
const props = defineProps({ node: { type: Object, required: true }, value: { type: String, default: '' }, fields: { type: Array, required: true }, depth: { type: Number, default: 0 } })
const delimiter = ref(props.node.split?.delimiter || ' - ')
const occurrence = ref(props.node.split?.occurrence || 'first')
const pieces = computed(() => props.node.split ? splitPart(props.value, props.node.split.delimiter, props.node.split.occurrence) : [])
const authorAndSeparator = ' and '
const authorSeparatorChoice = computed({
  get: () => props.node.authorSeparatorChoice || 'none',
  set: (choice) => {
    props.node.authorSeparatorChoice = choice
    props.node.authorSeparator = ({ none: '', semicolon: ';', ampersand: '&', and: authorAndSeparator, custom: props.node.customAuthorSeparator || '' })[choice]
  },
})
function customAuthorSeparatorChanged(event) {
  props.node.customAuthorSeparator = event.target.value
  props.node.authorSeparator = event.target.value
}
function split() {
  const count = splitPart(props.value, delimiter.value, occurrence.value).length
  const previous = props.node.split?.children || []
  props.node.split = { delimiter: delimiter.value, occurrence: occurrence.value,
    children: Array.from({ length: Math.min(32, Math.max(2, count)) }, (_, index) => previous[index] || newPart(index === 0 ? props.node.field : 'ignore')) }
}
</script>
<template>
  <div class="library-inference-part">
    <bdi class="library-inference-part-source">{{ value || '—' }}</bdi>
    <template v-if="node.split">
      <div class="library-inference-part-options">
        <label>{{ t('library', 'Separator') }}<input v-model="delimiter" maxlength="100" @input="split"></label>
        <label>{{ t('library', 'Split at') }}<select v-model="occurrence" @change="split"><option value="first">{{ t('library', 'First occurrence') }}</option><option value="last">{{ t('library', 'Last occurrence') }}</option><option value="every">{{ t('library', 'Every occurrence') }}</option></select></label>
      </div>
      <p v-if="pieces.length !== node.split.children.length || !node.split.delimiter" role="status">{{ t('library', 'This example does not match the split. Adjust the separator or select another example.') }}</p>
      <button class="button secondary" @click="node.split = null">{{ t('library', 'Use whole part') }}</button>
      <InferencePart v-for="(child, index) in node.split.children" :key="index" :node="child" :value="pieces[index] || ''" :fields="fields" :depth="depth + 1" />
    </template>
    <template v-else>
      <label>{{ t('library', 'Field') }}<select v-model="node.field" :aria-label="`${t('library', 'Field')}: ${value}`"><option value="ignore">{{ t('library', 'Ignore this part') }}</option><option v-for="field in fields" :key="field[0]" :value="field[0]">{{ field[1] }}</option></select></label>
      <button v-if="depth < 6" class="button secondary" @click="split">{{ t('library', 'Split this part') }}</button>
      <details v-if="node.field !== 'ignore'">
        <summary>{{ t('library', 'Transform this value') }}</summary>
        <div class="library-inference-part-options">
          <label>{{ t('library', 'Remove prefix') }}<input v-model="node.prefix" maxlength="100"></label>
          <label>{{ t('library', 'Remove suffix') }}<input v-model="node.suffix" maxlength="100"></label>
          <label class="library-inference-checkbox"><input v-model="node.underscores" type="checkbox">{{ t('library', 'Replace underscores with spaces') }}</label>
          <label><LabelHelp :text="t('library', 'Affixes must match. Value mapping follows affix removal and underscore replacement.')">{{ t('library', 'Map exact value') }}</LabelHelp><input v-model="node.mapFrom" maxlength="200"></label>
          <label>{{ t('library', 'Replacement value') }}<input v-model="node.mapTo" maxlength="200"></label>
        </div>

      </details>
      <div v-if="node.field === 'author'" class="library-inference-part-options">
        <label><LabelHelp :text="t('library', 'Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.') + (authorSeparatorChoice === 'and' ? ' ' + t('library', 'Spaces around the word are required.') : '')">{{ t('library', 'Separate authors by') }}</LabelHelp><select v-model="authorSeparatorChoice">
          <option value="none">{{ t('library', 'None (keep one name)') }}</option>
          <option value="semicolon">{{ t('library', 'Semicolon (;)') }}</option>
          <option value="ampersand">&amp;</option>
          <option value="and">{{ t('library', 'Word separator') }}: {{ authorAndSeparator.trim() }}</option>
          <option value="custom">{{ t('library', 'Custom separator') }}</option>
        </select></label>
        <label v-if="authorSeparatorChoice === 'custom'">{{ t('library', 'Custom separator') }}<input :value="node.customAuthorSeparator || ''" maxlength="100" @input="customAuthorSeparatorChanged"></label>

        <label class="library-inference-checkbox"><input v-model="node.reverseName" type="checkbox">{{ t('library', 'Convert Surname, Given name to Given name Surname') }}</label>
      </div>
    </template>
  </div>
</template>
<style>
.library-inference-part { min-width: 0; padding: 12px; margin-block: 12px; border: 1px solid var(--color-border); border-radius: 8px; background: var(--color-main-background); overflow-wrap: anywhere; }
.library-inference-part-source { display: block; font-weight: bold; margin-bottom: 10px; }
.library-inference-part > button { margin-block: 8px; }
.library-inference-part-options { display: flex; flex-wrap: wrap; gap: 12px; margin-block: 12px; }
.library-inference-part-options > label { flex: 1 1 180px; }
.library-inference-part summary { cursor: pointer; padding-block: 8px; }
.library-inference-part .library-inference-part { border-inline-start: 3px solid var(--color-primary-element); }
</style>
