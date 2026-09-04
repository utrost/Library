from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scanner_suppresses_opf_files_that_are_sidecars_for_primary_publications():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "private function isSuppressedOpfSidecar(File $file): bool" in scanner
    assert "if ($this->isSuppressedOpfSidecar($node))" in scanner
    assert "pathinfo($file->getName(), PATHINFO_FILENAME)" in scanner
    assert "nodeExists($basename . '.pdf')" in scanner
    assert "nodeExists($basename . '.epub')" in scanner
    assert "nodeExists($basename . '.cbz')" in scanner
    assert "return true;" in scanner


def test_scanner_suppresses_folder_metadata_opf_when_primary_publication_exists_in_folder():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "$file->getName() === 'metadata.opf'" in scanner
    assert "getDirectoryListing()" in scanner
    assert "!$node instanceof File" in scanner
    assert "strtolower(pathinfo($node->getName(), PATHINFO_EXTENSION))" in scanner
    assert "['pdf', 'epub', 'cbz']" in scanner


def test_scanner_still_allows_standalone_opf_without_neighbor_primary_file():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    assert "return false;" in scanner
    assert "opf" in scanner
    assert "isSupported" in scanner


def test_docs_record_that_sidecar_opf_files_do_not_become_catalogue_items():
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    assert "sidecar OPF files are not indexed as separate catalogue items" in docs
    assert "standalone OPF files can still be indexed" in docs
