# Alpha.39 developer NC34 deployment

Status: signed alpha.39 from merged [PR #158](https://github.com/utrost/Library/pull/158) was installed on developer Nextcloud 34.0.3. This is a developer checkpoint, not NC33–35 certification or owner acceptance.

Alpha.39 keeps the Review queue open after applying a scanner suggestion, adds linked covers there, exposes Reading status filtering and sorting, and makes the cover image the clipboard-paste target with smaller controls. No database migration was added.

The merged source commit was `b53553a94c3231c3342362417b1b54a690be438d`. The signed archive `library-0.3.0-alpha.39.tar.gz` had SHA-256 `3b6b9727be2482fd04a49b88d984e77dc5069f8e8a658b1a24b236566dfed706`. The package passed signature, frontend size, module-closure, SBOM and provenance audits; frontend files totaled 1,054,151 bytes. [Required CI](https://github.com/utrost/Library/actions/runs/39753555069) and security checks passed before merge.

The NC34 upgrade completed with maintenance mode off and no database upgrade pending. App integrity passed after installation. The installed versioned JavaScript, CSS and main template matched the signed archive byte for byte. Catalogue rows for the owner remained **107,717 before and after** deployment. The previous app is retained at `/tmp/library-before-alpha39-20261022T092611Z` for rollback.

A read-only query against the installed 107,717-book catalogue revealed a performance limitation: Reading status sorting took 21.8 seconds, versus 8.8 seconds for the existing Title view; filtering Not set took 8.8 seconds. Alpha.40 is being prepared to sort a narrow item projection before loading page metadata. This checkpoint should not be treated as the final reading-status performance acceptance result.
