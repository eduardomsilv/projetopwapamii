self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static-v1')
            .then(cache => cache.add('/cat.svg'))
    );
});

self.addEventListener('activate', e => {});

self.addEventListener('fetch', fetchEvent => {
    console.log("Interceptado evento fetch");
    console.fir(fetchEvent);
});

