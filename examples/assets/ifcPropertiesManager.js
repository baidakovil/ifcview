import{bd as a}from"./web-ifc-api-BAs6yRon.js";import{C as f,I as u,c as w,U as m}from"./index-Bh8Z007K.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=new f,l=s.get(u);await l.setup();const p=await fetch("https://thatopen.github.io/engine_components/resources/small.ifc"),i=await p.arrayBuffer(),e=await l.load(new Uint8Array(i)),t=s.get(w),{pset:r}=await t.newPset(e,"CalculatedQuantities"),d=await t.newSingleNumericProperty(e,"IfcReal","Volume",12.25);await t.addPropToPset(e,r.expressID,d.expressID);await t.addElementToPset(e,r.expressID,186);const n=await e.getProperties(186);n&&(n.Name.value="New Wall Name",await t.setData(e,n));const I=new a.IfcTask(new a.IfcGloballyUniqueId(m.create()),null,null,null,null,null,null,null,null,new a.IfcBoolean(!1),null,null,null);await t.setData(e,I);const U=await t.saveToIfc(e,new Uint8Array(i)),c=new File([U],"small-modified.ifc"),o=document.createElement("a");o.href=URL.createObjectURL(c);o.download=c.name;URL.revokeObjectURL(o.href);
