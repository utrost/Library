<?php
declare(strict_types=1);
require_once __DIR__ . '/../../lib/Service/AuthorNames.php';
require_once __DIR__.'/../../lib/Presentation/PublicationDate.php';
require_once __DIR__.'/../../lib/Metadata/ScannerMetadataFields.php';
require __DIR__ . '/../../lib/Service/ItemService.php';
$service=(new ReflectionClass(\OCA\Library\Service\ItemService::class))->newInstanceWithoutConstructor();
function check(bool $value,string $message): void { if(!$value)throw new RuntimeException($message); }
$normalize=new ReflectionMethod($service,'normalizeExtendedField');
foreach(['series'=>255,'seriesNumber'=>64,'genre'=>255] as $field=>$limit){
 check($normalize->invoke($service,$field,'  01  ')==='01','trim and leading zeros');
 check($normalize->invoke($service,$field,null)===null,'null');
 check($normalize->invoke($service,$field,'')===null,'clear');
 check($normalize->invoke($service,$field,str_repeat('é',$limit))===str_repeat('é',$limit),'Unicode character limit');
 foreach([[],true,2.5,str_repeat('x',$limit+1),"bad\nvalue","bad\0value","\xFF"] as $bad){
  try{$normalize->invoke($service,$field,$bad);throw new RuntimeException('Invalid value accepted');}catch(InvalidArgumentException){}
 }
 $column=(new ReflectionMethod($service,'databaseColumnForField'))->invoke($service,$field);
 check($column===['series'=>'series_name','seriesNumber'=>'series_number','genre'=>'genre'][$field],'canonical column');
}
check($normalize->invoke($service,'seriesNumber','2.5')==='2.5','decimal retained');
check($normalize->invoke($service,'seriesNumber','Volume II')==='Volume II','label retained');
foreach(['series'=>['bad'],'seriesNumber'=>str_repeat('x',65),'genre'=>true] as $field=>$value){
 $payload=json_encode(['cachedPath'=>'Fixture.epub',$field=>$value]);
 foreach(['previewCorrectedMetadataImport','applyCorrectedMetadataImport'] as $method){
  $result=$service->$method('alice',$payload);check(!$result['valid']&&$result['error']==='invalid_item','invalid field rejected before database access');
 }
}
echo "extended_metadata_fields_ok=true length=true types=true unicode=true leading_zeros=true import_validation=true\n";
