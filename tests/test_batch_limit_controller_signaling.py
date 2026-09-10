from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def method_body(text: str, method_name: str, next_marker: str) -> str:
    return text.split(f"public function {method_name}", 1)[1].split(next_marker, 1)[0]


def test_all_cap_reachable_controllers_catch_only_the_dedicated_exception():
    expected = {
        "lib/Controller/ItemController.php": [
            ("bulkresetfields", "public function batchresetfilteredfields"),
            ("batchresetfilteredfields", "public function batchpreviewmetadataedit"),
            ("batchpreviewmetadataedit", "public function batchapplymetadataedit"),
            ("batchapplymetadataedit", "private function catalogueFiltersFromRequest"),
        ],
        "lib/Controller/TagController.php": [
            ("batchassign", "public function batchremove"),
            ("batchremove", "public function remove"),
        ],
        "lib/Controller/CoverController.php": [
            ("batchrefresh", "private function catalogueFiltersFromRequest"),
        ],
    }
    for path, methods in expected.items():
        text = (ROOT / path).read_text()
        assert "use OCA\\Library\\Exception\\BatchLimitExceededException;" in text
        for method, next_marker in methods:
            body = method_body(text, method, next_marker)
            assert "catch (BatchLimitExceededException $e)" in body


def test_limit_failures_never_emit_success_flags_or_apply_controls():
    item = (ROOT / "lib/Controller/ItemController.php").read_text()
    tag = (ROOT / "lib/Controller/TagController.php").read_text()
    cover = (ROOT / "lib/Controller/CoverController.php").read_text()
    preview = (ROOT / "templates/batch-metadata-edit-preview.php").read_text()
    settings = (ROOT / "templates/settings-personal.php").read_text()
    app = (ROOT / "src/App.vue").read_text()

    for controller in (item, tag, cover):
        assert "batchLimitError" in controller
    assert "batchLimitError" in preview
    assert "batchLimitError" in app
    assert "!$batchLimitError" in preview
    assert "batchLimitError" in settings
    assert "$l->t('This batch matches more than 5,000 items. Narrow the selection and try again.')" in settings
