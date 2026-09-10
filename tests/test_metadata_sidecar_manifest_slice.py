from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_read_only_metadata_sidecar_manifest_download():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "export#sidecarManifest" in routes
    assert "'/export/metadata/sidecar-manifest'" in routes
    assert "'verb' => 'GET'" in routes


def test_export_controller_returns_sidecar_manifest_json_without_writes():
    controller = (ROOT / "lib" / "Controller" / "ExportController.php").read_text()

    assert "public function sidecarManifest(): DataDownloadResponse" in controller
    assert "exportCorrectedMetadataSidecarManifest($user->getUID())" in controller
    assert "library-metadata-sidecar-manifest.json" in controller
    assert "corrected-metadata-sidecar-manifest" in controller
    assert "'X-Library-Export-Type' => $exportType" in controller
    method = controller.split("public function sidecarManifest", 1)[1].split("public function", 1)[0]
    assert "getUserFolder" not in method
    assert "->delete(" not in method
    assert "->update(" not in method
    assert "->insert(" not in method


def test_item_service_builds_sidecar_manifest_from_corrected_metadata_export():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function exportCorrectedMetadataSidecarManifest(string $userId): array" in service
    assert "manifestKind' => 'library-corrected-metadata-sidecar-manifest'" in service
    assert "sidecarPath" in service
    assert "sourcePath" in service
    assert "basename($cachedPath) . '.library.json'" in service
    assert "exportCorrectedMetadata($userId)" in service
    method = service.split("public function exportCorrectedMetadataSidecarManifest", 1)[1].split("public function", 1)[0]
    assert "update('" not in method
    assert "delete('" not in method
    assert "insert('" not in method


def test_catalogue_and_settings_link_to_sidecar_manifest_download():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert "metadataSidecarManifestUrl" in page
    assert "library.export.sidecarManifest" in page
    assert "metadataSidecarManifestUrl" in settings
    assert "library.export.sidecarManifest" in settings
    assert "Export sidecar manifest" in template
    assert "metadataSidecarManifestUrl" in template
    assert "metadataSidecarManifestUrl" in app
    assert "Export sidecar manifest" in app


def test_smoke_vue_page_checks_sidecar_manifest_export_endpoint():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "metadataSidecarManifestUrl" in smoke
    assert "sidecar_manifest_http" in smoke
    assert "X-Library-Export-Type" in smoke
    assert "corrected-metadata-sidecar-manifest" in smoke
    assert "sidecar_manifest_item_count" in smoke


def test_docs_mark_sidecar_manifest_landed_but_writers_future():
    guide = (ROOT / "docs" / "user-guide.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "export sidecar manifest" in guide
    assert "sidecar manifest" in roadmap
    assert "source-folder opf/json sidecar write-back" in roadmap
    assert "outside the app roadmap" in roadmap
    assert "does not write sidecar files" in guide
