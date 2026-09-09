<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;

final class PdfInfoMetadataExtractor {
/**
 * @return array<string, string>
 */
public function extract(File $file): array {
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
    // Some malformed real PDFs sometimes omit D: but still store plain YYYYMMDD values.
    $trimmed = trim($value);
    if (preg_match('/^D?:(?<year>\d{4})(?<month>\d{2})?(?<day>\d{2})?/u', $trimmed, $matches)) {
        $year = (int)$matches['year'];
        $month = isset($matches['month']) && $matches['month'] !== '' ? (int)$matches['month'] : null;
        $day = isset($matches['day']) && $matches['day'] !== '' ? (int)$matches['day'] : null;
    } elseif (preg_match('/^(?<plainYear>\d{4})(?<plainMonth>\d{2})?(?<plainDay>\d{2})?/u', $trimmed, $matches)) {
        $year = (int)$matches['plainYear'];
        $month = isset($matches['plainMonth']) && $matches['plainMonth'] !== '' ? (int)$matches['plainMonth'] : null;
        $day = isset($matches['plainDay']) && $matches['plainDay'] !== '' ? (int)$matches['plainDay'] : null;
    } else {
        return null;
    }

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
    // PDF literal line continuations use a trailing backslash before a newline; join them
    // before decoding octal escapes and normal one-character escapes.
    $value = preg_replace('/\\\\\r?\n/', '', $value) ?? $value;
    $value = preg_replace('/\\\\\r/', '', $value) ?? $value;
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

}
