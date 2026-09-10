from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_docs_spine_mentions_landed_publication_issue_context():
    docs = {
        "CHANGELOG.md": read("CHANGELOG.md"),
        "docs/user-guide.md": read("docs/user-guide.md"),
        "docs/alpha-test-checklist.md": read("docs/alpha-test-checklist.md"),
        "docs/human-test-handbook.md": read("docs/human-test-handbook.md"),
        "docs/current-state-and-risk-register.md": read("docs/current-state-and-risk-register.md"),
        "docs/product-concept.md": read("docs/product-concept.md"),
        "docs/ux-concept.md": read("docs/ux-concept.md"),
        "docs/v0.1-technical-spec.md": read("docs/v0.1-technical-spec.md"),
    }

    for path, text in docs.items():
        assert "Publication contents" in text or "publication contents" in text, path
        assert "issue/date" in text, path


def test_docs_no_longer_describe_landed_discovery_as_absent():
    combined = "\n".join(
        read(path)
        for path in [
            "README.md",
            "CHANGELOG.md",
            "RELEASE.md",
            "docs/user-guide.md",
            "docs/alpha-test-checklist.md",
            "docs/human-test-handbook.md",
            "docs/current-state-and-risk-register.md",
            "docs/product-concept.md",
            "docs/ux-concept.md",
            "docs/v0.1-technical-spec.md",
        ]
    ).lower()

    assert "0.1.0-alpha.111" not in combined
    assert "no dedicated creator pages" not in combined
    assert "creator pages, saved views" not in combined
    assert "dedicated creator/series/publication/year landing pages" not in combined
    assert "current editable detail form does not expose a description field" not in combined
