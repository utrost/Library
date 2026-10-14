<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Candidate evidence only: normalization never edits publication metadata. */
final class DuplicateMatcher {
    public static function text(string $value): string {
        if (class_exists(\Normalizer::class)) $value=\Normalizer::normalize($value,\Normalizer::FORM_KC) ?: $value;
        return trim(preg_replace('/[^\p{L}\p{N}]+/u',' ',mb_strtolower($value)) ?? '');
    }
    public static function author(string $name): string {
        $words=explode(' ',self::text($name)); sort($words,SORT_STRING);
        return implode(' ',$words);
    }
    private static function authors(array $book): array {
        $names=array_values(array_unique(array_filter(array_map(self::author(...),$book['authors'])))); sort($names,SORT_STRING); return $names;
    }
    private static function authorIds(array $book): ?array {
        if (!array_key_exists('authorIds',$book) || !is_array($book['authorIds'])) return null;
        $ids=array_values(array_unique(array_map('intval',$book['authorIds'])));
        $ids=array_values(array_filter($ids,static fn($id)=>$id>0));sort($ids,SORT_NUMERIC);return $ids;
    }
    private static function sameAuthors(array $a,array $b): bool {
        $left=self::authorIds($a);$right=self::authorIds($b);
        if ($left!==null && $right!==null) {
            if ($left!==[] && $left===$right) return true;
            // A reviewed reassignment is an explicit decision to keep these
            // identities apart. Imported names remain tentative evidence.
            if (!empty($a['authorManual']) || !empty($b['authorManual'])) return false;
        }
        return self::authors($a)!==[] && self::authors($a)===self::authors($b);
    }
    public static function keys(array $book,bool $contents): array {
        $keys=[];
        foreach (array_slice($book['isbn'],0,4) as $isbn) $keys[]='i:'.hash('sha256',$isbn);
        $words=array_values(array_unique(array_filter(explode(' ',self::text($book['title'])),static fn($word)=>mb_strlen($word)>=3)));
        usort($words,static fn($a,$b)=>mb_strlen($b)<=>mb_strlen($a) ?: strcmp($a,$b));
        foreach (array_slice(self::authors($book),0,3) as $author) {
            $title=self::text($book['title']);
            if ($title!=='') $keys[]='m:'.hash('sha256',$author.'|='.$title);
            foreach (array_slice($words,0,3) as $word) $keys[]='m:'.hash('sha256',$author.'|'.$word);
        }
        foreach (array_slice(self::authorIds($book)??[],0,3) as $authorId) {
            $title=self::text($book['title']);
            if ($title!=='') $keys[]='a:'.hash('sha256',$authorId.'|='.$title);
            foreach (array_slice($words,0,3) as $word) $keys[]='a:'.hash('sha256',$authorId.'|'.$word);
        }
        if ($contents && $book['size']>0) $keys[]='s:'.hash('sha256',(string)$book['size']);
        return array_values(array_unique($keys));
    }
    public static function titleSimilarity(string $a,string $b): float {
        $a=self::text($a); $b=self::text($b);
        if ($a==='' || $b==='') return 0;
        if ($a===$b) return 1;
        $left=array_unique(explode(' ',$a)); $right=array_unique(explode(' ',$b));
        $dice=2*count(array_intersect($left,$right))/(count($left)+count($right));
        // Character distance helps small spelling differences, bounded to short titles.
        $edit=0;
        if (strlen($a)<=512 && strlen($b)<=512 && min(mb_strlen($a),mb_strlen($b))>=8) $edit=1-levenshtein($a,$b)/max(strlen($a),strlen($b));
        return max($dice,$edit);
    }
    /** Normalize positions without losing decimal precision or treating 01 as a different issue. */
    private static function position(string $value): string {
        $value=trim(mb_strtolower($value));
        if (preg_match('/^([0-9]+)(?:\.([0-9]+))?$/D',$value,$parts)) {
            $integer=ltrim($parts[1],'0') ?: '0';
            $fraction=rtrim($parts[2]??'','0');
            return $integer.($fraction!=='' ? '.'.$fraction : '');
        }
        return self::text($value);
    }
    /** Extract only numbering clues; dates and release credits are not issue identities. */
    private static function numbering(array $book): array {
        $title=mb_strtolower((string)$book['title']);
        // Filenames often become titles, including a year followed by scan/release credits.
        $title=preg_replace('/\s*[([](?:18|19|20)[0-9]{2}[)\]].*$/u','',$title) ?? $title;
        $result=[];
        $number='([0-9]+(?:\.[0-9]+)?)';
        $patterns=[
            'volume'=>'/(?<![\p{L}\p{N}])(?:v|vol(?:ume)?)[.\s]*'.$number.'(?![\p{L}\p{N}])/u',
            'issue'=>'/(?<![\p{L}\p{N}])(?:issue|no|number|book|part|#)[.\s]*'.$number.'(?![\p{L}\p{N}])/u',
        ];
        foreach ($patterns as $kind=>$pattern) {
            if (preg_match($pattern,$title,$match)) $result[$kind]=self::position($match[1]);
            $title=preg_replace($pattern,' ',$title) ?? $title;
        }
        // A trailing number is the usual bare comic issue / series position.
        if (!isset($result['issue']) && preg_match('/(?<![\p{L}\p{N}])'.$number.'\s*$/u',$title,$match)
            && !preg_match('/^(?:18|19|20)[0-9]{2}$/D',$match[1])) {
            $result['issue']=self::position($match[1]);
        }
        return $result;
    }
    private static function conflictingParts(array $a,array $b): bool {
        $seriesA=self::text((string)($a['series']??''));
        $seriesB=self::text((string)($b['series']??''));
        $partA=self::position((string)($a['seriesNumber']??''));
        $partB=self::position((string)($b['seriesNumber']??''));
        if ($seriesA!=='' && $seriesA===$seriesB && $partA!=='' && $partB!=='' && $partA!==$partB) return true;
        $left=self::numbering($a); $right=self::numbering($b);
        foreach (['volume','issue'] as $kind) {
            if (isset($left[$kind],$right[$kind]) && $left[$kind]!==$right[$kind]) return true;
        }
        return false;
    }
    public static function evidence(array $a,array $b): array {
        $reasons=[]; $flags=[];
        if (($a['hash']??'')!=='' && ($a['hash']??null)===($b['hash']??null)) $reasons[]='identical';
        if (array_intersect($a['isbn'],$b['isbn'])) $reasons[]='isbn';
        $sameAuthors=self::sameAuthors($a,$b);
        $similarity=self::titleSimilarity($a['title'],$b['title']);
        if ($sameAuthors && $similarity>=0.86 && !self::conflictingParts($a,$b)) $reasons[]=$similarity===1.0 ? 'title_author' : 'similar_title_author';
        if ($a['format']!==$b['format']) $flags[]='formats';
        if ($a['language']!=='' && $b['language']!=='' && explode('-',strtolower($a['language']))[0]!==explode('-',strtolower($b['language']))[0]) $flags[]='languages';
        if ($a['publicationDate']!=='' && $b['publicationDate']!=='' && substr($a['publicationDate'],0,4)!==substr($b['publicationDate'],0,4)) $flags[]='years';
        if ($a['publisher']!=='' && $b['publisher']!=='' && self::text($a['publisher'])!==self::text($b['publisher'])) $flags[]='publishers';
        if ($a['isbn'] && $b['isbn'] && !array_intersect($a['isbn'],$b['isbn'])) $flags[]='identifiers';
        return ['reasons'=>$reasons,'flags'=>$flags];
    }
    public static function signature(array $a,array $b): string {
        $items=[$a['id']=>$a['revision'],$b['id']=>$b['revision']]; ksort($items,SORT_NUMERIC);
        return hash('sha256',json_encode($items,JSON_THROW_ON_ERROR));
    }
    /** Existing decisions remain valid when upgrading the evidence schema. */
    public static function hintMatches(string $signature,array $a,array $b): bool {
        if (hash_equals($signature,self::hintSignature($a,$b))) return true;
        // Older decisions remain valid across a pure relationship backfill.
        // Explicit author changes remove affected hints in the same transaction.
        return hash_equals($signature,self::hintSignature($a,$b,false))
            || hash_equals($signature,self::legacyHintSignature($a,$b,true))
            || hash_equals($signature,self::legacyHintSignature($a,$b,false));
    }
    /** Suggestions depend on matching metadata, not unrelated reading state or notes. */
    public static function hintSignature(array $a,array $b,bool $includeSeries=true): string {
        $values=[];
        $fields=['fileId','title','authors','authorIds','authorManual','language','publicationDate','publisher','isbn','format'];
        if ($includeSeries) array_push($fields,'series','seriesNumber');
        foreach([$a,$b] as $book){$value=[];foreach($fields as $field)$value[$field]=$book[$field]??'';$values[$book['id']]=$value;}
        ksort($values,SORT_NUMERIC);return hash('sha256',json_encode($values,JSON_THROW_ON_ERROR));
    }
    private static function legacyHintSignature(array $a,array $b,bool $includeSeries): string {
        $values=[];$fields=['fileId','title','authors','language','publicationDate','publisher','isbn','format'];
        if ($includeSeries) array_push($fields,'series','seriesNumber');
        foreach([$a,$b] as $book){$value=[];foreach($fields as $field)$value[$field]=$book[$field]??'';$values[$book['id']]=$value;}
        ksort($values,SORT_NUMERIC);return hash('sha256',json_encode($values,JSON_THROW_ON_ERROR));
    }
}
