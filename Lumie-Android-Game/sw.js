const CACHE = 'lumie-offline-v1';
const ASSETS = [
  './', './index.html', './manifest.webmanifest', './icon-512.png',
  'assets/evolution/egg.webp', 'assets/evolution/baby%20.webp', 'assets/evolution/evolution%202.webp', 'assets/evolution/evolution%203.webp', 'assets/evolution/legendary%20.webp', 'assets/evolution/Lumi%C3%A9%20pet%20movement%20.webp',
  'assets/emotion/Loved.webp', 'assets/emotion/Sleeping%20Elemental%20Baby%20Companions.webp',
  'assets/battle/Lumi%C3%A9%20Elemental%20Attack%20Powers%20Poster.webp', 'assets/battle/battle%20look.webp',
  'assets/backgrounds/battle%20field.webp', 'assets/backgrounds/dark.webp', 'assets/backgrounds/dragon.webp', 'assets/backgrounds/electric.webp', 'assets/backgrounds/fairy.webp', 'assets/backgrounds/fighting.webp', 'assets/backgrounds/fire.webp', 'assets/backgrounds/flying.webp', 'assets/backgrounds/ghost.webp', 'assets/backgrounds/grass.webp', 'assets/backgrounds/ground.webp', 'assets/backgrounds/ice.webp', 'assets/backgrounds/normal.webp', 'assets/backgrounds/physics.webp', 'assets/backgrounds/poison.webp', 'assets/backgrounds/rock.webp', 'assets/backgrounds/steel.webp', 'assets/backgrounds/stellar.webp', 'assets/backgrounds/water.webp',
  'assets/pets/normal.jpg', 'assets/pets/fire.jpg', 'assets/pets/water.jpg', 'assets/pets/grass.jpg', 'assets/pets/electric.jpg', 'assets/pets/ice.jpg', 'assets/pets/fighting.jpg', 'assets/pets/poison.jpg', 'assets/pets/ground.jpg', 'assets/pets/flying.jpg', 'assets/pets/psychic.jpg', 'assets/pets/bug.jpg', 'assets/pets/rock.jpg', 'assets/pets/ghost.jpg', 'assets/pets/dragon.jpg', 'assets/pets/dark.jpg', 'assets/pets/steel.jpg', 'assets/pets/fairy.jpg', 'assets/pets/stellar.jpg'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => caches.match('./index.html'))));
});
