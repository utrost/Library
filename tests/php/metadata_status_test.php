<?php

declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/lib/Presentation/MetadataStatus.php';

use OCA\Library\Presentation\MetadataStatus;

$base = [
    'publicationType' => 'book', 'title' => 'A book', 'creators' => 'Ada',
    'publication' => '', 'publicationDate' => '2026', 'language' => 'en',
    'publisher' => 'Press', 'metadataSource' => 'epub-opf',
    'fieldSources' => ['title' => 'epub-opf', 'creators' => 'path-template'],
    'scanStatus' => 'indexed', 'scanError' => '', 'scannerConflictCount' => 0,
    'starred' => true, 'personalRating' => 2, 'workflowStatus' => 'reading',
];

$cases = [
    'book applicable fields' => [$base, 6],
    'comic applicable fields' => [[...$base, 'publicationType' => 'comic'], 5],
    'manual applicable fields' => [[...$base, 'publicationType' => 'manual'], 5],
];
foreach ($cases as $name => [$item, $total]) {
    $status = MetadataStatus::forItem($item);
    if ($status['completeness']['total'] !== $total) {
        fwrite(STDERR, "$name: unexpected applicable-field total\n"); exit(1);
    }
}

$before = MetadataStatus::forItem($base)['completeness'];
$after = MetadataStatus::forItem([...$base, 'personalRating' => 5])['completeness'];
if ($before !== $after) { fwrite(STDERR, "rating changed completeness\n"); exit(1); }

$provenance = [
    'filename-fallback' => 'inferred', 'path-template' => 'inferred',
    'epub-opf' => 'extracted', 'mixed' => 'mixed',
];
foreach ($provenance as $source => $expected) {
    $status = MetadataStatus::forItem([...$base, 'metadataSource' => $source, 'fieldSources' => []]);
    if ($status['confidence'] !== $expected) { fwrite(STDERR, "$source confidence mismatch\n"); exit(1); }
}

$attention = MetadataStatus::forItem([...$base, 'scannerConflictCount' => 2])['attention'];
if (!in_array('suggestions', $attention, true)) { fwrite(STDERR, "suggestions missing from attention\n"); exit(1); }
$personal = MetadataStatus::forItem($base)['personal'];
if ($personal !== ['starred' => true, 'rating' => 2, 'workflow' => 'reading']) {
    fwrite(STDERR, "personal values not preserved\n"); exit(1);
}

echo "Metadata status: " . (count($cases) + count($provenance) + 3) . " cases passed\n";
