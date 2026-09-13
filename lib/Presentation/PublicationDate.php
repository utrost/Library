<?php

declare(strict_types=1);

namespace OCA\Library\Presentation;

final class PublicationDate {
    public static function forEditor(mixed $value): string {
        $normalized = trim((string)$value);
        if (preg_match('/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/', $normalized, $matches) === 1) {
            return $matches[1];
        }

        return $normalized;
    }
}
