<?php
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
try {
    $state = json_decode(file_get_contents('/tmp/library-author-directory-fixture.json'), true, 512, JSON_THROW_ON_ERROR);
    $uid = $state['uid'] ?? '';
    if (!preg_match('/^library-author-[a-f0-9]{12}$/D', $uid)) throw new RuntimeException('Owned fixture account required');
    $db = \OC::$server->get(\OCP\IDBConnection::class);
    $author = $db->executeQuery('SELECT id,revision FROM *PREFIX*library_authors WHERE user_id=? AND merged_into IS NULL ORDER BY id LIMIT 1', [$uid])->fetch();
    if (!$author) throw new RuntimeException('Fixture author missing');
    $directory = \OC::$server->get(\OCA\Library\Service\AuthorDirectoryService::class);
    $directory->update($uid, (int)$author['id'], (int)$author['revision'], [
        'display_name' => 'John Preferred', 'sort_name' => 'Doe, John', 'given_name' => 'John', 'family_name' => 'Doe',
    ]);
    $items = \OC::$server->get(\OCA\Library\Service\ItemService::class);
    $preferred = $items->creatorSuggestions($uid, [], 'Doe');
    if (!in_array('John Preferred', $preferred, true)) throw new RuntimeException('Sort-name prefix did not suggest preferred identity');
    $both = $items->creatorSuggestions($uid, [], 'John');
    if (!in_array('John Preferred', $both, true) || !in_array('John Doe', $both, true)) throw new RuntimeException('Preferred and source names were not both suggested');
    if (in_array('John Preferred', $items->creatorSuggestions($uid, ['language' => 'de'], 'Doe'), true)) throw new RuntimeException('Preferred suggestion escaped language filter');
    if (!in_array('John Preferred', $items->creatorSuggestions($uid, ['language' => 'en'], 'Doe'), true)) throw new RuntimeException('Preferred suggestion missed matching language filter');
    $filtered = $items->queryCatalogue($uid, ['creator' => 'John Preferred'], ['page' => 1, 'limit' => 10], false);
    if ($filtered['total'] !== 2) throw new RuntimeException('Preferred suggestion did not resolve to both linked books');
    foreach (['Preferred', 'preferred', 'Doe'] as $term) {
        foreach (['q', 'creator'] as $filter) {
            $found = $items->queryCatalogue($uid, [$filter => $term], ['page' => 1, 'limit' => 10], false);
            if ($found['total'] !== 2) throw new RuntimeException('Partial canonical name/sort-name search missed linked books: ' . $filter . ':' . $term);
        }
    }
    if (!in_array('John Preferred', $items->creatorSuggestions($uid, [], 'Preferred'), true)) throw new RuntimeException('Surname inside display name missing from suggestions');
    foreach (['Pr', '%__', 'not-a-matching-author'] as $term) {
        if ($items->queryCatalogue($uid, ['creator' => $term], ['page' => 1, 'limit' => 10], false)['total'] !== 0) throw new RuntimeException('Partial author threshold/literal matching failed');
    }
    if ($items->queryCatalogue($uid, ['creator' => 'Preferred', 'language' => 'de'], ['page' => 1, 'limit' => 10], false)['total'] !== 0) throw new RuntimeException('Partial author search escaped language filter');
    if ($items->queryCatalogue($uid . '-other', ['q' => 'Preferred'], ['page' => 1, 'limit' => 10], false)['total'] !== 0) throw new RuntimeException('Partial search escaped ownership');
    $credits = $db->executeQuery('SELECT DISTINCT creators FROM *PREFIX*library_items WHERE user_id=?', [$uid])->fetchAll();
    if (count($credits) !== 1 || $credits[0]['creators'] !== 'John Doe') throw new RuntimeException('Source credits changed');
    echo json_encode(['passed' => true, 'uid' => $uid, 'authorId' => (int)$author['id'], 'preferredFromSortName' => true, 'filteredSuggestions' => true, 'sourceCreditsPreserved' => true]), PHP_EOL;
} catch (Throwable $error) {
    fwrite(STDERR, get_class($error) . ': ' . $error->getMessage() . ' at ' . $error->getFile() . ':' . $error->getLine() . PHP_EOL);
    exit(1);
}
