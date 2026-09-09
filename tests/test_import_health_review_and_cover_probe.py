from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_health_routes_expose_review_exports_and_cover_probe():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "'health#metadataErrors'" in routes
    assert "'/health/metadata-errors'" in routes
    assert "'health#metadataErrorsTsv'" in routes
    assert "'/health/metadata-errors.tsv'" in routes
    assert "'health#coverProbe'" in routes
    assert "'/health/covers/probe'" in routes


def test_health_controller_downloads_json_tsv_and_probe_payloads():
    controller = (ROOT / "lib" / "Controller" / "HealthController.php").read_text()

    assert "class HealthController extends Controller" in controller
    assert "metadataErrors(): JSONResponse" in controller
    assert "metadataErrorsTsv(): DataDownloadResponse" in controller
    assert "coverProbe(): JSONResponse" in controller
    assert "library-import-health-metadata-errors.tsv" in controller
    assert "X-Library-Export-Type" in controller
    assert "import-health-metadata-errors" in controller
    assert "coverProbeReport" in controller


def test_health_service_supports_paginated_review_rows_and_real_cover_probe_terms():
    service = (ROOT / "lib" / "Service" / "LibraryHealthService.php").read_text()

    assert "metadataErrorRows(string $userId, int $limit = 100, int $offset = 0)" in service
    assert "metadataErrorExport" in service
    assert "coverProbeReport(string $userId, int $limit = 30)" in service
    assert "libraryExtraction" in service
    assert "nextcloudPreview" in service
    assert "manualOverride" in service
    assert "epub-cover-fallback" in service
    assert "cbz-first-image-fallback" in service
    assert "blocked-non-zip-cbz-left-as-is" in service
    assert "files are left as-is" in service


def test_catalogue_ui_links_to_full_health_exports_and_explains_left_as_is_policy():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "metadataErrorsUrl" in app
    assert "metadataErrorsTsvUrl" in app
    assert "coverProbeUrl" in app
    assert "Full review" in app
    assert "Export TSV" in app
    assert "Probe covers" in app
    assert "Files are left as-is" in app
