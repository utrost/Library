import { afterEach, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import HomeDashboard from './HomeDashboard.vue'

const curationRequest = vi.hoisted(() => vi.fn())
vi.mock('../curation-api.js', () => ({ curationRequest }))
enableAutoUnmount(afterEach)
afterEach(() => curationRequest.mockReset())

it('keeps a failed Home request retryable and shows fresh review counts', async () => {
  curationRequest.mockRejectedValueOnce(new Error('offline')).mockResolvedValueOnce({
    rows: { recent: [] }, lists: [], jobs: [], preferences: { widgets: ['recent', 'health'], listId: 0 },
    summary: { at: 100, pending: false, counts: { unidentified: 2, missing: 1, suggestions: 3, duplicates: 4, stalled: 5 } },
    health: { cacheStatus: 'cached', generatedAt: 100, totalFiles: 10, metadataErrorReview: { total: 0 } },
  })
  const wrapper = mount(HomeDashboard, { props: { requestToken: 'fixture-token', settingsUrl: '/settings' } })
  await flushPromises()
  expect(wrapper.get('[role=alert]').text()).toContain('offline')
  await wrapper.get('[role=alert] button').trigger('click')
  await flushPromises()
  expect(wrapper.find('[role=alert]').exists()).toBe(false)
  expect(wrapper.text()).toContain('Possible duplicates (4)')
  expect(wrapper.text()).toContain('Review unfinished organisation jobs (5)')
  expect(curationRequest).toHaveBeenCalledTimes(2)
})
