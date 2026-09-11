<?php

declare(strict_types=1);

namespace OCA\Library\Http;

final class ReviewQueryPolicy {
    public const FILTER_VALUES = [
        'needsMetadata' => '1',
        'scannerConflicts' => '1',
        'status' => 'metadata_error',
        'coverReview' => 'placeholder',
        'noCreator' => '1',
        'noPublication' => '1',
        'noDate' => '1',
        'titleFromFilename' => '1',
        'weakMetadata' => 'filename',
        'noDescription' => '1',
        'unsupportedContainer' => '1',
        'unreviewedImports' => '1',
    ];

    /** @return array<string, true> */
    public static function invalidKeysFromRequestUri(string $requestUri): array {
        $query = parse_url($requestUri, PHP_URL_QUERY);
        if (!is_string($query) || $query === '') {
            return [];
        }

        $occurrences = [];
        $arraySyntax = [];
        foreach (explode('&', $query) as $part) {
            $encodedKey = explode('=', $part, 2)[0];
            $key = urldecode($encodedKey);
            foreach (self::FILTER_VALUES as $reviewKey => $_canonicalValue) {
                if ($key === $reviewKey) {
                    $occurrences[$reviewKey] = ($occurrences[$reviewKey] ?? 0) + 1;
                } elseif (str_starts_with($key, $reviewKey . '[')) {
                    $arraySyntax[$reviewKey] = true;
                }
            }
        }

        $invalid = $arraySyntax;
        foreach ($occurrences as $key => $count) {
            if ($count > 1) {
                $invalid[$key] = true;
            }
        }
        return $invalid;
    }

    public static function normalizeReviewValue(string $key, mixed $value, array $invalidKeys): string {
        if (isset($invalidKeys[$key]) || is_array($value) || !isset(self::FILTER_VALUES[$key])) {
            return '';
        }
        $normalized = trim((string)$value);
        return hash_equals(self::FILTER_VALUES[$key], $normalized) ? $normalized : '';
    }

    public static function normalizeStatus(mixed $value, array $invalidKeys): string {
        return isset($invalidKeys['status']) || is_array($value) ? '' : trim((string)$value);
    }
}
