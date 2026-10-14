<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\DB\QueryBuilder\IQueryBuilder;

/** One bounded lookup per displayed page; source credits remain untouched. */
final class AuthorDisplayService {
    public function __construct(private IDBConnection $db) {}
    public function decorate(string $uid, array $items): array {
        if (!$items) return $items;
        $authors = [];
        foreach (array_chunk(array_map('intval', array_column($items, 'id')), 500) as $ids) {
            $q = $this->db->getQueryBuilder();
            $r = $q->select('l.item_id', 'a.id', 'a.display_name')->from('library_item_authors', 'l')
                ->innerJoin('l', 'library_authors', 'a', 'a.id=l.author_id AND a.user_id=l.user_id')
                ->innerJoin('l', 'library_items', 'i', 'i.id=l.item_id AND i.user_id=l.user_id')
                ->where($q->expr()->eq('l.user_id', $q->createNamedParameter($uid)))
                ->andWhere($q->expr()->in('l.item_id', $q->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)))
                ->andWhere($q->expr()->in('i.author_sync_status', $q->createNamedParameter([0, 2], IQueryBuilder::PARAM_INT_ARRAY)))
                ->orderBy('l.item_id')->addOrderBy('l.position')->executeQuery();
            foreach ($r->fetchAll() as $row) $authors[(int)$row['item_id']][(int)$row['id']] = ['id' => (int)$row['id'], 'name' => $row['display_name']];
            $r->closeCursor();
        }
        foreach ($items as &$item) {
            if (isset($authors[(int)$item['id']])) {
                $item['canonicalAuthors'] = array_values($authors[(int)$item['id']]);
                $item['displayCreators'] = implode('; ', array_column($item['canonicalAuthors'], 'name'));
            }
        } unset($item);
        return $items;
    }
}
