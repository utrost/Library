# Alpha.161 implementation report

## Release boundary

Alpha.161 is the next native-shell slice after clean alpha.160. It makes Review a focused native destination selected by the existing review-needed GET filter semantics. It does not add a client router or backend route, so copied links, reloads, pagination, and browser history continue to use the established catalogue query contract and server-generated webroot.

The destination exposes every established review-needed queue: needs metadata, scanner conflicts, metadata errors, placeholder covers, missing creator/publication/date, filename-derived title, weak filename metadata, missing description, unsupported containers, and unreviewed imports. It reuses the rich scanner-conflict projection and reset/detail actions and supplies accessible loading, error, empty, results, and pagination states. The catalogue remains unchanged when no review-needed filter is active.

Settings remains the existing `/settings/user/library` personal-settings route. PHP details, the no-JavaScript fallback, and the closed empty sidebar remain present. No schema, metadata ownership, source-file, cover, or reader behavior changes in this slice.

## TDD and verification

Component contracts were added first and observed failing for the missing destination, queue URLs, and request states. Exact commands and final gate results are recorded in `/tmp/library-alpha161-codex-implementation.md`; this checked-in report intentionally does not claim results before that package-excluded evidence is complete.
