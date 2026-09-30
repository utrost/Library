import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { inferPath } from '../src/path-inference.js'
import { inferRule, newPart } from '../src/path-inference-rule.js'
import { inferFolderRules } from '../src/path-inference-folders.js'
const vectors=[]
const add=(path,definition,current={},folder='')=>vectors.push({path,definition,current,folder})
const patterns=['%folders%/%title%.%extension%','books/%language%_%subject%/%folders%/%title% - %author% (%year%).%extension%','%title% by %author%.%extension%','%folder%/%series%/%seriesNumber%. %title%.%extension%','%title%%author%.%extension%','%unknown%','%folder%','%title%/%title%.epub','%folders%/%title%_%seriesNumber%.%extension%','%title% - %author%.%extension%','literal.epub','%folders%/%ignore%.%extension%']
const paths=['Story.epub','Story by Ada.epub','Books/Story.epub','books/english_fiction/Joe/Story - Abercrombie, Joe (2011).epub','books/en-US_fiction/Story - Ada (0000).epub','Série/02. Élégie.epub','a-b - c.epub','a - b - c.epub','🙂é.epub','كتب/العربية.epub','X/X.epub','X/Y.epub','nested/deeper/01_Title.epub','a_b_c.epub','literal.epub','x\u0000.epub']
for(const pattern of patterns)for(const path of paths)for(const current of [{},{title:'Story',author:'Ada',authors:['Ada']}])add(path,{mode:'pattern',pattern},current)
for(const field of ['title','subtitle','author','series','seriesNumber','language','genre','publisher','subject','year']) {
 for(const value of ['Story','English','en-us','2011','0000','Abercrombie, Joe & Elizabeth Bear & Abercrombie, Joe','A;B','Surname, Given','é'.repeat(256)]) {
  const part={...newPart(field),authorSeparator:field==='author'?' & ':''}
  add(`${value}.epub`,{mode:'guided',rule:{version:1,combineAuthors:false,parts:[part]}})
 }
}
for(const occurrence of ['first','last','every'])for(const path of ['A_B.epub','A_B_C.epub','A.epub','Caitlín R. Kiernan & Elizabeth Bear.epub']) {
 const part={...newPart(),split:{delimiter:'_',occurrence,children:[newPart('title'),newPart('author')]}}
 add(path,{mode:'guided',rule:{version:1,combineAuthors:false,parts:[part]}})
}
for(const reverseName of [false,true])for(const combineAuthors of [false,true])for(const path of ['Joe, A/Joe, A & Bear, B.epub','Joe, A/Bear, B.epub','Joe, A/Bad.epub']) {
 const part={...newPart('author'),authorSeparator:' & ',reverseName}
 add(path,{mode:'guided',rule:{version:1,combineAuthors,parts:[part,part]}})
}
add('prefix_Title_suffix.epub',{mode:'guided',rule:{version:1,combineAuthors:false,parts:[{...newPart('title'),prefix:'prefix_',suffix:'_suffix',underscores:true,mapFrom:'Title',mapTo:'Mapped'}]}})
add('A; B.epub',{mode:'guided',rule:{version:1,combineAuthors:false,parts:[newPart('author')]}},{author:'A; B',authors:['A','B']})
const assignment=(id,folder,pattern,recursive=true)=>({id,folder,recursive,available:true,definition:{kind:'pattern',name:id,pattern}})
for(const path of ['Story.epub','nested/Story.epub','deep/nested/Story.epub'])for(const folder of ['','nested']) {
 add(path,{mode:'folders',assignments:[assignment('a','','%folders%/%title%.%extension%'),assignment('b','nested','%title%.%extension%',false)]},{},folder)
 add(path,{mode:'folders',assignments:[assignment('a','','%folders%/%title%.%extension%'),assignment('b','','%folders%/%author%.%extension%')]},{},folder)
 add(path,{mode:'folders',assignments:[assignment('a','','%folders%/%title%.%extension%'),assignment('b','','%folders%/%title% - %ignore%.%extension%')]},{},folder)
}
const simplify=result=>({status:result.status,changes:result.changes.map(c=>({field:c.field,raw:c.raw,value:c.value,values:c.values||[c.value],before:c.before,status:c.status,...(c.sources?{sources:c.sources}:{})})),...(result.conflicts?.length?{conflicts:result.conflicts.map(c=>({field:c.field,values:c.proposals.map(p=>p.values||[p.value])}))}:{})})
const output=execFileSync('docker',['run','--rm','-i','-v',`${process.cwd()}:/app:ro`,'-w','/app','php:8.3-cli','php','tests/php/inference_parser_driver.php'],{input:JSON.stringify(vectors),encoding:'utf8',maxBuffer:10*1024*1024})
const results=JSON.parse(output)
for(const [i,v] of vectors.entries()) {
 const expected=v.definition.mode==='pattern'?inferPath(v.path,v.definition.pattern,v.current):v.definition.mode==='guided'?inferRule(v.path,v.definition.rule,v.current):inferFolderRules(v.path,v.folder,v.definition.assignments,v.current)
 assert.deepEqual(simplify(results[i]),simplify(expected),JSON.stringify(v))
}
console.log(`inference_parser_parity_passed=true vectors=${vectors.length}`)
