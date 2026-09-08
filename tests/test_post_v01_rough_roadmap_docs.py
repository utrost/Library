from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def test_post_v01_roadmap_exists_and_is_linked():
    readme = read("README.md")
    roadmap = read("docs/roadmap.md")
    post = read("docs/post-v0.1-roadmap.md")

    assert "docs/post-v0.1-roadmap.md" in readme
    assert "post-v0.1 roadmap" in roadmap.lower()
    assert "# Rough roadmap after v0.1" in post


def test_post_v01_roadmap_has_one_major_feature_per_release():
    post = read("docs/post-v0.1-roadmap.md")

    expected = {
        "## v0.2 — Filename and directory metadata parsing": "Parsing metadata from filenames and directories",
        "## v0.3 — External metadata providers": "Getting metadata from a provider",
        "## v0.4 — File-First sidecar write-back and restore": "Writing portable sidecar metadata and restoring from it",
        "## v0.5 — Shared libraries and admin-managed roots": "Shared Library roots for households and teams",
        "## v0.6 — Reading integrations and activity": "Reader-aware activity beyond Library's own open timestamp",
        "## Later candidates": "not committed release promises",
    }
    for heading, theme in expected.items():
        assert heading in post
        assert theme in post

    assert "one major feature family" in post
    assert "Non-goals" in post
    assert "Acceptance checks" in post
