from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_doc(name: str) -> str:
    return (ROOT / "docs" / name).read_text()


def test_readme_links_product_concept_and_active_roadmap():
    readme = (ROOT / "README.md").read_text()
    assert "[Product concept](docs/product-concept.md)" in readme
    assert "[Active roadmap](docs/roadmap.md)" in readme
    assert "roots" in readme
    assert "file-ID-based index" in readme


def test_product_concept_preserves_core_boundaries():
    concept = read_doc("product-concept.md")
    required_phrases = [
        "Nextcloud-native catalogue",
        "Files are canonical",
        "Stable file IDs beat paths",
        "Publication type is not file format",
        "Readers render",
        "Metadata has provenance",
        "Explicit v0.1 non-goals",
    ]
    for phrase in required_phrases:
        assert phrase in concept

    assert "/f/{fileId}" in concept
    assert "Custom EPUB, PDF or comic rendering" in concept
    assert "OCR" in concept
    assert "Internet metadata lookup" in concept


def test_roadmap_starts_with_roots_and_file_index_before_metadata_polish():
    roadmap = read_doc("roadmap.md")
    assert "## Phase 1 — Roots and operational file index" in roadmap
    assert "## Phase 2 — Catalogue item model and metadata precedence" in roadmap
    assert "## Phase 3 — Format metadata and cover extraction" in roadmap
    assert "## Immediate next implementation slice" in roadmap

    phase1 = roadmap.index("## Phase 1 — Roots and operational file index")
    phase2 = roadmap.index("## Phase 2 — Catalogue item model and metadata precedence")
    phase3 = roadmap.index("## Phase 3 — Format metadata and cover extraction")
    assert phase1 < phase2 < phase3

    immediate = roadmap[roadmap.index("## Immediate next implementation slice") :]
    assert "library_roots" in immediate
    assert "library_files" in immediate
    assert "user-specific multi-root schema" in immediate
    assert "all enabled roots of the current user" in immediate
    assert "file ID, root and status" in immediate
    assert "Smoke it against Alice" in immediate


def test_v01_spec_requires_extendable_user_specific_root_configuration():
    spec = read_doc("v0.1-technical-spec.md")
    assert "schema and services must support multiple roots from the beginning" in spec
    assert "roots are user-specific in v0.1" in spec
    assert "backend must not assume a singleton" in spec
    assert "scanners should iterate all enabled roots for the current user" in spec
    assert "deduplicated by file ID" in spec
