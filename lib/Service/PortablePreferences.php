<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\{IConfig,IDBConnection};
/** Explicit allowlist: credentials, access grants, cron state and cached responses cannot enter an archive. */
final class PortablePreferences {
    public function __construct(private IConfig $config,private IDBConnection $db,private \OCP\Files\IRootFolder $files) {}
    private function supported(string $key): bool { return in_array($key,['metadata_lookup_provider','dashboard_preferences'],true) || preg_match('/^inference_(?:pattern|folder_rule)_[a-f0-9]{32}$/D',$key)===1 || preg_match('/^inference_hidden_preset-[a-z-]{1,64}$/D',$key)===1; }
    public function entries(string $uid): array {
        $keys=array_values(array_filter($this->config->getUserKeys($uid,'library'),fn($key)=>$this->supported($key)));sort($keys,SORT_STRING);$entries=[];
        foreach($keys as $key) {
            $value=$this->config->getUserValue($uid,'library',$key,'');if (strlen($value)>32768) throw new \LengthException('preference_limit');
            $data=['key'=>$key,'value'=>$value];
            if (str_starts_with($key,'inference_folder_rule_')) {
                $rule=json_decode($value,true);$r=$this->db->executeQuery('SELECT path FROM *PREFIX*library_roots WHERE user_id=? AND id=?',[$uid,$rule['rootId'] ?? 0]);$root=$r->fetchOne();$r->closeCursor();$data['rootPath']=$root===false ? null : $root;
            }
            $entries[]=$data;
        }
        return $entries;
    }
    public function restore(string $uid,array $data,string $namespace,callable $listTarget): void {
        $key=$data['key'] ?? null;$raw=$data['value'] ?? null;
        if (!is_string($key) || !$this->supported($key) || !is_string($raw) || strlen($raw)>32768) throw new \InvalidArgumentException('preference');
        if ($key==='metadata_lookup_provider') { if (!in_array($raw,['openlibrary','googlebooks'],true)) throw new \InvalidArgumentException('provider'); }
        elseif ($key==='dashboard_preferences') {
            $v=json_decode($raw,true,16,JSON_THROW_ON_ERROR);if (!is_array($v) || !is_array($v['widgets'] ?? null) || array_diff($v['widgets'],['recent','upNext','changed','finished','rediscover','health'])) throw new \InvalidArgumentException('dashboard');
            $v['listId']=empty($v['listId']) ? 0 : $listTarget($v['listId']);$raw=json_encode($v,JSON_THROW_ON_ERROR);
        } elseif (str_starts_with($key,'inference_hidden_')) { if ($raw!=='1') throw new \InvalidArgumentException('hidden_pattern'); }
        else {
            $v=json_decode($raw,true,32,JSON_THROW_ON_ERROR);if (!is_array($v) || ($v['version'] ?? null)!==1) throw new \InvalidArgumentException('pattern_version');
            if (str_starts_with($key,'inference_folder_rule_')) {
                $this->definition($v['definition'] ?? null);$folder=InferenceFolderRuleStore::folder($v['folder'] ?? null);if ($folder===null || !is_string($data['rootPath'] ?? null)) throw new \InvalidArgumentException('folder_rule');
                $r=$this->db->executeQuery('SELECT id FROM *PREFIX*library_roots WHERE user_id=? AND path=? ORDER BY id LIMIT 2',[$uid,$data['rootPath']]);$roots=$r->fetchAll();$r->closeCursor();if (count($roots)!==1) throw new \DomainException('destination_shelf_required');
                $home=$this->files->getUserFolder($uid);$rootPath=ltrim($data['rootPath'],'/');
                $root=$rootPath==='' ? $home : $home->get($rootPath);
                if (!$root instanceof \OCP\Files\Folder) throw new \DomainException('destination_folder_required');
                $node=$folder==='' ? $root : $root->get($folder);
                if (!$root instanceof \OCP\Files\Folder || !$node instanceof \OCP\Files\Folder || !$root->isReadable() || !$node->isReadable()) throw new \DomainException('destination_folder_required');
                $v['rootId']=(int)$roots[0]['id'];$v['rootFileId']=$root->getId();$v['folderFileId']=$node->getId();$v['folder']=$folder;
            } else $this->definition($v);
            $key=substr($key,0,-32).substr(hash('sha256',$namespace.'\0'.$key),0,32);$raw=json_encode($v,JSON_THROW_ON_ERROR);
        }
        $existing=$this->config->getUserValue($uid,'library',$key,'');
        if ($existing!=='' && $existing!==$raw) throw new \DomainException('existing_preference_differs');
        $this->config->setUserValue($uid,'library',$key,$raw);
    }
    private function definition(mixed $v): void {
        if (!is_array($v) || !is_string($v['name'] ?? null) || trim($v['name'])==='' || mb_strlen($v['name'])>120 || preg_match('/[\p{Cc}]/u',$v['name'])) throw new \InvalidArgumentException('pattern');
        if (($v['kind'] ?? 'pattern')==='guided') { if (!GuidedRuleValidator::valid($v['rule'] ?? null)) throw new \InvalidArgumentException('rule');return; }
        if (($v['kind'] ?? 'pattern')!=='pattern' || !is_string($v['pattern'] ?? null) || trim($v['pattern'])==='' || mb_strlen($v['pattern'])>1000 || preg_match('/[\p{Cc}]/u',$v['pattern'])) throw new \InvalidArgumentException('pattern');
        $pattern=$v['pattern'];preg_match_all('/%[A-Za-z]+%/',$pattern,$matches);
        if (count($matches[0])>16 || str_contains(preg_replace('/%[A-Za-z]+%/','',$pattern),'%') || preg_match('/%[A-Za-z]+%%[A-Za-z]+%/',$pattern) || preg_match('~%folders?%(?!/)~',$pattern)) throw new \InvalidArgumentException('pattern');
        foreach($matches[0] as $token) if (!in_array(trim($token,'%'),['title','subtitle','author','series','seriesNumber','language','publisher','subject','year','genre','isbn','ignore','folder','folders','extension'],true)) throw new \InvalidArgumentException('placeholder');
    }
}
