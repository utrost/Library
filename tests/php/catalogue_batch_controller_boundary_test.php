<?php

declare(strict_types=1);

namespace OCP\AppFramework {
    class Controller {
        public function __construct(protected string $appName, protected \OCP\IRequest $request) {}
    }
}
namespace OCP\AppFramework\Http\Attribute {
    #[\Attribute] class NoAdminRequired {}
    #[\Attribute] class NoCSRFRequired {}
}
namespace OCP\AppFramework\Http {
    class RedirectResponse { public function __construct(public string $redirectURL) {} }
    class TemplateResponse { public function __construct(public string $app, public string $template, public array $params) {} }
    class JSONResponse {}
    class DataDownloadResponse {}
}
namespace OCP {
    interface IRequest { public function getParam(string $key, mixed $default = null): mixed; public function getParams(): array; }
    interface IUserSession { public function getUser(); }
    interface IURLGenerator { public function linkToRoute(string $route, array $params = []): string; public function getAbsoluteURL(string $url): string; }
    interface IDBConnection {}
    interface IPreview {}
    final class Util { public static function addStyle(string $app, string $style): void {} }
}
namespace OCP\L10N { interface IFactory {} }
namespace OCP\Files { interface IRootFolder {} class File {} }
namespace Psr\Log { interface LoggerInterface {} }
namespace OCA\Library\Instrumentation { class MonotonicClock {} }
namespace OCA\Library\Service {
    class ItemService {
        public array $calls = [];
        public function bulkResetFieldsToScannerCandidates(string $user, array $ids): array { return $this->record('reset', $user, $ids); }
        public function previewBatchMetadataEdit(string $user, array $ids, string $field, string $value): array { return $this->record('preview', $user, $ids); }
        public function applyBatchMetadataEdit(string $user, array $ids, string $field, string $value): array { return $this->record('apply', $user, $ids); }
        private function record(string $operation, string $user, array $ids): array {
            $owned = $user === 'alice' ? [11, 12, 13] : [14];
            $mutated = array_values(array_intersect($ids, $owned));
            $this->calls[] = [$operation, $user, $ids, $mutated];
            return ['requestedItems' => count($ids), 'resetItems' => count($mutated), 'appliedItems' => count($mutated), 'changedItems' => count($mutated), 'unchangedItems' => 0, 'skippedItems' => count($ids) - count($mutated)];
        }
    }
    class FileTagService {
        public array $calls = [];
        public function assignTagToItems(string $user, array $ids, string $tag): array { return $this->record('tag-add', $user, $ids); }
        public function removeTagFromItems(string $user, array $ids, string $tag): array { return $this->record('tag-remove', $user, $ids); }
        private function record(string $operation, string $user, array $ids): array {
            $owned = $user === 'alice' ? [11, 12, 13] : [14];
            $mutated = array_values(array_intersect($ids, $owned));
            $this->calls[] = [$operation, $user, $ids, $mutated];
            return ['requestedItems' => count($ids), 'addedItems' => count($mutated), 'removedItems' => count($mutated), 'alreadyTaggedItems' => 0, 'notTaggedItems' => 0, 'skippedItems' => count($ids) - count($mutated)];
        }
    }
    class FileIndexService {
        public array $calls = [];
        public function coverRefreshItemIds(string $user, array $ids): array {
            $owned = $user === 'alice' ? [11, 12, 13] : [14];
            $selected = array_values(array_intersect($ids, $owned));
            $this->calls[] = ['cover', $user, $ids, $selected];
            return $selected;
        }
    }
    class ArchiveCoverService {}
    class ManualCoverUploadService {}
    class ManualCoverValidator {}
    class ManualCoverValidationException extends \RuntimeException {}
}

namespace {
    require_once __DIR__ . '/../../lib/Exception/BatchLimitExceededException.php';
    require_once __DIR__ . '/../../lib/Service/SelectedItemIds.php';
    require_once __DIR__ . '/../../lib/Controller/ItemController.php';
    require_once __DIR__ . '/../../lib/Controller/TagController.php';
    require_once __DIR__ . '/../../lib/Controller/CoverController.php';

    final class BatchRequest implements \OCP\IRequest {
        public function __construct(private array $params) {}
        public function getParam(string $key, mixed $default = null): mixed { return $this->params[$key] ?? $default; }
        public function getParams(): array { return $this->params; }
    }
    final class BatchUser { public function getUID(): string { return 'alice'; } }
    final class BatchSession implements \OCP\IUserSession { public function getUser(): BatchUser { return new BatchUser(); } }
    final class BatchUrls implements \OCP\IURLGenerator {
        public function linkToRoute(string $route, array $params = []): string { return '/' . $route . ($params ? '?' . http_build_query($params) : ''); }
        public function getAbsoluteURL(string $url): string { return $url; }
    }
    function checkBatch(bool $condition, string $message): void { if (!$condition) throw new \RuntimeException($message); }
    function makeController(string $class, array $params, object ...$services): object {
        $reflection = new \ReflectionClass($class);
        $controller = $reflection->newInstanceWithoutConstructor();
        $values = ['appName' => 'library', 'request' => new BatchRequest($params), 'userSession' => new BatchSession(), 'urlGenerator' => new BatchUrls(), 'l10nFactory' => null];
        foreach ($services as $service) {
            if ($service instanceof \OCA\Library\Service\ItemService) $values['itemService'] = $service;
            if ($service instanceof \OCA\Library\Service\FileTagService) $values['fileTagService'] = $service;
            if ($service instanceof \OCA\Library\Service\FileIndexService) $values['fileIndexService'] = $service;
        }
        for ($scope = $reflection; $scope; $scope = $scope->getParentClass()) {
            foreach ($values as $name => $value) if ($scope->hasProperty($name)) $scope->getProperty($name)->setValue($controller, $value);
        }
        return $controller;
    }

    $operations = [
        ['item', 'batchresetfilteredfields', []],
        ['item', 'batchpreviewmetadataedit', ['bulkEditField' => 'title', 'bulkEditValue' => 'Changed']],
        ['item', 'batchapplymetadataedit', ['confirmBatchMetadataApply' => 'APPLY', 'bulkEditField' => 'title', 'bulkEditValue' => 'Changed']],
        ['tag', 'batchassign', ['nextcloudTagName' => 'Reviewed']],
        ['tag', 'batchremove', ['nextcloudTagName' => 'Reviewed']],
        ['cover', 'batchrefresh', []],
    ];
    $invalidInputs = [null, [], '11,12', '11', [11, 'bad'], [0], [-1], ['01'], [11, 11]];
    foreach ($operations as [$kind, $method, $extra]) {
        foreach ($invalidInputs as $invalid) {
            $item = new \OCA\Library\Service\ItemService(); $tag = new \OCA\Library\Service\FileTagService(); $file = new \OCA\Library\Service\FileIndexService();
            $class = $kind === 'item' ? \OCA\Library\Controller\ItemController::class : ($kind === 'tag' ? \OCA\Library\Controller\TagController::class : \OCA\Library\Controller\CoverController::class);
            $controller = makeController($class, $extra + ['itemIds' => $invalid], $item, $tag, $file);
            $response = $controller->$method();
            checkBatch($item->calls === [] && $tag->calls === [] && $file->calls === [], "$method must not call a service for invalid selected IDs");
            $isRejected = $response instanceof \OCP\AppFramework\Http\TemplateResponse
                ? (($response->params['result']['batchSelectionError'] ?? false) === true)
                : str_contains($response->redirectURL, 'batchSelectionError=1');
            checkBatch($isRejected, "$method must explicitly reject invalid selected IDs");
        }
        $item = new \OCA\Library\Service\ItemService(); $tag = new \OCA\Library\Service\FileTagService(); $file = new \OCA\Library\Service\FileIndexService();
        $class = $kind === 'item' ? \OCA\Library\Controller\ItemController::class : ($kind === 'tag' ? \OCA\Library\Controller\TagController::class : \OCA\Library\Controller\CoverController::class);
        $response = makeController($class, $extra + ['itemIds' => range(1, 5001)], $item, $tag, $file)->$method();
        checkBatch($item->calls === [] && $tag->calls === [] && $file->calls === [], "$method must not call a service for oversized selected IDs");
        $isLimit = $response instanceof \OCP\AppFramework\Http\TemplateResponse ? (($response->params['result']['batchLimitError'] ?? false) === true) : str_contains($response->redirectURL, 'batchLimitError=1');
        checkBatch($isLimit, "$method must explicitly reject oversized selected IDs");
    }

    foreach ($operations as [$kind, $method, $extra]) {
        $item = new \OCA\Library\Service\ItemService(); $tag = new \OCA\Library\Service\FileTagService(); $file = new \OCA\Library\Service\FileIndexService();
        $class = $kind === 'item' ? \OCA\Library\Controller\ItemController::class : ($kind === 'tag' ? \OCA\Library\Controller\TagController::class : \OCA\Library\Controller\CoverController::class);
        makeController($class, $extra + ['itemIds' => [11, 12, 14]], $item, $tag, $file)->$method();
        $calls = array_merge($item->calls, $tag->calls, $file->calls);
        checkBatch(count($calls) === 1, "$method must perform exactly one selected operation");
        checkBatch($calls[0][3] === [11, 12], "$method must affect owned selected A/B, not visible owned C or unauthorized item 14");
    }
    echo "catalogue batch controller boundary tests passed\n";
}
