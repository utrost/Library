<?php

declare(strict_types=1);

namespace OCP {
    interface IDBConnection { public function getQueryBuilder(); }
}
namespace OCP\DB\QueryBuilder {
    interface IQueryBuilder { public const PARAM_INT_ARRAY = 101; }
}

namespace {
    require_once __DIR__ . '/../../lib/Exception/BatchLimitExceededException.php';
    require_once __DIR__ . '/../../lib/Service/FileIndexService.php';

    use OCA\Library\Exception\BatchLimitExceededException;
    use OCA\Library\Service\FileIndexService;

    function expectCoverSelection(bool $condition, string $message): void {
        if (!$condition) throw new RuntimeException($message);
    }

    final class CoverSelectionResult {
        private int $offset = 0;
        public function __construct(private array $rows) {}
        public function fetch(): array|false { return $this->rows[$this->offset++] ?? false; }
        public function closeCursor(): void {}
    }

    final class CoverSelectionExpression {
        public function eq(string $left, mixed $right): array { return [$left, $right]; }
        public function in(string $left, mixed $right): array { return [$left, $right]; }
    }

    final class CoverSelectionQueryBuilder {
        private array $conditions = [];
        public function __construct(private array $owned) {}
        public function select(string ...$columns): self { return $this; }
        public function from(string $table, ?string $alias = null): self { return $this; }
        public function where(mixed $condition): self { $this->conditions[] = $condition; return $this; }
        public function andWhere(mixed $condition): self { $this->conditions[] = $condition; return $this; }
        public function expr(): CoverSelectionExpression { return new CoverSelectionExpression(); }
        public function createNamedParameter(mixed $value, mixed $type = null): mixed { return $value; }
        public function executeQuery(): CoverSelectionResult {
            $userId = null;
            $itemIds = [];
            foreach ($this->conditions as [$field, $value]) {
                if ($field === 'user_id') $userId = $value;
                if ($field === 'id') $itemIds = is_array($value) ? $value : [(int)$value];
            }
            $rows = [];
            foreach ($itemIds as $itemId) {
                if (isset($this->owned[(string)$userId][(int)$itemId])) $rows[] = ['id' => (int)$itemId];
            }
            return new CoverSelectionResult($rows);
        }
    }

    final class CoverSelectionDb implements \OCP\IDBConnection {
        public function __construct(private array $owned) {}
        public function getQueryBuilder(): CoverSelectionQueryBuilder { return new CoverSelectionQueryBuilder($this->owned); }
    }

    $service = new FileIndexService(new CoverSelectionDb([
        'alice' => [11 => true, 12 => true, 13 => true],
        'bob' => [14 => true],
    ]));

    expectCoverSelection($service->coverRefreshItemIds('alice', [11, 12]) === [11, 12], 'selected A/B must be refreshed');
    expectCoverSelection($service->coverRefreshItemIds('alice', [11, 12]) !== [11, 12, 13], 'visible filtered C must not be refreshed');
    expectCoverSelection($service->coverRefreshItemIds('alice', [11, 14]) === [11], 'unauthorized IDs must be excluded');
    foreach ([null, [], '11', [0], [-1], ['1x'], [11, 'bad']] as $invalid) {
        expectCoverSelection($service->coverRefreshItemIds('alice', $invalid) === [], 'invalid IDs must fail closed');
    }
    try {
        $service->coverRefreshItemIds('alice', range(1, 5001));
        throw new RuntimeException('over-limit IDs must be rejected');
    } catch (BatchLimitExceededException) {
    }

    echo "cover selection refresh runtime tests passed\n";
}
