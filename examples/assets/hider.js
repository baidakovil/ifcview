import{aC as S}from"./web-ifc-api-BAs6yRon.js";import{S as k}from"./stats.min-GTpOrGrX.js";import{d as x,R as r,m as l}from"./index-CqPyogbW.js";import{d as v,l as C,x as I,Y as F,b as L,h as $,C as j,v as R,I as B,P as E}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M=document.getElementById("container"),e=new v,N=e.get(C),t=N.create();t.scene=new I(e);t.renderer=new F(e,M);t.camera=new L(e);e.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const O=e.get($);O.create(t);t.scene.three.background=null;const b=e.get(j),P=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),U=await P.arrayBuffer(),_=new Uint8Array(U),i=b.load(_);t.scene.three.add(i);const A=await fetch("https://thatopen.github.io/engine_components/resources/small.json");i.setLocalProperties(await A.json());const p=e.get(R),Y=await fetch("https://thatopen.github.io/engine_components/resources/small-relations.json"),q=p.getRelationsMapFromJSON(await Y.text());p.setRelationMap(i,q);const f=e.get(B),o=e.get(E);o.byEntity(i);await o.bySpatialStructure(i,{isolate:new Set([S])});const a=new k;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";a.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>a.begin());t.renderer.onAfterUpdate.add(()=>a.end());x.init();const g={},D=Object.keys(o.list.spatialStructures);for(const n of D)g[n]=!0;const h={},T=Object.keys(o.list.entities);for(const n of T)h[n]=!0;const s=r.create(()=>l`
    <bim-panel active label="Hider Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
      
      <bim-panel-section collapsed label="Floors" name="Floors"">
      </bim-panel-section>
      
      <bim-panel-section collapsed label="Categories" name="Categories"">
      </bim-panel-section>
      
    </bim-panel>
  `);document.body.append(s);const z=s.querySelector("bim-panel-section[name='Floors']"),G=s.querySelector("bim-panel-section[name='Categories']");for(const n in g){const m=r.create(()=>l`
      <bim-checkbox checked label="${n}"
        @change="${({target:d})=>{const c=o.list.spatialStructures[n];if(c&&c.id!==null)for(const[J,u]of b.groups){const w=p.getEntityChildren(u,c.id),y=u.getFragmentMap(w);f.set(d.value,y)}}}">
      </bim-checkbox>
    `);z.append(m)}for(const n in h){const m=r.create(()=>l`
      <bim-checkbox checked label="${n}"
        @change="${({target:d})=>{const c=o.find({entities:[n]});f.set(d.value,c)}}">
      </bim-checkbox>
    `);G.append(m)}const H=r.create(()=>l`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{s.classList.contains("options-menu-visible")?s.classList.remove("options-menu-visible"):s.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(H);
