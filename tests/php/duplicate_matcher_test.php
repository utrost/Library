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

// Same series is not the same book. Keep independent identity evidence.
$a=['id'=>1,'revision'=>'a','fileId'=>10,'title'=>'The Damnation of Charlie Wormwood 004 (2013) (Blanch, Carr, Chee - digital)','authors'=>['Blanch, Carr, Chee'],'isbn'=>[],'size'=>100,'format'=>'cbz','language'=>'','publicationDate'=>'','publisher'=>'','hash'=>''];
$b=$a;$b['id']=2;$b['title']='The Damnation of Charlie Wormwood v02 008 (2014) (Blanch, Carr, Chee - digital)';
check(M::titleSimilarity($a['title'],$b['title'])>=.86,'Reported example previously crossed fuzzy threshold');
check(M::evidence($a,$b)['reasons']===[],'Reported different comic issues excluded');
$b['title']='The Damnation of Charlie Wormwood 4 (2014) (Blanch, Carr, Chee - digital)';
check(in_array('similar_title_author',M::evidence($a,$b)['reasons'],true),'Leading zero and publication year do not distinguish same issue');
foreach ([
 ['A Long Running Series vol. 01 issue 4','A Long Running Series vol. 02 issue 4',false],
 ['A Long Running Series v01 004','A Long Running Series v02 004',false],
 ['A Long Running Series #004','A Long Running Series #008',false],
 ['A Long Running Series Book 1','A Long Running Series Book 2',false],
 ['A Long Running Series Part 1','A Long Running Series Part 2',false],
 ['A Long Running Series 2.5','A Long Running Series 2.6',false],
 ['A Long Running Series 002.50','A Long Running Series 2.5',true],
 ['A Long Running Series (2013)','A Long Running Series (2014)',true],
 ['A Long Running Series 2013','A Long Running Series 2014',true],
 ['The Extremely Long Name of a Running Comic Series vol. 1','The Extremely Long Name of a Running Comic Series',true],
] as [$left,$right,$match]) {
 $a['title']=$left;$b['title']=$right;
 check((M::evidence($a,$b)['reasons']!==[])===$match,'Numbering: '.$left.' / '.$right);
 check(M::evidence($a,$b)===M::evidence($b,$a),'Symmetric evidence');
}
$a['title']=$b['title']='A Long Running Series';$a['series']=$b['series']='Example series';
foreach ([['01','1.0',true],['2.5','2.50',true],['0','1',false],['1','2',false],['Volume I','Volume II',false],['','2',true]] as [$left,$right,$match]) {
 $a['seriesNumber']=$left;$b['seriesNumber']=$right;
 check((M::evidence($a,$b)['reasons']!==[])===$match,'Stored series positions: '.$left.' / '.$right);
}
$a['seriesNumber']='1';$b['seriesNumber']='2';
$b['isbn']=$a['isbn']=['9780141182971'];
check(M::evidence($a,$b)['reasons']===['isbn'],'ISBN survives conflicting numbering');
$b['isbn']=$a['isbn']=[];$b['hash']=$a['hash']='same';
check(M::evidence($a,$b)['reasons']===['identical'],'Identical content survives conflicting numbering');
$before=M::hintSignature($a,$b);$b['seriesNumber']='3';
check(M::hintSignature($a,$b)!==$before,'Series edits invalidate suggestion decisions');
echo "Duplicate matcher: $n assertions passed\n";
