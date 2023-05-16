const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

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

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(PRECACHE).then(function(cache) {
            return cache.addAll(PRECACHE_URLS);
        })
    );
});

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