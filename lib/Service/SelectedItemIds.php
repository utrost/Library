<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use OCA\Library\Exception\BatchLimitExceededException;

final class SelectedItemIds {
    public const LIMIT = 5000;

    /**
     * @return list<int>
     * @throws \InvalidArgumentException
     * @throws BatchLimitExceededException
     */
    public static function parse(mixed $value): array {
        if (!is_array($value) || $value === []) {
            throw new \InvalidArgumentException('A non-empty selected item ID list is required.');
        }
        if (count($value) > self::LIMIT) {
            throw new BatchLimitExceededException(self::LIMIT);
        }

        $ids = [];
        $seen = [];
        $maximum = (string)PHP_INT_MAX;
        foreach ($value as $candidate) {
            if (is_int($candidate)) {
                if ($candidate <= 0) throw new \InvalidArgumentException('Invalid selected item ID.');
                $id = $candidate;
            } elseif (is_string($candidate) && preg_match('/^[1-9][0-9]*$/D', $candidate) === 1) {
                if (strlen($candidate) > strlen($maximum)
                    || (strlen($candidate) === strlen($maximum) && strcmp($candidate, $maximum) > 0)) {
                    throw new \InvalidArgumentException('Invalid selected item ID.');
                }
                $id = (int)$candidate;
            } else {
                throw new \InvalidArgumentException('Invalid selected item ID.');
            }
            if (isset($seen[$id])) throw new \InvalidArgumentException('Duplicate selected item ID.');
            $seen[$id] = true;
            $ids[] = $id;
        }
        return $ids;
    }
}
