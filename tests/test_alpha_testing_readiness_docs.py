from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_human_test_handbook_targets_current_alpha_package():
    handbook = read("docs/human-test-handbook.md")
    checklist = read("docs/alpha-test-checklist.md")

    assert "0.1.0-alpha.157" in handbook
    assert "dist/library-0.1.0-alpha.157.tar.gz" in handbook
    assert "0.1.0-alpha.127" not in handbook
    assert "0.1.0-alpha.157" in checklist


def test_human_test_handbook_covers_recent_browsing_and_review_surfaces():
    handbook = read("docs/human-test-handbook.md")

    required_phrases = [
        "home dashboard",
        "view-mode buttons",
        "details drawer",
        "Esc closes",
        "ArrowLeft/ArrowRight",
        "cover loading shimmer",
        "Cover unavailable",
        "weak-metadata cockpit",
        "metadata review workbench",
        "Review next conflict",
        "description-only search",
        "Custom collections",
    ]
    for phrase in required_phrases:
        assert phrase in handbook


def test_public_docs_avoid_removed_catalogue_chrome_copy():
    combined = "\n".join([
        read("docs/ux-concept.md"),
        read("docs/user-guide.md"),
        read("docs/human-test-handbook.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
    ])

    assert "One catalogue workspace for finding, browsing, acting on and reviewing publication files." not in combined
    assert "Compact / Gallery / Shelf" not in combined


def test_alpha_testing_docs_do_not_call_landed_views_absent():
    combined = "\n".join([
        read("docs/human-test-handbook.md"),
        read("docs/alpha-test-checklist.md"),
    ])

    stale_phrases = [
        "saved views, smart collections",
        "saved views, smart collections, shared/admin roots",
        "custom readers, annotations",
    ]
    for phrase in stale_phrases:
        assert phrase not in combined

    assert "Useful views and custom collections are part of the current test pass" in combined
    assert "shared/admin roots" in combined


def test_testing_docs_linked_from_readme_and_release_notes():
    readme = read("README.md")
    release = read("RELEASE.md")

    assert "docs/human-test-handbook.md" in readme
    assert "docs/alpha-test-checklist.md" in readme
    assert "human test handbook" in release.lower()
    assert "alpha-test-checklist.md" in release
