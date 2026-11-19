/* Lamp & Path service worker: keeps the app working without a connection.
   The page is one self-contained file (styles, script, fonts and verses are inside it),
   so caching a handful of files is enough. */
const VERSION = "e68f62d906";
const CACHE = "lamp-and-path-" + VERSION;
const FILES = [
  "index.html",
  "manifest.json",
  "icon.svg",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    /* "reload" skips the browser's own HTTP cache, so a new version is really fetched */
    await Promise.all(FILES.map(async (f) => {
      const req = new Request(f, { cache: "reload" });
      const res = await fetch(req);
      if (!res.ok) throw new Error(f + " " + res.status);
      await cache.put(req, res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.indexOf("lamp-and-path-") === 0 && k !== CACHE) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

const withTimeout = (p, ms) => new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error("slow")), ms);
  p.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
});

/* Opening the app: the network first (so updates arrive), the saved copy if it is offline or slow. */
async function openApp(req) {
  const cache = await caches.open(CACHE);
  const saved = async () => (await cache.match("index.html")) || (await cache.match("./"));
  try {
    const res = await withTimeout(fetch(req, { cache: "no-cache" }), 4000);
    if (res && res.ok) {
      if (!res.redirected) cache.put("index.html", res.clone());
      return res;
    }
    return (await saved()) || res;
  } catch (e) {
    return (await saved()) || Response.error();
  }
}

/* Everything else is saved at install time, so serve it from there. */
async function fromCache(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req, { ignoreSearch: true });
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; /* Bible Gateway, Google Calendar and so on go straight out */
  event.respondWith(req.mode === "navigate" ? openApp(req) : fromCache(req));
});
