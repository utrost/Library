from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_pdf_info_date_normalizer_accepts_plain_yyyymmdd_from_malformed_real_pdfs():
    extractor = read("lib/Metadata/PdfInfoMetadataExtractor.php")

    assert "malformed real PDFs sometimes omit D:" in extractor
    assert "(?<plainYear>\\d{4})(?<plainMonth>\\d{2})?(?<plainDay>\\d{2})?" in extractor
    assert "plainYear" in extractor


def test_pdf_literal_decoder_joins_backslash_line_continuations():
    extractor = read("lib/Metadata/PdfInfoMetadataExtractor.php")

    assert "PDF literal line continuations" in extractor
    assert "preg_replace('/" in extractor and "\\r?\\n" in extractor
    assert "preg_replace('/" in extractor and "\\r/'" in extractor


def test_docs_track_pdf_plain_date_and_literal_continuation_hardening():
    readme = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    guide = read("docs/user-guide.md")

    assert "plain PDF Info dates" in readme
    assert "PDF literal line continuations" in roadmap
    assert "plain PDF Info dates" in guide
