<?php

declare(strict_types=1);

namespace OCA\Library\Presentation;

use OCP\IURLGenerator;

/** One editor destination for legacy bookmarks and form responses. */
final class BookDetailsUrl {
    public const FEEDBACK = ['coverRefresh', 'openUnavailable', 'metadataSaved', 'metadataError', 'coverUploadError', 'tagResult', 'tagName', 'returnTo'];

    public static function forItem(IURLGenerator $urls, array $parameters): string {
        $base = $urls->linkToRoute('library.page.index');
        $query = ['details' => (string)$parameters['itemId']];
        foreach (self::FEEDBACK as $key) {
            $value = $parameters[$key] ?? null;
            if (!is_string($value) || $value === '' || strlen($value) > 4096) continue;
            if ($key === 'returnTo' && !self::validReturn($base, $value)) continue;
            $query[$key] = $value;
        }
        return $base . '?' . http_build_query($query, '', '&', PHP_QUERY_RFC3986);
    }

    private static function validReturn(string $base, string $value): bool {
        if (!str_starts_with($value, '/') || str_starts_with($value, '//')
            || preg_match('/[\\\\\x00-\x20\x7f]/', $value)) return false;
        $parts = parse_url($value);
        if ($parts === false || isset($parts['host']) || isset($parts['scheme'])
            || ($parts['path'] ?? '') !== parse_url($base, PHP_URL_PATH)) return false;
        parse_str($parts['query'] ?? '', $query);
        foreach (['details', 'returnTo', 'item'] as $key) {
            if (array_key_exists($key, $query)) return false;
        }
        return true;
    }
}
