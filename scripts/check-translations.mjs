import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { parse as parseJavaScript, parseExpression } from '@babel/parser'
import { NodeTypes, parse as parseTemplate } from '@vue/compiler-dom'
import { parse as parseSfc } from '@vue/compiler-sfc'
import { spawnSync } from 'node:child_process'
import { evaluatePluralPlaceholderIntegrity } from './plural-placeholder-gate.mjs'

const root = path.resolve(import.meta.dirname, '..')
const keys = new Set()
const visibleAttributes = new Set(['alt', 'aria-label', 'placeholder', 'title'])
const allowedStaticText = /^(?:[\s\p{P}\p{S}\p{N}]|Ctrl|⌘K)+$/u

function fail(marker, detail = '') {
  throw new Error(`${marker}${detail ? `:${detail}` : ''}`)
}

function addKey(value) {
  if (typeof value === 'string' && value.trim()) keys.add(value)
}

function walkJavaScript(node) {
  if (!node || typeof node !== 'object') return
  if (node.type === 'CallExpression' && node.callee?.type === 'Identifier' && ['t', 'n'].includes(node.callee.name)) {
    if (node.callee.name === 'n' && node.arguments[1]?.type === 'StringLiteral' && node.arguments[2]?.type === 'StringLiteral') {
      addKey(`_${node.arguments[1].value}_::_${node.arguments[2].value}_`)
    } else if (node.callee.name === 't' && node.arguments[1]?.type === 'StringLiteral') {
      addKey(node.arguments[1].value)
    }
  }
  if (node.type === 'ObjectProperty' && !node.computed
    && ['label', 'description'].includes(node.key?.name || node.key?.value)
    && node.value?.type === 'StringLiteral') addKey(node.value.value)
  if (node.type === 'VariableDeclarator' && node.id?.name === 'filterLabels' && node.init?.type === 'ObjectExpression') {
    for (const property of node.init.properties) if (property.value?.type === 'StringLiteral') addKey(property.value.value)
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(walkJavaScript)
    else if (value && typeof value === 'object' && typeof value.type === 'string') walkJavaScript(value)
  }
}

function validateTemplate(node, ancestors = []) {
  if (node.type === NodeTypes.TEXT && node.content.trim() && !allowedStaticText.test(node.content.trim())) {
    fail('hard_coded_visible_text', node.content.trim())
  }
  if (node.type === NodeTypes.ELEMENT) {
    const hidden = node.props.some((prop) => prop.type === NodeTypes.ATTRIBUTE
      && ((prop.name === 'aria-hidden' && prop.value?.content === 'true') || (prop.name === 'type' && prop.value?.content === 'hidden')))
    for (const prop of node.props) {
      if (prop.type === NodeTypes.ATTRIBUTE && visibleAttributes.has(prop.name) && prop.value?.content.trim()) {
        fail('hard_coded_visible_text', `${prop.name}=${prop.value.content}`)
      }
      if (prop.type === NodeTypes.DIRECTIVE && prop.exp?.content) {
        try { walkJavaScript(parseExpression(prop.exp.content)) } catch (error) { fail('malformed_vue_expression', error.message) }
      }
    }
    if (hidden || ['script', 'style'].includes(node.tag)) return
  }
  if (node.type === NodeTypes.INTERPOLATION && node.content?.content) {
    try { walkJavaScript(parseExpression(node.content.content)) } catch (error) { fail('malformed_vue_expression', error.message) }
  }
  for (const child of node.children || []) validateTemplate(child, [...ancestors, node])
}

const appPath = path.join(root, 'src/App.vue')
let sfc
try {
  sfc = parseSfc(fs.readFileSync(appPath, 'utf8'), { filename: appPath })
} catch (error) {
  fail('malformed_vue', error.message)
}
if (sfc.errors.length) fail('malformed_vue', String(sfc.errors[0]))
if (!sfc.descriptor.template || !sfc.descriptor.scriptSetup) fail('malformed_vue', 'missing template or script setup')
validateTemplate(parseTemplate(sfc.descriptor.template.content))
walkJavaScript(parseJavaScript(sfc.descriptor.scriptSetup.content, { sourceType: 'module', plugins: ['optionalChaining'] }))

const phpFiles = [
  ...fs.readdirSync(path.join(root, 'templates')).filter((name) => name.endsWith('.php')).map((name) => `templates/${name}`),
  ...fs.readdirSync(path.join(root, 'lib/Controller')).filter((name) => name.endsWith('.php')).map((name) => `lib/Controller/${name}`),
  ...fs.readdirSync(path.join(root, 'lib/Settings')).filter((name) => name.endsWith('.php')).map((name) => `lib/Settings/${name}`),
]

function validatePhpTemplate(source, relative) {
  // Nextcloud t() accepts a parameter array, never singular/plural/count.
  if (/\$l->t\(\s*(['"])(?:(?!\1)[^\r\n])*\1\s*,\s*(['"])/u.test(source)) fail('php_plural_t_misuse', relative)
  for (const match of source.matchAll(/\$l->n\(\s*(['"])(.*?)\1\s*,\s*(['"])(.*?)\3/gu)) {
    if ((match[2].match(/%n/g) || []).length !== 1 || (match[4].match(/%n/g) || []).length !== 1) fail('php_plural_count_contract', relative)
  }
  if (/\$l->t\(\s*(?:\(string\)\s*)?\$/u.test(source)) fail('dynamic_php_translation_key', relative)
  const html = source.replace(/<\?(?:php|=)[\s\S]*?\?>/g, '')
  for (const match of html.matchAll(/>([^<]+)</g)) {
    const visible = match[1].replace(/&(?:[a-z]+|#\d+);/gi, '').trim()
    if (visible && !allowedStaticText.test(visible)) fail('hard_coded_php_visible_text', `${relative}:${visible}`)
  }
  for (const match of html.matchAll(/\b(alt|aria-label|placeholder|title)="([^"]+)"/g)) {
    if (match[2].trim() && !allowedStaticText.test(match[2].trim())) fail('hard_coded_php_visible_attribute', `${relative}:${match[1]}=${match[2]}`)
  }
}

for (const relative of ['src/main.js', ...phpFiles]) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8')
  if (relative.endsWith('.js')) walkJavaScript(parseJavaScript(source, { sourceType: 'module' }))
  else {
    for (const match of source.matchAll(/(?:\$l->(?:t|n)\(\s*|\$this->(?:l10n->t|translate)\(\s*)'((?:\\'|[^'])*)'(?:\s*,\s*'((?:\\'|[^'])*)')?/g)) {
      const singular = match[1].replaceAll("\\'", "'")
      const plural = match[2]?.replaceAll("\\'", "'")
      addKey(plural ? `_${singular}_::_${plural}_` : singular)
    }
    if (relative.startsWith('templates/')) validatePhpTemplate(source, relative)
  }
}

function placeholders(value) {
  return [...value.matchAll(/%(?:n|s)|\{[A-Za-z][A-Za-z0-9_]*\}/g)].map((match) => match[0]).sort()
}

let allowlist
try {
  allowlist = JSON.parse(fs.readFileSync(path.join(root, 'scripts/translation-identical-allowlist.json'), 'utf8'))
} catch (error) {
  fail('malformed_allowlist', error.message)
}
for (const [key, reason] of Object.entries(allowlist)) {
  if (!keys.has(key) || typeof reason !== 'string' || reason.trim().length < 8) fail('invalid_allowlist_entry', key)
}

const catalogues = {}
for (const locale of ['en', 'de', 'ar']) {
  const cataloguePath = path.join(root, 'l10n', `${locale}.json`)
  try {
    catalogues[locale] = JSON.parse(fs.readFileSync(cataloguePath, 'utf8'))
  } catch (error) {
    fail('malformed_catalogue', `${locale}:${error.message}`)
  }
  const translations = catalogues[locale]?.translations
  if (!translations || Array.isArray(translations) || typeof translations !== 'object') fail('malformed_catalogue', locale)
  for (const key of keys) {
    const value = translations[key]
    if (!Object.hasOwn(translations, key) || value === '' || value == null) fail('missing_translation', `${locale}:${key}`)
    const values = Array.isArray(value) ? value : [value]
    if (!values.length || values.some((entry) => typeof entry !== 'string' || !entry.trim())) fail('malformed_translation', `${locale}:${key}`)
    if (!(key.startsWith('_') && key.includes('_::_')) && values.some((entry) => placeholders(key).join('\0') !== placeholders(entry).join('\0'))) {
      fail('placeholder_mismatch', `${locale}:${key}`)
    }
  }
  for (const key of Object.keys(translations)) if (!keys.has(key)) fail('stale_translation', `${locale}:${key}`)
}

for (const locale of ['de', 'ar']) {
  for (const key of keys) {
    const source = catalogues.en.translations[key]
    const translated = catalogues[locale].translations[key]
    if (JSON.stringify(source) === JSON.stringify(translated) && !Object.hasOwn(allowlist, key)) {
      fail('source_identical_translation', `${locale}:${key}`)
    }
  }
}

let semanticSentinels
try {
  semanticSentinels = JSON.parse(fs.readFileSync(path.join(root, 'scripts/translation-semantic-sentinels.json'), 'utf8'))
} catch (error) {
  fail('malformed_semantic_sentinels', error.message)
}

let fragmentAllowlist
try {
  fragmentAllowlist = JSON.parse(fs.readFileSync(path.join(root, 'scripts/translation-fragment-allowlist.json'), 'utf8'))
} catch (error) {
  fail('malformed_fragment_allowlist', error.message)
}
// Latin text is fail-closed. Codes, placeholders are removed, and filenames
// structurally; this reviewed set contains only brands, formats, physical units,
// key names and established German UI/technical loanwords. For German, any
// source token preserved by its translation must be in this set. Arabic permits
// no other Latin content token at all.
const permittedLatinTokens = new Set([
  'nextcloud', 'files', 'library', 'javascript', 'json', 'zip', 'tsv', 'cbz',
  'epub', 'pdf', 'pdfs', 'jpeg', 'png', 'webp', 'mime', 'isbn', 'opds', 'api',
  'rar', 'mib', 'px', 'yyyy', 'mm', 'dd', 'delete', 'enter', 'esc', 'escape',
  'eco', 'rolleiflex', 'ocr', 'id', 'ids', 'url', 'urls',
])
const permittedGermanSourceTokens = new Set([
  ...permittedLatinTokens,
  'admin', 'app', 'batch', 'chip', 'chips', 'comic', 'comics', 'container',
  'cover', 'details', 'export', 'fiction', 'filter', 'genres', 'index', 'limit',
  'manifest', 'plugin', 'plugins', 'route', 'scan', 'scans', 'scanner', 'science',
  'sidecar', 'status', 'store', 'tag', 'tags', 'tools', 'workflow',
])
const latinTokens = (value) => value.match(/[A-Za-z][A-Za-z'-]*/g) || []
const stripNonContentLatin = (value) => value
  .replace(/\{[A-Za-z][A-Za-z0-9_]*\}|%(?:n|s)/g, '')
  .replace(/\bYYYY(?:-MM(?:-DD)?)?\b/g, '')
  .replace(/(?:^|[\s(])(?:\.?[\w-]+\/)+(?:\.?[\w-]+)(?=$|[\s),.;])/g, ' ')
  .replace(/\b[\w.-]+\.(?:json|zip|tsv|cbz|epub|pdf|jpe?g|png|webp|rar)\b/giu, '')
  .replace(/\b(?:en-GB|en-US|de|en|fr|es|it|nl)\b/g, '')

for (const [locale, examples] of Object.entries({
  de: [['Save Status', 'Save status'], ['Kürzlich recently geöffnet', 'Recently opened']],
  ar: [['تعليق comments', 'Nextcloud comments'], ['عرض rogue', 'Useful views']],
})) {
  for (const [translated, source] of examples) {
    const sourceTokens = new Set(latinTokens(source).map((token) => token.toLowerCase()))
    const leaked = latinTokens(stripNonContentLatin(translated)).some((token) => {
      const normalized = token.toLowerCase()
      if (normalized.length < 3) return false
      return locale === 'ar'
        ? !permittedLatinTokens.has(normalized)
        : sourceTokens.has(normalized) && !permittedGermanSourceTokens.has(normalized)
    })
    if (!leaked) fail('latin_guard_self_test_failed', `${locale}:${translated}`)
  }
}
for (const locale of ['de', 'ar']) {
  for (const [key, reason] of Object.entries(fragmentAllowlist[locale] || {})) {
    if (!keys.has(key) || typeof reason !== 'string' || reason.length < 16) fail('invalid_fragment_allowlist_entry', `${locale}:${key}`)
  }
  for (const [key, raw] of Object.entries(catalogues[locale].translations)) {
    for (const value of Array.isArray(raw) ? raw : [raw]) {
      const sourceValues = Array.isArray(catalogues.en.translations[key]) ? catalogues.en.translations[key] : [catalogues.en.translations[key]]
      const sourceTokens = new Set(sourceValues.flatMap(latinTokens).map((token) => token.toLowerCase()))
      const leakedTokens = latinTokens(stripNonContentLatin(value)).filter((token) => {
        const normalized = token.toLowerCase()
        if (normalized.length < 3) return false
        return locale === 'ar'
          ? !permittedLatinTokens.has(normalized)
          : sourceTokens.has(normalized) && !permittedGermanSourceTokens.has(normalized)
      })
      if (leakedTokens.length > 0) {
        fail('untranslated_fragment', `${locale}:${key}`)
      }
    }
  }
}
for (const locale of ['de', 'ar']) {
  const sentinels = semanticSentinels[locale]
  if (!sentinels || Object.keys(sentinels).length < 30) fail('insufficient_semantic_sentinels', locale)
  for (const [key, expected] of Object.entries(sentinels)) {
    if (!keys.has(key)) fail('stale_semantic_sentinel', `${locale}:${key}`)
    if (catalogues[locale].translations[key] !== expected) fail('semantic_sentinel_mismatch', `${locale}:${key}`)
  }
}

// These checks catch known batch-translation failure shapes, not linguistic quality.
// Idiom, register and domain sense still require independent human review.
const suspiciousEdges = {
  de: /^(?:hinzu\s+Fügen|nicht starten\s+Die|entfernen\s+Entfernt|durch\s+Führen|einen Scan durch\s+Führen|wird angezeigt\s+Zeigt)\b|\b(?:konnte|eines Stammverzeichnisses)$/iu,
  ar: /(?:السيارة الجانبية|السحابة التالية|أغطية المسبار)|^(?:ثم|وتم|لأن)\s/iu,
}
for (const [locale, brokenExamples] of Object.entries({
  de: ['Bibliothek konnte', 'nicht starten Die Bibliothek', 'entfernen Entfernt', 'durch Führen Sie', 'wird angezeigt Zeigt'],
  ar: ['قيمة السيارة الجانبية', 'علامة السحابة التالية', 'أغطية المسبار', 'ثم تطبيق'],
})) {
  if (brokenExamples.some((value) => !suspiciousEdges[locale].test(value))) fail('structural_guard_self_test_failed', locale)
}
for (const value of ['Bibliothek konnte nicht gestartet werden', 'Entfernt ein vorhandenes Nextcloud-Tag', 'قيمة ملف البيانات الوصفية المصاحب']) {
  if (Object.values(suspiciousEdges).some((pattern) => pattern.test(value))) fail('structural_guard_false_positive', value)
}
for (const locale of ['de', 'ar']) {
  for (const [key, raw] of Object.entries(catalogues[locale].translations)) {
    for (const value of Array.isArray(raw) ? raw : [raw]) {
      if (suspiciousEdges[locale].test(value.trim())) fail('suspicious_translation_fragment', `${locale}:${key}`)
      if (/\s(?:_::_|\|\||::)\s|%\s+[ns]/u.test(value)) fail('translation_delimiter_damage', `${locale}:${key}`)
    }
  }
}

for (const pluralKey of [...keys].filter((key) => key.startsWith('_') && key.includes('_::_'))) {
  if (!Array.isArray(catalogues.en.translations[pluralKey]) || catalogues.en.translations[pluralKey].length !== 2) fail('malformed_plural', `en:${pluralKey}`)
  if (!Array.isArray(catalogues.de.translations[pluralKey]) || catalogues.de.translations[pluralKey].length !== 2) fail('malformed_plural', `de:${pluralKey}`)
  if (!Array.isArray(catalogues.ar.translations[pluralKey]) || catalogues.ar.translations[pluralKey].length !== 6) fail('malformed_plural', `ar:${pluralKey}`)
  for (const locale of ['en', 'de', 'ar']) {
    const integrity = evaluatePluralPlaceholderIntegrity(pluralKey, catalogues[locale].translations[pluralKey])
    if (!integrity.pass) fail('plural_placeholder_mismatch', `${locale}:${pluralKey}`)
  }
}

process.stdout.write(`translation_inventory_ok=true keys=${keys.size} locales=en,de,ar identical_allowlist=${Object.keys(allowlist).length} semantic_sentinels=${Object.keys(semanticSentinels.de).length + Object.keys(semanticSentinels.ar).length}\n`)
const generated = spawnSync(process.execPath, ['scripts/generate-l10n.mjs', '--check'], { cwd: root, encoding: 'utf8' })
if (generated.status !== 0) fail('generated_catalogue_mismatch', generated.stderr.trim())
process.stdout.write(generated.stdout)
