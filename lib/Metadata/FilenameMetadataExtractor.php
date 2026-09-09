<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;

final class FilenameMetadataExtractor {
/**
 * Parse robust magazine/comic metadata from filenames and folder names when OPF/embedded metadata is absent.
 * Examples: Camera 1957-04.pdf, The New Yorker - 2023-11-20.pdf, c't 2024-17.pdf,
 * Tintin 010 - The Shooting Star.cbz, Aperture No. 251 Spring 2023.pdf.
 *
 * @return array<string, string>
 */
public function extract(File $file): array {
    $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
    $basename = pathinfo($file->getName(), PATHINFO_FILENAME);
    $folderNames = $this->folderNames($file);
    $defaultPublicationType = $extension === 'cbz' ? 'comic' : 'other';

    $parsers = [
        $this->parseComicNumberTitlePattern($basename, $extension),
        $this->parseMagazineDatePattern($basename, $folderNames, $defaultPublicationType),
        $this->parseYearIssuePattern($basename, $folderNames, $defaultPublicationType),
        $this->parseTitleCreatorPattern($basename, $defaultPublicationType),
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

    // Real staged sample: Make_Magazine_-_Volume_71_Dale_Dougherty / Volume 71 should keep Volume 71 as issue context,
    // not misread "Volume 71" as a creator name.
    $volumeIssuePattern = '/^(?<publication>.+?)\s*[-–—]?\s*(?<label>Volume\s*\d+[A-Za-z]?|Vol\.?\s*\d+[A-Za-z]?)(?:\s+.+)?$/iu';
    if (preg_match($volumeIssuePattern, $normalized, $matches)) {
        $publication = $this->cleanTitle((string)$matches['publication']);
        $label = $this->cleanTitle((string)$matches['label']);
        return $this->filenameCandidate($publication . ' ' . $label, $publication, '', $label, 'magazine');
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
 * @return array<string, string>
 */
private function parseTitleCreatorPattern(string $basename, string $defaultPublicationType): array {
    // Real staged sample that drove this hardening:
    // Real-00107-Revelation_Space_Alastair_Reynolds_z-library.sk_1lib.sk_z-lib.sk_
    // => Revelation Space / Alastair Reynolds
    $normalized = $this->normalizeFilename($basename);

    if (preg_match('/^(?<title>.+?)\s+[-–—]\s+(?<creator>[^-–—]+)$/u', $normalized, $matches)) {
        $title = $this->cleanTitle((string)$matches['title']);
        $creator = $this->normalizeCreatorList((string)$matches['creator']);
        if ($title !== '' && $creator !== '') {
            // Regression sample: Photography__Night_Sky__A_Field_Guide_for_Shooting_After_Dark_-_Jennifer_Wu_James_Martin
            // => Photography Night Sky A Field Guide for Shooting After Dark / Jennifer Wu; James Martin
            return [
                'metadataSource' => 'filename-pattern',
                'publicationType' => $defaultPublicationType,
                'title' => $title,
                'creators' => $creator,
            ];
        }
    }

    $threeTokenCreatorCandidate = $this->parseThreeTokenCreatorCandidate($normalized, $defaultPublicationType);
    if ($threeTokenCreatorCandidate !== []) {
        return $threeTokenCreatorCandidate;
    }

    return $this->parseTrailingCreatorCandidate($normalized, $defaultPublicationType);
}

/**
 * @return array<string, string>
 */
private function parseThreeTokenCreatorCandidate(string $normalized, string $defaultPublicationType): array {
    // Real staged sample that drove this hardening:
    // Real-00123-2001_A_Space_Odyssey_Arthur_C_Clarke_z-lib.org
    // => 2001 A Space Odyssey / Arthur C Clarke
    $threeTokenCreatorPattern = '/^(?<title>.+?)\s+(?<creator>[A-ZÄÖÜ][\p{L}\'’.-]+\s+[A-ZÄÖÜ]\.?(?:\s+|\s*\.\s*)[A-ZÄÖÜ][\p{L}\'’.-]+)$/u';
    if (!preg_match($threeTokenCreatorPattern, $normalized, $matches)) {
        return [];
    }

    $title = $this->cleanTitle((string)$matches['title']);
    $creator = $this->normalizeCreatorList((string)$matches['creator']);
    if ($title === '' || $creator === '') {
        return [];
    }

    return [
        'metadataSource' => 'filename-pattern',
        'publicationType' => $defaultPublicationType,
        'title' => $title,
        'creators' => $creator,
    ];
}

/**
 * @return array<string, string>
 */
private function parseTrailingCreatorCandidate(string $normalized, string $defaultPublicationType): array {
    if (!preg_match('/^(?<title>.+?)\s+(?<creator>[A-ZÄÖÜ][\p{L}\'’.-]+\s+[A-ZÄÖÜ][\p{L}\'’.-]+)$/u', $normalized, $matches)) {
        return [];
    }

    $title = $this->cleanTitle((string)$matches['title']);
    $creator = $this->normalizeCreatorList((string)$matches['creator']);
    if ($title === '' || $creator === '') {
        return [];
    }

    return [
        'metadataSource' => 'filename-pattern',
        'publicationType' => $defaultPublicationType,
        'title' => $title,
        'creators' => $creator,
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
    $value = $this->stripRealCorpusNoise($basename);
    $value = $this->stripArchiveSourceSuffix($value);
    $value = str_replace(['_', '.'], ' ', $value);
    $value = preg_replace('/\s+/', ' ', $value) ?? $value;
    return trim($value);
}

private function stripRealCorpusNoise(string $basename): string {
    return preg_replace('/^Real-\d{5}-/u', '', $basename) ?? $basename;
}

private function stripArchiveSourceSuffix(string $basename): string {
    $value = preg_replace('/(?:[_\s-]+\(?z[-_\s]?lib(?:rary)?(?:\.[a-z]{2,})?[^)]*\)?)+$/iu', '', $basename) ?? $basename;
    $value = preg_replace('/[_\s-]+Anna[_\s]+s[_\s]+Archive$/iu', '', $value) ?? $value;
    $value = preg_replace('/[_\s-]+[a-f0-9]{24,}$/iu', '', $value) ?? $value;
    $value = preg_replace('/[_\s-]+\d{10,13}$/u', '', $value) ?? $value;
    return trim($value, " \t\n\r\0\x0B-_–—");
}

private function normalizeCreatorList(string $creator): string {
    $creator = $this->stripArchiveSourceSuffix($creator);
    $creator = $this->cleanTitle($creator);
    if ($creator === '') {
        return '';
    }

    $words = preg_split('/\s+/', $creator) ?: [];
    if (count($words) === 4) {
        return $words[0] . ' ' . $words[1] . '; ' . $words[2] . ' ' . $words[3];
    }

    return $creator;
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

}
