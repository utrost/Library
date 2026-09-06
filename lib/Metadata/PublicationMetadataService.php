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

            $sidecarMetadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($sidecar->getContent(), 'sidecar-opf');
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
                $extractor = new OpfEpubMetadataExtractor();
                $metadata = $extractor->extractEpub($file);
                $this->lastError = $extractor->getLastError();
                return $metadata;
            }
            if ($extension === 'opf' || $mimeType === 'application/oebps-package+xml') {
                $extractor = new OpfEpubMetadataExtractor();
                $metadata = $extractor->extractStandaloneOpf($file);
                $this->lastError = $extractor->getLastError();
                return $metadata;
            }
            if ($extension === 'pdf' || $mimeType === 'application/pdf') {
                return (new PdfInfoMetadataExtractor())->extract($file);
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

}
