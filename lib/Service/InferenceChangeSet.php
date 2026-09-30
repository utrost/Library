<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Pure validation and mapping of user-approved proposals, independent of their parser. */
final class InferenceChangeSet {
    public const FIELDS = [
        'title' => ['title', 512], 'subtitle' => ['subtitle', 512],
        'series' => ['series_name', 255], 'seriesNumber' => ['series_number', 64], 'genre' => ['genre', 255],
        'language' => ['language', 64], 'publisher' => ['publisher', 512], 'subject' => ['subjects_json', 2048],
        'year' => ['publication_date', 4], 'author' => ['authors_json', 1024],
    ];
    public static function normalize(mixed $changes): array {
        if (!is_array($changes) || !$changes || count($changes) > 10) throw new \InvalidArgumentException('invalid_proposals');
        $result = [];
        foreach ($changes as $field => $value) {
            if ($field === 'author') {
                $names = AuthorNames::normalize($value);
                if (!$names) throw new \InvalidArgumentException('invalid_proposals');
                $result[$field] = AuthorNames::encode($names);
                continue;
            }
            if (!isset(self::FIELDS[$field]) || !is_string($value) || !mb_check_encoding($value, 'UTF-8') || mb_strlen($value) > self::FIELDS[$field][1] || preg_match('/[\x00-\x1f\x7f]/u', $value)) throw new \InvalidArgumentException('invalid_proposals');
            $value = trim($value);
            if ($value === '') throw new \InvalidArgumentException('invalid_proposals');
            if ($field === 'year' && (!preg_match('/^[0-9]{4}$/D', $value) || (int)$value < 1)) throw new \InvalidArgumentException('invalid_proposals');
            if ($field === 'language') {
                // Match the editor's canonical language convention (en, en-US).
                if (!preg_match('/^([a-z]{2,3})(?:-([a-zA-Z]{2}))?$/D', $value, $parts)) throw new \InvalidArgumentException('invalid_proposals');
                $value = $parts[1] . (isset($parts[2]) ? '-' . strtoupper($parts[2]) : '');
            }
            if ($field === 'subject') $value = json_encode([$value], JSON_THROW_ON_ERROR | JSON_UNESCAPED_UNICODE);
            $result[$field] = $value;
        }
        return $result;
    }
    public static function fingerprint(array $state): string {
        ksort($state);
        return hash('sha256', json_encode($state, JSON_THROW_ON_ERROR));
    }
    public static function display(string $field, mixed $value): string {
        if ($field === 'author') return implode('; ', AuthorNames::read($value));
        if ($field === 'subject') return implode('; ', json_decode((string)$value, true) ?: []);
        return (string)$value;
    }
    public static function sourceField(string $field): string {
        return ['author' => 'creators', 'subject' => 'subjects', 'year' => 'publicationDate'][$field] ?? $field;
    }
}
