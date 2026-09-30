import { describe, expect, it } from 'vitest'
import { suggestInferenceRules } from './inference-suggestions.js'
import { inferRule } from './path-inference-rule.js'

const detected = path => suggestInferenceRules(path).find(entry => entry.id === 'detected')
const values = suggestion => Object.fromEntries(suggestion.preview.map(change => [change.field, change.value]))
describe('filename and folder clues', () => {
  it('combines a corroborated author, trailing year, language and compound genre', () => {
    const suggestion = detected('books/english_science_fiction/Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub')
    expect(values(suggestion)).toEqual({ title: 'Children of Time', author: 'Adrian Tchaikovsky', year: '2016', language: 'en', genre: 'science fiction' })
    expect(suggestion.clues).toContain('author-folder-agrees')
    expect(suggestion.warnings).toEqual([])
    const other = inferRule('books/english_science_fiction/Adrian Tchaikovsky/Shroud - Adrian Tchaikovsky (2024).epub', suggestion.rule)
    expect(other.changes.find(change => change.field === 'title').value).toBe('Shroud')
  })
  it('extracts Unicode names after by', () => {
    expect(values(detected('A Book by Aurora Stewart de Peña.epub'))).toEqual({ title: 'A Book', author: 'Aurora Stewart de Peña' })
  })
  it('preserves a comma name as one author and never guesses a comma-separated list', () => {
    const one = detected('Abercrombie, Joe/A Book.epub')
    expect(one.preview.find(change => change.field === 'author').values).toEqual(['Abercrombie, Joe'])
    expect(values(detected('Abercrombie, Joe - A Book (2011).epub')).author).toBe('Abercrombie, Joe')
    expect(detected('Caitlín R. Kiernan, Elizabeth Bear, Neil Gaiman/A Book.epub')).toBeUndefined()
  })
  it('uses name order equivalence for corroboration without changing the displayed name', () => {
    const suggestion = detected('Brown, Pierce/Red Rising - Pierce Brown (2013).epub')
    expect(values(suggestion).author).toBe('Pierce Brown')
    expect(suggestion.clues).toContain('author-folder-agrees')
  })
  it('keeps 1984 and 2001 in titles', () => {
    expect(values(suggestInferenceRules('1984.epub')[0])).toEqual({ title: '1984' })
    const suggestion = detected('Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub')
    expect(values(suggestion)).toEqual({ title: '2001 A Space Odyssey', series: 'Space Odyssey', seriesNumber: '01', author: 'Arthur C. Clarke', year: '1968' })
  })
  it('recognizes inline series with or without a filename author', () => {
    expect(values(detected('Brandon Sanderson/Mistborn #04 - The Alloy of Law.epub'))).toEqual({ title: 'The Alloy of Law', series: 'Mistborn', seriesNumber: '04' })
    expect(values(detected('Brandon Sanderson/Mistborn #04 - The Alloy of Law - Brandon Sanderson (2011).epub'))).toEqual({ title: 'The Alloy of Law', series: 'Mistborn', seriesNumber: '04', author: 'Brandon Sanderson', year: '2011' })
  })
  it('labels bare trailing years as uncertain and offers an intact-title alternative', () => {
    const suggestions = suggestInferenceRules('Summer 1999.epub')
    expect(values(suggestions[0])).toEqual({ title: 'Summer', year: '1999' })
    expect(suggestions[0].warnings).toContain('year-may-be-title')
    expect(values(suggestions[1])).toEqual({ title: 'Summer 1999' })
    expect(detected('The 1984 Collection.epub')).toBeUndefined()
    expect(detected('Volume (1234).epub')).toBeUndefined()
  })
  it('does not call the author folder a series or reinterpret a lone year as a position', () => {
    expect(values(detected('Joe Abercrombie/02. A Book - Joe Abercrombie (2020).epub'))).not.toHaveProperty('series')
    expect(detected('Fiction/1984. A Book.epub')).toBeUndefined()
  })
  it('reports structural matches for at most 40 paths and leaves existing values for review', () => {
    const path = 'A Book by Hester Fox.epub'
    const suggestion = suggestInferenceRules(path, [path, 'Another Book by Ada Quill.epub', 'No separator.epub'])[0]
    expect([suggestion.matched, suggestion.total]).toEqual([2, 3])
    const conflict = inferRule(path, suggestion.rule, { title: 'Manual title', author: 'Someone else' })
    expect(conflict.status).toBe('conflict')
    expect(suggestInferenceRules(path, Array(1000).fill(path))[0].total).toBe(40)
  })
  it('rejects unbounded inputs and stores only literal assignments', () => {
    expect(suggestInferenceRules('a'.repeat(2001))).toEqual([])
    expect(suggestInferenceRules('a/'.repeat(65) + 'book.epub')).toEqual([])
    expect(JSON.stringify(detected('Author/A Book by Ada Quill (2020).epub').rule)).not.toContain('regex')
  })
})
