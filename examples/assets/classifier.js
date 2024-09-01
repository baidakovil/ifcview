import{a2 as d,C as m}from"./web-ifc-api-BAs6yRon.js";import{S as u}from"./stats.min-GTpOrGrX.js";import{d as b,R as a,m as c}from"./index-CqPyogbW.js";import{d as p,l as C,x as f,Y as w,b as I,h as g,C as y,P as A}from"./index-crgZK0po.js";import"./_commonjsHelpers-Cpj98o6Y.js";const E=document.getElementById("container"),s=new p,L=s.get(C),t=L.create();t.scene=new f(s);t.renderer=new w(s,E);t.camera=new I(s);s.init();t.camera.controls.setLookAt(12,6,8,0,0,-10);t.scene.setup();const R=s.get(g);R.create(t);t.scene.three.background=null;const h=new y(s),F=await fetch("https://thatopen.github.io/engine_components/resources/small.frag"),S=await F.arrayBuffer(),T=new Uint8Array(S),l=h.load(T);t.scene.three.add(l);const o=s.get(A);o.byEntity(l);o.byIfcRel(l,d,"storeys");o.byModel(l.uuid,l);const $=o.find({entities:["IFCWALLSTANDARDCASE"]}),N=o.find({entities:["IFCSLAB"]}),U=o.find({entities:["IFCMEMBER","IFCPLATE"]}),v=o.find({entities:["IFCFURNISHINGELEMENT"]}),B=o.find({entities:["IFCDOOR"]}),D=o.find({models:[l.uuid]}),i=new u;i.showPanel(2);document.body.append(i.dom);i.dom.style.left="0px";i.dom.style.zIndex="unset";t.renderer.onBeforeUpdate.add(()=>i.begin());t.renderer.onAfterUpdate.add(()=>i.end());b.init();const e=new m,r=a.create(()=>c`
    <bim-panel active label="Classifier Tutorial" class="options-menu">
      <bim-panel-section collapsed label="Controls">
      
        <bim-color-input 
          label="Walls Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor($,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Slabs Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(N,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Curtain walls Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(U,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Furniture Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(v,e)}}">
        </bim-color-input>
      
        <bim-color-input 
          label="Doors Color" color="#202932" 
          @input="${({target:n})=>{e.set(n.color),o.setColor(B,e)}}">
        </bim-color-input>
                  
        <bim-button 
          label="Reset walls color" 
          @click="${()=>{o.resetColor(D)}}">  
        </bim-button>  

      </bim-panel-section>
    </bim-panel>
    `);document.body.append(r);const P=a.create(()=>c`
      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
        @click="${()=>{r.classList.contains("options-menu-visible")?r.classList.remove("options-menu-visible"):r.classList.add("options-menu-visible")}}">
      </bim-button>
    `);document.body.append(P);
