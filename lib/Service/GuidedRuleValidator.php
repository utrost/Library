<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Bounds declarative saved rules; no paths, code or metadata mutations are accepted. */
final class GuidedRuleValidator {
    public static function valid(mixed $rule): bool {
        if (!is_array($rule) || array_diff(array_keys($rule), ['version', 'combineAuthors', 'parts'])
            || ($rule['version'] ?? null) !== 1 || !is_bool($rule['combineAuthors'] ?? null)
            || !is_array($rule['parts'] ?? null) || !array_is_list($rule['parts'])
            || count($rule['parts']) < 1 || count($rule['parts']) > 64
            || strlen(json_encode($rule, JSON_THROW_ON_ERROR)) > 48000) return false;
        $count = 0;
        foreach ($rule['parts'] as $part) if (!self::part($part, 0, $count)) return false;
        return true;
    }
    private static function part(mixed $node, int $depth, int &$count): bool {
        if (++$count > 128 || $depth > 6 || !is_array($node)
            || array_diff(array_keys($node), ['field', 'split', 'prefix', 'suffix', 'underscores', 'mapFrom', 'mapTo', 'authorSeparator', 'reverseName', 'authorSeparatorChoice', 'customAuthorSeparator'])
            || !in_array($node['field'] ?? null, ['ignore', 'title', 'subtitle', 'author', 'series', 'seriesNumber', 'language', 'genre', 'publisher', 'subject', 'year'], true)) return false;
        foreach (['underscores', 'reverseName'] as $key) if (array_key_exists($key, $node) && !is_bool($node[$key])) return false;
        foreach (['prefix' => 100, 'suffix' => 100, 'mapFrom' => 200, 'mapTo' => 200, 'authorSeparator' => 100, 'customAuthorSeparator' => 100] as $key => $limit) {
            if (array_key_exists($key, $node) && (!is_string($node[$key]) || mb_strlen($node[$key]) > $limit || preg_match('/[\x00-\x1f\x7f]/', $node[$key]))) return false;
        }
        if (array_key_exists('authorSeparatorChoice', $node) && !in_array($node['authorSeparatorChoice'], ['none', 'semicolon', 'ampersand', 'and', 'custom'], true)) return false;
        if (($node['split'] ?? null) === null) return true;
        $split = $node['split'];
        if (!is_array($split) || array_diff(array_keys($split), ['delimiter', 'occurrence', 'children'])
            || !is_string($split['delimiter'] ?? null) || $split['delimiter'] === '' || mb_strlen($split['delimiter']) > 100
            || preg_match('/[\x00-\x1f\x7f]/', $split['delimiter'])
            || !in_array($split['occurrence'] ?? null, ['first', 'last', 'every'], true)
            || !is_array($split['children'] ?? null) || !array_is_list($split['children'])
            || count($split['children']) < 2 || count($split['children']) > 32
            || ($split['occurrence'] !== 'every' && count($split['children']) !== 2)) return false;
        foreach ($split['children'] as $child) if (!self::part($child, $depth + 1, $count)) return false;
        return true;
    }
}
