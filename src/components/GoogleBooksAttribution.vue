<script setup>
import { imagePath } from '@nextcloud/router'
import { t } from '@nextcloud/l10n'
</script>
<template><a class="library-google-attribution" href="https://books.google.com/" target="_blank" rel="noopener noreferrer"><img :src="imagePath('library', 'powered-by-google.png')" :alt="t('library', 'Powered by Google')"></a></template>
<style scoped>
.library-google-attribution { display:inline-block; background:#fff; padding:4px; border-radius:3px; margin-block:.5rem; } img { display:block; width:auto; height:auto; max-width:100%; }
</style>
