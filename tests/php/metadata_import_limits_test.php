<?php

declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/lib/Service/ItemService.php';

use OCA\Library\Service\ItemService;

function metadataImportExpect(bool $condition, string $message): void {
    if (!$condition) {
        fwrite(STDERR, "Metadata import limits failed: {$message}\n");
        exit(1);
    }
}

$service = (new ReflectionClass(ItemService::class))->newInstanceWithoutConstructor();
$preview = static fn (string $json): array => $service->previewCorrectedMetadataImport('alice', $json);
$apply = static fn (string $json): array => $service->applyCorrectedMetadataImport('alice', $json);

$limit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_JSON_BYTES');
metadataImportExpect(is_int($limit) && $limit > 0, 'documented byte limit constant exists');

$oversizedInvalidJson = str_repeat('{', $limit + 1);
$oversizedPreview = $preview($oversizedInvalidJson);
metadataImportExpect($oversizedPreview['valid'] === false, 'oversized preview is rejected');
metadataImportExpect($oversizedPreview['error'] === 'payload_too_large', 'oversized preview is rejected before json_decode invalid_json');
metadataImportExpect(($oversizedPreview['httpStatus'] ?? null) === 413, 'oversized preview carries bounded 413 status');
metadataImportExpect(strlen(json_encode($oversizedPreview, JSON_THROW_ON_ERROR)) < 2048, 'oversized preview response is bounded');

$oversizedApply = $apply($oversizedInvalidJson);
metadataImportExpect($oversizedApply['valid'] === false, 'oversized apply is rejected');
metadataImportExpect($oversizedApply['error'] === 'payload_too_large', 'oversized apply is rejected before json_decode invalid_json');
metadataImportExpect(($oversizedApply['httpStatus'] ?? null) === 413, 'oversized apply carries bounded 413 status');

$itemLimit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_ITEMS');
$tooManyItems = json_encode([
    'exportKind' => 'library-corrected-metadata',
    'items' => array_fill(0, $itemLimit + 1, ['cachedPath' => 'missing.epub']),
], JSON_THROW_ON_ERROR);
$tooManyPreview = $preview($tooManyItems);
metadataImportExpect($tooManyPreview['valid'] === false && $tooManyPreview['error'] === 'too_many_items', 'item count is structurally bounded');
metadataImportExpect(($tooManyPreview['httpStatus'] ?? null) === 413, 'too many items maps to 413');
metadataImportExpect(count($tooManyPreview['items']) === 0, 'structural rejection has no per-item report');

$fieldLimit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_FIELDS_PER_ITEM');
$manyFields = ['cachedPath' => 'missing.epub'];
for ($i = 0; $i < $fieldLimit + 1; $i++) {
    $manyFields['field' . $i] = 'value';
}
$manyFieldsPreview = $preview(json_encode($manyFields, JSON_THROW_ON_ERROR));
metadataImportExpect($manyFieldsPreview['valid'] === false && $manyFieldsPreview['error'] === 'too_many_fields', 'fields per item are bounded');

$listLimit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_LIST_VALUES');
$longListPreview = $preview(json_encode(['cachedPath' => 'missing.epub', 'subjects' => array_fill(0, $listLimit + 1, 'x')], JSON_THROW_ON_ERROR));
metadataImportExpect($longListPreview['valid'] === false && $longListPreview['error'] === 'too_many_list_values', 'multi-value list lengths are bounded');

$stringLimit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_STRING_BYTES');
$longStringPreview = $preview(json_encode(['cachedPath' => 'missing.epub', 'title' => str_repeat('x', $stringLimit + 1)], JSON_THROW_ON_ERROR));
metadataImportExpect($longStringPreview['valid'] === false && $longStringPreview['error'] === 'string_too_long', 'string byte lengths are bounded');

$depthLimit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_NESTING_DEPTH');
$nested = '"x"';
for ($i = 0; $i < $depthLimit + 2; $i++) {
    $nested = '[' . $nested . ']';
}
$deepPreview = $preview($nested);
metadataImportExpect($deepPreview['valid'] === false, 'nesting depth is bounded');
metadataImportExpect(in_array($deepPreview['error'], ['invalid_json', 'nesting_too_deep'], true), 'deep nesting is rejected safely');

$reportLimit = (new ReflectionClass(ItemService::class))->getConstant('METADATA_IMPORT_MAX_REPORT_ITEMS');
$manyInvalid = array_fill(0, $reportLimit + 25, null);
$reportPreview = $preview(json_encode(['exportKind' => 'library-corrected-metadata', 'items' => $manyInvalid], JSON_THROW_ON_ERROR));
metadataImportExpect($reportPreview['valid'] === true, 'valid imports within structural limits still preview');
metadataImportExpect($reportPreview['totalItems'] === $reportLimit + 25, 'preview total counts all import items');
metadataImportExpect($reportPreview['invalidItems'] === $reportLimit + 25, 'preview counters are not truncated');
metadataImportExpect(count($reportPreview['items']) === $reportLimit, 'preview report items are truncated to a safe bound');
metadataImportExpect(($reportPreview['reportTruncated'] ?? false) === true, 'preview advertises report truncation');

$controllerSource = file_get_contents(dirname(__DIR__, 2) . '/lib/Controller/ImportController.php');
metadataImportExpect(is_string($controllerSource), 'ImportController source is readable');
metadataImportExpect(strpos($controllerSource, '#[NoCSRFRequired]' . "\n" . '    public function preview') === false, 'preview action is not marked NoCSRFRequired');

$roundTrip = ['schemaVersion' => 1, 'exportKind' => 'library-corrected-metadata', 'items' => []];
$roundTripPreview = $preview(json_encode($roundTrip, JSON_THROW_ON_ERROR));
metadataImportExpect($roundTripPreview['valid'] === true && $roundTripPreview['totalItems'] === 0, 'valid empty export round-trips through preview');
$roundTripApply = $apply(json_encode($roundTrip, JSON_THROW_ON_ERROR));
metadataImportExpect($roundTripApply['valid'] === true && $roundTripApply['totalItems'] === 0, 'valid empty export round-trips through apply');

echo "Metadata import limits: 24 cases passed\n";
