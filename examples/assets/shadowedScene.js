import{a as d,K as c,ac as i,bd as h}from"./web-ifc-api-CBCWqdvz.js";import{S as l}from"./stats.min-BpIepu9J.js";import{p as w,C as p,i as m,a as u,H as f,u as g,h as b}from"./index-B7_GRGdn.js";const y=document.getElementById("container"),t=new w,S=t.get(p),e=S.create();e.scene=new m(t);e.renderer=new u(t,y);e.camera=new f(t);t.init();const M=t.get(g),x=M.create(e);e.camera.controls.setLookAt(1,2,-2,-2,0,-5);e.scene.three.background=null;const B=new b(t),P=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),v=await P.arrayBuffer(),A=new Uint8Array(v),s=B.load(A);e.scene.three.add(s);const n=new d(new c(15,25,1),new i({color:"white"}));n.position.set(-2,-1,-7);n.rotation.x=-Math.PI/2;n.receiveShadow=!0;e.scene.three.add(n);e.renderer.three.shadowMap.enabled=!0;e.renderer.three.shadowMap.type=h;e.scene.setup({shadows:{cascade:1,resolution:1024}});for(const r of s.children){const o=r;o.material[0].opacity===1&&(o.castShadow=!0,o.receiveShadow=!0)}e.scene.distanceRenderer.excludedObjects.add(x.three);await e.scene.updateShadows();e.camera.controls.addEventListener("update",async()=>{await e.scene.updateShadows()});const a=new l;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";a.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>a.begin());e.renderer.onAfterUpdate.add(()=>a.end());
