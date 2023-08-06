"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[71],{73240:(t,e,i)=>{i.r(e),i.d(e,{default:()=>pi});var o=i(97464),n=i.n(o),s=i(77094),r=i.n(s),a=i(96486),d=i.n(a),l=i(67294),h=i(83355),p=i(99036),c=i(8848),u=i(84682),m=i(18955),y=i(91905),g=i(42875),v=i(55384),f=i(82990),S=i(5366),b=i(50906),x=i(62134),C=i(66890),k=i(75079),M=i(87279),P=i(33665),D=i(77907),T=i(34859),I=i(79315),Z=i(49085);class w extends Z.default{getInitialState(){return{value:"",html:"",query:""}}}const F=w;var E=i(29798),L=i(48019),N=i(78140),O=i(40721),R=i(18647),W=i(72495),B=i(13991),U=i(76725);const z=i(85).OM8,_=i(85).Oc6,$=i(85).nx5,A=i(85).dNY,G=i(85).xoW,q=i(85).D7I;class Q extends h.Z{renderDescription(){const{entry:t}=this.props;if(t){const{descriptionMessage:e,fallbackDescription:i}=t;if(e)return l[q](S.FormattedMessage,e);if(i)return i}return null}renderComponent(){const{entry:t}=this.props;if(t){const{name:e,examples:i}=t,o=(0,m.EP)(this.props.Prism,(i||[]).join("\n")),n=this.renderSyntax();return r()("div",{},void 0,r()("h1",{style:Q[G]},void 0,e),r()("p",{style:Q[A]},void 0,this.renderDescription()),r()("p",{style:Q[A]},void 0,r()("b",{},void 0,r()(S.FormattedMessage,{id:"database.formula.syntaxSection.title",[$]:"Syntax"}))),r()("pre",{style:this.getCodeStyle()},void 0,(0,U.Z)(n,(t=>r()("br",{},`sep:${t}`)))),i&&i.length>0&&r()("p",{style:Q[A]},void 0,r()("b",{},void 0,r()(S.FormattedMessage,{id:"database.formula.examplesSection.title",[$]:"Examples"}))),r()("pre",{style:this.getCodeStyle(),dangerouslySetInnerHTML:{__html:o}}))}return r()("div",{})}renderSyntax(){const{entry:t}=this.props;if(!t)return[];const{name:e,category:i}=t;return i===y.WD.property?[r()("span",{},0,"prop(",JSON.stringify(e),")")]:i===y.WD.constant?[r()("span",{},0,e)]:i===y.WD.function?this.getFunctionSyntax(t):i===y.WD.operator?this.getOperatorSyntax(t):[]}getFunctionSyntax(t){const{name:e}=t;return Q.getSignatureNames(t).map(((t,i)=>{let{variadic:o,arity:n}=t;return o?r()("span",{},i,e,"(",r()("i",{},void 0,o),"...)"):r()("span",{},i,e,"(",(0,U.Z)(n.map(((t,e)=>r()("i",{},e,t))),(t=>r()("span",{},`sep:${t}`,","," "))),")")}))}getOperatorSyntax(t){const{operator:e}=t;return d().compact(Q.getSignatureNames(t).map(((t,i)=>{let{arity:o}=t;if(1===o.length){const[t]=o;return r()("span",{},-i-1,e," ",r()("i",{},void 0,t))}if(2===o.length){const[t,n]=o;return r()("span",{},-i-1,r()("i",{},void 0,t)," ",e," ",r()("i",{},void 0,n))}if(3===o.length){const[t,e,n]=o;return r()("span",{},-i-1,r()("i",{},void 0,t)," ","? ",r()("i",{},void 0,e)," ",": ",r()("i",{},void 0,n))}})).concat(this.getFunctionSyntax(t)))}static getSignatureNames(t){const{name:e,signatures:i}=t;return"if"===e?[{arity:["boolean","value","value"]}]:"format"===e||"unaryPlus"===e?[{arity:["value"]}]:"equal"===e||"unequal"===e?[{arity:["value","value"]}]:i.map((t=>{let{arity:e,variadic:i}=t;return{variadic:i?Q.typeNameMap[i]:void 0,arity:e?d().compact(e.map((t=>Q.typeNameMap[t]))):[]}}))}getCodeStyle(){return{paddingTop:6,paddingBottom:8,paddingLeft:10,paddingRight:10,overflowX:"scroll",background:this.theme.sidebarBackground,borderRadius:3,fontSize:13,margin:0,fontFamily:f.Z[_](B.SP).mono,[z]:1.4}}}Q.displayName="FormulaDocumentation",Q.typeNameMap={checkbox:"boolean",number:"number",text:"text",date:"date"},Q[G]={fontSize:20,margin:0,[z]:1,marginTop:4,marginBottom:12},Q[A]={whiteSpace:"normal",marginTop:8,marginBottom:8,fontSize:13,[z]:1.4};const Y=(0,D.withDependency)(D.deps.prismjs,((t,e)=>l[q](Q,n()({},e,{Prism:t}))));var K=i(39068),H=i(3909),j=i(64921),X=i(52275),J=i(31945),V=i(28992);const tt=i(85).DN7,et=i(85).Mm1,it=i(85)._V5,ot=i(85).nx5,nt=i(85).D7I,st=i(85).Hco,rt=i(85).XNW,at=i(85).wgE,dt=i(85).E0z,lt=i(85).dLQ,ht=i(85).GGR,pt=i(85).P0R;class ct extends h.Z{renderComponent(){const{entry:{name:t}}=this[pt];return r()(X.Z,{focused:this[pt].focused,onClick:this[pt].onClick,[ht]:this[pt][ht],icon:r()("div",{style:{...K.f,...this[at][dt][lt]&&{[rt]:14}}},void 0,this.renderPropertyIcon()),title:t,right:this.renderDocumentationButtonPopup(),style:{...!this[at][dt][lt]&&{paddingLeft:8,paddingRight:8}},desktopIconStyle:{[rt]:0}})}renderDocumentationButtonPopup(){const{[dt]:t}=this[at];if(this[at][dt][lt])return r()(J.ZP,{popupType:t[lt]?J.Z4.SlideUp:J.Z4.Popup,renderOrigin:t=>l[nt](j.Z,n()({mobileFeedback:!0,style:{width:16,height:16}},t),H.Z.typesUnknownType({fill:this.theme[st]})),render:e=>{let i;return i=t[lt]?{menuType:M.og.Modal,title:r()(S.FormattedMessage,{[ot]:"Documentation",id:"database.formulaPropertyEntryMenuItem.title"}),right:r()(O.DoneMenuText,{}),onClickRight:e.close}:{menuType:M.og.Popup},l[nt](N.Z,i,r()(W.Z,{},void 0,r()(V.Z,{title:r()(Y,{entry:this[pt].entry}),style:{[it]:10,[et]:16}})))}})}renderPropertyIcon(){const{entry:t}=this[pt],{theme:e}=this;if(t[tt]===y.WD.property||t[tt]===y.WD.constant){const{resultType:i}=t;return r()(K.ZP,{type:i,icon:void 0,size:16,theme:e})}if(t[tt]===y.WD.function||t[tt]===y.WD.operator){const{signatures:[{resultType:i}]}=t;return r()(K.ZP,{type:i,icon:void 0,size:16,theme:e})}}}ct.displayName="FormulaEntryMenuItem",ct.contextTypes={...M.mw,...h.w};const ut=ct;var mt=i(63143),yt=i(52821),gt=i(45023),vt=i(33929),ft=i(80935),St=i(42922),bt=i(3386),xt=i(58032);const Ct=i(85).Oc6,kt=i(85)._Fe,Mt=i(85).XCs,Pt=i(85).YDv,Dt=i(85).jms,Tt=i(85).Scd,It=i(85).Joh,Zt=i(85).g7N,wt=i(85).PXg,Ft=i(85).Au,Et=i(85).S6b,Lt=i(85).BQ6,Nt=i(85).PG2,Ot=i(85).Ou,Rt=i(85).D7I,Wt=i(85).GDw,Bt=i(85).Rbl,Ut=i(85).ncO,zt=i(85).pkR,_t=i(85).R70,$t=i(85).Fli,At=i(85).dLQ,Gt=i(85).CZd,qt=i(85).xLx,Qt=i(85).O1p,Yt=i(85).L_E,Kt=i(85).y1B,Ht=i(85).lUt,jt=i(85).Gnd,Xt=i(85).QmD,Jt=i(85).P0R,Vt=i(85).vK9,te=i(85).xOW,ee=i(85).fBv,ie=i(85).cx2,oe=i(85).DIE,ne=i(85).wgE,se=i(85).exC,re=i(85).b8T,ae=i(85).itc,de=i(85).CFo,le=i(85).YGn,he=i(85).Q6q,pe=i(85).WYi,ce=i(85).vwy,ue=i(85).qpz,me=i(85).iWX,ye=i(85).mPA,ge=i(85).VDc,ve=i(85).XtO,fe=i(85).GCu,Se=i(85).$Td,be=i(85).nx5,xe=(0,S.defineMessages)({placeholder:{id:"database.formula.placeholder",[be]:"Type a formula"}});class Ce extends h.Z{constructor(){super(...arguments),this[Se]=void 0,this[fe]=void 0,this.storeTypes={[ve]:F},this[ge]=()=>{const t=ft.get();t&&this[ye].contains(t[me])&&(this[fe]=t)},this.handleInputMount=t=>this[ye]=t,this.handleInput=t=>{const{target:{[ue]:e}}=t;this[ce](e),mt[pe](this[Se])&&(this[Se]=window[he]((()=>this.executeUpdate()),Ce.delay))},this.handlePaste=t=>{t[le]();const e=t[de].getData(ae);document.execCommand("insertText",!1,e)},this.handleKeyUp=t=>{this.updateSelection()},this[re]=t=>{this.updateSelection()},this[se]=t=>{(0,gt.Z)(this[ne],t,"command+enter")&&(this.handleAccept(),t[oe]())},this[ie]=()=>({flexGrow:1,[ee]:te,[Vt]:0,...this[Jt].inputContainerStyle})}insertEntry(t){var e,i;const{value:o}=this[jt][ve][Xt],{name:n}=t,s=Ce.getCompletion(t),r=(null===(e=this[fe])||void 0===e?void 0:e.startOffset)??0;let a=r,d=(null===(i=this[fe])||void 0===i?void 0:i.endOffset)??0;const l=m.wo(o,r);if(l){const[t,e]=l,i=o.slice(t,e)[Ht]();i!==s[Ht]().slice(0,e-t)&&i!==n[Ht]().slice(0,e-t)||(a=t,d=e)}this[ye].focus();const h=this[ye][Kt]||this[ye],p=document.createRange();p.setStart(h,a),p.setEnd(h,d),ft.set(p,this[ne].device),a<d&&document.execCommand("delete",!1),document.execCommand("insertText",!1,s);const c=(d+s.length)/(this[ye]&&this[ye][ue]&&this[ye][ue].length||0)*this[Yt].scrollWidth;c>this[Yt][Qt]+this[Yt][qt]&&(this[Yt][Qt]=c-this[Yt][qt])}handleAccept(){this[Se]&&(window.clearTimeout(this[Se]),this[Se]=void 0);const{value:t}=this[jt][ve][Xt];if(""===t.trim())this[Jt].onSubmit();else{const{[Gt]:e,error:i}=this.updateFormula(t);i||this[Jt].onSubmit(e)}}willMount(t){super.willMount(t);const{[Gt]:e,schema:i}=t,o=this[Jt].formulaStringHelpers.formulaToString(e,i);this[ce](o)}didMount(){const{device:t}=this[ne],{value:e}=this[jt][ve][Xt];if(this[ye]&&(this[ye][ue]=e,t[At]||this[ye].focus(),e)){const t=document[$t]();this[ye][Kt]&&t.collapse(this[ye][Kt],e.length),this[Yt][Qt]=this[Yt].scrollWidth-this[Yt][qt]}document.addEventListener(_t,this[ge])}willUnmount(){document.removeEventListener(_t,this[ge])}renderComponent(){const{device:t}=this[ne],{[zt]:e}=this[Jt],{command:i}=x.getShortcutTextItems(this[ne]),{html:o}=this[jt][ve][Xt];return r()("div",{[Lt]:this[Ut]()},void 0,l[Rt]("div",{ref:t=>{t&&(this[Yt]=t)},[Lt]:this[ie]()},r()(bt.Z,{capture:!e,onLeft:d()[Bt],onRight:d()[Bt],onSelectAll:d()[Bt],onRedo:d()[Bt],onUndo:d()[Bt],onToggleBold:d()[Bt],onToggleItalics:d()[Bt],onToggleCode:d()[Bt],onCut:d()[Bt],onCopy:d()[Bt],onPaste:d()[Bt],onKeypress:d()[Bt],onDelete:d()[Bt],onBackspace:d()[Bt]},void 0,l[Rt]("div",{ref:this.handleInputMount,[Ot]:!e,spellCheck:!1,autoCorrect:"off",autoCapitalize:"off",[Nt]:this[re],onKeyUp:this.handleKeyUp,onKeyDown:this[se],onInput:this.handleInput,onPaste:this.handlePaste,[Lt]:this[Wt]()})),r()("div",{[Lt]:this.getOverlayStyle(),dangerouslySetInnerHTML:{__html:o}})),!t[At]&&!e&&r()(xt.Z,{[It]:()=>r()("div",{},void 0,r()("span",{},void 0,r()(S.FormattedMessage,{[be]:"Accept",id:"database.formula.acceptFormulaInput.tooltip"}))," ",r()("span",{[Lt]:{color:this[Ft][Et]}},void 0,i,"+Enter")),render:e=>l[Rt](St.Z,n()({[zt]:Boolean(this[jt][ve][Xt].error),[Nt]:()=>this.handleAccept(),[Lt]:{height:24,padding:"0 8px",alignSelf:"flex-end",[wt]:6,[Zt]:4,...t[At]&&{[wt]:12}}},e),r()(S.FormattedMessage,{id:"database.formula.doneButton.label",[be]:"Done"}))}))}[ce](t){const e=""===t.trim()?this[Jt][zt]?"":vt.default.formatMessage(xe.placeholder):m.EP(this[Jt].Prism,t);this[jt][ve].setState({...this[jt][ve][Xt],html:e,value:t})}updateSelection(){const t=document[$t]().anchorOffset,{value:e}=this[jt][ve][Xt],i=m.wo(e,t),o=i?e.slice(i[0],i[1]):"";o!==this[jt][ve][Xt].query&&this[jt][ve].setState({...this[jt][ve][Xt],query:o})}updateFormula(t){const{schema:e,property:i}=this[Jt];if(""===t.trim())return{error:void 0,[Gt]:void 0,type:void 0};{const o=this[Jt].formulaStringHelpers.stringToFormula({str:t,property:i,schema:e,intl:vt.default.getIntl(),propertyTypeDisplayName:yt.SO});if(o&&"error"===o.type){const{message:t}=o;return{[Gt]:void 0,error:t,type:void 0}}return{[Gt]:o,error:void 0,type:void 0}}}executeUpdate(){const{value:t}=this[jt][ve][Xt],{error:e,[Gt]:i}=this.updateFormula(t);!e&&i&&this[Jt].onChange(i),this[Se]=void 0,this[jt][ve].setState({...this[jt][ve][Xt],error:e})}static getCompletion(t){const{category:e,name:i}=t;return e===y.WD.property?`prop(${JSON.stringify(i)})`:e===y.WD.constant?i:`${i}(`}[Ut](){const{device:t,WindowSizeStore:e}=this[ne];return{display:"flex",flex:"none",[Tt]:this[Ft].inputBackground,[Dt]:33,borderTopLeftRadius:3,borderTopRightRadius:3,...this[Jt][zt]&&{[Tt]:this[Ft].contentBackground,borderRadius:3},...t[At]&&{borderBottom:`1px solid ${this[Ft].regularDividerColor}`,[Tt]:this[Ft].popoverBackground,[Dt]:44,[Pt]:e[Xt].paddingLeftCSS,[Mt]:e[Xt].paddingRightCSS},...this[Jt].wrapStyle}}getOverlayStyle(){const{device:t}=this[ne],{value:e}=this[jt][ve][Xt];return{...t[At]?Ce.mobileInputStyle:Ce.desktopInputStyle,zIndex:0,...""===e.trim()&&{color:this[Ft].mediumTextColor},[ee]:void 0}}[Wt](){const{device:t}=this[ne],e=t.isSafari||t.isChrome?"WebkitTextFillColor":"color";return{...t[At]?Ce.mobileInputStyle:Ce.desktopInputStyle,border:"none",[Tt]:"none",[e]:""===this[jt][ve][Xt].value?this[Ft][kt]:c.ZP.transparent,caretColor:this[Ft][kt],zIndex:1,width:"100%"}}}Ce.displayName="FormulaInput",Ce.delay=0,Ce.desktopInputStyle={alignItems:"center",[ee]:"absolute",[Vt]:"100%",[Dt]:32,margin:0,padding:0,[Pt]:10,[Mt]:8,paddingTop:8,fontSize:13,fontFamily:f.Z[Ct](B.SP).mono,wordWrap:"break-word"},Ce.mobileInputStyle={alignItems:"center",[ee]:"absolute",[Vt]:"100%",[Dt]:44,margin:0,[Pt]:16,[Mt]:0,paddingTop:12,paddingBottom:12,fontSize:14,fontFamily:f.Z[Ct](B.SP).githubMono};const ke=Ce;var Me=i(74523);const Pe=i(85).wuN,De=i(85).P24,Te=i(85).Mt_,Ie=i(85).XCs,Ze=i(85).YDv,we=i(85).Yzm,Fe=i(85).P3s,Ee=i(85).Exd,Le=i(85).ChN,Ne=i(85).PDy,Oe=i(85).BQ6,Re=i(85).AIq,We=i(85).Au,Be=i(85).dMt,Ue=i(85).IY7,ze=i(85).j7K,_e=i(85).PlO,$e=i(85).iy2,Ae=i(85).EMU,Ge=i(85).nx5,qe=i(85).dLQ,Qe=i(85).QQh,Ye=i(85).dU4,Ke=i(85).Dd5,He=i(85).D7I,je=i(85).I7L,Xe=i(85).nAm,Je=i(85).ydP,Ve=i(85).t85,ti=i(85).C$B,ei=i(85).CZd,ii=i(85).Gnd,oi=i(85).pkR,ni=i(85).ffk,si=i(85).wgE,ri=i(85).kdE,ai=i(85).QmD,di=i(85).P0G,li=i(85).qd9;class hi extends h.Z{constructor(){super(...arguments),this.storeTypes={[li]:F,[di]:E.Z},this[ai]={filteredSections:[]},this[ri]=t=>{d().isEqual(t.map((t=>t.key)),this[ai].filteredSections.map((t=>t.key)))||this.setState({filteredSections:t})}}renderComponent(){const{device:t}=this[si],{schema:e,[ni]:i,[oi]:o}=this.props,{error:n}=this[ii][li][ai],{[ei]:s}=e[i],a=r()(l.Fragment,{},void 0,r()(D.DependencyConsumer,{[Qe]:D.deps.prismjs},void 0,(t=>r()(D.DependencyConsumer,{[Qe]:D.deps.formulaStringHelpers},void 0,(n=>l[He](ke,{ref:t=>{t&&(this.formulaInput=t)},Prism:t,formulaStringHelpers:n,store:this[ii][li],[ei]:s,schema:e,[ni]:i,[oi]:o,[Ke]:t=>this[ti](t),onSubmit:t=>this[Ve](t),[Ye]:{[Je]:Xe},inputContainerStyle:{[je]:"45vh",[Je]:"scroll"}}))))),t[qe]&&this.renderStatus());let d;return d=t[qe]?{menuType:M.og.Modal,title:r()(S.FormattedMessage,{id:"database.mobileFormulaModal.title",[Ge]:"Formula"}),left:r()(O.CancelMenuText,{}),right:n?void 0:r()(S.FormattedMessage,{id:"database.mobileFormulaModal.saveButton.label",[Ge]:"Save"}),onClickLeft:this.props.onClickCancel,onClickRight:()=>this.formulaInput.handleAccept(),header:a}:{menuType:M.og.Popup,width:580,height:o?"none":void 0,minHeight:358,disableScroller:!0,header:a,footer:this.renderStatus(),scrollerStyle:{display:Ae}},l[He](N.Z,d,!o&&this[$e]())}[$e](){const{device:t}=this[si],e=this.getLibrary(),i=this.getFocusedEntry(e);return t[qe]?r()(L.Z,{[ze]:0,context:{blocks:[],[si]:this[si],[_e]:void 0},filter:this[ii][li][ai].query,sections:this.renderSections(e),[di]:this[ii][di],onFilteredSectionsChange:this[ri]}):r()("div",{[Oe]:{display:Ae,flexGrow:1,[Ue]:`\n\t\t\t\t\t\t\tinset 0 1px 0 ${this[We][Be]},\n\t\t\t\t\t\t\tinset 0 -1px 0 ${this[We][Be]}\n\t\t\t\t\t\t`,[je]:295}},void 0,r()(R.Z,{type:T.Z.Y,[Oe]:{width:180,flexGrow:0,[Re]:0}},void 0,r()(L.Z,{[ze]:0,context:{blocks:[],[si]:this[si],[_e]:void 0},filter:this[ii][li][ai].query,sections:this.renderSections(e),[di]:this[ii][di],onFilteredSectionsChange:this[ri]})),r()(R.Z,{type:T.Z.Y,[Oe]:{padding:12,[Ue]:`inset 1px 0 0 ${this[We][Be]}`,flexGrow:1}},void 0,r()(Y,{entry:i})))}renderStatus(){const{device:t}=this[si],{[oi]:e}=this.props,{command:i}=x.getShortcutTextItems(this[si]),{error:o}=this[ii][li][ai];return o?r()("div",{[Oe]:t[qe]?this.getMobileStatusWrapStyle():this[Ne]()},void 0,r()("span",{[Oe]:{...t[qe]&&hi.mobileStatusStyle,...hi.errorStatusStyle}},void 0,o),!t[qe]&&this.renderLearnMoreLink()):t[qe]?r()("div",{[Oe]:this.getMobileStatusWrapStyle()},void 0,r()("span",{[Oe]:hi.mobileStatusStyle},void 0,r()(S.FormattedMessage,{[Ge]:"No errors.",id:"database.formula.mobileNoErrors.message"}))):e?void 0:r()("div",{[Oe]:this[Ne]()},void 0,r()("span",{},void 0,r()(S.FormattedMessage,{id:"database.formula.keyboardShortcutHint",[Ge]:"{commandEnter} to accept",values:{commandEnter:r()("span",{[Oe]:{[Le]:f.Z[Le].medium}},void 0,i,"+Enter")}})),this.renderLearnMoreLink())}renderLearnMoreLink(){return r()("div",{[Oe]:{marginLeft:"auto"}},void 0,r()(Me.Z,{title:r()("span",{[Oe]:{[Ee]:f.Z[Ee].UISmall.desktop}},void 0,r()(S.FormattedMessage,{[Ge]:"Learn more about formulas",id:"formulaPropertyMenu.learnMore.button.label"})),href:(0,P.getLocalizedUrl)("guides.formulas"),[Fe]:"formula_property_menu"}))}renderSections(t){return t.map((t=>({key:t.key,title:this.props.intl[we](t.titleMessage),render:t=>l[He](W.Z,n()({},t,{desktopTitleStyle:{[Ze]:8,[Ie]:8}})),actions:t.entries.map(((t,e)=>({key:this.getEntryKey(t,e),displayName:t.name,analyticsName:t.name,searchName:t.name,render:e=>l[He](ut,n()({},e,{entry:t})),action:()=>{this.formulaInput.insertEntry(t)},closeParentMenu:!1})))})))}handleUpdate(t,e){const{[Ke]:i,schema:o,[ni]:n,[Fe]:s}=this.props;if(t&&"error"===t.type);else{const r=o[n];i({propertySchema:{...r,[ei]:t},close:e}),r&&b[Te](this[si],{...(0,k.getCollectionAnalyticsContext)(this.context[De]),property_type:r.type,action:"formula_edit",from:s})}}getLibrary(){const{schema:t,[ni]:e,exampleBlock:i,intl:o}=this.props,n=Object.keys(t).filter((i=>{const o=t[i];return!(i===e||o&&p.UNSUPPORTED_FORMULA_PROPERTY_TYPES.includes(o.type))})).map((e=>{const n=t[e];if(!n)throw new Error("Property not found.");const{name:s}=n,r=i?u.Qs({[ni]:e,schema:t,block:v.kk.fromBlock(i),getRecordModel:I.default.getCurrentBlockModelFn(),userTimeZone:(0,g.r)(),intl:o,depth:0,resultCache:{},visitedProperties:new Set}):void 0;return{name:s,category:y.WD[ni],fallbackDescription:o[we]({id:"database.formula.property.description",[Ge]:"Returns the {propertyName} property for each entry."},{propertyName:s}),resultType:m.z6(n),examples:r?[`prop(${JSON.stringify(s)}) == ${JSON.stringify(r)}`]:[]}}));return[y.jQ(y.WD[ni],n),...y.ZY]}getFocusedEntry(t){var e,i;const{focus:{section:o,indexLocal:n}}=this[ii][di][ai],s="number"==typeof o&&"number"==typeof n?null===(e=this[ai].filteredSections[o])||void 0===e||null===(i=e.actions[n])||void 0===i?void 0:i.key:void 0;if(void 0!==s)for(const r of t)for(const[t,e]of r.entries.entries())if(this.getEntryKey(e,t)===s)return e}getEntryKey(t,e){return`${t.name} ${e}`}[Ne](){return{display:Ae,[Ae]:"none",alignItems:"center",[Ee]:12,[Ze]:8,[Ie]:8,height:30,color:this[We][Pe]}}getMobileStatusWrapStyle(){const{WindowSizeStore:t}=this[si];return{display:Ae,[Ae]:"none",alignItems:"center",[Ee]:14,height:28,color:this[We][Pe],background:this[We].popoverBackground,[Ue]:`0 1px 0 ${this[We][Be]}`,[Ze]:t[ai].paddingLeftCSS,[Ie]:t[ai].paddingRightCSS}}[ti](t){this.handleUpdate(t,!1)}[Ve](t){this.handleUpdate(t,!0)}}hi.displayName="FormulaPropertyMenu",hi.contextTypes={...h.w,...C.xm},hi.mobileStatusStyle={[Ze]:16,[Ie]:16},hi.errorStatusStyle={color:c.ZP.redWithAlpha(.8),...f.Z.textOverflowStyle};const pi=(0,S.injectIntl)(hi)}}]);