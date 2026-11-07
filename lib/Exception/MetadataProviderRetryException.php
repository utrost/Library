<?php
declare(strict_types=1);
namespace OCA\Library\Exception;

/** A bounded provider cooldown; never carries a query, response body or credential. */
final class MetadataProviderRetryException extends \RuntimeException {
    public function __construct(public readonly int $retryAfter) { parent::__construct('rate_limited'); }

    public static function fromHeader(mixed $header, ?int $now=null): self {
        $now ??= time();
        if (is_array($header)) $header=$header[0] ?? '';
        $seconds=60;
        if (is_string($header) && strlen($header)<=100) {
            $header=trim($header);
            if (preg_match('/^[0-9]{1,9}$/D',$header)) $seconds=(int)$header;
            elseif (($date=strtotime($header))!==false) $seconds=max(1,$date-$now);
        }
        return new self(max(1,min(604800,$seconds)));
    }
}
