<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;
use OCP\Files\Folder;
use Throwable;
use ZipArchive;

final class PublicationMetadataService {
    // realistic fixture notes: encoded PDF info dictionaries, CBZ without ComicInfo.xml, nested ComicInfo.xml, sidecar collisions.
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
            $filenameMetadata = $this->extractFilenameMetadata($file);
            $embeddedMetadata = $this->extract($file);
            $sidecar = $this->findOpfSidecar($file);
            if ($sidecar === null) {
                return array_merge($filenameMetadata, $embeddedMetadata);
            }

            $sidecarMetadata = $this->parseOpfMetadata($sidecar->getContent(), 'sidecar-opf');
            if ($sidecarMetadata === []) {
                return array_merge($filenameMetadata, $embeddedMetadata);
            }

            return array_merge($filenameMetadata, $embeddedMetadata, $sidecarMetadata);
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

    /**
     * Parse robust magazine/comic metadata from filenames and folder names when OPF/embedded metadata is absent.
     * Examples: Camera 1957-04.pdf, The New Yorker - 2023-11-20.pdf, c't 2024-17.pdf,
     * Tintin 010 - The Shooting Star.cbz, Aperture No. 251 Spring 2023.pdf.
     *
     * @return array<string, string>
     */
    private function extractFilenameMetadata(File $file): array {
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        $basename = pathinfo($file->getName(), PATHINFO_FILENAME);
        $folderNames = $this->folderNames($file);
        $defaultPublicationType = $extension === 'cbz' ? 'comic' : 'other';

        $parsers = [
            $this->parseComicNumberTitlePattern($basename, $extension),
            $this->parseMagazineDatePattern($basename, $folderNames, $defaultPublicationType),
            $this->parseYearIssuePattern($basename, $folderNames, $defaultPublicationType),
        ];

        foreach ($parsers as $metadata) {
            if ($metadata !== []) {
                return $metadata;
            }
        }

        return [];
    }

    /**
     * @param array<int, string> $folderNames
     * @return array<string, string>
     */
    private function parseMagazineDatePattern(string $basename, array $folderNames, string $defaultPublicationType): array {
        $normalized = $this->normalizeFilename($basename);
        if (preg_match('/^(?<publication>.+?)\s+(?<date>\d{4}[-_. ]\d{1,2}[-_. ]\d{1,2})$/u', $normalized, $matches)
            || preg_match('/^(?<publication>.+?)\s*[-–—]\s*(?<date>\d{4}[-_. ]\d{1,2}[-_. ]\d{1,2})$/u', $normalized, $matches)) {
            $date = $this->normalizeDateIfValid((string)$matches['date']);
            if ($date !== null) {
                $publication = $this->cleanTitle((string)$matches['publication']);
                return $this->filenameCandidate($publication . ' ' . $date, $publication, $date, $date, $defaultPublicationType === 'comic' ? 'comic' : 'magazine');
            }
        }

        if (preg_match('/^(?<publication>.+?)\s+(?<date>\d{4}[-_. ]\d{1,2})$/u', $normalized, $matches)
            || preg_match('/^(?<publication>.+?)\s*[-–—]\s*(?<date>\d{4}[-_. ]\d{1,2})$/u', $normalized, $matches)) {
            $date = $this->normalizeDateIfValid((string)$matches['date']);
            if ($date !== null) {
                $publication = $this->cleanTitle((string)$matches['publication']);
                return $this->filenameCandidate($publication . ' ' . $date, $publication, $date, $date, $defaultPublicationType === 'comic' ? 'comic' : 'magazine');
            }
        }

        if (preg_match('/^(?<publication>.+?)\s+(?<label>(?:No\.?|Nr\.?|Issue)\s*\d+[A-Za-z]?\s+.+?\d{4})$/iu', $normalized, $matches)) {
            $publication = $this->cleanTitle((string)$matches['publication']);
            $label = trim((string)$matches['label']);
            preg_match('/(\d{4})/', $label, $yearMatch);
            $date = $yearMatch[1] ?? '';
            return $this->filenameCandidate($publication . ' ' . $label, $publication, $date, $label, 'magazine');
        }

        $folderPublication = $this->nearestTextFolder($folderNames);
        $folderYear = $this->nearestYearFolder($folderNames);
        if ($folderPublication !== null && $folderYear !== null && preg_match('/(?<month>\d{1,2})(?:\D|$)/', $normalized, $matches)) {
            $date = sprintf('%04d-%02d', (int)$folderYear, max(1, min(12, (int)$matches['month'])));
            return $this->filenameCandidate($folderPublication . ' ' . $date, $folderPublication, $date, $date, $defaultPublicationType === 'comic' ? 'comic' : 'magazine');
        }

        return [];
    }

    /**
     * @param array<int, string> $folderNames
     * @return array<string, string>
     */
    private function parseYearIssuePattern(string $basename, array $folderNames, string $defaultPublicationType): array {
        $normalized = $this->normalizeFilename($basename);
        if (!preg_match('/^(?<publication>.+?)\s+(?<year>\d{4})[\s._-]*(?:no\.?|nr\.?|issue|#)?\s*(?<issue>\d{1,4}[A-Za-z]?)$/iu', $normalized, $matches)) {
            return [];
        }

        $publication = $this->cleanTitle((string)$matches['publication']);
        $year = (string)$matches['year'];
        $issue = (string)$matches['issue'];
        $label = 'No. ' . $issue;
        return $this->filenameCandidate($publication . ' ' . $year . ' ' . $label, $publication, $year, $label, $defaultPublicationType === 'comic' ? 'comic' : 'magazine');
    }

    /**
     * @return array<string, string>
     */
    private function parseComicNumberTitlePattern(string $basename, string $extension): array {
        if ($extension !== 'cbz') {
            return [];
        }

        $normalized = $this->normalizeFilename($basename);
        if (!preg_match('/^(?<publication>.+?)\s+(?<number>\d{1,4}(?:\.\d+)?)\s*[-–—]\s*(?<title>.+)$/u', $normalized, $matches)) {
            return [];
        }

        $publication = $this->cleanTitle((string)$matches['publication']);
        $number = ltrim((string)$matches['number'], '0') ?: '0';
        $title = $this->cleanTitle((string)$matches['title']);
        return [
            'metadataSource' => 'filename-pattern',
            'publicationType' => 'comic',
            'title' => $title,
            'publication' => $publication,
            'subtitle' => '#' . $number,
        ];
    }

    /**
     * @param array<int, string> $folderNames
     */
    private function nearestTextFolder(array $folderNames): ?string {
        for ($i = count($folderNames) - 1; $i >= 0; $i--) {
            $folder = $this->cleanTitle($folderNames[$i]);
            if ($folder !== '' && !preg_match('/^\d{4}$/', $folder)) {
                return $folder;
            }
        }
        return null;
    }

    /**
     * @param array<int, string> $folderNames
     */
    private function nearestYearFolder(array $folderNames): ?string {
        for ($i = count($folderNames) - 1; $i >= 0; $i--) {
            if (preg_match('/^(\d{4})$/', trim($folderNames[$i]), $matches)) {
                return $matches[1];
            }
        }
        return null;
    }

    /**
     * @return array<int, string>
     */
    private function folderNames(File $file): array {
        $path = trim(dirname($file->getPath()), '/');
        $parts = $path === '' ? [] : explode('/', $path);
        if (isset($parts[1]) && $parts[1] === 'files') {
            return array_values(array_slice($parts, 2));
        }
        return array_values(array_filter($parts, static fn (string $part): bool => $part !== ''));
    }

    /**
     * @return array<string, string>
     */
    private function filenameCandidate(string $title, string $publication, string $date, string $label, string $publicationType): array {
        return array_filter([
            'metadataSource' => 'filename-pattern',
            'publicationType' => $publicationType,
            'title' => $this->cleanTitle($title),
            'publication' => $this->cleanTitle($publication),
            'publicationDate' => $date,
            'subtitle' => trim($label),
        ], static fn (?string $value): bool => $value !== null && $value !== '');
    }

    private function normalizeFilename(string $basename): string {
        $value = str_replace(['_', '.'], ' ', $basename);
        $value = preg_replace('/\s+/', ' ', $value) ?? $value;
        return trim($value);
    }

    private function normalizeDateIfValid(string $date): ?string {
        $parts = preg_split('/[-_. ]+/', trim($date)) ?: [];
        if (count($parts) >= 2) {
            $month = (int)$parts[1];
            if ($month < 1 || $month > 12) {
                return null;
            }
        }
        if (count($parts) >= 3) {
            $day = (int)$parts[2];
            if ($day < 1 || $day > 31) {
                return null;
            }
        }
        return $this->normalizeDate($date);
    }

    private function normalizeDate(string $date): string {
        $parts = preg_split('/[-_. ]+/', trim($date)) ?: [];
        if (count($parts) >= 3) {
            return sprintf('%04d-%02d-%02d', (int)$parts[0], max(1, min(12, (int)$parts[1])), max(1, min(31, (int)$parts[2])));
        }
        if (count($parts) >= 2) {
            return sprintf('%04d-%02d', (int)$parts[0], max(1, min(12, (int)$parts[1])));
        }
        return trim($date);
    }

    private function cleanTitle(string $value): string {
        $value = str_replace(['_', '.'], ' ', $value);
        $value = preg_replace('/\s+/', ' ', $value) ?? $value;
        return trim($value, " \t\n\r\0\x0B-–—");
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
        $value = $this->decodePdfInfoString((string)$value);
        $value = trim((string)$value);
        return $value === '' ? null : $value;
    }

    private function decodePdfInfoString(string $value): string {
        if (str_starts_with($value, "\xFE\xFF")) {
            $value = mb_convert_encoding(substr($value, 2), 'UTF-8', 'UTF-16BE');
        } elseif (str_starts_with($value, "\xFF\xFE")) {
            $value = mb_convert_encoding(substr($value, 2), 'UTF-8', 'UTF-16LE');
        }

        return (string)preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/', '', $value);
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
