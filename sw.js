/**
 * Chronoflow Service Worker
 * Handles background notifications and app lifecycle
 * Critical for notifications on Brave Android
 * FIXED: Cache handling and fetch strategies
 */

const CACHE_VERSION = 'chronoflow-v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js'
];

/**
 * Install event: Pre-cache assets
 */
self.addEventListener('install', (event) => {
  console.debug('[SW] Installing service worker');
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(CACHE_ASSETS).catch((err) => {
        console.warn('[SW] Cache assets failed:', err.message);
        // Continue even if caching fails
      });
    })
  );
  self.skipWaiting();
});

/**
 * Activate event: Clean up old caches
 */
self.addEventListener('activate', (event) => {
  console.debug('[SW] Activating service worker');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.debug('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

/**
 * Fetch event: Network-first strategy
 * Try network first, fall back to cache
 * FIXED: Properly await cache operations
 */
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        // Cache successful responses
        if (response && response.status === 200) {
          try {
            const cache = await caches.open(CACHE_VERSION);
            cache.put(event.request, response.clone());
          } catch (err) {
            console.warn('[SW] Cache put failed:', err.message);
          }
        }
        return response;
      })
      .catch(async () => {
        // Fall back to cache if network fails
        try {
          return await caches.match(event.request);
        } catch (err) {
          console.warn('[SW] Cache match failed:', err.message);
          return null;
        }
      })
  );
});

/**
 * Push event: Handle push notifications
 * Triggered by backend notifications (if enabled in future)
 */
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const options = {
    body: data.body || 'Notification from Chronoflow',
    badge: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%236366f1%22/%3E%3C/svg%3E',
    icon: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%236366f1%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2235%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22/%3E%3C/svg%3E',
    tag: 'chronoflow',
    requireInteraction: data.requireInteraction !== false
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'Chronoflow', options)
  );
});

/**
 * Notification click: Handle user interaction
 */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // Focus existing window if available
      for (let client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new window if none available
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

/**
 * Message event: Handle messages from app
 */
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
