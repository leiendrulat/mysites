!function(){"use strict";const e=["client/food.a92149e6.js","client/index.3d2e88d3.js","client/contact.2b29507f.js","client/bloggy.3da1cbfa.js","client/index.5fdceda9.js","client/whygo.d9eadbb6.js","client/index.84c93265.js","client/about.fb31b841.js","client/[slug].87156e4e.js","client/index.0fad2a1c.js","client/[slug].41543ea2.js","client/works.1de93d39.js","client/client.ff6d4d21.js"].concat(["service-worker-index.html","apt.jpg","cm.png","favicon.png","fb.jpg","global.css","house.png","logo-192.png","logo-512.png","manifest.json","me.jpg","me.png","of.jpg","of1.jpg","of2.jpg","of3.jpg","office2.png","office_bldg.jpg","successkid.jpg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1593974592068").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1593974592068"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1593974592068").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
