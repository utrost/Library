import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import LookupCandidates from './LookupCandidates.vue'
enableAutoUnmount(afterEach)
const candidate = (id, extra = {}) => ({ editionId: id, title: `Fixture ${id}`, workId: 'OL1W', url: `https://openlibrary.org/books/${id}`, authors: ['Fixture Author'], isbn: ['9780140328721'], ...extra })
const props = { results: [candidate('OL1M', { match: 'isbn' }), candidate('OL2M', { match: 'isbn_mismatch' })] }

it('retains provider order, marks mismatches and offers one work browser per work', async () => {
  const onEditions = vi.fn(), onChoose = vi.fn()
  const wrapper = mount(LookupCandidates, { props: { ...props, onEditions, onChoose } })
  expect(wrapper.findAll('strong').map(element => element.text())).toEqual(['Fixture OL1M', 'Fixture OL2M'])
  expect(wrapper.text()).toContain('The searched ISBN is not listed for this result')
  const browse = wrapper.findAll('button').filter(button => button.text() === 'Other editions')
  expect(browse).toHaveLength(1)
  await browse[0].trigger('click')
  expect(onEditions).toHaveBeenCalledExactlyOnceWith({ workId: 'OL1W', offset: 0 })
  await wrapper.findAll('button').find(button => button.attributes('aria-label')?.includes('OL2M:')).trigger('click')
  expect(onChoose).toHaveBeenCalledExactlyOnceWith(props.results[1])
})

it('moves keyboard focus to a newly requested edition page and respects page bounds', async () => {
  const onEditions = vi.fn()
  const wrapper = mount(LookupCandidates, { attachTo: document.body, props: { ...props, onEditions } })
  wrapper.findAll('button').find(button => button.text() === 'Other editions').element.focus()
  await wrapper.setProps({ editionPage: { workId: 'OL1W', offset: 0, results: [candidate('OL3M', { match: 'work_edition' })], previousOffset: null, nextOffset: 8, limited: false } })
  await flushPromises()
  expect(document.activeElement).toBe(wrapper.get('h4').element)
  const previous = wrapper.findAll('button').find(button => button.text() === 'Previous editions')
  expect(previous.attributes('disabled')).toBeDefined()
  await wrapper.findAll('button').find(button => button.text() === 'Next editions').trigger('click')
  expect(onEditions).toHaveBeenCalledExactlyOnceWith({ workId: 'OL1W', offset: 8 })
  expect(wrapper.text()).toContain('not a verified match for your book')
  await wrapper.setProps({ disabled: true })
  expect(wrapper.findAll('button').every(button => button.attributes('disabled') !== undefined)).toBe(true)
})

it('does not steal focus from outside the lookup while loading an empty page', async () => {
  const wrapper = mount(LookupCandidates, { attachTo: document.body, props })
  document.body.tabIndex = -1; document.body.focus()
  await wrapper.setProps({ editionPage: { workId: 'OL1W', offset: 192, results: [], previousOffset: 184, nextOffset: null, limited: true } })
  expect(document.activeElement).toBe(document.body)
  expect(wrapper.text()).toContain('No usable editions on this page')
  expect(wrapper.text()).toContain('Edition browsing is limited to 200 entries')
  expect(wrapper.findAll('button').find(button => button.text() === 'Next editions').attributes('disabled')).toBeDefined()
})


it('restores requested keyboard focus when disabling the button temporarily blurs it', async () => {
  const wrapper = mount(LookupCandidates, { attachTo: document.body, props })
  const button = wrapper.findAll('button').find(button => button.text() === 'Other editions')
  button.element.focus(); await button.trigger('click'); await wrapper.setProps({ disabled: true })
  button.element.blur()
  await wrapper.setProps({ disabled: false, editionPage: { workId: 'OL1W', offset: 0, results: [], previousOffset: null, nextOffset: null } })
  await flushPromises()
  expect(document.activeElement).toBe(wrapper.get('h4').element)
})

it('keeps a user-selected external control focused after requesting an edition page', async () => {
  const wrapper = mount(LookupCandidates, { attachTo: document.body, props })
  const external = document.createElement('input'); document.body.append(external)
  try {
    const button = wrapper.findAll('button').find(button => button.text() === 'Other editions')
    button.element.focus(); await button.trigger('click'); external.focus()
    await wrapper.setProps({ editionPage: { workId: 'OL1W', offset: 0, results: [], previousOffset: null, nextOffset: null } })
    await flushPromises()
    expect(document.activeElement).toBe(external)
  } finally { external.remove() }
})
