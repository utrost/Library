from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_import_health_metadata_error_review_queue_has_open_export_and_tag_actions():
    app = read("src/App.vue")
    assert "library-review-queue-actions" in app
    assert "metadataErrorReview.reviewUrl || '?status=metadata_error'" in app
    assert "metadataErrorsTsvUrl" in app
    assert "Tag metadata-error rows" in app
    assert 'name="status" value="metadata_error"' in app
    assert 'name="nextcloudTagName" value="library-metadata-error"' in app
    assert "Uses the existing batch tag route" in app


def test_scanner_conflict_review_queue_can_be_opened_or_tagged_without_metadata_changes():
    app = read("src/App.vue")
    assert "scannerConflictReviewUrl" in app
    assert "Tag scanner-conflict rows" in app
    assert 'name="scannerConflicts" value="1"' in app
    assert 'name="nextcloudTagName" value="library-scanner-conflict"' in app
    assert "Library metadata is not changed" in app


def test_review_queue_slice_stays_on_existing_safe_routes():
    routes = read("appinfo/routes.php")
    assert "tag#batchassign" in routes
    assert "health#metadataErrorsTsv" in routes
    assert "'/review'" not in routes


def test_browser_smoke_checks_review_queue_shortcuts():
    smoke = read("scripts/smoke-browser-page.mjs")
    assert "browser_review_queue_actions" in smoke
    assert "browser_review_queue_metadata_error_tag_form" in smoke
    assert "browser_review_queue_scanner_conflict_tag_form" in smoke


def test_docs_describe_review_queue_shortcuts_as_landed_safe_actions():
    guide = read("docs/user-guide.md").lower()
    roadmap = read("docs/roadmap.md").lower()
    assert "review queue shortcuts" in guide
    assert "tag metadata-error rows" in guide
    assert "tag scanner-conflict rows" in guide
    assert "review queue shortcuts" in roadmap
    assert "no source files are changed" in roadmap
