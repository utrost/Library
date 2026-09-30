# Disposable 40-book process measurements

Single warm PHP process; fixture creation and scale setup excluded. This is synthetic process coverage, not an 84k-book throughput estimate.

| Operation | Service ms | SQL statements | SQL ms |
| --- | ---: | ---: | ---: |
| unchanged_scan_40 | 216.5 | 245 | 120.6 |
| list_create | 2.2 | 3 | 1.6 |
| list_add_40 | 481.4 | 142 | 44.6 |
| list_index | 0.7 | 2 | 0.4 |
| list_page | 214.0 | 54 | 20.2 |
| list_note | 2.4 | 6 | 2.0 |
| list_move | 2.4 | 8 | 1.9 |
| metadata_prepare_40 | 159.0 | 324 | 80.5 |
| metadata_apply_40 | 562.0 | 3287 | 428.3 |
| metadata_undo_40 | 525.5 | 3127 | 411.2 |
| inference_start_40 | 9.7 | 15 | 6.3 |
| inference_analyse_40 | 167.7 | 461 | 120.4 |
| inference_results_40 | 68.3 | 165 | 39.4 |
| duplicates_start_metadata | 8.6 | 14 | 5.4 |
| duplicates_complete_metadata | 2228.0 | 4913 | 1115.8 |
| duplicates_start_hash | 10.6 | 14 | 6.4 |
| duplicates_complete_hash | 3417.8 | 6829 | 1780.5 |
| list_index_150_lists_6000_entries | 3.8 | 2 | 3.2 |
| list_membership_150_lists | 4.9 | 3 | 4.1 |
| list_page_150_lists | 223.0 | 54 | 20.8 |
