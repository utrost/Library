from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_filename_folder_parser_is_wired_as_fallback_before_embedded_metadata():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "extractFilenameMetadata(File $file)" in metadata
    assert "$filenameMetadata = $this->extractFilenameMetadata($file);" in metadata
    assert "array_merge($filenameMetadata, $embeddedMetadata" in metadata
    assert "filename-pattern" in metadata


def test_filename_parser_handles_magazine_date_and_issue_patterns():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "parseMagazineDatePattern" in metadata
    assert "parseYearIssuePattern" in metadata
    assert "publicationDate" in metadata
    assert "No. " in metadata
    assert "magazine" in metadata


def test_filename_parser_handles_comic_number_title_patterns():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "parseComicNumberTitlePattern" in metadata
    assert "#" in metadata
    assert "publicationType' => 'comic'" in metadata


def test_filename_parser_hardens_real_staging_and_archive_suffixes():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "stripStagingPrefix" in metadata
    assert "Real-00107-Revelation_Space_Alastair_Reynolds_z-library.sk_1lib.sk_z-lib.sk_" in metadata
    assert "Revelation Space" in metadata
    assert "Alastair Reynolds" in metadata
    assert "stripArchiveSourceSuffix" in metadata


def test_filename_parser_extracts_simple_title_creator_fallbacks():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "parseTitleCreatorPattern" in metadata
    assert "Photography__Night_Sky__A_Field_Guide_for_Shooting_After_Dark_-_Jennifer_Wu_James_Martin" in metadata
    assert "Photography Night Sky A Field Guide for Shooting After Dark" in metadata
    assert "Jennifer Wu; James Martin" in metadata


def test_filename_parser_keeps_volume_issue_labels_out_of_creators():
    metadata = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    assert "Make_Magazine_-_Volume_71_Dale_Dougherty" in metadata
    assert "Volume 71" in metadata
    assert "volumeIssuePattern" in metadata
    assert "parseTitleCreatorPattern" in metadata


def test_item_service_accepts_filename_pattern_source():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "filename-pattern" in service


def test_docs_explain_filename_folder_metadata_reality():
    readme = (ROOT / "README.md").read_text()
    docs = (ROOT / "docs" / "metadata-storage.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "filename/folder" in readme
    assert "Filename and folder parsing" in docs
    assert "filename/folder" in roadmap
