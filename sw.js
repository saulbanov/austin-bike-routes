// Service worker for the hosted copy of the planner, written by biking/scripts/build_hosted.py.
// The cache name carries the first eight characters of graph.json's SHA-256, so a rebuilt graph
// replaces the old cache. Same-origin files and the Leaflet script come from the cache first;
// map tiles, OpenStreetMap search and Google Fonts always go to the network and are never cached.
const CACHE = "bike-routes-585f23d6";
const LEAFLET = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
const FILES = ["./", "index.html", "graph.json", "manifest.webmanifest", "icon-180.png", "icon-512.png", LEAFLET];

self.addEventListener("install", (ev) => {
  ev.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (ev) => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin && req.url !== LEAFLET) return;   // tiles, Photon, fonts: network only
  ev.respondWith(caches.open(CACHE)
    .then((c) => c.match(req, { ignoreSearch: true }))
    .then((hit) => hit || fetch(req)));
});
