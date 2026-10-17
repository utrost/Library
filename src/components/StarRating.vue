<script setup>
import { computed, ref } from 'vue'
import { t } from '@nextcloud/l10n'

const props = defineProps({
  modelValue: { type: [Number, String], default: '' },
  disabled: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
const preview = ref(0)
const rating = computed(() => {
  const value = Number(props.modelValue)
  return Number.isInteger(value) && value >= 0 && value <= 5 ? value : 0
})
const active = computed(() => preview.value || rating.value)
const hasRating = computed(() => rating.value > 0)
</script>

<template>
  <fieldset class="library-star-rating" :disabled="disabled">
    <legend :title="t('library', 'Your private rating. Choose one to five stars, or clear it.')">{{ t('library', 'Personal rating') }}</legend>
    <div class="library-star-rating-controls">
      <div class="library-star-rating-options" @mouseleave="preview = 0">
        <label v-for="star in 5" :key="star" class="library-star-rating-option" :title="t('library', 'Set {count} of 5 stars', { count: star })" @mouseenter="preview = star">
          <input type="radio" name="library-personal-rating" :value="star" :checked="rating === star" :aria-label="t('library', 'Set {count} of 5 stars', { count: star })" @change="emit('update:modelValue', star)">
          <span class="library-star-rating-glyph" :class="{ active: star <= active }" aria-hidden="true">★</span>
        </label>
      </div>
      <span class="library-star-rating-value" role="status">{{ hasRating ? t('library', '{count} of 5 stars', { count: rating }) : t('library', 'Not rated') }}</span>
      <button type="button" class="button secondary" :disabled="disabled || !hasRating" @click="emit('update:modelValue', '')">{{ t('library', 'Clear rating') }}</button>
    </div>
  </fieldset>
</template>

<style scoped>
.library-star-rating { min-width: 0; margin: 0; padding: 0; border: 0; }
.library-star-rating legend { padding: 0; margin-bottom: 8px; }
.library-star-rating-controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.library-star-rating-options { display: inline-flex; align-items: center; gap: 2px; }
.library-star-rating-option { display: inline-flex; position: relative; cursor: pointer; }
.library-star-rating-option input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; }
.library-star-rating-glyph { display: block; color: var(--color-text-maxcontrast); font-size: 31px; line-height: 1; }
.library-star-rating-glyph.active { color: var(--library-star-on-color, var(--color-warning, #ad7000)); }
.library-star-rating-option input:focus-visible + .library-star-rating-glyph { outline: 2px solid var(--color-primary-element); outline-offset: 2px; border-radius: 3px; }
.library-star-rating:disabled .library-star-rating-option, .library-star-rating:disabled .library-star-rating-option input { cursor: default; }
.library-star-rating-value { min-width: 68px; }
</style>
