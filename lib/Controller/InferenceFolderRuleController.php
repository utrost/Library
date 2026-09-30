<?php
declare(strict_types=1);
namespace OCA\Library\Controller;

use OCA\Library\Service\InferenceFolderRuleStore;
use OCA\Library\Service\RootService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\JSONResponse;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IRequest;
use OCP\IUserSession;

final class InferenceFolderRuleController extends Controller {
    public function __construct(string $appName, IRequest $request, private IUserSession $session,
        private RootService $roots, private IRootFolder $files, private InferenceFolderRuleStore $store) {
        parent::__construct($appName, $request);
    }
    private function response(array $data = [], int $status = 200): JSONResponse {
        return new JSONResponse($data, $status, ['Cache-Control' => 'private, no-store']);
    }
    private function root(string $uid): ?Folder {
        $id = $this->request->getParam('rootId');
        if (!(is_int($id) || is_string($id)) || !preg_match('/^[1-9][0-9]{0,9}$/D', (string)$id)) return null;
        foreach ($this->roots->listRoots($uid) as $root) {
            if ($root['id'] !== (int)$id) continue;
            try {
                $node = $this->files->getUserFolder($uid)->get(trim($root['path'], '/') ?: '/');
                return $node instanceof Folder && $node->isReadable() ? $node : null;
            } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) { return null; }
        }
        return null;
    }
    private function folder(Folder $root, string $path): ?Folder {
        try {
            $node = $path === '' ? $root : $root->get($path);
            return $node instanceof Folder && $node->isReadable() ? $node : null;
        } catch (\OCP\Files\NotFoundException|\OCP\Files\NotPermittedException $e) { return null; }
    }
    #[NoAdminRequired]
    #[NoCSRFRequired]
    public function index(): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return $this->response([], 401);
        $root = $this->root($uid);
        if ($root === null) return $this->response([], 404);
        $entries = [];
        foreach ($this->store->all($uid) as $entry) {
            if ($entry['rootId'] !== (int)$this->request->getParam('rootId')) continue;
            $path = InferenceFolderRuleStore::folder($entry['folder']);
            $folder = $path === null ? null : $this->folder($root, $path);
            $available = $folder !== null && $folder->getId() === $entry['folderFileId'] && $root->getId() === $entry['rootFileId'];
            // Internal file identities remain server-side; only validated assignments can run in the preview.
            $entries[] = ['id' => $entry['id'], 'folder' => $entry['folder'], 'recursive' => $entry['recursive'], 'definition' => $entry['definition'], 'available' => $available];
        }
        usort($entries, static fn(array $a, array $b): int => strnatcasecmp($a['folder'], $b['folder']) ?: strnatcasecmp($a['definition']['name'], $b['definition']['name']) ?: strcmp($a['id'], $b['id']));
        return $this->response(['assignments' => $entries]);
    }
    #[NoAdminRequired]
    public function create(): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return $this->response([], 401);
        $path = InferenceFolderRuleStore::folder($this->request->getParam('folder', ''));
        $recursive = $this->request->getParam('recursive');
        $definitionId = $this->request->getParam('definitionId');
        if ($path === null || !is_bool($recursive) || !is_string($definitionId)) return $this->response([], 422);
        $root = $this->root($uid);
        if ($root === null || ($folder = $this->folder($root, $path)) === null) return $this->response([], 404);
        $definition = $this->store->definition($uid, $definitionId);
        if ($definition === null) return $this->response([], 404);
        $all = $this->store->all($uid);
        if (count($all) >= 100) return $this->response([], 422);
        $rootId = (int)$this->request->getParam('rootId');
        foreach ($all as $entry) if ($entry['rootId'] === $rootId && $entry['folder'] === $path && $entry['recursive'] === $recursive && $entry['definition']['id'] === $definitionId) return $this->response([], 409);
        $saved = $this->store->save($uid, ['version' => 1, 'rootId' => $rootId, 'rootFileId' => $root->getId(), 'folderFileId' => $folder->getId(), 'folder' => $path, 'recursive' => $recursive, 'definition' => $definition]);
        return $this->response(['id' => $saved['id']], 201);
    }
    #[NoAdminRequired]
    public function delete(string $assignmentId): JSONResponse {
        $uid = $this->session->getUser()?->getUID();
        if ($uid === null) return $this->response([], 401);
        if (!preg_match('/^[a-f0-9]{32}$/D', $assignmentId)) return $this->response([], 422);
        // Also allow removal after a root/folder becomes inaccessible. Ownership comes only from the session.
        $this->store->delete($uid, $assignmentId);
        return $this->response(['deleted' => true]);
    }
}
