# Alpha.41 developer NC34 deployment

Signed alpha.41 from merged [PR #160](https://github.com/utrost/Library/pull/160) is installed on developer Nextcloud 34.0.3.2. It keeps the alpha.39 Review queue, reading-status controls and cover interactions, plus alpha.40's indexed status ordering. It repairs the incomplete sorted catalogue rows found in the alpha.40 installed smoke. This is a developer checkpoint, not NC33–35 certification or owner acceptance.

The merged source commit is `b2ea410bc3750f5f7867e17dce9c3cfe8556245c`. The signed archive `library-0.3.0-alpha.41.tar.gz` has SHA-256 `7008627a05449ec1f01d46fca75b1fd805e90d3936957e342149add5fe18d472`. Its provenance names that exact merge commit. [Required CI](https://github.com/utrost/Library/actions/runs/39760635439), including the GUI job, and security checks passed. Signature, frontend size, module closure, SBOM and provenance audits passed during packaging; frontend files total 1,054,151 bytes.

The NC34 upgrade completed, maintenance mode is off, no database upgrade is pending, and app integrity passes. The installed versioned JavaScript, CSS and main template match the signed archive byte for byte. The owner catalogue remained **107,717 rows before and after**. The previous app is retained at `/tmp/library-before-alpha41-20261022T102609Z` for rollback. Alpha.41 adds no migration beyond the alpha.40 status-rank migration.

Read-only installed queries over the 107,717-book catalogue returned full rows on status-sort pages one and two and on page two of Recent. The book with status `needs-action` retained its PDF format, path and creator; other sampled rows retained their format, path and creator. Reading-status page one took **8.427 s**, page two **8.823 s**, and Recent page two **8.478 s**. The alpha.40 title baseline was **8.524 s**; most shared time is catalogue counting work.

No existing book file or catalogue metadata was changed during the installed smoke. Human acceptance of the new controls and the exact signed NC33–35 release matrix remain outstanding for the 0.3 App Store gate.
