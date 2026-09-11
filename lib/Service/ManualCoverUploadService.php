<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use Closure;

/**
 * Upload boundary for manual covers. It verifies PHP upload state and performs a
 * bounded MAX_BYTES + 1 read before delegating byte validation.
 */
class ManualCoverUploadService {
    private Closure $isUploadedFile;

    public function __construct(
        private ManualCoverValidator $validator,
        ?callable $isUploadedFile = null,
    ) {
        $this->isUploadedFile = Closure::fromCallable($isUploadedFile ?? 'is_uploaded_file');
    }

    /**
     * @param array<string,mixed> $upload
     * @return array{content:string,mimeType:string,width:int,height:int}
     * @throws ManualCoverValidationException
     */
    public function validateUpload(array $upload): array {
        if (($upload['error'] ?? null) !== UPLOAD_ERR_OK) {
            throw new ManualCoverValidationException('Cover upload did not complete');
        }
        $path = $upload['tmp_name'] ?? null;
        if (!is_string($path) || $path === '' || !($this->isUploadedFile)($path)) {
            throw new ManualCoverValidationException('Cover upload is not a valid PHP upload');
        }

        $handle = @fopen($path, 'rb');
        if (!is_resource($handle)) {
            throw new ManualCoverValidationException('Cover upload cannot be read');
        }
        try {
            $content = '';
            while (!feof($handle) && strlen($content) <= ManualCoverValidator::MAX_BYTES) {
                $remaining = ManualCoverValidator::MAX_BYTES + 1 - strlen($content);
                $chunk = fread($handle, min(8192, $remaining));
                if ($chunk === false) {
                    throw new ManualCoverValidationException('Cover upload cannot be read');
                }
                if ($chunk === '' && !feof($handle)) {
                    throw new ManualCoverValidationException('Cover upload read stalled');
                }
                $content .= $chunk;
            }
        } finally {
            fclose($handle);
        }

        if (strlen($content) > ManualCoverValidator::MAX_BYTES) {
            throw new ManualCoverValidationException('Cover encoded byte limit exceeded');
        }
        return $this->validator->validate($content);
    }
}
