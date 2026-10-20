<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { t, n } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import DirectoryBrowser from './DirectoryBrowser.vue'
import LabelHelp from './LabelHelp.vue'

const props = defineProps({ requestToken: { type: String, required: true }, catalogueUrl: { type: String, required: true } })
const api = generateUrl('/apps/library/api/genres')
const genres = ref([])
const suggestions = ref([])
const remaining = ref(0)
const name = ref('')
const directory = ref(null)
const targetNames = ref({})
const busy = ref(false)
const discovering = ref(false)
const error = ref('')
const feedback = ref('')
let cancelled = false

async function request(path = '', body = null, signal = undefined) {
  const response = await fetch(api + path, { signal, credentials: 'same-origin', cache: 'no-store',
    method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 422 ? t('library', 'Enter a valid genre name.') : t('library', 'The genre change could not be saved.'))
  return response.json()
}
async function load() {
  const [, review] = await Promise.all([directory.value?.reload(), request('/suggestions')])
  suggestions.value = review.suggestions || []
  remaining.value = Number(review.remaining || 0)
  for (const suggestion of suggestions.value) if (!targetNames.value[suggestion.candidate_key]) targetNames.value[suggestion.candidate_key] = suggestion.display_name
}
async function create() {
  if (!name.value.trim() || busy.value) return
  busy.value = true; error.value = ''; feedback.value = ''
  try {
    const created = await request('', { name: name.value.trim() })
    name.value = ''
    await load()
    feedback.value = t('library', 'Genre created: {name}', { name: created.display_name })
  } catch (cause) { error.value = cause.message }
  finally { busy.value = false }
}
async function decide(suggestion, ignore = false) {
  if (busy.value) return
  busy.value = true; error.value = ''; feedback.value = ''
  try {
    if (ignore) {
      await request(`/suggestions/${suggestion.candidate_key}`, { action: 'ignore' })
      feedback.value = t('library', 'Suggestion dismissed.')
    } else {
      const targetName = String(targetNames.value[suggestion.candidate_key] || '').trim()
      if (!targetName) throw new Error(t('library', 'Enter a genre name.'))
      const genre = await request('', { name: targetName })
      await request(`/suggestions/${suggestion.candidate_key}`, { action: 'map', genreId: Number(genre.id) })
      feedback.value = t('library', 'Books with this suggestion are being assigned to {name}.', { name: genre.display_name })
    }
    await load()
  } catch (cause) { error.value = cause.message }
  finally { busy.value = false }
}
async function discover() {
  if (discovering.value) { cancelled = true; return }
  cancelled = false; discovering.value = true; error.value = ''; feedback.value = ''
  try {
    while (!cancelled) {
      const result = await request('/discover', {})
      if (!result.processed) break
      remaining.value = Math.max(0, remaining.value - Number(result.processed))
      if (remaining.value === 0) break
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    await load()
    feedback.value = cancelled ? t('library', 'Genre discovery paused.') : t('library', 'Genre discovery is up to date.')
  } catch (cause) { error.value = cause.message }
  finally { discovering.value = false }
}
async function applyApproved() {
  if (busy.value) return
  busy.value = true; error.value = ''; feedback.value = ''
  try {
    let applied = 0
    for (let pass = 0; pass < 1000 && !cancelled; pass++) {
      const result = await request('/apply', {})
      applied += Number(result.applied || 0)
      if (!result.applied) break
    }
    await load()
    feedback.value = n('library', '%n genre assignment applied.', '%n genre assignments applied.', applied)
  } catch (cause) { error.value = cause.message }
  finally { busy.value = false }
}
onMounted(async () => { try { const review = await request('/suggestions'); suggestions.value = review.suggestions || []; remaining.value = Number(review.remaining || 0); for (const suggestion of suggestions.value) targetNames.value[suggestion.candidate_key] = suggestion.display_name } catch (cause) { error.value = cause.message } })
onBeforeUnmount(() => { cancelled = true })
</script>

<template>
  <main class="library-genres">
    <h1>{{ t('library', 'Genres') }} <LabelHelp :text="t('library', 'Genres are private catalogue labels. Scans suggest names; you decide which ones become genres.')" /></h1>
    <p v-if="error" role="alert">{{ error }}</p><p v-if="feedback" role="status">{{ feedback }}</p>
    <section class="library-genres-card">
      <h2>{{ t('library', 'My genres') }}</h2>
      <form @submit.prevent="create"><label>{{ t('library', 'Create a genre') }}<input v-model="name" maxlength="255" autocomplete="off"></label><button type="submit" class="button primary" :disabled="busy || !name.trim()">{{ t('library', 'Create genre') }}</button></form>
      <DirectoryBrowser ref="directory" kind="genre" collection="genres" :request="request" :catalogue-url="catalogueUrl" :search-label="t('library', 'Find a genre')" :search-help="t('library', 'Type at least 3 letters to search genres.')" :empty-label="t('library', 'No matching genres.')" @loaded="genres = $event.genres" />
    </section>
    <section class="library-genres-card">
      <h2>{{ t('library', 'Suggestions to review') }} <LabelHelp :text="t('library', 'Suggestions come from source genre values and clear subject or folder hints. Accepting a name also applies it to matching books; ignored names stay ignored on rescans.')" /></h2>
      <p v-if="remaining">{{ n('library', '%n book still needs genre discovery.', '%n books still need genre discovery.', remaining) }}</p>
      <button type="button" class="button secondary" :disabled="busy || (!discovering && !remaining)" @click="discover">{{ discovering ? t('library', 'Pause discovery') : t('library', 'Discover genres in existing books') }}</button>
      <button type="button" class="button secondary" :disabled="busy || discovering" @click="applyApproved">{{ t('library', 'Apply approved suggestions') }}</button>
      <p v-if="!suggestions.length" class="library-muted">{{ t('library', 'No suggestions to review.') }}</p>
      <ul><li v-for="suggestion in suggestions" :key="suggestion.candidate_key">
        <strong>{{ suggestion.display_name }}</strong> <span class="library-muted">{{ suggestion.source_kind }} · {{ n('library', '%n book', '%n books', Number(suggestion.book_count)) }}</span>
        <label>{{ t('library', 'Use genre name') }}<input v-model="targetNames[suggestion.candidate_key]" list="library-genre-names" maxlength="255"></label>
        <button type="button" class="button primary" :disabled="busy || discovering || !targetNames[suggestion.candidate_key]?.trim()" @click="decide(suggestion)">{{ t('library', 'Accept / map') }}</button>
        <button type="button" class="button secondary" :disabled="busy || discovering" @click="decide(suggestion, true)">{{ t('library', 'Ignore') }}</button>
      </li></ul>
      <datalist id="library-genre-names"><option v-for="genre in genres" :key="genre.id" :value="genre.display_name"></option></datalist>
    </section>
  </main>
</template>

<style scoped>
.library-genres { margin: 24px auto; max-width: 1100px; padding: 0 20px 50px; }
.library-genres-card { background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: 12px; margin: 20px 0; padding: 20px; }
.library-genres form, .library-genres-card li { display: flex; flex-wrap: wrap; align-items: end; gap: 10px; }
.library-genres-card label { display: grid; gap: 5px; min-width: min(280px, 100%); }
.library-genres-card input { width: 100%; }
.library-genres-card ul { list-style: none; padding: 0; }
.library-genres-card li { border-top: 1px solid var(--color-border); padding: 12px 0; }
.library-genres-card li strong { min-width: 180px; }
</style>
