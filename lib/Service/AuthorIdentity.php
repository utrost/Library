<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Version 1 compares NFC, whitespace and case only; original credits remain untouched. */
final class AuthorIdentity {
    public const VERSION = 1;

    public static function name(string $credit, bool $inverted = false): array {
        AuthorNames::normalize([$credit]);
        // Do not produce installation-dependent comparison keys without Unicode support.
        if (!class_exists(\Normalizer::class)) throw new \RuntimeException('author_unicode_normalizer_unavailable');
        $name = \Normalizer::normalize($credit, \Normalizer::FORM_C);
        if ($name === false) throw new \InvalidArgumentException('invalid_author_unicode');
        $name = trim(preg_replace('/[\p{Z}\s]+/u', ' ', $name));
        if ($name === '') throw new \InvalidArgumentException('invalid_author_name');
        $display = $name;
        $given = $family = null;
        if ($inverted && substr_count($name, ',') === 1) {
            [$family, $given] = array_map('trim', explode(',', $name, 2));
            if ($given !== '' && $family !== '') $display = $given . ' ' . $family;
            else $given = $family = null;
        }
        return [
            'display_name' => $display, 'sort_name' => $name,
            'given_name' => $given, 'family_name' => $family,
            'comparison_key' => hash('sha256', 'author-v1:' . mb_convert_case($display, MB_CASE_FOLD, 'UTF-8')),
            'normalization_version' => self::VERSION,
        ];
    }
}
