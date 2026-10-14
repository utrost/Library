import { afterEach, expect, it, vi } from 'vitest'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import InferencePatterns from './InferencePatterns.vue'
import { newRule } from '../path-inference-rule.js'
vi.mock('@nextcloud/router', () => ({ generateUrl: path => path }))
enableAutoUnmount(afterEach)
afterEach(() => vi.unstubAllGlobals())
const response = data => ({ ok: true, json: async () => data })
it('restores a private guided rule immediately as an independent draft', async () => {
  const rule = newRule('author/title.epub')
  rule.parts[0].field = 'author'; rule.combineAuthors = true
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response({ patterns: [{ id: 'a', kind: 'guided', name: 'Authors', rule }, { id: 'b', name: 'Advanced', pattern: '%title%' }] })))
  const choose = vi.fn()
  const wrapper = mount(InferencePatterns, { props: { mode: 'guided', rule: newRule('title.epub'), onChooseRule: choose } })
  await flushPromises()
  expect(wrapper.findAll('option').map(o => o.text())).toEqual(['Custom rule', 'Authors'])
  await wrapper.get('select').setValue('a')
  const chosen = choose.mock.calls[0][0]
  expect(chosen).toEqual(rule)
  chosen.parts[0].field = 'ignore'
  expect(rule.parts[0].field).toBe('author')
})
it('saves the complete guided rule with CSRF and clears selection when edited', async () => {
  const rule = newRule('Book.epub')
  const fetch = vi.fn().mockResolvedValueOnce(response({ patterns: [] })).mockResolvedValueOnce(response({ saved: { id: 'a', kind: 'guided', name: 'My rule', rule: structuredClone(rule) } }))
  vi.stubGlobal('fetch', fetch)
  const wrapper = mount(InferencePatterns, { props: { mode: 'guided', rule, requestToken: 'csrf' } })
  await flushPromises(); await wrapper.get('input').setValue('My rule'); await wrapper.get('form').trigger('submit'); await flushPromises()
  expect(JSON.parse(fetch.mock.calls[1][1].body)).toEqual({ name: 'My rule', kind: 'guided', rule })
  expect(fetch.mock.calls[1][1].headers.requesttoken).toBe('csrf')
  expect(wrapper.get('select').element.value).toBe('a')
  await wrapper.setProps({ rule: { ...rule, combineAuthors: true } })
  expect(wrapper.get('select').element.value).toBe('')
})
it('keeps existing advanced definitions available and hides guided ones in advanced mode', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response({ patterns: [{ id: 'a', name: 'Legacy advanced', pattern: '%title%' }, { id: 'b', kind: 'guided', name: 'Guided', rule: newRule('x.epub') }] })))
  const wrapper = mount(InferencePatterns, { props: { pattern: '%title%' } }); await flushPromises()
  expect(wrapper.get('select').element.value).toBe('a')
  expect(wrapper.findAll('option').some(o => o.text() === 'Guided')).toBe(false)
})
