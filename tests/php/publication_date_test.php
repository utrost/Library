<?php

declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/lib/Presentation/PublicationDate.php';
require_once dirname(__DIR__, 2) . '/lib/Service/ItemService.php';

use OCA\Library\Presentation\PublicationDate;
use OCA\Library\Service\ItemService;

function expectPublicationDate(string $input, string $expected): void {
    $actual = PublicationDate::forEditor($input);
    if ($actual !== $expected) {
        fwrite(STDERR, "Expected {$input} to normalize to {$expected}; got {$actual}\n");
        exit(1);
    }
}

expectPublicationDate('2011-09-18T22:00:00+00:00', '2011-09-18');
expectPublicationDate('2011-09-18T23:30:00-11:00', '2011-09-18');
expectPublicationDate('', '');
expectPublicationDate('2026', '2026');
expectPublicationDate('2026-09', '2026-09');
expectPublicationDate('not-a-date', 'not-a-date');

$service = (new ReflectionClass(ItemService::class))->newInstanceWithoutConstructor();
$validate = new ReflectionMethod(ItemService::class, 'validateEditableMetadata');
$validate->invoke($service, ['publicationDate' => '']);
try {
    $validate->invoke($service, ['publicationDate' => 'not-a-date']);
    fwrite(STDERR, "Invalid publication date was accepted\n");
    exit(1);
} catch (ReflectionException $exception) {
    throw $exception;
} catch (Throwable $exception) {
    $cause = $exception instanceof ReflectionException ? $exception : ($exception->getPrevious() ?? $exception);
    if (!$cause instanceof InvalidArgumentException) {
        throw $exception;
    }
}

echo "Publication date: 8 cases passed\n";
