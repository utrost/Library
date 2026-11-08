<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\Files\File;
use OCP\Files\IRootFolder;

/** Resolve owned catalogue records against the current user's live Files namespace. */
final class BookAccessService {
    public function __construct(private ItemService $items,private IRootFolder $root) {}
    public function find(string $uid,int $id): ?array {
        $item=$this->items->findItem($uid,$id);
        if (!$item || !empty($item['markedForDeletionAt']) || ($item['scanStatus'] ?? '')==='missing') return null;
        try {
            foreach ($this->root->getUserFolder($uid)->getById((int)$item['fileId']) as $file) {
                if ($file instanceof File && $file->isReadable()) return $item+['liveEtag'=>$file->getEtag()];
            }
        } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException) {}
        return null;
    }
    public function require(string $uid,int $id): array { return $this->find($uid,$id) ?? throw new \OutOfBoundsException('not_found'); }
}
