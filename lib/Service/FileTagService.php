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

    /**
     * @return array<int, int> Nextcloud file IDs that have an exact visible tag name.
     */
    public function fileIdsForExactVisibleTag(string $tagName): array {
        $tagName = trim($tagName);
        if ($tagName === '') {
            return [];
        }

        $user = $this->userSession->getUser();
        try {
            $tag = $this->tagManager->getTag($tagName, true, true);
        } catch (TagNotFoundException) {
            return [];
        }

        if (!$this->tagManager->canUserSeeTag($tag, $user)) {
            return [];
        }

        $qb = $this->db->getQueryBuilder();
        $result = $qb->select('objectid')
            ->from('systemtag_object_mapping')
            ->where($qb->expr()->eq('objecttype', $qb->createNamedParameter('files')))
            ->andWhere($qb->expr()->eq('systemtagid', $qb->createNamedParameter($tag->getId())))
            ->executeQuery();

        $fileIds = [];
        while ($row = $result->fetch()) {
            $fileId = (int)($row['objectid'] ?? 0);
            if ($fileId > 0) {
                $fileIds[$fileId] = $fileId;
            }
        }
        $result->closeCursor();

        return array_values($fileIds);
    }

    /**
     * @return array<int, string>
     */
    public function visibleAssignableTagNames(int $limit = 50): array {
        $user = $this->userSession->getUser();
        $tagNames = [];
        foreach ($this->tagManager->getAllTags(true, null) as $tag) {
            if (!$this->tagManager->canUserSeeTag($tag, $user) || !$this->tagManager->canUserAssignTag($tag, $user)) {
                continue;
            }
            $name = trim((string)$tag->getName());
            if ($name !== '') {
                $tagNames[$name] = $name;
            }
        }
        natcasesort($tagNames);
        return array_slice(array_values($tagNames), 0, max(1, $limit));
    }

    /**
     * @return array{status:string, tagName:string, tagId:string}
     */
    public function assignTagToItem(string $userId, int $itemId, string $tagName): array {
        $tagName = trim($tagName);
        if ($tagName === '') {
            return ['status' => 'empty', 'tagName' => '', 'tagId' => ''];
        }

        $fileId = $this->findFileIdForItem($userId, $itemId);
        if ($fileId === null) {
            return ['status' => 'item-not-found', 'tagName' => $tagName, 'tagId' => ''];
        }

        $user = $this->userSession->getUser();
        $created = false;
        try {
            $tag = $this->tagManager->getTag($tagName, true, true);
        } catch (TagNotFoundException) {
            if (!$this->tagManager->canUserCreateTag($user)) {
                return ['status' => 'not-assignable', 'tagName' => $tagName, 'tagId' => ''];
            }

            try {
                $tag = $this->tagManager->createTag($tagName, true, true, $user);
                $created = true;
            } catch (TagAlreadyExistsException) {
                $tag = $this->tagManager->getTag($tagName, true, true);
            } catch (TagCreationForbiddenException) {
                return ['status' => 'not-assignable', 'tagName' => $tagName, 'tagId' => ''];
            }
        }

        if (!$this->tagManager->canUserAssignTag($tag, $user)) {
            return ['status' => 'not-assignable', 'tagName' => $tagName, 'tagId' => (string)$tag->getId()];
        }

        if ($this->tagAlreadyAssigned($fileId, (string)$tag->getId())) {
            return ['status' => 'already-assigned', 'tagName' => $tagName, 'tagId' => (string)$tag->getId()];
        }

        $this->tagObjectMapper->assignTags((string)$fileId, 'files', $tag->getId());
        if ($created) {
            return ['status' => 'created', 'tagName' => $tagName, 'tagId' => (string)$tag->getId()];
        }
        return ['status' => 'added', 'tagName' => $tagName, 'tagId' => (string)$tag->getId()];
    }

    /**
     * @param array<int, int|string> $itemIds
     * @return array{requestedItems:int,addedItems:int,alreadyTaggedItems:int,skippedItems:int,tagName:string}
     */
    public function assignTagToItems(string $userId, array $itemIds, string $tagName): array {
        $ids = array_values(array_unique(array_filter(array_map('intval', $itemIds), static fn (int $id): bool => $id > 0)));
        $addedItems = 0;
        $alreadyTaggedItems = 0;
        $skippedItems = 0;
        foreach ($ids as $itemId) {
            $result = $this->assignTagToItem($userId, $itemId, $tagName);
            $status = (string)($result['status'] ?? '');
            if ($status === 'added' || $status === 'created') {
                $addedItems++;
            } elseif ($status === 'already-assigned') {
                $alreadyTaggedItems++;
            } else {
                $skippedItems++;
            }
        }

        return [
            'requestedItems' => count($ids),
            'addedItems' => $addedItems,
            'alreadyTaggedItems' => $alreadyTaggedItems,
            'skippedItems' => $skippedItems,
            'tagName' => trim($tagName),
        ];
    }

    private function tagAlreadyAssigned(int $fileId, string $tagId): bool {
        $tagIdsByObject = $this->tagObjectMapper->getTagIdsForObjects([(string)$fileId], 'files');
        return in_array($tagId, array_map('strval', $tagIdsByObject[(string)$fileId] ?? []), true);
    }

    public function removeTagFromItem(string $userId, int $itemId, string $tagId): void {
        $tagId = trim($tagId);
        if ($tagId === '') {
            return;
        }

        $fileId = $this->findFileIdForItem($userId, $itemId);
        if ($fileId === null) {
            return;
        }

        $user = $this->userSession->getUser();
        try {
            $tagsById = $this->tagManager->getTagsByIds([$tagId], $user);
        } catch (TagNotFoundException|\InvalidArgumentException) {
            return;
        }

        $tag = $tagsById[$tagId] ?? null;
        if ($tag === null || !$this->tagManager->canUserAssignTag($tag, $user)) {
            return;
        }

        $this->tagObjectMapper->unassignTags((string)$fileId, 'files', $tagId);
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
