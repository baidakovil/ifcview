<<<<<<< Updated upstream
import"./web-ifc-api-C62xsSvk.js";import{p as y,C as b,i as S,o as B,u as E,a as k}from"./index-CTnQ5y92.js";import{B as A,E as C,b as I,g as M}from"./index-BJbcJwBt.js";import{p as x}from"./index-K5IA6oiZ.js";import{s as D}from"./index-Bt5jnqCP.js";import{S as U}from"./stats.min-BpIepu9J.js";x.init();D.init();const f=document.getElementById("container"),t=new y,z=t.get(b),e=z.create();e.scene=new S(t);e.renderer=new A(t,f);e.camera=new B(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);f.appendChild(e.renderer.three2D.domElement);const L=t.get(E);L.create(e);e.scene.three.background=null;const N=t.get(k),P=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),T=await P.arrayBuffer(),W=new Uint8Array(T),c=N.load(W);e.scene.three.add(c);const i=t.get(C);i.world=e;i.draw(c);const g=document.getElementById("scene-2d-left");g.components=t;if(!g.world)throw new Error("World not found!");const l=new I(t);l.world=g.world;l.draw(c);const a=document.getElementById("scene-2d-right");a.components=t;if(!a.world)throw new Error("World not found!");const s=t.get(M);s.world=a.world;s.draw(c);l.onMarkerChange.add(({alignment:o,percentage:d})=>{s.setMarker(o,d,"hover"),i.setMarker(o,d,"hover")});l.onHighlight.add(({mesh:o,point:d})=>{const{index:v,alignment:h}=o.curve,m=h.getPercentageAt(d,"horizontal");if(m===null)return;const{curve:n}=h.getCurveAt(m,"vertical");if(s.highlighter.select(n.mesh),s.setMarker(n.alignment,m,"select"),a.world){n.mesh.geometry.boundingSphere||n.mesh.geometry.computeBoundingSphere();const w=n.mesh.geometry.boundingSphere.clone();w.radius*=1.5,a.world.camera.controls.fitToSphere(w,!0)}i.highlighter.select(o);const p=o.curve.alignment.absolute[v];p.mesh.geometry.computeBoundingSphere();const u=p.mesh.geometry.boundingSphere;u&&e.camera.controls.fitToSphere(u,!0)});const r=new U;r.showPanel(2);document.body.append(r.dom);r.dom.style.left="0px";r.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>r.begin());e.renderer.onAfterUpdate.add(()=>r.end());
=======
import"./web-ifc-api-CwSt8Jc1.js";import{p as y,C as S,s as b,n as B,d as k,u as E}from"./index-CIBiH68K.js";import{U as A,g as C,c as U,m as I}from"./index-_0TcChOK.js";import{p as M}from"./index-K5IA6oiZ.js";import{s as x}from"./index-Of69_XoM.js";import{S as D}from"./stats.min-BpIepu9J.js";M.init();x.init();const f=document.getElementById("container"),t=new y,z=t.get(S),e=z.create();e.scene=new b(t);e.renderer=new A(t,f);e.camera=new B(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);f.appendChild(e.renderer.three2D.domElement);const L=t.get(k);L.create(e);e.scene.three.background=null;const N=t.get(E),P=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),T=await P.arrayBuffer(),W=new Uint8Array(T),c=N.load(W);e.scene.three.add(c);const i=t.get(C);i.world=e;i.draw(c);const g=document.getElementById("scene-2d-left");g.components=t;if(!g.world)throw new Error("World not found!");const l=new U(t);l.world=g.world;l.draw(c);const s=document.getElementById("scene-2d-right");s.components=t;if(!s.world)throw new Error("World not found!");const a=t.get(I);a.world=s.world;a.draw(c);l.onMarkerChange.add(({alignment:r,percentage:d})=>{a.setMarker(r,d,"hover"),i.setMarker(r,d,"hover")});l.onHighlight.add(({mesh:r,point:d})=>{const{index:v,alignment:h}=r.curve,m=h.getPercentageAt(d,"horizontal");if(m===null)return;const{curve:n}=h.getCurveAt(m,"vertical");if(a.highlighter.select(n.mesh),a.setMarker(n.alignment,m,"select"),s.world){n.mesh.geometry.boundingSphere||n.mesh.geometry.computeBoundingSphere();const w=n.mesh.geometry.boundingSphere.clone();w.radius*=1.5,s.world.camera.controls.fitToSphere(w,!0)}i.highlighter.select(r);const p=r.curve.alignment.absolute[v];p.mesh.geometry.computeBoundingSphere();const u=p.mesh.geometry.boundingSphere;u&&e.camera.controls.fitToSphere(u,!0)});const o=new D;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());
>>>>>>> Stashed changes
