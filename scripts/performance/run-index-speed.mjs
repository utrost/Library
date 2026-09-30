// Fixed NC34 developer sample. Raw evidence stays private; stdout contains aggregates only.
import {spawn,execFileSync} from 'node:child_process'
import {mkdirSync,createWriteStream} from 'node:fs'
const container=process.env.NC_CONTAINER||'nextcloud',uid=process.env.NC_USER||'uwe',out=process.env.EVIDENCE_DIR||'/tmp/library-index-speed'
const mode=process.argv[2]||'cached'
if(!['select','verify','cached','legacy','rebuild','baseline'].includes(mode))throw new Error('Use select, verify, cached, legacy, rebuild or baseline')
mkdirSync(out,{recursive:true,mode:0o700})
for(const [source,target] of [['scripts/performance/index-speed.php','/tmp/library-index-speed.php'],['scripts/performance/index-speed-state.php','/tmp/library-index-speed-state.php'],['scripts/performance/sql-profiler.php','/tmp/library-performance-sql-profiler.php']])execFileSync('docker',['cp',source,container+':'+target])
const flags=['-e','LIBRARY_BENCHMARK_USER='+uid,'-e','SKIP_SQL='+String(process.env.SKIP_SQL||'0'),'-e','RESET_INDEX_HASH='+(mode==='legacy'?'1':'0'),'-e','FORCE_INDEX_REBUILD='+(mode==='rebuild'?'1':'0'),'-e','OLD_ITEM_SERVICE='+(mode==='baseline'?'1':'0')]
const helper=mode==='verify'?'/tmp/library-index-speed-state.php':'/tmp/library-index-speed.php'
const child=spawn('docker',['exec','-u','www-data',...flags,container,'php',helper,mode==='select'?'select':'run'])
const raw=createWriteStream(out+'/'+mode+'.jsonl',{mode:0o600}),errors=createWriteStream(out+'/'+mode+'.stderr',{mode:0o600});let pending=''
child.stdout.on('data',data=>{raw.write(data);pending+=data.toString();while(pending.includes('\n')){const end=pending.indexOf('\n'),line=pending.slice(0,end);pending=pending.slice(end+1);try{const r=JSON.parse(line);const keys=['event','selected','processed','seconds','durationMs','filesPerSecond','derivedIndexWriteStatements','sqlCount','sqlMs','sqlProfilingEnabled','peakMemoryBytes','metadataWarnings'];console.log(JSON.stringify(Object.fromEntries(keys.filter(k=>k in r).map(k=>[k,r[k]]))))}catch{}}})
child.stderr.pipe(errors);child.on('exit',code=>{raw.end();process.exitCode=code??1})
