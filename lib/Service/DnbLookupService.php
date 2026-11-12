<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** German National Library: explicit ISBN/title-author lookup without credentials. */
final class DnbLookupService extends SruLookupService {
    protected const BASE = 'https://services.dnb.de/sru/dnb';
    protected const PROVIDER = 'dnb';
    protected const LABEL = 'DNB';
    protected const SCHEMA = 'MARC21-xml';
    protected const ISBN_INDEX = 'isbn';
    protected const TITLE_INDEX = 'tit';
    protected const AUTHOR_INDEX = 'per';
    protected const ID_INDEX = 'idn';

    protected function validId(string $id): bool {
        return preg_match('/^[0-9]{8,11}[0-9X]$/D', $id) === 1;
    }

    protected function recordId(\DOMXPath $xml, \DOMElement $record): ?string {
        if (trim($xml->evaluate('string(m:controlfield[@tag="003"])', $record)) !== 'DE-101') return null;
        return trim($xml->evaluate('string(m:controlfield[@tag="001"])', $record));
    }

    protected function sourceUrl(string $id): string {
        return 'https://d-nb.info/' . $id;
    }
}
