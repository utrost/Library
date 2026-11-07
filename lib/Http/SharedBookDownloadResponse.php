<?php

declare(strict_types=1);

namespace OCA\Library\Http;

use OCA\Library\Service\SharedFileLease;
use OCP\AppFramework\Http\FileDisplayResponse;
use OCP\AppFramework\Http\IOutput;
use OCP\IRequest;

/** Stream an authorized source with bounded memory and explicit single-byte ranges. */
final class SharedBookDownloadResponse extends FileDisplayResponse {
    public function __construct(private SharedFileLease $lease, private IRequest $request) {
        parent::__construct($lease->file, 200, [
            'Cache-Control' => 'private, no-store',
            'Content-Type' => 'application/octet-stream',
            'X-Content-Type-Options' => 'nosniff',
            'Accept-Ranges' => 'bytes',
        ]);
        $extension = strtolower((string)pathinfo($lease->file->getName(), PATHINFO_EXTENSION));
        $extension = preg_match('/^[a-z0-9]{1,8}$/D', $extension) === 1 ? $extension : 'bin';
        $this->addHeader('Content-Disposition', 'attachment; filename="library-book.' . $extension . '"');
    }

    public function callback(IOutput $output) {
        try {
            if ($output->getHttpResponseCode() === 304) {
                return;
            }
            $range = $this->request->getHeader('Range');
            $ifRange = $this->request->getHeader('If-Range');
            $file = $this->lease->file;
            // If-Range accepts a strong ETag or an HTTP date, never a weak ETag.
            if ($ifRange !== '' && $ifRange !== '"' . $file->getEtag() . '"'
                && (str_starts_with($ifRange, 'W/') || strtotime($ifRange) !== $file->getMTime())) {
                $range = '';
            }
            if ($this->request->getMethod() === 'GET'
                && preg_match('/^bytes=(\d*)-(\d*)$/D', $range, $match) === 1
                && ($match[1] !== '' || $match[2] !== '')) {
                $size = (int)$file->getSize();
                $start = $match[1] === '' ? max(0, $size - (int)$match[2]) : (int)$match[1];
                $end = $match[1] === '' || $match[2] === '' ? $size - 1 : min($size - 1, (int)$match[2]);
                if ($start > $end || $start >= $size) {
                    $output->setHttpResponseCode(416);
                    $output->setHeader('Content-Range: bytes */' . $size);
                    $output->setHeader('Content-Length: 0');
                    return;
                }
                $stream = $file->fopen('rb');
                if ($stream === false) {
                    $output->setHttpResponseCode(404);
                    $output->setHeader('Content-Length: 0');
                    return;
                }
                try {
                    // Some remote storage streams cannot seek; fall back to a complete response.
                    if (fseek($stream, $start) !== 0) {
                        fclose($stream);
                        $stream = null;
                        parent::callback($output);
                        return;
                    }
                    $output->setHttpResponseCode(206);
                    $output->setHeader('Content-Range: bytes ' . $start . '-' . $end . '/' . $size);
                    $output->setHeader('Content-Length: ' . ($end - $start + 1));
                    $remaining = $end - $start + 1;
                    while ($remaining > 0 && !feof($stream) && !connection_aborted()) {
                        $chunk = fread($stream, min(1048576, $remaining));
                        if ($chunk === false || $chunk === '') break;
                        $output->setOutput($chunk);
                        $remaining -= strlen($chunk);
                    }
                } finally {
                    if (is_resource($stream)) fclose($stream);
                }
                return;
            }
            parent::callback($output);
        } finally {
            $this->lease->close();
        }
    }
}
