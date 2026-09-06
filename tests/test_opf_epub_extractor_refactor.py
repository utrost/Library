from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_opf_epub_has_dedicated_extractor_adapter_boundary():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    adapter_path = ROOT / "lib" / "Metadata" / "OpfEpubMetadataExtractor.php"

    assert adapter_path.exists()
    adapter = adapter_path.read_text()
    assert "final class OpfEpubMetadataExtractor" in adapter
    assert "private ?string $lastError = null" in adapter
    assert "public function getLastError(): ?string" in adapter
    assert "public function extractEpub(File $file): array" in adapter
    assert "public function extractStandaloneOpf(File $file): array" in adapter
    assert "public function parseOpfMetadata(string $opfXml, string $source): array" in adapter
    assert "META-INF/container.xml" in adapter
    assert "findRootfilePath" in adapter
    assert "epub-opf" in adapter
    assert "metadataSource' => 'opf'" in adapter
    assert "publicationType'] = $metadata['publicationType'] ?? 'book'" in adapter
    assert "dc:title" in adapter
    assert "dc:creator" in adapter
    assert "dc:language" in adapter
    assert "dc:publisher" in adapter
    assert "dc:date" in adapter
    assert "new OpfEpubMetadataExtractor()" in service
    assert "$this->lastError = $extractor->getLastError();" in service
    assert "->parseOpfMetadata($sidecar->getContent(), 'sidecar-opf')" in service


def test_publication_metadata_service_no_longer_owns_opf_epub_parser_helpers():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    forbidden_helpers = [
        "private function extractEpubMetadata",
        "private function extractStandaloneOpfMetadata",
        "private function findRootfilePath",
        "private function parseOpfMetadata",
        "private function firstXmlValue",
        "private function xmlValues",
    ]
    for helper in forbidden_helpers:
        assert helper not in service
