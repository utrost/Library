<script setup>
import { t } from '@nextcloud/l10n'
import LabelHelp from './LabelHelp.vue'
defineProps({ result: { type: Object, required: true }, labels: { type: Object, required: true }, statuses: { type: Object, required: true } })
</script>
<template>
  <div class="library-inference-rule-trace">
    <div v-for="conflict in result.conflicts || []" :key="conflict.field" class="library-inference-rule-conflict">
      <strong>{{ t('library', 'Conflicting rules') }}: {{ labels[conflict.field] }}</strong>
      <ul><li v-for="(proposal, index) in conflict.proposals" :key="index"><bdi>{{ proposal.value }}</bdi><small>{{ proposal.sources.map(source => source.name).join(', ') }}</small></li></ul>
    </div>
    <details v-if="result.attempts?.length">
      <summary><LabelHelp :text="t('library', 'Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.')">{{ t('library', 'Rule evaluation') }}</LabelHelp></summary>
      <ul><li v-for="attempt in result.attempts" :key="attempt.id"><strong>{{ attempt.name }}</strong><bdi>{{ attempt.folder || '/' }}</bdi><small>{{ statuses[attempt.status] }}</small></li></ul>
    </details>
  </div>
</template>
<style>
.library-inference-rule-trace { overflow-wrap: anywhere; }
.library-inference-rule-trace ul { padding-inline-start: 20px; }
.library-inference-rule-trace li { margin-block: 6px; }
.library-inference-rule-trace small, .library-inference-rule-trace li > bdi { display: block; }
.library-inference-rule-conflict { border-inline-start: 3px solid var(--color-warning); padding-inline-start: 10px; margin-block: 12px; }
</style>
