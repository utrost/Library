<?php

declare(strict_types=1);

return [
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'root#save', 'url' => '/roots', 'verb' => 'POST'],
        ['name' => 'scan#run', 'url' => '/scan', 'verb' => 'POST'],
        ['name' => 'item#update', 'url' => '/items/{itemId}', 'verb' => 'POST'],
        ['name' => 'cover#show', 'url' => '/items/{itemId}/cover', 'verb' => 'GET'],
        ['name' => 'tag#assign', 'url' => '/items/{itemId}/tags', 'verb' => 'POST'],
        ['name' => 'comment#add', 'url' => '/items/{itemId}/comments', 'verb' => 'POST'],
    ],
];
