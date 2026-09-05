import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_bootstrap_page_no_longer_shows_fixture_handoff_card():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    assert "private const READER_FIXTURE_FILE_ID = 82" in page

    template = (ROOT / "templates" / "main.php").read_text()
    assert "fixtureOpenUrl" not in template
    assert "reader-handoff.pdf" not in template
    assert "Publication catalogue" in template


def test_reader_handoff_spike_documents_direct_file_route_result():
    doc = (ROOT / "docs" / "reader-handoff-spike.md").read_text()
    assert "/f/{fileId}" in doc
    assert "/apps/files/files/{fileId}?dir=/LibrarySpike&openfile=true" in doc
    assert "reader-handoff.pdf" in doc
