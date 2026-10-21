import { describe, expect, it } from 'vitest'
import { inferPath } from './path-inference.js'
import { isCompleteMatch, mixedReviewContext, previewDefinition, suggestChoice } from './inference-worklist.js'

const items = [
  { id: 1, path: 'A Magic Deep and Drowning by Hester Fox.epub', current: {} },
  { id: 2, path: 'Adrian Tchaikovsky/Children of Time - Adrian Tchaikovsky (2016).epub', current: {} },
  { id: 3, path: 'Arthur C. Clarke/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub', current: {} },
  { id: 4, path: 'Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub', current: {} },
  { id: 5, path: '20 Little People/Little People - 20 Little People (2011).epub', current: {} },
]
const choices = [
  { id: 'title', mode: 'pattern', pattern: '%folders%/%title%.%extension%' },
  { id: 'by', mode: 'pattern', pattern: '%folders%/%title% by %author%.%extension%' },
  { id: 'dash', mode: 'pattern', pattern: '%folders%/%title% - %author% (%year%).%extension%' },
  { id: 'series', mode: 'pattern', pattern: '%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%' },
  { id: 'underscores', mode: 'pattern', pattern: '%folders%/%series%/%seriesNumber%_%title%_%author%.%extension%' },
  { id: 'year', mode: 'pattern', pattern: '%folders%/%title% (%year%).%extension%' },
]

describe('mixed pattern worklist', () => {
  it('offers the strongest unique complete parse, with a manual choice for overlaps', () => {
    expect(items.map(item => suggestChoice(item, choices).id)).toEqual(['by', 'dash', 'series', 'underscores', 'dash'])
    expect(suggestChoice(items[0], [choices[1], { ...choices[1], id: 'duplicate' }])).toEqual({ id: '', ambiguous: true })
    expect(isCompleteMatch(previewDefinition(items[0], choices[2]))).toBe(false)
    expect(inferPath(items[0].path, choices[1].pattern).changes.map(change => change.field)).toEqual(['title', 'author'])
  })
  it('preserves each chosen definition and only selected files in review context', () => {
    const context = JSON.parse(mixedReviewContext(items, choices, { 1: 'by', 2: 'dash', 3: 'series' }, ['1:title', '3:seriesNumber'], 15, 'books'))
    expect(context).toEqual({ mode: 'mixed', rootId: 15, folder: 'books', definitions: { by: { mode: 'pattern', pattern: choices[1].pattern }, series: { mode: 'pattern', pattern: choices[3].pattern } }, assignments: { 1: 'by', 3: 'series' } })
  })
})
