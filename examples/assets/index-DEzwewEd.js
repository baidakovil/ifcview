var z=Object.defineProperty;var _=(l,n,r)=>n in l?z(l,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[n]=r;var S=(l,n,r)=>(_(l,typeof n!="symbol"?n+"":n,r),r);import{V as x,a as C,O as R,f as A,z as q}from"./web-ifc-api-Glg4rFxW.js";import{i as T}from"./import-wrapper-prod-PYO-Oesj.js";class P extends R{constructor(n=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new A(.5,.5),this.addEventListener("removed",function(){this.traverse(function(r){r.element instanceof Element&&r.element.parentNode!==null&&r.element.parentNode.removeChild(r.element)})})}copy(n,r){return super.copy(n,r),this.element=n.element.cloneNode(!0),this.center=n.center,this}}const c=new x,D=new C,v=new C,g=new x,w=new x;class U{constructor(n={}){const r=this;let u,m,s,a;const f={objects:new WeakMap},h=n.element!==void 0?n.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h,this.getSize=function(){return{width:u,height:m}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),D.copy(t.matrixWorldInverse),v.multiplyMatrices(t.projectionMatrix,D),y(e,e,t),W(e)},this.setSize=function(e,t){u=e,m=t,s=u/2,a=m/2,h.style.width=e+"px",h.style.height=t+"px"};function y(e,t,o){if(e.isCSS2DObject){c.setFromMatrixPosition(e.matrixWorld),c.applyMatrix4(v);const i=e.visible===!0&&c.z>=-1&&c.z<=1&&e.layers.test(o.layers)===!0;if(e.element.style.display=i===!0?"":"none",i===!0){e.onBeforeRender(r,t,o);const p=e.element;p.style.transform="translate("+-100*e.center.x+"%,"+-100*e.center.y+"%)translate("+(c.x*s+s)+"px,"+(-c.y*a+a)+"px)",p.parentNode!==h&&h.appendChild(p),e.onAfterRender(r,t,o)}const d={distanceToCameraSquared:E(o,e)};f.objects.set(e,d)}for(let i=0,d=e.children.length;i<d;i++)y(e.children[i],t,o)}function E(e,t){return g.setFromMatrixPosition(e.matrixWorld),w.setFromMatrixPosition(t.matrixWorld),g.distanceToSquared(w)}function M(e){const t=[];return e.traverse(function(o){o.isCSS2DObject&&t.push(o)}),t}function W(e){const t=M(e).sort(function(i,d){if(i.renderOrder!==d.renderOrder)return d.renderOrder-i.renderOrder;const p=f.objects.get(i).distanceToCameraSquared,O=f.objects.get(d).distanceToCameraSquared;return p-O}),o=t.length;for(let i=0,d=t.length;i<d;i++)t[i].element.style.zIndex=o-i}}}class B extends T{constructor(r,u,m){super(r,u,m);S(this,"three2D",new U);this.onAfterUpdate.add(()=>{if(this.onBeforeUpdate.trigger(this),!this.enabled||!this.currentWorld)return;const s=this.currentWorld.scene.three,a=this.currentWorld.camera.three;s instanceof q&&this.three2D.render(s,a)}),this.onDisposed.add(()=>{this.three2D.domElement.remove()}),this.onResize.add(({x:s,y:a})=>{this.three2D.setSize(s,a)}),this.onContainerUpdated.add(s=>{s.appendChild(this.three2D.domElement)}),this.setupHtmlRenderer(),this.resize()}setupHtmlRenderer(){this.three2D.domElement.style.position="absolute",this.three2D.domElement.style.top="0px",this.three2D.domElement.style.pointerEvents="none",this.container&&this.container.appendChild(this.three2D.domElement)}}export{P as C,B as R};
