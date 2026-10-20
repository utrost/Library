from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
def test_deletion_endpoints_are_authenticated_and_post_is_csrf_protected():
    source = (ROOT / 'lib/Controller/BookDeletionController.php').read_text()
    assert "#[NoAdminRequired]\n    public function delete" in source
    assert "getUser()?->getUID()" in source
    routes = (ROOT / 'appinfo/routes.php').read_text()
    assert "'name' => 'book_deletion#preview'" in routes
    assert "'name' => 'book_deletion#delete'" in routes
    assert "'url' => '/items/{itemId}/deletion', 'verb' => 'POST'" in routes

def test_deletion_guard_preserves_nextcloud_wrapper_and_bounds_targets():
    source = (ROOT / 'lib/Service/BookFileDeletionService.php').read_text()
    guard = (ROOT / 'lib/Service/DeletionStorageGuard.php').read_text()
    assert "getById($fileId)" in source
    assert "time() + 600" in source and "library-book-delete-v1" in source
    assert "$current !== $claim['plan']" in source
    assert "getDirectoryListing() === []" in source and "readdir($handle)" in source
    assert "finally { $mount->wrapStorage(fn() => $originalStorage); }" in source
    assert "parent::unlink($path)" in guard and "parent::rmdir($path)" in guard
    assert "filelocking.enabled" in source
    assert "$sourcePath, $opfPath, $parentPath" in source
