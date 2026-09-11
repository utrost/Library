<?php

declare(strict_types=1);

require_once __DIR__ . '/../../lib/Service/ManualCoverValidationException.php';
require_once __DIR__ . '/../../lib/Service/ManualCoverValidator.php';
require_once __DIR__ . '/../../lib/Service/ManualCoverUploadService.php';

use OCA\Library\Service\ManualCoverValidationException;
use OCA\Library\Service\ManualCoverValidator;
use OCA\Library\Service\ManualCoverUploadService;

function expect(bool $condition, string $message): void {
    if (!$condition) {
        throw new RuntimeException($message);
    }
}

function expectInvalid(ManualCoverValidator $validator, string $bytes, string $label): void {
    try {
        $validator->validate($bytes);
    } catch (ManualCoverValidationException) {
        return;
    }
    throw new RuntimeException($label . ' should be rejected');
}

function pngChunk(string $type, string $data): string {
    return pack('N', strlen($data)) . $type . $data . pack('N', (int)hexdec(hash('crc32b', $type . $data)));
}

function pngImage(int $width, int $height, int $targetBytes = 0): string {
    $signature = "\x89PNG\r\n\x1a\n";
    $ihdr = pngChunk('IHDR', pack('NNCCCCC', $width, $height, 8, 2, 0, 0, 0));
    $idat = pngChunk('IDAT', gzcompress("\x00" . str_repeat("\x00\x00\x00", min($width, 1))));
    $iend = pngChunk('IEND', '');
    $base = $signature . $ihdr . $idat . $iend;
    if ($targetBytes === 0) {
        return $base;
    }
    $paddingLength = $targetBytes - strlen($base) - 12;
    expect($paddingLength >= 0, 'PNG target must fit an ancillary chunk');
    return $signature . $ihdr . $idat . pngChunk('npAd', str_repeat('x', $paddingLength)) . $iend;
}

$jpeg = base64_decode('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPyF//9k=', true);
$webp = base64_decode('UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoBAAEAAUAmJaQAA3AA/v89WAAAAA==', true);
$animatedWebp = base64_decode('UklGRsAAAABXRUJQVlA4WAoAAAACAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GSAAAAAAAAAAAAAAAAAAAAGQAAAJWUDggMAAAANABAJ0BKgEAAQACADQloAJ0ugH4AAOwAP7wxAv/ILlhdcjX/yA/5Af8gP/48gAAAEFOTUZEAAAAAAAAAAAAAAAAAAAAZAAAAFZQOCAsAAAAlAEAnQEqAQABAAAANCWgAnS6AAOYAP75k2//kB//kB//kB//ID/iF3sgMAA=', true);
expect(is_string($jpeg) && is_string($webp) && is_string($animatedWebp), 'fixtures decode');

$decoder = static function (string $bytes) use ($jpeg, $webp, $animatedWebp): ?array {
    if ($bytes === $jpeg) {
        return ['mimeType' => 'image/jpeg', 'width' => 1, 'height' => 1];
    }
    if ($bytes === $webp || $bytes === $animatedWebp) {
        return ['mimeType' => 'image/webp', 'width' => 1, 'height' => 1];
    }
    if (!str_starts_with($bytes, "\x89PNG\r\n\x1a\n")) {
        return null;
    }
    $offset = 8;
    $idat = '';
    $hasIend = false;
    while ($offset + 12 <= strlen($bytes)) {
        $length = unpack('N', substr($bytes, $offset, 4))[1];
        $type = substr($bytes, $offset + 4, 4);
        if ($offset + 12 + $length > strlen($bytes)) {
            return null;
        }
        if ($type === 'IDAT') {
            $idat .= substr($bytes, $offset + 8, $length);
        }
        if ($type === 'IEND' && $length === 0) {
            $hasIend = true;
        }
        $offset += 12 + $length;
    }
    if ($offset !== strlen($bytes) || !$hasIend || $idat === '' || @gzuncompress($idat) === false) {
        return null;
    }
    $info = @getimagesizefromstring($bytes);
    return is_array($info) ? ['mimeType' => 'image/png', 'width' => (int)$info[0], 'height' => (int)$info[1]] : null;
};
$validator = new ManualCoverValidator($decoder);
$cases = [
    'JPEG' => [$jpeg, 'image/jpeg'],
    'PNG' => [pngImage(1, 1), 'image/png'],
    'WebP' => [$webp, 'image/webp'],
];
foreach ($cases as $label => [$bytes, $mime]) {
    $result = $validator->validate($bytes);
    expect($result['mimeType'] === $mime, $label . ' canonical MIME');
    expect($result['width'] === 1 && $result['height'] === 1, $label . ' dimensions');
    expect($result['content'] === $bytes, $label . ' content preserved');
}

// Client MIME never participates in validation; server-detected bytes are authoritative.
$result = $validator->validate($jpeg);
expect($result['mimeType'] === 'image/jpeg', 'canonical JPEG MIME must win over any upload claim');

expectInvalid($validator, '<html><body>not an image</body></html>', 'spoofed image MIME/HTML');
expectInvalid($validator, '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>', 'SVG');
expectInvalid($validator, substr($jpeg, 0, -2), 'truncated JPEG');
expectInvalid($validator, substr(pngImage(1, 1), 0, -8), 'truncated PNG');
expectInvalid($validator, substr($webp, 0, -2), 'truncated WebP');
expectInvalid(
    $validator,
    "\x89PNG\r\n\x1a\n"
        . pngChunk('IHDR', pack('NNCCCCC', 1, 1, 8, 2, 0, 0, 0))
        . pngChunk('IDAT', 'definitely-not-zlib')
        . pngChunk('IEND', ''),
    'PNG with undecodable pixel payload',
);

expect($validator->validate($animatedWebp)['mimeType'] === 'image/webp', 'valid animated WebP is accepted');

$exact = pngImage(1, 1, ManualCoverValidator::MAX_BYTES);
expect(strlen($exact) === ManualCoverValidator::MAX_BYTES, 'exact byte fixture');
expect($validator->validate($exact)['mimeType'] === 'image/png', 'exact byte boundary accepted');
expectInvalid($validator, $exact . 'x', 'oversized bytes');
expectInvalid($validator, pngImage(ManualCoverValidator::MAX_WIDTH + 1, 1), 'width limit');
expectInvalid($validator, pngImage(1, ManualCoverValidator::MAX_HEIGHT + 1), 'height limit');
expectInvalid($validator, pngImage(ManualCoverValidator::MAX_WIDTH, intdiv(ManualCoverValidator::MAX_PIXELS, ManualCoverValidator::MAX_WIDTH) + 1), 'pixel-count limit');

$decodeCalls = 0;
$headerValidator = new ManualCoverValidator(static function (string $bytes) use (&$decodeCalls): ?array {
    $decodeCalls++;
    return ['mimeType' => 'image/png', 'width' => 1, 'height' => 1];
});
expectInvalid($headerValidator, pngImage(ManualCoverValidator::MAX_WIDTH + 1, 1), 'oversized PNG header before decode');
expect($decodeCalls === 0, 'oversized PNG header must not invoke the full decoder');
$oversizedJpeg = "\xFF\xD8\xFF\xC0\x00\x11\x08" . pack('nn', 1, ManualCoverValidator::MAX_WIDTH + 1) . "\x03\x01\x11\x00\x02\x11\x00\x03\x11\x00\xFF\xD9";
expectInvalid($headerValidator, $oversizedJpeg, 'oversized JPEG SOF before decode');
expect($decodeCalls === 0, 'oversized JPEG header must not invoke the full decoder');
$oversizedWebp = 'RIFF' . pack('V', 22) . 'WEBPVP8X' . pack('V', 10) . "\x00\x00\x00\x00" . substr(pack('V', ManualCoverValidator::MAX_WIDTH), 0, 3) . "\x00\x00\x00";
expectInvalid($headerValidator, $oversizedWebp, 'oversized WebP VP8X before decode');
expect($decodeCalls === 0, 'oversized WebP header must not invoke the full decoder');
foreach (["\xFF\xD8\xFF", "\xFF\xD8\xFF\xE0\x00\x01", "\xFF\xD8\xFF\xE0\xFF\xFFx"] as $index => $badJpeg) {
    expectInvalid($headerValidator, $badJpeg, 'truncated or invalid JPEG marker ' . $index);
}
expect($decodeCalls === 0, 'malformed JPEG marker lengths must not invoke the full decoder');

$webpWarningCount = 0;
set_error_handler(static function (int $severity, string $message) use (&$webpWarningCount): bool {
    $webpWarningCount++;
    throw new ErrorException($message, 0, $severity);
});
try {
    foreach (range(16, 19) as $payloadLength) {
        $truncatedWebp = 'RIFF' . pack('V', 12) . 'WEBP' . str_repeat('x', $payloadLength - 12);
        expectInvalid($headerValidator, $truncatedWebp, $payloadLength . '-byte WebP header');
    }

    // The physical input extends beyond the RIFF payload, but the declared
    // container ends immediately after the first chunk header.
    $chunkBeyondRiffBoundary = 'RIFF' . pack('V', 12) . 'WEBPVP8X' . pack('V', 10)
        . "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
    expectInvalid($headerValidator, $chunkBeyondRiffBoundary, 'WebP chunk beyond declared RIFF boundary');
} finally {
    restore_error_handler();
}
expect($webpWarningCount === 0, 'truncated WebP headers must not emit PHP warnings');
expect($decodeCalls === 0, 'malformed WebP headers must not invoke the full decoder');

$uploadPath = tempnam(sys_get_temp_dir(), 'manual-cover-boundary-');
expect(is_string($uploadPath), 'upload boundary fixture path');
try {
    $uploadService = new ManualCoverUploadService($validator, static fn (string $path): bool => is_file($path));
    file_put_contents($uploadPath, $exact);
    expect($uploadService->validateUpload(['tmp_name' => $uploadPath, 'error' => UPLOAD_ERR_OK])['mimeType'] === 'image/png', 'bounded reader accepts exact limit');
    file_put_contents($uploadPath, $exact . 'x');
    try {
        $uploadService->validateUpload(['tmp_name' => $uploadPath, 'error' => UPLOAD_ERR_OK]);
        throw new RuntimeException('bounded reader should reject MAX + 1 bytes');
    } catch (ManualCoverValidationException) {
        // Expected: the upload boundary reads at most MAX + 1 and rejects it.
    }
} finally {
    @unlink($uploadPath);
}

echo "manual cover validator runtime tests passed\n";
