<?php

declare(strict_types=1);

namespace OCP\AppFramework {
    class Controller {}
}

namespace {
require_once dirname(__DIR__) . '/lib/Controller/ItemController.php';

$controller = (new ReflectionClass(\OCA\Library\Controller\ItemController::class))->newInstanceWithoutConstructor();
$parser = new ReflectionMethod($controller, 'parseExplicitItemIds');

$cases = [
    'valid native ints, canonical strings, and duplicates' => [[1, '2', 1, '2', 3], [1, 2, 3]],
    'maximum native integer' => [[PHP_INT_MAX, (string)PHP_INT_MAX], [PHP_INT_MAX]],
    'empty list' => [[], []],
    'scalar top-level' => ['1', []],
    'nested array' => [[1, [2]], []],
    'numeric prefix' => [[1, '2oops'], []],
    'decimal' => [[1, '2.5'], []],
    'plus sign' => [[1, '+2'], []],
    'minus sign' => [[1, '-2'], []],
    'whitespace' => [[1, ' 2'], []],
    'leading zero' => [[1, '02'], []],
    'string zero' => [[1, '0'], []],
    'native zero' => [[1, 0], []],
    'native negative' => [[1, -2], []],
    'boolean true' => [[1, true], []],
    'boolean false' => [[1, false], []],
    'null' => [[1, null], []],
    'positive overflow' => [[1, (string)PHP_INT_MAX . '0'], []],
];

foreach ($cases as $name => [$input, $expected]) {
    $actual = $parser->invoke($controller, $input);
    if ($actual !== $expected) {
        fwrite(STDERR, $name . ': expected ' . var_export($expected, true) . ', got ' . var_export($actual, true) . PHP_EOL);
        exit(1);
    }
}

echo 'Explicit item ID parser: ' . count($cases) . " cases passed\n";
}
