<?php

declare(strict_types=1);

namespace OCA\Library\Service;

final class IdentifierService {
    /**
     * @return array<int, array{scheme:string,displayValue:string,normalizedValue:string,valid:bool,source:string,userEdited:bool}>
     */
    public static function normalizeIdentifierList(mixed $identifiers, string $defaultSource = 'user', bool $userEdited = true): array {
        if (!is_array($identifiers)) {
            return [];
        }
        $normalized = [];
        foreach ($identifiers as $identifier) {
            if (!is_array($identifier)) {
                continue;
            }
            $row = self::normalizeIdentifier(
                (string)($identifier['scheme'] ?? ''),
                (string)($identifier['displayValue'] ?? $identifier['display_value'] ?? ''),
                (string)($identifier['source'] ?? $defaultSource),
                (bool)($identifier['userEdited'] ?? $identifier['user_edited'] ?? $userEdited),
            );
            if ($row !== null) {
                $key = $row['scheme'] . ':' . $row['normalizedValue'] . ':' . $row['displayValue'];
                $normalized[$key] = $row;
            }
        }
        return array_values($normalized);
    }

    /**
     * @return array{scheme:string,displayValue:string,normalizedValue:string,valid:bool,source:string,userEdited:bool}|null
     */
    public static function normalizeIdentifier(string $scheme, string $displayValue, string $source = 'user', bool $userEdited = true): ?array {
        $scheme = strtolower(trim($scheme));
        $displayValue = trim($displayValue);
        if ($displayValue === '') {
            return null;
        }
        $compact = strtoupper((string)preg_replace('/[\s-]+/u', '', $displayValue));
        if ($scheme === '') {
            $scheme = strlen($compact) === 8 ? 'issn' : 'isbn';
        }
        if (!in_array($scheme, ['isbn', 'issn'], true)) {
            return null;
        }

        $valid = $scheme === 'isbn'
            ? (self::validateIsbn10($compact) || self::validateIsbn13($compact))
            : self::validateIssn($compact);

        return [
            'scheme' => $scheme,
            'displayValue' => $displayValue,
            'normalizedValue' => $compact,
            'valid' => $valid,
            'source' => trim($source) !== '' ? trim($source) : 'user',
            'userEdited' => $userEdited,
        ];
    }

    public static function normalizeSearchQuery(string $query): ?array {
        $compact = strtoupper((string)preg_replace('/[\s-]+/u', '', trim($query)));
        if ($compact === '') {
            return null;
        }
        if (preg_match('/^(?:\d{9}[\dX]|\d{13})$/', $compact) === 1) {
            return ['scheme' => 'isbn', 'normalizedValue' => $compact];
        }
        if (preg_match('/^\d{7}[\dX]$/', $compact) === 1) {
            return ['scheme' => 'issn', 'normalizedValue' => $compact];
        }
        return null;
    }

    private static function validateIsbn10(string $value): bool {
        if (preg_match('/^\d{9}[\dX]$/', $value) !== 1) {
            return false;
        }
        $sum = 0;
        for ($i = 0; $i < 10; $i++) {
            $digit = $value[$i] === 'X' ? 10 : (int)$value[$i];
            $sum += (10 - $i) * $digit;
        }
        return $sum % 11 === 0;
    }

    private static function validateIsbn13(string $value): bool {
        if (preg_match('/^\d{13}$/', $value) !== 1) {
            return false;
        }
        $sum = 0;
        for ($i = 0; $i < 13; $i++) {
            $sum += (int)$value[$i] * ($i % 2 === 0 ? 1 : 3);
        }
        return $sum % 10 === 0;
    }

    private static function validateIssn(string $value): bool {
        if (preg_match('/^\d{7}[\dX]$/', $value) !== 1) {
            return false;
        }
        $sum = 0;
        for ($i = 0; $i < 8; $i++) {
            $digit = $value[$i] === 'X' ? 10 : (int)$value[$i];
            $sum += (8 - $i) * $digit;
        }
        return $sum % 11 === 0;
    }
}
