<script setup>
import { t } from '@nextcloud/l10n'
defineProps({ label: { type: String, required: true }, busy: Boolean, disabled: Boolean })
defineEmits(['discard'])
</script>
<template>
  <div class="library-form-actions">
    <button type="submit" class="button primary" :disabled="busy || disabled">{{ busy ? t('library', 'Saving…') : label }}</button>
    <button type="button" class="button secondary" :disabled="busy" @click="$emit('discard')">{{ t('library', 'Discard changes') }}</button>
  </div>
</template>
<style>
.library-form-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-block: 12px; }
</style>
