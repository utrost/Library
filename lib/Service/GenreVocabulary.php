<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Small opt-in vocabulary. Stable keys and English canonical labels; no copied descriptions. */
final class GenreVocabulary {
    public const ENTRIES = [
        'fiction'=>['Fiction',null],
        'literary-fiction'=>['Literary fiction','fiction'],
        'historical-fiction'=>['Historical fiction','fiction'],
        'adventure'=>['Adventure','fiction'],
        'mystery'=>['Mystery','fiction'],
        'cozy-mystery'=>['Cozy mystery','mystery'],
        'detective-fiction'=>['Detective fiction','mystery'],
        'thriller'=>['Thriller','fiction'],
        'psychological-thriller'=>['Psychological thriller','thriller'],
        'spy-fiction'=>['Spy fiction','thriller'],
        'fantasy'=>['Fantasy','fiction'],
        'high-fantasy'=>['High fantasy','fantasy'],
        'urban-fantasy'=>['Urban fantasy','fantasy'],
        'dark-fantasy'=>['Dark fantasy','fantasy'],
        'science-fiction'=>['Science fiction','fiction'],
        'space-opera'=>['Space opera','science-fiction'],
        'hard-science-fiction'=>['Hard science fiction','science-fiction'],
        'cyberpunk'=>['Cyberpunk','science-fiction'],
        'dystopian-fiction'=>['Dystopian fiction','science-fiction'],
        'horror'=>['Horror','fiction'],
        'gothic-horror'=>['Gothic horror','horror'],
        'cosmic-horror'=>['Cosmic horror','horror'],
        'romance'=>['Romance','fiction'],
        'historical-romance'=>['Historical romance','romance'],
        'contemporary-romance'=>['Contemporary romance','romance'],
        'western'=>['Western','fiction'],
        'nonfiction'=>['Non-fiction',null],
        'biography'=>['Biography','nonfiction'],
        'memoir'=>['Memoir','biography'],
        'history'=>['History','nonfiction'],
        'travel'=>['Travel','nonfiction'],
        'self-help'=>['Self-help','nonfiction'],
        'true-crime'=>['True crime','nonfiction'],
        'cookbook'=>['Cookbook','nonfiction'],
    ];
    public static function all(): array {
        $out=[];
        foreach (self::ENTRIES as $key=>[$name,$parent]) $out[]=['key'=>$key,'name'=>$name,'parent'=>$parent===null ? null : self::ENTRIES[$parent][0]];
        return $out;
    }
}
