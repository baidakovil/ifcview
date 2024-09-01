import{aC as l}from"./web-ifc-api-BAs6yRon.js";import{S as d}from"./stats.min-GTpOrGrX.js";import{d as m,R as a,m as i}from"./index-CqPyogbW.js";import{d as p,l as b,x as u,Y as g,b as h,h as w,C as f,v as x,w as y,P as v}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S=document.getElementById("container"),e=new p,L=e.get(b),t=L.create();t.scene=new u(e);t.renderer=new g(e,S);t.camera=new h(e);e.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const k=e.get(w);k.create(t);t.scene.three.background=null;const C=new f(e),I=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),R=await I.arrayBuffer(),B=new Uint8Array(R),s=C.load(B);t.scene.three.add(s);const E=await fetch("https://thatopen.github.io/engine_components/resources/small.json");s.setLocalProperties(await E.json());const r=e.get(x),P=await fetch("https://thatopen.github.io/engine_components/resources/small-relations.json"),U=r.getRelationsMapFromJSON(await P.text());r.setRelationMap(s,U);const j=e.get(y),A=e.get(v);await A.bySpatialStructure(s,{isolate:new Set([l])});const n=new d;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>n.begin());t.renderer.onAfterUpdate.add(()=>n.end());m.init();const o=a.create(()=>i`
    <bim-panel active label="Exploder Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
        <bim-checkbox 
          label="Explode model" 
          @change="${({target:c})=>{j.set(c.value)}}">  
        </bim-checkbox>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(o);const F=a.create(()=>i`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{o.classList.contains("options-menu-visible")?o.classList.remove("options-menu-visible"):o.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(F);
