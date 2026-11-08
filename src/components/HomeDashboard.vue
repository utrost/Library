<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { curationRequest } from '../curation-api.js'
import { bookDetailsUrl } from '../details-return.js'
const props = defineProps({ requestToken: String, settingsUrl: String })
const data = ref(null), busy = ref(false), error = ref(''), widgets = ref([]), listId = ref(0), configure = ref(false)
let controller, generation = 0
onBeforeUnmount(() => { generation++; controller?.abort() })
const labels = { recent: t('library', 'Recently added'), upNext: t('library', 'Up next'), changed: t('library', 'Recently edited'), finished: t('library', 'Finished books'), rediscover: t('library', 'Rediscover'), health: t('library', 'Library health') }
async function load(save = false) {
  if (busy.value) return
  busy.value = true; error.value = ''; controller = new AbortController(); const token = ++generation
  try { const result = await curationRequest('/dashboard', props.requestToken, save ? { action: 'save', widgets: widgets.value, listId: Number(listId.value) } : {}, controller.signal); if (token !== generation) return; data.value = result; widgets.value = [...result.preferences.widgets]; listId.value = result.preferences.listId; if (save) configure.value = false }
  catch (e) { if (token === generation && e.name !== 'AbortError') error.value = e.message }
  finally { if (token === generation) busy.value = false }
}
const url = id => bookDetailsUrl(generateUrl('/apps/library/'), id)
onMounted(() => load())
</script>
<template>
  <section class="personal-home">
    <button type="button" :disabled="busy" :aria-expanded="configure" @click="configure = !configure">{{ t('library', 'Customise Home') }}</button>
    <form v-if="configure && data" @submit.prevent="load(true)"><fieldset><legend>{{ t('library', 'Show on Home') }}</legend><label v-for="(label, key) in labels" :key="key"><input v-model="widgets" type="checkbox" :value="key">{{ label }}</label></fieldset><label>{{ t('library', 'Up next from') }}<select :aria-label="t('library', 'Up next from')" v-model="listId"><option :value="0">{{ t('library', 'To-read books') }}</option><option v-for="list in data.lists" :key="list.id" :value="list.id">{{ list.name }}</option></select></label><button type="submit" :disabled="busy">{{ t('library', 'Save') }}</button></form>
    <p v-if="busy" role="status">{{ t('library', 'Loading…') }}</p><p v-if="error" role="alert">{{ error }} <button type="button" :disabled="busy" @click="load()">{{ t('library', 'Retry') }}</button></p>
    <template v-if="data">
      <section v-for="(books, key) in data.rows" :key="key"><h3>{{ labels[key] }}</h3><div class="cards"><article v-for="book in books" :key="book.id"><a :href="url(book.id)"><img :src="book.cover" alt="" loading="lazy" @error="$event.target.hidden = true"><span>{{ book.title }}</span></a><p>{{ book.creators }}</p></article></div><p v-if="!books.length">{{ t('library', 'No books in this section yet.') }}</p></section>
      <section v-if="data.health"><h3>{{ labels.health }}</h3><p v-if="data.summary?.counts">{{ t('library', 'Snapshot from') }} {{ new Date(data.summary.at * 1000).toLocaleString() }} · {{ t('library', 'Missing details') }}: {{ data.summary.counts.unidentified }} · {{ t('library', 'Missing files') }}: {{ data.summary.counts.missing }} · {{ t('library', 'Suggested updates') }}: {{ data.summary.counts.suggestions }}</p><p v-if="data.summary?.pending" role="status">{{ t('library', 'Health counts are queued for background refresh.') }} <button type="button" :disabled="busy" @click="load()">{{ t('library', 'Refresh') }}</button></p><template v-if="data.health.cacheStatus === 'cached'"><p>{{ t('library', 'Snapshot from') }} {{ new Date(data.health.generatedAt * 1000).toLocaleString() }}</p><p>{{ t('library', 'Indexed files') }}: {{ data.health.totalFiles }} · {{ t('library', 'Metadata errors') }}: {{ data.health.metadataErrorReview?.total || 0 }}</p></template><p v-else>{{ t('library', 'No health snapshot yet. Open Settings to refresh the overview.') }}</p><nav class="health-links" :aria-label="t('library', 'Library health')"><a :href="generateUrl('/apps/library/') + '?needsMetadata=1'">{{ t('library', 'Missing details') }}</a><a :href="generateUrl('/apps/library/') + '?status=missing'">{{ t('library', 'Missing files') }}</a><a :href="generateUrl('/apps/library/') + '?scannerConflicts=1'">{{ t('library', 'Suggested updates') }}</a><a :href="generateUrl('/apps/library/') + '?duplicates=1'">{{ t('library', 'Possible duplicates') }}</a><a :href="settingsUrl">{{ t('library', 'Open diagnostics') }}</a></nav></section>
      <p v-if="data.jobs.length"><a :href="generateUrl('/apps/library/') + '?curation=1'">{{ t('library', 'Review unfinished organisation jobs') }} ({{ data.jobs.length }})</a></p>
    </template>
  </section>
</template>
<style scoped>
.health-links { display:flex; flex-wrap:wrap; gap:.75rem; } .personal-home section { margin-block: 1.5rem; } h3 { margin-block: .75rem; } .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 1rem; } article { min-width: 0; overflow-wrap: anywhere; } article a { display:flex; flex-direction:column; gap:.5rem; } article img { height: 150px; max-width: 100%; object-fit: contain; align-self: start; } article p { color: var(--color-text-maxcontrast); font-size: .9em; } a { color:var(--color-primary-element); text-decoration:underline; } form { padding: 1rem; border:1px solid var(--color-border); border-radius:8px; } label { display:inline-flex; align-items:center; gap:.5rem; margin:.5rem; } select { max-width:100%; }
</style>
