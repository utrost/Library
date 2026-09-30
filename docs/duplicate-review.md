# Finding possible duplicate books

Available in **0.2.0-alpha.20**, under **Review → Possible duplicates**, in the catalogue and in its metadata sidebar.

## Suggestions while browsing

1. Open **Review → Possible duplicates** and enable **Show possible duplicates while browsing**. The same setting is available in Library settings. It is off by default; it is enabled on the developer account for this trial.
2. Wait for the metadata index to finish. You can browse while it builds; suggestions can be incomplete during this time. If indexing fails, switch the setting off and on to rebuild it.
3. Catalogue pages check up to 100 visible books in one background request. A **Possible duplicates** badge opens the candidate comparisons. Opening a book's **Metadata** sidebar checks that book and shows links to its possible copies.
4. Review the evidence and choose **Prefer this copy**, **Keep both** or **Dismiss match**. These decisions suppress unchanged suggestions. Open the same comparison link to reset a decision.

Checks use normalized title/author keys and valid ISBNs, including matches across formats. They never read book contents or infer identical files from size. A file with entirely different metadata can be missed; use the explicit content comparison below when necessary. Metadata edits and normal scans update the index incrementally. Relevant metadata changes can make a reviewed pair appear again.

No suggestions means **no unreviewed suggestions found**, not proof that a book is unique. Very broad keys (more than 50 books), per-book candidate limits (100), result limits (20) and an unfinished index produce partial results. Browse again or reopen the sidebar after the initial build finishes. Manual filtering and sorting remain available.

Disabling suggestions stops automatic checks and incremental updates. It retains the derived index and review decisions; re-enabling rebuilds the index. Account deletion removes this private data. Manual review decisions created before alpha.20 remain in saved scans but are not backfilled into the new suggestion index, so those pairs may need reviewing once more.

Measured on **84,261 books**: around 26 ms median HTTP time for one book and 137 ms for 100 visible books, with about 161 MiB of database storage. Initial indexing has a noticeable temporary impact on catalogue requests. See the [measurement and verification report](compatibility-evidence/2026-09-27-opportunistic-duplicates-alpha20/README.md) for timings, limits and evidence.

## Run an explicit scan

1. Choose one **Library root**, or **All library roots** to look across roots.
2. Optionally enable **Compare file contents**. This reads equal-size candidates and can recognize renamed copies even when their catalogue metadata differs.
3. Select **Find possible duplicates**. You can leave the page: Nextcloud background jobs continue the scan. Reopen it under **Saved duplicate scans**.
4. Compare the two books: cover, title, authors, format, size, language, date, publisher, ISBN and location. **Details** opens the existing metadata view; **Open** opens the publication.
5. Choose **Prefer this copy**, **Keep both**, or **Dismiss match**. Filter by decision to revisit it, or select **Reset review decision**.

Help is available on the relevant labels by pointer, keyboard focus or touch. Errors, skipped checks and incomplete results remain visible.

**These actions do not delete, move, merge, hide or edit any book.** A preference records your private decision for this comparison; it does not change catalogue ordering. Lists, reading history and notes stay attached to their existing books.

## What constitutes a match?

| Reason shown | Meaning |
| --- | --- |
| Identical file contents | Both candidate files were read and their SHA-256 hashes matched. |
| Same ISBN | The catalogue contains the same valid ISBN for both books. |
| Same normalized title and authors | Case and punctuation are ignored. Author word order is normalized for comparison, so `Walter Mitty` and `Mitty, Walter` match. |
| Similar title and matching authors | A conservative title similarity threshold is met and the normalized author sets match. |

An EPUB and a PDF may represent the same work while having different contents and uses. Format, language, publication-year, publisher and conflicting ISBN differences are shown separately. A metadata match is a suggestion, not proof of identical content or edition.

Author normalization never edits stored names or splits authors on commas. Explicit author arrays remain separate identities. Rearranged names can still produce false positives; review the books before making a decision.

## Scope and persistence

- Only your indexed, currently accessible books participate. New files must first be scanned into Library. Other users' catalogues and decisions are not searched or exposed.
- A scan freezes its root identities, item ceiling and comparison metadata. Changed or inaccessible books cannot receive a decision from an old comparison; run another scan.
- Each comparison is an independent pair. Six copies may produce fifteen comparisons. This version does not infer a single merged work/edition group.
- Up to three scans are saved for seven days. Discarding a scan removes its results, not your books or review decisions.
- Decisions are reused across scans only for the same item identities and unchanged revisions. They remain until reset or account deletion, with a maximum of 10,000 saved decisions per account.
- Background execution depends on the instance's Nextcloud background-job runner. While this screen is open, progress requests also advance the scan. **Refresh results** retries after a temporary connection error.

## Deliberate limits

This is candidate discovery, not exhaustive full-text comparison or an edition database. It can miss unrelated filenames with no useful metadata when contents differ, pseudonyms, transliterations, very short misspelled titles, or titles with no shared lookup terms. It does not perform OCR, compare extracted PDF/EPUB text, consult online providers or automatically remove files.

Lookup uses valid ISBNs and normalized author/title keys; optional content checking also considers equal-size files. Limits keep work bounded:

- 100,000 indexed books and 500 roots per scan.
- First 50 books in an overly broad candidate bucket; 5,000 matching pairs or 100,000 candidate comparisons per scan. Reaching a comparison limit visibly marks results as partial.
- Content reads: 64 MiB per file, 512 MiB total per scan, with a cooperative time limit. Skipped checks are counted. Files that cannot be hashed may still have metadata matches.
- Ten comparison pairs per result page. A completed scan means the bounded heuristic finished; it does not certify that the library contains no other duplicates.

## Implementation and evidence

Private `library_dup_jobs`, `library_dup_books`, `library_dup_keys` and `library_dup_pairs` tables hold expiring scan state. `library_dup_choices` stores revision-bound decisions. Account deletion removes all five tables' owned records and queued duplicate jobs. Expired snapshots are removed in bounded maintenance chunks. POST endpoints require normal Nextcloud authentication and CSRF protection; reads and decisions recheck ownership and live source access.

See the [developer 34 verification report](compatibility-evidence/2026-09-26-duplicates-alpha19/README.md). Nextcloud 33/35 and other database providers have not been rerun for this slice.
