from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_discovery_routes_allow_slashes_in_real_creator_and_publication_names():
    routes = (ROOT / "appinfo" / "routes.php").read_text()

    assert "'requirements' => ['creator' => '.+']" in routes
    assert "'requirements' => ['publication' => '.+']" in routes
