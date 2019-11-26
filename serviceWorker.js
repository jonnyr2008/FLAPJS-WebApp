var serviceWorkerOption = {"assets":["./dist/styles.bundle.87da10efad92e7c5d935.js","./dist/app.bundle.58797c13c1199645c9b6.js","./dist/module_fsa.bundle.315bba53011c0f5f807b.js","./dist/module_nodegraph.bundle.5566f2e4af8a637ea429.js","./dist/module_pda.bundle.15b5287175092d76e3bf.js","./dist/module_re.bundle.1238e138e478a0bc9c15.js","./dist/runtime~app.bundle.fe5fb2b9acc2229f3c3c.js","./dist/vendors.bundle.7d18ef29afd88451cf9c.js","./dist/theme/duke.theme","./dist/theme/mit.theme","./dist/theme/default.theme","./dist/theme/ucsd.theme"],"hash":"qvzsigd1a"};
        
        !function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist/",r(r.s=0)}([function(e,t,r){(function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._assets=[],this._handlers=[]}var r,n,o;return r=e,(n=[{key:"register",value:function(e){return this._assets.push(e),this}},{key:"addCacheStrategyHandler",value:function(e){return this._handlers.push(e.bind(this)),this}},{key:"getAssets",value:function(){return this._assets}},{key:"getName",value:function(){return this._name}},{key:"getCacheStrategy",value:function(e,t){var r,n=!0,o=!1,i=void 0;try{for(var a,u=this._handlers[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)if(r=(0,a.value)(e,t))return r}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return null}}])&&t(r.prototype,n),o&&t(r,o),e}(),n=!1,o=!0,i=e.serviceWorkerOption.assets,a=(e.serviceWorkerOption.hash,new r("flap.js-0.4.4").register("./").register("./404.html").addCacheStrategyHandler((function(e,t){if(/\/$/.test(t.pathname))return l;switch(e.destination){case"style":case"script":case"document":case"image":return s;default:return null}})));i.forEach((function(e){return a.register(e)}));var u=[a],c=u.map((function(e){return e.getName()}));function l(e,t){return d(e,t?t.getName():null).catch((function(e){return console.error("[ServiceWorker]",e)})).then((function(t){return t||h(e)}))}function s(e,t){return h(e).catch((function(e){return console.error("[ServiceWorker]",e)})).then((function(r){return r||d(e,t?t.getName():null)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if("string"!=typeof e)throw new Error("Unable to create cache with unknown name");return console.log("[ServiceWorker] Creating cache '"+e+"' with "+t.length+" asset(s)..."),caches.open(e).then((function(e){return e.addAll(t)}))}function h(e){if(!e)throw new Error("Unable to resolve fetch from cache for null request");return caches.match(e).then((function(t){return console.log("[ServiceWorker] Resolving fetch from cache for '"+e.url+"'..."),t}))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e)throw new Error("Unable to resolve fetch from network for null request");var r=e.clone();return console.log("[ServiceWorker] Resolving fetch from network for '"+e.url+"'..."),fetch(r).then((function(r){return t?function(e,t,r){if("string"!=typeof e)throw new Error("Unable to add to cache with unknown name");if(!t)throw new Error("Unable to add to cache for null request");if(!r||200!==r.status||"basic"!==r.type)return r;var n=t.clone(),o=r.clone();return caches.open(e).then((function(e){return e.put(n,o)})),r}(t,e,r):r}))}self.addEventListener("install",(function(e){var t=[],r=!0,n=!1,i=void 0;try{for(var a,c=u[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var l=a.value,s=l.getName(),h=l.getAssets();t.push(f(s,h))}}catch(e){n=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}o&&self.skipWaiting(),e.waitUntil(Promise.all(t))})),self.addEventListener("activate",(function(e){var t=c,r=caches.keys().then((function(e){return Promise.all(e.map((function(e){if(!t||!t.includes(e))return console.log("[ServiceWorker] Removing outdated cache '"+e+"'..."),caches.delete(e)})))}));return e.waitUntil(r),self.clients.claim()})),self.addEventListener("fetch",(function(e){var t=e.request,r=new URL(t.url);if(!n&&"GET"===t.method&&r.origin===self.location.origin){var o=!0,i=!1,a=void 0;try{for(var c,s=u[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var f=c.value,h=f.getCacheStrategy(t,r);if(h)return void e.respondWith(h(t,f))}}catch(e){i=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}}e.respondWith(l(t,null))}))}).call(this,r(1))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}]);