<script setup>
import { nextTick, onBeforeUnmount, ref, useId } from 'vue'

defineProps({ label: { type: String, required: true }, icon: { type: String, default: 'remove' }, disabled: Boolean })
defineEmits(['click'])
const id = useId(), button = ref(null), tooltip = ref(null), open = ref(false), position = ref({})
async function show() {
  if (button.value?.disabled) return
  open.value = true
  await nextTick()
  if (!button.value || !tooltip.value) return
  const rect = button.value.getBoundingClientRect()
  const box = tooltip.value.getBoundingClientRect()
  position.value = { left: `${Math.max(8, Math.min(rect.left, innerWidth - box.width - 8))}px`, top: `${Math.max(8, rect.top > box.height + 12 ? rect.top - box.height - 8 : rect.bottom + 8)}px` }
}
function hide() { open.value = false }
function leave() { if (document.activeElement !== button.value) hide() }
window.addEventListener('scroll', hide, true)
onBeforeUnmount(() => window.removeEventListener('scroll', hide, true))
</script>

<template>
  <button ref="button" type="button" class="library-identity-action" :disabled="disabled" :aria-label="label" :aria-describedby="open ? id : undefined" @click="$emit('click', $event)" @pointerenter="$event.pointerType !== 'touch' && show()" @pointerleave="leave" @focus="show" @blur="hide" @keydown.esc="hide">
    <svg v-if="icon === 'edit'" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 5 4 4M4 20l4-1L20 7a2.8 2.8 0 0 0-4-4L4 15v5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
    <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></svg>
  </button>
  <Teleport to="body"><span v-if="open" :id="id" ref="tooltip" class="library-identity-action-tooltip" role="tooltip" :style="position">{{ label }}</span></Teleport>
</template>

<style scoped>
.library-identity-action { align-items: center; background: transparent; border: 0; border-radius: 6px; color: var(--color-main-text); cursor: pointer; display: inline-flex; flex: 0 0 auto; height: 32px; justify-content: center; margin: 0; min-height: 32px; min-width: 32px; padding: 6px; width: 32px; }
.library-identity-action:hover { background: var(--color-background-hover); }
.library-identity-action:focus-visible { outline: 2px solid var(--color-primary-element); outline-offset: 2px; }
.library-identity-action:disabled { opacity: .5; cursor: default; }
.library-identity-action svg { height: 18px; width: 18px; }
.library-identity-action-tooltip { position: fixed; z-index: 100001; max-width: min(240px, calc(100vw - 16px)); padding: 6px 9px; border: 1px solid var(--color-border); border-radius: 6px; background: var(--color-main-background); color: var(--color-main-text); box-shadow: 0 3px 12px #0003; overflow-wrap: anywhere; pointer-events: none; font-size: 13px; }
@media (pointer: coarse), (max-width: 600px) { .library-identity-action { height: 44px; min-height: 44px; min-width: 44px; width: 44px; } }
</style>
