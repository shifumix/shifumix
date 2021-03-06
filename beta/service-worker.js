/**
 * Check out https://googlechrome.github.io/sw-toolbox/docs/master/index.html for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

// self.addEventListener("fetch", function(event) {
//   // If the request in GET, let the network handle things,
//   if (event.request.method !== 'GET') {
//     return;
//   }
//   // here we block the request and handle it our selves
//   event.respondWith(
//     // Returns a promise of the cache entry that matches the request
//     caches
//       .match(event.request)
//       .then(function(response) {
//         if (response) {
//           // our responce is in the cache, let's return that instead
//           return response;
//         }
//         // if the responce is not in the cache, let's fetch it
//         return fetch(event.request)
//           .then(function(response) {
//             // we have a responce from the network
//             return response;
//           }).catch(function(error) {
//             // Something happened
//             console.error('Fetching failed:', error);
//             throw error;
//           });
//       })
//   );
// });

self.toolbox.options.cache = {
  name: 'ionic-cache',
  maxAgeSeconds: 60*8
};

// pre-cache our key assets
//retiré : './build/main.js',
self.toolbox.precache(
  [
    './build/main.css',
    './build/polyfills.js',
    './assets/img/splash1.webp',
    './assets/img/splash2.webp',
    './assets/img/splash3.webp',
    './assets/img/splash4.webp',
    './assets/img/splash5.webp',
    './assets/img/splash6.webp',
    './assets/img/splash7.webp',
    './assets/img/splash8.webp',
    './assets/img/splash9.webp',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/app/*', self.toolbox.cacheFirst);
self.toolbox.router.any('/_ah/api/*', self.toolbox.networkOnly);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
