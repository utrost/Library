from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_metadata_field_audit_keeps_rating_and_subgenre_scope_explicit():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "metadata field audit" in roadmap
    assert "rating (0–5 stars)" in roadmap
    assert "sub-genre" in roadmap
    assert "sub-genre remains a genre/classification value" in roadmap
    assert "personal rating" in guide


def test_detail_template_shows_metadata_health_score_and_weak_field_jump_list():
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "$metadataHealth" in template
    assert "library-metadata-health" in template
    assert "Metadata health" in template
    assert "Weak fields" in template
    assert "href=\"#library-field-title\"" in template
    assert "href=\"#library-field-creators\"" in template
    assert "href=\"#library-field-publicationDate\"" in template


def test_rating_is_first_class_personal_metadata_with_zero_to_five_bounds():
    migration_files = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("*.php"))
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "personal_rating" in migration_files
    assert "personalRating" in service
    assert "normalizePersonalRating" in service
    assert "Personal rating must be between 0 and 5" in service
    assert "'personalRating' =>" in controller
    assert "name=\"personalRating\"" in template
    assert "min=\"0\"" in template and "max=\"5\"" in template


def test_manual_cover_override_has_upload_url_and_revert_routes():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()
    page_controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "cover#override" in routes
    assert "cover#revert" in routes
    assert "/items/{itemId}/cover/override" in routes
    assert "/items/{itemId}/cover/revert" in routes
    assert "setManualCoverOverride" in controller
    assert "clearManualCoverOverride" in controller
    assert "manual-cover" in controller
    assert "coverOverrideUrl" in page_controller
    assert "library-cover-override-form" in template
    assert "name=\"coverOverrideUrl\"" not in template
    assert "name=\"coverOverrideFile\"" in template
    assert "Revert to extracted/preview cover" in template


def test_creator_chip_editor_replaces_plain_textarea_as_primary_control():
    template = (ROOT / "templates" / "item-detail.php").read_text()
    script = (ROOT / "js" / "library-detail.js").read_text()

    creator_field = template.split('class="library-detail-field-wide library-creators-field"', 1)[1].split('</label>', 1)[0]
    assert "library-creator-chip-editor" in creator_field
    assert "library-creator-chip-list" in creator_field
    assert "library-creator-chip-input" in creator_field
    assert "type=\"hidden\" name=\"creators\"" in creator_field
    assert "<textarea name=\"creators\"" not in creator_field
    assert "data-creator-chip-editor" in creator_field
    assert "syncCreatorChipEditor" in script
    assert "creator-chip-remove" in script
