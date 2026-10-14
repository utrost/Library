"""Nextcloud quotes raw set() strings as column identifiers, including '1'."""
from pathlib import Path
import re


def test_author_pending_updates_bind_integer_values():
    source = Path('lib/Service/ItemService.php').read_text()
    assignments = re.findall(r"->set\('author_sync_status', ([^\n]+)", source)
    assert len(assignments) == 7
    for assignment in assignments:
        assert re.match(r"\$(?:qb|update)->createNamedParameter\(AuthorStorageService::PENDING, IQueryBuilder::PARAM_INT\)", assignment)
