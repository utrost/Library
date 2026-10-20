<script setup>
import CatalogueCover from './CatalogueCover.vue'
import { bookCoverUrl } from '../details-return.js'
defineProps({ book: Object, href: String })
</script>
<template>
  <li class="library-collection-book">
    <slot name="selection" />
    <a class="author-book-cover library-collection-cover" :href="href" :aria-label="book.title"><CatalogueCover :src="bookCoverUrl(book)" /></a>
    <div class="author-book-description library-collection-description"><a class="author-book-title" :href="href" dir="auto">{{ book.title }}</a><slot /></div>
  </li>
</template>
<style>
.library-collection-book { display: flex; align-items: start; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--color-border); min-width: 0; position: relative; }
.library-collection-cover { flex: 0 0 64px; width: 64px; }
.library-collection-cover .library-cover-image { width: 100%; height: 96px; object-fit: contain; }
.library-collection-description { display: flex; flex-direction: column; gap: 4px; min-width: 0; overflow-wrap: anywhere; }
.library-collection-description > a { font-weight: 600; text-decoration: underline; }
.library-collection-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px; }
.library-collection-grid .library-collection-book { flex-direction: column; }
.library-collection-grid .library-collection-cover { width: 100%; flex-basis: auto; }
.library-collection-grid .library-cover-image { height: 180px; }
.library-collection-book input[type="checkbox"] { width: 20px; height: 20px; min-height: 20px; flex: 0 0 20px; }
.library-collection-grid .library-collection-book input[type="checkbox"] { position: absolute; top: 18px; inset-inline-start: 6px; z-index: 1; }
@media (max-width: 600px) { .library-collection-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; } }
</style>
