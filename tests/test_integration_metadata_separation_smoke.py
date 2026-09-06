from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_package_exposes_metadata_separation_smoke_command():
    package = (ROOT / "package.json").read_text()

    assert '"smoke:separation"' in package
    assert "scripts/smoke-metadata-separation.mjs" in package


def test_metadata_separation_smoke_exercises_tag_comment_without_item_mutation():
    smoke = (ROOT / "scripts" / "smoke-metadata-separation.mjs").read_text()

    required_markers = [
        "metadata_before_hash",
        "tag_post_status",
        "comment_post_status",
        "metadata_after_hash",
        "metadata_unchanged_after_tag_comment=true",
        "temporary_tags_deleted",
        "temporary_comments_deleted",
        "temp_token_remaining",
    ]
    for marker in required_markers:
        assert marker in smoke

    assert "library_items" in smoke
    assert "metadata_source" in smoke
    assert "user_edited" in smoke
    assert "nextcloudTagName" in smoke
    assert "commentMessage" in smoke
    assert "ICommentsManager" in smoke
    assert "ISystemTagManager" in smoke
    assert "returnTo', 'details'" not in smoke  # smoke goes through HTTP form params, not controller internals


def test_roadmap_names_metadata_separation_live_smoke():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "metadata/tag/comment separation smoke" in roadmap
    assert "Nextcloud tag/comment actions do not mutate Library publication metadata" in roadmap
