<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\IDBConnection;
use OCP\IConfig;
use OCP\BackgroundJob\IJobList;
use OCA\Library\BackgroundJob\ScanJob;

final class LibraryCleanupService {
    public function __construct(private IDBConnection $db, private IConfig $config, private IJobList $jobs) {}
    /** At most 500 expired approvals per run. Recheck expiry so concurrent transitions survive. */
    public function expireHistory(int $limit = 500): int {
        $now = time(); $qb = $this->db->getQueryBuilder();
        $result = $qb->select('id')->from('library_inference_batches')
            ->where($qb->expr()->lte('expires_at', $qb->createNamedParameter($now)))
            ->orderBy('expires_at', 'ASC')->setMaxResults(max(1, min(500, $limit)))->executeQuery();
        $ids = []; while ($row = $result->fetch()) $ids[] = $row['id']; $result->closeCursor();
        $deleted = 0;
        foreach ($ids as $id) {
            $qb = $this->db->getQueryBuilder();
            $deleted += $qb->delete('library_inference_batches')->where($qb->expr()->eq('id', $qb->createNamedParameter($id)))
                ->andWhere($qb->expr()->lte('expires_at', $qb->createNamedParameter($now)))->executeStatement();
        }
        return $deleted;
    }
    /** Expired folder results are removed in bounded chunks, without touching metadata. */
    public function expireAnalyses(): void {
        $q=$this->db->getQueryBuilder(); $r=$q->select('id','user_id')->from('library_infer_jobs')->where($q->expr()->lte('expires_at',$q->createNamedParameter(time())))->orderBy('expires_at','ASC')->setMaxResults(5)->executeQuery(); $jobs=$r->fetchAll(); $r->closeCursor();
        foreach ($jobs as $job) {
            $q=$this->db->getQueryBuilder(); $r=$q->select('item_id')->from('library_infer_results')->where($q->expr()->eq('job_id',$q->createNamedParameter($job['id'])))->setMaxResults(400)->executeQuery(); $ids=array_map('intval',array_column($r->fetchAll(),'item_id')); $r->closeCursor();
            if ($ids) { $q=$this->db->getQueryBuilder(); $q->delete('library_infer_results')->where($q->expr()->eq('job_id',$q->createNamedParameter($job['id'])))->andWhere($q->expr()->in('item_id',$q->createNamedParameter($ids,\OCP\DB\QueryBuilder\IQueryBuilder::PARAM_INT_ARRAY)))->executeStatement(); }
            $q=$this->db->getQueryBuilder(); $r=$q->select($q->func()->count('*','total'))->from('library_infer_results')->where($q->expr()->eq('job_id',$q->createNamedParameter($job['id'])))->executeQuery(); $count=$r->fetchOne(); $r->closeCursor();
            if (!(int)$count) { $q=$this->db->getQueryBuilder(); $q->delete('library_infer_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($job['id'])))->andWhere($q->expr()->lte('expires_at',$q->createNamedParameter(time())))->executeStatement(); }
        }
    }
    /** Bounded expiry of private duplicate snapshots. Decisions survive a discarded scan. */
    public function expireDuplicates(): void {
        $q=$this->db->getQueryBuilder(); $r=$q->select('id')->from('library_dup_jobs')->where($q->expr()->lte('expires_at',$q->createNamedParameter(time())))->orderBy('expires_at','ASC')->setMaxResults(3)->executeQuery(); $jobs=array_column($r->fetchAll(),'id'); $r->closeCursor();
        foreach ($jobs as $id) {
            $this->db->beginTransaction();
            try {
            // Wait for an in-flight worker before pruning its expired snapshots.
            $q=$this->db->getQueryBuilder();
            if ($this->db->getDatabaseProvider()==='sqlite') $q->update('library_dup_jobs')->set('id',$q->createFunction('id'))->where($q->expr()->eq('id',$q->createNamedParameter($id)))->executeStatement();
            $q=$this->db->getQueryBuilder(); $q->select('id')->from('library_dup_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))->andWhere($q->expr()->lte('expires_at',$q->createNamedParameter(time())));
            if ($this->db->getDatabaseProvider()!=='sqlite') $q->forUpdate();
            $r=$q->executeQuery(); $expired=$r->fetchOne(); $r->closeCursor();
            if (!$expired) { $this->db->commit(); continue; }
            $empty=true;
            foreach (['library_dup_keys'=>'item_id','library_dup_books'=>'item_id','library_dup_pairs'=>'pair_id'] as $table=>$column) {
                $q=$this->db->getQueryBuilder(); $r=$q->selectDistinct($column)->from($table)->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->setMaxResults(200)->executeQuery(); $ids=array_column($r->fetchAll(),$column); $r->closeCursor();
                if ($ids) { $empty=false; $q=$this->db->getQueryBuilder(); $q->delete($table)->where($q->expr()->eq('job_id',$q->createNamedParameter($id)))->andWhere($q->expr()->in($column,$q->createNamedParameter($ids,\OCP\DB\QueryBuilder\IQueryBuilder::PARAM_STR_ARRAY)))->executeStatement(); }
            }
            if ($empty) { $q=$this->db->getQueryBuilder(); $q->delete('library_dup_jobs')->where($q->expr()->eq('id',$q->createNamedParameter($id)))->executeStatement(); }
            $this->db->commit();
            } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        }
    }
    /** Account deletion removes app data only; it never touches publication files. */
    public function deleteAccount(string $uid): void {
        if ($uid === '') throw new \InvalidArgumentException('missing_user');
        $this->db->beginTransaction();
        try {
            // Entries inherit ownership from their list, not from a user_id column.
            $qb = $this->db->getQueryBuilder();
            $result = $qb->select('id')->from('library_lists')->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))->executeQuery();
            $ids = []; while ($row = $result->fetch()) $ids[] = (int)$row['id']; $result->closeCursor();
            foreach ($ids as $id) {
                $qb = $this->db->getQueryBuilder(); $qb->delete('library_list_entries')->where($qb->expr()->eq('list_id', $qb->createNamedParameter($id)))->executeStatement();
            }
            foreach (['library_scan_changes', 'library_scan_schedule', 'library_dup_hints', 'library_dup_terms', 'library_dup_index', 'library_dup_state', 'library_dup_keys', 'library_dup_books', 'library_dup_pairs', 'library_dup_choices', 'library_dup_jobs', 'library_infer_results', 'library_infer_jobs', 'library_inference_batches', 'library_item_facets', 'library_item_search_grams', 'library_item_identifiers', 'library_items', 'library_files', 'library_roots', 'library_scan_jobs', 'library_saved_collections', 'library_lists'] as $table) {
                $qb = $this->db->getQueryBuilder(); $qb->delete($table)->where($qb->expr()->eq('user_id', $qb->createNamedParameter($uid)))->executeStatement();
            }
            $this->db->commit();
        } catch (\Throwable $e) { $this->db->rollBack(); throw $e; }
        foreach ([ScanJob::class, \OCA\Library\BackgroundJob\InferenceAnalysisJob::class, \OCA\Library\BackgroundJob\DuplicateJob::class, \OCA\Library\BackgroundJob\DuplicateIndexJob::class] as $class) {
        $arguments = [];
        foreach ($this->jobs->getJobsIterator($class, null, 0) as $job) {
            $argument = $job->getArgument();
            if (is_array($argument) && ($argument['userId'] ?? null) === $uid) $arguments[] = $argument;
        }
        foreach ($arguments as $argument) $this->jobs->remove($class, $argument);
        }
        foreach ($this->config->getUserKeys($uid, 'library') as $key) $this->config->deleteUserValue($uid, 'library', $key);
    }
}
