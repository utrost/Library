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

    return count($metadata) > 1 ? $metadata : [];
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
