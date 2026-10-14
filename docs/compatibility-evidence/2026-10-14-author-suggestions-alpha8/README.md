# Alpha.8 preferred-author suggestion verification

Candidate: `0.3.0-alpha.8` development source. This is not the signed App Store archive.

The focused fixture has two real EPUB catalogue records credited to John Doe. It renames the linked identity to John Preferred with sort name Doe, John, then checks that a `Doe` prefix suggests John Preferred, a `John` prefix includes both the preferred name and source credit, language filters constrain suggestions, selecting John Preferred finds both books, and original credits stay John Doe. Run with `NC_CONTAINER=<container> node scripts/smoke-author-preferred-suggestions.mjs` after deploying the candidate; the account is removed afterward.

| Nextcloud | Database | Focused fixture |
| --- | --- | --- |
| 33.0.9 | SQLite, fresh | Pass; service, Chromium and Firefox picker |
| 34.0.4 | SQLite, fresh | Pass on final alpha.8 candidate; service fixture |
| 35.0.0 | SQLite, fresh | Pass; service, Chromium and Firefox picker |
| 34.0.3 | MariaDB, populated developer upgrade | Pass; service, Chromium and Firefox picker |

On the 107,717-book developer catalogue, `scripts/performance/author-suggestions.php` measured five warm `Joh` calls: 155.11 ms median without filters and 160.20 ms with language `en`. The largest observed warm calls were 345.31 ms and 988.55 ms respectively while other checks were running. The account had 97,309 author identities and 142,527 book–author links. These are CLI service timings, not browser network latency. A direct `LIKE` experiment reduced the two medians to 130.49 ms and 145.92 ms, but changed Unicode search behavior; the candidate retains the Unicode-aware query. A dedicated author search index is the next performance option if autocomplete latency becomes troublesome.

Browser screenshots are in `/tmp/library-alpha8/nc33-suggestions/`, `/tmp/library-alpha8/nc35-suggestions/` and `/tmp/library-alpha8/developer-suggestions/`. The three disposable instances were removed. The developer instance is on alpha.8; after fixture cleanup it still has 107,717 books and no author fixture accounts. The complete signed-package NC33–35 fresh/upgrade matrix remains a release requirement.

The final repository gate passed 1,046 Python tests, 532 Vitest tests, the 1,045-key translation inventory, production build, module closure and Markdown links. The NC34 focused fixture also passed on the final alpha.8 version; the final two-browser picker check ran on NC33, NC35 and the populated NC34 developer instance.
