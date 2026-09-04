<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;
use Throwable;
use ZipArchive;

final class PublicationMetadataService {
    /**
     * Extract best-effort local metadata from publication files.
     *
     * @return array<string, string>
     */
    public function extract(File $file): array {
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        $mimeType = strtolower($file->getMimetype());

        try {
            if ($extension === 'epub' || $mimeType === 'application/epub+zip') {
                return $this->extractEpubMetadata($file);
            }
            if ($extension === 'opf' || $mimeType === 'application/oebps-package+xml') {
                return $this->extractStandaloneOpfMetadata($file);
            }
            if ($extension === 'pdf' || $mimeType === 'application/pdf') {
                return $this->extractPdfMetadata($file);
            }
        } catch (Throwable) {
            return [];
        }

        return [];
    }

    /**
     * @return array<string, string>
     */
    private function extractEpubMetadata(File $file): array {
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
    private function extractStandaloneOpfMetadata(File $file): array {
        return $this->parseOpfMetadata($file->getContent(), 'opf'); // metadataSource' => 'opf'
    }

    /**
     * @return array<string, string>
     */
    private function extractPdfMetadata(File $file): array {
        // PDF info dictionary keys: /Title and /Author.
        $content = substr($file->getContent(), 0, 262144);
        $metadata = [
            'metadataSource' => 'pdf-info',
            'publicationType' => 'other',
        ];

        $title = $this->extractPdfInfoString($content, 'Title');
        if ($title !== null) {
            $metadata['title'] = $title;
        }

        $author = $this->extractPdfInfoString($content, 'Author');
        if ($author !== null) {
            $metadata['creators'] = $author;
        }

        return count($metadata) > 2 ? $metadata : [];
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
    private function parseOpfMetadata(string $opfXml, string $source): array {
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

    private function extractPdfInfoString(string $content, string $key): ?string {
        if (!preg_match('/\/' . preg_quote($key, '/') . '\s*\((.*?)\)/s', $content, $matches)) {
            return null;
        }

        $value = preg_replace('/\\\\([nrtbf()\\\\])/', '$1', $matches[1]);
        $value = trim((string)$value);
        return $value === '' ? null : $value;
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
