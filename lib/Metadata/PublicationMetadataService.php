<?php

declare(strict_types=1);

namespace OCA\Library\Metadata;

use OCP\Files\File;
use OCP\Files\Folder;
use OCA\Library\Service\SafeDiagnostics;
use OCA\Library\Service\AuthorNames;
use Throwable;

final class PublicationMetadataService {
    // Bump for any output-affecting extractor or normalization change, sidecar precedence
    // change, filename/folder interpretation change, or ItemService candidate mapping change.
    public const PIPELINE_REVISION = 'metadata-pipeline-v7';

    // realistic fixture notes: encoded PDF info dictionaries, CBZ without ComicInfo.xml, nested ComicInfo.xml, sidecar collisions.
    private ?string $lastError = null;

    public function getLastError(): ?string {
        return $this->lastError;
    }

    public function metadataInputFingerprint(File $file, int $rootId): ?string {
        try {
            $sidecar = $this->findOpfSidecar($file);
            return MetadataInputFingerprint::fromObservations(
                $this->observeNode($file, $rootId),
                $sidecar === null ? null : $this->observeNode($sidecar, $rootId),
            );
        } catch (Throwable) {
            return null;
        }
    }

    /** @return array<string, mixed> */
    private function observeNode(File $file, int $rootId): array {
        return [
            'rootId' => $rootId,
            'fileId' => $file->getId(),
            'path' => $file->getPath(),
            'etag' => $file->getEtag(),
            'mimeType' => $file->getMimetype(),
            'extension' => strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION)),
            'mtime' => $file->getMTime(),
            'size' => $file->getSize(),
        ];
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
                return $this->validateScannerFields($this->validateScannerAuthors(array_merge($filenameMetadata, $embeddedMetadata), $file), $file);
            }

            $sidecarMetadata = (new OpfEpubMetadataExtractor())->parseOpfMetadata($sidecar->getContent(), 'sidecar-opf');
            if ($sidecarMetadata === []) {
                return $this->validateScannerFields($this->validateScannerAuthors(array_merge($filenameMetadata, $embeddedMetadata), $file), $file);
            }

            if (isset($sidecarMetadata['creators']) && !isset($sidecarMetadata['authors'])) unset($embeddedMetadata['authors']);
            return $this->validateScannerFields($this->validateScannerAuthors(array_merge($filenameMetadata, $embeddedMetadata, $sidecarMetadata), $file), $file);
        } catch (Throwable $e) {
            $this->lastError = $this->safeMetadataExtractionError($e, $file);
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
            $this->lastError = $this->safeMetadataExtractionError($e, $file);
            return [];
        }

        return [];
    }

    /** Reject the author field alone; manual/import validation remains strict. */
    private function validateScannerAuthors(array $metadata, File $file): array {
        try {
            if (isset($metadata['authors'])) AuthorNames::normalize($metadata['authors']);
            else AuthorNames::fromText($metadata['creators'] ?? null);
        } catch (\InvalidArgumentException $e) {
            unset($metadata['authors'], $metadata['creators']);
            $metadata['_invalidAuthors'] = true;
            $diagnostic = SafeDiagnostics::fromThrowable(
                'metadata_authors_invalid',
                'Author metadata could not be imported. Other fields were retained. Review the author field.',
                $e,
                ['fileId' => $file->getId(), 'path' => $file->getPath(), 'extension' => strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION))],
            );
            SafeDiagnostics::log($diagnostic);
            // Preserve an existing extraction failure rather than hiding it behind the author warning.
            $this->lastError ??= SafeDiagnostics::publicText($diagnostic);
        }
        return $metadata;
    }

    /** Invalid source fields remain Review proposals, never canonical database writes. */
    private function validateScannerFields(array $metadata, File $file): array {
        $rejected=ScannerMetadataFields::rejected($metadata);
        if ($rejected === []) return $metadata;
        foreach($rejected as $field=>$value) unset($metadata[$field]);
        $metadata['_invalidFields']=array_keys($rejected);
        $metadata['_rejectedFields']=$rejected;
        $diagnostic=SafeDiagnostics::fromThrowable('metadata_fields_invalid',
            'Some source metadata exceeds field limits. Other fields were retained. Review the rejected fields.',
            new \InvalidArgumentException('Unsupported scanner fields: '.implode(', ',array_keys($rejected))),
            ['fileId'=>$file->getId(),'path'=>$file->getPath(),'extension'=>strtolower(pathinfo($file->getName(),PATHINFO_EXTENSION))]);
        SafeDiagnostics::log($diagnostic);
        $this->lastError ??= SafeDiagnostics::publicText($diagnostic);
        return $metadata;
    }

    private function safeMetadataExtractionError(Throwable $e, File $file): string {
        $diagnostic = SafeDiagnostics::fromThrowable(
            'metadata_extraction_failed',
            'Metadata extraction failed. Review the source file or retry later.',
            $e,
            [
                'fileId' => $file->getId(),
                'path' => $file->getPath(),
                'extension' => strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION)),
            ],
        );
        SafeDiagnostics::log($diagnostic);
        return SafeDiagnostics::publicText($diagnostic);
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
