# Nextcloud app guidelines extracted from Library

This is a reusable checklist for starting future Nextcloud apps without beginning from zero. It is grounded in the current Library app, but it is intentionally written as app-independent guidance rather than a Library feature spec.

Use it as a starting point for new apps, then delete anything that does not fit the product.

## 1. Product boundary first

Before writing controllers or Vue components, write down the app boundary in one paragraph:

- What user problem does the app solve?
- Which existing Nextcloud objects remain canonical?
- Which data is app-owned?
- Which workflows are explicitly out of scope?
- Which external apps/services are hard dependencies versus soft handoff targets?

Library's most useful boundary is: **source files stay in Nextcloud Files; Library owns only catalogue/index/review metadata.** That one sentence drives schema, scanner, import/export, delete, recovery and security decisions.

For a new app, aim for a similarly simple invariant. Examples:

- Files remain canonical; the app stores annotations only.
- Calendar entries remain canonical; the app stores planning metadata only.
- Deck cards remain canonical; the app stores generated summaries only.

If the app might modify canonical user data, document that before implementation and require preview/confirmation flows for destructive or bulk changes.

## 2. App metadata and package identity

Use `appinfo/info.xml` as a real contract, not as boilerplate.

Recommended minimum:

- stable app id and PHP namespace;
- AGPL-compatible license declaration;
- narrow supported Nextcloud version range while alpha-testing;
- public support, website and repository URLs before App Store submission;
- navigation and settings entries only when the product needs them;
- command registrations only when needed;
- no undeclared hard dependency on another app.

Library keeps viewer/reader apps as soft dependencies: it links to Nextcloud's file routes and lets installed viewer apps handle rendering. That is safer than calling a specific reader app directly.

## 3. Keep production runtime separate from source tooling

A packaged Nextcloud app should not require Node, npm, tests, source files or build scripts on the production server.

Library's release archive intentionally excludes development-only paths such as:

- `.git`, `.github`, `node_modules`, `src`, `tests`, `scripts`, `docs`, `dist`, `build`;
- package manifests and Vite config;
- security/test reports and caches.

Pattern:

1. Build frontend assets locally or in CI.
2. Stage only runtime app files.
3. Re-copy/version the exact built JS/CSS assets into the package.
4. Create a reproducible archive with a single top-level app directory.
5. Write an adjacent checksum.
6. Audit the archive for forbidden dev/private files.
7. Install and smoke the archive, not only the source checkout.

## 4. Schema ownership and `database.xml`

For app-owned persistence:

- use an app-specific table prefix;
- include `user_id` on user-owned rows;
- make delete operations app-owned unless the product explicitly modifies canonical Nextcloud objects;
- add workload-led indexes for real queries, filters and sorts;
- keep migrations portable across supported Nextcloud databases;
- maintain `appinfo/database.xml` as the reviewer-facing current schema, aligned with all migrations.

Library's useful patterns:

- root/config tables point to existing Nextcloud objects;
- file-index rows use stable Nextcloud file IDs and cached path metadata;
- publication rows hold editable app metadata;
- repeated high-cardinality values live in normalized child tables instead of JSON-only blobs;
- arbitrary substring search uses materialized search grams rather than scanning unbounded text fields;
- scan-job rows persist progress/history rather than relying only on in-memory jobs.

Avoid schema choices that force full table scans for normal catalogue/list views.

## 5. Route design and controller boundaries

Map the app's HTTP routes before implementation. Split routes by responsibility:

- page/shell routes;
- read-only JSON routes;
- mutating POST routes;
- background job/progress routes;
- import/export routes;
- health/diagnostic routes;
- file/media routes.

For each route, decide:

- authenticated user required?
- admin required?
- CSRF required?
- accepted HTTP method?
- owner lookup and not-found behavior?
- response DTO allowlist?
- cache headers?
- user-facing error shape?

Library conventions worth copying:

- User data routes resolve through the current user session.
- Invalid, unauthenticated and non-owned item lookups often share a generic 404 shape to avoid enumeration.
- Browser-facing JSON DTOs are allowlisted instead of returning raw service rows.
- Safe GET handoff routes can use `NoCSRFRequired`; mutating routes stay POST with normal CSRF protection.
- Media routes return private/no-store refresh responses where appropriate.

## 6. Authentication, CSRF and authorization

Default stance:

- Require an authenticated Nextcloud user for user data.
- Require CSRF tokens for browser-initiated mutations.
- Use `NoCSRFRequired` only for deliberate safe GET/read endpoints.
- Avoid `PublicPage` unless anonymous access is genuinely a product feature.
- Check ownership in services/controllers before returning data or applying changes.

Use fail-closed responses:

- generic 404 for invalid/non-owned entities;
- bounded validation messages for user-correctable input;
- server logs for raw exception detail;
- correlation IDs for support/debugging.

## 7. Source-data safety

If an app observes or indexes existing Nextcloud data, define the source-data safety boundary explicitly.

Library patterns:

- root deletion removes only Library root/index metadata;
- missing-file forget removes app-owned rows only;
- metadata import updates existing Library rows only after preview;
- sidecar export downloads metadata instead of writing into source folders;
- scans never rewrite source files.

For any future app, list every operation that touches existing user data and classify it as:

- read-only observation;
- app-owned metadata write;
- canonical Nextcloud object write;
- destructive operation.

Canonical writes and destructive operations should have stricter confirmation, audit logging and rollback guidance.

## 8. Background jobs and long operations

Long operations should not depend on a single web request.

Recommended pattern:

- queue work through Nextcloud background jobs;
- create an app-owned job/progress row before queuing;
- store status, counters, start/finish times and current path/item where useful;
- persist bounded heartbeats;
- support cooperative cancellation at safe checkpoints;
- keep non-preemptive operations visible as a limitation;
- expose progress through a read route and/or settings page.

Library's scanner checks cancellation before marking a job running and at bounded traversal/progress checkpoints. It distinguishes queued, running, completed, failed and cancelled app-owned states.

## 9. Diagnostics and logging

Do not show raw exceptions to users.

Library uses safe diagnostics with:

- stable diagnostic codes;
- `libdiag-...` correlation IDs;
- bounded user-facing text;
- server-side raw context where needed;
- sanitization of legacy persisted error strings before projection.

Also harden exports that might be opened in office tools. Library neutralizes formula-looking TSV cells to avoid spreadsheet formula injection.

For a new app, decide early:

- what is safe to show in UI;
- what belongs only in server logs;
- what diagnostic IDs look like;
- how support can correlate a user report with logs;
- which downloads need CSV/TSV formula neutralization.

## 10. File/media handling

For uploads and generated media:

- validate byte size before decode/processing;
- validate MIME type by decoding/inspection, not only by extension;
- validate dimensions/pixel count for images;
- keep allowed formats explicit;
- reject remote URLs unless the app has a hardened fetch policy;
- prefer same-origin app routes for private media;
- use cache headers deliberately.

Library's manual cover path accepts JPEG, PNG and WebP, enforces byte/dimension/pixel limits, verifies decoded image headers and stores the result as app-owned data. Legacy remote cover URLs are inert and never rendered or fetched.

## 11. Frontend architecture

A Nextcloud app can mix server-rendered PHP templates with Vue, but keep the seam explicit.

Library patterns:

- server provides initial state through Nextcloud initial-state APIs;
- Vue owns the catalogue shell;
- PHP templates still own detail/settings/fallback pages where useful;
- runtime JS/CSS asset names include app version/suffix for cache busting;
- browser state updates guard against request races;
- mutating UI controls reject repeat activation while pending;
- autosave/async mutations expose accessible status/failure text;
- high-cardinality suggestions are lazy and have minimum query lengths.

Do not assume the browser has fresh assets after deployment. Versioned asset names and explicit app version markers make cache problems diagnosable.

## 12. Localization and accessibility

Treat localization and accessibility as product contracts.

Recommended baseline:

- keep `l10n/*.json` and generated `l10n/*.js` in sync;
- run translation inventory checks;
- preserve placeholders and plural forms;
- avoid mixed register/style in one locale;
- include labels, tooltips, button text and screen-reader text in review;
- use `aria-live` for async status;
- keep native form behavior where possible;
- test keyboard access, focus order and mobile layouts.

Library's docs and tests distinguish accessibility-tree evidence from real screen-reader testing. Keep that distinction honest.

## 13. Import/export and bulk operations

Bulk operations need extra boundaries.

Recommended pattern:

- preview before apply;
- show requested/applied/unchanged/skipped counts;
- cap affected rows/items;
- require explicit selected IDs or a well-defined filter contract;
- fail closed on malformed IDs;
- make export read-only;
- document whether import creates rows, updates rows or only matches existing rows.

Library's corrected-metadata import applies only to matched existing catalogue rows after preview. It is not a blind restore mechanism.

## 14. Testing layers that paid off

Library's strongest habit is not one test type; it is stacked evidence.

Reusable test layers:

- Python contract tests for docs/schema/routes/package invariants.
- Plain PHP runtime tests for services/controllers without a full browser.
- Vitest tests for Vue and standalone browser JS.
- Vite production build.
- Translation inventory/generation checks.
- Markdown link checks.
- Release package audit.
- Exact-package install/enable/upgrade smoke in a disposable Nextcloud.
- HTTP route/API smoke with temporary app passwords.
- Browser/Playwright smoke for real rendered UI and console errors.
- Fresh-install mixed fixture rehearsal for migration and first-scan evidence.

A good minimum gate for a new app is:

```bash
npm run check
npm run package:release
npm run smoke:release-package
```

Adapt the commands, but keep the principle: source tests are not enough; smoke the packaged app.

## 15. Release and App Store readiness

For alpha/private testing:

- build unsigned archives reproducibly;
- publish/check adjacent SHA-256 files;
- generate/audit SBOM and provenance sidecars if possible;
- verify package contents exclude dev/private files;
- install the exact archive into a disposable/private Nextcloud;
- run `occ app:enable`, `occ upgrade`, route listing and live smoke;
- record version/checksum/install evidence.

For public App Store submission, add:

- signed package mode;
- no private host/user references in public docs/metadata;
- complete support/website/repository metadata;
- `database.xml` parity with migrations;
- compatibility claims only for actually tested Nextcloud versions;
- screenshot/listing copy that matches implemented features;
- manual accessibility and real-user alpha feedback where claimed.

## 16. Documentation spine for future apps

Start every substantial app with a small docs spine:

- `README.md` — external one-page orientation and install/run pointer.
- `docs/product-concept.md` — product boundary, users, non-goals.
- `docs/architecture-review.md` — installation impact, schema, jobs, routes, dependencies.
- `docs/current-state-and-risk-register.md` — implemented now, weak points, evidence.
- `docs/user-guide.md` — first-run/admin/user workflows.
- `docs/roadmap.md` — next slices and explicitly deferred work.
- `RELEASE.md` — exact package/build/deploy process.
- `CHANGELOG.md` — user-visible changes by version.

Keep public first-contact docs clean: no local hostnames, personal deployment details, assistant/session narrative or stale measured claims.

## 17. What not to copy blindly from Library

Library has accumulated alpha-specific scaffolding. For a new app, do not blindly copy:

- exact version-number contract tests;
- app-specific historical alpha evidence;
- Library's publication/catalogue terminology;
- all smoke scripts before the new app has equivalent routes;
- all database indexes before query shapes exist;
- mixed PHP/Vue boundaries if a simpler app can be server-rendered or Vue-only;
- private-instance evidence wording.

Copy the patterns, not the history.

## 18. Starter checklist

Before first implementation slice:

- [ ] One-paragraph product boundary and non-goals.
- [ ] `appinfo/info.xml` with narrow compatibility and correct metadata.
- [ ] Route map with auth/CSRF/ownership decisions.
- [ ] Data ownership model and first migration plan.
- [ ] Decision on background jobs versus synchronous requests.
- [ ] Safe diagnostics/error policy.
- [ ] Minimal docs spine.
- [ ] Minimal aggregate gate.

Before private alpha:

- [ ] App-owned schema and `database.xml` aligned.
- [ ] User-scoped routes and DTO allowlists reviewed.
- [ ] Mutating routes protected by CSRF.
- [ ] Long operations cancellable or limitation documented.
- [ ] Localization and accessibility basics checked.
- [ ] Exact package archive built, audited, installed and live-smoked.
- [ ] Current-state/risk docs updated from real evidence.

Before public release:

- [ ] Signed package workflow.
- [ ] App Store metadata/listing/screenshots reviewed.
- [ ] Public docs scrubbed of private/internal details.
- [ ] Compatibility matrix based on real tested versions.
- [ ] Security review of uploads, imports, exports, diagnostics and background jobs.
- [ ] Manual accessibility/user acceptance evidence separated from automated smoke evidence.
