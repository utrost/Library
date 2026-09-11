<?php

declare(strict_types=1);

namespace OCP {
    interface IRequest {}
    interface IUserSession {}
    interface IURLGenerator {}
    final class Util { public static function addStyle(string $app, string $style): void {} public static function addScript(string $app, string $script): void {} }
}
namespace OCP\AppFramework {
    class Controller { public function __construct(protected string $appName, protected \OCP\IRequest $request) {} }
}
namespace OCP\AppFramework\Http {
    class TemplateResponse {
        public function __construct(
            public string $app,
            public string $template,
            public array $params = [],
            public string $renderAs = 'user',
            public int $status = 200,
            public array $headers = [],
        ) {}
    }
}
namespace OCP\AppFramework\Http\Attribute {
    #[\Attribute] class NoAdminRequired {}
    #[\Attribute] class NoCSRFRequired {}
}
namespace OCA\Library\AppInfo { final class Application { public const APP_ID = 'library'; } }
namespace OCA\Library\Service {
    class ItemService {
        public static bool $owned = true;
        public function findItem(string $userId, int $itemId): ?array {
            if (!self::$owned) { return null; }
            return [
                'id' => $itemId, 'fileId' => 21, 'cachedPath' => '/fixture.epub',
                'coverOverrideUrl' => 'https://tracker.invalid/pixel', 'extension' => 'epub',
                'scanStatus' => 'indexed',
            ];
        }
    }
    class FileTagService { public function tagsForItems(array $items): array { return []; } public function visibleAssignableTagNames(): array { return []; } }
    class FileCommentService { public function commentsForItems(array $items): array { return []; } }
}
namespace OCA\Library\Reader {
    class DefaultNextcloudFileProvider {
        public function getShowInFilesUrl(int $fileId, string $path): string { return '/files'; }
        public function getDownloadUrl(string $userId, string $path): string { return '/download'; }
    }
}
namespace {
    require_once __DIR__ . '/../../lib/Controller/ItemPageController.php';

    $request = new class implements \OCP\IRequest {
        public function getParam(string $key, mixed $default = null): mixed { return $default; }
    };
    $session = new class implements \OCP\IUserSession {
        public bool $authenticated = true;
        public function getUser(): ?object { return $this->authenticated ? new class { public function getUID(): string { return 'fixture-user'; } } : null; }
    };
    $urls = new class implements \OCP\IURLGenerator {
        public function linkToRoute(string $route, array $params = []): string {
            return $route === 'library.cover.show' ? '/apps/library/covers/' . ($params['itemId'] ?? '') : '/' . str_replace('.', '/', $route);
        }
    };
    $controller = new \OCA\Library\Controller\ItemPageController(
        'library', $request, new \OCA\Library\Service\ItemService(),
        new \OCA\Library\Service\FileTagService(), new \OCA\Library\Service\FileCommentService(),
        new \OCA\Library\Reader\DefaultNextcloudFileProvider(), $session, $urls,
    );
    $response = $controller->show(7);
    $item = $response->params['item'];
    if ($item['coverUrl'] !== '/apps/library/covers/7') {
        throw new \RuntimeException('legacy remote URL must be inert and detail cover must use the local cover route');
    }
    if (str_contains(json_encode($response->params, JSON_THROW_ON_ERROR), 'tracker.invalid')) {
        throw new \RuntimeException('legacy remote URL must not be exposed to the detail template');
    }

    foreach ([[false, true], [true, false]] as [$authenticated, $owned]) {
        $session->authenticated = $authenticated;
        \OCA\Library\Service\ItemService::$owned = $owned;
        $notFound = $controller->show(7);
        if ($notFound->app !== 'core' || $notFound->template !== '404' || $notFound->renderAs !== 'guest' || $notFound->status !== 404 || $notFound->params !== []) {
            throw new \RuntimeException('unauthenticated and non-owned detail reads must return the same generic 404 response');
        }
    }
    echo "item page cover privacy runtime tests passed\n";
}
