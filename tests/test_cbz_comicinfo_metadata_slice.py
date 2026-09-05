from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_publication_metadata_service_extracts_cbz_comicinfo_fields():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "extractCbzMetadata" in service
    assert "ComicInfo.xml" in service
    assert "cbz-comicinfo" in service
    assert "<Series>" in service
    assert "<Number>" in service
    assert "<Writer>" in service
    assert "publicationType' => 'comic'" in service


def test_publication_metadata_service_maps_comicinfo_to_general_publication_model():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    assert "parseComicInfoMetadata" in service
    assert "comicInfoValue($xml, 'Title')" in service
    assert "comicInfoValue($xml, 'Series')" in service
    assert "comicInfoValue($xml, 'Number')" in service
    assert "comicInfoCreators" in service
    assert "publicationDate" in service
    assert "Year" in service and "Month" in service and "Day" in service
    assert "Publisher" in service


def test_item_service_accepts_cbz_comicinfo_metadata_source():
    item = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "cbz-comicinfo" in item


def test_docs_name_cbz_comicinfo_slice_as_landed():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "ComicInfo.xml metadata" in roadmap
    assert "CBZ ComicInfo" in roadmap
    readme = (ROOT / "README.md").read_text()
    assert "CBZ ComicInfo.xml" in readme
