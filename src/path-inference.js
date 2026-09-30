// Bounded, literal matching. Patterns are never evaluated as regular expressions.
export const inferenceFields = ['title', 'subtitle', 'author', 'series', 'seriesNumber', 'language', 'publisher', 'subject', 'year', 'genre']
const tokens = new Set([...inferenceFields, 'ignore', 'folder', 'folders', 'extension'])

export function inferPath(path, pattern, current = {}) {
  if (!pattern || pattern.length > 1000 || path.length > 2000) return { status: 'invalid', reason: 'pattern', changes: [] }
  if (/%folders?%(?!\/)/.test(pattern)) return { status: 'invalid', reason: 'pattern', changes: [] }
  const tokenKey = (part) => part === '%folders%/' ? 'folders' : part.slice(1, -1)
  const parts = pattern.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean)
  if (parts.some((part) => part.includes('%') && !tokens.has(tokenKey(part))) || parts.filter((p) => p.startsWith('%')).length > 16) return { status: 'invalid', reason: 'pattern', changes: [] }
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(pattern)) return { status: 'invalid', reason: 'delimiter', changes: [] }
  let steps = 0
  let exhausted = false
  const matches = []
  function visit(index, offset, captures) {
    if (++steps > 5000) { exhausted = true; return }
    if (matches.length > 1) return
    if (index === parts.length) { if (offset === path.length) matches.push(captures); return }
    const part = parts[index]
    if (!part.startsWith('%')) {
      if (path.startsWith(part, offset)) visit(index + 1, offset + part.length, captures)
      return
    }
    const key = tokenKey(part)
    if (key === 'folders') {
      // A whole-folder wildcard includes its following slash, and may consume zero folders.
      visit(index + 1, offset, captures)
      for (let end = offset; end < path.length && !exhausted && matches.length < 2; end++) if (path[end] === '/') visit(index + 1, end + 1, captures)
      return
    }
    const stop = path.indexOf('/', offset)
    const limit = stop < 0 ? path.length : stop
    for (let end = offset + 1; end <= limit && !exhausted && matches.length < 2; end++) {
      const raw = path.slice(offset, end)
      if (key === 'folder' && end !== limit) continue
      if (key === 'extension' && !/^[A-Za-z0-9]{1,12}$/.test(raw)) continue
      visit(index + 1, end, [...captures, { key, raw }])
    }
  }
  visit(0, 0, [])
  if (exhausted || matches.length > 1) return { status: 'ambiguous', changes: [] }
  if (!matches.length) return { status: 'unmatched', changes: [] }
  const seen = new Map()
  const changes = []
  for (const { key, raw } of matches[0]) {
    if (!inferenceFields.includes(key)) continue
    let value = raw.trim()
    if (seen.has(key) && seen.get(key) !== value) return { status: 'ambiguous', changes: [] }
    if (seen.has(key)) continue
    seen.set(key, value)
    if (key === 'year' && !/^\d{4}$/.test(value)) return { status: 'invalid', reason: 'year', changes: [] }
    if (key === 'language') value = normalizeInferenceLanguage(value)
    if (key === 'language' && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(value)) return { status: 'invalid', reason: 'language', changes: [] }
    if (key === 'author' && [...value].length > 255) return { status: 'invalid', changes: [] }
    if (!validStoredField(key, value)) return { status: 'invalid', changes: [] }
    const before = String(current[key] || '')
    const same = key === 'author' && Array.isArray(current.authors) ? JSON.stringify([value]) === JSON.stringify(current.authors) : before === value
    changes.push({ field: key, raw, value, ...(key === 'author' ? { values: [value] } : {}), before, previewOnly: false, status: same ? 'unchanged' : before.trim() ? 'conflict' : 'ready' })
  }
  return { status: changes.some((c) => c.status === 'conflict') ? 'conflict' : changes.some((c) => c.status === 'ready') ? 'ready' : 'unchanged', changes }
}

export function normalizeInferenceLanguage(value) {
  const normalized = ({ english: 'en', german: 'de', deutsch: 'de', french: 'fr', français: 'fr', arabic: 'ar' })[value.toLowerCase()] || value.toLowerCase()
  return normalized.replace(/^([a-z]{2,3})-([a-z]{2})$/, (_, language, region) => `${language}-${region.toUpperCase()}`)
}

export function validStoredField(field, value) {
  const limits = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 }
  if (!(field in limits)) return true
  return Boolean(value) && [...value].length <= limits[field] && !/[\x00-\x1f\x7f]/.test(value) && (field !== 'year' || Number(value) > 0)
}
