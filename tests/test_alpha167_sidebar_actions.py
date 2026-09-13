from pathlib import Path
import re


APP = (Path(__file__).resolve().parents[1] / "src/App.vue").read_text()


def test_card_details_are_sidebar_first_and_file_open_is_distinct():
    assert '<button type="button" class="library-cover-link"' in APP
    assert '@click="openDetailsDrawer(item, $event)"' in APP
    assert 'class="library-cover-title-button"' in APP
    assert "library-cover-details\"" not in APP
    assert "{{ t('library', 'Open') }}" in APP


def test_secondary_actions_use_nextcloud_menu_and_keep_php_fallback():
    assert "import NcActions" in APP
    assert "import NcActionLink" in APP
    for label in ("Show in Files", "Download", "Maintenance (legacy)"):
        assert f"t('library', '{label}')" in APP


def test_sidebar_action_block_routes_contextual_actions_with_one_primary():
    match = re.search(r'<div class="library-detail-drawer-actions">(.*?)</div>', APP, re.DOTALL)
    assert match is not None
    actions = match.group(1)
    expected = [
        ('button primary', 'selectedDrawerItem.openUrl', 'Open'),
        (None, 'selectedDrawerItem.filesUrl', 'Show in Files'),
        (None, 'selectedDrawerItem.downloadUrl', 'Download'),
        (None, 'selectedDrawerItem.detailsUrl', 'Maintenance (legacy)'),
    ]
    assert actions.count('<a ') == 1
    assert actions.count('<NcActionLink ') == 3
    for classes, route, label in expected:
        if classes:
            assert f'class="{classes}" :href="{route}"' in actions
        else:
            assert f':href="{route}"' in actions
        assert f"t('library', '{label}')" in actions
