from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PUBLICATION_FIELDS = [
    "publicationType",
    "title",
    "subtitle",
    "creators",
    "publication",
    "publicationDate",
    "language",
    "publisher",
]


def test_migration_adds_field_level_metadata_provenance_storage_without_replacing_user_edited():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("Version*.php"))

    assert "field_sources" in migrations
    assert "field_values" in migrations
    assert "Field-level scanner provenance" in migrations
    assert "user_edited" in migrations
    assert "metadata_source" in migrations


def test_item_service_populates_field_provenance_for_scanner_and_user_updates():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "private const PUBLICATION_FIELDS" in service
    for field in PUBLICATION_FIELDS:
        assert f"'{field}'" in service
    assert "field_sources" in service
    assert "field_values" in service
    assert "fieldSources" in service
    assert "fieldValues" in service
    assert "buildInferredFieldSources" in service
    assert "buildUserFieldSources" in service
    assert "buildCurrentFieldValues" in service
    assert "json_encode($metadataCandidate['fieldSources']" in service
    assert "json_encode($metadataCandidate['fieldValues']" in service
    assert "json_encode($this->buildUserFieldSources()" in service
    assert "json_encode($this->buildCurrentFieldValues(" in service
    assert "if ((bool)$existing['user_edited'])" in service


def test_item_payload_and_detail_page_expose_field_level_provenance_read_only():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    detail = (ROOT / "templates" / "item-detail.php").read_text()

    assert "'fieldSources' => $this->decodeJsonMap" in service
    assert "'fieldValues' => $this->decodeJsonMap" in service
    assert "library-field-provenance" in detail
    assert "fieldSources" in detail
    assert "fieldValues" in detail
    assert "Field-level provenance" in detail
    assert "Scanner candidate" in detail
    assert "Current value" in detail

    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    assert "detail_has_field_provenance" in smoke


def test_docs_record_p1_field_provenance_foundation_and_reset_is_still_future_work():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "P1 field-level provenance foundation" in roadmap
    assert "field-level provenance is recorded" in guide
    assert "reset-to-scanner" in roadmap
    assert "reset-to-scanner is still future work" in guide
