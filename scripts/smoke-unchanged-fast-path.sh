#!/usr/bin/env bash
set -euo pipefail

CONTAINER="${NEXTCLOUD_CONTAINER:-nextcloud}"

docker exec -i -u www-data "$CONTAINER" php /dev/stdin <<'PHP'
<?php

declare(strict_types=1);

use OCA\Library\Metadata\PublicationMetadataService;
use OCA\Library\Service\LibraryScanner;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;

require_once '/var/www/html/lib/base.php';

function failSmoke(string $message): never {
    fwrite(STDERR, "unchanged_fast_path_smoke_error={$message}\n");
    exit(1);
}

function emit(string $key, int|string $value): void {
    fwrite(STDOUT, "{$key}={$value}\n");
}

/** @return array<int, int> */
function itemTimestamps(IDBConnection $db, string $userId, int $rootId): array {
    $query = $db->getQueryBuilder();
    $result = $query->select('i.id', 'i.updated_at')
        ->from('library_items', 'i')
        ->innerJoin('i', 'library_files', 'f', $query->expr()->eq('i.library_file_id', 'f.id'))
        ->where($query->expr()->eq('i.user_id', $query->createNamedParameter($userId)))
        ->andWhere($query->expr()->eq('f.root_id', $query->createNamedParameter($rootId)))
        ->executeQuery();
    $timestamps = [];
    while ($row = $result->fetch()) {
        $timestamps[(int)$row['id']] = (int)$row['updated_at'];
    }
    $result->closeCursor();
    ksort($timestamps);
    return $timestamps;
}

function markerCount(IDBConnection $db, string $userId, int $rootId): int {
    $query = $db->getQueryBuilder();
    $result = $query->select($query->func()->count('*', 'marker_count'))
        ->from('library_files')
        ->where($query->expr()->eq('user_id', $query->createNamedParameter($userId)))
        ->andWhere($query->expr()->eq('root_id', $query->createNamedParameter($rootId)))
        ->andWhere($query->expr()->eq('metadata_extractor_revision', $query->createNamedParameter(PublicationMetadataService::PIPELINE_REVISION)))
        ->andWhere('metadata_input_fingerprint IS NOT NULL')
        ->executeQuery();
    $count = (int)$result->fetchOne();
    $result->closeCursor();
    return $count;
}

/** @return array<string, string> */
function sourceObservations(Folder $folder): array {
    $observations = [];
    foreach ($folder->getDirectoryListing() as $node) {
        if ($node instanceof Folder) {
            $observations += sourceObservations($node);
            continue;
        }
        if (!$node instanceof File) {
            continue;
        }
        $observations[(string)$node->getId()] = hash('sha256', implode("\0", [
            $node->getPath(),
            $node->getEtag(),
            (string)$node->getMTime(),
            (string)$node->getSize(),
            $node->getMimetype(),
        ]));
    }
    ksort($observations);
    return $observations;
}

function resolveFolder(IRootFolder $rootFolder, string $userId, string $path): Folder {
    $userFolder = $rootFolder->getUserFolder($userId);
    if ($path === '' || $path === '/') {
        return $userFolder;
    }
    $node = $userFolder->get(ltrim($path, '/'));
    if (!$node instanceof Folder) {
        failSmoke('selected_root_unavailable');
    }
    return $node;
}

function rewrittenRows(array $before, array $after): int {
    $rewritten = 0;
    foreach ($after as $id => $updatedAt) {
        if (array_key_exists($id, $before) && $before[$id] !== $updatedAt) {
            $rewritten++;
        }
    }
    return $rewritten;
}

function waitUntilAfter(int $timestamp): void {
    $deadline = microtime(true) + 3.0;
    while (time() <= $timestamp) {
        if (microtime(true) >= $deadline) {
            failSmoke('timestamp_separation_timeout');
        }
        usleep(10_000);
    }
}

$server = \OC::$server;
$db = $server->get(IDBConnection::class);
$scanner = $server->get(LibraryScanner::class);
$rootFolder = $server->get(IRootFolder::class);

$rootQuery = $db->getQueryBuilder();
$rootResult = $rootQuery->select('r.id', 'r.user_id', 'r.path')
    ->selectAlias($rootQuery->func()->count('f.id'), 'fixture_count')
    ->from('library_roots', 'r')
    ->innerJoin('r', 'library_files', 'f', $rootQuery->expr()->eq('f.root_id', 'r.id'))
    ->where($rootQuery->expr()->eq('r.enabled', $rootQuery->createNamedParameter(1)))
    ->andWhere($rootQuery->expr()->neq('f.scan_status', $rootQuery->createNamedParameter('missing')))
    ->groupBy('r.id', 'r.user_id', 'r.path')
    ->having($rootQuery->expr()->gt('fixture_count', $rootQuery->createNamedParameter(0)))
    ->orderBy('fixture_count', 'ASC')
    ->addOrderBy('r.id', 'ASC')
    ->setMaxResults(1)
    ->executeQuery();
$selected = $rootResult->fetch();
$rootResult->closeCursor();
if ($selected === false) {
    failSmoke('no_non_empty_enabled_root');
}

$userId = (string)$selected['user_id'];
$rootId = (int)$selected['id'];
$fixtureCount = (int)$selected['fixture_count'];
$folder = resolveFolder($rootFolder, $userId, (string)$selected['path']);

$sourceBefore = sourceObservations($folder);
$timestampsBefore = itemTimestamps($db, $userId, $rootId);
$rowsBefore = count($timestampsBefore);
$first = $scanner->scan($userId, $rootId);
$firstScanCompletedAt = time();
waitUntilAfter($firstScanCompletedAt);
$timestampsAfterFirst = itemTimestamps($db, $userId, $rootId);
$rowsAfterFirst = count($timestampsAfterFirst);
$firstRewritten = rewrittenRows($timestampsBefore, $timestampsAfterFirst);
$markersAfterFirst = markerCount($db, $userId, $rootId);

$second = $scanner->scan($userId, $rootId);
$timestampsAfterSecond = itemTimestamps($db, $userId, $rootId);
$rowsAfterSecond = count($timestampsAfterSecond);
$secondRewritten = rewrittenRows($timestampsAfterFirst, $timestampsAfterSecond);
$markersAfterSecond = markerCount($db, $userId, $rootId);
$sourceAfter = sourceObservations($folder);
$sourceObservationChanges = $sourceBefore === $sourceAfter ? 0 : 1;

$accepted = $first['roots'] === 1
    && $second['roots'] === 1
    && $first['indexed'] === $fixtureCount
    && $second['indexed'] === $fixtureCount
    && count($first['errors']) === 0
    && count($second['errors']) === 0
    && $first['filesMissing'] === 0
    && $second['filesMissing'] === 0
    && $firstRewritten >= 0
    && $secondRewritten === 0
    && $markersAfterFirst > 0
    && $markersAfterSecond === $markersAfterFirst
    && $rowsBefore === $rowsAfterFirst
    && $rowsAfterSecond === $rowsAfterFirst
    && $sourceObservationChanges === 0;

emit('root_count_first', (int)$first['roots']);
emit('root_count_second', (int)$second['roots']);
emit('fixture_count', $fixtureCount);
emit('indexed_first', (int)$first['indexed']);
emit('indexed_second', (int)$second['indexed']);
emit('errors_first', count($first['errors']));
emit('errors_second', count($second['errors']));
emit('missing_first', (int)$first['filesMissing']);
emit('missing_second', (int)$second['filesMissing']);
emit('catalogue_rows_before', $rowsBefore);
emit('catalogue_rows_after_first', $rowsAfterFirst);
emit('catalogue_rows_after_second', $rowsAfterSecond);
emit('catalogue_rows_rewritten_first', $firstRewritten);
emit('catalogue_rows_rewritten_second', $secondRewritten);
emit('markers_after_first', $markersAfterFirst);
emit('markers_after_second', $markersAfterSecond);
emit('source_observation_changes', $sourceObservationChanges);
emit('unchanged_fast_path_smoke_ok', $accepted ? 'true' : 'false');

if (!$accepted) {
    exit(1);
}
PHP
