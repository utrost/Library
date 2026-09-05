<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;
use OCP\Files\Folder;
use Throwable;
use ZipArchive;

final class PublicationMetadataService {
    private ?string $lastError = null;

    public function getLastError(): ?string {
        return $this->lastError;
    }

    /**
     * Extract best-effort local metadata from publication files, preferring local OPF sidecars
     * over embedded/PDF candidates for editable catalogue defaults.
     *
     * @return array<string, string>
     */
    public function extractWithSidecar(File $file): array {
        $this->lastError = null;

        try {
            $embeddedMetadata = $this->extract($file);
            $sidecar = $this->findOpfSidecar($file);
            if ($sidecar === null) {
                return $embeddedMetadata;
            }

            $sidecarMetadata = $this->parseOpfMetadata($sidecar->getContent(), 'sidecar-opf');
            if ($sidecarMetadata === []) {
                return $embeddedMetadata;
            }

            return array_merge($embeddedMetadata, $sidecarMetadata);
        } catch (Throwable $e) {
            $this->lastError = 'metadata extraction failed: ' . $e->getMessage();
            return [];
        }
    }

    /**
     * Extract best-effort local metadata from publication files.
     *
     * @return array<string, string>
     */
    public function extract(File $file): array {
        $this->lastError = null;
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
            if ($extension === 'cbz' || $mimeType === 'application/comicbook+zip' || $mimeType === 'application/x-cbz') {
                return $this->extractCbzMetadata($file);
            }
        } catch (Throwable $e) {
            $this->lastError = 'metadata extraction failed: ' . $e->getMessage();
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

    /**
     * Extract CBZ ComicInfo.xml metadata and map it into Library's general publication model.
     * ComicInfo fields include <Series>, <Number>, <Writer>, <Year>, <Month>, <Day> and <Publisher>.
     *
     * @return array<string, string>
     */
    private function extractCbzMetadata(File $file): array {
        if (!class_exists(ZipArchive::class)) {
            return [];
        }

        $temporaryPath = tempnam(sys_get_temp_dir(), 'library-cbz-');
        if ($temporaryPath === false) {
            return [];
        }

        try {
            file_put_contents($temporaryPath, $file->getContent());
            $zip = new ZipArchive();
            if ($zip->open($temporaryPath) !== true) {
                $this->lastError = 'Unsupported or corrupt CBZ archive';
                return [];
            }

            $comicInfoXml = $zip->getFromName('ComicInfo.xml');
            if (!is_string($comicInfoXml)) {
                for ($index = 0; $index < $zip->numFiles; $index++) {
                    $name = $zip->getNameIndex($index);
                    if (is_string($name) && strcasecmp(basename($name), 'ComicInfo.xml') === 0) {
                        $comicInfoXml = $zip->getFromIndex($index);
                        break;
                    }
                }
            }
            $zip->close();

            if (!is_string($comicInfoXml) || trim($comicInfoXml) === '') {
                return [];
            }

            return $this->parseComicInfoMetadata($comicInfoXml);
        } finally {
            @unlink($temporaryPath);
        }
    }

    private function findOpfSidecar(File $file): ?File {
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        if ($extension === 'opf') {
            return null;
        }

        $parent = $file->getParent();
        if (!$parent instanceof Folder) {
            return null;
        }

        $sameBasenameOpf = pathinfo($file->getName(), PATHINFO_FILENAME) . '.opf';
        if ($parent->nodeExists($sameBasenameOpf)) {
            $node = $parent->get($sameBasenameOpf);
            if ($node instanceof File) {
                return $node;
            }
        }

        if ($parent->nodeExists('metadata.opf')) {
            $node = $parent->get('metadata.opf');
            if ($node instanceof File) {
                return $node;
            }
        }

        return null;
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
     * @return array<string, string>
     */
    private function parseComicInfoMetadata(string $comicInfoXml): array {
        $xml = @simplexml_load_string($comicInfoXml);
        if ($xml === false) {
            return [];
        }

        $metadata = [
            'metadataSource' => 'cbz-comicinfo',
            'publicationType' => 'comic',
        ];

        $title = $this->comicInfoValue($xml, 'Title');
        if ($title !== null) {
            $metadata['title'] = $title;
        }

        $series = $this->comicInfoValue($xml, 'Series');
        if ($series !== null) {
            $metadata['publication'] = $series;
            if (!isset($metadata['title'])) {
                $number = $this->comicInfoValue($xml, 'Number');
                $metadata['title'] = $number !== null ? $series . ' #' . $number : $series;
            }
        }

        $number = $this->comicInfoValue($xml, 'Number');
        if ($number !== null && $title !== null && $series !== null) {
            $metadata['subtitle'] = $series . ' #' . $number;
        }

        $creators = $this->comicInfoCreators($xml);
        if ($creators !== []) {
            $metadata['creators'] = implode('; ', $creators);
        }

        $publisher = $this->comicInfoValue($xml, 'Publisher');
        if ($publisher !== null) {
            $metadata['publisher'] = $publisher;
        }

        $date = $this->comicInfoDate($xml);
        if ($date !== null) {
            $metadata['publicationDate'] = $date;
        }

        return count($metadata) > 2 ? $metadata : [];
    }

    private function comicInfoValue(\SimpleXMLElement $xml, string $field): ?string {
        $value = trim((string)($xml->{$field} ?? ''));
        return $value === '' ? null : $value;
    }

    /**
     * @return array<int, string>
     */
    private function comicInfoCreators(\SimpleXMLElement $xml): array {
        $creators = [];
        foreach (['Writer', 'Penciller', 'Inker', 'Colorist', 'Letterer', 'CoverArtist'] as $field) {
            $value = $this->comicInfoValue($xml, $field);
            if ($value === null) {
                continue;
            }
            foreach (preg_split('/[,;]+/', $value) ?: [] as $creator) {
                $creator = trim($creator);
                if ($creator !== '') {
                    $creators[$creator] = $creator;
                }
            }
        }
        return array_values($creators);
    }

    private function comicInfoDate(\SimpleXMLElement $xml): ?string {
        $year = $this->comicInfoValue($xml, 'Year');
        if ($year === null || !preg_match('/^\d{4}$/', $year)) {
            return null;
        }

        $month = $this->comicInfoValue($xml, 'Month');
        $day = $this->comicInfoValue($xml, 'Day');
        if ($month !== null && preg_match('/^\d{1,2}$/', $month)) {
            $monthNumber = max(1, min(12, (int)$month));
            if ($day !== null && preg_match('/^\d{1,2}$/', $day)) {
                $dayNumber = max(1, min(31, (int)$day));
                return sprintf('%04d-%02d-%02d', (int)$year, $monthNumber, $dayNumber);
            }
            return sprintf('%04d-%02d', (int)$year, $monthNumber);
        }

        return $year;
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
