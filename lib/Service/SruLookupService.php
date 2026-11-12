<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Http\Client\IClientService;
use OCP\ICacheFactory;
use OCP\IConfig;
use OCP\IDBConnection;

/** Bounded SRU/MARC transport and normalization shared by fixed catalogue adapters. */
abstract class SruLookupService {
    protected const BASE = '';
    protected const PROVIDER = '';
    protected const LABEL = '';
    protected const SCHEMA = '';
    protected const ISBN_INDEX = '';
    protected const TITLE_INDEX = '';
    protected const AUTHOR_INDEX = '';
    protected const ID_INDEX = '';

    abstract protected function validId(string $id): bool;
    abstract protected function recordId(\DOMXPath $xml, \DOMElement $record): ?string;
    abstract protected function sourceUrl(string $id): string;
    private const MAX_BODY = 524288;
    private const SRU = 'http://www.loc.gov/zing/srw/';
    private const MARC = 'http://www.loc.gov/MARC21/slim';

    public function __construct(
        private IClientService $clients,
        private ICacheFactory $caches,
        private IDBConnection $db,
        private IConfig $config,
    ) {}

    public function search(string $userId, string $isbn, string $title, string $author): array {
        $this->ensureEnabled();
        if (!mb_check_encoding($isbn . $title . $author, 'UTF-8') || mb_strlen($isbn) > 50
            || preg_match('/[\p{Cc}]/u', $isbn . $title . $author)) throw new \InvalidArgumentException('invalid_query');
        $isbn = trim($isbn); $title = trim($title); $author = trim($author);
        if ($isbn !== '') {
            $row = IdentifierService::normalizeIdentifier('isbn', preg_replace('/^ISBN(?:-1[03])?\s*:?\s*/i', '', $isbn) ?? '');
            if ($row === null || !$row['valid']) throw new \InvalidArgumentException('invalid_isbn');
            $isbn = $row['normalizedValue'];
        } elseif (mb_strlen($title) < 3 || mb_strlen($title) > 200 || mb_strlen($author) > 200) {
            throw new \InvalidArgumentException('invalid_query');
        }
        $query = $isbn !== '' ? static::ISBN_INDEX . '=' . $this->quote($isbn) : $this->titleQuery($title, $author);
        $cache = $this->caches->createDistributed('library-' . static::PROVIDER . '-lookup');
        $key = hash('sha256', $userId . "\0search\0" . $query);
        $cached = $cache->get($key);
        if (is_array($cached)) return $cached;
        $results = [];
        foreach ($this->fetchRecords($query, 8) as $edition) {
            $id = $edition['editionId'];
            $results[$id] = [
                'provider' => static::LABEL, 'editionId' => $id, 'url' => $edition['url'],
                'title' => $edition['fields']['title'], 'authors' => $edition['authors'],
                'publisher' => $edition['fields']['publisher'] ?? '', 'year' => $edition['fields']['publicationDate'] ?? '',
                'isbn' => $edition['isbn'], 'languages' => $edition['languages'], 'format' => $edition['format'],
                'match' => $isbn === '' ? 'title_author' : (in_array($isbn, $edition['isbn'], true) ? 'isbn' : 'isbn_mismatch'),
            ];
            $cache->set(hash('sha256', $userId . "\0edition\0" . $id), $edition, 900);
        }
        $results = array_values($results);
        $cache->set($key, $results, 900);
        return $results;
    }

    public function edition(string $userId, string $editionId): array {
        $this->ensureEnabled();
        if (!$this->validId($editionId)) throw new \InvalidArgumentException('invalid_edition');
        $cache = $this->caches->createDistributed('library-' . static::PROVIDER . '-lookup');
        $key = hash('sha256', $userId . "\0edition\0" . $editionId);
        $cached = $cache->get($key);
        if (is_array($cached)) return $cached;
        $records = $this->fetchRecords(static::ID_INDEX . '=' . $this->quote($editionId), 1);
        if (count($records) !== 1 || $records[0]['editionId'] !== $editionId) throw new \RuntimeException('provider_unavailable');
        $cache->set($key, $records[0], 900);
        return $records[0];
    }

    protected function quote(string $value): string {
        // CQL literals: escape syntax and wildcard characters, never interpolate raw queries.
        return '"' . strtr($value, ['\\' => '\\\\', '"' => '\\"', '*' => '\\*', '?' => '\\?']) . '"';
    }

    protected function titleQuery(string $title, string $author): string {
        $query = static::TITLE_INDEX . '=' . $this->quote($title);
        if ($author !== '') $query .= ' and ' . static::AUTHOR_INDEX . '=' . $this->quote($author);
        return $query;
    }

    private function ensureEnabled(): void {
        if ($this->config->getAppValue('library', static::PROVIDER . '_lookup_enabled', 'yes') !== 'yes') throw new \RuntimeException('provider_disabled');
    }

    private function clean(string $value, int $limit): string {
        // MARC non-sorting markers must disappear without splitting the enclosed word.
        $value = str_replace(["\u{0098}", "\u{009C}"], '', $value);
        $value = preg_replace('/[\p{Cc}\s]+/u', ' ', strip_tags($value)) ?? '';
        return mb_substr(trim($value), 0, $limit);
    }

    private function record(\DOMXPath $xml, \DOMElement $record): ?array {
        $control = fn(string $tag): string => $xml->evaluate('string(m:controlfield[@tag="' . $tag . '"])', $record);
        $values = function(string $path, int $limit = 500) use ($xml, $record): array {
            $out = [];
            foreach ($xml->query($path, $record) as $node) {
                $value = $this->clean($node->textContent, $limit);
                if ($value !== '') $out[] = $value;
                if (count($out) >= 12) break;
            }
            return array_values(array_unique($out));
        };
        $field = fn(string $tag, string $code): string => 'm:datafield[@tag="' . $tag . '"]/m:subfield[@code="' . $code . '"]';
        $id = $this->recordId($xml, $record);
        $title = $values($field('245', 'a'))[0] ?? '';
        if ($id === null || !$this->validId($id) || $title === '') return null;
        $isbns = [];
        foreach ($values($field('020', 'a'), 80) as $isbn) {
            // Older MARC records may append a binding qualifier to the number.
            $isbn = preg_replace('/\s*\([^)]*\).*$/u', '', $isbn) ?? '';
            $normalized = IdentifierService::normalizeIdentifier('isbn', $isbn);
            if ($normalized !== null && $normalized['valid']) $isbns[] = $normalized['normalizedValue'];
        }
        $publication = 'm:datafield[@tag="264" and @ind2="1"]';
        if ($xml->query($publication, $record)->length === 0) $publication = 'm:datafield[@tag="260"]';
        $date = $values($publication . '/m:subfield[@code="c"]', 80)[0] ?? '';
        $year = preg_match('/(?:^|\D)((?:1[5-9]|20)[0-9]{2})(?:\D|$)/', $date, $match) ? $match[1] : '';
        $languages = array_values(array_filter($values($field('041', 'a'), 16), static fn($value) => preg_match('/^[a-z]{3}$/D', $value)));
        if (!$languages && preg_match('/^[a-z]{3}$/D', $code = substr($control('008'), 35, 3))) $languages[] = $code;
        $fields = [
            'title' => $title,
            'subtitle' => $values($field('245', 'b'))[0] ?? '',
            'publisher' => $values($publication . '/m:subfield[@code="b"]', 255)[0] ?? '',
            'publicationDate' => $year,
            'description' => $values($field('520', 'a'), 5000)[0] ?? '',
            // Controlled topical/geographic subjects; do not confuse form/genre or publisher keywords with these.
            'subjects' => $values('m:datafield[@tag="650" or @tag="651"]/m:subfield[@code="a"]', 150),
        ];
        $language = LanguageNormalizer::normalize(implode('; ', array_slice($languages, 0, 4)));
        if ($language !== null) $fields['language'] = $language;
        $fields = array_filter($fields, static fn($value) => is_array($value) ? $value !== [] : $value !== '');
        return [
            'provider' => static::LABEL, 'editionId' => $id, 'url' => $this->sourceUrl($id),
            'fields' => $fields, 'isbn' => array_slice(array_values(array_unique($isbns)), 0, 8),
            'languages' => array_slice($languages, 0, 4),
            // Contributors such as translators, publishers and illustrators are not authors.
            'authors' => array_slice($values('m:datafield[(@tag="100" or @tag="700") and (m:subfield[@code="4"]="aut" or m:subfield[@code="e"][translate(normalize-space(.), "ABCDEFGHIJKLMNOPQRSTUVWXYZ.", "abcdefghijklmnopqrstuvwxyz")="author"] or not(m:subfield[@code="4"] or m:subfield[@code="e"]))]/m:subfield[@code="a"]', 160), 0, 5),
            'format' => $values($field('250', 'a'), 120)[0] ?? '',
        ];
    }

    private function fetchRecords(string $query, int $limit): array {
        $this->reserveRequestSlot();
        try {
            $url = static::BASE . '?' . http_build_query(['version' => '1.1', 'operation' => 'searchRetrieve',
                'query' => $query, 'recordSchema' => static::SCHEMA, 'recordPacking' => 'xml', 'maximumRecords' => $limit], '', '&', PHP_QUERY_RFC3986);
            $response = $this->clients->newClient()->get($url, [
                'timeout' => 6, 'read_timeout' => 6, 'allow_redirects' => false, 'http_errors' => false, 'stream' => true,
                'headers' => ['Accept' => 'application/xml', 'User-Agent' => 'Nextcloud-Library/0.4 (+https://github.com/utrost/Library)'],
            ]);
            $stream = $response->getBody();
            try {
                if ($response->getStatusCode() === 429 || ($response->getStatusCode() === 503 && $response->getHeader('retry-after'))) {
                    $retry = \OCA\Library\Exception\MetadataProviderRetryException::fromHeader($response->getHeader('retry-after'));
                    $until = (int)floor(microtime(true) * 1000) + $retry->retryAfter * 1000;
                    $this->db->executeStatement('UPDATE *PREFIX*library_lookup_quota SET next_at_ms=? WHERE provider=? AND next_at_ms<?', [$until, static::PROVIDER, $until]);
                    throw $retry;
                }
                $length = $response->getHeader('content-length');
                if (is_array($length)) $length = $length[0] ?? '';
                if ($response->getStatusCode() !== 200 || !is_resource($stream)
                    || (is_numeric($length) && (float)$length > self::MAX_BODY)) throw new \RuntimeException('provider_unavailable');
                $body = stream_get_contents($stream, self::MAX_BODY + 1);
            } finally {
                if (is_resource($stream)) fclose($stream);
            }
            if (!is_string($body) || strlen($body) > self::MAX_BODY || !mb_check_encoding($body, 'UTF-8')
                || str_contains($body, "\0") || preg_match('/<!\s*(?:DOCTYPE|ENTITY)/i', $body)) throw new \RuntimeException('provider_unavailable');
            $previous = libxml_use_internal_errors(true);
            try {
                $document = new \DOMDocument();
                // No entity substitution, DTD loading, external access or relaxed parser limits.
                if (!$document->loadXML($body, LIBXML_NONET) || $document->doctype !== null) throw new \RuntimeException('provider_unavailable');
            } finally {
                libxml_clear_errors(); libxml_use_internal_errors($previous);
            }
            $xml = new \DOMXPath($document);
            $xml->registerNamespace('s', self::SRU); $xml->registerNamespace('m', self::MARC);
            if ($document->documentElement->localName !== 'searchRetrieveResponse' || $document->documentElement->namespaceURI !== self::SRU
                || $xml->query('//*[local-name()="diagnostic"]')->length > 0
                || !preg_match('/^[0-9]+$/D', $xml->evaluate('string(/s:searchRetrieveResponse/s:numberOfRecords)'))) throw new \RuntimeException('provider_unavailable');
            $records = $xml->query('/s:searchRetrieveResponse/s:records/s:record/s:recordData/m:record');
            $total = (int)$xml->evaluate('string(/s:searchRetrieveResponse/s:numberOfRecords)');
            if ($records->length > $limit || ($total > 0 && $records->length === 0) || ($total === 0 && $records->length !== 0)) throw new \RuntimeException('provider_unavailable');
            $result = [];
            foreach ($records as $record) {
                $edition = $this->record($xml, $record);
                if ($edition !== null) $result[] = $edition;
            }
            return $result;
        } catch (\OCA\Library\Exception\MetadataProviderRetryException $error) {
            throw $error;
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
                    [$now + 1000, static::PROVIDER, $now]) === 1) {
                    return;
                }
                $slot=$this->db->executeQuery('SELECT next_at_ms FROM *PREFIX*library_lookup_quota WHERE provider=?',[static::PROVIDER]);
                $next=(int)$slot->fetchOne(); $slot->closeCursor();
                if ($next>$now+2500) throw new \OCA\Library\Exception\MetadataProviderRetryException((int)ceil(($next-$now)/1000));
                if (!$triedInsert) {
                    $triedInsert = true;
                    try {
                        $this->db->executeStatement('INSERT INTO *PREFIX*library_lookup_quota (provider,next_at_ms) VALUES (?,?)', [static::PROVIDER, $now + 1000]);
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
