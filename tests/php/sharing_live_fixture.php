<?php
declare(strict_types=1);

// Explicit installed-package smoke: creates/removes only fresh, randomly named accounts.
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
set_exception_handler(static function (Throwable $error): void {
    fwrite(STDERR, get_class($error) . ': ' . $error->getMessage() . "\n"); exit(1);
});
$prefix = (string)getenv('LIBRARY_SMOKE_PREFIX');
if (getenv('LIBRARY_SHARING_LIVE_FIXTURE') !== '1'
    || preg_match('/^library-smoke-[a-f0-9]{12}$/D', $prefix) !== 1) {
    throw new RuntimeException('Explicit isolated smoke environment required');
}
$users = \OC::$server->get(\OCP\IUserManager::class);
$statePath = '/tmp/' . $prefix . '.json';
$mode = $argv[1] ?? '';
if ($mode === 'cleanup') {
    if (!is_file($statePath)) throw new RuntimeException('No owned fixture state');
    $state = json_decode(file_get_contents($statePath), true, 512, JSON_THROW_ON_ERROR);
    foreach ($state['created'] as $uid) {
        if (!in_array($uid, [$prefix . '-owner', $prefix . '-other', $prefix . '-outsider'], true)) {
            throw new RuntimeException('Unexpected account in fixture state');
        }
        $user = $users->get($uid);
        if ($user !== null && !$user->delete()) throw new RuntimeException('Fixture account cleanup failed');
    }
    unlink($statePath);
    echo "isolated_fixture_removed=true\n";
    exit;
}
if ($mode !== 'setup') throw new RuntimeException('Unknown mode');
$password = (string)getenv('LIBRARY_SMOKE_PASSWORD');
if (strlen($password) < 20) throw new RuntimeException('Strong disposable password required');
$uids = ['owner' => $prefix . '-owner', 'other' => $prefix . '-other', 'outsider' => $prefix . '-outsider'];
foreach ($uids as $uid) if ($users->userExists($uid)) throw new RuntimeException('Fixture account already exists');
$handle = fopen($statePath, 'x');
if (!$handle) throw new RuntimeException('Fixture state already exists');
chmod($statePath, 0600);
$state = ['created' => []];
fwrite($handle, json_encode($state)); fclose($handle);
foreach ($uids as $uid) {
    $user = $users->createUser($uid, $password);
    if (!$user) throw new RuntimeException('Fixture user creation failed');
    $state['created'][] = $uid;
    file_put_contents($statePath, json_encode($state, JSON_THROW_ON_ERROR));
    \OC::$server->get(\OCP\IConfig::class)->setUserValue($uid, 'core', 'lang', 'en');
    \OC::$server->get(\OCP\IConfig::class)->setUserValue($uid, 'core', 'whatsNewLastRead', '99');
    $version = array_slice(\OC::$server->get(\OCP\ServerVersion::class)->getVersion(), 0, 3);
    \OC::$server->get(\OCP\Config\IUserConfig::class)->setValueString($uid, 'firstrunwizard', 'show', implode('.', $version));
}
$owner = $uids['owner'];
\OC::$server->get(\OCP\IUserSession::class)->setUser($users->get($owner));
$files = \OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder($owner);
$folder = $files->newFolder('LibraryLifecycle');
$pdf = file_get_contents('/tmp/library-live-fixture.pdf');
foreach (['example.pdf', 'excluded.pdf'] as $name) $folder->newFile($name, $pdf);
$root = \OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot($owner, '/LibraryLifecycle', 'Lifecycle fixture', true);
$scan = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan($owner, $root['id']);
if (!empty($scan['errors'])) throw new RuntimeException('Fixture scan failed');
$db = \OC::$server->get(\OCP\IDBConnection::class);
$result = $db->executeQuery('SELECT i.id,f.cached_path FROM *PREFIX*library_items i JOIN *PREFIX*library_files f ON f.id=i.library_file_id WHERE i.user_id=?', [$owner]);
$books = $result->fetchAll(); $result->closeCursor();
if (count($books) !== 2) throw new RuntimeException('Expected exactly two fixture books');
$selected = $excluded = 0;
foreach ($books as $book) {
    if (str_ends_with($book['cached_path'], '/example.pdf')) $selected = (int)$book['id'];
    else $excluded = (int)$book['id'];
}
$lists = \OC::$server->get(\OCA\Library\Service\PersonalListService::class);
$list = $lists->create($owner, 'One selected fixture book', '');
$lists->add($owner, $list['id'], $list['revision'], [$selected]);
echo json_encode($uids + ['excludedId' => $excluded], JSON_THROW_ON_ERROR), "\n";
