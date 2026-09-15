from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_server_rendered_detail_path_uses_canonical_open_url_with_plain_text_fallback():
    template = (ROOT / "templates/item-detail.php").read_text()

    assert "$fileOpenUrl = trim((string)($item['openUrl'] ?? ''));" in template
    assert "$label === 'path' && trim((string)$value) !== '' && $fileOpenUrl !== ''" in template
    assert 'href="<?php p($fileOpenUrl); ?>"' in template
    assert "trim((string)$value) !== '' ? (string)$value : '—'" in template
