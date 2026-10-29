from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_bootstrap_page_no_longer_shows_fixture_handoff_card():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "READER_FIXTURE_FILE_ID" not in page

    template = (ROOT / "templates" / "main.php").read_text()
    assert "fixtureOpenUrl" not in template
    assert "reader-handoff.pdf" not in template
    assert "Library" in template
    assert "Publication catalogue" not in template


def test_reader_compatibility_documents_direct_file_route_result():
    doc = (ROOT / "docs" / "reader-compatibility.md").read_text()
    assert "/f/{fileId}" in doc
    assert "/apps/files/files/{fileId}?dir={encodedDirectory}&openfile=true" in doc
