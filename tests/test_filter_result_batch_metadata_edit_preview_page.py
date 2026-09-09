from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text()


def test_batch_metadata_edit_preview_uses_browser_readable_template_response():
    controller = read("lib/Controller/ItemController.php")
    routes = read("appinfo/routes.php")

    assert "item#batchpreviewmetadataedit" in routes
    assert "use OCP\\AppFramework\\Http\\TemplateResponse;" in controller
    assert "use OCP\\Util;" in controller
    assert "public function batchpreviewmetadataedit(): TemplateResponse" in controller
    body = controller.split("public function batchpreviewmetadataedit", 1)[1].split("private function catalogueFiltersFromRequest", 1)[0]
    assert "Util::addStyle('library', 'style');" in body
    assert "batchMetadataEditPreviewResult" in body
    assert "previewOnly" in body
    assert "return new TemplateResponse($this->appName, 'batch-metadata-edit-preview'" in body
    assert "updateItem(" not in body


def test_preview_template_renders_counts_examples_and_no_apply_path():
    template = read("templates/batch-metadata-edit-preview.php")

    assert "library-batch-metadata-edit-preview-page" in template
    assert "Batch metadata edit preview" in template
    assert "No changes have been written yet." in template
    assert "Requested items" in template
    assert "Would change" in template
    assert "Already matching" in template
    assert "Skipped" in template
    assert "Example matched items" in template
    assert "Current value" in template
    assert "New value" in template
    assert "Outcome" in template
    assert "Apply changes to current results" in template
    assert "method=\"post\"" in template


def test_browser_smoke_checks_preview_page_and_retains_token_cleanup():
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "browser_batch_metadata_edit_preview_page" in smoke
    assert "/apps/library/bulk/items/edit-preview" in smoke
    assert "bulkEditField: 'language'" in smoke
    assert "bulkEditValue: 'de'" in smoke
    assert "library-batch-metadata-edit-preview-page" in smoke
    assert "No changes have been written yet." in smoke
    assert "temp_token_remaining" in smoke


def test_docs_and_version_track_html_preview_page():
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")
    lock = read("package-lock.json")

    assert "polished review page" in guide.lower()
    assert "batch metadata apply" in roadmap.lower()
    assert "<version>0.1.0-alpha.125</version>" in info
    assert '"version": "0.1.0-alpha.125"' in package
    assert '"version": "0.1.0-alpha.125"' in lock
