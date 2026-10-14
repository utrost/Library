import assert from 'node:assert/strict'
import {execFileSync} from 'node:child_process'
import {writeFileSync,appendFileSync,readFileSync,lstatSync} from 'node:fs'
import {resolve} from 'node:path'
import {createEvidenceDirectory} from '../private-evidence-directory.mjs'
const container=process.env.NC_CONTAINER||'nextcloud',uid=process.env.NC_USER||'maintainer'
const resume=process.env.RESUME==='1'
if(resume&&!process.env.EVIDENCE_DIR)throw new Error('RESUME requires the exact evidence_dir printed by the initial run')
const out=resume?resolve(process.env.EVIDENCE_DIR):createEvidenceDirectory('library-full-scheduled-scan')
if(resume){const stat=lstatSync(out);assert.ok(stat.isDirectory()&&!stat.isSymbolicLink()&&stat.uid===process.getuid()&&(stat.mode&0o077)===0,'Resume requires an owned private evidence directory')}
const expectedScope=process.env.EXPECTED_SCOPE||'all';assert.ok(['all','incremental'].includes(expectedScope))
execFileSync('docker',['cp','scripts/performance/full-scheduled-scan.php',container+':/tmp/library-full-scheduled-scan.php'])
const read=(action,preparedAt=0)=>JSON.parse(execFileSync('docker',['exec','-u','www-data','-e','LIBRARY_BENCHMARK_USER='+uid,'-e','LIBRARY_BENCHMARK_PREPARED_AT='+preparedAt,container,'php','/tmp/library-full-scheduled-scan.php',action],{encoding:'utf8',maxBuffer:2*1024*1024}))
const before=process.env.RESUME==='1'?JSON.parse(readFileSync(out+'/before.json','utf8')):read('prepare');writeFileSync(out+'/before.json',JSON.stringify(before,null,2));console.log('Existing schedule made due; waiting for host Cron and Nextcloud worker')
const deadline=Date.now()+Number(process.env.MAX_SECONDS||10800)*1000;let lastStatus,lastIndexed=-1,lastLog=0,observedScheduled=false,observedWorker=false,queuedArgumentObserved=false
while(Date.now()<deadline){
 const row=read('status');appendFileSync(out+'/progress.jsonl',JSON.stringify(row)+'\n')
 const own=row.job&&row.job.id!==before.originalSchedule.lastJobId&&row.job.startedAt>=before.preparedAt
 if(own){
  if(row.nextcloudQueue.some(q=>q.scheduled))queuedArgumentObserved=true
  // QueuedJob removes its queue row when execution begins, often before the next poll.
  if(row.schedule.lastJobId===row.job.id&&row.job.scopeType===expectedScope)observedScheduled=true
  if(row.latestNextcloudRun?.status===0&&Number(row.latestNextcloudRun.pid)>0)observedWorker=true
  if(expectedScope==='incremental'&&row.job.runStartedAt&&row.job.status==='completed')observedWorker=true
  if(row.job.status!==lastStatus||Date.now()-lastLog>=30000){console.log(row.job.status+': '+row.job.filesIndexed+' publications, '+row.job.metadataErrors+' metadata warnings');lastLog=Date.now()}
  lastStatus=row.job.status;lastIndexed=row.job.filesIndexed
  if(['completed','failed','cancelled'].includes(row.job.status)){
   const final=read('final',before.preparedAt);writeFileSync(out+'/final.json',JSON.stringify(final,null,2))
   assert.equal(final.job.status,'completed');assert.equal(final.job.errorCount,0);assert.equal(final.job.scopeType,expectedScope);assert.ok(observedScheduled,'Scheduler last-job ID matches the expected scan scope');assert.ok(observedWorker,'Nextcloud worker execution observed')
   if(expectedScope==='all')assert.ok(final.roots.every(r=>Number(r.last_scan_at)>=final.job.startedAt),'Every enabled root completed')
   else {assert.ok(before.originalSchedule.lastFullAt>0,'A successful full checkpoint must exist');assert.equal(final.schedule.lastFullAt,before.originalSchedule.lastFullAt,'Incremental run retains full checkpoint')}
   if(process.env.EXPECT_EMPTY==='1'){assert.equal(final.job.filesIndexed,0,'No-change run enumerates zero publications');assert.equal(final.job.metadataExtractions,0,'No-change run extracts zero metadata records')}
   assert.deepEqual(final.baselines.userCorrections,before.baselines.userCorrections,'User corrections unchanged')
   assert.deepEqual(final.baselines.sourceIdentityMarkers,before.baselines.sourceIdentityMarkers,'Pre-existing source identity/version markers unchanged; newly discovered sources are counted separately')
   assert.equal(final.schedule.interval,before.originalSchedule.interval);assert.ok(final.schedule.nextRunAt>final.at)
   writeFileSync(out+'/verification.json',JSON.stringify({passed:true,scope:expectedScope,observedScheduled,observedWorker,queuedArgumentObserved,allEnabledRootsCompleted:expectedScope==='all',userCorrectionsUnchanged:true,sourceIdentityMarkersUnchanged:true,intervalUnchanged:true,job:final.job,latestNextcloudRun:final.latestNextcloudRun},null,2))
   console.log(expectedScope+' scheduled scan verified');process.exit(0)
  }
 }else if(Date.now()-lastLog>=30000){console.log('Waiting for scheduled dispatch');lastLog=Date.now()}
 await new Promise(resolve=>setTimeout(resolve,10000))
}
throw new Error('Full-scan observation timed out; last status '+lastStatus+', indexed '+lastIndexed)
