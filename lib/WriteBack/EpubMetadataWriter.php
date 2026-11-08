<?php
declare(strict_types=1);
namespace OCA\Library\WriteBack;
use DOMDocument;
use DOMElement;
use DOMXPath;
use ZipArchive;

/** Changes selected package metadata only. Never extracts archive paths to the filesystem. */
final class EpubMetadataWriter {
    public const MAX_BYTES=134217728;
    private const OPF='http://www.idpf.org/2007/opf';
    private const DC='http://purl.org/dc/elements/1.1/';
    public const FIELDS=['title','authors','publisher','language','publicationDate','description','subjects','identifiers'];
    private function xml(string $content): DOMDocument {
        if (strlen($content)>2097152 || stripos($content,'<!DOCTYPE')!==false || stripos($content,'<!ENTITY')!==false) throw new \DomainException('unsupported_epub');
        $doc=new DOMDocument();$old=libxml_use_internal_errors(true);
        try { if (!$doc->loadXML($content,LIBXML_NONET|LIBXML_COMPACT)) throw new \DomainException('unsupported_epub'); }
        finally { libxml_clear_errors();libxml_use_internal_errors($old); }
        return $doc;
    }
    private function package(ZipArchive $zip): array {
        if ($zip->numFiles<3 || $zip->numFiles>10000 || $zip->getFromName('mimetype',32)!=='application/epub+zip') throw new \DomainException('unsupported_epub');
        $seen=[];$entries=[];
        for ($i=0;$i<$zip->numFiles;$i++) {
            $s=$zip->statIndex($i);$name=$s['name'];
            if (isset($seen[$name]) || str_starts_with($name,'/') || str_contains($name,'\\') || preg_match('~(?:^|/)\.\.(?:/|$)|[\x00-\x1f]~',$name) || ($s['encryption_method'] ?? 0)!==0) throw new \DomainException('unsupported_epub');
            $seen[$name]=true;$entries[$name]=['crc'=>$s['crc'],'size'=>$s['size']];
        }
        foreach (['META-INF/encryption.xml','META-INF/signatures.xml','META-INF/rights.xml'] as $name) if (isset($seen[$name])) throw new \DomainException('protected_epub');
        $container=$zip->getFromName('META-INF/container.xml',2097153);
        if (!is_string($container)) throw new \DomainException('unsupported_epub');
        $doc=$this->xml($container);$rootfiles=$doc->getElementsByTagNameNS('urn:oasis:names:tc:opendocument:xmlns:container','rootfile');
        if ($rootfiles->length!==1) throw new \DomainException('multiple_renditions');
        $path=$rootfiles->item(0)->getAttribute('full-path');
        if (!isset($seen[$path]) || $entries[$path]['size']>2097152) throw new \DomainException('unsupported_epub');
        $content=$zip->getFromName($path,2097153);
        if (!is_string($content)) throw new \DomainException('unsupported_epub');
        $package=$this->xml($content);$root=$package->documentElement;
        if ($root->namespaceURI!==self::OPF || $root->localName!=='package' || !in_array($root->getAttribute('version'),['2.0','3.0'],true)) throw new \DomainException('unsupported_epub');
        $xpath=new DOMXPath($package);$xpath->registerNamespace('opf',self::OPF);$xpath->registerNamespace('dc',self::DC);
        $metadata=$xpath->query('/opf:package/opf:metadata');
        if ($metadata->length!==1) throw new \DomainException('unsupported_epub');
        return [$path,$package,$xpath,$metadata->item(0),$entries];
    }
    public function proposed(array $item): array {
        return ['title'=>[(string)$item['title']],
            // A reviewed empty assignment means remove creators; do not resurrect imported names.
            'authors'=>in_array($item['authorSyncStatus'] ?? null,[0,2],true) ? array_column($item['canonicalAuthors'] ?? [],'name') : ($item['authors'] ?? []),
            'publisher'=>array_values(array_filter([(string)($item['publisher'] ?? '')])),
            'language'=>array_values(array_filter(array_map('trim',preg_split('/[;\r\n]+/',(string)($item['language'] ?? ''))))),
            'publicationDate'=>array_values(array_filter([(string)($item['publicationDate'] ?? '')])),
            'description'=>array_values(array_filter([(string)($item['description'] ?? '')])),
            'subjects'=>$item['subjects'] ?? [],
            'identifiers'=>array_values(array_filter(array_map(static fn($i)=>(($i['valid'] ?? false) && in_array($i['scheme'] ?? '',['isbn','issn','asin','ggkey'],true)) ? strtoupper($i['scheme']).':'.$i['normalizedValue'] : null,$item['identifiers'] ?? [])))];
    }
    public function prepare(string $path,array $item,array $fields): array {
        if (!array_is_list($fields) || !$fields || array_diff($fields,self::FIELDS) || count($fields)!==count(array_unique($fields))) throw new \InvalidArgumentException('fields');
        $zip=new ZipArchive();if ($zip->open($path)!==true) throw new \DomainException('unsupported_epub');
        try {
            [$opf,$doc,$xp,$metadata,$entries]=$this->package($zip);$proposed=$this->proposed($item);$before=[];$after=[];
            $names=['authors'=>'creator','publicationDate'=>'date','subjects'=>'subject','identifiers'=>'identifier'];
            foreach ($fields as $field) {
                $local=$names[$field] ?? $field;
                $nodes=iterator_to_array($xp->query('/opf:package/opf:metadata/dc:'.$local));
                $before[$field]=array_map(static fn($n)=>$n->textContent,$nodes);
                $values=$proposed[$field];
                if (in_array($field,['title','language'],true) && (!$values || trim($values[0])==='')) throw new \InvalidArgumentException('required_metadata');
                if ($field==='title' && count($nodes)>1) throw new ComplexMetadataException($field);
                if ($field==='identifiers') {
                    // Keep the publication's unique identifier and unknown schemes intact.
                    foreach ($values as $value) if (!in_array($value,$before[$field],true)) { $node=$doc->createElementNS(self::DC,'dc:identifier');$node->appendChild($doc->createTextNode($value));$metadata->appendChild($node); }
                    $after[$field]=array_values(array_unique(array_merge($before[$field],$values)));continue;
                }
                foreach ($nodes as $node) {
                    $id=$node->getAttribute('id');
                    if ($id!=='') foreach ($xp->query('/opf:package/opf:metadata/opf:meta[@refines]') as $refinement) if ($refinement->getAttribute('refines')==='#'.$id) throw new ComplexMetadataException($field);
                    // Preserve uncommon attributes rather than guessing their semantics.
                    foreach ($node->attributes as $attribute) if (!in_array($attribute->localName,['id','lang'],true)) throw new ComplexMetadataException($field);
                }
                foreach ($values as $i=>$value) {
                    if (!is_string($value) || strlen($value)>262144) throw new \InvalidArgumentException('metadata_limit');
                    $node=$nodes[$i] ?? $doc->createElementNS(self::DC,'dc:'.$local);
                    while ($node->firstChild) $node->removeChild($node->firstChild);
                    $node->appendChild($doc->createTextNode($value));
                    if (!$node->parentNode) $metadata->appendChild($node);
                }
                foreach (array_slice($nodes,count($values)) as $node) {
                    if ($node->hasAttribute('id')) throw new ComplexMetadataException($field);
                    $metadata->removeChild($node);
                }
                $after[$field]=$values;
            }
            if ($doc->documentElement->getAttribute('version')==='3.0') {
                $modified=$xp->query('/opf:package/opf:metadata/opf:meta[@property="dcterms:modified"]');
                $node=$modified->item(0) ?? $doc->createElementNS(self::OPF,'meta');$node->setAttribute('property','dcterms:modified');$node->textContent=gmdate('Y-m-d\TH:i:s\Z');if (!$node->parentNode) $metadata->appendChild($node);
            }
            $xml=$doc->saveXML();if (!is_string($xml) || strlen($xml)>2097152 || !$zip->addFromString($opf,$xml)) throw new \RuntimeException('staging_failed');
        } finally { if (!$zip->close()) throw new \RuntimeException('staging_failed'); }
        $verify=new ZipArchive();if ($verify->open($path,ZipArchive::CHECKCONS)!==true) throw new \RuntimeException('staging_failed');
        try {
            [$newPath,$unused,$xp2,$unused2,$newEntries]=$this->package($verify);
            if ($newPath!==$opf || array_keys($entries)!==array_keys($newEntries)) throw new \RuntimeException('staging_failed');
            foreach ($entries as $name=>$value) if ($name!==$opf && $newEntries[$name]!==$value) throw new \RuntimeException('content_changed');
            foreach ($after as $field=>$values) {
                $actual=array_map(static fn($n)=>$n->textContent,iterator_to_array($xp2->query('/opf:package/opf:metadata/dc:'.($names[$field] ?? $field))));
                if ($actual!==$values) throw new \RuntimeException('metadata_roundtrip_failed');
            }
        } finally { $verify->close(); }
        if (filesize($path)>self::MAX_BYTES) throw new \LengthException('file_limit');
        return ['entry'=>$opf,'before'=>$before,'after'=>$after,'modified'=>$doc->documentElement->getAttribute('version')==='3.0'];
    }
}
