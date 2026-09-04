import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_bootstrap_page_generates_fixture_handoff_link_to_nextcloud_file_route():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "fixtureOpenUrl" in page
    assert "linkTo('', '/f/' . self::READER_FIXTURE_FILE_ID)" in page
    assert "private const READER_FIXTURE_FILE_ID = 82" in page

    template = (ROOT / "templates" / "main.php").read_text()
    assert "fixtureOpenUrl" in template
    assert "reader-handoff.pdf" in template


def test_reader_handoff_spike_documents_direct_file_route_result():
    doc = (ROOT / "docs" / "reader-handoff-spike.md").read_text()
    assert "/f/{fileId}" in doc
    assert "/apps/files/files/{fileId}?dir=/LibrarySpike&openfile=true" in doc
    assert "reader-handoff.pdf" in doc
