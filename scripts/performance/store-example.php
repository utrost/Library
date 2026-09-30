<?php
// Synthetic tutorial EPUB, used only in a labelled disposable screenshot instance.
declare(strict_types=1);
define('OC_CONSOLE', true);
require '/var/www/html/lib/base.php';
$home = \OC::$server->get(\OCP\Files\IRootFolder::class)->getUserFolder('library-smoke');
$folder = $home->newFolder('Metadata examples');
$language = $folder->newFolder('english_fiction');
$author = $language->newFolder('Jane Austen');
$tmp = tempnam(sys_get_temp_dir(), 'library-store-example-');
try {
    $zip = new ZipArchive();
    $zip->open($tmp, ZipArchive::OVERWRITE);
    $zip->addFromString('mimetype', 'application/epub+zip');
    $zip->setCompressionName('mimetype', ZipArchive::CM_STORE);
    $zip->addFromString('META-INF/container.xml', '<?xml version="1.0"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>');
    $zip->addFromString('content.opf', '<?xml version="1.0"?><package xmlns="http://www.idpf.org/2007/opf" version="2.0" unique-identifier="id"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="id">library-tutorial</dc:identifier><dc:title>Metadata tutorial</dc:title></metadata><manifest><item id="chapter" href="chapter.xhtml" media-type="application/xhtml+xml"/></manifest><spine><itemref idref="chapter"/></spine></package>');
    $zip->addFromString('chapter.xhtml', '<html xmlns="http://www.w3.org/1999/xhtml"><head><title>Metadata tutorial</title></head><body><p>Synthetic filename extraction example; not the complete book.</p></body></html>');
    $zip->close();
    $author->newFile('Pride and Prejudice - Jane Austen (1813).epub', file_get_contents($tmp));
} finally {
    unlink($tmp);
}
$root = \OC::$server->get(\OCA\Library\Service\RootService::class)->saveRoot('library-smoke', '/Metadata examples', 'Metadata examples', true);
$result = \OC::$server->get(\OCA\Library\Service\LibraryScanner::class)->scan('library-smoke', (int)$root['id']);
if ($result['errors']) throw new RuntimeException('Tutorial fixture did not index');
echo json_encode(['rootId' => $root['id']]), PHP_EOL;
