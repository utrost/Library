<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Bounded declarative parser, shared semantics with the live browser preview. */
final class InferenceParser {
    private static function fail(string $status): array { return ['status' => $status, 'changes' => []]; }
    private static function trim(string $value): string { return preg_replace('/^[\s\x{FEFF}]+|[\s\x{FEFF}]+$/u', '', $value) ?? $value; }
    private static function language(string $value): string {
        $value = mb_strtolower($value);
        $value = ['english'=>'en','german'=>'de','deutsch'=>'de','french'=>'fr','français'=>'fr','arabic'=>'ar'][$value] ?? $value;
        return preg_replace_callback('/^([a-z]{2,3})-([a-z]{2})$/D', static fn($m) => $m[1].'-'.strtoupper($m[2]), $value);
    }
    private static function finish(array $captures, array $current): array {
        $changes = [];
        foreach ($captures as $field => $capture) {
            $values = $capture['values']; $value = implode('; ', $values);
            try { InferenceChangeSet::normalize([$field => $field === 'author' ? $values : $value]); }
            catch (\InvalidArgumentException) { return self::fail('invalid'); }
            $before = (string)($current[$field] ?? '');
            $same = $field === 'author' && isset($current['authors']) ? $values === $current['authors'] : $before === $value;
            $changes[] = ['field'=>$field,'raw'=>implode(' / ', $capture['raw']), 'value'=>$value,'values'=>$values,'before'=>$before,'previewOnly'=>false,
                'status'=>$same ? 'unchanged' : (self::trim($before) !== '' ? 'conflict' : 'ready')];
        }
        return ['status'=>in_array('conflict', array_column($changes,'status'),true) ? 'conflict' : (in_array('ready',array_column($changes,'status'),true) ? 'ready' : 'unchanged'), 'changes'=>$changes];
    }
    public static function pattern(string $path, string $pattern, array $current = []): array {
        if (!$pattern || mb_strlen($pattern)>1000 || mb_strlen($path)>2000 || preg_match('~%folders?%(?!/)~',$pattern)) return self::fail('invalid');
        $parts = preg_split('~(%folders%/|%[A-Za-z]+%)~',$pattern,-1,PREG_SPLIT_DELIM_CAPTURE|PREG_SPLIT_NO_EMPTY);
        $tokens = array_merge(array_keys(InferenceChangeSet::FIELDS),['ignore','folder','folders','extension']);
        $key = static fn($part) => $part === '%folders%/' ? 'folders' : substr($part,1,-1);
        $count=0;
        foreach ($parts as $part) { if (str_contains($part,'%') && !in_array($key($part),$tokens,true)) return self::fail('invalid'); if (str_starts_with($part,'%')) $count++; }
        if ($count>16 || preg_match('/%[A-Za-z]+%%[A-Za-z]+%/',$pattern)) return self::fail('invalid');
        $steps=0; $exhausted=false; $matches=[]; $length=mb_strlen($path);
        $visit = function(int $index,int $offset,array $captures) use (&$visit,&$steps,&$exhausted,&$matches,$parts,$path,$length,$key): void {
            if (++$steps>5000) { $exhausted=true; return; }
            if (count($matches)>1) return;
            if ($index===count($parts)) { if ($offset===$length) $matches[]=$captures; return; }
            $part=$parts[$index];
            if (!str_starts_with($part,'%')) { if (mb_substr($path,$offset,mb_strlen($part))===$part) $visit($index+1,$offset+mb_strlen($part),$captures); return; }
            $token=$key($part);
            if ($token==='folders') {
                $visit($index+1,$offset,$captures);
                for ($end=$offset;$end<$length && !$exhausted && count($matches)<2;$end++) if (mb_substr($path,$end,1)==='/') $visit($index+1,$end+1,$captures);
                return;
            }
            $stop=mb_strpos($path,'/',$offset); $limit=$stop===false ? $length : $stop;
            for ($end=$offset+1;$end<=$limit && !$exhausted && count($matches)<2;$end++) {
                $raw=mb_substr($path,$offset,$end-$offset);
                if ($token==='folder' && $end!==$limit) continue;
                if ($token==='extension' && !preg_match('/^[A-Za-z0-9]{1,12}$/D',$raw)) continue;
                $visit($index+1,$end,[...$captures,['key'=>$token,'raw'=>$raw]]);
            }
        };
        $visit(0,0,[]);
        if ($exhausted || count($matches)>1) return self::fail('ambiguous');
        if (!$matches) return self::fail('unmatched');
        $captures=[]; $seen=[];
        foreach ($matches[0] as $capture) {
            $field=$capture['key']; if (!isset(InferenceChangeSet::FIELDS[$field])) continue;
            $value=self::trim($capture['raw']);
            if (isset($seen[$field]) && $seen[$field]!==$value) return self::fail('ambiguous');
            if (isset($seen[$field])) continue;
            $seen[$field]=$value;
            if ($field==='language') $value=self::language($value);
            $captures[$field]=['values'=>[$value],'raw'=>[$capture['raw']]];
        }
        return self::finish($captures,$current);
    }
    public static function guided(string $path, array $rule, array $current = []): array {
        if (!$path || mb_strlen($path)>2000 || !GuidedRuleValidator::valid($rule)) return self::fail('invalid');
        $parts=explode('/',$path); $filename=array_pop($parts); $dot=mb_strrpos($filename,'.'); $parts[]=$dot!==false && $dot>0 ? mb_substr($filename,0,$dot) : $filename;
        if (count($parts)!==count($rule['parts'])) return self::fail('unmatched');
        $captures=[]; $failure='';
        $visit=function(string $raw,array $node) use (&$visit,&$captures,&$failure,$rule): void {
            if ($failure) return;
            if ($node['split']??null) {
                $split=$node['split']; $delimiter=$split['delimiter'];
                if ($split['occurrence']==='every') $pieces=explode($delimiter,$raw);
                else { $index=$split['occurrence']==='last' ? mb_strrpos($raw,$delimiter) : mb_strpos($raw,$delimiter); $pieces=$index===false ? [$raw] : [mb_substr($raw,0,$index),mb_substr($raw,$index+mb_strlen($delimiter))]; }
                if (count($pieces)!==count($split['children']) || count($pieces)<2) { $failure='unmatched'; return; }
                foreach ($pieces as $i=>$piece) $visit($piece,$split['children'][$i]);
                return;
            }
            $field=$node['field']; if ($field==='ignore') return;
            $value=self::trim($raw);
            foreach (['prefix','suffix'] as $affix) if ($node[$affix]??'') {
                if (!($affix==='prefix' ? str_starts_with($value,$node[$affix]) : str_ends_with($value,$node[$affix]))) { $failure='unmatched'; return; }
                $value=$affix==='prefix' ? mb_substr($value,mb_strlen($node[$affix])) : mb_substr($value,0,mb_strlen($value)-mb_strlen($node[$affix]));
            }
            if ($node['underscores']??false) $value=str_replace('_',' ',$value);
            $value=self::trim($value);
            if (($node['mapFrom']??'') && $value===$node['mapFrom']) $value=self::trim($node['mapTo']??'');
            if ($field==='language') $value=self::language($value);
            try { InferenceChangeSet::normalize([$field=>$field==='author' ? [$value] : $value]); }
            catch (\InvalidArgumentException) {
                // A combined author part may exceed a single name's limit before explicit splitting.
                if ($field!=='author' || !$value || mb_strlen($value)>1024 || preg_match('/[\x00-\x1f\x7f]/',$value)) { $failure='invalid'; return; }
            }
            $values=[$value];
            if ($field==='author') {
                $values=array_map(self::trim(...), ($node['authorSeparator']??'') ? explode($node['authorSeparator'],$value) : $values);
                if ($node['reverseName']??false) foreach ($values as &$name) {
                    $chunks=array_map(self::trim(...),explode(',',$name));
                    if (count($chunks)!==2 || in_array('',$chunks,true)) { $failure='invalid'; return; }
                    $name=$chunks[1].' '.$chunks[0];
                }
                unset($name);
                try { $values=AuthorNames::normalize($values); } catch (\InvalidArgumentException) { $failure='invalid'; return; }
            }
            if (isset($captures[$field])) {
                if ($field==='author' && $rule['combineAuthors']) { $captures[$field]['values']=array_values(array_unique([...$captures[$field]['values'],...$values],SORT_STRING)); $captures[$field]['raw'][]=$raw; }
                elseif ($captures[$field]['values']!==$values) $failure='ambiguous';
            } else $captures[$field]=['values'=>$values,'raw'=>[$raw]];
        };
        foreach ($parts as $i=>$part) $visit($part,$rule['parts'][$i]);
        return $failure ? self::fail($failure) : self::finish($captures,$current);
    }
    public static function run(string $path,array $definition,array $current=[],string $folder=''): array {
        if ($definition['mode']==='guided') return self::guided($path,$definition['rule'],$current);
        if ($definition['mode']==='pattern') return self::pattern($path,$definition['pattern'],$current);
        $full=($folder!=='' ? $folder.'/' : '').$path; $candidates=[];
        foreach ($definition['assignments'] as $entry) {
            if (!$entry['available'] || ($entry['folder']!=='' && !str_starts_with($full,$entry['folder'].'/'))) continue;
            $entry['relative']=$entry['folder']!=='' ? substr($full,strlen($entry['folder'])+1) : $full;
            if (!$entry['recursive'] && str_contains($entry['relative'],'/')) continue;
            $entry['depth']=$entry['folder']==='' ? 0 : count(explode('/',$entry['folder'])); $candidates[]=$entry;
        }
        usort($candidates,static fn($a,$b)=>$b['depth']<=>$a['depth'] ?: strcmp($a['id'],$b['id']));
        $attempts=[];
        foreach (array_unique(array_column($candidates,'depth')) as $depth) {
            $fields=[];
            foreach ($candidates as $entry) {
                if ($entry['depth']!==$depth) continue;
                $def=$entry['definition']; $result=$def['kind']==='guided' ? self::guided($entry['relative'],$def['rule'],$current) : self::pattern($entry['relative'],$def['pattern'],$current);
                $source=['id'=>$entry['id'],'name'=>$def['name'],'folder'=>$entry['folder']]; $attempts[]=$source+['status'=>$result['status']];
                if ($result['status']==='ambiguous') return self::fail('ambiguous')+['attempts'=>$attempts];
                if (!in_array($result['status'],['ready','conflict','unchanged'],true)) continue;
                foreach ($result['changes'] as $change) {
                    $key=json_encode($change['values'],JSON_THROW_ON_ERROR);
                    if (!isset($fields[$change['field']][$key])) $fields[$change['field']][$key]=$change+['sources'=>[]];
                    $fields[$change['field']][$key]['sources'][]=$source;
                }
            }
            if (!$fields) continue;
            $changes=[]; $conflicts=[];
            foreach ($fields as $field=>$values) { if (count($values)>1) $conflicts[]=['field'=>$field,'proposals'=>array_values($values)]; else $changes[]=array_values($values)[0]; }
            $status=$conflicts ? 'ambiguous' : (in_array('conflict',array_column($changes,'status'),true) ? 'conflict' : (in_array('ready',array_column($changes,'status'),true) ? 'ready' : 'unchanged'));
            return ['status'=>$status,'changes'=>$changes,'conflicts'=>$conflicts,'attempts'=>$attempts];
        }
        return self::fail('unmatched')+['attempts'=>$attempts];
    }
}
