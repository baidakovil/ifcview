import{B as c,M as d,a as l}from"./web-ifc-api-CgBULNZm.js";import{S as m}from"./stats.min-GTpOrGrX.js";import{o as i,a as w,L as p,N as u,l as b}from"./index-C11PlHsI.js";import{$ as f,J as g}from"./index-DoGS-bU7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const a=document.getElementById("container"),n=new i,y=n.get(w),e=y.create();e.scene=new p(n);e.renderer=new f(n,a);e.camera=new u(n);n.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const h=n.get(b);h.create(e);e.scene.three.background=null;const k=new c(3,3,3),B=new d({color:"#6528D7"}),s=new l(k,B);s.position.set(0,1.5,0);e.scene.three.add(s);e.meshes.add(s);const t=n.get(g);t.world=e;t.enabled=!0;a.ondblclick=()=>t.create();a.oncontextmenu=()=>t.endCreation();window.onkeydown=r=>{(r.code==="Delete"||r.code==="Backspace")&&t.deleteAll()};const o=new m;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());
