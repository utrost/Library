<?php
declare(strict_types=1);
namespace OCA\Library\Service;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/** Resolve curated genres for one visible page without scanning the catalogue. */
final class GenreDisplayService {
    public function __construct(private IDBConnection $db) {}
    public function decorate(string $uid, array $items): array {
        if ($items === []) return $items;
        $genres = [];
        foreach (array_chunk(array_map('intval', array_column($items, 'id')), 400) as $ids) {
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('l.item_id', 'g.id', 'g.display_name')->from('library_item_genres', 'l')
                ->innerJoin('l', 'library_genres', 'g', $qb->expr()->andX(
                    $qb->expr()->eq('g.id', 'l.genre_id'), $qb->expr()->eq('g.user_id', 'l.user_id')))
                ->where($qb->expr()->eq('l.user_id', $qb->createNamedParameter($uid)))
                ->andWhere($qb->expr()->eq('l.active', $qb->createNamedParameter(1)))
                ->andWhere($qb->expr()->in('l.item_id', $qb->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)))
                ->orderBy('g.display_name')->executeQuery();
            foreach ($result->fetchAll() as $row) $genres[(int)$row['item_id']][] = ['id' => (int)$row['id'], 'name' => $row['display_name']];
            $result->closeCursor();
        }
        foreach ($items as &$item) $item['canonicalGenres'] = $genres[(int)$item['id']] ?? [];
        unset($item);
        return $items;
    }
}
