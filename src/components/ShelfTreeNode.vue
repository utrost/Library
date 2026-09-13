<script setup>
import { ref } from 'vue'
import { n, t } from '@nextcloud/l10n'

const props = defineProps({ node: { type: Object, required: true }, childrenUrl: { type: String, required: true } })
const expanded = ref(false)
const loaded = ref(false)
const loading = ref(false)
const loadFailed = ref(false)
const children = ref([])
const hasMore = ref(false)
const nextOffset = ref(0)

async function toggle() {
  expanded.value = !expanded.value
  if (!expanded.value || loaded.value || loading.value) return
  await loadChildren()
}

async function loadChildren() {
  if (loading.value) return
  loading.value = true
  loadFailed.value = false
  try {
    const params = new URLSearchParams({ rootId: String(props.node.rootId), parent: props.node.path, limit: '100', offset: String(nextOffset.value) })
    const response = await fetch(`${props.childrenUrl}?${params}`, { headers: { Accept: 'application/json' }, credentials: 'same-origin' })
    if (!response.ok) throw new Error('Shelf children request failed')
    const payload = await response.json()
    const nodes = Array.isArray(payload?.nodes) ? payload.nodes : []
    children.value.push(...nodes)
    hasMore.value = payload?.hasMore === true
    nextOffset.value = Number.isInteger(payload?.nextOffset) ? payload.nextOffset : children.value.length
    loaded.value = !hasMore.value
  } catch {
    loadFailed.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <li class="library-shelf-tree-node">
    <button v-if="node.hasChildren" type="button" class="library-shelf-tree-toggle" :aria-expanded="String(expanded)" :aria-label="expanded ? t('library', 'Collapse {folder}', { folder: node.label }) : t('library', 'Expand {folder}', { folder: node.label })" @click="toggle">{{ expanded ? '−' : '+' }}</button>
    <a class="library-shelf-summary-card" :href="node.url">
      <span class="library-shelf-summary-title"><strong><bdi dir="auto">{{ node.label }}</bdi></strong><span>{{ n('library', '%n item', '%n items', Number(node.itemCount || 0)) }}</span></span>
      <small class="library-muted"><bdi dir="auto">{{ node.path }}</bdi></small>
    </a>
    <small v-if="loading" role="status" class="library-muted">{{ t('library', 'Loading folders…') }}</small>
    <small v-else-if="loadFailed" role="status" class="library-muted">{{ t('library', 'Could not load folders.') }}</small>
    <ul v-if="expanded && children.length" class="library-shelf-tree">
      <ShelfTreeNode v-for="child in children" :key="child.id" :node="child" :children-url="childrenUrl" />
    </ul>
    <button v-if="expanded && hasMore" type="button" class="library-shelf-tree-load-more" :disabled="loading" @click="loadChildren">{{ t('library', 'Load more folders') }}</button>
  </li>
</template>
