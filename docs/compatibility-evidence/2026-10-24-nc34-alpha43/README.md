# Alpha.43 sorting and response checkpoint

Signed `0.3.0-alpha.43` is installed on developer Nextcloud 34.0.3.2 from merged [PR #164](https://github.com/utrost/Library/pull/164) and [PR #165](https://github.com/utrost/Library/pull/165), at source commit `fa627fe08bafc46ba36e8371d6c795c0ad6f9d8f`. The signed archive `library-0.3.0-alpha.43.tar.gz` has SHA-256 `761023a88126d7629fdf5c91462e2676dda1bc13f7da26c4f186d51043398031`. The package passed signature, SBOM, provenance, module closure and size audits. All required source, static, security, and fresh-install GUI checks passed. Packaging ran 1,052 source checks.

The first alpha.43 upgrade attempt met MariaDB's index-key size limit on the Series sort index and restored alpha.42 from `/tmp/library-before-alpha43-20261024T111300Z`. PR #165 reduced that index and kept migration steps idempotent. The subsequent installation completed. App integrity passes; maintenance mode and pending database upgrade are both false. The owner catalogue remained **107,717 rows** before and after. A rollback copy of alpha.42 remains at the same path.

Alpha.43 stores a short format sort value and adds indexes for Publication date, Series, Recently opened, and Format. The catalogue first pages by narrow item IDs, then loads the displayed rows. Alpha.42's separate exact count and count reuse remain in place.

Read-only installed HTTP timings below are single requests on the shared 107,717-book developer instance, not a service-level guarantee. The previous alpha.42 check found the four newly indexed sorts around 12–21 seconds. The first group below uses `limit=25`; the second uses the full 100-row page.

| Request | Alpha.43 |
| --- | ---: |
| Unfiltered first page | 422 ms |
| Title / Date added | 76 / 65 ms |
| Publication date / Series | 102 / 72 ms |
| Recently opened / Format | 120 / 58 ms |
| Reading status | 69 ms |
| 100-row Publication date / Series | 431 / 119 ms |
| 100-row Recently opened / Format | 313 / 73 ms |
| 100-row Series page 2 | 77 ms |
| `Heinlein` 100-row Title / Date added / Publication date | 1,495 / 1,119 / 426 ms |

The strict installed catalogue smoke passed unfiltered sorts, pagination, folder suggestions, details and the sampled non-text filters. It failed its one-second budget on two text searches at **1,504 ms** (substring) and **1,269 ms** (sampled term). Their results remain usable and have immediate loading feedback; the one-second result target is not fully met for text search. The exact total is fetched separately and can still take several seconds without blocking the visible page.

The installed desktop/mobile browser check delayed a sort response by 800 ms. Updating appeared after **48 ms** on desktop and **78 ms** on mobile. Existing cards stayed visible; sorted results arrived after **1,029 / 1,120 ms** including the artificial delay. A second installed browser check delayed an older sort, then confirmed it could not replace a newer choice; an injected HTTP 503 showed Retry, which restored results. Both checks reported zero browser errors and removed their temporary app credentials. Fresh-install GUI covered the loading state; source tests covered count reuse, stale responses, and retry after catalogue failure.

The installed unchanged-file scan smoke, sidebar HTTP smoke and basic browser smoke passed. The browser rendered 100 cards and reported zero console errors. The installed aggregate package smoke was not repeated because alpha.42's check identified a preexisting missing source file for its first-alphabetic download fixture; the same package download journey passed in disposable fresh-install CI. Existing books were not edited during this checkpoint.

Human acceptance and exact signed NC33–35 release certification remain separate 0.3 App Store gates.
