import"./web-ifc-api-CfQNUy7g.js";import{S as l}from"./stats.min-BpIepu9J.js";import{p as i,C as m,i as p,n as u,W as w,d as f}from"./index-CrrO1BJs.js";import{x as h}from"./index-BREiuDZQ.js";const g=document.getElementById("container"),a=new i,y=a.get(m),e=y.create();e.scene=new p(a);e.renderer=new u(a,g);e.camera=new w(a);a.init();e.scene.setup();e.camera.controls.setLookAt(12,6,8,0,0,-10);const x=a.get(f);x.create(e);e.scene.three.background=null;const t=a.get(h);t.world=e;t.dbCleaner.enabled=!0;t.url="../../../../../resources/streaming/";async function D(s,n){const c=await(await fetch(s)).json();let r;r=await(await fetch(n)).json();const d=await t.load(c,!0,r);console.log(d)}await D("../../../../../resources/streaming/small.ifc-processed.json","../../../../../resources/streaming/small.ifc-processed-properties.json");e.camera.controls.addEventListener("sleep",()=>{t.culler.needsUpdate=!0});t.useCache=!0;t.culler.threshold=10;t.culler.maxHiddenTime=1e3;t.culler.maxLostTime=3e3;const o=new l;o.showPanel(2);document.body.append(o.dom);o.dom.style.left="0px";o.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>o.begin());e.renderer.onAfterUpdate.add(()=>o.end());
