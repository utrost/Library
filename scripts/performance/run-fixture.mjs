import { execFileSync } from 'node:child_process'
import { randomBytes } from 'node:crypto'
import { mkdirSync,readFileSync,writeFileSync } from 'node:fs'
const container=process.env.NC_CONTAINER||'nextcloud',uid='library-perf-'+randomBytes(6).toString('hex'),name='Library duplicates smoke '+Date.now(),out=process.env.EVIDENCE_DIR||'/tmp/library-performance-fixture';mkdirSync(out,{recursive:true,mode:0o700})
const docker=(args)=>execFileSync('docker',args,{encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:32*1024*1024,timeout:180000})
const cp=(src,dst)=>docker(['cp',src,`${container}:${dst}`]),php=(script,action)=>docker(['exec','-u','www-data','-e',`LIBRARY_BENCHMARK_USER=${uid}`,'-e',`LIBRARY_SMOKE_USER=${uid}`,'-e',`LIBRARY_SMOKE_NAME=${name}`,container,'php',script,action])
cp('scripts/performance/fixture-account.php','/tmp/library-performance-fixture-account.php');cp('scripts/performance/sql-profiler.php','/tmp/library-performance-sql-profiler.php');cp('scripts/performance/fixture-work.php','/tmp/library-performance-fixture-work.php')
const helper=readFileSync('scripts/duplicate-books-fixture.php','utf8').replace("if($action==='suggestion-integration')", "if($action==='performance'){require '/tmp/library-performance-fixture-work.php';exit;}\nif($action==='suggestion-integration')");writeFileSync(`${out}/fixture-helper.php`,helper);cp(`${out}/fixture-helper.php`,'/tmp/library-performance-fixture.php')
let created=false
try{php('/tmp/library-performance-fixture-account.php','create');created=true;php('/tmp/library-performance-fixture.php','create');writeFileSync(`${out}/processes.jsonl`,php('/tmp/library-performance-fixture.php','performance'));writeFileSync(`${out}/unchanged.json`,php('/tmp/library-performance-fixture.php','verify'));console.log('Fixture processes measured; original fixture hashes and metadata unchanged')}
finally{if(created)writeFileSync(`${out}/cleanup.json`,php('/tmp/library-performance-fixture-account.php','delete'));console.log('Disposable benchmark account removed')}
