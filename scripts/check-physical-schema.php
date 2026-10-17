<?php
declare(strict_types=1);

/** Run inside an installed Nextcloud: php scripts/check-physical-schema.php [app path]. */
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';

$appPath = $argv[1] ?? '/var/www/html/custom_apps/library';
$xml = simplexml_load_string((string)file_get_contents($appPath . '/appinfo/database.xml'), 'SimpleXMLElement', LIBXML_NONET);
if ($xml === false) throw new RuntimeException('Cannot read Library database.xml');
$db = \OC::$server->get(\OCP\IDBConnection::class);
$schema = $db->createSchema();
$engine = $db->getDatabaseProvider();
$prefix = (string)\OC::$server->get(\OCP\IConfig::class)->getSystemValue('dbtableprefix', 'oc_');
$errors = [];
$expectedTables = [];

$normalType = static function (string $name): string {
    $name = strtolower(preg_replace('/type$/i', '', (string)preg_replace('/^.*\\\\/', '', $name)));
    return match ($name) { 'smallint', 'integer', 'bigint' => 'integer:' . $name,
        'string', 'ascii' => 'string', 'text', 'blob' => $name,
        'boolean' => 'boolean', 'datetime', 'datetimetz' => 'datetime',
        'date' => 'date', 'decimal' => 'decimal', 'float' => 'float',
        default => $name };
};
$xmlType = static fn(string $name): string => match ($name) {
    'integer', 'bigint', 'smallint' => 'integer:' . $name,
    default => $name,
};
$bool = static fn(string $value): bool => in_array(strtolower($value), ['1', 'true'], true);

foreach ($xml->table as $declaredTable) {
    $name = str_replace('*dbprefix*', $prefix, (string)$declaredTable->name);
    $expectedTables[] = $name;
    if (!$schema->hasTable($name)) { $errors[] = "$name: missing table"; continue; }
    $table = $schema->getTable($name);
    $expectedColumns = [];
    foreach ($declaredTable->declaration->field as $field) {
        $columnName = (string)$field->name;
        $expectedColumns[] = $columnName;
        if (!$table->hasColumn($columnName)) { $errors[] = "$name.$columnName: missing column"; continue; }
        $actual = $table->getColumn($columnName);
        $expectedType = $xmlType((string)$field->type);
        $actualType = $normalType(get_class($actual->getType()));
        // SQLite represents every autoincrement primary key as a signed INTEGER.
        $sqliteIdentity = $engine === 'sqlite' && $actual->getAutoincrement()
            && $actualType === 'integer:integer' && $expectedType === 'integer:bigint';
        if ($actualType !== $expectedType && !$sqliteIdentity) $errors[] = "$name.$columnName: type $actualType != $expectedType";
        if (isset($field->length) && $expectedType === 'string' && (int)$field->length !== (int)$actual->getLength())
            $errors[] = "$name.$columnName: length {$actual->getLength()} != {$field->length}";
        foreach (['notnull' => $actual->getNotnull(), 'unsigned' => $actual->getUnsigned(), 'autoincrement' => $actual->getAutoincrement()] as $property => $value) {
            if ($engine !== 'mysql' && $property === 'unsigned') continue;
            if (isset($field->$property) && $bool((string)$field->$property) !== (bool)$value)
                $errors[] = "$name.$columnName: $property mismatch";
        }
        if (isset($field->default)) {
            $expectedDefault = (string)$field->default;
            $actualDefault = $actual->getDefault();
            if ($expectedType === 'boolean') {
                $equal = $bool($expectedDefault) === $bool((string)$actualDefault);
            } else {
                $equal = $expectedDefault === (string)$actualDefault;
            }
            if (!$equal) $errors[] = "$name.$columnName: default mismatch";
        }
    }
    foreach (array_diff(array_keys($table->getColumns()), $expectedColumns) as $extra)
        $errors[] = "$name.$extra: undeclared column";

    $expectedIndexes = [];
    foreach ($declaredTable->declaration->index as $index) {
        $indexName = (string)$index->name;
        $primary = $bool((string)$index->primary);
        $key = $primary ? 'primary' : strtolower($indexName);
        $expectedIndexes[$key] = true;
        $actual = $primary ? $table->getPrimaryKey() : ($table->hasIndex($indexName) ? $table->getIndex($indexName) : null);
        if ($actual === null) { $errors[] = "$name.$indexName: missing index"; continue; }
        $fields = [];
        foreach ($index->field as $part) $fields[] = (string)$part->name;
        if (array_map(static fn(string $value): string => strtolower(trim($value, '"')), $actual->getColumns())
            !== array_map('strtolower', $fields))
            $errors[] = "$name.$indexName: index fields mismatch (physical " . implode(',', $actual->getColumns()) . '; declared ' . implode(',', $fields) . ')';
        if ($actual->isUnique() !== ($primary || $bool((string)$index->unique)))
            $errors[] = "$name.$indexName: uniqueness mismatch";
    }
    foreach ($table->getIndexes() as $index) {
        $key = $index->isPrimary() ? 'primary' : strtolower($index->getName());
        if (!isset($expectedIndexes[$key])) $errors[] = "$name.{$index->getName()}: undeclared index";
    }
}
echo json_encode(['engine' => $engine, 'tables' => count($expectedTables),
    'errors' => $errors], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), PHP_EOL;
exit($errors === [] ? 0 : 1);
