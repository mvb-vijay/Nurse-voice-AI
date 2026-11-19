const CACHE_NAME="nursevoice-stage1-v11";
const APP_FILES=["./","./index.html","./manifest.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_FILES)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("nursevoice-stage1-")&&k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener("fetch",e=>{
 const r=e.request,u=new URL(r.url);if(r.method!=="GET")return;
 const local=u.origin===self.location.origin,cdn=u.hostname==="cdn.jsdelivr.net";if(!local&&!cdn)return;
 if(local&&r.mode==="navigate"){e.respondWith(fetch(r).then(res=>{if(res.ok)caches.open(CACHE_NAME).then(c=>c.put("./index.html",res.clone()));return res;}).catch(()=>caches.match("./index.html")));return;}
 e.respondWith(caches.match(r).then(hit=>fetch(r).then(res=>{if(res.ok)caches.open(CACHE_NAME).then(c=>c.put(r,res.clone()));return res;}).catch(()=>{if(hit)return hit;throw new Error("Resource not cached. Connect to internet and reopen NurseVoice.");})));
});