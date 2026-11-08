# Curation and Nextcloud integration — alpha.6 source contract

Status: installed development build, 2026-11-08. The installed development checkpoint is **0.4.0-alpha.6**, and the Store release remains **0.3.0**. Focused signed-package checks do not constitute release certification. See [implementation status](0.4-implementation-status.md) for outstanding acceptance.

## Review and organise

Open **Review and organise** from the sidebar, or **Organise selected books** from a catalogue selection or personal list. Collections use the same filtered catalogue selection. Jobs never expand the selected IDs.

- Incoming books are grouped by shelf and their first-indexed UTC date. These are indexing-day batches, not a claim that every book came from one scanner invocation. The original file record preserves membership during rescans. Removing and reimporting a file creates a new membership.
- Done and one-day defer decisions are private and bound to the saved metadata revision. A changed revision returns the book to review. The view examines 50 records at a time; a filtered window can be empty while older matching books remain. Next continues the search. Back from Details preserves the batch, filter and cursor.
- Selected books can enter provider lookup or bulk organisation. Details exposes existing name, language, genre and scanner-review controls. No fuzzy merge or duplicate deletion happens automatically.
- Organisation supports ordered author and genre add/remove/replace, series replacement/removal, series part, languages and publisher. Empty replacement values explicitly clear the selected field. Typeahead starts at three letters.
- A job accepts up to 5,000 IDs, prepares before/after rows, and waits for explicit approval. Individual rows can be skipped and included again before approval. Review rows show account-owned names, and failed rows explain missing prerequisites or changed books. Background workers apply one book transaction at a time; pause, resume, cancellation and partial conflicts are durable. Up to 20 current jobs are retained per account for 90 days.
- Revisions, canonical relationships and source identity/etag are checked again at Apply. Conditional Undo refuses later edits or changed files. Publication files are untouched by organisation.

## Change history

Details groups new change history, existing provider receipts and linked notes. New imports, scanner acceptance, manual changes, paths, provider acceptance, personal status, covers and entity operations have source labels. Source-file write outcomes are separate evidence: a failed write is not shown as a successful metadata change.

New history is private, paginated in groups of 30 and retained for 180 days. New metadata-history evidence commits in the mutation transaction. Ordinary manual/organisation Undo checks the saved after-state and the live source revision, including Files changes that the scanner has not reconciled yet. Provider and entity operation journals remain the authority for their respective Undo; imported evidence cannot recreate an old Undo authorization. Existing history before this implementation is not retroactively invented. Cover binaries and provider credentials are not stored in the new history table.

## Portable curation archives

**Curation archives** prepares a version 2 NDJSON archive in the background. Source IDs are archive-local references, never destination authorization. Exports capture records as the worker visits them; pause editing during export if a consistent account backup is required. This is not a transactional database snapshot. Export refuses pending or failed author/series indexing so it cannot silently omit assignments. Let background indexing finish and resolve indexing errors before retrying. A restore interrupted by author indexing pauses with an explicit reason and retains completed records.

Included:

- Corrected publication fields, personal values, canonical relationships and removed-genre decisions; manual cover overrides.
- Author profiles/portraits, series profiles, genre hierarchy and identity redirects.
- Ordered reading lists, entry notes and unavailable-entry titles; saved collections.
- Saved extraction patterns, folder rules, approved language/genre/value mappings, provider selection and Home preferences.
- Linked-note paths/file-size evidence and the retained shared change-history projection.

Excluded:

- Publication and note file contents, credentials, sharing grants, provider search caches and active jobs.
- Original provider/author/series Undo journal payloads and their retained binary backups. The new shared-history projection preserves recorded changes but is not a replacement for those operation-specific recovery tokens.
- Incoming review queue state, scanner caches, diagnostic snapshots and server/administrator settings.

Each account can retain three archive jobs for seven days. The serialized archive is capped at 1 GiB, including JSON framing and a reserved manifest allowance; serialized records are capped at 15 MB. Imported history payloads have a separate 512 KiB bound. Review data is limited to 128 KiB per record so a page cannot expand to the whole archive size: oversized reviews become explicit conflicts before approval and are not applied. Downloads stream rows; browser uploads stream lines in bounded batches. Reopen an uploading job and choose the same archive to resume; identical records are idempotent even at quota, while changed records are rejected. A zero-record archive completes without changes. Deletion schedules bounded background cleanup. An unexpected worker failure pauses restore with its ready row intact; Resume retries after the cause is resolved. Size-limit failures explain that retrying cannot raise the limit. Expected record conflicts do not stop independent rows.

Restore stages everything before approval. Books match an existing, owned, readable destination file by exact path and size; Apply rechecks file identity, etag, saved revision and relationships. Missing/ambiguous/changed matches are conflicts, never guessed replacements. Use the review to inspect named assignments and cover removal, skip rows or include them again; dependent records also fail if a required identity or book was skipped. Restore files to their intended destination paths and scan them before preparing another restore when matching fails. Manual per-record path remapping is not implemented.

Profiles/lists receive new destination IDs; equivalent genres can be reused without moving an existing custom hierarchy. Collections and folder rules resolve an existing destination shelf by its path; missing shelves conflict rather than widening a filter. Folder rules resolve current root/folder file IDs. Note links resolve an existing readable document; note contents require Files backup. Unavailable list entries remain unavailable instead of retaining potentially unrelated source IDs. Restored history is evidence only. Changed restored fields retain bounded original source evidence after validation. The destination owns every new identity and history record; source account IDs never become destination permissions. An explicit empty cover override removes a destination override only after review. Identical-value evidence alone does not replace destination provenance.

A curation archive complements a Files and database backup. It does not restore access grants or recover deleted source files.

## Genres and classifications

A genre can have one optional parent, up to eight levels. Moves reject cycles and stale tree revisions; a move is limited to 2,000 descendants. Browsing a parent includes descendant assignments and counts distinct books. Assigning a child does not add redundant parent chips. A used genre or one with children cannot be deleted.

The optional English starter vocabulary is deliberately small. It draws on the user-supplied list of writing genres as naming input, with original short labels and no copied descriptions. It is not an authoritative literary taxonomy. Existing equivalent custom genres are reused without renaming or reparenting them. Users retain custom names and can edit the resulting hierarchy. Vocabulary review date: 2026-11-08.

Classifications support LCC, DDC, UDC, RVK, BK, ASB and free-form values. Store explicit `SCHEME: notation — description` values; preserve imported strings without guessing a scheme. Typeahead reuses the account's existing values. Official scheme links provide further guidance; no licensed classification schedules are bundled or silently queried. Countries do not map one-to-one to schemes.

## Explicit EPUB write-back

Source-file writes require writable **local filesystem storage**. Nextcloud remote and encrypted storage are refused before opening a writable stream, including when a mount changes after preview. They remain readable and editable as Library metadata. A seekable remote stream may only upload its temporary bytes on close, which is insufficient for this workflow’s verified write/rollback contract.

This approved workflow supersedes the earlier blanket deferral of in-file write-back. Ordinary Save, scanning, provider acceptance and organisation still change Library data only. **Write metadata to file** is a separate explicit preview and confirmation.

The first implementation supports ordinary EPUB 2/3 on writable local filesystem storage, up to 128 MiB, 10,000 ZIP entries and 2 MiB package XML. Supported fields: title, ordered authors, publisher, languages, publication date, description, subjects and valid ISBN/ISSN/ASIN/GGKEY identifiers. Existing publication identifiers are preserved; reviewed identifiers are added. Private ratings, reading state, notes, covers, series, genre hierarchy and classifications are not written.

The writer stages an original and candidate, edits only selected OPF metadata and EPUB 3 modification time, and checks the resulting metadata and unchanged ZIP entries. DRM/encryption, signatures, rights files, multiple renditions and unsupported field refinements are rejected. The error identifies the affected field; deselect it to preserve its original metadata. PDF, CBZ and adjacent OPF/JSON write-back are not implemented.

A preview expires after 15 minutes. Apply revalidates source file ID, etag, metadata revision and hash before changing bytes on an exclusively locked `r+` stream. It validates both staged candidate and original hashes before touching the live source, then verifies the written hash; failure attempts rollback on that same stream only with a verified original. Unexplained bytes are never overwritten by a retry. Source changes enter scan reconciliation, with an explicit pending-refresh warning if reconciliation fails.

Up to five original/candidate pairs are retained per account (at most 1.25 GiB). Successful/resolved backups last seven days and can be downloaded or explicitly removed. An unresolved writing/recovery state retains its original; deletion is blocked until resolved. Download the original for manual recovery when the current source cannot safely be identified. Conditional Restore original requires the expected written bytes and never silently replaces a newer file. Library's account-cleanup handler removes its recovery storage and leaves Files contents alone. Nextcloud's account-deletion process controls removal of the account's Files.

Disposable EPUB round-trip, stale/replaced-source, competing-lock and injected receipt-failure recovery checks have passed on local fixture storage; see the [verification record](curation-alpha6-verification.md). Focused exact signed-package checks and developer deployment are recorded there. Remote/encrypted source writes remain refused; broader reader and release acceptance are still open.

## Nextcloud integrations

- Linked notes are ordinary readable `.md`/`.txt` Files documents, with stable file IDs. Create a reading note or browse to attach one; unlinking or deleting the book never deletes the document. Text/Notes enablement is detected, with Files as the opening fallback. History and notes load independently: a note failure does not hide history, and unavailable notes reveal no stale file name or URL. At most 100 links/book and 200 displayed picker entries; the current Files API directory listing can still enumerate a large directory internally.
- Unified Search provides owned books and canonical authors after three characters, at most 20 results/page. It uses local catalogue data and never calls metadata providers.
- Smart Picker uses that search and resolves same-instance current-editor links. Title/cover previews recheck the current user's live source access and use account/revision-specific cache keys. Copying a link grants no access. Recipient/shared-library selection and public previews are not included.
- The native Dashboard widget combines Up next with recent Open events, with live source checks and a 12-book maximum. Open events are not reading progress or a saved reading position.
- Library Home offers configurable recently added/edited, finished, rediscovery, chosen-list Up next and health cards. Removing its selected list falls back to To-read books, including the native Dashboard widget. Card data is batched. Exact health counts run in cron, with a dated snapshot and explicit refresh-pending state; Home does not block on those counts. Links lead to missing-details, missing-files, scanner suggestions and duplicate review. Organisation jobs link back to their queue.

Background cleanup and the two curation workers have separate failure handling. A failed expired-backup cleanup cannot block an unrelated organisation or archive job. Work remains bounded per cron pass.

All new application controls have English/German strings. New Arabic translation/UI work is excluded; previously shipped Arabic remains with English fallback for new labels.

## Upgrade and rollback

`Version000400Date20261108100000` adds curation/history/note/inbox/write-back/archive tables, genre ancestry and indexes. It adds nullable unavailable titles and nullable book/file references for imported unavailable list entries. The XML reference is updated. Focused populated source-upgrade, physical-schema and idempotent migration checks have run on disposable installations; see the [environment matrix](curation-alpha6-verification.md). These checks do not certify an exact signed release archive.

Back up the database, appdata and Files before installing a candidate. Nextcloud app downgrades are not a rollback strategy. A rollback restores the pre-upgrade database and appdata with the matching old package. Explicit EPUB writes additionally require retained originals or Files backup; restoring only the database cannot undo file bytes. No migration rollback removes new personal data automatically.
