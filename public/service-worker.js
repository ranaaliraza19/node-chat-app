const cacheName = 'chat-app-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/chat.html',
  '/css/styles.min.css',
  '/js/chat.js',
  '/img/favicon.png',
  '/socket.io/socket.io.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
