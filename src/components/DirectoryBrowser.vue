<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import { t, n } from '@nextcloud/l10n'
import { bookDetailsUrl, bookCoverUrl as coverUrl } from '../details-return.js'
import CatalogueCover from './CatalogueCover.vue'
import LabelHelp from './LabelHelp.vue'
const props = defineProps({ kind: { type: String, required: true }, collection: { type: String, required: true }, request: { type: Function, required: true }, catalogueUrl: { type: String, required: true }, searchLabel: { type: String, required: true }, searchHelp: { type: String, required: true }, emptyLabel: { type: String, required: true }, surname: Boolean, unusedFilter: Boolean })
const emit = defineEmits(['loaded', 'busy'])
const query = new URLSearchParams(location.search)
const search = ref((query.get(`${props.kind}Search`) || '').slice(0, 255)), unused = ref(query.get(`${props.kind}Unused`) === '1')
const sorts = props.surname ? ['name', 'name_desc', 'surname'] : ['name', 'name_desc']
const sort = ref(sorts.includes(query.get(`${props.kind}Sort`)) ? query.get(`${props.kind}Sort`) : 'name')
const page = ref(Math.max(1, Math.min(100000, Number(query.get(`${props.kind}Page`)) || 1)))
const data = ref(null), busy = ref(false), error = ref('')
const ready = computed(() => !search.value.trim() || (search.value.match(/\p{L}/gu) || []).length >= 3)
let timer, controller, sequence = 0
function stop() { clearTimeout(timer); controller?.abort(); sequence++ }
function remember() {
  const source = new URL(location.href)
  for (const [suffix, value, fallback] of [['Search', ready.value ? search.value.trim() : '', ''], ['Sort', sort.value, 'name'], ['Unused', unused.value ? '1' : '0', '0'], ['Page', String(page.value), '1']]) {
    if (value !== fallback) source.searchParams.set(props.kind + suffix, value)
    else source.searchParams.delete(props.kind + suffix)
  }
  window.history.replaceState(window.history.state, '', source)
}
async function reload(next = page.value) {
  stop(); const generation = sequence
  controller = new AbortController(); busy.value = true; emit('busy', true); error.value = ''
  try {
    const result = await props.request(`?page=${next}&search=${encodeURIComponent(ready.value ? search.value.trim() : '')}&unused=${unused.value ? 1 : 0}&sort=${sort.value}&previews=1`, null, controller.signal)
    if (generation !== sequence) return
    data.value = result; page.value = next; remember(); emit('loaded', result)
  } catch (cause) { if (generation === sequence && cause.name !== 'AbortError') error.value = cause.message }
  finally { if (generation === sequence) { busy.value = false; emit('busy', false) } }
}
watch(search, () => { stop(); busy.value = false; emit('busy', false); if (ready.value) timer = setTimeout(() => reload(1), 250) })
watch([sort, unused], () => reload(1))
function entryUrl(entry) {
  if (props.kind === 'genre') return `${props.catalogueUrl}?genreId=${entry.id}`
  const source = new URL(location.href); source.searchParams.set(`${props.kind}Id`, entry.id)
  return source.pathname + source.search
}
const bookUrl = book => bookDetailsUrl(props.catalogueUrl, book.id)
async function turn(next) { await reload(next); await nextTick(); document.getElementById(`${props.kind}-search`)?.focus() }
onMounted(() => reload())
onBeforeUnmount(stop)
defineExpose({ reload })
</script>
<template>
  <section class="directory-browser" :aria-busy="busy">
    <form class="directory-toolbar" @submit.prevent="ready && reload(1)">
      <div class="directory-search-field">
        <label :for="`${kind}-search`">{{ searchLabel }} <LabelHelp :text="searchHelp" /></label>
        <input :id="`${kind}-search`" v-model="search" maxlength="255" type="search" :placeholder="t('library', 'Type at least 3 letters.')" />
      </div>
      <div class="directory-sort-field">
        <label :for="`${kind}-directory-sort`">{{ t('library', 'Sort') }}</label>
        <select :id="`${kind}-directory-sort`" v-model="sort">
          <option value="name">{{ t('library', 'Name A–Z') }}</option>
          <option value="name_desc">{{ t('library', 'Name Z–A') }}</option>
          <option v-if="surname" value="surname">{{ t('library', 'Surname / sort name A–Z') }}</option>
        </select>
      </div>
      <label v-if="unusedFilter" class="author-search-unused"><input v-model="unused" type="checkbox" /> {{ t('library', 'Unused authors') }}</label>
    </form>
    <p v-if="busy" role="status">{{ t('library', 'Loading') }}</p>
    <p v-if="error" role="alert">{{ error }} <button @click="reload()">{{ t('library', 'Reload') }}</button></p>
    <ul v-if="data" class="directory-rows" :class="`${kind}-directory`">
      <li v-for="entry in data[collection]" :key="entry.id" class="directory-row" :class="`${kind}-directory-row`">
        <div class="directory-identity">
          <a class="directory-name" :class="`${kind}-directory-name`" :href="entryUrl(entry)" dir="auto">{{ entry.display_name }}</a>
          <a class="directory-count" :class="`${kind}-directory-count`" :href="entryUrl(entry) + (kind === 'genre' ? '' : `#${kind}-books`)">{{ n('library', '%n book', '%n books', Number(entry.book_count)) }}</a>
          <slot name="actions" :entry="entry" :unused="unused" />
        </div>
        <div v-if="entry.books?.length" class="directory-previews">
          <a v-for="book in entry.books" :key="book.id" class="directory-book" :class="`${kind}-directory-book`" :href="bookUrl(book)" :title="book.title">
            <span class="directory-cover"><CatalogueCover :src="coverUrl(book)" /></span>
            <span class="directory-title" dir="auto">{{ book.title }}</span>
          </a>
        </div>
      </li>
    </ul>
    <p v-if="data && !data[collection].length">{{ emptyLabel }}</p>
    <nav v-if="data" class="directory-pagination" :aria-label="t('library', 'Pagination')">
      <button :disabled="busy || page === 1" @click="turn(page - 1)">{{ t('library', 'Previous') }}</button>
      <span>{{ t('library', 'Page {page}', { page }) }}</span>
      <button :disabled="busy || !data.hasNext" @click="turn(page + 1)">{{ t('library', 'Next') }}</button>
    </nav>
  </section>
</template>
<style scoped>
.directory-toolbar { display: flex; align-items: end; flex-wrap: wrap; gap: 12px 20px; margin-block: 20px; }
.directory-search-field { flex: 1 1 260px; min-width: 0; }
.directory-sort-field { flex: 0 1 240px; min-width: 0; }
.directory-search-field,.directory-sort-field { display: grid; gap: 6px; }
.directory-toolbar input:not([type=checkbox]),.directory-toolbar select { width: 100%; min-width: 0; box-sizing: border-box; }
.author-search-unused { display: inline-flex; gap: 8px; align-self: center; align-items: center; min-height: 44px; }
.author-search-unused input { width: 18px; height: 18px; min-height: 18px; flex: none; }
.directory-rows { list-style: none; padding: 0; }
.directory-row { display: grid; grid-template-columns: minmax(160px, 1fr) minmax(0, 2fr); gap: 20px; align-items: center; border-bottom: 1px solid var(--color-border); padding-block: 16px; }
.directory-identity { overflow-wrap: anywhere; display: grid; gap: 4px; justify-items: start; min-width: 0; }
.directory-name { font-size: 17px; font-weight: bold; }
.directory-previews { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; min-width: 0; }
.directory-book { display: flex; gap: 10px; align-items: center; min-width: 0; }
.directory-cover { flex: 0 0 48px; width: 48px; height: 72px; overflow: hidden; border-radius: 4px; }
.directory-title { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; font-size: 13px; line-height: 1.4; }
a { text-decoration: underline; }
a:focus-visible { outline: 2px solid var(--color-primary-element); outline-offset: 3px; border-radius: 3px; }
.directory-pagination { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-block: 20px; }
@media (max-width: 700px) {
  .directory-row { grid-template-columns: minmax(0, 1fr); gap: 12px; }
  .directory-book { flex-direction: column; align-items: start; gap: 6px; }
  .directory-cover { flex-basis: auto; }
  .directory-sort-field { flex-grow: 1; }
  .directory-previews { gap: 12px; }
}
</style>
