self.addEventListener("install", e=> {

    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["/", "./assests/css/style.css", "./images/logo192.png"]);
        })
    )
    
})

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})