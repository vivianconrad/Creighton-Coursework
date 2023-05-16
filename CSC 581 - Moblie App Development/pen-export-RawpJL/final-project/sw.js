const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

/* Caching the files in the PRECACHE_URLS array. */
var PRECACHE_URLS = [
    'index.html',
    './', //alias for index.html
    'css/style.css',
    'css/menuStyle.css',
    'js/main.js',
    'js/script.js',
    'images/large-taco.png',
    'images/chili-cheese-nacho.png',
    'images/La-Casa-Fiesta-Logo2.png',
    'images/La-Casa-Fiesta-Website-Header-Logo.png',
    'images/nachos.jpg',
    'images/smol-taco.png',
    'images/taco-icon.png',
    'taco.ico',
    'sw.js'
];

/* This is the service worker. It is caching the files in the PRECACHE_URLS array. */
self.addEventListener('install', function(event) {
    /* Caching the files in the PRECACHE_URLS array. */
    event.waitUntil(
        caches.open(PRECACHE).then(function(cache) {
            return cache.addAll(PRECACHE_URLS);
        })
    );
});

/* Logging to the console that the service worker is activating. */
self.addEventListener('activate', event => {
    console.log('Service worker activating...');
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});