<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IURLGenerator;

/** Relationships only: notes remain normal user-owned Files documents. */
final class BookNotesService {
    public function __construct(private IDBConnection $db,private IRootFolder $root,private BookAccessService $books,private IURLGenerator $urls) {}
    public function capabilities(\OCP\IUser $user,\OCP\App\IAppManager $apps): array { return ['text'=>$apps->isEnabledForUser('text',$user),'notes'=>$apps->isEnabledForUser('notes',$user)]; }
    private function file(string $uid,int $id): ?File {
        try {
            foreach ($this->root->getUserFolder($uid)->getById($id) as $file) {
                if ($file instanceof File && $file->isReadable() && in_array(strtolower(pathinfo($file->getName(),PATHINFO_EXTENSION)),['md','txt'],true)) return $file;
            }
        } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException) {}
        return null;
    }
    public function list(string $uid,int $itemId): array {
        $this->books->require($uid,$itemId);
        $r=$this->db->executeQuery('SELECT file_id FROM *PREFIX*library_book_notes WHERE user_id=? AND item_id=? ORDER BY id LIMIT 100',[$uid,$itemId]);$rows=$r->fetchAll();$r->closeCursor();
        $out=[];
        foreach ($rows as $row) {
            $file=$this->file($uid,(int)$row['file_id']);
            $out[]=['id'=>(int)$row['file_id'],'name'=>$file?->getName(),'url'=>$file ? $this->urls->getAbsoluteURL('/f/'.$file->getId()) : null,'available'=>$file!==null];
        }
        return $out;
    }
    public function browse(string $uid,string $path): array {
        if (strlen($path)>1024 || str_contains($path,"\0") || in_array('..',explode('/',str_replace('\\','/',$path)),true)) throw new \InvalidArgumentException('invalid_path');
        $home=$this->root->getUserFolder($uid);
        $folder=trim($path,'/')==='' ? $home : $home->get(trim($path,'/'));
        if (!$folder instanceof Folder || !$folder->isReadable()) throw new \OutOfBoundsException('not_found');
        $out=[];
        foreach ($folder->getDirectoryListing() as $node) {
            if (!$node->isReadable()) continue;
            if ($node instanceof Folder || ($node instanceof File && in_array(strtolower(pathinfo($node->getName(),PATHINFO_EXTENSION)),['md','txt'],true))) {
                $out[]=['id'=>$node->getId(),'name'=>$node->getName(),'folder'=>$node instanceof Folder,'path'=>trim($this->root->getUserFolder($uid)->getRelativePath($node->getPath()),'/')];
            }
            if (count($out)>=200) break;
        }
        usort($out,static fn($a,$b)=>($b['folder']<=>$a['folder']) ?: strnatcasecmp($a['name'],$b['name']));
        return ['entries'=>$out,'limited'=>count($out)===200];
    }
    public function attach(string $uid,int $itemId,int $fileId): array {
        $this->books->require($uid,$itemId);
        if (!$this->file($uid,$fileId)) throw new \OutOfBoundsException('not_found');
        $this->db->beginTransaction();
        try {
            $this->db->executeStatement('UPDATE *PREFIX*library_items SET id=id WHERE user_id=? AND id=?',[$uid,$itemId]);
            $r=$this->db->executeQuery('SELECT COUNT(*) FROM *PREFIX*library_book_notes WHERE user_id=? AND item_id=? AND file_id<>?',[$uid,$itemId,$fileId]);$count=(int)$r->fetchOne();$r->closeCursor();
            if ($count>=100) throw new \DomainException('note_limit');
            $this->db->insertIfNotExist('*PREFIX*library_book_notes',['user_id'=>$uid,'item_id'=>$itemId,'file_id'=>$fileId,'created_at'=>time()],['user_id','item_id','file_id']);
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack();throw $e; }
        return $this->list($uid,$itemId);
    }
    public function create(string $uid,int $itemId): array {
        $item=$this->books->require($uid,$itemId);
        if (count($this->list($uid,$itemId))>=100) throw new \DomainException('note_limit');
        $home=$this->root->getUserFolder($uid);
        $folder=$home->nodeExists('Library notes') ? $home->get('Library notes') : $home->newFolder('Library notes');
        if (!$folder instanceof Folder || !$folder->isCreatable()) throw new \OCP\Files\NotPermittedException();
        $title=trim(preg_replace('/[\r\n]+/u',' ',(string)$item['title']) ?? 'Book');
        $name=mb_substr(preg_replace('/[\\\\\/:*?"<>|\p{Cc}]/u','_',$title) ?? 'Book',0,100).' - '.bin2hex(random_bytes(6)).'.md';
        $url=$this->urls->linkToRouteAbsolute('library.page.index').'?details='.$itemId;
        // Imported titles are text, not Markdown/HTML supplied by the user for this note.
        // Escape syntax so an image/link-shaped title cannot add remote content to the document.
        $heading=strtr($title,array_combine(str_split('\\`*_{}[]()#+-.!<>|'),array_map(static fn($character)=>'\\'.$character,str_split('\\`*_{}[]()#+-.!<>|'))));
        $file=$folder->newFile($name,"# ".$heading."\n\n[Library](".$url.")\n\n");
        // If relationship storage fails, the document is retained in Files; never delete user content as cleanup.
        return $this->attach($uid,$itemId,$file->getId());
    }
    public function detach(string $uid,int $itemId,int $fileId): array {
        $this->books->require($uid,$itemId);
        $this->db->executeStatement('DELETE FROM *PREFIX*library_book_notes WHERE user_id=? AND item_id=? AND file_id=?',[$uid,$itemId,$fileId]);
        return $this->list($uid,$itemId);
    }
}
