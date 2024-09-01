import{B as b,M as d,a as m}from"./web-ifc-api-BAs6yRon.js";import{S as p}from"./stats.min-GTpOrGrX.js";import{d as u,l as h,x as w,b as k,h as g}from"./index-crgZK0po.js";import{d as f,R as a,m as c}from"./index-CqPyogbW.js";import{e as D,f as x}from"./index-BelrnDHb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=document.getElementById("container"),t=new u,y=t.get(h),e=y.create();e.scene=new w(t);e.renderer=new D(t,r);e.camera=new k(t);t.init();e.camera.controls.setLookAt(5,5,5,0,0,0);e.scene.setup();const v=t.get(g);v.create(e);e.scene.three.background=null;const M=new b(3,3,3),$=new d({color:"#6528D7"}),i=new m(M,$);i.position.set(0,1.5,0);e.scene.three.add(i);e.meshes.add(i);const n=t.get(x);n.world=e;n.enabled=!0;n.snapDistance=1;r.ondblclick=()=>n.create();window.onkeydown=o=>{(o.code==="Delete"||o.code==="Backspace")&&n.delete()};const s=new p;s.showPanel(2);document.body.append(s.dom);s.dom.style.left="0px";s.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>s.begin());e.renderer.onAfterUpdate.add(()=>s.end());f.init();const l=a.create(()=>c`
  <bim-panel active label="Length Measurement Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
          <bim-label>Create dimension: Double click</bim-label>  
          <bim-label>Delete dimension: Delete</bim-label>  
      </bim-panel-section>
      
      <bim-panel-section collapsed label="Others">
        <bim-checkbox checked label="Dimensions enabled" 
          @change="${({target:o})=>{n.enabled=o.value}}">  
        </bim-checkbox>       
        <bim-checkbox checked label="Dimensions visible" 
          @change="${({target:o})=>{n.visible=o.value}}">  
        </bim-checkbox>  
        
        <bim-color-input 
          label="Dimensions Color" color="#202932" 
          @input="${({target:o})=>{n.color.set(o.color)}}">
        </bim-color-input>
        
        <bim-button label="Delete all"
          @click="${()=>{n.deleteAll()}}">
        </bim-button>

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(l);const B=a.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{l.classList.contains("options-menu-visible")?l.classList.remove("options-menu-visible"):l.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(B);
