from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_filename_parser_handles_real_sample_with_middle_initial_author_suffix():
    extractor = read("lib/Metadata/FilenameMetadataExtractor.php")

    assert "Real-00123-2001_A_Space_Odyssey_Arthur_C_Clarke_z-lib.org" in extractor
    assert "threeTokenCreatorPattern" in extractor
    assert "Arthur C Clarke" in extractor
    assert "2001 A Space Odyssey" in extractor


def test_filename_parser_keeps_two_author_hyphen_pattern_split_for_four_name_tokens():
    extractor = read("lib/Metadata/FilenameMetadataExtractor.php")

    assert "Photography__Night_Sky__A_Field_Guide_for_Shooting_After_Dark_-_Jennifer_Wu_James_Martin" in extractor
    assert "Jennifer Wu; James Martin" in extractor
    assert "normalizeCreatorList" in extractor


def test_docs_track_middle_initial_real_sample_hardening():
    readme = read("README.md")
    roadmap = read("docs/roadmap.md")
    guide = read("docs/user-guide.md")

    assert "middle-initial filename authors" in readme
    assert "middle-initial filename authors" in roadmap
    assert "middle-initial filename authors" in guide
