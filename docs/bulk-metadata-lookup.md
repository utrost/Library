# Selected-book metadata lookup

Development implementation for [#186](https://github.com/utrost/Library/issues/186).
The initial workflow is deployed in alpha.4. The refinements described below are
unreleased source changes; see the [verification record](bulk-metadata-lookup-refinements.md).

## Workflow

1. Select up to **50 books** on a catalogue page (including shelf and collection filters), or select available books on a personal-list page.
2. Choose **Find book details**. Select an enabled provider, fields and an update policy. **Fill missing fields** is the default. The last provider chosen for a batch is remembered for that account.
3. Choose **Find matches** to authorize the provider searches. Opening the screen alone sends no provider request.
4. Leave the page if desired. **Review and cleanup → Book detail lookups** reopens saved runs. Background processing uses Nextcloud background jobs; completion depends on the server's cron schedule.
5. Review edition evidence, then choose **Review this edition**. Select individual before/after fields and choose **Apply now**, or **Apply selected fields** across the reviewed books. Neither searching nor selecting fields writes book metadata.
6. Use **Refine search** to correct ISBN/title/author or explicitly switch an enabled provider for one book. Submitting clears only that row’s old matches and approvals; typing alone sends nothing. A late old response cannot overwrite the new query.
7. Filter by review status; selected-book and field counts always cover the whole run. **Select missing fields from strong matches** only selects empty fields after an edition was chosen and exact ISBN/title/author evidence agrees. It never applies changes.
8. Applied rows stay in the queue. **Undo** restores the changed values only while the saved book revision and source identity still match the receipt. A later edit causes a conflict, rather than being overwritten.

Supported fields are title, subtitle, publisher, publication date, description,
subjects, normalized languages and valid ISBNs. Google Books also offers GGKEY. Existing identifiers
are retained when additional ones are approved. Subjects remain subjects.
Provider covers are not batch application fields in this iteration. Unknown
language codes remain evidence only; existing language sets are protected by
the missing-field policy. Replacing them requires explicit review.

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
  unarchived runs per account, with a 100-run total including retained receipts. It checks readable source files before queuing.
- Workers claim one row with a five-minute lease. Provider I/O runs outside
  database transactions. Completion checks the lease token and row review version; a late worker cannot
  overwrite a reclaimed claim or a user's Skip decision.
- Existing provider adapters enforce provider configuration, fixed endpoints,
  bounded responses, account-scoped caching and cross-worker request pacing.
  A row has at most four attempts per explicit Retry. Transient failures use
  bounded exponential delays and honor bounded Retry-After seconds/HTTP dates from 429 or 503 responses. Shared provider cooldowns prevent another account from immediately retrying the same provider. No automatic provider fallback occurs.
- Apply locks the run and publication, checks the original file identity and
  revision, and rechecks the missing-field policy. It invokes the existing
  metadata writer, which updates manual protection and derived indexes.
  Book changes, source attribution and the receipt commit together.
- Bulk Apply uses independent transactions per book and returns per-book
  outcomes. The browser submits at most ten approved rows per request, showing
  progress between requests; the request includes exact row IDs and review versions.
  A conflict or failure does not undo other successful books.
- Apply/Undo retries are idempotent. Undo retains manual-edit protection, while
  restoring the selected values and recorded field sources. It conservatively
  refuses reversal after any later metadata revision.
- Suggestions expire **30 days after creation**. Explicit
  Delete lookup removes suggestions immediately but retains applied-change
  receipts and conditional Undo for **90 days after application**. Receipt-only
  runs provide a separate **Delete receipts** action. Applied book values remain.
  Account deletion also removes the jobs. Requests and
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

Track the remaining work under #181–#186 and #206–#212:

- Provider-policy and attribution acceptance (#181); Open Library cover
  comparison/application (#210) and single-book provenance/Undo parity (#185)
  are installed in alpha.5. Google cover persistence remains unsupported.
- Broader matching/conflict explanations, Google-specific 403 quota responses,
  provider policy review and real external-service acceptance.
- Real concurrent-process load, populated upgrades and acceptance across the
  other supported Nextcloud/database versions. The synthetic MariaDB scale
  fixture is not a production browser or external-network latency benchmark.
- Manual screen-reader review and full dark/RTL visual inspection.

Normalized language suggestions and single-book provenance are implemented in
alpha.5; broader acceptance remains tracked in #212/#185. Do not represent
focused local verification as release certification.

## Development after alpha.5

Explicit **Other editions** browsing is described in [the edition contract](lookup-edition-browsing.md). The original matches remain available, while each bounded work-edition page runs through the background queue. Browsing clears that row's prior edition/cover approvals; other books are unchanged. This source change is not installed yet.
