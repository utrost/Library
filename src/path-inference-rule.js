import { inferenceFields, validStoredField, normalizeInferenceLanguage } from './path-inference.js'

// Structured rules preserve split direction and transformations; no regular expressions from users.
export const ruleFields = [...inferenceFields]
export function pathParts(path) {
  const parts = path.split('/')
  const filename = parts.pop() || ''
  const dot = filename.lastIndexOf('.')
  return [...parts, dot > 0 ? filename.slice(0, dot) : filename]
}
export function newPart(field = 'ignore') {
  return { field, split: null, prefix: '', suffix: '', underscores: false, mapFrom: '', mapTo: '', authorSeparator: '', reverseName: false }
}
export function splitPart(value, delimiter, occurrence) {
  if (!delimiter) return [value]
  if (occurrence === 'every') return value.split(delimiter)
  const index = occurrence === 'last' ? value.lastIndexOf(delimiter) : value.indexOf(delimiter)
  return index < 0 ? [value] : [value.slice(0, index), value.slice(index + delimiter.length)]
}
export function newRule(path) {
  return { version: 1, combineAuthors: false, parts: pathParts(path).map((_, index, parts) => newPart(index === parts.length - 1 ? 'title' : 'ignore')) }
}
export function inferRule(path, rule, current = {}) {
  const fail = (status) => ({ status, changes: [] })
  if (!path || path.length > 2000 || rule?.version !== 1 || !Array.isArray(rule.parts) || rule.parts.length > 64) return fail('invalid')
  const parts = pathParts(path)
  if (parts.length !== rule.parts.length) return fail('unmatched')
  const captures = new Map()
  let nodes = 0, failure = ''
  function visit(raw, node, depth = 0) {
    if (failure) return
    if (++nodes > 128 || depth > 6 || !node) { failure = 'invalid'; return }
    if (node.split) {
      const { delimiter, occurrence, children } = node.split
      if (typeof delimiter !== 'string' || !delimiter || delimiter.length > 100 || !['first', 'last', 'every'].includes(occurrence) || !Array.isArray(children)) { failure = 'invalid'; return }
      const pieces = splitPart(raw, delimiter, occurrence)
      if (pieces.length !== children.length || pieces.length < 2) { failure = 'unmatched'; return }
      pieces.forEach((piece, index) => visit(piece, children[index], depth + 1))
      return
    }
    if (node.field === 'ignore') return
    if (!ruleFields.includes(node.field)) { failure = 'invalid'; return }
    let value = raw.trim()
    // Affixes match the literal capture (including intentional spaces), before trimming again.
    if (node.prefix) {
      if (!value.startsWith(node.prefix)) { failure = 'unmatched'; return }
      value = value.slice(node.prefix.length)
    }
    if (node.suffix) {
      if (!value.endsWith(node.suffix)) { failure = 'unmatched'; return }
      value = value.slice(0, -node.suffix.length)
    }
    if (node.underscores) value = value.replaceAll('_', ' ')
    value = value.trim()
    if (node.mapFrom && value === node.mapFrom) value = node.mapTo.trim()
    if (node.field === 'language') value = normalizeInferenceLanguage(value)
    if (!value || (node.field === 'year' && !/^\d{4}$/.test(value)) || (node.field === 'language' && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(value))) { failure = 'invalid'; return }
    if (!validStoredField(node.field, value)) { failure = 'invalid'; return }
    let values = [value]
    if (node.field === 'author') {
      values = (node.authorSeparator ? value.split(node.authorSeparator) : values).map(name => name.trim())
      if (node.reverseName) {
        values = values.map(name => {
          const chunks = name.split(',').map(part => part.trim())
          if (chunks.length !== 2 || chunks.some(part => !part)) { failure = 'invalid'; return name }
          return `${chunks[1]} ${chunks[0]}`
        })
        if (failure) return
      }
      if (values.some(name => !name || [...name].length > 255)) { failure = 'invalid'; return }
    }
    const previous = captures.get(node.field)
    if (previous) {
      if (node.field === 'author' && rule.combineAuthors) {
        previous.values = [...new Set([...previous.values, ...values])]
        previous.raw.push(raw)
      } else if (JSON.stringify(previous.values) !== JSON.stringify(values)) failure = 'ambiguous'
    } else captures.set(node.field, { raw: [raw], values: [...new Set(values)] })
  }
  parts.forEach((part, index) => visit(part, rule.parts[index]))
  if (failure) return fail(failure)
  const authors = captures.get('author')?.values
  if (authors && (authors.length > 32 || [...authors.join('; ')].length > 1024)) return fail('invalid')
  const changes = [...captures].map(([field, capture]) => {
    const value = capture.values.join('; '), before = String(current[field] || '')
    const same = field === 'author' && Array.isArray(current.authors) ? JSON.stringify(capture.values) === JSON.stringify(current.authors) : before === value
    return { field, raw: capture.raw.join(' / '), value, values: capture.values, before,
      previewOnly: false, status: same ? 'unchanged' : before.trim() ? 'conflict' : 'ready' }
  })
  return { status: changes.some(change => change.status === 'conflict') ? 'conflict' : changes.some(change => change.status === 'ready') ? 'ready' : 'unchanged', changes }
}
