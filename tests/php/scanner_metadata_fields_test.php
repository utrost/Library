<?php
declare(strict_types=1);
require_once __DIR__.'/../../lib/Presentation/PublicationDate.php';
require_once __DIR__.'/../../lib/Metadata/ScannerMetadataFields.php';
use OCA\Library\Metadata\ScannerMetadataFields;
$count=0;function fieldCheck(bool $v):void{global $count;if(!$v)throw new RuntimeException('Scanner field boundary failed');$count++;}
foreach(ScannerMetadataFields::LIMITS as $field=>$limit) {
    fieldCheck(!ScannerMetadataFields::invalid($field,str_repeat('é',$limit)));
    fieldCheck(ScannerMetadataFields::invalid($field,str_repeat('é',$limit+1)));
    fieldCheck(ScannerMetadataFields::invalid($field,"\xFF"));
    fieldCheck(!ScannerMetadataFields::invalid($field,null));
}
fieldCheck(ScannerMetadataFields::rejected(['title'=>'Valid','subtitle'=>str_repeat('x',513),'publisher'=>'Good'])===['subtitle'=>str_repeat('x',513)]);
fieldCheck(!ScannerMetadataFields::invalid('publicationDate','2026-09-27T12:00:00.'.str_repeat('1',80).'Z'));
echo json_encode(['passed'=>true,'assertions'=>$count]),PHP_EOL;
