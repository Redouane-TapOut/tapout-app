self.addEventListener("install", e => {
  console.log("Service Worker installé");
  e.waitUntil(
    caches.open("tapout-cache").then(cache => cache.addAll(["./", "./index.html"]))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});