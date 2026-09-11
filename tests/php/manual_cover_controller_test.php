<?php

declare(strict_types=1);

namespace OCP {
    interface IRequest {}
    interface IUserSession {}
    interface IDBConnection {}
    interface IPreview { public const MODE_COVER = 'cover'; }
    interface IURLGenerator {}
}
namespace OCP\Files {
    interface IRootFolder {}
    class File {}
}
namespace OCP\AppFramework {
    class Controller {
        public function __construct(protected string $appName, protected \OCP\IRequest $request) {}
    }
}
namespace OCP\AppFramework\Http {
    class RedirectResponse { public function __construct(public string $url) {} }
    class DataDownloadResponse {}
}
namespace OCP\AppFramework\Http\Attribute {
    #[\Attribute] class NoAdminRequired {}
    #[\Attribute] class NoCSRFRequired {}
}
namespace Psr\Log {
    interface LoggerInterface {}
}
namespace OCA\Library\Exception {
    class BatchLimitExceededException extends \RuntimeException {}
}
namespace OCA\Library\Instrumentation {
    class MonotonicClock {
        public function now(): int { return 0; }
        public function elapsedMs(int $start): float { return 0.0; }
    }
}
namespace OCA\Library\Service {
    class ItemService {
        public array $calls = [];
        public function setManualCoverOverride(string $userId, int $itemId, string $url, ?string $data, ?string $mime): void {
            $this->calls[] = compact('userId', 'itemId', 'url', 'data', 'mime');
        }
    }
    class ArchiveCoverService {}
}
namespace {
    require_once __DIR__ . '/../../lib/Service/ManualCoverValidationException.php';
    require_once __DIR__ . '/../../lib/Service/ManualCoverValidator.php';
    require_once __DIR__ . '/../../lib/Service/ManualCoverUploadService.php';
    require_once __DIR__ . '/../../lib/Controller/CoverController.php';

    use OCA\Library\Controller\CoverController;
    use OCA\Library\Service\ArchiveCoverService;
    use OCA\Library\Service\ItemService;
    use OCA\Library\Service\ManualCoverUploadService;
    use OCA\Library\Service\ManualCoverValidator;

    function expectController(bool $condition, string $message): void {
        if (!$condition) {
            throw new RuntimeException($message);
        }
    }

    $request = new class implements \OCP\IRequest {
        public array $params = ['coverOverrideUrl' => 'https://old.example/cover.jpg'];
        public function getParam(string $key, mixed $default = null): mixed { return $this->params[$key] ?? $default; }
    };
    $session = new class implements \OCP\IUserSession {
        public function getUser(): object { return new class { public function getUID(): string { return 'alice'; } }; }
    };
    $urls = new class implements \OCP\IURLGenerator {
        public function linkToRoute(string $route, array $params = []): string { return '/items/' . ($params['itemId'] ?? ''); }
    };
    $itemService = new ItemService();
    $coverDecoder = static function (string $bytes): ?array {
        $info = @getimagesizefromstring($bytes);
        return is_array($info) && str_starts_with($bytes, "\xFF\xD8") && str_ends_with($bytes, "\xFF\xD9")
            ? ['mimeType' => 'image/jpeg', 'width' => (int)$info[0], 'height' => (int)$info[1]]
            : null;
    };
    $uploadService = new ManualCoverUploadService(new ManualCoverValidator($coverDecoder), static fn (string $path): bool => is_file($path));
    $controller = new CoverController(
        'library',
        $request,
        $session,
        new class implements \OCP\IDBConnection {},
        new class implements \OCP\Files\IRootFolder {},
        new class implements \OCP\IPreview {},
        $itemService,
        $urls,
        new ArchiveCoverService(),
        new class implements \Psr\Log\LoggerInterface {},
        null,
        $uploadService,
    );

    $tmp = tempnam(sys_get_temp_dir(), 'manual-cover-test-');
    if ($tmp === false) {
        throw new RuntimeException('temporary file unavailable');
    }
    try {
        file_put_contents($tmp, '<html>spoof</html>');
        $_FILES['coverOverrideFile'] = ['tmp_name' => $tmp, 'error' => UPLOAD_ERR_OK, 'type' => 'image/png', 'size' => 19];
        $response = $controller->override(7);
        expectController(count($itemService->calls) === 0, 'invalid upload must not reach persistence');
        expectController($response->url === '/items/7?coverUploadError=invalid', 'invalid upload returns bounded feedback code');
        expectController(!str_contains($response->url, 'spoof'), 'invalid upload feedback excludes decoder details');

        $_FILES['coverOverrideFile']['error'] = UPLOAD_ERR_PARTIAL;
        $controller->override(7);
        expectController(count($itemService->calls) === 0, 'upload errors must not reach persistence');

        $jpeg = base64_decode('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPyF//9k=', true);
        file_put_contents($tmp, $jpeg);
        $_FILES['coverOverrideFile'] = ['tmp_name' => $tmp, 'error' => UPLOAD_ERR_OK, 'type' => 'text/html', 'size' => strlen((string)$jpeg)];
        $controller->override(7);
        expectController(count($itemService->calls) === 1, 'valid upload reaches persistence once');
        $call = $itemService->calls[0];
        expectController($call['url'] === '', 'valid uploaded cover clears the old remote URL');
        expectController($call['mime'] === 'image/jpeg', 'server canonical MIME must be persisted');
        expectController(base64_decode((string)$call['data'], true) === $jpeg, 'validated bytes must be persisted');
    } finally {
        unset($_FILES['coverOverrideFile']);
        @unlink($tmp);
    }

    echo "manual cover controller integration tests passed\n";
}
