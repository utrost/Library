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

        $header = $this->inspectHeader($content);
        $this->assertDimensions($header['width'], $header['height']);

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
        $this->assertDimensions($width, $height);
        if ($mimeType !== $header['mimeType'] || $width !== $header['width'] || $height !== $header['height']) {
            throw new ManualCoverValidationException('Cover header does not match decoded image');
        }

        return [
            'content' => $content,
            'mimeType' => $mimeType,
            'width' => $width,
            'height' => $height,
        ];
    }

    /** @return array{mimeType:string,width:int,height:int} */
    private function inspectHeader(string $content): array {
        if (str_starts_with($content, "\x89PNG\r\n\x1a\n")) {
            if (strlen($content) < 24 || substr($content, 12, 4) !== 'IHDR' || $this->uint32be($content, 8) !== 13) {
                throw new ManualCoverValidationException('Invalid PNG header');
            }
            return ['mimeType' => 'image/png', 'width' => $this->uint32be($content, 16), 'height' => $this->uint32be($content, 20)];
        }
        if (str_starts_with($content, "\xFF\xD8")) {
            return $this->inspectJpeg($content);
        }
        if (strlen($content) >= 20 && substr($content, 0, 4) === 'RIFF' && substr($content, 8, 4) === 'WEBP') {
            return $this->inspectWebp($content);
        }
        throw new ManualCoverValidationException('Cover format is not allowed');
    }

    /** @return array{mimeType:string,width:int,height:int} */
    private function inspectJpeg(string $content): array {
        $length = strlen($content);
        $offset = 2;
        $sofMarkers = [0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF];
        while ($offset < $length) {
            if (ord($content[$offset]) !== 0xFF) {
                throw new ManualCoverValidationException('Invalid JPEG marker');
            }
            while ($offset < $length && ord($content[$offset]) === 0xFF) { $offset++; }
            if ($offset >= $length) { break; }
            $marker = ord($content[$offset++]);
            if ($marker === 0x00 || $marker === 0xD8 || $marker === 0xD9 || ($marker >= 0xD0 && $marker <= 0xD7)) {
                if ($marker === 0xD9) { break; }
                continue;
            }
            if ($offset + 2 > $length) { break; }
            $segmentLength = $this->uint16be($content, $offset);
            if ($segmentLength < 2 || $segmentLength > $length - $offset) {
                throw new ManualCoverValidationException('Invalid JPEG segment length');
            }
            if (in_array($marker, $sofMarkers, true)) {
                if ($segmentLength < 7) { throw new ManualCoverValidationException('Invalid JPEG frame header'); }
                return ['mimeType' => 'image/jpeg', 'width' => $this->uint16be($content, $offset + 5), 'height' => $this->uint16be($content, $offset + 3)];
            }
            if ($marker === 0xDA) { break; }
            $offset += $segmentLength;
        }
        throw new ManualCoverValidationException('JPEG dimensions are unavailable');
    }

    /** @return array{mimeType:string,width:int,height:int} */
    private function inspectWebp(string $content): array {
        $length = strlen($content);
        $riffSize = $this->uint32le($content, 4);
        if ($riffSize < 12 || $riffSize > $length - 8) {
            throw new ManualCoverValidationException('Invalid WebP container length');
        }
        $chunk = substr($content, 12, 4);
        $chunkLength = $this->uint32le($content, 16);
        if ($chunkLength > $length - 20 || $chunkLength > $riffSize - 12) {
            throw new ManualCoverValidationException('Truncated WebP header');
        }
        if ($chunk === 'VP8X' && $chunkLength >= 10) {
            return ['mimeType' => 'image/webp', 'width' => 1 + $this->uint24le($content, 24), 'height' => 1 + $this->uint24le($content, 27)];
        }
        if ($chunk === 'VP8 ' && $chunkLength >= 10 && substr($content, 23, 3) === "\x9D\x01\x2A") {
            return ['mimeType' => 'image/webp', 'width' => $this->uint16le($content, 26) & 0x3FFF, 'height' => $this->uint16le($content, 28) & 0x3FFF];
        }
        if ($chunk === 'VP8L' && $chunkLength >= 5 && ord($content[20]) === 0x2F) {
            $bits = $this->uint32le($content, 21);
            return ['mimeType' => 'image/webp', 'width' => 1 + ($bits & 0x3FFF), 'height' => 1 + (($bits >> 14) & 0x3FFF)];
        }
        throw new ManualCoverValidationException('WebP dimensions are unavailable');
    }

    private function assertDimensions(int $width, int $height): void {
        if ($width < 1 || $height < 1 || $width > self::MAX_WIDTH || $height > self::MAX_HEIGHT) {
            throw new ManualCoverValidationException('Cover dimensions exceed limits');
        }
        if ($width > intdiv(self::MAX_PIXELS, $height)) {
            throw new ManualCoverValidationException('Cover pixel count exceeds limit');
        }
    }

    private function uint16be(string $bytes, int $offset): int { return (ord($bytes[$offset]) << 8) | ord($bytes[$offset + 1]); }
    private function uint16le(string $bytes, int $offset): int { return ord($bytes[$offset]) | (ord($bytes[$offset + 1]) << 8); }
    private function uint24le(string $bytes, int $offset): int { return ord($bytes[$offset]) | (ord($bytes[$offset + 1]) << 8) | (ord($bytes[$offset + 2]) << 16); }
    private function uint32be(string $bytes, int $offset): int { return (int)unpack('N', substr($bytes, $offset, 4))[1]; }
    private function uint32le(string $bytes, int $offset): int { return (int)unpack('V', substr($bytes, $offset, 4))[1]; }
}
