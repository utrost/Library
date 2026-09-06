<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;
use OCP\Files\Folder;
use Throwable;

final class PublicationMetadataService {
    // realistic fixture notes: encoded PDF info dictionaries, CBZ without ComicInfo.xml, nested ComicInfo.xml, sidecar collisions.
    private ?string $lastError = null;

    public function getLastError(): ?string {
        return $this->lastError;
    }

    /**
     * Extract best-effort local metadata from publication files, preferring local OPF sidecars
     * over embedded/PDF candidates for editable catalogue defaults.
     *
     * @return array<string, string>
     */
    public function extractWithSidecar(File $file): array {
        $this->lastError = null;

        try {
            $filenameMetadata = (new FilenameMetadataExtractor())->extract($file);
            $embeddedMetadata = $this->extract($file);
            $sidecar = $this->findOpfSidecar($file);
            if ($sidecar === null) {
                return array_merge($filenameMetadata, $embeddedMetadata);
            }

            $sidecarMetadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($sidecar->getContent(), 'sidecar-opf');
            if ($sidecarMetadata === []) {
                return array_merge($filenameMetadata, $embeddedMetadata);
            }

            return array_merge($filenameMetadata, $embeddedMetadata, $sidecarMetadata);
        } catch (Throwable $e) {
            $this->lastError = 'metadata extraction failed: ' . $e->getMessage();
            return [];
        }
    }

    /**
     * Extract best-effort local metadata from publication files.
     *
     * @return array<string, string>
     */
    public function extract(File $file): array {
        $this->lastError = null;
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        $mimeType = strtolower($file->getMimetype());

        try {
            if ($extension === 'epub' || $mimeType === 'application/epub+zip') {
                $extractor = new OpfEpubMetadataExtractor();
                $metadata = $extractor->extractEpub($file);
                $this->lastError = $extractor->getLastError();
                return $metadata;
            }
            if ($extension === 'opf' || $mimeType === 'application/oebps-package+xml') {
                $extractor = new OpfEpubMetadataExtractor();
                $metadata = $extractor->extractStandaloneOpf($file);
                $this->lastError = $extractor->getLastError();
                return $metadata;
            }
            if ($extension === 'pdf' || $mimeType === 'application/pdf') {
                return (new PdfInfoMetadataExtractor())->extract($file);
            }
            if ($extension === 'cbz' || $mimeType === 'application/comicbook+zip' || $mimeType === 'application/x-cbz') {
                $extractor = new CbzComicInfoMetadataExtractor();
                $metadata = $extractor->extract($file);
                $this->lastError = $extractor->getLastError();
                return $metadata;
            }
        } catch (Throwable $e) {
            $this->lastError = 'metadata extraction failed: ' . $e->getMessage();
            return [];
        }

        return [];
    }

    private function findOpfSidecar(File $file): ?File {
        $extension = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        if ($extension === 'opf') {
            return null;
        }

        $parent = $file->getParent();
        if (!$parent instanceof Folder) {
            return null;
        }

        $sameBasenameOpf = pathinfo($file->getName(), PATHINFO_FILENAME) . '.opf';
        if ($parent->nodeExists($sameBasenameOpf)) {
            $node = $parent->get($sameBasenameOpf);
            if ($node instanceof File) {
                return $node;
            }
        }

        if ($parent->nodeExists('metadata.opf')) {
            $node = $parent->get('metadata.opf');
            if ($node instanceof File) {
                return $node;
            }
        }

        return null;
    }

}
