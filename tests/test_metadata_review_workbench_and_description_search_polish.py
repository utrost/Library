from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_vue_exposes_review_next_conflict_workbench_with_candidate_lanes():
    component = read("src/App.vue")

    assert "metadataReviewWorkbench" in component
    assert "library-metadata-review-workbench" in component
    assert "Review next suggestion" in component
    assert "Suggested value" in component
    assert "Path-based suggestion" in component
    assert "Sidecar value" in component
    assert "Source" in component
    assert "reviewConflictFieldsFor" in component
    assert "resetFieldUrl" in component


def test_review_workbench_actions_are_explicit_per_field_and_non_source_writing():
    component = read("src/App.vue")
    page = read("lib/Controller/PageController.php")

    assert "Use suggested value" in component
    assert "name=\"field\"" in component
    assert "name=\"returnTo\" value=\"catalogue\"" in component
    assert "Skip to next suggestion" in component
    assert "No source files are changed" in component
    assert "user-edited values are never silently overwritten" in component
    assert "resetFieldUrl" in page


def test_description_search_copy_and_backend_query_are_protected_together():
    component = read("src/App.vue")
    service = read("lib/Service/ItemService.php")
    smoke = read("scripts/smoke-vue-page.mjs")

    assert "Title, creator, description, filename or folder" in component
    assert "Search also checks descriptions" in component
    assert "(string)($row['description'] ?? '')" in service
    assert "source_has_primary_catalogue_controls" in smoke
    assert "backend_searches_description" in smoke


def test_vitest_docs_and_smoke_track_review_workbench_and_description_polish():
    test = read("src/App.test.js")
    smoke = read("scripts/smoke-vue-page.mjs")
    docs = "\n".join([
        read("README.md"),
        read("docs/user-guide.md"),
        read("docs/usefulness-and-ux-feature-list.md"),
        read("CHANGELOG.md"),
    ]).lower()

    assert "shows a review-next metadata workbench for scanner conflicts" in test
    assert "library-metadata-review-workbench" in test
    assert "review_has_suggestion_workbench_and_source_safety" in smoke
    assert "metadata review workbench" in docs
    assert "review next conflict" in docs
    assert "description search polish" in docs
