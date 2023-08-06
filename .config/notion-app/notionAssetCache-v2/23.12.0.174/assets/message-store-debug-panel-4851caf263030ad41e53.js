"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1308],{83606:(e,t,o)=>{o.r(t),o.d(t,{MessageStoreDebugPanel:()=>I});var n=o(77094),a=o.n(n),i=o(50953),s=o(92667),d=o(68414),r=o(98649),l=o(93382),u=o(42816),c=o(96486),m=o.n(c),g=o(67294),p=o(24405),v=o(63143),M=o(41046),h=o(75233),w=o(79420),S=o(70081);const f=o(85).T9w,x=o(85).X_m,k=o(85).BQ6,b=o(85).KS0,y=o(85).MBf,Z=o(85).d8d,q=o(85).qwd,z=o(85).RiT,D=o(85).TtP,_=300,P=1*v.SecondMs,C={...l.j,fontSize:"10px",background:"black",border:"1px solid white",color:"white"},N={fontSize:"10px"};function T(e,t,o){const n=e.slice();return n.push(t),n[D]>o&&n.splice(0,n[D]-o),n}function I(){window.__c={n:"MessageStoreDebugPanel"};const[e,t]=(0,g.useState)({[z]:[],queueSize:[],[q]:[],[Z]:[]}),o=(0,g.useMemo)((()=>[{pluralName:z,stroke:"white",fill:"black",[y]:e[z]},{pluralName:"queued requests",stroke:"yellow",fill:b,[y]:e.queueSize},{pluralName:"pending unsubscribes",stroke:"springgreen",fill:b,[y]:e[q]},{pluralName:"pending evictions",stroke:"lightgray",fill:b,[y]:e[Z]}]),[e]);(0,g.useEffect)((()=>{const o=window.setTimeout((()=>{const o=(0,S.Tm)(),n=(0,S.EM)(),a=w.Z.getPendingUnsubscribeCount(),i=h.Z.getPendingEvictionCount();t({[z]:T(e[z],o._total,_),queueSize:T(e.queueSize,n.queue,_),[q]:T(e[q],a,_),[Z]:T(e[Z],i,_)})}),P);return()=>window.clearTimeout(o)}),[e]);const n=(0,p.yK)((()=>({panelStyle:{position:"fixed",right:"calc(50% - 160px)",bottom:0,width:"320px",color:"white",background:"rgba(0, 0, 0, 0.75)",padding:"8px"},headingStyle:{fontWeight:600,fontSize:"14px"}})),[]);return a()(M.Z,{open:!0},void 0,a()("div",{[k]:n.panelStyle},void 0,a()("div",{[k]:n.headingStyle},void 0,"MessageStore metrics"),a()(E,{width:304,[x]:64,dataStreams:o,maxDataLength:_,baseMaxDataValue:500,dataPointIntervalMs:P})))}function E(e){window.__c={n:"RealtimeVisualization"};const{width:t,[x]:o,dataStreams:n,maxDataLength:l,baseMaxDataValue:c,dataPointIntervalMs:p}=e,[M,h]=(0,g.useState)(),w=(0,g.useMemo)((()=>Math.max(c,...m().flatten(n.map((e=>e[y]))))),[n,c]),S=(0,g.useMemo)((()=>(0,s.Z)({range:[o,0],domain:[0,w],nice:!0})),[o,w]),Z=(0,g.useMemo)((()=>(0,s.Z)({range:[0,t],domain:[0,l-1],nice:!0})),[t,l]),q=(0,g.useCallback)((()=>h(void 0)),[]),z=(0,g.useCallback)((e=>{const{x:t}=(0,i.Z)(e)||{x:0},o=Math.round(Z.invert(t)),a=n[0][y][D];if(o>=a)return void h(void 0);const s=n[0][o],d=S(s),r=Date.now()-(a-1-o)*p;h({x:t,y:d,dataStreamIndex:o,[f]:r})}),[Z,n,S,p]);return a()("div",{},void 0,a()("svg",{width:t,[x]:o},void 0,n.map(((e,t)=>a()(d.Z,{[y]:e[y],x:(e,t)=>Z(t),y:e=>S(e),strokeWidth:1,stroke:e.stroke,fill:e.fill,yScale:S},t))),a()(r.Z,{x:0,y:0,width:t,[x]:o,fill:b,onMouseMove:z,onMouseLeave:q})),M&&a()("div",{},void 0,a()(u.Z,{top:M.y,left:M.x,[k]:C},Math.random(),a()("div",{[k]:{color:"darkgray"}},void 0,function(e){const t=Date.now()-e;return t<v.SecondMs?"just now":t<v.MinuteMs?`${Math.round(t/v.SecondMs)} seconds ago`:`${(t/v.MinuteMs).toFixed(1)} minutes ago`}(M[f])),n.map(((e,t)=>a()("div",{[k]:{color:e.stroke}},t,e[y][M.dataStreamIndex]," ",e.pluralName))))),a()("div",{[k]:N},void 0,n.map(((e,t)=>a()("div",{[k]:{color:e.stroke}},t,0===e[y][D]?"0":e[y][e[y][D]-1]," ",e.pluralName)))))}}}]);