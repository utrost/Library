<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\Files\Search\ISearchQuery;
use OCP\Files\Search\ISearchComparison;
use OCP\Files\Search\ISearchOrder;
use OCP\Files\FileInfo;
/** Public Files search interfaces; compatible with NC33 and the NC34 select-fields addition. */
final class ScanSearchQuery implements ISearchQuery {
    public function __construct(private int $offset, private int $limit = 200) {}
    private function comparison(string $field, string|array $value, string $type): ISearchComparison {
        return new class($field,$value,$type) implements ISearchComparison {
            private array $hints=[];
            public function __construct(private string $field, private string|array $value, private string $type) {}
            public function __toString(): string { return json_encode([$this->type,$this->field,$this->value],JSON_THROW_ON_ERROR); }
            public function getType(): string { return $this->type; }
            public function getField(): string { return $this->field; }
            public function getExtra(): string { return ''; }
            public function getValue(): string|int|bool|\DateTime|array { return $this->value; }
            public function getQueryHint(string $name,$default) { return $this->hints[$name]??$default; }
            public function setQueryHint(string $name,$value): void { $this->hints[$name]=$value; }
        };
    }
    public function getSearchOperation() {
        $arguments = [$this->comparison('mimetype', ['application/pdf','application/epub+zip','application/comicbook+zip','application/x-cbz','application/oebps-package+xml'], ISearchComparison::COMPARE_IN)];
        foreach (['pdf','epub','cbz','opf'] as $extension) $arguments[]=$this->comparison('name','%.' . $extension,ISearchComparison::COMPARE_LIKE);
        return new class($arguments) implements \OCP\Files\Search\ISearchBinaryOperator {
            private array $hints=[];
            public function __construct(private array $arguments) {}
            public function __toString(): string { return 'or(' . implode(',',array_map('strval',$this->arguments)) . ')'; }
            public function getType() { return self::OPERATOR_OR; }
            public function getArguments() { return $this->arguments; }
            public function getQueryHint(string $name,$default) { return $this->hints[$name]??$default; }
            public function setQueryHint(string $name,$value): void { $this->hints[$name]=$value; }
        };
    }
    public function getLimit() { return $this->limit; }
    public function getOffset() { return $this->offset; }
    public function getUser() { return null; }
    public function limitToHome(): bool { return false; }
    public function getSelectFields(): array { return []; }
    public function getOrder() {
        return [new class implements ISearchOrder {
            public function getDirection(): string { return self::DIRECTION_ASCENDING; }
            public function getField(): string { return 'fileid'; }
            public function getExtra(): string { return ''; }
            public function sortFileInfo(FileInfo $a,FileInfo $b): int { return $a->getId()<=>$b->getId(); }
        }];
    }
}
