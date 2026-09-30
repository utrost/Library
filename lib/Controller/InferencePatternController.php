<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\IConfig;
use OCA\Library\Service\GuidedRuleValidator;
use OCP\IRequest;
use OCP\IUserSession;

/** Personal pattern definitions only; never changes publication metadata. */
final class InferencePatternController extends Controller {
    private const PREFIX = 'inference_pattern_';
    public function __construct(string $appName, IRequest $request, private IConfig $config, private IUserSession $session) {
        parent::__construct($appName, $request);
    }
    private function response(array $data, int $status = 200): JSONResponse {
        return new JSONResponse($data, $status, ['Cache-Control' => 'private, no-store']);
    }
    private function patterns(string $uid): array {
        $patterns = [];
        foreach ($this->config->getUserKeys($uid, 'library') as $key) {
            if (!str_starts_with($key, self::PREFIX)) continue;
            $value = json_decode($this->config->getUserValue($uid, 'library', $key, ''), true);
            if (!is_array($value) || !is_string($value['name'] ?? null)) continue;
            $entry = ['id' => substr($key, strlen(self::PREFIX)), 'name' => $value['name'], 'kind' => $value['kind'] ?? 'pattern'];
            if ($entry['kind'] === 'guided' && GuidedRuleValidator::valid($value['rule'] ?? null)) {
                $patterns[] = $entry + ['rule' => $value['rule']];
            } elseif ($entry['kind'] === 'pattern' && is_string($value['pattern'] ?? null)) {
                $patterns[] = $entry + ['pattern' => $value['pattern']];
            }
        }
        usort($patterns, static fn(array $a, array $b): int => strnatcasecmp($a['name'], $b['name']));
        return $patterns;
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        return $uid === null ? $this->response([], 401) : $this->response(['patterns' => $this->patterns($uid), 'hidden' => array_values(array_map(static fn(string $key): string => substr($key, strlen('inference_hidden_')), array_filter($this->config->getUserKeys($uid, 'library'), static fn(string $key): bool => str_starts_with($key, 'inference_hidden_'))))]);
    }
    #[NoAdminRequired]
    public function create(): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return $this->response([], 401);
        $name = $this->request->getParam('name');
        $kind = $this->request->getParam('kind', 'pattern');
        if (!is_string($name) || trim($name) === '' || mb_strlen($name) > 120 || preg_match('/[\x00-\x1f\x7f]/', $name) || !in_array($kind, ['pattern', 'guided'], true)) return $this->response([], 422);
        $rule = $this->request->getParam('rule');
        $pattern = $this->request->getParam('pattern');
        if ($kind === 'guided') {
            if (!GuidedRuleValidator::valid($rule)) return $this->response([], 422);
        } else {
            if (!is_string($name) || !is_string($pattern) || trim($name) === '' || mb_strlen($name) > 120 || trim($pattern) === '' || mb_strlen($pattern) > 1000 || preg_match('/[\x00-\x1f\x7f]/', $name . $pattern)) return $this->response([], 422);
            // Same placeholder vocabulary as the client; no executable expressions are stored.
            preg_match_all('/%[A-Za-z]+%/', $pattern, $matches);
            $allowed = ['title', 'subtitle', 'author', 'series', 'seriesNumber', 'language', 'publisher', 'subject', 'year', 'genre', 'ignore', 'folder', 'folders', 'extension'];
            if (count($matches[0]) > 16 || str_contains(preg_replace('/%[A-Za-z]+%/', '', $pattern), '%') || preg_match('/%[A-Za-z]+%%[A-Za-z]+%/', $pattern) || preg_match('~%folders?%(?!/)~', $pattern)) return $this->response([], 422);
            foreach ($matches[0] as $token) if (!in_array(trim($token, '%'), $allowed, true)) return $this->response([], 422);
        }
        $patterns = $this->patterns($uid);
        if (count($patterns) >= 100) return $this->response([], 422);
        foreach ($patterns as $saved) if (mb_strtolower($saved['name']) === mb_strtolower(trim($name))) return $this->response([], 409);
        $id = bin2hex(random_bytes(16));
        $value = ['version' => 1, 'name' => trim($name), 'kind' => $kind] + ($kind === 'guided' ? ['rule' => $rule] : ['pattern' => $pattern]);
        $this->config->setUserValue($uid, 'library', self::PREFIX . $id, json_encode($value, JSON_THROW_ON_ERROR));
        return $this->response(['saved' => ['id' => $id] + $value], 201);
    }
    #[NoAdminRequired]
    public function delete(string $patternId): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return $this->response([], 401);
        if (in_array($patternId, ['preset-title', 'preset-by', 'preset-title-author-year', 'preset-author-title', 'preset-author-folder', 'preset-series', 'preset-series-inline', 'preset-language-subject', 'preset-language-subject-by', 'preset-series-underscore'], true)) {
            $this->config->setUserValue($uid, 'library', 'inference_hidden_' . $patternId, '1');
            return $this->response(['deleted' => true]);
        }
        if (!preg_match('/^[a-f0-9]{32}$/D', $patternId)) return $this->response([], 422);
        $this->config->deleteUserValue($uid, 'library', self::PREFIX . $patternId);
        return $this->response(['deleted' => true]);
    }
}
