<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCA\Library\Exception\BatchLimitExceededException;
use OCA\Library\Presentation\PublicationDate;
use OCA\Library\Metadata\ScannerMetadataFields;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

final class ItemService {
    private const PUBLICATION_FACET_LIMIT = 100;
    private const MULTI_VALUE_FACET_LIMIT = 200;
    private const BULK_ITEM_LIMIT = 5000;
    /** Encoded metadata import JSON payloads larger than 1 MiB are rejected before json_decode(). */
    public const METADATA_IMPORT_MAX_JSON_BYTES = 1048576;
    /** Maximum normalized metadata items accepted in one preview/apply request. */
    public const METADATA_IMPORT_MAX_ITEMS = self::BULK_ITEM_LIMIT;
    public const METADATA_IMPORT_MAX_FIELDS_PER_ITEM = 64;
    public const METADATA_IMPORT_MAX_LIST_VALUES = 200;
    public const METADATA_IMPORT_MAX_STRING_BYTES = 8192;
    public const METADATA_IMPORT_MAX_NESTING_DEPTH = 32;
    public const METADATA_IMPORT_MAX_REPORT_ITEMS = 200;
    private const SEARCH_GRAM_LENGTH = 3;
    public const SCANNER_INDEX_REVISION = 'scanner-index-v1';
    private const SEARCH_GRAM_MAX_QUERY_GRAMS = 32;
    private const SEARCH_GRAM_INLINE_CANDIDATE_LIMIT = 500;

    private const CATALOGUE_INTERNAL_COLUMNS = [
        'i.id',
        'i.publication_type',
        'i.title',
        'i.subtitle',
        'i.creators', 'i.authors_json',
        'i.publication',
        'i.series_name',
        'i.series_number',
        'i.genre',
        'i.publication_date',
        'i.language',
        'i.publisher',
        'i.description',
        'i.subjects_json',
        'i.classifications_json',
        'i.starred',
        'i.workflow_status',
        'i.last_opened_at',
        'i.field_values',
        'i.cover_revision',
        'f.etag',
        'f.file_id',
        'f.cached_path',
        'f.extension',
        'f.scan_status',
        'f.scan_error',
        'r.label',
        'r.path',
    ];

    private const SCANNER_CONFLICT_INTERNAL_COLUMNS = [
        'i.metadata_source',
        'i.field_sources',
    ];

    private const WORKFLOW_STATUSES = [
        '',
        'to-read',
        'reading',
        'finished',
        'reference',
        'paused',
        'abandoned',
        'needs-action',
    ];

    private const PUBLICATION_TYPES = [
        'book',
        'comic',
        'magazine',
        'journal',
        'manual',
        'catalogue',
        'other',
    ];

    private const FACET_FILTER_EXCLUSIONS = [
        'publicationTypes' => ['type'],
        'publishers' => ['publisher'],
        'publications' => ['publication'],
        'publicationYears' => ['year'],
        'creators' => ['creator'],
        'formats' => ['format'],
        'shelves' => ['shelf'],
        'scanStatuses' => ['status'],
        'workflowStatuses' => ['workflowStatus'],
        'subjects' => ['subject'],
        'classifications' => ['classification'],
    ];

    private const PUBLICATION_FIELDS = [
        'publicationType',
        'title',
        'subtitle',
        'creators',
        'publication',
        'series',
        'seriesNumber',
        'genre',
        'publicationDate',
        'language',
        'publisher',
        'description',
        'subjects',
        'classifications',
    ];

    public function __construct(
        private IDBConnection $db,
        private ?DuplicateIndexService $duplicateIndex = null,
    ) {
    }

    /** Each cron run processes a bounded batch; opaque legacy text is never guessed apart. */
    public function backfillAuthors(int $limit = 200, ?string $userId = null): int {
        $qb = $this->db->getQueryBuilder();
        $qb->select('id', 'user_id', 'creators', 'field_sources', 'metadata_source', 'user_edited')->from('library_items')
            ->where($qb->expr()->isNull('authors_json'))->orderBy('id', 'ASC')->setMaxResults(max(1, min(500, $limit)));
        if ($userId !== null) $qb->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)));
        $result = $qb->executeQuery();
        $rows = $result->fetchAll(); $result->closeCursor();
        foreach ($rows as $row) {
            $uid = $row['user_id']; $id = (int)$row['id'];
            $this->db->beginTransaction();
            try {
                $live = $this->inferenceState($uid, $id, true);
                if ($live['authors_json'] !== null) { $this->db->commit(); continue; }
                $sources = json_decode($live['field_sources'] ?: '{}', true) ?: [];
                $source = $sources['creators'] ?? $live['metadata_source'];
                $trusted = $live['user_edited'] === '0' && in_array($source, ['epub-opf', 'opf', 'sidecar-opf', 'cbz-comicinfo'], true);
                try { $names = AuthorNames::fromText($live['creators'], $trusted); } catch (\InvalidArgumentException) { $names = []; }
                $update = $this->db->getQueryBuilder();
                $update->update('library_items')->set('authors_json', $update->createNamedParameter(AuthorNames::encode($names)))
                    ->where($update->expr()->eq('id', $update->createNamedParameter($id)))
                    ->andWhere($update->expr()->eq('user_id', $update->createNamedParameter($uid)))->executeStatement();
                $this->refreshAuthorFacetIndex($uid, $id, $names);
                $this->duplicateIndex?->changed($uid, $id);
                $this->db->commit();
            } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        }
        return count($rows);
    }

    /** v6 produced the same accepted scalar values; inspect proposals before adopting v7. */
    public function canReuseV6ScannerMetadata(string $uid,int $fileId): bool {
        $r=$this->db->executeQuery('SELECT field_values FROM *PREFIX*library_items WHERE user_id=? AND library_file_id=?',[$uid,$fileId]);
        $row=$r->fetch();$r->closeCursor();if($row===false)return false;
        try {$values=json_decode($row['field_values']??'',true,64,JSON_THROW_ON_ERROR);} catch(\JsonException) {return false;}
        return is_array($values) && ScannerMetadataFields::rejected($values)===[];
    }

    public function ensureItemForFile(string $userId, array $file, array $metadata = []): void {
        // Defend direct service callers as well as the Files extraction path.
        $rejected=ScannerMetadataFields::rejected($metadata);
        foreach($rejected as $field=>$value) unset($metadata[$field]);
        $metadata['_invalidFields']=array_values(array_unique(array_merge($metadata['_invalidFields']??[],array_keys($rejected))));
        $metadata['_rejectedFields']=array_merge($metadata['_rejectedFields']??[],$rejected);
        $candidate = $this->metadataCandidate($file, $metadata);
        // Extraction/file I/O happens before this short, per-publication transaction.
        $this->db->beginTransaction();
        try {
            $this->ensureScannerItem($userId, $file, $candidate, !empty($metadata['_invalidAuthors']));
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
    }

    private function ensureScannerItem(string $userId, array $file, array $metadataCandidate, bool $invalidAuthors): void {
        $existing = $this->scannerItemRow($userId, (int)$file['id']);
        if ($existing !== null) {
            if ((bool)$existing['user_edited']) {
                $this->refreshScannerCandidatesForUserEditedItem($userId, (int)$existing['id'], $metadataCandidate);
                return;
            }
            $this->refreshInferredItem($userId, (int)$existing['id'], $file, $metadataCandidate, $existing, $invalidAuthors);
            return;
        }
        $now = time();
        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_items')
            ->values([
                'user_id' => $qb->createNamedParameter($userId),
                'library_file_id' => $qb->createNamedParameter((int)$file['id']),
                'publication_type' => $qb->createNamedParameter($metadataCandidate['publicationType']),
                'title' => $qb->createNamedParameter($metadataCandidate['title']),
                'subtitle' => $qb->createNamedParameter($metadataCandidate['subtitle']),
                'creators' => $qb->createNamedParameter($metadataCandidate['creators']),
                'authors_json' => $qb->createNamedParameter(AuthorNames::encode($metadataCandidate['authors'])),
                'publication' => $qb->createNamedParameter($metadataCandidate['publication']),
                'genre' => $qb->createNamedParameter($metadataCandidate['genre']),
                'series_number' => $qb->createNamedParameter($metadataCandidate['seriesNumber']),
                'series_name' => $qb->createNamedParameter($metadataCandidate['series']),
                'publication_date' => $qb->createNamedParameter($metadataCandidate['publicationDate']),
                'language' => $qb->createNamedParameter($metadataCandidate['language']),
                'publisher' => $qb->createNamedParameter($metadataCandidate['publisher']),
                'description' => $qb->createNamedParameter($metadataCandidate['description']),
                'subjects_json' => $qb->createNamedParameter($this->jsonEncodeList($metadataCandidate['subjects'])),
                'classifications_json' => $qb->createNamedParameter($this->jsonEncodeList($metadataCandidate['classifications'])),
                'starred' => $qb->createNamedParameter(0),
                'workflow_status' => $qb->createNamedParameter(''),
                'last_opened_at' => $qb->createNamedParameter(null),
                'metadata_source' => $qb->createNamedParameter($metadataCandidate['metadataSource']),
                'field_sources' => $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources'], JSON_THROW_ON_ERROR)),
                'field_values' => $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues'], JSON_THROW_ON_ERROR)),
                'user_edited' => $qb->createNamedParameter(0),
                'created_at' => $qb->createNamedParameter($now),
                'updated_at' => $qb->createNamedParameter($now),
            ])
            ->executeStatement();
        $itemId = (int)$this->db->lastInsertId('library_items');
        $row = $this->scannerDatabaseValues($metadataCandidate) + ['user_edited'=>0, 'has_cover_override'=>0];
        $this->persistScannerIndexes($userId, $itemId, $file, $metadataCandidate, $row, null);
    }

    /** Lock canonical metadata while respecting a concurrent user correction; never load cover blobs. */
    private function scannerItemRow(string $uid, int $libraryFileId): ?array {
        if ($this->db->getDatabaseProvider() === 'sqlite') {
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND library_file_id=?', [$uid,$libraryFileId]);
        }
        $qb=$this->db->getQueryBuilder();
        $qb->select('id','user_edited','scanner_index_hash','creators','authors_json','title','subtitle','publication','series_name','series_number','genre','publication_date','language','publisher')
            ->addSelect($qb->createFunction("CASE WHEN (cover_override_url IS NOT NULL AND cover_override_url <> '') OR (cover_override_data IS NOT NULL AND cover_override_data <> '') THEN 1 ELSE 0 END AS has_cover_override"))
            ->from('library_items')->where($qb->expr()->eq('user_id',$qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('library_file_id',$qb->createNamedParameter($libraryFileId)));
        if ($this->db->getDatabaseProvider() !== 'sqlite') $qb->forUpdate();
        $r=$qb->executeQuery();$row=$r->fetch();$r->closeCursor();if($row===false)return null;
        $row['user_edited']=in_array($row['user_edited'],[true,1,'1','t','true'],true);return $row;
    }

    /** Canonical values already produced by metadataCandidate; no database round trip. */
    private function scannerDatabaseValues(array $c): array {
        $map=['publication_type'=>'publicationType','title'=>'title','subtitle'=>'subtitle','creators'=>'creators','publication'=>'publication','series_name'=>'series','series_number'=>'seriesNumber','genre'=>'genre','publication_date'=>'publicationDate','language'=>'language','publisher'=>'publisher','description'=>'description','metadata_source'=>'metadataSource'];
        $row=[];foreach($map as $column=>$key)$row[$column]=$c[$key];
        foreach(['authors_json'=>'authors','subjects_json'=>'subjects','classifications_json'=>'classifications','field_sources'=>'fieldSources','field_values'=>'fieldValues'] as $column=>$key)$row[$column]=json_encode($c[$key],JSON_THROW_ON_ERROR);
        $row['authors_json']=AuthorNames::encode($c['authors']);
        $row['subjects_json']=$this->jsonEncodeList($c['subjects']);
        $row['classifications_json']=$this->jsonEncodeList($c['classifications']);
        return $row;
    }

    private function persistScannerIndexes(string $uid, int $id, array $file, array $candidate, array $row, ?string $previousHash, bool $verifyExisting = false): void {
        $row['cached_path']=(string)($file['cachedPath']??'');$row['scan_status']=(string)($file['scanStatus']??'indexed');$row['extension']=(string)($file['extension']??'');
        $identifiers=IdentifierService::normalizeIdentifierList($candidate['identifiers']??[], $candidate['metadataSource'], false);
        $input=$row;foreach(['field_sources','field_values','metadata_source','user_edited','has_cover_override','scan_status','extension'] as $key)unset($input[$key]);
        // Changing the generator revision forces a rebuild even when source metadata is identical.
        $hash=hash('sha256',json_encode([self::SCANNER_INDEX_REVISION,$input,$identifiers,[$file['fileId']??null,$file['rootId']??null,$file['size']??null,$file['extension']??null]],JSON_THROW_ON_ERROR));
        $row['identifiers']=implode(' ',array_map(static fn(array $v):string=>$v['displayValue'].' '.$v['normalizedValue'],$identifiers));
        $this->writeReviewFilterFlags($uid,$id,$row);
        if ($previousHash === $hash && ($file['previousScanStatus']??null)!=='missing') return;
        $verified = $verifyExisting && $previousHash === null && ($file['previousScanStatus']??null)!=='missing'
            && $this->scannerIndexesMatch($uid,$id,$candidate,$row,$identifiers);
        if (!$verified) {
            $this->refreshItemFacetIndex($uid,$id,$candidate['subjects'],$candidate['classifications'],$this->typeaheadScalarFacets($candidate),false);
            $this->syncItemIdentifiers($uid,$id,$identifiers,false);
            $this->refreshItemSearchIndex($uid,$id,$row,false);
        }
        $qb=$this->db->getQueryBuilder();$qb->update('library_items')->set('scanner_index_hash',$qb->createNamedParameter($hash))
            ->where($qb->expr()->eq('user_id',$qb->createNamedParameter($uid)))->andWhere($qb->expr()->eq('id',$qb->createNamedParameter($id)))->executeStatement();
    }

    /** Legacy/invalidated fingerprints are trusted only after exact, bounded content verification. */
    private function scannerIndexesMatch(string $uid,int $id,array $candidate,array $row,array $identifiers): bool {
        $scalar=$this->typeaheadScalarFacets($candidate);$expected=[];
        foreach (['subject'=>$candidate['subjects'],'classification'=>$candidate['classifications']]+$scalar as $type=>$values) {
            foreach($this->facetRowsForValues($uid,$id,$type,$values,isset($scalar[$type])) as $v)$expected[$v[2]."\0".$v[4]]=$v[3];
        }
        $r=$this->db->executeQuery('SELECT facet_type,facet_value,normalized_value FROM *PREFIX*library_item_facets WHERE user_id=? AND item_id=? LIMIT '.(count($expected)+1),[$uid,$id]);$actual=[];
        while($v=$r->fetch())$actual[$v['facet_type']."\0".$v['normalized_value']]=$v['facet_value'];$r->closeCursor();ksort($actual);ksort($expected);if($actual!==$expected)return false;
        $expected=array_map('strval',$this->searchGramsForText($this->searchDocumentForRow($row)));$r=$this->db->executeQuery('SELECT gram FROM *PREFIX*library_item_search_grams WHERE user_id=? AND item_id=? LIMIT '.(count($expected)+1),[$uid,$id]);$actual=array_column($r->fetchAll(),'gram');$r->closeCursor();sort($actual,SORT_STRING);sort($expected,SORT_STRING);if($actual!==$expected)return false;
        $actual=$this->catalogueIdentifiers($uid,[$id])[$id]??[];
        $sort=static function(array $values):array {usort($values,static fn(array $a,array $b):int=>strcmp(json_encode($a,JSON_THROW_ON_ERROR),json_encode($b,JSON_THROW_ON_ERROR)));return $values;};
        if($sort($actual)!==$sort($identifiers))return false;
        return $this->duplicateIndex?->matchesCurrent($uid,$id)??true;
    }

    private function invalidateScannerIndexHash(string $uid,int $id): void {
        $qb=$this->db->getQueryBuilder();$qb->update('library_items')->set('scanner_index_hash',$qb->createNamedParameter(null))
            ->where($qb->expr()->eq('user_id',$qb->createNamedParameter($uid)))->andWhere($qb->expr()->eq('id',$qb->createNamedParameter($id)))
            ->andWhere($qb->expr()->isNotNull('scanner_index_hash'))->executeStatement();
    }

    public function deleteItemForLibraryFile(string $userId, int $libraryFileId): void {
        $existing = $this->findByLibraryFileId($userId, $libraryFileId);
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_items')
            ->where($qb->expr()->eq('library_file_id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('user_edited', $qb->createNamedParameter(0)))
            ->executeStatement();
        if ($existing !== null && !(bool)$existing['user_edited']) {
            $this->deleteItemFacetIndex($userId, (int)$existing['id']);
            $this->deleteItemSearchIndex($userId, (int)$existing['id']);
            $this->duplicateIndex?->remove($userId, (int)$existing['id']);
        }
    }

    public function hasUserEditedItemForLibraryFile(string $userId, int $libraryFileId): bool {
        $existing = $this->findByLibraryFileId($userId, $libraryFileId);
        return $existing !== null && (bool)$existing['user_edited'];
    }

    public function hasItemForLibraryFile(string $userId, int $libraryFileId): bool {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id')
            ->from('library_items')
            ->where($qb->expr()->eq('library_file_id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->setMaxResults(1)
            ->executeQuery();
        $exists = $result->fetch() !== false;
        $result->closeCursor();
        return $exists;
    }

    public function forgetMissingItem(string $userId, int $itemId): bool {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.library_file_id', 'f.scan_status')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false || (string)$row['scan_status'] !== 'missing') {
            return false;
        }

        $libraryFileId = (int)$row['library_file_id'];

        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
        $this->deleteItemFacetIndex($userId, $itemId);
        $this->deleteItemSearchIndex($userId, $itemId);
        $this->duplicateIndex?->remove($userId, $itemId);

        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_files')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($libraryFileId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('scan_status', $qb->createNamedParameter('missing')))
            ->executeStatement();

        return true;
    }

    /** Snapshot metadata only; reading, stars and ratings do not invalidate inference undo. */
    public function inferenceState(string $userId, int $itemId, bool $lock = false): array {
        $columns = ['authors_json', 'library_file_id', 'metadata_source', 'user_edited', 'field_sources', 'field_values'];
        foreach (self::PUBLICATION_FIELDS as $field) $columns[] = $this->databaseColumnForField($field);
        if ($lock && $this->db->getDatabaseProvider() === 'sqlite') {
            // SQLite serializes writers and has no SELECT FOR UPDATE. Claim its write lock first.
            $claim = $this->db->getQueryBuilder();
            $claim->update('library_items')->set('id', $claim->createFunction('id'))
                ->where($claim->expr()->eq('id', $claim->createNamedParameter($itemId)))
                ->andWhere($claim->expr()->eq('user_id', $claim->createNamedParameter($userId)))->executeStatement();
        }
        $qb = $this->db->getQueryBuilder();
        $qb->select(...$columns)->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)));
        if ($lock && $this->db->getDatabaseProvider() !== 'sqlite') $qb->forUpdate();
        $result = $qb->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) throw new \OutOfBoundsException('missing_item');
        $row['user_edited'] = in_array($row['user_edited'], [true, 1, '1', 't', 'true'], true) ? '1' : '0';
        return array_map(static fn($value) => $value === null ? null : (string)$value, $row);
    }

    /** Read-only inference snapshots in one bounded, ownership-scoped query. Writes still lock each item. */
    public function inferenceReadRows(string $uid, array $ids): array {
        if ($ids === [] || count($ids) > 40) return [];
        $columns = ['id','authors_json','library_file_id','metadata_source','user_edited','field_sources','field_values'];
        foreach (self::PUBLICATION_FIELDS as $field) $columns[] = $this->databaseColumnForField($field);
        $columns = array_map(static fn($column) => 'i.' . $column, $columns);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select(...$columns)->addSelect('f.file_id','f.cached_path','f.root_id','r.path')
            ->from('library_items','i')->innerJoin('i','library_files','f',$qb->expr()->eq('i.library_file_id','f.id'))
            ->innerJoin('f','library_roots','r',$qb->expr()->eq('f.root_id','r.id'))
            ->where($qb->expr()->eq('i.user_id',$qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('f.user_id',$qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('r.user_id',$qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->in('i.id',$qb->createNamedParameter(array_map('intval',$ids),IQueryBuilder::PARAM_INT_ARRAY)))
            ->executeQuery();
        $rows = $result->fetchAll(); $result->closeCursor();
        return $rows;
    }

    /** Called inside InferenceBatchService's transaction after locking and snapshot validation. */
    public function writeInferenceState(string $userId, int $itemId, array $values): void {
        $allowed = ['creators', 'metadata_source', 'user_edited', 'field_sources'];
        foreach (InferenceChangeSet::FIELDS as [$column]) $allowed[] = $column;
        if (array_diff(array_keys($values), $allowed)) throw new \InvalidArgumentException('invalid_fields');
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)));
        foreach ($values as $column => $value) $qb->set($column, $qb->createNamedParameter($value));
        $qb->executeStatement();
        $item = $this->findItem($userId, $itemId);
        $this->refreshReviewFilterFlags($userId, $itemId);
        $this->refreshItemFacetIndex($userId, $itemId, $item['subjects'], $item['classifications'], $this->typeaheadScalarFacets($item));
        $this->refreshItemSearchIndex($userId, $itemId);
    }

    public function updateItem(string $userId, int $itemId, array $metadata): void {
        $explicitAuthors = array_key_exists('authors', $metadata);
        $metadata = $this->validateEditableMetadata($metadata);
        $existing = $this->findItem($userId, $itemId);
        $authors = array_key_exists('authors', $metadata)
            ? AuthorNames::normalize($metadata['authors'])
            : ((string)($metadata['creators'] ?? '') === ($existing['creators'] ?? '')
                ? ($existing['authors'] ?? []) : AuthorNames::fromText($metadata['creators'] ?? null, true));
        $metadata['authors'] = $authors;
        if ($explicitAuthors && ($authors !== ($existing['authors'] ?? []) || (string)($metadata['creators'] ?? '') !== ($existing['creators'] ?? ''))) $metadata['creators'] = implode('; ', $authors);
        $now = time();
        $publicationType = $this->normalizePublicationType((string)($metadata['publicationType'] ?? 'other'));
        $title = trim((string)($metadata['title'] ?? '')) ?: 'Untitled publication';
        $existingProvenance = $this->existingFieldProvenance($userId, $itemId);
        if ($authors !== ($existing['authors'] ?? []) || (string)($metadata['creators'] ?? '') !== ($existing['creators'] ?? '')) $existingProvenance['fieldSources']['creators'] = 'user';

        foreach (['series', 'seriesNumber', 'genre'] as $field) {
            if (array_key_exists($field, $metadata)) $existingProvenance['fieldSources'][$field] = 'user';
        }

        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('publication_type', $qb->createNamedParameter($publicationType))
            ->set('title', $qb->createNamedParameter($title))
            ->set('subtitle', $qb->createNamedParameter($this->nullableString($metadata['subtitle'] ?? null)))
            ->set('creators', $qb->createNamedParameter($this->nullableString($metadata['creators'] ?? null)))
            ->set('authors_json', $qb->createNamedParameter(AuthorNames::encode($authors)))
            ->set('publication', $qb->createNamedParameter($this->nullableString($metadata['publication'] ?? null)))
            ->set('publication_date', $qb->createNamedParameter($this->nullableString($metadata['publicationDate'] ?? null)))
            ->set('language', $qb->createNamedParameter($this->nullableString($metadata['language'] ?? null)))
            ->set('publisher', $qb->createNamedParameter($this->nullableString($metadata['publisher'] ?? null)))
            ->set('description', $qb->createNamedParameter($this->nullableString($metadata['description'] ?? null)))
            ->set('subjects_json', $qb->createNamedParameter($this->jsonEncodeList($this->normalizeMultiValueField($metadata['subjects'] ?? []))))
            ->set('classifications_json', $qb->createNamedParameter($this->jsonEncodeList($this->normalizeMultiValueField($metadata['classifications'] ?? []))))
            ->set('personal_rating', $qb->createNamedParameter($this->normalizePersonalRating($metadata['personalRating'] ?? null)))
            ->set('metadata_source', $qb->createNamedParameter('user'))
            ->set('field_sources', $qb->createNamedParameter(json_encode($existingProvenance['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($existingProvenance['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('updated_at', $qb->createNamedParameter($now))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)));
        foreach (['series', 'seriesNumber', 'genre'] as $field) {
            if (array_key_exists($field, $metadata)) $qb->set($this->databaseColumnForField($field), $qb->createNamedParameter($metadata[$field]));
        }
        $affected = $qb->executeStatement();

        if ($affected > 0) {
            $this->refreshReviewFilterFlags($userId, $itemId);
            $this->refreshItemFacetIndex(
                $userId,
                $itemId,
                $this->normalizeMultiValueField($metadata['subjects'] ?? []),
                $this->normalizeMultiValueField($metadata['classifications'] ?? []),
                $this->typeaheadScalarFacets($metadata)
            );
        }
        $this->syncItemIdentifiers($userId, $itemId, IdentifierService::normalizeIdentifierList($metadata['identifiers'] ?? [], 'user', true));
        if ($affected > 0) {
            $this->refreshItemSearchIndex($userId, $itemId);
        }
    }

    /**
     * @param array<string, mixed> $metadata
     * @return array<string, mixed>
     */
    private function validateEditableMetadata(array $metadata): array {
        if (ScannerMetadataFields::rejected($metadata)!==[]) throw new \InvalidArgumentException('Metadata exceeds supported field limits.');
        if (array_key_exists('authors', $metadata)) AuthorNames::normalize($metadata['authors']);
        foreach (['series', 'seriesNumber', 'genre'] as $field) {
            if (array_key_exists($field, $metadata)) $metadata[$field] = $this->normalizeExtendedField($field, $metadata[$field]);
        }
        $publicationDate = trim((string)($metadata['publicationDate'] ?? ''));
        if ($publicationDate !== '' && preg_match('/^\d{4}(-\d{2}){0,2}$/', $publicationDate) !== 1) {
            throw new \InvalidArgumentException('Publication date must use YYYY, YYYY-MM, or YYYY-MM-DD.');
        }
        if ($publicationDate !== '') {
            $parts = array_map('intval', explode('-', $publicationDate));
            $year = $parts[0];
            $month = $parts[1] ?? 1;
            $day = $parts[2] ?? 1;
            if ($year < 1 || $month < 1 || $month > 12 || $day < 1 || !checkdate($month, $day, $year)) {
                throw new \InvalidArgumentException('Publication date must use YYYY, YYYY-MM, or YYYY-MM-DD.');
            }
        }

        $language = trim((string)($metadata['language'] ?? ''));
        foreach ($this->normalizeLanguageList($language) as $languageCode) {
            if (preg_match('/^[a-z]{2,3}(-[A-Z]{2})?$/', $languageCode) !== 1) {
                throw new \InvalidArgumentException('Language must use short codes such as de, en, fr, or en-US.');
            }
        }

        $this->normalizePersonalRating($metadata['personalRating'] ?? null);

        return $metadata;
    }

    /**
     * @return array<int, string>
     */
    private function normalizeLanguageList(string $language): array {
        $parts = preg_split('/[;,\n]+/u', $language) ?: [];
        $normalized = [];
        foreach ($parts as $part) {
            $entry = trim($part);
            if ($entry !== '') {
                $normalized[] = $entry;
            }
        }
        return $normalized;
    }

    public function setStarred(string $userId, int $itemId, bool $starred): bool {
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('starred', $qb->createNamedParameter($starred ? 1 : 0))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    public function setWorkflowStatus(string $userId, int $itemId, string $workflowStatus): bool {
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('workflow_status', $qb->createNamedParameter($this->normalizeWorkflowStatus($workflowStatus)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    public function markOpened(string $userId, int $itemId): ?array {
        $now = time();
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('last_opened_at', $qb->createNamedParameter($now))
            ->set('updated_at', $qb->createNamedParameter($now))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0 ? $this->findItem($userId, $itemId) : null;
    }

    private function setLastOpenedAtForImport(string $userId, int $itemId, mixed $lastOpenedAt): bool {
        $timestamp = is_numeric($lastOpenedAt) ? max(0, (int)$lastOpenedAt) : 0;
        $value = $timestamp > 0 ? $timestamp : null;
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('last_opened_at', $qb->createNamedParameter($value))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        return $affected > 0;
    }

    public function resetFieldToScannerCandidate(string $userId, int $itemId, string $field): bool {
        $column = $this->databaseColumnForField($field);
        if ($column === null) {
            return false;
        }

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('field_sources', 'field_values')
            ->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return false;
        }

        $candidateValues = $this->decodeJsonMap($row['field_values'] ?? null);
        $candidateSources = $this->decodeJsonMap($row['field_sources'] ?? null);
        if (!array_key_exists($field, $candidateValues)) {
            return false;
        }

        if ($field === 'creators') $candidateValues['authors'] = $candidateValues['authors'] ?? AuthorNames::encode(AuthorNames::fromText($candidateValues[$field]));
        $candidateSources[$field] = $field === 'creators' ? ($candidateValues['authorsSource'] ?? 'scanner') : ($candidateSources[$field] ?? 'scanner');
        $candidateValues[$field] = (string)$candidateValues[$field];

        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items');
        if ($field === 'creators') $qb->set('authors_json', $qb->createNamedParameter($candidateValues['authors']));
        $affected = $qb
            ->set($column, $qb->createNamedParameter($this->databaseValueForField($field, $candidateValues[$field])))
            ->set('metadata_source', $qb->createNamedParameter('mixed'))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('field_sources', $qb->createNamedParameter(json_encode($candidateSources, JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($candidateValues, JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        if ($affected > 0) {
            $this->refreshReviewFilterFlags($userId, $itemId);
            $item = $this->findItem($userId, $itemId);
            $this->refreshItemFacetIndex($userId, $itemId, $item['subjects'], $item['classifications'], $this->typeaheadScalarFacets($item));
            $this->refreshItemSearchIndex($userId, $itemId);
        }
        return $affected > 0;
    }

    public function resetAllFieldsToScannerCandidates(string $userId, int $itemId): bool {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('field_sources', 'field_values')
            ->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return false;
        }

        $candidateValues = $this->decodeJsonMap($row['field_values'] ?? null);
        $candidateSources = $this->decodeJsonMap($row['field_sources'] ?? null);
        $qb = $this->db->getQueryBuilder();
        $update = $qb->update('library_items');
        $hasCandidate = false;
        foreach (self::PUBLICATION_FIELDS as $field) {
            if (!array_key_exists($field, $candidateValues)) {
                continue;
            }
            $column = $this->databaseColumnForField($field);
            if ($column === null) {
                continue;
            }
            $candidateSources[$field] = $field === 'creators' ? ($candidateValues['authorsSource'] ?? 'scanner') : ($candidateSources[$field] ?? 'scanner');
            $candidateValues[$field] = (string)$candidateValues[$field];
            $update->set($column, $qb->createNamedParameter($this->databaseValueForField($field, $candidateValues[$field])));
            if ($field === 'creators') $update->set('authors_json', $qb->createNamedParameter($candidateValues['authors'] ?? AuthorNames::encode(AuthorNames::fromText($candidateValues[$field]))));
            $hasCandidate = true;
        }
        if (!$hasCandidate) {
            return false;
        }

        $affected = $update
            ->set('metadata_source', $qb->createNamedParameter('mixed'))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('field_sources', $qb->createNamedParameter(json_encode($candidateSources, JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($candidateValues, JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        if ($affected > 0) {
            $this->refreshReviewFilterFlags($userId, $itemId);
            $item = $this->findItem($userId, $itemId);
            $this->refreshItemFacetIndex($userId, $itemId, $item['subjects'], $item['classifications'], $this->typeaheadScalarFacets($item));
            $this->refreshItemSearchIndex($userId, $itemId);
        }
        return $affected > 0;
    }

    public function bulkResetFieldsToScannerCandidates(string $userId, mixed $itemIds): array {
        $ids = $this->normalizeBulkItemIds($itemIds);
        $resetItems = 0;
        foreach ($ids as $itemId) {
            if ($this->resetAllFieldsToScannerCandidates($userId, $itemId)) {
                $resetItems++;
            }
        }

        return [
            'requestedItems' => count($ids),
            'resetItems' => $resetItems,
            'skippedItems' => count($ids) - $resetItems,
        ];
    }

    public function previewBatchMetadataEdit(string $userId, array $itemIds, string $field, string $value): array {
        $ids = $this->normalizeBulkItemIds($itemIds);
        $field = trim($field);
        if (!in_array($field, self::PUBLICATION_FIELDS, true) || $this->databaseColumnForField($field) === null) {
            return [
                'previewOnly' => true,
                'invalidField' => true,
                'field' => $field,
                'value' => $value,
                'requestedItems' => count($ids),
                'changedItems' => 0,
                'unchangedItems' => 0,
                'skippedItems' => count($ids),
                'examples' => [],
            ];
        }

        $normalizedValue = $this->databaseValueForField($field, $value);
        $changedItems = 0;
        $unchangedItems = 0;
        $skippedItems = 0;
        $examples = [];
        foreach ($ids as $itemId) {
            $item = $this->findItem($userId, $itemId);
            if ($item === null) {
                $skippedItems++;
                continue;
            }
            $currentValue = $this->previewComparableValue($item, $field);
            $willChange = $currentValue !== $normalizedValue;
            if ($willChange) {
                $changedItems++;
            } else {
                $unchangedItems++;
            }
            if (count($examples) < 5) {
                $examples[] = [
                    'itemId' => (int)$item['id'],
                    'title' => (string)$item['title'],
                    'currentValue' => $currentValue,
                    'newValue' => $normalizedValue,
                    'willChange' => $willChange,
                ];
            }
        }

        return [
            'previewOnly' => true,
            'invalidField' => false,
            'field' => $field,
            'value' => $normalizedValue,
            'requestedItems' => count($ids),
            'changedItems' => $changedItems,
            'unchangedItems' => $unchangedItems,
            'skippedItems' => $skippedItems,
            'examples' => $examples,
        ];
    }

    public function applyBatchMetadataEdit(string $userId, array $itemIds, string $field, string $value): array {
        $ids = $this->normalizeBulkItemIds($itemIds);
        $field = trim($field);
        $preview = $this->previewBatchMetadataEdit($userId, $ids, $field, $value);
        if (!empty($preview['invalidField'])) {
            return array_merge($preview, [
                'previewOnly' => false,
                'appliedItems' => 0,
            ]);
        }

        $normalizedValue = $preview['value'] ?? $this->databaseValueForField($field, $value);
        $appliedItems = 0;
        $unchangedItems = 0;
        $skippedItems = 0;
        foreach ($ids as $itemId) {
            $item = $this->findItem($userId, $itemId);
            if ($item === null) {
                $skippedItems++;
                continue;
            }
            if ($this->previewComparableValue($item, $field) === $normalizedValue) {
                $unchangedItems++;
                continue;
            }
            if ($this->updateSingleMetadataField($userId, $itemId, $field, $normalizedValue)) {
                $appliedItems++;
            } else {
                $skippedItems++;
            }
        }

        return array_merge($preview, [
            'previewOnly' => false,
            'requestedItems' => count($ids),
            'appliedItems' => $appliedItems,
            'changedItems' => $appliedItems,
            'unchangedItems' => $unchangedItems,
            'skippedItems' => $skippedItems,
        ]);
    }

    private function updateSingleMetadataField(string $userId, int $itemId, string $field, ?string $normalizedValue): bool {
        $column = $this->databaseColumnForField($field);
        if ($column === null || !in_array($field, self::PUBLICATION_FIELDS, true)) {
            return false;
        }
        $this->validateEditableMetadata([$field => $normalizedValue]);
        $existingProvenance = $this->existingFieldProvenance($userId, $itemId);
        $existingProvenance['fieldSources'][$field] = 'user';

        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items');
        if ($field === 'creators') $qb->set('authors_json', $qb->createNamedParameter(AuthorNames::encode(AuthorNames::fromText($normalizedValue, true))));
        $affected = $qb
            ->set($column, $qb->createNamedParameter($normalizedValue))
            ->set('metadata_source', $qb->createNamedParameter('user'))
            ->set('field_sources', $qb->createNamedParameter(json_encode($existingProvenance['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($existingProvenance['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('user_edited', $qb->createNamedParameter(1))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
        if ($affected > 0) {
            $this->refreshReviewFilterFlags($userId, $itemId);
            $item = $this->findItem($userId, $itemId);
            $this->refreshItemFacetIndex($userId, $itemId, $item['subjects'], $item['classifications'], $this->typeaheadScalarFacets($item));
            $this->refreshItemSearchIndex($userId, $itemId);
        }
        return $affected > 0;
    }

    private function previewComparableValue(array $item, string $field): ?string {
        if ($field === 'publicationType') {
            return $this->normalizePublicationType((string)($item[$field] ?? 'other'));
        }
        if ($field === 'title') {
            return trim((string)($item[$field] ?? '')) ?: 'Untitled publication';
        }
        if ($field === 'subjects' || $field === 'classifications') {
            return $this->jsonEncodeList($this->normalizeMultiValueField($item[$field] ?? []));
        }
        $current = trim((string)($item[$field] ?? ''));
        return $current === '' ? null : $current;
    }

    /**
     * @return array<int, int>
     */
    private function normalizeBulkItemIds(mixed $itemIds): array {
        if (is_array($itemIds)) {
            $parts = $itemIds;
        } else {
            $parts = preg_split('/[^0-9]+/', (string)$itemIds) ?: [];
        }
        $ids = [];
        foreach ($parts as $part) {
            $id = (int)$part;
            if ($id > 0) {
                $ids[] = $id;
            }
        }
        $ids = array_values(array_unique($ids));
        if (count($ids) > self::BULK_ITEM_LIMIT) {
            throw new BatchLimitExceededException(self::BULK_ITEM_LIMIT);
        }
        return $ids;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function listItems(string $userId): array {
        return $this->queryCatalogue($userId, [], ['page' => 1, 'limit' => 500])['items'];
    }

    /**
     * Fetches the small, independently ordered rows used by Home. This deliberately
     * does not call queryCatalogue(), so Home never builds catalogue totals/facets or
     * reads a catalogue page as a source for recommendations.
     *
     * @return array{continueReading:array<int, array<string, mixed>>,recentlyAdded:array<int, array<string, mixed>>}
     */
    public function homeRows(string $userId, int $rowLimit = 8): array {
        $rowLimit = max(1, min(12, $rowLimit));

        $continueQuery = $this->catalogueQueryBuilder($userId, []);
        $continueQuery->andWhere($continueQuery->expr()->isNotNull('i.last_opened_at'))
            ->andWhere($continueQuery->expr()->gt('i.last_opened_at', $continueQuery->createNamedParameter(0)))
            ->orderBy('i.last_opened_at', 'DESC')
            ->addOrderBy('i.id', 'DESC');

        $recentQuery = $this->catalogueQueryBuilder($userId, []);
        $recentQuery->orderBy('i.library_file_id', 'DESC')
            ->addOrderBy('i.id', 'DESC');

        return [
            'continueReading' => $this->fetchBoundedCatalogueRows($continueQuery, $rowLimit),
            'recentlyAdded' => $this->fetchBoundedCatalogueRows($recentQuery, $rowLimit),
        ];
    }

    /** @return array<int, array{shelf:string,itemCount:int}> */
    public function homeShelfSummaries(string $userId, int $limit = 8): array {
        $limit = max(1, min(12, $limit));
        $qb = $this->db->getQueryBuilder();
        $shelfExpression = $qb->createFunction("COALESCE(NULLIF(r.label, ''), r.path)");
        $result = $qb->selectAlias($shelfExpression, 'shelf')
            ->selectAlias($qb->createFunction('COUNT(i.id)'), 'item_count')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->groupBy($shelfExpression)
            ->orderBy('item_count', 'DESC')
            ->addOrderBy('shelf', 'ASC')
            ->setMaxResults($limit)
            ->executeQuery();

        $shelves = [];
        while ($row = $result->fetch()) {
            $shelf = trim((string)($row['shelf'] ?? ''));
            if ($shelf !== '') {
                $shelves[] = ['shelf' => $shelf, 'itemCount' => (int)($row['item_count'] ?? 0)];
            }
        }
        $result->closeCursor();
        return $shelves;
    }

    /** @return array<int, array{id:int,shelf:string,path:string,enabled:bool,itemCount:int}> */
    public function shelfSummaries(string $userId, int $limit = 200): array {
        $limit = max(1, min(200, $limit));
        $qb = $this->db->getQueryBuilder();
        $shelfExpression = $qb->createFunction("COALESCE(NULLIF(r.label, ''), r.path)");
        $result = $qb->select('r.id', 'r.path', 'r.enabled')
            ->selectAlias($shelfExpression, 'shelf')
            ->selectAlias($qb->createFunction('COUNT(i.id)'), 'item_count')
            ->from('library_roots', 'r')
            ->leftJoin('r', 'library_files', 'f', $qb->expr()->andX(
                $qb->expr()->eq('f.root_id', 'r.id'),
                $qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)),
                $qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')),
            ))
            ->leftJoin('f', 'library_items', 'i', $qb->expr()->andX(
                $qb->expr()->eq('i.library_file_id', 'f.id'),
                $qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)),
            ))
            ->where($qb->expr()->eq('r.user_id', $qb->createNamedParameter($userId)))
            ->groupBy('r.id', 'r.path', 'r.enabled', $shelfExpression)
            ->orderBy('r.enabled', 'DESC')
            ->addOrderBy('shelf', 'ASC')
            ->setMaxResults($limit)
            ->executeQuery();

        $shelves = [];
        while ($row = $result->fetch()) {
            $shelves[] = [
                'id' => (int)$row['id'],
                'shelf' => (string)$row['shelf'],
                'path' => (string)$row['path'],
                'enabled' => (bool)$row['enabled'],
                'itemCount' => (int)($row['item_count'] ?? 0),
            ];
        }
        $result->closeCursor();
        return $shelves;
    }

    /** @return array<int, array{id:string,rootId:int,label:string,path:string,itemCount:int,childCount:int,hasChildren:bool}> */
    public function shelfTree(string $userId, int $limit = 200): array {
        $limit = max(1, min(200, $limit));
        $qb = $this->db->getQueryBuilder();
        $shelfExpression = $qb->createFunction("COALESCE(NULLIF(r.label, ''), r.path)");
        $result = $qb->select('r.id', 'r.path')
            ->selectAlias($shelfExpression, 'shelf')
            ->selectAlias($qb->createFunction('COUNT(i.id)'), 'item_count')
            ->selectAlias($qb->createFunction('COUNT(f.id)'), 'file_count')
            ->from('library_roots', 'r')
            ->leftJoin('r', 'library_files', 'f', $qb->expr()->andX(
                $qb->expr()->eq('f.root_id', 'r.id'),
                $qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)),
                $qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')),
            ))
            ->leftJoin('f', 'library_items', 'i', $qb->expr()->andX(
                $qb->expr()->eq('i.library_file_id', 'f.id'),
                $qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)),
            ))
            ->where($qb->expr()->eq('r.user_id', $qb->createNamedParameter($userId)))
            ->groupBy('r.id', 'r.path', $shelfExpression)
            ->orderBy('shelf', 'ASC')
            ->setMaxResults($limit)
            ->executeQuery();

        $roots = [];
        while ($row = $result->fetch()) {
            $rootId = (int)$row['id'];
            $rootPath = $this->normalizeShelfPath((string)$row['path']);
            $childQb = $this->db->getQueryBuilder();
            $childPrefix = rtrim($rootPath, '/') . '/';
            $hasChildren = (bool)$childQb->select('f.id')->from('library_files', 'f')
                ->where($childQb->expr()->eq('f.user_id', $childQb->createNamedParameter($userId)))
                ->andWhere($childQb->expr()->eq('f.root_id', $childQb->createNamedParameter($rootId)))
                ->andWhere($childQb->expr()->neq('f.scan_status', $childQb->createNamedParameter('sidecar')))
                ->andWhere($childQb->expr()->like('f.cached_path', $childQb->createNamedParameter($this->escapeLikeParameter($childPrefix) . '%/%')))
                ->setMaxResults(1)->executeQuery()->fetch();
            $roots[] = ['id' => 'root-' . $rootId, 'rootId' => $rootId, 'label' => (string)$row['shelf'], 'path' => $rootPath, 'itemCount' => (int)($row['item_count'] ?? 0), 'childCount' => $hasChildren ? 1 : 0, 'hasChildren' => $hasChildren];
        }
        $result->closeCursor();
        return $roots;
    }

    /** @return array{nodes:array<int, array<string, mixed>>,hasMore:bool,nextOffset:int} */
    public function shelfChildren(string $userId, int $rootId, string $parentPath, int $limit = 100, int $offset = 0): array {
        $limit = max(1, min(100, $limit));
        $offset = max(0, $offset);
        $parentPath = $this->normalizeShelfPath($parentPath);
        $rootQb = $this->db->getQueryBuilder();
        $root = $rootQb->select('r.path')->from('library_roots', 'r')
            ->where($rootQb->expr()->eq('r.id', $rootQb->createNamedParameter($rootId)))
            ->andWhere($rootQb->expr()->eq('r.user_id', $rootQb->createNamedParameter($userId)))
            ->executeQuery()->fetch();
        if ($root === false) return ['nodes' => [], 'hasMore' => false, 'nextOffset' => $offset];
        $rootPath = $this->normalizeShelfPath((string)$root['path']);
        if ($parentPath !== $rootPath && !str_starts_with($parentPath, rtrim($rootPath, '/') . '/')) return ['nodes' => [], 'hasMore' => false, 'nextOffset' => $offset];

        $prefix = rtrim($parentPath, '/') . '/';
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.cached_path')->selectAlias($qb->createFunction('COUNT(i.id)'), 'item_count')
            ->from('library_files', 'f')
            ->leftJoin('f', 'library_items', 'i', $qb->expr()->andX(
                $qb->expr()->eq('i.library_file_id', 'f.id'),
                $qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)),
            ))
            ->where($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('f.root_id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->andWhere($qb->expr()->like('f.cached_path', $qb->createNamedParameter($this->escapeLikeParameter($parentPath . '/') . '%')))
            ->groupBy('f.cached_path')->orderBy('f.cached_path', 'ASC')->executeQuery();
        $children = [];
        while ($row = $result->fetch()) {
            $relative = substr((string)$row['cached_path'], strlen($prefix));
            $slash = strpos($relative, '/');
            if ($slash === false) continue;
            $label = substr($relative, 0, $slash);
            $path = $prefix . $label;
            $children[$path] ??= ['id' => 'root-' . $rootId . '-' . $path, 'rootId' => $rootId, 'label' => $label, 'path' => $path, 'itemCount' => 0, 'childCount' => 0, 'hasChildren' => false];
            $children[$path]['itemCount'] += (int)($row['item_count'] ?? 0);
            $remainder = substr($relative, $slash + 1);
            if (str_contains($remainder, '/')) { $children[$path]['hasChildren'] = true; $children[$path]['childCount'] = 1; }
        }
        $result->closeCursor();
        $children = array_values($children);
        $nodes = array_slice($children, $offset, $limit);
        return [
            'nodes' => $nodes,
            'hasMore' => $offset + count($nodes) < count($children),
            'nextOffset' => $offset + count($nodes),
        ];
    }

    private function normalizeShelfPath(string $path): string {
        $path = str_replace('\\', '/', trim($path));
        return $path === '/' ? '/' : rtrim($path, '/');
    }

    /** @return array<int, array<string, mixed>> */
    private function fetchBoundedCatalogueRows(IQueryBuilder $qb, int $limit): array {
        $result = $qb->setFirstResult(0)->setMaxResults($limit)->executeQuery();
        $items = [];
        while ($row = $result->fetch()) {
            $items[] = $this->normalizeJoinedItemRow($row);
        }
        $result->closeCursor();
        return $items;
    }

    /**
     * @return array<string, int>
     */
    public function smartViewCounts(string $userId, bool $includeScannerConflicts = true): array {
        $views = [
            'recently-opened' => ['recentlyOpened' => '1', 'sort' => 'lastOpened'],
            'starred' => ['starred' => '1'],
            'to-read' => ['workflowStatus' => 'to-read'],
            'reading' => ['workflowStatus' => 'reading'],
            'finished' => ['workflowStatus' => 'finished'],
            'needs-action' => ['workflowStatus' => 'needs-action'],
            'needs-metadata' => ['needsMetadata' => '1'],
            'scanner-conflicts' => ['scannerConflicts' => '1'],
            'metadata-errors' => ['status' => 'metadata_error'],
            'placeholder-covers' => ['coverReview' => 'placeholder'],
            'no-creator' => ['noCreator' => '1'],
            'no-publication' => ['noPublication' => '1'],
            'missing-date' => ['noDate' => '1'],
            'title-from-filename' => ['titleFromFilename' => '1'],
            'weak-filename-metadata' => ['weakMetadata' => 'filename'],
            'no-description' => ['noDescription' => '1'],
            'unsupported-containers' => ['unsupportedContainer' => '1'],
            'unreviewed-imports' => ['unreviewedImports' => '1'],
        ];

        $counts = [];
        foreach ($views as $key => $filters) {
            if (!$includeScannerConflicts && $key === 'scanner-conflicts') {
                continue;
            }
            $counts[$key] = $this->countCatalogue($userId, $filters);
        }
        return $counts;
    }

    /**
     * @param array<string, mixed> $filters
     */
    public function countCatalogue(string $userId, array $filters): int {
        if (trim((string)($filters['scannerConflicts'] ?? '')) === '1') {
            return $this->countScannerConflictCatalogueItems($userId, $filters);
        }

        return $this->countCatalogueItems($userId, $filters);
    }

    /**
     * @param array<string, mixed> $filters
     * @return array<int, int>
     */
    public function itemIdsForCatalogueFilters(string $userId, array $filters, int $limit = 5000): array {
        $limit = max(1, min(self::BULK_ITEM_LIMIT, $limit));
        if (trim((string)($filters['scannerConflicts'] ?? '')) === '1') {
            $filtersWithoutConflict = $filters;
            unset($filtersWithoutConflict['scannerConflicts']);
            $baseResult = $this->queryCatalogue($userId, $filtersWithoutConflict, ['page' => 1, 'limit' => 1]);
            $baseTotal = (int)$baseResult['total'];
            if ($baseTotal > $limit) {
                throw new BatchLimitExceededException($limit);
            }

            $ids = [];
            $page = 1;
            do {
                $result = $this->queryCatalogue($userId, $filtersWithoutConflict, ['page' => $page, 'limit' => 500]);
                foreach ($result['items'] as $item) {
                    if ($this->itemHasScannerConflict($item)) {
                        $ids[] = (int)$item['id'];
                    }
                }
                $page++;
            } while (($page - 1) * 500 < $baseTotal && count($result['items']) > 0);

            return array_values(array_unique($ids));
        }

        $ids = [];
        $page = 1;
        do {
            $result = $this->queryCatalogue($userId, $filters, ['page' => $page, 'limit' => 500]);
            $total = (int)$result['total'];
            if ($total > $limit) {
                throw new BatchLimitExceededException($limit);
            }
            foreach ($result['items'] as $item) {
                $ids[] = (int)$item['id'];
            }
            $page++;
        } while (count($ids) < $total && count($result['items']) > 0);

        return array_values(array_unique($ids));
    }

    /**
     * @param array{q?:string,type?:string,publication?:string,year?:string,creator?:string,format?:string,publisher?:string,tag?:string,shelf?:string,status?:string,workflowStatus?:string,subject?:string,classification?:string,starred?:string,recentlyOpened?:string,sort?:string,scannerConflicts?:string,taggedFileIds?:array<int, int>} Legacy test marker; current contract also accepts language?:string.
     * @param array{q?:string,type?:string,publication?:string,year?:string,language?:string,creator?:string,format?:string,publisher?:string,tag?:string,shelf?:string,status?:string,workflowStatus?:string,subject?:string,classification?:string,starred?:string,recentlyOpened?:string,sort?:string,scannerConflicts?:string,taggedFileIds?:array<int, int>} $filters
     * @param array{page:int,limit:int} $pagination
     * @return array{items:array<int, array<string, mixed>>,total:int,facets:array{publicationTypes:array<int, string>,publishers:array<int, string>,shelves:array<int, string>,formats:array<int, string>,publications:array<int, string>,publicationSummaries:array<int, array{publication:string,itemCount:int}>,publicationYears:array<int, string>,creators:array<int, string>,scanStatuses:array<int, string>,workflowStatuses:array<int, string>,subjects:array<int, string>,classifications:array<int, string>}}
     */
    public function queryCatalogue(string $userId, array $filters, array $pagination, bool $includeFacets = true): array {
        $page = max(1, (int)($pagination['page'] ?? 1));
        $limit = max(1, min(500, (int)($pagination['limit'] ?? 100)));
        $offset = ($page - 1) * $limit;

        if (trim((string)($filters['scannerConflicts'] ?? '')) === '1') {
            return $this->queryScannerConflictCatalogue($userId, $filters, $offset, $limit, $includeFacets);
        }

        $metadataReviewProjection = ($filters['weakMetadata'] ?? '') === 'filename';
        $qb = $this->catalogueQueryBuilder($userId, $filters, $metadataReviewProjection);
        $sort = (string)($filters['sort'] ?? 'title');
        $this->applyCatalogueSort($qb, $sort);
        $cursor = $sort === 'title' ? CatalogueCursor::decode((string)($pagination['cursor'] ?? ''), $userId, $filters, $limit) : null;
        $backward = ($cursor['direction'] ?? '') === 'previous';
        if ($sort === 'title') $qb->addOrderBy('i.id', 'ASC');
        if ($cursor !== null) {
            $compare = $backward ? 'lt' : 'gt';
            $qb->andWhere($qb->expr()->orX(
                $qb->expr()->$compare('i.title', $qb->createNamedParameter($cursor['title'])),
                $qb->expr()->andX($qb->expr()->eq('i.title', $qb->createNamedParameter($cursor['title'])), $qb->expr()->$compare('i.id', $qb->createNamedParameter($cursor['id'])))
            ));
            if ($backward) $qb->orderBy('i.title', 'DESC')->addOrderBy('i.id', 'DESC');
        }
        if ($cursor === null && $offset > 0) {
            // Page through a narrow projection, then load only this page's metadata.
            // All filters/joins remain on both queries, including ownership constraints.
            $thin = clone $qb;
            $thinColumns = $sort === 'title' ? ['i.id','i.title','i.library_file_id']
                : ['i.id','i.title','i.library_file_id','i.publication_date','i.publication','i.creators','i.last_opened_at','f.extension'];
            if ($this->catalogueProjectionRequiresDistinct($filters)) $thin->selectDistinct($thinColumns);
            else $thin->select($thinColumns);
            $selected = $thin->setFirstResult($offset)->setMaxResults($limit)->executeQuery();
            $ids = array_map('intval', array_column($selected->fetchAll(), 'id')); $selected->closeCursor();
            $qb->andWhere($ids === [] ? $qb->createFunction('1=0')
                : $qb->expr()->in('i.id', $qb->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)));
            $offset = 0;
        }
        $result = $qb
            ->setFirstResult($cursor === null ? $offset : 0)
            ->setMaxResults($limit)
            ->executeQuery();

        $rows = $result->fetchAll();
        $result->closeCursor();
        if ($backward) $rows = array_reverse($rows);
        $identifiers = $this->catalogueIdentifiers($userId, array_map('intval', array_column($rows, 'id')));
        $items = array_map(fn(array $row): array => $this->normalizeJoinedItemRow($row, $identifiers[(int)$row['id']] ?? []), $rows);

        return [
            'items' => $items,
            'nextCursor' => $sort === 'title' && $rows !== [] ? CatalogueCursor::encode($userId, $filters, $limit, $rows[array_key_last($rows)], 'next') : '',
            'previousCursor' => $sort === 'title' && $rows !== [] ? CatalogueCursor::encode($userId, $filters, $limit, $rows[0], 'previous') : '',
            'total' => $this->countCatalogueItems($userId, $filters),
            'facets' => $includeFacets ? $this->catalogueFacets($userId, $filters) : $this->emptyCatalogueFacets(),
        ];
    }

    /** @return array<string, array> */
    private function emptyCatalogueFacets(): array {
        return [
            'publicationTypes' => [], 'publishers' => [], 'shelves' => [], 'formats' => [],
            'publications' => [], 'publicationSummaries' => [], 'publicationYears' => [],
            'creators' => [], 'scanStatuses' => [], 'workflowStatuses' => [], 'subjects' => [],
            'classifications' => [],
        ];
    }

    private function countScannerConflictCatalogueItems(string $userId, array $filters): int {
        $filtersWithoutConflict = $filters;
        unset($filtersWithoutConflict['scannerConflicts']);

        $qb = $this->catalogueQueryBuilder($userId, $filtersWithoutConflict, true);
        $this->applyScannerConflictCandidateFilter($qb);
        $result = $qb->executeQuery();

        $count = 0;
        while ($row = $result->fetch()) {
            $item = $this->normalizeJoinedItemRow($row);
            if ($this->itemHasScannerConflict($item)) {
                $count++;
            }
        }
        $result->closeCursor();

        return $count;
    }

    private function queryScannerConflictCatalogue(string $userId, array $filters, int $offset, int $limit, bool $includeFacets = true): array {
        $filtersWithoutConflict = $filters;
        unset($filtersWithoutConflict['scannerConflicts']);

        $qb = $this->catalogueQueryBuilder($userId, $filtersWithoutConflict, true);
        $this->applyScannerConflictCandidateFilter($qb);
        $this->applyCatalogueSort($qb, (string)($filtersWithoutConflict['sort'] ?? 'title'));
        $result = $qb->executeQuery();

        $conflictingItems = [];
        while ($row = $result->fetch()) {
            $item = $this->normalizeJoinedItemRow($row);
            if ($this->itemHasScannerConflict($item)) {
                $conflictingItems[] = $item;
            }
        }
        $result->closeCursor();

        return [
            'items' => array_slice($conflictingItems, $offset, $limit),
            'total' => count($conflictingItems),
            'facets' => $includeFacets ? $this->catalogueFacets($userId, $filters) : $this->emptyCatalogueFacets(),
        ];
    }

    private function applyScannerConflictCandidateFilter(IQueryBuilder $qb): void {
        // Exact conflict detection still happens in PHP so subject/classification
        // normalization and null handling stay identical. This indexed prefilter
        // bounds that pass to rows that can actually have user-vs-scanner drift.
        $qb->andWhere($qb->expr()->eq('i.user_edited', $qb->createNamedParameter(1)))
            ->andWhere($qb->expr()->isNotNull('i.field_values'))
            ->andWhere($qb->expr()->notIn('i.field_values', $qb->createNamedParameter(['', '[]', '{}'], IQueryBuilder::PARAM_STR_ARRAY)));
    }

    private function itemHasScannerConflict(array $item): bool {
        foreach (self::PUBLICATION_FIELDS as $field) {
            if (!array_key_exists($field, $item['fieldValues'] ?? [])) {
                continue;
            }
            $candidate = (string)($item['fieldValues'][$field] ?? '');
            $current = ($field === 'subjects' || $field === 'classifications')
                ? $this->jsonEncodeList($this->normalizeMultiValueField($item[$field] ?? []))
                : (string)($item[$field] ?? '');
            if ($current !== $candidate) {
                return true;
            }
        }
        return false;
    }

    private function scannerConflictCount(array $item): int {
        $count = 0;
        foreach (self::PUBLICATION_FIELDS as $field) {
            if (!array_key_exists($field, $item['fieldValues'] ?? [])) {
                continue;
            }
            $candidate = (string)($item['fieldValues'][$field] ?? '');
            $current = ($field === 'subjects' || $field === 'classifications')
                ? $this->jsonEncodeList($this->normalizeMultiValueField($item[$field] ?? []))
                : (string)($item[$field] ?? '');
            if ($current !== $candidate) {
                $count++;
            }
        }
        return $count;
    }

    public function findItem(string $userId, int $itemId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.authors_json', 'i.publication', 'i.series_name', 'i.series_number', 'i.genre', 'i.publication_date', 'i.language', 'i.publisher', 'i.description', 'i.subjects_json', 'i.classifications_json', 'i.personal_rating', 'i.cover_override_url', 'i.cover_override_data', 'i.cover_override_mime_type', 'i.cover_revision', 'f.etag', 'i.starred', 'i.workflow_status', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return $this->normalizeJoinedItemRow($row);
    }

    public function exportCorrectedMetadata(string $userId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.authors_json', 'i.publication', 'i.series_name', 'i.series_number', 'i.genre', 'i.publication_date', 'i.language', 'i.publisher', 'i.description', 'i.subjects_json', 'i.classifications_json', 'i.personal_rating', 'i.cover_override_url', 'i.cover_override_data', 'i.cover_override_mime_type', 'i.cover_revision', 'f.etag', 'i.starred', 'i.workflow_status', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->orX(
                $qb->expr()->eq('i.user_edited', $qb->createNamedParameter(1)),
                $qb->expr()->eq('i.starred', $qb->createNamedParameter(1)),
                $qb->expr()->neq('i.workflow_status', $qb->createNamedParameter('')),
                $qb->expr()->isNotNull('i.last_opened_at')
            ))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->orderBy('i.title', 'ASC')
            ->executeQuery();

        $items = [];
        while ($row = $result->fetch()) {
            $item = $this->normalizeJoinedItemRow($row);
            $item['workflowStatus'] = (string)($item['workflowStatus'] ?? '');
            $item['lastOpenedAt'] = (int)($item['lastOpenedAt'] ?? 0);
            $item['rootPath'] = (string)($row['path'] ?? '');
            $items[] = $item;
        }
        $result->closeCursor();

        return [
            'schemaVersion' => 1,
            'exportedAt' => gmdate(DATE_ATOM),
            'exportKind' => 'library-corrected-metadata',
            'itemCount' => count($items),
            'items' => $items,
        ];
    }

    public function exportCorrectedMetadataSidecarManifest(string $userId): array {
        $export = $this->exportCorrectedMetadata($userId);
        $manifestItems = [];
        foreach (($export['items'] ?? []) as $item) {
            if (!is_array($item)) {
                continue;
            }
            $cachedPath = (string)($item['cachedPath'] ?? '');
            $directory = trim(dirname('/' . ltrim($cachedPath, '/')), '/');
            $filename = basename($cachedPath) . '.library.json';
            $sidecarPath = ($directory === '' ? '' : $directory . '/') . $filename;
            $manifestItems[] = [
                'itemId' => (int)($item['id'] ?? 0),
                'libraryFileId' => (int)($item['libraryFileId'] ?? 0),
                'fileId' => (int)($item['fileId'] ?? 0),
                'sourcePath' => $cachedPath,
                'sidecarPath' => $sidecarPath,
                'metadata' => $item,
            ];
        }

        return [
            'schemaVersion' => 1,
            'exportedAt' => gmdate(DATE_ATOM),
            'manifestKind' => 'library-corrected-metadata-sidecar-manifest',
            'itemCount' => count($manifestItems),
            'items' => $manifestItems,
        ];
    }

    public function previewCorrectedMetadataImport(string $userId, string $metadataJson): array {
        $decoded = $this->decodeAndValidateImportPayload($metadataJson, false);
        if ($decoded['error'] !== '') {
            return $this->emptyImportPreview(false, $decoded['error'], $decoded['httpStatus']);
        }
        $importItems = $decoded['items'];

        $previewItems = [];
        $matchedItems = 0;
        $missingItems = 0;
        $invalidItems = 0;
        $changedFields = 0;
        foreach ($importItems as $importItem) {
            if (!is_array($importItem)) {
                $invalidItems++;
                $this->appendImportReportItem($previewItems, [
                    'status' => 'invalid',
                    'changedFields' => [],
                ]);
                continue;
            }
            $current = $this->findItemForImportPreview($userId, $importItem);
            if ($current === null) {
                $missingItems++;
                $this->appendImportReportItem($previewItems, [
                    'status' => 'missing',
                    'cachedPath' => (string)($importItem['cachedPath'] ?? ''),
                    'changedFields' => [],
                ]);
                continue;
            }

            $itemChangedFields = $this->changedImportFields($current, $importItem);
            $matchedItems++;
            $changedFields += count($itemChangedFields);
            $this->appendImportReportItem($previewItems, [
                'status' => 'matched',
                'itemId' => (int)$current['id'],
                'libraryFileId' => (int)$current['libraryFileId'],
                'cachedPath' => (string)($current['cachedPath'] ?? ''),
                'changedFields' => $itemChangedFields,
            ]);
        }

        return [
            'schemaVersion' => 1,
            'previewKind' => 'library-metadata-import-preview',
            'valid' => true,
            'error' => '',
            'totalItems' => count($importItems),
            'matchedItems' => $matchedItems,
            'missingItems' => $missingItems,
            'invalidItems' => $invalidItems,
            'changedFields' => $changedFields,
            'items' => $previewItems,
            'reportTruncated' => count($importItems) > count($previewItems),
        ];
    }

    public function applyCorrectedMetadataImport(string $userId, string $metadataJson): array {
        $decoded = $this->decodeAndValidateImportPayload($metadataJson, true);
        if ($decoded['error'] !== '') {
            return $this->emptyImportApply(false, $decoded['error'], $decoded['httpStatus']);
        }
        $importItems = $decoded['items'];

        $applyItems = [];
        $matchedItems = 0;
        $appliedItems = 0;
        $skippedItems = 0;
        $missingItems = 0;
        $invalidItems = 0;
        $changedFields = 0;
        foreach ($importItems as $importItem) {
            if (!is_array($importItem)) {
                $invalidItems++;
                $this->appendImportReportItem($applyItems, [
                    'status' => 'invalid',
                    'changedFields' => [],
                ]);
                continue;
            }
            $current = $this->findItemForImportPreview($userId, $importItem);
            if ($current === null) {
                $missingItems++;
                $this->appendImportReportItem($applyItems, [
                    'status' => 'missing',
                    'cachedPath' => (string)($importItem['cachedPath'] ?? ''),
                    'changedFields' => [],
                ]);
                continue;
            }

            $itemChangedFields = $this->changedImportFields($current, $importItem);
            $matchedItems++;
            if ($itemChangedFields === []) {
                $skippedItems++;
                $this->appendImportReportItem($applyItems, [
                    'status' => 'unchanged',
                    'itemId' => (int)$current['id'],
                    'libraryFileId' => (int)$current['libraryFileId'],
                    'cachedPath' => (string)($current['cachedPath'] ?? ''),
                    'changedFields' => [],
                ]);
                continue;
            }

            try {
                $merged = array_replace($current, $importItem);
                if (array_key_exists('creators', $importItem) && !array_key_exists('authors', $importItem)) unset($merged['authors']);
                $this->updateItem($userId, (int)$current['id'], $merged);
            } catch (\InvalidArgumentException $e) {
                $invalidItems++;
                $this->appendImportReportItem($applyItems, [
                    'status' => 'invalid',
                    'itemId' => (int)$current['id'],
                    'libraryFileId' => (int)$current['libraryFileId'],
                    'cachedPath' => (string)($current['cachedPath'] ?? ''),
                    'changedFields' => $itemChangedFields,
                    'validationError' => $e->getMessage(),
                ]);
                continue;
            }
            $changedFields += count($itemChangedFields);
            if (array_key_exists('starred', $importItem)) {
                $this->setStarred($userId, (int)$current['id'], (bool)$importItem['starred']);
            }
            if (array_key_exists('workflowStatus', $importItem)) {
                $this->setWorkflowStatus($userId, (int)$current['id'], (string)$importItem['workflowStatus']);
            }
            if (array_key_exists('lastOpenedAt', $importItem)) {
                $this->setLastOpenedAtForImport($userId, (int)$current['id'], $importItem['lastOpenedAt']);
            }
            $appliedItems++;
            $this->appendImportReportItem($applyItems, [
                'status' => 'applied',
                'itemId' => (int)$current['id'],
                'libraryFileId' => (int)$current['libraryFileId'],
                'cachedPath' => (string)($current['cachedPath'] ?? ''),
                'changedFields' => $itemChangedFields,
            ]);
        }

        return [
            'schemaVersion' => 1,
            'applicationKind' => 'library-metadata-import-apply',
            'valid' => true,
            'error' => '',
            'totalItems' => count($importItems),
            'matchedItems' => $matchedItems,
            'appliedItems' => $appliedItems,
            'skippedItems' => $skippedItems,
            'missingItems' => $missingItems,
            'invalidItems' => $invalidItems,
            'changedFields' => $changedFields,
            'items' => $applyItems,
            'reportTruncated' => count($importItems) > count($applyItems),
        ];
    }

    /**
     * @return array{error:string,httpStatus:int,items:array<int, mixed>}
     */
    private function decodeAndValidateImportPayload(string $metadataJson, bool $forApply): array {
        if (strlen($metadataJson) > self::METADATA_IMPORT_MAX_JSON_BYTES) {
            return ['error' => 'payload_too_large', 'httpStatus' => 413, 'items' => []];
        }

        try {
            $payload = json_decode($metadataJson, true, self::METADATA_IMPORT_MAX_NESTING_DEPTH, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return ['error' => 'invalid_json', 'httpStatus' => 400, 'items' => []];
        }
        if (!is_array($payload)) {
            return ['error' => 'unsupported_export', 'httpStatus' => 400, 'items' => []];
        }

        $importItems = $this->importItemsFromPayload($payload);
        if ($importItems === null) {
            return ['error' => 'unsupported_export', 'httpStatus' => 400, 'items' => []];
        }
        if (count($importItems) > self::METADATA_IMPORT_MAX_ITEMS) {
            return ['error' => 'too_many_items', 'httpStatus' => 413, 'items' => []];
        }

        foreach ($importItems as $importItem) {
            if (!is_array($importItem)) {
                continue;
            }
            if (count($importItem) > self::METADATA_IMPORT_MAX_FIELDS_PER_ITEM) {
                return ['error' => 'too_many_fields', 'httpStatus' => 413, 'items' => []];
            }
            foreach (['subjects', 'classifications'] as $field) {
                if (is_array($importItem[$field] ?? null) && count($importItem[$field]) > self::METADATA_IMPORT_MAX_LIST_VALUES) {
                    return ['error' => 'too_many_list_values', 'httpStatus' => 413, 'items' => []];
                }
            }
            $error = $this->validateImportValueLimits($importItem, 1);
            if ($error !== '') {
                return ['error' => $error, 'httpStatus' => 413, 'items' => []];
            }
            try {
                if (array_key_exists('authors', $importItem)) AuthorNames::normalize($importItem['authors']);
                foreach (['series', 'seriesNumber', 'genre'] as $field) {
                    if (array_key_exists($field, $importItem)) $this->normalizeExtendedField($field, $importItem[$field]);
                }
            } catch (\InvalidArgumentException) {
                return ['error' => 'invalid_item', 'httpStatus' => 400, 'items' => []];
            }
            if ($forApply) {
                try {
                    $this->validateEditableMetadata($importItem);
                } catch (\InvalidArgumentException) {
                    return ['error' => 'invalid_item', 'httpStatus' => 400, 'items' => []];
                }
            }
        }

        return ['error' => '', 'httpStatus' => 200, 'items' => $importItems];
    }

    private function validateImportValueLimits(mixed $value, int $depth): string {
        if ($depth > self::METADATA_IMPORT_MAX_NESTING_DEPTH) {
            return 'nesting_too_deep';
        }
        if (is_string($value) && strlen($value) > self::METADATA_IMPORT_MAX_STRING_BYTES) {
            return 'string_too_long';
        }
        if (!is_array($value)) {
            return '';
        }
        foreach ($value as $child) {
            $error = $this->validateImportValueLimits($child, $depth + 1);
            if ($error !== '') {
                return $error;
            }
        }
        return '';
    }

    private function appendImportReportItem(array &$items, array $item): void {
        if (count($items) < self::METADATA_IMPORT_MAX_REPORT_ITEMS) {
            $items[] = $this->truncateImportReportItem($item);
        }
    }

    private function truncateImportReportItem(array $item): array {
        foreach ($item as $key => $value) {
            if (is_string($value) && strlen($value) > 512) {
                $item[$key] = substr($value, 0, 512);
            } elseif (is_array($value) && count($value) > self::METADATA_IMPORT_MAX_LIST_VALUES) {
                $item[$key] = array_slice($value, 0, self::METADATA_IMPORT_MAX_LIST_VALUES);
            }
        }
        return $item;
    }

    /**
     * @param array<string, mixed> $payload
     * @return array<int, mixed>|null
     */
    private function importItemsFromPayload(array $payload): ?array {
        if ((string)($payload['exportKind'] ?? '') === 'library-corrected-metadata' && is_array($payload['items'] ?? null)) {
            return $payload['items'];
        }
        if ($this->looksLikeSingleSidecarMetadata($payload)) {
            return [$payload];
        }

        if ((string)($payload['manifestKind'] ?? '') !== 'library-corrected-metadata-sidecar-manifest' || !is_array($payload['items'] ?? null)) {
            return null;
        }

        $items = [];
        foreach ($payload['items'] as $manifestItem) {
            if (!is_array($manifestItem) || !is_array($manifestItem['metadata'] ?? null)) {
                $items[] = $manifestItem;
                continue;
            }
            $metadata = $manifestItem['metadata'];
            if (!array_key_exists('cachedPath', $metadata) && array_key_exists('sourcePath', $manifestItem)) {
                $metadata['cachedPath'] = (string)$manifestItem['sourcePath'];
            }
            if (!array_key_exists('sidecarPath', $metadata) && array_key_exists('sidecarPath', $manifestItem)) {
                $metadata['sidecarPath'] = (string)$manifestItem['sidecarPath'];
            }
            $items[] = $metadata;
        }
        return $items;
    }

    /**
     * @param array<string, mixed> $payload
     */
    private function looksLikeSingleSidecarMetadata(array $payload): bool {
        if (isset($payload['exportKind']) || isset($payload['manifestKind']) || isset($payload['items'])) {
            return false;
        }
        if ((string)($payload['cachedPath'] ?? '') !== '' || (string)($payload['sourcePath'] ?? '') !== '') {
            return true;
        }
        foreach (self::PUBLICATION_FIELDS as $field) {
            if (array_key_exists($field, $payload)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param array<string, mixed> $current
     * @param array<string, mixed> $importItem
     * @return array<int, string>
     */
    private function changedImportFields(array $current, array $importItem): array {
        $changedFields = [];
        if (array_key_exists('authors', $importItem) && AuthorNames::normalize($importItem['authors']) !== ($current['authors'] ?? [])) $changedFields[] = 'authors';
        foreach (self::PUBLICATION_FIELDS as $field) {
            if ($field === 'subjects' || $field === 'classifications') {
                if (array_key_exists($field, $importItem) && $this->normalizeMultiValueField($importItem[$field]) !== $this->normalizeMultiValueField($current[$field] ?? [])) {
                    $changedFields[] = $field;
                }
                continue;
            }
            if (array_key_exists($field, $importItem) && (string)($importItem[$field] ?? '') !== (string)($current[$field] ?? '')) {
                $changedFields[] = $field;
            }
        }
        if (array_key_exists('starred', $importItem) && (bool)$importItem['starred'] !== (bool)($current['starred'] ?? false)) {
            $changedFields[] = 'starred';
        }
        if (array_key_exists('workflowStatus', $importItem) && $this->normalizeWorkflowStatus((string)$importItem['workflowStatus']) !== (string)($current['workflowStatus'] ?? '')) {
            $changedFields[] = 'workflowStatus';
        }
        if (array_key_exists('lastOpenedAt', $importItem) && (int)($importItem['lastOpenedAt'] ?? 0) !== (int)($current['lastOpenedAt'] ?? 0)) {
            $changedFields[] = 'lastOpenedAt';
        }
        return $changedFields;
    }

    private function emptyImportPreview(bool $valid, string $error, int $httpStatus = 200): array {
        return [
            'schemaVersion' => 1,
            'previewKind' => 'library-metadata-import-preview',
            'valid' => $valid,
            'error' => $error,
            'httpStatus' => $httpStatus,
            'totalItems' => 0,
            'matchedItems' => 0,
            'missingItems' => 0,
            'invalidItems' => 0,
            'changedFields' => 0,
            'items' => [],
            'reportTruncated' => false,
        ];
    }

    private function emptyImportApply(bool $valid, string $error, int $httpStatus = 200): array {
        return [
            'schemaVersion' => 1,
            'applicationKind' => 'library-metadata-import-apply',
            'valid' => $valid,
            'error' => $error,
            'httpStatus' => $httpStatus,
            'totalItems' => 0,
            'matchedItems' => 0,
            'appliedItems' => 0,
            'skippedItems' => 0,
            'missingItems' => 0,
            'invalidItems' => 0,
            'changedFields' => 0,
            'items' => [],
            'reportTruncated' => false,
        ];
    }

    /**
     * @param array<string, mixed> $importItem
     */
    private function findItemForImportPreview(string $userId, array $importItem): ?array {
        $libraryFileId = (int)($importItem['libraryFileId'] ?? 0);
        $fileId = (int)($importItem['fileId'] ?? 0);
        $cachedPath = trim((string)($importItem['cachedPath'] ?? ''));

        $qb = $this->db->getQueryBuilder();
        $qb->select('i.id', 'i.library_file_id', 'i.publication_type', 'i.title', 'i.subtitle', 'i.creators', 'i.authors_json', 'i.publication', 'i.series_name', 'i.series_number', 'i.genre', 'i.publication_date', 'i.language', 'i.publisher', 'i.description', 'i.subjects_json', 'i.classifications_json', 'i.personal_rating', 'i.cover_override_url', 'i.cover_override_data', 'i.cover_override_mime_type', 'i.cover_revision', 'f.etag', 'i.starred', 'i.workflow_status', 'i.last_opened_at', 'i.metadata_source', 'i.field_sources', 'i.field_values', 'i.user_edited', 'f.file_id', 'f.cached_path', 'f.mime_type', 'f.extension', 'f.scan_status', 'f.scan_error', 'r.label', 'r.path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->setMaxResults(1);
        if ($libraryFileId > 0) {
            $qb->andWhere($qb->expr()->eq('i.library_file_id', $qb->createNamedParameter($libraryFileId)));
        } elseif ($fileId > 0) {
            $qb->andWhere($qb->expr()->eq('f.file_id', $qb->createNamedParameter($fileId)));
        } elseif ($cachedPath !== '') {
            $qb->andWhere($qb->expr()->eq('f.cached_path', $qb->createNamedParameter($cachedPath)));
        } else {
            return null;
        }

        $result = $qb->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? null : $this->normalizeJoinedItemRow($row);
    }

    private function catalogueQueryBuilder(string $userId, array $filters, bool $scannerConflictProjection = false): IQueryBuilder {
        $qb = $this->catalogueFilteredQueryBuilder($userId, $filters);
        $columns = self::CATALOGUE_INTERNAL_COLUMNS;
        if ($scannerConflictProjection) {
            $columns = [...$columns, ...self::SCANNER_CONFLICT_INTERNAL_COLUMNS];
        }
        if ($this->catalogueProjectionRequiresDistinct($filters)) {
            // One-to-many filter joins must keep pagination in catalogue-item
            // units instead of returning one row per matching child row.
            $qb->selectDistinct($columns);
        } else {
            $qb->select($columns);
        }
        return $qb;
    }

    private function catalogueProjectionRequiresDistinct(array $filters): bool {
        $query = mb_strtolower(trim((string)($filters['q'] ?? '')));
        return ($query !== '' && IdentifierService::normalizeSearchQuery($query) !== null)
            || trim((string)($filters['subject'] ?? '')) !== ''
            || trim((string)($filters['classification'] ?? '')) !== '';
    }

    private function catalogueFilteredQueryBuilder(string $userId, array $filters): IQueryBuilder {
        $qb = $this->db->getQueryBuilder();
        $qb->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->innerJoin('f', 'library_roots', 'r', $qb->expr()->eq('f.root_id', 'r.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')));

        $query = mb_strtolower(trim((string)($filters['q'] ?? '')));
        $identifierSearch = $query === '' ? null : IdentifierService::normalizeSearchQuery($query);
        if ($identifierSearch !== null) {
            $qb->leftJoin('i', 'library_item_identifiers', 'idn', $qb->expr()->eq('idn.item_id', 'i.id'));
        }

        $this->applyCatalogueFilters($qb, $userId, $filters);
        return $qb;
    }

    private function countCatalogueItems(string $userId, array $filters): int {
        $qb = $this->catalogueFilteredQueryBuilder($userId, $filters);
        $qb->selectAlias($qb->createFunction('COUNT(DISTINCT i.id)'), 'item_count');

        $result = $qb->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? 0 : (int)$row['item_count'];
    }

    /**
     * @return array{publicationTypes:array<int, string>,publishers:array<int, string>,shelves:array<int, string>,formats:array<int, string>,publications:array<int, string>,publicationSummaries:array<int, array{publication:string,itemCount:int}>,publicationYears:array<int, string>,creators:array<int, string>,scanStatuses:array<int, string>,workflowStatuses:array<int, string>,subjects:array<int, string>,classifications:array<int, string>}
     */
    /** Catalogue filters use remote typeahead; full grouping belongs to explicit landing pages. */
    public function catalogueAuxiliaryFacets(string $userId, array $filters): array {
        $facetFilters = $this->facetFiltersFor($filters);
        return array_replace($this->emptyCatalogueFacets(), [
            'publicationTypes' => self::PUBLICATION_TYPES,
            'shelves' => $this->distinctCatalogueValues($userId, $facetFilters['shelves'], "COALESCE(NULLIF(r.label, ''), r.path)", 'shelf'),
            'formats' => $this->distinctCatalogueValues($userId, $facetFilters['formats'], 'LOWER(f.extension)', 'value'),
            'scanStatuses' => ['indexed', 'metadata_error', 'missing'],
            'workflowStatuses' => array_values(array_filter(self::WORKFLOW_STATUSES)),
        ]);
    }

    private function catalogueFacets(string $userId, array $filters): array {
        $facetFilters = $this->facetFiltersFor($filters);
        return [
            'publicationTypes' => $this->distinctCatalogueValues($userId, $facetFilters['publicationTypes'], 'i.publication_type', 'value'),
            // High-cardinality publisher choices are entered manually; exact
            // filtering remains in the query without eager facet fanout.
            'publishers' => [],
            'shelves' => $this->distinctCatalogueValues($userId, $facetFilters['shelves'], "COALESCE(NULLIF(r.label, ''), r.path)", 'shelf'),
            'formats' => $this->distinctCatalogueValues($userId, $facetFilters['formats'], 'LOWER(f.extension)', 'value'),
            'publications' => $this->distinctCatalogueValues($userId, $facetFilters['publications'], 'i.publication', 'publication', self::PUBLICATION_FACET_LIMIT),
            'publicationSummaries' => $this->topPublicationSummaries($userId, $facetFilters['publications']),
            'publicationYears' => $this->publicationYearFacetValues($userId, $facetFilters['publicationYears']),
            // Creator choices are fetched on demand by creatorSuggestions(). A full
            // creator facet is high-cardinality and needlessly fans out every
            // catalogue request, including the initial page load.
            'creators' => [],
            // High-cardinality subjects are fetched on demand from the facet index.
            'subjects' => [],
            'classifications' => [],
            'scanStatuses' => $this->scanStatusFacetValues($userId, $facetFilters['scanStatuses']),
            'workflowStatuses' => $this->distinctCatalogueValues($userId, $facetFilters['workflowStatuses'], 'i.workflow_status', 'value'),
        ];
    }

    private function facetFiltersFor(array $filters): array {
        $filtersByFacet = [];
        foreach (self::FACET_FILTER_EXCLUSIONS as $facet => $excludedKeys) {
            $filtersByFacet[$facet] = $filters;
            foreach ($excludedKeys as $excludedKey) {
                unset($filtersByFacet[$facet][$excludedKey]);
            }
        }
        return $filtersByFacet;
    }

    /**
     * @return array<int, array{publication:string,itemCount:int}>
     */
    private function topPublicationSummaries(string $userId, array $filters): array {
        $qb = $this->catalogueFilteredQueryBuilder($userId, $filters);
        $result = $qb->selectAlias($qb->createFunction('i.publication'), 'publication')
            ->selectAlias($qb->createFunction('COUNT(DISTINCT i.id)'), 'item_count')
            ->andWhere($qb->expr()->neq('i.publication', $qb->createNamedParameter('')))
            ->groupBy('i.publication')
            ->orderBy('item_count', 'DESC')
            ->addOrderBy('publication', 'ASC')
            ->setMaxResults(12)
            ->executeQuery();

        $summaries = [];
        while ($row = $result->fetch()) {
            $publication = trim((string)($row['publication'] ?? ''));
            if ($publication !== '') {
                $summaries[] = [
                    'publication' => $publication,
                    'itemCount' => (int)($row['item_count'] ?? 0),
                ];
            }
        }
        $result->closeCursor();
        return $summaries;
    }

    /**
     * @return array{itemCount:int,datedCount:int,undatedCount:int,earliestYear:string,latestYear:string,issueGroups:array<int, array<string, mixed>>,unknownIssueItems:array<int, array<string, mixed>>,gapRanges:array<int, string>}
     */
    public function publicationIssueContext(string $userId, string $publication): array {
        $publication = trim($publication);
        if ($publication === '') {
            return [
                'itemCount' => 0,
                'datedCount' => 0,
                'undatedCount' => 0,
                'earliestYear' => '',
                'latestYear' => '',
                'issueGroups' => [],
                'unknownIssueItems' => [],
                'gapRanges' => [],
            ];
        }

        $rows = $this->publicationIssueRows($userId, $publication);
        $datedCount = 0;
        $years = [];
        foreach ($rows as $row) {
            if ((string)($row['publicationDate'] ?? '') !== '') {
                $datedCount++;
                $years[] = substr((string)$row['publicationDate'], 0, 4);
            }
        }
        sort($years, SORT_STRING);
        $issueContext = $this->buildPublicationIssueGroups($rows);

        return [
            'itemCount' => count($rows),
            'datedCount' => $datedCount,
            'undatedCount' => max(0, count($rows) - $datedCount),
            'earliestYear' => $years[0] ?? '',
            'latestYear' => $years[count($years) - 1] ?? '',
            'issueGroups' => $issueContext['issueGroups'],
            'unknownIssueItems' => $issueContext['unknownIssueItems'],
            'gapRanges' => $issueContext['gapRanges'],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function publicationIssueRows(string $userId, string $publication): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.title', 'i.subtitle', 'i.publication_type', 'i.publication_date', 'f.cached_path', 'f.extension')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('i.publication', $qb->createNamedParameter($publication)))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('sidecar')))
            ->orderBy($qb->createFunction("CASE WHEN i.publication_date IS NULL OR i.publication_date = '' THEN 1 ELSE 0 END"), 'ASC')
            ->addOrderBy('i.publication_date', 'ASC')
            ->addOrderBy('i.title', 'ASC')
            ->executeQuery();

        $rows = [];
        while ($row = $result->fetch()) {
            $title = (string)($row['title'] ?? '');
            $subtitle = (string)($row['subtitle'] ?? '');
            $path = (string)($row['cached_path'] ?? '');
            $sequence = $this->deriveIssueSequence($title, $subtitle, $path);
            $date = (string)($row['publication_date'] ?? '');
            $rows[] = [
                'itemId' => (int)($row['id'] ?? 0),
                'title' => $title,
                'publicationType' => (string)($row['publication_type'] ?? 'other'),
                'publicationDate' => $date,
                'issueNumber' => $sequence,
                'issueLabel' => $sequence !== null ? '#' . $sequence : ($date !== '' ? $date : 'Unknown issue/date'),
                'volumeLabel' => $this->deriveVolumeLabel($title, $subtitle, $path),
                'monthLabel' => strlen($date) >= 7 ? substr($date, 0, 7) : ($date !== '' ? substr($date, 0, 4) : 'Unknown issue/date'),
                'unknownIssueDate' => $sequence === null && $date === '', // unknown issue/date rows remain visible instead of disappearing
            ];
        }
        $result->closeCursor();
        return $rows;
    }

    private function deriveIssueSequence(string ...$values): ?int {
        $haystack = trim(implode(' ', array_filter($values, static fn (string $value): bool => trim($value) !== '')));
        if ($haystack === '') {
            return null;
        }
        foreach ([
            '/(?:^|[^a-z0-9])(?:issue|nr|no|number|#)\s*0*(\d{1,5})(?:\b|[^a-z0-9])/iu',
            '/(?:^|[^a-z0-9])0*(\d{1,5})\s*(?:of|von)\s*\d{1,5}(?:\b|[^a-z0-9])/iu',
            '/(?:^|[^a-z0-9])#\s*0*(\d{1,5})(?:\b|[^a-z0-9])/u',
        ] as $pattern) {
            if (preg_match($pattern, $haystack, $matches) === 1) {
                return max(1, (int)$matches[1]);
            }
        }
        return null;
    }

    private function deriveVolumeLabel(string ...$values): string {
        $haystack = trim(implode(' ', array_filter($values, static fn (string $value): bool => trim($value) !== '')));
        if ($haystack !== '' && preg_match('/(?:^|[^a-z0-9])(?:vol(?:ume)?|band|jahrgang)\s*0*(\d{1,4})(?:\b|[^a-z0-9])/iu', $haystack, $matches) === 1) {
            return 'Volume ' . (int)$matches[1];
        }
        return '';
    }

    /**
     * @param array<int, array<string, mixed>> $rows
     * @return array{issueGroups:array<int, array<string, mixed>>,unknownIssueItems:array<int, array<string, mixed>>,gapRanges:array<int, string>}
     */
    private function buildPublicationIssueGroups(array $rows): array {
        $groups = [];
        $unknown = [];
        $seenIssues = [];
        foreach ($rows as $row) {
            if (!empty($row['unknownIssueDate'])) {
                $unknown[] = $row;
            }
            $issueNumber = $row['issueNumber'] ?? null;
            if (is_int($issueNumber)) {
                $seenIssues[$issueNumber] = true;
            }
            $groupKey = trim((string)($row['volumeLabel'] ?? '')) !== ''
                ? (string)$row['volumeLabel']
                : (string)($row['monthLabel'] ?? 'Unknown issue/date');
            if (!isset($groups[$groupKey])) {
                $groups[$groupKey] = [
                    'label' => $groupKey,
                    'items' => [],
                ];
            }
            $groups[$groupKey]['items'][] = $row;
        }

        $gapRanges = [];
        if ($seenIssues !== []) {
            $issueNumbers = array_keys($seenIssues);
            sort($issueNumbers, SORT_NUMERIC);
            for ($issue = (int)$issueNumbers[0]; $issue <= (int)$issueNumbers[count($issueNumbers) - 1]; $issue++) {
                if (!isset($seenIssues[$issue])) {
                    $gapRanges[] = 'Gap #' . $issue;
                }
            }
        }

        return [
            'issueGroups' => array_values($groups),
            'unknownIssueItems' => $unknown,
            'gapRanges' => $gapRanges,
        ];
    }

    /**
     * @return array<int, string>
     */
    private function distinctCatalogueValues(string $userId, array $filters, string $expression, string $alias, ?int $limit = null): array {
        $qb = $this->catalogueFilteredQueryBuilder($userId, $filters);
        $query = $qb->selectAlias($qb->createFunction($expression), $alias)
            ->groupBy($alias)
            ->orderBy($alias, 'ASC');
        if ($limit !== null) {
            $query->setMaxResults($limit);
        }
        $result = $query->executeQuery();

        $values = [];
        while ($row = $result->fetch()) {
            $value = trim((string)($row[$alias] ?? ''));
            if ($value !== '') {
                $values[] = $value;
            }
        }
        $result->closeCursor();
        return $values;
    }

    /** @return array<int, string> */
    public function publicationSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['publication']);
        if (mb_strlen(trim($query)) < 3) return [];
        return $this->indexedSuggestionValues($userId, $filters, 'publication', 'publication_suggestion', 'publication', $query, $limit);
    }

    /** @return array<int, string> */
    public function creatorSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['creator']);
        if (mb_strlen(trim($query)) < 3) return [];
        return $this->indexedSuggestionValues($userId, $filters, 'creator', 'creator_suggestion', 'creator', $query, $limit);
    }

    /** @return array<int, string> */
    public function publisherSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['publisher']);
        if (mb_strlen(trim($query)) < 3) return [];
        return $this->indexedSuggestionValues($userId, $filters, 'publisher', 'publisher_suggestion', 'publisher', $query, $limit);
    }

    /** @return array<int, string> */
    public function subjectSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['subject']);
        $query = mb_strtolower(trim($query));
        if (mb_strlen($query) < 3 || $limit < 1) return [];
        $limit = min($limit, 20);
        return $this->indexedSuggestionValues($userId, $filters, 'subject', 'subject_suggestion', 'subject', $query, $limit);
    }

    /** @return array<int, string> */
    public function folderSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['folder']);
        $query = str_replace('\\', '/', trim($query));
        if (mb_strlen($query) < 3 || $limit < 1) return [];
        $limit = min($limit, 25);

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('folder_suggestion.cached_path')
            ->from('library_files', 'folder_suggestion')
            ->where($qb->expr()->eq('folder_suggestion.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->like('folder_suggestion.cached_path', $qb->createNamedParameter($this->escapeLikeParameter($query) . '%')))
            ->orderBy('folder_suggestion.cached_path', 'ASC')
            ->setMaxResults($limit * 16)
            ->executeQuery();

        $folders = [];
        while (($row = $result->fetch()) && count($folders) < $limit) {
            $folder = str_replace('\\', '/', dirname((string)($row['cached_path'] ?? '')));
            while ($folder !== '.' && $folder !== '/' && mb_strlen($folder) >= mb_strlen($query)) {
                if (str_starts_with($folder, $query)) $folders[$folder] = true;
                $parent = dirname($folder);
                if ($parent === $folder) break;
                $folder = str_replace('\\', '/', $parent);
            }
        }
        $result->closeCursor();
        $values = array_keys($folders);
        sort($values, SORT_NATURAL | SORT_FLAG_CASE);
        return array_slice($values, 0, $limit);
    }

    /** @return array<int, string> */
    public function classificationSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['classification']);
        if (mb_strlen(trim($query)) < 3) return [];
        return $this->indexedSuggestionValues($userId, $filters, 'classification', 'classification_suggestion', 'classification', $query, $limit);
    }

    /** @return array<int, string> */
    public function yearSuggestions(string $userId, array $filters, string $query, int $limit = 20): array {
        unset($filters['year']);
        if (mb_strlen(trim($query)) < 2) return [];
        return $this->indexedSuggestionValues($userId, $filters, 'year', 'year_suggestion', 'year', $query, $limit);
    }

    /** @return array<int, string> */
    private function indexedSuggestionValues(string $userId, array $filters, string $facetType, string $alias, string $resultKey, string $query, int $limit = 20): array {
        $query = mb_strtolower(trim($query));
        if ($query === '' || $limit < 1) return [];
        $limit = min($limit, 25);

        if ($this->suggestionFiltersAreEmpty($filters)) {
            return $this->unfilteredIndexedSuggestionValues($userId, $facetType, $query, $limit);
        }

        $qb = $this->catalogueFilteredQueryBuilder($userId, $filters);
        $qb->innerJoin('i', 'library_item_facets', $alias, $qb->expr()->eq($alias . '.item_id', 'i.id'));
        $result = $qb->selectAlias($qb->createFunction($alias . '.facet_value'), $resultKey)
            ->andWhere($qb->expr()->eq($alias . '.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq($alias . '.facet_type', $qb->createNamedParameter($facetType)))
            ->andWhere($qb->expr()->like($alias . '.normalized_value', $qb->createNamedParameter($this->escapeLikeParameter($query) . '%')))
            ->groupBy($resultKey)
            ->orderBy($resultKey, 'ASC')
            ->setMaxResults($limit)
            ->executeQuery();
        $values = [];
        while ($row = $result->fetch()) {
            $value = trim((string)($row[$resultKey] ?? ''));
            if ($value !== '') $values[] = $value;
        }
        $result->closeCursor();
        return $values;
    }

    /** @return array<int, string> */
    private function unfilteredIndexedSuggestionValues(string $userId, string $facetType, string $query, int $limit): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('facet_suggestion.normalized_value', 'facet_suggestion.facet_value')
            ->from('library_item_facets', 'facet_suggestion')
            ->where($qb->expr()->eq('facet_suggestion.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('facet_suggestion.facet_type', $qb->createNamedParameter($facetType)))
            ->andWhere($qb->expr()->like('facet_suggestion.normalized_value', $qb->createNamedParameter($this->escapeLikeParameter($query) . '%')))
            ->groupBy('facet_suggestion.normalized_value', 'facet_suggestion.facet_value')
            ->orderBy('facet_suggestion.normalized_value', 'ASC')
            ->addOrderBy('facet_suggestion.facet_value', 'ASC')
            // One value can have at most 16 normalized search keys. Reading that
            // many index groups keeps token matches discoverable without scanning
            // every item row for a broad prefix such as a publication year.
            ->setMaxResults($limit * 16)
            ->executeQuery();

        $values = [];
        while ($row = $result->fetch()) {
            $value = trim((string)($row['facet_value'] ?? ''));
            if ($value !== '') $values[$value] = true;
        }
        $result->closeCursor();
        $values = array_keys($values);
        sort($values, SORT_NATURAL | SORT_FLAG_CASE);
        return array_slice($values, 0, $limit);
    }

    private function suggestionFiltersAreEmpty(array $filters): bool {
        foreach ($filters as $key => $value) {
            if ($key === 'view' || $key === 'sort') {
                continue;
            }
            if ($key === 'taggedFileIds' || (is_scalar($value) && trim((string)$value) !== '')) {
                return false;
            }
        }
        return true;
    }

    /**
     * @return array<int, string>
     */
    private function indexedFacetValues(string $userId, string $facetType): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('MIN(facet.facet_value)'), 'facet_value')
            ->from('library_item_facets', 'facet')
            ->where($qb->expr()->eq('facet.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('facet.facet_type', $qb->createNamedParameter($facetType)))
            ->groupBy('facet.facet_value')
            ->orderBy('facet_value', 'ASC')
            ->setMaxResults(self::MULTI_VALUE_FACET_LIMIT)
            ->executeQuery();

        $values = [];
        while ($row = $result->fetch()) {
            $value = trim((string)($row['facet_value'] ?? ''));
            if ($value !== '') $values[] = $value;
        }
        $result->closeCursor();
        return $values;
    }

    /**
     * @return array<int, string>
     */
    private function publicationYearFacetValues(string $userId, array $filters): array {
        $qb = $this->catalogueFilteredQueryBuilder($userId, $filters);
        $result = $qb->selectAlias($qb->createFunction('SUBSTR(i.publication_date, 1, 4)'), 'year')
            ->andWhere($qb->expr()->like('i.publication_date', $qb->createNamedParameter('____%')))
            ->groupBy('year')
            ->orderBy('year', 'DESC')
            ->executeQuery();

        $years = [];
        while ($row = $result->fetch()) {
            $year = trim((string)($row['year'] ?? ''));
            if (preg_match('/^\\d{4}$/', $year) === 1) {
                $years[] = $year;
            }
        }
        $result->closeCursor();
        return $years;
    }

    /**
     * @return array<int, string>
     */
    private function scanStatusFacetValues(string $userId, array $filters): array {
        return $this->distinctCatalogueValues($userId, $filters, 'f.scan_status', 'value');
    }

    private function folderFileIdSubquery(IQueryBuilder $qb, string $userId, string $folder): string {
        $folder = str_replace('\\', '/', trim($folder));
        $folder = $folder === '/' ? '/' : rtrim($folder, '/');
        $folderPrefix = $folder === '/' ? '/' : $folder . '/';
        $userParameter = $qb->createNamedParameter($userId);
        $folderParameter = $qb->createNamedParameter($folder);
        $prefixParameter = $qb->createNamedParameter($this->escapeLikeParameter($folderPrefix) . '%');

        return "SELECT `folder_filter`.`id` FROM `*PREFIX*library_files` `folder_filter` "
            . "WHERE `folder_filter`.`user_id` = {$userParameter} "
            . "AND (`folder_filter`.`cached_path` = {$folderParameter} OR `folder_filter`.`cached_path` LIKE {$prefixParameter})";
    }

    /**
     * Use the user/title index to recognize a specific exact-title search before
     * building the deliberately broad substring fallback. Title equality uses
     * the database column's case-insensitive collation on supported Nextcloud
     * MySQL/MariaDB installations and avoids wrapping the indexed column.
     *
     * @return array<int, int>
     */
    private function exactTitleCandidateIds(string $userId, string $query): array {
        if (mb_strlen($query) < 4 || mb_strlen($query) > 255) {
            return [];
        }

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('exact_title.id')
            ->from('library_items', 'exact_title')
            ->where($qb->expr()->eq('exact_title.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('exact_title.title', $qb->createNamedParameter($query)))
            ->executeQuery();

        $itemIds = [];
        while ($row = $result->fetch()) {
            $itemIds[] = (int)$row['id'];
        }
        $result->closeCursor();
        return $itemIds;
    }

    /** @return array<int, string> */
    private function searchGramsForQuery(string $query): array {
        $grams = $this->searchGramsForText($query);
        return array_slice($grams, 0, self::SEARCH_GRAM_MAX_QUERY_GRAMS);
    }

    /** @return array<int, int> */
    private function searchGramCandidateIds(string $userId, array $searchGrams): array {
        if ($searchGrams === []) {
            return [];
        }
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('search_gram.item_id')
            ->from('library_item_search_grams', 'search_gram')
            ->where($qb->expr()->eq('search_gram.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('search_gram.gram', $qb->createNamedParameter($searchGrams, IQueryBuilder::PARAM_STR_ARRAY)))
            ->groupBy('search_gram.item_id')
            ->having($qb->expr()->eq($qb->createFunction('COUNT(DISTINCT search_gram.gram)'), $qb->createNamedParameter(count($searchGrams))))
            ->setMaxResults(50000)
            ->executeQuery();
        $itemIds = [];
        while ($row = $result->fetch()) {
            $itemIds[] = (int)$row['item_id'];
        }
        $result->closeCursor();
        return $itemIds;
    }

    /** @param array<int, string> $searchGrams */
    private function searchGramCandidateSubquery(IQueryBuilder $qb, string $userId, array $searchGrams): string {
        $gramCount = count($searchGrams);
        $userParameter = $qb->createNamedParameter($userId);
        $gramParameter = $qb->createNamedParameter($searchGrams, IQueryBuilder::PARAM_STR_ARRAY);
        $countParameter = $qb->createNamedParameter($gramCount);
        return "SELECT `search_gram`.`item_id` FROM `*PREFIX*library_item_search_grams` `search_gram` "
            . "WHERE `search_gram`.`user_id` = {$userParameter} "
            . "AND `search_gram`.`gram` IN ({$gramParameter}) "
            . "GROUP BY `search_gram`.`item_id` HAVING COUNT(DISTINCT `search_gram`.`gram`) = {$countParameter}";
    }

    private function applyCatalogueFilters(IQueryBuilder $qb, string $userId, array $filters): void {
        $type = trim((string)($filters['type'] ?? ''));
        if ($type !== '') {
            $qb->andWhere($qb->expr()->eq('i.publication_type', $qb->createNamedParameter($this->normalizePublicationType($type))));
        }

        $publisher = trim((string)($filters['publisher'] ?? ''));
        if ($publisher !== '') {
            $qb->andWhere($qb->expr()->eq('i.publisher', $qb->createNamedParameter($publisher)));
        }

        $publication = trim((string)($filters['publication'] ?? ''));
        if ($publication !== '') {
            $qb->andWhere($qb->expr()->eq('i.publication', $qb->createNamedParameter($publication)));
        }

        $year = trim((string)($filters['year'] ?? ''));
        if (preg_match('/^\\d{4}$/', $year) === 1) {
            // Publication year filter uses LIKE prefix matching for YYYY / YYYY-MM / YYYY-MM-DD values.
            $qb->andWhere($qb->expr()->like('i.publication_date', $qb->createNamedParameter($year . '%')));
        }

        $language = trim((string)($filters['language'] ?? ''));
        if ($language !== '') {
            $qb->andWhere($qb->expr()->eq('i.language', $qb->createNamedParameter($language)));
        }

        $creator = trim((string)($filters['creator'] ?? ''));
        if ($creator !== '') {
            // Small indexed candidate sets avoid scanning a large catalogue for rare authors.
            $lookup = $this->db->getQueryBuilder();
            $result = $lookup->select('item_id')->from('library_item_facets')
                ->where($lookup->expr()->eq('user_id', $lookup->createNamedParameter($userId)))
                ->andWhere($lookup->expr()->eq('facet_type', $lookup->createNamedParameter('creator')))
                ->andWhere($lookup->expr()->eq('facet_value', $lookup->createNamedParameter($creator)))
                ->groupBy('item_id')->setMaxResults(501)->executeQuery();
            $authorIds = array_map('intval', array_column($result->fetchAll(), 'item_id')); $result->closeCursor();
            $lookup = $this->db->getQueryBuilder();
            $result = $lookup->select('id')->from('library_items')
                ->where($lookup->expr()->eq('user_id', $lookup->createNamedParameter($userId)))
                ->andWhere($lookup->expr()->eq('creators', $lookup->createNamedParameter($creator)))
                ->setMaxResults(501)->executeQuery();
            $legacyIds = array_map('intval', array_column($result->fetchAll(), 'id')); $result->closeCursor();
            $ids = array_values(array_unique([...$authorIds, ...$legacyIds]));
            if (count($authorIds) <= 500 && count($legacyIds) <= 500 && count($ids) <= 500) {
                $qb->andWhere($qb->expr()->in('i.id', $qb->createNamedParameter($ids ?: [-1], IQueryBuilder::PARAM_INT_ARRAY)));
            } else {
                $author = $this->db->getQueryBuilder();
                $author->select('author_filter.item_id')->from('library_item_facets', 'author_filter')
                    ->where($author->expr()->eq('author_filter.user_id', $qb->createNamedParameter($userId)))
                    ->andWhere($author->expr()->eq('author_filter.facet_type', $qb->createNamedParameter('creator')))
                    ->andWhere($author->expr()->eq('author_filter.facet_value', $qb->createNamedParameter($creator)));
                $legacy = $this->db->getQueryBuilder();
                $legacy->select('legacy_author.id')->from('library_items', 'legacy_author')
                    ->where($legacy->expr()->eq('legacy_author.user_id', $qb->createNamedParameter($userId)))
                    ->andWhere($legacy->expr()->eq('legacy_author.creators', $qb->createNamedParameter($creator)));
                // Separate subqueries can be materialized; no correlated per-item lookup or truncated results.
                $qb->andWhere($qb->expr()->orX($qb->expr()->in('i.id', $qb->createFunction($author->getSQL())), $qb->expr()->in('i.id', $qb->createFunction($legacy->getSQL()))));
            }
        }

        $format = mb_strtolower(trim((string)($filters['format'] ?? '')));
        if ($format !== '') {
            $qb->andWhere($qb->expr()->eq($qb->createFunction('LOWER(f.extension)'), $qb->createNamedParameter($format)));
        }

        $subject = trim((string)($filters['subject'] ?? ''));
        if ($subject !== '') {
            $qb->andWhere($this->indexedFacetFilter($qb, $userId, 'subject', $subject));
        }

        $classification = trim((string)($filters['classification'] ?? ''));
        if ($classification !== '') {
            $qb->andWhere($this->indexedFacetFilter($qb, $userId, 'classification', $classification));
        }

        $status = trim((string)($filters['status'] ?? ''));
        if ($status !== '') {
            $qb->andWhere($qb->expr()->eq('f.scan_status', $qb->createNamedParameter($status)));
        }

        $starred = trim((string)($filters['starred'] ?? ''));
        if ($starred === '1') {
            $qb->andWhere($qb->expr()->eq('i.starred', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['recentlyOpened'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->isNotNull('i.last_opened_at'))
                ->andWhere($qb->expr()->gt('i.last_opened_at', $qb->createNamedParameter(0)));
        }

        $this->applySmartCollectionFilters($qb, $filters);

        $shelf = trim((string)($filters['shelf'] ?? ''));
        if ($shelf !== '') {
            $qb->andWhere($qb->expr()->eq($qb->createFunction("COALESCE(NULLIF(r.label, ''), r.path)"), $qb->createNamedParameter($shelf)));
        }

        $folder = str_replace('\\', '/', trim((string)($filters['folder'] ?? '')));
        $folder = $folder === '/' ? '/' : rtrim($folder, '/');
        if ($folder !== '') {
            $qb->andWhere($qb->expr()->in('i.library_file_id', $qb->createFunction($this->folderFileIdSubquery($qb, $userId, $folder))));
        }

        if (array_key_exists('taggedFileIds', $filters)) {
            $taggedFileIds = array_values(array_unique(array_map('intval', (array)$filters['taggedFileIds'])));
            if ($taggedFileIds === []) {
                $qb->andWhere('1 = 0');
            } else {
                $qb->andWhere($qb->expr()->in('f.file_id', $qb->createNamedParameter($taggedFileIds, IQueryBuilder::PARAM_INT_ARRAY)));
            }
        }

        $query = trim((string)($filters['q'] ?? ''));
        if ($query !== '') {
            $exactTitleItemIds = $this->exactTitleCandidateIds($userId, $query);
            if ($exactTitleItemIds !== []) {
                $qb->andWhere($qb->expr()->in('i.id', $qb->createNamedParameter($exactTitleItemIds, IQueryBuilder::PARAM_INT_ARRAY)));
            } else {
                $searchGrams = $this->searchGramsForQuery($query);
                $identifierSearch = IdentifierService::normalizeSearchQuery($query);
                $searchPredicates = [];
                if ($searchGrams !== []) {
                    $searchGramItemIds = $this->searchGramCandidateIds($userId, $searchGrams);
                    if ($searchGramItemIds !== [] && count($searchGramItemIds) <= self::SEARCH_GRAM_INLINE_CANDIDATE_LIMIT) {
                        $searchPredicates[] = $qb->expr()->in('i.id', $qb->createNamedParameter($searchGramItemIds, IQueryBuilder::PARAM_INT_ARRAY));
                    } elseif ($searchGramItemIds !== []) {
                        $searchPredicates[] = $qb->expr()->in('i.id', $qb->createFunction($this->searchGramCandidateSubquery($qb, $userId, $searchGrams)));
                    }
                }
                if ($identifierSearch !== null) {
                    $searchPredicates[] = $qb->expr()->andX(
                        $qb->expr()->eq('idn.scheme', $qb->createNamedParameter($identifierSearch['scheme'])),
                        $qb->expr()->eq('idn.normalized_value', $qb->createNamedParameter($identifierSearch['normalizedValue']))
                    );
                }
                $qb->andWhere($searchPredicates === [] ? '1 = 0' : $qb->expr()->orX(...$searchPredicates));
            }
        }
    }

    private function applySmartCollectionFilters(IQueryBuilder $qb, array $filters): void {
        $workflowStatus = $this->normalizeWorkflowStatus((string)($filters['workflowStatus'] ?? ''));
        if ($workflowStatus !== '') {
            $qb->andWhere($qb->expr()->eq('i.workflow_status', $qb->createNamedParameter($workflowStatus)));
        }

        if (trim((string)($filters['noCreator'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->orX(
                $qb->expr()->isNull('i.creators'),
                $qb->expr()->eq('i.creators', $qb->createNamedParameter(''))
            ));
        }

        if (trim((string)($filters['noPublication'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->eq('i.no_publication', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['noDate'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->orX(
                $qb->expr()->isNull('i.publication_date'),
                $qb->expr()->eq('i.publication_date', $qb->createNamedParameter(''))
            ));
        }

        if (trim((string)($filters['noDescription'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->eq('i.no_description', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['titleFromFilename'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->eq('i.title_from_filename', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['unsupportedContainer'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->in($qb->createFunction('LOWER(f.extension)'), $qb->createNamedParameter(['7z', 'rar', 'cbr', 'cb7'], IQueryBuilder::PARAM_STR_ARRAY)));
        }

        if (trim((string)($filters['needsMetadata'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->eq('i.needs_metadata', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['weakMetadata'] ?? '')) === 'filename') {
            $qb->andWhere($qb->expr()->eq('i.weak_metadata', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['unreviewedImports'] ?? '')) === '1') {
            $qb->andWhere($qb->expr()->eq('i.unreviewed_import', $qb->createNamedParameter(1)));
        }

        if (trim((string)($filters['coverReview'] ?? '')) === 'placeholder') {
            $qb->andWhere($qb->expr()->eq('i.cover_review', $qb->createNamedParameter(1)));
        }
    }

    private function refreshReviewFilterFlags(string $userId, int $itemId): void {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.creators', 'i.authors_json', 'i.publication', 'i.series_name', 'i.series_number', 'i.genre', 'i.publication_date', 'i.description', 'i.metadata_source', 'i.field_sources', 'i.user_edited', 'i.cover_override_url', 'i.cover_override_data', 'f.scan_status', 'f.extension')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return;
        }

        $this->writeReviewFilterFlags($userId,$itemId,$row);
    }

    private function writeReviewFilterFlags(string $userId,int $itemId,array $row): void {
        $flags = $this->reviewFilterFlagsForRow($row);
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('needs_metadata', $qb->createNamedParameter($flags['needs_metadata'] ? 1 : 0))
            ->set('cover_review', $qb->createNamedParameter($flags['cover_review'] ? 1 : 0))
            ->set('no_publication', $qb->createNamedParameter($flags['no_publication'] ? 1 : 0))
            ->set('title_from_filename', $qb->createNamedParameter($flags['title_from_filename'] ? 1 : 0))
            ->set('no_description', $qb->createNamedParameter($flags['no_description'] ? 1 : 0))
            ->set('weak_metadata', $qb->createNamedParameter($flags['weak_metadata'] ? 1 : 0))
            ->set('unreviewed_import', $qb->createNamedParameter($flags['unreviewed_import'] ? 1 : 0))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
    }

    /** @return array{needs_metadata:bool,cover_review:bool,no_publication:bool,title_from_filename:bool,no_description:bool,weak_metadata:bool,unreviewed_import:bool} */
    private function reviewFilterFlagsForRow(array $row): array {
        $metadataSource = (string)($row['metadata_source'] ?? '');
        $fieldSources = (string)($row['field_sources'] ?? '');
        $scanStatus = (string)($row['scan_status'] ?? '');
        $extension = mb_strtolower((string)($row['extension'] ?? ''));
        $coverOverride = (bool)($row['has_cover_override']??false) || trim((string)($row['cover_override_url'] ?? '')) !== '' || trim((string)($row['cover_override_data'] ?? '')) !== '';
        $noPublication = $this->nullableString($row['publication'] ?? null) === null;
        $noDescription = $this->nullableString($row['description'] ?? null) === null;
        $titleFromFilename = $metadataSource === 'filename-pattern'
            || str_contains($fieldSources, '"title":"filename-pattern"')
            || str_contains($fieldSources, '"title":"filename"');
        $weakMetadata = $metadataSource === 'filename-pattern' || str_contains($fieldSources, 'filename-pattern');

        return [
            'needs_metadata' => $scanStatus === 'metadata_error'
                || $this->nullableString($row['creators'] ?? null) === null
                || $noPublication
                || $this->nullableString($row['publication_date'] ?? null) === null
                || $metadataSource === 'filename-pattern',
            'cover_review' => !$coverOverride && ($scanStatus === 'metadata_error' || !in_array($extension, ['pdf', 'epub', 'cbz'], true)),
            'no_publication' => $noPublication,
            'title_from_filename' => $titleFromFilename,
            'no_description' => $noDescription,
            'weak_metadata' => $weakMetadata,
            'unreviewed_import' => $metadataSource !== 'user' && !(bool)($row['user_edited'] ?? false),
        ];
    }

    private function indexedFacetFilter(IQueryBuilder $qb, string $userId, string $facetType, string $value) {
        $facetValue = mb_substr(trim($value), 0, 255);
        $alias = $facetType === 'subject' ? 'subject_filter' : 'classification_filter';
        $qb->innerJoin('i', 'library_item_facets', $alias, $qb->expr()->eq($alias . '.item_id', 'i.id'));
        return $qb->expr()->andX(
            $qb->expr()->eq($alias . '.user_id', $qb->createNamedParameter($userId)),
            $qb->expr()->eq($alias . '.facet_type', $qb->createNamedParameter($facetType)),
            $qb->expr()->eq($alias . '.facet_value', $qb->createNamedParameter($facetValue))
        );
    }

    private function applyCatalogueSort(IQueryBuilder $qb, string $sort): void {
        match ($sort) {
            'recent' => $qb->orderBy('i.library_file_id', 'DESC')->addOrderBy('i.id', 'DESC'),
            'publicationDate' => $qb->orderBy('i.publication_date', 'DESC')->addOrderBy('i.title', 'ASC'),
            'publication' => $qb->orderBy('i.publication', 'ASC')->addOrderBy('i.publication_date', 'DESC')->addOrderBy('i.title', 'ASC'),
            'publicationIssue' => $qb->orderBy('i.publication_date', 'ASC')->addOrderBy('i.title', 'ASC'),
            'lastOpened' => $qb->orderBy('i.last_opened_at', 'DESC')->addOrderBy('i.title', 'ASC'),
            'format' => $qb->orderBy('f.extension', 'ASC')->addOrderBy('i.title', 'ASC'),
            default => $qb->orderBy('i.title', 'ASC'),
        };
    }

    private function escapeLikeParameter(string $value): string {
        return addcslashes($value, '%_');
    }

    private function normalizeJoinedItemRow(array $row, ?array $identifiers = null): array {
        $item = [
            'id' => (int)$row['id'],
            'libraryFileId' => (int)($row['library_file_id'] ?? 0),
            'fileId' => (int)($row['file_id'] ?? 0),
            'cachedPath' => (string)($row['cached_path'] ?? ''),
            'mimeType' => (string)($row['mime_type'] ?? ''),
            'extension' => $row['extension'] !== null ? (string)$row['extension'] : '',
            'scanStatus' => (string)$row['scan_status'],
            'scanError' => $row['scan_error'] !== null ? SafeDiagnostics::sanitizePublicError((string)$row['scan_error']) : '',
            'publicationType' => (string)$row['publication_type'],
            'title' => (string)$row['title'],
            'subtitle' => $row['subtitle'] !== null ? (string)$row['subtitle'] : '',
            'creators' => $row['creators'] !== null ? (string)$row['creators'] : '',
            'authors' => AuthorNames::read($row['authors_json'] ?? null, $row['creators'] ?? null),
            'publication' => $row['publication'] !== null ? (string)$row['publication'] : '',
            'genre' => (string)($row['genre'] ?? ''),
            'seriesNumber' => (string)($row['series_number'] ?? ''),
            'series' => (string)($row['series_name'] ?? ''),
            'publicationDate' => PublicationDate::forEditor($row['publication_date'] ?? ''),
            'language' => $row['language'] !== null ? (string)$row['language'] : '',
            'publisher' => $row['publisher'] !== null ? (string)$row['publisher'] : '',
            'description' => $row['description'] !== null ? (string)$row['description'] : '',
            'subjects' => $this->decodeJsonList($row['subjects_json'] ?? null),
            'classifications' => $this->decodeJsonList($row['classifications_json'] ?? null),
            'personalRating' => isset($row['personal_rating']) ? (int)$row['personal_rating'] : null,
            'coverOverrideUrl' => isset($row['cover_override_url']) ? (string)$row['cover_override_url'] : '',
            'coverCacheRevision' => hash('sha256', 'thumb-v1|' . ($row['etag'] ?? '') . '|' . ($row['cover_revision'] ?? '')),
            'coverOverrideData' => isset($row['cover_override_data']) ? (string)$row['cover_override_data'] : '',
            'coverOverrideMimeType' => isset($row['cover_override_mime_type']) ? (string)$row['cover_override_mime_type'] : '',
            'starred' => (bool)$row['starred'],
            'workflowStatus' => (string)($row['workflow_status'] ?? ''),
            'lastOpenedAt' => (int)($row['last_opened_at'] ?? 0),
            'metadataSource' => (string)($row['metadata_source'] ?? ''),
            'fieldSources' => $this->decodeJsonMap($row['field_sources'] ?? null),
            'fieldValues' => $this->decodeJsonMap($row['field_values'] ?? null),
            'userEdited' => (bool)($row['user_edited'] ?? false),
            'identifiers' => $identifiers ?? $this->itemIdentifiers((int)$row['id']),
            'shelf' => trim((string)($row['label'] ?? '')) !== '' ? (string)$row['label'] : (string)($row['path'] ?? ''),
        ];
        $item['hasScannerConflict'] = $this->itemHasScannerConflict($item);
        $item['scannerConflictCount'] = $this->scannerConflictCount($item);
        return $item;
    }

    private function findByLibraryFileId(string $userId, int $libraryFileId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id', 'user_edited')
            ->from('library_items')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('library_file_id', $qb->createNamedParameter($libraryFileId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return $row;
    }

    private function refreshScannerCandidatesForUserEditedItem(string $userId, int $itemId, array $metadataCandidate): void {
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('field_sources', $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('user_edited', $qb->createNamedParameter(1)))
            ->executeStatement();
        $this->refreshReviewFilterFlags($userId, $itemId);
    }

    private function refreshInferredItem(string $userId, int $itemId, array $file, array $metadataCandidate, array $existing, bool $invalidAuthors): void {
        if ($invalidAuthors) {
            $metadataCandidate['creators']=$existing['creators'];
            $metadataCandidate['authors']=AuthorNames::read($existing['authors_json'],$existing['creators']);
        }
        foreach ($metadataCandidate['invalidFields']??[] as $field) {
            $column=$this->databaseColumnForField($field);
            if ($column !== null) $metadataCandidate[$field]=$existing[$column];
        }
        $qb = $this->db->getQueryBuilder();
        $qb->update('library_items')
            ->set('publication_type', $qb->createNamedParameter($metadataCandidate['publicationType']))
            ->set('title', $qb->createNamedParameter($metadataCandidate['title']))
            ->set('subtitle', $qb->createNamedParameter($metadataCandidate['subtitle']))
            ->set('creators', $qb->createNamedParameter($metadataCandidate['creators']))
            ->set('authors_json', $qb->createNamedParameter(AuthorNames::encode($metadataCandidate['authors'])))
            ->set('publication', $qb->createNamedParameter($metadataCandidate['publication']))
            ->set('genre', $qb->createNamedParameter($metadataCandidate['genre']))
            ->set('series_number', $qb->createNamedParameter($metadataCandidate['seriesNumber']))
            ->set('series_name', $qb->createNamedParameter($metadataCandidate['series']))
            ->set('publication_date', $qb->createNamedParameter($metadataCandidate['publicationDate']))
            ->set('language', $qb->createNamedParameter($metadataCandidate['language']))
            ->set('publisher', $qb->createNamedParameter($metadataCandidate['publisher']))
            ->set('description', $qb->createNamedParameter($metadataCandidate['description']))
            ->set('subjects_json', $qb->createNamedParameter($this->jsonEncodeList($metadataCandidate['subjects'])))
            ->set('classifications_json', $qb->createNamedParameter($this->jsonEncodeList($metadataCandidate['classifications'])))
            ->set('metadata_source', $qb->createNamedParameter($metadataCandidate['metadataSource']))
            ->set('field_sources', $qb->createNamedParameter(json_encode($metadataCandidate['fieldSources'], JSON_THROW_ON_ERROR)))
            ->set('field_values', $qb->createNamedParameter(json_encode($metadataCandidate['fieldValues'], JSON_THROW_ON_ERROR)))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
        $row=$this->scannerDatabaseValues($metadataCandidate) + ['user_edited'=>0,'has_cover_override'=>(int)$existing['has_cover_override']];
        $this->persistScannerIndexes($userId,$itemId,$file,$metadataCandidate,$row,$existing['scanner_index_hash'],true);
    }

    /** Backfill replaces only creator facets, preserving every other derived index. */
    private function refreshAuthorFacetIndex(string $uid, int $id, array $names): void {
        $this->invalidateScannerIndexHash($uid,$id);
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_item_facets')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('item_id', $qb->createNamedParameter($id)))
            ->andWhere($qb->expr()->eq('facet_type', $qb->createNamedParameter('creator')))->executeStatement();
        $this->insertFacetValues($uid, $id, 'creator', $names, true);
    }

    /** Shared prefix keys belong to one item, even when several authors share a name part. */
    private function insertFacetValues(string $uid, int $id, string $type, array $values, bool $prefixKeys): void {
        $rows=$this->facetRowsForValues($uid,$id,$type,$values,$prefixKeys);
        // Let the database resolve accent/case collisions; full names precede word keys.
        // Conflict-ignore clauses affect only the existing unique facet key.
        $provider = $this->db->getDatabaseProvider();
        $table = $this->db->getQueryBuilder()->getTableName('library_item_facets');
        if (!in_array($provider, ['mysql', 'sqlite', 'pgsql'], true)) {
            foreach ($rows as $row) $this->db->insertIfNotExist('*PREFIX*library_item_facets',
                array_combine(['user_id','item_id','facet_type','facet_value','normalized_value'], $row),
                ['item_id', 'facet_type', 'normalized_value']);
            return;
        }
        foreach (array_chunk($rows, 150) as $chunk) {
            $sql = 'INSERT INTO ' . $table . ' (user_id,item_id,facet_type,facet_value,normalized_value) VALUES '
                . implode(',', array_fill(0, count($chunk), '(?,?,?,?,?)'));
            $sql .= $provider === 'mysql' ? ' ON DUPLICATE KEY UPDATE facet_value=facet_value'
                : ' ON CONFLICT (item_id,facet_type,normalized_value) DO NOTHING';
            $this->db->executeStatement($sql, array_merge(...$chunk));
        }
    }

    /** Full names precede derived keys; verification uses the same generator as insertion. */
    private function facetRowsForValues(string $uid,int $id,string $type,array $values,bool $prefixKeys): array {
        $values = array_map(static fn(string $v): string => mb_substr($v, 0, 255), $this->normalizeMultiValueField($values));
        $pairs = [];
        foreach ($values as $value) $pairs[] = [$value, mb_strtolower($value)];
        if ($prefixKeys) foreach ($values as $value) foreach (FacetSearchKeyGenerator::forValue($value) as $key) $pairs[] = [$value, $key];
        $seen = []; $rows = [];
        foreach ($pairs as [$value, $key]) {
            if (isset($seen[$key])) continue;
            $seen[$key] = true;
            $rows[] = [$uid, $id, $type, $value, $key];
        }
        return $rows;
    }

    /** @return array<string, array<int, string>> */
    private function typeaheadScalarFacets(array $metadata): array {
        $publicationDate = PublicationDate::forEditor($metadata['publicationDate'] ?? $metadata['publication_date'] ?? '');
        $year = mb_substr($publicationDate, 0, 4);
        return [
            'publication' => [(string)($metadata['publication'] ?? '')],
            'creator' => isset($metadata['authors']) ? $metadata['authors'] : AuthorNames::read($metadata['authors_json'] ?? null, $metadata['creators'] ?? null),
            'publisher' => [(string)($metadata['publisher'] ?? '')],
            'classification' => $this->normalizeMultiValueField($metadata['classifications'] ?? []),
            'year' => preg_match('/^\\d{4}$/', $year) === 1 ? [$year] : [],
        ];
    }

    private function refreshItemSearchIndex(string $userId, int $itemId, ?array $sourceRow = null, bool $invalidate = true): void {
        if ($invalidate) $this->invalidateScannerIndexHash($userId,$itemId);
        $this->duplicateIndex?->changed($userId, $itemId);
        $this->deleteItemSearchIndex($userId, $itemId);
        $row = $sourceRow ?? $this->searchIndexSourceRow($userId, $itemId);
        if ($row === null) {
            return;
        }
        $table = $this->db->getQueryBuilder()->getTableName('library_item_search_grams');
        // 200 rows = 600 parameters, below SQLite's conservative 999 parameter limit.
        foreach (array_chunk($this->searchGramsForText($this->searchDocumentForRow($row)), 200) as $grams) {
            $values = []; $parameters = [];
            foreach ($grams as $gram) {
                $values[] = '(?, ?, ?)';
                array_push($parameters, $userId, $itemId, $gram);
            }
            $this->db->executeStatement('INSERT INTO ' . $table . ' (user_id, item_id, gram) VALUES ' . implode(', ', $values), $parameters);
        }
    }

    private function deleteItemSearchIndex(string $userId, int $itemId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_item_search_grams')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('item_id', $qb->createNamedParameter($itemId)))
            ->executeStatement();
    }

    private function searchIndexSourceRow(string $userId, int $itemId): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.title', 'i.subtitle', 'i.creators', 'i.authors_json', 'i.publication', 'i.description', 'i.subjects_json', 'i.classifications_json', 'f.cached_path')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }
        $row['identifiers'] = implode(' ', array_map(
            static fn (array $identifier): string => $identifier['displayValue'] . ' ' . $identifier['normalizedValue'],
            $this->itemIdentifiers($itemId)
        ));
        return $row;
    }

    private function searchDocumentForRow(array $row): string {
        return implode(' ', [
            (string)($row['title'] ?? ''),
            (string)($row['subtitle'] ?? ''),
            (string)($row['creators'] ?? ''),
            (string)($row['publication'] ?? ''),
            (string)($row['description'] ?? ''),
            (string)($row['subjects_json'] ?? ''),
            (string)($row['classifications_json'] ?? ''),
            (string)($row['cached_path'] ?? ''),
            (string)($row['identifiers'] ?? ''),
        ]);
    }

    /** @return array<int, string> */
    private function searchGramsForText(string $text): array {
        $normalized = mb_strtolower($text);
        $normalized = preg_replace('/[^\p{L}\p{N}]+/u', ' ', $normalized) ?? '';
        $grams = [];
        foreach (preg_split('/\s+/u', trim($normalized)) ?: [] as $token) {
            $length = mb_strlen($token);
            if ($length < self::SEARCH_GRAM_LENGTH) {
                continue;
            }
            for ($i = 0; $i <= $length - self::SEARCH_GRAM_LENGTH; $i++) {
                $grams[mb_substr($token, $i, self::SEARCH_GRAM_LENGTH)] = true;
            }
        }
        return array_keys($grams);
    }

    /**
     * Replace the derived searchable facet rows for one item.
     *
     * @param array<int, string> $subjects
     * @param array<int, string> $classifications
     * @param array<string, array<int, string>> $scalarFacets
     */
    public function refreshItemFacetIndex(string $userId, int $itemId, array $subjects, array $classifications, array $scalarFacets = [], bool $invalidate = true): void {
        if ($invalidate) $this->invalidateScannerIndexHash($userId,$itemId);
        $this->deleteItemFacetIndex($userId, $itemId);
        $facetValues = ['subject' => $subjects, 'classification' => $classifications] + $scalarFacets;
        $scalarFacetTypes = array_fill_keys(array_keys($scalarFacets), true);
        foreach ($facetValues as $facetType => $values) {
            $this->insertFacetValues($userId, $itemId, $facetType, $values, isset($scalarFacetTypes[$facetType]));
        }
    }

    private function deleteItemFacetIndex(string $userId, int $itemId): void {
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_item_facets')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('item_id', $qb->createNamedParameter($itemId)))
            ->executeStatement();
    }

    /** Rebuild all derived rows for a user while reading source items in bounded batches. */
    public function rebuildFacetIndex(string $userId, int $limit = 500): int {
        $userId = trim($userId);
        if ($userId === '') {
            throw new \InvalidArgumentException('A user ID is required.');
        }
        $limit = max(1, min(5000, $limit));
        $lastId = 0;
        $rebuilt = 0;
        do {
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('id', 'subjects_json', 'classifications_json', 'publication', 'creators', 'authors_json', 'publisher', 'publication_date')
                ->from('library_items')
                ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
                ->andWhere($qb->expr()->gt('id', $qb->createNamedParameter($lastId)))
                ->orderBy('id', 'ASC')
                ->setMaxResults($limit)
                ->executeQuery();
            $batch = [];
            while ($row = $result->fetch()) $batch[] = $row;
            $result->closeCursor();
            foreach ($batch as $row) {
                $lastId = (int)$row['id'];
                $this->refreshItemFacetIndex(
                    $userId,
                    $lastId,
                    $this->decodeJsonList($row['subjects_json'] ?? null),
                    $this->decodeJsonList($row['classifications_json'] ?? null),
                    $this->typeaheadScalarFacets($row)
                );
                $rebuilt++;
            }
        } while (count($batch) === $limit);
        return $rebuilt;
    }


    /**
     * @param array<int, array{scheme:string,displayValue:string,normalizedValue:string,valid:bool,source:string,userEdited:bool}> $identifiers
     */
    private function syncItemIdentifiers(string $userId, int $itemId, array $identifiers, bool $invalidate = true): void {
        if ($invalidate) $this->invalidateScannerIndexHash($userId,$itemId);
        $qb = $this->db->getQueryBuilder();
        $qb->delete('library_item_identifiers')
            ->where($qb->expr()->eq('item_id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();

        $now = time();
        foreach ($identifiers as $identifier) {
            $qb = $this->db->getQueryBuilder();
            $qb->insert('library_item_identifiers')
                ->values([
                    'item_id' => $qb->createNamedParameter($itemId),
                    'user_id' => $qb->createNamedParameter($userId),
                    'scheme' => $qb->createNamedParameter($identifier['scheme']),
                    'display_value' => $qb->createNamedParameter($identifier['displayValue']),
                    'normalized_value' => $qb->createNamedParameter($identifier['normalizedValue']),
                    'source' => $qb->createNamedParameter($identifier['source']),
                    'user_edited' => $qb->createNamedParameter($identifier['userEdited'] ? 1 : 0),
                    'valid' => $qb->createNamedParameter($identifier['valid'] ? 1 : 0),
                    'created_at' => $qb->createNamedParameter($now),
                    'updated_at' => $qb->createNamedParameter($now),
                ])
                ->executeStatement();
        }
    }

    /**
     * @return array<int, array{scheme:string,displayValue:string,normalizedValue:string,valid:bool,source:string,userEdited:bool}>
     */
    private function catalogueIdentifiers(string $uid, array $ids): array {
        if ($ids === []) return [];
        $qb = $this->db->getQueryBuilder();
        $r = $qb->select('item_id', 'scheme', 'display_value', 'normalized_value', 'valid', 'source', 'user_edited')
            ->from('library_item_identifiers')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->in('item_id', $qb->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)))
            ->orderBy('scheme', 'ASC')->addOrderBy('display_value', 'ASC')->executeQuery();
        $byItem = [];
        while ($row = $r->fetch()) $byItem[(int)$row['item_id']][] = [
            'scheme' => (string)$row['scheme'], 'displayValue' => (string)$row['display_value'],
            'normalizedValue' => (string)$row['normalized_value'], 'valid' => (bool)$row['valid'],
            'source' => (string)$row['source'], 'userEdited' => (bool)$row['user_edited'],
        ];
        $r->closeCursor(); return $byItem;
    }

    private function itemIdentifiers(int $itemId): array {
        if ($itemId <= 0) {
            return [];
        }
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('scheme', 'display_value', 'normalized_value', 'valid', 'source', 'user_edited')
            ->from('library_item_identifiers')
            ->where($qb->expr()->eq('item_id', $qb->createNamedParameter($itemId)))
            ->orderBy('scheme', 'ASC')
            ->addOrderBy('display_value', 'ASC')
            ->executeQuery();
        $rows = [];
        while ($row = $result->fetch()) {
            $rows[] = [
                'scheme' => (string)$row['scheme'],
                'displayValue' => (string)$row['display_value'],
                'normalizedValue' => (string)$row['normalized_value'],
                'valid' => (bool)$row['valid'],
                'source' => (string)$row['source'],
                'userEdited' => (bool)$row['user_edited'],
            ];
        }
        $result->closeCursor();
        return $rows;
    }

    private function inferTitle(array $file): string {
        $path = (string)($file['cachedPath'] ?? '');
        $name = pathinfo(basename($path), PATHINFO_FILENAME);
        $title = $this->cleanFilenameFallbackTitle($name);
        return $title === '' ? 'Untitled publication' : $title;
    }

    private function cleanFilenameFallbackTitle(string $name): string {
        // Real 1k staging sample: Real-00001-Durst_M707_Werbung should display as Durst M707 Werbung.
        $title = preg_replace('/^Real-\d{5}-/u', '', $name) ?? $name;
        $title = $this->stripArchiveSourceSuffix($title);
        $title = str_replace(['_', '-'], ' ', $title);
        $title = preg_replace('/\s+ocr$/iu', '', $title) ?? $title;
        $title = preg_replace('/\s+/', ' ', $title) ?? $title;
        return trim($title);
    }

    private function stripArchiveSourceSuffix(string $value): string {
        $value = preg_replace('/(?:[_\s-]+\(?z[-_\s]?library[^)]*\)?)+$/iu', '', $value) ?? $value;
        $value = preg_replace('/[_\s-]+Anna[_\s]+s[_\s]+Archive$/iu', '', $value) ?? $value;
        $value = preg_replace('/[_\s-]+[a-f0-9]{24,}$/iu', '', $value) ?? $value;
        $value = preg_replace('/[_\s-]+\d{10,13}$/u', '', $value) ?? $value;
        return trim($value, " \t\n\r\0\x0B-_–—");
    }

    /**
     * @param array<string, mixed> $file
     * @param array<string, string> $metadata
     * @return array{publicationType:string,title:string,subtitle:?string,creators:?string,publication:?string,publicationDate:?string,language:?string,publisher:?string,description:?string,metadataSource:string,fieldSources:array<string, string>,fieldValues:array<string, string>}
     */
    private function metadataCandidate(array $file, array $metadata): array {
        $source = (string)($metadata['metadataSource'] ?? 'filename');
        if (!in_array($source, ['epub-opf', 'pdf-info', 'opf', 'sidecar-opf', 'cbz-comicinfo', 'filename-pattern', 'filename'], true)) {
            $source = 'filename';
        }

        $candidate = [
            'publicationType' => $this->normalizePublicationType((string)($metadata['publicationType'] ?? $this->inferPublicationType($file))),
            'title' => trim((string)($metadata['title'] ?? '')) ?: $this->inferTitle($file),
            'subtitle' => $this->nullableString($metadata['subtitle'] ?? null),
            'creators' => $this->nullableString($metadata['creators'] ?? null),
            'publication' => $this->nullableString($metadata['publication'] ?? null),
            'genre' => $this->normalizeExtendedField('genre', $metadata['genre'] ?? null),
            'seriesNumber' => $this->normalizeExtendedField('seriesNumber', $metadata['seriesNumber'] ?? null),
            'series' => $this->normalizeExtendedField('series', $metadata['series'] ?? null),
            'publicationDate' => $this->nullableString(PublicationDate::forEditor($metadata['publicationDate'] ?? null)),
            'language' => $this->nullableString($metadata['language'] ?? null),
            'publisher' => $this->nullableString($metadata['publisher'] ?? null),
            'description' => $this->nullableString($metadata['description'] ?? null),
            'subjects' => $this->normalizeMultiValueField($metadata['subjects'] ?? []),
            'classifications' => $this->normalizeMultiValueField($metadata['classifications'] ?? []),
            'identifiers' => IdentifierService::normalizeIdentifierList($metadata['identifiers'] ?? [], $source, false),
            'metadataSource' => $source,
        ];

        $candidate['invalidFields']=$metadata['_invalidFields']??[];
        if (ScannerMetadataFields::invalid('title',$candidate['title'])) $candidate['title']='Untitled publication';
        $candidate['authors'] = isset($metadata['authors']) ? AuthorNames::normalize($metadata['authors']) : AuthorNames::fromText($candidate['creators']);
        $candidate['fieldSources'] = $this->buildInferredFieldSources($candidate);
        $candidate['fieldValues'] = $this->buildCurrentFieldValues($candidate);
        $candidate['fieldValues']['authors'] = AuthorNames::encode($candidate['authors']);
        $candidate['fieldValues']['authorsSource'] = $source;
        if (!empty($metadata['_invalidAuthors'])) {
            // A rejected scanner field must not become an empty reset candidate.
            unset($candidate['fieldValues']['creators'], $candidate['fieldValues']['authors'], $candidate['fieldValues']['authorsSource']);
            unset($candidate['fieldSources']['creators']);
        }
        foreach($metadata['_rejectedFields']??[] as $field=>$value) {
            unset($candidate['fieldValues'][$field],$candidate['fieldSources'][$field]);
            // Keep complete proposals when they fit the existing bounded provenance column.
            if (is_string($value) && mb_check_encoding($value,'UTF-8') && strlen($value)<=8192
                && strlen(json_encode($candidate['fieldValues']+[$field=>$value],JSON_THROW_ON_ERROR))<60000) {
                $candidate['fieldValues'][$field]=$value;
                $candidate['fieldSources'][$field]=$source;
            }
        }
        if ($candidate['invalidFields']!==[]) $candidate['fieldValues']['rejectedFields']=json_encode($candidate['invalidFields'],JSON_THROW_ON_ERROR);
        return $candidate;
    }


    /**
     * @param array<string, mixed> $metadataCandidate
     * @return array<string, string>
     */
    private function buildInferredFieldSources(array $metadataCandidate): array {
        $source = (string)($metadataCandidate['metadataSource'] ?? 'filename');
        $sources = [];
        foreach (self::PUBLICATION_FIELDS as $field) {
            $value = $metadataCandidate[$field] ?? null;
            if (is_array($value)) {
                if ($this->normalizeMultiValueField($value) !== []) {
                    $sources[$field] = $source;
                }
            } elseif ($value !== null && trim((string)$value) !== '') {
                $sources[$field] = $source;
            }
        }
        return $sources;
    }

    /**
     * @return array{fieldSources:array<string, string>,fieldValues:array<string, string>}
     */
    private function existingFieldProvenance(string $userId, int $itemId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('field_sources', 'field_values')
            ->from('library_items')
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return ['fieldSources' => [], 'fieldValues' => []];
        }
        return [
            'fieldSources' => $this->decodeJsonMap($row['field_sources'] ?? null),
            'fieldValues' => $this->decodeJsonMap($row['field_values'] ?? null),
        ];
    }

    /**
     * @param array<string, mixed> $values
     * @return array<string, string>
     */
    private function buildCurrentFieldValues(array $values): array {
        $fieldValues = [];
        foreach (self::PUBLICATION_FIELDS as $field) {
            $value = $values[$field] ?? null;
            if (is_array($value)) {
                $encoded = $this->jsonEncodeList($value);
                if ($encoded !== '[]') {
                    $fieldValues[$field] = $encoded;
                }
            } elseif ($value !== null && trim((string)$value) !== '') {
                $fieldValues[$field] = (string)$value;
            }
        }
        return $fieldValues;
    }

    /**
     * @return array<int, string>
     */
    private function normalizeMultiValueField(mixed $value): array {
        if (is_string($value)) {
            $decoded = null;
            if (str_starts_with(trim($value), '[')) {
                try {
                    $decoded = json_decode($value, true, 512, JSON_THROW_ON_ERROR);
                } catch (\JsonException) {
                    $decoded = null;
                }
            }
            $parts = is_array($decoded) ? $decoded : (preg_split('/[;,\n]+/u', $value) ?: []);
        } elseif (is_array($value)) {
            $parts = $value;
        } else {
            $parts = [];
        }
        $normalized = [];
        foreach ($parts as $part) {
            $entry = trim((string)$part);
            if ($entry !== '') {
                $normalized[mb_strtolower($entry)] = $entry;
            }
        }
        ksort($normalized, SORT_NATURAL | SORT_FLAG_CASE);
        return array_values($normalized);
    }

    private function jsonEncodeList(array $values): string {
        return json_encode(array_values($this->normalizeMultiValueField($values)), JSON_THROW_ON_ERROR);
    }

    /**
     * @return array<int, string>
     */
    private function decodeJsonList(mixed $json): array {
        if (!is_string($json) || trim($json) === '') {
            return [];
        }
        try {
            $decoded = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        return $this->normalizeMultiValueField(is_array($decoded) ? $decoded : []);
    }

    /**
     * @return array<string, string>
     */
    private function decodeJsonMap(mixed $json): array {
        if (!is_string($json) || trim($json) === '') {
            return [];
        }
        try {
            $decoded = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return [];
        }
        if (!is_array($decoded)) {
            return [];
        }
        $map = [];
        foreach ($decoded as $key => $value) {
            if (is_string($key) && (is_string($value) || is_numeric($value) || is_bool($value))) {
                $map[$key] = (string)$value;
            }
        }
        return $map;
    }

    private function inferPublicationType(array $file): string {
        $extension = strtolower((string)($file['extension'] ?? ''));
        $mimeType = strtolower((string)($file['mimeType'] ?? ''));
        if ($extension === 'cbz' || $mimeType === 'application/comicbook+zip') {
            return 'comic';
        }
        return 'other';
    }

    private function normalizePublicationType(string $publicationType): string {
        return in_array($publicationType, self::PUBLICATION_TYPES, true) ? $publicationType : 'other';
    }

    private function normalizeWorkflowStatus(string $workflowStatus): string {
        $normalized = trim($workflowStatus);
        return in_array($normalized, self::WORKFLOW_STATUSES, true) ? $normalized : '';
    }

    private function normalizePersonalRating(mixed $rating): ?int {
        $normalized = trim((string)$rating);
        if ($normalized === '') {
            return null;
        }
        if (preg_match('/^[0-5]$/', $normalized) !== 1) {
            throw new \InvalidArgumentException('Personal rating must be between 0 and 5 stars.');
        }
        return (int)$normalized;
    }

    public function setManualCoverOverride(string $userId, int $itemId, ?string $coverData, ?string $mimeType): bool {
        $data = $coverData !== null && trim($coverData) !== '' ? trim($coverData) : null;
        $mime = $mimeType !== null && trim($mimeType) !== '' ? trim($mimeType) : null;
        if ($data === null) {
            return false;
        }
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('cover_override_url', $qb->createNamedParameter(null))
            ->set('cover_revision', $qb->createNamedParameter(bin2hex(random_bytes(16))))
            ->set('cover_override_data', $qb->createNamedParameter($data))
            ->set('cover_override_mime_type', $qb->createNamedParameter($mime))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
        if ($affected > 0) {
            $this->refreshReviewFilterFlags($userId, $itemId);
        }
        return $affected > 0;
    }

    public function clearManualCoverOverride(string $userId, int $itemId): bool {
        $qb = $this->db->getQueryBuilder();
        $affected = $qb->update('library_items')
            ->set('cover_override_url', $qb->createNamedParameter(null))
            ->set('cover_revision', $qb->createNamedParameter(bin2hex(random_bytes(16))))
            ->set('cover_override_data', $qb->createNamedParameter(null))
            ->set('cover_override_mime_type', $qb->createNamedParameter(null))
            ->set('updated_at', $qb->createNamedParameter(time()))
            ->where($qb->expr()->eq('id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->executeStatement();
        if ($affected > 0) {
            $this->refreshReviewFilterFlags($userId, $itemId);
        }
        return $affected > 0;
    }

    private function databaseColumnForField(string $field): ?string {
        return match ($field) {
            'publicationType' => 'publication_type',
            'title' => 'title',
            'subtitle' => 'subtitle',
            'creators' => 'creators',
            'publication' => 'publication',
            'genre' => 'genre',
            'seriesNumber' => 'series_number',
            'series' => 'series_name',
            'publicationDate' => 'publication_date',
            'language' => 'language',
            'publisher' => 'publisher',
            'description' => 'description',
            'subjects' => 'subjects_json',
            'classifications' => 'classifications_json',
            default => null,
        };
    }

    private function databaseValueForField(string $field, string $value): ?string {
        if (isset(ScannerMetadataFields::LIMITS[$field]) && ScannerMetadataFields::invalid($field,$value)) throw new \InvalidArgumentException('Metadata exceeds supported field limits.');
        if (in_array($field, ['series', 'seriesNumber', 'genre'], true)) return $this->normalizeExtendedField($field, $value);
        $trimmed = trim($value);
        if ($field === 'publicationType') {
            return $this->normalizePublicationType($trimmed);
        }
        if ($field === 'title') {
            return $trimmed === '' ? 'Untitled publication' : $trimmed;
        }
        if ($field === 'subjects' || $field === 'classifications') {
            return $this->jsonEncodeList($this->normalizeMultiValueField($trimmed));
        }
        return $trimmed === '' ? null : $trimmed;
    }

    private function normalizeExtendedField(string $field, mixed $value): ?string {
        $limit = $field === 'seriesNumber' ? 64 : 255;
        if ($value !== null && (!is_string($value) || !mb_check_encoding($value, 'UTF-8') || mb_strlen($value) > $limit || preg_match('/[\x00-\x1f\x7f]/', $value))) {
            throw new \InvalidArgumentException('Series and genre must be text up to 255 characters; part in series must be text up to 64 characters, without control characters.');
        }
        return $this->nullableString($value);
    }

    private function nullableString(mixed $value): ?string {
        $normalized = trim((string)$value);
        return $normalized === '' ? null : $normalized;
    }
}
