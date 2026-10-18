# NC34 developer deployment: UX consistency alpha.21

This was the first NC34 developer deployment of the five UX improvements. It has been superseded by [alpha.22](../2026-10-18-nc34-ux-alpha22/README.md). The final private alpha.21 archive is `/tmp/library-alpha21-release/library-0.3.0-alpha.21.tar.gz` (SHA-256 `7c650f74199a890566273f5d5b4567f9405509dc09a9dca439f503887c40c422`). The preceding alpha.20 app remains in the container at `/tmp/library-before-alpha21` for rollback.

This build groups catalogue navigation into Browse, lists, and review/cleanup; limits sidebar filters to catalogue views; compacts author selection and metadata review; clarifies publication-field saves; makes path-rule editing optional and collapsed; compresses shelf cards; and gives source language and value-mapping review pages a shared Library layout. The language decision button names its 100-book processing batch, and selecting a source value takes the user to the mapping form.

`npm run build` completed and the corrected alpha.21 staging tree had 1,312,091 frontend bytes (limit 1,320,000). Changed PHP files passed `php -l` in the NC34 container. `occ upgrade` completed, Apache was reloaded, and `occ integrity:check-app library` returned no issues.

Authenticated browser verification exposed a hidden navigation column on the standalone language and value-mapping pages: a closed `<details>` element hid all desktop links. The fix uses a visible desktop sidebar and a collapsed mobile menu. A later screenshot exposed the active-filter label under Nextcloud's sidebar toggle; alpha.22 moves that row below the toggle and uses a new version to refresh the cached stylesheet.
