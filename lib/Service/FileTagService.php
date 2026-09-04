<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCP\IUserSession;
use OCP\SystemTag\ISystemTagManager;
use OCP\SystemTag\ISystemTagObjectMapper;
use OCP\SystemTag\TagNotFoundException;

final class FileTagService {
    public function __construct(
        private ISystemTagObjectMapper $tagObjectMapper,
        private ISystemTagManager $tagManager,
        private IUserSession $userSession,
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
