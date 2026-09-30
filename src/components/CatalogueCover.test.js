import { afterEach, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CatalogueCover from './CatalogueCover.vue'
afterEach(() => vi.unstubAllGlobals())
it('waits for the viewport, disconnects, and resets after replacing a cover', async () => {
  let observe, disconnected = 0
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback) { observe = callback }
    observe() {}
    disconnect() { disconnected++ }
  })
  const wrapper = mount(CatalogueCover, { props: { src: '/first-cover' } })
  expect(wrapper.find('img').attributes('src')).toBeUndefined()
  observe([{ isIntersecting: true }]); await wrapper.vm.$nextTick()
  expect(wrapper.find('img').attributes('src')).toBe('/first-cover')
  expect(wrapper.find('img').attributes('decoding')).toBe('async')
  await wrapper.find('img').trigger('load')
  expect(wrapper.find('.library-cover-loading-shimmer').exists()).toBe(false)
  await wrapper.setProps({ src: '/replacement-cover' })
  expect(wrapper.find('.library-cover-loading-shimmer').exists()).toBe(true)
  await wrapper.find('img').trigger('error')
  expect(wrapper.find('.library-cover-fallback').exists()).toBe(true)
  wrapper.unmount(); expect(disconnected).toBeGreaterThanOrEqual(2)
})
