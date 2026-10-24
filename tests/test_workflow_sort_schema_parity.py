from pathlib import Path
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[1]


def test_workflow_sort_migration_is_declared_in_install_schema():
    schema = ElementTree.parse(ROOT / 'appinfo/database.xml').getroot()
    items = next(table for table in schema.findall('table') if table.findtext('name') == '*dbprefix*library_items')
    declaration = items.find('declaration')
    fields = {field.findtext('name'): field for field in declaration.findall('field')}
    rank = fields['workflow_sort_rank']
    assert rank.findtext('type') == 'smallint'
    assert rank.findtext('notnull') == 'true'
    assert rank.findtext('unsigned') == 'true'
    assert rank.findtext('default') == '7'
    indexes = {index.findtext('name'): index for index in declaration.findall('index')}
    assert [field.findtext('name') for field in indexes['library_items_usr_wfrank_title'].findall('field')] == [
        'user_id', 'workflow_sort_rank', 'title', 'id',
    ]
