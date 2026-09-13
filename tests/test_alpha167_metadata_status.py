from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = (ROOT / "templates/item-detail.php").read_text()
HELPER = (ROOT / "lib/Presentation/MetadataStatus.php").read_text()


def test_metadata_status_is_four_separate_concepts():
    for heading in ("Completeness", "Confidence", "Attention", "Personal"):
        assert f"$l->t('{heading}')" in SOURCE
    completeness = HELPER.split("private const FIELDS = [", 1)[1].split("];", 1)[0]
    assert "personalRating" not in completeness
    assert "'book' =>" in completeness and "'comic' =>" in completeness and "'manual' =>" in completeness
    assert "$confidenceLabel" in SOURCE
    assert "$attentionItems" in SOURCE
    assert "MetadataStatus::forItem" in SOURCE
