<<<<<<< Updated upstream
import"./web-ifc-api-C62xsSvk.js";import{S as d}from"./stats.min-BpIepu9J.js";import{p as l,C as m,i as p,n as u,k as w,u as g}from"./index-CTnQ5y92.js";import{a as h}from"./index-BJbcJwBt.js";const f=document.getElementById("container"),o=new l,y=o.get(m),e=y.create();e.scene=new p(o);e.renderer=new u(o,f);e.camera=new w(o);o.init();e.scene.setup();e.camera.controls.setLookAt(12,6,8,0,0,-10);const b=o.get(g);b.create(e);e.scene.three.background=null;const t=o.get(h);t.world=e;t.url="https://thatopen.github.io/engine_components/resources/streaming/";async function D(s,r){const c=await(await fetch(s)).json();let a;a=await(await fetch(r)).json();const i=await t.load(c,!0,a);console.log(i)}await D("https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed.json","https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed-properties.json");e.camera.controls.addEventListener("sleep",()=>{t.culler.needsUpdate=!0});t.useCache=!0;t.culler.threshold=10;t.culler.maxHiddenTime=1e3;t.culler.maxLostTime=4e4;const n=new d;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
=======
import"./web-ifc-api-CwSt8Jc1.js";import{S as d}from"./stats.min-BpIepu9J.js";import{p as l,C as m,s as p,i as u,H as w,d as g}from"./index-CIBiH68K.js";import{b as h}from"./index-_0TcChOK.js";const f=document.getElementById("container"),o=new l,b=o.get(m),e=b.create();e.scene=new p(o);e.renderer=new u(o,f);e.camera=new w(o);o.init();e.scene.setup();e.camera.controls.setLookAt(12,6,8,0,0,-10);const y=o.get(g);y.create(e);e.scene.three.background=null;const t=o.get(h);t.world=e;t.url="https://thatopen.github.io/engine_components/resources/streaming/";async function D(a,r){const c=await(await fetch(a)).json();let s;s=await(await fetch(r)).json();const i=await t.load(c,!0,s);console.log(i)}await D("https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed.json","https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed-properties.json");e.camera.controls.addEventListener("sleep",()=>{t.culler.needsUpdate=!0});t.useCache=!0;t.culler.threshold=10;t.culler.maxHiddenTime=1e3;t.culler.maxLostTime=4e4;const n=new d;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
>>>>>>> Stashed changes
