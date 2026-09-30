<?php
declare(strict_types=1);
require __DIR__.'/../../lib/Service/DuplicateMatcher.php';
use OCA\Library\Service\DuplicateMatcher as M;
$n=0;function check(bool $ok,string $why):void {global $n;if(!$ok)throw new RuntimeException($why);$n++;}
$a=['id'=>1,'revision'=>'a','title'=>'The Secret Life of Walter Mitty','authors'=>['Walter Mitty'],'isbn'=>[],'size'=>100,'format'=>'epub','language'=>'en','publicationDate'=>'2011','publisher'=>'Publisher','hash'=>''];
$b=$a;$b['id']=2;$b['revision']='b';$b['authors']=['Mitty, Walter'];$b['format']='pdf';
check(M::evidence($a,$b)['reasons']===['title_author'],'Name inversion matches');
check(M::evidence($a,$b)['flags']===['formats'],'EPUB/PDF shown as alternative formats');
check(count(array_intersect(M::keys($a,false),M::keys($b,false)))>0,'Candidate lookup finds reversed author');
$b['title']='The Secret Life of Walter Mitty!';check(M::evidence($a,$b)['reasons']===['title_author'],'Punctuation normalized');
$b['title']='The Secret Life of Walter Mity';check(M::evidence($a,$b)['reasons']===['similar_title_author'],'Small spelling difference');
$b['authors']=['Someone Else'];check(M::evidence($a,$b)['reasons']===[],'Similar title needs same authors');
$b['isbn']=$a['isbn']=['9780141182971'];check(M::evidence($a,$b)['reasons']===['isbn'],'ISBN independent evidence');
$b['isbn']=[];$a['isbn']=[];$b['hash']=$a['hash']='abc';check(M::evidence($a,$b)['reasons']===['identical'],'Hash independent evidence');
$b['hash']='xyz';check(M::evidence($a,$b)['reasons']===[],'Different contents not exact duplicates');
$b=$a;$a['hash']='';$b['hash']='';$b['language']='de';$b['publicationDate']='2024';$b['publisher']='Another';$b['isbn']=['9780141182971'];$a['isbn']=['9780141182985'];check(M::evidence($a,$b)['flags']===['languages','years','publishers','identifiers'],'Edition warnings');
$a['authors']=['Abercrombie, Joe'];$b['authors']=['Abercrombie','Joe'];$a['isbn']=$b['isbn']=[];check(M::evidence($a,$b)['reasons']===[],'Comma never implies multiple authors');
$a['authors']=['Ada Quill','Walter Mitty'];$b['authors']=['Mitty, Walter','Quill, Ada'];check(M::evidence($a,$b)['reasons']===['title_author'],'Author lists matched without editing order');
check(M::signature($a,$b)===M::signature($b,$a),'Stable pair identity');$b['revision']='new';check(M::signature($a,$b)!==M::signature($a,[...$b,'revision'=>'b']),'Changed books require new decision');
check(M::titleSimilarity('','')===0.0,'No empty title match');check(M::titleSimilarity('Cat','Car')<.86,'No fuzzy short titles');
check(M::author('Émile Zola')===M::author('Zola, Émile'),'Unicode names');
check(count(M::keys($a,true))===count(M::keys($a,false))+1,'Content candidates opt in');
$a['title']=$b['title']='It';$a['authors']=$b['authors']=['Stephen King'];check(count(array_intersect(M::keys($a,false),M::keys($b,false)))>0,'Exact short titles have candidate keys');
echo "Duplicate matcher: $n assertions passed\n";
