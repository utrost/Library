from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_pdf_info_string_decoder_handles_utf16_bom_strings_before_db_insert():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "decodePdfInfoString" in service
    assert "\\xFE\\xFF" in service
    assert "\\xFF\\xFE" in service
    assert "mb_convert_encoding" in service
    assert "preg_replace('/[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F]/" in service


def test_pdf_info_extraction_uses_decoder_for_title_and_author_values():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "$value = $this->decodePdfInfoString((string)$value);" in service
    assert "return $value === '' ? null : $value;" in service
