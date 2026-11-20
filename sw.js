/* Service worker "Braga Resiliente": guarda a casca da app para abrir depressa e funcionar sem rede.
   Avisos e previsão (IPMA, Open-Meteo) vão sempre à rede; a app guarda o último resultado no telemóvel. */
const V='braga-v4',CASCA=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CASCA)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.origin===location.origin){ // página, ícones e ficheiros de configuração: rede primeiro, cache se estiver offline
    e.respondWith(fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(ch=>ch.put(r,c))}return x}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))))}
  // tudo o resto (IPMA, Open-Meteo): diretamente da rede
});
