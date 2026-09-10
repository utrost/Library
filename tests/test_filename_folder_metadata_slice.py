from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_filename_folder_parser_is_wired_as_fallback_before_embedded_metadata():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    extractor = (ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php").read_text()

    assert "new FilenameMetadataExtractor()" in service
    assert "$filenameMetadata = (new FilenameMetadataExtractor())->extract($file);" in service
    assert "array_merge($filenameMetadata, $embeddedMetadata" in service
    assert "filename-pattern" in extractor


def test_filename_parser_handles_magazine_date_and_issue_patterns():
    extractor = (ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php").read_text()
    assert "parseMagazineDatePattern" in extractor
    assert "parseYearIssuePattern" in extractor
    assert "publicationDate" in extractor
    assert "No. " in extractor
    assert "magazine" in extractor


def test_filename_parser_handles_comic_number_title_patterns():
    extractor = (ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php").read_text()
    assert "parseComicNumberTitlePattern" in extractor
    assert "#" in extractor
    assert "publicationType' => 'comic'" in extractor


def test_filename_parser_hardens_real_staging_and_archive_suffixes():
    extractor = (ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php").read_text()

    assert "stripRealCorpusNoise" in extractor
    assert "Real-00107-Revelation_Space_Alastair_Reynolds_z-library.sk_1lib.sk_z-lib.sk_" in extractor
    assert "Revelation Space" in extractor
    assert "Alastair Reynolds" in extractor
    assert "stripArchiveSourceSuffix" in extractor


def test_filename_parser_extracts_simple_title_creator_fallbacks():
    extractor = (ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php").read_text()

    assert "parseTitleCreatorPattern" in extractor
    assert "Photography__Night_Sky__A_Field_Guide_for_Shooting_After_Dark_-_Jennifer_Wu_James_Martin" in extractor
    assert "Photography Night Sky A Field Guide for Shooting After Dark" in extractor
    assert "Jennifer Wu; James Martin" in extractor


def test_filename_parser_keeps_volume_issue_labels_out_of_creators():
    extractor = (ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php").read_text()

    assert "Make_Magazine_-_Volume_71_Dale_Dougherty" in extractor
    assert "Volume 71" in extractor
    assert "volumeIssuePattern" in extractor
    assert "parseTitleCreatorPattern" in extractor


def test_item_service_accepts_filename_pattern_source():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "filename-pattern" in service


def test_docs_explain_filename_folder_metadata_reality():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "filename/folder" in readme
    assert "Filename and folder parsing" in docs
    assert "filename/folder" in roadmap
