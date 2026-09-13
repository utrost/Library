<?php

declare(strict_types=1);

namespace OCP\AppFramework {
    class Controller {}
}

namespace {
require_once dirname(__DIR__) . '/lib/Exception/BatchLimitExceededException.php';
require_once dirname(__DIR__) . '/lib/Service/SelectedItemIds.php';

$cases = [
    'valid native ints and canonical strings' => [[1, '2', 3], [1, 2, 3]],
    'maximum native integer' => [[PHP_INT_MAX], [PHP_INT_MAX]],
];

foreach ($cases as $name => [$input, $expected]) {
    $actual = \OCA\Library\Service\SelectedItemIds::parse($input);
    if ($actual !== $expected) {
        fwrite(STDERR, $name . ': expected ' . var_export($expected, true) . ', got ' . var_export($actual, true) . PHP_EOL);
        exit(1);
    }
}

$invalid = [[], '1', [1, [2]], [1, '2oops'], [1, '2.5'], [1, '+2'], [1, '-2'], [1, ' 2'], [1, '02'], [1, '0'], [1, 0], [1, -2], [1, true], [1, false], [1, null], [1, (string)PHP_INT_MAX . '0'], [1, 1]];
foreach ($invalid as $input) {
    try { \OCA\Library\Service\SelectedItemIds::parse($input); throw new RuntimeException('invalid input accepted'); }
    catch (InvalidArgumentException) {}
}
try { \OCA\Library\Service\SelectedItemIds::parse(range(1, 5001)); throw new RuntimeException('oversized input accepted'); }
catch (\OCA\Library\Exception\BatchLimitExceededException) {}

echo 'Explicit item ID parser: strict valid, invalid, duplicate, and limit cases passed' . "\n";
}
