import { describe, expect, it } from 'vitest'
import { inferFolderRules } from './path-inference-folders.js'
import { newRule } from './path-inference-rule.js'
const assignment = (id, folder, pattern, extra = {}) => ({ id, folder, recursive: true, available: true, definition: { name: id, kind: 'pattern', pattern }, ...extra })
const title = assignment('root', '', '%folders%/%title%.%extension%')
const author = assignment('child', 'Fiction', '%author% - %title%.%extension%')
describe('folder rule resolution', () => {
 it('prefers a matching child over an ancestor and shows provenance', () => {
  const r = inferFolderRules('Fiction/Ada - Orchard.epub','',[title,author])
  expect(r.changes.map(c=>[c.field,c.value])).toEqual([['author','Ada'],['title','Orchard']])
  expect(r.changes.every(c=>c.sources[0].id === 'child')).toBe(true)
 })
 it('falls back to an ancestor when the deeper rule does not match', () => {
  const r = inferFolderRules('Fiction/Orchard.epub','',[title,author])
  expect(r.changes[0].value).toBe('Orchard'); expect(r.attempts.map(a=>a.id)).toEqual(['child','root'])
 })
 it('evaluates subfolder samples against the assignment folder, not the sampled folder', () => {
  expect(inferFolderRules('Ada - Orchard.epub','Fiction',[author])).toEqual(inferFolderRules('Fiction/Ada - Orchard.epub','',[author]))
 })
 it('requires folder boundaries and respects direct-children-only rules', () => {
  expect(inferFolderRules('Fictional/Ada - Orchard.epub','',[author]).changes).toEqual([])
  expect(inferFolderRules('sub/Book.epub','Fiction',[{...author,recursive:false}]).changes).toEqual([])
  expect(inferFolderRules('Book.epub','',[{...title,recursive:false}]).changes[0].value).toBe('Book')
 })
 it('merges equal proposals and retains every source', () => {
  const r = inferFolderRules('Book.epub','',[title,{...title,id:'second'}])
  expect(r.changes).toHaveLength(1); expect(r.changes[0].sources).toHaveLength(2)
 })
 it('shows conflicting proposals instead of picking one; preserves uncontested fields', () => {
  const other = assignment('reverse','Fiction','%title% - %author%.%extension%')
  const r = inferFolderRules('Fiction/Ada - Orchard.epub','',[title,author,other])
  expect(r.status).toBe('ambiguous'); expect(r.changes).toEqual([])
  expect(r.conflicts.map(c=>c.field)).toEqual(['author','title'])
  expect(r.conflicts[0].proposals.map(c=>c.value)).toEqual(['Ada','Orchard'])
 })
 it('does not hide a parser ambiguity with a broader fallback', () => {
  const r = inferFolderRules('Fiction/A - B - C.epub','',[title,author])
  expect(r.status).toBe('ambiguous'); expect(r.changes).toEqual([])
 })
 it('skips unavailable assignments and accepts empty sets', () => {
  expect(inferFolderRules('Book.epub','',[{...title,available:false}]).status).toBe('unmatched')
  expect(inferFolderRules('Book.epub','',[]).status).toBe('unmatched')
 })
 it('preserves guided author ordering, duplicates and stored fields', () => {
  const rule = newRule('Quill, Ada; Moss, Eli; Quill, Ada/2.5.epub')
  Object.assign(rule.parts[0],{field:'author',authorSeparator:';',reverseName:true})
  rule.parts[1].field='seriesNumber'
  const r = inferFolderRules('Quill, Ada; Moss, Eli; Quill, Ada/2.5.epub','Fiction',[{...author,definition:{kind:'guided',name:'Authors',rule}}])
  expect(r.changes[0].values).toEqual(['Ada Quill','Eli Moss']);expect(r.changes[1].previewOnly).toBe(false)
 })
 it('keeps the current value and conflict status', () => {
  const r = inferFolderRules('Book.epub','',[title],{title:'Manual title'})
  expect(r.status).toBe('conflict');expect(r.changes[0].before).toBe('Manual title')
 })
 it('handles scoped paths with Unicode and punctuation literally', () => {
  const a=assignment('literal','Math [en]_100%','%title%.%extension%')
  expect(inferFolderRules('Über Zahlen.epub','Math [en]_100%',[a]).changes[0].value).toBe('Über Zahlen')
 })
})
