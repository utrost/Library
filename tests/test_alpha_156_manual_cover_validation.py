from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def test_manual_cover_controller_uses_bounded_validation_seam_before_persistence():
    controller = read("lib/Controller/CoverController.php")
    uploader = read("lib/Service/ManualCoverUploadService.php")

    validation = controller.index("validateUpload($upload)")
    persistence = controller.index("setManualCoverOverride(")
    assert validation < persistence
    assert "catch (ManualCoverValidationException)" in controller
    assert "return new RedirectResponse" in controller[validation:persistence]
    assert "is_uploaded_file" not in controller
    assert "file_get_contents" not in controller[controller.index("public function override"):controller.index("public function revert")]
    assert "MAX_BYTES + 1" in uploader
    assert "UPLOAD_ERR_OK" in uploader
    assert "is_uploaded_file" in uploader


def test_manual_cover_validator_contract_is_strict_and_canonical():
    validator = read("lib/Service/ManualCoverValidator.php")
    for marker in (
        "MAX_BYTES",
        "MAX_WIDTH",
        "MAX_HEIGHT",
        "MAX_PIXELS",
        "new \\OCP\\Image()",
        "loadFromData",
        "valid()",
        "mimeType()",
    ):
        assert marker in validator
    assert (ROOT / "lib" / "Service" / "ManualCoverValidationException.php").exists()
    assert "image/svg+xml" not in validator
    assert "['type']" not in validator


def test_alpha_156_release_assets_and_runtime_suite_are_wired():
    assert "<version>0.1.0-alpha.163</version>" in read("appinfo/info.xml")
    assert '"version": "0.1.0-alpha.163"' in read("package.json")
    assert '"version": "0.1.0-alpha.163"' in read("package-lock.json")
    assert (ROOT / "js/library-main-0-1-0-alpha-158.mjs").exists()
    assert (ROOT / "css/library-vue-0-1-0-alpha-158.css").exists()
    runner = read("scripts/run-php-runtime-tests.sh")
    assert "manual_cover_validator_test.php" in runner
    assert "manual_cover_controller_test.php" in runner
    assert "v0.1.0-alpha.163" in read("CHANGELOG.md")
