<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { generateUrl } from '@nextcloud/router'
import { t } from '@nextcloud/l10n'
const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true } })
const data = ref(null), review = ref(null), busy = ref(false), error = ref(''), notice = ref(''), page = ref(1), heading = ref(null)
async function request(path, body = null) {
  const response = await fetch(generateUrl('/apps/library/api/authors/conflicts') + path, {
    credentials: 'same-origin', cache: 'no-store', method: body === null ? 'GET' : 'POST',
    headers: { Accept: 'application/json', ...(body === null ? {} : { 'Content-Type': 'application/json', requesttoken: props.requestToken }) },
    ...(body === null ? {} : { body: JSON.stringify(body) }),
  })
  if (!response.ok) throw new Error(response.status === 409 ? t('library', 'This book or its author assignments changed. Reload and review again.') : t('library', 'Could not load or resolve the author change. Please retry.'))
  return response.json()
}
async function load(next = 1) {
  busy.value = true; error.value = ''; review.value = null
  try { data.value = await request(`?page=${next}`); page.value = next }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function inspect(book) {
  busy.value = true; error.value = ''; notice.value = ''; review.value = null
  try { review.value = await request(`/${book.id}`); await nextTick(); heading.value?.focus() }
  catch (e) { error.value = e.message } finally { busy.value = false }
}
async function resolve(choice) {
  busy.value = true; error.value = ''
  try {
    await request(`/${review.value.id}`, { choice, token: review.value.token })
    notice.value = t('library', 'Author change resolved. Book metadata and files are unchanged.')
    await load(page.value)
    if (!data.value.books.length && page.value > 1) await load(page.value - 1)
  } catch (e) { error.value = e.message; review.value = null } finally { busy.value = false }
}
onMounted(() => load())
</script>
<template>
  <section class="author-conflicts" :aria-busy="busy" aria-labelledby="author-conflicts-heading">
    <a :href="`${catalogueUrl}?authors=1`">{{ t('library', 'All authors') }}</a>
    <h1 id="author-conflicts-heading">{{ t('library', 'Review imported author changes') }}</h1>
    <p v-if="busy" role="status">{{ t('library', 'Loading') }}</p>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="error" role="alert">{{ error }} <button :disabled="busy" @click="load(page)">{{ t('library', 'Reload') }}</button></p>
    <section v-if="review" class="author-conflict-review" :aria-label="t('library', 'Review change')">
      <h2 ref="heading" tabindex="-1" dir="auto">{{ review.title }}</h2>
      <div class="author-conflict-comparison">
        <section>
          <h3>{{ t('library', 'Current assignments') }}</h3>
          <ol><li v-for="(author, index) in review.current" :key="index"><strong dir="auto">{{ author.name }}</strong><span dir="auto">{{ t('library', 'Original credit: {credit}', { credit: author.credit }) }}</span></li></ol>
          <p v-if="!review.current.length">{{ t('library', 'No authors recorded') }}</p>
        </section>
        <section>
          <h3>{{ t('library', 'Imported credits') }}</h3>
          <ol><li v-for="(name, index) in review.incoming" :key="index" dir="auto">{{ name }}</li></ol>
          <p v-if="!review.incoming.length">{{ t('library', 'No authors recorded') }}</p>
        </section>
      </div>
      <p>{{ t('library', 'Using imported authors replaces this book’s current assignments. Book metadata and files stay unchanged. This decision has no automatic undo.') }}</p>
      <div class="author-conflict-actions">
        <button :disabled="busy" @click="resolve('keep')">{{ t('library', 'Keep current assignments') }}</button>
        <button :disabled="busy" @click="resolve('import')">{{ t('library', 'Use imported authors') }}</button>
        <button :disabled="busy" @click="review = null">{{ t('library', 'Cancel') }}</button>
      </div>
    </section>
    <template v-else-if="data">
      <p v-if="!data.books.length">{{ t('library', 'No author changes need review.') }}</p>
      <ul class="author-conflict-books"><li v-for="book in data.books" :key="book.id"><a :href="generateUrl('/apps/library/items/{id}', { id: book.id })" dir="auto">{{ book.title }}</a><button :disabled="busy" @click="inspect(book)">{{ t('library', 'Review change') }}</button></li></ul>
      <nav :aria-label="t('library', 'Author pages')"><button :disabled="busy || page === 1" @click="load(page - 1)">{{ t('library', 'Previous') }}</button><span>{{ t('library', 'Page {page}', { page }) }}</span><button :disabled="busy || !data.hasNext" @click="load(page + 1)">{{ t('library', 'Next') }}</button></nav>
    </template>
  </section>
</template>
<style scoped>
.author-conflicts { padding: 48px 24px 24px; max-width: 1100px; margin: auto; overflow-wrap: anywhere; }
h1 { margin-block: 16px; font-size: 24px; font-weight: 600; }
h2, h3 { margin-block: 12px; font-weight: 600; }
p { margin-block: 12px; }
.author-conflict-comparison { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.author-conflict-comparison section { background: var(--color-background-dark); border-radius: 8px; padding: 16px; }
.author-conflict-comparison ol { list-style: decimal; padding-inline-start: 24px; }
.author-conflict-comparison li { margin-block: 8px; }
.author-conflict-comparison li span { display: block; color: var(--color-text-maxcontrast); }
.author-conflict-actions, nav { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-block: 20px; }
.author-conflict-books li { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-block: 12px; border-bottom: 1px solid var(--color-border); }
.author-conflict-books li a { min-width: 0; }
.author-conflict-books button { flex-shrink: 0; }
@media (max-width: 600px) { .author-conflicts { padding-inline: 12px; } .author-conflict-comparison { grid-template-columns: 1fr; } }
</style>
