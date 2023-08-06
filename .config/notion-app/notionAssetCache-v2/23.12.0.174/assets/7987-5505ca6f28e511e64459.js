"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7987],{89074:(e,t,n)=>{n.d(t,{ZP:()=>X,N_:()=>ee});var a=n(77094),o=n.n(a),i=n(97464),c=n.n(i),r=n(96486),s=n.n(r),l=n(67294),u=n(480),d=n(81954),h=n(24405),p=n(41892),f=n(3909),m=n(68626),g=n(5500),k=n(97880),S=n(5366),y=n(54642),w=n(77719),v=n(33929),C=n(18441),Z=n(79315),I=n(30874),N=n(49085),F=n(88108);class b extends N.default{getStateForBot(e){return this.state[e]??{channels:{},fetching:!1,lastRefreshed:0}}updateStateForBot(e,t){this.setState({...this.state,[e]:{...this.getStateForBot(e),...t}})}addChannelsForBot(e,t){const n=this.getStateForBot(e);this.setState({...this.state,[e]:{...n,channels:{...n.channels,...t}}})}}const x=new b;(0,F.exposeDebugValue)("ExternalNotificationChannelsStore",x);const P=x;var V=n(52275),B=n(68894),_=n(68785),L=n(72495),M=n(33411);const A=n(85).nxm,K=n(85).Vtp,D=n(85).kdC,O=n(85).Yzm,R=n(85).PXg,j=n(85).n_z,W=n(85).TtP,q=n(85).D7I,Y=n(85).rpY,z=n(85).IV,E=n(85).xts,T=n(85).KCN,J=n(85).wgE,G=n(85).dV,H=n(85).PLy,Q=n(85).nx5,U=(0,S.defineMessages)({channelSearchPlaceholder:{id:"notificationRuleSettings.selectChannelView.searchInput.placeholder",[Q]:"Search…"}});function X(e){window.__c={n:"SlackSelectChannelView"};const{currentNotificationChannel:t,onNotificationChannelSelect:n,onClose:a,onNewSlackAccountAdded:i,renderMenu:r,channelFilter:N}=e,F=(0,u.O7)(),{isMobile:b}=(0,u.Fy)(),x=(0,d.VK)((()=>I.Z[H].state),[]),A=e[G]??s().first(x);l.useEffect((()=>{A&&async function(e){const{[J]:t,botId:n,spaceId:a}=e,o=P.getStateForBot(n);if(o.fetching||Date.now()-o.lastRefreshed<15e3)return;let i;P.updateStateForBot(n,{fetching:!0,lastRefreshed:Date.now()});for(;;){const e=await y.getExternalNotificationChannels(t,{botId:n,spaceId:a,cursor:i});if("success"!==e.type){console.error(e.error);break}{const t={};for(const n of e.data.channels)t[n.id]=n;if(P.addChannelsForBot(n,t),i=e.data.cursor,!i)break}}P.updateStateForBot(n,{fetching:!1})}({[J]:F,botId:A.id,spaceId:A.space_id})}),[F,A]);const X=T,[te,ne]=l.useState(""),{loadedChannelsForAccount:ae,isLoading:oe}=(0,d.VK)((()=>{if(!A)return{loadedChannelsForAccount:[],isLoading:!1};const e=P.getStateForBot(A.id);return{loadedChannelsForAccount:Object.values(e.channels),isLoading:e.fetching}}),[A]),ie=(0,d.VK)((()=>I.Z.integrations.state.find((e=>e.id===g.nO))),[]),ce=(0,d.VK)((()=>{var e;return null===(e=Z.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),re=l[E]((e=>{A&&n(e,A),a()}),[n,A,a]),se=(0,h.yK)((e=>({icon:{marginLeft:8,width:12,height:12,color:e.lightTextColor},container:{backgroundColor:e.popoverBackground,marginTop:12,marginBottom:6},searchIcon:{width:14,height:14,[R]:6,flexGrow:0,flexShrink:0,color:e.regularIconColor}})),[]),le=l[E]((e=>{const{[z]:n}=e;return{key:n.id,[Y]:e=>l[q](V.Z,c()({},e,{icon:ee({[z]:n,styles:se.icon}),desktopIconStyle:{width:8},title:n.name,right:n.id===(null==t?void 0:t.id)&&f.Z.check(se.icon)})),action:()=>{re(n)}}}),[re,se.icon,t]),{publicChannels:ue,privateChannels:de,personalChannels:he}=l.useMemo((()=>function(e,t){const n=[],a=[],o=[];for(const i of e)t&&!t(i)||("public"===i.type?n.push(i):"private"===i.type?a.push(i):"me"===i.type?o.push(i):(0,k.unreachable)(i.type));return{publicChannels:n,privateChannels:a,personalChannels:o}}(ae,N)),[N,ae]),pe=l[E]((()=>ue.map((e=>({menuListItem:le({[z]:e}),channelName:e.name})))),[ue,le]),fe=l[E]((()=>de.map((e=>({menuListItem:le({[z]:e}),channelName:e.name})))),[de,le]),me=l[E]((()=>he.map((e=>({menuListItem:le({[z]:e}),channelName:e.name})))),[he,le]),ge=l[E]((()=>pe().map((e=>{let{menuListItem:t,channelName:n}=e;if($({channelName:n,query:te}))return t})).filter(k.isDefined)),[pe,te]),ke=l[E]((()=>fe().map((e=>{let{menuListItem:t,channelName:n}=e;if($({channelName:n,query:te}))return t})).filter(k.isDefined)),[fe,te]),Se=l[E]((()=>me().map((e=>{let{menuListItem:t,channelName:n}=e;if($({channelName:n,query:te}))return t})).filter(k.isDefined)),[me,te]),ye=l[E]((()=>{if(!A)return[];const e=[],t=ge(),n=ke(),a=Se();return a[W]>0&&e.push({key:"personal-channels",[Y]:e=>l[q](L.Z,c()({},e,{title:(0,C.jg)(A)[j]})),items:a}),t[W]>0&&e.push({key:"public-channels",[Y]:e=>l[q](L.Z,c()({},e,{topBorder:a[W]>0,title:0===a[W]&&(0,C.jg)(A)[j]})),items:t}),n[W]>0&&e.push({key:"private-channels",[Y]:e=>l[q](L.Z,c()({},e,{topBorder:t[W]>0,title:0===a[W]&&t[W]>0&&(0,C.jg)(A)[j]})),items:n}),e}),[ge,ke,Se,A]);if(!A||!ie)return null;const we=[{key:"search-input-section",items:[{key:"search-input-item",action:()=>{},[Y]:e=>o()("div",{},void 0,l[q](B.ZP,c()({},e,{inputLeft:o()(B.f_,{icon:f.Z.search}),inputRight:o()(M.Z,{show:oe,showDelay:500,showHold:300,[Y]:e=>e&&o()(_.Z,{style:{[R]:2}})}),[D]:!0,placeholder:v.default[O](U.channelSearchPlaceholder),focusInitial:!b,value:te,onChange:e=>{ne(e.target.value)}})))}],[Y]:e=>l[q](L.Z,e)},...ye()];return t||we.push({key:"add-another-slack-account-section",items:[{key:"add-another-slack-account-item",action:async()=>{if(!ce)return;const e=await w.hM({[J]:F,integration:ie,spaceId:ce,from:X});m.x.isFail(e)||i()},[Y]:e=>l[q](V.Z,c()({},e,{icon:o()("img",{src:p.Z.images[K].slackIconPng,style:{width:18,height:"auto"}}),title:o()(S.FormattedMessage,{id:"notificationRuleSettings.selectChannelView.setupAnotherSlackAccount.label",[Q]:"Add another Slack account"})}))}],[Y]:e=>l[q](L.Z,c()({},e,{topBorder:!0}))}),l[q](l.Fragment,null,r(we))}function $(e){const{channelName:t,query:n}=e;return 0===n[W]||t[A]().indexOf(n.trim()[A]())>=0}function ee(e){const{[z]:t,styles:n}=e;return"private"===t.type?f.Z.locked(n):"me"===t.type?f.Z.at(n):f.Z.typesNumber(n)}},93364:(e,t,n)=>{n.d(t,{U:()=>A});var a=n(97464),o=n.n(a),i=n(77094),c=n.n(i),r=n(67294),s=n(480),l=n(81954),u=n(24405),d=n(41892),h=n(3909),p=n(5366),f=n(68626),m=n(5500),g=n(77719),k=n(33929),S=n(18441),y=n(79315),w=n(30874),v=n(52275),C=n(68894),Z=n(72495);const I=n(85).Vtp,N=n(85).kdC,F=n(85).Yzm,b=n(85).D7I,x=n(85).Q9F,P=n(85).nuv,V=n(85).FkY,B=n(85).PLy,_=n(85).KCN,L=n(85).nx5,M=(0,p.defineMessages)({workspaceSearchPlaceholder:{id:"notificationRuleSettings.selectWorkspaceView.searchInput.placeholder",[L]:"Search…"}});function A(e){window.__c={n:"SlackSelectWorkspaceView"};const{onWorkspaceSelect:t,renderMenu:n,workspaceFilter:a,onNewSlackAccountAdded:i}=e,A=_,K=(0,s.O7)(),{isMobile:D}=(0,s.Fy)(),O=(0,l.VK)((()=>{var e;return null===(e=y.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),R=(0,l.VK)((()=>(0,S.P9)(w.Z[B].state,a)),[a]),j=(0,l.VK)((()=>w.Z.integrations.state.find((e=>e.id===m.nO))),[]),[W,q]=r.useState(""),Y=(0,u.yK)((e=>({[x]:{width:12,height:"auto",color:e.lightIconColor}})),[]);if(!j)return null;const z=Object.entries((0,S.YJ)(R,W)).map(((e,n)=>{let[a,i]=e;return{key:a,items:i.map((e=>{let{[V]:n,[P]:a}=e;return{key:a.id,action:()=>{t(a)},render:e=>r[b](v.Z,o()({},e,{title:n??c()(p.FormattedMessage,{id:"notificationRuleSettings.selectWorkspace.untitledWorkspace",[L]:"Slack workspace"}),right:h.Z[x](Y[x])}))}})),render:e=>r[b](Z.Z,o()({},e,{title:a,topBorder:0!==n}))}}));return z.unshift({key:"search-input-section",items:[{key:"search-input-item",action:()=>{},render:e=>c()("div",{},void 0,r[b](C.ZP,o()({},e,{inputLeft:c()(C.f_,{icon:h.Z.search}),[N]:!0,placeholder:k.default[F](M.workspaceSearchPlaceholder),focus:!D||void 0,value:W,onChange:e=>{q(e.target.value)}})))}],render:e=>r[b](Z.Z,e)}),z.push({key:"add-another-slack-account-section",items:[{key:"add-another-slack-account-item",action:async()=>{if(!O)return;const e=await g.hM({environment:K,integration:j,spaceId:O,from:A});f.x.isFail(e)||e.value[P]&&(t(e.value[P]),null==i||i())},render:e=>r[b](v.Z,o()({},e,{icon:c()("img",{src:d.Z.images[I].slackIconPng,style:{width:18,height:"auto"}}),title:c()(p.FormattedMessage,{id:"notificationRuleSettings.selectWorkspaceView.setupAnotherSlackAccount.label",[L]:"Add another Slack account"})}))}],render:e=>r[b](Z.Z,o()({},e,{topBorder:!0}))}),r[b](r.Fragment,null,n(z))}},18441:(e,t,n)=>{n.d(t,{jg:()=>u,jc:()=>d,P9:()=>h,YJ:()=>p});n(3909);var a=n(55384),o=n(32161),i=(n(19889),n(5500)),c=(n(82990),n(5366));n(85).Sgw;const r=n(85).nxm,s=n(85).nuv,l=n(85).n_z;(0,c.defineMessages)({slackPersonalChannel:{id:"notificationRuleSettings.slackTargetPersonalChannelDisplayName",defaultMessage:"Private channel"}});function u(e){if(e.integration_id!==i.nO)throw"Cannot render account for integration.";const t=/(.+) - (.+)/.exec(e.account_name);if(!t)return{accountName:e.account_name};const[,n,a]=t;return{[l]:n,accountName:a}}function d(e){return a.kk.fromValue(o.P,e).getSlackWorkspaceId()}function h(e,t){return t?e.filter((e=>{const n=d(e);return!!n&&t(n)})):e}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n={};for(const a of e){const{accountName:e,[l]:o}=u(a);f({query:t,accountName:e,[l]:o})&&(n[e]||(n[e]=[]),n[e].push({[s]:a,workspaceName:o}))}return n}function f(e){const{accountName:t,[l]:n,query:a}=e;if(0===a.length)return!0;const o=t[r]().indexOf(a.trim()[r]())>=0,i=!!n&&n[r]().indexOf(a.trim()[r]())>=0;return o||i}}}]);