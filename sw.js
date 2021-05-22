var appVersion = "v1";

var files = [

    './',
    './index.html',
    './assets/css/style.css',
    './images/logo192.jpg',
    './img/product-details/add-12.png',
    './img/product-details/product-detail-1.jpg',
    './img/product-details/product-detail-2.png',
    './img/product-details/product-detail-3.png',
    './img/product-details/product-detail-4.png',
    './img/product-details/product-detail-5.png',
    './img/projects/add-1.png',
    './img/projects/pro-1.png',
    './img/projects/pro-2.png',
    './img/projects/pro-3.png',
    './img/projects/pro-4.png',
    './img/projects/pro-5.png',
    './services/cleaning.jpeg',
    './services/EPC.jpg',
    './services/install.jpg',
    './assets/img/about.png',
    './assets/img/add-1.png',
    './assets/img/pro-1.jpg',
    './assets/img/pro-2.png',
    './assets/img/pro-3.png',
    './assets/img/pro-4.png',
    './assets/img/pro-5.png',
    '/assets/js/main.js',
    '/assets/js/success.js',
    '/assets/vendor',

    




]

//install

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open(appVersion)
        .then(cache => {
            return cache.addAll(files)
            .catch(err => {
                console.error("error adding files", err);
            })

        })
    )
    console.info('sw installed');
    self.skipWaiting();
})

//activate
self.addEventListener('activate', event =>{
    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== appVersion){
                        console.info("deleting old cache", cache)
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
    return self.clients.claim();
})

//fetch
self.addEventListener("fetch", event =>{
    console.info("sw fetch", event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(res => {
            return res || fetch(event.request);
        })
    )
})
