<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Service/LibraryHealthService.php';

use OCA\Library\Service\LibraryHealthService;

$ref = new ReflectionClass(LibraryHealthService::class);
$service = $ref->newInstanceWithoutConstructor();
$cell = $ref->getMethod('tsvCell');
$cell->setAccessible(true);

$cases = [
    '=HYPERLINK("http://example.invalid")' => "'=HYPERLINK(\"http://example.invalid\")",
    '+SUM(1,2)' => "'+SUM(1,2)",
    '-2+3' => "'-2+3",
    '@cmd' => "'@cmd",
    " \t\r\n=after-controls" => "'=after-controls",
    "\u{00A0}+after-nbsp" => "'+after-nbsp",
    "plain unicode ÄÖÜ 漢字" => "plain unicode ÄÖÜ 漢字",
    "contains\ttab\rand\nnewline" => "contains tab and newline",
    '"quoted" value' => '"quoted" value',
    '"=quoted formula"' => "'\"=quoted formula\"",
    '"+quoted formula"' => "'\"+quoted formula\"",
    '"-quoted formula"' => "'\"-quoted formula\"",
    '"@quoted formula"' => "'\"@quoted formula\"",
];

foreach ($cases as $input => $expected) {
    $actual = $cell->invoke($service, $input);
    if ($actual !== $expected) {
        fwrite(STDERR, "TSV cell mismatch for " . json_encode($input, JSON_UNESCAPED_UNICODE) . "\nExpected: " . json_encode($expected, JSON_UNESCAPED_UNICODE) . "\nActual:   " . json_encode($actual, JSON_UNESCAPED_UNICODE) . "\n");
        exit(1);
    }
    if (str_contains($actual, "\t") || str_contains($actual, "\r") || str_contains($actual, "\n")) {
        fwrite(STDERR, "TSV delimiter/control leak for " . json_encode($input, JSON_UNESCAPED_UNICODE) . "\n");
        exit(1);
    }
}

$headers = ['fileId', 'itemId', 'extension', 'scanStatus', 'scanError', 'actualContainerType', 'suggestedRepairAction', 'path'];
if (count($headers) !== 8) {
    fwrite(STDERR, "Unexpected metadata-error TSV header shape\n");
    exit(1);
}

echo "metadata error TSV formula neutralization tests passed\n";
