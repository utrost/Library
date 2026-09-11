import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { parse as parseJavaScript, parseExpression } from '@babel/parser'
import { NodeTypes, parse as parseTemplate } from '@vue/compiler-dom'
import { parse as parseSfc } from '@vue/compiler-sfc'
import { spawnSync } from 'node:child_process'

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

for (const relative of ['src/main.js', 'templates/main.php', 'lib/Controller/ItemPageController.php']) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8')
  if (relative.endsWith('.js')) walkJavaScript(parseJavaScript(source, { sourceType: 'module' }))
  else for (const match of source.matchAll(/(?:\$l->t\(\s*|\$this->(?:l10n->t|translate)\(\s*)'((?:\\'|[^'])*)'/g)) addKey(match[1].replaceAll("\\'", "'"))
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
    if (!key.startsWith('_%n ') && values.some((entry) => placeholders(key).join('\0') !== placeholders(entry).join('\0'))) {
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

const pluralKey = '_%n item_::_%n items_'
if (!Array.isArray(catalogues.de.translations[pluralKey]) || catalogues.de.translations[pluralKey].length !== 2) fail('malformed_plural', 'de')
if (!Array.isArray(catalogues.ar.translations[pluralKey]) || catalogues.ar.translations[pluralKey].length !== 6) fail('malformed_plural', 'ar')

process.stdout.write(`translation_inventory_ok=true keys=${keys.size} locales=en,de,ar identical_allowlist=${Object.keys(allowlist).length} semantic_sentinels=${Object.keys(semanticSentinels.de).length + Object.keys(semanticSentinels.ar).length}\n`)
const generated = spawnSync(process.execPath, ['scripts/generate-l10n.mjs', '--check'], { cwd: root, encoding: 'utf8' })
if (generated.status !== 0) fail('generated_catalogue_mismatch', generated.stderr.trim())
process.stdout.write(generated.stdout)
