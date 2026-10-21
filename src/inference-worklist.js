import { inferPath } from './path-inference.js'
import { inferRule } from './path-inference-rule.js'

export function previewDefinition(item, definition) {
  if (!definition) return { status: 'unmatched', changes: [] }
  return definition.mode === 'guided'
    ? inferRule(item.path, definition.rule, item.current)
    : inferPath(item.path, definition.pattern, item.current)
}

export function isCompleteMatch(result) {
  return ['ready', 'conflict', 'unchanged'].includes(result.status) && result.changes.length > 0
}

// Prefer definitions extracting more fields. Equal strongest matches need a human choice.
export function suggestChoice(item, choices) {
  const matched = choices.map(choice => ({ choice, result: previewDefinition(item, choice) }))
    .filter(entry => isCompleteMatch(entry.result))
  if (!matched.length) return { id: '', ambiguous: false }
  const score = entry => entry.result.changes.length
  const strongest = Math.max(...matched.map(score))
  const best = matched.filter(entry => score(entry) === strongest)
  return { id: best.length === 1 ? best[0].choice.id : '', ambiguous: best.length > 1 }
}

export function mixedReviewContext(items, choices, assigned, selected, rootId, folder) {
  const definitions = {}, assignments = {}
  for (const item of items) {
    if (!selected.some(key => key.startsWith(`${item.id}:`))) continue
    const choice = choices.find(entry => entry.id === assigned[item.id])
    if (!choice) continue
    definitions[choice.id] = choice.mode === 'guided' ? { mode: 'guided', rule: choice.rule } : { mode: 'pattern', pattern: choice.pattern }
    assignments[item.id] = choice.id
  }
  return JSON.stringify({ mode: 'mixed', rootId: Number(rootId), folder, definitions, assignments })
}
