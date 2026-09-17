<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use Throwable;

/**
 * Read-only archive inspection with one shared resource and image policy.
 *
 * Limits intentionally apply before an image decoder is invoked: archives are at
 * most 256 MiB, contain at most 10,000 entries, emit at most 2 MiB of listing
 * metadata, and may return at most the manual-cover 10 MiB byte limit. Declared
 * uncompressed entries are capped at 100 MiB and 200 times their compressed
 * archive/source size.
 */
final class ArchiveCoverService {
    public const MAX_SOURCE_BYTES = 256 * 1024 * 1024;
    public const MAX_ENTRY_COUNT = 10_000;
    public const MAX_METADATA_BYTES = 2 * 1024 * 1024;
    public const MAX_EXTRACTED_BYTES = ManualCoverValidator::MAX_BYTES;
    public const MAX_UNCOMPRESSED_BYTES = 100 * 1024 * 1024;
    public const MAX_EXPANSION_RATIO = 200;
    public const WALL_TIMEOUT_SECONDS = 8.0;
    public const TERMINATE_GRACE_SECONDS = 0.25;
    private const MAX_STDERR_BYTES = 64 * 1024;

    private ManualCoverValidator $coverValidator;
    /** @var array<string,int|float> */
    private array $limits;

    /** @param array<string,int|float> $limits Test-only limit overrides are supported without changing production defaults. */
    public function __construct(?ManualCoverValidator $coverValidator = null, array $limits = []) {
        $this->coverValidator = $coverValidator ?? new ManualCoverValidator();
        $this->limits = array_merge([
            'wallTimeoutSeconds' => self::WALL_TIMEOUT_SECONDS,
            'terminateGraceSeconds' => self::TERMINATE_GRACE_SECONDS,
            'maxSourceBytes' => self::MAX_SOURCE_BYTES,
            'maxEntries' => self::MAX_ENTRY_COUNT,
            'maxMetadataBytes' => self::MAX_METADATA_BYTES,
            'maxExtractedBytes' => self::MAX_EXTRACTED_BYTES,
            'maxUncompressedBytes' => self::MAX_UNCOMPRESSED_BYTES,
            'maxExpansionRatio' => self::MAX_EXPANSION_RATIO,
        ], $limits);
    }

    /** @return array{status:string,reason:string,content:string|null,mimeType:string|null,entryName:string|null} */
    public function firstImageCover(string $archivePath, string $actualContainerType): array {
        if (!$this->sourceWithinBudget($archivePath)) {
            return $this->blocked('blocked-resource-limit', 'Archive source byte limit exceeded.');
        }
        if ($actualContainerType === 'application/x-7z-compressed') {
            return $this->firstExternalImageCover($archivePath, ['7z', '7za', '7zr', 'bsdtar'], 'sevenzip-first-image-fallback', 'Library read-only 7z cover fallback found the first image; files are left as-is.');
        }
        if ($actualContainerType === 'application/x-rar-compressed') {
            return $this->firstExternalImageCover($archivePath, ['7z', '7za', 'unrar', 'bsdtar'], 'rar-first-image-fallback', 'Library read-only RAR cover fallback found the first image; files are left as-is.');
        }
        return $this->blocked('unsupported-container', 'Read-only archive cover extraction only handles 7z/RAR containers after the ZIP fallback.');
    }

    /** @return array<string,mixed> */
    public function environmentCapabilities(): array {
        return [
            'phpZipArchive' => class_exists(\ZipArchive::class),
            'sevenZipCommand' => $this->firstAvailableCommand(['7z', '7za', '7zr']),
            'rarCommand' => $this->firstAvailableCommand(['7z', '7za', 'unrar']),
            'bsdtarCommand' => $this->firstAvailableCommand(['bsdtar']),
            'policy' => 'inspect-only; files are left as-is',
        ];
    }

    public function commandAvailable(string $command): bool {
        return $this->firstAvailableCommand([$command]) !== null;
    }

    /** Copy a Nextcloud source stream without ever creating an oversized temporary archive. */
    public function copyArchiveSource(mixed $source, string $destination): bool {
        if (!is_resource($source)) {
            @unlink($destination);
            return false;
        }
        $target = @fopen($destination, 'wb');
        if (!is_resource($target)) {
            @unlink($destination);
            return false;
        }
        $written = 0;
        $ok = true;
        try {
            while (!feof($source)) {
                $remaining = (int)$this->limits['maxSourceBytes'] - $written;
                $chunk = fread($source, min(65536, max(1, $remaining + 1)));
                if ($chunk === false) { $ok = false; break; }
                if ($chunk === '') { if (feof($source)) { break; } continue; }
                $written += strlen($chunk);
                if ($written > (int)$this->limits['maxSourceBytes'] || fwrite($target, $chunk) !== strlen($chunk)) {
                    $ok = false;
                    break;
                }
            }
        } catch (Throwable) {
            $ok = false;
        } finally {
            fclose($target);
        }
        if (!$ok) { @unlink($destination); }
        return $ok;
    }

    public function isSafeEntryName(string $name): bool {
        if ($name === '' || strlen($name) > 4096 || str_starts_with($name, '-') || str_starts_with($name, '/') || str_starts_with($name, '\\')) {
            return false;
        }
        // Extractors differ in how they interpret these names even after an option
        // delimiter: 7z supports @listfiles, and glob/colon forms can be expanded or
        // treated as drive/stream syntax. Archive member names never need them here.
        if (preg_match('//u', $name) !== 1
            || preg_match('/[\p{Cc}\p{Cf}]/u', $name) === 1
            || preg_match('/[*?\[\]]/u', $name) === 1
            || str_contains($name, ':')
            || str_contains($name, '\\')) {
            return false;
        }
        $candidate = str_ends_with($name, '/') ? substr($name, 0, -1) : $name;
        if ($candidate === '') { return false; }
        foreach (explode('/', $candidate) as $segment) {
            if ($segment === '' || $segment === '.' || $segment === '..' || str_starts_with($segment, '@') || str_starts_with($segment, '-')) { return false; }
        }
        return true;
    }

    public function entryWithinBudget(int $uncompressedBytes, int $compressedBytes, int $sourceBytes): bool {
        if ($uncompressedBytes < 0 || $uncompressedBytes > (int)$this->limits['maxUncompressedBytes']) { return false; }
        $basis = $compressedBytes > 0 ? $compressedBytes : max(1, $sourceBytes);
        return $this->withinExpansionRatio($uncompressedBytes, $basis);
    }

    /** Return the new aggregate, or null if addition/limits/ratio would overflow or be exceeded. */
    public function addUncompressedToAggregate(int $totalBytes, int $additionalBytes, int $sourceBytes): ?int {
        $maximum = (int)$this->limits['maxUncompressedBytes'];
        if ($totalBytes < 0 || $additionalBytes < 0 || $totalBytes > $maximum || $additionalBytes > $maximum - $totalBytes) {
            return null;
        }
        $newTotal = $totalBytes + $additionalBytes;
        return $this->withinExpansionRatio($newTotal, max(1, $sourceBytes)) ? $newTotal : null;
    }

    private function withinExpansionRatio(int $bytes, int $basis): bool {
        $ratio = (int)$this->limits['maxExpansionRatio'];
        if ($bytes < 0 || $basis < 1 || $ratio < 1) { return false; }
        // bytes <= basis * ratio, expressed without an overflowing multiplication.
        return $bytes === 0 || intdiv($bytes - 1, $ratio) < $basis;
    }

    /** @return array{content:string,mimeType:string,width:int,height:int}|null */
    public function validateExtractedCover(string $content): ?array {
        if (strlen($content) > (int)$this->limits['maxExtractedBytes']) { return null; }
        try { return $this->coverValidator->validate($content); } catch (ManualCoverValidationException) { return null; }
    }

    /** Read a ZIP member through a bounded stream rather than ZipArchive::getFromName(). */
    public function readZipEntryBounded(\ZipArchive $zip, string $name, int $limit): ?string {
        if (!$this->isSafeEntryName($name)) { return null; }
        $stream = $zip->getStream($name);
        if (!is_resource($stream)) { return null; }
        $content = '';
        try {
            while (!feof($stream) && strlen($content) <= $limit) {
                $chunk = fread($stream, min(65536, $limit + 1 - strlen($content)));
                if ($chunk === false) { return null; }
                if ($chunk === '' && !feof($stream)) { continue; }
                $content .= $chunk;
            }
        } finally { fclose($stream); }
        return strlen($content) <= $limit ? $content : null;
    }

    /** @param array<int,string> $candidateCommands */
    private function firstExternalImageCover(string $archivePath, array $candidateCommands, string $successStatus, string $successReason): array {
        $command = $this->firstAvailableCommand($candidateCommands);
        if ($command === null) {
            return $this->blocked('blocked-missing-archive-extractor', 'No read-only archive extractor command is available for this container; install 7z/7za/7zr, unrar, or bsdtar to let Library inspect it without converting files.');
        }
        $listing = $this->imageEntries($command, $archivePath);
        if ($listing['status'] !== 'ok') { return $this->blocked($listing['status'], $listing['reason']); }
        $entries = $listing['entries'];
        if ($entries === []) { return $this->blocked('blocked-no-image-entry', 'Archive listing succeeded, but no JPEG/PNG/WEBP image entry was found.'); }
        natcasesort($entries);
        $entryName = (string)reset($entries);
        $extracted = $this->extractEntry($command, $archivePath, $entryName);
        if ($extracted['status'] !== 'ok') { return $this->blocked($extracted['status'], $extracted['reason'], $entryName); }
        $validated = $this->validateExtractedCover($extracted['content']);
        if ($validated === null) { return $this->blocked('blocked-invalid-cover', 'Extracted archive entry did not pass the manual cover image policy.', $entryName); }
        return ['status' => $successStatus, 'reason' => $successReason, 'content' => $validated['content'], 'mimeType' => $validated['mimeType'], 'entryName' => $entryName];
    }

    private function sourceWithinBudget(string $archivePath): bool {
        $size = @filesize($archivePath);
        return is_int($size) && $size >= 0 && $size <= (int)$this->limits['maxSourceBytes'];
    }

    /** @param array<int,string> $commands */
    private function firstAvailableCommand(array $commands): ?string {
        $paths = explode(PATH_SEPARATOR, (string)getenv('PATH'));
        foreach ($commands as $command) {
            if ($command === '' || basename($command) !== $command) { continue; }
            foreach ($paths as $path) {
                if ($path === '') { continue; }
                $candidate = rtrim($path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $command;
                $absolute = realpath($candidate);
                if ($absolute !== false && str_starts_with($absolute, DIRECTORY_SEPARATOR) && is_file($absolute) && is_executable($absolute)) { return $absolute; }
            }
        }
        return null;
    }

    /** @return array{status:string,reason:string,entries:array<int,string>} */
    private function imageEntries(string $command, string $archivePath): array {
        $kind = basename($command);
        if ($kind === 'bsdtar') {
            $result = $this->runCommand([$command, '-tf', $archivePath, '--'], (int)$this->limits['maxMetadataBytes']);
        } elseif ($kind === 'unrar') {
            $result = $this->runCommand([$command, 'lb', $archivePath], (int)$this->limits['maxMetadataBytes']);
        } else {
            $result = $this->runCommand([$command, 'l', '-slt', '--', $archivePath], (int)$this->limits['maxMetadataBytes']);
        }
        if ($result['timedOut']) { return ['status' => 'blocked-extractor-timeout', 'reason' => 'Archive extractor listing exceeded its wall-clock timeout.', 'entries' => []]; }
        if ($result['limitExceeded']) { return ['status' => 'blocked-resource-limit', 'reason' => 'Archive listing metadata byte limit exceeded.', 'entries' => []]; }
        if ($result['exitCode'] !== 0) { return ['status' => 'blocked-no-image-entry', 'reason' => 'Archive listing failed.', 'entries' => []]; }

        $records = [];
        if ($kind === '7z' || $kind === '7za' || $kind === '7zr') {
            $current = null;
            foreach (preg_split('/\R/', $result['stdout']) ?: [] as $line) {
                if (str_starts_with($line, 'Path = ')) {
                    if ($current !== null) { $records[] = $current; }
                    $current = ['name' => substr($line, 7), 'size' => null];
                } elseif ($current !== null && preg_match('/^Size = ([0-9]+)$/', $line, $match) === 1) {
                    $current['size'] = $match[1];
                }
            }
            if ($current !== null) { $records[] = $current; }
        } else {
            foreach (preg_split('/\R/', $result['stdout']) ?: [] as $name) { if ($name !== '') { $records[] = ['name' => $name, 'size' => null]; } }
        }
        if (count($records) > (int)$this->limits['maxEntries']) { return ['status' => 'blocked-resource-limit', 'reason' => 'Archive entry count limit exceeded.', 'entries' => []]; }
        $sourceSize = max(1, (int)filesize($archivePath));
        $entries = [];
        $totalUncompressed = 0;
        foreach ($records as $record) {
            $name = (string)$record['name'];
            if ($name === $archivePath) { continue; }
            if (!$this->isSafeEntryName($name)) { return ['status' => 'blocked-unsafe-entry', 'reason' => 'Archive contains an unsafe entry name.', 'entries' => []]; }
            if (str_ends_with($name, '/')) { continue; }
            if ($kind === '7z' || $kind === '7za' || $kind === '7zr') {
                $size = $this->parseDeclaredSize($record['size']);
                if ($size === null) { return ['status' => 'blocked-resource-limit', 'reason' => 'Archive listing omitted or overflowed declared size metadata.', 'entries' => []]; }
                $totalUncompressed = $this->addUncompressedToAggregate($totalUncompressed, $size, $sourceSize);
                if ($totalUncompressed === null) { return ['status' => 'blocked-resource-limit', 'reason' => 'Archive aggregate uncompressed expansion limit exceeded.', 'entries' => []]; }
            }
            if ($this->coverMimeType($name) !== null) { $entries[] = $name; }
        }
        return ['status' => 'ok', 'reason' => '', 'entries' => $entries];
    }

    private function parseDeclaredSize(mixed $value): ?int {
        if (!is_string($value) || preg_match('/^[0-9]+$/D', $value) !== 1) { return null; }
        $normalized = ltrim($value, '0');
        if ($normalized === '') { return 0; }
        $maximum = (string)PHP_INT_MAX;
        if (strlen($normalized) > strlen($maximum)
            || (strlen($normalized) === strlen($maximum) && strcmp($normalized, $maximum) > 0)) {
            return null;
        }
        return (int)$normalized;
    }

    /** @return array{status:string,reason:string,content:string} */
    private function extractEntry(string $command, string $archivePath, string $entryName): array {
        if (!$this->isSafeEntryName($entryName)) { return ['status' => 'blocked-unsafe-entry', 'reason' => 'Archive contains an unsafe entry name.', 'content' => '']; }
        $kind = basename($command);
        if ($kind === 'bsdtar') { $args = [$command, '-xOf', $archivePath, '--', $entryName]; }
        elseif ($kind === 'unrar') { $args = [$command, 'p', '-inul', $archivePath, $entryName]; }
        else { $args = [$command, 'x', '-so', '--', $archivePath, $entryName]; }
        // Bounding the actual stdout by source expansion also covers extractors
        // (notably unrar's simple name listing) that do not report entry sizes.
        $sourceBytes = max(1, (int)filesize($archivePath));
        $extractionLimit = min(
            (int)$this->limits['maxExtractedBytes'],
            (int)$this->limits['maxUncompressedBytes'],
            $sourceBytes * (int)$this->limits['maxExpansionRatio'],
        );
        $result = $this->runCommand($args, $extractionLimit);
        if ($result['timedOut']) { return ['status' => 'blocked-extractor-timeout', 'reason' => 'Archive entry extraction exceeded its wall-clock timeout.', 'content' => '']; }
        if ($result['limitExceeded']) { return ['status' => 'blocked-resource-limit', 'reason' => 'Extracted cover byte limit exceeded.', 'content' => '']; }
        if ($result['exitCode'] !== 0 || $result['stdout'] === '') { return ['status' => 'blocked-entry-extract-failed', 'reason' => 'Archive listing found an image entry, but read-only extraction to stdout failed.', 'content' => '']; }
        return ['status' => 'ok', 'reason' => '', 'content' => $result['stdout']];
    }

    /** @param array<int,string> $command @return array{exitCode:int,stdout:string,stderr:string,timedOut:bool,limitExceeded:bool} */
    private function runCommand(array $command, int $stdoutLimit): array {
        $empty = ['exitCode' => 127, 'stdout' => '', 'stderr' => '', 'timedOut' => false, 'limitExceeded' => false];
        $process = null;
        $pipes = [];
        $processGroup = null;
        try {
            $setsid = $this->setsidCommand();
            if ($setsid === null) {
                $empty['stderr'] = 'Archive extractor process isolation is unavailable.';
                return $empty;
            }
            $spawnCommand = [$setsid, '--', ...$command];
            $process = proc_open($spawnCommand, [0 => ['pipe', 'r'], 1 => ['pipe', 'w'], 2 => ['pipe', 'w']], $pipes, null, null, ['bypass_shell' => true]);
            if (!is_resource($process)) { return $empty; }
            $initialStatus = proc_get_status($process);
            $processGroup = (int)($initialStatus['pid'] ?? 0);
            if ($processGroup < 2 || !$this->waitForOwnProcessGroup($processGroup, $process)) {
                $this->terminateAndReapDirectProcess($process, $pipes);
                $process = null;
                $empty['stderr'] = 'Archive extractor process isolation could not be established.';
                return $empty;
            }
            fclose($pipes[0]);
            stream_set_blocking($pipes[1], false);
            stream_set_blocking($pipes[2], false);
            $stdout = ''; $stderr = ''; $timedOut = false; $limitExceeded = false; $knownExit = null;
            $deadline = hrtime(true) + (int)((float)$this->limits['wallTimeoutSeconds'] * 1_000_000_000);
            while (true) {
                $status = proc_get_status($process);
                if (!$status['running']) { $knownExit = (int)$status['exitcode']; }
                $read = [];
                foreach ([1, 2] as $index) { if (isset($pipes[$index]) && is_resource($pipes[$index]) && !feof($pipes[$index])) { $read[] = $pipes[$index]; } }
                if ($read !== []) { $write = null; $except = null; @stream_select($read, $write, $except, 0, 50_000); }
                foreach ($read as $stream) {
                    $chunk = (string)fread($stream, 65536);
                    if ($stream === $pipes[1]) {
                        $stdout .= $chunk;
                        if (strlen($stdout) > $stdoutLimit) { $limitExceeded = true; }
                    } else {
                        // Keep draining to avoid pipe deadlock, but retain only a bounded diagnostic prefix.
                        if (strlen($stderr) < self::MAX_STDERR_BYTES) { $stderr .= substr($chunk, 0, self::MAX_STDERR_BYTES - strlen($stderr)); }
                    }
                }
                if ($limitExceeded) { break; }
                if (hrtime(true) >= $deadline) { $timedOut = true; break; }
                if (!$status['running'] && $read === []) { break; }
            }
            if ($timedOut || $limitExceeded) { $this->terminateAndReap($process, $pipes, $processGroup); $process = null; }
            else {
                foreach ([1, 2] as $index) {
                    if (isset($pipes[$index]) && is_resource($pipes[$index])) {
                        $tail = (string)stream_get_contents($pipes[$index]);
                        if ($index === 1) {
                            $stdout .= $tail;
                            if (strlen($stdout) > $stdoutLimit) { $limitExceeded = true; }
                        } else {
                            $stderr .= substr($tail, 0, max(0, self::MAX_STDERR_BYTES - strlen($stderr)));
                        }
                        fclose($pipes[$index]);
                    }
                }
                $closed = proc_close($process); $process = null;
                if ($knownExit === null || $knownExit < 0) { $knownExit = is_int($closed) ? $closed : 1; }
            }
            return ['exitCode' => $timedOut || $limitExceeded ? 124 : (int)$knownExit, 'stdout' => $limitExceeded ? '' : $stdout, 'stderr' => $stderr, 'timedOut' => $timedOut, 'limitExceeded' => $limitExceeded];
        } catch (Throwable $e) {
            if (is_resource($process)) {
                if ($processGroup !== null && $processGroup > 1) { $this->terminateAndReap($process, $pipes, $processGroup); }
                else { $this->terminateAndReapDirectProcess($process, $pipes); }
            }
            $empty['stderr'] = $e->getMessage(); return $empty;
        }
    }

    /** @param array<int,resource> $pipes */
    private function terminateAndReap(mixed $process, array &$pipes, int $processGroup): void {
        // The group identity was verified immediately after spawn. Signal that
        // group even if its leader has exited: descendants may still own the
        // pipes and keep consuming resources.
        @posix_kill(-$processGroup, 15);
        $deadline = hrtime(true) + (int)((float)$this->limits['terminateGraceSeconds'] * 1_000_000_000);
        do {
            foreach ([1, 2] as $index) { if (isset($pipes[$index]) && is_resource($pipes[$index])) { @fread($pipes[$index], 65536); } }
            $status = proc_get_status($process);
            usleep(10_000);
        } while (hrtime(true) < $deadline);
        // KILL the group even when its leader honored TERM: a descendant may not have.
        @posix_kill(-$processGroup, 9);
        $reapDeadline = hrtime(true) + (int)((float)$this->limits['terminateGraceSeconds'] * 1_000_000_000);
        do {
            $status = proc_get_status($process);
            if (!(bool)($status['running'] ?? false)) { break; }
            usleep(10_000);
        } while (hrtime(true) < $reapDeadline);
        foreach ($pipes as $pipe) { if (is_resource($pipe)) { @fclose($pipe); } }
        // proc_close() waits without a timeout. Only call it after observed exit.
        if (!(bool)($status['running'] ?? true)) { @proc_close($process); }
    }

    /** @param array<int,resource> $pipes */
    private function terminateAndReapDirectProcess(mixed $process, array &$pipes): void {
        @proc_terminate($process, 15);
        $deadline = hrtime(true) + (int)((float)$this->limits['terminateGraceSeconds'] * 1_000_000_000);
        do {
            $status = proc_get_status($process);
            if (!(bool)($status['running'] ?? false)) { break; }
            usleep(10_000);
        } while (hrtime(true) < $deadline);
        if ((bool)($status['running'] ?? false)) { @proc_terminate($process, 9); }
        foreach ($pipes as $pipe) { if (is_resource($pipe)) { @fclose($pipe); } }
        $status = proc_get_status($process);
        if (!(bool)($status['running'] ?? true)) { @proc_close($process); }
    }

    private function setsidCommand(): ?string {
        if (PHP_OS_FAMILY !== 'Linux' || !function_exists('posix_kill')) { return null; }
        foreach (['/usr/bin/setsid', '/bin/setsid'] as $candidate) {
            $path = realpath($candidate);
            if ($path !== false && is_file($path) && is_executable($path)) { return $path; }
        }
        return null;
    }

    private function processHasOwnGroup(int $pid): bool {
        if ($pid < 2 || !function_exists('posix_kill')) { return false; }
        $stat = @file_get_contents('/proc/' . $pid . '/stat');
        if (!is_string($stat) || preg_match('/^\d+ \(.*\) \S+ \d+ (\d+) (\d+) /', $stat, $match) !== 1) { return false; }
        return (int)$match[1] === $pid && (int)$match[2] === $pid;
    }

    private function waitForOwnProcessGroup(int $pid, mixed $process): bool {
        $deadline = hrtime(true) + 100_000_000;
        do {
            if ($this->processHasOwnGroup($pid)) { return true; }
            $status = proc_get_status($process);
            if (!(bool)($status['running'] ?? false)) { return false; }
            usleep(1_000);
        } while (hrtime(true) < $deadline);
        return false;
    }

    /** @return array{status:string,reason:string,content:null,mimeType:null,entryName:string|null} */
    private function blocked(string $status, string $reason, ?string $entryName = null): array {
        return ['status' => $status, 'reason' => $reason, 'content' => null, 'mimeType' => null, 'entryName' => $entryName];
    }

    private function coverMimeType(string $name): ?string {
        return match (strtolower(pathinfo($name, PATHINFO_EXTENSION))) { 'jpg', 'jpeg' => 'image/jpeg', 'png' => 'image/png', 'webp' => 'image/webp', default => null };
    }
}
