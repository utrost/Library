<script setup>
import { onMounted, reactive, ref } from 'vue'
import { generateUrl } from '@nextcloud/router'
import { t, n } from '@nextcloud/l10n'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true } })
const data = ref(null), busy = ref(false), error = ref(''), notice = ref(''), editing = ref(false)
const search = ref(''), unused = ref(false), page = ref(1)
const id = ref(Number(new URLSearchParams(location.search).get('authorId')) || null)
const draft = reactive({ display_name: '', sort_name: '', given_name: '', family_name: '' })
async function request(path, body = null) {
  const response = await fetch(generateUrl('/apps/library/api/authors') + path, {
    credentials: 'same-origin', cache: 'no-store', method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 503 ? t('library', 'Author migration must finish before editing. Refresh to check progress.') : response.status === 409
    ? t('library', 'This author changed in another tab. Reload before saving again. Your draft is preserved.')
    : t('library', 'Could not load or save the author. Check the fields and reload before retrying.'))
  return response.json()
}
async function load(next = 1) {
  busy.value = true; error.value = ''
  try {
    data.value = await request(id.value ? `/${id.value}?page=${next}` : `?page=${next}&search=${encodeURIComponent(search.value.trim())}&unused=${unused.value ? 1 : 0}`)
    page.value = next
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function edit() { for (const key of Object.keys(draft)) draft[key] = data.value.author[key] || ''; editing.value = true; notice.value = '' }
async function save() {
  busy.value = true; error.value = ''
  try { data.value = await request(`/${id.value}`, { ...draft, revision: Number(data.value.author.revision) }); editing.value = false; page.value = 1; notice.value = t('library', 'Author saved. Original book credits are preserved.') }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
onMounted(() => load())
</script>
<template>
  <section class="library-authors" :aria-busy="busy" aria-labelledby="authors-heading">
    <a v-if="id" :href="`${catalogueUrl}?authors=1`">{{ t('library', 'All authors') }}</a>
    <h1 id="authors-heading">{{ data?.author?.display_name || t('library', 'Authors') }}</h1>
    <p v-if="error" role="alert">{{ error }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Reload') }}</button></p>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="busy" role="status">{{ t('library', 'Loading') }}</p>
    <template v-if="!id">
      <form class="author-search" @submit.prevent="load(1)">
        <label for="author-search">{{ t('library', 'Search authors') }} <LabelHelp :text="t('library', 'Matches the beginning of the preferred name or sort name.')" /></label>
        <input id="author-search" v-model="search" maxlength="255" type="search" />
        <label><input v-model="unused" type="checkbox" /> {{ t('library', 'Unused authors') }}</label>
        <button :disabled="busy" type="submit">{{ t('library', 'Search') }}</button>
      </form>
      <p v-if="data?.migration && (data.migration.pending || data.migration.failed || data.migration.conflict)" role="status">
        {{ t('library', 'Author migration: {pending} pending, {failed} failed, {conflict} need review.', data.migration) }}
        <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button>
      </p>
      <ul v-if="data" class="author-directory">
        <li v-for="author in data.authors" :key="author.id">
          <a :href="`${catalogueUrl}?authors=1&authorId=${author.id}`" dir="auto">{{ author.display_name }}</a>
          <span dir="auto">{{ author.sort_name }}</span>
          <span>{{ n('library', '%n book', '%n books', Number(author.book_count)) }}</span>
        </li>
      </ul>
      <p v-if="data && !data.authors.length">{{ t('library', 'No authors found.') }}</p>
    </template>
    <template v-else-if="data?.author">
      <p>{{ n('library', '%n book', '%n books', data.bookCount) }}</p>
      <p v-if="!data.canEdit" role="status">{{ t('library', 'Author migration must finish before editing. Refresh to check progress.') }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button></p>
      <button v-if="!editing" :disabled="busy || !data.canEdit" @click="edit">{{ t('library', 'Edit author') }}</button>
      <form v-else class="author-editor" @submit.prevent="save">
        <p>{{ t('library', 'This edits the shared author record. Book credits and files stay unchanged.') }}</p>
        <label for="author-display">{{ t('library', 'Preferred name') }}</label>
        <input id="author-display" v-model="draft.display_name" maxlength="255" required :disabled="busy" />
        <label for="author-sort">{{ t('library', 'Sort name') }} <LabelHelp :text="t('library', 'For example: Doe, John. Controls author directory ordering.')" /></label>
        <input id="author-sort" v-model="draft.sort_name" maxlength="255" required :disabled="busy" />
        <label for="author-given">{{ t('library', 'Given name') }} <LabelHelp :text="t('library', 'Optional. Leave empty for organisations or names you cannot safely split.')" /></label>
        <input id="author-given" v-model="draft.given_name" maxlength="255" :disabled="busy" />
        <label for="author-family">{{ t('library', 'Family name') }}</label>
        <input id="author-family" v-model="draft.family_name" maxlength="255" :disabled="busy" />
        <div><button class="primary" :disabled="busy" type="submit">{{ t('library', 'Save author') }}</button> <button :disabled="busy" type="button" @click="editing = false">{{ t('library', 'Cancel') }}</button></div>
      </form>
      <ul class="author-books">
        <li v-for="book in data.books" :key="book.id">
          <a :href="generateUrl('/apps/library/items/{id}', { id: book.id })" dir="auto">{{ book.title }}</a>
          <span dir="auto">{{ t('library', 'Original credit: {credit}', { credit: book.creators || '—' }) }}</span>
        </li>
      </ul>
    </template>
    <nav v-if="data" class="author-pagination" :aria-label="t('library', 'Author pages')">
      <button :disabled="busy || editing || page === 1" @click="load(page - 1)">{{ t('library', 'Previous') }}</button>
      <span>{{ t('library', 'Page {page}', { page }) }}</span>
      <button :disabled="busy || editing || !data.hasNext" @click="load(page + 1)">{{ t('library', 'Next') }}</button>
    </nav>
  </section>
</template>
<style scoped>
.library-authors { padding: 48px 24px 24px; max-width: 1100px; margin: auto; overflow-wrap: anywhere; }
.library-authors h1 { margin-block: 16px; font-size: 24px; font-weight: 600; line-height: 1.35; }
.author-search, .author-editor { display: flex; flex-direction: column; gap: 8px; margin-block: 20px; }
.author-search input, .author-editor input { width: 100%; max-width: 100%; box-sizing: border-box; }
.author-search button { align-self: flex-start; }
.author-directory, .author-books { list-style: none; padding: 0; }
.author-directory li, .author-books li { display: flex; flex-direction: column; gap: 4px; border-bottom: 1px solid var(--color-border); padding: 14px 0; }
.author-directory a, .author-books a { font-weight: bold; text-decoration: underline; }
.author-directory span, .author-books span { color: var(--color-text-maxcontrast); }
.author-pagination { display: flex; align-items: center; gap: 12px; margin-block: 20px; }
@media (max-width: 600px) { .library-authors { padding: 48px 12px 12px; } }
</style>
