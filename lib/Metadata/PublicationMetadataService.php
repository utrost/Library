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
            $filenameMetadata = (new FilenameMetadataExtractor())->extract($file);
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
        // PDF info dictionary keys: /Title and /Author. Real PDFs may use literal strings
        // such as /Author (J\374rgen) or UTF-16 hex strings such as /Title <FEFF...>.
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

        $subject = $this->extractPdfInfoString($content, 'Subject');
        if ($subject !== null) {
            // PDF subject maps to Library subtitle: useful context, but not a new metadata model.
            $metadata['subtitle'] = $subject;
        }

        $date = $this->extractPdfInfoDate($content, 'CreationDate') ?? $this->extractPdfInfoDate($content, 'ModDate');
        if ($date !== null) {
            $metadata['publicationDate'] = $date;
        }

        // Creator/Producer/Keywords stay out of the canonical publication item for now:
        // PDF Creator/Producer usually name generating software, and Keywords need a future
        // reviewable tag/keyword model rather than silent publication-metadata promotion.
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
        $value = $this->extractPdfInfoLiteralString($content, $key) ?? $this->extractPdfInfoHexString($content, $key);
        if ($value === null) {
            return null;
        }

        $value = trim($value);
        return $value === '' ? null : $value;
    }

    private function extractPdfInfoLiteralString(string $content, string $key): ?string {
        $literal = $this->extractPdfInfoLiteralBytes($content, $key);
        if ($literal === null) {
            return null;
        }

        $value = $this->decodePdfLiteralEscapes($literal);
        return $this->decodePdfInfoString($value);
    }

    private function extractPdfInfoLiteralBytes(string $content, string $key): ?string {
        // Walk balanced PDF literal strings so real titles such as /Title (Camera (Special Issue))
        // are not truncated by a simple regex. Also preserve escaped parentheses inside PDF literal strings.
        $offset = 0;
        while (($keyPosition = strpos($content, '/' . $key, $offset)) !== false) {
            $start = $keyPosition + strlen('/' . $key);
            while ($start < strlen($content) && ctype_space($content[$start])) {
                $start++;
            }
            if ($start >= strlen($content) || $content[$start] !== '(') {
                $offset = $start + 1;
                continue;
            }

            $depth = 1;
            $escaped = false;
            for ($i = $start + 1; $i < strlen($content); $i++) {
                $char = $content[$i];
                if ($escaped) {
                    $escaped = false;
                    continue;
                }
                if ($char === '\\') {
                    $escaped = true;
                    continue;
                }
                if ($char === '(') {
                    $depth++;
                    continue;
                }
                if ($char === ')') {
                    $depth--;
                    if ($depth === 0) {
                        return substr($content, $start + 1, $i - $start - 1);
                    }
                }
            }
            return null;
        }

        return null;
    }

    private function extractPdfInfoHexString(string $content, string $key): ?string {
        // Examples seen in real collections: '/Title <FEFF...>' and '/Author <FEFF...>'.
        if (!preg_match('/\/' . preg_quote($key, '/') . '\s*<([0-9A-Fa-f\s]+)>/s', $content, $matches)) {
            return null;
        }

        $hex = preg_replace('/\s+/', '', (string)$matches[1]) ?? '';
        if ($hex === '' || !ctype_xdigit($hex)) {
            return null;
        }
        if ((strlen($hex) % 2) === 1) {
            $hex .= '0';
        }

        $bytes = hex2bin($hex);
        if ($bytes === false) {
            return null;
        }

        return $this->decodePdfInfoString($bytes);
    }

    private function extractPdfInfoDate(string $content, string $key): ?string {
        $value = $this->extractPdfInfoString($content, $key);
        if ($value === null) {
            return null;
        }
        return $this->normalizePdfInfoDate($value);
    }

    private function normalizePdfInfoDate(string $value): ?string {
        // PDF date form is D:YYYYMMDDHHmmSS with optional timezone suffix; partial dates exist.
        if (!preg_match('/^D?:(?<year>\d{4})(?<month>\d{2})?(?<day>\d{2})?/u', trim($value), $matches)) {
            return null;
        }

        $year = (int)$matches['year'];
        $month = isset($matches['month']) && $matches['month'] !== '' ? (int)$matches['month'] : null;
        $day = isset($matches['day']) && $matches['day'] !== '' ? (int)$matches['day'] : null;

        if ($month === null) {
            return sprintf('%04d', $year);
        }
        if ($month < 1 || $month > 12) {
            return null;
        }
        if ($day === null) {
            return sprintf('%04d-%02d', $year, $month);
        }
        if ($day < 1 || $day > 31) {
            return null;
        }
        return sprintf('%04d-%02d-%02d', $year, $month, $day);
    }

    private function decodePdfLiteralEscapes(string $value): string {
        $value = preg_replace_callback('/\\\\([0-7]{1,3})/', static function (array $matches): string {
            return chr(octdec($matches[1]));
        }, $value) ?? $value;

        $map = [
            '\\n' => "\n",
            '\\r' => "\r",
            '\\t' => "\t",
            '\\b' => "\x08",
            '\\f' => "\x0C",
            '\\(' => '(',
            '\\)' => ')',
            '\\\\' => '\\',
        ];
        return strtr($value, $map);
    }

    private function decodePdfInfoString(string $value): string {
        if (str_starts_with($value, "\xFE\xFF")) {
            $value = mb_convert_encoding(substr($value, 2), 'UTF-8', 'UTF-16BE');
        } elseif (str_starts_with($value, "\xFF\xFE")) {
            $value = mb_convert_encoding(substr($value, 2), 'UTF-8', 'UTF-16LE');
        } elseif (!mb_check_encoding($value, 'UTF-8')) {
            // Real-world PDF Info dictionaries often contain PDFDocEncoding/Latin-1-like bytes
            // without a BOM. Convert these to valid UTF-8 before inserting into MariaDB.
            $value = mb_convert_encoding($value, 'UTF-8', 'ISO-8859-1');
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
