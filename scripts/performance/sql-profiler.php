<?php
/** Benchmark-only DBAL3 adapter. Loaded temporarily on the developer instance, never packaged. */
class LibraryBenchmarkSql implements \Doctrine\DBAL\Logging\SQLLogger {
    public array $groups=[];
    public int $count=0;
    public int $derivedIndexWrites=0;
    public float $ms=0;
    private array $stack=[];
    public array $examples=[];
    public function startQuery($sql, ?array $params=null, ?array $types=null) {
        if(preg_match('/^\s*(?:INSERT\s+INTO|DELETE\s+FROM|UPDATE)\s+[`"]?[^\s`"]*library_(?:item_facets|item_search_grams|item_identifiers|dup_index|dup_terms)\b/i',$sql))$this->derivedIndexWrites++;
        $shape=preg_replace("/'(?:''|[^'])*'/s", '?', $sql);
        $shape=preg_replace('/\b\d+\b/', '?', $shape);
        $shape=preg_replace('/\?(?:\s*,\s*\?)+/', '?…', $shape);
        $shape=preg_replace('/\s+/', ' ', trim($shape));
        $key=hash('sha256',$shape);
        $this->stack[]=[hrtime(true),$key,$shape,$sql,$params??[],$types??[]];
    }
    public function stopQuery() {
        if(!$this->stack)return;
        [$start,$key,$shape,$sql,$params,$types]=array_pop($this->stack);
        $ms=(hrtime(true)-$start)/1e6;$this->count++;$this->ms+=$ms;
        if(!isset($this->groups[$key])&&count($this->groups)<400)$this->groups[$key]=['shape'=>$shape,'count'=>0,'ms'=>0,'maxMs'=>0];
        if(isset($this->groups[$key])){$g=&$this->groups[$key];$g['count']++;$g['ms']+=$ms;$g['maxMs']=max($ms,$g['maxMs']);unset($g);}
        // Parameters remain process-local and are used only for EXPLAIN; never serialized.
        if(preg_match('/^\s*SELECT\b/i',$sql)){
            if(!isset($this->examples[$key])||$ms>$this->examples[$key]['ms'])$this->examples[$key]=compact('sql','params','types','ms');
            if(count($this->examples)>20){uasort($this->examples,fn($a,$b)=>$b['ms']<=>$a['ms']);$this->examples=array_slice($this->examples,0,20,true);}
        }
    }
    public function summary($connection,bool $explain=false):array {
        $groups=$this->groups;uasort($groups,fn($a,$b)=>$b['ms']<=>$a['ms']);$plans=[];
        if($explain&&$connection->getDatabasePlatform()->getName()==='mysql'){
            foreach(array_slice($groups,0,5,true) as $key=>$group){if(!isset($this->examples[$key]))continue;$e=$this->examples[$key];
                try{$rows=$connection->executeQuery('EXPLAIN '.$e['sql'],$e['params'],$e['types'])->fetchAllAssociative();$plans[]=['shape'=>$group['shape'],'plan'=>$rows];}catch(\Throwable $error){$plans[]=['shape'=>$group['shape'],'errorClass'=>get_class($error)];}
            }
        }
        return ['count'=>$this->count,'ms'=>$this->ms,'shapes'=>array_values(array_slice($groups,0,30)),'plans'=>$plans];
    }
}
function libraryBenchmarkConnection():object {
    $db=\OC::$server->get(\OCP\IDBConnection::class);
    if(method_exists($db,'getConfiguration'))return $db;
    // Explicit compatibility adapter for NC34's public ConnectionAdapter / DBAL3.
    $property=new ReflectionProperty($db,'inner');$inner=$property->getValue($db);
    if(!method_exists($inner->getConfiguration(),'setSQLLogger'))throw new RuntimeException('Unsupported DBAL profiler adapter');
    return $inner;
}
