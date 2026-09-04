from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read_doc(name: str) -> str:
    return (ROOT / "docs" / name).read_text()


def test_readme_links_product_concept_and_active_roadmap():
    readme = (ROOT / "README.md").read_text()
    assert "[Product concept](docs/product-concept.md)" in readme
    assert "[Active roadmap](docs/roadmap.md)" in readme
    assert "[Metadata storage and Nextcloud integration](docs/metadata-storage.md)" in readme
    assert "comments" in readme
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


def test_roadmap_starts_with_roots_file_index_and_nextcloud_tags_before_metadata_polish():
    roadmap = read_doc("roadmap.md")
    assert "## Phase 1 — Roots and operational file index" in roadmap
    assert "## Phase 2 — Catalogue item model and metadata precedence" in roadmap
    assert "## Phase 2.5 — Nextcloud-native tags and comments" in roadmap
    assert "## Phase 3 — Format metadata and cover extraction" in roadmap
    assert "## Immediate next implementation slice" in roadmap

    phase1 = roadmap.index("## Phase 1 — Roots and operational file index")
    phase2 = roadmap.index("## Phase 2 — Catalogue item model and metadata precedence")
    phase25 = roadmap.index("## Phase 2.5 — Nextcloud-native tags and comments")
    phase3 = roadmap.index("## Phase 3 — Format metadata and cover extraction")
    assert phase1 < phase2 < phase25 < phase3

    immediate = roadmap[roadmap.index("## Immediate next implementation slice") :]
    assert "read-only Nextcloud tags/comments exposure" in immediate
    assert "tag assignment flow" in immediate
    assert "SystemTag APIs" in immediate
    assert "must not alter publication form/title/creator fields" in immediate
    assert "Library-native tag tables" in immediate


def test_v01_spec_requires_extendable_user_specific_root_configuration():
    spec = read_doc("v0.1-technical-spec.md")
    assert "schema and services must support multiple roots from the beginning" in spec
    assert "roots are user-specific in v0.1" in spec
    assert "backend must not assume a singleton" in spec
    assert "scanners should iterate all enabled roots for the current user" in spec
    assert "deduplicated by file ID" in spec


def test_metadata_storage_doc_defines_nextcloud_integration_boundaries():
    doc = read_doc("metadata-storage.md")
    assert "Library stores canonical publication metadata in its own app tables" in doc
    assert "Nextcloud system tags are used as a shared cross-archive classification layer" in doc
    assert "Nextcloud comments are exposed as file-level discussion/notes" in doc
    assert "recent comments" in doc
    assert "Nextcloud FilesMetadata can mirror selected Library summary fields later" in doc
    assert "Format adapters such as EPUB, PDF and CBZ must map into this general model" in doc


def test_v01_spec_records_metadata_storage_policy():
    spec = read_doc("v0.1-technical-spec.md")
    assert "## 3.1 Metadata storage policy" in spec
    assert "Nextcloud system tags are exposed as file-level cross-archive classification" in spec
    assert "File format is technical metadata; publication form/type is semantic metadata" in spec
