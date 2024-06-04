import{b0 as b,b1 as u,b2 as f}from"./web-ifc-api-D3oDn2HF.js";import{p as g,J as m,m as p}from"./index-K5IA6oiZ.js";import{S as w}from"./stats.min-DDrWCSVO.js";import{a as I,W as C,S as y,c as F,b as L,G as N,F as R,g as h}from"./index-DPB0U-mi.js";const E=document.getElementById("container"),o=new I,O=o.get(C),t=O.create();t.scene=new y(o);t.renderer=new F(o,E);t.camera=new L(o);o.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const x=o.get(N);x.create(t);t.scene.three.background=null;const a=o.get(R),c=o.get(h);await c.setup();const k=[b,u,f];for(const e of k)c.settings.excludedCategories.add(e);c.settings.webIfc.COORDINATE_TO_ORIGIN=!0;async function S(){const n=await(await fetch("https://thatopen.github.io/engine_components/resources/small.ifc")).arrayBuffer(),r=new Uint8Array(n),l=await c.load(r);l.name="example",t.scene.three.add(l)}a.onFragmentsLoaded.add(e=>{console.log(e)});function d(e){const n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=e.name,document.body.appendChild(n),n.click(),n.remove()}async function v(){if(!a.groups.size)return;const e=Array.from(a.groups.values())[0],n=a.export(e);d(new File([new Blob([n])],"small.frag"));const r=e.getLocalProperties();r&&d(new File([JSON.stringify(r)],"small.json"))}function A(){a.dispose()}const s=new w;s.showPanel(2);document.body.append(s.dom);s.dom.style.left="0px";s.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>s.begin());t.renderer.onAfterUpdate.add(()=>s.end());g.init();const i=m.create(()=>p`
  <bim-panel active label="IFC Loader Tutorial" class="options-menu">
    <bim-panel-section collapsed label="Controls">
      <bim-panel-section style="padding-top: 12px;">
      
        <bim-button label="Load IFC"
          @click="${()=>{S()}}">
        </bim-button>  
            
        <bim-button label="Export fragments"
          @click="${()=>{v()}}">
        </bim-button>  
            
        <bim-button label="Dispose fragments"
          @click="${()=>{A()}}">
        </bim-button>
      
      </bim-panel-section>
      
    </bim-panel>
  `);document.body.append(i);const B=m.create(()=>p`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{i.classList.contains("options-menu-visible")?i.classList.remove("options-menu-visible"):i.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(B);
