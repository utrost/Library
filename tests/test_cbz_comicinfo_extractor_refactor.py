from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cbz_comicinfo_has_dedicated_extractor_adapter_boundary():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    adapter_path = ROOT / "lib" / "Metadata" / "CbzComicInfoMetadataExtractor.php"

    assert adapter_path.exists()
    adapter = adapter_path.read_text()
    assert "final class CbzComicInfoMetadataExtractor" in adapter
    assert "private ?string $lastError = null" in adapter
    assert "public function getLastError(): ?string" in adapter
    assert "public function extract(File $file): array" in adapter
    assert "Unsupported or corrupt CBZ archive" in adapter
    assert "ComicInfo.xml" in adapter
    assert "strcasecmp(basename($name), 'ComicInfo.xml')" in adapter
    assert "parseComicInfoMetadata" in adapter
    assert "metadataSource' => 'cbz-comicinfo'" in adapter
    assert "publicationType' => 'comic'" in adapter
    assert "comicInfoValue($xml, 'Title')" in adapter
    assert "comicInfoValue($xml, 'Series')" in adapter
    assert "comicInfoValue($xml, 'Number')" in adapter
    assert "comicInfoCreators" in adapter
    assert "Writer" in adapter
    assert "Penciller" in adapter
    assert "Publisher" in adapter
    assert "publicationDate" in adapter
    assert "new CbzComicInfoMetadataExtractor()" in service
    assert "$this->lastError = $extractor->getLastError();" in service


def test_publication_metadata_service_no_longer_owns_cbz_comicinfo_parser_helpers():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    forbidden_helpers = [
        "private function extractCbzMetadata",
        "private function parseComicInfoMetadata",
        "private function comicInfoValue",
        "private function comicInfoCreators",
        "private function comicInfoDate",
    ]
    for helper in forbidden_helpers:
        assert helper not in service
