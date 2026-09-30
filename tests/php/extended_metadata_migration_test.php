<?php
declare(strict_types=1);
namespace OCP\DB { interface ISchemaWrapper {} }
namespace OCP\Migration { interface IOutput {} class SimpleMigrationStep {} }
namespace {
require __DIR__.'/../../lib/Migration/Version000200Date20260926120000.php';
$table=new class {
    public array $columns=['publication'=>['length'=>255]];
    public function hasColumn(string $name): bool { return isset($this->columns[$name]); }
    public function addColumn(string $name,string $type,array $options): void { $this->columns[$name]=['type'=>$type,...$options]; }
};
$schema=new class($table) implements \OCP\DB\ISchemaWrapper {
    public function __construct(public object $table) {}
    public function getTable(string $name): object { if($name!=='library_items')throw new \RuntimeException('Wrong table');return $this->table; }
};
$migration=new \OCA\Library\Migration\Version000200Date20260926120000();
$output=new class implements \OCP\Migration\IOutput {};
$migration->changeSchema($output,fn()=>$schema,[]);
$first=$table->columns;
foreach(['series_name'=>255,'series_number'=>64,'genre'=>255] as $name=>$length) {
    if($first[$name]!==['type'=>'string','length'=>$length,'notnull'=>false,'default'=>null])throw new \RuntimeException('Incorrect nullable text column');
}
$migration->changeSchema($output,fn()=>$schema,[]);
if($first!==$table->columns || $first['publication']!==['length'=>255])throw new \RuntimeException('Migration altered existing columns');
echo "extended_metadata_migration_ok=true nullable=true idempotent=true legacy_preserved=true\n";
}
