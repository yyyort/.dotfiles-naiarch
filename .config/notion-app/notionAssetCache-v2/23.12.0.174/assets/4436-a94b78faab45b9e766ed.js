"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4436],{40394:(t,o,e)=>{e.d(o,{b:()=>N,D:()=>G});var i=e(77094),n=e.n(i),l=e(67294),r=e(24405),d=e(3909),a=e(82990),c=e(12534),s=e(75024),w=e(12508),h=e(84787),u=e(89728);const p=e(85).O9h,m=e(85).OlC,g=e(85).lWm,v=e(85).XO9,f=e(85).PG2,y=e(85).qpZ,C=e(85).Ubc,S=e(85).Cz9,x=e(85).pW$,b=e(85).wuN,k=e(85).Exd,R=e(85).fsm,_=e(85).YDv,I=e(85).XCs,Z=e(85).Scd,z=e(85).xej,H=e(85).D7I,B=e(85).W3n,T=e(85).BQ6,D=e(85).TtP,$=e(85).IF2,L=e(85).rps,K=e(85).zkl,W=e(85).fBv,P=e(85).I7L,M=e(85).EOt,O=e(85).abK,F=e(85).vK9,E=e(85).gGi,U=e(85).L_E,j=e(85).dBt;function N(t){let{columnRenderInfo:o,theme:e,containerMarginTop:i}=t;const n=o.reduce(((t,o)=>t+Y(o[j])+J),0);return{[U]:{marginTop:i??17,tableLayout:"fixed",borderCollapse:"collapse",width:E,[F]:n},[O]:{},paddingRowCell:{height:8},[M]:{}}}function G(t){let{columnRenderInfo:o,sortState:e,onSortStateChanged:i,showRowBorders:d,hideHeaderRowPadding:a,renderRowChild:c,rows:s,onRowClick:w,renderNoRowsComponent:u,styles:p,getStyleForRow:m,multiselect:g,onScrollBottom:v,allowHorizontalScroll:f,[P]:y,setStickyHeaderRow:C}=t;window.__c={n:"BaseTable"};const S=(0,r.yK)((t=>({horizontalScrollContainer:{[W]:"relative",width:E,display:"grid",overflow:"auto"},scrollableContainer:{[P]:y,[W]:"relative",display:"grid",overflowX:"auto",width:E},[K]:f?{...p[U],[F]:E,width:void 0}:p[U]})),[p[U],f,y]),x=(0,l.useCallback)((t=>{var o;if(!e)return;const n=t.id===(null===(o=e[L])||void 0===o?void 0:o.id)&&!e[$];i&&i({[$]:n,[L]:t})}),[e,i]),b=l[H](l.Fragment,null,n()(K,{[T]:S[K]},void 0,n()("tr",{[T]:p[O]},void 0,o.map(((t,o)=>n()(Q,{index:o,[L]:t,sortState:e,handleSortableColumnClick:x,shouldShowSortIcon:0!==s[D],multiselect:g,allowHorizontalScroll:f,setStickyHeaderRow:C,[T]:0===o?p[M]:void 0},`header_${t.id}`)))),!a&&n()("tr",{},void 0,o.map((t=>n()("td",{[T]:p.paddingRowCell},`padding_row_${t.id}`)))),s.map((t=>n()(X,{columns:o,onRowClick:w,rowChild:null==c?void 0:c(t),showRowBorders:d,row:t,getStyleForRow:m,multiselect:g,allowHorizontalScroll:f,firstColumnStyle:p[M]},`${t.id}_row`))),!f&&v&&n()(h.Z,{[B]:!1,loadMoreOffsetThreshold:100,onLoadMore:v})),0===s[D]&&u());return f?n()("div",{[T]:S.horizontalScrollContainer},void 0,n()("div",{[T]:S.scrollableContainer},void 0,b,y&&v&&n()(h.Z,{[B]:!1,loadMoreOffsetThreshold:100,onLoadMore:v})),!y&&v&&n()(h.Z,{[B]:!1,loadMoreOffsetThreshold:100,onLoadMore:v})):n()("div",{[T]:{[P]:y}},void 0,b)}function Q(t){let{[L]:o,index:e,sortState:i,handleSortableColumnClick:l,shouldShowSortIcon:c,multiselect:s,allowHorizontalScroll:h,setStickyHeaderRow:p,[T]:m}=t;window.__c={n:"HeaderCell"};const g=0===e,v=1===e,H=(0,r.yK)((t=>({th:{boxShadow:`\n\t\t\t\t\tinset 0 1px 0 ${t[z]},\n\t\t\t\t\tinset 0 -1px 0 ${t[z]}\n\t\t\t\t`,...p&&{[W]:"sticky",top:0,zIndex:3,[Z]:t.modalBackground},...tt(o),...h&&g&&{[W]:"sticky",zIndex:4,left:0,[Z]:t.modalBackground,boxShadow:`\n\t\t\t\t\t\t\tinset -1px 0px 0px ${t[z]},\n\t\t\t\t\t\t\tinset 0 1px 0 ${t[z]},\n\t\t\t\t\t\t\tinset 0 -1px 0 ${t[z]}\n\t\t\t\t\t\t`,[I]:15},...h&&v&&{[_]:15},height:32,...m},innerDiv:{display:"flex",alignItems:"center",height:E,[F]:Y(o[j]),[R]:o[j][R]},text:{[k]:a.Z[k].UISmall.desktop,fontWeight:a.Z.fontWeight.regular,color:t[b],...a.Z.textOverflowStyle},sortButton:{padding:5,margin:-5},sortIcon:{color:t[b],width:12,height:12,marginLeft:4,fill:"currentColor"},[x]:{color:t[S][300],marginRight:16,opacity:null!=s&&s[y][C]?.5:1}})),[o,s,h,p,m,g,v]),B=n()("div",{[T]:H.text},void 0,o.headerTitle),D=o.sortable?n()(u.Z,{[T]:H.sortButton,[f]:()=>l(o)},void 0,B,(()=>{if(i&&c&&o.id===i[L].id)return d.Z.arrowDownSmall({...H.sortIcon,...i[$]&&{transform:"rotate(180deg)"}})})()):B,K=void 0!==s&&0===e?n()(w.Z,{[T]:H[x],disabled:s[y][C],[f]:()=>s[y][f](),checked:s[y].isSelected,size:14}):null;return n()("th",{[T]:H.th},void 0,n()("div",{[T]:H.innerDiv},void 0,K,D))}function X(t){let{row:o,columns:e,onRowClick:i,rowChild:d,showRowBorders:a,getStyleForRow:c,allowHorizontalScroll:s,multiselect:w,firstColumnStyle:h}=t;window.__c={n:"RowComponent"};const[u,p]=(0,l.useState)(!1),m=o.isClickable,g=(0,l.useCallback)((()=>p(!0)),[]),y=(0,l.useCallback)((()=>p(!1)),[]),C=(0,l.useCallback)((t=>{m&&void 0!==i&&A(t,(()=>i(o)))}),[m,i,o]),S=(0,r.yK)((t=>({row:{height:1,...m&&{cursor:"pointer"},...a&&{borderBottom:`1px solid ${t[z]}`},...c&&c(o)}})),[m,a,c,o]);return l[H](l.Fragment,null,n()("tr",{onMouseLeave:y,onMouseEnter:g,[T]:S.row,[f]:C},void 0,e.map(((t,i)=>n()(q,{isRowHovered:u,isRowClickable:m,[v]:i,numColumns:e[D],data:o,[L]:t,multiselect:w,allowHorizontalScroll:s,cellStyle:0===i?h:void 0},`cell_${o.id}_${t.id}`)))),d&&n()("tr",{[T]:S.row},void 0,n()("td",{colSpan:e[D]},void 0,d)))}function q(t){let{data:o,[L]:e,[v]:i,numColumns:l,isRowHovered:d,isRowClickable:c,multiselect:h,allowHorizontalScroll:u,cellStyle:y}=t;window.__c={n:"Cell"};const C=0===i,b=1===i,H=i===l-1,B=(0,r.yK)((t=>({td:{...tt(e),height:"inherit",...C&&{borderRadius:(0,s.wK)({topLeft:3,bottomLeft:3})},...H&&{borderRadius:(0,s.wK)({topRight:3,bottomRight:3})},...u&&C&&{[W]:"sticky",zIndex:2,left:0,[Z]:t.modalBackground,boxShadow:`inset -1px 0px 0px ${t[z]}`,[I]:15},...u&&b&&{[_]:15},...d&&c&&{[Z]:t[g]},...y},innerDiv:{[F]:Y(e[j]),[R]:e[j][R],[k]:a.Z[k].UIRegular.desktop,color:t.regularTextColor,minHeight:42,display:"flex",alignItems:"center",height:E},[x]:{color:t[S][300],marginRight:16,opacity:null!=h&&h.row.getDisabledState(o)?.5:1}})),[e,C,b,H,d,c,h,o,u,y]),D=Boolean(e[m])||!!e.computeClickableContents&&e.computeClickableContents(o),$=h&&C?n()(w.Z,{[T]:B[x],checked:h.row.getSelectedState(o),[f]:()=>h.row[f](o),disabled:h.row.getDisabledState(o),size:14}):null;return n()("td",{[T]:B.td},void 0,n()("div",{[T]:B.innerDiv,[f]:D?A:void 0},void 0,$,e[p]({...o,isRowHovered:d})))}const A=(t,o)=>{(0,c.ZP)({event:t,context:c.Af.BaseTableRowClick,callback:o})},J=10,V={[_]:J/2,[I]:J/2};function Y(t){return"minWidth"in t?t[F]:t.width}function tt(t){let o;return o="width"in t[j]?{width:t[j].width}:{width:`${t[j].widthPercent}%`,[F]:t[j][F]},{...V,...o}}},53695:(t,o,e)=>{e.d(o,{N:()=>I,z:()=>z});var i=e(77094),n=e.n(i),l=e(97464),r=e.n(l),d=e(67294),a=e(81954),c=e(24405),s=e(3909),w=e(87279),h=e(61766),u=e(31945),p=e(78140),m=e(32163),g=e(89728),v=e(44532),f=e(72495),y=e(64369),C=e(69219);const S=e(85).j7K,x=e(85).Wp_,b=e(85).y79,k=e(85).D7I,R=e(85).L_E,_=e(85).pkR;function I(t){let{title:o,items:e,[_]:i,hideDropdownIcon:l}=t;window.__c={n:"DropdownCell"};const s=(0,a.qz)(void 0,h.Z),g=(0,c.yK)((()=>({[R]:{minWidth:180}})),[]),y={key:"workspace-users-menu",render:t=>d[k](f.Z,t),items:e};return n()(u.ZP,{popupType:v.kQ.Popup,style:g[R],buttonPopupStore:s,[_]:i,renderOrigin:t=>d[k](Z,r()({title:o,hideDropdownIcon:l,[_]:i},t)),render:()=>n()(p.Z,{menuType:w.og.Popup,maxWidth:250},void 0,n()(m.Z,{type:m.i[b],[S]:0,sections:[y],onAccept:()=>{s[x]({open:!1})}}))})}function Z(t){let{title:o,hideDropdownIcon:e,[_]:i,...l}=t;window.__c={n:"ClickableCellBody"};const a=(0,c.yK)((t=>({[R]:{display:"inline-flex",flexDirection:"row",justifyContent:"center",alignItems:"center",maxWidth:"100%"},name:{fontSize:14,maxWidth:150},chevron:{width:10,height:10,marginLeft:4,color:t.lightIconColor}})),[]);return d[k](g.Z,r()({style:a[R],[_]:i},l),n()(y.Z,{showTooltipWhenTruncated:!0},void 0,o),e||i?null:s.Z.chevronDown(a.chevron))}function z(){window.__c={n:"LoadingDropdownCell"};const t=(0,c.yK)((()=>({title:{width:"50%"}})),[]);return n()(C.H,{titleStyles:t.title})}},69219:(t,o,e)=>{e.d(o,{i:()=>v,H:()=>f});var i=e(77094),n=e.n(i),l=(e(67294),e(24405)),r=e(36596),d=e(64369);const a=e(85).BQ6,c=e(85).NF1,s=e(85).RJH,w=e(85).jkI,h=e(85).H1U,u=e(85).$Vg,p=e(85).UPJ,m=e(85).$bT,g=e(85).L_E;function v(t){let{title:o,byline:e,icon:i,useThinTitle:r}=t;window.__c={n:"IconCell"};const v=i?20:0,f=(0,l.yK)((t=>({[g]:{display:"flex",[m]:"row",[p]:u,[h]:w,padding:"8px 0",width:"100%"},summaryContainer:{width:`calc(100% - ${v}px)`},[s]:{height:v,width:v,flexGrow:0,flexShrink:0,flexBasis:v,marginRight:12,display:"flex",[p]:w,[h]:w,[c]:6},name:{fontSize:14,fontWeight:r?400:500},byline:{fontSize:12,lineHeight:1.3,opacity:.5}})),[v,r]);return n()("div",{[a]:f[g]},void 0,i?n()("div",{[a]:f[s]},void 0,i):null,n()("div",{[a]:f.summaryContainer},void 0,n()(d.Z,{[a]:f.name,showTooltipWhenTruncated:!0},void 0,o),e?n()(d.Z,{[a]:f.byline},void 0,e):null))}function f(t){let{titleStyles:o,includeByline:e,bylineStyles:i,includeIcon:d,iconStyles:s}=t;window.__c={n:"LoadingIconCell"};const v=(0,l.yK)((()=>({[g]:{height:53,display:"flex",[m]:"row",[p]:u,[h]:w,padding:"8px 0",width:"100%",gap:8},icon:{[c]:4,height:24,width:24,marginLeft:-2,...s},textContainer:{display:"flex",[m]:"column",[p]:w,[h]:u,width:"calc(100% - 32px)",gap:4},title:{[c]:4,height:14,width:"80%",...o},byline:{[c]:4,height:12,width:"60%",...i}})),[o,i,s]);return n()("div",{[a]:v[g]},void 0,d?n()(r.Z,{[a]:v.icon}):null,n()("div",{[a]:v.textContainer},void 0,n()(r.Z,{[a]:v.title}),e?n()(r.Z,{[a]:v.byline}):null))}}}]);