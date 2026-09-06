from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_pdf_info_literal_extractor_walks_balanced_parentheses_instead_of_regex_only():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "extractPdfInfoLiteralBytes" in service
    assert "balanced PDF literal strings" in service
    assert "Camera (Special Issue)" in service
    assert "for ($i = $start + 1" in service
    assert "$depth++" in service
    assert "$depth--" in service
    assert "return substr($content, $start + 1, $i - $start - 1)" in service


def test_pdf_info_literal_extractor_preserves_escaped_parentheses():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "escaped parentheses inside PDF literal strings" in service
    assert "if ($char === '\\\\')" in service
    assert "$escaped = true" in service
    assert "$escaped = false" in service
    assert "decodePdfLiteralEscapes($literal)" in service


def test_docs_record_nested_pdf_literal_parentheses_hardening():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    readme = (ROOT / "README.md").read_text()

    assert "nested PDF literal parentheses" in roadmap
    assert "nested PDF literal parentheses" in readme
