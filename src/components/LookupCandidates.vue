<script setup>
import GoogleBooksAttribution from './GoogleBooksAttribution.vue'
import { nextTick, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'

const props = defineProps({
  results: { type: Array, default: () => [] },
  editionPage: { type: Object, default: null },
  disabled: { type: Boolean, default: false },
  compareLabel: { type: String, default: '' },
})
const emit = defineEmits(['choose', 'editions'])
const pageHeading = ref(null)
const candidateRoot = ref(null)
let requestedFocus = ''
watch(() => props.editionPage ? `${props.editionPage.workId}:${props.editionPage.offset}` : '', async page => {
  const browsingHere = candidateRoot.value?.contains(document.activeElement)
  // Disabling the activated button can move keyboard focus to body while the request runs.
  const restoreRequestFocus = page && requestedFocus === page && document.activeElement === document.body
  if (page) requestedFocus = ''
  if (page && (browsingHere || restoreRequestFocus)) { await nextTick(); pageHeading.value?.focus({ preventScroll: true }) }
})
function evidence(candidate) {
  return [candidate.authors?.join(', '), candidate.publisher, candidate.year, candidate.format,
    candidate.languages?.join(', ')].filter(Boolean).join(' · ')
}
function reason(candidate) {
  if (candidate.match === 'isbn_mismatch') return t('library', 'The searched ISBN is not listed for this result. Do not treat it as an exact match.')
  if (candidate.match === 'isbn') return t('library', 'This provider edition contains the searched ISBN. Check its language, format and publication date before choosing.')
  if (candidate.match === 'work_edition') return t('library', 'Another edition of this work. It may be a translation or a different format; it is not a verified match for your book.')
  return t('library', 'Title/author search result. Similar titles can refer to different books; compare the edition details before choosing.')
}
function browse(workId, offset = 0) { requestedFocus = candidateRoot.value?.contains(document.activeElement) ? `${workId}:${offset}` : ''; emit('editions', { workId, offset }) }
</script>

<template>
  <div ref="candidateRoot" class="library-lookup-candidates"><GoogleBooksAttribution v-if="results.some(row => row.provider === 'Google Books' || row.provider === 'googlebooks')" />
    <ul class="library-metadata-lookup-results" :aria-label="t('library', 'Matching editions')">
      <li v-for="(candidate, index) in results" :key="candidate.editionId">
        <strong>{{ candidate.title }}</strong>
        <span class="library-muted">{{ evidence(candidate) }}</span>
        <span>{{ t('library', 'ISBN') }}: {{ candidate.isbn?.join(', ') || '—' }}</span>
        <small>{{ reason(candidate) }}</small>
        <div class="library-lookup-candidate-actions">
          <a :href="candidate.url" target="_blank" rel="noopener noreferrer">{{ t('library', 'Provider source') }}</a>
          <button type="button" class="button secondary" :disabled="disabled" :aria-label="`${compareLabel || t('library', 'Review this edition')} ${candidate.editionId}: ${candidate.title}`" @click="emit('choose', candidate)">{{ compareLabel || t('library', 'Review this edition') }}</button>
          <button v-if="candidate.workId && !results.slice(0, index).some(row => row.workId === candidate.workId)" type="button" class="button secondary" :disabled="disabled" :aria-label="`${t('library', 'Other editions')}: ${candidate.title}`" @click="browse(candidate.workId)">{{ t('library', 'Other editions') }}</button>
        </div>
      </li>
    </ul>
    <section v-if="editionPage" class="library-lookup-edition-page" :aria-label="t('library', 'Other editions')">
      <h4 ref="pageHeading" tabindex="-1">{{ t('library', 'Other editions') }} · {{ editionPage.workId }}</h4>
      <p>{{ t('library', 'Provider order, eight entries per page. Missing details are not inferred from the original work.') }}</p>
      <p v-if="!editionPage.results.length" role="status">{{ t('library', 'No usable editions on this page. Try another page or refine your search.') }}</p>
      <ul>
        <li v-for="candidate in editionPage.results" :key="candidate.editionId">
          <strong>{{ candidate.title }}</strong>
          <span class="library-muted">{{ evidence(candidate) }}</span>
          <span>{{ t('library', 'ISBN') }}: {{ candidate.isbn?.join(', ') || '—' }}</span>
          <small>{{ reason(candidate) }}</small>
          <div class="library-lookup-candidate-actions">
            <a :href="candidate.url" target="_blank" rel="noopener noreferrer">{{ t('library', 'Provider source') }}</a>
            <button type="button" class="button secondary" :disabled="disabled" :aria-label="`${compareLabel || t('library', 'Review this edition')} ${candidate.editionId}: ${candidate.title}`" @click="emit('choose', candidate)">{{ compareLabel || t('library', 'Review this edition') }}</button>
          </div>
        </li>
      </ul>
      <nav class="library-lookup-candidate-actions" :aria-label="t('library', 'Edition pages')">
        <button type="button" :disabled="disabled || editionPage.previousOffset === null" @click="browse(editionPage.workId, editionPage.previousOffset)">{{ t('library', 'Previous editions') }}</button>
        <span>{{ t('library', 'Page {page}', { page: editionPage.offset / 8 + 1 }) }}</span>
        <button type="button" :disabled="disabled || editionPage.nextOffset === null" @click="browse(editionPage.workId, editionPage.nextOffset)">{{ t('library', 'Next editions') }}</button>
      </nav>
      <p v-if="editionPage.limited" role="status">{{ t('library', 'Edition browsing is limited to 200 entries. Search by ISBN to find a specific edition beyond this limit.') }}</p>
    </section>
  </div>
</template>

<style scoped>
.library-lookup-candidates, .library-lookup-candidates ul, .library-lookup-candidates li, .library-lookup-edition-page { display: grid; gap: .5rem; min-width: 0; }
.library-lookup-candidates ul { list-style: none; margin: 0; padding: 0; }
.library-lookup-candidates li { padding: .75rem 0; border-bottom: 1px solid var(--color-border); overflow-wrap: anywhere; }
.library-lookup-candidates p, .library-lookup-candidates h4 { margin: 0; }
.library-lookup-candidate-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; }
.library-lookup-candidate-actions button { white-space: normal; max-width: 100%; }
.library-lookup-edition-page { margin-top: .5rem; }
.library-lookup-edition-page h4:focus-visible { outline: 2px solid var(--color-primary-element); outline-offset: 2px; }
</style>
