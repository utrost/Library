from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_suppressed_opf_cleanup_preserves_user_edited_sidecar_items_as_visible_records():
    scanner = (ROOT / "lib" / "Service" / "LibraryScanner.php").read_text()
    item_service = (ROOT / "lib" / "Service" / "ItemService.php").read_text()

    assert "hasUserEditedItemForLibraryFile" in item_service
    assert "$this->itemService->hasUserEditedItemForLibraryFile($userId, (int)$indexedFile['id'])" in scanner
    assert "$seenLibraryFileIds[] = $preservedSidecarId" in scanner
    assert "private function cleanupSuppressedOpfSidecar(string $userId, int $rootId, File $file): ?int" in scanner
    assert "return (int)$indexedFile['id'];" in scanner
    cleanup_start = scanner.index("private function cleanupSuppressedOpfSidecar")
    cleanup = scanner[cleanup_start:]
    assert "return (int)$indexedFile['id'];" in cleanup[cleanup.index("hasUserEditedItemForLibraryFile"):cleanup.index("markAsSidecar")]
    assert "markAsSidecar" in cleanup
    assert "deleteItemForLibraryFile" in cleanup


def test_docs_record_conservative_user_edited_sidecar_visibility_policy():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()
    metadata_docs = (ROOT / "docs" / "metadata-storage.md").read_text()

    expected = "manually edited OPF sidecar items stay visible as standalone records"
    assert expected in roadmap
    assert expected in metadata_docs
