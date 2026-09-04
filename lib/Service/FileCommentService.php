<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\Comments\ICommentsManager;

final class FileCommentService {
    private const COMMENT_LIMIT_PER_FILE = 3;

    public function __construct(
        private ICommentsManager $commentsManager,
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
}
