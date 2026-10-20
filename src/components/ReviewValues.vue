<script setup>
import { t } from '@nextcloud/l10n'
defineProps({ current: String, proposed: String })
</script>
<template>
  <dl class="library-review-values">
    <div><dt>{{ t('library', 'Current value') }}</dt><dd dir="auto"><slot name="current">{{ current || '—' }}</slot></dd></div>
    <div><dt>{{ t('library', 'Proposed value') }}</dt><dd dir="auto"><slot name="proposed">{{ proposed || '—' }}</slot></dd></div>
  </dl>
</template>
