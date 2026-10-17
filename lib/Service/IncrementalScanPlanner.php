<?php
declare(strict_types=1);

namespace OCA\Library\Service;

/** Pure, bounded target planning for one change-journal page. */
final class IncrementalScanPlanner {
    public function plan(array $snapshot, array $roots): array {
        $targets = [];
        foreach ($snapshot as $entry) {
            $dirty = $entry['path'];
            foreach ($roots as $root) {
                $rootPath = rtrim((string)$root['path'], '/') ?: '/';
                if ($dirty !== '/' && $rootPath !== '/' && $dirty !== $rootPath
                    && !str_starts_with($dirty, $rootPath . '/') && !str_starts_with($rootPath, rtrim($dirty, '/') . '/')) continue;
                $aboveRoot = $dirty === '/' || str_starts_with($rootPath, rtrim($dirty, '/') . '/');
                $path = $aboveRoot ? $rootPath : $dirty;
                $folder = $aboveRoot || $entry['folder'];
                $targets[(int)$root['id']][($folder ? 'd:' : 'f:') . $path] = ['path' => $path, 'folder' => $folder];
            }
        }
        $work = [];
        foreach ($targets as $rootId => $entries) {
            $sorted = array_values($entries);
            usort($sorted, static fn(array $a, array $b): int => strlen($a['path']) <=> strlen($b['path'])
                ?: ((int)$b['folder'] <=> (int)$a['folder']));
            $keptDirectories = [];
            $keptExact = [];
            foreach ($sorted as $entry) {
                $path = $entry['path'];
                if (isset($keptExact[($entry['folder'] ? 'd:' : 'f:') . $path])) continue;
                $ancestor = $path;
                $covered = false;
                while (true) {
                    if (isset($keptDirectories[$ancestor])) { $covered = true; break; }
                    if ($ancestor === '/') break;
                    $ancestor = dirname($ancestor);
                }
                if ($covered) continue;
                $keptExact[($entry['folder'] ? 'd:' : 'f:') . $path] = true;
                if ($entry['folder']) $keptDirectories[$path] = true;
                $entry['rootId'] = (int)$rootId;
                $entry['priority'] = $entry['folder'] ? 1 : 2;
                $work[] = $entry;
            }
        }
        return $work;
    }
}
