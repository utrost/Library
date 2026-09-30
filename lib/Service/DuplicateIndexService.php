<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;

/** Persistent, account-scoped metadata keys. No file reads during construction. */
final class DuplicateIndexService {
    public int $statements=0;
    public function __construct(private IDBConnection $db) {}
    private function rows(string $sql,array $params=[]):array {$this->statements++;$r=$this->db->executeQuery($sql,$params);$rows=$r->fetchAll();$r->closeCursor();return $rows;}
    private function write(string $sql,array $params=[]):void {$this->statements++;$this->db->executeStatement($sql,$params);}
    private function marks(array $values):string{return implode(',',array_fill(0,count($values),'?'));}
    public function status(string $uid):array {
        $row=$this->rows('SELECT * FROM *PREFIX*library_dup_state WHERE user_id = ?',[$uid])[0]??null;
        return $row ? ['enabled'=>(bool)$row['enabled'],'status'=>$row['status'],'processed'=>(int)$row['processed'],'total'=>(int)$row['total'],'cursor'=>(int)$row['cursor_id'],'maxId'=>(int)$row['max_id']] : ['enabled'=>false,'status'=>'disabled','processed'=>0,'total'=>0,'cursor'=>0,'maxId'=>0];
    }
    private function lock(string $uid):void {
        if($this->db->getDatabaseProvider()==='sqlite')$this->write('UPDATE *PREFIX*library_dup_state SET cursor_id = cursor_id WHERE user_id = ?',[$uid]);
        else $this->rows('SELECT user_id FROM *PREFIX*library_dup_state WHERE user_id = ? FOR UPDATE',[$uid]);
    }
    public function configure(string $uid,bool $enabled):array {
        // Nextcloud's unique insert is safe when two settings requests arrive together.
        $this->db->insertIfNotExist('*PREFIX*library_dup_state',['user_id'=>$uid,'status'=>'disabled','enabled'=>0,'cursor_id'=>0,'max_id'=>0,'processed'=>0,'total'=>0],['user_id']);
        $this->db->beginTransaction();
        try {
            $this->lock($uid);$old=$this->status($uid);
            if($enabled&&!$old['enabled']) {
                $count=$this->rows('SELECT COUNT(*) AS n, MAX(id) AS maximum FROM *PREFIX*library_items WHERE user_id = ?',[$uid])[0];
                foreach(['library_dup_terms','library_dup_index'] as $table)$this->write('DELETE FROM *PREFIX*'.$table.' WHERE user_id = ?',[$uid]);
                $this->write('UPDATE *PREFIX*library_dup_state SET enabled = 1, status = ?, cursor_id = 0, processed = 0, max_id = ?, total = ? WHERE user_id = ?',['building',(int)($count['maximum']??0),(int)$count['n'],$uid]);
            } elseif(!$enabled)$this->write('UPDATE *PREFIX*library_dup_state SET enabled = 0, status = ? WHERE user_id = ?',['disabled',$uid]);
            $this->db->commit();
        }catch(\Throwable $e){$this->db->rollBack();throw $e;}
        return $this->status($uid);
    }
    /** Current catalogue projections in two batched queries, including valid identifiers. */
    public function books(string $uid,array $ids):array {
        if(!$ids)return [];$marks=$this->marks($ids);
        $rows=$this->rows('SELECT i.id,i.title,i.creators,i.authors_json,i.language,i.publication_date,i.publisher,f.file_id,f.cached_path,f.size,f.extension,f.root_id,r.path AS root_path FROM *PREFIX*library_items i INNER JOIN *PREFIX*library_files f ON f.id = i.library_file_id AND f.user_id = i.user_id INNER JOIN *PREFIX*library_roots r ON r.id = f.root_id AND r.user_id = i.user_id WHERE i.user_id = ? AND i.id IN ('.$marks.') AND f.scan_status <> ?',[$uid,...$ids,'missing']);
        $books=[];
        foreach($rows as $r){$id=(int)$r['id'];$books[$id]=['id'=>$id,'title'=>(string)$r['title'],'authors'=>AuthorNames::read($r['authors_json'],$r['creators']),'language'=>(string)$r['language'],'publicationDate'=>(string)$r['publication_date'],'publisher'=>(string)$r['publisher'],'isbn'=>[],'format'=>strtolower((string)$r['extension']),'size'=>(int)$r['size'],'fileId'=>(int)$r['file_id'],'path'=>$r['cached_path'],'rootId'=>(int)$r['root_id'],'rootPath'=>$r['root_path']];}
        $identifiers=$this->rows('SELECT item_id,normalized_value FROM *PREFIX*library_item_identifiers WHERE user_id = ? AND item_id IN ('.$marks.') AND scheme = ? AND valid = 1 ORDER BY item_id,normalized_value',[$uid,...$ids,'isbn']);
        foreach($identifiers as $r)if(isset($books[(int)$r['item_id']])&&!in_array($r['normalized_value'],$books[(int)$r['item_id']]['isbn'],true))$books[(int)$r['item_id']]['isbn'][]=$r['normalized_value'];
        return $books;
    }
    private function insertRows(string $table,array $columns,array $rows):void {
        foreach(array_chunk($rows,200) as $chunk){$params=[];foreach($chunk as $row)array_push($params,...$row);$this->write('INSERT INTO *PREFIX*'.$table.' ('.implode(',',$columns).') VALUES '.implode(',',array_fill(0,count($chunk),'('.$this->marks($columns).')')),$params);}
    }
    private function replace(string $uid,array $ids):void {
        if(!$ids)return;
        $books=$this->books($uid,$ids);
        foreach(['library_dup_terms','library_dup_index'] as $table)$this->write('DELETE FROM *PREFIX*'.$table.' WHERE user_id = ? AND item_id IN ('.$this->marks($ids).')',[$uid,...$ids]);
        $index=[];$terms=[];
        foreach($books as $book){$index[]=[$uid,$book['id'],json_encode($book,JSON_THROW_ON_ERROR)];foreach(DuplicateMatcher::keys($book,false) as $key)$terms[]=[$uid,$key,$book['id']];}
        $this->insertRows('library_dup_index',['user_id','item_id','payload'],$index);$this->insertRows('library_dup_terms',['user_id','match_key','item_id'],$terms);
    }
    /** Verify a legacy scanner projection without rewriting it; caller already holds the item lock. */
    public function matchesCurrent(string $uid,int $id): bool {
        if(!$this->status($uid)['enabled'])return true;
        $book=$this->books($uid,[$id])[$id]??null;if($book===null)return false;
        $stored=$this->rows('SELECT payload FROM *PREFIX*library_dup_index WHERE user_id=? AND item_id=?',[$uid,$id])[0]??null;
        if($stored===null)return false;
        try{if(json_decode($stored['payload'],true,512,JSON_THROW_ON_ERROR)!==$book)return false;}catch(\JsonException){return false;}
        $actual=array_column($this->rows('SELECT match_key FROM *PREFIX*library_dup_terms WHERE user_id=? AND item_id=?',[$uid,$id]),'match_key');
        $expected=DuplicateMatcher::keys($book,false);sort($actual,SORT_STRING);sort($expected,SORT_STRING);return $actual===$expected;
    }
    /** Hooks run inside existing metadata transactions where available. */
    public function changed(string $uid,int $id):void {
        if(!$this->status($uid)['enabled'])return;
        $this->db->beginTransaction();try{$this->lock($uid);if($this->status($uid)['enabled'])$this->replace($uid,[$id]);$this->db->commit();}catch(\Throwable $e){$this->db->rollBack();throw $e;}
    }
    public function remove(string $uid,int $id):void {
        $this->db->beginTransaction();try{$this->lock($uid);foreach(['library_dup_terms','library_dup_index'] as $table)$this->write('DELETE FROM *PREFIX*'.$table.' WHERE user_id = ? AND item_id = ?',[$uid,$id]);$this->db->commit();}catch(\Throwable $e){$this->db->rollBack();throw $e;}
    }
    public function prune(string $uid):void {
        $this->db->beginTransaction();try{$this->lock($uid);foreach(['library_dup_terms','library_dup_index'] as $table)$this->write('DELETE FROM *PREFIX*'.$table.' WHERE user_id = ? AND NOT EXISTS (SELECT 1 FROM *PREFIX*library_items i WHERE i.id = *PREFIX*'.$table.'.item_id AND i.user_id = *PREFIX*'.$table.'.user_id)',[$uid]);$this->db->commit();}catch(\Throwable $e){$this->db->rollBack();throw $e;}
    }
    public function fail(string $uid):void {$this->write('UPDATE *PREFIX*library_dup_state SET status = ? WHERE user_id = ? AND enabled = 1 AND status = ?',['failed',$uid,'building']);}
    public function advance(string $uid,int $limit=500):array {
        $this->db->beginTransaction();
        try{
            $this->lock($uid);$state=$this->status($uid);
            if($state['enabled']&&$state['status']==='building'){
                $limit=max(1,min(500,$limit));$rows=$this->rows('SELECT id FROM *PREFIX*library_items WHERE user_id = ? AND id > ? AND id <= ? ORDER BY id LIMIT '.$limit,[$uid,$state['cursor'],$state['maxId']]);$ids=array_map('intval',array_column($rows,'id'));
                $this->replace($uid,$ids);$cursor=$ids ? max($ids) : $state['cursor'];
                $this->write('UPDATE *PREFIX*library_dup_state SET cursor_id = ?, processed = ?, status = ? WHERE user_id = ?',[$cursor,$state['processed']+count($ids),count($ids)<$limit?'ready':'building',$uid]);
            }
            $this->db->commit();
        }catch(\Throwable $e){$this->db->rollBack();throw $e;}
        return $this->status($uid);
    }
    /** Bounded keyed lookup; broad terms are skipped explicitly, never expanded quadratically. */
    public function candidates(string $uid,array $ids):array {
        $source=$this->books($uid,$ids);$keySources=[];
        foreach($source as $book)foreach(DuplicateMatcher::keys($book,false) as $key)$keySources[$key][]=$book['id'];
        $keys=array_keys($keySources);$limited=[];$pairs=[];
        foreach(array_chunk($keys,400) as $chunk){
            $counts=$this->rows('SELECT match_key,COUNT(*) AS n FROM *PREFIX*library_dup_terms WHERE user_id = ? AND match_key IN ('.$this->marks($chunk).') GROUP BY match_key',[$uid,...$chunk]);$eligible=[];
            foreach($counts as $r){if((int)$r['n']>50){foreach($keySources[$r['match_key']] as $id)$limited[$id]=true;}else $eligible[]=$r['match_key'];}
            if(!$eligible)continue;
            $matches=$this->rows('SELECT match_key,item_id FROM *PREFIX*library_dup_terms WHERE user_id = ? AND match_key IN ('.$this->marks($eligible).') ORDER BY match_key,item_id LIMIT 8001',[$uid,...$eligible]);
            if(count($matches)>8000){foreach($chunk as $key)foreach($keySources[$key] as $id)$limited[$id]=true;$matches=array_slice($matches,0,8000);}
            foreach($matches as $r)foreach($keySources[$r['match_key']] as $id){$other=(int)$r['item_id'];if($other===$id)continue;if(count($pairs[$id]??[])>=100){$limited[$id]=true;continue;}$pairs[$id][$other]=true;}
        }
        $candidateIds=[];foreach($pairs as $values)foreach($values as $id=>$_)$candidateIds[$id]=true;
        $books=[];foreach(array_chunk(array_keys($candidateIds),400) as $chunk)$books+=$this->books($uid,$chunk);
        $result=[];
        foreach($source as $id=>$book){$found=[];foreach(array_keys($pairs[$id]??[]) as $other){if(!isset($books[$other]))continue;$evidence=DuplicateMatcher::evidence($book,$books[$other]);if($evidence['reasons'])$found[$other]=$evidence;}$result[$id]=['book'=>$book,'matches'=>$found,'limited'=>isset($limited[$id])];}
        return ['items'=>$result,'books'=>$books];
    }
}
