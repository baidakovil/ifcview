var Tr=Object.defineProperty,zr=(i,t,e)=>t in i?Tr(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,at=(i,t,e)=>(zr(i,typeof t!="symbol"?t+"":t,e),e);const xt=Math.min,q=Math.max,me=Math.round,tt=i=>({x:i,y:i}),Pr={left:"right",right:"left",bottom:"top",top:"bottom"},jr={start:"end",end:"start"};function vi(i,t,e){return q(i,xt(t,e))}function Jt(i,t){return typeof i=="function"?i(t):i}function W(i){return i.split("-")[0]}function Ce(i){return i.split("-")[1]}function rn(i){return i==="x"?"y":"x"}function on(i){return i==="y"?"height":"width"}function Xt(i){return["top","bottom"].includes(W(i))?"y":"x"}function sn(i){return rn(Xt(i))}function Lr(i,t,e){e===void 0&&(e=!1);const r=Ce(i),n=sn(i),o=on(n);let s=n==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=fe(s)),[s,fe(s)]}function Mr(i){const t=fe(i);return[Ve(i),t,Ve(t)]}function Ve(i){return i.replace(/start|end/g,t=>jr[t])}function Rr(i,t,e){const r=["left","right"],n=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:r:t?r:n;case"left":case"right":return t?o:s;default:return[]}}function Hr(i,t,e,r){const n=Ce(i);let o=Rr(W(i),e==="start",r);return n&&(o=o.map(s=>s+"-"+n),t&&(o=o.concat(o.map(Ve)))),o}function fe(i){return i.replace(/left|right|bottom|top/g,t=>Pr[t])}function Nr(i){return{top:0,right:0,bottom:0,left:0,...i}}function ln(i){return typeof i!="number"?Nr(i):{top:i,right:i,bottom:i,left:i}}function wt(i){const{x:t,y:e,width:r,height:n}=i;return{width:r,height:n,top:e,left:t,right:t+r,bottom:e+n,x:t,y:e}}function yi(i,t,e){let{reference:r,floating:n}=i;const o=Xt(t),s=sn(t),l=on(s),a=W(t),c=o==="y",h=r.x+r.width/2-n.width/2,d=r.y+r.height/2-n.height/2,p=r[l]/2-n[l]/2;let b;switch(a){case"top":b={x:h,y:r.y-n.height};break;case"bottom":b={x:h,y:r.y+r.height};break;case"right":b={x:r.x+r.width,y:d};break;case"left":b={x:r.x-n.width,y:d};break;default:b={x:r.x,y:r.y}}switch(Ce(t)){case"start":b[s]-=p*(e&&c?-1:1);break;case"end":b[s]+=p*(e&&c?-1:1);break}return b}const Br=async(i,t,e)=>{const{placement:r="bottom",strategy:n="absolute",middleware:o=[],platform:s}=e,l=o.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:i,floating:t,strategy:n}),{x:h,y:d}=yi(c,r,a),p=r,b={},f=0;for(let v=0;v<l.length;v++){const{name:g,fn:A}=l[v],{x:C,y:_,data:$,reset:z}=await A({x:h,y:d,initialPlacement:r,placement:p,strategy:n,middlewareData:b,rects:c,platform:s,elements:{reference:i,floating:t}});h=C??h,d=_??d,b={...b,[g]:{...b[g],...$}},z&&f<=50&&(f++,typeof z=="object"&&(z.placement&&(p=z.placement),z.rects&&(c=z.rects===!0?await s.getElementRects({reference:i,floating:t,strategy:n}):z.rects),{x:h,y:d}=yi(c,p,a)),v=-1)}return{x:h,y:d,placement:p,strategy:n,middlewareData:b}};async function ri(i,t){var e;t===void 0&&(t={});const{x:r,y:n,platform:o,rects:s,elements:l,strategy:a}=i,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:b=0}=Jt(t,i),f=ln(b),v=l[p?d==="floating"?"reference":"floating":d],g=wt(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(v)))==null||e?v:v.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),A=d==="floating"?{x:r,y:n,width:s.floating.width,height:s.floating.height}:s.reference,C=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),_=await(o.isElement==null?void 0:o.isElement(C))?await(o.getScale==null?void 0:o.getScale(C))||{x:1,y:1}:{x:1,y:1},$=wt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(g.top-$.top+f.top)/_.y,bottom:($.bottom-g.bottom+f.bottom)/_.y,left:(g.left-$.left+f.left)/_.x,right:($.right-g.right+f.right)/_.x}}const Ir=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,r;const{placement:n,middlewareData:o,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...g}=Jt(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const A=W(n),C=W(l)===l,_=await(a.isRTL==null?void 0:a.isRTL(c.floating)),$=p||(C||!v?[fe(l)]:Mr(l));!p&&f!=="none"&&$.push(...Hr(l,v,f,_));const z=[l,...$],y=await ri(t,g),O=[];let P=((r=o.flip)==null?void 0:r.overflows)||[];if(h&&O.push(y[A]),d){const B=Lr(n,s,_);O.push(y[B[0]],y[B[1]])}if(P=[...P,{placement:n,overflows:O}],!O.every(B=>B<=0)){var U,k;const B=(((U=o.flip)==null?void 0:U.index)||0)+1,vt=z[B];if(vt)return{data:{index:B,overflows:P},reset:{placement:vt}};let J=(k=P.filter(I=>I.overflows[0]<=0).sort((I,V)=>I.overflows[1]-V.overflows[1])[0])==null?void 0:k.placement;if(!J)switch(b){case"bestFit":{var gt;const I=(gt=P.map(V=>[V.placement,V.overflows.filter(lt=>lt>0).reduce((lt,He)=>lt+He,0)]).sort((V,lt)=>V[1]-lt[1])[0])==null?void 0:gt[0];I&&(J=I);break}case"initialPlacement":J=l;break}if(n!==J)return{reset:{placement:J}}}return{}}}};function an(i){const t=xt(...i.map(o=>o.left)),e=xt(...i.map(o=>o.top)),r=q(...i.map(o=>o.right)),n=q(...i.map(o=>o.bottom));return{x:t,y:e,width:r-t,height:n-e}}function Fr(i){const t=i.slice().sort((n,o)=>n.y-o.y),e=[];let r=null;for(let n=0;n<t.length;n++){const o=t[n];!r||o.y-r.y>r.height/2?e.push([o]):e[e.length-1].push(o),r=o}return e.map(n=>wt(an(n)))}const Dr=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:r,rects:n,platform:o,strategy:s}=t,{padding:l=2,x:a,y:c}=Jt(i,t),h=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(r.reference))||[]),d=Fr(h),p=wt(an(h)),b=ln(l);function f(){if(d.length===2&&d[0].left>d[1].right&&a!=null&&c!=null)return d.find(g=>a>g.left-b.left&&a<g.right+b.right&&c>g.top-b.top&&c<g.bottom+b.bottom)||p;if(d.length>=2){if(Xt(e)==="y"){const k=d[0],gt=d[d.length-1],B=W(e)==="top",vt=k.top,J=gt.bottom,I=B?k.left:gt.left,V=B?k.right:gt.right,lt=V-I,He=J-vt;return{top:vt,bottom:J,left:I,right:V,width:lt,height:He,x:I,y:vt}}const g=W(e)==="left",A=q(...d.map(k=>k.right)),C=xt(...d.map(k=>k.left)),_=d.filter(k=>g?k.left===C:k.right===A),$=_[0].top,z=_[_.length-1].bottom,y=C,O=A,P=O-y,U=z-$;return{top:$,bottom:z,left:y,right:O,width:P,height:U,x:y,y:$}}return p}const v=await o.getElementRects({reference:{getBoundingClientRect:f},floating:r.floating,strategy:s});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function Ur(i,t){const{placement:e,platform:r,elements:n}=i,o=await(r.isRTL==null?void 0:r.isRTL(n.floating)),s=W(e),l=Ce(e),a=Xt(e)==="y",c=["left","top"].includes(s)?-1:1,h=o&&a?-1:1,d=Jt(t,i);let{mainAxis:p,crossAxis:b,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof f=="number"&&(b=l==="end"?f*-1:f),a?{x:b*h,y:p*c}:{x:p*c,y:b*h}}const cn=function(i){return{name:"offset",options:i,async fn(t){var e,r;const{x:n,y:o,placement:s,middlewareData:l}=t,a=await Ur(t,i);return s===((e=l.offset)==null?void 0:e.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:n+a.x,y:o+a.y,data:{...a,placement:s}}}}},Vr=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:r,placement:n}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:g=>{let{x:A,y:C}=g;return{x:A,y:C}}},...a}=Jt(i,t),c={x:e,y:r},h=await ri(t,a),d=Xt(W(n)),p=rn(d);let b=c[p],f=c[d];if(o){const g=p==="y"?"top":"left",A=p==="y"?"bottom":"right",C=b+h[g],_=b-h[A];b=vi(C,b,_)}if(s){const g=d==="y"?"top":"left",A=d==="y"?"bottom":"right",C=f+h[g],_=f-h[A];f=vi(C,f,_)}const v=l.fn({...t,[p]:b,[d]:f});return{...v,data:{x:v.x-e,y:v.y-r}}}}};function et(i){return hn(i)?(i.nodeName||"").toLowerCase():"#document"}function j(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function nt(i){var t;return(t=(hn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function hn(i){return i instanceof Node||i instanceof j(i).Node}function Y(i){return i instanceof Element||i instanceof j(i).Element}function F(i){return i instanceof HTMLElement||i instanceof j(i).HTMLElement}function _i(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof j(i).ShadowRoot}function Zt(i){const{overflow:t,overflowX:e,overflowY:r,display:n}=R(i);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(n)}function qr(i){return["table","td","th"].includes(et(i))}function oi(i){const t=si(),e=R(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(e.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(e.contain||"").includes(r))}function Wr(i){let t=$t(i);for(;F(t)&&!Ae(t);){if(oi(t))return t;t=$t(t)}return null}function si(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ae(i){return["html","body","#document"].includes(et(i))}function R(i){return j(i).getComputedStyle(i)}function ke(i){return Y(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function $t(i){if(et(i)==="html")return i;const t=i.assignedSlot||i.parentNode||_i(i)&&i.host||nt(i);return _i(t)?t.host:t}function un(i){const t=$t(i);return Ae(t)?i.ownerDocument?i.ownerDocument.body:i.body:F(t)&&Zt(t)?t:un(t)}function qe(i,t,e){var r;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=un(i),o=n===((r=i.ownerDocument)==null?void 0:r.body),s=j(n);return o?t.concat(s,s.visualViewport||[],Zt(n)?n:[],s.frameElement&&e?qe(s.frameElement):[]):t.concat(n,qe(n,[],e))}function dn(i){const t=R(i);let e=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=F(i),o=n?i.offsetWidth:e,s=n?i.offsetHeight:r,l=me(e)!==o||me(r)!==s;return l&&(e=o,r=s),{width:e,height:r,$:l}}function pn(i){return Y(i)?i:i.contextElement}function _t(i){const t=pn(i);if(!F(t))return tt(1);const e=t.getBoundingClientRect(),{width:r,height:n,$:o}=dn(t);let s=(o?me(e.width):e.width)/r,l=(o?me(e.height):e.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Yr=tt(0);function bn(i){const t=j(i);return!si()||!t.visualViewport?Yr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qr(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==j(i)?!1:t}function Ut(i,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),o=pn(i);let s=tt(1);t&&(r?Y(r)&&(s=_t(r)):s=_t(i));const l=Qr(o,e,r)?bn(o):tt(0);let a=(n.left+l.x)/s.x,c=(n.top+l.y)/s.y,h=n.width/s.x,d=n.height/s.y;if(o){const p=j(o),b=r&&Y(r)?j(r):r;let f=p,v=f.frameElement;for(;v&&r&&b!==f;){const g=_t(v),A=v.getBoundingClientRect(),C=R(v),_=A.left+(v.clientLeft+parseFloat(C.paddingLeft))*g.x,$=A.top+(v.clientTop+parseFloat(C.paddingTop))*g.y;a*=g.x,c*=g.y,h*=g.x,d*=g.y,a+=_,c+=$,f=j(v),v=f.frameElement}}return wt({width:h,height:d,x:a,y:c})}const Gr=[":popover-open",":modal"];function mn(i){return Gr.some(t=>{try{return i.matches(t)}catch{return!1}})}function Jr(i){let{elements:t,rect:e,offsetParent:r,strategy:n}=i;const o=n==="fixed",s=nt(r),l=t?mn(t.floating):!1;if(r===s||l&&o)return e;let a={scrollLeft:0,scrollTop:0},c=tt(1);const h=tt(0),d=F(r);if((d||!d&&!o)&&((et(r)!=="body"||Zt(s))&&(a=ke(r)),F(r))){const p=Ut(r);c=_t(r),h.x=p.x+r.clientLeft,h.y=p.y+r.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-a.scrollLeft*c.x+h.x,y:e.y*c.y-a.scrollTop*c.y+h.y}}function Xr(i){return Array.from(i.getClientRects())}function fn(i){return Ut(nt(i)).left+ke(i).scrollLeft}function Zr(i){const t=nt(i),e=ke(i),r=i.ownerDocument.body,n=q(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=q(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-e.scrollLeft+fn(i);const l=-e.scrollTop;return R(r).direction==="rtl"&&(s+=q(t.clientWidth,r.clientWidth)-n),{width:n,height:o,x:s,y:l}}function Kr(i,t){const e=j(i),r=nt(i),n=e.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,a=0;if(n){o=n.width,s=n.height;const c=si();(!c||c&&t==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:o,height:s,x:l,y:a}}function to(i,t){const e=Ut(i,!0,t==="fixed"),r=e.top+i.clientTop,n=e.left+i.clientLeft,o=F(i)?_t(i):tt(1),s=i.clientWidth*o.x,l=i.clientHeight*o.y,a=n*o.x,c=r*o.y;return{width:s,height:l,x:a,y:c}}function xi(i,t,e){let r;if(t==="viewport")r=Kr(i,e);else if(t==="document")r=Zr(nt(i));else if(Y(t))r=to(t,e);else{const n=bn(i);r={...t,x:t.x-n.x,y:t.y-n.y}}return wt(r)}function gn(i,t){const e=$t(i);return e===t||!Y(e)||Ae(e)?!1:R(e).position==="fixed"||gn(e,t)}function eo(i,t){const e=t.get(i);if(e)return e;let r=qe(i,[],!1).filter(l=>Y(l)&&et(l)!=="body"),n=null;const o=R(i).position==="fixed";let s=o?$t(i):i;for(;Y(s)&&!Ae(s);){const l=R(s),a=oi(s);!a&&l.position==="fixed"&&(n=null),(o?!a&&!n:!a&&l.position==="static"&&n&&["absolute","fixed"].includes(n.position)||Zt(s)&&!a&&gn(i,s))?r=r.filter(c=>c!==s):n=l,s=$t(s)}return t.set(i,r),r}function io(i){let{element:t,boundary:e,rootBoundary:r,strategy:n}=i;const o=[...e==="clippingAncestors"?eo(t,this._c):[].concat(e),r],s=o[0],l=o.reduce((a,c)=>{const h=xi(t,c,n);return a.top=q(h.top,a.top),a.right=xt(h.right,a.right),a.bottom=xt(h.bottom,a.bottom),a.left=q(h.left,a.left),a},xi(t,s,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function no(i){const{width:t,height:e}=dn(i);return{width:t,height:e}}function ro(i,t,e){const r=F(t),n=nt(t),o=e==="fixed",s=Ut(i,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=tt(0);if(r||!r&&!o)if((et(t)!=="body"||Zt(n))&&(l=ke(t)),r){const d=Ut(t,!0,o,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else n&&(a.x=fn(n));const c=s.left+l.scrollLeft-a.x,h=s.top+l.scrollTop-a.y;return{x:c,y:h,width:s.width,height:s.height}}function wi(i,t){return!F(i)||R(i).position==="fixed"?null:t?t(i):i.offsetParent}function vn(i,t){const e=j(i);if(!F(i)||mn(i))return e;let r=wi(i,t);for(;r&&qr(r)&&R(r).position==="static";)r=wi(r,t);return r&&(et(r)==="html"||et(r)==="body"&&R(r).position==="static"&&!oi(r))?e:r||Wr(i)||e}const oo=async function(i){const t=this.getOffsetParent||vn,e=this.getDimensions;return{reference:ro(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function so(i){return R(i).direction==="rtl"}const lo={convertOffsetParentRelativeRectToViewportRelativeRect:Jr,getDocumentElement:nt,getClippingRect:io,getOffsetParent:vn,getElementRects:oo,getClientRects:Xr,getDimensions:no,getScale:_t,isElement:Y,isRTL:so},yn=Vr,_n=Ir,xn=Dr,wn=(i,t,e)=>{const r=new Map,n={platform:lo,...e},o={...n.platform,_c:r};return Br(i,t,{...n,platform:o})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=globalThis,li=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ai=Symbol(),$i=new WeakMap;let $n=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(li&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=$i.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&$i.set(t,i))}return i}toString(){return this.cssText}};const ao=i=>new $n(typeof i=="string"?i:i+"",void 0,ai),E=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new $n(e,i,ai)},co=(i,t)=>{if(li)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=pe.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},Ei=li?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ao(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ho,defineProperty:uo,getOwnPropertyDescriptor:po,getOwnPropertyNames:bo,getOwnPropertySymbols:mo,getPrototypeOf:fo}=Object,Et=globalThis,Ci=Et.trustedTypes,go=Ci?Ci.emptyScript:"",Ai=Et.reactiveElementPolyfillSupport,Bt=(i,t)=>i,ge={toAttribute(i,t){switch(t){case Boolean:i=i?go:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ci=(i,t)=>!ho(i,t),ki={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ci};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Et.litPropertyMetadata??(Et.litPropertyMetadata=new WeakMap);class yt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ki){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&uo(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:o}=po(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return n==null?void 0:n.call(this)},set(s){const l=n==null?void 0:n.call(this);o.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ki}static _$Ei(){if(this.hasOwnProperty(Bt("elementProperties")))return;const t=fo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Bt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bt("properties"))){const e=this.properties,r=[...bo(e),...mo(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Ei(n))}else t!==void 0&&e.push(Ei(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return co(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:ge).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:ge;this._$Em=o,this[o]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ci)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[Bt("elementProperties")]=new Map,yt[Bt("finalized")]=new Map,Ai==null||Ai({ReactiveElement:yt}),(Et.reactiveElementVersions??(Et.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=globalThis,ye=ve.trustedTypes,Si=ye?ye.createPolicy("lit-html",{createHTML:i=>i}):void 0,En="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Cn="?"+X,vo=`<${Cn}>`,dt=document,Vt=()=>dt.createComment(""),qt=i=>i===null||typeof i!="object"&&typeof i!="function",An=Array.isArray,yo=i=>An(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ne=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Ti=/>/g,ct=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zi=/'/g,Pi=/"/g,kn=/^(?:script|style|textarea|title)$/i,_o=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),m=_o(1),Ct=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),ji=new WeakMap,ht=dt.createTreeWalker(dt,129);function Sn(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Si!==void 0?Si.createHTML(t):t}const xo=(i,t)=>{const e=i.length-1,r=[];let n,o=t===2?"<svg>":"",s=Nt;for(let l=0;l<e;l++){const a=i[l];let c,h,d=-1,p=0;for(;p<a.length&&(s.lastIndex=p,h=s.exec(a),h!==null);)p=s.lastIndex,s===Nt?h[1]==="!--"?s=Oi:h[1]!==void 0?s=Ti:h[2]!==void 0?(kn.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=ct):h[3]!==void 0&&(s=ct):s===ct?h[0]===">"?(s=n??Nt,d=-1):h[1]===void 0?d=-2:(d=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?ct:h[3]==='"'?Pi:zi):s===Pi||s===zi?s=ct:s===Oi||s===Ti?s=Nt:(s=ct,n=void 0);const b=s===ct&&i[l+1].startsWith("/>")?" ":"";o+=s===Nt?a+vo:d>=0?(r.push(c),a.slice(0,d)+En+a.slice(d)+X+b):a+X+(d===-2?l:b)}return[Sn(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),r]};class Wt{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[c,h]=xo(t,e);if(this.el=Wt.createElement(c,r),ht.currentNode=this.el.content,e===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=ht.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(En)){const p=h[s++],b=n.getAttribute(d).split(X),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:f[2],strings:b,ctor:f[1]==="."?$o:f[1]==="?"?Eo:f[1]==="@"?Co:Se}),n.removeAttribute(d)}else d.startsWith(X)&&(a.push({type:6,index:o}),n.removeAttribute(d));if(kn.test(n.tagName)){const d=n.textContent.split(X),p=d.length-1;if(p>0){n.textContent=ye?ye.emptyScript:"";for(let b=0;b<p;b++)n.append(d[b],Vt()),ht.nextNode(),a.push({type:2,index:++o});n.append(d[p],Vt())}}}else if(n.nodeType===8)if(n.data===Cn)a.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(X,d+1))!==-1;)a.push({type:7,index:o}),d+=X.length-1}o++}}static createElement(t,e){const r=dt.createElement("template");return r.innerHTML=t,r}}function At(i,t,e=i,r){var n,o;if(t===Ct)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const l=qt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),l===void 0?s=void 0:(s=new l(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=At(i,s._$AS(i,t.values),s,r)),t}class wo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=((t==null?void 0:t.creationScope)??dt).importNode(e,!0);ht.currentNode=n;let o=ht.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new Kt(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ao(o,this,t)),this._$AV.push(c),a=r[++l]}s!==(a==null?void 0:a.index)&&(o=ht.nextNode(),s++)}return ht.currentNode=dt,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Kt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=At(this,t,e),qt(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==Ct&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yo(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==S&&qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(dt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Wt.createElement(Sn(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===o)this._$AH.p(r);else{const s=new wo(o,this),l=s.u(this.options);s.p(r),this.T(l),this._$AH=s}}_$AC(t){let e=ji.get(t.strings);return e===void 0&&ji.set(t.strings,e=new Wt(t)),e}k(t){An(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new Kt(this.S(Vt()),this.S(Vt()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(t,e=this,r,n){const o=this.strings;let s=!1;if(o===void 0)t=At(this,t,e,0),s=!qt(t)||t!==this._$AH&&t!==Ct,s&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=At(this,l[r+a],e,a),c===Ct&&(c=this._$AH[a]),s||(s=!qt(c)||c!==this._$AH[a]),c===S?t=S:t!==S&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}s&&!n&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $o extends Se{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class Eo extends Se{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class Co extends Se{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=At(this,t,e,0)??S)===Ct)return;const r=this._$AH,n=t===S&&r!==S||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ao{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}}const Li=ve.litHtmlPolyfillSupport;Li==null||Li(Wt,Kt),(ve.litHtmlVersions??(ve.litHtmlVersions=[])).push("3.1.3");const kt=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let n=r._$litPart$;if(n===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=n=new Kt(t.insertBefore(Vt(),o),o,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=kt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return Ct}};var Mi;w._$litElement$=!0,w.finalized=!0,(Mi=globalThis.litElementHydrateSupport)==null||Mi.call(globalThis,{LitElement:w});const Ri=globalThis.litElementPolyfillSupport;Ri==null||Ri({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:ci},So=(i=ko,t,e)=>{const{kind:r,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(e.name,i),r==="accessor"){const{name:s}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,i)},init(l){return l!==void 0&&this.P(s,void 0,i),l}}}if(r==="setter"){const{name:s}=e;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,i)}}throw Error("Unsupported decorator location: "+r)};function u(i){return(t,e)=>typeof e=="object"?So(i,t,e):((r,n,o)=>{const s=n.hasOwnProperty(o);return n.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(i){return u({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zo=i=>(...t)=>({_$litDirective$:i,values:t});let Po=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this._$Ct=i,this._$AM=t,this._$Ci=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),It(n,t);return!0},_e=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},On=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Mo(t)}};function jo(i){this._$AN!==void 0?(_e(this),this._$AM=i,On(this)):this._$AM=i}function Lo(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let o=e;o<r.length;o++)It(r[o],!1),_e(r[o]);else r!=null&&(It(r,!1),_e(r));else It(this,i)}const Mo=i=>{i.type==To.CHILD&&(i._$AP??(i._$AP=Lo),i._$AQ??(i._$AQ=jo))};class Ro extends Po{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),On(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&(It(this,t),_e(this))}setValue(t){if(Oo(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=()=>new Ho;class Ho{}const Be=new WeakMap,K=zo(class extends Ro{render(i){return S}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),S}rt(i){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=Be.get(t);e===void 0&&(e=new WeakMap,Be.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Be.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Tn=Object.freeze({left:0,top:0,width:16,height:16}),xe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ee=Object.freeze({...Tn,...xe}),We=Object.freeze({...ee,body:"",hidden:!1}),No=Object.freeze({width:null,height:null}),zn=Object.freeze({...No,...xe});function Bo(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:r(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(i.slice(0,i.length-e.length));return isNaN(o)?0:(o=o/n,o%1===0?r(o):0)}}return t}const Io=/[\s,]+/;function Fo(i,t){t.split(Io).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const Pn={...zn,preserveAspectRatio:""};function Hi(i){const t={...Pn},e=(r,n)=>i.getAttribute(r)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Bo(e("rotate","")),Fo(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Do(i,t){for(const e in Pn)if(i[e]!==t[e])return!0;return!1}const Ft=/^[a-z0-9]+(-[a-z0-9]+)*$/,ie=(i,t,e,r="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:r,prefix:a,name:l};return t&&!be(c)?null:c}const o=n[0],s=o.split("-");if(s.length>1){const l={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!be(l)?null:l}if(e&&r===""){const l={provider:r,prefix:"",name:o};return t&&!be(l,e)?null:l}return null},be=(i,t)=>i?!!((i.provider===""||i.provider.match(Ft))&&(t&&i.prefix===""||i.prefix.match(Ft))&&i.name.match(Ft)):!1;function Uo(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const r=((i.rotate||0)+(t.rotate||0))%4;return r&&(e.rotate=r),e}function Ni(i,t){const e=Uo(i,t);for(const r in We)r in xe?r in i&&!(r in e)&&(e[r]=xe[r]):r in t?e[r]=t[r]:r in i&&(e[r]=i[r]);return e}function Vo(i,t){const e=i.icons,r=i.aliases||Object.create(null),n=Object.create(null);function o(s){if(e[s])return n[s]=[];if(!(s in n)){n[s]=null;const l=r[s]&&r[s].parent,a=l&&o(l);a&&(n[s]=[l].concat(a))}return n[s]}return Object.keys(e).concat(Object.keys(r)).forEach(o),n}function qo(i,t,e){const r=i.icons,n=i.aliases||Object.create(null);let o={};function s(l){o=Ni(r[l]||n[l],o)}return s(t),e.forEach(s),Ni(i,o)}function jn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const r=Vo(i);for(const n in r){const o=r[n];o&&(t(n,qo(i,n,o)),e.push(n))}return e}const Wo={provider:"",aliases:{},not_found:{},...Tn};function Ie(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Ln(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Ie(i,Wo))return null;const e=t.icons;for(const n in e){const o=e[n];if(!n.match(Ft)||typeof o.body!="string"||!Ie(o,We))return null}const r=t.aliases||Object.create(null);for(const n in r){const o=r[n],s=o.parent;if(!n.match(Ft)||typeof s!="string"||!e[s]&&!r[s]||!Ie(o,We))return null}return t}const we=Object.create(null);function Yo(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function it(i,t){const e=we[i]||(we[i]=Object.create(null));return e[t]||(e[t]=Yo(i,t))}function hi(i,t){return Ln(t)?jn(t,(e,r)=>{r?i.icons[e]=r:i.missing.add(e)}):[]}function Qo(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Go(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(we)).forEach(r=>{(typeof r=="string"&&typeof t=="string"?[t]:Object.keys(we[r]||{})).forEach(n=>{const o=it(r,n);e=e.concat(Object.keys(o.icons).map(s=>(r!==""?"@"+r+":":"")+n+":"+s))})}),e}let Yt=!1;function Mn(i){return typeof i=="boolean"&&(Yt=i),Yt}function Qt(i){const t=typeof i=="string"?ie(i,!0,Yt):i;if(t){const e=it(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Rn(i,t){const e=ie(i,!0,Yt);if(!e)return!1;const r=it(e.provider,e.prefix);return Qo(r,e.name,t)}function Bi(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Yt&&!t&&!i.prefix){let n=!1;return Ln(i)&&(i.prefix="",jn(i,(o,s)=>{s&&Rn(o,s)&&(n=!0)})),n}const e=i.prefix;if(!be({provider:t,prefix:e,name:"a"}))return!1;const r=it(t,e);return!!hi(r,i)}function Ii(i){return!!Qt(i)}function Jo(i){const t=Qt(i);return t?{...ee,...t}:null}function Xo(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return i.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const o=n.provider,s=n.prefix,l=n.name,a=e[o]||(e[o]=Object.create(null)),c=a[s]||(a[s]=it(o,s));let h;l in c.icons?h=t.loaded:s===""||c.missing.has(l)?h=t.missing:h=t.pending;const d={provider:o,prefix:s,name:l};h.push(d)}),t}function Hn(i,t){i.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(n=>n.id!==t))})}function Zo(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const r=i.provider,n=i.prefix;t.forEach(o=>{const s=o.icons,l=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(i.icons[c])s.loaded.push({provider:r,prefix:n,name:c});else if(i.missing.has(c))s.missing.push({provider:r,prefix:n,name:c});else return e=!0,!0;return!1}),s.pending.length!==l&&(e||Hn([i],o.id),o.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),o.abort))})}))}let Ko=0;function ts(i,t,e){const r=Ko++,n=Hn.bind(null,e,r);if(!t.pending.length)return n;const o={id:r,icons:t,callback:i,abort:n};return e.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(o)}),n}const Ye=Object.create(null);function Fi(i,t){Ye[i]=t}function Qe(i){return Ye[i]||Ye[""]}function es(i,t=!0,e=!1){const r=[];return i.forEach(n=>{const o=typeof n=="string"?ie(n,t,e):n;o&&r.push(o)}),r}var is={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ns(i,t,e,r){const n=i.resources.length,o=i.random?Math.floor(Math.random()*n):i.index;let s;if(i.random){let y=i.resources.slice(0);for(s=[];y.length>1;){const O=Math.floor(Math.random()*y.length);s.push(y[O]),y=y.slice(0,O).concat(y.slice(O+1))}s=s.concat(y)}else s=i.resources.slice(o).concat(i.resources.slice(0,o));const l=Date.now();let a="pending",c=0,h,d=null,p=[],b=[];typeof r=="function"&&b.push(r);function f(){d&&(clearTimeout(d),d=null)}function v(){a==="pending"&&(a="aborted"),f(),p.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),p=[]}function g(y,O){O&&(b=[]),typeof y=="function"&&b.push(y)}function A(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:p.length,subscribe:g,abort:v}}function C(){a="failed",b.forEach(y=>{y(void 0,h)})}function _(){p.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),p=[]}function $(y,O,P){const U=O!=="success";switch(p=p.filter(k=>k!==y),a){case"pending":break;case"failed":if(U||!i.dataAfterTimeout)return;break;default:return}if(O==="abort"){h=P,C();return}if(U){h=P,p.length||(s.length?z():C());return}if(f(),_(),!i.random){const k=i.resources.indexOf(y.resource);k!==-1&&k!==i.index&&(i.index=k)}a="completed",b.forEach(k=>{k(P)})}function z(){if(a!=="pending")return;f();const y=s.shift();if(y===void 0){if(p.length){d=setTimeout(()=>{f(),a==="pending"&&(_(),C())},i.timeout);return}C();return}const O={status:"pending",resource:y,callback:(P,U)=>{$(O,P,U)}};p.push(O),c++,d=setTimeout(z,i.rotate),e(y,t,O.callback)}return setTimeout(z),A}function Nn(i){const t={...is,...i};let e=[];function r(){e=e.filter(s=>s().status==="pending")}function n(s,l,a){const c=ns(t,s,l,(h,d)=>{r(),a&&a(h,d)});return e.push(c),c}function o(s){return e.find(l=>s(l))||null}return{query:n,find:o,setIndex:s=>{t.index=s},getIndex:()=>t.index,cleanup:r}}function ui(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const Oe=Object.create(null),he=["https://api.simplesvg.com","https://api.unisvg.com"],Ge=[];for(;he.length>0;)he.length===1||Math.random()>.5?Ge.push(he.shift()):Ge.push(he.pop());Oe[""]=ui({resources:["https://api.iconify.design"].concat(Ge)});function Di(i,t){const e=ui(t);return e===null?!1:(Oe[i]=e,!0)}function Te(i){return Oe[i]}function rs(){return Object.keys(Oe)}function Ui(){}const Fe=Object.create(null);function os(i){if(!Fe[i]){const t=Te(i);if(!t)return;const e=Nn(t),r={config:t,redundancy:e};Fe[i]=r}return Fe[i]}function Bn(i,t,e){let r,n;if(typeof i=="string"){const o=Qe(i);if(!o)return e(void 0,424),Ui;n=o.send;const s=os(i);s&&(r=s.redundancy)}else{const o=ui(i);if(o){r=Nn(o);const s=i.resources?i.resources[0]:"",l=Qe(s);l&&(n=l.send)}}return!r||!n?(e(void 0,424),Ui):r.query(t,n,e)().abort}const Vi="iconify2",Gt="iconify",In=Gt+"-count",qi=Gt+"-version",Fn=36e5,ss=168,ls=50;function Je(i,t){try{return i.getItem(t)}catch{}}function di(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Wi(i,t){try{i.removeItem(t)}catch{}}function Xe(i,t){return di(i,In,t.toString())}function Ze(i){return parseInt(Je(i,In))||0}const ut={local:!0,session:!0},Dn={local:new Set,session:new Set};let pi=!1;function as(i){pi=i}let ue=typeof window>"u"?{}:window;function Un(i){const t=i+"Storage";try{if(ue&&ue[t]&&typeof ue[t].length=="number")return ue[t]}catch{}ut[i]=!1}function Vn(i,t){const e=Un(i);if(!e)return;const r=Je(e,qi);if(r!==Vi){if(r){const l=Ze(e);for(let a=0;a<l;a++)Wi(e,Gt+a.toString())}di(e,qi,Vi),Xe(e,0);return}const n=Math.floor(Date.now()/Fn)-ss,o=l=>{const a=Gt+l.toString(),c=Je(e,a);if(typeof c=="string"){try{const h=JSON.parse(c);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>n&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&t(h,l))return!0}catch{}Wi(e,a)}};let s=Ze(e);for(let l=s-1;l>=0;l--)o(l)||(l===s-1?(s--,Xe(e,s)):Dn[i].add(l))}function qn(){if(!pi){as(!0);for(const i in ut)Vn(i,t=>{const e=t.data,r=t.provider,n=e.prefix,o=it(r,n);if(!hi(o,e).length)return!1;const s=e.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,s):s,!0})}}function cs(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const r in ut)Vn(r,n=>{const o=n.data;return n.provider!==i.provider||o.prefix!==i.prefix||o.lastModified===t});return!0}function hs(i,t){pi||qn();function e(r){let n;if(!ut[r]||!(n=Un(r)))return;const o=Dn[r];let s;if(o.size)o.delete(s=Array.from(o).shift());else if(s=Ze(n),s>=ls||!Xe(n,s+1))return;const l={cached:Math.floor(Date.now()/Fn),provider:i.provider,data:t};return di(n,Gt+s.toString(),JSON.stringify(l))}t.lastModified&&!cs(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Yi(){}function us(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Zo(i)}))}function ds(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:r}=i,n=i.iconsToLoad;delete i.iconsToLoad;let o;!n||!(o=Qe(e))||o.prepare(e,r,n).forEach(s=>{Bn(e,s,l=>{if(typeof l!="object")s.icons.forEach(a=>{i.missing.add(a)});else try{const a=hi(i,l);if(!a.length)return;const c=i.pendingIcons;c&&a.forEach(h=>{c.delete(h)}),hs(i,l)}catch(a){console.error(a)}us(i)})})}))}const bi=(i,t)=>{const e=es(i,!0,Mn()),r=Xo(e);if(!r.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(r.loaded,r.missing,r.pending,Yi)}),()=>{a=!1}}const n=Object.create(null),o=[];let s,l;return r.pending.forEach(a=>{const{provider:c,prefix:h}=a;if(h===l&&c===s)return;s=c,l=h,o.push(it(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),r.pending.forEach(a=>{const{provider:c,prefix:h,name:d}=a,p=it(c,h),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(d)||(b.add(d),n[c][h].push(d))}),o.forEach(a=>{const{provider:c,prefix:h}=a;n[c][h].length&&ds(a,n[c][h])}),t?ts(t,r,o):Yi},ps=i=>new Promise((t,e)=>{const r=typeof i=="string"?ie(i,!0):i;if(!r){e(i);return}bi([r||i],n=>{if(n.length&&r){const o=Qt(r);if(o){t({...ee,...o});return}}e(i)})});function bs(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function ms(i,t){const e=typeof i=="string"?ie(i,!0,!0):null;if(!e){const o=bs(i);return{value:i,data:o}}const r=Qt(e);if(r!==void 0||!e.prefix)return{value:i,name:e,data:r};const n=bi([e],()=>t(i,e,Qt(e)));return{value:i,name:e,loading:n}}function De(i){return i.hasAttribute("inline")}let Wn=!1;try{Wn=navigator.vendor.indexOf("Apple")===0}catch{}function fs(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Wn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const gs=/(-?[0-9.]*[0-9]+[0-9.]*)/g,vs=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ke(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const r=i.split(gs);if(r===null||!r.length)return i;const n=[];let o=r.shift(),s=vs.test(o);for(;;){if(s){const l=parseFloat(o);isNaN(l)?n.push(o):n.push(Math.ceil(l*t*e)/e)}else n.push(o);if(o=r.shift(),o===void 0)return n.join("");s=!s}}function ys(i,t="defs"){let e="";const r=i.indexOf("<"+t);for(;r>=0;){const n=i.indexOf(">",r),o=i.indexOf("</"+t);if(n===-1||o===-1)break;const s=i.indexOf(">",o);if(s===-1)break;e+=i.slice(n+1,o).trim(),i=i.slice(0,r).trim()+i.slice(s+1)}return{defs:e,content:i}}function _s(i,t){return i?"<defs>"+i+"</defs>"+t:t}function xs(i,t,e){const r=ys(i);return _s(r.defs,t+r.content+e)}const ws=i=>i==="unset"||i==="undefined"||i==="none";function Yn(i,t){const e={...ee,...i},r={...zn,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,r].forEach(v=>{const g=[],A=v.hFlip,C=v.vFlip;let _=v.rotate;A?C?_+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):C&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let $;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:$=n.height/2+n.top,g.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:$=n.width/2+n.left,g.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}_%2===1&&(n.left!==n.top&&($=n.left,n.left=n.top,n.top=$),n.width!==n.height&&($=n.width,n.width=n.height,n.height=$)),g.length&&(o=xs(o,'<g transform="'+g.join(" ")+'">',"</g>"))});const s=r.width,l=r.height,a=n.width,c=n.height;let h,d;s===null?(d=l===null?"1em":l==="auto"?c:l,h=Ke(d,a/c)):(h=s==="auto"?a:s,d=l===null?Ke(h,c/a):l==="auto"?c:l);const p={},b=(v,g)=>{ws(g)||(p[v]=g.toString())};b("width",h),b("height",d);const f=[n.left,n.top,a,c];return p.viewBox=f.join(" "),{attributes:p,viewBox:f,body:o}}function mi(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)e+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function $s(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Es(i){return"data:image/svg+xml,"+$s(i)}function Qn(i){return'url("'+Es(i)+'")'}const Cs=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let $e=Cs();function As(i){$e=i}function ks(){return $e}function Ss(i,t){const e=Te(i);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let n=0;e.resources.forEach(s=>{n=Math.max(n,s.length)});const o=t+".json?icons=";r=e.maxURL-n-e.path.length-o.length}return r}function Os(i){return i===404}const Ts=(i,t,e)=>{const r=[],n=Ss(i,t),o="icons";let s={type:o,provider:i,prefix:t,icons:[]},l=0;return e.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(r.push(s),s={type:o,provider:i,prefix:t,icons:[]},l=a.length),s.icons.push(a)}),r.push(s),r};function zs(i){if(typeof i=="string"){const t=Te(i);if(t)return t.path}return"/"}const Ps=(i,t,e)=>{if(!$e){e("abort",424);return}let r=zs(t.provider);switch(t.type){case"icons":{const o=t.prefix,s=t.icons.join(","),l=new URLSearchParams({icons:s});r+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let n=503;$e(i+r).then(o=>{const s=o.status;if(s!==200){setTimeout(()=>{e(Os(s)?"abort":"next",s)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",n)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",n)})},js={prepare:Ts,send:Ps};function Qi(i,t){switch(i){case"local":case"session":ut[i]=t;break;case"all":for(const e in ut)ut[e]=t;break}}const Ue="data-style";let Gn="";function Ls(i){Gn=i}function Gi(i,t){let e=Array.from(i.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(Ue));e||(e=document.createElement("style"),e.setAttribute(Ue,Ue),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Gn}function Jn(){Fi("",js),Mn(!0);let i;try{i=window}catch{}if(i){if(qn(),i.IconifyPreload!==void 0){const t=i.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Bi(r))&&console.error(e)}catch{console.error(e)}})}if(i.IconifyProviders!==void 0){const t=i.IconifyProviders;if(typeof t=="object"&&t!==null)for(const e in t){const r="IconifyProviders["+e+"] is invalid.";try{const n=t[e];if(typeof n!="object"||!n||n.resources===void 0)continue;Di(e,n)||console.error(r)}catch{console.error(r)}}}}return{enableCache:t=>Qi(t,!0),disableCache:t=>Qi(t,!1),iconLoaded:Ii,iconExists:Ii,getIcon:Jo,listIcons:Go,addIcon:Rn,addCollection:Bi,calculateSize:Ke,buildIcon:Yn,iconToHTML:mi,svgToURL:Qn,loadIcons:bi,loadIcon:ps,addAPIProvider:Di,appendCustomStyle:Ls,_api:{getAPIConfig:Te,setAPIModule:Fi,sendAPIQuery:Bn,setFetch:As,getFetch:ks,listAPIProviders:rs}}}const ti={"background-color":"currentColor"},Xn={"background-color":"transparent"},Ji={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Xi={"-webkit-mask":ti,mask:ti,background:Xn};for(const i in Xi){const t=Xi[i];for(const e in Ji)t[i+"-"+e]=Ji[e]}function Zi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Ms(i,t,e){const r=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const o=i.attributes,s=mi(n,{...o,width:t.width+"",height:t.height+""}),l=Qn(s),a=r.style,c={"--svg":l,width:Zi(o.width),height:Zi(o.height),...e?ti:Xn};for(const h in c)a.setProperty(h,c[h]);return r}let Dt;function Rs(){try{Dt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Dt=null}}function Hs(i){return Dt===void 0&&Rs(),Dt?Dt.createHTML(i):i}function Ns(i){const t=document.createElement("span"),e=i.attributes;let r="";e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r);const n=mi(i.body,e);return t.innerHTML=Hs(n),t.firstChild}function ei(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Ki(i,t){const e=t.icon.data,r=t.customisations,n=Yn(e,r);r.preserveAspectRatio&&(n.attributes.preserveAspectRatio=r.preserveAspectRatio);const o=t.renderedMode;let s;switch(o){case"svg":s=Ns(n);break;default:s=Ms(n,{...ee,...e},o==="mask")}const l=ei(i);l?s.tagName==="SPAN"&&l.tagName===s.tagName?l.setAttribute("style",s.getAttribute("style")):i.replaceChild(s,l):i.appendChild(s)}function tn(i,t,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:r}}function Bs(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const r=t.get(i);if(r)return r;const n=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends e{constructor(){super(),at(this,"_shadowRoot"),at(this,"_initialised",!1),at(this,"_state"),at(this,"_checkQueued",!1),at(this,"_connected",!1),at(this,"_observer",null),at(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),a=De(this);Gi(l,a),this._state=tn({value:""},a),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const a=De(this),c=this._state;a!==c.inline&&(c.inline=a,Gi(this._shadowRoot,a));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return De(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const a=this._shadowRoot;if(l.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}Ki(a,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,a=this.getAttribute("icon");if(a!==l.icon.value){this._iconChanged(a);return}if(!l.rendered||!this._visible)return;const c=this.getAttribute("mode"),h=Hi(this);(l.attrMode!==c||Do(l.customisations,h)||!ei(this._shadowRoot))&&this._renderIcon(l.icon,h,c)}_iconChanged(l){const a=ms(l,(c,h,d)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==c)return;const b={value:c,name:h,data:d};b.data?this._gotIconData(b):p.icon=b});a.data?this._gotIconData(a):this._state=tn(a,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=ei(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Hi(this),this.getAttribute("mode"))}_renderIcon(l,a,c){const h=fs(l.data.body,c),d=this._state.inline;Ki(this._shadowRoot,this._state={rendered:!0,icon:l,inline:d,customisations:a,attrMode:c,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const a=l.some(c=>c.isIntersecting);a!==this._visible&&(this._visible=a,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(l=>{l in o.prototype||Object.defineProperty(o.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const s=Jn();for(const l in s)o[l]=o.prototype[l]=s[l];return t.define(i,o),o}Bs()||Jn();var Is=Object.defineProperty,D=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&Is(t,e,n),n},de;const N=(de=class extends w{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._parent=Z(),this._tooltip=Z(),this._contextMenu=Z(),this._mouseLeave=!1,this.onWindowMouseUp=i=>{const{value:t}=this._contextMenu;!this.contains(i.target)&&t&&(t.visible=!1)},this.mouseLeave=!0,this.addEventListener("click",i=>i.stopPropagation())}set mouseLeave(i){this._mouseLeave=i,i&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:i}=this._parent,{value:t}=this._tooltip;i&&t&&wn(i,t,{placement:"bottom",middleware:[cn(10),xn(),_n(),yn({padding:5})]}).then(e=>{const{x:r,y:n}=e;Object.assign(t.style,{left:`${r}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const i=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},i)}onChildrenClick(i){i.stopPropagation();const{value:t}=this._contextMenu;t&&(t.visible=!t.visible)}onSlotChange(i){const{value:t}=this._contextMenu,e=i.target.assignedElements();for(const r of e){if(!(r instanceof de)){r.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}r.addEventListener("click",()=>t==null?void 0:t.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const i=m`
      <div ${K(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?m`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?m`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=this.children.length>0;return m`
      <style>
        .button {
          border-radius: var(
            --bim-button--bdrs,
            ${t?"var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs)":"var(--bim-ui_size-4xs)"}
          );
        }
        .children {
          border-radius: var(
            --bim-button--bdrs,
            ${t?"0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0":"var(--bim-ui_size-4xs)"}
          );
        }
      </style>
      <div ${K(this._parent)} class="parent">
        ${this.label||this.icon?m`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?i:null}
        ${t?m`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon .icon=${"ic:round-plus"}></bim-icon>
              </div>
            `:null}
        <bim-context-menu
          ${K(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `}},de.styles=E`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      flex: 1;
      pointer-events: none;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-icon--c: var(--bim-label--c);
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      column-gap: 0.125rem;
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      outline: var(--bim-button--olw) solid var(--bim-button--olc);
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover) .button,
    :host(:hover) .children {
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
      fill: white;
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([active]) .button {
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) .parent {
      background-color: gray;
    }

    .children {
      --bim-icon--fz: var(--bim-ui_size-base);
      padding: 0 0.125rem;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bgc: var(
        --bim-context-menu--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `,de);D([u({type:String,reflect:!0})],N.prototype,"label");D([u({type:Boolean,attribute:"label-hidden",reflect:!0})],N.prototype,"labelHidden");D([u({type:Boolean,reflect:!0})],N.prototype,"active");D([u({type:Boolean,reflect:!0,attribute:"disabled"})],N.prototype,"disabled");D([u({type:String,reflect:!0})],N.prototype,"icon");D([u({type:Boolean,reflect:!0})],N.prototype,"vertical");D([u({type:Number,attribute:"tooltip-time",reflect:!0})],N.prototype,"tooltipTime");D([u({type:Boolean,attribute:"tooltip-visible",reflect:!0})],N.prototype,"tooltipVisible");D([u({type:String,attribute:"tooltip-title",reflect:!0})],N.prototype,"tooltipTitle");D([u({type:String,attribute:"tooltip-text",reflect:!0})],N.prototype,"tooltipText");let Fs=N;var Ds=Object.defineProperty,ne=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&Ds(t,e,n),n};const Zn=class extends w{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};Zn.styles=E`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let St=Zn;ne([u({type:String,reflect:!0})],St.prototype,"icon");ne([u({type:String,reflect:!0})],St.prototype,"name");ne([u({type:String,reflect:!0})],St.prototype,"label");ne([u({type:Boolean,reflect:!0})],St.prototype,"checked");ne([u({type:Boolean,reflect:!0})],St.prototype,"inverted");var Us=Object.defineProperty,Ot=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&Us(t,e,n),n};const Kn=class extends w{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Z(),this._textInput=Z(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:r}=t;this.color=e,r&&(this.opacity=r)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:r}=e;let n=r.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return m`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${K(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${K(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?m`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};Kn.styles=E`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let pt=Kn;Ot([u({type:String,reflect:!0})],pt.prototype,"name");Ot([u({type:String,reflect:!0})],pt.prototype,"label");Ot([u({type:String,reflect:!0})],pt.prototype,"icon");Ot([u({type:Boolean,reflect:!0})],pt.prototype,"vertical");Ot([u({type:Number,reflect:!0})],pt.prototype,"opacity");Ot([u({type:String,reflect:!0})],pt.prototype,"color");const Vs=E`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,qs=E`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }
`,bt={scrollbar:Vs,globalStyles:qs};var Ws=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Qs=(i,t,e,r)=>{for(var n=Ys(t,e),o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&Ws(t,e,n),n};const tr=class extends w{constructor(){super(...arguments),this._visible=!1,this._middleware={name:"middleware",async fn(t){const{right:e,top:r}=await ri(t);return t.x-=Math.sign(e)===1?e+5:0,t.y-=Math.sign(r)===1?r+5:0,t}}}get visible(){return this._visible}set visible(t){this._visible=t,t&&this.updatePosition()}async updatePosition(t){const e=t||this.parentNode;if(!e){this.visible=!1,console.warn("No target element found for context-menu.");return}const r=await wn(e,this,{placement:"right",middleware:[cn(10),xn(),_n(),yn({padding:5}),this._middleware]}),{x:n,y:o}=r;this.style.left=`${n}px`,this.style.top=`${o}px`}render(){return m` <slot></slot> `}};tr.styles=[bt.scrollbar,E`
      :host {
        --bim-label--fz: var(--bim-ui_size-xs);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host([visible]) {
        display: flex;
      }

      :host(:not([visible])) {
        display: none;
      }
    `];let er=tr;Qs([u({type:Boolean,reflect:!0})],er.prototype,"visible");class Gs extends w{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const r of t)this.elements.add(r);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const r of e)r.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const r=e[0];if(!r.isIntersecting)return;const n=r.target;t.unobserve(n);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,s=[...this.elements][o];s&&(this.visibleElements=[...this.visibleElements,s],t.observe(s))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,r=[...this.elements][e];r&&t.observe(r)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const r=document.createDocumentFragment();if(t.length===0)return kt(t(),r),r.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const o=t,s=l=>(n={...n,...l},kt(o(n),r),n);return s(e),[r.firstElementChild,s]}}const Ee=(i,t=!0)=>{let e={};for(const r of i.children){const n=r,o=n.getAttribute("name")||n.getAttribute("label");if(o){if("value"in n){const s=n.value;if(typeof s=="object"&&!Array.isArray(s)&&Object.keys(s).length===0)continue;e[o]=n.value}else if(t){const s=Ee(n);if(Object.keys(s).length===0)continue;e[o]=s}}else t&&(e={...e,...Ee(n)})}return e},ze=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Js=[">=","<=","=",">","<","?","/","#"];function en(i){const t=Js.find(s=>i.split(s).length===2),e=i.split(t).map(s=>s.trim()),[r,n]=e,o=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):ze(n);return{key:r,condition:t,value:o}}const ii=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(r=>r.trim());for(const r of e){const n=!r.startsWith("(")&&!r.endsWith(")"),o=r.startsWith("(")&&r.endsWith(")");if(n){const s=en(r);t.push(s)}if(o){const s={operator:"&",queries:r.replace(/^(\()|(\))$/g,"").split("&").map(l=>l.trim()).map((l,a)=>{const c=en(l);return a>0&&(c.operator="&"),c})};t.push(s)}}return t}catch{return null}},nn=(i,t,e)=>{let r=!1;switch(t){case"=":r=i===e;break;case"?":r=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(r=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(r=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(r=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(r=i>=e);break;case"/":r=String(i).startsWith(String(e));break}return r};var Xs=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,rt=(i,t,e,r)=>{for(var n=r>1?void 0:r?Zs(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&Xs(t,e,n),n};const ir=class extends w{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?ze(this.label):this.label}set value(t){this._value=t}render(){return m`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?m` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?m`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?m`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};ir.styles=E`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_main-base) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
    }
  `;let T=ir;rt([u({type:String,reflect:!0})],T.prototype,"img",2);rt([u({type:String,reflect:!0})],T.prototype,"label",2);rt([u({type:String,reflect:!0})],T.prototype,"icon",2);rt([u({type:Boolean,reflect:!0})],T.prototype,"checked",2);rt([u({type:Boolean,reflect:!0})],T.prototype,"checkbox",2);rt([u({type:Boolean,attribute:"no-mark",reflect:!0})],T.prototype,"noMark",2);rt([u({converter:{fromAttribute(i){return i&&ze(i)}}})],T.prototype,"value",1);rt([u({type:Boolean,reflect:!0})],T.prototype,"vertical",2);var Ks=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,ot=(i,t,e,r)=>{for(var n=r>1?void 0:r?tl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&Ks(t,e,n),n};const nr=class extends Gs{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._inputContainer=Z(),this._listElement=Z(),this._visible=!1,this._value=[],this.onValueChange=new Event("change"),this.onWindowMouseUp=t=>{this.visible&&(this.contains(t.target)||(this.visible=!1))},this.onOptionClick=t=>{const e=t.target,r=this._value.includes(e);if(!this.multiple&&!this.required&&!r)this._value=[e];else if(!this.multiple&&!this.required&&r)this._value=[];else if(!this.multiple&&this.required&&!r)this._value=[e];else if(this.multiple&&!this.required&&!r)this._value=[...this._value,e];else if(this.multiple&&!this.required&&r)this._value=this._value.filter(n=>n!==e);else if(this.multiple&&this.required&&!r)this._value=[...this._value,e];else if(this.multiple&&this.required&&r){const n=this._value.filter(o=>o!==e);n.length!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){this._visible=t,t||this.resetVisibleElements()}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=[];for(const r of t){const n=this.findOption(r);if(n&&(e.push(n),!this.multiple&&Object.keys(t).length>1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return this._value.filter(t=>t instanceof T&&t.checked).map(t=>t.value)}get _options(){const t=[...this.elements];for(const e of this.children)e instanceof T&&t.push(e);return t}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);for(const r of e){if(!(r instanceof T)){r.remove();continue}r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof T&&(this._value.includes(t)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(e=>e instanceof T?e.label===t||e.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}firstUpdated(){for(const t of this.children)t instanceof T&&t.checked&&this._value.push(t)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,e,r;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const n=this._value[0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,r=n==null?void 0:n.icon}else t=`Multiple (${this._value.length})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${K(this._inputContainer)}
          class="input"
          @click=${()=>this.visible=!this.visible}
        >
          <bim-label
            .img=${e}
            .icon=${r}
            style="overflow: hidden;"
            >${t}</bim-label
          >
          <svg
            style="flex-shrink: 0"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
        <bim-context-menu ${K(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(n=>n)}
        </bim-context-menu>
      </bim-input>
    `}};nr.styles=[bt.scrollbar,E`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: var(--bim-dropdown--olw, 2px);
        --bim-input--olc: var(--bim-dropdown--olc, transparent);
        --bim-input--bdrs: var(--bim-dropdown--bdrs, var(--bim-ui_size-4xs));
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(
          --bim-dropdown¡focus--c,
          var(--bim-ui_accent-base)
        );
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let Q=nr;ot([u({type:String,reflect:!0})],Q.prototype,"name",2);ot([u({type:String,reflect:!0})],Q.prototype,"icon",2);ot([u({type:String,reflect:!0})],Q.prototype,"label",2);ot([u({type:Boolean,reflect:!0})],Q.prototype,"multiple",2);ot([u({type:Boolean,reflect:!0})],Q.prototype,"required",2);ot([u({type:Boolean,reflect:!0})],Q.prototype,"vertical",2);ot([u({type:Boolean,reflect:!0})],Q.prototype,"visible",1);ot([te()],Q.prototype,"_value",2);var el=Object.defineProperty,rr=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&el(t,e,n),n};const or=class extends w{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const e=t.split(`
`).map(r=>r.trim()).map(r=>r.split('"')[1]).filter(r=>r!==void 0).flatMap(r=>r.split(/\s+/));return[...new Set(e)].filter(r=>r!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],e=this.getUniqueAreasFromTemplate(t.template).map(r=>{const n=t.elements[r];return n&&(n.style.gridArea=r),n}).filter(r=>!!r);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...e)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};or.styles=E`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let fi=or;rr([u({type:Boolean,reflect:!0})],fi.prototype,"floating");rr([u({type:String,reflect:!0})],fi.prototype,"layout");const ni=class extends w{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};ni.styles=E`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `,ni.properties={icon:{type:String}};let il=ni;var nl=Object.defineProperty,Pe=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&nl(t,e,n),n};const sr=class extends w{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const r=e;"value"in r?t[r.name||r.label]=r.value:"checked"in r&&(t[r.name||r.label]=r.checked)}return t}set value(t){const e=[...this.children];for(const r in t){const n=e.find(l=>{const a=l;return a.name===r||a.label===r});if(!n)continue;const o=n,s=t[r];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};sr.styles=E`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let re=sr;Pe([u({type:String,reflect:!0})],re.prototype,"name");Pe([u({type:String,reflect:!0})],re.prototype,"label");Pe([u({type:String,reflect:!0})],re.prototype,"icon");Pe([u({type:Boolean,reflect:!0})],re.prototype,"vertical");var rl=Object.defineProperty,oe=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&rl(t,e,n),n};const lr=class extends w{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?ze(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};lr.styles=E`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1rem;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.5)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let Tt=lr;oe([u({type:String,reflect:!0})],Tt.prototype,"img");oe([u({type:Boolean,attribute:"label-hidden",reflect:!0})],Tt.prototype,"labelHidden");oe([u({type:String,reflect:!0})],Tt.prototype,"icon");oe([u({type:Boolean,attribute:"icon-hidden",reflect:!0})],Tt.prototype,"iconHidden");oe([u({type:Boolean,reflect:!0})],Tt.prototype,"vertical");var ol=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,H=(i,t,e,r)=>{for(var n=r>1?void 0:r?sl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&ol(t,e,n),n};const ar=class extends w{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Z(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let r=t;if(r=r.replace(/[^0-9.-]/g,""),r=r.replace(/(\..*)\./g,"$1"),r.endsWith(".")||(r.lastIndexOf("-")>0&&(r=r[0]+r.substring(1).replace(/-/g,"")),r==="-"||r==="-0"))return;let n=Number(r);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,r=this.value;let n=!1;const o=a=>{var c;n=!0;const{clientX:h}=a,d=this.step??1,p=((c=d.toString().split(".")[1])==null?void 0:c.length)||0,b=1/(this.sensitivity??1),f=(h-e)/b;if(Math.floor(Math.abs(f))!==Math.abs(f))return;const v=r+f*d;this.setValue(v.toFixed(p))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},l=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l)}onFocus(t){t.stopPropagation();const e=r=>{r.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${K(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${l=>l.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,r=this.max??1/0,n=100*(this.value-e)/(r-e),o=m`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?m`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?m`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,s=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return m`
      <bim-input
        title=${s}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:t}
      </bim-input>
    `}};ar.styles=E`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let L=ar;H([u({type:String,reflect:!0})],L.prototype,"name",2);H([u({type:String,reflect:!0})],L.prototype,"icon",2);H([u({type:String,reflect:!0})],L.prototype,"label",2);H([u({type:String,reflect:!0})],L.prototype,"pref",2);H([u({type:Number,reflect:!0})],L.prototype,"min",2);H([u({type:Number,reflect:!0})],L.prototype,"value",1);H([u({type:Number,reflect:!0})],L.prototype,"step",2);H([u({type:Number,reflect:!0})],L.prototype,"sensitivity",2);H([u({type:Number,reflect:!0})],L.prototype,"max",2);H([u({type:String,reflect:!0})],L.prototype,"suffix",2);H([u({type:Boolean,reflect:!0})],L.prototype,"vertical",2);H([u({type:Boolean,reflect:!0})],L.prototype,"slider",2);var ll=Object.defineProperty,al=Object.getOwnPropertyDescriptor,se=(i,t,e,r)=>{for(var n=r>1?void 0:r?al(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&ll(t,e,n),n};const cr=class extends w{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Ee(this)}set value(t){const e=[...this.children];for(const r in t){const n=e.find(s=>{const l=s;return l.name===r||l.label===r});if(!n)continue;const o=n;o.value=t[r]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};cr.styles=[bt.scrollbar,E`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let zt=cr;se([u({type:String,reflect:!0})],zt.prototype,"icon",2);se([u({type:String,reflect:!0})],zt.prototype,"name",2);se([u({type:String,reflect:!0})],zt.prototype,"label",2);se([u({type:Boolean,reflect:!0})],zt.prototype,"hidden",1);se([u({type:Boolean,attribute:"header-hidden",reflect:!0})],zt.prototype,"headerHidden",2);var cl=Object.defineProperty,le=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&cl(t,e,n),n};const hr=class extends w{constructor(){super(...arguments),this.onValueChange=new Event("change")}get value(){return Ee(this)}set value(t){const e=[...this.children];for(const r in t){const n=e.find(s=>{const l=s;return l.name===r||l.label===r});if(!n)continue;const o=n;o.value=t[r]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,r=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?e:r,o=m`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return m`
      <div class="parent">
        ${t?o:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};hr.styles=[bt.scrollbar,E`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
      }

      bim-label {
        pointer-events: none;
      }
    `];let Pt=hr;le([u({type:String,reflect:!0})],Pt.prototype,"icon");le([u({type:String,reflect:!0})],Pt.prototype,"label");le([u({type:String,reflect:!0})],Pt.prototype,"name");le([u({type:Boolean,reflect:!0})],Pt.prototype,"fixed");le([u({type:Boolean,reflect:!0})],Pt.prototype,"collapsed");var hl=Object.defineProperty,ae=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&hl(t,e,n),n};const ur=class extends w{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof T&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const r of this._options)r.checked=r===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const r of e)r instanceof T&&(r.noMark=!0,r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(e=>e instanceof T?e.label===t||e.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof T&&e.checked);t&&(this._value=t)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};ur.styles=E`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }
  `;let jt=ur;ae([u({type:String,reflect:!0})],jt.prototype,"name");ae([u({type:String,reflect:!0})],jt.prototype,"icon");ae([u({type:String,reflect:!0})],jt.prototype,"label");ae([u({type:Boolean,reflect:!0})],jt.prototype,"vertical");ae([te()],jt.prototype,"_value");var ul=Object.defineProperty,dl=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&ul(t,e,n),n};const dr=class extends w{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};dr.styles=E`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]:not([data-cell-header])) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let pr=dr;dl([u({type:String,reflect:!0})],pr.prototype,"column");var pl=Object.defineProperty,bl=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&pl(t,e,n),n};const br=class extends w{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const r of this._groups)r.childrenHidden=typeof t>"u"?!r.childrenHidden:!t,e&&r.toggleChildren(t,e)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};br.styles=E`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let mr=br;bl([u({type:Array,attribute:!1})],mr.prototype,"data");var ml=Object.defineProperty,fl=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&ml(t,e,n),n};const fr=class extends w{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){var t,e;const r=((t=this.table)==null?void 0:t.getGroupIndentation(this.data))??0,n=m`
      <style>
        .branch-vertical {
          left: ${r+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `,o=document.createDocumentFragment();kt(n,o);const s=document.createElement("div");s.classList.add("branch","branch-horizontal"),s.style.left=`${r-1+.5625}rem`;const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(a);const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("height","6.5"),c.setAttribute("width","9.5"),c.setAttribute("viewBox","0 0 5.9111118 5.0175439");const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),c.append(h);const d=document.createElement("div");d.addEventListener("click",f=>{f.stopPropagation(),this.toggleChildren()}),d.classList.add("caret"),d.style.left=`${.125+r}rem`,this.childrenHidden?d.append(l):d.append(c);const p=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&p.append(o),p.table=this.table,p.data=this.data.data,(e=this.table)==null||e.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:p}})),this.data.children&&p.append(d),r!==0&&(!this.data.children||this.childrenHidden)&&p.append(s);let b;if(this.data.children){b=document.createElement("bim-table-children"),this._children=b,b.table=this.table,b.data=this.data.children;const f=document.createDocumentFragment();kt(n,f),b.append(f)}return m`
      <div class="parent">${p} ${this.childrenHidden?null:b}</div>
    `}};fr.styles=E`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let gr=fr;fl([u({type:Boolean,attribute:"children-hidden",reflect:!0})],gr.prototype,"childrenHidden");var gl=Object.defineProperty,ce=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&gl(t,e,n),n};const vr=class extends w{constructor(){super(...arguments),this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.name)}get _columnWidths(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.width)}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden))}compute(){var t,e,r;const n=((t=this.table)==null?void 0:t.getRowIndentation(this.data))??0,o=this.isHeader?this.data:((e=this.table)==null?void 0:e.computeRowDeclaration(this.data))??this.data,s=[];for(const l in o){if(this.hiddenColumns.includes(l))continue;const a=o[l];let c;if(typeof a=="string"||typeof a=="boolean"||typeof a=="number"?(c=document.createElement("bim-label"),c.textContent=String(a)):a instanceof HTMLElement?c=a:(c=document.createDocumentFragment(),kt(a,c)),!c)continue;const h=document.createElement("bim-table-cell");h.append(c),h.column=l,this._columnNames.indexOf(l)===0&&!this.isHeader&&(h.style.marginLeft=`${n+.125}rem`);const d=this._columnNames.indexOf(l);h.setAttribute("data-column-index",String(d)),h.toggleAttribute("data-cell-header",this.isHeader),h.rowData=this.data,(r=this.table)==null||r.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:h}})),s.push(h)}return this.style.gridTemplateAreas=`"${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this._columnWidths.join(" ")}`,m`
      ${s}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};vr.styles=E`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }
  `;let Lt=vr;ce([u({attribute:!1})],Lt.prototype,"columns");ce([u({attribute:!1})],Lt.prototype,"hiddenColumns");ce([u({attribute:!1})],Lt.prototype,"data");ce([u({type:Boolean,attribute:"is-header",reflect:!0})],Lt.prototype,"isHeader");ce([te()],Lt.prototype,"_intersecting");var vl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,Mt=(i,t,e,r)=>{for(var n=r>1?void 0:r?yl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&vl(t,e,n),n};const yr=class extends w{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(r=>String(r).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let r=!1;const n=ii(t)??[];for(const o of n){if("queries"in o){r=!1;break}const{condition:s,value:l}=o;let{key:a}=o;if(a.startsWith("[")&&a.endsWith("]")){const c=a.replace("[","").replace("]","");a=c,r=Object.keys(e.data).filter(h=>h.includes(c)).map(h=>nn(e.data[h],s,l)).some(h=>h)}else r=nn(e.data[a],s,l);if(!r)break}return r}}set columns(t){const e=[];for(const r of t){const n=typeof r=="string"?{name:r,width:`minmax(${this.minColWidth}, 1fr)`}:r;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:r}=e;t[r]=r}return t}get value(){return this._filteredData}set queryString(t){this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData()}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(ii(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const r of t){const{children:n,data:o}=r;for(const s in o)this._columns.map(l=>typeof l=="string"?l:l.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const s=this.computeMissingColumns(n);s&&!e&&(e=s)}}return e}generateText(t="comma",e=this.value,r="",n=!0){const o=this._textDelimiters[t];let s="";const l=this.columns.map(a=>a.name);if(n){this.indentationInText&&(s+=`Indentation${o}`);const a=`${l.join(o)}
`;s+=a}for(const[a,c]of e.entries()){const{data:h,children:d}=c,p=this.indentationInText?`${r}${a+1}${o}`:"",b=l.map(v=>h[v]??""),f=`${p}${b.join(o)}
`;s+=f,d&&(s+=this.generateText(t,c.children,`${r}${a+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}computeRowDeclaration(t){const e={};for(const r in t){const n=this.dataTransform[r];n?e[r]=n(t[r],t):e[r]=t[r]}return e}downloadData(t="BIM Table Data",e="json"){let r=null;if(e==="json"&&(r=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(r=new File([this.csv],`${t}.csv`)),e==="tsv"&&(r=new File([this.tsv],`${t}.tsv`)),!r)return;const n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=r.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,r=0){for(const n of e){if(n.data===t)return r;if(n.children){const o=this.getRowIndentation(t,n.children,r+1);if(o!==null)return o}}return null}getGroupIndentation(t,e=this.value,r=0){for(const n of e){if(n===t)return r;if(n.children){const o=this.getGroupIndentation(t,n.children,r+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}filter(t,e=this.filterFunction??this._stringFilterFunction,r=this.data){const n=[];for(const o of r)if(e(t,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const l=this.filter(t,e,o.children);l.length&&(s.children=l)}n.push(s)}else if(n.push({data:o.data}),o.children){const s=this.filter(t,e,o.children);n.push(...s)}}else if(o.children){const s=this.filter(t,e,o.children);this.preserveStructureOnFilter&&s.length?n.push({data:o.data,children:s}):n.push(...s)}return n}render(){const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:t}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};yr.styles=[bt.scrollbar,E`
      :host {
        --bim-button--bgc: transparent;
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let mt=yr;Mt([te()],mt.prototype,"_filteredData",2);Mt([u({type:Boolean,attribute:"headers-hidden",reflect:!0})],mt.prototype,"headersHidden",2);Mt([u({type:String,attribute:"min-col-width",reflect:!0})],mt.prototype,"minColWidth",2);Mt([u({type:Array,attribute:!1})],mt.prototype,"columns",1);Mt([u({type:Array,attribute:!1})],mt.prototype,"data",1);Mt([u({type:Boolean,reflect:!0})],mt.prototype,"expanded",2);var _l=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,je=(i,t,e,r)=>{for(var n=r>1?void 0:r?xl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&_l(t,e,n),n};const _r=class extends w{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return m` <slot></slot> `}};_r.styles=E`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let M=_r;je([u({type:String,reflect:!0})],M.prototype,"name",2);je([u({type:String,reflect:!0})],M.prototype,"label",2);je([u({type:String,reflect:!0})],M.prototype,"icon",2);je([u({type:Boolean,reflect:!0})],M.prototype,"hidden",1);var wl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,Rt=(i,t,e,r)=>{for(var n=r>1?void 0:r?$l(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&wl(t,e,n),n};const xr=class extends w{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof M&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],r=e.find(n=>n instanceof M&&n.name===t);for(const n of e){if(!(n instanceof M))continue;n.hidden=r!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(e=>e.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof M))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const r=document.createElement("bim-label");r.textContent=t.label??"",r.icon=t.icon,e.append(r),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),r=e.find(n=>n instanceof M?this.tab?n.name===this.tab:!n.hidden:!1);r&&r instanceof M&&(this.tab=r.name);for(const n of e){if(!(n instanceof M)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),r!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};xr.styles=[bt.scrollbar,E`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let ft=xr;Rt([te()],ft.prototype,"_switchers",2);Rt([u({type:Boolean,reflect:!0})],ft.prototype,"bottom",2);Rt([u({type:Boolean,attribute:"switchers-hidden",reflect:!0})],ft.prototype,"switchersHidden",2);Rt([u({type:Boolean,reflect:!0})],ft.prototype,"floating",2);Rt([u({type:String,reflect:!0})],ft.prototype,"tab",1);Rt([u({type:Boolean,attribute:"switchers-full",reflect:!0})],ft.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=i=>i??S;var Cl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,st=(i,t,e,r)=>{for(var n=r>1?void 0:r?Al(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&Cl(t,e,n),n};const wr=class extends w{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return ii(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("input");e==null||e.focus()})}render(){return m`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          aria-label=${this.label||this.name||"Text Input"}
          .type=${this.type}
          .value=${this.value}
          placeholder=${El(this.placeholder)}
          @input=${this.onInputChange}
        />
      </bim-input>
    `}};wr.styles=E`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      padding: 0 var(--bim-ui_size-3xs);
      border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host(:focus) {
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
  `;let G=wr;st([u({type:String,reflect:!0})],G.prototype,"icon",2);st([u({type:String,reflect:!0})],G.prototype,"label",2);st([u({type:String,reflect:!0})],G.prototype,"name",2);st([u({type:String,reflect:!0})],G.prototype,"placeholder",2);st([u({type:String,reflect:!0})],G.prototype,"value",2);st([u({type:Boolean,reflect:!0})],G.prototype,"vertical",2);st([u({type:Number,reflect:!0})],G.prototype,"debounce",2);st([u({type:String,reflect:!0})],G.prototype,"type",1);var kl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,$r=(i,t,e,r)=>{for(var n=r>1?void 0:r?Sl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&kl(t,e,n),n};const Er=class extends w{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Er.styles=E`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let Le=Er;$r([u({type:Number,reflect:!0})],Le.prototype,"rows",2);$r([u({type:Boolean,reflect:!0})],Le.prototype,"vertical",1);var Ol=Object.defineProperty,Tl=Object.getOwnPropertyDescriptor,Me=(i,t,e,r)=>{for(var n=r>1?void 0:r?Tl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&Ol(t,e,n),n};const Cr=class extends w{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Le&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Cr.styles=E`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let Ht=Cr;Me([u({type:String,reflect:!0})],Ht.prototype,"label",2);Me([u({type:String,reflect:!0})],Ht.prototype,"icon",2);Me([u({type:Boolean,reflect:!0})],Ht.prototype,"vertical",1);Me([u({type:Boolean,attribute:"label-hidden",reflect:!0})],Ht.prototype,"labelHidden",1);const Ar=class x{static set config(t){this._config={...x._config,...t}}static get config(){return x._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=bt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){x.init()}static init(){x.addGlobalStyles(),x.defineCustomElement("bim-button",Fs),x.defineCustomElement("bim-checkbox",St),x.defineCustomElement("bim-color-input",pt),x.defineCustomElement("bim-context-menu",er),x.defineCustomElement("bim-dropdown",Q),x.defineCustomElement("bim-grid",fi),x.defineCustomElement("bim-icon",il),x.defineCustomElement("bim-input",re),x.defineCustomElement("bim-label",Tt),x.defineCustomElement("bim-number-input",L),x.defineCustomElement("bim-option",T),x.defineCustomElement("bim-panel",zt),x.defineCustomElement("bim-panel-section",Pt),x.defineCustomElement("bim-selector",jt),x.defineCustomElement("bim-table",mt),x.defineCustomElement("bim-tabs",ft),x.defineCustomElement("bim-tab",M),x.defineCustomElement("bim-table-cell",pr),x.defineCustomElement("bim-table-children",mr),x.defineCustomElement("bim-table-group",gr),x.defineCustomElement("bim-table-row",Lt),x.defineCustomElement("bim-text-input",G),x.defineCustomElement("bim-toolbar",Re),x.defineCustomElement("bim-toolbar-group",Le),x.defineCustomElement("bim-toolbar-section",Ht),x.defineCustomElement("bim-viewport",Or)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let r=0;r<10;r++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};Ar._config={sectionLabelOnVerticalToolbar:!1};let zl=Ar;var Pl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,gi=(i,t,e,r)=>{for(var n=r>1?void 0:r?jl(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&Pl(t,e,n),n};const kr=class extends w{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof Ht&&(e.labelHidden=this.vertical&&!zl.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};kr.styles=E`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let Re=kr;gi([u({type:String,reflect:!0})],Re.prototype,"icon",2);gi([u({type:Boolean,attribute:"labels-hidden",reflect:!0})],Re.prototype,"labelsHidden",2);gi([u({type:Boolean,reflect:!0})],Re.prototype,"vertical",1);var Ll=Object.defineProperty,Ml=(i,t,e,r)=>{for(var n=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=s(t,e,n)||n);return n&&Ll(t,e,n),n};const Sr=class extends w{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Sr.styles=E`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Or=Sr;Ml([u({type:String,reflect:!0})],Or.prototype,"name");export{Gs as J,m,zl as p};
