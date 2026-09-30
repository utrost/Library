import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import InferenceApply from './InferenceApply.vue'
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
const response = data => ({ ok:true,json:async()=>data })
const results=[{id:1,path:'Books/01_Title.epub',revision:'r',status:'conflict',changes:[{field:'seriesNumber',before:'',value:'01',status:'ready'},{field:'title',before:'Old',value:'New',status:'conflict'},{field:'author',before:'',value:'Joe',status:'ready'}]}]
const props={results,labels:{seriesNumber:'Part in series',title:'Title',author:'Authors'},requestToken:'csrf',context:'pattern'}
it('selects only empty supported fields; replacements are opt-in and authors retain ordered arrays',async()=>{
 const fetch=vi.fn().mockResolvedValue(response({batches:[]}));vi.stubGlobal('fetch',fetch)
 const wrapper=mount(InferenceApply,{props});await flushPromises()
 expect(wrapper.findAll('input[type=checkbox]')).toHaveLength(3)
 await wrapper.findAll('button').find(b=>b.text()==='Select empty fields').trigger('click')
 expect(wrapper.findAll('input').map(i=>i.element.checked)).toEqual([true,false,true])
 fetch.mockResolvedValueOnce(response({id:'p',status:'prepared',entries:[],expiresAt:1}))
 await wrapper.findAll('button').find(b=>b.text().startsWith('Review selected changes')).trigger('click');await flushPromises()
 expect(JSON.parse(fetch.mock.calls[1][1].body).proposals).toEqual([{id:1,revision:'r',changes:{seriesNumber:'01',author:['Joe']}}])
 expect(fetch.mock.calls[1][1].headers.requesttoken).toBe('csrf')
 expect(wrapper.text()).toContain('Apply reviewed changes')
 await wrapper.findAll('input')[1].setValue(true);expect(wrapper.text()).not.toContain('Apply reviewed changes')
 await wrapper.setProps({context:'changed rule'});expect(wrapper.findAll('input').every(i=>!i.element.checked)).toBe(true)
})
it('shows stale conflicts without claiming success',async()=>{
 const fetch=vi.fn().mockResolvedValueOnce(response({batches:[]})).mockResolvedValue({ok:false,status:409,json:async()=>({error:'stale_preview'})});vi.stubGlobal('fetch',fetch)
 const wrapper=mount(InferenceApply,{props});await flushPromises()
 await wrapper.findAll('button').find(b=>b.text()==='Select empty fields').trigger('click')
 await wrapper.findAll('button').find(b=>b.text().startsWith('Review selected changes')).trigger('click');await flushPromises()
 expect(wrapper.get('[role=alert]').text()).toContain('stale or expired');expect(wrapper.emitted('changed')).toBeUndefined()
})
