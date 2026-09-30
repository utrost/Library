<?php
declare(strict_types=1);
namespace OCP\Files {
    class File { public function getId():int{return 123;} public function getPath():string{return '/fixture.epub';} public function getName():string{return 'fixture.epub';} }
}
namespace {
    require_once __DIR__.'/../../lib/Service/AuthorNames.php';
    require_once __DIR__.'/../../lib/Service/SafeDiagnostics.php';
    require_once __DIR__.'/../../lib/Presentation/PublicationDate.php';
require_once __DIR__.'/../../lib/Metadata/ScannerMetadataFields.php';
    require_once __DIR__.'/../../lib/Metadata/PublicationMetadataService.php';
    $method=new ReflectionMethod(\OCA\Library\Metadata\PublicationMetadataService::class,'validateScannerAuthors');
    $valid=['title'=>'A useful title','language'=>'en','publisher'=>'Fixture press','authors'=>['Abercrombie, Joe','Ada Quill'],'creators'=>'Abercrombie, Joe; Ada Quill'];
    $count=0;
    function authorCheck(bool $ok,string $message):void{global $count;if(!$ok)throw new RuntimeException($message);$count++;}
    $service=new \OCA\Library\Metadata\PublicationMetadataService();
    authorCheck($method->invoke($service,$valid,new \OCP\Files\File())===$valid,'valid ordered/comma names unchanged');
    authorCheck($service->getLastError()===null,'no warning for valid authors');
    foreach([[''],[str_repeat('x',256)],["Bad\nAuthor"],["\xFF"],range(1,33),array_map(fn($n)=>str_repeat('x',220).$n,range(1,5)),['Good',null],'not an array'] as $bad){
        $service=new \OCA\Library\Metadata\PublicationMetadataService();$input=$valid;$input['authors']=$bad;
        $output=$method->invoke($service,$input,new \OCP\Files\File());
        authorCheck($output['title']===$valid['title']&&$output['language']==='en'&&$output['publisher']==='Fixture press','other fields retained');
        authorCheck(!isset($output['authors'])&&!isset($output['creators'])&&$output['_invalidAuthors']===true,'entire invalid author field rejected');
        authorCheck(str_starts_with($service->getLastError(),'metadata_authors_invalid:'),'bounded review warning');
        try{\OCA\Library\Service\AuthorNames::normalize($bad);throw new RuntimeException('Strict author validation weakened');}catch(InvalidArgumentException){}
        $count++;
    }
    $service=new \OCA\Library\Metadata\PublicationMetadataService();$input=['title'=>'PDF title','creators'=>str_repeat('x',256)];
    authorCheck($method->invoke($service,$input,new \OCP\Files\File())['_invalidAuthors']===true,'unstructured PDF author checked');
    (new ReflectionProperty($service,'lastError'))->setValue($service,'original archive failure');
    $method->invoke($service,$input,new \OCP\Files\File());authorCheck($service->getLastError()==='original archive failure','original extraction warning retained');
    echo json_encode(['passed'=>true,'assertions'=>$count]),PHP_EOL;
}
