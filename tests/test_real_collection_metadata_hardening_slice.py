from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_pdf_info_extractor_handles_hex_encoded_title_author_strings():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "extractPdfInfoHexString" in service
    assert "ctype_xdigit" in service
    assert "hex2bin" in service
    assert "decodePdfInfoString($bytes)" in service
    assert "/Title <FEFF" in service
    assert "/Author <FEFF" in service


def test_pdf_info_extractor_decodes_literal_octal_escapes_from_real_pdfs():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "decodePdfLiteralEscapes" in service
    assert "preg_replace_callback('/\\\\\\\\([0-7]{1,3})/'" in service
    assert "chr(octdec($matches[1]))" in service
    assert "J\\374rgen" in service


def test_real_collection_docs_name_pdf_hex_and_octal_info_hardening():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    readme = (ROOT / "README.md").read_text()

    assert "PDF hex Info strings" in roadmap
    assert "PDF literal octal escapes" in roadmap
    assert "PDF hex Info strings" in readme
