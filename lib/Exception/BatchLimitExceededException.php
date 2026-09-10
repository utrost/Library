<?php

declare(strict_types=1);

namespace OCA\Library\Exception;

final class BatchLimitExceededException extends \DomainException {
    public function __construct(int $limit = 5000) {
        parent::__construct('This batch matches more than ' . number_format($limit) . ' items. Narrow the selection and try again.');
    }
}
