from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text()


def test_route_and_controller_expose_preview_only_filtered_metadata_edit():
    routes = read("appinfo/routes.php")
    controller = read("lib/Controller/ItemController.php")

    assert "item#batchpreviewmetadataedit" in routes
    assert "/bulk/items/edit-preview" in routes
    assert routes.index("/bulk/items/edit-preview") < routes.index("/items/{itemId}")
    assert "public function batchpreviewmetadataedit(): TemplateResponse" in controller
    assert "catalogueFiltersFromRequest()" in controller
    assert "itemIdsForCatalogueFilters($user->getUID(), $filters, 5000)" in controller
    assert "previewBatchMetadataEdit($user->getUID(), $itemIds" in controller
    assert "new TemplateResponse($this->appName, 'batch-metadata-edit-preview'" in controller
    assert "batchMetadataEditPreviewResult" in controller
    assert "bulkEditField" in controller
    assert "bulkEditValue" in controller
    assert "updateItem(" not in controller.split("public function batchpreviewmetadataedit", 1)[1].split("private function catalogueFiltersFromRequest", 1)[0]


def test_item_service_previews_without_writing_and_limits_to_publication_fields():
    service = read("lib/Service/ItemService.php")

    assert "public function previewBatchMetadataEdit(string $userId, array $itemIds, string $field, string $value): array" in service
    body = service.split("public function previewBatchMetadataEdit", 1)[1].split("private function normalizeBulkItemIds", 1)[0]
    assert "PUBLICATION_FIELDS" in body
    assert "databaseColumnForField($field)" in body
    assert "normalizeBulkItemIds($itemIds)" in body
    assert "previewOnly" in body
    assert "changedItems" in body
    assert "unchangedItems" in body
    assert "invalidField" in body
    assert "updated_at" not in body
    assert "->update('library_items')" not in body
    assert "updateItem(" not in body


def test_catalogue_vue_and_fallback_render_batch_metadata_edit_preview_form():
    page = read("lib/Controller/PageController.php")
    app = read("src/App.vue")
    fallback = read("src/main.js")
    smoke = read("scripts/smoke-browser-page.mjs")

    assert "batchMetadataEditPreviewUrl" in page
    assert "library.item.batchpreviewmetadataedit" in page
    assert "batchMetadataEditPreviewUrl" in app
    assert "library-batch-metadata-edit-preview-form" in app
    assert "Preview metadata edit" in app
    assert "bulkEditField" in app
    assert "bulkEditValue" in app
    assert "No changes are written during preview" in app
    assert "batchMetadataEditPreviewUrl" in fallback
    assert "library-batch-metadata-edit-preview-form" in fallback
    assert "browser_batch_metadata_edit_preview_form" in smoke
    assert "browser_post_forms=105" in smoke or "+ 5" in smoke


def test_docs_and_version_track_preview_first_filtered_batch_metadata_edit():
    guide = read("docs/user-guide.md")
    roadmap = read("docs/roadmap.md")
    info = read("appinfo/info.xml")
    package = read("package.json")
    lock = read("package-lock.json")

    assert "preview-first batch metadata edit" in guide.lower()
    assert "No changes are written during preview" in guide
    assert "preview-first batch metadata edit" in roadmap.lower()
    assert "arbitrary bulk edit remains preview-only" in roadmap.lower()
    assert "<version>0.1.0-alpha.116</version>" in info
    assert '"version": "0.1.0-alpha.116"' in package
    assert '"version": "0.1.0-alpha.116"' in lock
