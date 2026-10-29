from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_reader_compatibility_records_supported_viewers_without_instance_data():
    doc = (ROOT / "docs" / "reader-compatibility.md").read_text()
    assert "epubviewer" in doc
    assert "files_pdfviewer" in doc
    assert "viewer" in doc
    assert "/f/{fileId}" in doc
    assert "instance-specific file IDs or paths" in doc


def test_reader_compatibility_documents_default_and_direct_routes():
    doc = (ROOT / "docs" / "reader-compatibility.md").read_text()
    assert "/f/{fileId}" in doc
    assert "/apps/files/files/{fileId}?dir={encodedDirectory}&openfile=true" in doc
    assert "Direct reader routes" in doc
    assert "user-relative path, not WebDAV URL" in doc
    assert "full MIME type" in doc
