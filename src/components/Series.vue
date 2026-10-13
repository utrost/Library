<script setup>
import { onMounted, reactive, ref } from 'vue'
import { generateUrl } from '@nextcloud/router'
import { t, n } from '@nextcloud/l10n'
import CatalogueCover from './CatalogueCover.vue'
import LabelHelp from './LabelHelp.vue'

const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true } })
const selectedId = Number(new URLSearchParams(location.search).get('seriesId')) || null
const data = ref(null), page = ref(1), search = ref(''), busy = ref(false), error = ref(''), notice = ref(''), editing = ref(false)
const draft = reactive({ name: '', description: '' })
async function request(path, body = null) {
  const response = await fetch(generateUrl('/apps/library/api/series') + path, {
    credentials: 'same-origin', cache: 'no-store', method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 409 ? t('library', 'This series changed. Reload and review your edit.') : t('library', 'Could not load or save the series.'))
  return response.json()
}
async function load(next = 1) {
  busy.value = true; error.value = ''
  try {
    data.value = await request(selectedId ? `/${selectedId}?page=${next}` : `?page=${next}&search=${encodeURIComponent(search.value.trim())}`)
    page.value = next
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function edit() { draft.name = data.value.series.display_name; draft.description = data.value.series.description || ''; editing.value = true; notice.value = '' }
async function save() {
  busy.value = true; error.value = ''
  try {
    data.value = await request(`/${selectedId}`, { name: draft.name, description: draft.description, revision: Number(data.value.series.revision) })
    editing.value = false; notice.value = t('library', 'Series saved. Original book metadata is preserved.')
  } catch (e) { error.value = e.message } finally { busy.value = false }
}
function coverUrl(book) { return generateUrl('/apps/library/items/{id}/cover', { id: book.id }) + '?v=' + encodeURIComponent(`${book.cover_revision || ''}-${book.etag || ''}`) }
onMounted(() => load())
</script>
<template>
  <section class="library-series" :aria-busy="busy" aria-labelledby="library-series-heading">
    <a v-if="selectedId" :href="`${catalogueUrl}?series=1`">{{ t('library', 'All series') }}</a>
    <h1 id="library-series-heading">{{ data?.series?.display_name || t('library', 'Series') }}</h1>
    <p v-if="error" role="alert">{{ error }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Reload') }}</button></p>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="busy" role="status">{{ t('library', 'Loading') }}</p>
    <template v-if="!selectedId">
      <form class="series-search" @submit.prevent="load(1)">
        <label for="series-search">{{ t('library', 'Search series') }} <LabelHelp :text="t('library', 'Matches the beginning of a preferred series name.')" /></label>
        <input id="series-search" v-model="search" type="search" maxlength="255" />
        <button :disabled="busy" type="submit">{{ t('library', 'Search') }}</button>
      </form>
      <p v-if="data?.migration && (data.migration.pending || data.migration.failed)" role="status">
        {{ t('library', 'Series migration: {pending} pending, {failed} failed.', data.migration) }}
        <button :disabled="busy" @click="load(page)">{{ t('library', 'Refresh') }}</button>
      </p>
      <ul v-if="data" class="series-directory">
        <li v-for="series in data.series" :key="series.id">
          <a :href="`${catalogueUrl}?series=1&seriesId=${series.id}`" dir="auto">{{ series.display_name }}</a>
          <span>{{ n('library', '%n book', '%n books', Number(series.book_count)) }}</span>
        </li>
      </ul>
      <p v-if="data && !data.series.length">{{ t('library', 'No series found yet.') }}</p>
    </template>
    <template v-else-if="data?.series">
      <p>{{ n('library', '%n book', '%n books', Number(data.bookCount)) }}</p>
      <p v-if="data.series.description && !editing" class="series-description" dir="auto">{{ data.series.description }}</p>
      <p v-if="data.bookCount"><a :href="`${catalogueUrl}?seriesId=${selectedId}`">{{ t('library', 'Browse this series in the catalogue') }}</a></p>
      <button v-if="!editing" :disabled="busy" @click="edit">{{ t('library', 'Edit series') }}</button>
      <form v-if="editing" class="series-editor" @submit.prevent="save">
        <label for="series-name">{{ t('library', 'Preferred name') }} <LabelHelp :text="t('library', 'Renaming this shared series changes its display name; the original text in each book stays unchanged.')" /></label>
        <input id="series-name" v-model="draft.name" maxlength="255" required :disabled="busy" />
        <label for="series-description">{{ t('library', 'Description') }}</label>
        <textarea id="series-description" v-model="draft.description" maxlength="10000" rows="4" :disabled="busy"></textarea>
        <div><button type="submit" class="primary" :disabled="busy">{{ t('library', 'Save series') }}</button> <button type="button" :disabled="busy" @click="editing = false">{{ t('library', 'Cancel') }}</button></div>
      </form>
      <ol class="series-books">
        <li v-for="book in data.books" :key="book.id">
          <CatalogueCover :src="coverUrl(book)" />
          <div><span v-if="book.part_number">{{ t('library', 'Part {number}', { number: book.part_number }) }}</span>
            <a :href="generateUrl('/apps/library/items/{id}', { id: book.id })" dir="auto">{{ book.title }}</a>
            <small dir="auto">{{ book.creators || '—' }}</small>
            <small v-if="book.scan_status === 'missing'">{{ t('library', 'File missing') }}</small>
          </div>
        </li>
      </ol>
    </template>
    <nav v-if="data" class="series-pagination" :aria-label="t('library', 'Series pages')">
      <button :disabled="busy || page === 1" @click="load(page - 1)">{{ t('library', 'Previous') }}</button>
      <span>{{ t('library', 'Page {page}', { page }) }}</span>
      <button :disabled="busy || !data.hasNext" @click="load(page + 1)">{{ t('library', 'Next') }}</button>
    </nav>
  </section>
</template>
<style scoped>
.library-series { padding: 48px 24px 24px; max-width: 1100px; margin: auto; overflow-wrap: anywhere; }
.library-series h1 { font-size: 24px; line-height: 1.35; }
.series-search,.series-editor { display: flex; flex-direction: column; gap: 8px; margin-block: 20px; }
.series-search input,.series-editor input,.series-editor textarea { width: 100%; box-sizing: border-box; }
.series-search button { align-self: flex-start; }
.series-directory,.series-books { list-style: none; padding: 0; }
.series-directory li { display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--color-border); padding: 14px 0; }
.series-directory a,.series-books a { font-weight: bold; text-decoration: underline; }
.series-books li { display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--color-border); padding: 12px 0; }
.series-books li :deep(img) { width: 48px; max-height: 68px; object-fit: contain; }
.series-books li div { display: flex; flex-direction: column; gap: 3px; }
.series-description { white-space: pre-line; }
.series-pagination { display: flex; align-items: center; gap: 12px; margin-block: 20px; }
</style>
