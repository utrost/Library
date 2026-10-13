<?php
declare(strict_types=1);
namespace OCA\Library\Service;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException;
use OCP\Files\SimpleFS\ISimpleFolder;

/** Private, normalized portraits. Original uploads are not retained. */
final class AuthorPhotoService {
    public function __construct(private IAppData $appData) {}
    private function folder(string $uid, bool $create = false): ISimpleFolder {
        $name = 'author-photos-' . hash('sha256', $uid);
        try { return $this->appData->getFolder($name); }
        catch (NotFoundException $e) {
            if (!$create) throw $e;
            try { return $this->appData->newFolder($name); }
            catch (\Throwable) { return $this->appData->getFolder($name); }
        }
    }
    /** Input has passed ManualCoverUploadService's bounded raster validation. */
    public function thumbnail(string $content): string {
        $size = @getimagesizefromstring($content);
        if (!$size || $size[0] < 1 || $size[1] < 1 || $size[0] * $size[1] > ManualCoverValidator::MAX_PIXELS) throw new \InvalidArgumentException('photo');
        $source = @imagecreatefromstring($content);
        if (!$source) throw new \InvalidArgumentException('photo');
        $edge = min($size[0], $size[1]); $dimension = min(320, $edge);
        $target = imagecreatetruecolor($dimension, $dimension);
        try {
            imagefill($target, 0, 0, imagecolorallocate($target, 255, 255, 255));
            imagecopyresampled($target, $source, 0, 0, (int)(($size[0] - $edge) / 2), (int)(($size[1] - $edge) / 2), $dimension, $dimension, $edge, $edge);
            foreach ([85, 65, 45] as $quality) {
                ob_start(); try { imagejpeg($target, null, $quality); $jpeg = ob_get_contents(); } finally { ob_end_clean(); }
                if (is_string($jpeg) && strlen($jpeg) <= 102400) return $jpeg;
            }
            throw new \InvalidArgumentException('photo');
        } finally { imagedestroy($source); imagedestroy($target); }
    }
    public function store(string $uid, string $jpeg): string {
        $key = bin2hex(random_bytes(16)) . '.jpg';
        $this->folder($uid, true)->newFile($key, $jpeg);
        return $key;
    }
    public function get(string $uid, string $key): string {
        if (!preg_match('/^[a-f0-9]{32}\.jpg$/D', $key)) throw new \OutOfBoundsException('photo');
        $file = $this->folder($uid)->getFile($key);
        if ($file->getSize() > 102400) throw new \OutOfBoundsException('photo');
        return $file->getContent();
    }
    public function remove(string $uid, ?string $key): void {
        if ($key === null) return;
        if (!preg_match('/^[a-f0-9]{32}\.jpg$/D', $key)) throw new \InvalidArgumentException('photo_key');
        try { $this->folder($uid)->getFile($key)->delete(); } catch (NotFoundException) {}
    }
    public function deleteUser(string $uid): void {
        try { $this->folder($uid)->delete(); } catch (NotFoundException) {}
    }
}
