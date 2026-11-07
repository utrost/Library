import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import MetadataLookup from './MetadataLookup.vue'
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
const response = data => ({ ok: true, json: async () => data })
async function compare(edition, language = '', onStage = vi.fn()) {
  const fetch = vi.fn().mockResolvedValueOnce(response({ results: [{ editionId: 'OL1M', title: 'Example' }] })).mockResolvedValueOnce(response(edition))
  vi.stubGlobal('fetch', fetch)
  const wrapper = mount(MetadataLookup, { attachTo: document.body, props: { onStage, item: { id: 1, title: 'Example' }, draft: { language, identifiers: [] }, baseUrl: '/apps/library', requestToken: 'fixture-token' } })
  wrapper.get('details').element.open = true
  expect(fetch).not.toHaveBeenCalled()
  await wrapper.get('form').trigger('submit'); await flushPromises()
  await wrapper.get('.library-metadata-lookup-results button').trigger('click'); await flushPromises()
  return wrapper
}
it('shows raw language evidence and normalized comparison, staging only after approval', async () => {
  const staged = vi.fn()
  const wrapper = await compare({ editionId: 'OL1M', url: 'https://openlibrary.org/books/OL1M', fields: { language: 'de; en' }, languages: ['ger', 'eng'] }, 'fr; en', staged)
  expect(wrapper.text()).toContain('ger, eng')
  expect(wrapper.get('.library-metadata-lookup-field').text()).toContain('fr; en')
  expect(wrapper.get('.library-metadata-lookup-field').text()).toContain('de; en')
  expect(staged).not.toHaveBeenCalled()
  await wrapper.get('input[type=checkbox]').setValue(true)
  await wrapper.findAll('button').find(button => button.text() === 'Stage selected details').trigger('click')
  expect(staged).toHaveBeenCalledExactlyOnceWith({ language: 'de; en' })
})
it('retains unsupported language evidence without offering an editable field', async () => {
  const staged = vi.fn()
  const wrapper = await compare({ editionId: 'OL1M', fields: {}, languages: ['3ng'] }, '', staged)
  expect(wrapper.text()).toContain('3ng')
  expect(wrapper.text()).toContain('Unrecognized language evidence')
  expect(wrapper.find('input[type=checkbox]').exists()).toBe(false)
  expect(staged).not.toHaveBeenCalled()
})
