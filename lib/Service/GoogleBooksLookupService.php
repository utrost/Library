<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Http\Client\IClientService;
use OCP\ICacheFactory;
use OCP\IConfig;
use OCP\IDBConnection;

/** Explicit, account-scoped Google Books volume lookup. No passive requests. */
final class GoogleBooksLookupService {
    private const BASE = 'https://www.googleapis.com/books/v1/volumes';
    private const MAX_BODY = 524288;

    public function __construct(
        private IClientService $clients,
        private ICacheFactory $caches,
        private IDBConnection $db,
        private IConfig $config,
    ) {
    }

    /** @return array<int, array<string, mixed>> */
    public function search(string $userId, string $isbn, string $title, string $author): array {
        $key = $this->apiKey();
        if (!mb_check_encoding($isbn, 'UTF-8') || mb_strlen($isbn) > 50) {
            throw new \InvalidArgumentException('invalid_isbn');
        }
        $isbnInput = trim($isbn);
        $isbn = $isbnInput === '' ? '' : (preg_replace('/^ISBN(?:-1[03])?\s*:?\s*/i', '', $isbnInput) ?? '');
        $title = trim($title);
        $author = trim($author);
        if (!mb_check_encoding($title . $author, 'UTF-8') || preg_match('/[\p{Cc}]/u', $title . $author)) {
            throw new \InvalidArgumentException('invalid_query');
        }
        if ($isbnInput !== '') {
            $normalized = IdentifierService::normalizeIdentifier('isbn', $isbn);
            if ($normalized === null || !$normalized['valid']) {
                throw new \InvalidArgumentException('invalid_isbn');
            }
            $isbn = $normalized['normalizedValue'];
        }
        if ($isbn === '' && (mb_strlen($title) < 3 || mb_strlen($title) > 200 || mb_strlen($author) > 200)) {
            throw new \InvalidArgumentException('invalid_query');
        }

        $query = $isbn !== '' ? 'isbn:' . $isbn : 'intitle:"' . str_replace('"', ' ', $title) . '"';
        if ($isbn === '' && $author !== '') {
            $query .= ' inauthor:"' . str_replace('"', ' ', $author) . '"';
        }
        $cache = $this->caches->createDistributed('library-googlebooks-lookup');
        $cacheKey = hash('sha256', $userId . "\0" . hash('sha256', $key) . "\0search\0" . $query);
        $cached = $cache->get($cacheKey);
        if (is_array($cached)) {
            return $cached;
        }
        $url = self::BASE . '?' . http_build_query(['q' => $query, 'maxResults' => 8, 'printType' => 'books', 'projection' => 'full'], '', '&', PHP_QUERY_RFC3986);
        $data = $this->fetchJson($url, $key);
        if (($data['kind'] ?? null) !== 'books#volumes' || (isset($data['items']) && !is_array($data['items']))) {
            throw new \RuntimeException('provider_unavailable');
        }
        $results = [];
        foreach (array_slice(is_array($data['items'] ?? null) ? $data['items'] : [], 0, 8) as $volume) {
            if (!is_array($volume) || !is_array($volume['volumeInfo'] ?? null)) {
                continue;
            }
            $id = $this->volumeId($volume['id'] ?? null);
            $info = $volume['volumeInfo'];
            if ($id === null || !is_string($info['title'] ?? null) || trim($info['title']) === '') {
                continue;
            }
            $isbns = $this->isbns($info);
            if ($isbn !== '' && !isset($isbns[$isbn])) {
                continue;
            }
            $result = $this->volumeResult($volume, $id);
            $results[] = [
                'provider' => 'Google Books',
                'editionId' => $id,
                'title' => $result['fields']['title'],
                'authors' => $this->boundedStrings($info['authors'] ?? null, 5, 160),
                'year' => $this->cleanString($info['publishedDate'] ?? null, 80),
                'publisher' => $result['fields']['publisher'] ?? '',
                'isbn' => array_slice(array_values($isbns), 0, 4),
                'languages' => $this->boundedStrings(isset($info['language']) ? [$info['language']] : null, 1, 16),
                'match' => $isbn !== '' ? 'isbn' : 'title_author',
                'url' => $result['url'],
            ];
            $cache->set($this->volumeCacheKey($userId, $key, $id), $result, 900);
        }
        $cache->set($cacheKey, $results, 900);
        return $results;
    }

    /** @return array<string, mixed> */
    public function edition(string $userId, string $volumeId): array {
        $key = $this->apiKey();
        $id = $this->volumeId($volumeId);
        if ($id === null) {
            throw new \InvalidArgumentException('invalid_edition');
        }
        $cache = $this->caches->createDistributed('library-googlebooks-lookup');
        $cacheKey = $this->volumeCacheKey($userId, $key, $id);
        $cached = $cache->get($cacheKey);
        if (is_array($cached)) {
            return $cached;
        }
        $volume = $this->fetchJson(self::BASE . '/' . rawurlencode($id), $key);
        if (($volume['kind'] ?? null) !== 'books#volume' || $this->volumeId($volume['id'] ?? null) !== $id || !is_array($volume['volumeInfo'] ?? null)) {
            throw new \RuntimeException('provider_unavailable');
        }
        $result = $this->volumeResult($volume, $id);
        $cache->set($cacheKey, $result, 900);
        return $result;
    }

    /** @param array<string, mixed> $volume
     * @return array<string, mixed>
     */
    private function volumeResult(array $volume, string $id): array {
        $info = $volume['volumeInfo'];
        $date = $this->cleanString($info['publishedDate'] ?? null, 80);
        $year = preg_match('/(?:^|\D)((?:1[5-9]|20)[0-9]{2})(?:\D|$)/', $date, $match) ? $match[1] : '';
        $fields = [
            'title' => $this->cleanString($info['title'] ?? null, 500),
            'subtitle' => $this->cleanString($info['subtitle'] ?? null, 500),
            'publisher' => $this->cleanString($info['publisher'] ?? null, 255),
            'publicationDate' => $year,
            'description' => $this->cleanString($info['description'] ?? null, 5000),
            'subjects' => $this->boundedStrings($info['categories'] ?? null, 12, 150),
        ];
        $fields = array_filter($fields, static fn ($value): bool => is_array($value) ? $value !== [] : $value !== '');
        return [
            'provider' => 'Google Books',
            'editionId' => $id,
            'url' => 'https://books.google.com/books?id=' . rawurlencode($id),
            'fields' => $fields,
            'isbn' => array_slice(array_values($this->isbns($info)), 0, 8),
            'ggkey' => $id,
            'languages' => $this->boundedStrings(isset($info['language']) ? [$info['language']] : null, 1, 16),
        ];
    }

    /** @param array<string, mixed> $info
     * @return array<string, string>
     */
    private function isbns(array $info): array {
        $result = [];
        foreach (array_slice(is_array($info['industryIdentifiers'] ?? null) ? $info['industryIdentifiers'] : [], 0, 16) as $identifier) {
            if (!is_array($identifier) || !in_array($identifier['type'] ?? null, ['ISBN_10', 'ISBN_13'], true) || !is_string($identifier['identifier'] ?? null)) {
                continue;
            }
            $row = IdentifierService::normalizeIdentifier('isbn', $identifier['identifier']);
            if ($row !== null && $row['valid']) {
                $result[$row['normalizedValue']] = $row['displayValue'];
            }
        }
        return $result;
    }

    private function volumeId(mixed $value): ?string {
        return is_string($value) && preg_match('/^[A-Za-z0-9_-]{1,64}$/D', $value) ? $value : null;
    }

    private function cleanString(mixed $value, int $length): string {
        if (!is_string($value)) {
            return '';
        }
        $clean = html_entity_decode(strip_tags($value), ENT_QUOTES | ENT_HTML5, 'UTF-8');
        return mb_substr(trim(preg_replace('/[\p{Cc}]+/u', ' ', $clean) ?? ''), 0, $length);
    }

    /** @return array<int, string> */
    private function boundedStrings(mixed $values, int $count, int $length): array {
        if (!is_array($values)) {
            return [];
        }
        $result = [];
        foreach ($values as $value) {
            $clean = $this->cleanString($value, $length);
            if ($clean !== '') {
                $result[] = $clean;
            }
            if (count($result) >= $count) {
                break;
            }
        }
        return $result;
    }

    private function apiKey(): string {
        if ($this->config->getAppValue('library', 'google_books_lookup_enabled', 'yes') !== 'yes') {
            throw new \RuntimeException('provider_disabled');
        }
        $key = trim($this->config->getAppValue('library', 'google_books_api_key', ''));
        if ($key === '' || strlen($key) > 256 || preg_match('/[^A-Za-z0-9_-]/D', $key)) {
            throw new \RuntimeException('provider_unconfigured');
        }
        return $key;
    }

    private function volumeCacheKey(string $userId, string $key, string $id): string {
        return hash('sha256', $userId . "\0" . hash('sha256', $key) . "\0volume\0" . $id);
    }

    /** @return array<string, mixed> */
    private function fetchJson(string $url, string $key): array {
        $this->reserveRequestSlot();
        try {
            $response = $this->clients->newClient()->get($url, [
                'timeout' => 6,
                'read_timeout' => 6,
                'allow_redirects' => false,
                'http_errors' => false,
                'stream' => true,
                'headers' => ['Accept' => 'application/json', 'X-Goog-Api-Key' => $key,
                    'User-Agent' => 'Nextcloud-Library/0.4 (+https://github.com/utrost/Library)'],
            ]);
            if ($response->getStatusCode() === 429) {
                throw new \RuntimeException('rate_limited');
            }
            if ($response->getStatusCode() !== 200) {
                throw new \RuntimeException('provider_unavailable');
            }
            $length = $response->getHeader('content-length');
            if (is_array($length)) {
                $length = $length[0] ?? '';
            }
            if (is_string($length) && preg_match('/^[0-9]+$/D', $length) && (float)$length > self::MAX_BODY) {
                throw new \RuntimeException('provider_unavailable');
            }
            $stream = $response->getBody();
            if (!is_resource($stream)) {
                throw new \RuntimeException('provider_unavailable');
            }
            try {
                $body = stream_get_contents($stream, self::MAX_BODY + 1);
            } finally {
                fclose($stream);
            }
            if (!is_string($body) || strlen($body) > self::MAX_BODY) {
                throw new \RuntimeException('provider_unavailable');
            }
            $data = json_decode($body, true, 64, JSON_THROW_ON_ERROR);
            if (!is_array($data)) {
                throw new \RuntimeException('provider_unavailable');
            }
            return $data;
        } catch (\RuntimeException $error) {
            if ($error->getMessage() === 'rate_limited') {
                throw $error;
            }
            throw new \RuntimeException('provider_unavailable', 0, $error);
        } catch (\Throwable $error) {
            throw new \RuntimeException('provider_unavailable', 0, $error);
        }
    }

    private function reserveRequestSlot(): void {
        $deadline = microtime(true) + 2.5;
        $triedInsert = false;
        $dbError = null;
        do {
            $now = (int)floor(microtime(true) * 1000);
            try {
                if ($this->db->executeStatement('UPDATE *PREFIX*library_lookup_quota SET next_at_ms=? WHERE provider=? AND next_at_ms<=?',
                    [$now + 1000, 'googlebooks', $now]) === 1) {
                    return;
                }
                if (!$triedInsert) {
                    $triedInsert = true;
                    try {
                        $this->db->executeStatement('INSERT INTO *PREFIX*library_lookup_quota (provider,next_at_ms) VALUES (?,?)', ['googlebooks', $now + 1000]);
                        return;
                    } catch (\Throwable) {
                        // Another worker initialized the shared slot first.
                    }
                }
            } catch (\Throwable $error) {
                $dbError = $error;
            }
            usleep(100000);
        } while (microtime(true) < $deadline);
        if ($dbError !== null) {
            throw new \RuntimeException('provider_unavailable', 0, $dbError);
        }
        throw new \RuntimeException('rate_limited');
    }
}
