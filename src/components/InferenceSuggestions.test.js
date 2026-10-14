import { afterEach, expect, it, vi } from 'vitest'
import { mount, enableAutoUnmount } from '@vue/test-utils'
import InferenceSuggestions from './InferenceSuggestions.vue'
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
it('selection immediately emits an editable rule without a network write', async () => {
  const fetch = vi.fn(); vi.stubGlobal('fetch', fetch)
  const path = 'Abercrombie, Joe/Title (2020).epub', choose = vi.fn()
  const wrapper = mount(InferenceSuggestions, { props: { path, sample: [{ path }], onChoose: choose } })
  expect(choose).not.toHaveBeenCalled()
  await wrapper.get('select').setValue('detected')
  const rule = choose.mock.calls[0][0]
  expect(rule.parts[0].field).toBe('author')
  expect(wrapper.text()).toContain('commas are preserved')
  expect(wrapper.text()).toContain('1 of 1')
  await wrapper.setProps({ rule })
  expect(wrapper.get('select').element.value).toBe('detected')
  expect(fetch).not.toHaveBeenCalled()
  await wrapper.setProps({ rule: { ...rule, combineAuthors: true } })
  expect(wrapper.get('select').element.value).toBe('')
})
it('changing examples clears the suggestion choice without changing the active rule', async () => {
  const choose = vi.fn()
  const wrapper = mount(InferenceSuggestions, { props: { path: 'Title by Ada Quill.epub', onChoose: choose } })
  await wrapper.get('select').setValue('detected')
  await wrapper.setProps({ path: '1984.epub' })
  expect(wrapper.get('select').element.value).toBe('')
  expect(choose).toHaveBeenCalledTimes(1)
  expect(wrapper.findAll('option')).toHaveLength(2)
})
