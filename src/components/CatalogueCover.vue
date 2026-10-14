<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { t } from '@nextcloud/l10n'
const props = defineProps({ src: { type: String, required: true } })
const frame = ref(null), visible = ref(typeof IntersectionObserver === 'undefined'), state = ref('loading')
let observer
watch(() => props.src, () => { state.value = 'loading' })
onMounted(() => {
  if (visible.value) return
  observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) { visible.value = true; observer.disconnect() }
  }, { rootMargin: '240px' })
  observer.observe(frame.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>
<template>
  <span ref="frame" class="library-cover-frame" :class="{ 'library-cover-frame--error': state === 'error' }">
    <span v-if="state === 'loading'" class="library-cover-loading-shimmer" aria-hidden="true"></span>
    <img :key="src" class="library-cover-image" :class="{ 'library-cover-image--loaded': state === 'loaded' }" :src="visible ? src : undefined" alt="" loading="lazy" decoding="async" @load="state = 'loaded'" @error="state = 'error'">
    <span v-if="state === 'error'" class="library-cover-fallback" role="status">{{ t('library', 'Cover unavailable') }}</span>
  </span>
</template>
