<?php

declare(strict_types=1);

namespace OCA\Library\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Build a portable materialized trigram index for catalogue substring search. */
class Version000100Date20260916160000 extends SimpleMigrationStep {
    public function __construct(
        private IDBConnection $db,
    ) {
    }

    public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
        /** @var ISchemaWrapper $schema */
        $schema = $schemaClosure();

        if (!$schema->hasTable('library_item_search_grams')) {
            $table = $schema->createTable('library_item_search_grams');
            $table->addColumn('id', 'bigint', ['autoincrement' => true, 'notnull' => true, 'unsigned' => true]);
            $table->addColumn('user_id', 'string', ['notnull' => true, 'length' => 64]);
            $table->addColumn('item_id', 'integer', ['notnull' => true, 'unsigned' => true]);
            $table->addColumn('gram', 'string', ['notnull' => true, 'length' => 32]);
            $table->setPrimaryKey(['id'], 'library_search_grams_id');
            $table->addIndex(['user_id', 'gram', 'item_id'], 'library_search_grams_lookup');
            $table->addUniqueIndex(['item_id', 'gram'], 'library_search_grams_item_unique');
        }

        return $schema;
    }

    public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
        $this->backfillSearchGrams();
    }

    private function backfillSearchGrams(): void {
        $lastId = 0;
        $limit = 500;
        do {
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('i.id', 'i.user_id', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.description', 'i.subjects_json', 'i.classifications_json', 'f.cached_path')
                ->from('library_items', 'i')
                ->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
                ->where($qb->expr()->gt('i.id', $qb->createNamedParameter($lastId)))
                ->orderBy('i.id', 'ASC')
                ->setMaxResults($limit)
                ->executeQuery();
            $rows = [];
            while ($row = $result->fetch()) {
                $rows[] = $row;
            }
            $result->closeCursor();
            foreach ($rows as $row) {
                $lastId = (int)$row['id'];
                foreach ($this->searchGramsForRow($row) as $gram) {
                    $insert = $this->db->getQueryBuilder();
                    $insert->insert('library_item_search_grams')
                        ->values([
                            'user_id' => $insert->createNamedParameter((string)$row['user_id']),
                            'item_id' => $insert->createNamedParameter($lastId),
                            'gram' => $insert->createNamedParameter($gram),
                        ])
                        ->executeStatement();
                }
            }
        } while (count($rows) === $limit);
    }

    /** @return array<int, string> */
    private function searchGramsForRow(array $row): array {
        return $this->searchGramsForText(implode(' ', [
            (string)($row['title'] ?? ''),
            (string)($row['subtitle'] ?? ''),
            (string)($row['creators'] ?? ''),
            (string)($row['publication'] ?? ''),
            (string)($row['description'] ?? ''),
            (string)($row['subjects_json'] ?? ''),
            (string)($row['classifications_json'] ?? ''),
            (string)($row['cached_path'] ?? ''),
        ]));
    }

    /** @return array<int, string> */
    private function searchGramsForText(string $text): array {
        $normalized = mb_strtolower($text);
        $normalized = preg_replace('/[^\p{L}\p{N}]+/u', ' ', $normalized) ?? '';
        $grams = [];
        foreach (preg_split('/\s+/u', trim($normalized)) ?: [] as $token) {
            $length = mb_strlen($token);
            if ($length < 3) {
                continue;
            }
            for ($i = 0; $i <= $length - 3; $i++) {
                $grams[mb_substr($token, $i, 3)] = true;
            }
        }
        return array_keys($grams);
    }
}
