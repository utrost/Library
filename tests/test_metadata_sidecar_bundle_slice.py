from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_read_only_metadata_sidecar_bundle_download():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "export#sidecarBundle" in routes
    assert "'/export/metadata/sidecars.zip'" in routes
    assert "'verb' => 'GET'" in routes


def test_export_controller_builds_sidecar_zip_from_manifest_without_source_folder_writes():
    controller = (ROOT / "lib" / "Controller" / "ExportController.php").read_text()

    assert "use ZipArchive;" in controller
    assert "public function sidecarBundle(): DataDownloadResponse" in controller
    assert "exportCorrectedMetadataSidecarManifest($user->getUID())" in controller
    assert "library-metadata-sidecars.zip" in controller
    assert "application/zip" in controller
    assert "corrected-metadata-sidecar-bundle" in controller
    assert "addFromString" in controller
    assert "sidecarPath" in controller
    method = controller.split("public function sidecarBundle", 1)[1].split("private function", 1)[0]
    assert "getUserFolder" not in method
    assert "->delete(" not in method
    assert "->update(" not in method
    assert "->insert(" not in method


def test_catalogue_and_settings_link_to_sidecar_bundle_download():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert "metadataSidecarBundleUrl" in page
    assert "library.export.sidecarBundle" in page
    assert "metadataSidecarBundleUrl" in settings
    assert "library.export.sidecarBundle" in settings
    assert "Export sidecar ZIP" in template
    assert "metadataSidecarBundleUrl" in template
    assert "metadataSidecarBundleUrl" in app
    assert "Export sidecar ZIP" in app


def test_smoke_vue_page_checks_sidecar_bundle_endpoint():
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()

    assert "metadataSidecarBundleUrl" in smoke
    assert "sidecar_bundle_http" in smoke
    assert "corrected-metadata-sidecar-bundle" in smoke


def test_docs_mark_sidecar_zip_landed_but_source_folder_writers_future():
    guide = (ROOT / "docs" / "user-guide.md").read_text().lower()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text().lower()

    assert "export sidecar zip" in guide
    assert "sidecar zip" in roadmap
    assert "downloadable zip" in guide
    assert "does not write sidecar files into source folders" in guide
    assert "opf/json sidecar write-back" in roadmap
