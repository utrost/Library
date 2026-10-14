<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Ordered identities; separators are applied only by an explicitly chosen convention. */
final class AuthorNames {
    public static function normalize(mixed $names): array {
        if (!is_array($names) || !array_is_list($names) || count($names) > 32) throw new \InvalidArgumentException('invalid_authors');
        $result = [];
        foreach ($names as $name) {
            if (!is_string($name) || !mb_check_encoding($name, 'UTF-8') || preg_match('/[\x00-\x1f\x7f]/u', $name)) throw new \InvalidArgumentException('invalid_authors');
            $name = trim($name);
            if ($name === '' || mb_strlen($name) > 255) throw new \InvalidArgumentException('invalid_authors');
            if (!in_array($name, $result, true)) $result[] = $name;
        }
        if (mb_strlen(implode('; ', $result)) > 1024) throw new \InvalidArgumentException('invalid_authors');
        return $result;
    }
    public static function fromText(?string $text, bool $semicolon = false): array {
        $text = trim($text ?? '');
        if ($text === '') return [];
        return self::normalize($semicolon ? array_values(array_filter(array_map('trim', explode(';', $text)), static fn($s) => $s !== '')) : [$text]);
    }
    public static function read(mixed $json, ?string $fallback = null): array {
        if (is_string($json)) {
            try { return self::normalize(json_decode($json, true, 64, JSON_THROW_ON_ERROR)); } catch (\JsonException|\InvalidArgumentException) {}
        }
        // Unmigrated legacy text has no implicit separator convention.
        try { return self::fromText($fallback); } catch (\InvalidArgumentException) { return []; }
    }
    public static function encode(array $names): string {
        return json_encode(self::normalize($names), JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
}
