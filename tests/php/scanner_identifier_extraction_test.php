<?php

declare(strict_types=1);

namespace OCP\Files {
    class File {
        public function __construct(private string $content) {}
        public function getContent(): string { return $this->content; }
    }
}

namespace {
    require_once __DIR__ . '/../../lib/Metadata/OpfEpubMetadataExtractor.php';
    require_once __DIR__ . '/../../lib/Metadata/PdfInfoMetadataExtractor.php';

    use OCA\Library\Metadata\OpfEpubMetadataExtractor;
    use OCA\Library\Metadata\PdfInfoMetadataExtractor;
    use OCP\Files\File;

    function assertScannerIdentifiers(array $expected, array $metadata, string $message): void {
        $actual = array_map(
            static fn (array $identifier): array => [
                $identifier['scheme'] ?? null,
                $identifier['displayValue'] ?? null,
                $identifier['source'] ?? null,
                $identifier['userEdited'] ?? null,
            ],
            $metadata['identifiers'] ?? [],
        );
        if ($expected !== $actual) {
            fwrite(STDERR, $message . "\nExpected: " . var_export($expected, true) . "\nActual: " . var_export($actual, true) . "\n");
            exit(1);
        }
    }

    function assertOpfMetadataValue(mixed $expected, array $metadata, string $field, string $message): void {
        $actual = $metadata[$field] ?? null;
        if ($expected !== $actual) {
            fwrite(STDERR, $message . "\nExpected: " . var_export($expected, true) . "\nActual: " . var_export($actual, true) . "\n");
            exit(1);
        }
    }

    $opf = <<<'XML'
    <?xml version="1.0"?>
    <package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/" unique-identifier="book-id">
      <metadata>
        <dc:title>Identifier fixtures</dc:title>
        <dc:identifier>ISBN 978-0-306-40615-7</dc:identifier>
        <dc:identifier>urn:isbn:9781861972712</dc:identifier>
        <dc:identifier opf:scheme="ISBN" xmlns:opf="http://www.idpf.org/2007/opf">080442957X</dc:identifier>
        <dc:identifier scheme="ISSN">03785955</dc:identifier>
      </metadata>
    </package>
    XML;
    $opfMetadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($opf, 'opf');
    assertScannerIdentifiers([
        ['isbn', 'ISBN 978-0-306-40615-7', 'opf', false],
        ['isbn', 'urn:isbn:9781861972712', 'opf', false],
        ['isbn', '080442957X', 'opf', false],
        ['issn', '03785955', 'opf', false],
    ], $opfMetadata, 'OPF should recognize prefixed, URN, bare, and scheme-attributed ISBN/ISSN values');

    $opfMetadataFields = <<<'XML'
    <?xml version="1.0"?>
    <package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/">
      <metadata>
        <dc:title>Metadata fixtures</dc:title>
        <dc:description> A bounded local description. </dc:description>
        <dc:subject>History</dc:subject>
        <dc:subject>Rare books</dc:subject>
        <dc:type> Text </dc:type>
        <meta name="calibre:series" content="Collected Works"/>
      </metadata>
    </package>
    XML;
    $opfFieldMetadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($opfMetadataFields, 'opf');
    assertOpfMetadataValue('A bounded local description.', $opfFieldMetadata, 'description', 'OPF dc:description should map to Library description');
    assertOpfMetadataValue(['History', 'Rare books'], $opfFieldMetadata, 'subjects', 'OPF dc:subject values should map to subjects');
    assertOpfMetadataValue(null, $opfFieldMetadata, 'classifications', 'OPF dc:subject must not become classifications');
    assertOpfMetadataValue('Collected Works', $opfFieldMetadata, 'publication', 'Calibre series metadata should map to Library publication');
    assertOpfMetadataValue('book', $opfFieldMetadata, 'publicationType', 'A clear OPF Text type should map to the existing book publication type');

    $opfHtmlDescription = <<<'XML'
    <?xml version="1.0"?>
    <package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/">
      <metadata>
        <dc:title>HTML description fixture</dc:title>
        <dc:description>&lt;p&gt;First &lt;em&gt;rich&lt;/em&gt;&amp;nbsp;paragraph.&lt;/p&gt;&lt;p&gt;Second&lt;br/&gt;line.&lt;/p&gt;&lt;script&gt;alert(1)&lt;/script&gt;</dc:description>
      </metadata>
    </package>
    XML;
    $opfHtmlMetadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($opfHtmlDescription, 'opf');
    assertOpfMetadataValue("First rich paragraph.\n\nSecond\nline.", $opfHtmlMetadata, 'description', 'OPF HTML descriptions should be normalized to readable plain text');

    $opf3Series = <<<'XML'
    <?xml version="1.0"?>
    <package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/">
      <metadata>
        <dc:title>OPF3 series fixture</dc:title>
        <dc:type>Research dataset</dc:type>
        <meta property="belongs-to-collection" id="collection">Field Notes</meta>
        <meta refines="#collection" property="collection-type">series</meta>
      </metadata>
    </package>
    XML;
    $opf3Metadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($opf3Series, 'opf');
    assertOpfMetadataValue('Field Notes', $opf3Metadata, 'publication', 'An OPF3 series collection should map to Library publication');
    assertOpfMetadataValue(null, $opf3Metadata, 'publicationType', 'Unknown OPF dc:type values should be left alone');

    $pdf = <<<'PDF'
    %PDF-1.7
    1 0 obj << /Title (PDF identifiers) /Subject (Print ISBN 978-0-306-40615-7) /Keywords (archive; ISSN 0378-5955) >> endobj
    <x:xmpmeta xmlns:x="adobe:ns:meta/"><dc:identifier xmlns:dc="http://purl.org/dc/elements/1.1/">urn:isbn:9781861972712</dc:identifier></x:xmpmeta>
    %%EOF
    PDF;
    $pdfMetadata = (new PdfInfoMetadataExtractor())->extract(new File($pdf));
    assertScannerIdentifiers([
        ['isbn', '978-0-306-40615-7', 'pdf-info', false],
        ['issn', '0378-5955', 'pdf-info', false],
        ['isbn', '9781861972712', 'pdf-info', false],
    ], $pdfMetadata, 'PDF Subject, Keywords, and simple embedded XMP should yield scanner identifiers');

    echo "scanner identifier extraction runtime tests passed\n";
}
