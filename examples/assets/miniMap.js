import"./web-ifc-api-BAs6yRon.js";import{S as d}from"./stats.min-GTpOrGrX.js";import{d as b,R as m,m as c}from"./index-CqPyogbW.js";import{d as p,l as u,x as f,Y as g,b as h,h as v,C as x,O as y}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z=document.getElementById("container"),o=new p,w=o.get(u),t=w.create();t.scene=new f(o);t.renderer=new g(o,z);t.camera=new h(o);t.scene.setup();o.init();const $=o.get(v);$.create(t);t.camera.controls.setLookAt(1,2,-2,-2,0,-5);t.scene.three.background=null;const k=new x(o),S=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),B=await S.arrayBuffer(),L=new Uint8Array(B),C=k.load(L);t.scene.three.add(C);const E=new y(o),e=E.create(t),O=document.getElementById("minimap"),l=e.renderer.domElement;l.style.borderRadius="12px";O.append(l);e.resize();const a=new d;a.showPanel(2);document.body.append(a.dom);a.dom.style.left="0px";a.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>a.begin());t.renderer.onAfterUpdate.add(()=>a.end());b.init();const r=e.getSize(),i=m.create(()=>c`
    <bim-panel label="Minimap Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
      
        <bim-checkbox checked="true" label="Enabled" 
          @change="${({target:n})=>{e.enabled=n.value}}">  
        </bim-checkbox>
        
        <bim-checkbox checked label="Lock rotation" 
          @change="${({target:n})=>{e.lockRotation=n.value}}">  
        </bim-checkbox>
        
        <bim-number-input 
          slider label="Zoom" value="${e.zoom}" min="0.01" max="0.5" step="0.01" 
          @change="${({target:n})=>{e.zoom=n.value}}">
        </bim-number-input>
        
        <bim-number-input 
          slider label="Front offset" value="${e.frontOffset}" min="0" max="5" step="1" 
          @change="${({target:n})=>{e.frontOffset=n.value}}">
        </bim-number-input>
                
        <div style="display: flex; gap: 12px">
        
          <bim-number-input slider value="${r.x}" pref="Size X" min="100" max="500" step="10"              
            @change="${({target:n})=>{const s=e.getSize();s.x=n.value,e.resize(s)}}">
          </bim-number-input>        
        
          <bim-number-input slider value="${r.y}" pref="Size Y" min="100" max="500" step="10"            
            @change="${({target:n})=>{const s=e.getSize();s.y=n.value,e.resize(s)}}">
          </bim-number-input>
        </div>
  
        
      </bim-panel-section>
    </bim-panel>
    `);document.body.append(i);const R=m.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{i.classList.contains("options-menu-visible")?i.classList.remove("options-menu-visible"):i.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(R);
