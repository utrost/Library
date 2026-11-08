<?php
declare(strict_types=1);
require __DIR__.'/../../lib/WriteBack/ComplexMetadataException.php';
require __DIR__.'/../../lib/WriteBack/EpubMetadataWriter.php';
use OCA\Library\WriteBack\EpubMetadataWriter;
function verify(bool $ok,string $label): void { if (!$ok) throw new RuntimeException($label); echo "PASS $label\n"; }
function fixture(string $version='2.0',string $metadata='',array $extra=[]): string {
 $p=tempnam(sys_get_temp_dir(),'library-epub-test-');$z=new ZipArchive();$z->open($p,ZipArchive::OVERWRITE);
 $z->addFromString('mimetype','application/epub+zip');$z->setCompressionName('mimetype',ZipArchive::CM_STORE);
 $z->addFromString('META-INF/container.xml','<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
 $z->addFromString('OEBPS/content.opf','<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="'.$version.'" unique-identifier="unique"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="unique">urn:fixture:original</dc:identifier><dc:title id="title">Original</dc:title><dc:language>en</dc:language>'.$metadata.'</metadata><manifest><item id="body" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="body"/></spine></package>');
 $z->addFromString('OEBPS/chapter.xhtml','<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Chapter</title></head><body><p>Exact original content.</p></body></html>');$z->addFromString('OEBPS/assets/image.bin',random_bytes(2048));
 foreach($extra as $name=>$bytes) $z->addFromString($name,$bytes);$z->close();return $p;
}
function entries(string $path): array { $z=new ZipArchive();$z->open($path);$out=[];for($i=0;$i<$z->numFiles;$i++)$out[$z->getNameIndex($i)]=hash('sha256',$z->getFromIndex($i));$z->close();return $out; }
$writer=new EpubMetadataWriter();$item=['title'=>'Changed & <escaped> title','authors'=>['Avery Fixture','Bob Fixture'],'publisher'=>'Example Press','language'=>'en;de','publicationDate'=>'2026-01-02','description'=>'A <plain> description','subjects'=>['One','Two'],'identifiers'=>[['valid'=>true,'scheme'=>'isbn','normalizedValue'=>'9780306406157']]];
foreach(['2.0','3.0'] as $version) {
 $p=fixture($version);try {$old=entries($p);$review=$writer->prepare($p,$item,EpubMetadataWriter::FIELDS);$new=entries($p);unset($old['OEBPS/content.opf'],$new['OEBPS/content.opf']);verify($old===$new,"EPUB $version preserves every non-OPF entry");verify($review['after']['identifiers']===['urn:fixture:original','ISBN:9780306406157'],"EPUB $version preserves unique identifier");verify($review['after']['title']===[$item['title']],"EPUB $version escapes metadata correctly");verify($review['modified']===($version==='3.0'),"EPUB $version modification timestamp policy");}finally{unlink($p);}
}
$cases=[
 'encrypted'=>['2.0','',['META-INF/encryption.xml'=>'<encryption/>'],['title']],
 'signed'=>['2.0','',['META-INF/signatures.xml'=>'<signatures/>'],['title']],
 'rights'=>['2.0','',['META-INF/rights.xml'=>'<rights/>'],['title']],
 'traversal'=>['2.0','',['../escape'=>'x'],['title']],
 'absolute'=>['2.0','',['/escape'=>'x'],['title']],
 'refinement'=>['3.0','<meta refines="#title" property="title-type">main</meta>',[],['title']],
 'unknown author attribute'=>['2.0','<dc:creator role="editor">Original</dc:creator>',[],['authors']],
 'multiple titles'=>['2.0','<dc:title>Second title</dc:title>',[],['title']],
 'multiple renditions'=>['2.0','',['META-INF/container.xml'=>'<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf"/><rootfile full-path="other.opf"/></rootfiles></container>'],['title']],
 'container doctype'=>['2.0','',['META-INF/container.xml'=>'<!DOCTYPE container [<!ENTITY external SYSTEM "file:///does-not-exist">]><container>&external;</container>'],['title']],
 'package doctype'=>['2.0','',['OEBPS/content.opf'=>'<!DOCTYPE package [<!ENTITY external SYSTEM "file:///does-not-exist">]><package>&external;</package>'],['title']],
 'oversized package XML'=>['2.0','',['OEBPS/content.opf'=>str_repeat(' ',2097153)],['title']],
 'unknown package version'=>['4.0','',[],['title']],
 'backslash archive path'=>['2.0','',['OEBPS\\escape'=>'x'],['title']],
];
foreach($cases as $label=>[$v,$meta,$extra,$fields]) {
 $p=fixture($v,$meta,$extra);try{$old=hash_file('sha256',$p);$caught=false;try{$writer->prepare($p,$item,$fields);}catch(DomainException $e){$caught=true;if(in_array($label,['refinement','unknown author attribute','multiple titles'],true))verify($e instanceof \OCA\Library\WriteBack\ComplexMetadataException && $e->field===$fields[0],"complex $label identifies the selected field");}verify($caught,"reject $label");verify(hash_file('sha256',$p)===$old,"reject $label leaves staged EPUB unchanged");}finally{unlink($p);}
}
$p=fixture();try{$old=hash_file('sha256',$p);$caught=false;try{$writer->prepare($p,['title'=>'','language'=>''],['title']);}catch(InvalidArgumentException){$caught=true;}verify($caught && hash_file('sha256',$p)===$old,'required title cannot be cleared');}finally{unlink($p);}
foreach([[],['title','title'],['genres']] as $fields){$p=fixture();try{$old=hash_file('sha256',$p);$caught=false;try{$writer->prepare($p,$item,$fields);}catch(InvalidArgumentException){$caught=true;}verify($caught && hash_file('sha256',$p)===$old,'invalid selected fields are rejected without changing bytes');}finally{unlink($p);}}
$p=fixture();try{$old=hash_file('sha256',$p);$caught=false;try{$writer->prepare($p,array_replace($item,['language'=>'']),['language']);}catch(InvalidArgumentException){$caught=true;}verify($caught && hash_file('sha256',$p)===$old,'required language cannot be cleared');}finally{unlink($p);}
$p=fixture('3.0','<dc:creator role="editor">Original editor</dc:creator><meta refines="#title" property="title-type">main</meta>');try{$review=$writer->prepare($p,$item,['publisher']);$z=new ZipArchive();$z->open($p);$xml=$z->getFromName('OEBPS/content.opf');$z->close();verify(str_contains($xml,'role="editor"') && str_contains($xml,'Original editor') && str_contains($xml,'refines="#title"'),'unselected complex metadata is preserved');verify($review['after']['publisher']===['Example Press'],'ordinary selected field remains writable beside complex metadata');}finally{unlink($p);}
foreach([0,2] as $state){$p=fixture('2.0','<dc:creator>Old imported author</dc:creator>');try{$review=$writer->prepare($p,array_replace($item,['authorSyncStatus'=>$state,'canonicalAuthors'=>[]]),['authors']);verify($review['after']['authors']===[],'empty canonical authors never revive imported names');$z=new ZipArchive();$z->open($p);$xml=$z->getFromName('OEBPS/content.opf');$z->close();verify(!str_contains($xml,'dc:creator'),'reviewed empty authors remove ordinary creator elements');}finally{unlink($p);}}
verify($writer->proposed(array_replace($item,['authorSyncStatus'=>0,'canonicalAuthors'=>[['name'=>'Second fixture'],['name'=>'First fixture']]]))['authors']===['Second fixture','First fixture'],'canonical author order is preserved');
echo "epub_writer_checks_complete=true\n";
