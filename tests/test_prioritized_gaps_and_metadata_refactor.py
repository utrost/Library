from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_roadmap_prioritizes_gaps_after_real_1k_pilot():
    roadmap = (ROOT / "docs" / "roadmap.md").read_text()

    assert "## Prioritized v0.1 gap stack after the 1k real-corpus pilot" in roadmap
    assert "P0 — Keep metadata quality work safe: split the extractor seam" in roadmap
    assert "P1 — Metadata correction workflow" in roadmap
    assert "P2 — Metadata portability" in roadmap
    assert "P3 — Scan lifecycle repair controls" in roadmap
    assert "P4 — Cover quality path" in roadmap
    assert "P5 — Discovery by publication structure" in roadmap
    assert "P6 — Root/onboarding/shared-library polish" in roadmap
    assert "Real-corpus filename hardening landed" in roadmap
    assert "FilenameMetadataExtractor" in roadmap
    assert "PdfInfoMetadataExtractor" in roadmap
    assert "OpfEpubMetadataExtractor" in roadmap
    assert "CbzComicInfoMetadataExtractor" in roadmap
    assert "This refactor is now complete" in roadmap


def test_user_guide_exposes_prioritized_next_gaps():
    guide = (ROOT / "docs" / "user-guide.md").read_text()

    assert "## Prioritized next gaps after the 1k real-corpus pilot" in guide
    assert "1. Keep metadata-quality work safe by splitting the extractor seam" in guide
    assert "2. Improve the metadata correction workflow" in guide
    assert "3. Make corrected metadata portable back into a fresh install or files" in guide
    assert "4. Add repair-oriented scan lifecycle controls" in guide


def test_metadata_extraction_has_a_filename_extractor_adapter_boundary():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()
    adapter = ROOT / "lib" / "Metadata" / "FilenameMetadataExtractor.php"

    assert adapter.exists()
    adapter_text = adapter.read_text()
    assert "final class FilenameMetadataExtractor" in adapter_text
    assert "public function extract(File $file): array" in adapter_text
    assert "stripRealCorpusNoise" in adapter_text
    assert "parseTrailingCreatorCandidate" in adapter_text
    assert "Volume 71" in adapter_text
    assert "new FilenameMetadataExtractor()" in service
    assert "->extract($file)" in service


def test_publication_metadata_service_stays_as_facade_not_filename_parser_owner():
    service = (ROOT / "lib" / "Metadata" / "PublicationMetadataService.php").read_text()

    forbidden_helpers = [
        "private function extractFilenameMetadata",
        "private function stripArchiveNoise",
        "private function stripRealCorpusNoise",
        "private function parseTrailingCreatorCandidate",
    ]
    for helper in forbidden_helpers:
        assert helper not in service
