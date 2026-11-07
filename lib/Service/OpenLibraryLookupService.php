<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Http\Client\IClientService;
use OCP\ICacheFactory;
use OCP\IConfig;
use OCP\IDBConnection;

/** A deliberately small, user-triggered adapter. No scan or page load calls it. */
final class OpenLibraryLookupService {
    private const BASE = 'https://openlibrary.org';
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
        $this->ensureEnabled();
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

        $query = $isbn !== '' ? ['isbn' => strtoupper($isbn)] : ['title' => $title];
        if ($isbn === '' && $author !== '') {
            $query['author'] = $author;
        }
        $query['fields'] = 'key,title,author_name,first_publish_year,edition_key,editions,editions.key,editions.title,editions.publish_date,editions.publisher,editions.language,editions.isbn';
        $query['limit'] = '6';
        $cache = $this->caches->createDistributed('library-openlibrary-lookup-v2');
        $key = hash('sha256', $userId . "\0" . json_encode($query, JSON_THROW_ON_ERROR));
        $cached = $cache->get($key);
        if (is_array($cached)) {
            return $cached;
        }
        if ($isbn !== '') {
            // Work search exposes only one selected edition per work. Resolve
            // an ISBN through Open Library's edition endpoint instead.
            $edition = $this->fetchJson(self::BASE . '/isbn/' . rawurlencode($isbn) . '.json', true, true);
            $results = $this->isbnResult($edition, $isbn);
            if ($results !== []) {
                $editionId = $results[0]['editionId'];
                $editionKey = hash('sha256', $userId . "\0edition\0" . $editionId);
                $cache->set($editionKey, $this->editionResult($edition, $editionId), 900);
            }
            $cache->set($key, $results, 900);
            return $results;
        }
        $data = $this->fetchJson(self::BASE . '/search.json?' . http_build_query($query, '', '&', PHP_QUERY_RFC3986));
        $results = [];
        foreach (array_slice(is_array($data['docs'] ?? null) ? $data['docs'] : [], 0, 6) as $work) {
            if (!is_array($work)) {
                continue;
            }
            $editions = $work['editions']['docs'] ?? [];
            if (!is_array($editions) || $editions === []) {
                $keys = array_filter(is_array($work['edition_key'] ?? null) ? $work['edition_key'] : [], 'is_string');
                $editions = array_map(static fn (string $id): array => ['key' => '/books/' . $id], array_slice(array_values($keys), 0, 2));
            }
            foreach (array_slice($editions, 0, 2) as $edition) {
                if (!is_array($edition)) {
                    continue;
                }
                $id = $this->editionId(is_string($edition['key'] ?? null) ? $edition['key'] : '');
                if ($id === null) {
                    continue;
                }
                $editionIsbns = [];
                foreach ($this->boundedStrings($edition['isbn'] ?? null, 12, 32) as $value) {
                    $normalized = IdentifierService::normalizeIdentifier('isbn', $value);
                    if ($normalized !== null && $normalized['valid']) {
                        $editionIsbns[] = $normalized['displayValue'];
                    }
                }
                $normalizedEditionIsbns = array_map(static fn (string $value): string => strtoupper(preg_replace('/[^0-9Xx]/', '', $value) ?? ''), $editionIsbns);
                if ($isbn !== '' && !in_array(strtoupper($isbn), $normalizedEditionIsbns, true)) {
                    continue;
                }
                $publisher = $edition['publisher'] ?? '';
                if (is_array($publisher)) {
                    $publisher = $publisher[0] ?? '';
                }
                $published = $edition['publish_date'] ?? $work['first_publish_year'] ?? '';
                if (is_array($published)) {
                    $published = $published[0] ?? '';
                }
                $candidateTitle = $edition['title'] ?? $work['title'] ?? '';
                if (!is_string($candidateTitle) || trim($candidateTitle) === '') {
                    continue;
                }
                $results[$id] = [
                    'editionId' => $id,
                    'title' => mb_substr($candidateTitle, 0, 300),
                    'authors' => $this->boundedStrings($work['author_name'] ?? null, 5, 160),
                    'year' => mb_substr(is_scalar($published) ? (string)$published : '', 0, 80),
                    'publisher' => mb_substr(is_string($publisher) ? $publisher : '', 0, 200),
                    'isbn' => array_slice($editionIsbns, 0, 4),
                    'languages' => $this->boundedStrings($edition['language'] ?? null, 4, 16),
                    'match' => $isbn !== '' ? 'isbn' : 'title_author',
                    'url' => self::BASE . '/books/' . $id,
                ];
            }
        }
        $results = array_slice(array_values($results), 0, 8);
        $cache->set($key, $results, 900);
        return $results;
    }

    /** @return array<int, array<string, mixed>> */
    private function isbnResult(array $edition, string $isbn): array {
        $id = $this->editionId(is_string($edition['key'] ?? null) ? $edition['key'] : '');
        $title = $edition['title'] ?? null;
        if ($id === null || !is_string($title) || trim($title) === '') {
            return [];
        }
        $isbns = [];
        foreach (array_merge(
            is_array($edition['isbn_13'] ?? null) ? $edition['isbn_13'] : [],
            is_array($edition['isbn_10'] ?? null) ? $edition['isbn_10'] : [],
        ) as $value) {
            if (!is_string($value)) {
                continue;
            }
            $normalized = IdentifierService::normalizeIdentifier('isbn', $value);
            if ($normalized !== null && $normalized['valid']) {
                $isbns[$normalized['normalizedValue']] = $normalized['displayValue'];
            }
        }
        if (!isset($isbns[$isbn])) {
            return [];
        }
        $publishers = $this->boundedStrings($edition['publishers'] ?? null, 1, 200);
        $date = $edition['publish_date'] ?? '';
        $languages = [];
        foreach (is_array($edition['languages'] ?? null) ? $edition['languages'] : [] as $language) {
            if (is_array($language) && is_string($language['key'] ?? null)
                && preg_match('~^/languages/([a-z]{3})$~D', $language['key'], $match)) {
                $languages[] = $match[1];
            }
            if (count($languages) >= 4) {
                break;
            }
        }
        return [[
            'editionId' => $id,
            'title' => mb_substr($title, 0, 300),
            'authors' => [],
            'year' => mb_substr(is_string($date) ? $date : '', 0, 80),
            'publisher' => $publishers[0] ?? '',
            'isbn' => array_slice(array_values($isbns), 0, 4),
            'languages' => $languages,
            'match' => 'isbn',
            'url' => self::BASE . '/books/' . $id,
        ]];
    }

    /** @return array<string, mixed> */
    public function edition(string $userId, string $editionId): array {
        $this->ensureEnabled();
        $id = $this->editionId($editionId);
        if ($id === null) {
            throw new \InvalidArgumentException('invalid_edition');
        }
        $cache = $this->caches->createDistributed('library-openlibrary-lookup-v2');
        $key = hash('sha256', $userId . "\0edition\0" . $id);
        $cached = $cache->get($key);
        if (is_array($cached)) {
            return $cached;
        }
        $data = $this->fetchJson(self::BASE . '/books/' . $id . '.json');
        $result = $this->editionResult($data, $id);
        $cache->set($key, $result, 900);
        return $result;
    }

    /** @return array<string, mixed> */
    private function editionResult(array $data, string $id): array {
        $description = $data['description'] ?? '';
        if (is_array($description)) {
            $description = $description['value'] ?? '';
        }
        $date = is_string($data['publish_date'] ?? null) ? $data['publish_date'] : '';
        $year = preg_match('/(?:^|\D)((?:1[5-9]|20)[0-9]{2})(?:\D|$)/', $date, $match) ? $match[1] : '';
        $subjects = [];
        foreach (is_array($data['subjects'] ?? null) ? $data['subjects'] : [] as $subject) {
            if (is_string($subject) && trim($subject) !== '') {
                $subjects[] = mb_substr(trim($subject), 0, 150);
            }
            if (count($subjects) >= 12) {
                break;
            }
        }
        $publishers = is_array($data['publishers'] ?? null) ? $data['publishers'] : [];
        $fields = [
            'title' => mb_substr(is_string($data['title'] ?? null) ? $data['title'] : '', 0, 500),
            'subtitle' => mb_substr(is_string($data['subtitle'] ?? null) ? $data['subtitle'] : '', 0, 500),
            'publisher' => mb_substr(is_string($publishers[0] ?? null) ? $publishers[0] : '', 0, 255),
            'publicationDate' => $year,
            'description' => mb_substr(is_string($description) ? $description : '', 0, 5000),
            'subjects' => $subjects,
        ];
        $fields = array_filter($fields, static fn ($value): bool => is_array($value) ? $value !== [] : $value !== '');
        $rawIdentifiers = array_slice(array_values(array_filter(array_merge(
            is_array($data['isbn_13'] ?? null) ? $data['isbn_13'] : [],
            is_array($data['isbn_10'] ?? null) ? $data['isbn_10'] : [],
        ), 'is_string')), 0, 8);
        $identifiers = [];
        foreach ($rawIdentifiers as $value) {
            $normalized = IdentifierService::normalizeIdentifier('isbn', $value);
            if ($normalized !== null && $normalized['valid']) {
                $identifiers[$normalized['normalizedValue']] = $normalized['displayValue'];
            }
        }
        $languages = [];
        foreach (is_array($data['languages'] ?? null) ? $data['languages'] : [] as $language) {
            if (is_array($language) && is_string($language['key'] ?? null)
                && preg_match('~^/languages/([a-z]{3})$~D', $language['key'], $match)) {
                $languages[] = $match[1];
            }
        }
        $language = LanguageNormalizer::normalize(implode('; ', array_slice($languages, 0, 4)));
        if ($language !== null) $fields['language'] = $language;
        $result = ['provider' => 'Open Library', 'editionId' => $id, 'url' => self::BASE . '/books/' . $id, 'fields' => $fields,
            'isbn' => array_values($identifiers), 'languages' => array_slice($languages, 0, 4)];
        foreach (array_slice(is_array($data['covers'] ?? null) ? $data['covers'] : [],0,4) as $cover) { if (is_int($cover) && $cover>0 && $cover<=2147483647) { $result['coverId']=$cover; break; } }
        return $result;
    }

    private function editionId(string $value): ?string {
        $value = str_starts_with($value, '/books/') ? substr($value, 7) : $value;
        return preg_match('/^OL[1-9][0-9]*M$/D', $value) ? $value : null;
    }

    /** @return array<int, string> */
    private function boundedStrings(mixed $values, int $count, int $length): array {
        if (!is_array($values)) {
            return [];
        }
        $result = [];
        foreach ($values as $value) {
            if (!is_string($value) || trim($value) === '') {
                continue;
            }
            $result[] = mb_substr(trim($value), 0, $length);
            if (count($result) >= $count) {
                break;
            }
        }
        return $result;
    }

    private function ensureEnabled(): void {
        if ($this->config->getAppValue('library', 'openlibrary_lookup_enabled', 'yes') !== 'yes') {
            throw new \RuntimeException('provider_disabled');
        }
    }

    /** @return array<string, mixed> */
    private function fetchJson(string $url, bool $allowEditionRedirect = false, bool $allowNotFound = false): array {
        $this->reserveRequestSlot();
        try {
            $response = $this->clients->newClient()->get($url, [
                'timeout' => 6,
                'read_timeout' => 6,
                'allow_redirects' => false,
                'http_errors' => false,
                'stream' => true,
                'headers' => ['Accept' => 'application/json', 'User-Agent' => 'Nextcloud-Library/0.4 (+https://github.com/utrost/Library)'],
            ]);
            if ($response->getStatusCode() === 429 || ($response->getStatusCode() === 503 && $response->getHeader('retry-after'))) {
                $retry=\OCA\Library\Exception\MetadataProviderRetryException::fromHeader($response->getHeader('retry-after'));
                $until=(int)floor(microtime(true)*1000)+$retry->retryAfter*1000;
                $this->db->executeStatement('UPDATE *PREFIX*library_lookup_quota SET next_at_ms=? WHERE provider=? AND next_at_ms<?',[$until,'openlibrary',$until]);
                $body=$response->getBody(); if (is_resource($body)) fclose($body);
                throw $retry;
            }
            if ($allowEditionRedirect && in_array($response->getStatusCode(), [301, 302, 303, 307, 308], true)) {
                $location = $response->getHeader('location');
                if (is_array($location)) {
                    $location = $location[0] ?? '';
                }
                if (!is_string($location)
                    || !preg_match('~^(?:https://openlibrary\.org)?/books/(OL[1-9][0-9]*M)\.json$~D', $location, $match)) {
                    throw new \RuntimeException('provider_unavailable');
                }
                return $this->fetchJson(self::BASE . '/books/' . $match[1] . '.json', false, $allowNotFound);
            }
            if ($allowNotFound && $response->getStatusCode() === 404) {
                return [];
            }
            if ($response->getStatusCode() !== 200) {
                throw new \RuntimeException('provider_unavailable');
            }
            $length = $response->getHeader('content-length');
            if (is_array($length)) {
                $length = $length[0] ?? '';
            }
            if (is_string($length) && preg_match('/^[0-9]+$/D', $length)
                && (float)$length > self::MAX_BODY) {
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
        } catch (\RuntimeException $e) {
            if ($e->getMessage() === 'rate_limited') {
                throw $e;
            }
            throw new \RuntimeException('provider_unavailable', 0, $e);
        } catch (\Throwable $e) {
            throw new \RuntimeException('provider_unavailable', 0, $e);
        }
    }

    /** Cross-worker pacing for the anonymous Open Library API allowance. */
    private function reserveRequestSlot(): void {
        $deadline = microtime(true) + 2.5;
        $triedInsert = false;
        $dbError = null;
        do {
            $now = (int)floor(microtime(true) * 1000);
            try {
                if ($this->db->executeStatement('UPDATE *PREFIX*library_lookup_quota SET next_at_ms=? WHERE provider=? AND next_at_ms<=?',
                    [$now + 1000, 'openlibrary', $now]) === 1) {
                    return;
                }
                $slot=$this->db->executeQuery('SELECT next_at_ms FROM *PREFIX*library_lookup_quota WHERE provider=?',['openlibrary']);
                $next=(int)$slot->fetchOne(); $slot->closeCursor();
                if ($next>$now+2500) throw new \OCA\Library\Exception\MetadataProviderRetryException((int)ceil(($next-$now)/1000));
                if (!$triedInsert) {
                    $triedInsert = true;
                    try {
                        $this->db->executeStatement('INSERT INTO *PREFIX*library_lookup_quota (provider,next_at_ms) VALUES (?,?)', ['openlibrary', $now + 1000]);
                        return;
                    } catch (\Throwable) {
                        // Another worker initialized the shared slot first.
                    }
                }
            } catch (\OCA\Library\Exception\MetadataProviderRetryException $error) {
                throw $error;
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
