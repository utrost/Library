// Focused PHP deployment with rollback copies and explicit HTTP opcode invalidation.
import { execFileSync } from 'node:child_process'
import { randomBytes,createHash } from 'node:crypto'
import { readFileSync,writeFileSync,mkdirSync,rmSync } from 'node:fs'
import { dirname,resolve } from 'node:path'
const files=process.argv.slice(2),container=process.env.NC_CONTAINER||'nextcloud',base=process.env.NC_URL||'http://100.123.149.120:8088'
if(!files.length||files.some(f=>!/^(?:lib\/[a-zA-Z0-9_/]+|templates\/[a-zA-Z0-9_-]+)\.php$/.test(f)))throw new Error('Pass explicit lib/*.php or templates/*.php files')
const out=resolve(process.env.EVIDENCE_DIR||`/tmp/library-php-deploy-${Date.now()}`);mkdirSync(out,{recursive:true,mode:0o700})
const docker=args=>execFileSync('docker',args,{encoding:'utf8',stdio:['ignore','pipe','pipe']})
const manifest=[]
for(const file of files){const path='/var/www/html/custom_apps/library/'+file,backup=out+'/before/'+file;mkdirSync(dirname(backup),{recursive:true});let previous=null
 try{docker(['cp',container+':'+path,backup]);previous=createHash('sha256').update(readFileSync(backup)).digest('hex')}catch{}
 const bytes=readFileSync(file);docker(['exec',container,'mkdir','-p',dirname(path)]);docker(['cp',file,container+':'+path]);docker(['exec',container,'chown','www-data:www-data',path]);manifest.push({file,before:previous,after:createHash('sha256').update(bytes).digest('hex')})
}
const secret=randomBytes(32).toString('hex'),name='ocs-provider/library-opcache-'+randomBytes(12).toString('hex')+'.php',helper=out+'/opcode-helper.php'
try{
 writeFileSync(helper,`<?php if (!hash_equals('${secret}', $_SERVER['HTTP_X_LIBRARY_DEPLOY'] ?? '')) {http_response_code(403);exit;} $files=${JSON.stringify(files)}; $result=[];foreach($files as $file) {$path=dirname(__DIR__).'/custom_apps/library/'.$file;$result[$file]=['invalidated'=>!function_exists('opcache_invalidate')||opcache_invalidate($path,true),'sha256'=>hash_file('sha256',$path)];} echo json_encode($result);`,{mode:0o600})
 // JSON array literals are also PHP array literals for this validated string-only path list.
 docker(['cp',helper,container+':/var/www/html/'+name]);docker(['exec',container,'chown','www-data:www-data','/var/www/html/'+name])
 const response=await fetch(base+'/'+name,{headers:{'X-Library-Deploy':secret},signal:AbortSignal.timeout(15000)});if(response.status!==200)throw new Error('Opcode invalidation HTTP '+response.status)
 const result=await response.json();for(const entry of manifest){if(result[entry.file]?.sha256!==entry.after)throw new Error('Deployed content mismatch: '+entry.file);entry.opcodeInvalidated=result[entry.file].invalidated}
 writeFileSync(out+'/deployment.json',JSON.stringify({at:new Date().toISOString(),container,files:manifest},null,2));console.log('Deployed '+files.length+' PHP files; evidence '+out)
}finally{docker(['exec',container,'rm','-f','/var/www/html/'+name]);rmSync(helper,{force:true})}
