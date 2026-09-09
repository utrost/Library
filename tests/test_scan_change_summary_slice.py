from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_scan_jobs_persist_explicit_change_summary_counts():
    migrations = "\n".join(path.read_text() for path in (ROOT / "lib" / "Migration").glob("*.php"))
    service = (ROOT / "lib" / "Service" / "ScanJobService.php").read_text()
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()

    for column in ["files_added", "paths_updated", "files_unchanged", "files_missing"]:
        assert column in migrations
        assert column in service

    assert "metadataErrors" in scanner
    assert "pathsUpdated" in scanner
    assert "filesUnchanged" in scanner
    assert "filesMissing" in scanner
    assert "Scan completed:" in service


def test_file_upsert_returns_change_status_for_same_file_id_moves_without_duplicates():
    service = (ROOT / "lib" / "Service" / "FileIndexService.php").read_text()
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()

    assert "['changeStatus'] = 'added'" in service
    assert "['changeStatus'] = $pathChanged ? 'path_updated' : 'unchanged'" in service
    assert "findByFileId($userId, $fileId)" in service
    assert "->where($qb->expr()->eq('id', $qb->createNamedParameter($existing['id'])))" in service
    assert "incrementChangeCount($summary, (string)($indexedFile['changeStatus'] ?? 'unchanged'))" in scanner
    assert "hasUserEditedItemForLibraryFile($userId, (int)$indexedFile['id'])" in scanner


def test_settings_page_has_post_scan_changes_panel_with_review_links():
    template = (ROOT / "templates" / "settings-personal.php").read_text()
    personal = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    smoke = (ROOT / "scripts" / "smoke-vue-page.mjs").read_text()
    docs = (ROOT / "docs" / "user-guide.md").read_text() + "\n" + (ROOT / "docs" / "roadmap.md").read_text()

    assert "library-scan-changes-panel" in template
    assert "Changes found" in template
    assert "filesAdded" in template
    assert "pathsUpdated" in template
    assert "filesMissing" in template
    assert "scanChangedFilesUrl" in personal
    assert "scanMissingFilesUrl" in personal
    assert "settings_has_scan_changes_panel" in smoke
    assert "moved/renamed" in docs
    assert "added, moved/renamed, unchanged, missing and metadata-error counts" in docs
