var CACHENAME = 'SyndLocat';
var dataCacheName = 'Syn-d-Loc';
var urlsToCache = [
  '/becode-AHOD2/',
  '/becode-AHOD2/index.html',
  '/becode-AHOD2/assent/style.css',
  '/becode-AHOD2/assent/img/ACTION DU SL AU PETERBOS.png',
  '/becode-AHOD2/assent/img/ACTION SYNDICALE AU PETERBOS.png',
  '/becode-AHOD2/assent/img/ag-locametre.png',
  '/becode-AHOD2/assent/img/bonne-annee-2018.png',
  '/becode-AHOD2/assent/img/cours-de-formation-24-mai-2018.png',
  '/becode-AHOD2/assent/img/cours-de-formation-calcul-du-loyer-dans-les-logements-sociaux-2.png',
  '/becode-AHOD2/assent/img/education.png',
  '/becode-AHOD2/assent/img/fete-du-square-albert-12-mai-2018.png',
  '/becode-AHOD2/assent/img/fetes-de-fin-dannee.png',
  '/becode-AHOD2/assent/img/FWB.png',
  '/becode-AHOD2/assent/img/la-flandre-institutionnalise-les-discriminations-au-logement.png',
  '/becode-AHOD2/assent/img/Le Phare N°133.png',
  '/becode-AHOD2/assent/img/Le Phare N°134.png',
  '/becode-AHOD2/assent/img/le-locametre-wadesda.png',
  '/becode-AHOD2/assent/img/nos-horaires.png',
  '/becode-AHOD2/assent/img/RADIO PANIK.png',
  '/becode-AHOD2/assent/img/sandpaper.png',
  '/becode-AHOD2/assent/img/video discriminations.png',
  '/becode-AHOD2/assent/pdf/Le Phare N°132.pdf',
  '/becode-AHOD2/assent/pdf/Le Phare N°133.pdf',
  '/becode-AHOD2/assent/pdf/slrb.pdf',
  '/becode-AHOD2/assent/pdf/Vous-voulez-nous-contacter.pdf',
  '/becode-AHOD2/assent/vedeo/BRIQUE D’OR 2018 SLRB.mp4',
  '/becode-AHOD2/assent/js/pagination.js',
  '/becode-AHOD2/assent/js/script.js',
  '/becode-AHOD2/assent/js/snippet.js',
  '/becode-AHOD2/icon192.png',
  '/becode-AHOD2/icon512.png',
  '/becode-AHOD2/serv-work.js'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(CACHENAME).then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
    );
  });
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHENAME && key !== dataCacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
    );
    return self.clients.claim();
  }); 
  /*self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });*/
  
  self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
    if (e.request.url.indexOf(dataUrl) > -1) {
      /*
       * When the request URL contains dataUrl, the app is asking for fresh
       * weather data. In this case, the service worker always goes to the
       * network and then caches the response. This is called the "Cache then
       * network" strategy:
       * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
       */
      e.respondWith(
        caches.open(dataCacheName).then(function(cache) {
          return fetch(e.request).then(function(response){
            cache.put(e.request.url, response.clone());
            return response;
          });
        })
      );
    } else {
      /*
       * The app is asking for app shell files. In this scenario the app uses the
       * "Cache, falling back to the network" offline strategy:
       * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
       */
      e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
    }
  });