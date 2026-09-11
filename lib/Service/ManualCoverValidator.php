<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use Closure;
use Throwable;

/**
 * Validates manually uploaded raster covers through Nextcloud's image decoder.
 */
class ManualCoverValidator {
    public const MAX_BYTES = 10 * 1024 * 1024;
    public const MAX_WIDTH = 10000;
    public const MAX_HEIGHT = 10000;
    public const MAX_PIXELS = 40000000;

    private Closure $decoder;

    public function __construct(?callable $decoder = null) {
        $this->decoder = Closure::fromCallable($decoder ?? static function (string $content): ?array {
            try {
                $image = new \OCP\Image();
                if ($image->loadFromData($content) === false || !$image->valid()) {
                    return null;
                }
                return [
                    'mimeType' => $image->mimeType(),
                    'width' => $image->width(),
                    'height' => $image->height(),
                ];
            } catch (Throwable) {
                return null;
            }
        });
    }

    /**
     * @return array{content:string,mimeType:string,width:int,height:int}
     * @throws ManualCoverValidationException
     */
    public function validate(string $content): array {
        $length = strlen($content);
        if ($length === 0 || $length > self::MAX_BYTES) {
            throw new ManualCoverValidationException('Cover encoded byte limit exceeded');
        }

        $decoded = ($this->decoder)($content);
        if (!is_array($decoded)) {
            throw new ManualCoverValidationException('Cover cannot be decoded as an image');
        }

        $mimeType = is_string($decoded['mimeType'] ?? null) ? strtolower($decoded['mimeType']) : '';
        if (!in_array($mimeType, ['image/jpeg', 'image/png', 'image/webp'], true)) {
            throw new ManualCoverValidationException('Cover format is not allowed');
        }

        $width = (int)($decoded['width'] ?? 0);
        $height = (int)($decoded['height'] ?? 0);
        if ($width < 1 || $height < 1 || $width > self::MAX_WIDTH || $height > self::MAX_HEIGHT) {
            throw new ManualCoverValidationException('Cover dimensions exceed limits');
        }
        if ($width > intdiv(self::MAX_PIXELS, $height)) {
            throw new ManualCoverValidationException('Cover pixel count exceeds limit');
        }

        return [
            'content' => $content,
            'mimeType' => $mimeType,
            'width' => $width,
            'height' => $height,
        ];
    }
}
