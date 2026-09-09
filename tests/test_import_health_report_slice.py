from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_library_health_service_reports_metadata_errors_archive_magic_and_cover_paths():
    service_path = ROOT / "lib" / "Service" / "LibraryHealthService.php"
    assert service_path.exists(), "LibraryHealthService should own import/cover health summaries"
    service = service_path.read_text()

    assert "importHealthSummary" in service
    assert "metadataErrorReview" in service
    assert "archiveMagicSummary" in service
    assert "coverHealthSummary" in service
    assert "suggestedRepairAction" in service
    assert "actualContainerType" in service
    assert "nextcloudPreview" in service
    assert "libraryCoverRoute" in service
    assert "application/x-7z-compressed" in service
    assert "application/x-rar-compressed" in service


def test_page_initial_state_exposes_lazy_import_health_summary_url():
    controller = (ROOT / "lib" / "Controller" / "PageController.php").read_text()

    assert "LibraryHealthService" in controller
    assert "importHealthSummaryUrl" in controller
    assert "library.health.importSummary" in controller
    assert "importHealthSummary' => []" in controller


def test_catalogue_keeps_import_health_overview_inside_actions_menu():
    app = (ROOT / "src" / "App.vue").read_text()

    assert "const importHealthSummary" in app
    assert "library-actions-health-overview" in app
    assert "Metadata overview" in app
    assert "library-import-health-panel" not in app
    assert "Real-file findings" not in app
    assert "Metadata errors" in app
    assert "Archive/container check" in app
    assert "Cover health" in app
    assert "suggestedRepairAction" in app
    assert "actualContainerType" in app
    assert "nextcloudPreview" in app
    assert "libraryCoverRoute" in app
    assert "?status=metadata_error" in app


def test_docs_describe_real_import_health_findings_and_next_actions():
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "Import health" in guide
    assert "metadata-error review" in guide
    assert "archive/container check" in guide
    assert "cover health" in guide
    assert "non-ZIP CBZ" in guide
    assert "metadata-error review" in roadmap
    assert "archive magic" in roadmap
    assert "cover health" in roadmap
