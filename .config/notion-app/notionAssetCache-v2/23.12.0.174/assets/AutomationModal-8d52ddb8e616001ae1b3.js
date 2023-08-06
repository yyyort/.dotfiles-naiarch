"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5645],{78737:(e,t,o)=>{o.r(t),o.d(t,{AutomationModal:()=>V});var n=o(77094),i=o.n(n),a=o(67294),r=o(480),l=o(81954),c=o(24405),s=o(63362),u=o(5366),d=o(82990),p=o(17809),f=o(63474),m=o(79315),g=o(58454),v=o(39098),k=o(42922),b=o(1743),w=o(53953),y=o(89728),x=o(31278),Z=o(65187);const S=o(85).G1e,h=o(85).fBu,C=o(85).pkR,M=o(85).mFu,A=o(85).Yzm,W=o(85).Dd5,_=o(85).MQR,B=o(85).jkI,I=o(85).rps,K=o(85).$bT,L=o(85).urI,T=o(85).wJk,D=o(85).GiO,E=o(85).sI1,R=(0,u.defineMessages)({confirmationDialogAriaLabel:{defaultMessage:"Confirmation",id:"automations.ConfirmationDialog.ariaLabel"}});function V(){window.__c={n:"AutomationModal"};const e=(0,l.VK)((()=>g.Z.state),[]),t=(0,r.Fy)(),o=(0,l.VK)((()=>t.isPhone),[t]),n=(0,c.yK)((e=>({[E]:{padding:24,width:o?"calc(100% - 20px)":320}})),[o]),u=(0,f.D)(),d=(0,l.VK)((()=>{var e;return null===(e=m.default.state[D])||void 0===e?void 0:e.getSpaceId()}),[]),p=(0,a.useCallback)((e=>{g.Z.setState({open:!1,result:e});const t=g.Z.state;(0,s.W5)(u,{automation_id:t.open&&t.recordStore instanceof v.Mz?t.recordStore.id:void 0,option:e})}),[u]),k=(0,a.useCallback)((()=>p("cancel")),[p]),b=function(){const e=(0,l.VK)((()=>g.Z.state),[]),[t,o]=(0,a.useReducer)(((e,t)=>e+1),1),n=(0,a.useRef)(void 0);return(0,a.useEffect)((()=>{e.open&&e[L]!==n.current&&(o(void 0),n.current=e[L])}),[e,n]),t}();return i()(w.Z,{open:e.open,keepFocus:!0,[E]:n[E],disableAnimation:!0,[T]:k,render:()=>e.open&&d&&i()($,{id:`${b}`,modalState:e,[T]:p},`${b}`)})}function $(e){window.__c={n:"OpenAutomationModal"};const{id:t,modalState:o,[T]:n}=e,{icon:r}=o[L],l=(0,u.useIntl)(),s=(0,a.useRef)(null);(0,a.useEffect)((()=>{null!==s.current&&s.current.focus()}),[]);const f=(0,c.yK)((e=>({wrap:{display:"flex",[K]:I},buttonWrap:{display:"flex",[K]:I,gap:10,marginTop:10},textWrap:{whiteSpace:"pre-wrap",wordBreak:"break-word",textAlign:B,fontWeight:d.Z.fontWeight.medium,marginTop:10,marginBottom:10,display:"flex",[K]:I,alignItems:B},icon:{marginBottom:10},[_]:{justifyContent:B}})),[]),{store:m}=(0,p.useMockTextStore)({initialValue:o[L].text,[W]:()=>{}}),g=[a.createElement(k.Z,{key:"continue",isLarge:!0,onClick:()=>n("continue"),ref:s},o[L].continueButtonText),i()(y.Z,{isLarge:!0,onClick:()=>n("cancel"),isLightGray:!0,style:f[_]},"cancel",o[L].cancelButtonText)],v=`automation-modal-dialog-${t}`;return i()(b.Z,{capture:!0,allowEsc:!0},void 0,i()("div",{"aria-modal":"true","aria-label":l[A](R.confirmationDialogAriaLabel),[S]:v,role:"dialog",style:f.wrap},void 0,i()("div",{style:f.textWrap},void 0,r&&i()("div",{style:f.icon},void 0,i()(x.Z,{size:50,icon:{icon:r,[M]:o.recordStore[M]},[C]:!0,isEmptyPage:!1,bucket:"public",[W]:()=>{}})),i()("div",{id:v},void 0,i()(Z.Z,{[C]:!0,store:m,[h]:o.recordStore}))),i()("div",{style:f.buttonWrap},void 0,g)))}}}]);