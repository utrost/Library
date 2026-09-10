from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_publication_metadata_service_extracts_cbz_comicinfo_fields():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    cbz = (ROOT / "lib" / "Metadata" / "CbzComicInfoMetadataExtractor.php").read_text()
    assert "new CbzComicInfoMetadataExtractor()" in service
    assert "extract($file)" in service
    assert "ComicInfo.xml" in cbz
    assert "cbz-comicinfo" in cbz
    assert "<Series>" in cbz
    assert "<Number>" in cbz
    assert "<Writer>" in cbz
    assert "publicationType' => 'comic'" in cbz


def test_publication_metadata_service_maps_comicinfo_to_general_publication_model():
    cbz = (ROOT / "lib" / "Metadata" / "CbzComicInfoMetadataExtractor.php").read_text()
    assert "parseComicInfoMetadata" in cbz
    assert "comicInfoValue($xml, 'Title')" in cbz
    assert "comicInfoValue($xml, 'Series')" in cbz
    assert "comicInfoValue($xml, 'Number')" in cbz
    assert "comicInfoCreators" in cbz
    assert "publicationDate" in cbz
    assert "Year" in cbz and "Month" in cbz and "Day" in cbz
    assert "Publisher" in cbz


def test_item_service_accepts_cbz_comicinfo_metadata_source():
    item = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    assert "cbz-comicinfo" in item


def test_docs_name_cbz_comicinfo_slice_as_landed():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    assert "ComicInfo.xml metadata" in roadmap
    assert "CBZ ComicInfo" in roadmap
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    assert "CBZ ComicInfo.xml" in readme
