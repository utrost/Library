from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_pdf_info_has_dedicated_extractor_adapter_boundary():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    adapter_path = ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php"

    assert adapter_path.exists()
    adapter = adapter_path.read_text()
    assert "final class PdfInfoMetadataExtractor" in adapter
    assert "public function extract(File $file): array" in adapter
    assert "metadataSource' => 'pdf-info'" in adapter
    assert "publicationType' => 'other'" in adapter
    assert "extractPdfInfoString($content, 'Subject')" in adapter
    assert "extractPdfInfoDate($content, 'CreationDate')" in adapter
    assert "extractPdfInfoDate($content, 'ModDate')" in adapter
    assert "decodePdfInfoString" in adapter
    assert "decodePdfLiteralEscapes" in adapter
    assert "balanced PDF literal strings" in adapter
    assert "PDFDocEncoding/Latin-1-like bytes" in adapter
    assert "Creator/Producer/Keywords stay out" in adapter
    assert "new PdfInfoMetadataExtractor()" in service


def test_publication_metadata_service_no_longer_owns_pdf_info_parser_helpers():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    forbidden_helpers = [
        "private function extractPdfMetadata",
        "private function extractPdfInfoString",
        "private function extractPdfInfoLiteralString",
        "private function extractPdfInfoLiteralBytes",
        "private function extractPdfInfoHexString",
        "private function extractPdfInfoDate",
        "private function normalizePdfInfoDate",
        "private function decodePdfLiteralEscapes",
        "private function decodePdfInfoString",
    ]
    for helper in forbidden_helpers:
        assert helper not in service
