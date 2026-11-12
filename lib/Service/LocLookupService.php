<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Library of Congress catalogue. Fixed HTTPS SRU endpoint; no automatic fallback. */
final class LocLookupService extends SruLookupService {
    protected const BASE = 'https://lx2.loc.gov/sru/lcdb';
    protected const PROVIDER = 'loc';
    protected const LABEL = 'Library of Congress';
    protected const SCHEMA = 'marcxml';
    protected const ISBN_INDEX = 'bath.isbn';
    protected const TITLE_INDEX = 'dc.title';
    protected const AUTHOR_INDEX = 'dc.creator';
    protected const ID_INDEX = 'bath.lccn';

    protected function validId(string $id): bool {
        // Normalized LCCN: optional alphabetic prefix, 2/4-digit year + six-digit serial.
        return preg_match('/^[a-z]{0,3}(?:[0-9]{8}|[0-9]{10})$/D', $id) === 1;
    }

    protected function recordId(\DOMXPath $xml, \DOMElement $record): ?string {
        if (trim($xml->evaluate('string(m:controlfield[@tag="003"])', $record)) !== 'DLC') return null;
        // 001 is the catalogue's local ID; only 010$a supplies the persistent LCCN.
        $id = $xml->evaluate('string(m:datafield[@tag="010"]/m:subfield[@code="a"])', $record);
        return preg_replace('/\s+/', '', trim($id));
    }

    protected function sourceUrl(string $id): string {
        return 'https://lccn.loc.gov/' . $id;
    }

    protected function titleQuery(string $title, string $author): string {
        $query = self::TITLE_INDEX . '=' . $this->quote($title);
        // LoC phrase searching expects surname first. Separate name words keep both
        // "Jane Example" and "Example, Jane" usable without guessing a surname.
        $words = preg_split('/[\s,]+/u', $author, -1, PREG_SPLIT_NO_EMPTY);
        if (count($words) > 12) throw new \InvalidArgumentException('invalid_query');
        foreach ($words as $word) $query .= ' and ' . self::AUTHOR_INDEX . '=' . $this->quote($word);
        return $query;
    }
}
