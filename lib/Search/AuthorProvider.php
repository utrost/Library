<?php
declare(strict_types=1);
namespace OCA\Library\Search;
use OCP\Search\{IProvider,ISearchQuery,SearchResult,SearchResultEntry};
use OCP\{IUser,IL10N,IURLGenerator,IDBConnection};
final class AuthorProvider implements IProvider {
    public function __construct(private IDBConnection $db,private IURLGenerator $urls,private IL10N $l10n) {}
    public function getId(): string { return 'library-authors'; }
    public function getName(): string { return $this->l10n->t('Library authors'); }
    public function getOrder(string $route,array $routeParameters): ?int { return 41; }
    public function search(IUser $user,ISearchQuery $query): SearchResult {
        $term=trim($query->getTerm());$cursor=max(0,(int)$query->getCursor());$limit=max(1,min(20,$query->getLimit()));
        if (mb_strlen($term)<3 || mb_strlen($term)>200) return SearchResult::complete($this->getName(),[]);
        $pattern=str_replace(['!','%','_'],['!!','!%','!_'],mb_strtolower($term)).'%';
        $r=$this->db->executeQuery("SELECT id,display_name FROM *PREFIX*library_authors WHERE user_id=? AND merged_into IS NULL AND id>? AND (LOWER(display_name) LIKE ? ESCAPE '!' OR LOWER(sort_name) LIKE ? ESCAPE '!') ORDER BY id LIMIT ".($limit+1),[$user->getUID(),$cursor,$pattern,$pattern]);$rows=$r->fetchAll();$r->closeCursor();$more=count($rows)>$limit;$entries=[];
        foreach (array_slice($rows,0,$limit) as $row) { $cursor=(int)$row['id'];$entries[]=new SearchResultEntry('',(string)$row['display_name'],'',$this->urls->linkToRouteAbsolute('library.page.index').'?authors=1&authorId='.$cursor,'icon-library'); }
        return $more ? SearchResult::paginated($this->getName(),$entries,$cursor) : SearchResult::complete($this->getName(),$entries);
    }
}
