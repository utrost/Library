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
    public static function evidence(array $a,array $b): array {
        $reasons=[]; $flags=[];
        if (($a['hash']??'')!=='' && ($a['hash']??null)===($b['hash']??null)) $reasons[]='identical';
        if (array_intersect($a['isbn'],$b['isbn'])) $reasons[]='isbn';
        $sameAuthors=self::authors($a)!==[] && self::authors($a)===self::authors($b);
        $similarity=self::titleSimilarity($a['title'],$b['title']);
        if ($sameAuthors && $similarity>=0.86) $reasons[]=$similarity===1.0 ? 'title_author' : 'similar_title_author';
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
    /** Suggestions depend on matching metadata, not unrelated reading state or notes. */
    public static function hintSignature(array $a,array $b): string {
        $values=[];
        foreach([$a,$b] as $book){$value=[];foreach(['fileId','title','authors','language','publicationDate','publisher','isbn','format'] as $field)$value[$field]=$book[$field];$values[$book['id']]=$value;}
        ksort($values,SORT_NUMERIC);return hash('sha256',json_encode($values,JSON_THROW_ON_ERROR));
    }
}
