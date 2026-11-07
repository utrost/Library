# Selected-book metadata lookup

Development implementation for [#186](https://github.com/utrost/Library/issues/186).
Included in the alpha.4 development package.

## Workflow

1. Select up to **50 books** on a catalogue page (including shelf and collection filters), or select available books on a personal-list page.
2. Choose **Find book details**. Select an enabled provider, fields and an update policy. **Fill missing fields** is the default. The last provider chosen for a batch is remembered for that account.
3. Choose **Find matches** to authorize the provider searches. Opening the screen alone sends no provider request.
4. Leave the page if desired. **Review and cleanup → Book detail lookups** reopens saved runs. Background processing uses Nextcloud background jobs; completion depends on the server's cron schedule.
5. Review edition evidence, then choose **Review this edition**. Select individual before/after fields and choose **Apply now**, or **Apply selected fields** across the reviewed books. Neither searching nor selecting fields writes book metadata.
6. Applied rows stay in the queue. **Undo** restores the changed values only while the saved book revision and source identity still match the receipt. A later edit causes a conflict, rather than being overwritten.

Supported fields are title, subtitle, publisher, publication date, description,
subjects and valid ISBNs. Google Books also offers GGKEY. Existing identifiers
are retained when additional ones are approved. Subjects remain subjects.
Language and covers are not batch application fields in this iteration.

**Review replacements too** makes existing values available for explicit review;
it does not preselect or automatically replace them. An ISBN match is evidence,
not a guarantee of the correct edition. No match is automatically applied.

Pause stops new work until Resume. Cancel stops queued work permanently; an
already authorized provider request may finish and its result is retained.
Completed, reviewed suggestions can still be applied. Skip persists a decision.
Retry is available for failed, unmatched and skipped rows. A book changed since
lookup started needs a fresh run with a fresh snapshot.

## Storage, permissions and failure handling

- `library_lookup_jobs` holds an immutable selection of owned book IDs, saved
  revisions and file identities, query inputs, provider, field policy, per-row
  results/decisions and versioned Apply receipts. It is private account data.
- Authentication, CSRF and account ownership protect every API operation.
  Shared recipients cannot use another owner's catalogue IDs for lookup.
- Creation accepts at most 50 IDs, at most two running/paused jobs and 20
  retained runs per account. It checks readable source files before queuing.
- Workers claim one row with a five-minute lease. Provider I/O runs outside
  database transactions. Completion checks the lease token; a late worker cannot
  overwrite a reclaimed claim or a user's Skip decision.
- Existing provider adapters enforce provider configuration, fixed endpoints,
  bounded responses, account-scoped caching and cross-worker request pacing.
  A row has at most four attempts per explicit Retry. Transient failures use
  bounded exponential delays. No automatic provider fallback occurs.
- Apply locks the run and publication, checks the original file identity and
  revision, and rechecks the missing-field policy. It invokes the existing
  metadata writer, which updates manual protection and derived indexes.
  Book changes, source attribution and the receipt commit together.
- Bulk Apply uses independent transactions per book and returns per-book
  outcomes. A conflict or failure does not undo other successful books.
- Apply/Undo retries are idempotent. Undo retains manual-edit protection, while
  restoring the selected values and recorded field sources. It conservatively
  refuses reversal after any later metadata revision.
- Jobs, suggestions and receipts expire **30 days after creation**. Explicit
  Delete lookup removes them immediately, including Undo availability; applied
  book values remain. Account deletion also removes the jobs. Requests and
  provider errors are not logged with book titles, file paths or credentials.
- No source file is changed. Deleting a run does not undo applied metadata.

## Local verification

Use only the labelled disposable instance created by
`scripts/dev-lists-instance.sh`; never use an existing personal collection.

`tests/php/metadata_batch_integration.php` requires
`LIBRARY_DISPOSABLE_FIXTURE=1`. It creates 50 synthetic EPUBs, uses seeded provider
responses without external calls, and exercises ownership, limits, durable
results, pause/cancel, bounded retries, crash recovery, decisions during I/O,
selective/partial Apply, source provenance, idempotency and conditional Undo.
On SQLite it additionally injects a receipt-write failure to verify rollback of
the book changes. It leaves a synthetic run for browser tests.

`tests/gui/metadata/bulk-lookup.spec.ts` uses `PW_BASE_URL`, `PW_USER`,
`PW_PASSWORD`, and `PW_LOOKUP_JOB` from that fixture. Reseed between browser
projects because the journey intentionally applies, undoes and skips disposable
rows. Screenshots and environment files belong in ignored/local artifact paths.

Focused results are recorded in [first implementation verification](bulk-metadata-lookup-verification.md).

## Remaining acceptance work

Track these under #206–#209 and #211; this iteration does not close the full epic:

- Correct a query or explicitly switch provider for one row; no silent fallback.
- A conservative shortcut for selecting missing fields in strong matches.
- Broader Google Books batch fixtures, provider policy/retention review and
  quota-specific Retry-After behavior.
- Synthetic 100k catalogue timings, maximum payload/concurrency testing,
  interruption testing and populated upgrades across other supported databases.
- Manual screen-reader review and full dark/RTL visual inspection.

Provider covers (#210), normalized language suggestions (#212), and extending
source-aware receipts to the existing single-book staging workflow (#185) remain
separate work. Do not represent this focused verification as release certification.
