from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_publication_metadata_service_prefers_same_basename_opf_sidecar_for_pdf_or_epub():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "public function extractWithSidecar(File $file): array" in service
    assert "findOpfSidecar" in service
    assert "pathinfo($file->getName(), PATHINFO_FILENAME) . '.opf'" in service
    assert "nodeExists($sameBasenameOpf)" in service
    assert "sidecar-opf" in service
    assert "array_merge($embeddedMetadata, $sidecarMetadata)" in service


def test_publication_metadata_service_uses_folder_metadata_opf_when_same_basename_missing():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "metadata.opf" in service
    assert "nodeExists('metadata.opf')" in service
    assert "get('metadata.opf')" in service


def test_scanner_uses_sidecar_aware_extraction_for_primary_publication_files():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "$metadata = $this->metadataService->extractWithSidecar($node)" in scanner
    assert "ensureItemForFile($userId, $indexedFile, $metadata)" in scanner


def test_metadata_storage_docs_record_opf_sidecar_precedence():
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    assert "same-basename OPF sidecar" in docs
    assert "metadata.opf" in docs
    assert "sidecar-opf" in docs
    assert "sidecar values override embedded/PDF candidates" in docs
