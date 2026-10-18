# Author and series authority in 0.3

Library keeps two related records for each book. `library_items.creators`,
`authors_json`, `series_name`, and `series_number` are the book's **source
observation**, including any direct correction made in the book metadata editor.
`library_authors`/`library_item_authors` and
`library_series`/`library_item_series` are the **curated identity overlay**.
An identity edit, merge, or reassignment changes the overlay; it never silently
rewrites an EPUB, an OPF sidecar, or the source observation on the book.

| State | Book metadata editor, corrected-metadata JSON and sidecar proposals | Catalogue book credit and identity links | Identity page and ID filter | Free-text search, legacy creator filter and sort |
| --- | --- | --- | --- | --- |
| Synced | Source observation | Preferred author names; linked series name and part | Curated links | Source text/index and linked preferred/sort author names for free-text search; creator filter accepts both source credit and exact preferred identity name; sort remains source-based |
| Pending backfill | Source observation | Source credit; no new identity link until sync commits | Existing links are not treated as current | Source text/index; legacy filter remains available |
| Conflict after changed source | New source observation, with review candidate | Protected curated author/series links remain visible | Existing assignments remain authoritative until the user chooses a review action | Source text/index and linked preferred/sort author names find the book |
| Failed sync | Source observation | Source credit; no unverified identity projection | Existing links require retry/review | Source text/index |

The source observation is authoritative for **file-derived metadata, direct
per-book editing, corrected-metadata export/import, and scanner precedence**.
The overlay is authoritative for **identity pages, merges, reviewed assignments,
and ID-based filters**. Catalogue display uses the overlay only in synced or
conflict state; otherwise it shows the source credit. The source-based title,
creator, series and sort fields remain in the catalogue index until a later,
explicit migration. Free-text search also follows current author relationships
for preferred and sort-name substrings of at least three characters. Thus a
preferred author rename changes the displayed credit, author page, and general
search results immediately without rewriting source credits or reindexing every
linked book. The author ID filter remains the precise choice for homonyms. Full details shows the linked author identities above
the metadata form. **Change author** searches the account's normalized author
table and reassigns only this book through the preview-token workflow. The
**Source creator credits** field is under an advanced disclosure in the metadata
form. It changes the book's source observation, not the linked identity. Neither
action edits the source file.

## Examples that must keep working

1. **Merge:** “Doe, John” is merged into John Doe. Linked books show John Doe
   and appear on his author page. Each book's original “Doe, John” credit stays
   in its source metadata and corrected-metadata export. Exact preferred-name
   filtering finds the linked books.
2. **Manual reassignment:** A book credited “J. Doe” is assigned to Jane Doe.
   The source credit remains “J. Doe”; the curated link points to Jane Doe.
   An unchanged rescan keeps the assignment.
3. **Changed EPUB:** The EPUB credit changes after a manual assignment. The new
   source credit is stored, the manual link remains visible, and the book enters
   review. The user chooses whether to keep the link or follow the new source.
4. **Series conflict:** A book manually linked to “Mistborn” receives a changed
   imported series. The linked series stays visible in the catalogue and detail
   page while review is pending. The imported name stays editable as book
   metadata; resolving the conflict changes only the selected relationship.

No automatic similarity match merges identities. IDs are account scoped, and
book files remain owned by Nextcloud Files. See [author management](v0.3-author-management.md)
and [series management](v0.3-series-management.md) for operation and Undo rules.
