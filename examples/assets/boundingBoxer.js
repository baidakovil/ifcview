import"./web-ifc-api-BAs6yRon.js";import{S as c}from"./stats.min-GTpOrGrX.js";import{d as l,R as a,m as r}from"./index-CqPyogbW.js";import{d,l as m,x as b,Y as p,b as u,h as g,C as f,m as h}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const w=document.getElementById("container"),t=new d,y=t.get(m),e=y.create();e.scene=new b(t);e.renderer=new p(t,w);e.camera=new u(t);t.init();e.camera.controls.setLookAt(12,6,8,0,0,-10);e.scene.setup();const x=t.get(g);x.create(e);e.scene.three.background=null;const B=t.get(f),v=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),k=await v.arrayBuffer(),L=new Uint8Array(k),i=B.load(L);e.scene.three.add(i);const s=t.get(h);s.add(i);const A=s.getMesh();s.reset();const n=new c;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";n.dom.style.zIndex="unset";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());l.init();const o=a.create(()=>r`
    <bim-panel active label="Bounding Boxes Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
         
        <bim-button 
          label="Fit BIM model" 
          @click="${()=>{e.camera.controls.fitToSphere(A,!0)}}">  
        </bim-button>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(o);const C=a.create(()=>r`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{o.classList.contains("options-menu-visible")?o.classList.remove("options-menu-visible"):o.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(C);
