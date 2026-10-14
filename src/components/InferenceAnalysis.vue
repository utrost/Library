<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import LabelHelp from './LabelHelp.vue'
import InferenceApply from './InferenceApply.vue'
import InferenceRuleTrace from './InferenceRuleTrace.vue'
const props=defineProps({ definition: { type:Object, required:true }, labels: { type:Object, required:true }, statuses: { type:Object, required:true }, requestToken:String, disabled:Boolean })
const job=ref(null), history=ref([]), busy=ref(false), error=ref(''), filter=ref('all')
let timer, generation=0, alive=true
const active=computed(()=>job.value?.status==='running')
const stateLabels=computed(()=>({ running:t('library','Analysing'), completed:t('library','Analysis complete'), cancelled:t('library','Analysis cancelled'), failed:t('library','Analysis failed'), limited:t('library','Analysis limit reached') }))
const resultLabels=computed(()=>({ ...props.statuses, unavailable:t('library','Changed or unavailable books') }))
async function api(path='',body) {
 const response=await fetch(generateUrl(`/apps/library/api/inference/analyses${path}`),{ credentials:'same-origin',cache:'no-store',method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',requesttoken:props.requestToken},...(body===undefined?{}:{body:JSON.stringify(body)}) })
 const data=await response.json()
 if(!response.ok) {
  if(data.error==='analysis_history_limit') throw new Error(t('library','Five folder analyses are already saved. Discard an old analysis before starting another.'))
  if(data.error==='analysis_limit') throw new Error(t('library','This folder exceeds the analysis limit. Choose a smaller subfolder.'))
  if(response.status===404) throw new Error(t('library','This analysis or its folder is no longer available.'))
  throw new Error(t('library','Could not analyse this folder. Check the rule, folder and your access.'))
 }
 return data
}
async function histories() { const data=await api(); if(alive)history.value=data.jobs }
async function run(action) { busy.value=true; error.value=''; try {await action()}catch(e){if(alive)error.value=e.message}finally{if(alive)busy.value=false} }
function schedule() {
 clearTimeout(timer)
 if(!alive || !active.value) return
 const id=job.value.id, current=generation
 timer=setTimeout(async()=>{
  try {
   await api(`/${id}/advance`,{})
   if(!alive || generation!==current)return
   const data=await api(`/${id}?page=${job.value.page}&filter=${filter.value}`)
   if(!alive || generation!==current)return
   job.value=data; if(!active.value)await histories(); schedule()
  }catch(e){if(alive && generation===current)error.value=e.message}
 },1500)
}
async function start() {
 await run(async()=>{ const data=await api('',{definition:props.definition}); generation++; filter.value='all'; job.value=data; await histories(); schedule() })
}
async function open(id,page=1) {
 const current=++generation;clearTimeout(timer)
 await run(async()=>{ const data=await api(`/${id}?page=${page}&filter=${filter.value}`); if(alive && current===generation){job.value=data;schedule()} })
}
function choose(event) { filter.value='all'; if(event.target.value)open(event.target.value) }
async function cancel() {
 const id=job.value.id;generation++;clearTimeout(timer)
 await run(async()=>{ await api(`/${id}/cancel`,{});job.value=await api(`/${id}?filter=${filter.value}`);await histories() })
}
async function discard() {
 const id=job.value.id;generation++;clearTimeout(timer)
 await run(async()=>{await api(`/${id}/discard`,{});job.value=null;await histories()})
}
onMounted(()=>run(histories))
onBeforeUnmount(()=>{alive=false;generation++;clearTimeout(timer)})
</script>
<template>
 <section class="library-inference-analysis library-inference-step" :aria-label="t('library','Whole-folder analysis')" :aria-busy="busy ? 'true' : 'false'">
  <h2><LabelHelp :text="t('library','Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.')">{{ t('library','5. Analyse the whole folder') }}</LabelHelp></h2>
  <p v-if="error" role="alert">{{ error }}</p>
  <div class="library-inference-presets">
   <button class="button primary" :disabled="busy || disabled || active" @click="start">{{ t('library','Analyse whole folder') }}</button>
   <label><LabelHelp :text="t('library','Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.')">{{ t('library','Saved analyses') }}</LabelHelp><select :value="job?.id || ''" :disabled="busy" @change="choose"><option value="">{{ t('library','Choose an analysis') }}</option><option v-for="entry in history" :key="entry.id" :value="entry.id">{{ new Date(Number(entry.created_at)*1000).toLocaleString() }} · {{ stateLabels[entry.status] }} · {{ entry.processed }}/{{ entry.total }}</option></select></label>
  </div>
  <template v-if="job">
   <p class="library-inference-path">{{ job.scope }}</p>
   <p role="status">{{ stateLabels[job.status] }} · {{ job.processed }}/{{ job.total }}</p>
   <progress v-if="active" :value="job.processed" :max="Math.max(job.total,1)" :aria-label="t('library','Analysis progress')" />
   <div class="library-inference-presets"><button v-if="active" class="button secondary" :disabled="busy" @click="cancel">{{ t('library','Cancel analysis') }}</button><button class="button secondary" :disabled="busy" @click="open(job.id,job.page)">{{ t('library','Refresh results') }}</button><button class="button secondary" :disabled="busy || active" @click="discard">{{ t('library','Discard analysis') }}</button></div>
   <p v-if="job.status==='limited'" role="alert">{{ t('library','Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.') }}</p>
   <p v-if="job.status==='failed'" role="alert">{{ t('library','Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.') }}</p>
   <details><summary>{{ t('library','Rule used for this analysis') }}</summary><code v-if="job.definition.mode==='pattern'" class="library-analysis-definition" dir="ltr">{{ job.definition.pattern }}</code><ul v-else-if="job.definition.mode==='folders'"><li v-for="assignment in job.definition.assignments" :key="assignment.id">{{ assignment.folder || '/' }} · {{ assignment.definition.name }}</li></ul><ul v-else><li v-for="(part,index) in job.definition.rule.parts" :key="index">{{ index+1 }} · {{ labels[part.field] || t('library','Ignore') }}</li></ul></details>
   <label>{{ t('library','Show results') }}<select v-model="filter" :disabled="busy" @change="open(job.id)"><option value="all">{{ t('library','All') }} ({{ Object.values(job.counts).reduce((a,b)=>a+b,0) }})</option><option v-for="(label,status) in resultLabels" :key="status" :value="status">{{ label }} ({{ job.counts[status] || 0 }})</option></select></label>
   <div class="library-analysis-results" role="region" tabindex="0" :aria-label="t('library','Analysis results')"><details v-for="item in job.items" :key="item.id" class="library-inference-result"><summary><span class="library-inference-path">{{ item.path || '—' }}</span><strong>{{ resultLabels[item.status] }}</strong></summary><InferenceRuleTrace v-if="job.definition.mode==='folders'" :result="item" :labels="labels" :statuses="resultLabels" /><dl v-for="change in item.changes" :key="change.field"><dt>{{ labels[change.field] }}</dt><dd>{{ change.before || '—' }} → {{ change.value }}</dd></dl></details></div>
   <nav class="library-inference-presets" :aria-label="t('library','Analysis pages')"><button class="button secondary" :disabled="busy || job.page===1" @click="open(job.id,job.page-1)">{{ t('library','Previous page') }}</button><span>{{ job.page }}</span><button class="button secondary" :disabled="busy || !job.hasNext" @click="open(job.id,job.page+1)">{{ t('library','Next page') }}</button></nav>
   <InferenceApply whole-folder :results="job.items" :labels="labels" :request-token="requestToken" :context="JSON.stringify({analysisId:job.id})" :disabled="busy || active" @changed="open(job.id,job.page)" />
  </template>
 </section>
</template>
<style>
.library-inference-analysis progress { width:100%; height:12px; }
.library-analysis-definition { white-space:pre-wrap; overflow-wrap:anywhere; max-height:240px; overflow:auto; padding:12px; background:var(--color-background-hover); }
.library-inference-analysis dd { margin:0 0 12px; overflow-wrap:anywhere; }
.library-analysis-results { max-height:360px; overflow:auto; margin-block:12px; }
</style>
