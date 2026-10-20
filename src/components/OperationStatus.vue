<script setup>
import { t } from '@nextcloud/l10n'
defineProps({ loading: Boolean, error: String, message: String })
defineEmits(['retry'])
</script>
<template>
  <p v-if="error" class="library-operation-error" role="alert">{{ error }} <button type="button" :disabled="loading" @click="$emit('retry')">{{ t('library', 'Retry') }}</button></p>
  <p v-else-if="loading" class="library-operation-loading" role="status"><span aria-hidden="true" class="library-operation-spinner"></span>{{ t('library', 'Working…') }}</p>
  <p v-else-if="message" class="library-operation-success" role="status">{{ message }}</p>
</template>
<style>
.library-operation-loading { display: flex; align-items: center; gap: 8px; }
.library-operation-spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid var(--color-border); border-top-color: var(--color-primary-element); border-radius: 50%; animation: library-operation-spin 1s linear infinite; }
@keyframes library-operation-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .library-operation-spinner { animation: none; } }
</style>
