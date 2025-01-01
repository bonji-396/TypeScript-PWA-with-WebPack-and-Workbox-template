declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', (event) => {
  console.log('Service Worker installed', event);
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated', event);
});

self.addEventListener('fetch', (event: FetchEvent) => {
  console.log('Fetching:', event.request.url);
});

// Service Workerのスコープ外への変数の漏洩を防ぐ
export {};
