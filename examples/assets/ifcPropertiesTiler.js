import"./web-ifc-api-BAs6yRon.js";import{S as b}from"./stats.min-GTpOrGrX.js";import{d as w,R as f,m as u}from"./index-CqPyogbW.js";import{d as y,l as g,x as h,Y as B,b as U,h as F,C as L,U as v,v as x}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R=document.getElementById("container"),n=new y,S=n.get(g),s=S.create();s.scene=new h(n);s.renderer=new B(n,R);s.camera=new U(n);n.init();s.camera.controls.setLookAt(12,6,8,0,0,-10);s.scene.setup();const k=n.get(F);k.create(s);s.scene.three.background=null;const I=new L(n),A=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),P=await A.arrayBuffer(),j=new Uint8Array(P),C=I.load(j);s.scene.three.add(C);function O(e,o){const t=new File([o],e),a=document.createElement("a"),p=URL.createObjectURL(t);a.href=p,a.download=t.name,a.click(),URL.revokeObjectURL(p)}async function $(e){for(const{name:o,bits:t}of e)O(o,t),await new Promise(a=>{setTimeout(a,100)})}const c=n.get(v);c.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.57/",absolute:!0};const r={types:{},ids:{},indexesFile:"small.ifc-processed-properties-indexes"};let l=0;const d=[];c.onPropertiesStreamed.add(async e=>{r.types[e.type]||(r.types[e.type]=[]),r.types[e.type].push(l);for(const a in e.data)r.ids[a]=l;const o=`small.ifc-processed-properties-${l}`,t=new Blob([JSON.stringify(e.data)]);d.push({bits:t,name:o}),l++});c.onProgress.add(async e=>{console.log(e)});c.onIndicesStreamed.add(async e=>{d.push({name:"small.ifc-processed-properties.json",bits:new Blob([JSON.stringify(r)])});const t=n.get(x).serializeRelations(e);d.push({name:"small.ifc-processed-properties-indexes",bits:new Blob([t])}),await $(d)});async function z(){const o=await(await fetch("https://thatopen.github.io/engine_components/resources/small.ifc")).arrayBuffer(),t=new Uint8Array(o);await c.streamFromBuffer(t)}const i=new b;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";s.renderer.onBeforeUpdate.add(()=>i.begin());s.renderer.onAfterUpdate.add(()=>i.end());w.init();const m=f.create(()=>u`
  <bim-panel active label="Property Tiles Tutorial" class="options-menu">
   <bim-panel-section collapsed label="Controls">
      
      <bim-panel-section style="padding-top: 12px;">
      
        <bim-button label="Load IFC"
          @click="${()=>{z()}}">
        </bim-button>  
      
      </bim-panel-section>
      
    </bim-panel>
  `);document.body.append(m);const T=f.create(()=>u`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{m.classList.contains("options-menu-visible")?m.classList.remove("options-menu-visible"):m.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(T);
