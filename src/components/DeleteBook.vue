<script setup>
import { nextTick, ref } from 'vue'
import { t } from '@nextcloud/l10n'
const props = defineProps({ url: String, requestToken: String, disabled: Boolean, marked: Boolean })
const emit = defineEmits(['deleted', 'mark-requested'])
const dialog = ref(null), plan = ref(null), error = ref(''), busy = ref(false), canMark = ref(false)
const permissionMessage = () => t('library', 'Nextcloud does not allow you to delete this file. Check its storage or share permissions in Files.')
const lockingMessage = () => t('library', 'Book deletion requires transactional file locking to be enabled by the server administrator.')
async function responseMessage(response, fallback) {
  const code = (await response.json().catch(() => ({})))?.error
  if (code === 'not_permitted') return permissionMessage()
  if (code === 'locking_disabled') return lockingMessage()
  if (code === 'not_found') return t('library', 'This file is unavailable in Nextcloud Files. Check its storage connection or rescan the folder.')
  return fallback
}
async function preview() {
  error.value = ''; plan.value = null; canMark.value = false; busy.value = true
  dialog.value.showModal()
  try {
    const response = await fetch(props.url, { credentials: 'same-origin' })
    if (!response.ok) { canMark.value = response.status === 403; error.value = await responseMessage(response, t('library', 'The file is unavailable or cannot be deleted. Refresh the book and check its permissions.')); return }
    plan.value = await response.json()
  } catch { error.value = t('library', 'The file is unavailable or cannot be deleted. Refresh the book and check its permissions.') }
  finally { busy.value = false; await nextTick(); dialog.value.querySelector('button')?.focus() }
}
async function remove() {
  busy.value = true; error.value = ''
  try {
    const body = new FormData(); body.set('token', plan.value.token); body.set('requesttoken', props.requestToken)
    const response = await fetch(props.url, { method: 'POST', credentials: 'same-origin', body })
    if (!response.ok) {
      plan.value = null
      error.value = await responseMessage(response, t('library', 'Deletion could not be completed. Close this dialog and refresh the book before trying again.'))
      return
    }
    const result = await response.json()
    if (!result.deleted) throw new Error()
    emit('deleted', result)
    dialog.value.close()
  } catch { error.value = t('library', 'Deletion could not be completed. Close this dialog and refresh the book before trying again.') }
  finally { busy.value = false }
}
</script>
<template>
  <button type="button" class="button secondary library-delete-trigger" :disabled="disabled" @click="preview"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7" /></svg>{{ t('library', 'Delete book') }}</button>
  <dialog ref="dialog" class="library-delete-dialog" aria-labelledby="library-delete-heading" :aria-busy="busy" @cancel="busy && $event.preventDefault()" @keydown.escape.stop.prevent="!busy && dialog.close()">
    <h2 id="library-delete-heading">{{ t('library', 'Delete book?') }}</h2>
    <p v-if="busy" role="status">{{ t('library', 'Please wait…') }}</p>
    <p v-if="error" role="alert">{{ error }}</p>
    <template v-if="plan">
      <p>{{ t('library', 'These files will be deleted:') }}</p>
      <ul><li><bdi dir="ltr">{{ plan.file }}</bdi></li><li v-if="plan.opf && !plan.keepOpf"><bdi dir="ltr">{{ plan.opf }}</bdi></li></ul>
      <p v-if="plan.keepOpf === 'shared'">{{ t('library', 'The OPF is shared with another publication and will be kept.') }}</p>
      <p v-if="plan.keepOpf === 'permission'">{{ t('library', 'The OPF cannot be deleted with your permissions and will be kept.') }}</p>
      <p v-if="plan.parent">{{ t('library', 'The immediate parent folder will be removed only if empty:') }} <bdi dir="ltr">{{ plan.parent }}</bdi></p>
      <p>{{ t('library', 'Library-only edits and unsaved changes will be removed. Restoring the source file does not restore those edits.') }}</p>
      <p>{{ t('library', 'Recovery through Nextcloud Deleted files depends on your storage and retention settings.') }}</p>
    </template>
    <p v-if="canMark && error && !marked">{{ t('library', 'You can mark this book for deletion in Library. It will be hidden from browsing; the file will remain in Nextcloud Files.') }}</p>
    <div class="library-delete-actions"><button type="button" class="button secondary" :disabled="busy" @click="dialog.close()">{{ t('library', 'Cancel') }}</button><button v-if="canMark && error && !marked" type="button" class="button secondary" :disabled="busy" @click="dialog.close(); emit('mark-requested')">{{ t('library', 'Mark for deletion') }}</button><button v-if="plan" type="button" class="button primary" :disabled="busy" @click="remove">{{ t('library', 'Delete book') }}</button></div>
  </dialog>
</template>
<style scoped>
.library-delete-trigger { display: inline-flex; align-items: center; gap: 6px; margin-inline-start: 12px; color: var(--color-error-text, #b00020) }
.library-delete-dialog { position: fixed; inset: 0; margin: auto; width: min(560px, calc(100vw - 32px)); max-height: calc(100dvh - 48px); overflow: auto; box-sizing: border-box; padding: 24px; border: 1px solid var(--color-border); border-radius: 12px; background: var(--color-main-background); color: var(--color-main-text); overflow-wrap: anywhere }
.library-delete-dialog:not([open]) { display: none }
.library-delete-dialog::backdrop { background: #0009 }
.library-delete-dialog h2 { margin-top: 0 }
.library-delete-dialog p, .library-delete-dialog ul { margin: 12px 0 }
.library-delete-dialog ul { padding-inline-start: 20px; list-style: disc }
.library-delete-actions { display: flex; justify-content: end; gap: 12px; flex-wrap: wrap }
.library-delete-actions .primary { background: #b00020; color: white }
</style>
