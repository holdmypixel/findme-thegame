const CACHE_NAME = 'hiddo-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/normalize.css',
  '/css/main.css',
  '/js/init.js',
  '/js/vendor/jquery.min.js',
  '/js/vendor/mobile-detect.js',
  '/js/vendor/createjs.min.js',
  '/js/vendor/TweenMax.min.js',
  '/icons/web/favicon.ico',
  '/icons/web/icon-192.png',
  '/icons/web/icon-192-maskable.png',
  '/icons/web/icon-512.png',
  '/icons/web/icon-512-maskable.png',
  '/icons/web/apple-touch-icon.png',
  '/manifest.json',
  '/share.jpg'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Cache strategy: Network First, fallback to Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If response is valid, clone and save to cache
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try to get from cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If it's a navigation and not in cache, return main page
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      })
  );
});
