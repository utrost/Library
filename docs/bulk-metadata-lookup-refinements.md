# Bulk lookup refinements: focused verification

Date: 2026-11-07. Status: **unreleased source**, following deployed alpha.4.
No developer-instance deployment, App Store publication or full release gate is
represented by this record. All modified books and provider evidence were
synthetic and disposable. Public-provider requests: zero.

## Changes and checks

- Per-row query/provider refinement clears obsolete candidates and approvals.
  Row versions reject stale single/bulk approvals and late worker responses.
- Status filters, whole-run book/field counts, conservative exact-ISBN missing-field
  selection and responsive inline search preserve the review workflow.
- Browser bulk Apply sends ten explicitly approved/versioned rows per request,
  retaining partial outcomes and showing progress between requests.
- Suggestions expire after 30 days. Applied receipts survive deletion/expiry for
  90 days after application. Separate receipt deletion is explicit; Undo still
  checks saved revisions and source identities. Expiry prunes bounded indexed jobs.
- Both adapters normalize recognized language evidence through the existing
  language normalizer. Unknown codes remain non-applicable evidence. Batch Apply
  and Undo use the existing metadata writer and preserve existing language sets.
- 429 and 503 Retry-After values extend shared cooldowns. Tests cover seconds,
  HTTP dates, malformed/bounded delays, account isolation, disabled providers,
  malformed/oversized responses, redirect rejection and Google credential handling.

Backend integration passed on disposable **NC34.0.4 with SQLite and MariaDB**;
provider fault fixtures passed on both. SQLite additionally exercises atomic
rollback when receipt persistence fails. Extended fixtures cover corrected-query
races, stale approvals, provider-specific attribution, archived receipt Undo,
expiry, exact-ISBN selection, language aliases/regions/multiple/unknown values.

Playwright passed in desktop Chromium, desktop Firefox and mobile Chromium.
Journeys cover persisted selections, query form cancellation/submission, filter
changes, Apply/Undo, keyboard focus, Skip, Back, catalogue/list entry, stale-tab
rejection, retained receipts, private-job rejection, and eleven-book application
as ten plus one requests. No page errors or horizontal overflow were detected.
Desktop dark and mobile light/refinement screenshots were visually inspected;
artifacts remain local. A routing-parameter collision found by the first browser
run was fixed before the passing reruns.

## Synthetic scale measurement

Disposable NC34/MariaDB, one account with **100,000 catalogue records**: 50 real
synthetic source files plus 99,950 metadata-only background records. Each measured
run selects 50 real files. Eight long candidate records per book and 5,000-character
descriptions produce a **1,249,622-byte** review response. These are service timings,
not browser/network/cold-database or real-provider measurements.

| Operation | Median | Range | Samples |
| --- | ---: | ---: | ---: |
| Create 50-book run | 197 ms | 188–265 ms | 6 |
| Read 50-row status | 5.3 ms | 4.5–5.8 ms | 6 |
| History | 0.9 ms | 0.8–1.2 ms | 6 |
| Save field selection | 24.5 ms | 22.6–26.3 ms | 6 |
| Apply ten approved books | 494 ms | 454–537 ms | 30 |
| Undo fifty sequentially (fixture loop) | 2,150 ms | 2,078–2,204 ms | 6 |

An initial unchunked fifty-book Apply took approximately 2.4 seconds. Browser
requests now use ten-book chunks; total work still takes several seconds, with
progress after every chunk. Peak PHP allocation in the measured process was
46,612,480 bytes. The test covers large bounded responses but does not claim
maximum concurrent load or a production download-time bound.

## Reproduction and limits

- `tests/php/metadata_batch_integration.php`: disposable integration and browser
  fixture; reseed for every browser project. Exposes `jobId`, `bulkJobId`, `listId`
  in a local fixture file. Set `PW_LOOKUP_JOB`, `PW_LOOKUP_BULK_JOB`, `PW_LOOKUP_LIST`
  with the usual disposable browser credentials.
- `tests/php/metadata_provider_faults.php`: injected HTTP failures, no public calls.
- `tests/php/metadata_batch_scale.php`: run after integration on disposable MariaDB;
  adds metadata-only background rows. Do not rerun the 50-book fixture against the
  expanded catalogue. Destroy the disposable environment after measurement.
- `tests/gui/metadata/bulk-lookup.spec.ts`: three browser projects, reseeded.
- `src/components/MetadataLookup.test.js`: normalized language comparison, explicit
  staging and unknown evidence in the one-book UI.

Build/module closure, translation validation and whitespace checks pass. The
frontend is 1,105,203 bytes against the existing 1,320,000-byte package limit. No GitHub Actions
or full CI was run. Remaining provider policy, single-book provenance, covers,
concurrency, cross-version/database and manual accessibility acceptance remains
open in the linked issues; this is not a claim that the bulk epic is complete.
