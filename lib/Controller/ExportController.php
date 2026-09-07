<?php

declare(strict_types=1);

namespace OCA\Library\Controller;

use OCA\Library\Service\ItemService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDownloadResponse;
use OCP\IRequest;
use OCP\IUserSession;
use ZipArchive;

class ExportController extends Controller {
    public function __construct(
        string $appName,
        IRequest $request,
        private ItemService $itemService,
        private IUserSession $userSession,
    ) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function metadata(): DataDownloadResponse {
        $user = $this->userSession->getUser();
        $payload = $user !== null
            ? $this->itemService->exportCorrectedMetadata($user->getUID())
            : [
                'schemaVersion' => 1,
                'exportedAt' => gmdate(DATE_ATOM),
                'items' => [],
            ];

        return $this->downloadJson($payload, 'library-metadata-export.json', 'corrected-metadata');
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function sidecarManifest(): DataDownloadResponse {
        $user = $this->userSession->getUser();
        $payload = $user !== null
            ? $this->itemService->exportCorrectedMetadataSidecarManifest($user->getUID())
            : [
                'schemaVersion' => 1,
                'exportedAt' => gmdate(DATE_ATOM),
                'manifestKind' => 'library-corrected-metadata-sidecar-manifest',
                'itemCount' => 0,
                'items' => [],
            ];

        return $this->downloadJson(
            $payload,
            'library-metadata-sidecar-manifest.json',
            'corrected-metadata-sidecar-manifest'
        );
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function sidecarBundle(): DataDownloadResponse {
        $user = $this->userSession->getUser();
        $manifest = $user !== null
            ? $this->itemService->exportCorrectedMetadataSidecarManifest($user->getUID())
            : [
                'schemaVersion' => 1,
                'exportedAt' => gmdate(DATE_ATOM),
                'manifestKind' => 'library-corrected-metadata-sidecar-manifest',
                'itemCount' => 0,
                'items' => [],
            ];

        $zip = new ZipArchive();
        $tempPath = tempnam(sys_get_temp_dir(), 'library-sidecars-');
        if ($tempPath === false || $zip->open($tempPath, ZipArchive::OVERWRITE) !== true) {
            return $this->downloadJson([
                'schemaVersion' => 1,
                'error' => 'zip_unavailable',
                'items' => [],
            ], 'library-metadata-sidecars-error.json', 'corrected-metadata-sidecar-bundle');
        }

        $zip->addFromString('library-sidecar-manifest.json', json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
        foreach (($manifest['items'] ?? []) as $manifestItem) {
            if (!is_array($manifestItem)) {
                continue;
            }
            $entryName = $this->zipEntryName((string)($manifestItem['sidecarPath'] ?? ''));
            if ($entryName === '') {
                continue;
            }
            $metadata = is_array($manifestItem['metadata'] ?? null) ? $manifestItem['metadata'] : [];
            $zip->addFromString($entryName, json_encode($metadata, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
        }
        $zip->close();

        $contents = file_get_contents($tempPath);
        @unlink($tempPath);
        if (!is_string($contents)) {
            $contents = '';
        }

        return new DataDownloadResponse(
            $contents,
            'library-metadata-sidecars.zip',
            'application/zip',
            200,
            [
                'Cache-Control' => 'private, no-store',
                'X-Library-Export-Type' => 'corrected-metadata-sidecar-bundle',
            ]
        );
    }

    /**
     * @param array<string, mixed> $payload
     */
    private function downloadJson(array $payload, string $filename, string $exportType): DataDownloadResponse {
        $json = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        if (!is_string($json)) {
            $json = '{"schemaVersion":1,"items":[]}';
        }

        return new DataDownloadResponse(
            $json . "\n",
            $filename,
            'application/json',
            200,
            [
                'Cache-Control' => 'private, no-store',
                'X-Library-Export-Type' => $exportType,
            ]
        );
    }

    private function zipEntryName(string $sidecarPath): string {
        $entryName = trim(str_replace('\\', '/', $sidecarPath), '/');
        $parts = array_values(array_filter(explode('/', $entryName), static fn (string $part): bool => $part !== '' && $part !== '.' && $part !== '..'));
        return implode('/', $parts);
    }
}
