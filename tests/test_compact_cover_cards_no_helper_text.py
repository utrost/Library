from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_compact_cards_do_not_show_helper_sentence_before_details():
    app = (ROOT / "src" / "App.vue").read_text()
    card = app.split('<article v-for="item in items"', 1)[1].split('</article>', 1)[0]
    before_details = card.split('<details class="library-cover-details">', 1)[0]

    assert "library-cover-quick-meta" not in before_details
    assert "Details for metadata and actions" not in before_details
