import { afterEach,expect,it,vi } from 'vitest'
import { mount,flushPromises,enableAutoUnmount } from '@vue/test-utils'
import { ref } from 'vue'
import { useDuplicateSuggestions } from './duplicate-suggestions.js'
vi.mock('@nextcloud/router',()=>({generateUrl:path=>path}))
enableAutoUnmount(afterEach);afterEach(()=>{vi.useRealTimers();vi.unstubAllGlobals()})
function harness(ids,enabled){return mount({setup(){return useDuplicateSuggestions(ids,enabled,ref('csrf'))},template:'<div>{{ status }} {{ results }}</div>'})}
it('makes one batched, bounded POST for a visible page and none when disabled',async()=>{
 vi.useFakeTimers();const fetch=vi.fn().mockResolvedValue({ok:true,json:async()=>({enabled:true,status:'ready',items:{1:{count:2}}})});vi.stubGlobal('fetch',fetch)
 const ids=ref(Array.from({length:100},(_,i)=>i+1)),enabled=ref(false);const w=harness(ids,enabled);await vi.advanceTimersByTimeAsync(500);expect(fetch).not.toHaveBeenCalled()
 enabled.value=true;await flushPromises();await vi.advanceTimersByTimeAsync(250);expect(fetch).toHaveBeenCalledTimes(1);expect(JSON.parse(fetch.mock.calls[0][1].body).itemIds).toHaveLength(100);expect(fetch.mock.calls[0][1].headers.requesttoken).toBe('csrf');expect(w.text()).toContain('ready')
})
it('ignores a late previous-page response and aborts on unmount',async()=>{
 vi.useFakeTimers();let resolve;const fetch=vi.fn().mockImplementationOnce(()=>new Promise(r=>{resolve=r})).mockResolvedValue({ok:true,json:async()=>({enabled:true,status:'ready',items:{2:{count:3}}})});vi.stubGlobal('fetch',fetch)
 const ids=ref([1]);const w=harness(ids,ref(true));await vi.advanceTimersByTimeAsync(250);ids.value=[2];await flushPromises();await vi.advanceTimersByTimeAsync(250);resolve({ok:true,json:async()=>({enabled:true,status:'ready',items:{1:{count:9}}})});await flushPromises();expect(w.vm.results).toEqual({2:{count:3}});w.unmount();expect(fetch.mock.calls.at(-1)[1].signal.aborted).toBe(true)
})
it('reports incomplete and failed checks without asserting no duplicates',async()=>{
 vi.useFakeTimers();const fetch=vi.fn().mockResolvedValueOnce({ok:true,json:async()=>({enabled:true,status:'building',items:{1:{status:'partial',count:0}}})}).mockResolvedValueOnce({ok:false});vi.stubGlobal('fetch',fetch);const ids=ref([1]);const w=harness(ids,ref(true));await vi.advanceTimersByTimeAsync(250);expect(w.vm.status).toBe('building');ids.value=[2];await flushPromises();await vi.advanceTimersByTimeAsync(250);expect(w.vm.status).toBe('error');expect(w.vm.results).toEqual({})
})
