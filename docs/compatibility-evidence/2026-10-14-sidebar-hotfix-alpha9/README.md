# Alpha.9 publication sidebar hotfix — 2026-10-14

## Reported failure

On the populated developer Nextcloud 34.0.3 instance, opening a book showed the sidebar heading and author text but no detail sections or clickable author links. The reported example was publication ID 75627. The authenticated `/apps/library/items/75627/sidebar` response returned HTTP 200 in about 226 ms and included canonical author identities, so the catalogue data and route were available.

## Cause and change

The sidebar template built author and series links with `generateUrl(...)`, which was not imported or defined in `App.vue`. Vue reported `TypeError: w.generateUrl is not a function` while rendering a book with canonical authors, leaving the sidebar body blank. Both link types now use the existing `catalogueRootUrl` computed URL. The frontend asset filename changed from the alpha.9 `v4` suffix to `v5` so browsers load the fix without relying on a hard refresh. The app version and database schema remain `0.3.0-alpha.9`.

## Developer instance observation

- The production frontend build completed and the module-closure check found one runtime module.
- The new JavaScript/CSS assets and page wiring were deployed to the developer NC34 instance. The installed app version stayed alpha.9; `occ status` reported maintenance mode off and `needsDbUpgrade=false`.
- A Chromium read-only check opened publication 75627 at 1824 × 1200. The sidebar API returned HTTP 200. The body displayed **Overview**, **Metadata** and **Activity**, plus links to the two author identities. Browser console errors: zero.
- A before/after browser screenshot was kept under `/tmp` on the developer workstation because it contains private catalogue titles. It is not a public release screenshot.

The hotfix has not been rerun through the disposable NC33–35 matrix or an exact signed package. Those remain release gates. The [human handbook](../../human-test-handbook.md#h03-01--first-library-and-everyday-browsing) now treats a header-only panel as a failure.
