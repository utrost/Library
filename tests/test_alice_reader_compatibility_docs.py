from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_alice_reader_compatibility_records_installed_apps_and_fixture_ids():
    doc = (ROOT / "docs" / "alice-reader-compatibility.md").read_text()
    assert "epubviewer" in doc
    assert "files_pdfviewer" in doc
    assert "viewer" in doc
    assert "file_id" in doc
    assert "82" in doc and "reader-handoff.pdf" in doc
    assert "160" in doc and "reader-handoff.epub" in doc
    assert "161" in doc and "reader-handoff.cbz" in doc


def test_alice_reader_compatibility_documents_default_and_direct_routes():
    doc = (ROOT / "docs" / "alice-reader-compatibility.md").read_text()
    assert "/f/{fileId}" in doc
    assert "/apps/files/files/160?dir=/LibrarySpike&openfile=true" in doc
    assert "/apps/epubviewer/?file=/LibrarySpike/reader-handoff.epub&type=application/epub+zip" in doc
    assert "user-relative path, not WebDAV URL" in doc
    assert "full mimetype, not extension shorthand" in doc
