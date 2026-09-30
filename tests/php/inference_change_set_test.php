<?php
declare(strict_types=1);
require __DIR__.'/../../lib/Service/AuthorNames.php';
require __DIR__.'/../../lib/Service/InferenceChangeSet.php';
use OCA\Library\Service\InferenceChangeSet as Changes;
function check(bool $ok): void { if (!$ok) throw new RuntimeException('Assertion failed'); }
check(Changes::normalize(['seriesNumber'=>' 01 ','genre'=>'Science fiction','language'=>'en-us','year'=>'2011'])===['seriesNumber'=>'01','genre'=>'Science fiction','language'=>'en-US','year'=>'2011']);
check(Changes::normalize(['subject'=>'Science; history'])['subject']==='["Science; history"]');
check(Changes::display('subject','["Science; history"]')==='Science; history');
foreach ([null,[],['author'=>'Joe'],['title'=>''],['genre'=>true],['seriesNumber'=>str_repeat('x',65)],['title'=>"bad\ntext"],['title'=>"\xff"],['language'=>'english'],['year'=>'0000'],['title'=>str_repeat('x',513)],['id'=>'1']] as $invalid) {
    try { Changes::normalize($invalid); throw new RuntimeException('Accepted invalid proposal'); } catch (InvalidArgumentException) {}
}
check(Changes::fingerprint(['b'=>'x','a'=>null])===Changes::fingerprint(['a'=>null,'b'=>'x']));
check(Changes::fingerprint(['a'=>'A'])!==Changes::fingerprint(['a'=>'a']));
check(Changes::normalize(['author'=>['Abercrombie, Joe','Elizabeth Bear','Abercrombie, Joe']])['author']==='["Abercrombie, Joe","Elizabeth Bear"]');
check(Changes::sourceField('year')==='publicationDate');
echo "inference_change_set_ok=true fields=true boundaries=true authors_validated=true exact_revision=true\n";
