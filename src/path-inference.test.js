import { describe, expect, it } from 'vitest'
import { inferPath } from './path-inference.js'
import { inferRule, newPart, newRule, splitPart } from './path-inference-rule.js'

describe('path inference', () => {
  it.each([
    ['books/english_fiction/Author/Title - Writer (2011).epub', 'books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%', {language:'en',subject:'fiction',title:'Title',author:'Writer',year:'2011'}],
    ['Author/Space Odyssey/01. 2001 A Space Odyssey - Arthur C. Clarke (1968).epub', '%folders%/%series%/%seriesNumber%. %title% - %author% (%year%).%extension%', {series:'Space Odyssey',seriesNumber:'01',title:'2001 A Space Odyssey',author:'Arthur C. Clarke',year:'1968'}],
    ['Orchard Notes/2.5_Autumn Appendix_Ada Quill.epub','%series%/%seriesNumber%_%title%_%author%.%extension%', {series:'Orchard Notes',seriesNumber:'2.5',title:'Autumn Appendix',author:'Ada Quill'}],
    ['A Magic Deep and Drowning by Hester Fox.epub','%folders%/%title% by %author%.%extension%',{title:'A Magic Deep and Drowning',author:'Hester Fox'}],
  ])('extracts documented example %s', (path, pattern, fields) => {
    const result=inferPath(path,pattern)
    expect(result.status).toBe('ready')
    expect(Object.fromEntries(result.changes.map(c=>[c.field,c.value]))).toEqual(fields)
  })
  it.each(['/%language%_%year%/%title%/%ignore% (%ignore%).%extension%', '%unknown%','%title%%author%.epub'])('rejects mismatching or invalid pattern %s',pattern=>{
    expect(['invalid','unmatched']).toContain(inferPath('books/english_fiction/Title (2011).epub',pattern).status)
  })
  it('rejects ambiguous separators without guessing an author',()=>expect(inferPath('A - B - C.epub','%title% - %author%.%extension%').status).toBe('ambiguous'))
  it('flags existing metadata and recognizes stored series position',()=>{
    const result=inferPath('2.5_Title.epub','%seriesNumber%_%title%.%extension%',{title:'Old'})
    expect(result.status).toBe('conflict');expect(result.changes[0].previewOnly).toBe(false)
  })
  it.each([['first',['english','science_fiction']],['last',['english_science','fiction']],['every',['english','science','fiction']]])('splits at %s', (occurrence, expected)=>expect(splitPart('english_science_fiction','_',occurrence)).toEqual(expected))
  it('transforms composite language/genre folder',()=>{
    const rule=newRule('english_science_fiction/Title.epub')
    rule.parts[0].split={delimiter:'_',occurrence:'first',children:[newPart('language'),{...newPart('genre'),underscores:true}]}
    const result=inferRule('english_science_fiction/Title.epub',rule)
    expect(result.changes.map(c=>c.value)).toEqual(['en','science fiction','Title']);expect(result.changes[1].previewOnly).toBe(false)
    expect(inferRule('English/Other/Title.epub',rule).status).toBe('unmatched')
  })
  it('removes a literal series suffix without inventing a first name',()=>{
    const rule=newRule('Sanderson - mistborn series/Title.epub')
    rule.parts[0].split={delimiter:' - ',occurrence:'first',children:[newPart('author'),{...newPart('series'),suffix:' series'}]}
    expect(inferRule('Sanderson - mistborn series/Title.epub',rule).changes.map(c=>c.value)).toEqual(['Sanderson','mistborn','Title'])
    expect(inferRule('Sanderson - mistborn/Title.epub',rule).status).toBe('unmatched')
  })
  it('preserves commas unless explicitly configured',()=>{
    const rule=newRule('Abercrombie, Joe.epub');rule.parts[0]=newPart('author')
    expect(inferRule('Abercrombie, Joe.epub',rule).changes[0].values).toEqual(['Abercrombie, Joe'])
  })
  it('splits names, converts opted-in name order, combines and deduplicates',()=>{
    const rule=newRule('Gaiman, Neil; Pratchett, Terry/Neil Gaiman.epub');rule.combineAuthors=true
    rule.parts=[{...newPart('author'),authorSeparator:';',reverseName:true},newPart('author')]
    expect(inferRule('Gaiman, Neil; Pratchett, Terry/Neil Gaiman.epub',rule).changes[0].values).toEqual(['Neil Gaiman','Terry Pratchett'])
    rule.combineAuthors=false;expect(inferRule('Gaiman, Neil; Pratchett, Terry/Neil Gaiman.epub',rule).status).toBe('ambiguous')
  })
  it('does not split Sanderson at an and substring',()=>{
    const rule=newRule('Sanderson and Smith.epub');rule.parts[0]={...newPart('author'),authorSeparator:' and '}
    expect(inferRule('Sanderson and Smith.epub',rule).changes[0].values).toEqual(['Sanderson','Smith'])
  })
  it('bounds malformed nested rules',()=>{
    const rule=newRule('Title.epub');rule.parts[0].split={delimiter:'',occurrence:'first',children:[]}
    expect(inferRule('Title.epub',rule).status).toBe('invalid')
  })
})

it('supports stored genre and series fields in advanced patterns', () => {
 const r=inferPath('Science fiction/Orchard Notes/01_Title.epub','%genre%/%series%/%seriesNumber%_%title%.%extension%',{genre:'Science fiction',series:'Orchard Notes',seriesNumber:'01'})
 expect(r.changes.map(c=>c.value)).toEqual(['Science fiction','Orchard Notes','01','Title'])
 expect(r.changes.slice(0,3).every(c=>c.status==='unchanged'&&!c.previewOnly)).toBe(true)
})
it('bounds captured stored fields without converting series numbers',()=>{
 for(const [field,limit] of [['genre',255],['series',255],['seriesNumber',64]]) {
  expect(inferPath(`${'é'.repeat(limit)}.epub`,`%${field}%.%extension%`).status).toBe('ready')
  expect(inferPath(`${'x'.repeat(limit+1)}.epub`,`%${field}%.%extension%`).status).toBe('invalid')
 }
 expect(inferPath('Volume II.epub','%seriesNumber%.%extension%').changes[0].value).toBe('Volume II')
})

it('compares canonical region codes consistently in both editors', () => {
 expect(inferPath('en-us.epub','%language%.%extension%',{language:'en-US'}).status).toBe('unchanged')
 const rule=newRule('en-us.epub');rule.parts[0]=newPart('language')
 expect(inferRule('en-us.epub',rule,{language:'en-US'}).status).toBe('unchanged')
 expect(inferRule('zh-hant.epub',rule).status).toBe('invalid')
})
it('rejects values that cannot be accepted by the metadata editor', () => {
 expect(inferPath('0000.epub','%year%.%extension%').status).toBe('invalid')
 expect(inferPath(`${'x'.repeat(513)}.epub`,'%title%.%extension%').status).toBe('invalid')
})

it('distinguishes one punctuated author from two author identities with the same display', () => {
 const current={author:'A; B',authors:['A','B']}
 expect(inferPath('A; B.epub','%author%.%extension%',current).status).toBe('conflict')
 const rule=newRule('A; B.epub');rule.parts[0]=newPart('author')
 expect(inferRule('A; B.epub',rule,current).status).toBe('conflict')
 rule.parts[0].authorSeparator=';'
 expect(inferRule('A; B.epub',rule,current).status).toBe('unchanged')
})

it('rejects author previews outside the canonical name and list limits', () => {
 expect(inferPath(`${'x'.repeat(256)}.epub`,'%author%.%extension%').status).toBe('invalid')
 const rule=newRule('a.epub');rule.parts[0]=newPart('author');rule.parts[0].authorSeparator=';'
 expect(inferRule(`${'x'.repeat(256)}; Other.epub`,rule).status).toBe('invalid')
 expect(inferRule(`${Array.from({length:33},(_,i)=>`Author ${i}`).join(';')}.epub`,rule).status).toBe('invalid')
})
