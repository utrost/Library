import { ref, watch, onBeforeUnmount } from 'vue'
import { generateUrl } from '@nextcloud/router'
export function useDuplicateSuggestions(ids,enabled,requestToken){
 const results=ref({}),status=ref('idle');let timer,controller,generation=0
 watch([ids,enabled],()=>{
  clearTimeout(timer);controller?.abort();const current=++generation;results.value={};status.value=enabled.value?'pending':'disabled'
  if(!enabled.value||!ids.value.length)return
  timer=setTimeout(async()=>{
   controller=new AbortController()
   try{const response=await fetch(generateUrl('/apps/library/api/duplicate-suggestions/lookup'),{method:'POST',credentials:'same-origin',cache:'no-store',signal:controller.signal,headers:{'Content-Type':'application/json',requesttoken:requestToken.value},body:JSON.stringify({itemIds:ids.value.slice(0,100)})});if(!response.ok)throw new Error('lookup_failed');const data=await response.json();if(current!==generation)return;results.value=data.items||{};status.value=data.enabled?data.status:'disabled'}catch(e){if(current===generation&&e.name!=='AbortError')status.value='error'}
  },250)
 },{immediate:true})
 onBeforeUnmount(()=>{generation++;clearTimeout(timer);controller?.abort()})
 return {results,status}
}
