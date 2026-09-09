<?php

declare(strict_types=1);

namespace OCA\Library\Service;

use Throwable;

final class ArchiveCoverService {
    /**
     * @return array{status:string,reason:string,content:string|null,mimeType:string|null,entryName:string|null}
     */
    public function firstImageCover(string $archivePath, string $actualContainerType): array {
        if ($actualContainerType === 'application/x-7z-compressed') {
            return $this->firstExternalImageCover(
                $archivePath,
                ['7z', '7za', '7zr', 'bsdtar'],
                'sevenzip-first-image-fallback',
                'Library read-only 7z cover fallback found the first image; files are left as-is.'
            );
        }
        if ($actualContainerType === 'application/x-rar-compressed') {
            return $this->firstExternalImageCover(
                $archivePath,
                ['7z', '7za', 'unrar', 'bsdtar'],
                'rar-first-image-fallback',
                'Library read-only RAR cover fallback found the first image; files are left as-is.'
            );
        }
        return [
            'status' => 'unsupported-container',
            'reason' => 'Read-only archive cover extraction only handles 7z/RAR containers after the ZIP fallback.',
            'content' => null,
            'mimeType' => null,
            'entryName' => null,
        ];
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

    /**
     * @param array<int,string> $candidateCommands
     * @return array{status:string,reason:string,content:string|null,mimeType:string|null,entryName:string|null}
     */
    private function firstExternalImageCover(string $archivePath, array $candidateCommands, string $successStatus, string $successReason): array {
        $command = $this->firstAvailableCommand($candidateCommands);
        if ($command === null) {
            return [
                'status' => 'blocked-missing-archive-extractor',
                'reason' => 'No read-only archive extractor command is available for this container; install 7z/7za/7zr, unrar, or bsdtar to let Library inspect it without converting files.',
                'content' => null,
                'mimeType' => null,
                'entryName' => null,
            ];
        }

        $entries = $this->imageEntries($command, $archivePath);
        if ($entries === []) {
            return [
                'status' => 'blocked-no-image-entry',
                'reason' => 'Archive listing succeeded, but no JPEG/PNG/WEBP image entry was found.',
                'content' => null,
                'mimeType' => null,
                'entryName' => null,
            ];
        }

        natcasesort($entries);
        $entryName = (string)reset($entries);
        $content = $this->extractEntry($command, $archivePath, $entryName);
        if ($content === null || $content === '') {
            return [
                'status' => 'blocked-entry-extract-failed',
                'reason' => 'Archive listing found an image entry, but read-only extraction to stdout failed.',
                'content' => null,
                'mimeType' => null,
                'entryName' => $entryName,
            ];
        }

        return [
            'status' => $successStatus,
            'reason' => $successReason,
            'content' => $content,
            'mimeType' => $this->coverMimeType($entryName),
            'entryName' => $entryName,
        ];
    }

    /** @param array<int,string> $commands */
    private function firstAvailableCommand(array $commands): ?string {
        $paths = explode(PATH_SEPARATOR, (string)getenv('PATH'));
        foreach ($commands as $command) {
            foreach ($paths as $path) {
                $candidate = rtrim($path, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . $command;
                if (is_file($candidate) && is_executable($candidate)) {
                    return $command;
                }
            }
        }
        return null;
    }

    /** @return array<int,string> */
    private function imageEntries(string $command, string $archivePath): array {
        if ($command === 'bsdtar') {
            $result = $this->runCommand([$command, '-tf', $archivePath], 2_000_000);
            $names = preg_split('/\R/', $result['stdout']) ?: [];
        } elseif ($command === 'unrar') {
            $result = $this->runCommand([$command, 'lb', $archivePath], 2_000_000);
            $names = preg_split('/\R/', $result['stdout']) ?: [];
        } else {
            $result = $this->runCommand([$command, 'l', '-slt', $archivePath], 2_000_000);
            preg_match_all('/^Path = (.+)$/m', $result['stdout'], $matches);
            $names = $matches[1] ?? [];
        }
        if (($result['exitCode'] ?? 1) !== 0) {
            return [];
        }

        $entries = [];
        foreach ($names as $name) {
            $name = trim((string)$name);
            if ($name === '' || str_ends_with($name, '/') || realpath($name) === realpath($archivePath)) {
                continue;
            }
            if ($this->coverMimeType($name) !== null) {
                $entries[] = $name;
            }
        }
        return $entries;
    }

    private function extractEntry(string $command, string $archivePath, string $entryName): ?string {
        if ($command === 'bsdtar') {
            $result = $this->runCommand([$command, '-xOf', $archivePath, $entryName], 20_000_000);
        } elseif ($command === 'unrar') {
            $result = $this->runCommand([$command, 'p', '-inul', $archivePath, $entryName], 20_000_000);
        } else {
            $result = $this->runCommand([$command, 'x', '-so', $archivePath, $entryName], 20_000_000);
        }
        return $result['exitCode'] === 0 ? $result['stdout'] : null;
    }

    /**
     * @param array<int,string> $command
     * @return array{exitCode:int,stdout:string,stderr:string}
     */
    private function runCommand(array $command, int $stdoutLimit): array {
        $descriptorSpec = [
            0 => ['pipe', 'r'],
            1 => ['pipe', 'w'],
            2 => ['pipe', 'w'],
        ];
        try {
            $process = proc_open($command, $descriptorSpec, $pipes);
            if (!is_resource($process)) {
                return ['exitCode' => 127, 'stdout' => '', 'stderr' => 'proc_open failed'];
            }
            fclose($pipes[0]);
            $stdout = stream_get_contents($pipes[1], $stdoutLimit + 1);
            $stderr = stream_get_contents($pipes[2], 20000);
            fclose($pipes[1]);
            fclose($pipes[2]);
            $exitCode = proc_close($process);
            if (strlen((string)$stdout) > $stdoutLimit) {
                return ['exitCode' => 124, 'stdout' => '', 'stderr' => 'stdout limit exceeded'];
            }
            return ['exitCode' => is_int($exitCode) ? $exitCode : 1, 'stdout' => (string)$stdout, 'stderr' => (string)$stderr];
        } catch (Throwable $e) {
            return ['exitCode' => 1, 'stdout' => '', 'stderr' => $e->getMessage()];
        }
    }

    private function coverMimeType(string $name): ?string {
        return match (strtolower(pathinfo($name, PATHINFO_EXTENSION))) {
            'jpg', 'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'webp' => 'image/webp',
            default => null,
        };
    }
}
