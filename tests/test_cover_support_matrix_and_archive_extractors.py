from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_archive_cover_service_defines_read_only_non_zip_cbz_extractors():
    service_path = ROOT / "lib" / "Service" / "ArchiveCoverService.php"
    assert service_path.exists(), "ArchiveCoverService should own read-only archive cover extraction"
    service = service_path.read_text()

    assert "final class ArchiveCoverService" in service
    assert "firstImageCover" in service
    assert "application/x-7z-compressed" in service
    assert "application/x-rar-compressed" in service
    assert "blocked-missing-archive-extractor" in service
    assert "sevenzip-first-image-fallback" in service
    assert "rar-first-image-fallback" in service
    assert "proc_open" in service
    assert "files are left as-is" in service


def test_health_service_reports_support_matrix_and_plugin_boundaries():
    service = (ROOT / "lib" / "Service" / "LibraryHealthService.php").read_text()

    assert "coverSupportMatrix" in service
    assert "environmentCapabilities" in service
    assert "nextcloudPreviewProvider" in service
    assert "libraryExtractionActor" in service
    assert "manual-cover-override" in service
    assert "blocked-missing-archive-extractor" in service
    assert "ArchiveCoverService" in service


def test_cover_controller_uses_archive_service_after_zip_fallback_without_mutating_files():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()

    assert "ArchiveCoverService" in controller
    assert "extractArchiveFirstImageCover" in controller
    assert "sevenzip-first-image" in controller
    assert "rar-first-image" in controller
    assert "inspect-only; files are left as-is" in controller


def test_docs_and_ui_explain_nextcloud_vs_library_cover_support_matrix():
    app = (ROOT / "src" / "App.vue").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "Cover support matrix" in app
    assert "Nextcloud/plugin preview" in app
    assert "Library extraction" in app
    assert "7z/RAR files are left as-is" in guide
    assert "read-only archive extraction" in guide
    assert "cover support matrix" in roadmap.lower()
