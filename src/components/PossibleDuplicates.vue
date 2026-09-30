<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import DuplicateSuggestions from './DuplicateSuggestions.vue'
import DuplicateSuggestionSettings from './DuplicateSuggestionSettings.vue'
import LabelHelp from './LabelHelp.vue'
const selectedBookId=Number(new URLSearchParams(window.location.search).get('bookId'))||0
const selectedCompareId=Number(new URLSearchParams(window.location.search).get('compareId'))||0
const props=defineProps({requestToken:String,reviewUrl:String})
const roots=ref([]),history=ref([]),rootId=ref('0'),contents=ref(false),job=ref(null),busy=ref(false),error=ref(''),message=ref(''),filter=ref('unreviewed')
let timer,alive=true,generation=0
const active=computed(()=>job.value?.status==='running')
const stateLabels=computed(()=>({running:t('library','Finding possible duplicates'),completed:t('library','Duplicate scan complete'),cancelled:t('library','Duplicate scan cancelled'),failed:t('library','Duplicate scan failed'),limited:t('library','Duplicate scan reached its limit')}))
const choices=computed(()=>({unreviewed:t('library','To review'),preferred:t('library','Preferred copy selected'),keep:t('library','Keep both'),dismissed:t('library','Dismissed')}))
const reasons=computed(()=>({identical:t('library','Identical file contents'),isbn:t('library','Same ISBN'),title_author:t('library','Same normalized title and authors'),similar_title_author:t('library','Similar title and matching authors')}))
const flags=computed(()=>({formats:t('library','Alternative formats'),languages:t('library','Different languages'),years:t('library','Different publication years'),publishers:t('library','Different publishers'),identifiers:t('library','Different ISBNs')}))
const size=value=>value<1048576
 ? new Intl.NumberFormat(document.documentElement.lang||'en',{style:'unit',unit:value<1000?'byte':'kilobyte',maximumFractionDigits:2}).format(value<1000?value:value/1000)
 : new Intl.NumberFormat(document.documentElement.lang||'en',{maximumFractionDigits:2}).format(value/1048576)+' '+t('library','MiB')
async function api(path='',body) {
 const response=await fetch(generateUrl(`/apps/library/api/duplicates${path}`),{credentials:'same-origin',cache:'no-store',method:body===undefined?'GET':'POST',headers:{'Content-Type':'application/json',requesttoken:props.requestToken},...(body===undefined?{}:{body:JSON.stringify(body)})})
 const data=await response.json().catch(()=>({}))
 if(!response.ok) {
  if(response.status===409)throw new Error(t('library','These books changed after the scan. Run a new scan before reviewing this comparison.'))
  if(data.error==='decision_limit')throw new Error(t('library','This account has 10,000 saved review decisions. Reset an old decision before saving another.'))
  if(data.error==='history_limit')throw new Error(t('library','Three duplicate scans are already saved. Discard an old scan before starting another.'))
  if(data.error==='scope_limit')throw new Error(t('library','This scope is too large. Choose a smaller library root.'))
  if(response.status===404)throw new Error(t('library','This scan or these books are no longer available.'))
  throw new Error(t('library','Could not complete the duplicate review. Please try again.'))
 }
 return data
}
async function refreshHistory(){const data=await api();if(alive){roots.value=data.roots;history.value=data.scans}}
async function run(action){busy.value=true;error.value='';try{await action()}catch(e){if(alive)error.value=e.message}finally{if(alive)busy.value=false}}
function schedule(){
 clearTimeout(timer);if(!alive||!active.value)return
 const current=generation,id=job.value.id
 timer=setTimeout(async()=>{
  try{await api(`/${id}/advance`,{});if(!alive||current!==generation)return
   const data=await api(`/${id}?page=${job.value.page}&filter=${filter.value}`);if(!alive||current!==generation)return
   job.value=data;if(!active.value)await refreshHistory();schedule()
  }catch(e){if(alive&&current===generation)error.value=e.message}
 },1500)
}
async function start(){await run(async()=>{job.value=await api('',{rootId:Number(rootId.value),contents:contents.value});generation++;filter.value='unreviewed';message.value='';await refreshHistory();schedule()})}
async function open(id,page=1){const current=++generation;clearTimeout(timer);await run(async()=>{const data=await api(`/${id}?page=${page}&filter=${filter.value}`);if(alive&&current===generation){job.value=data;rootId.value=String(data.rootId);contents.value=Boolean(data.contents);schedule()}})}
function selectHistory(event){filter.value='unreviewed';message.value='';if(event.target.value)open(event.target.value)}
async function cancel(){generation++;clearTimeout(timer);await run(async()=>{await api(`/${job.value.id}/cancel`,{});job.value=await api(`/${job.value.id}?filter=${filter.value}`);await refreshHistory()})}
async function discard(){generation++;clearTimeout(timer);await run(async()=>{await api(`/${job.value.id}/discard`,{});job.value=null;await refreshHistory()})}
async function decide(pair,decision,preferredId=0){
 generation++;clearTimeout(timer)
 await run(async()=>{await api(`/${job.value.id}/pairs/${pair.id}`,{signature:pair.signature,decision,preferredId});message.value=t('library','Review saved. Your files and catalogue metadata were not changed.');job.value=await api(`/${job.value.id}?page=${job.value.page}&filter=${filter.value}`);schedule()})
}
onMounted(()=>run(refreshHistory));onBeforeUnmount(()=>{alive=false;generation++;clearTimeout(timer)})
</script>
<template>
 <section class="library-duplicates" :aria-label="t('library','Possible duplicates')" :aria-busy="busy?'true':'false'">
  <a :href="reviewUrl">← {{ t('library','Review') }}</a>
  <h1><LabelHelp :text="t('library','Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.')">{{ t('library','Possible duplicates') }}</LabelHelp></h1>
  <DuplicateSuggestionSettings :request-token="requestToken" />
  <DuplicateSuggestions v-if="selectedBookId" :item-id="selectedBookId" :compare-id="selectedCompareId" :request-token="requestToken" full />
  <p v-if="error" role="alert">{{ error }}</p><p v-if="message" role="status">{{ message }}</p>
  <form class="library-duplicate-toolbar" @submit.prevent="start">
   <label>{{ t('library','Library root') }}<select v-model="rootId" :disabled="busy||active"><option value="0">{{ t('library','All library roots') }}</option><option v-for="root in roots" :key="root.id" :value="String(root.id)">{{ root.label }}</option></select></label>
   <label class="library-duplicate-checkbox"><input v-model="contents" type="checkbox" :disabled="busy||active"><LabelHelp :text="t('library','Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.')">{{ t('library','Compare file contents') }}</LabelHelp></label>
   <button class="button primary" :disabled="busy||active||!roots.length">{{ t('library','Find possible duplicates') }}</button>
  </form>
  <label><LabelHelp :text="t('library','Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.')">{{ t('library','Saved duplicate scans') }}</LabelHelp><select :value="job?.id||''" :disabled="busy" @change="selectHistory"><option value="">{{ t('library','Choose a scan') }}</option><option v-for="entry in history" :key="entry.id" :value="entry.id">{{ new Date(Number(entry.created_at)*1000).toLocaleString() }} · {{ stateLabels[entry.status] }}</option></select></label>
  <template v-if="job">
   <section class="library-duplicate-progress" :aria-label="t('library','Duplicate scan progress')">
    <strong>{{ job.rootId ? job.label : t('library','All library roots') }}</strong>
    <p role="status">{{ stateLabels[job.status] }}<template v-if="active"> · {{ job.phase==='index' ? t('library','Indexing metadata') : t('library','Comparing candidates') }}</template> · {{ job.processed }}/{{ job.total }}</p>
    <progress v-if="active" :value="job.phase==='index'?job.processed:undefined" :max="Math.max(job.total,1)" :aria-label="t('library','Duplicate scan progress')" />
    <p>{{ t('library','Possible matches') }}: {{ job.matches }} · {{ t('library','Comparisons checked') }}: {{ job.examined }}</p>
    <p v-if="job.hashSkipped||job.unavailable" role="status">{{ t('library','Content checks skipped') }}: {{ job.hashSkipped }} · {{ t('library','Unavailable books') }}: {{ job.unavailable }}</p>
    <p v-if="job.status==='limited'" role="alert">{{ t('library','These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.') }}</p>
    <p v-if="job.status==='failed'" role="alert">{{ t('library','The scan stopped before completion. Its results are partial. Refresh or start a new scan.') }}</p>
    <div class="library-duplicate-actions"><button v-if="active" class="button secondary" :disabled="busy" @click="cancel">{{ t('library','Cancel scan') }}</button><button class="button secondary" :disabled="busy" @click="open(job.id,job.page)">{{ t('library','Refresh results') }}</button><button class="button secondary" :disabled="busy||active" @click="discard">{{ t('library','Discard scan') }}</button></div>
   </section>
   <label>{{ t('library','Show comparisons') }}<select v-model="filter" :disabled="busy" @change="open(job.id)"><option value="all">{{ t('library','All') }} ({{ job.matches }})</option><option v-for="(label,key) in choices" :key="key" :value="key">{{ label }} ({{ job.counts[key]||0 }})</option></select></label>
   <p v-if="!job.pairs.length&&!active" role="status">{{ t('library','No comparisons in this view.') }}</p>
   <article v-for="pair in job.pairs" :key="pair.id" class="library-duplicate-pair" :data-pair-id="pair.id">
    <p v-if="pair.unavailable" role="status">{{ t('library','These books are no longer available. Start a new scan.') }}</p>
    <template v-else>
     <header><h2>{{ pair.reasons.includes('identical') ? t('library','Identical file contents') : t('library','Possible duplicates') }}</h2><span class="library-duplicate-decision">{{ choices[pair.decision] }}</span></header>
     <ul class="library-duplicate-reasons" :aria-label="t('library','Why these books match')"><li v-for="reason in pair.reasons" :key="reason">{{ reasons[reason] }}</li></ul>
     <ul v-if="pair.flags.length" class="library-duplicate-flags" :aria-label="t('library','Differences to review')"><li v-for="flag in pair.flags" :key="flag">{{ flags[flag] }}</li></ul>
     <p v-if="pair.stale" role="alert">{{ t('library','These books changed after the scan. Run a new scan before reviewing this comparison.') }}</p>
     <div class="library-duplicate-books">
      <section v-for="book in pair.books" :key="book.id" class="library-duplicate-book" :class="{'library-duplicate-preferred':pair.preferredId===book.id}">
       <div class="library-duplicate-book-heading"><img :src="book.coverUrl" alt="" loading="lazy"><div><h3 dir="auto">{{ book.title }}</h3><p dir="auto">{{ book.authors.join('; ')||'—' }}</p><strong v-if="pair.preferredId===book.id">{{ t('library','Preferred copy') }}</strong></div></div>
       <dl><div><dt>{{ t('library','Format') }}</dt><dd>{{ book.format.toUpperCase() }} · {{ size(book.size) }}</dd></div><div><dt>{{ t('library','Language') }}</dt><dd>{{ book.language||'—' }}</dd></div><div><dt>{{ t('library','Publication date') }}</dt><dd>{{ book.publicationDate||'—' }}</dd></div><div><dt>{{ t('library','Publisher') }}</dt><dd dir="auto">{{ book.publisher||'—' }}</dd></div><div><dt>{{ t('library','ISBN') }}</dt><dd dir="ltr">{{ book.isbn.join(', ')||'—' }}</dd></div><div><dt>{{ t('library','Location') }}</dt><dd dir="auto">{{ book.path }}</dd></div></dl>
       <div class="library-duplicate-actions"><a class="button secondary" :href="book.openUrl">{{ t('library','Open') }}</a><a class="button secondary" :href="book.detailsUrl">{{ t('library','Details') }}</a><button class="button primary" :disabled="busy||active||pair.stale" @click="decide(pair,'preferred',book.id)">{{ t('library','Prefer this copy') }}</button></div>
      </section>
     </div>
     <div class="library-duplicate-actions"><button class="button secondary" :disabled="busy||active||pair.stale" @click="decide(pair,'keep')">{{ t('library','Keep both') }}</button><button class="button secondary" :disabled="busy||active||pair.stale" @click="decide(pair,'dismissed')">{{ t('library','Dismiss match') }}</button><button v-if="pair.decision!=='unreviewed'" class="button secondary" :disabled="busy||active||pair.stale" @click="decide(pair,'unreviewed')">{{ t('library','Reset review decision') }}</button></div>
    </template>
   </article>
   <nav class="library-duplicate-actions" :aria-label="t('library','Duplicate comparison pages')"><button class="button secondary" :disabled="busy||job.page===1" @click="open(job.id,job.page-1)">{{ t('library','Previous page') }}</button><span>{{ job.page }}</span><button class="button secondary" :disabled="busy||!job.hasNext" @click="open(job.id,job.page+1)">{{ t('library','Next page') }}</button></nav>
  </template>
 </section>
</template>
<style>
.library-duplicates { max-width:1200px; margin:auto; padding:48px 24px 24px; }
.library-duplicates h1 { font-size:26px; margin-block:16px; }
.library-duplicates h2 { font-size:20px; font-weight:bold; }
.library-duplicates h3 { font-size:17px; font-weight:bold; overflow-wrap:anywhere; }
.library-duplicates label { display:grid; gap:6px; }
.library-duplicates select { width:100%; min-width:0; }
.library-duplicate-toolbar,.library-duplicate-actions { display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin-block:16px; }
.library-duplicate-toolbar>label:first-child { flex:1 1 230px; }
.library-duplicates .library-duplicate-checkbox { display:flex; align-items:center; }
.library-duplicate-progress { margin-block:20px; padding:16px; border:1px solid var(--color-border); border-radius:12px; }
.library-duplicate-progress progress { width:100%; }
.library-duplicate-pair { border:1px solid var(--color-border); border-radius:12px; margin-block:20px; padding:20px; }
.library-duplicate-pair>header { display:flex; flex-wrap:wrap; align-items:center; gap:12px; }
.library-duplicate-reasons,.library-duplicate-flags { display:flex; flex-wrap:wrap; gap:8px; margin-block:12px; list-style:none; }
.library-duplicate-reasons li,.library-duplicate-flags li,.library-duplicate-decision { padding:4px 8px; border-radius:8px; background:var(--color-background-hover); }
.library-duplicate-flags li { border:1px solid var(--color-warning); }
.library-duplicate-books { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
.library-duplicate-book { min-width:0; padding:16px; border:2px solid var(--color-border); border-radius:10px; }
.library-duplicate-preferred { border-color:var(--color-primary-element); }
.library-duplicate-book-heading { display:flex; align-items:start; gap:12px; margin-bottom:16px; }
.library-duplicate-book-heading>div { min-width:0; overflow-wrap:anywhere; }
.library-duplicate-book img { width:64px; height:88px; object-fit:contain; flex:none; }
.library-duplicate-book dl>div { display:grid; grid-template-columns:100px minmax(0,1fr); gap:10px; margin-block:8px; }
.library-duplicate-book dt,.library-duplicate-book dd { float:none; padding:0; margin:0; width:auto; text-align:start; overflow-wrap:anywhere; }
.library-duplicate-book dt { font-weight:bold; white-space:normal; min-width:0; }
@media(max-width:850px){.library-duplicate-books{grid-template-columns:minmax(0,1fr)}}
@media(max-width:600px){.library-duplicates{padding:48px 12px 12px}.library-duplicate-pair{padding:12px}.library-duplicate-book{padding:12px}.library-duplicate-book dl>div{grid-template-columns:100px minmax(0,1fr)}}
</style>
