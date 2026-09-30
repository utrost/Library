from release_metadata import CURRENT_VERSION, CURRENT_ASSET_VERSION
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def test_alpha_157_version_assets_and_release_contracts_are_aligned():
    assert f"<version>{CURRENT_VERSION}</version>" in read("appinfo/info.xml")
    assert f'"version": "{CURRENT_VERSION}"' in read("package.json")
    assert f'"version": "{CURRENT_VERSION}"' in read("package-lock.json")
    controller = read("lib/Controller/PageController.php")
    assert f"library-main-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v4" in controller
    assert f"library-vue-{CURRENT_ASSET_VERSION}-compact-list-table-cover-96-fit-v4" in controller
    assert (ROOT / "js/library-main-0-1-0-alpha-156.mjs").exists()
    assert (ROOT / "css/library-vue-0-1-0-alpha-156.css").exists()
    assert "v0.1.0-beta.1" in read("CHANGELOG.md")


def test_app_store_readiness_distinguishes_current_source_from_alpha_159_evidence():
    readiness = read("docs/app-store-readiness.md")
    assert f"Current candidate baseline: `{CURRENT_VERSION}`" in readiness
    assert "Library alpha.159 passed its full local gate, unsigned package build/audit, and exact-package smoke" in readiness
    assert "Alpha.159 exact-package/live evidence is complete" in readiness
    assert "Alpha.158 rehearsal evidence:" in readiness
    assert "Alpha.156 is the current source candidate." not in readiness
    assert "Exact-package alpha.158 install and live smoke evidence remains pending." not in readiness


def test_manual_cover_preflight_and_precedence_contracts_are_wired():
    validator = read("lib/Service/ManualCoverValidator.php")
    decoder = validator.index("($this->decoder)($content)")
    assert validator.index("inspectHeader($content)") < decoder
    assert validator.index("assertDimensions($header['width']") < decoder
    for marker in ("inspectJpeg", "inspectWebp", "VP8X", "VP8L", "Invalid JPEG segment length"):
        assert marker in validator

    controller = read("lib/Controller/CoverController.php")
    assert "if ($data !== null)" in controller
    assert "coverUploadError=remote-url-disabled" in controller
    assert "coverUploadError=invalid" in controller
    assert "catch (ManualCoverValidationException)" in controller
    template = read("templates/item-detail.php")
    assert "coverUploadError" in template and 'role="alert"' in template


def test_uploaded_cover_data_is_authoritative_and_detail_route_is_local():
    cover = read("lib/Controller/CoverController.php")
    page = read("lib/Controller/ItemPageController.php")
    assert cover.index("findUserFileById") < cover.index("coverOverrideData")
    assert cover.index("coverOverrideData") < cover.index("previewManager->isAvailable")
    assert "unset($item['coverOverrideUrl'])" in page
    assert "library.cover.show" in page
