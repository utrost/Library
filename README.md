# Library

Library is an open-source Nextcloud application for managing and browsing digital publications already stored in Nextcloud.

The model is deliberately similar to Memories for photographs and Music for audio:

> Nextcloud Files remains the canonical storage. Library adds a publication-specific catalogue, metadata model, search and browsing interface on top.

## Current status

Early bootstrap / v0.1 concept. The repository currently contains a minimal installable Nextcloud app skeleton plus planning documents.

The first working milestone is intentionally small:

- install as a normal Nextcloud navigation app;
- appear in the Nextcloud app navigation;
- prove the local development loop against a real Nextcloud instance;
- then spike reader/viewer handoff for existing files.

## v0.1 direction

Library v0.1 should prove this proposition:

> Publications already stored in Nextcloud can be presented as a useful media library without moving or restructuring them.

Included later in v0.1:

- configure one or more Library roots;
- discover EPUB, PDF and CBZ files first;
- store a file-ID-based index;
- extract basic metadata and covers where practical;
- browse/search/edit publication metadata;
- open files through compatible existing Nextcloud viewers/readers;
- show the original file in Nextcloud Files.

Explicit non-goals for v0.1:

- custom EPUB/PDF/comic renderer;
- annotations, bookmarks or Library-owned reading position;
- OCR and full-text document search;
- Internet metadata lookup;
- OPDS/Kobo/Kindle integration;
- AI classification.

## Documents

- [Concept summary](docs/concept.md)
- [v0.1 technical specification draft](docs/v0.1-technical-spec.md)
- [Reader handoff spike](docs/reader-handoff-spike.md)
- [Alice reader compatibility notes](docs/alice-reader-compatibility.md)

## Development target

The first integration target is a private Nextcloud Docker instance on Alice running Nextcloud 34.

The app id is:

```text
library
```

For the current Alice sandbox, clone this repository outside the Nextcloud data volume and copy the working tree into `/var/www/html/custom_apps/library` inside the container for each smoke test. A host symlink is not used yet because `/home/uwe` is not world-traversable from the container user.
