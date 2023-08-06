"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4509],{42507:(e,t,n)=>{n.r(t),n.d(t,{debounce:()=>E,events:()=>Ue,init:()=>lt,markers:()=>Ke,measure:()=>Ve,network:()=>ct,paint:()=>dt,profiler:()=>st,tag:()=>m,vitals:()=>Me});const r="<unknown>",i="undefined"==typeof window,o=new Map,a={emit(e,t){const n=o.get(e);n&&n.forEach((e=>e(t)))},on(e,t){const n=o.get(e);n?n.push(t):o.set(e,[t])},off(e,t){const n=o.get(e);if(n){if(!t)return void(n.length=0);const e=n.indexOf(t);n.splice(e)}}};class s extends Error{constructor(e){super(e+"\nThis error will be suppressed in production"),this.name="PaletteError"}}const c=e=>"scheduler"in globalThis?scheduler.postTask(e,{priority:"background"}):"function"==typeof requestIdleCallback?requestIdleCallback(e):setTimeout(e,0),u=()=>Math.random().toString(36).substring(2);let d={};const l={endpoint:"https://api.palette.dev/api/collect",plugins:[],debug:!1,enabled:!0},p=e=>Object.assign(e.bind(e,d),e),f=new Map;function m(e,t){f.set(e,t)}const v=()=>{const e=u();return m("palette.instanceId",e),e},g=new Map,h=()=>!0===g.get("enabled"),y=()=>"function"==typeof PerformanceObserver,E=(e,t,n=1e3)=>{let r;const i="number"==typeof t?t:n,o="function"==typeof t?t:()=>{};return(...t)=>{void 0===r?o(!0):(o(!1),clearTimeout(r)),r=setTimeout((()=>{e(...t),r=void 0}),i)}},b="function"==typeof CompressionStream,T=async(e,t,n)=>{if(i)return{ok:!1};const r=JSON.stringify(t),o=r.length>1e3,a=o&&b?await(async e=>{const t=new Blob([e],{type:"application/json"}).stream().pipeThrough(new CompressionStream("gzip"));return new Response(t).arrayBuffer()})(r):r,s=`${e}?${new URLSearchParams({...n,...o?{encoding:"gzip"}:{}})}`;return navigator.onLine?fetch(s,{body:a,method:"POST",keepalive:!0,priority:"low",mode:"no-cors",headers:{"Content-Type":"application/json",...o?{"Content-Encoding":"gzip"}:{}}}):{ok:!1}},w=e=>{e.buffer.length&&navigator.onLine&&(async(e,t)=>{const n=e.clear();for(const i of n)i.time=Math.trunc(i.time);const r={data:n,timeOrigin:new Date(performance.timeOrigin).toISOString(),tags:Object.fromEntries(f)};try{const e=g.get("key");if("string"!=typeof e)throw new s("Key is required");g.get("debug");const n=g.get("endpoint");await t(n,r,{key:e})}catch(e){return void console.log(e)}})(e,T)},k=[],L=()=>S.buffer.splice(0,S.buffer.length),S={clear:L,add:e=>{const t=k.push(e);a.emit("onAdd",e),t>=1e3&&(a.emit("onFull",S),L())},buffer:k};let C=-1;const A=()=>"hidden"!==document.visibilityState||document.prerendering?1/0:0,P=e=>{"visible"===document.visibilityState?C=1/0:"hidden"===document.visibilityState&&C>-1&&(C="visibilitychange"===e.type?e.timeStamp:0)},O=()=>{addEventListener("visibilitychange",P,!0),addEventListener("prerenderingchange",P,!0)},I=()=>{var e;return C<0&&(C=A(),O(),e=()=>{setTimeout((()=>{C=A(),O()}),0)},addEventListener("pageshow",(t=>{t.persisted&&e()}),!0)),{get firstHiddenTime(){return C}}},M=e=>{const t=t=>{"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},N=e=>{document.prerendering?addEventListener("prerenderingchange",(()=>e()),!0):e()};let _;var q,R,x,D,F,$=-1,B=function(e){addEventListener("pageshow",(function(t){t.persisted&&($=t.timeStamp,e(t))}),!0)},j=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},H=function(){var e=j();return e&&e.activationStart||0},z=function(e,t){var n=j(),r="navigate";return $>=0?r="back-forward-cache":n&&(document.prerendering||H()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},J=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},G=function(e,t,n,r){var i,o;return function(a){t.value>=0&&(a||r)&&((o=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=o,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},U=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},W=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},K=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},V=-1,X=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},Q=function(e){"hidden"===document.visibilityState&&V>-1&&(V="visibilitychange"===e.type?e.timeStamp:0,Z())},Y=function(){addEventListener("visibilitychange",Q,!0),addEventListener("prerenderingchange",Q,!0)},Z=function(){removeEventListener("visibilitychange",Q,!0),removeEventListener("prerenderingchange",Q,!0)},ee=function(){return V<0&&(V=X(),Y(),B((function(){setTimeout((function(){V=X(),Y()}),0)}))),{get firstHiddenTime(){return V}}},te=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},ne=[1800,3e3],re=function(e,t){t=t||{},te((function(){var n,r=ee(),i=z("FCP"),o=J("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-H(),0),i.entries.push(e),n(!0)))}))}));o&&(n=G(e,i,ne,t.reportAllChanges),B((function(r){i=z("FCP"),n=G(e,i,ne,t.reportAllChanges),U((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},ie=[.1,.25],oe={passive:!0,capture:!0},ae=new Date,se=function(e,t){q||(q=t,R=e,x=new Date,de(removeEventListener),ce())},ce=function(){if(R>=0&&R<x-ae){var e={entryType:"first-input",name:q.type,target:q.target,cancelable:q.cancelable,startTime:q.timeStamp,processingStart:q.timeStamp+R};D.forEach((function(t){t(e)})),D=[]}},ue=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){se(e,t),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,oe),removeEventListener("pointercancel",r,oe)};addEventListener("pointerup",n,oe),addEventListener("pointercancel",r,oe)}(t,e):se(t,e)}},de=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,ue,oe)}))},le=[100,300],pe=0,fe=1/0,me=0,ve=function(e){e.forEach((function(e){e.interactionId&&(fe=Math.min(fe,e.interactionId),me=Math.max(me,e.interactionId),pe=me?(me-fe)/7+1:0)}))},ge=function(){return F?pe:performance.interactionCount||0},he=[200,500],ye=0,Ee=function(){return ge()-ye},be=[],Te={},we=function(e){var t=be[be.length-1],n=Te[e.interactionId];if(n||be.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};Te[r.id]=r,be.push(r)}be.sort((function(e,t){return t.latency-e.latency})),be.splice(10).forEach((function(e){delete Te[e.id]}))}},ke=function(e,t){t=t||{},te((function(){"interactionCount"in performance||F||(F=J("event",ve,{type:"event",buffered:!0,durationThreshold:0}));var n,r=z("INP"),i=function(e){e.forEach((function(e){e.interactionId&&we(e),"first-input"===e.entryType&&!be.some((function(t){return t.entries.some((function(t){return e.duration===t.duration&&e.startTime===t.startTime}))}))&&we(e)}));var t,i=(t=Math.min(be.length-1,Math.floor(Ee()/50)),be[t]);i&&i.latency!==r.value&&(r.value=i.latency,r.entries=i.entries,n())},o=J("event",i,{durationThreshold:t.durationThreshold||40});n=G(e,r,he,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),W((function(){i(o.takeRecords()),r.value<0&&Ee()>0&&(r.value=0,r.entries=[]),n(!0)})),B((function(){be=[],ye=ge(),r=z("INP"),n=G(e,r,he,t.reportAllChanges)})))}))},Le=[2500,4e3],Se={},Ce=[800,1800],Ae=function e(t){document.prerendering?te((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},Pe=function(e,t){t=t||{};var n=z("TTFB"),r=G(e,n,Ce,t.reportAllChanges);Ae((function(){var i=j();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;n.value=Math.max(o-H(),0),n.entries=[i],r(!0),B((function(){n=z("TTFB",0),(r=G(e,n,Ce,t.reportAllChanges))(!0)}))}}))};let Oe;const Ie=e=>{const{name:t,value:n}=e;Oe.add({type:`vitals.${t.toLowerCase()}`,time:e.entries[0]?.startTime??0,value:n,details:e.entries.filter((e=>"function"==typeof e.toJSON)).map((e=>e.toJSON()))})},Me=p((({q:e})=>{i||(Oe=e,function(e,t){t=t||{},re(K((function(){var n,r=z("CLS",0),i=0,o=[],a=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=o[0],n=o[o.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}})),i>r.value&&(r.value=i,r.entries=o,n())},s=J("layout-shift",a);s&&(n=G(e,r,ie,t.reportAllChanges),W((function(){a(s.takeRecords()),n(!0)})),B((function(){i=0,r=z("CLS",0),n=G(e,r,ie,t.reportAllChanges),U((function(){return n()}))})),setTimeout(n,0))})))}(Ie,{reportAllChanges:!0}),re(Ie),function(e,t){t=t||{},te((function(){var n,r=ee(),i=z("LCP"),o=function(e){var t=e[e.length-1];t&&t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-H(),0),i.entries=[t],n())},a=J("largest-contentful-paint",o);if(a){n=G(e,i,Le,t.reportAllChanges);var s=K((function(){Se[i.id]||(o(a.takeRecords()),a.disconnect(),Se[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,s,!0)})),W(s),B((function(r){i=z("LCP"),n=G(e,i,Le,t.reportAllChanges),U((function(){i.value=performance.now()-r.timeStamp,Se[i.id]=!0,n(!0)}))}))}}))}(Ie),Pe(Ie),function(e,t){t=t||{},te((function(){var n,r=ee(),i=z("FID"),o=function(e){e.startTime<r.firstHiddenTime&&(i.value=e.processingStart-e.startTime,i.entries.push(e),n(!0))},a=function(e){e.forEach(o)},s=J("first-input",a);n=G(e,i,le,t.reportAllChanges),s&&W(K((function(){a(s.takeRecords()),s.disconnect()}))),s&&B((function(){var r;i=z("FID"),n=G(e,i,le,t.reportAllChanges),D=[],R=-1,q=null,de(addEventListener),r=o,D.push(r),ce()}))}))}(Ie),ke(Ie,{reportAllChanges:!0}))})),Ne={names:[],timestamps:[],length:0};let _e=0;const qe=(e,t)=>(_e++,a.emit(t),Ne.length++),Re=()=>0===_e,xe=()=>{Ne.length=0,Ne.timestamps.length=0,Ne.names.length=0,_e=0},De=(e,t,n)=>{_e--,Ne.timestamps[e],Re()&&(xe(),a.emit("idle"))},Fe=e=>{_e--,Re()&&(xe(),a.emit("idle"))};let $e;function Be(e,t){try{let n=e;const r=5,i=80,o=[];let a=0,s=0;const c=" > ",u=c.length;let d;for(;n&&a++<r&&(d=je(n,t),!("html"===d||a>1&&s+o.length*u+d.length>=i));)o.push(d),s+=d.length,n=n.parentNode;return o.reverse().join(c)}catch(e){return r}}function je(e,t){const n=e,r=[];let i,o,a,s,c;if(!n||!n.tagName)return"";r.push(n.tagName.toLowerCase());const u=t&&t.length?t.filter((e=>n.getAttribute(e))).map((e=>[e,n.getAttribute(e)])):null;if(u&&u.length)u.forEach((e=>{r.push(`[${e[0]}="${e[1]}"]`)}));else if(n.id&&r.push(`#${n.id}`),i=n.className,i&&"string"==typeof i)for(o=i.split(/\s+/),c=0;c<o.length;c++)r.push(`.${o[c]}`);const d=["type","name","title","alt"];for(c=0;c<d.length;c++)a=d[c],s=n.getAttribute(a),s&&r.push(`[${a}="${s}"]`);return r.join()}let He,ze;function Je(e){let t,n;try{t=e.event.target?Be(e.event.target,n):Be(e.event,n)}catch{t=r}0!==t.length&&$e.add({type:`events.${e.event.type}`,time:e.event.timeStamp,details:{target:t}})}const Ge=e=>{let t,n;return E((()=>{$e.add({type:e,time:n,value:t-n})}),(e=>{e&&(n=performance.now()),t=performance.now()}))},Ue=p((({q:e})=>{if(i)return;$e=e;const t=function(e,t=!1){return n=>{if(!n||ze===n)return;if(function(e){if("keypress"!==e.type)return!1;try{const t=e.target;if(!t||!t.tagName)return!0;if("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable)return!1}catch{}return!0}(n))return;const r="keypress"===n.type?"input":n.type;(void 0===He||function(e,t){if(!e)return!0;if(e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch{}return!1}(ze,n))&&(e({event:n,name:r,global:t}),ze=n),clearTimeout(He),He=window.setTimeout((()=>{He=void 0}),10)}}(Je,!0);addEventListener("click",t,!0),addEventListener("wheel",Ge("events.scroll"),!0),addEventListener("mousemove",Ge("events.mousemove"),!0),addEventListener("keypress",Ge("events.keypress"),!0);const{readyState:n}=document,r={once:!0,capture:!0};if("loading"===n){const t="events.dcl",n=qe(0,t);addEventListener("DOMContentLoaded",(r=>{De(n,r.timeStamp),e.add({type:t,time:0,value:r.timeStamp})}),r)}if("complete"!==n){const t="events.load",n=qe(0,t);addEventListener("load",(r=>{De(n,r.timeStamp),e.add({type:t,time:0,value:r.timeStamp})}),r)}})),We="markers.measure",Ke=p((({q:e})=>{!i&&y()&&N((()=>{const t=I(),n=new PerformanceObserver((n=>{const r=n.getEntries(),{firstHiddenTime:i}=t;r.forEach((({startTime:t,duration:n,name:r,entryType:o})=>{if(r.startsWith("GTM-")||r.includes("grammarly"))return;const a="mark"===o?"markers.mark":"measure"===o?We:"events.longtask";t<i&&e.add({type:a,time:t,value:"mark"===o?t:n,details:r})}))})),r=["mark","measure"];PerformanceObserver.supportedEntryTypes.includes("longtask")&&r.push("longtask"),r.forEach((e=>{n.observe({type:e,buffered:!0})}))}))})),Ve={start:e=>{const{startTime:t}=performance.mark(e);qe(0,We)},end:e=>{try{performance.measure(e,e)}catch(e){}Fe()}};let Xe;const Qe="undefined"!=typeof Profiler,Ye=({q:e})=>{Xe=e};let Ze,et;const tt=e=>{if(h()&&Qe)try{Ze&&!Ze.stopped||(Ze=new Profiler(e),et=performance.now(),Ze.addEventListener("samplebufferfull",nt))}catch(e){}},nt=async()=>{if(h()&&Ze&&!Ze.stopped){const e=performance.now(),t=await Ze.stop();Xe.add({type:"profile",time:et,value:e-et,details:t})}};let rt,it=!1;const ot=()=>{clearTimeout(rt),rt=globalThis.setTimeout((()=>{nt(),rt=void 0}),1e3)};let at=[];Ye.start=tt,Ye.stop=nt,Ye.on=(e,t)=>{if(!h()||!Qe)return;if(it)return;it=!0;const n=()=>{tt(t),clearTimeout(rt)};e.forEach((e=>a.on(e,n))),a.on("idle",ot),at=e},Ye.off=()=>{it&&(a.off("idle",ot),at.forEach((e=>a.off(e))),rt=void 0,it=!1)};const st=p(Ye),ct=p((({q:e})=>{if(!y())return;const t=new PerformanceObserver((t=>{t.getEntries().forEach((t=>{t.name.includes("palette.dev")||e.add({type:`network.${t.entryType}`,time:t.startTime,value:t.duration,details:t.toJSON()})}))}));["navigation","resource"].forEach((e=>{t.observe({type:e,buffered:!0})}))}));let ut;const dt=p((({q:e})=>{ut=e,!i&&y()&&N((()=>{const e=I(),t=[],n=new MessageChannel,r=()=>{n.port1.postMessage(void 0)};n.port2.onmessage=()=>t.splice(0,t.length).forEach((e=>e()));const i=[];let o=!1;const a=(t,n,r)=>{const a=[];return(s,d,l)=>{const p=a.length<3,f=p?1/0:a[0];!p&&d<f&&d>40&&s<e.firstHiddenTime?(n&&De(l),r&&i.push({delta:d,start:s,type:t}),o||(o=!0,c(u))):n&&Fe(),(p||d>f)&&(a.length<3?a.push(d):a[0]=d,a.sort(((e,t)=>e-t)))}},s=(e,n,i)=>{let o,s=!1;const c=a(e,n,i);return n=>{if(s||n===o)return;const{timeStamp:i}=n,a=qe(0,e);var u;s=!0,u=()=>{s=!1,o=void 0;const e=performance.now()-i;c(i,e,a)},1===t.push(u)&&requestAnimationFrame(r)}},u=()=>{t.length=0,i.splice(0,i.length).forEach((e=>{ut.add({type:e.type,time:e.start,value:e.delta})})),o=!1};M(u),addEventListener("mousedown",s("paint.click",!0,!1),!0),addEventListener("keydown",s("paint.keydown",!0,!1),!0),addEventListener("wheel",s("paint.scroll",!0,!0),!0),addEventListener("mousemove",s("paint.mousemove",!0,!0),!0);const d=a("paint.click",!1,!0),l=a("paint.keydown",!1,!0);new PerformanceObserver((e=>{e.getEntriesByName("keydown").forEach((e=>{const{duration:t,startTime:n}=e;l(n,t,0)})),e.getEntriesByName("click").forEach((e=>{const{duration:t,startTime:n}=e;d(n,t,0)}))})).observe({type:"event",durationThreshold:40,buffered:!0})}))})),lt=((e,t,n,r,o)=>(d.q=n,s=>{if(!performance.timeOrigin)return;const{endpoint:c,plugins:d,key:p,version:h,enabled:y,debug:b}={...l,...s},T=!!p&&y;if(g.set("debug",b),g.set("key",p),g.set("endpoint",c),g.set("enabled",T),!1===T)return;performance.mark("palette.startInit");const w=["@palette.dev/browser","1.19.0","d8f464e"];if(globalThis.__palette__||Object.defineProperty(globalThis,"__palette__",{value:{client:Object.freeze(w),endpoint:c},writable:!1}),m("palette.process","browser"),f.set("palette.client",w),h?m("palette.app",h):"PALETTE_APP_VERSION"in globalThis&&m("palette.app",PALETTE_APP_VERSION),m("palette.sessionId",u()),v(),a.on("onAdd",E(v,3e5)),a.on("onFull",(()=>r(n,t))),f.set("palette.pid",0),globalThis.location&&!f.has("palette.location")&&m("palette.location",globalThis.location.toString()),"undefined"!=typeof navigator){const e=(()=>{const e=navigator.language;if(e)return new Intl.Locale(e).region})();e&&m("palette.region",e);const t=navigator.connection?.effectiveType;t&&m("palette.connection",t)}if(e().then((()=>{o?.()})),!i){{const e=()=>{d?.forEach((e=>{e&&e()}))};document.prerendering?addEventListener("prerenderingchange",(()=>e()),!0):e()}performance.measure("palette.init","palette.startInit")}}))((async()=>{i||(f.set("palette.userAgent",{"cpu.cores":navigator.hardwareConcurrency,"gpu.model":_??r,"memory.total":navigator.deviceMemory??r}),c((()=>_=(()=>{if(!window.chrome)return"";const e=document.createElement("canvas").getContext("webgl",{powerPreference:"high-performance"});if(!e)return"";const t=e.getExtension("WEBGL_debug_renderer_info");return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):""})())))}),T,S,w,(()=>(e=>{if(i)return;const t=()=>c((()=>w(e)));a.on("onAdd",E(t,5e3)),M(t)})(S)))}}]);