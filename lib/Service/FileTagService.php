<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IDBConnection;
use OCP\IUserSession;
use OCP\SystemTag\ISystemTagManager;
use OCP\SystemTag\ISystemTagObjectMapper;
use OCP\SystemTag\TagAlreadyExistsException;
use OCP\SystemTag\TagCreationForbiddenException;
use OCP\SystemTag\TagNotFoundException;

final class FileTagService {
    public function __construct(
        private ISystemTagObjectMapper $tagObjectMapper,
        private ISystemTagManager $tagManager,
        private IUserSession $userSession,
        private IDBConnection $db,
    ) {
    }

    /**
     * @param array<int, array<string, mixed>> $items
     * @return array<int, array<int, array{id: string, name: string, color: string}>> Map of Nextcloud file ID to visible system tags.
     */
    public function tagsForItems(array $items): array {
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

        $tagIdsByObject = $this->tagObjectMapper->getTagIdsForObjects($fileIds, 'files');
        $allTagIds = [];
        foreach ($tagIdsByObject as $tagIds) {
            foreach ($tagIds as $tagId) {
                $allTagIds[] = (string)$tagId;
            }
        }

        $allTagIds = array_values(array_unique($allTagIds));
        if ($allTagIds === []) {
            return $this->emptyMap($fileIds);
        }

        $user = $this->userSession->getUser();
        try {
            $tagsById = $this->tagManager->getTagsByIds($allTagIds, $user);
        } catch (TagNotFoundException|\InvalidArgumentException) {
            return $this->emptyMap($fileIds);
        }

        $result = [];
        foreach ($fileIds as $fileId) {
            $result[(int)$fileId] = [];
            foreach ($tagIdsByObject[$fileId] ?? [] as $tagId) {
                $tagId = (string)$tagId;
                if (!isset($tagsById[$tagId])) {
                    continue;
                }

                $tag = $tagsById[$tagId];
                if (!$this->tagManager->canUserSeeTag($tag, $user)) {
                    continue;
                }

                $result[(int)$fileId][] = [
                    'id' => $tag->getId(),
                    'name' => $tag->getName(),
                    'color' => $tag->getColor() ?? '',
                ];
            }
        }

        return $result;
    }

    public function assignTagToItem(string $userId, int $itemId, string $tagName): void {
        $tagName = trim($tagName);
        if ($tagName === '') {
            return;
        }

        $fileId = $this->findFileIdForItem($userId, $itemId);
        if ($fileId === null) {
            return;
        }

        $user = $this->userSession->getUser();
        try {
            $tag = $this->tagManager->getTag($tagName, true, true);
        } catch (TagNotFoundException) {
            if (!$this->tagManager->canUserCreateTag($user)) {
                return;
            }

            try {
                $tag = $this->tagManager->createTag($tagName, true, true, $user);
            } catch (TagAlreadyExistsException) {
                $tag = $this->tagManager->getTag($tagName, true, true);
            } catch (TagCreationForbiddenException) {
                return;
            }
        }

        if (!$this->tagManager->canUserAssignTag($tag, $user)) {
            return;
        }

        $this->tagObjectMapper->assignTags((string)$fileId, 'files', $tag->getId());
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

    /**
     * @param array<int, string> $fileIds
     * @return array<int, array<int, array{id: string, name: string, color: string}>>
     */
    private function emptyMap(array $fileIds): array {
        $result = [];
        foreach ($fileIds as $fileId) {
            $result[(int)$fileId] = [];
        }
        return $result;
    }
}
