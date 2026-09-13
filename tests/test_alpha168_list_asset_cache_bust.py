from pathlib import Path
import json
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]


def read(path: str) -> str:
    return (ROOT / path).read_text()


def test_main_template_and_vite_define_report_the_alpha168_app_version():
    assert 'data-library-version="0.1.0-alpha.168"' in read("templates/main.php")
    assert "appVersion: JSON.stringify('0.1.0-alpha.168')" in read("vite.config.js")


def test_list_view_asset_path_is_cache_busted_after_alpha168_deploy():
    """List view shipped after alpha.168 assets were already cached as immutable on phones."""
    controller = read("lib/Controller/PageController.php")
    app = read("src/App.vue")
    assert 'data-library-view-mode="list"' in app

    script = re.search(r"VUE_SCRIPT_ASSET = '([^']+)'", controller).group(1)
    style = re.search(r"VUE_STYLE_ASSET = '([^']+)'", controller).group(1)

    assert script != "library-main-0-1-0-alpha-168"
    assert style != "library-vue-0-1-0-alpha-168"
    assert script == "library-main-0-1-0-alpha-168-filterux"
    assert style == "library-vue-0-1-0-alpha-168-filterux"
    assert f'data-library-main-script="{script}"' in read("templates/main.php")
    assert (ROOT / f"js/{script}.mjs").exists()
    assert (ROOT / f"css/{style}.css").exists()
    built_script = read(f"js/{script}.mjs")
    built_style = read(f"css/{style}.css")
    assert '"data-library-view-mode": "list"' in built_script
    assert 'name: "publicationSearch"' in built_script
    assert "publicationSuggestionsUrl" in built_script
    assert 'id: "library-shelves"' not in built_script
    assert "library-shelf-tree" in built_style
    assert "library-periodical-groups" not in built_script
    assert "Choose series" not in built_script
    assert "library-publication-suggestions" in built_style
    assert "setViewMode('list')" in app
    assert "@media(max-width:520px)" in built_style
    assert ".library-cover-gallery--shelf{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-flow:row;overflow-x:visible;scroll-snap-type:none}" in built_style


def test_release_packaging_uses_page_controller_wired_assets(tmp_path):
    controller = read("lib/Controller/PageController.php")
    script = re.search(r"VUE_SCRIPT_ASSET = '([^']+)'", controller).group(1)
    style = re.search(r"VUE_STYLE_ASSET = '([^']+)'", controller).group(1)

    manifest = subprocess.run(
        [
            "node",
            "--input-type=module",
            "--eval",
            "import { releaseFrontendFiles } from './scripts/release-frontend-manifest.mjs'; "
            "console.log(JSON.stringify(releaseFrontendFiles('0.1.0-alpha.168')))",
        ],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    frontend_files = json.loads(manifest.stdout)
    assert f"js/{script}.mjs" in frontend_files
    assert f"css/{style}.css" in frontend_files
    assert "js/library-main-0-1-0-alpha-168.mjs" not in frontend_files
    assert "css/library-vue-0-1-0-alpha-168.css" not in frontend_files

    stage = tmp_path / "library"
    (stage / "js").mkdir(parents=True)
    (stage / "css").mkdir()
    for relative in frontend_files:
        path = stage / relative
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("release asset", encoding="utf-8")
    stale_script = stage / "js/library-main-0-1-0-alpha-168.mjs"
    stale_style = stage / "css/library-vue-0-1-0-alpha-168.css"
    stale_script.write_text("Genre", encoding="utf-8")
    stale_style.write_text("Genre", encoding="utf-8")

    subprocess.run(
        ["node", "scripts/stage-release-frontend.mjs", str(stage), "0.1.0-alpha.168"],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    assert (stage / f"js/{script}.mjs").exists()
    assert (stage / f"css/{style}.css").exists()
    assert not stale_script.exists()
    assert not stale_style.exists()

    audit = read("scripts/audit-release-package.sh")
    assert "VUE_SCRIPT_ASSET" in audit
    assert "VUE_STYLE_ASSET" in audit
    assert "library-main-{re.sub" not in audit
    assert "library-vue-{re.sub" not in audit
