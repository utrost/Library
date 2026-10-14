import { readFileSync } from 'node:fs'
const [before,after]=process.argv.slice(2)
if(!before||!after)throw new Error('Usage: npm run perf:compare -- BEFORE/results.json AFTER/results.json')
const a=JSON.parse(readFileSync(before,'utf8')),b=JSON.parse(readFileSync(after,'utf8'))
console.log('| Operation | Before median | After median | Change |');console.log('| --- | ---: | ---: | ---: |')
for(const current of b.http){const old=a.http.find(x=>x.label===current.label);if(!old||!Number.isFinite(current.medianMs)||!Number.isFinite(old.medianMs))continue;const pct=(current.medianMs/old.medianMs-1)*100;console.log(`| ${current.label} | ${old.medianMs.toFixed(1)} ms | ${current.medianMs.toFixed(1)} ms | ${pct>0?'+':''}${pct.toFixed(1)}% |`)}
console.log(`\nFailures: before ${(a.failures||[]).join(', ')||'none recorded'}; after ${(b.failures||[]).join(', ')||'none recorded'}`)
