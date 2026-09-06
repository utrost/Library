from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_pdf_info_extractor_maps_subject_to_subtitle_without_reclassifying_pdf():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "extractPdfInfoString($content, 'Subject')" in service
    assert "metadata['subtitle'] = $subject" in service
    assert "'publicationType' => 'other'" in service
    assert "PDF subject maps to Library subtitle" in service


def test_pdf_info_extractor_normalizes_creation_and_mod_dates_for_publication_date():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "extractPdfInfoDate($content, 'CreationDate')" in service
    assert "extractPdfInfoDate($content, 'ModDate')" in service
    assert "normalizePdfInfoDate" in service
    assert "D:YYYYMMDDHHmmSS" in service
    assert "preg_match('/^D?:(?<year>\\d{4})" in service
    assert "metadata['publicationDate'] = $date" in service


def test_pdf_info_extractor_does_not_promote_software_or_keywords_as_publication_truth():
    service = (ROOT / "lib" / "Metadata" / "PdfInfoMetadataExtractor.php").read_text()

    assert "Creator/Producer/Keywords stay out of the canonical publication item" in service
    assert "extractPdfInfoString($content, 'Creator')" not in service
    assert "extractPdfInfoString($content, 'Producer')" not in service
    assert "metadata['publisher'] = $producer" not in service
    assert "metadata['creators'] = $creator" not in service
