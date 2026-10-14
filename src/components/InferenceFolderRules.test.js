import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import InferenceFolderRules from './InferenceFolderRules.vue'
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
const response = data => ({ ok: true, json: async () => data })
const definition = { id:'a',name:'My rule',pattern:'%title%' }
const entry = { id:'b',folder:'Fiction',recursive:true,available:true,definition }
it('assigns only the loaded scope with explicit recursion and CSRF', async () => {
 const fetch=vi.fn().mockResolvedValueOnce(response({patterns:[definition]})).mockResolvedValueOnce(response({assignments:[]})).mockResolvedValueOnce(response({id:'b'})).mockResolvedValueOnce(response({patterns:[definition]})).mockResolvedValueOnce(response({assignments:[entry]}))
 vi.stubGlobal('fetch',fetch)
 const loaded=vi.fn(),w=mount(InferenceFolderRules,{props:{rootId:'65',folder:'Fiction',requestToken:'csrf',onLoaded:loaded}})
 await flushPromises();await w.get('select').setValue('a');await w.get('input[type=checkbox]').setValue(false);await w.get('form').trigger('submit');await flushPromises()
 expect(JSON.parse(fetch.mock.calls[2][1].body)).toEqual({rootId:'65',folder:'Fiction',recursive:false,definitionId:'a'})
 expect(fetch.mock.calls[2][1].headers.requesttoken).toBe('csrf');expect(loaded.mock.lastCall[0].assignments).toEqual([entry])
})
it('requires confirmation before removing an assignment',async()=>{
 const fetch=vi.fn().mockResolvedValueOnce(response({patterns:[definition]})).mockResolvedValueOnce(response({assignments:[entry]}))
 vi.stubGlobal('fetch',fetch)
 const w=mount(InferenceFolderRules,{props:{rootId:'65'}});await flushPromises()
 const button=text=>w.findAll('button').find(b=>b.text()===text)
 await button('Remove assignment').trigger('click');expect(fetch).toHaveBeenCalledTimes(2)
 await button('Cancel').trigger('click');expect(fetch).toHaveBeenCalledTimes(2)
 await button('Remove assignment').trigger('click')
 fetch.mockResolvedValueOnce(response({deleted:true})).mockResolvedValueOnce(response({patterns:[definition]})).mockResolvedValueOnce(response({assignments:[]}))
 await button('Confirm removal').trigger('click');await flushPromises()
 expect(fetch.mock.calls[2][0]).toBe('/apps/library/api/inference/folders/b/delete');expect(w.findAll('.library-inference-folder-entry')).toHaveLength(0)
})
it('discards delayed responses after changing roots',async()=>{
 let oldResolve
 const old=new Promise(resolve=>{oldResolve=resolve})
 const fetch=vi.fn().mockResolvedValueOnce(response({patterns:[definition]})).mockReturnValueOnce(old).mockResolvedValueOnce(response({patterns:[]})).mockResolvedValueOnce(response({assignments:[]}))
 vi.stubGlobal('fetch',fetch);const loaded=vi.fn()
 const w=mount(InferenceFolderRules,{props:{rootId:'65',onLoaded:loaded}})
 await w.setProps({rootId:'55'});await flushPromises();oldResolve(response({assignments:[entry]}));await flushPromises()
 expect(w.findAll('.library-inference-folder-entry')).toHaveLength(0)
 expect(loaded.mock.lastCall[0]).toEqual({rootId:'55',assignments:[]})
})
it('shows errors without retaining old rules for evaluation',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:false,status:404}))
 const loaded=vi.fn(),w=mount(InferenceFolderRules,{props:{rootId:'65',onLoaded:loaded}});await flushPromises()
 expect(w.get('[role=alert]').text()).toContain('unavailable')
 expect(loaded.mock.lastCall[0].assignments).toEqual([])
})

it('blocks assignments while the folder input differs from the loaded scope',async()=>{
 const fetch=vi.fn().mockResolvedValueOnce(response({patterns:[definition]})).mockResolvedValueOnce(response({assignments:[]}))
 vi.stubGlobal('fetch',fetch)
 const w=mount(InferenceFolderRules,{props:{rootId:'65',folder:'Fiction',scopePending:true}});await flushPromises()
 await w.get('select').setValue('a');await w.get('form').trigger('submit');await flushPromises()
 expect(fetch).toHaveBeenCalledTimes(2)
 expect(w.findAll('button').find(b=>b.text()==='Assign to this folder').attributes('disabled')).toBeDefined()
 expect(w.get('[role=status]').text()).toBe('Load the folder before assigning a rule.')
})
