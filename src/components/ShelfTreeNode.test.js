import { afterEach, describe, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import ShelfTreeNode from './ShelfTreeNode.vue'

enableAutoUnmount(afterEach)

const node = { id: 'root-1', rootId: 1, label: 'Books', path: '/Books', itemCount: 3, hasChildren: true }

describe('ShelfTreeNode lazy pagination', () => {
  it('keeps a partial node loadable and appends the next page', async () => {
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce({ ok: true, json: async () => ({ nodes: [{ id: 'a', rootId: 1, label: 'A', path: '/Books/A', itemCount: 1, hasChildren: false }], hasMore: true, nextOffset: 1 }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ nodes: [{ id: 'b', rootId: 1, label: 'B', path: '/Books/B', itemCount: 2, hasChildren: false }], hasMore: false, nextOffset: 2 }) }))
    const wrapper = mount(ShelfTreeNode, { props: { node, childrenUrl: '/children' } })

    await wrapper.get('.library-shelf-tree-toggle').trigger('click')
    await flushPromises()
    expect(wrapper.text()).toContain('Load more folders')
    await wrapper.get('.library-shelf-tree-load-more').trigger('click')
    await flushPromises()

    expect(fetch.mock.calls[0][0]).toContain('offset=0')
    expect(fetch.mock.calls[1][0]).toContain('offset=1')
    expect(wrapper.text()).toContain('A')
    expect(wrapper.text()).toContain('B')
    expect(wrapper.find('.library-shelf-tree-load-more').exists()).toBe(false)
  })

  it('uses Nextcloud translations for labels and status text', () => {
    const sourceLabels = ['Expand {folder}', 'Collapse {folder}', 'Could not load folders.', 'Load more folders', 'Loading folders…']
    const wrapper = mount(ShelfTreeNode, { props: { node, childrenUrl: '/children' } })
    expect(wrapper.get('.library-shelf-tree-toggle').attributes('aria-label')).toBe('Expand Books')
    expect(sourceLabels).toHaveLength(5)
  })
})
