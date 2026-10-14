<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/** One bounded account-scoped lookup for the visible page. Source fields are untouched. */
final class SeriesDisplayService {
    public function __construct(private IDBConnection $db) {}
    public function decorate(string $uid, array $items): array {
        if (!$items) return $items;
        $series = [];
        foreach (array_chunk(array_map('intval', array_column($items, 'id')), 500) as $ids) {
            $q = $this->db->getQueryBuilder();
            $r = $q->select('l.item_id', 'l.part_number', 's.id', 's.display_name')->from('library_item_series', 'l')
                ->innerJoin('l', 'library_series', 's', 's.id=l.series_id AND s.user_id=l.user_id')
                ->innerJoin('l', 'library_items', 'i', 'i.id=l.item_id AND i.user_id=l.user_id')
                ->where($q->expr()->eq('l.user_id', $q->createNamedParameter($uid)))
                ->andWhere($q->expr()->in('l.item_id', $q->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)))
                ->andWhere($q->expr()->eq('i.series_sync_status', $q->createNamedParameter(SeriesStorageService::SYNCED, IQueryBuilder::PARAM_INT)))
                ->orderBy('l.item_id')->addOrderBy('l.slot')->executeQuery();
            foreach ($r->fetchAll() as $row) $series[(int)$row['item_id']][] = ['id' => (int)$row['id'], 'name' => $row['display_name'], 'part' => $row['part_number']];
            $r->closeCursor();
        }
        foreach ($items as &$item) if (isset($series[(int)$item['id']])) $item['canonicalSeries'] = $series[(int)$item['id']];
        unset($item);
        return $items;
    }
}
