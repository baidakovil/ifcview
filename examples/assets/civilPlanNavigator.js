import"./web-ifc-api-5J0YW9AE.js";import{p,C as g,s as h,n as f,d as u,h as w}from"./index-Di1uyhVc.js";import{U as y,E as b,b as v}from"./index-D_L3MNGv.js";import{m as B}from"./index-tywNknxv.js";import{r as E}from"./index-B9pl4CH5.js";import{S}from"./stats.min-BpIepu9J.js";B.init();E.init();const i=document.getElementById("container"),t=new p,U=t.get(g),e=U.create();e.scene=new h(t);e.renderer=new y(t,i);e.camera=new f(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);i.appendChild(e.renderer.three2D.domElement);const x=t.get(u);x.create(e);e.scene.three.background=null;const A=t.get(w),C=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),I=await C.arrayBuffer(),k=new Uint8Array(I),r=A.load(k);e.scene.three.add(r);const a=t.get(b);a.world=e;a.draw(r);const m=document.getElementById("scene-2d"),s=t.get(v);m.components=t;s.world=m.world;await s.draw(r);s.onHighlight.add(({mesh:o})=>{a.highlighter.select(o);const l=o.curve.index,d=o.curve.alignment.absolute[l];d.mesh.geometry.computeBoundingSphere();const c=d.mesh.geometry.boundingSphere;c&&e.camera.controls.fitToSphere(c,!0)});const n=new S;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
