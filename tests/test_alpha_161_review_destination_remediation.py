from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def test_review_queues_have_one_exact_frontend_contract_for_destination_projection_and_hidden_fields():
    app = read("src/App.vue")
    assert "const reviewQueueDefinitions = Object.freeze([" in app
    assert "isCanonicalReviewFilter" in app
    assert "canonicalReviewFilters" in app
    assert "metadataReviewWorkbench" in app
    assert "reviewHiddenFilters" in app


def test_server_normalizes_every_review_queue_against_the_same_exact_map_and_rejects_arrays():
    controller = read("lib/Controller/PageController.php")
    policy = read("lib/Http/ReviewQueryPolicy.php")
    for key, value in {
        "needsMetadata": "1", "scannerConflicts": "1", "status": "metadata_error",
        "coverReview": "placeholder", "noCreator": "1", "noPublication": "1",
        "noDate": "1", "titleFromFilename": "1", "weakMetadata": "filename",
        "noDescription": "1", "unsupportedContainer": "1", "unreviewedImports": "1",
    }.items():
        assert f"'{key}' => '{value}'" in policy
    assert "is_array($value)" in policy
    assert "invalidKeysFromRequestUri" in controller
    assert "getRequestUri()" in controller
    assert "normalizeReviewFilter" in controller


def test_projection_uses_only_canonical_review_values():
    service = read("lib/Service/ItemService.php")
    assert "($filters['weakMetadata'] ?? '') === 'filename'" in service
    controller = read("lib/Controller/PageController.php")
    assert "($activeFilters['weakMetadata'] ?? '') === 'filename'" in controller
