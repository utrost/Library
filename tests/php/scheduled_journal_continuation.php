<?php
declare(strict_types=1);
/** Disposable integration: three scheduled worker jobs drain 850 journal targets. */
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$uid = 'library-journal-worker-' . bin2hex(random_bytes(5));
$server = \OC::$server;
$db = $server->get(\OCP\IDBConnection::class);
$account = $server->get(\OCP\IUserManager::class)->createUser($uid, bin2hex(random_bytes(24)));
$journal = $server->get(\OCA\Library\Service\ScanChangeJournal::class);
$schedule = $server->get(\OCA\Library\Service\ScheduledScanService::class);
$scans = $server->get(\OCA\Library\Service\ScanJobService::class);
$runner = $server->get(\OCA\Library\BackgroundJob\ScanJob::class);
$jobs = $server->get(\OCP\BackgroundJob\IJobList::class);
try {
    $server->get(\OCP\Files\IRootFolder::class)->getUserFolder($uid)->newFolder('Journal');
    $server->get(\OCA\Library\Service\RootService::class)->saveRoot($uid, '/Journal', 'Journal', true);
    $schedule->configure($uid, 3600);
    for ($base = 0; $base < 850; $base += 100) {
        $values = []; $params = [];
        for ($i = $base; $i < min($base + 100, 850); $i++) {
            $path = '/Journal/' . sprintf('%04d', $i) . '.epub';
            $values[] = '(?,?,?,?,?)';
            array_push($params, $uid, hash('sha256', 'f:' . $path), $path, 0, 1);
        }
        $db->executeStatement('INSERT INTO *PREFIX*library_scan_changes (user_id,path_hash,target_path,is_directory,generation) VALUES ' . implode(',', $values), $params);
    }
    $db->executeStatement('UPDATE *PREFIX*library_scan_schedule SET last_full_at=?,last_full_revision=?,last_full_roots_hash=?,next_run_at=? WHERE user_id=?',
        [time(), \OCA\Library\Service\ScheduledScanService::currentRevision(), \OCA\Library\Service\ScheduledScanService::rootsDigest($db, $uid), time() - 1, $uid]);
    $queued = $schedule->runDue();
    if ($queued['queued'] !== 1) throw new RuntimeException('Initial scheduled page not queued');
    $cursor = ''; $pages = 0; $processed = 0;
    while ($journal->hasPending($uid)) {
        $page = $journal->page($uid, $cursor);
        if ($page === [] || count($page) > \OCA\Library\Service\ScanChangeJournal::PAGE_SIZE) throw new RuntimeException('Invalid page');
        $id = (int)$schedule->status($uid)['lastJobId'];
        $arg = ['userId' => $uid, 'jobId' => $id, 'scheduled' => true];
        if ($pages > 0) {
            $arg['journalCursor'] = $cursor;
            $arg['continuationDepth'] = $pages;
        }
        $runner->run($arg);
        $jobs->remove(\OCA\Library\BackgroundJob\ScanJob::class, $arg);
        $job = $scans->getJob($uid, $id);
        if ($job['status'] !== 'completed' || $job['errorCount'] !== 0) throw new RuntimeException('Scheduled page failed');
        $processed += count($page);
        $cursor = $page[array_key_last($page)]['hash'];
        $pages++;
        if ($pages > 3) throw new RuntimeException('Worker continuation did not converge');
    }
    if ($pages !== 3 || $processed !== 850) throw new RuntimeException('Wrong number of drained pages');
    echo json_encode(['passed' => true, 'pages' => $pages, 'processed' => $processed,
        'pending' => $journal->hasPending($uid)], JSON_THROW_ON_ERROR), PHP_EOL;
} finally {
    $account->delete();
}
