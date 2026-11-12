# Alpha.8 provider delivery

## Scope

DNB and Library of Congress individual/bulk metadata lookup, administrator controls, portable provider preferences and source-labelled receipts. Path-extraction rows stay mounted while refreshed proposals load after Apply/Undo. No database migration.

## Source checks

- Production build: 920,106 runtime JavaScript bytes, within the existing budget.
- Fifteen focused component tests: lookup comparison, candidate/cover selection and path-review refresh.
- Translation inventory: 1,819 keys; generated catalogues current.
- Provider parsing/fault and 50-book integration evidence: [DNB](dnb-lookup-verification.md), [Library of Congress](loc-lookup-verification.md).

## Delivery

Signed-package upgrade, rollback and installed browser verification are pending. Record the actual package checksum and deployment outcome here after verification. All delivery checks are local and focused; no full CI, GitHub Actions, release gate or App Store publication.

## Remaining limitation

Live Library of Congress requests time out from the development environment. Synthetic parsing and reviewed Save/Apply/Undo pass; successful live LoC lookup remains an acceptance item. DNB live lookup succeeds. Google Books still needs an administrator API key for live lookup.
