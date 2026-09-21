const CACHE = 'ciao-tiziano-google-v33-20260921';
const ASSETS = [
  './manifest.webmanifest?v=33',
  './icon-180.png?v=33',
  './icon-192.png?v=33',
  './icon-512.png?v=33',
  './home-hero-google.jpg?v=33'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, {cache:'no-store'}).catch(()=>caches.match('./index.html')));
    return;
  }

  event.respondWith((async()=>{
    try {
      const response = await fetch(event.request, {cache:'no-store'});
      const copy=response.clone();
      caches.open(CACHE).then(c=>c.put(event.request,copy)).catch(()=>{});
      return response;
    } catch(e) {
      return (await caches.match(event.request)) || Response.error();
    }
  })());
});
