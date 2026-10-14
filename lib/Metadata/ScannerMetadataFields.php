<?php

declare(strict_types=1);
namespace OCA\Library\Metadata;
use OCA\Library\Presentation\PublicationDate;

/** Shared database bounds; scanner rejects fields individually, editors reject the request. */
final class ScannerMetadataFields {
    public const LIMITS = ['title'=>512,'subtitle'=>512,'publication'=>512,'series'=>255,'seriesNumber'=>64,'genre'=>255,'publicationDate'=>64,'language'=>64,'publisher'=>512];
    public static function invalid(string $field, mixed $value): bool {
        if ($value === null) return false;
        if ($field==='publicationDate' && is_string($value)) $value=PublicationDate::forEditor($value);
        return !is_string($value) || !mb_check_encoding($value,'UTF-8') || mb_strlen(trim($value),'UTF-8') > self::LIMITS[$field]
            || (in_array($field,['series','seriesNumber','genre'],true) && preg_match('/[\x00-\x1f\x7f]/',$value));
    }
    public static function rejected(array $metadata): array {
        $rejected=[];
        foreach(self::LIMITS as $field=>$limit) if(array_key_exists($field,$metadata) && self::invalid($field,$metadata[$field])) $rejected[$field]=$metadata[$field];
        return $rejected;
    }
}
