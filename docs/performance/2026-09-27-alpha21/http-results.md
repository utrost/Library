# HTTP and SQL measurements

Three sequential unprofiled requests per endpoint; all shown returned HTTP 200. ¹SQL comes from one separate profiled request, so it is not a component of the median HTTP value. Three samples do not establish a reliable population p95.

| Operation | Median HTTP ms | Highest of 3 ms | SQL statements¹ | SQL ms¹ |
| --- | ---: | ---: | ---: | ---: |
| catalogue-25 | 148.7 | 149.6 | 30 | 124.4 |
| catalogue-100 | 163.1 | 165.2 | 105 | 138.6 |
| catalogue-recent | 173.6 | 174.2 | 105 | 134.3 |
| search-word | 418.3 | 649.8 | 109 | 361.3 |
| filter-epub | 165.6 | 179.1 | 105 | 136.7 |
| review-conflicts | 19.1 | 19.5 | 7 | 1.9 |
| creator-typeahead | 16.7 | 23.0 | 1 | 0.5 |
| publisher-typeahead | 17.8 | 26.6 | 1 | 1.9 |
| folder-typeahead | 17.0 | 17.1 | 1 | 0.4 |
| shelf-children | 16.6 | 17.0 | 0 | 0.0 |
| home-html | 496.2 | 602.1 | 30 | 431.6 |
| shelves-html | 643.7 | 772.3 | 23 | 642.5 |
| catalogue-html | 197.9 | 204.4 | 119 | 142.7 |
| settings-html | 188.4 | 266.9 | 21 | 150.3 |
| sidebar | 16.0 | 16.7 | 2 | 0.6 |
| detail | 29.7 | 30.4 | 18 | 3.3 |
| lists-index | 15.7 | 15.9 | 2 | 0.4 |
| lists-membership | 16.3 | 18.3 | 3 | 0.6 |
| inference-roots | 25.0 | 31.7 | 25 | 5.6 |
| scan-progress | 15.9 | 15.9 | 3 | 0.6 |
| duplicates-1 | 23.3 | 33.3 | 20 | 3.5 |
| duplicates-100 | 111.8 | 310.5 | 236 | 64.9 |
| shelf-root-children | 16.8 | 17.0 | 1 | 0.2 |
| metadata-export | 54.8 | 182.9 | 6 | 6.8 |
| sidecar-manifest | 53.9 | 59.9 | 6 | 6.3 |
| inference-sample | 172.8 | 252.1 | 348 | 108.8 |
| list-page | 46.7 | 67.9 | 90 | 21.1 |
| catalogue-page-400 | 10316.4 | 10754.4 | 105 | 10142.9 |
| review-missing | 23065.6 | 39617.1 | 4 | 22826.1 |
| catalogue-hydrate | 30911.4 | 48626.8 | 136 | 30862.2 |
