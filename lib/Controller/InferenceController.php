<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\RootService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IDBConnection;
use OCP\IRequest;
use OCP\IUserSession;

/** Read-only, bounded data for the inference UX prototype. */
final class InferenceController extends Controller {
    public function __construct(string $appName, IRequest $request, private RootService $roots,
        private IUserSession $session, private IRootFolder $files, private IDBConnection $db, private \OCA\Library\Service\InferenceBatchService $batches) {
        parent::__construct($appName, $request);
    }

    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function sample(): JSONResponse {
        $headers = ['Cache-Control' => 'private, no-store'];
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return new JSONResponse([], 401, $headers);
        $home = $this->files->getUserFolder($uid);
        $roots = [];
        foreach ($this->roots->listRoots($uid) as $root) {
            try {
                $node = $home->get(trim($root['path'], '/') ?: '/');
                if ($node instanceof Folder && $node->isReadable()) $roots[] = ['id' => $root['id'], 'label' => $root['label'] ?: $root['path'], 'path' => $root['path']];
            } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) {}
        }
        $rootId = (int)$this->request->getParam('rootId', 0);
        if (!$rootId) return new JSONResponse(['roots' => $roots], 200, $headers);
        $root = null;
        foreach ($roots as $candidate) if ($candidate['id'] === $rootId) $root = $candidate;
        if ($root === null) return new JSONResponse([], 404, $headers);
        $folder = $this->request->getParam('folder', '');
        if (!is_string($folder) || strlen($folder) > 2000 || preg_match('~(^|/)\.\.?(/|$)|[\x00-\x1f\\\\]~', $folder)) return new JSONResponse([], 422, $headers);
        $scope = rtrim($root['path'], '/') . '/' . trim($folder, '/');
        $scope = rtrim($scope, '/');
        try {
            $node = $home->get(ltrim($scope, '/') ?: '/');
            if (!$node instanceof Folder || !$node->isReadable()) return new JSONResponse([], 404, $headers);
        } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) { return new JSONResponse([], 404, $headers); }
        $recursive = (string)$this->request->getParam('recursive', '1') === '1';
        $page = max(1, min(10000, (int)$this->request->getParam('page', 1)));
        $prefix = $scope . '/';
        $qb = $this->db->getQueryBuilder();
        $qb->select('i.id', 'i.title', 'i.subtitle', 'i.creators', 'i.publication', 'i.series_name', 'i.series_number', 'i.genre', 'i.publication_date', 'i.language', 'i.publisher', 'i.subjects_json', 'f.file_id', 'f.cached_path')
            ->from('library_items', 'i')->innerJoin('i', 'library_files', 'f', $qb->expr()->eq('i.library_file_id', 'f.id'))
            ->where($qb->expr()->eq('i.user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('f.user_id', $qb->createNamedParameter($uid)))
            ->andWhere($qb->expr()->eq('f.root_id', $qb->createNamedParameter($rootId)))
            ->andWhere($qb->expr()->like('f.cached_path', $qb->createNamedParameter(addcslashes($prefix, '%_') . '%')))
            ->andWhere($qb->expr()->neq('f.scan_status', $qb->createNamedParameter('missing')));
        if (!$recursive) $qb->andWhere($qb->expr()->notLike('f.cached_path', $qb->createNamedParameter(addcslashes($prefix, '%_') . '%/%')));
        $result = $qb->orderBy('f.cached_path', 'ASC')->addOrderBy('i.id', 'ASC')->setFirstResult(($page - 1) * 40)->setMaxResults(41)->executeQuery();
        $rows = $result->fetchAll(); $result->closeCursor();
        $hasNext = count($rows) > 40;
        $items = [];
        $snapshots = $this->batches->snapshots($uid,array_map('intval',array_column(array_slice($rows,0,40),'id')));
        foreach (array_slice($rows, 0, 40) as $row) {
            // Revalidate the live identity, location and permissions before exposing cached metadata.
            try {
                $file = $home->get(ltrim($row['cached_path'], '/'));
                if (!$file instanceof File || !$file->isReadable() || $file->getId() !== (int)$row['file_id']) continue;
            } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) { continue; }
            $snapshot = $snapshots[(int)$row['id']] ?? null; if ($snapshot === null) continue;
            $row = array_replace($row, $snapshot['state']);
            $items[] = ['revision' => \OCA\Library\Service\InferenceChangeSet::fingerprint($snapshot), 'id' => (int)$row['id'], 'path' => substr($row['cached_path'], strlen($prefix)), 'current' => [
                'title' => $row['title'], 'subtitle' => $row['subtitle'], 'author' => $row['creators'], 'authors' => \OCA\Library\Service\AuthorNames::read($row['authors_json'] ?? null, $row['creators']),
                'series' => $row['series_name'], 'seriesNumber' => $row['series_number'], 'genre' => $row['genre'], 'year' => substr((string)$row['publication_date'], 0, 4),
                'language' => $row['language'], 'publisher' => $row['publisher'],
                'subject' => implode('; ', json_decode($row['subjects_json'] ?: '[]', true) ?: []),
            ]];
        }
        return new JSONResponse(['roots' => $roots, 'scope' => $scope ?: '/', 'items' => $items, 'page' => $page, 'hasNext' => $hasNext], 200, $headers);
    }
}
