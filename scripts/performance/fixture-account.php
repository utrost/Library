<?php
define('OC_CONSOLE',true);require '/var/www/html/lib/base.php';
$uid=getenv('LIBRARY_BENCHMARK_USER');if(!is_string($uid)||!preg_match('/^library-perf-[a-f0-9]{12}$/D',$uid))throw new RuntimeException('Invalid disposable account');
$users=\OC::$server->get(\OCP\IUserManager::class);
if(($argv[1]??'')==='create'){if($users->userExists($uid))throw new RuntimeException('Account already exists');$users->createUser($uid,bin2hex(random_bytes(24)));\OC::$server->get(\OCP\IConfig::class)->setUserValue($uid,'firstrunwizard','show','99.0.0');echo '{"created":true}';}
elseif(($argv[1]??'')==='delete'){$users->get($uid)?->delete();echo '{"deleted":true}';}
else throw new RuntimeException('Unknown action');
