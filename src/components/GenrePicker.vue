<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'

const props = defineProps({ itemId: { type: Number, required: true }, genres: { type: Array, default: () => [] }, requestToken: { type: String, required: true }, disabled: { type: Boolean, default: false }, catalogueUrl: { type: String, required: true }, draftMode: { type: Boolean, default: false } })
const emit = defineEmits(['changed', 'update:genres'])
const api = generateUrl('/apps/library/api/genres')
const search = ref('')
const results = ref([])
const busy = ref(false)
const error = ref('')
const focused = ref(false)
const ready = computed(() => (search.value.match(/\p{L}/gu) || []).length >= 3)
let timer = null
let controller = null
let generation = 0
async function request(path, body = null, signal = null) {
  const response = await fetch(api + path, { credentials: 'same-origin', cache: 'no-store', ...(signal ? { signal } : {}),
    method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(t('library', 'The genre change could not be saved.'))
  return response.json()
}
watch(search, value => {
  clearTimeout(timer); controller?.abort(); generation++; results.value = []
  if (!ready.value) return
  const current = generation
  timer = setTimeout(async () => {
    controller = new AbortController()
    try {
      const data = await request(`?search=${encodeURIComponent(value.trim())}`, null, controller.signal)
      if (generation === current) results.value = (data.genres || []).filter(genre => !props.genres.some(chosen => Number(chosen.id) === Number(genre.id)))
    } catch (cause) { if (cause.name !== 'AbortError') error.value = cause.message }
  }, 220)
})
async function assign(genre, action = 'add') {
  if (busy.value || props.disabled) return
  if (props.draftMode) {
    emit('update:genres', action === 'remove' ? props.genres.filter(entry => Number(entry.id) !== Number(genre.id)) : [...props.genres, { id: Number(genre.id), name: genre.display_name || genre.name }])
    search.value = ''; focused.value = false; results.value = []
    return
  }
  busy.value = true; error.value = ''
  try {
    await request(`/items/${props.itemId}`, { genreId: Number(genre.id), action })
    search.value = ''; focused.value = false; results.value = []
    emit('changed')
  } catch (cause) { error.value = cause.message }
  finally { busy.value = false }
}
async function create() {
  if (!search.value.trim() || busy.value) return
  busy.value = true; error.value = ''
  try {
    const genre = await request('', { name: search.value.trim() })
    if (props.draftMode) emit('update:genres', [...props.genres, { id: Number(genre.id), name: genre.display_name || genre.name }])
    else await request(`/items/${props.itemId}`, { genreId: Number(genre.id), action: 'add' })
    search.value = ''; focused.value = false; results.value = []
    if (!props.draftMode) emit('changed')
  } catch (cause) { error.value = cause.message }
  finally { busy.value = false }
}
onBeforeUnmount(() => { clearTimeout(timer); controller?.abort() })
</script>

<template>
  <section class="library-full-details-card library-genre-picker" aria-labelledby="library-details-genres-heading">
    <h2 id="library-details-genres-heading">{{ t('library', 'Genres') }}</h2>
    <p v-if="error" role="alert">{{ error }}</p>
    <div class="library-genre-chips"><span v-for="genre in genres" :key="genre.id" class="library-genre-chip"><a :href="`${catalogueUrl}?genreId=${genre.id}`">{{ genre.name }}</a><button type="button" :disabled="busy || disabled" :aria-label="`${t('library', 'Remove genre')}: ${genre.name}`" @click="assign(genre, 'remove')">×</button></span></div>
    <p v-if="!genres.length" class="library-muted">{{ t('library', 'No genres assigned yet.') }}</p>
    <div class="library-genre-input">
      <label for="library-details-genre-search">{{ t('library', 'Add a genre') }}</label>
      <input id="library-details-genre-search" v-model="search" type="search" autocomplete="off" role="combobox" aria-autocomplete="list" aria-controls="library-details-genre-suggestions" :aria-expanded="focused && results.length > 0" :placeholder="t('library', 'Search genres')" :disabled="busy || disabled" @focus="focused = true" @blur="focused = false" @keydown.escape="focused = false">
      <p v-if="!ready && search" class="library-muted">{{ t('library', 'Type at least 3 letters to search genres.') }}</p>
      <ul v-if="focused && results.length" id="library-details-genre-suggestions" role="listbox"><li v-for="genre in results" :key="genre.id" role="option"><button type="button" @mousedown.prevent @click="assign(genre)">{{ genre.display_name }}</button></li></ul>
      <button type="button" class="button secondary" :disabled="busy || disabled || !search.trim()" @click="create">{{ t('library', 'Create and add genre') }}</button>
    </div>
    <a :href="`${catalogueUrl}?genres=1`">{{ t('library', 'Review genre suggestions') }}</a>
  </section>
</template>

<style scoped>
.library-genre-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
.library-genre-chip { align-items: center; background: var(--color-background-dark); border-radius: 16px; display: inline-flex; gap: 6px; padding: 4px 10px; }
.library-genre-chip button { background: transparent; border: 0; cursor: pointer; }
.library-genre-input { max-width: 550px; position: relative; }
.library-genre-input label { display: block; margin-bottom: 5px; }
.library-genre-input input { width: 100%; }
.library-genre-input ul { background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: 8px; box-shadow: 0 10px 26px #0003; inset-inline: 0; list-style: none; margin: 0; max-height: 250px; overflow: auto; padding: 4px; position: absolute; top: 62px; z-index: 10; }
.library-genre-input li button { background: none; border: 0; cursor: pointer; padding: 9px; text-align: start; width: 100%; }
.library-genre-input li button:hover { background: var(--color-background-hover); }
.library-genre-input > button { margin: 8px 0; }
</style>
