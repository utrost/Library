<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Comments\ICommentsManager;
use OCP\IDBConnection;

final class FileCommentService {
    private const COMMENT_LIMIT_PER_FILE = 3;

    public function __construct(
        private ICommentsManager $commentsManager,
        private IDBConnection $db,
    ) {
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @return array<int, array{count: int, recent: array<int, array{id: string, actorType: string, actorId: string, message: string, createdAt: string}>}> Map of Nextcloud file ID to comment summary.
     */
    public function commentsForItems(array $items): array {
        $fileIds = [];
        foreach ($items as $item) {
            $fileId = (int)($item['fileId'] ?? 0);
            if ($fileId > 0) {
                $fileIds[] = (string)$fileId;
            }
        }

        $fileIds = array_values(array_unique($fileIds));
        if ($fileIds === []) {
            return [];
        }

        $counts = $this->commentsManager->getNumberOfCommentsForObjects('files', $fileIds, null, 'comment');
        $result = [];
        foreach ($fileIds as $fileId) {
            $recent = [];
            if ((int)($counts[$fileId] ?? 0) > 0) {
                foreach ($this->commentsManager->getForObject('files', $fileId, self::COMMENT_LIMIT_PER_FILE) as $comment) {
                    $recent[] = [
                        'id' => (string)$comment->getId(),
                        'actorType' => (string)$comment->getActorType(),
                        'actorId' => (string)$comment->getActorId(),
                        'message' => (string)$comment->getMessage(),
                        'createdAt' => $comment->getCreationDateTime()->format('Y-m-d H:i'),
                    ];
                }
            }

            $result[(int)$fileId] = [
                'count' => (int)($counts[$fileId] ?? 0),
                'recent' => $recent,
            ];
        }

        return $result;
    }

    public function addCommentToItem(string $userId, int $itemId, string $message): void {
        $message = trim($message);
        if ($message === '') {
            return;
        }

        $fileId = $this->findFileIdForItem($userId, $itemId);
        if ($fileId === null) {
            return;
        }

        $comment = $this->commentsManager->create('users', $userId, 'files', (string)$fileId);
        $comment->setMessage($message);
        $comment->setVerb('comment');
        $this->commentsManager->save($comment);
    }

    private function findFileIdForItem(string $userId, int $itemId): ?int {
        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('f.file_id')
            ->from('library_items', 'i')
            ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.id', $qb->createNamedParameter($itemId)))
            ->andWhere($qb->expr()->eq('i.user_id', $qb->createNamedParameter($userId)))
            ->executeQuery();

        $row = $result->fetch();
        $result->closeCursor();
        if ($row === false) {
            return null;
        }

        return (int)$row['file_id'];
    }
}
