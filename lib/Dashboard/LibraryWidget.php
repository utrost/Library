<?php
declare(strict_types=1);
namespace OCA\Library\Dashboard;
use OCP\Dashboard\IAPIWidget;
use OCP\Dashboard\Model\WidgetItem;
use OCP\{IL10N,IURLGenerator};
use OCA\Library\Service\{HomeDashboardService,BookAccessService,ItemService};
final class LibraryWidget implements IAPIWidget {
    public function __construct(private ItemService $items,private BookAccessService $access,private IURLGenerator $urls,private IL10N $l10n,private HomeDashboardService $home) {}
    public function getId(): string { return 'library'; }
    public function getTitle(): string { return $this->l10n->t('Library: up next'); }
    public function getOrder(): int { return 40; }
    public function getIconClass(): string { return 'icon-library'; }
    public function getUrl(): ?string { return $this->urls->linkToRouteAbsolute('library.page.index'); }
    public function load(): void { \OCP\Util::addScript('library','library-dashboard');\OCP\Util::addStyle('library','dashboard'); }
    public function getItems(string $userId,?string $since=null,int $limit=7): array {
        $limit=max(1,min(12,$limit));$out=[];
        $page=['items'=>$this->home->upNext($userId,max(1,(int)ceil($limit/2)))];
        $seen=array_column($page['items'],'id');
        foreach($this->items->homeRows($userId,$limit)['continueReading'] as $recent) if (!in_array($recent['id'],$seen,true) && count($page['items'])<$limit) { $page['items'][]=$recent;$seen[]=$recent['id']; }
        foreach ($page['items'] as $item) {
            if (!$this->access->find($userId,(int)$item['id'])) continue;
            $out[]=new WidgetItem($item['title'],(string)($item['creators'] ?? ''),$this->getUrl().'?details='.$item['id'],$this->urls->linkToRouteAbsolute('library.cover.show',['itemId'=>$item['id']]),(string)$item['id']);
        }
        return $out;
    }
}
