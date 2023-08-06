"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[563],{16372:(t,n,r)=>{r.d(n,{Il:()=>i,xV:()=>a,J5:()=>o,ZP:()=>w,SU:()=>k,B8:()=>N,Ss:()=>Z,Ym:()=>$});var e=r(44087);function i(){}var a=.7,o=1/a,u="\\s*([+-]?\\d+)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",l="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",h=/^#([0-9a-f]{3,8})$/,c=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),f=new RegExp("^rgb\\("+[l,l,l]+"\\)$"),g=new RegExp("^rgba\\("+[u,u,u,s]+"\\)$"),d=new RegExp("^rgba\\("+[l,l,l,s]+"\\)$"),m=new RegExp("^hsl\\("+[s,l,l]+"\\)$"),p=new RegExp("^hsla\\("+[s,l,l,s]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(){return this.rgb().formatHex()}function v(){return this.rgb().formatRgb()}function w(t){var n,r;return t=(t+"").trim().toLowerCase(),(n=h.exec(t))?(r=n[1].length,n=parseInt(n[1],16),6===r?M(n):3===r?new Z(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===r?x(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===r?x(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=c.exec(t))?new Z(n[1],n[2],n[3],1):(n=f.exec(t))?new Z(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=g.exec(t))?x(n[1],n[2],n[3],n[4]):(n=d.exec(t))?x(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=m.exec(t))?j(n[1],n[2]/100,n[3]/100,1):(n=p.exec(t))?j(n[1],n[2]/100,n[3]/100,n[4]):y.hasOwnProperty(t)?M(y[t]):"transparent"===t?new Z(NaN,NaN,NaN,0):null}function M(t){return new Z(t>>16&255,t>>8&255,255&t,1)}function x(t,n,r,e){return e<=0&&(t=n=r=NaN),new Z(t,n,r,e)}function k(t){return t instanceof i||(t=w(t)),t?new Z((t=t.rgb()).r,t.g,t.b,t.opacity):new Z}function N(t,n,r,e){return 1===arguments.length?k(t):new Z(t,n,r,null==e?1:e)}function Z(t,n,r,e){this.r=+t,this.g=+n,this.b=+r,this.opacity=+e}function A(){return"#"+S(this.r)+S(this.g)+S(this.b)}function E(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function S(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function j(t,n,r,e){return e<=0?t=n=r=NaN:r<=0||r>=1?t=n=NaN:n<=0&&(t=NaN),new R(t,n,r,e)}function P(t){if(t instanceof R)return new R(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=w(t)),!t)return new R;if(t instanceof R)return t;var n=(t=t.rgb()).r/255,r=t.g/255,e=t.b/255,a=Math.min(n,r,e),o=Math.max(n,r,e),u=NaN,s=o-a,l=(o+a)/2;return s?(u=n===o?(r-e)/s+6*(r<e):r===o?(e-n)/s+2:(n-r)/s+4,s/=l<.5?o+a:2-o-a,u*=60):s=l>0&&l<1?0:u,new R(u,s,l,t.opacity)}function $(t,n,r,e){return 1===arguments.length?P(t):new R(t,n,r,null==e?1:e)}function R(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}function q(t,n,r){return 255*(t<60?n+(r-n)*t/60:t<180?r:t<240?n+(r-n)*(240-t)/60:n)}(0,e.Z)(i,w,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:b,formatHex:b,formatHsl:function(){return P(this).formatHsl()},formatRgb:v,toString:v}),(0,e.Z)(Z,N,(0,e.l)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new Z(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?a:Math.pow(a,t),new Z(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:A,formatHex:A,formatRgb:E,toString:E})),(0,e.Z)(R,$,(0,e.l)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new R(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?a:Math.pow(a,t),new R(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*n,i=2*r-e;return new Z(q(t>=240?t-240:t+120,i,e),q(t,i,e),q(t<120?t+240:t-120,i,e),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}))},44087:(t,n,r)=>{function e(t,n,r){t.prototype=n.prototype=r,r.constructor=t}function i(t,n){var r=Object.create(t.prototype);for(var e in n)r[e]=n[e];return r}r.d(n,{Z:()=>e,l:()=>i})},28602:(t,n,r)=>{r.d(n,{WU:()=>c,jH:()=>f});var e=r(33085);var i=r(46196);var a,o=r(38885);function u(t,n){var r=(0,o.V)(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}const s={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:o.Z,e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return u(100*t,n)},r:u,s:function(t,n){var r=(0,o.V)(t,n);if(!r)return t+"";var e=r[0],i=r[1],u=i-(a=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,s=e.length;return u===s?e:u>s?e+new Array(u-s+1).join("0"):u>0?e.slice(0,u)+"."+e.slice(u):"0."+new Array(1-u).join("0")+(0,o.V)(t,Math.max(0,n+u-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function l(t){return t}var h,c,f,g=Array.prototype.map,d=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function m(t){var n,r,o=void 0===t.grouping||void 0===t.thousands?l:(n=g.call(t.grouping,Number),r=t.thousands+"",function(t,e){for(var i=t.length,a=[],o=0,u=n[0],s=0;i>0&&u>0&&(s+u+1>e&&(u=Math.max(1,e-s)),a.push(t.substring(i-=u,i+u)),!((s+=u+1)>e));)u=n[o=(o+1)%n.length];return a.reverse().join(r)}),u=void 0===t.currency?"":t.currency[0]+"",h=void 0===t.currency?"":t.currency[1]+"",c=void 0===t.decimal?".":t.decimal+"",f=void 0===t.numerals?l:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(g.call(t.numerals,String)),m=void 0===t.percent?"%":t.percent+"",p=void 0===t.minus?"-":t.minus+"",y=void 0===t.nan?"NaN":t.nan+"";function b(t){var n=(t=(0,i.Z)(t)).fill,r=t.align,e=t.sign,l=t.symbol,g=t.zero,b=t.width,v=t.comma,w=t.precision,M=t.trim,x=t.type;"n"===x?(v=!0,x="g"):s[x]||(void 0===w&&(w=12),M=!0,x="g"),(g||"0"===n&&"="===r)&&(g=!0,n="0",r="=");var k="$"===l?u:"#"===l&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",N="$"===l?h:/[%p]/.test(x)?m:"",Z=s[x],A=/[defgprs%]/.test(x);function E(t){var i,u,s,l=k,h=N;if("c"===x)h=Z(t)+h,t="";else{var m=(t=+t)<0||1/t<0;if(t=isNaN(t)?y:Z(Math.abs(t),w),M&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),m&&0==+t&&"+"!==e&&(m=!1),l=(m?"("===e?e:p:"-"===e||"("===e?"":e)+l,h=("s"===x?d[8+a/3]:"")+h+(m&&"("===e?")":""),A)for(i=-1,u=t.length;++i<u;)if(48>(s=t.charCodeAt(i))||s>57){h=(46===s?c+t.slice(i+1):t.slice(i))+h,t=t.slice(0,i);break}}v&&!g&&(t=o(t,1/0));var E=l.length+t.length+h.length,S=E<b?new Array(b-E+1).join(n):"";switch(v&&g&&(t=o(S+t,S.length?b-h.length:1/0),S=""),r){case"<":t=l+t+h+S;break;case"=":t=l+S+t+h;break;case"^":t=S.slice(0,E=S.length>>1)+l+t+h+S.slice(E);break;default:t=S+l+t+h}return f(t)}return w=void 0===w?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w)),E.toString=function(){return t+""},E}return{format:b,formatPrefix:function(t,n){var r=b(((t=(0,i.Z)(t)).type="f",t)),a=3*Math.max(-8,Math.min(8,Math.floor((0,e.Z)(n)/3))),o=Math.pow(10,-a),u=d[8+a/3];return function(t){return r(o*t)+u}}}}h=m({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),c=h.format,f=h.formatPrefix},33085:(t,n,r)=>{r.d(n,{Z:()=>i});var e=r(38885);function i(t){return(t=(0,e.V)(Math.abs(t)))?t[1]:NaN}},38885:(t,n,r)=>{function e(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function i(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}r.d(n,{Z:()=>e,V:()=>i})},46196:(t,n,r)=>{r.d(n,{Z:()=>i});var e=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function i(t){if(!(n=e.exec(t)))throw new Error("invalid format: "+t);var n;return new a({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function a(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}i.prototype=a.prototype,a.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type}},68195:(t,n,r)=>{r.d(n,{Z:()=>i});var e=r(33085);function i(t){return Math.max(0,-(0,e.Z)(Math.abs(t)))}},53726:(t,n,r)=>{r.d(n,{Z:()=>i});var e=r(33085);function i(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,e.Z)(n)/3)))-(0,e.Z)(Math.abs(t)))}},37655:(t,n,r)=>{r.d(n,{Z:()=>i});var e=r(33085);function i(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,(0,e.Z)(n)-(0,e.Z)(t))+1}},85910:(t,n,r)=>{r.d(n,{wx:()=>a,yi:()=>o,ZP:()=>u});var e=r(55302);function i(t,n){return function(r){return t+r*n}}function a(t,n){var r=n-t;return r?i(t,r>180||r<-180?r-360*Math.round(r/360):r):(0,e.Z)(isNaN(t)?n:t)}function o(t){return 1==(t=+t)?u:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):(0,e.Z)(isNaN(n)?r:n)}}function u(t,n){var r=n-t;return r?i(t,r):(0,e.Z)(isNaN(t)?n:t)}},55302:(t,n,r)=>{function e(t){return function(){return t}}r.d(n,{Z:()=>e})},73626:(t,n,r)=>{function e(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}}r.d(n,{Z:()=>e})},3474:(t,n,r)=>{r.d(n,{ZP:()=>o});var e=r(16372);function i(t,n,r,e,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*n+(4-6*a+3*o)*r+(1+3*t+3*a-3*o)*e+o*i)/6}var a=r(85910);const o=function t(n){var r=(0,a.yi)(n);function i(t,n){var i=r((t=(0,e.B8)(t)).r,(n=(0,e.B8)(n)).r),o=r(t.g,n.g),u=r(t.b,n.b),s=(0,a.ZP)(t.opacity,n.opacity);return function(n){return t.r=i(n),t.g=o(n),t.b=u(n),t.opacity=s(n),t+""}}return i.gamma=t,i}(1);function u(t){return function(n){var r,i,a=n.length,o=new Array(a),u=new Array(a),s=new Array(a);for(r=0;r<a;++r)i=(0,e.B8)(n[r]),o[r]=i.r||0,u[r]=i.g||0,s[r]=i.b||0;return o=t(o),u=t(u),s=t(s),i.opacity=1,function(t){return i.r=o(t),i.g=u(t),i.b=s(t),i+""}}}u((function(t){var n=t.length-1;return function(r){var e=r<=0?r=0:r>=1?(r=1,n-1):Math.floor(r*n),a=t[e],o=t[e+1],u=e>0?t[e-1]:2*a-o,s=e<n-1?t[e+2]:2*o-a;return i((r-e/n)*n,u,a,o,s)}})),u((function(t){var n=t.length;return function(r){var e=Math.floor(((r%=1)<0?++r:r)*n),a=t[(e+n-1)%n],o=t[e%n],u=t[(e+1)%n],s=t[(e+2)%n];return i((r-e/n)*n,a,o,u,s)}}))},55720:(t,n,r)=>{function e(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}r.d(n,{Z:()=>e})},59843:(t,n,r)=>{r.d(n,{Z:()=>o});var e=r(73626),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,a=new RegExp(i.source,"g");function o(t,n){var r,o,u,s=i.lastIndex=a.lastIndex=0,l=-1,h=[],c=[];for(t+="",n+="";(r=i.exec(t))&&(o=a.exec(n));)(u=o.index)>s&&(u=n.slice(s,u),h[l]?h[l]+=u:h[++l]=u),(r=r[0])===(o=o[0])?h[l]?h[l]+=o:h[++l]=o:(h[++l]=null,c.push({i:l,x:(0,e.Z)(r,o)})),s=a.lastIndex;return s<n.length&&(u=n.slice(s),h[l]?h[l]+=u:h[++l]=u),h.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var r,e=0;e<n;++e)h[(r=c[e]).i]=r.x(t);return h.join("")})}},73172:(t,n,r)=>{r.d(n,{Z:()=>f});var e=r(16372),i=r(3474);function a(t,n){var r,e=n?n.length:0,i=t?Math.min(e,t.length):0,a=new Array(i),o=new Array(e);for(r=0;r<i;++r)a[r]=f(t[r],n[r]);for(;r<e;++r)o[r]=n[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function o(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}var u=r(73626);function s(t,n){var r,e={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=f(t[r],n[r]):i[r]=n[r];return function(t){for(r in e)i[r]=e[r](t);return i}}var l=r(59843),h=r(55302);function c(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(r=0;r<e;++r)i[r]=t[r]*(1-a)+n[r]*a;return i}}function f(t,n){var r,f,g=typeof n;return null==n||"boolean"===g?(0,h.Z)(n):("number"===g?u.Z:"string"===g?(r=(0,e.ZP)(n))?(n=r,i.ZP):l.Z:n instanceof e.ZP?i.ZP:n instanceof Date?o:(f=n,!ArrayBuffer.isView(f)||f instanceof DataView?Array.isArray(n)?a:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?s:u.Z:c))(t,n)}}}]);