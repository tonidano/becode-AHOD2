let cache = 'SyndLocat';
var dataCacheName = 'Syn-d-Loc';
var urlsToCache = [
  '.',
  './index.html',
  './assent/style.css',
  './assent/img/ACTION DU SL AU PETERBOS.png',
  './assent/img/ACTION SYNDICALE AU PETERBOS.png',
  './assent/img/ag-locametre.png',
  './assent/img/bonne-annee-2018.png',
  './assent/img/cours-de-formation-24-mai-2018.png',
  './assent/img/cours-de-formation-calcul-du-loyer-dans-les-logements-sociaux-2.png',
  './assent/img/education.png',
  './assent/img/fete-du-square-albert-12-mai-2018.png',
  './assent/img/fetes-de-fin-dannee.png',
  './assent/img/FWB.png',
  './assent/img/la-flandre-institutionnalise-les-discriminations-au-logement.png',
  './assent/img/Le Phare N°133.png',
  './assent/img/Le Phare N°134.png',
  './assent/img/le-locametre-wadesda.png',
  './assent/img/nos-horaires.png',
  './assent/img/RADIO PANIK.png',
  './assent/img/sandpaper.png',
  './assent/img/video discriminations.png',
  './assent/pdf/Le Phare N°132.pdf',
  './assent/pdf/Le Phare N°133.pdf',
  './assent/pdf/slrb.pdf',
  './assent/pdf/Vous-voulez-nous-contacter.pdf',
  './assent/vedeo/BRIQUE D’OR 2018 SLRB.mp4',
  './assent/js/pagination.js',
  './assent/js/script.js',
  './assent/js/snippet.js',
  './icon192.png',
  './icon512.png',
  './serv-work.js'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cache).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
    );
  });

// self.addEventListener('activate', function(e) {
//     console.log('[ServiceWorker] Activate');
//     e.waitUntil(
//       caches.keys().then(function(keyList) {
//         return Promise.all(keyList.map(function(key) {
//           if (key !== cacheName && key !== dataCacheName) {
//             console.log('[ServiceWorker] Removing old cache', key);
//             return caches.delete(key);
//           }
//         }));
//       })
//     );
//     return self.clients.claim();
//   }); 
//   self.addEventListener('fetch', function(e) {
//     console.log('[ServiceWorker] Fetch', e.request.url);
//     e.respondWith(
//       caches.match(e.request).then(function(response) {
//         return response || fetch(e.request);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', function(e) {
//     console.log('[Service Worker] Fetch', e.request.url);
//     var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
//     if (e.request.url.indexOf(dataUrl) > -1) {
//       /*
//        * When the request URL contains dataUrl, the app is asking for fresh
//        * weather data. In this case, the service worker always goes to the
//        * network and then caches the response. This is called the "Cache then
//        * network" strategy:
//        * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
//        */
//       e.respondWith(
//         caches.open(dataCacheName).then(function(cache) {
//           return fetch(e.request).then(function(response){
//             cache.put(e.request.url, response.clone());
//             return response;
//           });
//         })
//       );
//     } else {
//       /*
//        * The app is asking for app shell files. In this scenario the app uses the
//        * "Cache, falling back to the network" offline strategy:
//        * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
//        */
//       e.respondWith(
//         caches.match(e.request).then(function(response) {
//           return response || fetch(e.request);
//         })
//       );
//     }
//   });