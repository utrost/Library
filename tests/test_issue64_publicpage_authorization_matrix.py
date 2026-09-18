from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def method_block(source: str, name: str, next_name: str | None = None) -> str:
    block = source.split(f"public function {name}", 1)[1]
    if next_name:
        block = block.split(f"public function {next_name}", 1)[0]
    return block


def attributes_before(source: str, name: str) -> str:
    return source.split(f"public function {name}", 1)[0].rsplit("#[NoAdminRequired]", 1)[1]


def test_native_sidebar_uses_framework_auth_not_public_page_boundary():
    controller = (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text()
    sidebar = method_block(controller, "sidebar", "canonicalSidebarItemId")
    sidebar_attrs = attributes_before(controller, "sidebar")

    assert "use OCP\\AppFramework\\Http\\Attribute\\PublicPage;" not in controller
    assert "#[PublicPage]" not in sidebar_attrs
    assert "canonicalSidebarItemId($itemId)" in sidebar
    assert "$this->userSession->getUser()" in sidebar
    assert "findItem($user->getUID(), $canonicalItemId)" in sidebar
    assert "array_intersect_key" in sidebar
    assert "coverOverrideUrl" not in sidebar.split("array_flip([", 1)[1].split("]))]);", 1)[0]


def test_representative_app_surfaces_delegate_authorization_to_user_scoped_services():
    controllers = {
        "roots": (ROOT / "lib" / "Controller" / "RootController.php").read_text(),
        "collections": (ROOT / "lib" / "Controller" / "SavedCollectionController.php").read_text(),
        "tags": (ROOT / "lib" / "Controller" / "TagController.php").read_text(),
        "comments": (ROOT / "lib" / "Controller" / "CommentController.php").read_text(),
        "imports": (ROOT / "lib" / "Controller" / "ImportController.php").read_text(),
        "exports": (ROOT / "lib" / "Controller" / "ExportController.php").read_text(),
        "health": (ROOT / "lib" / "Controller" / "HealthController.php").read_text(),
        "items": (ROOT / "lib" / "Controller" / "ItemController.php").read_text(),
        "covers": (ROOT / "lib" / "Controller" / "CoverController.php").read_text(),
        "details": (ROOT / "lib" / "Controller" / "ItemPageController.php").read_text(),
    }

    matrix = {
        "roots": [
            "saveRoot(\n                    $user->getUID()",
            "updateRoot(\n                $user->getUID()",
            "setRootEnabled($user->getUID(), $rootId, $enabled)",
            "deleteRoot($user->getUID(), $rootId)",
        ],
        "collections": [
            "saveCollection(\n                $user->getUID()",
            "deleteCollection($user->getUID(), $collectionId)",
        ],
        "tags": [
            "assignTagToItem(\n                $user->getUID()",
            "assignTagToItems(\n                    $user->getUID()",
            "removeTagFromItems(\n                    $user->getUID()",
            "removeTagFromItem($user->getUID(), $itemId, $tagId)",
        ],
        "comments": ["addCommentToItem(\n                $user->getUID()"],
        "imports": [
            "previewCorrectedMetadataImport($user->getUID(), $metadataJson)",
            "applyCorrectedMetadataImport($user->getUID(), (string)$this->request->getParam('metadataJson', ''))",
        ],
        "exports": [
            "exportCorrectedMetadata($user->getUID())",
            "exportCorrectedMetadataSidecarManifest($user->getUID())",
            "exportCorrectedMetadataSidecarManifest($user->getUID())",
        ],
        "health": [
            "cachedImportHealthSummary($userId, false)",
            "cachedImportHealthSummary($userId, true)",
            "metadataErrorRows(\n            $userId",
            "metadataErrorTsv($userId)",
            "coverProbeReport(\n            $userId",
        ],
        "items": [
            "findItem($user->getUID(), $itemId)",
            "markOpened($user->getUID(), $itemId)",
            "updateItem($user->getUID(), $itemId",
            "resetFieldToScannerCandidate($user->getUID(), $itemId, $field)",
            "resetAllFieldsToScannerCandidates($user->getUID(), $itemId)",
            "bulkResetFieldsToScannerCandidates($user->getUID(), $itemIds)",
            "previewBatchMetadataEdit($user->getUID(), $itemIds",
            "applyBatchMetadataEdit($user->getUID(), $explicitItemIds",
            "setStarred($user->getUID(), $itemId, (string)$this->request->getParam('starred', '') === '1')",
            "setWorkflowStatus($user->getUID(), $itemId, (string)$this->request->getParam('workflowStatus', ''))",
            "forgetMissingItem($user->getUID(), $itemId)",
        ],
        "covers": [
            "findItem($userId, $itemId)",
            "findFileIdForItem($userId, $itemId)",
            "findUserFileById($userId, $fileId)",
            "setManualCoverOverride($user->getUID(), $itemId",
            "clearManualCoverOverride($user->getUID(), $itemId)",
            "coverRefreshItemIds(\n                    $user->getUID()",
        ],
        "details": [
            "findItem($user->getUID(), $canonicalItemId)",
            "findItem($user->getUID(), $itemId)",
            "tagsForItems([$item])",
            "commentsForItems([$item])",
        ],
    }

    for surface, expected_calls in matrix.items():
        source = controllers[surface]
        for expected in expected_calls:
            assert expected in source, f"{surface} is missing user-scoped authorization call: {expected}"


def test_mutation_routes_keep_csrf_protection_except_documented_preview_flow():
    controllers = {
        path.name: path.read_text()
        for path in (ROOT / "lib" / "Controller").glob("*Controller.php")
    }
    allowed_no_csrf_mutations = {
        ("ItemController.php", "batchpreviewmetadataedit"),
    }
    mutation_methods = {
        "RootController.php": ["save", "update", "toggle", "delete"],
        "SavedCollectionController.php": ["save", "delete"],
        "TagController.php": ["assign", "batchassign", "batchremove", "remove"],
        "CommentController.php": ["add"],
        "ImportController.php": ["preview", "apply"],
        "ItemController.php": ["recordOpen", "update", "resetfield", "resetfields", "batchresetfilteredfields", "batchpreviewmetadataedit", "batchapplymetadataedit", "star", "workflowStatus", "forgetMissing"],
        "CoverController.php": ["override", "revert", "batchrefresh"],
        "ScanController.php": ["run", "runRoot", "retryMetadataErrors", "recheckMissingFiles", "cancel"],
        "HealthController.php": ["refreshImportSummary", "coverProbe"],
    }

    for filename, methods in mutation_methods.items():
        source = controllers[filename]
        for index, method in enumerate(methods):
            next_method = methods[index + 1] if index + 1 < len(methods) else None
            attrs = attributes_before(source, method)
            if (filename, method) in allowed_no_csrf_mutations:
                assert "#[NoCSRFRequired]" in attrs
            else:
                assert "#[NoCSRFRequired]" not in attrs, f"{filename}::{method} must keep CSRF protection"
