const CACHE_NAME = "nursevoice-stage2-v1";
const FILES = ["./","./index.html","./manifest.json"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  // Remove only older NurseVoice Stage 2 shell caches. Preserve other caches,
  // including Transformers.js model caches used by Stage 1.
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("nursevoice-stage2-") && k !== CACHE_NAME)
        .map(k => caches.delete(k))
  )));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match("./index.html"))));
});