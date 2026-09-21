const BUILD='v35-self-destruct';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    try{
      const keys=await caches.keys();
      await Promise.all(keys.filter(k=>/^jw-tizi-|^ciao-tiziano-/i.test(k)).map(k=>caches.delete(k)));
    }catch(e){}
    try{await self.registration.unregister();}catch(e){}
    try{await self.clients.claim();}catch(e){}
  })());
});
