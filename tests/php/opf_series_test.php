<?php
declare(strict_types=1);
namespace OCP\Files {
    class Folder {
        public array $nodes=[];
        public function nodeExists(string $name):bool{return isset($this->nodes[$name]);}
        public function get(string $name):File{return $this->nodes[$name];}
    }
    class File {
        public function __construct(private string $name,private string $content,private Folder $parent){}
        public function getName():string{return $this->name;}
        public function getContent():string{return $this->content;}
        public function getParent():Folder{return $this->parent;}
        public function getPath():string{return '/Books/'.$this->name;}
        public function getId():int{return 1;}
        public function getMimetype():string{return 'application/epub+zip';}
        public function fopen(string $mode){$s=fopen('php://temp','w+b');fwrite($s,$this->content);rewind($s);return $s;}
    }
}
namespace {
    foreach(['Metadata/OpfEpubMetadataExtractor','Metadata/PublicationMetadataService','Metadata/FilenameMetadataExtractor','Metadata/ScannerMetadataFields','Presentation/PublicationDate','Service/AuthorNames','Service/SafeDiagnostics'] as $file)require_once __DIR__.'/../../lib/'.$file.'.php';
    $count=0;
    function check(bool $ok,string $message):void{global $count;if(!$ok)throw new \RuntimeException($message);$count++;}
    function opf(string $meta):string{return '<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata><dc:title>Series fixture</dc:title>'.$meta.'</metadata></package>';}
    function legacy(string $name,?string $position):string{return '<meta name="calibre:series" content="'.$name.'"/>'.($position===null?'':'<meta name="calibre:series_index" content="'.$position.'"/>');}
    $parser=new \OCA\Library\Metadata\OpfEpubMetadataExtractor();
    foreach(['01','1.0','2.5','0','Volume II',null] as $position){
        $result=$parser->parseOpfMetadata(opf(legacy('Example',$position)),'opf');
        check($result['series']==='Example'&&$result['publication']==='Example','dedicated and legacy series');
        check(($result['seriesNumber']??null)===$position,'position preserved without default');
    }
    $epub3='<meta refines="#series" property="group-position">2.5</meta><meta property="belongs-to-collection" id="set">Other collection</meta><meta refines="#set" property="group-position">99</meta><meta property="belongs-to-collection" id="series">EPUB series</meta><meta property="collection-type" refines="#series">series</meta>';
    $result=$parser->parseOpfMetadata(opf($epub3),'epub-opf');
    check($result['series']==='EPUB series'&&$result['seriesNumber']==='2.5','EPUB 3 references paired irrespective of order');
    $result=$parser->parseOpfMetadata(opf($epub3.legacy('Calibre series',null)),'opf');
    check($result['series']==='Calibre series'&&!isset($result['seriesNumber']),'Calibre precedence never borrows another collection position');
    foreach(['<meta name="calibre:series_index" content="1"/>','<meta property="group-position" refines="#absent">2</meta>','<meta property="belongs-to-collection" id="set">Set</meta>'] as $orphan){
        $result=$parser->parseOpfMetadata(opf($orphan),'opf');check(!isset($result['series'])&&!isset($result['seriesNumber']),'orphan position and untyped collection ignored');
    }
    // Exercise the public extraction service with a real EPUB ZIP and OPF sidecars.
    $path=tempnam(sys_get_temp_dir(),'library-series-');
    try{
        $zip=new \ZipArchive();$zip->open($path,\ZipArchive::OVERWRITE);
        $zip->addFromString('META-INF/container.xml','<container><rootfiles><rootfile full-path="book.opf"/></rootfiles></container>');
        $zip->addFromString('book.opf',opf(legacy('Embedded','2.5')));$zip->close();
        foreach([['Embedded',null,'2.5'],['Different',null,null],['Different','01','01']] as [$name,$position,$expected]){
            $folder=new \OCP\Files\Folder();$file=new \OCP\Files\File('fixture.epub',file_get_contents($path),$folder);
            $folder->nodes['metadata.opf']=new \OCP\Files\File('metadata.opf',opf(legacy($name,$position)),$folder);
            $service=new \OCA\Library\Metadata\PublicationMetadataService();$result=$service->extractWithSidecar($file);
            check($service->getLastError()===null,'no extraction warning');
            check(($result['series']??null)===$name&&($result['seriesNumber']??null)===$expected,'sidecar name and position precedence');
            $folder->nodes['fixture.opf']=new \OCP\Files\File('fixture.opf',opf(legacy('Basename','3')),$folder);
            $result=$service->extractWithSidecar($file);
            check($result['series']==='Basename'&&$result['seriesNumber']==='3','basename sidecar wins');
        }
    }finally{unlink($path);}
    echo json_encode(['passed'=>true,'assertions'=>$count]),PHP_EOL;
}
