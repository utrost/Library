from pathlib import Path


APP = (Path(__file__).resolve().parents[1] / "src/App.vue").read_text()


def test_review_has_exactly_five_top_level_groups_and_legacy_keys():
    block = APP.split("const reviewQueueDefinitions", 1)[1].split("])", 1)[0]
    assert block.count("countKey:") == 5
    for label in ("Suggested updates", "Needs details", "File problems", "Cover problems", "Imported changes"):
        assert f"label: '{label}'" in block
    for key in ("noCreator", "noPublication", "noDate", "titleFromFilename", "weakMetadata", "unsupportedContainer"):
        assert key in APP


def test_visible_suggestion_terminology_is_used():
    for label in ("Review next suggestion", "Use suggested value", "Skip to next suggestion"):
        assert f"t('library', '{label}')" in APP
