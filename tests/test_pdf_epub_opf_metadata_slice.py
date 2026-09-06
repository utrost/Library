from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_publication_metadata_service_extracts_epub_package_opf_fields():
    service_path = ROOT / "lib" / "Metadata" / "PublicationMetadataService.php"
    assert service_path.exists()
    service = service_path.read_text()
    opf = (ROOT / "lib" / "Metadata" / "OpfEpubMetadataExtractor.php").read_text()
    assert "namespace OCA\\Library\\Metadata" in service
    assert "final class PublicationMetadataService" in service
    assert "public function extract(File $file): array" in service
    assert "new OpfEpubMetadataExtractor()" in service
    assert "extractEpub($file)" in service
    assert "META-INF/container.xml" in opf
    assert "rootfile" in opf
    assert "parseOpfMetadata" in opf
    assert "epub-opf" in opf


def test_publication_metadata_service_extracts_standalone_opf_metadata():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    opf = (ROOT / "lib" / "Metadata" / "OpfEpubMetadataExtractor.php").read_text()
    assert "extractStandaloneOpf($file)" in service
    assert "application/oebps-package+xml" in service
    assert "opf" in opf
    assert "dc:title" in opf
    assert "dc:creator" in opf
    assert "dc:language" in opf
    assert "dc:publisher" in opf
    assert "dc:date" in opf
    assert "metadataSource' => 'opf'" in opf


def test_publication_metadata_service_extracts_basic_pdf_info_without_reclassifying_pdf_as_book():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    pdf = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "new PdfInfoMetadataExtractor()" in service
    assert "application/pdf" in service
    assert "/Title" in pdf
    assert "/Author" in pdf
    assert "pdf-info" in pdf
    assert "publicationType' => 'other'" in pdf


def test_scanner_passes_extracted_metadata_to_item_service_after_indexing_file():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "use OCA\\Library\\Metadata\\PublicationMetadataService" in scanner
    assert "PublicationMetadataService $metadataService" in scanner
    assert "$metadata = $this->metadataService->extractWithSidecar($node)" in scanner
    assert "ensureItemForFile($userId, $indexedFile, $metadata)" in scanner
    assert "'opf'" in scanner


def test_item_service_uses_extracted_metadata_candidates_but_preserves_user_edits():
    item = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "public function ensureItemForFile(string $userId, array $file, array $metadata = []): void" in item
    assert "metadataCandidate" in item
    assert "metadata_source" in item
    assert "epub-opf" in item
    assert "pdf-info" in item
    assert "opf" in item
    assert "if ((bool)$existing['user_edited'])" in item
    assert "refreshInferredItem($userId, (int)$existing['id'], $file, $metadata)" in item
