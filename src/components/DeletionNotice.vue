<script setup>
import { ref } from 'vue'
import { t } from '@nextcloud/l10n'
const notice = ref(null)
try { notice.value = JSON.parse(sessionStorage.getItem('library-deletion-result') || 'null'); sessionStorage.removeItem('library-deletion-result') } catch { /* Storage may be disabled. */ }
const messages = {
  opf_shared: t('library', 'The OPF is shared with another publication and will be kept.'),
  opf_retained: t('library', 'The book was deleted, but its OPF could not be removed.'),
  folder_retained: t('library', 'The book was deleted, but the parent folder was kept.'),
  catalogue_cleanup: t('library', 'The file was deleted, but catalogue cleanup needs a rescan. You can then forget the missing publication.'),
  reconciliation_pending: t('library', 'The file was deleted. Run a scan to refresh the catalogue status.'),
}
</script>
<template><section v-if="notice?.deleted" class="library-deletion-notice" role="status"><strong>{{ t('library', 'Book deleted.') }}</strong><p v-for="code in notice.warnings || []" :key="code">{{ messages[code] }}</p><button type="button" class="button secondary" @click="notice = null">{{ t('library', 'Dismiss') }}</button></section></template>
<style scoped>.library-deletion-notice { margin: 20px; padding: 16px; border: 1px solid var(--color-border); border-radius: 8px }.library-deletion-notice button { margin-inline-start: 12px }</style>
