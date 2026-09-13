from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_batch_ui_is_selection_gated_and_posts_explicit_ids():
    app = read("src/App.vue")
    assert 'v-if="selectedItemIds.length > 0"' in app
    assert 'aria-live="polite"' in app
    assert 'type="checkbox"' in app
    assert "input.name = 'itemIds[]'" in app
    assert 'selectVisibleItems' in app
    assert 'reconcileSelectedItems' in app


def test_catalogue_batch_controllers_fail_closed_on_explicit_ids():
    for path, methods in {
        "lib/Controller/TagController.php": ("batchassign", "batchremove"),
        "lib/Controller/ItemController.php": ("batchresetfilteredfields",),
        "lib/Controller/CoverController.php": ("batchrefresh",),
    }.items():
        source = read(path)
        assert "SelectedItemIds::parse" in source
        for method in methods:
            body = source.split(f"function {method}", 1)[1].split("\n    }", 1)[0]
            assert "SelectedItemIds::parse" in body
            assert "itemIdsForCatalogueFilters" not in body
