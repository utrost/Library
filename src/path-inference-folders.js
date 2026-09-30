import { inferPath } from './path-inference.js'
import { inferRule } from './path-inference-rule.js'

// Paths here are relative to the configured root; a scope ends at a folder boundary.
export function inferFolderRules(path, folder, assignments, current = {}) {
  const fullPath = [folder, path].filter(Boolean).join('/')
  const candidates = assignments.filter(entry => entry.available && (!entry.folder || fullPath.startsWith(`${entry.folder}/`)))
    .map(entry => ({ ...entry, relative: entry.folder ? fullPath.slice(entry.folder.length + 1) : fullPath, depth: entry.folder ? entry.folder.split('/').length : 0 }))
    .filter(entry => entry.recursive || !entry.relative.includes('/'))
    .sort((a, b) => b.depth - a.depth || a.id.localeCompare(b.id))
  const attempts = []
  for (const depth of [...new Set(candidates.map(entry => entry.depth))]) {
    const matching = []
    for (const entry of candidates.filter(entry => entry.depth === depth)) {
      const definition = entry.definition
      const result = definition.kind === 'guided' ? inferRule(entry.relative, definition.rule, current) : inferPath(entry.relative, definition.pattern, current)
      const source = { id: entry.id, name: definition.name, folder: entry.folder }
      attempts.push({ ...source, status: result.status })
      if (['ready', 'conflict', 'unchanged'].includes(result.status) && result.changes.length) matching.push({ result, source })
    }
    // An ambiguous interpretation must remain visible even if a sibling rule is usable.
    if (attempts.some(entry => entry.status === 'ambiguous')) return { status: 'ambiguous', changes: [], conflicts: [], attempts }
    if (!matching.length) continue
    const fields = new Map()
    for (const { result, source } of matching) for (const change of result.changes) {
      const values = fields.get(change.field) || new Map()
      const key = JSON.stringify(change.values || [change.value])
      const existing = values.get(key)
      if (existing) existing.sources.push(source)
      else values.set(key, { ...change, sources: [source] })
      fields.set(change.field, values)
    }
    const changes = [], conflicts = []
    for (const [field, values] of fields) {
      if (values.size > 1) conflicts.push({ field, proposals: [...values.values()] })
      else changes.push([...values.values()][0])
    }
    return { status: conflicts.length ? 'ambiguous' : changes.some(c => c.status === 'conflict') ? 'conflict' : changes.some(c => c.status === 'ready') ? 'ready' : 'unchanged', changes, conflicts, attempts }
  }
  return { status: 'unmatched', changes: [], conflicts: [], attempts }
}
