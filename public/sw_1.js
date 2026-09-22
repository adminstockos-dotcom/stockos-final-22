// STOCKOS V32 - SuperAdmin Solo - Sin Landing - SW acorde a HTML
const CACHE_NAME = 'stockos-v32-superadmin-solo';
const URLS_TO_CACHE = [
  'LOGIN-SUPERADMIN.html',
  '01-ADMIN-FINAL-ESTABLE-CORRIGIDO.html',
  'PANEL-EMPRESA-FINAL-BLINDADO-6MODULOS.html',
  'MAXIMA-PWA-FINAL-BLINDADA.html',
  'manifest.json'
];

self.addEventListener('install', e => {
  console.log('[SW V32] Install - precache SuperAdmin sin landing');
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
    .then(()=> self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log('[SW V32] Activate - limpia caches viejos');
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
    .then(()=> self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      // No cachear CDN
      if(e.request.url.includes('cdn.tailwindcss.com') || e.request.url.includes('supabase') || e.request.url.includes('jsbarcode')){
        return resp;
      }
      return caches.open(CACHE_NAME).then(cache => {
        cache.put(e.request, resp.clone());
        return resp;
      });
    }).catch(()=> {
      if(e.request.headers.get('accept')?.includes('text/html')){
        return caches.match('LOGIN-SUPERADMIN.html');
      }
    }))
  );
});
