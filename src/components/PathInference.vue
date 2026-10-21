<script setup>
import OperationStatus from './OperationStatus.vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { inferPath } from '../path-inference.js'
import { inferRule, newRule, pathParts } from '../path-inference-rule.js'
import InferenceAnalysis from './InferenceAnalysis.vue'
import InferencePart from './InferencePart.vue'
import InferencePatterns from './InferencePatterns.vue'
import InferenceFolderRules from './InferenceFolderRules.vue'
import InferenceRuleTrace from './InferenceRuleTrace.vue'
import { inferFolderRules } from '../path-inference-folders.js'
import LabelHelp from './LabelHelp.vue'
import InferenceSuggestions from './InferenceSuggestions.vue'
import InferenceWorklist from './InferenceWorklist.vue'
defineProps({ requestToken: { type: String, default: '' } })
const roots = ref([]), rootId = ref(''), folder = ref(''), recursive = ref(true), sort = ref('name'), folders = ref([]), childFolder = ref(''), folderSearch = ref(''), hasMoreFolders = ref(false), folderChoiceError = ref('')
const items = ref([]), page = ref(1), hasNext = ref(false), busy = ref(false), error = ref('')
const scope = ref(''), example = ref(''), loadedRootId = ref(''), loadedFolder = ref(''), folderRules = ref([])
const rule = ref(null), editorMode = ref('guided'), ruleGeneration = ref(0)
const pattern = ref('%folders%/%title%.%extension%')
const replaceUnderscores = ref(false)
const editorOpen = ref(false)
const patternsVersion = ref(0)
let generation = 0
let folderChoiceGeneration = 0
let folderSearchTimer = null

const fields = computed(() => [
  ['title', t('library', 'Title')], ['subtitle', t('library', 'Subtitle')], ['author', t('library', 'Creators')],
  ['series', t('library', 'Series')], ['seriesNumber', t('library', 'Part in series')], ['language', t('library', 'Language')],
  ['genre', t('library', 'Genre')], ['publisher', t('library', 'Publisher')], ['subject', t('library', 'Subjects')], ['year', t('library', 'Publication year')], ['isbn', t('library', 'ISBN')],
])
const labels = computed(() => Object.fromEntries(fields.value))
const advancedPatternHelp = computed(() => [
  t('library', 'Patterns match paths relative to the selected folder. Literal spaces and punctuation must match exactly.'),
  t('library', '%title% and %subtitle% — title and subtitle.'),
  t('library', '%author% — one creator value; use guided assignments to split multiple authors.'),
  t('library', '%series% and %seriesNumber% — series name and part in series.'),
  t('library', '%language% — language name or code; common names normalize to a code.'),
  t('library', '%subject% — one source subject. %genre% — source genre text, which can be reviewed for a curated genre assignment.'),
  t('library', '%year% — exactly four digits. %publisher% — publisher name. %isbn% — a valid ISBN-10 or ISBN-13.'),
  t('library', '%folder%/ ignores one folder; %folders%/ ignores zero or more folders.'),
  t('library', '%ignore% skips one nonempty part; %extension% matches the extension without the dot.'),
  t('library', 'Example: %folders%/%title% - %author%.%extension% matches Fiction/Book title - Author.epub.'),
  t('library', 'Nextcloud tags cannot be assigned by a path pattern. Review every proposed value before applying.'),
].join('\n'))
const statusLabels = computed(() => ({
  ready: t('library', 'Empty field suggestions'), conflict: t('library', 'Existing values need review'),
  unmatched: t('library', 'Unmatched paths'), ambiguous: t('library', 'Ambiguous matches'),
  invalid: t('library', 'Invalid pattern or value'), unchanged: t('library', 'No changes'),
}))
const results = computed(() => items.value.map((item) => ({ ...item, ...(editorMode.value === 'folders' ? inferFolderRules(item.path, loadedFolder.value, folderRules.value, item.current) : editorMode.value === 'guided' ? inferRule(item.path, rule.value, item.current) : inferPath(item.path, pattern.value, item.current, replaceUnderscores.value)) })))
const selectedPreview = computed(() => results.value.find((item) => item.path === example.value))
function enterFolder(child) { if (!child) return; folder.value = [folder.value.replace(/\/$/, ''), child].filter(Boolean).join('/'); childFolder.value = ''; folderSearch.value = ''; load() }
function parentFolder() { folder.value = folder.value.replace(/\/$/, '').split('/').slice(0, -1).join('/'); folderSearch.value = ''; load() }
const scopePending = computed(() => rootId.value !== loadedRootId.value || folder.value.replace(/^\/+|\/+$/g, '') !== loadedFolder.value)
const exampleParts = computed(() => pathParts(example.value))
function selectExample() { if (!rule.value && example.value) rule.value = newRule(example.value) }
function resetAssignments() { rule.value = newRule(example.value); ruleGeneration.value++; editorMode.value = 'guided' }
function useRule(value) { rule.value = value; ruleGeneration.value++; editorMode.value = 'guided' }
function useSuggestedRule(value) { useRule(value); editorOpen.value = false }
function usePattern(value, underscores = false) { pattern.value = value; replaceUnderscores.value = underscores; editorMode.value = 'pattern' }
async function load(nextPage = 1) {
  const current = ++generation
  busy.value = true; error.value = ''; items.value = []
  try {
    const params = new URLSearchParams()
    if (rootId.value) { params.set('rootId', rootId.value); params.set('folder', folder.value); params.set('folderSearch', folderSearch.value); params.set('recursive', recursive.value ? '1' : '0'); params.set('sort', sort.value); params.set('page', String(nextPage)) }
    const response = await fetch(`${generateUrl('/apps/library/api/inference/sample')}?${params}`, { credentials: 'same-origin', cache: 'no-store' })
    if (!response.ok) throw new Error(t('library', 'Could not load this folder. Check its path and your access.'))
    const data = await response.json()
    if (current !== generation) return
    roots.value = data.roots
    if (!rootId.value) { rootId.value = String(data.roots[0]?.id || ''); if (rootId.value) return load() }
    if (loadedRootId.value !== rootId.value) folderRules.value = []
    loadedRootId.value = rootId.value
    const rootPath = data.roots.find(root => String(root.id) === rootId.value)?.path.replace(/\/$/, '') || ''
    loadedFolder.value = data.scope.slice(rootPath.length).replace(/^\//, '')
    folders.value = data.folders || []; hasMoreFolders.value = Boolean(data.hasMoreFolders); items.value = data.items || []; page.value = data.page || 1; hasNext.value = Boolean(data.hasNext); scope.value = data.scope || ''
    example.value = items.value[0]?.path || ''; selectExample()
  } catch (e) { if (current === generation) error.value = e.message } finally { if (current === generation) busy.value = false }
}
function rulesLoaded(value) { if (value.rootId === loadedRootId.value) folderRules.value = value.assignments }
function rootChanged() { folder.value = ''; folderSearch.value = ''; load() }
async function loadFolderChoices(query) {
  if (!rootId.value) return
  const current = ++folderChoiceGeneration
  const params = new URLSearchParams({ rootId: rootId.value, folder: folder.value, folderSearch: query, foldersOnly: '1' })
  folderChoiceError.value = ''
  try {
    const response = await fetch(`${generateUrl('/apps/library/api/inference/sample')}?${params}`, { credentials: 'same-origin', cache: 'no-store' })
    if (!response.ok) throw new Error('folder_lookup')
    const data = await response.json()
    if (current !== folderChoiceGeneration || query !== folderSearch.value) return
    folders.value = data.folders || []; hasMoreFolders.value = Boolean(data.hasMoreFolders)
  } catch { if (current === folderChoiceGeneration) folderChoiceError.value = t('library', 'Could not load subfolders. Try again.') }
}
watch(folderSearch, value => { clearTimeout(folderSearchTimer); folderSearchTimer = setTimeout(() => { void loadFolderChoices(value.trim()) }, 200) })
onMounted(() => load())
onBeforeUnmount(() => { clearTimeout(folderSearchTimer); folderChoiceGeneration++ })
</script>

<template>
  <section class="library-inference" :aria-label="t('library', 'Extract metadata from paths')" :aria-busy="busy ? 'true' : 'false'">
    <h1><LabelHelp :text="t('library', 'Preview a naming rule, select fields and review before applying. Source files are never changed.')">{{ t('library', 'Extract metadata from paths') }}</LabelHelp></h1>
    <OperationStatus :loading="busy" :error="error" @retry="load" />
    <section class="library-inference-step">
      <h2>{{ t('library', '1. Choose a folder') }}</h2>
      <form class="library-inference-scope" @submit.prevent="load()">
        <label><LabelHelp :text="t('library', 'Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.')">{{ t('library', 'Shelf') }}</LabelHelp><select v-model="rootId" :disabled="busy || !roots.length" @change="rootChanged"><option v-for="root in roots" :key="root.id" :value="String(root.id)">{{ root.label }}</option></select></label>
        <label>{{ t('library', 'Find subfolder') }}<input v-model="folderSearch" type="search" :disabled="busy" :placeholder="t('library', 'Filter folder names')"></label>
        <label>{{ t('library', 'Open subfolder') }}<select v-model="childFolder" :disabled="busy || !folders.length" @change="enterFolder(childFolder)"><option value="">{{ folders.length ? t('library', 'Choose a subfolder') : t('library', 'No subfolders') }}</option><option v-for="child in folders" :key="child" :value="child">{{ child }}</option></select><small v-if="hasMoreFolders">{{ t('library', 'More folders available. Type a name to narrow the choices.') }}</small><small v-if="folderChoiceError" role="alert">{{ folderChoiceError }}</small></label>
        <label><LabelHelp :text="t('library', 'File dates come from Nextcloud Files. They do not indicate when Library metadata was last reviewed.')">{{ t('library', 'Sort files') }}</LabelHelp><select v-model="sort" :disabled="busy" @change="load()"><option value="name">{{ t('library', 'Name A–Z') }}</option><option value="modified_oldest">{{ t('library', 'Oldest modified file first') }}</option><option value="modified_newest">{{ t('library', 'Newest modified file first') }}</option><option value="type">{{ t('library', 'File type A–Z') }}</option></select></label>
        <label class="library-inference-checkbox"><input v-model="recursive" type="checkbox" :disabled="busy">{{ t('library', 'Include subfolders') }}</label>
        <button class="button primary" :disabled="busy || !rootId">{{ t('library', 'Load sample') }}</button>
      </form>
      <p v-if="scope" class="library-inference-path">{{ scope }}</p>
      <p v-if="scope && !busy && !error && !items.length" role="status">{{ t('library', 'No indexed books in this folder for the current subfolder setting.') }}</p>
      <div class="library-inference-presets" :aria-label="t('library', 'Folders in this sample')">
        <button v-if="folder" class="button secondary" :disabled="busy" @click="parentFolder">{{ t('library', 'Parent folder') }}</button>
      </div>

    </section>
    <section v-if="items.length" class="library-inference-step">
      <details class="library-inference-configuration">
      <summary><h2>{{ t('library', '2. Configure patterns') }}</h2></summary>
      <div class="library-inference-editor">
      <div class="library-inference-controls">
      <div class="library-inference-scope">
        <label><LabelHelp :text="t('library', 'Assignments stay the same when you select another example. Reset them to use a different folder structure.')">{{ t('library', 'Example path') }}</LabelHelp><select v-model="example" @change="selectExample()"><option v-for="item in items" :key="item.id" :value="item.path">{{ item.path }}</option></select></label>

      </div>
      <InferenceSuggestions :path="example" :sample="items" :rule="editorMode === 'guided' ? rule : null" @choose="useSuggestedRule" />
      <details class="library-inference-customize" :open="editorOpen" @toggle="editorOpen = $event.target.open">
      <summary>{{ t('library', 'Adjust the rule (optional)') }}</summary>
      <label>{{ t('library', 'Rule editor') }}<select v-model="editorMode"><option value="guided">{{ t('library', 'Guided assignments') }}</option><option value="pattern">{{ t('library', 'Advanced pattern') }}</option><option value="folders">{{ t('library', 'Folder rules') }}</option></select></label>
      <InferenceFolderRules v-if="editorMode === 'folders'" :root-id="loadedRootId" :folder="loadedFolder" :request-token="requestToken" :disabled="busy" :scope-pending="scopePending" @loaded="rulesLoaded" />
      <template v-if="editorMode === 'guided' && rule">
        <InferencePatterns mode="guided" :rule="rule" :request-token="requestToken" @choose-rule="useRule" @catalog-changed="patternsVersion++" />

        <button class="button secondary" @click="resetAssignments">{{ t('library', 'Reset assignments from this example') }}</button>
        <p v-if="exampleParts.length !== rule.parts.length" role="status">{{ t('library', 'This example has a different folder depth and does not match the rule.') }}</p>
        <div v-for="(node, index) in rule.parts" :key="`${ruleGeneration}-${index}`">
          <h3>{{ index === rule.parts.length - 1 ? t('library', 'Filename') : t('library', 'Folder') }} {{ index + 1 }}</h3>
          <InferencePart :node="node" :value="exampleParts[index] || ''" :fields="fields" />
        </div>
        <label class="library-inference-checkbox"><input v-model="rule.combineAuthors" type="checkbox"><LabelHelp :text="t('library', 'Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.') + ' ' + t('library', 'Each author is stored separately and can be used to filter the catalogue.')">{{ t('library', 'Combine authors from multiple parts') }}</LabelHelp></label>


      </template>
      <details v-if="editorMode === 'pattern'" class="library-inference-pattern" open>
        <summary>{{ t('library', 'Pattern and presets') }}</summary>
        <InferencePatterns :pattern="pattern" :replace-underscores="replaceUnderscores" :request-token="requestToken" @choose="usePattern" @catalog-changed="patternsVersion++">
          <label><LabelHelp :text="advancedPatternHelp">{{ t('library', 'Advanced pattern') }}</LabelHelp><input v-model="pattern" maxlength="1000" spellcheck="false" dir="ltr"></label>
          <label class="library-inference-checkbox"><input v-model="replaceUnderscores" type="checkbox">{{ t('library', 'Replace underscores with spaces in extracted values') }}</label>
        </InferencePatterns>
      </details>
      </details>
      </div>
      <aside class="library-inference-live" :aria-label="t('library', 'Live preview')">
        <h3>{{ t('library', 'Live preview') }}</h3>
        <p class="library-inference-live-path" :title="example">{{ example }}</p>
        <div v-if="selectedPreview" aria-live="polite" aria-atomic="true">
          <p class="library-inference-live-status">{{ statusLabels[selectedPreview.status] }}</p>
          <InferenceRuleTrace v-if="editorMode === 'folders'" :result="selectedPreview" :labels="labels" :statuses="statusLabels" />
          <dl v-if="selectedPreview.changes.length">
            <div v-for="change in selectedPreview.changes" :key="change.field" class="library-inference-live-field" :class="`library-inference-live-field--${change.status}`">
              <dt>{{ labels[change.field] }}</dt>
              <dd><span v-if="change.field === 'author' && change.values" class="library-inference-author-chips"><strong v-for="name in change.values" :key="name" dir="auto">{{ name }}</strong></span><strong v-else dir="auto">{{ change.value || '—' }}</strong>


                <small>{{ t('library', 'Current value') }}: <span dir="auto">{{ change.before || '—' }}</span></small>
                <small v-if="change.raw !== change.value">{{ t('library', 'Source text') }}: <span dir="auto">{{ change.raw }}</span></small>
                <small>{{ statusLabels[change.status] }}</small>
                <small v-if="change.sources">{{ t('library', 'Matched rule') }}: {{ change.sources.map(source => source.name).join(', ') }}</small>
              </dd>
            </div>
          </dl>
          <p v-else-if="!selectedPreview.conflicts?.length">{{ t('library', 'No fields extracted from this example. Check the rule, separators and transformations.') }}</p>
        </div>
        <details v-if="editorMode === 'pattern'"><summary>{{ t('library', 'Active pattern') }}</summary><code class="library-inference-path" dir="ltr">{{ pattern }}</code></details>
      </aside>
      </div>
      </details>
    </section>
    <section v-if="items.length" class="library-inference-step">
      <h2>{{ t('library', '3. Assign patterns and review files') }}</h2>
      <InferenceWorklist :items="items" :labels="labels" :statuses="statusLabels" :root-id="loadedRootId" :folder="loadedFolder" :current="editorMode === 'guided' ? {mode:'guided',rule} : editorMode === 'pattern' ? {mode:'pattern',pattern,replaceUnderscores} : null" :request-token="requestToken" :disabled="busy || scopePending" :patterns-version="patternsVersion" @changed="load(page)" />
      <nav class="library-inference-presets" :aria-label="t('library', 'Sample pages')"><button class="button secondary" :disabled="busy || page === 1" @click="load(page - 1)">{{ t('library', 'Previous page') }}</button><span>{{ page }}</span><button class="button secondary" :disabled="busy || !hasNext" @click="load(page + 1)">{{ t('library', 'Next page') }}</button></nav>
    </section>
    <InferenceAnalysis v-if="items.length" :definition="{ mode:editorMode, pattern, replaceUnderscores, rule, rootId:loadedRootId, folder:loadedFolder, recursive }" :labels="labels" :statuses="statusLabels" :request-token="requestToken" :disabled="busy || scopePending || !loadedRootId" />
  </section>
</template>

<style>
.library-inference { padding: 48px 24px 24px; max-width: 1200px; margin: auto; min-width: 0; box-sizing: border-box; }
.library-inference h1, .library-inference h2, .library-inference h3, .library-inference-live-status { white-space: normal; overflow-wrap: anywhere; height: auto; }
.library-inference h1 { font-size: 26px; margin-bottom: 12px; }
.library-inference h2 { font-size: 20px; margin-bottom: 16px; }
.library-inference-step { margin-top: 20px; padding: 20px; border: 1px solid var(--color-border); border-radius: var(--border-radius-large); }
.library-inference-scope, .library-inference-presets { display: flex; flex-wrap: wrap; gap: 12px; align-items: end; margin-block: 12px; }
.library-inference label { display: grid; gap: 6px; min-width: 0; }
.library-inference input:not([type=checkbox]), .library-inference select { width: 100%; max-width: 100%; min-width: 0; }
.library-inference-scope > label { flex: 1 1 220px; }
.library-inference .library-inference-checkbox { display: flex; align-items: center; }
.library-inference-parts { display: flex; flex-wrap: wrap; gap: 12px; margin-block: 16px; }
.library-inference-parts label { padding: 12px; background: var(--color-background-hover); border-radius: 8px; flex: 1 1 180px; overflow-wrap: anywhere; }
.library-inference-parts select { min-width: 140px; }
.library-inference-editor { display: grid; grid-template-columns: minmax(0, 1fr) minmax(240px, 300px); gap: 20px; align-items: start; }
.library-inference-controls { min-width: 0; }
.library-inference-customize > summary { cursor: pointer; font-weight: bold; padding-block: 12px; }
.library-inference-configuration > summary { cursor:pointer; }
.library-inference-configuration > summary h2 { display:inline; margin:0; }
.library-inference-live { position: sticky; top: 12px; max-height: calc(100dvh - 100px); overflow: auto; padding: 16px; background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: 12px; min-width: 0; }
.library-inference-live h3 { font-size: 18px; margin-bottom: 8px; }
.library-inference-live-path { overflow-wrap: anywhere; max-height: 5em; overflow: auto; font-size: 12px; color: var(--color-text-maxcontrast); }
.library-inference-live-status { margin-block: 10px; font-weight: bold; }
.library-inference-live-field { border-inline-start: 3px solid var(--color-border); padding-inline-start: 10px; margin-block: 14px; overflow-wrap: anywhere; }
.library-inference-live-field--conflict { border-color: var(--color-warning); }
.library-inference-live-field--ready { border-color: var(--color-primary-element); }
.library-inference-live dt { font-weight: bold; font-size: 12px; }
.library-inference-live dd { margin: 0; }
.library-inference-live dt { padding: 0; margin: 0 0 6px; text-align: start; }
.library-inference-live dt, .library-inference-live dd { display: block; float: none; width: auto; padding: 0; }
.library-inference-author-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.library-inference-author-chips strong { padding: 4px 8px; border-radius: 12px; background: var(--color-background-hover); }
.library-inference-live small { display: block; margin-top: 4px; color: var(--color-text-maxcontrast); }
@media (max-width: 1050px) {
  .library-inference-editor { display: flex; flex-direction: column; }
  .library-inference-live { order: -1; width: 100%; box-sizing: border-box; top: 0; max-height: 34dvh; z-index: 2; }
  .library-inference-controls { width: 100%; }
}
.library-inference-pattern { margin-top: 16px; }
.library-inference-pattern summary { cursor: pointer; font-weight: bold; padding-block: 8px; }
.library-inference-pattern input { font-family: monospace; }
.library-inference-result { border-top: 1px solid var(--color-border); padding-block: 12px; }
.library-inference-result summary { display: list-item; cursor: pointer; padding: 8px; }
.library-inference-result summary strong { display: block; font-size: 13px; margin-top: 6px; color: var(--color-text-maxcontrast); }
.library-inference-path { overflow-wrap: anywhere; }
.library-inference-table-scroll { overflow-x: auto; }
.library-inference table { width: 100%; border-collapse: collapse; }
.library-inference th, .library-inference td { text-align: start; padding: 10px; border-bottom: 1px solid var(--color-border); overflow-wrap: anywhere; }
.library-inference td small { display: block; color: var(--color-text-maxcontrast); }
@media (max-width: 600px) { .library-inference { padding: 48px 12px 12px; } .library-inference-step { padding: 12px; } }
</style>
