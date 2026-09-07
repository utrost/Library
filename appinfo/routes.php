<?php

declare(strict_types=1);

return [
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'root#save', 'url' => '/roots', 'verb' => 'POST'],
        ['name' => 'root#update', 'url' => '/roots/{rootId}', 'verb' => 'POST'],
        ['name' => 'root#toggle', 'url' => '/roots/{rootId}/toggle', 'verb' => 'POST'],
        ['name' => 'root#delete', 'url' => '/roots/{rootId}/delete', 'verb' => 'POST'],
        ['name' => 'scan#run', 'url' => '/scan', 'verb' => 'POST'],
        ['name' => 'scan#runRoot', 'url' => '/scan/roots/{rootId}', 'verb' => 'POST'],
        ['name' => 'scan#retryMetadataErrors', 'url' => '/scan/retry-metadata-errors', 'verb' => 'POST'],
        ['name' => 'scan#recheckMissingFiles', 'url' => '/scan/recheck-missing-files', 'verb' => 'POST'],
        ['name' => 'scan#progress', 'url' => '/scan/progress', 'verb' => 'GET'],
        ['name' => 'export#metadata', 'url' => '/export/metadata', 'verb' => 'GET'],
        ['name' => 'import#preview', 'url' => '/import/metadata/preview', 'verb' => 'POST'],
        ['name' => 'import#apply', 'url' => '/import/metadata/apply', 'verb' => 'POST'],
        ['name' => 'item_page#show', 'url' => '/items/{itemId}', 'verb' => 'GET'],
        ['name' => 'item#resetfield', 'url' => '/items/{itemId}/reset-field', 'verb' => 'POST'],
        ['name' => 'item#resetfields', 'url' => '/items/{itemId}/reset-fields', 'verb' => 'POST'],
        ['name' => 'item#update', 'url' => '/items/{itemId}', 'verb' => 'POST'],
        ['name' => 'item#forgetMissing', 'url' => '/items/{itemId}/forget-missing', 'verb' => 'POST'],
        ['name' => 'cover#show', 'url' => '/items/{itemId}/cover', 'verb' => 'GET'],
        ['name' => 'tag#assign', 'url' => '/items/{itemId}/tags', 'verb' => 'POST'],
        ['name' => 'tag#remove', 'url' => '/items/{itemId}/tags/{tagId}', 'verb' => 'POST'],
        ['name' => 'comment#add', 'url' => '/items/{itemId}/comments', 'verb' => 'POST'],
    ],
];
