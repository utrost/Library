<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Http/ReviewQueryPolicy.php';

use OCA\Library\Http\ReviewQueryPolicy;

$cases = [
    ['?scannerConflicts=1&scannerConflicts=0', 'scannerConflicts'],
    ['?scannerConflicts=0&scannerConflicts=1', 'scannerConflicts'],
    ['?scannerConflicts=1&scannerConflicts=1', 'scannerConflicts'],
    ['?scannerConflicts[]=1', 'scannerConflicts'],
    ['?scannerConflicts%5B%5D=1', 'scannerConflicts'],
    ['?status=metadata_error&status=indexed', 'status'],
    ['?status=indexed&status=metadata_error', 'status'],
    ['?status=metadata_error&status=metadata_error', 'status'],
    ['?status[]=metadata_error', 'status'],
];
foreach ($cases as [$query, $key]) {
    $invalid = ReviewQueryPolicy::invalidKeysFromRequestUri('/apps/library/' . $query);
    if (!isset($invalid[$key])) {
        throw new RuntimeException("Expected $key to be invalid for $query");
    }
    $collapsedValue = $key === 'status' ? 'metadata_error' : '1';
    $normalized = $key === 'status'
        ? ReviewQueryPolicy::normalizeStatus($collapsedValue, $invalid)
        : ReviewQueryPolicy::normalizeReviewValue($key, $collapsedValue, $invalid);
    if ($normalized !== '') {
        throw new RuntimeException("Expected $key not to apply after framework scalar collapse for $query");
    }
}
foreach (['?scannerConflicts=1', '?status=metadata_error', '?status=indexed'] as $query) {
    if (ReviewQueryPolicy::invalidKeysFromRequestUri('/apps/library/' . $query) !== []) {
        throw new RuntimeException("Expected a valid scalar query: $query");
    }
}
if (ReviewQueryPolicy::normalizeReviewValue('scannerConflicts', '1', []) !== '1'
    || ReviewQueryPolicy::normalizeStatus('metadata_error', []) !== 'metadata_error'
    || ReviewQueryPolicy::normalizeStatus('indexed', []) !== 'indexed') {
    throw new RuntimeException('Expected canonical Review values and ordinary scalar status to remain valid');
}

echo "review query policy tests passed\n";
