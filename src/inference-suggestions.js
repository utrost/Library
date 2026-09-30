import { inferRule, newPart, newRule, pathParts } from './path-inference-rule.js'

// Fixed, bounded detectors propose editable literal rules. No user regex is executed.
const languages = new Set(['english', 'en', 'german', 'deutsch', 'de', 'french', 'français', 'fr', 'arabic', 'ar'])
const nameWords = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u
function plausibleName(value) {
  const words = value.trim().split(/\s+/)
  return value.length <= 120 && words.length >= 2 && words.length <= 7 && nameWords.test(value)
}
function invertedName(value) {
  const parts = value.split(',').map(part => part.trim())
  return parts.length === 2 && parts.every(part => part && nameWords.test(part)) && value.length <= 120
}
function nameKey(value) {
  const parts = value.split(',').map(part => part.trim())
  return (invertedName(value) ? `${parts[1]} ${parts[0]}` : value).trim().replace(/\s+/g, ' ').toLocaleLowerCase('en')
}
function leaf(field, options = {}) { return { ...newPart(field), ...options } }
function split(delimiter, occurrence, ...children) {
  return { ...newPart(), split: { delimiter, occurrence, children } }
}

/** Suggestions describe conventions, never confidence that the metadata is true. */
export function suggestInferenceRules(path, sample = []) {
  if (typeof path !== 'string' || !path || path.length > 2000 || pathParts(path).length > 64) return []
  const parts = pathParts(path), filenameIndex = parts.length - 1
  const filename = parts[filenameIndex], folders = parts.slice(0, -1)
  const rule = newRule(path), clues = [], warnings = []
  let body = filename, yearWrapper = node => node, authorWrapper = node => node
  let author = '', title = leaf('title'), hasSeries = false
  const year = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(body)
  const bareYear = !year && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(body)
  if (year) {
    body = year[1]
    yearWrapper = node => split(' (', 'last', node, leaf('year', { suffix: ')' }))
    clues.push('year-parentheses')
  } else if (bareYear) {
    body = bareYear[1]
    yearWrapper = node => split(' ', 'last', node, leaf('year'))
    clues.push('year-trailing'); warnings.push('year-may-be-title')
  }
  const by = /^(.*\S) by (.+)$/.exec(body)
  const dash = /^(.*\S) - (.+)$/.exec(body)
  const authorMatch = by || dash
  const authorFirst = !by && dash && (invertedName(dash[1]) || (plausibleName(dash[1]) && folders.some(folder => nameKey(folder) === nameKey(dash[1]))))
  const seriesTitleOnly = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(body) && body.split(' - ').length === 2
  if (authorFirst) {
    author = dash[1]; body = dash[2]
    authorWrapper = node => split(' - ', 'first', leaf('author'), node)
    clues.push('author-first'); warnings.push('author-needs-review')
  } else if (authorMatch && !seriesTitleOnly && (plausibleName(authorMatch[2]) || invertedName(authorMatch[2]))) {
    author = authorMatch[2]
    body = authorMatch[1]
    authorWrapper = node => split(by ? ' by ' : ' - ', 'last', node, leaf('author'))
    clues.push(by ? 'author-by' : 'author-dash')
    if (folders.some(folder => nameKey(folder) === nameKey(author))) clues.push('author-folder-agrees')
    else warnings.push('author-needs-review')
  }
  const inlineSeries = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(body)
  const numbered = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(body)
  if (inlineSeries) {
    title = split(' #', 'first', leaf('series'), split(' - ', 'first', leaf('seriesNumber'), leaf('title')))
    hasSeries = true; clues.push('series-inline')
  } else if (numbered && folders.length) {
    const parent = folders.at(-1)
    // An author/language folder alone is not evidence of a series.
    if (!invertedName(parent) && !(author && nameKey(parent) === nameKey(author)) && !languages.has(parent.toLowerCase()) && !parent.includes('_')) {
      title = split('. ', 'first', leaf('seriesNumber'), leaf('title'))
      rule.parts[filenameIndex - 1] = leaf('series')
      hasSeries = true; clues.push('series-folder'); warnings.push('series-needs-review')
    }
  }
  rule.parts[filenameIndex] = yearWrapper(authorWrapper(title))
  if (!author) {
    const authorIndex = hasSeries ? filenameIndex - 2 : filenameIndex - 1
    if (authorIndex >= 0 && invertedName(parts[authorIndex])) {
      rule.parts[authorIndex] = leaf('author'); clues.push('author-comma'); warnings.push('author-needs-review')
    }
  }
  // Prefer the nearest recognized language folder; never combine conflicting roots.
  for (let index = folders.length - 1; index >= 0; index--) {
    if (rule.parts[index].field !== 'ignore') continue
    const folder = folders[index], separator = folder.indexOf('_')
    const language = separator < 0 ? folder : folder.slice(0, separator)
    if (!languages.has(language.toLowerCase())) continue
    rule.parts[index] = separator < 0 ? leaf('language') : split('_', 'first', leaf('language'), leaf('genre', { underscores: true }))
    clues.push(separator < 0 ? 'language-folder' : 'language-genre-folder')
    break
  }
  const suggestions = []
  const add = (id, definition, reasons, cautions) => {
    const preview = inferRule(path, definition)
    if (!['ready', 'conflict', 'unchanged'].includes(preview.status)) return
    const examples = sample.slice(0, 40).map(item => typeof item === 'string' ? item : item.path).filter(item => typeof item === 'string')
    const matched = examples.filter(item => ['ready', 'conflict', 'unchanged'].includes(inferRule(item, definition).status)).length
    suggestions.push({ id, rule: definition, clues: reasons, warnings: [...new Set(cautions)], preview: preview.changes, matched, total: examples.length })
  }
  if (clues.length) add('detected', rule, clues, warnings)
  add('filename', newRule(path), ['filename-title'], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(filename) ? ['year-may-be-title'] : [])
  return suggestions
}
