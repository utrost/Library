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
    <label :for="`${id}-search`">{{ t('library', 'Search titles') }}</label>
    <input :id="`${id}-search`" :value="search" type="search" maxlength="255" :disabled="disabled" @input="$emit('update:search', $event.target.value)" />
    <button :disabled="disabled">{{ t('library', 'Search') }}</button>
    <label :for="`${id}-sort`">{{ t('library', 'Sort') }}</label>
    <select :id="`${id}-sort`" :value="sort" :disabled="disabled" @change="changeSort"><option v-for="option in sorts" :key="option.value" :value="option.value">{{ option.label }}</option></select>
    <div class="library-book-views"><button type="button" :disabled="disabled" :aria-pressed="view === 'grid'" @click="$emit('update:view', 'grid')">{{ t('library', 'Covers') }}</button><button type="button" :disabled="disabled" :aria-pressed="view === 'list'" @click="$emit('update:view', 'list')">{{ t('library', 'List') }}</button></div>
  </form>
</template>
<style>
.library-book-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-block: 16px; }
.library-book-toolbar input { flex: 1 1 160px; min-width: 0; }
.library-book-toolbar select { max-width: 100%; }
.library-book-views { display: flex; gap: 4px; }
</style>
