import{r as i,S as l}from"./web-ifc-api-BAs6yRon.js";import{d as p,l as h,x as m,b as f,h as g,C as u,a as w}from"./index-crgZK0po.js";import{S as b}from"./stats.min-GTpOrGrX.js";import{r as y,J as S}from"./index-BelrnDHb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=document.getElementById("container"),t=new p,U=t.get(h),e=U.create();e.scene=new m(t);e.renderer=new y(t,d);e.camera=new f(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);d.appendChild(e.renderer.three2D.domElement);const x=t.get(g);x.create(e);e.scene.three.background=null;const v=t.get(u),A=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),B=await A.arrayBuffer(),C=new Uint8Array(B),r=await v.load(C);e.scene.three.add(r);const E=await fetch("https://thatopen.github.io/engine_components/resources/road.json");r.setLocalProperties(await E.json());const a=t.get(S);a.world=e;a.draw(r);const I=t.get(w),s=I.create(e);s.threshold=10;for(const o of r.children)o instanceof i&&s.add(o);s.needsUpdate=!0;e.camera.controls.addEventListener("sleep",()=>{s.needsUpdate=!0});const c=new l(void 0,20);a.onHighlight.add(({point:o})=>{c.center.copy(o),e.camera.controls.fitToSphere(c,!0)});const n=new b;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
