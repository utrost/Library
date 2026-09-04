<?php

declare(strict_types=1);

return [
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
        ['name' => 'root#save', 'url' => '/roots', 'verb' => 'POST'],
        ['name' => 'scan#run', 'url' => '/scan', 'verb' => 'POST'],
        ['name' => 'item#update', 'url' => '/items/{itemId}', 'verb' => 'POST'],
    ],
];
