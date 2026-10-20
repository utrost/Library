import { generateUrl } from '@nextcloud/router'
/** Keep the current Library view when following a link to a book's full details. */
export function detailsUrlWithReturn(detailsUrl, catalogueUrl, sourceHref) {
  try {
    const source = new URL(sourceHref)
    const catalogue = new URL(catalogueUrl, source)
    const target = new URL(detailsUrl, source)
    if (source.origin !== catalogue.origin || source.pathname !== catalogue.pathname
      || target.origin !== catalogue.origin || target.pathname !== catalogue.pathname
      || !/^[1-9][0-9]*$/.test(target.searchParams.get('details') || '')) return detailsUrl
    if (source.searchParams.has('details')) return detailsUrl
    for (const name of ['item', 'returnTo', 'addToList']) source.searchParams.delete(name)
    target.searchParams.set('returnTo', `${source.pathname}${source.search}${source.hash}`)
    return `${target.pathname}${target.search}${target.hash}`
  } catch { return detailsUrl }
}

/** Reject external, malformed and recursive return destinations from URL parameters. */
export function detailsReturnContext(catalogueUrl, currentHref) {
  const fallback = { url: catalogueUrl, hasSource: false }
  try {
    const current = new URL(currentHref)
    const catalogue = new URL(catalogueUrl, current)
    const values = current.searchParams.getAll('returnTo')
    if (values.length !== 1) return fallback
    const raw = values[0]
    if (!raw.startsWith('/') || raw.startsWith('//') || /[\\\u0000-\u001f\u007f]/.test(raw)) return fallback
    const source = new URL(raw, current.origin)
    if (source.origin !== catalogue.origin || source.pathname !== catalogue.pathname
      || source.searchParams.has('details') || source.searchParams.has('returnTo')
      || source.searchParams.has('item')) return fallback
    return { url: `${source.pathname}${source.search}${source.hash}`, hasSource: source.search !== '' || source.hash !== '' }
  } catch { return fallback }
}

/** Link from any Library view to the canonical book editor, retaining that view. */
export function bookDetailsUrl(catalogueUrl, itemId, sourceHref = window.location.href) {
  return detailsUrlWithReturn(`${catalogueUrl}?details=${encodeURIComponent(itemId)}`, catalogueUrl, sourceHref)
}

export function bookCoverUrl(book) { return generateUrl('/apps/library/items/{id}/cover', { id: book.id }) + '?v=' + encodeURIComponent(`${book.cover_revision || ''}-${book.etag || ''}`) }
