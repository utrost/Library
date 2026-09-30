<?php
declare(strict_types=1);
require __DIR__.'/../../lib/Service/AuthorNames.php';
require __DIR__.'/../../lib/Service/InferenceChangeSet.php';
require __DIR__.'/../../lib/Service/GuidedRuleValidator.php';
require __DIR__.'/../../lib/Service/InferenceParser.php';
$vectors=json_decode(stream_get_contents(STDIN),true,512,JSON_THROW_ON_ERROR);
$output=[];
foreach ($vectors as $v) $output[]=\OCA\Library\Service\InferenceParser::run($v['path'],$v['definition'],$v['current']??[],$v['folder']??'');
echo json_encode($output,JSON_THROW_ON_ERROR|JSON_UNESCAPED_UNICODE);
