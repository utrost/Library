# Help-text audit

Scope: Vue catalogue/Home/Shelves/Review/details drawer, private lists, inference and pattern management; server-rendered Settings and publication maintenance; import and batch-edit result pages.

| Surface | Action |
| --- | --- |
| Inference, transformations, authors and patterns | Label tooltips for syntax, sample limits, assignments, mapping order, author separators, examples and persistence limitations. Single unified selector and immediate preview retained. |
| Home, Shelves and Review | Descriptive instructional paragraphs moved to heading/label help. Empty states and results remain visible. |
| Lists | Introductory description moved to heading help. User-written descriptions/notes, unavailable-book explanations and deletion confirmations remain visible. |
| Detail drawer | Maintenance guidance and scanner-suggestion help made contextual. Metadata and save/error feedback remain visible. |
| Settings | Root/path instructions, repair scope, scan-operation explanations, metadata maintenance and export explanations now use label help. Root paths, totals, job progress, scan summaries and cancellation state remain visible. |
| Publication maintenance | Rescan/provenance and tag-operation explanations made contextual. Source metadata, missing-file warnings and save feedback remain visible. |
| Import/batch previews | Kept review/apply scope and affected-item counts visible: these describe the pending mutation and are needed before confirmation. Errors/empty states remain visible. |

Accessibility fixes found during testing: help icons must not pollute field or heading names; Escape works even when help opened by pointer; focus-induced scrolling must not immediately dismiss keyboard help; tooltips accept pointer entry and narrow-screen placement. Vue and legacy helpers preserve original control names. Source paragraphs provide fallback help if legacy enhancement does not run.

General rule: static explanatory prose belongs in label/heading help, accessible by hover, keyboard and tap. Dynamic state, errors, essential consequences of actions, user content and recovery instructions remain inline. Future screens follow the same policy.
