import sqlite3
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_catalogue_page_is_distinct_when_one_item_has_multiple_identifiers():
    db = sqlite3.connect(":memory:")
    db.executescript(
        """
        CREATE TABLE library_items (id INTEGER PRIMARY KEY, title TEXT);
        CREATE TABLE library_item_identifiers (item_id INTEGER, scheme TEXT, normalized_value TEXT);
        INSERT INTO library_items VALUES (29486, 'Der letzte Wunsch');
        INSERT INTO library_item_identifiers VALUES (29486, 'issn', 'invalid-one');
        INSERT INTO library_item_identifiers VALUES (29486, 'isbn', 'invalid-two');
        INSERT INTO library_item_identifiers VALUES (29486, 'isbn', '9783423262144');
        """
    )

    joined_rows = db.execute(
        "SELECT i.id, i.title FROM library_items i "
        "LEFT JOIN library_item_identifiers idn ON idn.item_id = i.id"
    ).fetchall()
    distinct_rows = db.execute(
        "SELECT DISTINCT i.id, i.title FROM library_items i "
        "LEFT JOIN library_item_identifiers idn ON idn.item_id = i.id"
    ).fetchall()

    assert len(joined_rows) == 3
    assert distinct_rows == [(29486, "Der letzte Wunsch")]

    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text(encoding="utf-8")
    catalogue_builder = service.split(
        "private function catalogueQueryBuilder", 1
    )[1].split("private function catalogueFilteredQueryBuilder", 1)[0]
    filtered_builder = service.split(
        "private function catalogueFilteredQueryBuilder", 1
    )[1].split("private function countCatalogueItems", 1)[0]

    assert "$qb->selectDistinct($columns)" in catalogue_builder
    assert "IdentifierService::normalizeSearchQuery" in filtered_builder
    assert "if ($identifierSearch !== null)" in filtered_builder
    assert filtered_builder.index("if ($identifierSearch !== null)") < filtered_builder.index(
        "->leftJoin('i', 'library_item_identifiers', 'idn'"
    )


def test_identifier_search_keeps_normalized_isbn_issn_predicate():
    service = (ROOT / "lib" / "Service" / "ItemService.php").read_text(encoding="utf-8")

    assert "idn.scheme" in service
    assert "idn.normalized_value" in service
    assert "IdentifierService::normalizeSearchQuery($query)" in service
