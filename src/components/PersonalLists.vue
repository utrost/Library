<script setup>
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { t } from '@nextcloud/l10n'
import { listRequest } from '../personal-lists-api.js'
import AddToList from './AddToList.vue'
import LabelHelp from './LabelHelp.vue'

const props = defineProps({ requestToken: { type: String, default: '' }, catalogueUrl: { type: String, required: true }, listsUrl: { type: String, required: true } })
const emit = defineEmits(['changed'])
const lists = ref([])
const detail = ref(null)
const busy = ref(false)
const error = ref('')
const notice = ref('')
const editing = ref(false)
const editor = reactive({ name: '', description: '' })
const draftEntry = ref(null)
const noteDraft = ref('')
const deleting = ref(false)
const removing = ref(null)
const dragged = ref(null)
const heading = ref(null)
const selectedListId = ref(Number(new URLSearchParams(window.location.search).get('listId')) || null)
const addItemId = Number(new URLSearchParams(window.location.search).get('addItem')) || null
const canChange = computed(() => !busy.value && draftEntry.value === null)

async function load(page = 1, preserveDraft = editing.value) {
  busy.value = true; error.value = ''
  try {
    if (selectedListId.value) detail.value = await listRequest(`/${selectedListId.value}?page=${page}`)
    else lists.value = (await listRequest()).lists
    if (!preserveDraft) { draftEntry.value = null; editing.value = false }
  } catch (e) { error.value = e.message } finally { busy.value = false }
}

function edit() {
  editor.name = detail.value?.list.name || ''
  editor.description = detail.value?.list.description || ''
  editing.value = true; deleting.value = false; error.value = ''
}

async function saveList() {
  busy.value = true; error.value = ''; notice.value = ''
  try {
    if (detail.value) {
      await listRequest(`/${detail.value.list.id}/actions`, props.requestToken, { action: 'update', revision: detail.value.list.revision, ...editor })
    } else {
      selectedListId.value = (await listRequest('', props.requestToken, editor)).list.id
      const url = new URL(window.location.href)
      url.searchParams.set('listId', selectedListId.value)
      window.history.replaceState({}, '', url)
    }
    editing.value = false
    await load(1, true)
    emit('changed')
    notice.value = t('library', 'List saved.')
    await nextTick(); heading.value?.focus()
  } catch (e) { error.value = e.message } finally { busy.value = false }
}

async function action(payload, success) {
  busy.value = true; error.value = ''; notice.value = ''
  try {
    const result = await listRequest(`/${detail.value.list.id}/actions`, props.requestToken, { ...payload, revision: detail.value.list.revision })
    if (payload.action === 'delete') {
      detail.value = null; selectedListId.value = null; deleting.value = false
      const url = new URL(window.location.href); url.searchParams.delete('listId'); window.history.replaceState({}, '', url)
    }
    draftEntry.value = null; removing.value = null
    if (payload.action === 'note') {
      const entry = detail.value.entries.find(entry => entry.id === payload.entryId)
      if (entry) entry.note = payload.note.trim()
      detail.value.list.revision = result.revision
    } else await load(detail.value?.page || 1)
    if (payload.action === 'delete') emit('changed')
    notice.value = success
    await nextTick()
    if (payload.action === 'move') document.getElementById(`library-list-entry-${payload.entryId}`)?.focus()
    else heading.value?.focus()
  } catch (e) { error.value = e.message } finally { busy.value = false }
}

function startNote(entry) { draftEntry.value = entry.id; noteDraft.value = entry.note; removing.value = null }
function move(entry, direction) { return action({ action: 'move', entryId: entry.id, direction }, t('library', 'Reading order saved.')) }
function startDrag(event, entry) {
  dragged.value = entry.id
  event.dataTransfer.setData('text/plain', String(entry.id))
}
function drop(beforeId) {
  if (dragged.value === null || !canChange.value) return
  const entryId = dragged.value; dragged.value = null
  return action({ action: 'move', entryId, beforeId }, t('library', 'Reading order saved.'))
}

onMounted(async () => {
  await load()
  if (!selectedListId.value && new URLSearchParams(window.location.search).get('new') === '1') edit()
})
</script>

<template>
  <section class="library-personal-lists" :aria-label="t('library', 'Personal lists')" :aria-busy="busy ? 'true' : 'false'">
    <header class="library-lists-heading">
      <div>
        <a v-if="selectedListId" :href="listsUrl">← {{ t('library', 'All lists') }}</a>
        <h1 ref="heading" tabindex="-1"><LabelHelp :text="t('library', 'Private reading lists, in your own order, with your own notes.')">{{ detail?.list.name || t('library', 'Lists') }}</LabelHelp></h1>
      </div>
      <button v-if="!detail && !selectedListId" type="button" class="button primary" :disabled="busy || editing" @click="edit">{{ t('library', 'New list') }}</button>
    </header>

    <p v-if="error" role="alert">{{ error }}</p>
    <button v-if="error" type="button" class="button secondary" :disabled="busy" @click="load(detail?.page || 1, true)">{{ t('library', 'Reload list') }}</button>
    <p v-if="notice" role="status">{{ notice }}</p>
    <p v-if="busy" role="status">{{ t('library', 'Loading or saving…') }}</p>

    <form v-if="editing" class="library-list-editor" @submit.prevent="saveList">
      <label>{{ t('library', 'List name') }}<input v-model="editor.name" required maxlength="120" :disabled="busy"></label>
      <label>{{ t('library', 'Description / list note') }}<textarea v-model="editor.description" rows="3" maxlength="10000" :disabled="busy"></textarea></label>
      <div class="library-list-actions">
        <button type="submit" class="button primary" :disabled="busy || !editor.name.trim()">{{ t('library', 'Save list') }}</button>
        <button type="button" class="button secondary" :disabled="busy" @click="editing = false">{{ t('library', 'Cancel') }}</button>
      </div>
    </form>

    <template v-if="detail">
      <p v-if="detail.list.description && !editing" class="library-list-description" dir="auto">{{ detail.list.description }}</p>
      <div class="library-list-actions" v-if="!editing">
        <a class="button primary" :href="`${catalogueUrl}?addToList=${detail.list.id}`">{{ t('library', 'Add books from catalogue') }}</a>
        <button type="button" class="button secondary" :disabled="!canChange" @click="edit">{{ t('library', 'Edit list') }}</button>
        <button type="button" class="button secondary" :disabled="!canChange" @click="deleting = !deleting">{{ t('library', 'Delete list') }}</button>
      </div>
      <div v-if="deleting" class="library-list-confirm" role="group" :aria-label="t('library', 'Confirm list deletion')">
        <p>{{ t('library', 'Delete this list and all its notes? Books stay in your library. This cannot be undone.') }}</p>
        <button class="button" type="button" :disabled="!canChange" @click="action({ action: 'delete' }, t('library', 'List deleted.'))">{{ t('library', 'Delete list and notes') }}</button>
        <button class="button secondary" type="button" :disabled="busy" @click="deleting = false">{{ t('library', 'Cancel') }}</button>
      </div>
      <p v-if="detail.total === 0 && !busy" class="library-lists-empty">{{ t('library', 'This list is empty. Select books in the catalogue and choose Add to list.') }}</p>
      <ol class="library-list-entries" :start="(detail.page - 1) * 25 + 1">
        <li v-for="entry in detail.entries" :id="`library-list-entry-${entry.id}`" :key="entry.id" class="library-list-entry" tabindex="-1" @dragover.prevent @drop.prevent="drop(entry.id)">
          <div class="library-list-entry-heading">
            <span class="library-list-drag" :draggable="canChange" :title="t('library', 'Drag to reorder, or use Move up and Move down')" aria-hidden="true" @dragstart="startDrag($event, entry)" @dragend="dragged = null">⠿</span>
            <img v-if="entry.book" :src="entry.book.coverUrl" alt="" width="48" height="64" loading="lazy">
            <div class="library-list-book">
              <h2 v-if="entry.book"><a :href="entry.book.detailsUrl" dir="auto">{{ entry.book.title }}</a></h2>
              <h2 v-else>{{ t('library', 'Unavailable book') }}</h2>
              <p v-if="entry.book?.creators" dir="auto">{{ entry.book.creators }}</p>
              <p v-if="!entry.book">{{ t('library', 'The file is missing or access is unavailable. Your note and place in the list are kept.') }}</p>
            </div>
            <a v-if="entry.book" class="button secondary" :href="entry.book.openUrl">{{ t('library', 'Open') }}</a>
          </div>
          <p v-if="entry.note && draftEntry !== entry.id" class="library-list-note" dir="auto">{{ entry.note }}</p>
          <form v-if="draftEntry === entry.id" class="library-list-editor" @submit.prevent="action({ action: 'note', entryId: entry.id, note: noteDraft }, t('library', 'Note saved.'))">
            <label>{{ t('library', 'Your note for this book in this list') }}<textarea v-model="noteDraft" maxlength="10000" rows="3" :disabled="busy"></textarea></label>
            <div class="library-list-actions"><button type="submit" class="button primary" :disabled="busy">{{ t('library', 'Save note') }}</button><button type="button" class="button secondary" :disabled="busy" @click="draftEntry = null">{{ t('library', 'Cancel') }}</button></div>
          </form>
          <div v-else class="library-list-actions">
            <button type="button" class="button secondary" :disabled="!canChange" @click="startNote(entry)">{{ entry.note ? t('library', 'Edit note') : t('library', 'Add note') }}</button>
            <button type="button" class="button secondary" :disabled="!canChange || entry.number === 1" @click="move(entry, 'up')">{{ t('library', 'Move up') }}</button>
            <button type="button" class="button secondary" :disabled="!canChange || entry.number === detail.total" @click="move(entry, 'down')">{{ t('library', 'Move down') }}</button>
            <button type="button" class="button secondary" :disabled="!canChange" @click="removing = entry.id">{{ t('library', 'Remove from list') }}</button>
          </div>
          <div v-if="removing === entry.id" class="library-list-confirm">
            <p>{{ t('library', 'Remove this entry and its note? The book stays in your library.') }}</p>
            <button type="button" class="button" :disabled="!canChange" @click="action({ action: 'remove', entryId: entry.id }, t('library', 'Book removed from list.'))">{{ t('library', 'Remove entry and note') }}</button>
            <button type="button" class="button secondary" :disabled="busy" @click="removing = null">{{ t('library', 'Cancel') }}</button>
          </div>
        </li>
      </ol>
      <nav v-if="detail.pages > 1" class="library-list-actions" :aria-label="t('library', 'List pages')">
        <button type="button" class="button secondary" :disabled="!canChange || detail.page === 1" @click="load(detail.page - 1)">{{ t('library', 'Previous page') }}</button>
        <span>{{ t('library', 'Page {page} of {pages}', { page: detail.page, pages: detail.pages }) }}</span>
        <button type="button" class="button secondary" :disabled="!canChange || detail.page === detail.pages" @click="load(detail.page + 1)">{{ t('library', 'Next page') }}</button>
      </nav>
    </template>
    <template v-else-if="!selectedListId">
      <AddToList v-if="addItemId" :item-ids="[addItemId]" :request-token="requestToken" :lists-url="listsUrl" @added="load()" />
      <p v-if="!lists.length && !busy && !editing" class="library-lists-empty">{{ t('library', 'Create your first list for a reading plan, a project or books to return to.') }}</p>
      <ul class="library-list-cards">
        <li v-for="list in lists" :key="list.id"><a :href="`${listsUrl}&listId=${list.id}`"><h2 dir="auto">{{ list.name }}</h2><p>{{ t('library', 'Books: {count}', { count: list.count }) }}</p><p v-if="list.description" dir="auto">{{ list.description }}</p></a></li>
      </ul>
    </template>
  </section>
</template>

<style>
.library-personal-lists { max-width: 1100px; margin-inline: auto; padding: 24px; display: grid; gap: 20px; overflow-wrap: anywhere; }
.library-lists-heading { display: flex; gap: 16px; align-items: center; justify-content: space-between; }
.library-lists-heading h1 { font-size: 26px; font-weight: 600; margin-block: 8px; }
.library-lists-heading p, .library-list-book p { color: var(--color-text-maxcontrast); }
.library-list-editor, .library-list-editor label { display: grid; gap: 8px; }
.library-list-editor { padding: 16px; background: var(--color-background-dark); border-radius: var(--border-radius-large); }
.library-list-editor input, .library-list-editor textarea { box-sizing: border-box; width: 100%; min-width: 0; }
.library-list-editor textarea { resize: vertical; }
.library-list-description, .library-list-note { white-space: pre-wrap; }
.library-list-entries { padding-inline-start: 28px; margin: 0; }
.library-list-entry { border: 1px solid var(--color-border); border-radius: var(--border-radius-large); padding: 16px; margin-block-end: 16px; }
.library-list-entry > * + * { margin-block-start: 12px; }
.library-list-entry-heading { display: flex; align-items: center; gap: 12px; }
.library-list-entry-heading img { object-fit: contain; flex-shrink: 0; }
.library-list-book { flex: 1; min-width: 0; }
.library-list-book h2, .library-list-cards h2 { font-size: 18px; font-weight: 600; margin: 0; }
.library-list-drag { cursor: grab; font-size: 24px; }
.library-list-note { border-inline-start: 3px solid var(--color-primary-element); padding-inline-start: 12px; }
.library-list-confirm { padding: 16px; border: 1px solid var(--color-warning); border-radius: var(--border-radius-large); }
.library-list-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); gap: 16px; list-style: none; padding: 0; }
.library-list-cards a { display: block; border: 1px solid var(--color-border); border-radius: var(--border-radius-large); padding: 20px; height: 100%; box-sizing: border-box; }
.library-list-cards a:hover, .library-list-cards a:focus-visible { background: var(--color-background-hover); }
.library-list-cards p { margin-block-start: 8px; white-space: pre-wrap; }
.library-lists-empty { padding-block: 24px; }
@media (max-width: 600px) { .library-personal-lists { padding: 12px; } .library-lists-heading { align-items: start; flex-wrap: wrap; } .library-list-entry { padding: 12px; } .library-list-entry-heading { flex-wrap: wrap; } .library-list-drag { display: none; } }
</style>
