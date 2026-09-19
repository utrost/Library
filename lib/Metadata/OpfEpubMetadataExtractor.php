<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;
use ZipArchive;

final class OpfEpubMetadataExtractor {
private ?string $lastError = null;

public function getLastError(): ?string {
    return $this->lastError;
}

/**
 * @return array<string, string>
 */
public function extractEpub(File $file): array {
    $this->lastError = null;
    if (!class_exists(ZipArchive::class)) {
        return [];
    }

    $temporaryPath = tempnam(sys_get_temp_dir(), 'library-epub-');
    if ($temporaryPath === false) {
        return [];
    }

    try {
        file_put_contents($temporaryPath, $file->getContent());
        $zip = new ZipArchive();
        if ($zip->open($temporaryPath) !== true) {
            $this->lastError = 'Unsupported or corrupt EPUB archive';
            return [];
        }

        $containerXml = $zip->getFromName('META-INF/container.xml');
        if (!is_string($containerXml) || $containerXml === '') {
            $zip->close();
            return [];
        }

        $opfPath = $this->findRootfilePath($containerXml);
        if ($opfPath === null) {
            $zip->close();
            return [];
        }

        $opfXml = $zip->getFromName($opfPath);
        $zip->close();
        if (!is_string($opfXml) || $opfXml === '') {
            return [];
        }

        $metadata = $this->parseOpfMetadata($opfXml, 'epub-opf');
        if ($metadata !== []) {
            $metadata['publicationType'] = $metadata['publicationType'] ?? 'book';
        }
        return $metadata;
    } finally {
        @unlink($temporaryPath);
    }
}

/**
 * @return array<string, string>
 */
public function extractStandaloneOpf(File $file): array {
    return $this->parseOpfMetadata($file->getContent(), 'opf'); // metadataSource' => 'opf'
}

private function findRootfilePath(string $containerXml): ?string {
    $xml = @simplexml_load_string($containerXml);
    if ($xml === false) {
        return null;
    }

    foreach ($xml->xpath('//*[local-name()="rootfile"]') ?: [] as $rootfile) {
        $attributes = $rootfile->attributes();
        if (isset($attributes['full-path'])) {
            $path = trim((string)$attributes['full-path']);
            if ($path !== '') {
                return $path;
            }
        }
    }

    return null;
}

/**
 * OPF package metadata, including dc:title, dc:creator, dc:language, dc:publisher and dc:date.
 *
 * @return array<string, string>
 */
public function parseOpfMetadata(string $opfXml, string $source): array {
    $xml = @simplexml_load_string($opfXml);
    if ($xml === false) {
        return [];
    }

    $dc = $xml->children('http://purl.org/dc/elements/1.1/');
    if (isset($xml->metadata)) {
        $dc = $xml->metadata->children('http://purl.org/dc/elements/1.1/');
    }

    $metadata = [
        'metadataSource' => $source,
    ];

    $title = $this->firstXmlValue($dc->title ?? null);
    if ($title !== null) {
        $metadata['title'] = $title;
    }

    $creators = $this->xmlValues($dc->creator ?? null);
    if ($creators !== []) {
        $metadata['creators'] = implode('; ', $creators);
    }

    $language = $this->firstXmlValue($dc->language ?? null);
    if ($language !== null) {
        $metadata['language'] = $language;
    }

    $publisher = $this->firstXmlValue($dc->publisher ?? null);
    if ($publisher !== null) {
        $metadata['publisher'] = $publisher;
    }

    $date = $this->firstXmlValue($dc->date ?? null);
    if ($date !== null) {
        $metadata['publicationDate'] = $date;
    }

    $description = $this->firstXmlValue($dc->description ?? null);
    if ($description !== null) {
        $description = $this->normalizeDescription($description);
        if ($description !== null) {
            $metadata['description'] = $description;
        }
    }

    $subjects = $this->xmlValues($dc->subject ?? null);
    if ($subjects !== []) {
        $metadata['subjects'] = $subjects;
    }

    $series = $this->extractSeries($xml);
    if ($series !== null) {
        $metadata['publication'] = $series;
    }

    $publicationType = $this->normalizePublicationType($this->firstXmlValue($dc->type ?? null));
    if ($publicationType !== null) {
        $metadata['publicationType'] = $publicationType;
    }

    $identifiers = $this->extractIdentifiers($dc->identifier ?? null, $source);
    if ($identifiers !== []) {
        $metadata['identifiers'] = $identifiers;
    }

    return count($metadata) > 1 ? $metadata : [];
}

/**
 * @return array<int, array{scheme:string,displayValue:string,source:string,userEdited:bool}>
 */
private function extractIdentifiers(mixed $nodes, string $source): array {
    $identifiers = [];
    if ($nodes === null) {
        return [];
    }

    foreach ($nodes as $node) {
        $value = trim((string)$node);
        if ($value === '') {
            continue;
        }
        $scheme = strtolower(trim((string)($node['scheme'] ?? '')));
        $opfAttributes = $node->attributes('http://www.idpf.org/2007/opf');
        if ($scheme === '' && isset($opfAttributes['scheme'])) {
            $scheme = strtolower(trim((string)$opfAttributes['scheme']));
        }

        $compact = strtoupper((string)preg_replace('/[\s-]+/u', '', $value));
        if (($scheme === 'isbn' || preg_match('/^(?:(?:URN:)?ISBN:?)?(\d{9}[\dX]|\d{13})$/i', $compact) === 1)
            && preg_match('/(\d{9}[\dX]|\d{13})$/i', $compact) === 1) {
            $identifiers[] = ['scheme' => 'isbn', 'displayValue' => $value, 'source' => $source, 'userEdited' => false];
        } elseif (($scheme === 'issn' || preg_match('/^(?:(?:URN:)?ISSN:?)?(\d{7}[\dX])$/i', $compact) === 1)
            && preg_match('/(\d{7}[\dX])$/i', $compact) === 1) {
            $identifiers[] = ['scheme' => 'issn', 'displayValue' => $value, 'source' => $source, 'userEdited' => false];
        }
    }
    return $identifiers;
}

private function extractSeries(\SimpleXMLElement $xml): ?string {
    $opf3Collections = [];
    $opf3SeriesIds = [];

    foreach ($xml->xpath('//*[local-name()="metadata"]/*[local-name()="meta"]') ?: [] as $meta) {
        $name = strtolower(trim((string)($meta['name'] ?? '')));
        $property = strtolower(trim((string)($meta['property'] ?? '')));
        $value = trim((string)($meta['content'] ?? ''));
        if ($value === '') {
            $value = trim((string)$meta);
        }

        if (($name === 'calibre:series' || $property === 'calibre:series') && $value !== '') {
            return $value;
        }

        if ($property === 'belongs-to-collection' && $value !== '') {
            $id = trim((string)($meta['id'] ?? ''));
            if ($id !== '') {
                $opf3Collections[$id] = $value;
            }
        } elseif ($property === 'collection-type' && strtolower($value) === 'series') {
            $refines = ltrim(trim((string)($meta['refines'] ?? '')), '#');
            if ($refines !== '') {
                $opf3SeriesIds[] = $refines;
            }
        }
    }

    foreach ($opf3SeriesIds as $id) {
        if (isset($opf3Collections[$id])) {
            return $opf3Collections[$id];
        }
    }
    return null;
}

private function normalizePublicationType(?string $type): ?string {
    if ($type === null) {
        return null;
    }

    return match (strtolower(trim($type))) {
        'book', 'text' => 'book',
        'comic', 'comic book' => 'comic',
        'magazine' => 'magazine',
        'journal' => 'journal',
        'manual' => 'manual',
        'catalog', 'catalogue' => 'catalogue',
        'other' => 'other',
        default => null,
    };
}

private function normalizeDescription(string $value): ?string {
    $normalized = trim($value);
    if ($normalized === '') {
        return null;
    }

    for ($i = 0; $i < 2; $i++) {
        $decoded = html_entity_decode($normalized, ENT_QUOTES | ENT_HTML5 | ENT_SUBSTITUTE, 'UTF-8');
        if ($decoded === $normalized) {
            break;
        }
        $normalized = $decoded;
    }

    $normalized = preg_replace('/<(script|style)\b[^>]*>.*?<\/\1\s*>/isu', ' ', $normalized) ?? $normalized;
    $normalized = preg_replace('/<\s*(?:br|hr)\b[^>]*>/iu', "\n", $normalized) ?? $normalized;
    $normalized = preg_replace('/<\s*\/\s*(?:p|div|section|article|blockquote|li|tr|h[1-6])\s*>/iu', "\n\n", $normalized) ?? $normalized;
    $normalized = preg_replace('/<\s*(?:p|div|section|article|blockquote|li|tr|h[1-6])\b[^>]*>/iu', '', $normalized) ?? $normalized;
    $normalized = strip_tags($normalized);
    $normalized = str_replace("\xc2\xa0", ' ', $normalized);
    $normalized = preg_replace('/[ \t]+/u', ' ', $normalized) ?? $normalized;
    $normalized = preg_replace('/\h*\R\h*/u', "\n", $normalized) ?? $normalized;
    $normalized = preg_replace('/\n{3,}/u', "\n\n", $normalized) ?? $normalized;
    $normalized = trim($normalized);

    return $normalized === '' ? null : $normalized;
}

private function firstXmlValue(mixed $nodes): ?string {
    foreach ($this->xmlValues($nodes) as $value) {
        return $value;
    }
    return null;
}

/**
 * @return array<int, string>
 */
private function xmlValues(mixed $nodes): array {
    if ($nodes === null) {
        return [];
    }

    $values = [];
    foreach ($nodes as $node) {
        $value = trim((string)$node);
        if ($value !== '') {
            $values[] = $value;
        }
    }
    return $values;
}
}
