<script setup>
import { imagePath } from '@nextcloud/router'
defineProps({ name: { type: String, required: true } })
const sprite = imagePath('library', 'navigation.svg')
</script>

<template>
  <svg class="library-navigation-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use :href="`${sprite}#${name}`" /></svg>
</template>
