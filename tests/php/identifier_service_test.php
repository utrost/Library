<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Service/IdentifierService.php';

use OCA\Library\Service\IdentifierService;

function assertSameValue(mixed $expected, mixed $actual, string $message): void {
    if ($expected !== $actual) {
        fwrite(STDERR, $message . "\nExpected: " . var_export($expected, true) . "\nActual: " . var_export($actual, true) . "\n");
        exit(1);
    }
}

$isbn = IdentifierService::normalizeIdentifier('isbn', '978-0-306-40615-7');
assertSameValue('isbn', $isbn['scheme'] ?? null, 'ISBN scheme should be preserved');
assertSameValue('9780306406157', $isbn['normalizedValue'] ?? null, 'ISBN-13 should normalize without punctuation');
assertSameValue(true, $isbn['valid'] ?? null, 'ISBN-13 checksum should validate');
assertSameValue('978-0-306-40615-7', $isbn['displayValue'] ?? null, 'Display ISBN should not be rewritten');

$isbn10 = IdentifierService::normalizeIdentifier('isbn', '0-8044-2957-X');
assertSameValue('080442957X', $isbn10['normalizedValue'] ?? null, 'ISBN-10 X should normalize uppercase');
assertSameValue(true, $isbn10['valid'] ?? null, 'ISBN-10 X checksum should validate');

$issn = IdentifierService::normalizeIdentifier('issn', '0378-5955');
assertSameValue('03785955', $issn['normalizedValue'] ?? null, 'ISSN should normalize without hyphen');
assertSameValue(true, $issn['valid'] ?? null, 'ISSN checksum should validate');

$invalid = IdentifierService::normalizeIdentifier('isbn', '978-0-306-40615-8');
assertSameValue(false, $invalid['valid'] ?? null, 'Invalid checksum should be retained but flagged invalid');

assertSameValue(['scheme' => 'isbn', 'normalizedValue' => '9780306406157'], IdentifierService::normalizeSearchQuery('978 0 306 40615 7'), 'Search should normalize ISBN punctuation');
assertSameValue(['scheme' => 'issn', 'normalizedValue' => '03785955'], IdentifierService::normalizeSearchQuery('0378-5955'), 'Search should normalize ISSN punctuation');

echo "identifier service runtime tests passed\n";
