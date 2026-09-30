"""SQLite aggregate expressions do not coerce bound text to numbers."""
from pathlib import Path
import sqlite3


def test_duplicate_group_threshold_is_bound_as_an_integer():
    with sqlite3.connect(":memory:") as db:
        db.execute("CREATE TABLE keys (match_key TEXT)")
        db.executemany("INSERT INTO keys VALUES (?)", [("same",), ("same",), ("unique",)])
        query = "SELECT match_key FROM keys GROUP BY match_key HAVING COUNT(*) > ?"
        assert db.execute(query, ("1",)).fetchall() == []
        assert db.execute(query, (1,)).fetchall() == [("same",)]
    source = (Path(__file__).parents[1] / "lib/Service/DuplicateService.php").read_text()
    assert "->having($q->expr()->gt($q->func()->count('*'),$q->createNamedParameter(1,IQueryBuilder::PARAM_INT)))" in source
