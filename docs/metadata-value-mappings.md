# Publisher and subject value mappings

Library retains the source publisher and each source subject on its book. **Publisher and subject names** in the Library navigation groups alternative spellings for browsing. A mapping is private to one Nextcloud account and never writes EPUB, OPF, PDF, CBZ or Nextcloud Files metadata.

1. Search existing values with at least three characters.
2. Enter an exact source value and the preferred label. The preferred label may be an existing value or a new name.
3. Preview the count and a sample of affected books, then save.
4. Remove the mapping to restore separate results. A mapping can be changed by saving the same source again with another preferred label.

The catalogue's publisher and subject suggestions collapse mapped source names into their preferred label. Selecting either a preferred label or a mapped source value returns the books grouped under that label. General search also recognizes a preferred label, while the book details continue showing the original source value. Chained mappings are refused to keep removal predictable. A single preferred label can group several source spellings.

This is a vocabulary layer, not a publisher or subject identity table. It does not change the source publisher or subject in exports, and it does not silently reclassify a book. The source values and account mappings are kept separate so a later identity model can migrate them safely if dedicated publisher/subject pages and merge operations become useful.

Alpha.16 also stores explicit empty scanner candidates for publication fields, so a manually supplied publisher or subject can be reset to no source value after a new scan. For newly extracted subject/classification lists, `field_values.subjectsOriginal` and `field_values.classificationsOriginal` retain the bounded pre-normalization source representation when it differs. Existing records gain these values on a later metadata scan. The detail page compares normalized lists, so it does not show a false conflict merely because a JSON array is displayed as chips.

The search document now includes publisher. `library_items.search_index_version` marks the derived index revision; the bounded background job and `occ library:search:rebuild` update existing books without re-extracting their files. The optimized command appends publisher grams to intact older search rows and fully rebuilds rows whose scanner fingerprint is missing. Search rebuild leaves canonical metadata and duplicate detection untouched. Human acceptance and exact NC33–35 package verification remain open.
