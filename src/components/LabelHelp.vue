<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, useId } from 'vue'
import { t } from '@nextcloud/l10n'
defineProps({ text: { type: String, required: true } })
const id = useId(), anchor = ref(null), popup = ref(null), open = ref(false), position = ref({})
let timer
const helpName = ref(t('library', 'Help'))
const labelId = `${id}-label`
onMounted(() => {
  const label = anchor.value?.closest('label')
  const control = label?.querySelector('input, select, textarea') || (label?.htmlFor ? document.getElementById(label.htmlFor) : null)
  const heading = anchor.value?.closest('h1, h2, h3, h4')
  const slotText = anchor.value?.querySelector('span')?.textContent?.trim()
  const source = (label || heading)?.cloneNode(true)
  source?.querySelectorAll('.library-label-help, input, select, textarea').forEach(node => node.remove())
  const visibleName = slotText || source?.textContent?.replace(/\s+/g, ' ').trim()
  helpName.value = t('library', 'Help: {label}', { label: visibleName || t('library', 'More information') })
  if (label && control && !label.htmlFor) {
    control.id ||= `${id}-control`
    label.htmlFor = control.id
  }
  // A help-only component has an empty slot. Never point a control at that empty span.
  for (const element of [control, heading]) {
    if (element && !element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
      if (slotText) element.setAttribute('aria-labelledby', labelId)
      else if (visibleName) element.setAttribute('aria-label', visibleName)
    }
  }
})
async function show() {
  clearTimeout(timer); open.value = true
  await nextTick()
  positionPopup()
}
function positionPopup() {
  if (!anchor.value || !popup.value) return
  const rect = anchor.value.getBoundingClientRect(), height = popup.value.offsetHeight
  position.value = { left: `${Math.max(8, Math.min(rect.left, window.innerWidth - 336))}px`, top: `${Math.max(8, rect.bottom + height + 12 < window.innerHeight ? rect.bottom + 8 : rect.top - height - 8)}px` }
}
function keep() { clearTimeout(timer) }
function hide() { clearTimeout(timer); open.value = false }
function leave() { timer = setTimeout(() => { if (!anchor.value?.contains(document.activeElement)) hide() }, 150) }
function outside(event) { if (!anchor.value?.contains(event.target) && !popup.value?.contains(event.target)) hide() }
function escape(event) { if (event.key === 'Escape') hide() }
function scroll(event) { if (open.value && (!(event.target instanceof Node) || !popup.value?.contains(event.target))) positionPopup() }
document.addEventListener('keydown', escape)
document.addEventListener('pointerdown', outside)
window.addEventListener('scroll', scroll, true)
onBeforeUnmount(() => { clearTimeout(timer); document.removeEventListener('pointerdown', outside); window.removeEventListener('scroll', scroll, true); document.removeEventListener('keydown', escape) })
</script>
<template>
  <span ref="anchor" class="library-label-help" @pointerenter="($event.pointerType !== 'touch') && show()" @pointerleave="leave" @keydown.esc.stop.prevent="hide">
    <span :id="labelId"><slot /></span>
    <button type="button" class="library-label-help-button" :aria-label="helpName" :aria-describedby="open ? id : undefined" @focus="show" @blur="leave" @click.stop.prevent="show">?</button>
    <Teleport to="body"><span v-if="open" :id="id" ref="popup" class="library-label-help-popup" role="tooltip" :style="position" @pointerenter="keep" @pointerleave="leave">{{ text }}</span></Teleport>
  </span>
</template>
<style>
.library-label-help { display: inline-flex; align-items: center; gap: 6px; width: fit-content; max-width: 100%; }
.library-label-help .library-label-help-button { min-height: 24px; min-width: 24px; width: 24px; height: 24px; padding: 0; margin: 0; border-radius: 50%; font-size: 12px; line-height: 18px; border: 1px solid var(--color-border); background: var(--color-background-hover); color: var(--color-text-maxcontrast); }
.library-label-help-popup { position: fixed; z-index: 100001; width: 320px; max-width: calc(100vw - 16px); max-height: calc(100dvh - 16px); overflow: auto; box-sizing: border-box; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-main-text); background: var(--color-main-background); box-shadow: 0 4px 16px #0003; white-space: pre-line; overflow-wrap: anywhere; font-size: 13px; }
</style>
