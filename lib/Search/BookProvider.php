<?php
declare(strict_types=1);
namespace OCA\Library\Search;
use OCA\Library\Service\ItemService;
use OCA\Library\Service\BookAccessService;
use OCP\Search\{IProvider,ISearchQuery,SearchResult,SearchResultEntry};
use OCP\{IUser,IL10N,IURLGenerator};
final class BookProvider implements IProvider {
    public function __construct(private ItemService $items,private BookAccessService $access,private IURLGenerator $urls,private IL10N $l10n) {}
    public function getId(): string { return 'library-books'; }
    public function getName(): string { return $this->l10n->t('Library books'); }
    public function getOrder(string $route,array $routeParameters): ?int { return str_starts_with($route,'library.') ? 5 : 40; }
    public function search(IUser $user,ISearchQuery $query): SearchResult {
        $term=trim($query->getTerm());$page=max(1,min(100,(int)$query->getCursor()));$limit=max(1,min(20,$query->getLimit()));
        if (mb_strlen($term)<3 || mb_strlen($term)>200) return SearchResult::complete($this->getName(),[]);
        $rows=$this->items->queryCatalogue($user->getUID(),['q'=>$term,'sort'=>'title'],['page'=>$page,'limit'=>$limit,'deferTotal'=>true],false);
        $entries=[];
        foreach ($rows['items'] as $row) {
            if (!$this->access->find($user->getUID(),(int)$row['id'])) continue;
            $url=$this->urls->linkToRouteAbsolute('library.page.index').'?details='.(int)$row['id'];
            $entries[]=new SearchResultEntry('',(string)$row['title'],(string)($row['creators'] ?? ''),$url,'icon-library');
        }
        return $rows['hasNext'] && $page<100 ? SearchResult::paginated($this->getName(),$entries,$page+1) : SearchResult::complete($this->getName(),$entries);
    }
}
