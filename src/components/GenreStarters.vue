<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
const props = defineProps({ requestToken: String, disabled: Boolean })
const emit = defineEmits(['created'])
const entries = ref([]), search = ref(''), error = ref(''), busy = ref(false), notice = ref('')
const matches = computed(() => entries.value.filter(e => `${e.name} ${e.parent || ''}`.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())))
let controller
onBeforeUnmount(() => controller?.abort())
async function request(key = null) {
  if (busy.value) return
  busy.value = true; error.value = ''; controller = new AbortController()
  try {
    const response = await fetch(generateUrl('/apps/library/api/genres/starters'), { method: key ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store', signal: controller.signal, headers: { Accept: 'application/json', ...(key ? { 'Content-Type': 'application/json', requesttoken: props.requestToken } : {}) }, ...(key ? { body: JSON.stringify({ key }) } : {}) })
    if (!response.ok) throw new Error(t('library', 'The genre change could not be saved.'))
    const data = await response.json()
    if (key) { emit('created', { id: Number(data.id), name: data.display_name }); notice.value = t('library', 'Genre ready: {name}', { name: data.display_name }) } else entries.value = data.entries
  } catch (e) { if (e.name !== 'AbortError') error.value = e.message }
  finally { busy.value = false }
}
</script>
<template>
  <details @toggle="($event.target.open && !entries.length) && request()"><summary>{{ t('library', 'Choose a starter genre') }}</summary><p>{{ t('library', 'Optional English genre names. Choosing one creates or reuses your own genre and its parents; existing custom hierarchies stay unchanged.') }}</p><label>{{ t('library', 'Find a starter genre') }}<input v-model="search" type="search" maxlength="100"></label><p v-if="busy" role="status">{{ t('library', 'Updating…') }}</p><p v-if="error" role="alert">{{ error }} <button type="button" :disabled="busy" @click="request()">{{ t('library', 'Retry') }}</button></p><p v-if="notice" role="status">{{ notice }}</p><ul><li v-for="entry in matches" :key="entry.key"><button type="button" :disabled="busy || disabled" @click="request(entry.key)"><small v-if="entry.parent">{{ entry.parent }} → </small>{{ entry.name }}</button></li></ul></details>
</template>
<style scoped>
ul { list-style:none; padding:0; max-height:18rem; overflow:auto; display:flex; flex-wrap:wrap; gap:.5rem; } button { white-space:normal; } small { color:var(--color-text-maxcontrast); } details { margin-block:.75rem; } label { display:grid; gap:.25rem; } input { width:100%; max-width:32rem; min-width:0; } p { margin-block:.5rem; }
</style>
