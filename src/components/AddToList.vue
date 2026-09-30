<script setup>
import { onMounted, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { listRequest } from '../personal-lists-api.js'

const props = defineProps({ preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: true }, requestToken: { type: String, default: '' }, listsUrl: { type: String, required: true } })
const emit = defineEmits(['added'])
const lists = ref([])
const chosen = ref('')
const busy = ref(false)
const error = ref('')
const message = ref('')

async function load() {
  busy.value = true; error.value = ''
  try {
    const result = await listRequest(props.itemIds.length === 1 ? `?itemId=${props.itemIds[0]}` : '')
    lists.value = result.lists
    const preferred = Number(chosen.value) || props.preferredListId || Number(new URLSearchParams(window.location.search).get('addToList'))
    chosen.value = String(lists.value.find((list) => list.id === preferred)?.id || lists.value[0]?.id || '')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}

async function add() {
  const list = lists.value.find((candidate) => candidate.id === Number(chosen.value))
  if (busy.value || !list || props.itemIds.length === 0) return
  const ids = [...props.itemIds]
  busy.value = true; error.value = ''; message.value = ''
  try {
    const result = await listRequest(`/${list.id}/actions`, props.requestToken, { action: 'add', revision: list.revision, itemIds: ids })
    list.revision = result.revision
    message.value = t('library', 'Added: {added}. Already in list: {present}. Unavailable: {skipped}.', { added: result.added, present: result.alreadyPresent, skipped: result.skipped })
    if (ids.length === 1 && result.skipped === 0) list.containsItem = true
    emit('added', result)
  } catch (e) { error.value = e.message } finally { busy.value = false }
}

watch(() => props.itemIds.join(','), () => { message.value = '' })
onMounted(load)
</script>

<template>
  <div class="library-add-to-list" :aria-busy="busy ? 'true' : 'false'">
    <div class="library-list-inline-actions">
      <select v-if="lists.length" v-model="chosen" :disabled="busy" :aria-label="t('library', 'Choose a list')" @change="message = ''">
        <option v-for="list in lists" :key="list.id" :value="String(list.id)">{{ list.name }}</option>
      </select>
      <button v-if="lists.length" type="button" class="button primary" :disabled="busy || itemIds.length === 0 || !chosen" @click="add">{{ t('library', 'Add to list') }}</button>
      <a v-if="!busy && !lists.length && !error" :href="`${listsUrl}&new=1`">{{ t('library', 'Create a new list') }}</a>
      <a v-if="message && chosen" :href="`${listsUrl}&listId=${chosen}`">{{ t('library', 'Back to list') }}</a>
    </div>
    <p v-if="busy" role="status">{{ t('library', 'Loading or saving…') }}</p>
    <p v-if="error" role="alert">{{ error }}</p>
    <button v-if="error" type="button" class="button secondary" :disabled="busy" @click="load">{{ t('library', 'Reload list') }}</button>
    <p v-if="message" role="status">{{ message }}</p>
  </div>
</template>

<style>
.library-add-to-list { min-width: 0; }
.library-list-inline-actions, .library-list-inline-create { display: flex; flex-wrap: wrap; align-items: end; gap: 12px; }
.library-list-inline-actions label, .library-list-inline-create label { display: grid; gap: 4px; min-width: 0; max-width: 100%; }
.library-list-inline-actions select { width: 240px; max-width: 100%; }
.library-list-inline-create { margin-block-start: 12px; }
.library-list-inline-create input { max-width: 100%; }
.library-list-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.library-list-memberships { padding-inline-start: 20px; }
</style>
