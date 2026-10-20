<script setup>
import { useId } from 'vue'
import { t } from '@nextcloud/l10n'
const props = defineProps({ search: String, sort: String, view: String, sorts: Array, disabled: Boolean })
const emit = defineEmits(['update:search', 'update:sort', 'update:view', 'apply'])
function changeSort(event) { emit('update:sort', event.target.value); emit('apply') }
const id = useId()
</script>
<template>
  <form class="library-book-toolbar" @submit.prevent="$emit('apply')">
    <div class="library-book-search">
      <label :for="`${id}-search`">{{ t('library', 'Search titles') }}</label>
      <div><input :id="`${id}-search`" :value="search" type="search" maxlength="255" :disabled="disabled" @input="$emit('update:search', $event.target.value)" /><button :disabled="disabled">{{ t('library', 'Search') }}</button></div>
    </div>
    <div class="library-book-sort">
      <label :for="`${id}-sort`">{{ t('library', 'Sort') }}</label>
      <select :id="`${id}-sort`" :value="sort" :disabled="disabled" @change="changeSort"><option v-for="option in sorts" :key="option.value" :value="option.value">{{ option.label }}</option></select>
    </div>
    <div class="library-book-views library-view-mode-toggle" role="group" :aria-label="t('library', 'View')"><button type="button" :disabled="disabled" :aria-pressed="view === 'grid'" @click="$emit('update:view', 'grid')">{{ t('library', 'Covers') }}</button><button type="button" :disabled="disabled" :aria-pressed="view === 'list'" @click="$emit('update:view', 'list')">{{ t('library', 'List') }}</button></div>
  </form>
</template>
<style>
.library-book-toolbar { display: flex; flex-wrap: wrap; align-items: end; gap: 8px 12px; margin-block: 16px; }
.library-book-search { flex: 1 1 260px; min-width: 0; }
.library-book-search > div { display: flex; gap: 8px; }
.library-book-search input { flex: 1; width: 100%; min-width: 0; }
.library-book-toolbar label { display: block; margin-bottom: 4px; }
.library-book-sort { flex: 0 1 260px; min-width: 0; }
.library-book-sort select { width: 100%; max-width: 100%; }
.library-book-views { display: flex; }
@media (max-width: 600px) {
  .library-book-search { flex-basis: 100%; }
  .library-book-sort { flex: 1 1 120px; }
}
</style>
