<?php
declare(strict_types=1);
namespace OCA\Library\Exception;

/** Reports only the book and field names after the caller has rechecked access. */
final class UndoConflict extends \DomainException {
    public function __construct(public readonly int $bookId, public readonly array $fields) {
        parent::__construct('undo_conflict');
    }

    public function outcome(): array {
        return ['error' => 'undo_conflict', 'bookId' => $this->bookId, 'fields' => $this->fields];
    }

    public static function changedKeys(array $expected, array $actual): array {
        return array_keys(array_filter($expected, static fn($value, $key) => $value !== ($actual[$key] ?? null), ARRAY_FILTER_USE_BOTH));
    }
}
