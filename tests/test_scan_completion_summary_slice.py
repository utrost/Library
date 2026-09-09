from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_scan_jobs_persist_metadata_error_counter_separately_from_root_failures():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("*.php"))
    service = read("lib/Service/ScanJobService.php")
    scanner = read("lib/Service/LibraryScanner.php")

    assert "metadata_errors" in migrations
    assert "'metadata_errors' => $qb->createNamedParameter" in service
    assert "'metadataErrors' => (int)($row['metadata_errors'] ??" in service
    assert "(int)($result['metadataErrors'] ?? 0)" in service
    assert "metadataErrors" in scanner
    assert "errorCount" in service


def test_settings_scan_summary_survives_reload_with_completion_or_failure_notice():
    template = read("templates/settings-personal.php")
    scan_js = read("js/scan-progress.js")
    smoke = read("scripts/smoke-vue-page.mjs")

    assert "library-scan-completion-summary" in template
    assert "data-library-scan-completion-summary" in template
    assert "data-library-scan-completion-title" in template
    assert "Scan completed" in template
    assert "Scan failed" in template
    assert "data-library-scan-finished-at" in template
    assert "renderCompletionSummary" in scan_js
    assert "settings_has_scan_completion_summary" in smoke


def test_scan_summary_counter_cards_link_to_smart_views_and_metadata_error_export():
    template = read("templates/settings-personal.php")
    personal = read("lib/Settings/Personal.php")

    assert "scanAddedFilesUrl" in personal
    assert "scanMovedFilesUrl" in personal
    assert "scanMissingFilesUrl" in personal
    assert "scanMetadataErrorsUrl" in personal
    assert "scanMetadataErrorsExportUrl" in personal
    assert "'needsMetadata' => '1'" in personal
    assert "'status' => 'metadata_error'" in personal
    assert "library-scan-change-card-link" in template
    assert "data-library-scan-metadata-errors" in template
    assert "latestScanJob['metadataErrors']" in template
    assert "Export metadata-error TSV" in template


def test_docs_record_scan_completion_summary_slice():
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/roadmap.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "post-scan completion summary" in docs
    assert "metadata-error tsv" in docs
    assert "added, moved/renamed, unchanged, missing and metadata-error counts" in docs
