<?php
declare(strict_types=1);
namespace OCA\Library\WriteBack;

/** Identifies the selected field that cannot be replaced without losing EPUB refinements. */
final class ComplexMetadataException extends \DomainException {
    public function __construct(public readonly string $field) { parent::__construct('complex_metadata'); }
}
