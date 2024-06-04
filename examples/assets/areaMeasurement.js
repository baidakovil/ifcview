var P=Object.defineProperty;var v=(a,n,e)=>n in a?P(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var i=(a,n,e)=>(v(a,typeof n!="symbol"?n+"":n,e),e);import{L as E,P as A,V as f,a as L,f as b,S as x,B as M,b as C,M as y}from"./web-ifc-api-D3oDn2HF.js";import{S as D}from"./stats.min-DDrWCSVO.js";import{E as h,C as S,a as B,W,S as V,b as G,G as I}from"./index-DPB0U-mi.js";import{n as R,M as K,P as T}from"./import-wrapper-prod-C6LuifRs.js";import{S as z}from"./index-CCtkzT1O.js";import{G as U}from"./graphic-vertex-picker-CGc9BnVI.js";class F{constructor(n,e,t){i(this,"enabled",!0);i(this,"visible",!0);i(this,"points",[]);i(this,"workingPlane",null);i(this,"labelMarker");i(this,"world");i(this,"components");i(this,"onDisposed",new h);i(this,"_rotationMatrix",null);i(this,"_dimensionLines",[]);i(this,"_defaultLineMaterial",new E({color:"red"}));i(this,"onAreaComputed",new h);i(this,"onWorkingPlaneComputed",new h);i(this,"onPointAdded",new h);i(this,"onPointRemoved",new h);this.world=e,this.components=n;const s=R();this.labelMarker=new K(e,s),this.labelMarker.visible=!1,this.onPointAdded.add(o=>{this.points.length===3&&!this._dimensionLines[2]&&(this.addDimensionLine(o,this.points[0]),this.labelMarker.visible=!0)}),t==null||t.forEach(o=>this.setPoint(o))}setPoint(n,e){let t;if(e?t=e:t=this.points.length===0?0:this.points.length,t===0){this.points[0]=n;return}if(t<0||t>this.points.length)return;const s=this.points.length>t;this.points[t]=n,this.onPointAdded.trigger(n),s||this.addDimensionLine(this.points[t-1],n);const{previousLine:o,nextLine:m}=this.getLinesBetweenIndex(t);o&&(o.endPoint=n),m&&(m.startPoint=n)}removePoint(n){if(this.points.length===3)return;this.points.splice(n,1);const{previousLine:e,nextLine:t}=this.getLinesBetweenIndex(n);t&&(e.endPoint=t.endPoint),t==null||t.dispose(),this._dimensionLines.splice(n,1),this.onPointRemoved.trigger()}toggleLabel(){this.labelMarker.toggleVisibility()}addDimensionLine(n,e){const t=document.createElement("div");t.className="w-2 h-2 bg-red-600 rounded-full";const s=new z(this.components,this.world,{start:n,end:e,lineMaterial:this._defaultLineMaterial,endpointElement:t});return s.toggleLabel(),this._dimensionLines.length>1?this._dimensionLines.splice(this._dimensionLines.length-1,0,s):this._dimensionLines.push(s),s}getLinesBetweenIndex(n){const e=n===0?this._dimensionLines.length-1:n-1,t=this._dimensionLines[e],s=this._dimensionLines[n];return{previousLine:t,nextLine:s}}computeWorkingPlane(){this.workingPlane=new A().setFromCoplanarPoints(this.points[0],this.points[1],this.points[2]);const n=new f(0,1,0),e=this.workingPlane.normal.angleTo(n),t=new f().crossVectors(this.workingPlane.normal,n).normalize();this._rotationMatrix=new L().makeRotationAxis(t,e),this.onWorkingPlaneComputed.trigger(this.workingPlane)}computeArea(){if(!(this._rotationMatrix&&this.workingPlane))return this.onAreaComputed.trigger(0),0;let n=0,e=0;const t=this._rotationMatrix,s=this.points.map(m=>{const _=m.clone().applyMatrix4(t),p=new b(_.x,_.z);return n+=p.x,e+=p.y,p}),o=Math.abs(x.area(s));return this.labelMarker.three.element.textContent=`${o.toFixed(2)} m²`,this.labelMarker.three.position.set(n/s.length,-this.workingPlane.constant,e/s.length).applyMatrix4(t.clone().invert()),this.onAreaComputed.trigger(o),o}dispose(){this.onAreaComputed.reset(),this.onWorkingPlaneComputed.reset(),this.onPointAdded.reset(),this.onPointRemoved.reset();for(const n of this._dimensionLines)n.dispose();this.labelMarker.dispose(),this._dimensionLines=[],this.points=[],this._rotationMatrix=null,this.workingPlane=null,this._defaultLineMaterial.dispose(),this.onDisposed.trigger(),this.onDisposed.reset()}get(){return{points:this.points,workingPlane:this.workingPlane,area:this.computeArea()}}}const d=class d extends S{constructor(e){super(e);i(this,"onDisposed",new h);i(this,"list",[]);i(this,"world");i(this,"_enabled",!1);i(this,"_vertexPicker");i(this,"_currentAreaElement",null);i(this,"_clickCount",0);i(this,"create",()=>{if(!this.enabled)return;if(!this.world)throw new Error("World not defined for the area measurement!");const e=this._vertexPicker.get(this.world);if(e){if(!this._currentAreaElement){const t=new F(this.components,this.world);t.onPointAdded.add(()=>{this._clickCount===3&&!t.workingPlane&&(t.computeWorkingPlane(),this._vertexPicker.workingPlane=t.workingPlane)}),t.onPointRemoved.add(()=>this._clickCount--),this._currentAreaElement=t}this._currentAreaElement.setPoint(e,this._clickCount),this._currentAreaElement.computeArea(),this._clickCount++}});i(this,"onMouseMove",()=>{if(!this.world){console.log("No world given for the area measurement!");return}const e=this._vertexPicker.get(this.world);e&&this._currentAreaElement&&(this._currentAreaElement.setPoint(e,this._clickCount),this._currentAreaElement.computeArea())});i(this,"onKeydown",e=>{this.enabled&&(e.key==="z"&&e.ctrlKey&&this._currentAreaElement&&this._currentAreaElement.removePoint(this._clickCount-1),e.key==="Enter"&&this._currentAreaElement&&this.endCreation(),e.key==="Escape"&&(this._clickCount===0&&!this._currentAreaElement?this.enabled=!1:this.cancelCreation()))});this.components.add(d.uuid,this),this._vertexPicker=new U(e)}set enabled(e){this._enabled=e,this._vertexPicker.enabled=e,this.setupEvents(e),e||this.cancelCreation()}get enabled(){return this._enabled}set workingPlane(e){this._vertexPicker.workingPlane=e}get workingPlane(){return this._vertexPicker.workingPlane}dispose(){this.setupEvents(!1),this._vertexPicker.dispose(),this._currentAreaElement&&this._currentAreaElement.dispose();for(const e of this.list)e.dispose();this.components=null,this.onDisposed.trigger(d.uuid),this.onDisposed.reset()}delete(){}deleteAll(){for(const e of this.list)e.dispose();this.list=[]}endCreation(){this._currentAreaElement&&(this.list.push(this._currentAreaElement),this._currentAreaElement.removePoint(this._clickCount),this._currentAreaElement.computeWorkingPlane(),this._currentAreaElement.computeArea(),this._currentAreaElement=null),this._vertexPicker.workingPlane=null,this._clickCount=0}cancelCreation(){this._currentAreaElement&&(this._currentAreaElement.dispose(),this._currentAreaElement=null),this._vertexPicker.workingPlane=null,this._clickCount=0}setupEvents(e){if(!this.world)throw new Error("The area measurement needs a world to work!");if(this.world.isDisposing)return;if(!this.world.renderer)throw new Error("The world of the area measurement needs a renderer!");const s=this.world.renderer.three.domElement.parentElement;e?(s.addEventListener("click",this.create),s.addEventListener("mousemove",this.onMouseMove),window.addEventListener("keydown",this.onKeydown)):(s.removeEventListener("click",this.create),s.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("keydown",this.onKeydown))}};i(d,"uuid","c453a99e-f054-4781-9060-33df617db4a5");let w=d;const g=document.getElementById("container"),l=new B,N=l.get(W),r=N.create();r.scene=new V(l);r.renderer=new T(l,g);r.camera=new G(l);l.init();r.camera.controls.setLookAt(5,5,5,0,0,0);r.scene.setup();const $=l.get(I);$.create(r);const j=new M(3,3,3),q=new C({color:"#6528D7"}),k=new y(j,q);k.position.set(0,1.5,0);r.scene.three.add(k);r.meshes.add(k);const u=new w(l);u.world=r;u.enabled=!0;g.ondblclick=()=>u.create();g.oncontextmenu=()=>u.endCreation();window.onkeydown=a=>{a.code==="Delete"||a.code};const c=new D;c.showPanel(2);document.body.append(c.dom);c.dom.style.left="0px";r.renderer.onBeforeUpdate.add(()=>c.begin());r.renderer.onAfterUpdate.add(()=>c.end());
