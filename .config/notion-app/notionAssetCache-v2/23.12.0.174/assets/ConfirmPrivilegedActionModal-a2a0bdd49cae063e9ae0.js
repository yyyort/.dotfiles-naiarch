"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2293],{92660:(e,i,o)=>{o.d(i,{Z:()=>p});var n=o(77094),t=o.n(n),a=(o(67294),o(83355)),r=o(53953),s=o(44532);const l=o(85).sI1,d=o(85).wJk,c=o(85).P0R;class p extends a.Z{renderComponent(){const{render:e}=this[c],{device:i}=this.environment,o=this[c].modalStore.state;return i.isMobile?t()(s.ZP,{ariaLabel:this[c].ariaLabel,open:o.open,popupType:s.ZP.PopupType.SlideUp,origin:this[c].origin,[d]:this[c][d],render:e,style:this[c].style}):t()(r.Z,{ariaLabel:this[c].ariaLabel,open:o.open,preventHideChildrenWhileOpening:!0,render:e,[d]:this[c][d],style:this[c].style,[l]:this[c][l]})}}p.displayName="DefaultPopupOrModal"},50744:(e,i,o)=>{o.r(i),o.d(i,{default:()=>P});var n=o(77094),t=o.n(n),a=o(67294),r=o(81954),s=o(24405),l=o(3909),d=o(97880),c=o(82990),p=o(5366),g=o(24690),u=o(42922),h=o(85740),m=o(92660),v=o(29551);const y=o(85).$bT,f=o(85).PG2,w=o(85).KvN,b=o(85).nx5,Z=o(85).UPJ,C=o(85).FOQ,M=o(85).jkI,T=o(85).zDZ,k=o(85).UQu;function P(e){let{}=e;window.__c={n:k};const i=(0,r.VK)((()=>g.Z.state),[]),o=(0,a.useCallback)((()=>{i.open&&(i.onAccept(),g.Z.setState({open:!1}))}),[i]),n=(0,a.useCallback)((()=>{i.open&&(i.onCancel(),g.Z.setState({open:!1}))}),[i]),P=(0,s.yK)((e=>({innerModal:{borderRadius:8,padding:20,width:300},shieldIcon:{color:e.accentColors.yellow[500],width:21,height:21},title:{marginTop:8,color:e.regularTextColor,fontWeight:c.Z.fontWeight.semibold,fontSize:17},[T]:{color:e.mediumTextColor,textAlign:M,fontSize:c.Z.fontSize.UIRegular.desktop,marginTop:8,marginBottom:24},[C]:{width:"100%",[Z]:M},buttonGap:{paddingTop:5}})),[]);if(!i.open)return null;let S;switch(i.type){case"joinTeamAsOwner":case"upgradeToOwner":S=t()(p.FormattedMessage,{id:"confirmPrivilegedActionModal.becomeOwnerConfirmation.description",[b]:"Becoming an owner in a Teamspace is a privileged action, which appears in your workspace’s audit log."});break;case w:S=t()(p.FormattedMessage,{id:"confirmPrivilegedActionModal.joinPrivateOrClosedTeamConfirmation.description",[b]:"Joining a private or closed Teamspace is a privileged action, which appears in your workspace’s audit log."});break;default:(0,d.unreachable)(i.type)}return t()(m.Z,{innerStyle:P.innerModal,onDismiss:n,render:()=>t()(v.gq,{[y]:"column",[Z]:M,alignItems:M},void 0,l.Z.infoShield(P.shieldIcon),t()("div",{style:P.title},void 0,t()(p.FormattedMessage,{id:"confirmPrivilegedActionModal.title",[b]:"This is a privileged action"})),t()("div",{style:P[T]},void 0,S),t()(u.Z,{style:P[C],[f]:o},void 0,t()(p.FormattedMessage,{id:"confirmPrivilegedActionModal.continueAnyway",[b]:"Continue anyway"})),t()("div",{style:P.buttonGap}),t()(h.Z,{style:P[C],isGray:!0,[f]:n},void 0,t()(p.FormattedMessage,{id:"confirmPrivilegedActionModal.cancel",[b]:"Cancel"}))),requireOnline:!0,modalStore:g.Z})}}}]);