from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_read_only_metadata_import_preview_endpoint():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "import#preview" in routes
    assert "'/import/metadata/preview'" in routes
    assert "'verb' => 'POST'" in routes


def test_import_controller_returns_json_preview_without_mutating_files_or_items():
    controller_path = ROOT / "lib" / "Controller" / "ImportController.php"
    assert controller_path.exists()
    controller = controller_path.read_text()

    assert "namespace OCA\\Library\\Controller" in controller
    assert "class ImportController extends Controller" in controller
    assert "use OCP\\AppFramework\\Http\\JSONResponse;" in controller
    assert "use OCP\\AppFramework\\Http\\Attribute\\NoCSRFRequired;" in controller
    assert "public function preview(): JSONResponse" in controller
    assert "previewCorrectedMetadataImport($user->getUID()" in controller
    assert "getParam('metadataJson', '')" in controller
    assert "library-metadata-import-preview" in controller
    assert "->delete(" not in controller
    assert "->update(" not in controller
    assert "->insert(" not in controller
    assert "getUserFolder" not in controller


def test_item_service_previews_import_matches_and_field_changes_without_writes():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function previewCorrectedMetadataImport(string $userId, string $metadataJson): array" in service
    assert "json_decode($metadataJson, true, 512, JSON_THROW_ON_ERROR)" in service
    assert "exportKind" in service
    assert "library-corrected-metadata" in service
    assert "matchedItems" in service
    assert "missingItems" in service
    assert "changedFields" in service
    assert "invalidItems" in service
    assert "findItemForImportPreview" in service
    preview_method = service.split("public function previewCorrectedMetadataImport", 1)[1].split("private function", 1)[0]
    assert "update('" not in preview_method
    assert "delete('" not in preview_method
    assert "insert('" not in preview_method


def test_settings_page_links_export_to_read_only_import_preview_form():
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "metadataImportPreviewUrl" in settings
    assert "library.import.preview" in settings
    assert "library-metadata-import-preview-form" in template
    assert "metadataJson" in template
    assert "Preview metadata import" in template
    assert "No changes are written during preview" in template


def test_smoke_posts_export_to_import_preview_and_requires_non_mutating_counts():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "metadataImportPreviewUrl" in smoke
    assert "detail_has_metadata_import_preview_form" in smoke
    assert "settings_has_metadata_import_apply_form" in smoke
    assert "library-metadata-import-apply-form" in smoke
    assert "Apply metadata import" in smoke
    assert "import_preview_http" in smoke
    assert "import_preview_matched_items" in smoke
    assert "import_preview_changed_fields" in smoke
    assert "import_manifest_preview_http" in smoke
    assert "import_manifest_preview_kind" in smoke
    assert "import_single_sidecar_preview_http" in smoke
    assert "import_single_sidecar_preview_kind" in smoke
    assert "X-Library-Import-Mode" in smoke
    assert "preview-only" in smoke


def test_item_service_import_accepts_sidecar_manifest_as_restore_source():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "private function importItemsFromPayload(array $payload): ?array" in service
    assert "looksLikeSingleSidecarMetadata" in service
    assert "manifestKind" in service
    assert "library-corrected-metadata-sidecar-manifest" in service
    assert "$manifestItem['metadata']" in service
    assert "sidecarPath" in service
    assert "unsupported_export" in service


def test_docs_mark_metadata_import_preview_and_apply_landed_but_sidecars_still_future():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "preview corrected metadata imports" in readme.lower()
    assert "Preview metadata import" in guide
    assert "No changes are written during preview" in guide
    assert "Apply metadata import" in guide
    assert "first apply flow applies matched corrected metadata" in roadmap
    assert "sidecar manifest imports" in guide.lower()
    assert "sidecar manifest restore" in roadmap.lower()
    assert "OPF/JSON sidecar write-back" in roadmap
