<?php
declare(strict_types=1);

namespace OCA\Library\Service;

use OCA\Library\Exception\ListConflictException;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IURLGenerator;

/** Personal planning data, deliberately separate from publication/file metadata. */
final class PersonalListService {
    public const PAGE_SIZE = 25;
    public const BATCH_LIMIT = 500;

    public function __construct(
        private IDBConnection $db,
        private IRootFolder $rootFolder,
        private IURLGenerator $urlGenerator,
    ) {}

    public function lists(string $userId, ?int $itemId = null): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('l.*')->from('library_lists', 'l')
            ->where($qb->expr()->eq('l.user_id', $qb->createNamedParameter($userId)))
            ->orderBy('l.updated_at', 'DESC')->addOrderBy('l.id', 'DESC')->setMaxResults(200)->executeQuery();
        $rows = $result->fetchAll();
        $result->closeCursor();
        if ($rows === []) return [];
        $ids = array_map(static fn(array $row): int => (int)$row['id'], $rows);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('list_id')->selectAlias($qb->createFunction('COUNT(*)'), 'entry_count')
            ->from('library_list_entries')->where($qb->expr()->in('list_id', $qb->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)))
            ->groupBy('list_id')->executeQuery();
        $counts = [];
        foreach ($result->fetchAll() as $count) $counts[(int)$count['list_id']] = (int)$count['entry_count'];
        $result->closeCursor();
        $contains = [];
        if ($itemId !== null) {
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('list_id')->from('library_list_entries')
                ->where($qb->expr()->in('list_id', $qb->createNamedParameter($ids, IQueryBuilder::PARAM_INT_ARRAY)))
                ->andWhere($qb->expr()->eq('item_id', $qb->createNamedParameter($itemId)))->executeQuery();
            foreach ($result->fetchAll() as $entry) $contains[(int)$entry['list_id']] = true;
            $result->closeCursor();
        }
        return array_map(function (array $row) use ($counts, $contains): array {
            $list = $this->normalizeList($row);
            $list['count'] = $counts[$list['id']] ?? 0;
            $list['containsItem'] = isset($contains[$list['id']]);
            return $list;
        }, $rows);
    }

    public function create(string $userId, string $name, string $description): array {
        $name = $this->text($name, 120, true);
        $description = $this->text($description, 10000);
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('COUNT(*)'), 'list_count')->from('library_lists')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))->executeQuery();
        $count = (int)$result->fetchOne();
        $result->closeCursor();
        if ($count >= 200) {
            throw new \InvalidArgumentException('list_limit');
        }
        $qb = $this->db->getQueryBuilder();
        $qb->insert('library_lists')->values([
            'user_id' => $qb->createNamedParameter($userId),
            'name' => $qb->createNamedParameter($name),
            'description' => $qb->createNamedParameter($description),
            'revision' => $qb->createNamedParameter(1),
            'created_at' => $qb->createNamedParameter(time()),
            'updated_at' => $qb->createNamedParameter(time()),
        ])->executeStatement();
        return $this->find($userId, (int)$this->db->lastInsertId('library_lists'));
    }

    public function find(string $userId, int $listId): array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')->from('library_lists')
            ->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('id', $qb->createNamedParameter($listId)))->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) throw new \OutOfBoundsException('list_not_found');
        return $this->normalizeList($row);
    }

    public function page(string $userId, int $listId, int $page = 1): array {
        $list = $this->find($userId, $listId);
        $total = $this->entryCount($listId);
        $pages = max(1, (int)ceil($total / self::PAGE_SIZE));
        $page = max(1, min($pages, $page));
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')->from('library_list_entries')
            ->where($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))
            ->orderBy('position', 'ASC')->addOrderBy('id', 'ASC')
            ->setFirstResult(($page - 1) * self::PAGE_SIZE)->setMaxResults(self::PAGE_SIZE)->executeQuery();
        $rows = $result->fetchAll();
        $result->closeCursor();
        $entries = [];
        $books = $this->bookRows($userId, array_column($rows, 'item_id'));
        foreach ($rows as $index => $row) {
            $book = $this->availableBook($userId, (int)$row['item_id'], (int)$row['file_id'], $books);
            $entries[] = [
                'id' => (int)$row['id'], 'note' => (string)$row['note'],
                'position' => (int)$row['position'], 'number' => ($page - 1) * self::PAGE_SIZE + $index + 1,
                'book' => $book,
            ];
        }
        return ['list' => $list, 'entries' => $entries, 'total' => $total, 'page' => $page, 'pages' => $pages];
    }

    public function update(string $userId, int $listId, int $revision, string $name, string $description): void {
        $name = $this->text($name, 120, true);
        $description = $this->text($description, 10000);
        $this->mutate($userId, $listId, $revision, function () use ($listId, $name, $description): void {
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_lists')->set('name', $qb->createNamedParameter($name))
                ->set('description', $qb->createNamedParameter($description))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($listId)))->executeStatement();
        });
    }

    public function delete(string $userId, int $listId, int $revision): void {
        $this->mutate($userId, $listId, $revision, function () use ($listId): void {
            foreach (['library_list_entries' => 'list_id', 'library_lists' => 'id'] as $table => $key) {
                $qb = $this->db->getQueryBuilder();
                $qb->delete($table)->where($qb->expr()->eq($key, $qb->createNamedParameter($listId)))->executeStatement();
            }
        });
    }

    public function add(string $userId, int $listId, int $revision, mixed $selected): array {
        if (!is_array($selected) || count($selected) > self::BATCH_LIMIT) throw new \InvalidArgumentException('selection_limit');
        $ids = SelectedItemIds::parse($selected);
        return $this->mutate($userId, $listId, $revision, function () use ($userId, $listId, $ids): array {
            if ($this->entryCount($listId) + count($ids) > 10000) throw new \InvalidArgumentException('entry_limit');
            $qb = $this->db->getQueryBuilder();
            $result = $qb->selectAlias($qb->createFunction('MAX(position)'), 'last_position')->from('library_list_entries')
                ->where($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))->executeQuery();
            $position = (int)$result->fetchOne();
            $result->closeCursor();
            $outcome = ['added' => 0, 'alreadyPresent' => 0, 'skipped' => 0, 'skippedIds' => []];
            $books = $this->bookRows($userId, $ids);
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('item_id')->from('library_list_entries')
                ->where($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))->executeQuery();
            $existing = array_fill_keys(array_column($result->fetchAll(), 'item_id'), true);
            $result->closeCursor();
            foreach ($ids as $id) {
                $book = $this->availableBook($userId, $id, null, $books);
                if ($book === null) { $outcome['skipped']++; $outcome['skippedIds'][] = $id; continue; }
                if (isset($existing[$id])) { $outcome['alreadyPresent']++; continue; }
                $qb = $this->db->getQueryBuilder();
                $qb->insert('library_list_entries')->values([
                    'list_id' => $qb->createNamedParameter($listId), 'item_id' => $qb->createNamedParameter($id),
                    'file_id' => $qb->createNamedParameter($book['fileId']), 'position' => $qb->createNamedParameter(++$position),
                    'note' => $qb->createNamedParameter(''), 'created_at' => $qb->createNamedParameter(time()),
                ])->executeStatement();
                $outcome['added']++;
            }
            return $outcome;
        });
    }

    public function note(string $userId, int $listId, int $revision, int $entryId, string $note): void {
        $note = $this->text($note, 10000);
        $this->mutate($userId, $listId, $revision, function () use ($listId, $entryId, $note): void {
            $this->entry($listId, $entryId);
            $qb = $this->db->getQueryBuilder();
            $qb->update('library_list_entries')->set('note', $qb->createNamedParameter($note))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($entryId)))
                ->andWhere($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))->executeStatement();
        });
    }

    public function remove(string $userId, int $listId, int $revision, int $entryId): void {
        $this->mutate($userId, $listId, $revision, function () use ($listId, $entryId): void {
            $this->entry($listId, $entryId);
            $qb = $this->db->getQueryBuilder();
            $qb->delete('library_list_entries')->where($qb->expr()->eq('id', $qb->createNamedParameter($entryId)))
                ->andWhere($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))->executeStatement();
        });
    }

    /** Move one entry before another (null means end); also supports adjacent keyboard moves. */
    public function move(string $userId, int $listId, int $revision, int $entryId, ?int $beforeId, string $direction = ''): void {
        if (!in_array($direction, ['', 'up', 'down'], true)) throw new \InvalidArgumentException('direction');
        $this->mutate($userId, $listId, $revision, function () use ($listId, $entryId, $beforeId, $direction): void {
            $this->entry($listId, $entryId);
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('id', 'position')->from('library_list_entries')
                ->where($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))
                ->orderBy('position', 'ASC')->addOrderBy('id', 'ASC')->setMaxResults(10000)->executeQuery();
            $rows = $result->fetchAll();
            $ids = array_map('intval', array_column($rows, 'id'));
            $positions = array_map('intval', array_column($rows, 'position'));
            $originalPositions = array_combine($ids, $positions);
            $result->closeCursor();
            $old = array_search($entryId, $ids, true);
            if ($old === false) throw new \OutOfBoundsException('entry_not_found');
            if ($direction !== '') {
                $target = $direction === 'up' ? max(0, $old - 1) : min(count($ids) - 1, $old + 1);
            } else {
                if ($beforeId === $entryId) return;
                $target = $beforeId === null ? count($ids) : array_search($beforeId, $ids, true);
                if ($target === false) throw new \OutOfBoundsException('entry_not_found');
                if ($target > $old) $target--;
            }
            array_splice($ids, $old, 1);
            array_splice($ids, $target, 0, [$entryId]);
            // Reuse existing positions; adjacent moves only write the two changed entries.
            foreach ($ids as $position => $id) {
                if ($originalPositions[$id] === $positions[$position]) continue;
                $qb = $this->db->getQueryBuilder();
                $qb->update('library_list_entries')->set('position', $qb->createNamedParameter($positions[$position]))
                    ->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))
                    ->andWhere($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))->executeStatement();
            }
        });
    }

    /** Every write claims a revision inside its transaction, serializing all edits of a list. */
    private function mutate(string $userId, int $listId, int $revision, callable $operation): mixed {
        $this->find($userId, $listId);
        if ($revision < 1) throw new \InvalidArgumentException('revision');
        $this->db->beginTransaction();
        try {
            $qb = $this->db->getQueryBuilder();
            $changed = $qb->update('library_lists')->set('revision', $qb->createNamedParameter($revision + 1))
                ->set('updated_at', $qb->createNamedParameter(time()))
                ->where($qb->expr()->eq('id', $qb->createNamedParameter($listId)))
                ->andWhere($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
                ->andWhere($qb->expr()->eq('revision', $qb->createNamedParameter($revision)))->executeStatement();
            if ($changed !== 1) throw new ListConflictException('stale_list');
            $result = $operation();
            $this->db->commit();
            return $result;
        } catch (\Throwable $e) {
            $this->db->rollBack();
            throw $e;
        }
    }

    /** Fetch only this user's selected metadata in one bounded query. Live permissions are still checked below. */
    private function bookRows(string $userId, array $ids): array {
        if ($ids === []) return [];
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('i.id', 'i.title', 'i.creators', 'f.file_id', 'f.scan_status')
            ->from('library_items', 'i')->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->eq('f.user_id', $qb->createNamedParameter($userId)))
            ->andWhere($qb->expr()->in('i.id', $qb->createNamedParameter(array_map('intval', $ids), IQueryBuilder::PARAM_INT_ARRAY)))->executeQuery();
        $rows = [];
        foreach ($result->fetchAll() as $row) $rows[(int)$row['id']] = $row;
        $result->closeCursor();
        return $rows;
    }

    /** Resolve current permissions before exposing bibliographic data, including after a share revocation. */
    private function availableBook(string $userId, int $itemId, ?int $expectedFileId = null, ?array $books = null): ?array {
        $row = ($books ?? $this->bookRows($userId, [$itemId]))[$itemId] ?? false;
        if ($row === false || in_array($row['scan_status'], ['missing', 'sidecar'], true)
            || ($expectedFileId !== null && (int)$row['file_id'] !== $expectedFileId)) return null;
        try {
            $nodes = $this->rootFolder->getUserFolder($userId)->getById((int)$row['file_id']);
            $readable = false;
            foreach ($nodes as $node) {
                if ($node instanceof File && $node->isReadable()) { $readable = true; break; }
            }
            if (!$readable) return null;
        } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) {
            return null;
        }
        return [
            'id' => (int)$row['id'], 'fileId' => (int)$row['file_id'], 'title' => (string)$row['title'],
            'creators' => (string)($row['creators'] ?? ''),
            'openUrl' => $this->urlGenerator->linkToRoute('library.item.open', ['itemId' => $itemId]),
            'detailsUrl' => $this->urlGenerator->linkToRoute('library.item_page.show', ['itemId' => $itemId]),
            'coverUrl' => $this->urlGenerator->linkToRoute('library.cover.show', ['itemId' => $itemId]),
        ];
    }

    private function entryCount(int $listId): int {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->selectAlias($qb->createFunction('COUNT(*)'), 'entry_count')->from('library_list_entries')
            ->where($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))->executeQuery();
        $count = (int)$result->fetchOne();
        $result->closeCursor();
        return $count;
    }

    private function entryForItem(int $listId, int $itemId): ?array {
        return $this->entryWhere($listId, 'item_id', $itemId);
    }

    private function entry(int $listId, int $entryId): array {
        return $this->entryWhere($listId, 'id', $entryId) ?? throw new \OutOfBoundsException('entry_not_found');
    }

    private function entryWhere(int $listId, string $column, int $id): ?array {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('*')->from('library_list_entries')
            ->where($qb->expr()->eq('list_id', $qb->createNamedParameter($listId)))
            ->andWhere($qb->expr()->eq($column, $qb->createNamedParameter($id)))->setMaxResults(1)->executeQuery();
        $row = $result->fetch();
        $result->closeCursor();
        return $row === false ? null : $row;
    }

    private function normalizeList(array $row): array {
        return ['id' => (int)$row['id'], 'name' => (string)$row['name'], 'description' => (string)$row['description'],
            'revision' => (int)$row['revision'], 'updatedAt' => (int)$row['updated_at']];
    }

    private function text(string $value, int $limit, bool $required = false): string {
        $value = trim($value);
        if (($required && $value === '') || mb_strlen($value) > $limit || str_contains($value, "\0")) {
            throw new \InvalidArgumentException('invalid_text');
        }
        return $value;
    }
}
