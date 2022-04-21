self.addEventListener('install',event=>{
    console.log('Service worker installing');
    //Add a call to skipwaiting here
    self.skipWaiting();
});

self.addEventListener('activate',event=>{
    console.log("Service Worker is activated");
});

self.addEventListener('fetch',event=>{
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});