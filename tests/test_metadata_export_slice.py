from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_routes_expose_user_metadata_export_download():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "export#metadata" in routes
    assert "'/export/metadata'" in routes
    assert "'verb' => 'GET'" in routes


def test_export_controller_returns_json_download_without_csrf():
    controller = (ROOT / "lib" / "Controller" / "ExportController.php").read_text()

    assert "namespace OCA\\Library\\Controller" in controller
    assert "class ExportController extends Controller" in controller
    assert "use OCP\\AppFramework\\Http\\Attribute\\NoCSRFRequired;" in controller
    assert "use OCP\\AppFramework\\Http\\DataDownloadResponse;" in controller
    assert "public function metadata(): DataDownloadResponse" in controller
    assert "exportCorrectedMetadata($user->getUID())" in controller
    assert "library-metadata-export.json" in controller
    assert "application/json" in controller
    assert "getUserFolder" not in controller
    assert "->delete()" not in controller


def test_item_service_exports_only_user_corrected_metadata_with_file_identity():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "public function exportCorrectedMetadata(string $userId): array" in service
    assert "user_edited" in service
    assert "createNamedParameter(1)" in service
    assert "fileId" in service
    assert "libraryFileId" in service
    assert "cachedPath" in service
    assert "rootPath" in service
    assert "shelf" in service
    assert "metadataSource" in service
    assert "publicationType" in service
    assert "title" in service
    assert "schemaVersion" in service
    assert "exportedAt" in service
    export_method = service.split("public function exportCorrectedMetadata", 1)[1].split("private function", 1)[0]
    assert "delete('" not in export_method
    assert "update('" not in export_method
    assert "insert('" not in export_method


def test_catalogue_and_settings_link_to_metadata_export():
    page = (ROOT / "lib" / "Controller" / "PageController.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    app = (ROOT / "src" / "App.vue").read_text()

    assert "metadataExportUrl" in page
    assert "library.export.metadata" in page
    assert "metadataExportUrl" in settings
    assert "library.export.metadata" in settings
    assert "Export corrected metadata" in template
    assert "metadataExportUrl" in template
    assert "metadataExportUrl" in app
    assert "Export corrected metadata" in app


def test_docs_mark_metadata_export_foundation_landed_and_next_priority():
    readme = (ROOT / "README.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "export corrected metadata" in readme.lower()
    assert "Export corrected metadata" in guide
    assert "side-effect-free JSON download" in guide
    assert "user-edited catalogue rows" in guide
    assert "Metadata export foundation.** First slice landed" in roadmap
    assert "Recommended next slice: **DB-backed catalogue query path**" in roadmap
