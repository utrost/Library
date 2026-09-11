from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def test_alpha_157_version_assets_and_release_contracts_are_aligned():
    assert "<version>0.1.0-alpha.157</version>" in read("appinfo/info.xml")
    assert '"version": "0.1.0-alpha.157"' in read("package.json")
    assert '"version": "0.1.0-alpha.157"' in read("package-lock.json")
    controller = read("lib/Controller/PageController.php")
    assert "library-main-0-1-0-alpha-157" in controller
    assert "library-vue-0-1-0-alpha-157" in controller
    assert (ROOT / "js/library-main-0-1-0-alpha-156.mjs").exists()
    assert (ROOT / "css/library-vue-0-1-0-alpha-156.css").exists()
    assert "v0.1.0-alpha.157" in read("CHANGELOG.md")


def test_alpha_157_app_store_readiness_names_only_the_current_candidate():
    readiness = read("docs/app-store-readiness.md")
    assert "Current candidate baseline: `0.1.0-alpha.157`" in readiness
    assert "Library alpha.157 was packaged and smoke-tested" in readiness
    assert "Exact-package alpha.157 install and live smoke evidence is complete." in readiness
    assert "Alpha.156 is the current source candidate." not in readiness
    assert "Exact-package alpha.157 install and live smoke evidence remains pending." not in readiness


def test_manual_cover_preflight_and_precedence_contracts_are_wired():
    validator = read("lib/Service/ManualCoverValidator.php")
    decoder = validator.index("($this->decoder)($content)")
    assert validator.index("inspectHeader($content)") < decoder
    assert validator.index("assertDimensions($header['width']") < decoder
    for marker in ("inspectJpeg", "inspectWebp", "VP8X", "VP8L", "Invalid JPEG segment length"):
        assert marker in validator

    controller = read("lib/Controller/CoverController.php")
    assert "$data !== null ? ''" in controller
    assert "coverUploadError=invalid" in controller
    assert "catch (ManualCoverValidationException)" in controller
    template = read("templates/item-detail.php")
    assert "coverUploadError" in template and 'role="alert"' in template


def test_uploaded_cover_data_is_authoritative_when_remote_url_is_empty():
    cover = read("lib/Controller/CoverController.php")
    page = read("lib/Controller/ItemPageController.php")
    assert cover.index("coverOverrideData") < cover.index("findFileIdForItem")
    assert "$manualCoverUrl !== ''" in page
    assert "library.cover.show" in page
