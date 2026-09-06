from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_pdf_info_string_decoder_handles_utf16_bom_strings_before_db_insert():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "decodePdfInfoString" in service
    assert "\\xFE\\xFF" in service
    assert "\\xFF\\xFE" in service
    assert "mb_convert_encoding" in service
    assert "preg_replace('/[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F]/" in service


def test_pdf_info_string_decoder_falls_back_for_single_byte_author_names():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "mb_check_encoding($value, 'UTF-8')" in service
    assert "ISO-8859-1" in service
    assert "PDFDocEncoding/Latin-1-like bytes" in service


def test_pdf_info_extraction_uses_decoder_for_title_and_author_values():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "extractPdfInfoLiteralString" in service
    assert "extractPdfInfoHexString" in service
    assert "return $this->decodePdfInfoString($value);" in service
    assert "return $this->decodePdfInfoString($bytes);" in service
    assert "return $value === '' ? null : $value;" in service
