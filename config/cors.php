<?php

return [

      'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:8000', // add backend origin if needed
    'http://127.0.0.1:8000', // add backend origin if frontend calls from same host
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
