import { generateUrl } from '@nextcloud/router'

function originPage(source) {
  if (/^[1-9]\d*$/.test(source.searchParams.get('listId') || '') && source.searchParams.has('lists')) return { kind: 'list', id: source.searchParams.get('listId'), key: 'listPage', size: 25 }
  if (/^[1-9]\d*$/.test(source.searchParams.get('authorId') || '') && source.searchParams.has('authors')) return { kind: 'author', id: source.searchParams.get('authorId'), key: 'bookPage', size: 50 }
  if (/^[1-9]\d*$/.test(source.searchParams.get('seriesId') || '') && source.searchParams.has('series')) return { kind: 'series', id: source.searchParams.get('seriesId'), key: 'bookPage', size: 50 }
  return { kind: 'catalogue', key: 'page', size: Number(source.searchParams.get('limit')) || 100 }
}

function pageUrl(source, descriptor, page, pagination = null, direction = '') {
  const target = new URL(source)
  if (descriptor.kind === 'catalogue' && pagination) {
    const href = direction === 'previous' ? pagination.previousUrl : pagination.nextUrl
    if (href) return new URL(href, source)
  }
  if (page <= 1) target.searchParams.delete(descriptor.key)
  else target.searchParams.set(descriptor.key, String(page))
  target.searchParams.delete('cursor')
  return target
}

async function fetchPage(source, descriptor, signal) {
  const query = new URLSearchParams(source.search)
  let endpoint
  if (descriptor.kind === 'catalogue') endpoint = generateUrl('/apps/library/catalogue')
  else if (descriptor.kind === 'list') { endpoint = generateUrl('/apps/library/api/lists/{id}', { id: descriptor.id }); query.set('page', query.get('listPage') || '1') }
  else {
    endpoint = generateUrl(`/apps/library/api/${descriptor.kind === 'author' ? 'authors' : 'series'}/{id}`, { id: descriptor.id })
    query.set('page', query.get('bookPage') || '1')
    query.set('search', query.get('bookSearch') || '')
    query.set('sort', query.get('bookSort') || (descriptor.kind === 'author' ? 'title' : 'part'))
  }
  const response = await fetch(`${endpoint}?${query}`, { credentials: 'same-origin', cache: 'no-store', signal, headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error('origin_unavailable')
  const data = await response.json()
  const books = descriptor.kind === 'catalogue' ? data.items || [] : descriptor.kind === 'list' ? (data.entries || []).map(entry => entry.book).filter(Boolean) : data.books || []
  const ids = books.map(book => Number(book.id)).filter(id => Number.isSafeInteger(id) && id > 0)
  const titles = new Map(books.map(book => [Number(book.id), String(book.title || '')]))
  const page = Math.max(1, Number(source.searchParams.get(descriptor.key)) || 1)
  const hasNext = descriptor.kind === 'catalogue' ? Boolean(data.cataloguePagination?.nextUrl) : descriptor.kind === 'list' ? page < Number(data.pages || 1) : Boolean(data.hasNext)
  return { ids, titles, page, hasNext, pagination: data.cataloguePagination || null }
}

export async function bookNeighbors(catalogueUrl, returnUrl, itemId, signal) {
  const source = new URL(returnUrl, location.origin)
  const catalogue = new URL(catalogueUrl, location.origin)
  if (source.origin !== catalogue.origin || source.pathname !== catalogue.pathname || source.searchParams.has('details')) return { previous: null, next: null }
  const descriptor = originPage(source)
  const current = await fetchPage(source, descriptor, signal)
  const index = current.ids.indexOf(Number(itemId))
  if (index < 0) return { previous: null, next: null }
  const nearby = async (direction) => {
    const adjacent = index + (direction === 'previous' ? -1 : 1)
    if (current.ids[adjacent]) return { id: current.ids[adjacent], title: current.titles.get(current.ids[adjacent]) || '', returnTo: source.pathname + source.search + source.hash }
    if (direction === 'previous' && current.page <= 1 || direction === 'next' && !current.hasNext) return null
    const targetPage = current.page + (direction === 'previous' ? -1 : 1)
    const targetSource = pageUrl(source, descriptor, targetPage, current.pagination, direction)
    const target = await fetchPage(targetSource, descriptor, signal)
    const id = direction === 'previous' ? target.ids.at(-1) : target.ids[0]
    return id ? { id, title: target.titles.get(id) || '', returnTo: targetSource.pathname + targetSource.search + targetSource.hash } : null
  }
  const [previous, next] = await Promise.all([nearby('previous'), nearby('next')])
  return { previous, next }
}
