<script setup>
import { computed,ref,watch } from 'vue'
import { t } from '@nextcloud/l10n'
import { generateUrl } from '@nextcloud/router'
import { useDuplicateSuggestions } from '../duplicate-suggestions.js'
const props=defineProps({itemId:Number,requestToken:String,enabled:{type:Boolean,default:true},compareId:{type:Number,default:0},full:{type:Boolean,default:false}})
const version=ref(0),ids=computed(()=>{version.value;return props.itemId?[props.itemId]:[]}),enabled=computed(()=>props.enabled),token=computed(()=>props.requestToken)
const {results,status}=useDuplicateSuggestions(ids,enabled,token)
const entry=computed(()=>results.value[props.itemId]),pair=ref(null),busy=ref(false),error=ref(''),saved=ref(false)
const flags={formats:t('library','Alternative formats'),languages:t('library','Different languages'),years:t('library','Different publication years'),publishers:t('library','Different publishers'),identifiers:t('library','Different ISBNs')}
let generation=0
async function api(path,body){const response=await fetch(generateUrl('/apps/library/api/duplicate-suggestions'+path),{credentials:'same-origin',cache:'no-store',method:body?'POST':'GET',headers:{'Content-Type':'application/json',requesttoken:props.requestToken},...(body?{body:JSON.stringify(body)}:{})});if(!response.ok)throw new Error(response.status===409?t('library','These books changed after the scan. Run a new scan before reviewing this comparison.'):t('library','Could not complete the duplicate review. Please try again.'));return response.json()}
async function compare(id){const current=++generation;busy.value=true;error.value='';saved.value=false;try{const data=await api(`/compare/${props.itemId}/${id}`);if(current===generation)pair.value=data}catch(e){if(current===generation)error.value=e.message}finally{if(current===generation)busy.value=false}}
async function decide(decision,preferredId=0){busy.value=true;error.value='';try{await api(`/compare/${pair.value.books[0].id}/${pair.value.books[1].id}`,{signature:pair.value.signature,decision,preferredId});saved.value=true;version.value++;pair.value=null}catch(e){error.value=e.message}finally{busy.value=false}}
watch(()=>[props.itemId,props.compareId],()=>{generation++;pair.value=null;if(props.full&&props.compareId)compare(props.compareId)},{immediate:true})
</script>
<template>
 <section class="library-duplicate-suggestions" :aria-label="t('library','Possible duplicates')" :aria-busy="busy?'true':'false'">
  <h3>{{ t('library','Possible duplicates') }}</h3>
  <p v-if="status==='pending'" role="status">{{ t('library','Checking possible duplicates') }}</p>
  <p v-if="status==='error'||error" role="alert">{{ error||t('library','Could not complete the duplicate review. Please try again.') }}</p>
  <p v-if="status==='building'||entry?.status==='partial'" role="status">{{ t('library','Suggestions are incomplete while indexing or when candidate limits are reached.') }}</p>
  <p v-if="entry?.status==='unavailable'">{{ t('library','These books are no longer available. Start a new scan.') }}</p>
  <p v-if="entry?.status==='checked'&&!entry.count">{{ t('library','No unreviewed suggestions found.') }}</p>
  <p v-if="saved" role="status">{{ t('library','Review saved. Your files and catalogue metadata were not changed.') }}</p>
  <ul v-if="entry?.count&&!pair" class="library-suggestion-list">
   <li v-for="match in entry.matches" :key="match.id"><a v-if="!full" :href="match.url"><bdi>{{ match.title }}</bdi> · {{ match.format.toUpperCase() }}</a><button v-else type="button" class="button secondary" :disabled="busy" @click="compare(match.id)"><bdi>{{ match.title }}</bdi> · {{ match.format.toUpperCase() }}</button></li>
  </ul>
  <template v-if="pair">
   <p v-if="!pair.reasons.length" role="status">{{ t('library','These books no longer match the current metadata rules.') }}</p>
   <ul class="library-suggestion-list"><li v-for="flag in pair.flags" :key="flag">{{ flags[flag] }}</li></ul>
   <div class="library-suggestion-comparison">
    <article v-for="book in pair.books" :key="book.id">
     <img :src="book.coverUrl" alt="" width="64" height="88"><h3><bdi>{{ book.title }}</bdi></h3><p><bdi>{{ book.authors.join('; ') }}</bdi></p>
     <p>{{ book.format.toUpperCase() }} · {{ book.language||'—' }} · {{ book.publicationDate||'—' }}</p><p><bdi>{{ book.publisher }}</bdi></p><p><bdi>{{ book.path }}</bdi></p>
     <div class="library-duplicate-actions"><a class="button secondary" :href="book.detailsUrl">{{ t('library','Details') }}</a><a class="button secondary" :href="book.openUrl">{{ t('library','Open') }}</a><button class="button primary" :disabled="busy" @click="decide('preferred',book.id)">{{ t('library','Prefer this copy') }}</button></div>
    </article>
   </div>
   <div class="library-duplicate-actions"><button class="button secondary" :disabled="busy" @click="decide('keep')">{{ t('library','Keep both') }}</button><button class="button secondary" :disabled="busy" @click="decide('dismissed')">{{ t('library','Dismiss match') }}</button><button class="button secondary" :disabled="busy" @click="decide('unreviewed')">{{ t('library','Reset review decision') }}</button></div>
  </template>
 </section>
</template>
<style>
.library-duplicate-suggestions { margin-block:16px; padding:12px; border:1px solid var(--color-border); border-radius:10px; }
.library-duplicate-suggestions h3 { font-size:16px; font-weight:bold; }
.library-suggestion-list { max-height:20rem;overflow:auto;display:grid; gap:8px; margin-block:12px; list-style:none; }
.library-suggestion-list a,.library-suggestion-list button { white-space:normal; overflow-wrap:anywhere; text-align:start; }
.library-suggestion-comparison { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
.library-suggestion-comparison article { min-width:0; overflow-wrap:anywhere; padding:12px; border:1px solid var(--color-border);border-radius:8px; }
.library-suggestion-comparison img { object-fit:contain; }
@media(max-width:850px){.library-suggestion-comparison{grid-template-columns:minmax(0,1fr)}}
</style>
