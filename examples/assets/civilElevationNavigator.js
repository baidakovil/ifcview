import"./web-ifc-api-D3oDn2HF.js";import{a as y,W as S,S as b,O as C,G as B,F as E}from"./index-DPB0U-mi.js";import{R as k,b as A,c as D,d as M}from"./index-B7gYOE6O.js";import{p as N}from"./index-K5IA6oiZ.js";import{s as W}from"./index-B7WrRpEN.js";import{S as I}from"./stats.min-DDrWCSVO.js";N.init();W.init();const f=document.getElementById("container"),t=new y,P=t.get(S),e=P.create();e.scene=new b(t);e.renderer=new k(t,f);e.camera=new C(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);f.appendChild(e.renderer.three2D.domElement);const x=t.get(B);x.create(e);e.scene.three.background=null;const R=t.get(E),U=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),z=await U.arrayBuffer(),F=new Uint8Array(z),i=R.load(F);e.scene.three.add(i);const c=t.get(A);c.world=e;c.draw(i);const g=document.getElementById("scene-2d-left");g.components=t;if(!g.world)throw new Error("World not found!");const l=new D(t);l.world=g.world;l.draw(i);const a=document.getElementById("scene-2d-right");a.components=t;if(!a.world)throw new Error("World not found!");const s=t.get(M);s.world=a.world;s.draw(i);l.onMarkerChange.add(({alignment:r,percentage:d})=>{s.setMarker(r,d,"hover"),c.setMarker(r,d,"hover")});l.onHighlight.add(({mesh:r,point:d})=>{const{index:v,alignment:h}=r.curve,m=h.getPercentageAt(d,"horizontal");if(m===null)return;const{curve:n}=h.getCurveAt(m,"vertical");if(s.highlighter.select(n.mesh),s.setMarker(n.alignment,m,"select"),a.world){n.mesh.geometry.boundingSphere||n.mesh.geometry.computeBoundingSphere();const w=n.mesh.geometry.boundingSphere.clone();w.radius*=1.5,a.world.camera.controls.fitToSphere(w,!0)}c.highlighter.select(r);const p=r.curve.alignment.absolute[v];p.mesh.geometry.computeBoundingSphere();const u=p.mesh.geometry.boundingSphere;u&&e.camera.controls.fitToSphere(u,!0)});const o=new I;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());
