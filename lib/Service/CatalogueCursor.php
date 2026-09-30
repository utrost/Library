<?php
declare(strict_types=1);
namespace OCA\Library\Service;

/** Bounded navigation anchor; every query still applies ownership and all active filters. */
final class CatalogueCursor {
    private static function context(string $uid, array $filters, int $limit): string {
        ksort($filters);
        return hash('sha256', $uid . '|' . $limit . '|' . json_encode($filters, JSON_THROW_ON_ERROR));
    }
    public static function encode(string $uid, array $filters, int $limit, array $row, string $direction): string {
        $value=['title'=>(string)$row['title'],'id'=>(int)$row['id'],'direction'=>$direction,'context'=>self::context($uid,$filters,$limit)];
        return rtrim(strtr(base64_encode(json_encode($value,JSON_THROW_ON_ERROR|JSON_UNESCAPED_UNICODE)),'+/','-_'),'=');
    }
    public static function decode(string $token, string $uid, array $filters, int $limit): ?array {
        if ($token==='' || strlen($token)>4096 || !preg_match('/^[a-zA-Z0-9_-]+$/D',$token)) return null;
        try {
            $value=json_decode(base64_decode(strtr($token,'-_','+/'),true)?:'',true,8,JSON_THROW_ON_ERROR);
            if (!is_array($value) || !is_string($value['title']??null) || mb_strlen($value['title'])>1024 || !is_int($value['id']??null) || $value['id']<=0 || !in_array($value['direction']??null,['next','previous'],true) || ($value['context']??'')!==self::context($uid,$filters,$limit)) return null;
            return $value;
        } catch (\Throwable) {return null;}
    }
}
