<script setup>
import { t } from '@nextcloud/l10n'
defineProps({ before: String, after: String })
</script>
<template>
  <span class="field-change">
    <strong>{{ before === after ? t('library', 'No changes') : !after ? t('library', 'Clear') : !before ? t('library', 'Add') : t('library', 'Replace') }}</strong>
    <span>{{ t('library', 'Before') }}: <bdi>{{ before || '—' }}</bdi></span>
    <span>{{ t('library', 'After') }}: <bdi>{{ after || '—' }}</bdi></span>
  </span>
</template>
<style scoped>
.field-change { display: grid; gap: .15rem; min-width: 0; overflow-wrap: anywhere; }
.field-change bdi { white-space: pre-line; }
</style>
