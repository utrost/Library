<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\IConfig;

/** Private, immutable definition snapshots. Assignments never schedule metadata writes. */
final class InferenceFolderRuleStore {
    public const PREFIX = 'inference_folder_rule_';
    public function __construct(private IConfig $config) {}

    public function all(string $uid): array {
        $entries = [];
        foreach ($this->config->getUserKeys($uid, 'library') as $key) {
            if (!str_starts_with($key, self::PREFIX)) continue;
            $value = json_decode($this->config->getUserValue($uid, 'library', $key, ''), true);
            if (!is_array($value) || ($value['version'] ?? null) !== 1 || !is_array($value['definition'] ?? null)) continue;
            $entries[] = ['id' => substr($key, strlen(self::PREFIX))] + $value;
        }
        return $entries;
    }
    public function definition(string $uid, string $id): ?array {
        if (!preg_match('/^[a-f0-9]{32}$/D', $id)) return null;
        $value = json_decode($this->config->getUserValue($uid, 'library', 'inference_pattern_' . $id, ''), true);
        if (!is_array($value) || !is_string($value['name'] ?? null)) return null;
        $kind = $value['kind'] ?? 'pattern';
        if ($kind === 'guided' && GuidedRuleValidator::valid($value['rule'] ?? null)) return ['id' => $id, 'kind' => $kind, 'name' => $value['name'], 'rule' => $value['rule']];
        if ($kind === 'pattern' && is_string($value['pattern'] ?? null)) return ['id' => $id, 'kind' => $kind, 'name' => $value['name'], 'pattern' => $value['pattern']];
        return null;
    }
    public function save(string $uid, array $value): array {
        $id = bin2hex(random_bytes(16));
        $this->config->setUserValue($uid, 'library', self::PREFIX . $id, json_encode($value, JSON_THROW_ON_ERROR));
        return ['id' => $id] + $value;
    }
    public function delete(string $uid, string $id): void {
        $this->config->deleteUserValue($uid, 'library', self::PREFIX . $id);
    }
    public function deleteRoot(string $uid, int $rootId): void {
        foreach ($this->all($uid) as $entry) if ($entry['rootId'] === $rootId) $this->delete($uid, $entry['id']);
    }
    public static function folder(mixed $value): ?string {
        if (!is_string($value) || strlen($value) > 2000 || preg_match('~[\x00-\x1f\x7f\\\\]~', $value)) return null;
        $value = trim($value, '/');
        if ($value === '') return '';
        foreach (explode('/', $value) as $part) if ($part === '' || $part === '.' || $part === '..') return null;
        return $value;
    }
}
