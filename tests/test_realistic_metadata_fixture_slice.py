from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_metadata_service_names_realistic_fixture_cases_and_safe_fallbacks():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    extractor_text = "\n".join(
        (ROOT / "lib" / "Metadata" / name).read_text()
        for name in [
            "FilenameMetadataExtractor.php",
            "PdfInfoMetadataExtractor.php",
            "OpfEpubMetadataExtractor.php",
            "CbzComicInfoMetadataExtractor.php",
        ]
    )
    assert "realistic fixture" in metadata
    assert "encoded PDF info dictionaries" in metadata
    assert "CBZ without ComicInfo.xml" in metadata
    assert "nested ComicInfo.xml" in metadata
    assert "sidecar collisions" in metadata
    assert "metadataSource" in extractor_text


def test_docs_record_realistic_fixture_matrix_scope():
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    for phrase in [
        "real-world-ish metadata fixture matrix",
        "EPUB with sparse OPF metadata",
        "PDF with missing or encoded Info fields",
        "CBZ without ComicInfo.xml",
        "nested ComicInfo.xml",
        "sidecar OPF collisions",
    ]:
        assert phrase in docs
