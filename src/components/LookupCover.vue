<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
const props = defineProps({ jobId: String, itemId: Number, reviewVersion: Number, requestToken: String, selected: Boolean, disabled: Boolean })
const emit = defineEmits(['version', 'select'])
const busy = ref(false), error = ref(''), image = ref('')
let generation = 0
function clear() { generation++; if (image.value) URL.revokeObjectURL(image.value); image.value = ''; error.value = '' }
watch(() => props.jobId, clear)
onBeforeUnmount(clear)
async function preview() {
  if (busy.value || props.disabled) return
  busy.value = true; error.value = ''; const token = ++generation
  try {
    const base = generateUrl(`/apps/library/api/metadata-batches/${props.jobId}/books/${props.itemId}`)
    const options = { method: 'POST', credentials: 'same-origin', cache: 'no-store', headers: { 'Content-Type': 'application/json', requesttoken: props.requestToken } }
    const response = await fetch(`${base}/cover-preview`, { ...options, body: JSON.stringify({ reviewVersion: props.reviewVersion }) })
    if (!response.ok) { const failure = await response.json().catch(() => ({})); throw new Error(failure.error === 'cover_storage_limit' ? t('library', 'Cover storage is full. Delete older lookup receipts before retrying.') : '') }
    const job = await response.json()
    if (token !== generation) return
    emit('version', job)
    const downloaded = await fetch(`${base}/cover-image`, { ...options, body: '{}' })
    if (!downloaded.ok) throw new Error()
    const blob = await downloaded.blob()
    if (token !== generation) return
    if (image.value) URL.revokeObjectURL(image.value)
    image.value = URL.createObjectURL(blob)
  } catch (cause) { if (token === generation) error.value = cause.message || t('library', 'Cover preview is unavailable or expired. Retry before selecting it.') }
  finally { busy.value = false }
}
</script>
<template>
  <section class="library-lookup-cover" :aria-label="t('library', 'Compare covers')" :aria-busy="busy">
    <button type="button" :disabled="busy || disabled" @click="preview">{{ busy ? t('library', 'Loading…') : t('library', 'Preview cover from Open Library') }}</button>
    <p v-if="error" role="alert">{{ error }}</p>
    <template v-if="image">
      <div class="library-lookup-cover-pair">
        <figure><img :src="generateUrl(`/apps/library/items/${itemId}/cover?lookup=${jobId}`)" :alt="t('library', 'Current cover')"><figcaption>{{ t('library', 'Current cover') }}</figcaption></figure>
        <figure><img :src="image" :alt="t('library', 'Suggested cover')"><figcaption>{{ t('library', 'Suggested cover') }}</figcaption></figure>
      </div>
      <label><input type="checkbox" :checked="selected" :disabled="disabled || busy" @change="emit('select', $event.target.checked)">{{ t('library', 'Use this cover, replacing the current cover if present') }}</label>
      <p>{{ t('library', 'The cover changes only when you apply or save. Text-only updates keep your current cover.') }}</p>
    </template>
  </section>
</template>
<style scoped>
.library-lookup-cover { padding-block: 12px; }
.library-lookup-cover-pair { display: flex; flex-wrap: wrap; gap: 16px; margin-block: 12px; }
.library-lookup-cover-pair figure { margin: 0; max-width: 45%; }
.library-lookup-cover-pair img { width: 140px; height: 190px; max-width: 100%; object-fit: contain; }
.library-lookup-cover label { display: flex; gap: 8px; align-items: center; }
</style>
