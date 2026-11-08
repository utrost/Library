<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\{IDBConnection,IConfig};
use OCA\Library\Exception\MetadataConflictException;

/** Account-owned, paged curation archive. Source IDs are keys, never destination authority. */
final class CurationPortabilityService {
    private const MAX_ARCHIVE_BYTES=1073741824;
    private const MANIFEST_ALLOWANCE=4096;
    private const KINDS=['author','series','genre','redirect','hierarchy','book','list','entry','collection','note','preference','mapping','history'];
    private const TABLES=['author'=>'library_authors','series'=>'library_series','genre'=>'library_genres','hierarchy'=>'library_genres','book'=>'library_items','list'=>'library_lists','entry'=>'library_list_entries','collection'=>'library_saved_collections','history'=>'library_change_history','note'=>'library_book_notes'];
    public function __construct(private IDBConnection $db,private ItemService $items,private BookAccessService $access,private ChangeHistoryService $history,private AuthorDirectoryService $authors,private SeriesStorageService $series,private GenreService $genres,private PersonalListService $lists,private SavedCollectionService $collections,private ManualCoverValidator $covers,private AuthorPhotoService $photos,private PortablePreferences $preferences,private \OCP\Files\IRootFolder $root,private BookNotesService $notes,private \Psr\Log\LoggerInterface $logger) {}
    private function rows(string $sql,array $params=[]): array { $r=$this->db->executeQuery($sql,$params);try { return $r->fetchAll(); } finally { $r->closeCursor(); } }
    private function insert(string $table,array $values): int { $q=$this->db->getQueryBuilder();$q->insert($table);foreach($values as $key=>$value)$q->setValue($key,$q->createNamedParameter($value));$q->executeStatement();return (int)$this->db->lastInsertId($table); }
    private function recordLine(string $kind,string $key,string $payload): string { return '{"kind":'.json_encode($kind).',"key":'.json_encode($key).',"data":'.$payload."}\n"; }
    private function job(string $uid,string $id): array {
        if (!preg_match('/^[a-f0-9]{32}$/D',$id)) throw new \OutOfBoundsException();
        $job=$this->rows('SELECT * FROM *PREFIX*library_portable_jobs WHERE user_id=? AND id=? AND expires_at>?',[$uid,$id,time()])[0] ?? null;
        if (!$job) throw new \OutOfBoundsException();return $job;
    }
    public function create(string $uid,string $mode): array {
        if (!in_array($mode,['export','restore'],true)) throw new \InvalidArgumentException();
        if ($mode==='export') {
            // An incomplete relationship backfill would produce an archive with missing assignments.
            foreach (['author_sync_status','series_sync_status'] as $column) {
                if ($this->rows('SELECT id FROM *PREFIX*library_items WHERE user_id=? AND '.$column.' IN (1,3) LIMIT 1',[$uid])) throw new \DomainException('catalogue_indexing');
            }
        }
        $this->db->beginTransaction();
        try {
            $this->db->insertIfNotExist('*PREFIX*library_genre_tree_state',['user_id'=>$uid,'revision'=>0],['user_id']);
            $this->db->executeStatement('UPDATE *PREFIX*library_genre_tree_state SET revision=revision WHERE user_id=?',[$uid]);
            if ((int)$this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_portable_jobs WHERE user_id=?',[$uid])[0]['n']>=3) throw new \DomainException('archive_limit');
            $id=bin2hex(random_bytes(16));
            $q=$this->db->getQueryBuilder();$q->insert('library_portable_jobs');foreach(['id'=>$id,'user_id'=>$uid,'mode'=>$mode,'status'=>$mode==='export' ? 'exporting' : 'uploading','payload'=>'{}','created_at'=>time(),'expires_at'=>time()+604800,'work_cursor'=>0,'stage'=>0,'bytes'=>0] as $k=>$v)$q->setValue($k,$q->createNamedParameter($v));$q->executeStatement();$this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        return $this->show($uid,$id);
    }
    private function addRow(array $job,string $kind,string $key,array $payload,string $status): void {
        if (!in_array($kind,self::KINDS,true) || !preg_match('/^[1-9][0-9]{0,18}$/D',$key)) throw new \InvalidArgumentException('archive_record');
        $json=json_encode($payload,JSON_THROW_ON_ERROR|JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
        $bytes=strlen($this->recordLine($kind,$key,$json));
        if ($bytes>15000000) throw new \LengthException('archive_size_limit');
        $existing=$this->rows('SELECT payload FROM *PREFIX*library_portable_rows WHERE job_id=? AND kind=? AND source_key=?',[$job['id'],$kind,$key]);
        if ($existing) { if ($existing[0]['payload']!==$json) throw new \DomainException('archive_changed');return; }
        // An acknowledged record may be retried after a lost response even at quota.
        if ((int)$job['bytes']+$bytes>self::MAX_ARCHIVE_BYTES-self::MANIFEST_ALLOWANCE) throw new \LengthException('archive_size_limit');
        $this->insert('library_portable_rows',['user_id'=>$job['user_id'],'job_id'=>$job['id'],'kind'=>$kind,'source_key'=>$key,'payload'=>$json,'status'=>$status,'review'=>'{}','target_id'=>null]);
        $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET bytes=bytes+? WHERE id=?',[$bytes,$job['id']]);
    }
    public function upload(string $uid,string $id,array $records): array {
        if (!$records || !array_is_list($records) || count($records)>50) throw new \InvalidArgumentException();
        $this->db->beginTransaction();
        try {
            $this->lock($uid,$id);$job=$this->job($uid,$id);if ($job['status']!=='uploading') throw new \DomainException('invalid_transition');
            foreach($records as $record) {
                if (!is_array($record) || !is_string($record['kind'] ?? null) || !is_array($record['data'] ?? null)) throw new \InvalidArgumentException();
                $this->addRow($job,$record['kind'],(string)($record['key'] ?? ''),$record['data'],'staged');$job=$this->job($uid,$id);
            }
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        return $this->show($uid,$id);
    }
    private function lock(string $uid,string $id): void { $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET id=id WHERE user_id=? AND id=?',[$uid,$id]); }
    public function show(string $uid,string $id,int $page=1): array {
        $job=$this->job($uid,$id);$page=max(1,min(100000,$page));
        $counts=$this->rows('SELECT kind,status,COUNT(*) AS n FROM *PREFIX*library_portable_rows WHERE job_id=? AND user_id=? GROUP BY kind,status',[$id,$uid]);
        $rows=$this->rows('SELECT id,kind,source_key,status,review FROM *PREFIX*library_portable_rows WHERE job_id=? AND user_id=? ORDER BY id LIMIT 51 OFFSET '.(($page-1)*50),[$id,$uid]);$more=count($rows)>50;
        foreach($rows as &$row) { $row['review']=json_decode($row['review'],true,64,JSON_THROW_ON_ERROR);$row['id']=(int)$row['id']; }
        return ['id'=>$id,'mode'=>$job['mode'],'status'=>$job['status'],'error'=>json_decode($job['payload'],true)['error'] ?? null,'counts'=>$counts,'rows'=>array_slice($rows,0,50),'page'=>$page,'hasNext'=>$more,'bytes'=>(int)$job['bytes'],'expiresAt'=>(int)$job['expires_at']];
    }
    public function list(string $uid): array { return $this->rows("SELECT id,mode,status,created_at,expires_at FROM *PREFIX*library_portable_jobs WHERE user_id=? AND status<>'deleting' ORDER BY created_at DESC LIMIT 3",[$uid]); }
    public function control(string $uid,string $id,string $action,int $count=0,int $rowId=0): array {
        $this->db->beginTransaction();
        try {
            $this->lock($uid,$id);$job=$this->job($uid,$id);$status=$job['status'];
            if ($action==='finish' && $status==='uploading') {
                $actual=(int)$this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_portable_rows WHERE job_id=?',[$id])[0]['n'];
                if ($actual!==$count || $count<0) throw new \DomainException('archive_incomplete');$status=$count===0 ? 'complete' : 'validating';
            } elseif ($action==='approve' && $status==='review') $status='applying';
            elseif (in_array($action,['skip','include'],true) && $status==='review') $this->db->executeStatement('UPDATE *PREFIX*library_portable_rows SET status=? WHERE job_id=? AND id=? AND status=?',[$action==='skip' ? 'skipped' : 'ready',$id,$rowId,$action==='skip' ? 'ready' : 'skipped']);
            elseif ($action==='pause' && in_array($status,['exporting','validating','applying'],true)) { $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET payload=? WHERE id=?',[json_encode(['resume'=>$status]),$id]);$status='paused'; }
            elseif ($action==='resume' && $status==='paused') $status=json_decode($job['payload'],true)['resume'];
            elseif ($action==='delete' && !in_array($status,['exporting','validating','applying'],true)) {
                $this->db->executeStatement("UPDATE *PREFIX*library_portable_jobs SET status='deleting',expires_at=? WHERE id=?",[time()-1,$id]);$this->db->commit();return ['deleted'=>true];
            } else throw new \DomainException('invalid_transition');
            $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET status=? WHERE id=?',[$status,$id]);$this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        return $this->show($uid,$id);
    }
    public function download(string $uid,string $id): \Generator {
        $job=$this->job($uid,$id);if ($job['mode']!=='export' || $job['status']!=='complete') throw new \DomainException('archive_not_ready');
        $count=(int)$this->rows('SELECT COUNT(*) AS n FROM *PREFIX*library_portable_rows WHERE job_id=?',[$id])[0]['n'];
        $manifest=json_encode(['format'=>'library-curation','version'=>2,'createdAt'=>(int)$job['created_at'],'records'=>$count,'coverage'=>self::KINDS,'excluded'=>['source files','sharing grants','credentials','provider caches','active jobs','note file contents','original operation Undo journals','incoming review state']],JSON_THROW_ON_ERROR)."\n";
        if (strlen($manifest)>self::MANIFEST_ALLOWANCE) throw new \LengthException('archive_size_limit');
        yield $manifest;
        $cursor=0;do {
            $rows=$this->rows('SELECT id,kind,source_key,payload FROM *PREFIX*library_portable_rows WHERE job_id=? AND user_id=? AND id>? ORDER BY id LIMIT 10',[$id,$uid,$cursor]);
            foreach($rows as $row) { $cursor=(int)$row['id'];yield $this->recordLine($row['kind'],$row['source_key'],$row['payload']); }
        } while($rows);
    }
    private function exportOne(array $job): void {
        $uid=$job['user_id'];$kind=self::KINDS[(int)$job['stage']] ?? null;
        if ($kind===null) { $this->db->executeStatement("UPDATE *PREFIX*library_portable_jobs SET status='complete' WHERE id=?",[$job['id']]);return; }
        if ($kind==='preference') {
            $data=$this->preferences->entries($uid)[(int)$job['work_cursor']] ?? null;
        } elseif ($kind==='redirect') {
            $data=$this->rows('SELECT id AS source_id,merged_into,0 AS entity_kind FROM *PREFIX*library_authors WHERE user_id=? AND merged_into IS NOT NULL UNION ALL SELECT id AS source_id,merged_into,1 AS entity_kind FROM *PREFIX*library_series WHERE user_id=? AND merged_into IS NOT NULL ORDER BY entity_kind,source_id LIMIT 1 OFFSET '.(int)$job['work_cursor'],[$uid,$uid])[0] ?? null;
        } elseif ($kind==='mapping') {
            $data=$this->rows("SELECT 'genre' AS kind,candidate_key AS source_key,genre_id AS genre_id,NULL AS source_value,NULL AS target_value,NULL AS field_type FROM *PREFIX*library_genre_mappings WHERE user_id=? UNION ALL SELECT 'language',source_key,NULL,NULL,language_codes,NULL FROM *PREFIX*library_language_mappings WHERE user_id=? UNION ALL SELECT 'value',source_key,NULL,source_value,target_value,field_type FROM *PREFIX*library_value_mappings WHERE user_id=? ORDER BY kind,source_key,field_type LIMIT 1 OFFSET ".(int)$job['work_cursor'],[$uid,$uid,$uid])[0] ?? null;
        }
        if (in_array($kind,['preference','redirect','mapping'],true)) {
            if ($data===null) $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET stage=stage+1,work_cursor=0 WHERE id=?',[$job['id']]);
            else { $this->addRow($job,$kind,(string)((int)$job['work_cursor']+1),$data,'exported');$this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET work_cursor=work_cursor+1 WHERE id=?',[$job['id']]); }
            return;
        }
        $table=self::TABLES[$kind];$sql=$kind==='entry' ? 'SELECT t.* FROM *PREFIX*'.$table.' t INNER JOIN *PREFIX*library_lists l ON l.id=t.list_id WHERE l.user_id=? AND t.id>? ORDER BY t.id LIMIT 1' : 'SELECT * FROM *PREFIX*'.$table.' WHERE user_id=? AND id>? ORDER BY id LIMIT 1';
        $row=$this->rows($sql,[$uid,$job['work_cursor']])[0] ?? null;
        if (!$row) { $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET stage=stage+1,work_cursor=0 WHERE id=?',[$job['id']]);return; }
        $key=(string)$row['id'];$data=$row;unset($data['user_id'],$data['id']);
        if ($kind==='book') {
            $item=$this->items->findItem($uid,(int)$key);$data=array_intersect_key($item,array_flip(array_merge(ChangeHistoryService::FIELDS,['cachedPath','fileSize','coverOverrideData','coverOverrideMimeType','lastOpenedAt','fieldSources'])));$data['links']=$this->history->links($item);$data['suppressedGenres']=array_column($this->rows('SELECT genre_id FROM *PREFIX*library_item_genres WHERE user_id=? AND item_id=? AND active=0 ORDER BY genre_id',[$uid,$key]),'genre_id');
        } elseif ($kind==='author') {
            $data=array_intersect_key($data,array_flip(['display_name','sort_name','given_name','family_name','biography','merged_into']));
            if ($row['photo_key']) try { $data['portrait']=base64_encode($this->photos->get($uid,$row['photo_key'])); } catch (\OCP\Files\NotFoundException) { $data['portraitUnavailable']=true; }
        } elseif ($kind==='note') {
            $data=['item_id'=>$row['item_id'],'path'=>null];$home=$this->root->getUserFolder($uid);foreach($home->getById((int)$row['file_id']) as $file) if ($file instanceof \OCP\Files\File && $file->isReadable()) { $data['path']=$home->getRelativePath($file->getPath());$data['size']=$file->getSize();break; }
        } elseif ($kind==='hierarchy') $data=['parent_id'=>$row['parent_id']];
        elseif ($kind==='entry') { unset($data['file_id']);$book=$this->items->findItem($uid,(int)$row['item_id']);$data['unavailable_title']=$book['title'] ?? $row['unavailable_title'] ?? ''; }
        elseif ($kind==='collection') {
            $filters=json_decode($row['filters_json'],true,16,JSON_THROW_ON_ERROR);
            if (!empty($filters['shelf'])) { $roots=$this->rows("SELECT path FROM *PREFIX*library_roots WHERE user_id=? AND COALESCE(NULLIF(label,''),path)=? ORDER BY id LIMIT 2",[$uid,$filters['shelf']]);if (count($roots)!==1) throw new \DomainException('ambiguous_source_shelf');$data['rootPath']=$roots[0]['path']; }
        }
        elseif ($kind==='history') { $data=['item_id'=>$row['item_id'],'created_at'=>$row['created_at'],'kind'=>$row['kind'],'evidence'=>json_decode($row['payload'],true,64,JSON_THROW_ON_ERROR)]; }
        $this->addRow($job,$kind,$key,$data,'exported');$this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET work_cursor=? WHERE id=?',[$key,$job['id']]);
    }
    private function target(array $job,string $kind,mixed $key,bool $optional=false): ?int {
        if ($key===null || $key==='') return null;
        $row=$this->rows("SELECT target_id FROM *PREFIX*library_portable_rows WHERE job_id=? AND kind=? AND source_key=? AND status='applied'",[$job['id'],$kind,(string)$key])[0] ?? null;
        if (!$row || !$row['target_id']) { if ($optional) return null;throw new \DomainException('dependency_unavailable'); }return (int)$row['target_id'];
    }
    /** Review source identities by name before destination IDs exist. Keep the supplied order. */
    private function sourceNames(array $job,string $kind,mixed $keys): array {
        if (!is_array($keys) || !array_is_list($keys) || count($keys)>128) throw new \InvalidArgumentException('invalid_links');
        if (!$keys) return [];
        foreach ($keys as $key) if (!is_int($key) && !is_string($key)) throw new \InvalidArgumentException('invalid_links');
        $keys=array_map('strval',$keys);$placeholders=implode(',',array_fill(0,count($keys),'?'));
        $rows=$this->rows('SELECT source_key,payload FROM *PREFIX*library_portable_rows WHERE job_id=? AND user_id=? AND kind=? AND source_key IN ('.$placeholders.')',array_merge([$job['id'],$job['user_id'],$kind],$keys));$names=[];
        foreach ($rows as $row) $names[$row['source_key']]=$this->text(json_decode($row['payload'],true,64,JSON_THROW_ON_ERROR),'display_name',255);
        return array_map(fn($key)=>$names[$key] ?? throw new \DomainException('dependency_unavailable'),$keys);
    }
    private function review(array $job,array $row,array $data): array {
        $title=(string)($data['title'] ?? $data['display_name'] ?? $data['name'] ?? $data['unavailable_title'] ?? $row['kind']);
        $review=['label'=>mb_substr($title,0,512),'action'=>'create'];
        if ($row['kind']==='book') {
            $path=$data['cachedPath'] ?? null;$size=$data['fileSize'] ?? null;
            if (!is_string($path) || strlen($path)>4096 || !is_numeric($size) || (int)$size<0) throw new \InvalidArgumentException('file_evidence_required');
            $matches=$this->rows('SELECT i.id FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id=i.library_file_id AND f.user_id=i.user_id WHERE i.user_id=? AND f.cached_path=? AND f.size=? ORDER BY i.id LIMIT 2',[$job['user_id'],$path,(int)$size]);
            if (count($matches)!==1) throw new \DomainException(count($matches)>1 ? 'ambiguous_file' : 'file_not_found');
            $item=$this->access->require($job['user_id'],(int)$matches[0]['id']);
            $review+=['action'=>'restore','target'=>(int)$item['id'],'revision'=>$item['metadataRevision'],'fileId'=>$item['fileId'],'etag'=>$item['liveEtag'],'before'=>$this->history->snapshot($item),'beforeSources'=>$item['fieldSources'],'after'=>array_intersect_key($data,array_flip(ChangeHistoryService::FIELDS))];
            $review['action']='restore';
            $links=$data['links'] ?? null;if (!is_array($links)) throw new \InvalidArgumentException('invalid_links');
            $review['beforeDisplay']=['assignedAuthors'=>array_column($item['canonicalAuthors'] ?? [],'name'),'assignedSeries'=>array_column($item['canonicalSeries'] ?? [],'name'),'assignedGenres'=>array_column($item['canonicalGenres'] ?? [],'name'),'assignedPart'=>(string)($item['canonicalSeries'][0]['part'] ?? '')];
            $review['after']+=['assignedAuthors'=>$this->sourceNames($job,'author',$links['authors'] ?? []),'assignedSeries'=>$this->sourceNames($job,'series',isset($links['series']) ? [$links['series']] : []),'assignedGenres'=>$this->sourceNames($job,'genre',$links['genres'] ?? []),'assignedPart'=>$this->text($links,'part',64)];
            if (array_key_exists('coverOverrideData',$data)) { $review['beforeDisplay']['coverOverrideIncluded']=!empty($item['coverOverrideData']);$review['after']['coverOverrideIncluded']=!empty($data['coverOverrideData']); }
        } elseif ($row['kind']==='history') $review['action']='retain_evidence';
        else {
            // Every non-book record also has inspectable content before account mutation.
            $review['after']=array_diff_key($data,array_flip(['portrait','payload','evidence']));
            if (isset($data['portrait'])) $review['after']['portraitIncluded']=true;
        }
        // Review pages contain up to fifty records. Do not let a large or malformed
        // imported value expand one synchronous response to the full archive size.
        if (strlen(json_encode($review,JSON_THROW_ON_ERROR))>131072) throw new \DomainException('review_too_large');
        return $review;
    }
    private function apply(array $job,array $row,array $d,array &$review): ?int {
        $uid=$job['user_id'];$kind=$row['kind'];
        if ($kind==='author') {
            $author=$this->authors->create($uid,$this->text($d,'display_name',255));
            $this->authors->update($uid,(int)$author['id'],(int)$author['revision'],['display_name'=>$d['display_name'],'sort_name'=>$this->text($d,'sort_name',255),'given_name'=>$this->text($d,'given_name',255),'family_name'=>$this->text($d,'family_name',255),'biography'=>$this->text($d,'biography',10000)],isset($d['portrait']) ? $this->image($d['portrait']) : null);
            return (int)$author['id'];
        }
        if ($kind==='series') {
            $name=$this->text($d,'display_name',255);$existing=$this->rows('SELECT id,description FROM *PREFIX*library_series WHERE user_id=? AND display_name=? AND merged_into IS NULL LIMIT 2',[$uid,$name]);
            if ($existing) { if (count($existing)!==1 || (string)$existing[0]['description']!==$this->text($d,'description',10000)) throw new \DomainException('existing_series_differs');$review['created']=false;return (int)$existing[0]['id']; }
            $id=$this->series->create($uid,$name);$review['created']=true;$this->db->executeStatement('UPDATE *PREFIX*library_series SET description=? WHERE user_id=? AND id=?',[$this->text($d,'description',10000),$uid,$id]);return $id;
        }
        if ($kind==='genre') {
            $this->db->insertIfNotExist('*PREFIX*library_genre_tree_state',['user_id'=>$uid,'revision'=>0],['user_id']);
            $this->db->executeStatement('UPDATE *PREFIX*library_genre_tree_state SET revision=revision WHERE user_id=?',[$uid]);
            $max=(int)($this->rows('SELECT MAX(id) AS n FROM *PREFIX*library_genres WHERE user_id=?',[$uid])[0]['n'] ?? 0);
            $id=(int)$this->genres->create($uid,$this->text($d,'display_name',255))['id'];$review['created']=$id>$max;return $id;
        }
        if ($kind==='redirect') {
            $entity=(int)($d['entity_kind'] ?? -1);if (!in_array($entity,[0,1],true)) throw new \InvalidArgumentException();$entityKind=$entity===0 ? 'author' : 'series';
            $from=$this->target($job,$entityKind,$d['source_id'] ?? null);$to=$this->target($job,$entityKind,$d['merged_into'] ?? null);if (!$from || !$to || $from===$to) throw new \DomainException('invalid_redirect');
            $table=$entity===0 ? 'library_authors' : 'library_series';$seen=[$from];$next=$to;
            for ($depth=0;$next!==null;$depth++) { if ($depth>=32 || in_array($next,$seen,true)) throw new \DomainException('redirect_cycle');$seen[]=$next;$r=$this->rows('SELECT merged_into FROM *PREFIX*'.$table.' WHERE user_id=? AND id=?',[$uid,$next])[0] ?? null;if (!$r) throw new \DomainException('redirect_missing');$next=$r['merged_into']===null ? null : (int)$r['merged_into']; }
            if ($entity===1) { $source=$this->rows("SELECT review FROM *PREFIX*library_portable_rows WHERE job_id=? AND kind='series' AND source_key=?",[$job['id'],(string)$d['source_id']])[0];if (!(json_decode($source['review'],true)['created'] ?? false)) throw new \DomainException('existing_series_redirect'); }
            $this->db->executeStatement('UPDATE *PREFIX*'.$table.' SET merged_into=?,revision=revision+1 WHERE user_id=? AND id=?',[$to,$uid,$from]);return $from;
        }

        if ($kind==='hierarchy') {
            $id=$this->target($job,'genre',$row['source_key']);$parent=$this->target($job,'genre',$d['parent_id'] ?? null);$genre=$this->genres->genre($uid,$id);
            $source=$this->rows("SELECT review FROM *PREFIX*library_portable_rows WHERE job_id=? AND kind='genre' AND source_key=?",[$job['id'],$row['source_key']])[0];
            if (!(json_decode($source['review'],true)['created'] ?? false) && ($genre['parent_id']===null ? null : (int)$genre['parent_id'])!==$parent) throw new \DomainException('existing_hierarchy_differs');
            if ($genre['parent_id']!==null && (int)$genre['parent_id']!==$parent) throw new \DomainException('existing_hierarchy_differs');
            $this->genres->updateHierarchy($uid,$id,$genre['display_name'],$parent,(int)$genre['treeRevision']);return $id;
        }
        if ($kind==='book') {
            $id=(int)$review['target'];$this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?',[$uid,$id]);$item=$this->access->require($uid,$id);
            if ($item['metadataRevision']!==$review['revision'] || $item['fileId']!==$review['fileId'] || $item['liveEtag']!==$review['etag'] || $this->history->snapshot($item)!==$review['before']) throw new MetadataConflictException('book_changed');
            $links=$d['links'] ?? null;if (!is_array($links)) throw new \InvalidArgumentException();
            $authors=$this->refs($job,'author',$links['authors'] ?? []);$genres=$this->refs($job,'genre',$links['genres'] ?? []);
            $newLinks=['authors'=>$authors,'genres'=>$genres,'series'=>$this->target($job,'series',$links['series'] ?? null),'part'=>$this->text($links,'part',64)];
            foreach ($this->history->links($item) as $key=>$value) $newLinks['before'.ucfirst($key)]=$value;
            $metadata=array_diff_key(array_intersect_key($d,array_flip(ChangeHistoryService::FIELDS)),array_flip(['starred','workflowStatus','markedForDeletionAt']));
            $sources=null;
            if (array_key_exists('fieldSources',$d)) {
                if (!is_array($d['fieldSources']) || count($d['fieldSources'])>64) throw new \InvalidArgumentException('invalid_sources');
                $sources=[];
                foreach ($d['fieldSources'] as $field=>$source) {
                    if (!is_string($field) || !in_array($field,ChangeHistoryService::FIELDS,true)) continue;
                    $sources[$field]=$this->text(['source'=>$source],'source',128);
                }
            }
            $this->items->updateItem($uid,$id,$metadata,$item['metadataRevision'],$newLinks,$sources,'restore');
            if (isset($d['starred']) && is_bool($d['starred'])) $this->items->setStarred($uid,$id,$d['starred']);
            $this->items->setWorkflowStatus($uid,$id,$this->text($d,'workflowStatus',32));
            if (!empty($d['coverOverrideData'])) { $cover=$this->covers->validate($this->image($d['coverOverrideData']));$this->items->setManualCoverOverride($uid,$id,base64_encode($cover['content']),$cover['mimeType']); }
            elseif (array_key_exists('coverOverrideData',$d) && !empty($item['coverOverrideData'])) $this->items->clearManualCoverOverride($uid,$id);
            foreach ($this->refs($job,'genre',$d['suppressedGenres'] ?? []) as $genreId) { if (in_array($genreId,$genres,true)) throw new \InvalidArgumentException('contradictory_genre');$this->genres->assign($uid,$id,$genreId,false); }
            if (!empty($d['markedForDeletionAt'])) $this->items->setMarkedForDeletion($uid,$id,true);
            if (isset($d['lastOpenedAt']) && is_int($d['lastOpenedAt']) && $d['lastOpenedAt']>=0 && $d['lastOpenedAt']<=time()) $this->db->executeStatement('UPDATE *PREFIX*library_items SET last_opened_at=? WHERE user_id=? AND id=?',[$d['lastOpenedAt'] ?: null,$uid,$id]);
            return $id;
        }
        if ($kind==='list') return (int)$this->lists->create($uid,$this->text($d,'name',120),$this->text($d,'description',10000))['id'];
        if ($kind==='entry') {
            $list=$this->target($job,'list',$d['list_id'] ?? null);if (!$list) throw new \DomainException('list_missing');$this->lists->find($uid,$list);
            $itemId=$this->target($job,'book',$d['item_id'] ?? null,true);$item=$itemId ? $this->items->findItem($uid,$itemId) : null;
            $position=$d['position'] ?? 0;if (!is_numeric($position) || $position<0 || $position>2147483647) throw new \InvalidArgumentException();
            return $this->insert('library_list_entries',['list_id'=>$list,'item_id'=>$itemId,'file_id'=>$item['fileId'] ?? null,'created_at'=>time(),'position'=>(int)$position,'note'=>$this->text($d,'note',10000),'unavailable_title'=>$this->text($d,'unavailable_title',512)]);
        }
        if ($kind==='collection') {
            $filters=json_decode($this->text($d,'filters_json',16384),true,16,JSON_THROW_ON_ERROR);if (!is_array($filters)) throw new \InvalidArgumentException();
            if (!empty($filters['genreId'])) $filters['genreId']=(string)$this->target($job,'genre',$filters['genreId']);
            if (!empty($filters['shelf'])) {
                $path=$this->text($d,'rootPath',4096);$roots=$this->rows("SELECT COALESCE(NULLIF(label,''),path) AS shelf FROM *PREFIX*library_roots WHERE user_id=? AND path=? ORDER BY id LIMIT 2",[$uid,$path]);
                if ($path==='' || count($roots)!==1) throw new \DomainException('destination_shelf_required');$filters['shelf']=$roots[0]['shelf'];
            }
            $name=mb_substr($this->text($d,'name',120),0,70).' ('.substr($job['id'],0,8).'-'.$row['source_key'].')';
            return (int)$this->collections->saveCollection($uid,$name,$filters)['id'];
        }
        if ($kind==='preference') { $this->preferences->restore($uid,$d,$job['id'],fn($key)=>$this->target($job,'list',$key));return null; }
        if ($kind==='note') {
            $book=$this->target($job,'book',$d['item_id'] ?? null);$path=$this->text($d,'path',4096);if (!$book || $path==='' || in_array('..',explode('/',$path),true)) throw new \DomainException('note_unavailable');
            $file=$this->root->getUserFolder($uid)->get(ltrim($path,'/'));if (!$file instanceof \OCP\Files\File || !$file->isReadable() || $file->getSize()!==(int)($d['size'] ?? -1)) throw new \DomainException('note_changed');
            $this->notes->attach($uid,$book,$file->getId());return $file->getId();
        }
        if ($kind==='mapping') {
            $key=$this->text($d,'source_key',64);if (!preg_match('/^[a-f0-9]{64}$/D',$key)) throw new \InvalidArgumentException('mapping');
            $type=$d['kind'] ?? '';$values=['user_id'=>$uid];
            if ($type==='genre') { $table='library_genre_mappings';$values+=['candidate_key'=>$key,'genre_id'=>$this->target($job,'genre',$d['genre_id'] ?? null)];$keys=['user_id','candidate_key']; }
            elseif ($type==='language') { $table='library_language_mappings';$codes=$d['target_value']===null ? null : LanguageNormalizer::reviewedCodes($this->text($d,'target_value',64));$values+=['source_key'=>$key,'language_codes'=>$codes];$keys=['user_id','source_key']; }
            elseif ($type==='value') { $table='library_value_mappings';$field=$this->text($d,'field_type',16);if (!in_array($field,['publisher','subject'],true)) throw new \InvalidArgumentException('mapping');$values+=['source_key'=>$key,'field_type'=>$field,'source_value'=>$this->text($d,'source_value',255),'target_value'=>$this->text($d,'target_value',255),'created_at'=>time()];$keys=['user_id','field_type','source_key']; }
            else throw new \InvalidArgumentException('mapping');
            $where=implode(' AND ',array_map(fn($k)=>$k.'=?',$keys));$params=array_map(fn($k)=>$values[$k],$keys);$old=$this->rows('SELECT * FROM *PREFIX*'.$table.' WHERE '.$where,$params)[0] ?? null;
            if ($old) { foreach($values as $k=>$v) if ($k!=='created_at' && (string)$old[$k] !== (string)$v) throw new \DomainException('existing_mapping_differs'); }
            else $this->db->insertIfNotExist('*PREFIX*'.$table,$values,$keys);
            return null;
        }
        if ($kind==='history') {
            $id=$this->target($job,'book',$d['item_id'] ?? null);if (!$id) throw new \DomainException('book_missing');
            $evidence=$d['evidence'] ?? null;if (!is_array($evidence)) throw new \InvalidArgumentException();
            $payload=json_encode(['fields'=>[],'before'=>[],'after'=>[],'source'=>['originalKind'=>$this->text($d,'kind',32),'originalCreated'=>$d['created_at'] ?? null,'evidence'=>$evidence]],JSON_THROW_ON_ERROR);
            if (strlen($payload)>524288) throw new \LengthException('history_too_large');
            return $this->insert('library_change_history',['user_id'=>$uid,'item_id'=>$id,'kind'=>'imported_evidence','created_at'=>time(),'expires_at'=>time()+15552000,'undone'=>0,'payload'=>$payload]);
        }
        throw new \InvalidArgumentException();
    }
    private function refs(array $job,string $kind,mixed $ids): array { if (!is_array($ids) || !array_is_list($ids) || count($ids)>128) throw new \InvalidArgumentException();return array_map(fn($id)=>$this->target($job,$kind,$id),$ids); }
    private function text(array $data,string $key,int $max): string { $v=$data[$key] ?? '';if ($v===null) $v='';if (!is_string($v) || !mb_check_encoding($v,'UTF-8') || mb_strlen($v)>$max || str_contains($v,"\0")) throw new \InvalidArgumentException('invalid_field');return $v; }
    private function image(mixed $value): string { if (!is_string($value) || strlen($value)>14000000) throw new \InvalidArgumentException('image');$raw=base64_decode($value,true);if ($raw===false) throw new \InvalidArgumentException('image');return $this->covers->validate($raw)['content']; }
    public function expire(): void {
        foreach($this->rows('SELECT id,user_id FROM *PREFIX*library_portable_jobs WHERE expires_at<? ORDER BY expires_at LIMIT 3',[time()]) as $job) {
            $this->db->beginTransaction();try {
                $this->lock($job['user_id'],$job['id']);
                $rows=$this->rows('SELECT id FROM *PREFIX*library_portable_rows WHERE job_id=? ORDER BY id LIMIT 100',[$job['id']]);
                foreach($rows as $row) $this->db->executeStatement('DELETE FROM *PREFIX*library_portable_rows WHERE id=?',[$row['id']]);
                if (!$rows) $this->db->executeStatement('DELETE FROM *PREFIX*library_portable_jobs WHERE id=? AND expires_at<?',[$job['id'],time()]);
                $this->db->commit();
            } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        }
    }
    public function advance(): bool {
        $candidate=$this->rows("SELECT user_id,id FROM *PREFIX*library_portable_jobs WHERE status IN ('exporting','validating','applying') AND expires_at>? ORDER BY created_at LIMIT 1",[time()])[0] ?? null;if (!$candidate) return false;
        $uid=$candidate['user_id'];$id=$candidate['id'];$row=null;$job=null;$this->db->beginTransaction();
        try {
            $this->lock($uid,$id);$job=$this->job($uid,$id);
            if ($job['status']==='exporting') $this->exportOne($job);
            elseif (in_array($job['status'],['validating','applying'],true)) {
                $applying=$job['status']==='applying';$kind=self::KINDS[(int)$job['stage']] ?? null;
                if ($kind===null) $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET status=?,stage=0 WHERE id=?',[$applying ? 'complete' : 'review',$id]);
                else {
                    $row=$this->rows('SELECT * FROM *PREFIX*library_portable_rows WHERE job_id=? AND kind=? AND status=? ORDER BY id LIMIT 1',[$id,$kind,$applying ? 'ready' : 'staged'])[0] ?? null;
                    if (!$row) $this->db->executeStatement('UPDATE *PREFIX*library_portable_jobs SET stage=stage+1 WHERE id=?',[$id]);
                    else {
                        $data=json_decode($row['payload'],true,64,JSON_THROW_ON_ERROR);$review=json_decode($row['review'],true,64,JSON_THROW_ON_ERROR);
                        if ($applying) { $target=$this->apply($job,$row,$data,$review);$status='applied'; }
                        else { $review=$this->review($job,$row,$data);$target=$review['target'] ?? null;$status='ready'; }
                        $this->db->executeStatement('UPDATE *PREFIX*library_portable_rows SET status=?,target_id=?,review=? WHERE id=?',[$status,$target,json_encode($review,JSON_THROW_ON_ERROR),$row['id']]);
                    }
                }
            }
            $this->db->commit();
        } catch (\Throwable $e) {
            $this->db->rollBack();$this->db->beginTransaction();
            try {
                $this->lock($uid,$id);$current=$this->job($uid,$id);
                if ($job && $current['status']===$job['status']) {
                    $expected=$e instanceof \DomainException || $e instanceof MetadataConflictException || $e instanceof \InvalidArgumentException || $e instanceof \LengthException || $e instanceof \OutOfBoundsException || $e instanceof \JsonException || $e instanceof \OCP\Files\NotFoundException || $e instanceof \OCP\Files\NotPermittedException;
                    if ($row && $expected) { $review=json_decode($row['review'],true) ?: [];$review['error']=($e instanceof \DomainException || $e instanceof MetadataConflictException) ? $e->getMessage() : 'invalid_or_unavailable';$this->db->executeStatement("UPDATE *PREFIX*library_portable_rows SET status='conflict',review=? WHERE id=?",[json_encode($review,JSON_THROW_ON_ERROR),$row['id']]); }
                    else {
                        $code=$e instanceof \OCA\Library\Exception\AuthorMigrationPendingException ? 'catalogue_indexing' : ($e instanceof \LengthException && $e->getMessage()==='archive_size_limit' ? 'archive_size_limit' : 'operation_interrupted');
                        $this->db->executeStatement("UPDATE *PREFIX*library_portable_jobs SET status='paused',payload=? WHERE id=?",[json_encode(['resume'=>$current['status'],'error'=>$code]),$id]);
                        if (!$expected) $this->logger->error('Library archive worker paused after an unexpected failure',['exceptionClass'=>get_class($e)]);
                    }
                }
                $this->db->commit();
            } catch (\Throwable $recordError) { $this->db->rollBack();throw $recordError; }
        }
        return true;
    }
}
