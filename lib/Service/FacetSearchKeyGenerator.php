<?php

declare(strict_types=1);

namespace OCA\Library\Service;

/** Builds bounded, index-friendly prefix keys while preserving the display value separately. */
final class FacetSearchKeyGenerator {
    private const MAX_SEARCH_KEYS = 16;

    /**
     * Examples: "Anton, Uwe" yields anton, uwe / anton / uwe;
     * "AAVAA-Verlag" yields aavaa-verlag / aavaa / verlag.
     *
     * @return array<int, string>
     */
    public static function forValue(string $value): array {
        $canonical = mb_strtolower(mb_substr(trim($value), 0, 255));
        if ($canonical === '') {
            return [];
        }

        $keys = [];
        $keys[$canonical] = true;
        $segments = preg_split('/[^\p{L}\p{N}]+/u', $canonical, -1, PREG_SPLIT_NO_EMPTY) ?: [];
        foreach ($segments as $segment) {
            $segment = mb_substr($segment, 0, 255);
            if ($segment !== '') {
                $keys[$segment] = true;
            }
            if (count($keys) >= self::MAX_SEARCH_KEYS) {
                break;
            }
        }

        return array_keys($keys);
    }
}
