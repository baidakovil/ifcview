import{z as m}from"./web-ifc-api-BAs6yRon.js";import{S as b}from"./stats.min-GTpOrGrX.js";import{d as u,R as i,m as c}from"./index-CqPyogbW.js";import{d as f,l as w,x as g,Y as h,b as y,h as x,C as k,i as I}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L=document.getElementById("container"),t=new f,U=t.get(w),e=U.create();e.scene=new g(t);e.renderer=new h(t,L);e.camera=new y(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const v=t.get(x);v.create(e);e.scene.three.background=null;const B=new k(t),O=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),R=await O.arrayBuffer(),S=new Uint8Array(R),A=B.load(S);e.scene.three.add(A);const j=t.get(I),a=new m;a.SetWasmPath("https://unpkg.com/web-ifc@0.0.57/",!0);await a.Init();const C=await fetch("https://thatopen.github.io/engine_components/resources/small.ifc"),E=await C.arrayBuffer(),F=new Uint8Array(E),z=a.OpenModel(F),n=new b;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());u.init();const s=i.create(()=>c`
  <bim-panel active label="IFC-JSON Exporter Tutorial" class="options-menu">
   <bim-panel-section collapsed label="Controls">
      <bim-panel-section style="padding-top: 10px;">
        <bim-button 
          label="Export properties JSON" 
          @click="${async()=>{const l=await j.export(a,z),p=JSON.stringify(l),d=new File([new Blob([p])],"properties.json"),r=URL.createObjectURL(d),o=document.createElement("a");o.download="properties.json",o.href=r,o.click(),URL.revokeObjectURL(r),o.remove()}}">  
        </bim-button>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(s);const D=i.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{s.classList.contains("options-menu-visible")?s.classList.remove("options-menu-visible"):s.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(D);
