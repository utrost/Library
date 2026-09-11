from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_import_preview_uses_full_sidecar_metadata_identity_not_compact_catalogue_row():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "const importPreviewMetadata = sidecarManifestJson?.items" in smoke
    assert "metadata.libraryFileId" in smoke
    assert "metadata.cachedPath" in smoke
    assert "...importPreviewMetadata" in smoke
    assert "...first," not in smoke.split("const importPreviewPayload", 1)[1].split(
        "const importPreview =", 1
    )[0]
    assert "import_preview_full_metadata_fixture_missing" in smoke
    assert "importPreviewJson.matchedItems < 1" in smoke
    assert "importPreviewJson.changedFields < 1" in smoke


def test_live_smoke_reports_compact_payload_measurements_without_byte_thresholds():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "catalogue_initial_state_json_bytes" in smoke
    assert "catalogue_items_json_bytes" in smoke
    assert "catalogue_first_item_field_count" in smoke
    assert "Buffer.byteLength(JSON.stringify(state), 'utf8')" in smoke
    assert "Buffer.byteLength(JSON.stringify(items), 'utf8')" in smoke
    assert "catalogueInitialStateJsonBytes >" not in smoke
    assert "catalogueItemsJsonBytes >" not in smoke


def test_live_smoke_rejects_forbidden_fields_only_on_ordinary_catalogue_rows():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    for field in [
        "coverOverrideData", "fieldValues", "fieldSources", "nextcloudComments",
        "libraryFileId", "fileId", "cachedPath", "coverOverrideActionUrl",
        "coverRevertUrl", "coverRefreshUrl", "coverRefreshPageUrl", "updateUrl",
        "workflowStatusUrl", "resetFieldUrl", "resetFieldsUrl", "forgetMissingUrl",
        "tagUrl", "commentUrl",
    ]:
        assert f"'{field}'" in smoke
    assert "catalogue_normal_row_forbidden_field_count" in smoke
    assert "catalogue_normal_row_forbidden_fields" in smoke
    assert "normalRowForbiddenFields.length !== 0" in smoke
    assert "publicationState" not in smoke.split(
        "const normalRowForbiddenFields", 1
    )[0].split("const ordinaryCatalogueRows", 1)[1]


def test_browser_smoke_proves_batch_apply_and_restore_with_compact_publication_field():
    smoke = (ROOT / "scripts" / "smoke-browser-page.mjs").read_text()
    mutation = smoke.split("const originalPublication", 1)[1].split(
        "const quickFilterResult", 1
    )[0]

    assert "bulkEditField: 'publication'" in mutation
    assert "changedItem?.publication === smokePublication" in mutation
    assert "(restoredItem?.publication || '') === originalPublication" in mutation
    assert "bulkEditField: 'subtitle'" not in mutation
    assert "changedItem?.subtitle" not in mutation
    assert "restoredItem?.subtitle" not in mutation
    assert "bulkEditField: 'language'" in smoke
