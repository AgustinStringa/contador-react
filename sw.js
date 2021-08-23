//console.log('registrado correctamente');

const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/react@17/umd/react.development.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "css/main.css",
    "components/Contador.js",
    "index.js"

];
//ES IMPORTANTE ESCRIBIR CORRECTAMENTE LAS RUTAS
const CACHE_NAME = "v2_Cache_contador_react";

const self = this;

self.addEventListener("install", (event) => {
    //console.log(event);
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            cache.addAll(CACHE_ELEMENTS)
            .then(()=> {
                self.skipWaiting()
            })
            .catch((error) => console.log(error))
        })            

    );
});

self.addEventListener("activate", (event) => {

    const cacheWhiteList = [CACHE_NAME];
    
   // console.log(cacheWhiteList);

    event.waitUntil(

        caches.keys().then((cachesName) => {
            //console.log(cachesName);
            return Promise.all(
                cachesName.map(cacheName => {
                    return (
                        cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName)
                    );
                })
            );
        }).then(() => self.clients.claim())
            
    )
});

/**
 * caches.keys() -> obtiene todos los cache creados. EN algunos casos se utilizan varios
 * por ejemplo uno estatico, uno dinamico y uno intermedio
 */


self.addEventListener("fetch", (e) => {
    
    e.respondWith(
        caches.match(e.request).then((res) => {
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    );
});

/**
 * con e.request, se hace una peticion a algun recurso
 * cuando se hace clg a e.request, debería devolverse una peticion por cada resource
 */

/**
 * la comparacion o accion a realizar es evaluar si el contenido dentro de la url de cada peticion ya existe en el cache
 */