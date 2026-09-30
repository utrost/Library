<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\Files\IRootFolder;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\IURLGenerator;
final class DuplicateSuggestionService {
    public function __construct(private DuplicateIndexService $index,private IDBConnection $db,private IRootFolder $files,private IURLGenerator $urls) {}
    public function lookup(string $uid,mixed $ids):array {
        if(!is_array($ids)||!array_is_list($ids)||count($ids)>100||!$ids)throw new \InvalidArgumentException('invalid_items');
        foreach($ids as $id)if(!is_int($id)||$id<1)throw new \InvalidArgumentException('invalid_items');$ids=array_values(array_unique($ids));
        $state=$this->index->status($uid);if(!$state['enabled'])return ['enabled'=>false,'status'=>'disabled','items'=>[]];
        $data=$this->index->candidates($uid,$ids);$home=$this->files->getUserFolder($uid);$access=[];$roots=[];
        $readable=function(array $book)use($home,&$access,&$roots):bool {
            if(array_key_exists($book['id'],$access))return $access[$book['id']];
            try{
                if(!isset($roots[$book['rootId']])){$root=$home->get(ltrim($book['rootPath'],'/') ?: '/');$roots[$book['rootId']]=$root instanceof Folder&&$root->isReadable();}
                if(!$roots[$book['rootId']]||!str_starts_with('/'.ltrim($book['path'],'/'),rtrim('/'.ltrim($book['rootPath'],'/'),'/').'/'))return $access[$book['id']]=false;
                $node=$home->get(ltrim($book['path'],'/'));return $access[$book['id']]=$node instanceof File&&$node->isReadable()&&$node->getId()===$book['fileId'];
            }catch(\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException){return $access[$book['id']]=false;}
        };
        $marks=implode(',',array_fill(0,count($ids),'?'));$r=$this->db->executeQuery('SELECT * FROM *PREFIX*library_dup_hints WHERE user_id = ? AND (left_id IN ('.$marks.') OR right_id IN ('.$marks.'))',[$uid,...$ids,...$ids]);$hints=[];foreach($r->fetchAll() as $row)$hints[$row['left_id'].':'.$row['right_id']]=$row;$r->closeCursor();
        $result=[];
        foreach($ids as $id){$entry=$data['items'][$id]??null;if(!$entry||!$readable($entry['book'])){$result[(string)$id]=['status'=>'unavailable','count'=>0,'matches'=>[]];continue;}
            $matches=[];$reviewed=0;
            foreach($entry['matches'] as $other=>$evidence){$book=$data['books'][$other];$hint=$hints[min($id,$other).':'.max($id,$other)]??null;
                if($hint&&hash_equals($hint['signature'],DuplicateMatcher::hintSignature($entry['book'],$book))){$reviewed++;continue;}
                if(!$readable($book))continue;
                $matches[]=['id'=>$other,'title'=>$book['title'],'authors'=>$book['authors'],'format'=>$book['format'],...$evidence,'url'=>$this->urls->linkToRoute('library.page.index',['duplicates'=>1,'bookId'=>$id,'compareId'=>$other])];
                if(count($matches)>=20){$entry['limited']=true;break;}
            }
            $result[(string)$id]=['status'=>$state['status']==='ready'&&!$entry['limited']?'checked':'partial','count'=>count($matches),'reviewed'=>$reviewed,'matches'=>$matches];
        }
        return ['enabled'=>true,'status'=>$state['status'],'processed'=>$state['processed'],'total'=>$state['total'],'items'=>(object)$result];
    }
}
