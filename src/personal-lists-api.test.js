import { afterEach, expect, it, vi } from 'vitest'
import { listRequest } from './personal-lists-api.js'
afterEach(()=>vi.unstubAllGlobals())
it('coalesces simultaneous list reads without retaining stale results',async()=>{
  let finish
  const fetch=vi.fn().mockImplementationOnce(()=>new Promise(resolve=>{finish=resolve})).mockResolvedValue({ok:true,json:async()=>({lists:[]})})
  vi.stubGlobal('fetch',fetch)
  const a=listRequest(),b=listRequest();expect(fetch).toHaveBeenCalledTimes(1)
  finish({ok:true,json:async()=>({lists:[{id:1}]})})
  expect(await a).toEqual(await b)
  await listRequest();expect(fetch).toHaveBeenCalledTimes(2)
})
it('writes invalidate pending reads and preserve CSRF headers',async()=>{
  const fetch=vi.fn().mockResolvedValue({ok:true,json:async()=>({lists:[]})})
  vi.stubGlobal('fetch',fetch)
  await listRequest('/1/actions','csrf',{action:'note'})
  expect(fetch).toHaveBeenCalledWith(expect.any(String),expect.objectContaining({method:'POST',headers:expect.objectContaining({requesttoken:'csrf'})}))
  await listRequest();expect(fetch).toHaveBeenCalledTimes(2)
})
