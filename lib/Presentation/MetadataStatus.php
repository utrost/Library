<?php

declare(strict_types=1);

namespace OCA\Library\Presentation;

final class MetadataStatus {
    private const FIELDS = [
        'book' => ['title', 'creators', 'publicationDate', 'language', 'publisher', 'description'],
        'comic' => ['title', 'creators', 'publication', 'publicationDate', 'description'],
        'magazine' => ['title', 'publication', 'publicationDate', 'language', 'publisher'],
        'journal' => ['title', 'publication', 'publicationDate', 'language', 'publisher'],
        'manual' => ['title', 'creators', 'publicationDate', 'language', 'description'],
        'catalogue' => ['title', 'creators', 'publicationDate', 'language', 'publisher'],
        'other' => ['title', 'creators', 'publicationDate', 'language', 'description'],
    ];

    public static function forItem(array $item): array {
        $type = (string)($item['publicationType'] ?? 'other');
        $fields = self::FIELDS[$type] ?? self::FIELDS['other'];
        $missing = [];
        foreach ($fields as $field) {
            $value = $item[$field] ?? '';
            $present = is_array($value)
                ? count(array_filter($value, static fn ($entry): bool => trim((string)$entry) !== '')) > 0
                : trim((string)$value) !== '';
            if (!$present) $missing[] = $field;
        }

        $sources = array_values(array_unique(array_filter([
            (string)($item['metadataSource'] ?? ''),
            ...array_map('strval', is_array($item['fieldSources'] ?? null) ? $item['fieldSources'] : []),
        ])));
        $hasInferred = (bool)array_filter($sources, static fn (string $source): bool => preg_match('/(?:filename|path)/i', $source) === 1);
        $hasExtracted = (bool)array_filter($sources, static fn (string $source): bool => preg_match('/(?:opf|epub|pdf|comicinfo|sidecar|embedded)/i', $source) === 1);
        $declaredMixed = (bool)array_filter($sources, static fn (string $source): bool => preg_match('/mixed/i', $source) === 1);
        $confidence = !empty($item['userEdited']) ? 'user-edited'
            : ($declaredMixed || ($hasInferred && $hasExtracted) || count($sources) > 1 ? 'mixed'
                : ($hasInferred ? 'inferred' : 'extracted'));

        $attention = [];
        if (($item['scanStatus'] ?? 'indexed') !== 'indexed') $attention[] = 'file-status';
        if (trim((string)($item['scanError'] ?? '')) !== '') $attention[] = 'scan-error';
        if ((int)($item['scannerConflictCount'] ?? 0) > 0) $attention[] = 'suggestions';
        $identifiers = is_array($item['identifiers'] ?? null) ? $item['identifiers'] : [];
        if ((bool)array_filter($identifiers, static fn ($identifier): bool => is_array($identifier) && isset($identifier['valid']) && !$identifier['valid'])) $attention[] = 'identifier-problems';

        return [
            'completeness' => ['complete' => count($fields) - count($missing), 'total' => count($fields), 'missing' => $missing],
            'confidence' => $confidence,
            'attention' => array_values(array_unique($attention)),
            'personal' => ['starred' => !empty($item['starred']), 'rating' => (int)($item['personalRating'] ?? 0), 'workflow' => (string)($item['workflowStatus'] ?? '')],
        ];
    }
}
