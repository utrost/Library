<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import IdentityAction from './IdentityAction.vue'

const props = defineProps({ itemId: { type: Number, required: true }, genres: { type: Array, default: () => [] }, requestToken: { type: String, required: true }, disabled: { type: Boolean, default: false }, catalogueUrl: { type: String, required: true }, draftMode: { type: Boolean, default: false } })
const emit = defineEmits(['changed', 'update:genres'])
const api = generateUrl('/apps/library/api/genres')
const search = ref('')
const results = ref([])
const busy = ref(false)
const searching = ref(false), searched = ref(false), matchedCount = ref(0)
const error = ref('')
const focused = ref(false)
const activeIndex = ref(-1)
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
  if (!response.ok) throw new Error(body === null ? t('library', 'Could not load suggestions. Try again.') : t('library', 'The genre change could not be saved.'))
  return response.json()
}
function findGenres(value) {
  activeIndex.value = -1
  clearTimeout(timer); controller?.abort(); generation++; results.value = []; searched.value = false; matchedCount.value = 0; error.value = ''; searching.value = ready.value
  if (!ready.value) return
  const current = generation
  timer = setTimeout(async () => {
    controller = new AbortController()
    try {
      const data = await request(`?search=${encodeURIComponent(value.trim())}`, null, controller.signal)
      if (generation === current) { searched.value = true; matchedCount.value = (data.genres || []).length; results.value = (data.genres || []).filter(genre => !props.genres.some(chosen => Number(chosen.id) === Number(genre.id))) }
    } catch (cause) { if (generation === current && cause.name !== 'AbortError') error.value = cause.message }
    finally { if (generation === current) searching.value = false }
  }, 220)
}
watch(search, findGenres)
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
  if (!ready.value || !searched.value || searching.value || matchedCount.value || error.value || busy.value) return
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
function onKeydown(event) {
  if (event.key === 'Escape') { focused.value = false; activeIndex.value = -1; return }
  if (!results.value.length) return
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    focused.value = true
    activeIndex.value = event.key === 'ArrowDown' ? (activeIndex.value + 1) % results.value.length : (activeIndex.value < 0 ? results.value.length - 1 : (activeIndex.value - 1 + results.value.length) % results.value.length)
  } else if (event.key === 'Enter' && focused.value) {
    event.preventDefault()
    assign(results.value[Math.max(0, activeIndex.value)])
  }
}
onBeforeUnmount(() => { clearTimeout(timer); controller?.abort() })
</script>

<template>
  <section class="library-identity-row library-genre-picker" aria-labelledby="library-details-genres-heading">
    <h2 id="library-details-genres-heading">{{ t('library', 'Genres') }}</h2>
    <div class="library-identity-content">
      <p v-if="error" role="alert">{{ error }} <button type="button" @click="findGenres(search)">{{ t('library', 'Retry') }}</button></p>
      <div class="library-identity-values">
        <span v-for="genre in genres" :key="genre.id" class="library-genre-chip"><a :href="`${catalogueUrl}?genreId=${genre.id}`">{{ genre.name }}</a><IdentityAction :disabled="busy || disabled" :label="`${t('library', 'Remove genre')}: ${genre.name}`" @click="assign(genre, 'remove')" /></span>
        <div class="library-genre-input">
          <div class="library-genre-search-control">
            <label class="library-genre-search-label" for="library-details-genre-search">{{ t('library', 'Add a genre') }}</label>
            <input id="library-details-genre-search" v-model="search" type="search" autocomplete="off" role="combobox" aria-autocomplete="list" aria-controls="library-details-genre-suggestions" :aria-expanded="focused && results.length > 0" :aria-activedescendant="focused && activeIndex >= 0 ? `library-details-genre-option-${results[activeIndex]?.id}` : undefined" :placeholder="t('library', 'Search genres')" :title="t('library', 'Type at least 3 letters to search genres.')" :disabled="busy || disabled" @focus="focused = true" @input="focused = true" @blur="focused = false" @keydown="onKeydown">
            <ul v-if="focused && results.length" id="library-details-genre-suggestions" role="listbox"><li v-for="(genre, index) in results" :id="`library-details-genre-option-${genre.id}`" :key="genre.id" role="option" :aria-selected="activeIndex === index"><button type="button" :class="{ 'is-active': activeIndex === index }" @mousedown.prevent @click="assign(genre)">{{ genre.display_name }}</button></li></ul>
          </div>
          <small v-if="searching" role="status">{{ t('library', 'Searching…') }}</small>
          <button v-if="searched && !searching && !error && !matchedCount" type="button" class="button secondary" :disabled="busy || disabled" @click="create">{{ t('library', 'Create and add genre') }}</button>
        </div>
      </div>
      <a class="library-genre-review" :href="`${catalogueUrl}?genres=1#genre-review`">{{ t('library', 'Review genre suggestions') }}</a>
    </div>
  </section>
</template>

<style scoped>
.library-genre-chip { align-items: center; background: var(--color-background-dark); border-radius: 18px; display: inline-flex; gap: 2px; max-width: 100%; padding: 2px 4px 2px 10px; }
.library-genre-chip a { min-width: 0; overflow-wrap: anywhere; }
.library-genre-input { flex: 1 1 200px; max-width: 320px; min-width: 0; }
.library-genre-search-control { position: relative; }
.library-genre-search-label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
.library-genre-input input { width: 100%; }
.library-genre-input ul { background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: 8px; box-shadow: 0 10px 26px #0003; inset-inline: 0; list-style: none; margin: 4px 0 0; max-height: 250px; overflow: auto; padding: 4px; position: absolute; top: 100%; z-index: 10; }
.library-genre-input li button { background: none; border: 0; cursor: pointer; padding: 9px; text-align: start; width: 100%; overflow-wrap: anywhere; }
.library-genre-input li button:hover, .library-genre-input li button.is-active { background: var(--color-background-hover); }
.library-genre-input > button { margin: 6px 0 0; max-width: 100%; white-space: normal; }
.library-genre-review { display: inline-block; margin-top: 6px; font-size: 13px; }
</style>
