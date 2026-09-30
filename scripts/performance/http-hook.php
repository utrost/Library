<?php
// Installed temporarily via Application::boot; only explicitly tagged benchmark requests are profiled.
$provided=$_SERVER['HTTP_X_LIBRARY_BENCHMARK']??'';
if(!is_string($provided)||$provided===''||!is_file('/tmp/library-performance-secret'))return;
if(!hash_equals(trim(file_get_contents('/tmp/library-performance-secret')),$provided))return;
$id=$_SERVER['HTTP_X_LIBRARY_BENCHMARK_ID']??'';
if(!is_string($id)||!preg_match('/^[a-z0-9_-]{1,100}$/D',$id))return;
require_once '/tmp/library-performance-sql-profiler.php';
try{
 $connection=libraryBenchmarkConnection();$config=$connection->getConfiguration();$previous=$config->getSQLLogger();$logger=new LibraryBenchmarkSql();$config->setSQLLogger($logger);$start=hrtime(true);
 register_shutdown_function(static function()use($connection,$config,$previous,$logger,$start,$id){
  $config->setSQLLogger($previous);
  $row=['id'=>$id,'appMs'=>(hrtime(true)-$start)/1e6,'peakMemoryBytes'=>memory_get_peak_usage(true),'status'=>http_response_code(),'sql'=>$logger->summary($connection,true)];
  file_put_contents('/tmp/library-performance-http.jsonl',json_encode($row,JSON_INVALID_UTF8_SUBSTITUTE).PHP_EOL,FILE_APPEND|LOCK_EX);
 });
}catch(\Throwable $e){file_put_contents('/tmp/library-performance-http.jsonl',json_encode(['id'=>$id,'profilerError'=>get_class($e)]).PHP_EOL,FILE_APPEND|LOCK_EX);}
