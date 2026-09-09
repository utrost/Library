from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text()


def test_batch_metadata_apply_route_controller_and_service_write_filtered_results():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/ItemController.php")
    service = read("lib/Service/ItemService.php")

    assert "'name' => 'item#batchapplymetadataedit'" in routes
    assert "'url' => '/bulk/items/edit-apply'" in routes
    assert routes.index("/bulk/items/edit-preview") < routes.index("/bulk/items/edit-apply") < routes.index("/items/{itemId}")
    assert "public function batchapplymetadataedit(): RedirectResponse" in controller
    body = controller.split("public function batchapplymetadataedit", 1)[1].split("private function catalogueFiltersFromRequest", 1)[0]
    assert "catalogueFiltersFromRequest" in body
    assert "itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in body
    assert "applyBatchMetadataEdit($user->getUID(), $itemIds" in body
    assert "batchMetadataApplyResult" in body
    assert "batchMetadataApplied" in body
    assert "batchMetadataUnchanged" in body
    assert "batchMetadataSkipped" in body
    assert "confirmBatchMetadataApply" in body

    assert "public function applyBatchMetadataEdit(string $userId, array $itemIds, string $field, string $value): array" in service
    apply_body = service.split("public function applyBatchMetadataEdit", 1)[1].split("private function updateSingleMetadataField", 1)[0]
    assert "previewBatchMetadataEdit($userId, $ids, $field, $value)" in apply_body
    assert "'previewOnly' => false" in apply_body
    assert "'appliedItems'" in apply_body
    assert "updateSingleMetadataField($userId, $itemId, $field, $normalizedValue)" in apply_body
    assert "invalidField" in apply_body

    helper_body = service.split("private function updateSingleMetadataField", 1)[1].split("public function listItems", 1)[0]
    assert "databaseColumnForField($field)" in helper_body
    assert "->set($column, $qb->createNamedParameter($normalizedValue))" in helper_body
    assert "->set('metadata_source', $qb->createNamedParameter('user'))" in helper_body
    assert "->set('user_edited', $qb->createNamedParameter(1))" in helper_body
    assert "->set('updated_at', $qb->createNamedParameter(time()))" in helper_body


def test_preview_template_is_polished_and_contains_confirmed_apply_form():
    template = read("templates/batch-metadata-edit-preview.php")
    css = read("css/style.css")

    assert "library-batch-preview-hero" in template
    assert "Review before applying" in template
    assert "This will update the selected field for every item that still differs from the normalized value." in template
    assert "method=\"post\" action=\"<?php p($applyUrl); ?>\"" in template
    assert "name=\"confirmBatchMetadataApply\" value=\"APPLY\"" in template
    assert "Apply changes to current results" in template
    assert "library-batch-preview-stat-grid" in template
    assert "library-batch-preview-table" in template
    assert "No changes have been written yet." in template

    assert ".library-batch-preview-hero" in css
    assert ".library-batch-preview-stat-grid" in css
    assert ".library-batch-preview-table" in css
    assert "grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))" in css


def test_catalogue_batch_form_labels_apply_capable_preview():
    vue = read("src/App.vue")
    fallback = read("src/main.js")

    for source in (vue, fallback):
        assert "Preview & apply metadata edit" in source
        assert "Preview first, then apply from the review page." in source
        assert "batchMetadataEditPreviewUrl" in source
        assert "Batch metadata apply updated" in source
        assert "library-batch-metadata-apply-result" in source


def test_browser_smoke_covers_batch_apply_write_restore_and_polished_preview():
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "/apps/library/bulk/items/edit-apply" in smoke
    assert "browser_batch_metadata_apply_smoke" in smoke
    assert "batch_apply_restored" in smoke
    assert "library-batch-preview-stat-grid" in smoke
    assert "Apply changes to current results" in smoke


def test_docs_and_version_track_batch_metadata_apply():
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")
    lock = read("package-lock.json")

    assert "preview-and-apply batch metadata edits" in guide.lower()
    assert "batch metadata apply" in roadmap.lower()
    assert "<version>0.1.0-alpha.134</version>" in info
    assert '"version": "0.1.0-alpha.134"' in package
    assert '"version": "0.1.0-alpha.134"' in lock
