<?php
declare(strict_types=1);
require $argv[1] ?? __DIR__ . '/../../lib/Service/GuidedRuleValidator.php';
use OCA\Library\Service\GuidedRuleValidator as V;
function check(bool $value): void { if (!$value) throw new RuntimeException('Rule validation assertion failed'); }
$part = ['field' => 'author', 'split' => null, 'prefix' => '', 'suffix' => '', 'underscores' => false, 'mapFrom' => '', 'mapTo' => '', 'authorSeparator' => ';', 'reverseName' => true, 'authorSeparatorChoice' => 'semicolon'];
$rule = ['version' => 1, 'combineAuthors' => true, 'parts' => [$part]];
check(V::valid($rule));
foreach ([null, [], ['version' => 2] + $rule, ['combineAuthors' => 'true'] + $rule, ['parts' => []] + $rule, ['rootId' => 1] + $rule, ['parts' => array_fill(0, 65, $part)] + $rule] as $bad) check(!V::valid($bad));
foreach ([['field' => 'code'], ['prefix' => str_repeat('x', 101)], ['mapTo' => ['bad']], ['reverseName' => null], ['authorSeparator' => "\n"], ['evil' => 'code']] as $bad) check(!V::valid(['parts' => [$bad + $part]] + $rule));
$split = $part; $split['split'] = ['delimiter' => ' - ', 'occurrence' => 'last', 'children' => [$part, $part]];
check(V::valid(['parts' => [$split]] + $rule));
$bad = $split; $bad['split']['children'][] = $part; check(!V::valid(['parts' => [$bad]] + $rule));
check(!V::valid(['parts' => array_fill(0, 64, $split)] + $rule));
for ($i=0; $i<7; $i++) $part = ['field' => 'ignore', 'split' => ['delimiter' => ';', 'occurrence' => 'first', 'children' => [$part, ['field' => 'ignore']]]];
check(!V::valid(['parts' => [$part]] + $rule));
echo "guided_rule_validator_ok=true\n";
