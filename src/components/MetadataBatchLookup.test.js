import { afterEach, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import MetadataBatchLookup from './MetadataBatchLookup.vue'

enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())

it('requires an explicit provider and offers only its applicable fields', async () => {
  const fetch = vi.fn().mockResolvedValueOnce({ ok: true, json: async () => ({
    options: {
      providers: ['openlibrary', 'dnb'], unavailable: { googlebooks: 'key_missing' }, defaultProvider: '', limit: 50,
      fieldsByProvider: { openlibrary: ['title', 'language', 'cover'], dnb: ['title', 'language'] },
    }, jobs: [],
  }) }).mockResolvedValueOnce({ ok: true, json: async () => ({ id: 'a'.repeat(32), status: 'running', rows: [], fields: ['title', 'language'], provider: 'dnb' }) })
  vi.stubGlobal('fetch', fetch)
  const wrapper = mount(MetadataBatchLookup, { props: { itemIds: [7], requestToken: 'fixture-token' } })
  await flushPromises()
  expect(fetch).toHaveBeenCalledTimes(1)
  expect(wrapper.find('fieldset').exists()).toBe(false)
  expect(wrapper.get('button[type=submit]').attributes('disabled')).toBeDefined()
  expect(wrapper.text()).toContain('Google Books needs a server API key')
  await wrapper.get('select').setValue('dnb')
  expect(wrapper.findAll('input[type=checkbox]').map(input => input.attributes('value'))).toEqual(['title', 'language'])
  await wrapper.get('form').trigger('submit')
  await flushPromises()
  expect(fetch).toHaveBeenCalledTimes(2)
  const body = JSON.parse(fetch.mock.calls[1][1].body)
  expect(body).toMatchObject({ ids: [7], provider: 'dnb', policy: 'missing', fields: ['title', 'language'] })
})
