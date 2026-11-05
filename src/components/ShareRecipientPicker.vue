<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { t } from '@nextcloud/l10n'

const props = defineProps({
  url: { type: String, required: true },
  rootSelect: { type: Object, required: true },
  recipientField: { type: Object, required: true },
  form: { type: Object, required: true },
})
const query = ref('')
const selected = ref(null)
const users = ref([])
const open = ref(false)
const busy = ref(false)
const searched = ref(false)
const error = ref('')
const active = ref(-1)
const input = ref(null)
let timer = null
let controller = null
let generation = 0
let blurTimer = null

function reset() {
  generation++
  clearTimeout(timer)
  controller?.abort()
  props.recipientField.value = ''
  query.value = ''
  selected.value = null
  users.value = []
  open.value = false
  busy.value = false
  searched.value = false
  error.value = ''
  active.value = -1
}

function changed() {
  const value = query.value.trim()
  generation++
  const current = generation
  clearTimeout(timer)
  controller?.abort()
  props.recipientField.value = ''
  selected.value = null
  users.value = []
  active.value = -1
  error.value = ''
  searched.value = false
  const length = Array.from(value).length
  busy.value = length >= 3
  if (length < 3) return
  timer = setTimeout(async () => {
    controller = new AbortController()
    try {
      const url = new URL(props.url, window.location.href)
      url.searchParams.set('rootId', props.rootSelect.value)
      url.searchParams.set('search', value)
      const response = await fetch(url, { credentials: 'same-origin', cache: 'no-store', signal: controller.signal })
      if (!response.ok) throw new Error()
      const data = await response.json()
      if (current !== generation) return
      users.value = Array.isArray(data.users) ? data.users.filter(user => typeof user.id === 'string' && typeof user.label === 'string') : []
      searched.value = true
      active.value = users.value.length ? 0 : -1
    } catch (cause) {
      if (current === generation && cause.name !== 'AbortError') error.value = t('library', 'Could not find users. Try again.')
    } finally {
      if (current === generation) busy.value = false
    }
  }, 220)
}

function onInput() {
  open.value = true
  changed()
}

function onBlur() {
  blurTimer = setTimeout(() => { open.value = false }, 150)
}

function choose(user) {
  generation++
  clearTimeout(timer)
  controller?.abort()
  props.recipientField.value = user.id
  query.value = user.label
  selected.value = user
  users.value = []
  open.value = false
  busy.value = false
  error.value = ''
  props.form.querySelector('button[type="submit"]')?.focus()
}

function keydown(event) {
  if (event.key === 'Escape') { open.value = false; return }
  if (!users.value.length || !open.value) return
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    active.value = (active.value + (event.key === 'ArrowDown' ? 1 : -1) + users.value.length) % users.value.length
  } else if (event.key === 'Enter' && active.value >= 0) {
    event.preventDefault()
    choose(users.value[active.value])
  }
}

function submit(event) {
  if (props.recipientField.value) return
  event.preventDefault()
  error.value = t('library', 'Choose a user from the suggestions before reviewing sharing.')
  input.value?.focus()
}

onMounted(() => {
  props.rootSelect.addEventListener('change', reset)
  props.form.addEventListener('submit', submit)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
  clearTimeout(blurTimer)
  controller?.abort()
  props.rootSelect.removeEventListener('change', reset)
  props.form.removeEventListener('submit', submit)
})
</script>

<template>
  <div class="library-share-recipient-picker">
    <label for="library-share-recipient-search">{{ t('library', 'Nextcloud user') }}</label>
    <input id="library-share-recipient-search" ref="input" v-model="query" type="search" autocomplete="off" maxlength="160"
      role="combobox" aria-autocomplete="list" aria-controls="library-share-recipient-options"
      :aria-expanded="open && users.length > 0" :aria-activedescendant="open && active >= 0 ? `library-share-recipient-${active}` : undefined"
      :placeholder="t('library', 'Enter at least three characters')" @input="onInput" @focus="open = true" @blur="onBlur" @keydown="keydown">
    <small v-if="selected" role="status">{{ t('library', 'Nextcloud username') }}: <bdi dir="auto">{{ selected.id }}</bdi></small>
    <small v-if="busy" role="status">{{ t('library', 'Searching…') }}</small>
    <p v-if="error" role="alert">{{ error }}</p>
    <small v-if="searched && !busy && !users.length && !recipientField.value" role="status">{{ t('library', 'No shareable users found.') }}</small>
    <ul v-if="open && users.length" id="library-share-recipient-options" role="listbox">
      <li v-for="(user, index) in users" :key="user.id" role="presentation">
        <button :id="`library-share-recipient-${index}`" type="button" role="option" :aria-selected="active === index" :class="{ 'is-active': active === index }" @pointerdown.prevent="choose(user)" @click="choose(user)"><bdi dir="auto">{{ user.label }}</bdi><small><bdi dir="auto">{{ user.id }}</bdi></small></button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.library-share-recipient-picker { position: relative; flex: 1 1 15rem; display: grid; gap: .25rem; min-width: 0; }
.library-share-recipient-picker > label { display: block; }
.library-share-recipient-picker input { width: 100%; box-sizing: border-box; }
.library-share-recipient-picker > small { min-width: 0; overflow-wrap: anywhere; }
.library-share-recipient-picker p { margin: 0; color: var(--color-error); }
.library-share-recipient-picker ul { position: absolute; top: 100%; z-index: 25; box-sizing: border-box; width: 100%; max-height: 16rem; overflow: auto; margin: .2rem 0 0; padding: .25rem; list-style: none; background: var(--color-main-background); border: 1px solid var(--color-border); border-radius: var(--border-radius-large); box-shadow: 0 6px 20px #0003; }
.library-share-recipient-picker li button { width: 100%; min-width: 0; min-height: 2.75rem; display: grid; gap: .1rem; text-align: start; overflow-wrap: anywhere; padding: .4rem .6rem; background: transparent; border: 0; border-radius: var(--border-radius); }
.library-share-recipient-picker li button:hover, .library-share-recipient-picker li button:focus-visible, .library-share-recipient-picker li button.is-active { background: var(--color-background-hover); }
.library-share-recipient-picker li small { color: var(--color-text-maxcontrast); }
</style>
