// Keep equivalent path, provider and organisation fields together in all approval screens.
const order = [
  ['title'], ['subtitle'], ['authors', 'author', 'creators'], ['series'], ['part', 'seriesNumber'],
  ['genres', 'genre'], ['publisher'], ['publicationDate', 'year'], ['language'], ['subjects', 'subject'],
  ['classifications'], ['description'], ['identifiers', 'isbn', 'ggkey'], ['cover'],
]
function rank(row) {
  const key = (row.key || row.field).split(':')[0]
  const index = order.findIndex(fields => fields.includes(key))
  return index < 0 ? order.length : index
}
export function reviewOrder(rows) {
  return [...rows].sort((a, b) => rank(a) - rank(b))
}
