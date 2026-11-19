const CACHE_NAME = "nursevoice-stage1-v1";
const APP_FILES = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET") return;

  // Cache the app's own files and the Transformers.js CDN module for offline reopening.
  const isAppFile = url.origin === self.location.origin;
  const isLibrary = url.hostname === "cdn.jsdelivr.net";
  if (!isAppFile && !isLibrary) return;

  if (isAppFile && request.mode === "navigate") {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
      return response;
    }).catch(() => caches.match("./index.html")));
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
      return network.catch(() => {
        if (cached) return cached;
        throw new Error("This resource is not cached. Connect to the internet and reopen NurseVoice once.");
      });
    })
  );
});
