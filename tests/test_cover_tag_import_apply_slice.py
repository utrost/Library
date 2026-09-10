from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_cover_controller_extracts_epub_manifest_cover_before_placeholder():
    controller = (ROOT / "lib" / "Controller" / "CoverController.php").read_text()

    assert "extractEpubCover" in controller
    assert "epub-cover" in controller
    assert "META-INF/container.xml" in controller
    assert "full-path" in controller
    assert "media-type" in controller
    assert "cover-image" in controller

    show_method = controller.split("public function show", 1)[1].split("private function isEpubFile", 1)[0]
    assert "extractEpubCover($file, $itemId)" in show_method
    assert "extractCbzFirstImageCover($file, $itemId)" in show_method
    assert show_method.rindex("extractEpubCover") < show_method.rindex("extractCbzFirstImageCover") < show_method.rindex("placeholderResponse")


def test_tag_service_exposes_visible_assignable_tag_suggestions_for_details():
    service = (ROOT / "lib" / "Service" / "FileTagService.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    template = (ROOT / "templates" / "item-detail.php").read_text()

    assert "public function visibleAssignableTagNames" in service
    assert "getAllTags(true" in service
    assert "canUserSeeTag" in service
    assert "canUserAssignTag" in service
    assert "sort($tagNames" in service or "natcasesort($tagNames" in service

    assert "tagSuggestions" in controller
    assert "visibleAssignableTagNames" in controller
    assert "tagSuggestions" in template
    assert "library-nextcloud-tag-suggestions" in template
    assert "list=\"library-nextcloud-tag-suggestions\"" in template
    assert "<datalist" in template


def test_metadata_import_apply_route_controller_service_and_settings_form_are_wired():
    routes = (ROOT / "appinfo" / "routes.php").read_text()
    controller = (ROOT / "lib" / "Controller" / "ImportController.php").read_text()
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()
    settings = (ROOT / "lib" / "Settings" / "Personal.php").read_text()
    template = (ROOT / "templates" / "settings-personal.php").read_text()

    assert "import#apply" in routes
    assert "'/import/metadata/apply'" in routes
    assert "public function apply(): JSONResponse" in controller
    assert "applyCorrectedMetadataImport($user->getUID()" in controller
    apply_method = controller.split("public function apply", 1)[1].split("}", 1)[0]
    assert "NoCSRFRequired" not in apply_method
    assert "X-Library-Import-Mode" in controller
    assert "apply" in controller

    assert "public function applyCorrectedMetadataImport(string $userId, string $metadataJson): array" in service
    assert "applicationKind" in service
    assert "library-metadata-import-apply" in service
    assert "appliedItems" in service
    assert "skippedItems" in service
    assert "updateItem($userId" in service

    assert "metadataImportApplyUrl" in settings
    assert "library.import.apply" in settings
    assert "library-metadata-import-apply-form" in template
    assert "Apply metadata import" in template
    assert "This writes matched corrected metadata" in template


def test_docs_track_cover_tag_and_import_apply_as_landed_first_slices():
    readme = (ROOT / "docs" / "user-guide.md").read_text()
    guide = (ROOT / "docs" / "user-guide.md").read_text()
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "EPUB cover extraction" in readme
    assert "tag suggestions" in guide
    assert "Apply metadata import" in guide
    assert "applies matched corrected metadata" in roadmap
