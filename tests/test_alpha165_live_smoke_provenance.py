import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_user_edited_provenance_uses_locale_independent_marker_in_detail_and_smoke():
    detail = read("templates/item-detail.php")
    smoke = read("scripts/smoke-vue-page.mjs")
    marker = 'data-library-field="userEdited"'

    assert marker in detail
    assert json.loads(read("l10n/de.json"))["translations"]["User edited"] != "User edited"
    assert json.loads(read("l10n/ar.json"))["translations"]["User edited"] != "User edited"
    assert f"detail.text.includes('{marker}')" in smoke
    assert "detail_mentions_userEdited" not in smoke
    assert "!detail.text.includes('userEdited')" not in smoke


def test_catalogue_failure_reports_named_failed_predicates_without_weakening_gate():
    smoke = read("scripts/smoke-vue-page.mjs")

    assert "catalogueInitialStateFailedPredicates" in smoke
    assert "failed_predicates" in smoke
    assert "catalogueInitialStateFailedPredicates.length === 0" in smoke
    assert "fail('catalogue_initial_state_invalid', {" in smoke
