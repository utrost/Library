import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import PossibleDuplicates from './PossibleDuplicates.vue'
vi.mock('@nextcloud/router',()=>({generateUrl:path=>path}))
enableAutoUnmount(afterEach)
afterEach(()=>{vi.useRealTimers();vi.unstubAllGlobals()})
const response=data=>({ok:true,json:async()=>data})
const initial={roots:[{id:1,label:'Books'}],scans:[]},props={requestToken:'csrf',reviewUrl:'/review'}
const book={id:1,title:'Example',authors:['Walter Mitty'],format:'epub',size:100,language:'en',publicationDate:'2011',publisher:'Press',isbn:[],path:'/Books/example.epub'}
const pair={id:'pair',signature:'revision',reasons:['title_author'],flags:['formats'],books:[book,{...book,id:2,format:'pdf'}],decision:'unreviewed',preferredId:0,stale:false}
const job={id:'scan',status:'completed',rootId:1,label:'Books',phase:'compare',processed:2,total:2,matches:1,examined:1,counts:{unreviewed:1},page:1,hasNext:false,pairs:[pair]}
const button=(w,name)=>w.findAll('button').find(b=>b.text()===name)
it('starts read-only discovery with optional contents off and submits explicit preferred book',async()=>{
 const fetch=vi.fn().mockResolvedValue(response(initial));vi.stubGlobal('fetch',fetch)
 const w=mount(PossibleDuplicates,{props,global:{stubs:{DuplicateSuggestionSettings:true}}});await flushPromises();expect(w.get('input[type=checkbox]').element.checked).toBe(false)
 await w.findAll('select')[0].setValue('1');fetch.mockResolvedValueOnce(response(job));await w.get('form').trigger('submit');await flushPromises()
 expect(JSON.parse(fetch.mock.calls.find(([url, options]) => url === '/apps/library/api/duplicates' && options.method === 'POST')[1].body)).toEqual({rootId:1,contents:false});expect(w.text()).toContain('Alternative formats')
 fetch.mockResolvedValueOnce(response({saved:true})).mockResolvedValueOnce(response({...job,pairs:[],counts:{preferred:1}}));await button(w,'Prefer this copy').trigger('click');await flushPromises()
 expect(JSON.parse(fetch.mock.calls.at(-2)[1].body)).toEqual({signature:'revision',decision:'preferred',preferredId:1});expect(w.text()).toContain('Your files and catalogue metadata were not changed')
})
it('prevents stale decisions and reports conflicts from the server',async()=>{
 const fetch=vi.fn().mockResolvedValue(response(initial));vi.stubGlobal('fetch',fetch);const w=mount(PossibleDuplicates,{props,global:{stubs:{DuplicateSuggestionSettings:true}}});await flushPromises()
 fetch.mockResolvedValueOnce(response({...job,pairs:[{...pair,stale:true}]}));await w.get('form').trigger('submit');await flushPromises();expect(button(w,'Keep both').attributes('disabled')).toBeDefined()
 fetch.mockResolvedValueOnce(response(job));await button(w,'Refresh results').trigger('click');await flushPromises()
 fetch.mockResolvedValueOnce({ok:false,status:409,json:async()=>({})});await button(w,'Keep both').trigger('click');await flushPromises();expect(w.get('[role=alert]').text()).toContain('changed after the scan')
})
it('polls background progress and stops after unmount',async()=>{
 vi.useFakeTimers();const fetch=vi.fn().mockResolvedValue(response(initial));vi.stubGlobal('fetch',fetch);const w=mount(PossibleDuplicates,{props,global:{stubs:{DuplicateSuggestionSettings:true}}});await flushPromises()
 fetch.mockResolvedValueOnce(response({...job,status:'running'}));await w.get('form').trigger('submit');await flushPromises();expect(button(w,'Keep both').attributes('disabled')).toBeDefined()
 fetch.mockResolvedValueOnce(response({advanced:true})).mockResolvedValueOnce(response({...job,status:'running'}));await vi.advanceTimersByTimeAsync(1500);expect(fetch.mock.calls.at(-2)[0]).toBe('/apps/library/api/duplicates/scan/advance')
 w.unmount();const n=fetch.mock.calls.length;await vi.advanceTimersByTimeAsync(5000);expect(fetch).toHaveBeenCalledTimes(n)
})
it('reports scan quota without hiding existing scans',async()=>{
 const fetch=vi.fn().mockResolvedValue(response(initial));vi.stubGlobal('fetch',fetch);const w=mount(PossibleDuplicates,{props,global:{stubs:{DuplicateSuggestionSettings:true}}});await flushPromises()
 fetch.mockResolvedValueOnce({ok:false,status:422,json:async()=>({error:'history_limit'})});await w.get('form').trigger('submit');await flushPromises();expect(w.get('[role=alert]').text()).toContain('Discard an old scan')
})
