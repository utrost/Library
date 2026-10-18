<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Conservative conversion of familiar source labels to stable catalogue codes. */
final class LanguageNormalizer {
    private const NAMES = [
        'arabic'=>'ar', 'arabisch'=>'ar', 'chinese'=>'zh', 'chinesisch'=>'zh',
        'danish'=>'da', 'dänisch'=>'da', 'dutch'=>'nl', 'niederländisch'=>'nl',
        'english'=>'en', 'englisch'=>'en', 'finnish'=>'fi', 'finnisch'=>'fi',
        'french'=>'fr', 'français'=>'fr', 'francais'=>'fr', 'französisch'=>'fr',
        'german'=>'de', 'deutsch'=>'de', 'greek'=>'el', 'griechisch'=>'el',
        'hindi'=>'hi', 'italian'=>'it', 'italiano'=>'it', 'italienisch'=>'it',
        'japanese'=>'ja', 'japanisch'=>'ja', 'korean'=>'ko', 'koreanisch'=>'ko',
        'norwegian'=>'no', 'norwegisch'=>'no', 'polish'=>'pl', 'polnisch'=>'pl',
        'portuguese'=>'pt', 'português'=>'pt', 'portugiesisch'=>'pt',
        'russian'=>'ru', 'russisch'=>'ru', 'spanish'=>'es', 'español'=>'es', 'spanisch'=>'es',
        'swedish'=>'sv', 'schwedisch'=>'sv', 'turkish'=>'tr', 'türkisch'=>'tr',
        'ukrainian'=>'uk', 'ukrainisch'=>'uk',
    ];
    private const ALIASES = [
        'eng'=>'en', 'deu'=>'de', 'ger'=>'de', 'fra'=>'fr', 'fre'=>'fr',
        'spa'=>'es', 'ita'=>'it', 'zho'=>'zh', 'chi'=>'zh', 'nld'=>'nl',
        'dut'=>'nl', 'jpn'=>'ja', 'ara'=>'ar', 'por'=>'pt', 'rus'=>'ru',
    ];

    public static function normalize(string $raw): ?string {
        $raw = trim($raw);
        if ($raw === '') return null;
        $parts = preg_split('/[;,\r\n]+/u', $raw);
        if ($parts === false) return null;
        $codes = [];
        foreach ($parts as $part) {
            $value = trim($part);
            if ($value === '') continue;
            $folded = mb_strtolower($value, 'UTF-8');
            if (isset(self::NAMES[$folded])) $code = self::NAMES[$folded];
            elseif (preg_match('/^([a-z]{2,3})(?:[-_]([a-z]{2}))?$/iD', $value, $match) === 1) {
                $base = strtolower($match[1]);
                $canonicalBase = self::ALIASES[$base] ?? $base;
                $languageName = \Locale::getDisplayLanguage($canonicalBase, 'en');
                if ($languageName === '' || strtolower($languageName) === $canonicalBase || $languageName === 'Unknown language') return null;
                if (isset($match[2])) {
                    $region = strtoupper($match[2]);
                    $regionName = \Locale::getDisplayRegion('und-' . $region, 'en');
                    if ($regionName === '' || strtoupper($regionName) === $region || $regionName === 'Unknown Region') return null;
                }
                $code = $canonicalBase . (isset($match[2]) ? '-' . strtoupper($match[2]) : '');
            } else return null;
            if (!in_array($code, $codes, true)) $codes[] = $code;
        }
        $joined = implode('; ', $codes);
        return $joined !== '' && strlen($joined) <= 64 ? $joined : null;
    }

    public static function reviewedCodes(string $input): string {
        $normalized = self::normalize($input);
        if ($normalized === null || !preg_match('/^[a-z]{2,3}(?:-[A-Z]{2})?(?:; [a-z]{2,3}(?:-[A-Z]{2})?)*$/D', $normalized)) {
            throw new \InvalidArgumentException('language_codes');
        }
        return $normalized;
    }
}
