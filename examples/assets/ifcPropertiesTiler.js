import"./web-ifc-api-D3oDn2HF.js";import{S as b}from"./stats.min-DDrWCSVO.js";import{p as g,J as f,m as u}from"./index-K5IA6oiZ.js";import{a as w,W as y,S as h,c as S,b as B,G as F,F as I,l as L,I as R}from"./index-DPB0U-mi.js";const U=document.getElementById("container"),s=new w,k=s.get(y),n=k.create();n.scene=new h(s);n.renderer=new S(s,U);n.camera=new B(s);s.init();n.camera.controls.setLookAt(12,6,8,0,0,-10);n.scene.setup();const x=s.get(F);x.create(n);n.scene.three.background=null;const v=new I(s),P=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),A=await P.arrayBuffer(),j=new Uint8Array(A),C=v.load(j);n.scene.three.add(C);function J(e,o){const t=new File([o],e),a=document.createElement("a"),p=URL.createObjectURL(t);a.href=p,a.download=t.name,a.click(),URL.revokeObjectURL(p)}async function O(e){for(const{name:o,bits:t}of e)J(o,t),await new Promise(a=>{setTimeout(a,100)})}const c=s.get(L);c.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.53/",absolute:!0};const r={types:{},ids:{},indexesFile:"small.ifc-processed-properties-indexes"};let l=0;const d=[];c.onPropertiesStreamed.add(async e=>{r.types[e.type]||(r.types[e.type]=[]),r.types[e.type].push(l);for(const a in e.data)r.ids[a]=l;const o=`small.ifc-processed-properties-${l}`,t=new Blob([JSON.stringify(e.data)]);d.push({bits:t,name:o}),l++});c.onProgress.add(async e=>{console.log(e)});c.onIndicesStreamed.add(async e=>{d.push({name:"small.ifc-processed-properties.json",bits:new Blob([JSON.stringify(r)])});const t=s.get(R).serializeRelations(e);d.push({name:"small.ifc-processed-properties-indexes",bits:new Blob([t])}),await O(d)});async function T(){const o=await(await fetch("https://thatopen.github.io/engine_components/resources/small.ifc")).arrayBuffer(),t=new Uint8Array(o);await c.streamFromBuffer(t)}const i=new b;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";n.renderer.onBeforeUpdate.add(()=>i.begin());n.renderer.onAfterUpdate.add(()=>i.end());g.init();const m=f.create(()=>u`
  <bim-panel active label="Property Tiles Tutorial" class="options-menu">
   <bim-panel-section collapsed label="Controls">
      
      <bim-panel-section style="padding-top: 12px;">
      
        <bim-button label="Load IFC"
          @click="${()=>{T()}}">
        </bim-button>  
      
      </bim-panel-section>
      
    </bim-panel>
  `);document.body.append(m);const z=f.create(()=>u`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{m.classList.contains("options-menu-visible")?m.classList.remove("options-menu-visible"):m.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(z);
